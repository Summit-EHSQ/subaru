"""Build the reviewable Supplier NCR target contract from preserved baseline evidence."""
from pathlib import Path
import csv
import json
import re
import xml.etree.ElementTree as ET
import hashlib

ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / 'docs/phase 2/non-conformance-management'
OUT = BASE / 'solution_specification'
PACKAGE = ROOT / 'ootb_config_packages/Supplier NCR Extract(v1.0.0.0).ipack'
REVIEW_DATE = '2026-11-12'

def walk(v):
    if isinstance(v, dict):
        yield v
        for x in v.values(): yield from walk(x)
    elif isinstance(v, list):
        for x in v: yield from walk(x)

def readcsv(name):
    with (BASE / 'ootb-supplier-ncr-baseline-model' / name).open(encoding='utf-8-sig') as f:
        return list(csv.DictReader(f))

nodes = {n['RecordId']: n for n in walk(json.loads(PACKAGE.read_text(encoding='utf-8-sig'))) if n.get('RecordId')}
objects = readcsv('object-inventory.csv')
fields = readcsv('field-inventory.csv')
relations = {r['field_stable_metadata_id']: r for r in readcsv('relationship-register.csv')}
model = {}

def obj(name, purpose, parent='None', internal=None, classification='Proposed'):
    model[name] = dict(purpose=purpose, parent=parent, internal=internal or re.sub(r'\W+', '_', name), classification=classification, fields=[], seeds=[])

def row(o, name, typ, req='N', default='None', edit='Authorized internal editor; editable while record is open', life='Audited; retained with governing NCR'):
    model[o]['fields'].append([name,typ,req,default,edit,life])

def ref(o,n,t,req='N',inverse='disabled',edit=None,life=None,cat=False,default='None'):
    cat = cat or t in ('Supplier Management Role', 'Shared Visibility Classification')
    if cat and edit:
        edit += '; active values only for new selection; retain historical inactive references'
    row(o,n,f'M:1 to {t}; many to '+('exactly one' if req=='Y' else 'zero or one')+f'; inverse {inverse}',req,default,edit or ('Administrator; active values only for new selection; retain inactive historical values' if cat else 'Authorized editor within the same NCR and supplier scope'),life or 'Validate scope on every write; audit relationship changes')

def text(o,n,req='N',edit=None,life=None,default='None',length=4000):
    row(o,n,f'Text, max {length}',req,default,edit or 'Assigned participant; editable in its draft or returned stage',life or 'Audited; preserve prior submitted values through native audit')

def stamp(o,n,mechanism):
    row(o,n,'Date/Time; timezone enabled','N','NULL','Read only',mechanism)

def grid(o,n,source,field):
    row(o,n,f'Inverse 1:M grid from {source}.{field}','N','None','Read only; security-filtered navigation','Navigation over the named reference; no duplicate stored relationship')

def catalogue(name,purpose,seeds=()):
    obj(name,purpose)
    text(name,'Code','Y','Administrator; stable after first use','Unique within catalogue; non-localizable',length=100)
    text(name,'Name','Y','Administrator; localizable','Localizable catalogue and Name field',length=255)
    row(name,'Active?','Yes/No','Y','TRUE','Administrator','FALSE prevents new selection; preserves existing references')
    row(name,'Sort','Float; precision/scale tenant validation required','N','None','Administrator','Presentation order only')
    model[name]['seeds'] = list(seeds)

# Preserve every exported object in a separately labelled inherited/dependency contract.
for o in objects:
    parent = next((x['display_name'] for x in objects if x['internal_name']==o['parent_internal_name']), 'None')
    obj(o['display_name'],'Existing package object; baseline declaration retained',parent,o['internal_name'],'Extracted; unchanged unless a supplier-scoped override is specified')
    model[o['display_name']]['stable_id']=o['stable_metadata_id']
    model[o['display_name']]['source']=o['source_path']
    model[o['display_name']]['system']=o['is_system']
    model[o['display_name']]['abstract']=o['is_abstract']
for o in readcsv('controlled-lookup-inventory.csv'):
    obj(o['display_name'],'Legacy NCR type lookup; read-only historical authority pending mapped replacement','Unresolved',o['internal_name'],'Extracted')
    model[o['display_name']]['stable_id']=o['stable_metadata_id']
    model[o['display_name']]['source']=o['source_path']
    model[o['display_name']]['system']='Unresolved; lookup metadata not exported'
    model[o['display_name']]['abstract']='Unresolved'
for f in sorted(fields,key=lambda x:(x['owner_display_name'],x['field_internal_name'])):
    fd=nodes[f['stable_metadata_id']].get('FieldData',{})
    typ=f['type']
    if f['field_kind']=='Reference':
        r=relations[f['stable_metadata_id']]
        typ=f"Reference to {r['target_object']}; {r['cardinality']}; inverse " + (r['reverse_property'] or 'not exported') + '; ' + r['classification']
        if f['field_internal_name'] == 'ParentEvent':
            typ='M:1 to Event; many to zero or one; inverse Subs; Inferred from declaring IsStartOfRelation=true and the paired Subs foreign-key metadata; corrects target orientation only'
    elif typ=='Text': typ+=f"; max length {fd.get('MaxLength') if fd.get('MaxLength') is not None else 'not exported'}"
    elif typ=='Date and Time': typ+=f"; TimeZoneCapture={fd.get('TimeZoneCapture')}"
    elif typ in ('Float','Number'): typ+=f"; precision={fd.get('Precision')}; scale={fd.get('Scale')} (null means unspecified)"
    def xml_desc(raw):
        if not raw: return 'None'
        try:
            e=ET.fromstring(raw)
            vals=[x.text for x in e.iter() if x.tag.rsplit('}',1)[-1] in ('Expression','Value','StartValue','IncrementStep') and x.text]
            return '; '.join(vals) or 'Exported value generator: '+e.attrib.get('{http://www.w3.org/2001/XMLSchema-instance}type','unresolved')
        except ET.ParseError: return 'Unresolved serialized expression; inspect package'
    calc=xml_desc(fd.get('Calculation'))
    default=('Calculation: '+calc) if calc!='None' else xml_desc(fd.get('DefaultValue'))
    edit=('Metadata read only' if fd.get('IsReadOnly') else 'Metadata editable')+'; effective stage/field ACL and form visibility require tenant verification'
    if fd.get('FilterExpression'): edit+='; exported filter retained in package; scope dependencies require verification'
    life=f"Existing configuration; `{f['field_internal_name']}`; `{f['stable_metadata_id']}`; `{f['source_path']}`"
    if fd.get('IsReadOnly') and default=='None': life+='; population mechanism unresolved (G-12)'
    row(f['owner_display_name'],f['display_name'],typ,'Y' if fd.get('IsRequired') else 'N',default,edit,life)

catalogue('Supplier Issue Type','Governed replacement for new-case NCR Type selection',[
    ('PIR','PIR',True,10),('WCAR','WCAR',True,20),('SUPPLIER_REPORTED','Supplier-Reported Problem',True,30),('PILOT_FAILURE','Pilot Inspection Failure',False,40)])
catalogue('Supplier Issue Subtype','Type-specific governed subtype; business values unresolved')
ref('Supplier Issue Subtype','Issue Type','Supplier Issue Type','Y',cat=True)
catalogue('Supplier Response Tier','Risk-controlled response depth',[
    ('QUICK','Quick Feedback',True,10),('CONTAINMENT','Containment',True,20),('PRC','PRC',True,30)])
catalogue('Supplier Risk Option','Allowed answers for four risk inputs; exact controlled form values remain G-01')
text('Supplier Risk Option','Input Code','Y','Administrator; one of RESPONSIBILITY, VEHICLE_IMPACT, REPORTING_AREA, RECURRENCE','Configuration validation; never display-label comparison',length=100)
row('Supplier Risk Option','Points','Float; precision/scale unresolved G-01','Conditional','None','Administrator before first case use; required only when controlled form defines a numeric answer; immutable after use','Scoring disabled until G-01 resolved; changed scoring uses new option records and a reviewed configuration revision')
catalogue('Disposition Category','Disposition rules; initial production values and RMA flags remain G-06')
row('Disposition Category','RMA Required?','Yes/No','Y','FALSE','Administrator before first disposition use; immutable after use','Changed RMA behavior requires a new category record/code and reviewed configuration revision; old references retain their meaning')
catalogue('Warranty Response Outcome','Outcome controls warranty analysis applicability',[
    ('ANALYSIS','Analysis Required',True,10),('NTF','No Trouble Found',True,20)])
