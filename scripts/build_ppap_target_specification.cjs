/* Reproducible DESIGN documentation, not an Intelex deployment package. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = path.resolve(__dirname, '..');
const dir = path.join(root, 'docs/phase 2/ppap/solution_specification');
fs.mkdirSync(dir, {recursive:true});
const baselinePath = path.join(root,'docs/phase 2/ppap/ootb-ppap-baseline-model/baseline-model.json');
const baseline = JSON.parse(fs.readFileSync(baselinePath,'utf8'));
const decisions = JSON.parse(fs.readFileSync(path.join(root,'docs/phase 2/ppap/target-requirements-decisions.json'),'utf8')).decisions;
const objects = [];
const obj = (id,name,purpose,domain='operation',extra={}) => {const o={id,name,purpose,domain,evidence:'Proposed',inheritance_parent:null,fields:[],initial_values:[],...extra};objects.push(o);return o;};
const field = (o,name,type,req='N',value='NULL',edit='System read only',life='Create Action Handler populates; native audit retains changes.',extra={}) => {
 const f={name,type,required:req,default:value,edit,lifecycle:life,evidence:'Proposed',...extra};o.fields.push(f);return f;
};
const txt=(o,n,r='N',d='NULL',e='Responsible engineer in Draft; read only after Issue',l='Stored on Save; preserve after Issue.',len=2000)=>field(o,n,`Text; max ${len} characters`,r,d,e,l);
const bool=(o,n,r='Y',d='FALSE',e='System read only',l='Create Action Handler initializes; named action updates; audit enabled.')=>field(o,n,'Yes/No (Boolean)',r,d,e,l);
const date=(o,n,r='N',d='NULL',e='System read only',l='Named Action Handler writes a stored calendar date.')=>field(o,n,'Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone',r,d,e,l);
const stamp=(o,n,l)=>field(o,n,'Date/Time; time-zone support enabled; store UTC, display user zone','N','NULL','System read only',l);
const number=(o,n,r='N',d='NULL',e='System read only',l='Named Action Handler writes; finite numeric values only.')=>field(o,n,'Float; finite; display up to 6 decimal places; no silent rounding of stored values',r,d,e,l);
const integer=(o,n,r='Y',d='0',e='System read only',l='Named Action Handler writes; integer validation.')=>field(o,n,'Integer (Int32); whole number',r,d,e,l);
const ref=(o,n,target,r='N',edit='Responsible engineer in Draft; read only after Issue',life='Stored relationship; validate scope on Save and action.',inverse=null,cat=false,d='NULL')=>field(o,n,`M:1 to ${target.name}; target ${r==='Y'?'1':'0..1'}; source 0..*; ${inverse?`inverse ${target.name}.${inverse}`:'inverse disabled'}`,r,d,edit+(cat?'; new selection filters Active?=TRUE; preserve existing inactive references read only':''),life,{target:target.id,inverse,catalogue:cat,relationship:'M:1'});
const grid=(target,n,source,f)=>field(target,n,`Inverse 1:M grid from ${source.name}.${f.name}`,'N','None','Read only; apply record and attachment security independently','Navigation over source relationship only; no second stored relationship.',{source:source.id,source_field:f.name,relationship:'1:M'});
const link=(o,n,target,inverse,r='Y',edit='System read only; creation action binds exact owning record; no later reassignment',life='Create Action Handler binds relationship in the authorized creation context; never user-reassign; preserve related-record history.')=>{const f=ref(o,n,target,r,edit,life,inverse);grid(target,inverse,o,f);return f;};
const files=(o,n,e,l)=>field(o,n,'Native Intelex attachment collection; native file identity, name, length and content type; no new file table','N','None',e,l,{native:true});
const ext=(id,name,purpose,authority,extra={})=>obj(id,name,purpose,'external',{evidence:'Extracted / Unresolved binding',authority,...extra});
const catalogue=(id,name,values=[])=>{
 const o=obj(id,name,'Governed single-selection values; localizable Name, stable non-localizable Code.','catalogue');
 txt(o,'Code','Y','None; unique within this concrete catalogue','PPAP configuration administrator; immutable after first reference','Save validates uniqueness; never translated.',100);
 txt(o,'Name','Y','None','PPAP configuration administrator; localizable English launch label','Save updates display label; existing references retained.',255);
 bool(o,'Active?','Y','TRUE','PPAP configuration administrator','FALSE prevents new selection and new generation; historical references remain valid.');
 number(o,'Sort','N','NULL','PPAP configuration administrator','Presentation order, then Code for ties.');
 o.initial_values=values.map((x,i)=>({Code:x[0],Name:x[1],'Active?':'TRUE',Sort:(i+1)*10}));return o;
};

// Shared authorities are referenced, never recreated or reparented by this design.
const project=ext('project','Project Framework Project','Existing abstract direct inheritance base, all 27 declared fields remain under the baseline authority.','../ootb-ppap-baseline-model/field-catalogue.md',{stable_id:'89351fdb-6445-4899-86da-d888a1787563',internal_name:'ProjectFwk_ProjectAbstractObject',abstract:true,inheritance_parent:null,baseline_declared_fields:27});
const employee=ext('employee','Employee','Authenticated individual actor and assignee.','../ootb-ppap-baseline-model/field-catalogue.md',{stable_id:'6afb3ac6-96db-4072-9293-4d02699d1264',internal_name:'SysEmployeeEntity'});
const group=ext('group','Group','Native group membership, internal pools and notification recipients; do not invent a second identity store.','../../supplier-relationship-management/solution_specification/object_model/supplier-management-role-logical-model.md');
const facility=ext('facility','Supplier Facility','Authoritative manufacturing facility and shipping-depot entity, distinguished by governed SRM entity semantics.','../../supplier-relationship-management/solution_specification/object_model/supplier-management-role-logical-model.md',{internal_name:'SupplierMgmt_FacilityObject'});
const supplierAbstract=ext('supplier_abstract','Supplier Abstract','Exact supplier entity for role resolution, including facility/depot; never infer membership from company.','../../supplier-relationship-management/solution_specification/object_model/supplier-management-role-logical-model.md',{internal_name:'SupplierMgmt_SupAbstractObject',abstract:true});
const supplierRole=ext('supplier_role','Supplier Specific Role','Shared target Group-derived exact-entity role; current inherited Members determine action eligibility; tenant deployment binding unverified.','../../supplier-relationship-management/solution_specification/object_model/supplier-management-role-logical-model.md');
const managementRole=ext('management_role','Supplier Management Role','Shared governed target role library used to resolve Supplier Specific Role; no new PPAP role catalogue; tenant deployment binding unverified.','../../supplier-relationship-management/solution_specification/object_model/supplier-management-role-logical-model.md');
const visibility=ext('visibility','Shared Record Visibility Classification','Governed development/mass-production access classification; separate from criticality flags.','../../supplier-relationship-management/adrs/ADR-084-apply-mutable-visibility-classifications-to-supplier-related-records.md',{binding:'Exact target object/field metadata unresolved; ADR-084 is semantic authority.'});
const part=ext('part','Operational Part','Canonical operational part supplied by separately defined BOMEX/PartsMaster connection; isolated Product Integration objects are excluded.','../../product-management/ADR-062-create-a-composite-part-master-from-bomex-and-partsmaster-data.md',{binding:'Canonical operational identity and native target type unresolved.'});
const drawing=ext('drawing','Operational Drawing Revision','Operational released drawing/revision and source lineage supplied by separate BOMEX/ECS connection.','../ADR-030-stage-bomex-drawing-and-ecs-data-and-create-source-linked-draft-ppaps.md',{binding:'Native target object/field IDs unresolved; do not bind isolated API objects.'});
const pcr=ext('pcr','MOC PCR','Single supplier-initiated PCR under MOC; PPAP-side launch/callback contract only.','../../../management-of-change/ADR-068-implement-distinct-change-processes-as-moc-subtypes-while-preserving-the-core-moc-framework.md',{binding:'Exact MOC PCR subtype metadata and launch action binding unresolved.'});
const inspection=ext('inspection','Inspection Result','Specialist inspection execution and frozen inspection-specification version; evidence accepted within PPAP.','../../pilot-part-data/ADR-041-reuse-one-inspection-framework-across-pilot-part-ppap-sample-and-internal-safe-launch.md',{binding:'Native result/specification version metadata unresolved.'});
const specVersion=ext('inspection_specification_version','Released Inspection Specification Version','Released version governing drawing/part inspection; Product Management remains its sole authority.','../../product-management/ADR-038-manage-versioned-part-inspection-specifications-in-product-management.md',{binding:'Exact version object, release-state and scope metadata unresolved.'});
const pilot=ext('pilot','Pilot Part Program','New-model programs only; physical build-event context; no blanket PPAP approval gate.','../../pilot-part-data/ADR-098-initiate-pilot-part-programs-from-ppap-build-event-context.md',{binding:'Program creation adapter metadata unresolved.'});
const integratedTask=ext('integrated_task','Integrated Task','Existing linked originating APQP work item; successful closure only on actual PPAP approval.','../ootb-ppap-baseline-model/field-catalogue.md',{stable_id:'04b40719-eb5d-4202-9811-60b039739c78',internal_name:'ProjectFwk_TaskObject'});
const apqp=ext('apqp','APQP','Existing APQP owns PPAP association; existing behavior retained.','../ootb-ppap-baseline-model/field-catalogue.md',{stable_id:'f03e2731-655c-4af2-9c84-d3035e3fc61a',internal_name:'APQP_APQPObject'});
const settings=ext('settings','APQP Settings','Existing required compatibility setting on concrete PPAP; not authority for new policy.','../ootb-ppap-baseline-model/field-catalogue.md',{stable_id:'79918b70-a3d1-48a1-9708-80b2f8dfba92',internal_name:'APQP_SettingsObject'});
for(const o of [visibility,part,drawing,pcr,inspection,specVersion,pilot,supplierRole,managementRole])o.evidence='Proposed shared contract / Unresolved native tenant binding';
facility.inheritance_parent=supplierAbstract.id;
supplierRole.inheritance_parent=group.id;
managementRole.inheritance_parent=group.id;

const ppapType=catalogue('ppap_type','PPAP Type',[['NEW_MODEL','Model change'],['RUNNING_CHANGE','Running change'],['PROCESS_CHANGE','Process change']]);
const workPattern=catalogue('work_pattern','PPAP Work Pattern',[['SUPPLIER','Supplier submission'],['INTERNAL','Internal engineering work'],['INSPECTION','Inspection-team work'],['JOINT','Joint inspection']]);
const answerType=catalogue('answer_type','PPAP Answer Type',[['TEXT','Text'],['NUMBER','Number'],['BOOLEAN','Yes or no'],['DATE','Calendar date']]);
const requirementCategory=catalogue('requirement_category','PPAP Requirement Category');
const phase=catalogue('phase','PPAP Schedule Phase');
const stage=catalogue('stage','PPAP Manufacturing Stage');
const noPpapReason=catalogue('no_ppap_reason','PPAP Drawing Review Exception Reason');

const ppap=obj('ppap','PPAP','Drawing-scoped approval for exactly one manufacturing facility and locked selected part set.','operation',{evidence:'Extracted identity / Proposed target changes',stable_id:'a99ca3b8-48ed-43eb-9696-a1dd26122c39',internal_name:'APQP_PPAPAbstractObject',inheritance_parent:'project',workflow:'PPAP target workflow'});
const requirement=obj('requirement','PPAP Requirement','Stable authoring identity of a governed element type.','configuration');
const reqVersion=obj('requirement_version','PPAP Requirement Version','Immutable approved publication of requirement content and routing; genuinely required operational configuration evidence.','configuration');
const question=obj('question','PPAP Question','Typed checklist question authored within a requirement.','configuration');
const questionVersion=obj('question_version','PPAP Question Version','Immutable question component published with its requirement version.','configuration');
const template=obj('template','PPAP Template','Stable authoring identity of an SIA requirement matrix for a PPAP type.','configuration');
const templateVersion=obj('template_version','PPAP Template Version','Immutable published complete requirement/date/applicability matrix.','configuration');
const templateLine=obj('template_line','PPAP Template Requirement','Authoring association of template and governed requirement with applicability and scheduling attributes.','configuration');
const lineVersion=obj('template_line_version','PPAP Template Requirement Version','Immutable matrix row; captures the exact requirement version resolved during publication.','configuration');
const policy=obj('policy','PPAP Operating Policy','One governed current policy for configurable reminder and review targets.','configuration');
const model=obj('model','PPAP Model Change','One governing model/program with owned schedule and physical build-event navigation.','schedule');
const modelDate=obj('model_date','PPAP Model Date','One model × phase × manufacturing-stage calendar milestone.','schedule');
const buildEvent=obj('build_event','PPAP Build Event','Physical build occurrence, separate from the date matrix.','schedule');
const release=obj('release','PPAP Engineering Release','Accepted immutable source-linked operational drawing release context from separate intake, including controlled manual fallback.','intake');
const releasePart=obj('release_part','PPAP Engineering Release Part','Per-part source classifications and mapping for an accepted drawing release.','intake');
const review=obj('review','PPAP Drawing Review','Initial engineering review for a released drawing before PPAP exists, with inspection-specification disposition.','intake',{workflow:'Drawing review workflow'});
const ppapPart=obj('ppap_part','PPAP Part','Exact selected part and authoritative criticality snapshot, plus integrated part-warrant masses.');
const depot=obj('depot','PPAP Shipping Depot','Facility approval context linked to distinct shipping depots for routing; not an additional approval scope.');
const element=obj('element','PPAP Element','One independently routed requirement work item; native workflow owns work/review/terminal state.','operation',{workflow:'PPAP element workflow'});
const answer=obj('answer','PPAP Answer','One editable typed answer per element and question version; native audit preserves preparation changes.');
const evidence=obj('evidence','PPAP Evidence Snapshot','Immutable multi-file/answer submission, approval and reuse lineage required by ADR-023; native audit alone cannot provide independent copied evidence containers.');
const evidenceAnswer=obj('evidence_answer','PPAP Evidence Answer','Immutable typed answer component copied into an evidence snapshot.');
const resultLink=obj('result_link','PPAP Inspection Result Link','Links a required element to a specialist result/version with engineer acceptance evidence.');
const pilotLink=obj('pilot_link','PPAP Pilot Program Link','Links new-model PPAP and physical build event to an externally owned pilot program.');
const thread=obj('thread','PPAP Discussion Thread','Subject and immutable audience boundary, independent of workflow tasks.','discussion');
const post=obj('post','PPAP Discussion Post','Append-only posted body and attachments, optional reply relationship.','discussion');

// Existing concrete fields retained for ACTIVE target use. Remaining legacy schema is outside target capture.
const baselineField=(o,internal,edit,life,req=null)=>{
 const b=baseline.fields.find(f=>f.owner_id===o.stable_id&&f.internal_name===internal);if(!b)throw Error('Missing baseline '+internal);
 const fc=JSON.parse(fs.readFileSync(path.join(root,'docs/phase 2/ppap/ootb-ppap-baseline-model/field-contract.json'),'utf8')).find(f=>f.field_id===b.stable_id);
 return field(o,b.display_name,fc.row[1],req||(b.metadata.IsRequired?'Y':'N'),fc.row[3],edit,life,{evidence:'Extracted field / Proposed target behavior',stable_id:b.stable_id,internal_name:internal,source_pointer:b.source_pointer});
};
baselineField(ppap,'Id','Native identity only; no user edit','Native creation allocates identity; preserve duplicate-name binding ambiguity with inherited Id until tenant verification.');
const ownerField=baselineField(ppap,'ProjectOwner','Responsible engineer or administrator selects current eligible internal engineer; required before Issue; audited reassignment while open','Issue and all engineer actions recheck assignment; existing ProjectOwner is the sole responsible-engineer field.','Conditional');ownerField.target=employee.id;ownerField.relationship='M:1';ownerField.inverse=null;
const overallDue=baselineField(ppap,'SubmissionDate','Engineer editable while open with mandatory date-change reason; supplier read only','Current overall PPAP due date; target adapter stops unguarded bidirectional Task.DueDate overwrites; audit old/new/reason.');overallDue.default='None; engineer supplies overall due date at Draft creation, or originating APQP launch explicitly copies its linked Task due date once when present; no unconditional Task expression';
const settingsField=baselineField(ppap,'Settings','System selected existing APQP Settings; hidden from suppliers','Create handler satisfies required compatibility metadata; guard old settings-dependent handlers for target branch.');settingsField.target=settings.id;settingsField.relationship='M:1';settingsField.inverse=null;
const taskField=baselineField(ppap,'Task','System populated by originating APQP launch; authorized internal navigation only','Compatibility relationship unchanged; approval emits outcome and completes only a single explicitly bound obligation after scope-aware checks; multiple linked PPAPs require originating owner/adapter resolution. Cancellation flags owner without successful fulfilment.');taskField.target=integratedTask.id;taskField.relationship='M:1';taskField.inverse=null;
const apqpField=baselineField(ppap,'APQPAbstract','Read-only authorized internal navigation','Existing inverse relationship from APQP.PPAPAbstract; no duplicate stored relationship.');apqpField.target=apqp.id;apqpField.relationship='legacy-inverse';
baselineField(ppap,'PPAPCompDate','System read only','Approve PPAP or non-safety Complete PPAP Action Handler writes local business date once; closed immutability.');
const display=baselineField(ppap,'DisplayField','System calculated read only','Target display calculation uses inherited RecordNo (Record No.), Drawing Number and Drawing Revision Code in that order, separator " / "; NULL context components omitted; verify expression syntax and input/output length before binding; never silently truncate identity.');display.default='Declarative continuing display calculation from inherited Project Framework Project.RecordNo, PPAP.Drawing Number and PPAP.Drawing Revision Code; no Product dependency';display.type='Text (nvarchar); proposed target max 512 characters (baseline exported no maximum)';
bool(ppap,'Target Configuration?','Y','FALSE for existing; TRUE for target create path only','System read only; hidden','Target Create handler sets TRUE before guarded shared handlers run; never toggle after creation.');
ref(ppap,'Type',ppapType,'Y',undefined,'Draft Save validates; immutable at Issue.',null,true);
ref(ppap,'Manufacturing Facility',facility,'Conditional','Engineer selects current eligible manufacturing facility in Draft; supplier read only; mandatory before Issue','Issue freezes scope; never use inherited Location or Supplier as this relationship.');
ref(ppap,'Drawing Revision',drawing,'Conditional','System maps accepted operational source; engineer selects validated source in Draft; mandatory before Issue','Issue freezes released engineering context; a different engineering change creates a NEW PPAP.');
link(ppap,'Engineering Release',release,'PPAPs','Conditional','Engineer selects accepted authoritative drawing/part context in Draft; mandatory before Issue for ALL origins including PCR/manual','PCR/manual may reference the existing accepted released drawing context without a new ECS event; controlled intake captures it if absent. Create initializes source; Issue snapshots classifications; no in-flight absorption.');
txt(ppap,'Drawing Number','Conditional','PPAP Engineering Release.Drawing Number at source selection','System read only; must be populated before Issue','Controlled manual fallback imports authoritative source; issue locks number, no PPAP override.',100);
txt(ppap,'Drawing Revision Code','Conditional','PPAP Engineering Release.Drawing Revision Code at source selection','System read only; mandatory before Issue','Issue freezes original revision; later change creates new PPAP.',100);
link(ppap,'Drawing Review',review,'PPAPs','N','System set by Launch PPAP; read only','Retain initial review provenance.');
ref(ppap,'Originating PCR',pcr,'N','System set by authorized Proceed to PPAP adapter; internal read only','Idempotent launch per PCR decision token and approved scope; no shipment authorization.');
ref(ppap,'Replaces PPAP',ppap,'N','Engineer selects relevant cancelled PPAP in Draft; read only after Issue','Informational lineage only; does not bypass cancelled-source evidence exclusion.');
bool(ppap,'Service Parts Only?','Y','FALSE','Engineer in Draft; mandatory validation against approved part purpose before Issue','Eligibility adapter queries central supplier status capabilities; service flag is purpose, not a supplier-status override.');
ref(ppap,'Visibility Classification',visibility,'Y','Designated visibility manager only; supplier read only','Controlled audited ADR-084 handover may change access without changing criticality, workflow or ownership.');
link(ppap,'Model Change',model,'PPAPs','Conditional','Engineer in Draft; required when Type.Code=NEW_MODEL; optional for explicit connected other types','Changing Type away from NEW_MODEL does not silently clear populated context: Draft user confirms retention or clears all model fields together; immutable context after Issue.');
ref(ppap,'Manufacturing Stage',stage,'Conditional','Engineer in Draft; required when Model Change populated; hidden and NULL when no Model Change','Draft context clearing clears stage after warning; issued context locked.',null,true);
bool(ppap,'Schedule Connected?','Y','TRUE when Model Change selected; FALSE otherwise','Engineer may Disconnect/Reconnect while open with warning and reason; FALSE forced if Model Change NULL','Schedule recalculation handler operates only when TRUE; manual dates persist disconnected.');
ref(ppap,'Template',template,'Conditional','Engineer in Draft; active published template matching Type; mandatory before Issue','Select Template action resolves exact active published version; cannot switch while generated elements remain.');
ref(ppap,'Template Version',templateVersion,'Conditional','System read only; mandatory before Issue','Initialize Elements resolves exact active version under lock, stores and never refreshes on later publication.');
ref(ppap,'Operating Policy',policy,'Y','System read only','Create handler binds single active operating policy; current configurable settings govern future reminders; issued deadline snapshots remain fixed.');
ref(ppap,'Engineer Routing Entity',supplierAbstract,'Conditional','Engineer or administrator in Draft; required before Issue; exact governed supplier context','Resolve internal supplier-specific engineer role by Type and Operating Policy role mapping; no company-to-facility/depot fallback; issued routing context retained.');
ref(ppap,'Engineer Role',supplierRole,'Conditional','System read only; required before Issue','Resolve Engineer Routing Entity plus current policy role for Type; Project Owner must be current eligible member at Issue and on engineer action; reassignment stays in eligible role.');
ref(ppap,'Management Approver Pool',group,'Conditional','Administrator sets governed eligible group; mandatory before Issue when any selected part Important Safety?=TRUE','Current membership validated on final action; no HR Immediate Supervisor shortcut.');
ref(ppap,'Final Management Approver',employee,'Conditional','Engineer selects current eligible pool member before Complete PPAP when management required; otherwise NULL and hidden','Assign/reassign only while open, notify; engineer can select self if eligible; no automatic stage bypass.');
date(ppap,'Issued Overall Due Date','Conditional','NULL','System read only; mandatory once issued','Issue snapshots PPAP Due Date once.');
stamp(ppap,'Issued At','Issue writes authenticated server timestamp once; retained after closure.');
ref(ppap,'Issued By',employee,'N','System read only','Issue writes actual actor.');
stamp(ppap,'Scope Confirmed At','Confirm Scope supplier action writes once; no mass requirement at this point.');
ref(ppap,'Scope Confirmed By',employee,'N','System read only','Confirm Scope writes authenticated supplier actor; actual platform external-user identity binding must be verified.');
bool(ppap,'Replacement Required?','Y','FALSE','System read only; internal warning and supplier non-technical action hold','Source correction handler sets TRUE only for authoritative criticality correction applicable to this issued original context; blocks finalization until engineer cancels/replaces. Different engineering revision alone never sets it.');
txt(ppap,'Replacement Reason','Conditional','NULL','System read only; required when Replacement Required?=TRUE, otherwise NULL','Source correction handler stores affected context and changed flags; reason persists on cancellation.');
stamp(ppap,'Management Submitted At','Complete PPAP writes current submission/resubmission time on entry to Management Review; native workflow retains each prior entry.');
date(ppap,'Management Review Due Date','N','NULL','System read only; hidden unless Management Review or its history','Complete PPAP computes local submission date plus current policy Management Review Days; freeze for that review cycle.');
txt(ppap,'Management Return Comment','Conditional','NULL','Current eligible management approver; internal only; required for Return for More Information; otherwise retain prior value read only','Return Action Handler validates nonblank, writes audit/workflow history; never include in supplier notification.');
txt(ppap,'Cancellation Reason','Conditional','NULL','Responsible engineer or PPAP administrator through Cancel PPAP only; required on cancellation; otherwise NULL','Cancel writes before cascade; preserve after terminal cancellation.');
stamp(ppap,'Cancelled At','Cancel PPAP writes only after outstanding work cascade succeeds.');
ref(ppap,'Cancelled By',employee,'N','System read only','Cancel PPAP writes actual actor after successful cascade.');
stamp(ppap,'Approved At','Final approval or non-safety Complete PPAP writes once, in same logical transaction as immutable output creation.');
ref(ppap,'Approved By',employee,'N','System read only','Records actual authenticated approving actor; engineer for non-safety; eligible management actor for safety.');
txt(ppap,'Approved Manufacturing Facility Label','Conditional','NULL','System read only; required at approval, NULL beforehand','Approval Action Handler snapshots Manufacturing Facility native display value with its stable identity; native display-field binding verified under certificate gate; immutable source for certificate rendering/authorized retry.',255);
txt(ppap,'Approved Supplier Label','Conditional','NULL','System read only; required at approval, NULL beforehand','Approval Action Handler snapshots Manufacturing Facility.ParentCompany native display value; exact existing shared field binding verified before build; stable facility/company identity remains in shared relationship; immutable certificate evidence.',255);
txt(ppap,'Approved Authority Label','Conditional','NULL','System read only; required at approval, NULL beforehand','Approval Action Handler snapshots authenticated Approved By native display value; actual actor identity remains Approved By; label immutable so later person-name changes cannot rewrite certificate.',255);
txt(ppap,'Certificate Reference','N','NULL','System read only; authorized supplier/internal view after approval','Approve allocates unique opaque reference; verification always requires authorized access; QR optional, no public endpoint assumed.',100);
files(ppap,'Approval Certificate','Read only authorized download after approval','Approval renderer creates controlled PDF from approved frozen package; exactly one active issued artifact, retry by Certificate Reference; retain original bytes.');

// Per-part approval scope and separate shipping-depot routing.
link(ppapPart,'PPAP',ppap,'Parts');
ref(ppapPart,'Part',part,'Y','Engineer selects active drawing-associated part in Draft','Validate exact drawing association and facility eligibility; no free-text part identity.');
ref(ppapPart,'Source Release Part',releasePart,'Conditional','System read only; mandatory before Issue for ALL origins','Selection handler requires Part equal selected Part, Engineering Release equal PPAP.Engineering Release and its Drawing Revision equal PPAP.Drawing Revision; copies authoritative flags and identity; missing/mismatched provenance blocks Issue.');
txt(ppapPart,'Part Number','Y','Source Release Part.Part Number','System read only','Select Part copies display identity; frozen at Issue.',100);
txt(ppapPart,'Part Description','N','Source Release Part.Part Description','System read only','Select Part captures description for approved certificate and historical scope.',255);
for(const n of ['Important Safety?','Important Quality?','Regulated?'])bool(ppapPart,n,'Conditional','NULL until authoritative source known','System read only; all three must be non-NULL before Issue','Select Part copies Source Release Part.'+n+'; no PPAP override; Issue freezes; applicable correction requires cancel/replace.');
number(ppapPart,'Average Actual Mass (kg)','Conditional','NULL','Authorized supplier may edit before final submission; internal engineer read only','Required for every included part before Complete PPAP; >0; freeze at final submission, reopen for non-scope correction on management return only.');
number(ppapPart,'Average Metal Mass (kg)','Conditional','NULL','Authorized supplier may edit before final submission; internal engineer read only','Required for every included part before Complete PPAP; 0 <= value <= Average Actual Mass (kg); 0 confirms no metal; NULL remains unknown; freeze at final submission; coordinated correction of both mass fields on management return uses supplier-safe feedback, audit and refreezes on resubmission.');
link(depot,'PPAP',ppap,'Shipping Depots');
ref(depot,'Shipping Depot',facility,'Y','Engineer selects eligible shipping depot for Manufacturing Facility context while open; audited; no scope expansion','Validate governed depot semantics and entity access; unique PPAP+Shipping Depot; does not change approved manufacturing scope.');

// Element assignment, data preparation and independent native workflow.
link(element,'PPAP',ppap,'Elements');
ref(element,'Requirement Version',reqVersion,'Y','System read only','Initialize Elements copies exact Template Requirement Version.Requirement Version; never latest on reopen.');
ref(element,'Template Requirement Version',lineVersion,'Conditional','System read only; required for template-generated elements, NULL for governed additions in Draft','Initialize Elements stores row that generated work; Add Governed Element in Draft selects active published Requirement Version; unique PPAP+stable Requirement identity. No arbitrary new requirement type.');
txt(element,'Setup Addition Reason','Conditional','NULL','Engineer in Draft; mandatory when Template Requirement Version=NULL; otherwise NULL','Add Governed Element records reason and exact requirement version; source identity and applicability lock at Issue.');
bool(element,'Required?','Y','Template Requirement Version applicability evaluation; TRUE for Add Governed Element','Engineer in Draft only; supplier read only','Protected requirements cannot become FALSE; FALSE requires Exclusion Reason; after Issue never change.');
bool(element,'Protected?','Y','Requirement Version.Protected? OR applicable Template Requirement Version.Protected?; absent template row contributes FALSE','System read only','Initialize Elements/Add Governed Element computes combined mandate; requirement-set and flags freeze at Issue.');
txt(element,'Exclusion Reason','Conditional','NULL','Engineer in Draft; required when Required?=FALSE; visible internal and supplier applicable explanation; cleared on Draft change back to TRUE','Issue retains excluded row and reason as scope evidence; no operational task/reminders for excluded work.');
ref(element,'Work Pattern',workPattern,'Y','System read only','Initialize Elements copies Requirement Version.Work Pattern; issue locks routing pattern.',null,true,'Requirement Version.Work Pattern');
ref(element,'Routing Entity',supplierAbstract,'Conditional','Engineer chooses exact linked depot/facility in Draft; required for SUPPLIER pattern and where internal supplier-specific route applies; otherwise NULL','Resolve exact-entity Supplier Specific Role; no company/facility/depot fallback; preserve used entity after Issue.');
ref(element,'Assigned Role',supplierRole,'Conditional','System resolves exact Routing Entity plus Requirement Version.Routing Role; engineer can resolve missing assignment before issue','Required when pattern SUPPLIER or configured role routing applies; recheck current membership at actions; no automatic fallback.');
ref(element,'Assigned Team',group,'Conditional','Engineer selects inspection team for Work Pattern.Code=INSPECTION or JOINT; hidden/NULL for other patterns unless requirement config defines internal team','Current eligible members can act; no copy of members into another group.');
ref(element,'Assigned Person',employee,'N','Engineer may assign/reassign eligible individual while open; person must remain eligible for entity/team/role context','Initialize defaults PPAP.Project Owner for INTERNAL when no separate configured route; otherwise NULL leaves current eligible role/team responsible. Issue requires a real eligible route. Assignment handler audits/notifies; no automatic overdue reassignment.');
ref(element,'Schedule Phase',phase,'N','Engineer may assign in Draft or Move Schedule Phase for open schedule-connected work with mandatory reason; supplier read only','Initialize copies Template Requirement Version.Schedule Phase; NULL for manual date rules. Model-specific bulk phase move validates new cell, warns/clears incompatible Manual Due Date only on connected work, recalculates open work; disconnected manual dates await explicit Reconnect; completed/closed work and issued baseline/config lineage preserved.',null,true,'Template Requirement Version.Schedule Phase, otherwise NULL');
integer(element,'Offset Days','Y','Template Requirement Version.Offset Days, otherwise 0','Read only for template row; engineer in Draft for governed addition','Integer calendar offset frozen at Issue; may be negative.');
date(element,'Calculated Due Date','N','NULL','System read only','Initialize/recalculate uses exact Model Change + Schedule Phase + Manufacturing Stage date plus Offset Days; NULL when no connected model rule.');
date(element,'Manual Due Date','N','NULL','Engineer while open with mandatory reason; supplier read only','Manual date used while disconnected or explicit authorized per-element override; clearing warns and returns connected calculation.');
date(element,'Effective Due Date','Conditional','NULL','System read only; required for every Required?=TRUE element before Issue; NULL permitted for excluded work','Date handler uses Manual Due Date if supplied, otherwise Calculated Due Date; connected refresh changes open non-overridden work only. Past dates warn, never block solely for age.');
date(element,'Issued Baseline Due Date','Conditional','NULL','System read only; required for required elements after issue','Issue snapshots Effective Due Date once; never recalculated.');
txt(element,'Date Change Reason','Conditional','NULL','Engineer required on manual date change, Disconnect/Reconnect and bulk updates; internal only; retain last reason otherwise','Save handler watches Manual Due Date, Effective Due Date and schedule connection action; native audit must retain each old/new date, actor, timestamp and reason.');
date(element,'Engineer Review Due Date','N','NULL','System read only; displayed during Engineer Review and historical reports','Submit/resubmit computes local submission date plus Operating Policy.Engineer Review Days; distinct from supplier due date.');
txt(element,'Submission Comment','N','NULL','Current assignee may edit in Work In Progress; engineer read only','Submit snapshots to Evidence Snapshot.Submission Comment; begin correction prepares fresh value while previous submission stays frozen.');
files(element,'Working Files','Current assignee may edit only Work In Progress while issued PPAP In Progress; supplier uses scope gate on Submit','Submit copies to immutable Evidence Snapshot.Files; no shared mutable container; clearing working draft never deletes snapshot copies.');
ref(element,'Current Submission',evidence,'N','System read only','Submit stores exact newly frozen snapshot; return preserves it in history; points to current submitted cycle.');
ref(element,'Latest Approved Snapshot',evidence,'N','System read only','Approve Element or Retain Evidence updates after approval; correction reopening retains prior pointer until replacement approval.');
txt(element,'Review Feedback','Conditional','NULL','Responsible engineer on Return Element; assignee-visible; required on return; previous feedback retained in native history','Return writes to current snapshot feedback and workflow history; supplier-safe content only; rework quality separate from timeliness.');
txt(element,'Correction Reason','Conditional','NULL','Responsible engineer on Reopen for Correction; required for approved element; otherwise NULL or retained historical reason','Only before PPAP closure and only same scope/classes/requirement set; never for engineering change; native reopen action binding must be verified.');
stamp(element,'First Complete Submission At','First successful complete supplier Submit writes once; mandatory file/answer checks precede write; never overwritten by rejection/resubmission.');
date(element,'First Submission Issued Due Date','N','NULL','System read only','First complete supplier Submit copies Issued Baseline Due Date for frozen timeliness comparison.');
date(element,'First Submission Effective Due Date','N','NULL','System read only','First complete supplier Submit copies Effective Due Date for second frozen timeliness comparison.');
stamp(element,'Retained At','Retain Evidence writes for explicit retained path; does not create a supplier-submission performance event.');

// Frozen evidence is a business requirement, not a replacement for native audit/workflow history.
link(evidence,'Element',element,'Evidence Snapshots');
integer(evidence,'Sequence','Y','Next integer within Element under lock','System read only','Submit/Retain allocates with unique Element+Sequence; retry key action correlation, not double-click count.');
txt(evidence,'Submission Comment','N','PPAP Element.Submission Comment on Submit','System read only; assignee may see own active submission; rejected snapshots internal history','Submit copies once; no direct edits.',2000);
files(evidence,'Files','System writes at Submit/Retain; read only download subject to snapshot audience','Copy original bytes and native file metadata; validate copy completeness before workflow transition; approved/rejected history retained; no automatic deletion.');
ref(evidence,'Reused From',evidence,'N','System read only; internal lineage navigation only','Retain stores immediate source; fresh submission NULL. Never grant receiving supplier access to source PPAP through lineage.');
txt(evidence,'Compatibility Confirmation','Conditional','NULL','Engineer via Retain Evidence; required when Reused From populated; otherwise NULL','Explicit confirmation of revision and selected-part compatibility; records source/receiving frozen contexts; same facility/drawing/element validated.');
txt(evidence,'Nonlatest Selection Reason','Conditional','NULL','Engineer via Retain Evidence; required if selected source differs from latest eligible approved snapshot; otherwise NULL','Store decision at selection; suggested latest determined by Approved At then immutable identity as tie breaker.');
stamp(evidence,'Submitted At','Submit or Retain records actual action time once; native history retains action correlation.');
ref(evidence,'Submitted By',employee,'Y','System read only','Submit/Retain writes actual actor identity; external identity binding must be verified.');
stamp(evidence,'Approved At','Approve Element or Retain Evidence records approval once; absent until approved; never clear when element correction reopens.');
ref(evidence,'Approved By',employee,'N','System read only','Engineer approval or explicit retention actor stamps once; engineer can approve own internal work.');
stamp(evidence,'Rejected At','Return Element records rejection once on current snapshot; rejected snapshot never becomes reusable.');
txt(evidence,'Review Feedback','Conditional','NULL','System read only; assignee sees current return feedback, prior rejected snapshot remains internal','Return copies nonblank Element.Review Feedback; approved snapshot cannot later become rejected.');
// Submit and review are lifecycle events on Element; no custom evidence-state enumeration.

function typedValues(o,edit,sourcePrefix=null){
 const types=[['Answer - Text','Text; max 8000 characters','TEXT'],['Answer - Number','Float; finite; no silent rounding','NUMBER'],['Answer - Yes or No','Nullable Boolean; NULL is unanswered','BOOLEAN'],['Answer - Date','Date; no time component','DATE']];
 for(const [n,t,c] of types)field(o,n,t,'Conditional',sourcePrefix?`Submit: ${sourcePrefix}.${n}; Retain: selected source PPAP Evidence Answer.${n}, or reconciled receiving PPAP Answer.${n}`:'NULL',edit+`; visible when Question Version.Answer Type.Code=${c}; required only when that type matches AND Question Version.Required?=TRUE; optional matching-type questions remain visible; other types hidden`,sourcePrefix?`Submit/Retain Action Handler copies named source value; immutable, other typed values NULL. Preserve original source question version; receiving required answers must also be satisfied, never coerce changed answer types.`:`Save clears other typed fields only in editable preparation; if published type changes it creates a new Question Version, never mutate old question/answer context. Submit validates the matching value (FALSE and numeric 0 count as answered).`);
}
link(answer,'Element',element,'Answers');
ref(answer,'Question Version',questionVersion,'Y','System read only','Initialize Elements creates exactly one answer per Element+Question Version; resubmission edits same working answer.');
typedValues(answer,'Current assignee may edit Work In Progress only');
link(evidenceAnswer,'Evidence Snapshot',evidence,'Answers');
ref(evidenceAnswer,'Question Version',questionVersion,'Y','System read only','Submit/Retain copies exact question version; unique Evidence Snapshot+Question Version.');
typedValues(evidenceAnswer,'System read only','PPAP Answer');
link(resultLink,'Element',element,'Inspection Results');
ref(resultLink,'Inspection Result',inspection,'Y','Assignee links authorized result during Work In Progress','Freeze exact result/specification-version reference on element submission; detailed measurements remain outside PPAP.');
txt(resultLink,'Specification Version Reference','Y','Authoritative linked result specification identifier','System read only','Link result adapter resolves exact frozen specification version; mutable latest-spec pointer is insufficient.',255);
txt(resultLink,'Result Version Reference','Y','Authoritative immutable result/version identifier','System read only','Link adapter must prove referenced result version immutable; if external tool only offers mutable result, copy controlled accepted result artifact into Evidence Snapshot.Files at Submit and preserve this source/version reference.',255);
bool(resultLink,'Accepted?','Y','FALSE','Responsible engineer in Engineer Review, or explicit Retain Evidence action with current eligibility/compatibility validation','Explicit acceptance required for result relied upon by required inspection element; Retain creates receiving snapshot-specific link and stamps engineer acceptance through named action; native audit retains actor/time; unrelated failed programs do not gate approval.');
txt(resultLink,'Acceptance Comment','Conditional','NULL','Engineer; required when rejecting result for use; optional when Accepted?=TRUE; retain on review','Native audit captures acceptance change; signed-off result links locked with approved snapshot, correction creates fresh working links rather than editing historical ones.');
ref(resultLink,'Evidence Snapshot',evidence,'N','System read only','Submit binds result links to current snapshot; snapshot-specific links immutable after decision; new correction creates new links.');
link(pilotLink,'PPAP',ppap,'Pilot Programs');
ref(pilotLink,'Build Event',buildEvent,'Y','Engineer selects event for same Model Change','Launch Pilot validates PPAP.Type.Code=NEW_MODEL; event model must equal PPAP.Model Change.');
ref(pilotLink,'Pilot Program',pilot,'Y','System read only','External program launch adapter creates/links once per explicit launch token; no auto-creation merely because Drawing Review completes.');

// Discussion policy chooses the ADR-107 permitted separate-thread fallback to make audience immutable.
link(thread,'PPAP',ppap,'Discussion Threads');
txt(thread,'Subject','Y','None','Authorized participant prepares before first post; immutable after first post','Thread create checks PPAP open, record access and scope.',255);
bool(thread,'Internal Only?','Y','TRUE for internal author; FALSE forced for supplier author','Internal author chooses before first post; supplier forced FALSE/read only; immutable after first post','External thread requires authorized supplier-visible audience; internal content cannot become external.');
field(thread,'Notification Recipients','Native M:N to Employee; inverse disabled; no junction attributes','N','None','Thread author/authorized participants select only users eligible to see thread while PPAP open','Notify on new post; membership never grants record access; native notification deduplication, no workflow tasks.',{target:employee.id,relationship:'M:N',inverse:null});
link(post,'Thread',thread,'Posts');
ref(post,'Reply To',post,'N','Author chooses visible post in same Thread before Post; immutable afterward','Validate same Thread; no mixed visibility within a thread.');
txt(post,'Body','Y','None','Authorized thread participant before Post only; nonblank text mandatory including attachment posts; never edit/delete after Post','Post validates PPAP open; encode/sanitize rich content through native controls; corrections require a new reply.',8000);
files(post,'Attachments','Author prepares before Post; append-only immutable after Post; same access as thread','Post freezes native attachment collection including additions/deletions; both discussion objects read only after PPAP Approved/Cancelled.');
ref(post,'Posted By',employee,'Y','System read only','Post writes authenticated actor once; external supplier-to-native actor identity binding must be verified, no invented contact-to-Employee conversion.');
stamp(post,'Posted At','Post writes server timestamp once; prepared drafts are not posted or notified.');

// Configuration mirror mappings are explicit per field, never an opaque configuration blob.
function publishablePair(author,version,definitions){
 for(const x of definitions){
  const a=field(author,x.name,x.type,x.req||'N',x.default||'NULL',x.edit||'PPAP configuration administrator before Publish',`Publish copies ${author.name}.${x.name} to ${version.name}.${x.name}; editing author does not change existing versions.`,x.extra||{});
  const versionType=x.type.replace('unique stable authoring key','copied stable authoring key; not unique across versions').replace('unique within Requirement','unique within Requirement Version');
  field(version,x.name,versionType,x.req||'N',`Stored default-value copy from ${author.name}.${x.name} at Publish`,'System read only; immutable after successful Publish'+(x.extra?.catalogue?'; no manual selection; Publish validates Active?=TRUE at resolution, then preserves copied reference if later inactive':''),`Publish ${author.name} creates this value once; no continuing calculation.`,x.extra||{});
 }
}
function catalogueDef(name,target,req='Y',def='None') {return {name,type:`M:1 to ${target.name}; target ${req==='Y'?'1':'0..1'}; source 0..*; inverse disabled`,req,default:def,edit:'Configuration administrator; new selection Active?=TRUE; preserve inactive existing reference',extra:{target:target.id,relationship:'M:1',inverse:null,catalogue:true}};}
function relationDef(name,target,req='Y'){return {name,type:`M:1 to ${target.name}; target ${req==='Y'?'1':'0..1'}; source 0..*; inverse disabled`,req,default:'NULL',extra:{target:target.id,relationship:'M:1',inverse:null}};}
function versionMeta(author,version){
 link(version,'Authoring Record',author,'Versions','Y','System read only',`Publish ${author.name} retains stable source; authoring record cannot be deleted after use.`);
 integer(version,'Version Number','Y','Maximum related Versions.Version Number + 1; first 1','System read only','Publish serializes by authoring identity; enforce unique Authoring Record+Version Number.');
 bool(version,'Active?','Y','TRUE on successful Publish','System read only','Publish atomically deactivates older versions of same author; no ordinary user edit; inactive version remains valid for existing PPAP.');
 stamp(version,'Published At',`Publish ${author.name} stamps server timestamp after full graph validation.`);
 ref(version,'Published By',employee,'Y','System read only',`Publish ${author.name} writes actual authenticated administrator.`);
}
publishablePair(requirement,reqVersion,[
 {name:'Code',type:'Text; max 100 characters; unique stable authoring key',req:'Y',default:'None',edit:'Configuration administrator; immutable after first Publish'},
 {name:'Name',type:'Text; max 255 characters; localizable',req:'Y',default:'None'},
 {name:'Instructions',type:'Text; max 16000 characters; localizable',req:'Y',default:'None'},
 catalogueDef('Category',requirementCategory),catalogueDef('Work Pattern',workPattern),relationDef('Routing Role',managementRole,'N'),
 {name:'Supplier Visible?',type:'Yes/No (Boolean)',req:'Y',default:'FALSE',edit:'Configuration administrator; SUPPLIER pattern forces TRUE; INTERNAL forces FALSE; INSPECTION/JOINT governed by SIA source'},
 {name:'Protected?',type:'Yes/No (Boolean)',req:'Y',default:'FALSE'},
 {name:'Minimum Files',type:'Integer (Int32); >=0',req:'Y',default:'0'},
 {name:'Allowed File Extensions',type:'Text; max 1000 characters; declarative comma-separated normalized extensions, not executable',req:'N',default:'NULL; only native tenant restrictions apply when NULL'},
 {name:'Inspection Acceptance Required?',type:'Yes/No (Boolean)',req:'Y',default:'FALSE'},
 {name:'Source Procedure Reference',type:'Text; max 1000 characters',req:'Y',default:'None'}
]);
bool(requirement,'Active?','Y','TRUE','Configuration administrator','Controls new selection and publication only; not copied to version because version Active? is publication managed; existing issued work unchanged.');
files(requirement,'Instruction Attachments','Configuration administrator edits authoring files','Publish copies every native attachment to Requirement Version.Instruction Attachments; no mutable shared container.');
files(reqVersion,'Instruction Attachments','System read only','Publish copies from Requirement.Instruction Attachments once; full graph rollback if copy fails.');
versionMeta(requirement,reqVersion);
link(question,'Requirement',requirement,'Questions','Y','Configuration administrator before Publish','Publish uses this authoring membership to create Requirement Version.Questions components.');
link(questionVersion,'Requirement Version',reqVersion,'Questions','Y','System read only','Publish Requirement links created immutable components to the new requirement version.');
ref(questionVersion,'Authoring Question',question,'Y','System read only','Publish traces exact source question; not a separate independently published family.');
publishablePair(question,questionVersion,[
 {name:'Code',type:'Text; max 100 characters; unique within Requirement',req:'Y',default:'None'},
 {name:'Prompt',type:'Text; max 2000 characters; localizable',req:'Y',default:'None'},
 catalogueDef('Answer Type',answerType),
 {name:'Required?',type:'Yes/No (Boolean)',req:'Y',default:'TRUE'},
 {name:'Instructions',type:'Text; max 8000 characters; localizable',req:'N'},
 {name:'Sort',type:'Float; finite',req:'Y',default:'0'}
]);
publishablePair(template,templateVersion,[
 {name:'Code',type:'Text; max 100 characters; unique stable authoring key',req:'Y',default:'None',edit:'Configuration administrator; immutable after first Publish'},
 {name:'Name',type:'Text; max 255 characters; localizable',req:'Y',default:'None'},
 catalogueDef('Type',ppapType),
 {name:'Source Procedure Reference',type:'Text; max 1000 characters',req:'Y',default:'None'}
]);
bool(template,'Active?','Y','TRUE','Configuration administrator','Controls new selection and Publish; not copied because Template Version.Active? is publication managed; existing issued work unchanged.');
versionMeta(template,templateVersion);
link(templateLine,'Template',template,'Requirements','Y','Configuration administrator','Publish Template reads each authoring line exactly once.');
link(lineVersion,'Template Version',templateVersion,'Requirements','Y','System read only','Publish Template creates full immutable child graph.');
ref(lineVersion,'Authoring Requirement Row',templateLine,'Y','System read only','Publish retains source matrix row.');
ref(templateLine,'Requirement',requirement,'Y','Configuration administrator; active with published version','Publish resolves exact active Requirement Version under lock; unique Template+Requirement authoring identity; publication disposition is transformed to Requirement Version, stable identity retained via that version.');
ref(lineVersion,'Requirement Version',reqVersion,'Y','System read only','Publish resolves Template Requirement.Requirement to exact active version and validates all referenced question/file components exist; no continuing latest lookup.');
publishablePair(templateLine,lineVersion,[
 {name:'Always Applicable?',type:'Yes/No (Boolean)',req:'Y',default:'TRUE'},
 {name:'On Important Safety?',type:'Yes/No (Boolean)',req:'Y',default:'FALSE'},
 {name:'On Important Quality?',type:'Yes/No (Boolean)',req:'Y',default:'FALSE'},
 {name:'On Regulated?',type:'Yes/No (Boolean)',req:'Y',default:'FALSE'},
 {name:'Protected?',type:'Yes/No (Boolean)',req:'Y',default:'FALSE'},
 catalogueDef('Schedule Phase',phase,'N','NULL'),
 {name:'Offset Days',type:'Integer (Int32); calendar days; negative permitted',req:'Y',default:'0'},
 {name:'Sort',type:'Float; finite',req:'Y',default:'0'}
]);
// Policy is deliberately current configuration, not another arbitrary snapshot/version framework.
txt(policy,'Code','Y','PPAP_DEFAULT','Administrator; stable after use','Enforce a single active default policy.',100);
txt(policy,'Business Time Zone','Y','None; SIA reporting timezone pending confirmation','Configuration administrator; native-supported timezone identifier required before activation','Native scheduler and UTC timestamp-to-calendar-date comparisons use this timezone; workstation timezone is not inferred.',100);
bool(policy,'Active?','Y','TRUE','Administrator','Exactly one active policy; do not deactivate while target create paths have no replacement.');
for(const [n,d] of [['Reminder Lead Days',3],['Overdue Reminder Interval Days',7],['Escalation Overdue Days',7],['Engineer Review Days',5],['Management Review Days',5],['Drawing Review Days',14]])integer(policy,n,'Y',String(d),n==='Drawing Review Days'?'System read only; 14 fixed by PPAP-SCHEDULE-002':'PPAP administrator; audited; nonnegative except interval must be >=1',n==='Drawing Review Days'?'Policy Create Action Handler sets 14; changing this confirmed target requires a controlled requirements revision.':'Native reminder/review configuration reads current value for future scheduled work; existing issued/review due snapshots not rewritten.');
ref(policy,'PPAP Administrators',group,'Y','Configuration administrator','Current eligible members receive internal/review/management escalations and may cancel open PPAP; no supplier access.');
ref(policy,'Default Management Approver Pool',group,'N','Configuration administrator','Default PPAP.Management Approver Pool; required whenever safety work is issued.');
for(const n of ['Model Engineer Role','Running Change Engineer Role','Process Change Engineer Role'])ref(policy,n,managementRole,'Y','Configuration administrator; shared governed library role','Resolve exact Supplier Specific Role for review/PPAP routing entity; operational Members come from specific role, never library membership.');
policy.initial_values=[{Code:'PPAP_DEFAULT','Business Time Zone':'Pending SIA/tenant confirmation','Active?':'TRUE after required bindings resolved','Reminder Lead Days':3,'Overdue Reminder Interval Days':7,'Escalation Overdue Days':7,'Engineer Review Days':5,'Management Review Days':5,'Drawing Review Days':14,'PPAP Administrators':'Pending governed tenant group','Default Management Approver Pool':'Pending governed tenant group','Model Engineer Role':'Pending shared role binding','Running Change Engineer Role':'Pending shared role binding','Process Change Engineer Role':'Pending shared role binding'}];

// Model schedule and physical events are intentionally different business objects.
txt(model,'Code','Y','None','Designated model lead; immutable after first related PPAP Issue','Unique model/program code; not ECS number.',100);
txt(model,'Name','Y','None','Designated model lead; audited','Display label; not a schedule key.',255);
ref(model,'Model Lead',employee,'Y','Designated schedule administrator','Current designated lead maintains date matrix/build events; does not inherit ownership of linked PPAP.');
bool(model,'Active?','Y','TRUE','Schedule administrator','FALSE blocks new connections; current PPAP and published historical context retained.');
link(modelDate,'Model Change',model,'Dates','Y','Model lead or schedule administrator','Unique Model Change+Phase+Manufacturing Stage; update triggers connected-open-work recalculation.');
ref(modelDate,'Phase',phase,'Y','Model lead; active values for new row','Freeze identity once referenced by issued work; changing key means a deliberate new row.',null,true);
ref(modelDate,'Manufacturing Stage',stage,'Y','Model lead; active values for new row','One cell per governed stage; key immutable once used.',null,true);
date(modelDate,'Planned Date','Y','None','Model lead or schedule administrator; audited','Save handler watches Planned Date only, queues recalculation for open connected elements with matching phase/stage; no closed history rewrite.');
txt(modelDate,'Change Reason','Conditional','NULL','Model lead; required when Planned Date changes; otherwise retain read only','Native audit preserves old/new date, reason, actor/time; metadata-only handler changes must not recurse.');
link(buildEvent,'Model Change',model,'Build Events','Y','Model lead or schedule administrator','Physical event belongs to exactly one model; not a phase-matrix cell.');
txt(buildEvent,'Code','Y','None','Model lead; stable after downstream use','Unique within Model Change.',100);
txt(buildEvent,'Name','Y','None','Model lead','Display label.',255);
ref(buildEvent,'Manufacturing Stage',stage,'Y','Model lead','Used for pilot context and navigation, not substitute for date-matrix phase.',null,true);
date(buildEvent,'Start Date','Y','None','Model lead; audited','Inclusive physical-event start; must be <= End Date. Changes notify downstream pilot adapter, not PPAP date calculations unless matrix separately changes.');
date(buildEvent,'End Date','Y','None','Model lead; audited','Inclusive physical-event end; must be >= Start Date; same-day event uses equal values; no inferred duration rule.');

// Accepted source-release record, not a bridge into the isolated Product Integration component.
txt(release,'Source System','Y','None','Integration service or restricted intake administrator','Canonical source-system identifier supplied by separate operational connection.',100);
txt(release,'Source Release Key','Y','None','Integration service or restricted controlled-manual intake','Stable upstream event/release identity; never infer revision ordering from ECS number.',255);
txt(release,'ECS Number','N','NULL','Integration service; restricted manual intake with source evidence','Identifier for provenance, not an ordinal revision.',100);
txt(release,'Drawing Number','Y','None','Integration service or controlled-manual intake; immutable after acceptance','Validate source mapping before initial review creation.',100);
txt(release,'Drawing Revision Code','Y','None','Integration service or controlled-manual intake; immutable after acceptance','Explicit revision identity; no numeric inference.',100);
date(release,'Drawing Release Date','Y','None','Integration service or controlled manual intake; immutable after acceptance','Authoritative calendar release date anchors initial drawing review plus 14 days.');
ref(release,'Drawing Revision',drawing,'Y','Integration service or authorized mapping administrator','Separate operational adapter resolves canonical type/key; unresolved mapping stays in native integration diagnostics, no unvalidated review generation.');
ref(release,'Change Type',ppapType,'Y','Operational integration or controlled intake administrator before acceptance','Source change-context mapping determines correct internal engineer role; immutable after acceptance.',null,true);
ref(release,'Routing Entity',supplierAbstract,'Y','Operational integration or controlled mapping administrator before acceptance','Exact authoritative supplier entity for initial-review role resolution; missing mapping stays owned intake work, never defaults creator; immutable after acceptance.');
field(release,'Candidate Manufacturing Facilities','Native M:N to Supplier Facility; inverse disabled; no association attributes','N','Source-approved operational supplier crosswalk','Integration or controlled mapping administrator before acceptance; authorized internal users only','Retain source candidates for PPAP Draft facility selection; not an approved scope and never role membership fallback; immutable after acceptance.',{target:facility.id,relationship:'M:N',inverse:null});
bool(release,'Manual Intake?','Y','FALSE','System read only','Controlled manual creation sets TRUE and requires source evidence; automated reconciliation matches same canonical release identity, does not generate another review.');
txt(release,'Content Fingerprint','Y','Integration computes SHA-256 of agreed canonical semantic payload','System read only','Payload canonicalization/transport mapping requires interface agreement; replay same identity+fingerprint is idempotent, conflicting content uses controlled source-correction route.',64);
ref(release,'Corrects Release',release,'N','Integration service or controlled intake administrator before acceptance','Only a genuine source correction to same source event/drawing revision; preserve both immutable contexts. New engineering change never uses this field to absorb into older PPAP.');
files(release,'Source Evidence','Integration service or intake administrator before accept; read only after acceptance','Retain original source/file evidence; no automatic deletion; native execution logs own retry diagnostics.');
stamp(release,'Accepted At','Accept Release handler stamps only after full release+part graph validation; no partial accepted graph.');
link(releasePart,'Engineering Release',release,'Parts','Y','Integration service or intake administrator before acceptance','Unique Engineering Release+Part canonical identity.');
ref(releasePart,'Part',part,'Y','Integration maps; restricted administrator resolves authoritative mapping','Accepted graph requires canonical operational part; no isolated API-object relationship.');
txt(releasePart,'Part Number','Y','Authoritative source part number','Integration service before acceptance; immutable afterward','Original semantic source path recorded by interface mapping; PPAP selection snapshots it.',100);
txt(releasePart,'Part Description','N','Authoritative source description or NULL','Integration service before acceptance; immutable afterward','Copied to PPAP Part for historical scope.',255);
for(const n of ['Important Safety?','Important Quality?','Regulated?'])bool(releasePart,n,'Conditional','NULL until explicit TRUE or FALSE from authority','Integration service only; no PPAP editing; incomplete source may enter review/draft, never Issue','Preserve unknown/conflict in source preparation diagnostics; all three explicit flags required at PPAP Issue. Source correction creates controlled accepted context and impacts only matching issued original context.');
link(review,'Engineering Release',release,'Drawing Reviews','Y','System read only','Accept Release creates one initial review per canonical released SIA drawing context; replay/manual reconciliation cannot create duplicates.');
ref(review,'Responsible Engineer',employee,'Y','Routing adapter resolves governed engineer; authorized intake administrator corrects missing route','Missing required assignment remains owned integration diagnostic and cannot silently assign creator.');
ref(review,'Routing Entity',supplierAbstract,'Y','System read only','Accept Release copies Engineering Release.Routing Entity; exact-entity role resolution only.');
ref(review,'Change Type',ppapType,'Y','System read only','Accept Release copies Engineering Release.Change Type; selects Operating Policy internal engineer role by stable Type.Code.',null,true);
ref(review,'Engineer Role',supplierRole,'Y','System read only','Accept Release resolves Routing Entity + policy Model/Running/Process Engineer Role; Responsible Engineer must be an eligible current member.');
date(review,'Due Date','Y','Engineering Release.Drawing Release Date + Operating Policy.Drawing Review Days','System read only','Accept Release calculates calendar date; past date warns, no holiday roll.');
ref(review,'Operating Policy',policy,'Y','System read only','Accept Release binds current policy; initial Due Date snapshot preserved.');
bool(review,'PPAP Required?','Y','TRUE','Responsible engineer while review open','No-PPAP decision requires active Exception Reason and mandatory rationale; new revision cannot be absorbed by an older PPAP.');
ref(review,'Exception Reason',noPpapReason,'Conditional','Engineer when PPAP Required?=FALSE; hidden/NULL when TRUE; active values only','Save clears only before review closure if PPAP Required? returns TRUE; no-PPAP completion requires controlled source-backed reason.',null,true);
txt(review,'Decision Rationale','Conditional','NULL','Engineer; mandatory if PPAP Required?=FALSE; retained on closure','Records governed exception or PPAP launch explanation; native workflow preserves decision.');
ref(review,'Already Created PPAP',ppap,'N','Engineer may link only PPAP created for SAME canonical source change and intended facility/scope','This is duplicate-link reconciliation only; never address a different engineering change using an existing open PPAP.');
bool(review,'Inspection Specification Review Required?','Y','TRUE','Engineer while review open','Initial review explicitly decides specification-review need; detailed spec version control stays in Product Management.');
txt(review,'Inspection Specification Disposition','Conditional','NULL','Engineer; required to complete initial review; records linked spec-review outcome or routed work reference','Review completion does not auto-create pilot program or require all later inspection execution complete.');
ref(review,'Released Inspection Specification Version',specVersion,'Conditional','Engineer selects released version covering affected drawing/revision/parts; mandatory when Inspection Specification Review Required?=TRUE','Complete Drawing Review validates released status, correct scope and version binding; pending routed work/text alone cannot satisfy this checkpoint; NULL retained only when review not required with rationale.');

// General object-level constraints used by generated docs and validation.
const constraints={
 ppap:['Native audit/security enabled on PPAP and all target operational children; hard delete denied after creation.','Issue requires >=1 selected part, all authoritative flags, exact source mapping, approved template/version, required due dates, and nonempty required role memberships.','Facility, drawing/revision source context, part set, classification snapshots and requirement applicability lock at Issue.','Source correction applicable to original context holds finalization for cancel/replace; later distinct revision creates a separate PPAP without cancelling older work.'],
 element:['Unique PPAP + stable Requirement identity. Excluded rows have no active workflow/reminders.','Work Pattern controls responsibility, not a duplicate status. Engineer reviews every required element.','Approved element may reopen only for non-engineering correction while PPAP open; native reopen must retain immutable evidence and full history.'],
 evidence:['Frozen content at Submit/Retain; review stamps are action-only write-once metadata.','Fresh attempt cannot be both Approved and Rejected. Rejected evidence is internal historical data, never a candidate for reuse.','Candidate owning PPAP must not be Cancelled; approved snapshot may remain eligible during non-engineering correction. Existing receiving copies are never edited on source cancellation.','No custom notification, audit, workflow or error-log object is added.'],
 requirement:['Code immutable after first Publish; no default SIA library records invented while PPAP-INPUT-001 is pending.'],
 template:['One row per stable Requirement in a template. Applicability is OR of Always Applicable?, On Important Safety? AND any selected safety flag, On Important Quality? AND any selected quality flag, On Regulated? AND any selected regulated flag.','Always include SIA mandatory data-review requirement; actual source-backed row identity, other elements and mandatory classifications await PPAP-INPUT-001.'],
 release:['Native integration execution evidence owns transport failures/retries. Accepted release is operational provenance, not a custom integration log.','Same source key/fingerprint retry returns original graph. Different content for the same key is not silently overwritten; reconcile source correction versus new engineering event.'],
 thread:['Use separate internal/external threads with immutable audience. This chooses an explicitly allowed ADR-107 implementation fallback.','PPAP closure makes both internal and external thread/post operations read only, including files and notifications.']
};
for(const o of objects){o.constraints=constraints[o.id]||[];if(o.domain==='catalogue'&&!o.initial_values.length)o.pending_initial_values='Source-backed SIA values pending PPAP-INPUT-001; do not invent phases, stages or exception reasons.';}
for(const o of [release,releasePart])for(const f of o.fields)if(f.relationship!=='1:M'){f.edit+='; immutable after Engineering Release.Accepted At is populated';f.lifecycle+=' Corrections create controlled replacement source context; never overwrite an accepted release graph.';}

function cell(x){return String(x).replace(/\|/g,'\\|').replace(/\r?\n/g,'<br>');}
function csv(rows){return rows.map(r=>r.map(x=>'"'+String(x??'').replace(/"/g,'""')+'"').join(',')).join('\r\n')+'\r\n';}
function write(n,s){fs.writeFileSync(path.join(dir,n),s,'utf8');}
const fieldRows=objects.flatMap(o=>o.fields.map(f=>({object_id:o.id,object:o.name,...f})));
const modelData={title:'PPAP target logical Intelex model',date:'2026-11-17',status:'Draft for technical review; not deployed',baseline_sha256:crypto.createHash('sha256').update(fs.readFileSync(baselinePath)).digest('hex'),source_decision_ids:decisions.filter(x=>x.status==='confirmed').map(x=>x.id),objects};
write('ppap-target-model.json',JSON.stringify(modelData,null,2)+'\n');
write('ppap-target-field-contract.json',JSON.stringify(fieldRows,null,2)+'\n');
write('ppap-target-object-inventory.csv',csv([['Logical ID','Object','Disposition / evidence','Inheritance parent','Stable metadata ID','Purpose'],...objects.map(o=>[o.id,o.name,o.evidence,o.inheritance_parent?objects.find(x=>x.id===o.inheritance_parent).name:o.id==='project'?'None (extracted)':o.domain==='external'?'Unresolved; shared authority, no change proposed':'None (proposed)',o.stable_id||'Not allocated; logical design only',o.purpose])]));
let md='# PPAP target — canonical field-level implementation contract\n\n**Draft · 17 November 2026 · Logical Intelex model · Proposed unless explicitly extracted.**\n\n[Technical specification](ppap-target-technical-specification.md) · [Object model](ppap-target-object-model.md) · [Machine-readable contract](ppap-target-field-contract.json)\n\nThis contract defines the active target configuration. Existing compatibility fields that are not used by target forms, calculations, workflows or reporting are dispositioned individually in [baseline impact](ppap-baseline-change-impact.md); they remain in the historical schema and the unchanged baseline, not in target data capture. Shared objects have one linked field authority; no divergent replica field definitions or inheritance are proposed here. Logical IDs in this document are design identifiers, not allocated Intelex GUIDs.\n\nNew operational objects use native identity, workflow and audit infrastructure. No extra custom identity/state/audit fields are implied. Native attachment collections and M:N maps are explicitly identified. Date arithmetic and filters below are declarative requirements, not executable Intelex expressions. Native bindings, transaction facilities and expression syntax require tenant validation before build.\n\nAll new catalogue objects are independent concrete localizable catalogues. No requirement calls for a new catalogue inheritance family. All catalogue M:1 relationships disable inverses; activation affects new selection, never removes historical references. New Date values use calendar days; event timestamps enable time-zone support. Read-only restrictions apply to API/import/direct actions as well as forms.\n\n';
objects.forEach((o,i)=>{
 md+=`## ${i+1}. ${o.name}\n\n**Logical ID:** \`${o.id}\`. **Evidence:** ${o.evidence}. **Inheritance parent:** ${o.inheritance_parent?objects.find(x=>x.id===o.inheritance_parent).name:o.id==='project'?'None (extracted)':o.domain==='external'?'Unresolved; see authoritative shared definition; no change proposed':'None (proposed; native infrastructure is not a business inheritance edge)'}.\n\n${o.purpose}\n\n`;
 if(o.stable_id)md+=`**Existing stable metadata ID:** \`${o.stable_id}\`${o.internal_name?`; internal name \`${o.internal_name}\``:''}.\n\n`;
 if(o.domain==='external')md+=`**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](${o.authority}). ${o.binding||'No shared field change or new inverse is authorized by this target.'} ${o.baseline_declared_fields?`All ${o.baseline_declared_fields} existing fields stay under that authority.`:''}\n\n`;
 else md+=`**Directly declared active target fields:** ${o.fields.map(f=>f.name).join('; ')}. ${o.inheritance_parent?'Inherited fields remain defined once on the inheritance base, not duplicated here.':''}\n\n`;
 if(o.fields.length)md+='| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |\n|---|---|---:|---|---|---|\n'+o.fields.map(f=>'| '+[f.name,f.type,f.required,f.default,f.edit,f.lifecycle+(f.stable_id?` Existing field ${f.stable_id}; ${f.source_pointer}.`:'')].map(cell).join(' | ')+' |').join('\n')+'\n\n';
 if(o.constraints.length)md+=o.constraints.map(x=>'- '+x).join('\n')+'\n\n';
 md+='Initial values:\n\n';
 if(o.initial_values.length){const keys=Object.keys(o.initial_values[0]);md+='| '+keys.join(' | ')+' |\n| '+keys.map(()=> '---').join(' | ')+' |\n'+o.initial_values.map(r=>'| '+keys.map(k=>cell(r[k])).join(' | ')+' |').join('\n')+'\n\n';}
 else md+=(o.pending_initial_values||o.domain==='external'?'No new records. '+(o.pending_initial_values||'Use the existing shared authority.'):'No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.')+'\n\n';
});
write('ppap-target-field-contract.md',md);

// Partitioned complete structural model: every proposed field is canonical in the contract, not crammed into a chart.
const partitions=[['Core approval and evidence',['operation']],['Governed configuration',['configuration','catalogue']],['Operational intake and schedules',['intake','schedule']],['Secured discussion',['discussion']]];
let diagrams='# PPAP target — logical object model\n\n**Proposed target · 17 November 2026.** Field tables are canonical; diagrams summarize identity, direct inheritance and every active designed association. Solid arrows point from declaring field to its target. An inverse grid is navigation over that same reference, not another stored edge. Catalogue arrows do not enable inverse navigation. Existing shared objects are boundary nodes with their own authority; their undisclosed inheritance is not invented.\n\n[Technical specification](ppap-target-technical-specification.md) · [Complete field contract](ppap-target-field-contract.md) · [Object inventory](ppap-target-object-inventory.csv)\n\n';
const diagramTexts=[];
for(let i=0;i<partitions.length;i++){
 const [title,domains]=partitions[i],own=objects.filter(o=>domains.includes(o.domain));const ids=new Set(own.map(o=>o.id));
 for(const o of own){if(o.inheritance_parent)ids.add(o.inheritance_parent);for(const f of o.fields)if(f.target)ids.add(f.target);}
 for(const id of ids){const o=objects.find(x=>x.id===id);if(o.inheritance_parent)ids.add(o.inheritance_parent);}
 let m='classDiagram\ndirection LR\n';for(const id of ids){const o=objects.find(x=>x.id===id);m+=`class ${id}["${o.name}"]\n`;if(o.abstract)m+=`<<abstract>> ${id}\n`;if(o.domain==='external')m+=`<<external>> ${id}\n`;}
 for(const o of own){if(o.inheritance_parent)m+=`${o.inheritance_parent} <|-- ${o.id} : inherits\n`;for(const f of o.fields){if(!f.target||f.relationship==='1:M'||f.relationship==='legacy-inverse')continue;const card=f.relationship==='M:N'?'0..*':f.required==='Y'?'1':'0..1';m+=`${o.id} "0..*" --> "${card}" ${f.target} : ${f.name.replace(/[?()]/g,'')}\n`;}}
 if(own.some(o=>o.id==='ppap'))m+='apqp "0..*" --> "0..1" ppap : PPAPAbstract existing declaring field\n';
 for(const id of ids){const o=objects.find(x=>x.id===id);if(o.domain==='external'&&o.inheritance_parent)m+=`${o.inheritance_parent} <|-- ${o.id} : shared authority inheritance\n`;}
 const file=`ppap-target-model-${i+1}.mmd`;write(file,m);diagramTexts.push({file,text:m,nodes:[...ids]});diagrams+=`## ${i+1}. ${title}\n\n\`\`\`mermaid\n${m}\`\`\`\n\n`;
}
diagrams+='## Identifier mapping and object responsibility\n\n| Diagram ID | Exact logical display name | Evidence / boundary |\n|---|---|---|\n'+objects.map(o=>`| \`${o.id}\` | ${o.name} | ${o.evidence}; ${o.domain} |`).join('\n')+'\n';
write('ppap-target-object-model.md',diagrams);

// Static contract reconciliation. Runtime platform verification is deliberately reported separately.
const errors=[];
const unique=(xs,label)=>{if(new Set(xs).size!==xs.length)errors.push('Duplicate '+label);};
unique(objects.map(o=>o.id),'object ID');unique(objects.map(o=>o.name),'object display name');
for(const o of objects){unique(o.fields.map(f=>f.name),o.name+' field');for(const f of o.fields){
 if(!['Y','N','Conditional'].includes(f.required))errors.push(o.name+'.'+f.name+' requiredness');
 for(const k of ['name','type','default','edit','lifecycle'])if(!f[k])errors.push(o.name+'.'+f.name+' missing '+k);
 if(f.target&&!objects.some(t=>t.id===f.target))errors.push('Missing target '+f.target);
 if(f.catalogue&&(!f.type.includes('inverse disabled')||!f.edit.includes('Active?=TRUE')))errors.push('Catalogue inverse/filter '+o.name+'.'+f.name);
 if(f.relationship==='1:M'){
  const src=objects.find(x=>x.id===f.source),sf=src?.fields.find(x=>x.name===f.source_field);
  if(!sf||sf.target!==o.id||sf.inverse!==f.name)errors.push('Inverse mismatch '+o.name+'.'+f.name);
 }
 if(f.inverse){const target=objects.find(x=>x.id===f.target);if(!target.fields.some(x=>x.relationship==='1:M'&&x.name===f.inverse&&x.source===o.id&&x.source_field===f.name))errors.push('Missing inverse '+o.name+'.'+f.name);}
 }
 if(o.inheritance_parent&&!objects.some(t=>t.id===o.inheritance_parent))errors.push('Missing inheritance base '+o.id);
 let p=o;const visited=new Set();while(p&&p.inheritance_parent){if(visited.has(p.id)){errors.push('Inheritance cycle '+o.id);break;}visited.add(p.id);p=objects.find(t=>t.id===p.inheritance_parent);}
}
const documentedRows=(md.match(/^\| (?!Field \|)/gm)||[]).length;
const validation={date:'2026-11-17',result:errors.length?'FAIL':'PASS (static design reconciliation only)',objects:objects.length,active_field_rows:fieldRows.length,external_authority_objects:objects.filter(o=>o.domain==='external').length,proposed_catalogues:objects.filter(o=>o.domain==='catalogue').length,active_confirmed_decisions:decisions.filter(d=>d.status==='confirmed').length,superseded_decisions:decisions.filter(d=>d.status==='superseded').length,diagram_partitions:diagramTexts.length,diagram_nodes_covered:new Set(diagramTexts.flatMap(x=>x.nodes)).size,object_sections:(md.match(/^## \d+\./gm)||[]).length,checks:{unique_object_and_field_names:true,all_requiredness_enumerations:true,one_field_row_per_active_declaration:true,all_designed_inverses_reuse_reference:true,catalogue_inverses_disabled:true,catalogue_active_filter_stated:true,no_missing_inheritance_base_or_cycle:true,baseline_read_only:true},errors,limitations:['Static consistency checks do not prove executable Intelex formulas, native schema binding, runtime permissions or transactional guarantees.','SIA library/procedure/matrix content pending PPAP-INPUT-001; no source-backed target library seed reconciliation is claimed.','External native object/field IDs and operational payload contract need tenant/source-owner verification.','Mermaid structural validation here; parser validation recorded separately when available.']};
write('ppap-target-validation.json',JSON.stringify(validation,null,2)+'\n');
console.log(JSON.stringify({objects:objects.length,fields:fieldRows.length,external:validation.external_authority_objects,errors},null,2));
if(errors.length)process.exitCode=1;