catalogue('Follow-up Result','Result of one effectiveness check',[
    ('PASS','Pass',True,10),('FAIL','Fail',True,20),('INCONCLUSIVE','Inconclusive',True,30)])
catalogue('Supplier Problem Profile','Business-owned profile selecting response/evidence requirements; seed matrix G-03')
catalogue('Supplier Impact Level','Governed impact domain for response/closure applicability; seed matrix G-03')
catalogue('Supplier Defect Classification','Search and matching classification; business-owned seed values G-03')

obj('Supplier NCR Process Configuration','One governed immutable configuration revision for a type/subtype; direct configuration maintenance, no separate authoring object')
for n,t,q in [('Issue Type','Supplier Issue Type','Y'),('Issue Subtype','Supplier Issue Subtype','N')]: ref('Supplier NCR Process Configuration',n,t,q,cat=True)
row('Supplier NCR Process Configuration','Revision','Number; integer','Y','None','Administrator; unique for type/subtype','Immutable once referenced; issue a new configuration record for later cases')
row('Supplier NCR Process Configuration','Active?','Yes/No','Y','FALSE','Administrator; activate only after all readiness gates for this type pass','Exactly one active revision per type/subtype; deactivation blocks new cases, retains existing cases')
ref('Supplier NCR Process Configuration','Holding Subject','Subject','Conditional',edit='Administrator; required when an enabled PENDING_FOLLOWUP stage or follow-up schedule exists; otherwise optional, retain prior value',life='Non-operational platform subject; generation and stage-entry handlers assign it; never a fabricated person or an external portal account')
text('Supplier NCR Process Configuration','Risk Calculation Rule','N','Administrator; declarative non-executable specification','Controlled arithmetic and weights G-01; reviewed handler implements validated rule')
text('Supplier NCR Process Configuration','Closure Rule','Y','Administrator; declarative non-executable specification','Exact risk/category/reporting-area criteria G-04; reject incomplete configuration')
text('Supplier NCR Process Configuration','Follow-up Schedule','N','Administrator; declarative non-executable schedule specification','Intervals, business calendar, lead time and repeat rules G-05; no invented executable recurrence expression')
for n in ['Internal Owner Role','Supplier Quality Role','Supplier Warranty Role','Warranty Coordinator Role','Group Leader Role']:
    ref('Supplier NCR Process Configuration',n,'Supplier Management Role','Conditional',edit='Administrator; role catalogue is owned by SRM; require each role used by this configuration',life='Resolve live Supplier Specific Role for exact case Supplier; no fallback across supplier entities')
grid('Supplier NCR Process Configuration','Stage Rules','Supplier NCR Stage Rule','Configuration')
grid('Supplier NCR Process Configuration','Response Rules','Supplier NCR Response Rule','Configuration')

obj('Supplier NCR Stage Rule','Governed activation, ownership, deadlines, guidance and notifications for one configured stage')
ref('Supplier NCR Stage Rule','Configuration','Supplier NCR Process Configuration','Y',inverse='Stage Rules')
text('Supplier NCR Stage Rule','Stage Code','Y','Administrator; allowed codes are the lifecycle codes in section 7','Unique within Configuration; explicit code registry, not free executable code',length=100)
text('Supplier NCR Stage Rule','Activation Rule','Y','Administrator; declarative non-executable conditions over modelled fields','Handler implements and tests reviewed condition')
ref('Supplier NCR Stage Rule','Owner Role','Supplier Management Role','Conditional',edit='Administrator; mandatory for actionable stage; holding subject for pending follow-up',life='Live supplier-specific membership; first authorized action consumes approval slot')
row('Supplier NCR Stage Rule','Due Offset','Number; integer business days','N','None','Administrator','Anchor and calendar must be defined before activation; G-02')
text('Supplier NCR Stage Rule','Instructions','Y','Administrator; sanitized instructional content','Displayed to authorized participant for matching stage and subtype')
text('Supplier NCR Stage Rule','Notification Template Key','N','Administrator','Reference to governed platform email template; key validation before activation',length=255)

obj('Supplier NCR Response Rule','Response type activation and deadlines per configuration and tier')
ref('Supplier NCR Response Rule','Configuration','Supplier NCR Process Configuration','Y',inverse='Response Rules')
ref('Supplier NCR Response Rule','Tier','Supplier Response Tier','N',cat=True)
text('Supplier NCR Response Rule','Component Code','Y','Administrator; QUICK, CONTAINMENT, ROOT_CAUSE, CORRECTIVE, WARRANTY','Code selects concrete response class; slot identity is Configuration/Tier/Component Code/Slot Code',length=100)
text('Supplier NCR Response Rule','Slot Code','Y','Administrator; stable non-localizable slot within Configuration','Unique within Configuration/Tier/Component Code; several CONTAINMENT slots are permitted; one ROOT_CAUSE container per case',length=100)
text('Supplier NCR Response Rule','Applicability Rule','Y','Administrator; declarative non-executable predicate over Issue Type/Subtype, Tier, Problem Profile, Impact Level, Defect Classification and Reporting Area Rating','Validated by activation preflight; explicit TRUE means unconditional within the selected Configuration/Tier; evaluated on release and risk revision')
row('Supplier NCR Response Rule','Required?','Yes/No','Y','TRUE','Administrator','Case applicability evaluated at release and on controlled risk revision')
row('Supplier NCR Response Rule','Due Offset','Number; integer business days','Y','None','Administrator; required for every generated response, including optional response slots','Release-based deadline; business calendar G-02; optional content still has a measurable due date')
row('Supplier NCR Response Rule','Preventive Actions Required?','Yes/No','Y','FALSE','Administrator; editable only for Component Code=CORRECTIVE; otherwise force FALSE','CORRECTIVE response validation consumes this flag; changing it requires a new frozen configuration revision')
ref('Supplier NCR Response Rule','Reviewer Role','Supplier Management Role','Y',life='Resolve exact supplier-specific internal role at action time')

# All new case-specific declarations are on the existing supplier base.
case='Supplier Nonconformance Base'
for n,t in [('Problem Profile','Supplier Problem Profile'),('Impact Level','Supplier Impact Level'),('Defect Classification','Supplier Defect Classification')]:
    ref(case,n,t,'Conditional',cat=True,edit='Internal intake; required for PIR release; engineer changes after release invoke applicability review',life='Frozen configuration interprets stable codes; no automatic reassignment from occurrence counts')
for n,t in [('Source Pilot Failure','Pilot Inspection Failure'),('Source Incident','Incident'),('Source SPANF','SPANF'),('Replacement NCR','Supplier Nonconformance Base')]:
    ref(case,n,t,edit='Internal only; integration handler or authorized investigator',life='Typed lineage; target access checked independently; never exposed across supplier entities')
for n,t,q,cat in [('Issue Type','Supplier Issue Type','Y',True),('Issue Subtype','Supplier Issue Subtype','N',True),('Configuration','Supplier NCR Process Configuration','Y',False),('Part','Canonical Part','Y',False),('Drawing','Drawing','Conditional',False),('Visibility Classification','Shared Visibility Classification','Y',True),('Response Tier','Supplier Response Tier','Conditional',True),('Internal Owner','Supplier Specific Role','Y',False),('Supplier Owner','Supplier Specific Role','Conditional',False),('Source Intake','Supplier Nonconformance Base','N',False),('Responsible Manufacturer','Supplier Abstract','Conditional',False)]:
    ref(case,n,t,q,inverse='Downstream PIRs' if n=='Source Intake' else 'disabled',cat=cat,
        edit='Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness',
        life='Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only')
for n in ['Responsibility Rating','Vehicle Impact Rating','Reporting Area Rating','Recurrence Rating']:
    ref(case,n,'Supplier Risk Option','Conditional',cat=True,edit='Internal associate initially; responsible engineer after release; mandatory for PIR release; option Input Code must match this input',life='Human maintained; risk revision handler; occurrence creation never overwrites an input')
row(case,'Risk Score','Float; precision/scale G-01','N','Calculated from the four selected ratings and frozen Configuration.Risk Calculation Rule; exact expression unresolved G-01','Read only; internal risk display','Calculation/handler syntax and thresholds require controlled form verification')
stamp(case,'Released At','Release transaction stamps once after successful preflight; immutable')
stamp(case,'Closed At','Successful terminal closure handler; timezone-aware source for reporting')
text(case,'VIN','Conditional','Internal intake; mandatory only where WCAR configuration requires VIN','Searchable; no composite identifier',length=17)
text(case,'Tracking Number','Conditional','Internal shipping user in WCAR SHIPPING; required for WCAR release','Persisting first nonblank valid tracking invokes release handler; do not clear after release',length=255)
text(case,'Shipping Address','Conditional','Internal warranty initiator; mandatory for WCAR before PCC notification','Frozen with release; changes after release require audited correction notice')
ref(case,'Warranty Contact','Supplier Contact','Conditional',edit='Internal warranty initiator; required for WCAR SHIPPING; contact must match Supplier and warranty role',life='PCC notification uses selected contact and address; authenticated supplier responsibility remains Supplier Owner group')
text(case,'Triage Instructions','Conditional','Internal triage; required before closing Supplier-Reported Problem','Reporting supplier sees only approved handling/return instructions')
row(case,'Create PIR?','Yes/No','Conditional','NULL','Internal triage for SUPPLIER_REPORTED only; decision required; otherwise hidden and NULL','TRUE requires Responsible Manufacturer and successful downstream creation before intake closure')
text(case,'Cancellation Reason','Conditional','Internal owner; mandatory when cancelling','Native audit and workflow evidence; protected against supplier editing')
for n,s,f in [('Occurrences','Supplier NCR Occurrence','NCR'),('Responses','Supplier Response','NCR'),('Dispositions','Supplier NCR Disposition','NCR'),('RMAs','Supplier NCR RMA','NCR'),('Shipments','Certified Shipment','NCR'),('Follow-up Checks','Supplier NCR Follow-up','NCR'),('Generated Outputs','Supplier NCR Output','NCR'),('Downstream PIRs','Supplier Nonconformance Base','Source Intake')]: grid(case,n,s,f)
row(case,'Affected Quantity','Number; nonnegative integer','N','Sum of Occurrences.Quantity; declarative calculation, validate platform expression','Read only','Computed rollup; never used to change risk inputs automatically')
row(case,'Three Certified Shipments?','Yes/No','Y','FALSE','Responsible engineer; applicable PIR profile only; retain historical shipment rows when disabled','TRUE requires exactly three distinct verified shipment entries before closure')
row(case,'Third-Party Sort Requested?','Yes/No','Y','FALSE','Responsible engineer; applicable PIR profile','TRUE activates Sort Authorization, Sort Job, Sort Link, Sort Instructions; FALSE hides and retains historical values read only')
for n in ['Sort Authorization','Sort Job','Sort Link','Sort Instructions']:
    text(case,n,'Conditional','Engineer/supplier as permitted by stage; required when Third-Party Sort Requested?=TRUE; otherwise hidden and retained read only','Sort instructions have no RMA identity; URL validation for Sort Link')

obj('Supplier NCR Occurrence','One reported instance of the same drawing/problem; retained event history')
ref('Supplier NCR Occurrence','NCR','Supplier Nonconformance Base','Y',inverse='Occurrences')
stamp('Supplier NCR Occurrence','Reported At','Create handler stamps current server time once')
ref('Supplier NCR Occurrence','Part','Canonical Part','Y',life='Must belong to governing NCR drawing/problem context')
text('Supplier NCR Occurrence','Source Area','Y',length=255)
text('Supplier NCR Occurrence','Shift','N',length=100)
row('Supplier NCR Occurrence','Quantity','Number; nonnegative integer','Y','None','Internal reporter; correction audited','NCR affected-quantity rollup recalculates; disposition quantities reconciled separately')
text('Supplier NCR Occurrence','Comments')
row('Supplier NCR Occurrence','Evidence','File collection; native secured attachments','N','None','Reporter; supplier sees only approved shared evidence','Audit deletion; retention G-10; evidence access follows NCR release/classification')
grid('Supplier NCR Occurrence','Dispositions','Supplier NCR Disposition','Occurrence')

obj('Supplier Response','Abstract non-instantiable response contract; independent submission/approval cycle')
ref('Supplier Response','NCR','Supplier Nonconformance Base','Y',inverse='Responses')
ref('Supplier Response','Rule','Supplier NCR Response Rule','Y',life='Frozen generation source; unique NCR/Rule; regenerate idempotently')
row('Supplier Response','Applicable?','Yes/No','Y','TRUE','Read only','Release/risk-change handler sets from current required component set; inactive content retained')
row('Supplier Response','Due Date','Date','Y','Release date plus Rule.Due Offset using approved business calendar','Internal owner may extend with audited reason; supplier read only','Retain every prior deadline in audit; native reminders use current deadline')
stamp('Supplier Response','Submitted At','Submit stamps successful submission time on each cycle; previous timestamps immutable in native history')
ref('Supplier Response','Submitted By','Employee','N',edit='Read only',life='Submit action stamps authenticated supplier actor')
ref('Supplier Response','Reviewer','Supplier Specific Role','Y',edit='Read only',life='Generation resolves Rule.Reviewer Role for exact NCR supplier; membership remains live')
text('Supplier Response','Review Comment','Conditional','Reviewer in REVIEW; required on rejection; prior comments retained in native append-only history','Reject persists comment/actor/time before reopening draft; immutable history required by ADR-050')
row('Supplier Response','Evidence','File collection; native secured attachments','N','None','Supplier owner in draft/returned; read only during review/approval','Prior submissions preserved through audit and retained attachment versions; gate G-11')
for n in ['Quick Feedback Response','Containment Response','Root Cause Response','Corrective Action Response','Warranty Response']:
    obj(n,'Concrete typed response; common submission and review inherited','Supplier Response')
text('Quick Feedback Response','Feedback','Y')
text('Containment Response','Containment Actions','Y')
text('Containment Response','Suspect Population','Y')
text('Containment Response','Breakpoint','Y')
row('Containment Response','Completed On','Date','Y','None','Supplier in draft/returned','Evidence of containment execution; distinct from submission timestamp')
grid('Root Cause Response','Methods','Supplier Cause Method','Response')
text('Root Cause Response','Root Cause Summary','Y')
text('Corrective Action Response','Corrective Actions','Y')
text('Corrective Action Response','Preventive Actions','Conditional','Supplier draft/returned; mandatory when Rule requires it; otherwise optional and retain entered content')
text('Corrective Action Response','Action Owner','Y',length=255)
row('Corrective Action Response','Implementation Date','Date','Y','None','Supplier draft/returned','Supplier evidence; no internal Action Plan task assignment')
ref('Warranty Response','Outcome','Warranty Response Outcome','Y',cat=True)
text('Warranty Response','Findings','Y')
text('Warranty Response','Corrective Response','Conditional','Supplier draft/returned; required for Outcome.Code=ANALYSIS; NTF hides and retains earlier content read only','No root-cause-analysis requirement by default; reviewed subtype rule may enable it')

obj('Supplier Cause Method','One structured analysis or external evidence entry in the single root-cause response container')
ref('Supplier Cause Method','Response','Root Cause Response','Y',inverse='Methods')
text('Supplier Cause Method','Method Code','Y','Supplier draft/returned; FIVE_WHY, FISHBONE, TIMELINE or EXTERNAL','Fixed method registry; not a selectable business catalogue',length=100)
text('Supplier Cause Method','Conclusion','Conditional','Supplier; required before container submission; blank permitted for generated placeholder')
row('Supplier Cause Method','External Evidence','File','Conditional','NULL','Supplier; required for Method Code=EXTERNAL; otherwise optional; retain when method changes','Method change blocked after container submission')
grid('Supplier Cause Method','Analysis Entries','Supplier Cause Entry','Method')
obj('Supplier Cause Entry','Structured why chain, fishbone branch, or timeline entry')
ref('Supplier Cause Entry','Method','Supplier Cause Method','Y',inverse='Analysis Entries')
row('Supplier Cause Entry','Sequence','Number; positive integer','Y','None','Supplier draft/returned','Unique within Method; order used by outputs')
text('Supplier Cause Entry','Category','N','Supplier draft/returned; fishbone branch or timeline label','Required per controlled method form G-03',length=255)
text('Supplier Cause Entry','Question','N')
text('Supplier Cause Entry','Answer','Y')

obj('Supplier NCR Disposition','Governed material treatment and chargeable quantities')
ref('Supplier NCR Disposition','NCR','Supplier Nonconformance Base','Y',inverse='Dispositions')
ref('Supplier NCR Disposition','Occurrence','Supplier NCR Occurrence','Y',inverse='Dispositions',life='Occurrence.NCR must equal NCR; no cross-case allocation')
ref('Supplier NCR Disposition','Category','Disposition Category','Y',cat=True)
row('Supplier NCR Disposition','Quantity','Number; nonnegative integer','Y','None','Internal disposition owner','Aggregate allocated quantity cannot exceed occurrence quantity; reconcile split dispositions')
row('Supplier NCR Disposition','Chargeable?','Yes/No','Y','FALSE','Authorized internal disposition owner','Audit changes; source for PPM only after approved disposition')
row('Supplier NCR Disposition','Approved On','Date','N','NULL','Read only','Approve Disposition action stamps business date; defines proposed PPM period basis pending G-09')
grid('Supplier NCR Disposition','RMAs','Supplier NCR RMA','Disposition')
text('Supplier NCR Disposition','Instructions','Y')

obj('Supplier NCR RMA','Independent true return authorization; optional disposition until completion')
ref('Supplier NCR RMA','NCR','Supplier Nonconformance Base','Y',inverse='RMAs')
ref('Supplier NCR RMA','Disposition','Supplier NCR Disposition','Conditional',inverse='RMAs',edit='Internal request or reconciliation; required at Complete RMA; may be null before disposition exists',life='Same NCR required; completion validates quantities and permitted return method')
ref('Supplier NCR RMA','Supplier Owner','Supplier Specific Role','Y',life='Same supplier; eligible current portal membership required before request')
text('Supplier NCR RMA','Request Reference','N',length=255)
text('Supplier NCR RMA','Supplier Authorization','Conditional','Supplier in RESPONSE; required for Submit Authorization')
text('Supplier NCR RMA','Handling Instructions','Conditional','Supplier in RESPONSE; required for Submit Authorization')
row('Supplier NCR RMA','Quantity','Number; nonnegative integer','Conditional','NULL','Internal completion owner; required to complete','Sum completed RMA quantities reconciles with disposition; exact split rules G-06')
stamp('Supplier NCR RMA','Responded At','Submit Authorization stamps successful supplier response')

obj('Certified Shipment','One verified logistics evidence entry in the required set of three')
ref('Certified Shipment','NCR','Supplier Nonconformance Base','Y',inverse='Shipments')
text('Certified Shipment','Shipment Identifier','Y',length=255)
row('Certified Shipment','Ship Date','Date','Y','None','Supplier during response','Accept supplier-appropriate logistics identifiers; unique NCR/Shipment Identifier')
row('Certified Shipment','Verified?','Yes/No','Y','FALSE','Internal engineer','Closure requires exactly three distinct verified entries if Three Certified Shipments?=TRUE')

obj('Supplier NCR Follow-up','Scheduled procedure-driven effectiveness check; independent repeated checks')
ref('Supplier NCR Follow-up','NCR','Supplier Nonconformance Base','Y',inverse='Follow-up Checks')
ref('Supplier NCR Follow-up','Replaces Check','Supplier NCR Follow-up','N',inverse='disabled',edit='Management selects only during Create Further Check; read only afterward; target must be a failed/inconclusive check on the same NCR',life='At most one successor per check; no cycles; a retry reuses successor; historical failed check remains immutable; closure evaluates passing terminal successors for each required schedule slot')
text('Supplier NCR Follow-up','Schedule Key','Y','Read only','Generation handler identifies rule and occurrence; unique NCR/Schedule Key; repeat allocates new key',length=255)
row('Supplier NCR Follow-up','Due Date','Date','Y','Generated from Configuration.Follow-up Schedule','Internal owner; extensions audited','Exact intervals and calendar G-05')
row('Supplier NCR Follow-up','Activate On','Date','Y','Due Date less configured lead time','Read only','Generation handler populates once; scheduler activates only eligible scheduled checks')
ref('Supplier NCR Follow-up','Owner','Supplier Specific Role','Y',life='Live internal supplier-specific role; role replacement transfers open responsibility')
ref('Supplier NCR Follow-up','Result','Follow-up Result','Conditional',cat=True,edit='Owner in ACTIVE; required for Submit Check')
text('Supplier NCR Follow-up','Evidence Notes','Conditional','Owner in ACTIVE; required for Submit Check')
stamp('Supplier NCR Follow-up','Completed At','Successful passing check completion; unsuccessful result enters management determination')

obj('Supplier NCR Output','Immutable generated controlled artifact with source and template version')
ref('Supplier NCR Output','NCR','Supplier Nonconformance Base','Y',inverse='Generated Outputs')
text('Supplier NCR Output','Template Version','Y','Read only','Generation handler stamps approved controlled template identity/version',length=255)
row('Supplier NCR Output','Generation Number','Number; positive integer','Y','Next number within NCR/template; first 1','Read only','Generation handler serializes allocation; every regeneration creates a new record')
stamp('Supplier NCR Output','Generated At','Generation handler stamps once after render succeeds')
ref('Supplier NCR Output','Generated By','Employee','Y',edit='Read only',life='Generation handler stamps authenticated requesting user')
row('Supplier NCR Output','Artifact','File','Y','None','Read only','Generation writes complete file before committing record; retained immutable; no overwrite')

# Resolve conditional behavior in the canonical rows, rather than only in prose.
def amend(o, n, **changes):
    field = next(r for r in model[o]['fields'] if r[0] == n)
    for key, value in changes.items():
        field[{'typ':1, 'req':2, 'default':3, 'edit':4, 'life':5}[key]] = value

for n in ('Problem Profile','Impact Level','Defect Classification','Response Tier'):
    amend(case,n,edit='Internal only; required before release when Issue Type.Code=PIR; internal associate before release and responsible engineer afterward; hidden and NULL for other types unless an activated type rule explicitly requires it; retain existing historical values read only when inapplicable; active catalogue values only',
          life='Release validates required values; frozen Configuration governs applicability; post-release changes invoke audited risk reconciliation and supplier notice')
for n,condition in [('Internal Owner Role','every active Configuration'),('Supplier Quality Role','Issue Type.Code=PIR or an enabled pilot supplier-response path'),('Supplier Warranty Role','Issue Type.Code=WCAR'),('Warranty Coordinator Role','Issue Type.Code=WCAR'),('Group Leader Role','a Stage Rule with Stage Code=GROUP_REVIEW can activate')]:
    amend('Supplier NCR Process Configuration',n,edit=f'Administrator before first use; required when {condition}; otherwise optional and retained; active SRM library roles only; Internal Owner/Warranty Coordinator/Group Leader must be internal roles and supplier Quality/Warranty must be external roles',life='Resolve exact Supplier Specific Role when the consuming stage/action activates; configuration locks on first case reference; no cross-entity fallback')
amend('Supplier NCR Stage Rule','Owner Role',edit='Administrator before Configuration is first referenced; required for actionable stages except DRAFT; DRAFT uses originator and PENDING_FOLLOWUP uses Configuration.Holding Subject, with Owner Role blank for those two stages; active SRM library roles only',life='Stage entry resolves role for exact NCR.Supplier; current membership rechecked at action time; inherited workflow actor history records the individual')
amend('Supplier NCR Follow-up','Completed At',life='Submit Check stamps successful evidence submission for PASS, FAIL or INCONCLUSIVE; failed/inconclusive result also routes governing case to DETERMINATION; immutable afterward')
for o,fields_at_submit in {
    'Quick Feedback Response':['Feedback'],
    'Containment Response':['Containment Actions','Suspect Population','Breakpoint','Completed On'],
    'Root Cause Response':['Root Cause Summary'],
    'Corrective Action Response':['Corrective Actions','Action Owner','Implementation Date'],
    'Warranty Response':['Outcome','Findings'],
}.items():
    for n in fields_at_submit:
        amend(o,n,req='Conditional',edit='Supplier Owner may save blank drafts in Draft/Returned; required when Submit Response is invoked for this Applicable?=TRUE component; read only in Review/Approved; retain previous submissions and return-cycle evidence',life='Submission validates this field before transition; one component approval never approves another; frozen content is reconstructed through verified native history G-11')

# The canonical declaring row carries supplier-specific overrides alongside its
# extracted evidence. Other descendants retain their existing metadata contract.
def supplier_override(o, n, behavior, mechanism, requiredness=None):
    field=next(r for r in model[o]['fields'] if r[0]==n)
    field[4]+='; PROPOSED Supplier Nonconformance branch only: '+behavior
    field[5]+='; supplier branch population/lifecycle: '+mechanism
    if requiredness:
        field[5]+='; extracted IsRequired='+str(field[2]=='Y')
        field[2]=requiredness

supplier_override('Event Scenario','Description','originator edits in Draft; required at Submit Intake; supplier may edit only its own SUPPLIER_REPORTED draft; internal-only problem detail is not exposed by default','Submit Intake validates; supplier-visible release uses approved content allowlist; other Event Scenario descendants unchanged','Conditional')
supplier_override('Supplier Nonconformance Base','Supplier','authorized internal intake editor may correct before release through verified scoped override G-12; supplier-originated intake forced to authenticated reporting entity; mandatory at Submit Intake; immutable after release','Draft save/Submit Intake validates exact supplier scope; release freezes; correction after release creates another NCR','Conditional')
supplier_override('Supplier Nonconformance Base','NCR Type','legacy NCRType is historical read-only information; new-case selection uses Issue Type','Map only verified legacy lookup values G-09; never fabricate a lookup default')
supplier_override('Supplier Nonconformance Base','Assigned To','optional communication contact; internal selector requires same supplier plus non-null Employee; does not establish actionable responsibility','Supplier Owner operational group controls work; preserve existing named-contact history')
supplier_override('Nonconformance Base','Date Closed','read only for all participants on supplier records','Terminal closure handler stamps business closure date in America/Toronto together with Closed At; cancellation does not assert successful closure')
supplier_override('Nonconformance','Is this a valid Nonconformance?','internal triage owner must decide before Complete Triage for Issue Type.Code=SUPPLIER_REPORTED; reporter cannot edit; other supplier types optional','Complete Triage requires validity decision and Create PIR?; reject invalid report combined with Create PIR?=TRUE','Conditional')
for n,code in [('Responsibility Rating','RESPONSIBILITY'),('Vehicle Impact Rating','VEHICLE_IMPACT'),('Reporting Area Rating','REPORTING_AREA'),('Recurrence Rating','RECURRENCE')]:
    amend(case,n,edit=f'Internal only; visible and required for Issue Type.Code=PIR at release; active Supplier Risk Option.Input Code={code}; human editable before release and by responsible engineer afterward; other types hide and retain historical values read only',
          life='Audit actor/time/prior and new values plus reason; validate G-01 scoring before release; occurrence counts never write this input')
amend(case,'Drawing',edit='Internal intake; select only the drawing applicable to Part; required at PIR release when Part has governed drawing context; missing required master context blocks release G-08; otherwise optional; engineer correction after release retains audit and revalidates occurrences')
amend(case,'Supplier Owner',edit='Internal release handler only; required before any supplier response or RMA is assigned; resolve exact Supplier and quality/warranty role; read only to supplier; NULL for SUPPLIER_REPORTED intake until independently actionable work is configured',life='Resolve at release from frozen Configuration; same-supplier group only; current eligible membership controls every action; retain role on completed cases')
amend(case,'Responsible Manufacturer',edit='Internal triage only; visible for Issue Type.Code=SUPPLIER_REPORTED; required when Create PIR?=TRUE; active applicable manufacturing supplier shortlisted from Part relationships; otherwise hide and retain internally; never visible to reporter',life='Complete Triage handler validates manufacturer and writes separate PIR.Supplier; reporting intake Supplier never changes')
amend(case,'Issue Type',edit='Internal originator selects active PIR or WCAR; portal originator is forced to SUPPLIER_REPORTED; immutable after Submit Intake; supplier may never initiate PIR/WCAR',life='Create handler constrains permitted codes; submission freezes identity; no type-switch access bypass')
amend(case,'Issue Subtype',edit='Originator before Submit Intake; active subtype belonging to Issue Type only; changing type in Draft clears incompatible subtype after warning; immutable after submission',life='Resolve a matching active Configuration; reject cross-type subtype')
amend(case,'Configuration',edit='Read only; Create handler resolves exactly one active revision for Issue Type/Issue Subtype; Draft type/subtype change re-resolves; immutable after submission',life='Existing cases retain frozen revision; no automatic switch when administrators activate a new revision')
amend(case,'Part',edit='Originator in Draft/intake; authorized Canonical Part selector; never select API Data staging objects; engineer may correct after release within same Supplier scope with audit reason',life='Every write revalidates Drawing, supplier responsibility and occurrences; canonical target identity unresolved G-08')
amend(case,'Internal Owner',edit='Read only; Create/Submit handler resolves configured Supplier Management Role to exact-supplier internal Supplier Specific Role; triage/shipping/review use their configured stage role',life='Current members act; native action history records individual; no external field or global-view restriction inferred from assignment')
amend(case,'Source Intake',edit='Internal creation handler only; visible only to authorized internal users; read only after downstream creation',life='Unique per populated Source Intake in this single-PIR design; source and target security rechecked independently; inverse Downstream PIRs is internal only')
amend(case,'Visibility Classification',edit='Authorized internal classifier or lifecycle handler; active shared classification only; external users cannot modify it',life='Audit old/new value, actor and reason; update case and governed descendant ACLs without changing workflow stage or owner; preserve source-record ACLs')
amend(case,'Warranty Contact',edit='Internal warranty initiator; required for Issue Type.Code=WCAR before Submit Intake enters SHIPPING; select contact belonging to Supplier warranty role; otherwise hidden and retain historical value read only',life='PCC notification receives selected contact/address; later correction is audited and notified; does not substitute for authenticated Supplier Owner membership')
amend(case,'VIN',edit='Internal WCAR intake; visible and required only for WCAR subtypes whose frozen Configuration requires VIN (exact subtype matrix G-03); otherwise hidden and retain historical value read only',life='Validate configured VIN format; normalized search field; never part of sequential identifier')
amend(case,'Tracking Number',edit='Internal shipping user; WCAR SHIPPING only before release; first nonblank valid entry is release trigger; other types hide; retain read only after release',life='Update Action Handler validates shipment and release preflight; successful release is stamped once; audited later correction sends notice and never regenerates responses')
amend(case,'Shipping Address',edit='Internal warranty initiator; required for Issue Type.Code=WCAR before PCC notice; otherwise hidden and retain historical value read only',life='PCC and release use this address; audited changes after notice require correction notification')
amend(case,'Triage Instructions',edit='Internal triage owner for SUPPLIER_REPORTED; required before Complete Triage; reporter sees approved instructions only; other types hide and retain history',life='Complete Triage publishes the approved instruction content and audits changes')
amend(case,'Cancellation Reason',edit='Internal owner/manager; required by Cancel NCR; otherwise hidden; retain read only after cancellation',life='Cancellation action commits reason before cancelling related eligible open work; immutable audit evidence')
amend('Supplier Response','Review Comment',edit='Internal reviewer on Return Response or engineer on Reopen Response; required nonblank for those actions; supplier can read authorized returned reason; retain every prior comment in append-only native history',life='Action records comment, actor, time, affected submission and outcome before state change; native mechanism must pass G-11')
amend('Corrective Action Response','Preventive Actions',edit='Supplier in Draft/Returned; required when Rule.Preventive Actions Required?=TRUE; otherwise optional and retain entered content; read only in Review/Approved',life='Submit validates rule flag; record is frozen with submitted corrective response')
amend('Supplier Cause Method','Conclusion',edit='Supplier while governing Root Cause Response is Draft/Returned; blank permitted in generated placeholder; required for Submit Response on the container; retain through returns',life='Root-cause container submission validates every applicable method; single container approval covers methods')
amend('Supplier Cause Method','External Evidence',edit='Supplier while container is Draft/Returned; required when Method Code=EXTERNAL; otherwise optional; method changes retain file; all methods read only during Review/Approved',life='Changing method after submission requires audited Reopen/Return of container; file retention G-11')
amend('Supplier NCR RMA','Supplier Authorization',edit='Supplier Owner in Supplier Response stage; required for Submit Authorization; internal request may be blank; retain read only after successful submission',life='Submit Authorization validates nonblank value and preserves prior return cycles in native history')
amend('Supplier NCR RMA','Handling Instructions',edit='Supplier Owner in Supplier Response stage; required for Submit Authorization; blank permitted in Internal Request; retain and lock during Internal Completion',life='Return Authorization reopens same record with mandatory reason; prior submitted instructions remain reconstructable')
amend('Supplier NCR Follow-up','Result',edit='Current internal Owner in Active; required for Submit Check; active result code PASS, FAIL or INCONCLUSIVE; Scheduled hides blank value; immutable after submission',life='PASS completes check; FAIL/INCONCLUSIVE completes failed evidence and sends NCR to management determination; later attempt is a new check')
amend('Supplier NCR Follow-up','Evidence Notes',edit='Current internal Owner in Active; required for Submit Check; optional in Scheduled; read only after result submission',life='Submit Check preserves result/notes together; retry cannot overwrite failed evidence')

# Every diagram dependency has an inventory entry and an individually scoped section.
# External authorities declare no new fields here and retain their owning specification.
authorities = {
    'Canonical Part': ('ADR-062 / ADR-092; Product Management canonical-master authority, target identity unresolved G-08', 'Unresolved'),
    'Drawing': ('ADR-062 / ADR-073; Product Management drawing/revision authority, target identity unresolved G-08', 'Unresolved'),
    'Incident': ('ADR-091; Incident Management owns fields, workflow and source permissions', 'Unresolved'),
    'Pilot Inspection Failure': ('ADR-045 / ADR-098 / ADR-099; Pilot Part Data owns failure, PPAP/build-event links and replacement shipments', 'Unresolved'),
    'SPANF': ('ADR-071; SPANF owns notification lifecycle and optional NCR escalation', 'Unresolved'),
    'Shared Visibility Classification': ('ADR-084; shared security catalogue authority and codes unresolved G-07; no local catalogue duplication', 'Unresolved'),
    'Supplier Management Role': ('SRM Supplier Management Role specification; governed role library; inherited membership is not maintained on library records', 'Group'),
    'Supplier Specific Role': ('SRM Supplier Management Role specification; operational group for exact Supplier Abstract; current eligible Members supply accountability', 'Group'),
    'Group': ('SRM Supplier Management Role specification and native platform; Members inherited here; full platform contract requires tenant verification', 'Subject'),
}
for name,(authority,parent) in authorities.items():
    obj(name,'Referenced authority only: '+authority,parent=parent,classification='Referenced dependency; not configured or redefined by this specification')
    if name=='Subject': continue
    model[name]['authority']=authority
for junction in readcsv('junction-object-register.csv'):
    name=junction['junction_internal_name']
    obj(name,'Native M:N implementation extracted by name; '+junction['source_internal_name']+'.'+junction['declaring_field']+' to '+junction['target_internal_name'],parent='Unresolved',internal=name,classification='Extracted implementation name; field metadata and stable ID not exported')
    model[name]['system']='Unresolved; native map implementation'
    model[name]['abstract']='Unresolved'
    model[name]['source']=junction['relation_name']

def esc(v): return str(v).replace('|','\\|').replace('\n','<br>')
def table(headers,rows):
    return '\n'.join(['| '+' | '.join(headers)+' |','| '+' | '.join('---' for _ in headers)+' |']+['| '+' | '.join(esc(v) for v in r)+' |' for r in rows])

def inherited_names(name, seen=None):
    seen=set() if seen is None else seen
    if name in seen or name not in model: return []
    seen.add(name)
    o=model[name]
    return inherited_names(o['parent'], seen)+[r[0] for r in o['fields']]

OUT.mkdir(parents=True,exist_ok=True)
inventory=[]
sections=['# Supplier Nonconformances — field-level contract','',
          'Companion to [Technical Specification](supplier-nonconformances-technical-specification.md). Baseline metadata is labelled Extracted; additions and supplier-scoped behavior are Proposed. This is a review contract with the unresolved deployment gates in the main specification. Native platform identity, workflow and audit infrastructure is reused.',
          '', 'Metadata requiredness is distinguished from action-time validation. For inherited fields the package row is retained at its declaring object; supplier-specific overrides in the main specification apply only to the Supplier Nonconformance branch. Null metadata does not prove absence of tenant behavior. All inherited and dependency objects receive individual sections; zero exported fields does not prove zero tenant fields. Shared external authorities introduced by the target are referenced in the main specification and are not redefined here.', '']
for i,(name,o) in enumerate(model.items(),1):
    inventory.append([name,o['internal'],o['parent'],len(o['fields']),o['classification'],o.get('stable_id','Unassigned'),o.get('system','Not asserted; referenced authority' if name in authorities else 'Proposed extension'),o.get('abstract','Proposed TRUE' if 'non-instantiable' in o['purpose'] else 'Unresolved' if name in authorities else 'Proposed FALSE'),o.get('source',o.get('authority','Proposed; field contract defines implementation intent')),o['purpose']])
    no_fields='None declared by this specification. '+('Inherited fields: '+', '.join(inherited_names(o['parent']))+'.' if inherited_names(o['parent']) else 'No additional fields are evidenced here; complete tenant/authority metadata remains unresolved or externally owned.')
    sections += [f'## 1.{i} {name}','',f"**Inheritance parent:** {o['parent']}",'',f"**Classification:** {o['classification']}",'',f"**Responsibility:** {o['purpose']}",'', '**Directly declared fields:** '+(', '.join(r[0] for r in o['fields']) if o['fields'] else no_fields),'']
    if o.get('stable_id'): sections += [f"Stable metadata ID: `{o['stable_id']}`. Source: `{o['source']}`.",'']
    if o['fields']: sections += [table(['Field','Type / relationship','Req','Default / calculation','Editability and visibility','Automation / lifecycle'],o['fields']),'']
    if o['seeds']: sections += ['Initial values:','',table(['Code','Name','Active?','Sort'],o['seeds']),'','Seed records and codes are Proposed; the package does not establish these values.','']
main_path=OUT/'supplier-nonconformances-technical-specification.md'
main_text=main_path.read_text(encoding='utf-8')
first_object=sections.index('## 1.1 Abstract Corrective Action')
embedded='\n'.join(sections[first_object:])
embedded=re.sub(r'^## 1\.(\d+) ',r'### 5.\1 ',embedded,flags=re.M)
begin='<!-- BEGIN GENERATED FULL FIELD CONTRACT -->'
end='<!-- END GENERATED FULL FIELD CONTRACT -->'
conventions=('The following tables are the canonical full field list. Each object has its own numbered subsection; inherited fields are defined once on the declaring object. '
             'Req uses Y, N or Conditional; action-time conditions permit the documented draft behavior. '
             'Extracted identifiers and source pointers are preserved, while supplier-specific changes are labelled Proposed. '
             'Dependency objects with no exported declarations and referenced external authorities are identified explicitly rather than assigned invented fields.\n\n')
block=begin+'\n\n'+conventions+embedded.rstrip()+'\n\n'+end+'\n\n'
if begin in main_text:
    main_text=re.sub(re.escape(begin)+r'.*?'+re.escape(end)+r'\s*',lambda _:block,main_text,count=1,flags=re.S)
else:
    anchor='## 6. Record creation, security and data behavior'
    if anchor not in main_text:
        raise ValueError('Full field contract insertion anchor is missing')
    main_text=main_text.replace(anchor,block+anchor,1)
main_path.write_text(main_text,encoding='utf-8')
(OUT/'supplier-nonconformances-field-contract.md').write_text(
    '# Supplier Nonconformances — field-list location\n\n'
    'The complete field-level implementation contract is now embedded in '
    '[section 5 of the Technical Specification](supplier-nonconformances-technical-specification.md#5-inherited-fields-and-supplier-specific-overrides).\n\n'
    'That section is the single authoritative field list, including all 79 object/dependency subsections and 290 individual field/grid rows. '
    'This page preserves existing links and contains no separate field definitions.\n',encoding='utf-8')
(OUT/'supplier-nonconformances-object-inventory.md').write_text('# Supplier Nonconformances — target object inventory\n\n'+table(['Object','Internal / diagram identifier','Inheritance parent','Declared rows','Classification','Stable metadata ID','System / custom status','Abstract?','Source / authority','Responsibility'],inventory)+'\n',encoding='utf-8')

# Full baseline remains visible in the target diagram; add target dependencies and references.
diagram=(BASE/'ootb-supplier-ncr-baseline-model/baseline-logical-model.mmd').read_text(encoding='utf-8').splitlines()
diagram[2]='%% Target review model: extracted backbone plus Proposed supplier extensions; see field contract.'
defined={line.split()[1] for line in diagram if line.startswith('class ')}
external=set()
edges=[]
for name,o in model.items():
    mid=o['internal']
    if mid not in defined:
        diagram.append('class '+mid);defined.add(mid)
        if o['parent'] in model: edges.append(f"{model[o['parent']]['internal']} <|-- {mid} : inherits")
    for f in o['fields']:
        match=re.match(r'M:1 to (.+?);',f[1])
        if match:
            target=match.group(1);tid=model[target]['internal'] if target in model else re.sub(r'\W+','_',target)
            if target not in model: external.add(tid)
            edges.append(f'{mid} "0..*" --> "'+('1' if f[2]=='Y' else '0..1')+f'" {tid} : '+re.sub(r'\W+','_',f[0]))
for ext in sorted(external-defined): diagram.append('class '+ext)
diagram+=edges
(OUT/'supplier-nonconformances-target-model.mmd').write_text('\n'.join(diagram)+'\n',encoding='utf-8')

# Reconciliation is deliberately structural; unresolved semantics remain deployment gates.
report={'objects':len(model),'field_rows':sum(len(o['fields']) for o in model.values()),'baseline_fields':len(fields),'duplicate_fields':[], 'invalid_requiredness':[], 'missing_parents':[]}
for name,o in model.items():
    names=[r[0] for r in o['fields']]
    report['duplicate_fields'] += [(name,n) for n in set(names) if names.count(n)>1]
    report['invalid_requiredness'] += [(name,r[0]) for r in o['fields'] if r[2] not in ('Y','N','Conditional')]
    if o['parent'] not in ('None','Unresolved') and o['parent'] not in model: report['missing_parents'].append((name,o['parent']))
report['deployment_ready']=False
report['reason']='Business and tenant verification gates G-01 through G-12 remain open; see main specification.'
report['known_extracted_caption_collision']='Event Type is separately declared as EventType (Text) and TypeOfEvent (reference); stable IDs and internal names distinguish them.'
report['object_section_coverage']=len(model)
report['baseline_field_coverage']=sum(1 for f in fields if any(f['stable_metadata_id'] in r[5] for r in model[f['owner_display_name']]['fields']))
report['proposed_catalogue_inverse_violations']=[]
catalogues={n for n,o in model.items() if any(r[0]=='Code' for r in o['fields'])}
for n,o in model.items():
    for r in o['fields']:
        m=re.match(r'M:1 to (.+?);',r[1])
        if m and m.group(1) in catalogues and 'inverse disabled' not in r[1]:
            report['proposed_catalogue_inverse_violations'].append((n,r[0]))
report['review_date']=REVIEW_DATE
report['canonical_field_contract']='supplier-nonconformances-technical-specification.md#5-inherited-fields-and-supplier-specific-overrides'
report['embedded_object_sections']=len(re.findall(r'^### 5\.\d+ ',main_text,re.M))
report['embedded_contract_markers']=main_text.count(begin)==1 and main_text.count(end)==1
report['package_sha256']=hashlib.sha256(PACKAGE.read_bytes()).hexdigest()
report['missing_diagram_objects']=sorted(o['internal'] for o in model.values() if o['internal'] not in defined)
report['unregistered_diagram_objects']=sorted(defined-{o['internal'] for o in model.values()})
report['inheritance_cycles']=[]
for name in model:
    seen=[]; current=name
    while current in model:
        if current in seen:
            report['inheritance_cycles'].append(seen[seen.index(current):]+[current]);break
        seen.append(current);current=model[current]['parent']
report['invalid_inverse_grids']=[]
for name,o in model.items():
    for r in o['fields']:
        m=re.fullmatch(r'Inverse 1:M grid from (.+)\.([^.]+)',r[1])
        if not m: continue
        source,field=m.groups()
        matches=[f for f in model.get(source,{}).get('fields',[]) if f[0]==field and f[1].startswith('M:1 to '+name+';')]
        if len(matches)!=1: report['invalid_inverse_grids'].append([name,r[0],source,field])
report['inverse_grid_count']=sum(r[1].startswith('Inverse 1:M grid') for o in model.values() for r in o['fields'])
report['baseline_field_mapping_failures']=[f['stable_metadata_id'] for f in fields if sum(f['stable_metadata_id'] in r[5] for r in model[f['owner_display_name']]['fields'])!=1]
report['implementation_contract_complete']=False
report['semantic_limitations']=['Ten baseline reverse relationship targets lack source-side field metadata; cardinality remains unresolved.', 'Business configuration G-01 through G-10 and tenant checks G-11/G-12 remain unresolved where explicitly identified in rows.', 'Structural coverage is not proof of resolved conditional business matrices, formulas, permissions or runtime behavior.']
(OUT/'supplier-nonconformances-validation.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')

relevance={
  1:('Superseded','ADR-083 controls portal entry; do not implement the earlier universal landing-page direction','2','Satisfied'),
  3:('Interface','Shared external roles and authenticated contact eligibility','6.2; G-07','Partially satisfied'),
  4:('Interface','Live internal supplier-specific roles and follow-up reassignment','6.2; 7.3; G-07','Partially satisfied'),
  7:('Interface','Dormant/deactivated members cannot retain actionable supplier work','6.2; G-07','Partially satisfied'),
  31:('Boundary','PPAP shipment-without-approval exceptions remain PPAP-owned; not every shipment exception becomes NCR','9','Satisfied'),
  37:('Interface','Part-history DCR references retain provisional Workflow EX authority','9; G-08','Requires confirmation'),
  38:('Interface','Internal part history links the actual released inspection specification and historical version','9; G-08','Partially satisfied'),
  39:('Boundary','ECS/specification checkpoints remain source-workflow owned; NCR history navigates their released records','9','Satisfied'),
  42:('Superseded','ADR-098 replaces pilot part-assignment routing with PPAP/program responsibility','2; 9','Satisfied'),
  45:('Interface','Engineer-reviewed pilot failure, release security and replacement shipment','4; 9; G-08','Partially satisfied'),
  46:('Core','One configurable case and typed repeating components','1; 3; 4; 7','Partially satisfied'),
  47:('Core','Open-case duplicate suggestions and occurrence history/rollup','6.1','Satisfied'),
  48:('Core','Four human-maintained inputs, tier-driven content, shipments and sort','4; 6.3; G-01; G-03','Partially satisfied'),
  49:('Core','Explicit release, internal intake and immutable released supplier','5; 6.2','Satisfied'),
  50:('Core','Independent response approval, draft work and immutable return history; one RCA container','7.2; G-03; G-11','Partially satisfied'),
  51:('Core','Conditional automatic closure routing and scheduled repeated checks','7; G-04; G-05','Partially satisfied'),
  52:('Core','Controlled generated output retained with version and source','9; G-10','Partially satisfied'),
  53:('Core','Shared WCAR configuration; tracking-triggered release; NTF; coordinator approval','4; 6.2; 7.2; G-03','Partially satisfied'),
  54:('Core boundary','Separate supplier/internal branches on shared framework; no internal data disclosure','1; 2; 6.4','Satisfied'),
  55:('Superseded','ADR-087 preserves Audit Finding instead of mandatory audit-generated NCR','2','Satisfied'),
  56:('Boundary','Internal workflows retain their own type-driven stages; no import into supplier lifecycle','2','Satisfied'),
  57:('Boundary','Internal requirement/permit references remain Internal NCR/Audit/CAR-owned','2','Satisfied'),
  58:('Interface','Chargeable disposition quantities and response submission deadlines feed governed scorecards','9; G-09','Partially satisfied'),
  59:('Boundary','Proposed Warranty Analysis survey is distinct from WCAR/NCR','2; 9','Satisfied'),
  61:('Interface','Internal SSO and external local URL/authentication','6.4','Satisfied'),
  62:('Interface','Canonical part/drawing authority, source staging and depot resolution','3; 9; G-08','Partially satisfied'),
  63:('Boundary','Scrap visibility and financial settlement authority remain outside NCR; no debit processing introduced','9','Satisfied'),
  68:('Boundary','MOC remains authority for PCR/Localization; NCR does not replace these processes','2','Satisfied'),
  71:('Interface','Broader SPANF stays separate with optional typed NCR escalation','9; G-08','Partially satisfied'),
  73:('Core','Internal-only linked part-history workspace','9; G-08','Partially satisfied'),
  76:('Interface','Use applicable supplier facility/depot, aggregate to company without duplicated cases','3; 6.4','Satisfied'),
  78:('Interface','External scope derives from contact supplier-entity relationships','6.4','Satisfied'),
  79:('Interface','Supplier capability policy checked before new case/release; historical records preserved','6.2; G-07','Partially satisfied'),
  81:('Interface','Proposed supplier account administration owns activation; NCR validates current eligibility only','6.2; G-07','Partially satisfied'),
  82:('Boundary','Proposed supplemental internal locations do not grant supplier scope','6.4','Satisfied'),
  83:('Interface','Existing portal launches Intelex task-first supplier workspace','6.4; 9','Satisfied'),
  84:('Interface','Mutable classification controls source and descendant visibility independently of ownership','6.4; G-07','Partially satisfied'),
  87:('Boundary','Audit Finding remains audit issue record; optional shared internal CAR','2','Satisfied'),
  88:('Boundary','SQDIIR remains Internal NCR with separate review sequence and optional CAR','2','Satisfied'),
  89:('Boundary','Internal CAR structure remains distinct; supplier RCA stays within supplier case','1; 2','Satisfied'),
  90:('Boundary','Internal plan/implementation/effectiveness stages not applied to supplier responses','2; 7','Satisfied'),
  91:('Interface','Investigation-driven incident-to-supplier-NCR link','9; G-08','Partially satisfied'),
  92:('Interface','Shortlist role-qualified part suppliers; manufacturer default is correctable before release','5; 6.1; G-08','Partially satisfied'),
  93:('Core','Separate RMA, temporary unlinked disposition, reconciliation and distinct sort instructions','5; 7.3; G-06','Partially satisfied'),
  94:('Core','Sequential identity and normalized searchable business fields','5; 9; G-09','Partially satisfied'),
  95:('Interface','Proposed supplier visits/7-4 meeting lifecycle separate from generated output and NCR checks','9; G-08','Partially satisfied'),
  96:('Boundary','Environmental escalation formula is internal-only; never substitute for SQA risk','2; G-01','Satisfied'),
  97:('Interface','Use part hierarchy to investigate component responsibility; never assume assembly supplier is component manufacturer','5; 9; G-08','Partially satisfied'),
  98:('Interface','Pilot program/PPAP engineer owns initial pilot failure review; visibility classification does not select owner','9; G-08','Partially satisfied'),
  99:('Interface','Pilot replacement uses shipment header/part data-log/build-event structure and preserves failure linkage','9; G-08','Partially satisfied'),
  103:('Interface','Proposed Meetings work uses Supplier Tasks; domain-specific NCR responses/checks remain separate','9; G-08','Partially satisfied'),
  115:('Interface','Aggregate scorecard permission does not grant NCR source drill-through','6.4; 9','Satisfied'),
  117:('Core','Reporter supplier intake, SIA triage and distinct responsible-manufacturer PIR','4; 5; 9; G-08','Partially satisfied'),
  6:('Interface','SRM owns proposed role maintenance and confirmation; NCR consumes current eligible members rather than creating contact-review tasks','6.2; G-07','Partially satisfied'),
  74:('Interface','Governed NCR evidence and generated files remain in native storage; capacity, retention and protected historical versions are assessed before rollout','9; G-10; G-11','Partially satisfied'),
  86:('Boundary','Published scorecard results and corrections remain scorecard-owned; poor scores alone never generate NCRs','9','Satisfied'),
  113:('Interface','Preserve known facility/depot attribution; proposed annual company rollups do not duplicate NCR quantities','9; G-09','Partially satisfied'),
  116:('Interface','Scorecard/profile navigation may link source reports only after NCR security recheck; no scorecard native-mobile requirement imposed on NCR','9','Satisfied'),
}
import os
trace=[];excluded=[];source_manifest=[]
for p in sorted((ROOT/'docs').rglob('ADR-*.md')):
    m=re.match(r'ADR-(\d+)-',p.name)
    if not m: continue
    ident=int(m.group(1)); content=p.read_text(encoding='utf-8-sig')
    status=re.search(r'^status:\s*(.+)',content,re.M)
    title=re.search(r'^# (ADR-.*)',content,re.M)
    link=os.path.relpath(p,OUT).replace(os.sep,'/')
    label=f'[{title.group(1) if title else p.stem}](<{link}>)'
    source_manifest.append({'adr':f'ADR-{ident:03}', 'path':str(p.relative_to(ROOT)).replace(os.sep,'/'), 'status':status.group(1).strip() if status else 'Unresolved', 'sha256':hashlib.sha256(p.read_bytes()).hexdigest(), 'applicability':relevance[ident][0] if ident in relevance else 'Screened out'})
    if ident in relevance:
        scope,response,section,result=relevance[ident]
        trace.append([f'SN-{ident:03}',label,status.group(1).strip() if status else 'Unresolved',scope,response,section,result])
    else:
        excluded.append([label,status.group(1).strip() if status else 'Unresolved','No direct Supplier Nonconformance requirement identified; application-specific behavior remains with its owning component'])
trace_doc=['# Supplier Nonconformances — ADR applicability and traceability','',
           'Requirements are interpretations of repository ADRs, not new ADR decisions. Accepted architectural constraints are applied; proposed interfaces retain their source status. Satisfied means represented by the target design, not implemented or tenant-tested. Partially satisfied and Requires confirmation identify the unresolved gates in the main specification. Superseded decisions remain listed to prevent stale requirements being reintroduced.','',
           table(['Requirement','Source ADR','Source status','Applicability','Design response','Specification section / gate','Status'],trace),'',
           '## Remaining repository ADRs','',
           'Repository coverage index: these ADRs were excluded from the supplier NCR requirements register after scope screening. Their specialist workflows, calculations or application implementation details are not imported into this component.', '',
           table(['Source ADR','Source status','Scope disposition'],excluded),'']
(OUT/'supplier-nonconformances-adr-traceability.md').write_text('\n'.join(trace_doc),encoding='utf-8')
(OUT/'supplier-nonconformances-source-manifest.json').write_text(json.dumps({'review_date':REVIEW_DATE,'package_sha256':report['package_sha256'],'adrs':source_manifest},indent=2)+'\n',encoding='utf-8')
report['adr_files_screened']=len(source_manifest)
report['adr_requirement_rows']=len(trace)
report['adr_screened_out_rows']=len(excluded)
(OUT/'supplier-nonconformances-validation.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
print(json.dumps(report,indent=2))
