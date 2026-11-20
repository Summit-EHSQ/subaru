/* Additional task-specific manual review notes; no semantic decisions are inferred by this file. */
const {notes,fs,path,gate,repo,plan,markdown}=require('./interfaces-review-notes.cjs');
notes.push(
{
id:'IMP-24',
evidenceReview:'All eight result-link rows match the current target field contract. The external result/specification objects remain supplied by Inspection; the PPAP task owns only scoped links, acceptance and immutable evidence meaning. The corrected field row retains the exact Engineer Review stage name.',
languageReview:'Read JSON and rendered link rows, with source references hidden. The revised fixed-result wording is readable, and steps explain the practical choice between a stable result version and a copied artifact without assigning measurement execution.',
meaningReview:'Checked required one-element/result links, 255-character source/version references, FALSE acceptance default, 2000-character rejection comment, disabled external inverses and the Element.Inspection Results inverse. Submit/Retain preserve exact evidence linkage; only required relied-on results gate approval.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add scoped inspection-version links and engineer acceptance while retaining immutable result meaning.','PPAP Inspection Result Link fields and PPAP-side link/acceptance operation.'],
rows:[
['Bind each result link permanently to one element and provide its read-only inspection-results collection.','Inspection Result Link.Element M:1 plus Element.Inspection Results inverse navigation.'],
['Allow only authorized working-stage result selection and freeze the specific result context on submission.','Inspection Result Link.Inspection Result selector with Work In Progress edit rule.'],
['Store the required exact specification-version identifier without using a mutable latest pointer.','Specification Version Reference 255-character system-populated text field.'],
['Store the exact result version and require a controlled evidence artifact when the external result can change.','Result Version Reference field and Submit/Retain artifact-copy connection.'],
['Default acceptance to FALSE and restrict its change to the responsible engineer review or explicit retention action.','Accepted? Boolean and Engineer Review/Retain Evidence action authorization.'],
['Require a rejection explanation while preserving acceptance history and locking signed-off links.','Acceptance Comment 2000-character field, conditional requirement and native audit.'],
['Connect submitted result links to their exact evidence snapshot and keep decided links fixed.','Inspection Result Link.Evidence Snapshot system M:1 and fresh correction-link creation.'],
['Display linked result rows through the declaring element relationship without duplicate storage.','Element.Inspection Results inverse 1:M read-only related-record list.']
],
steps:[
['Validate the intended element drawing/part scope before recording result and specification-version references.','Authorized result-link creation action and scope validation.'],
['Preserve approved result meaning with a stable version or frozen artifact linked to the current evidence snapshot.','Submit/Retain result copy operation and snapshot-specific link binding.'],
['Require engineer acceptance and a rejection comment only for results relied on by required elements.','Result acceptance action, native actor/time audit and element preapproval check.']
]
},
{
id:'IMP-25',
evidenceReview:'The four association/navigation rows and three launch instructions match the PPAP-side Pilot interface. Pilot Part Data remains an externally owned program with supplied launch IDs, mappings and correlation. No shipment or measurement application work is assigned.',
languageReview:'The assignment states the permitted business context and wrong-model rejection clearly. It explains repeat behavior as one program link per launch and keeps the field names and NEW_MODEL code intact.',
meaningReview:'Checked PPAP relationship ownership, same-model Build Event, system-returned Pilot Program, inverse navigation only on PPAP, explicit launch token and denial for running/process changes. Role/scope outputs are named dependencies and retry/export details remain inputs.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add deliberate PPAP-side pilot launch limited to the governing new-model build-event context.','Launch Pilot Program action and PPAP Pilot Program Link relationship fields.'],
rows:[
['Bind the program association permanently to its owning PPAP and expose only inverse navigation there.','Pilot Program Link.PPAP M:1 and PPAP.Pilot Programs read-only inverse.'],
['Require an event of the same model when selecting the physical context for pilot launch.','Pilot Program Link.Build Event M:1 selector and same-model validation.'],
['Save the external program returned by a successful explicit launch exactly once.','Pilot Program Link.Pilot Program system-populated M:1 field.'],
['Show existing linked pilot programs without adding a duplicate stored relationship.','PPAP.Pilot Programs inverse 1:M over Pilot Program Link.PPAP.']
],
steps:[
['Restrict launch to the responsible engineer on NEW_MODEL and validate event and intended part scope.','Launch Pilot Program prelaunch role/type/model/part checks.'],
['Call the supplied pilot operation and store one returned program association per explicit correlation.','PPAP-side pilot adapter with native repeat-safe launch/result persistence.'],
['Deny running/process launches and prevent source review from automatically creating pilot execution.','Launch Pilot Program visibility/action conditions and release-scope guard.']
]
},
{
id:'IMP-26',
evidenceReview:'The finalization task consumes the issue, element-review, role, source-hold, origin and certificate operations instead of building their fields. It matches current full-approval-only, important-safety and engineer-pool eligibility decisions; native stage/save/timezone methods remain explicitly waiting.',
languageReview:'The six instructions explain who decides, what must be complete and what the supplier can see on management return. Exact stage/action names and mass inequalities are retained. Acceptance describes actual valid, blocked and privacy outcomes.',
meaningReview:'Reviewed required Approved elements, no correction/hold, both per-part masses, any-safety management routing, current selected pool member, default five-day review target, actual actor and frozen certificate facts. Management return leaves unrelated evidence intact; mass correction is open same-scope work.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add complete-package finalization and explicit safety management review with controlled returns and outputs.','Complete PPAP, Approve PPAP, Return for More Information and Request Mass Correction actions.'],
steps:[
['Block completion until all required elements are approved, no hold/correction remains and both masses satisfy exact bounds.','Complete PPAP pretransition scope, source, element and mass validation.'],
['Route any important-safety package to a selected eligible management approver and otherwise execute engineer approval.','Complete PPAP branching, Management Submitted At and configurable review due-date calculation.'],
['Require current selected pool eligibility and save approval facts with the configured certificate and durable success outcome.','Approve PPAP action invoking certificate/origin operations before terminal completion.'],
['Return management work internally without invalidating unrelated approved elements or disclosing private commentary.','Return for More Information action and internal notification event.'],
['Permit coordinated supplier-safe mass correction after management return while retaining prior submitted values.','Request Mass Correction action, native audit and resubmission relocking.'],
['Close operational content after approval while retaining only authorized visibility handover.','Approved-state action/field restrictions excluding interim, withdrawal and extra-signing paths.']
]
},
{
id:'IMP-27',
evidenceReview:'Cancellation matches the current decision requiring engineer/admin authority, reason, stopped outstanding work and preserved history. It uses the hidden element-cancel and origin operations produced earlier. Required native cascade/queue behavior and owner destination remain supplied methods, not a custom state/log subsystem.',
languageReview:'The task describes partial failure and delivery retry in concrete business outcomes. Its result checks distinguish unauthorized cancellation, unfinished child work and false originating success without inventing a verification workstream.',
meaningReview:'Checked open stages only, mandatory reason, concurrent Submit/Approve protection, preserved Approved/Cancelled elements and first-submission facts, durable outcome queue before terminal save, after-commit delivery and cancelled-source reuse exclusion without changing prior copies.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add reasoned open-package cancellation with resumable child stopping and a distinct originating cancelled outcome.','Cancel PPAP action invoking hidden Cancel Element Work and durable origin operation.'],
steps:[
['Allow only responsible engineer/admin cancellation on open stages with reason and concurrent-action protection.','Cancel PPAP authority/stage validation and native lock.'],
['Cancel only active required element work while preserving submissions and already completed decisions.','Hidden Cancel Element Work invocation and reminder/work-action suppression.'],
['Queue the exact cancelled outcome before saving terminal cancellation and closing discussion.','Protected cancellation save of origin correlation, Cancelled At/By and native termination.'],
['Retry failed delivery separately and resume partial child stopping without reporting false completion.','Native cascade resume and after-commit notification/outcome delivery correlation.'],
['Exclude cancelled-source evidence from future reuse without invalidating retained receiving copies or whole originating processes.','Cancellation reuse-filter effect and distinct owner-resolution outcome.']
]
},
{
id:'IMP-28',
evidenceReview:'Verified the four named handlers and GUIDs against the baseline-impact table: singular RelatedPPAP assignment, both due/owner synchronizations and Auto Close Related Task WF. Their package behavior justifies target-only modification. MOC/PCR launch IDs, callbacks and multi-obligation policy remain supplied inputs.',
languageReview:'The task explains the risk of several PPAPs sharing one task and distinguishes cancelled owner resolution from fulfilment. Each change names its existing handler and actual before/after difference rather than assigning preservation-only work.',
meaningReview:'Reviewed one Draft per decision/scope, retained PPAP.Task collection linkage, no singular-pointer overwrite, protected authorized date/owner changes, durable outcome recording before terminal commit and after-commit delivery. Only a scope-satisfied Approved outcome can fulfil originating work.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add PPAP-side origin launch/outcome operations and target task-handler changes for concurrent source obligations.','PPAP Origin Connection plus target branches of the named package task handlers.'],
steps:[
['Launch target Drafts from authorized PCR/APQP decisions using exact source scope and repeat-safe decision correlation.','PPAP Origin Connection calling Create Target PPAP Draft.'],
['Apply target task-pointer/date differences while retaining the existing originating relationships and legacy branches.','Target handler branching using PPAP.Task and Originating PCR.'],
['Record an exact durable success/cancelled outcome before terminal commit and deliver it separately afterward.','Record PPAP Outcome operation and native durable delivery retry.'],
['Fulfil only an explicitly satisfied Approved obligation and require supplied resolution for multiple linked PPAPs.','Scope-aware origin completion adapter and cancelled owner-resolution path.']
],
mods:[
['Stop target PPAP creation from overwriting a singular task PPAP pointer used by concurrent work.','Set RelatedPPAP on Task target bypass and existing PPAP.Task inverse collection.'],
['Replace unconditional target due-date propagation with an authorized open-scope update that retains baseline history.','Update Integrated Task Due Date guarded target branch.'],
['Bypass singular task-to-PPAP owner/date propagation for target work and retain selected management responsibility.','Update Related PPAP Project Owner and Due Date target branch.'],
['Remove cancelled-as-success fulfilment from target task closure and require scope-satisfied actual approval.','Auto Close Related Task WF target branch and durable cancelled-outcome routing.']
]
},
{
id:'IMP-30',
evidenceReview:'Certificate behavior follows the controlled PDF and authorized individual-file scope. Exact rendering/layout/display and verification bindings are supplied inputs; no missing legacy template is assumed usable. Approval fields are provided by predecessors, and this task owns their output population/render operation.',
languageReview:'The assignment explains frozen labels as protection from later person/facility renaming and describes a retry returning original facts. Its output and result checks clearly distinguish approved certificate access from a public endpoint or bulk evidence download.',
meaningReview:'Reviewed facility/company/actual actor label sources, complete part list, opaque unique reference, saved original bytes and protected rendering failure. Both approval paths call the same operation; authenticated verification rechecks original Approved record/file permissions.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add original-approval label copying, controlled PDF rendering and authenticated certificate retrieval.','Render, Export and Verify Approval Certificate operations using supplied native methods.'],
steps:[
['Copy facility, company and actual authority labels once from the pending valid approval facts before rendering.','Render Approval Certificate population of the three Approved label fields.'],
['Render the full approved drawing/part scope and authority in English using retained facts on retry.','Approved-layout PDF mapping over frozen PPAP and PPAP Part values.'],
['Save one opaque certificate reference and original PDF bytes without falsely completing failed approval output.','Protected PDF/reference save keyed by PPAP and approved outcome correlation.'],
['Provide authenticated original-package export/verification and authorized individual files without public or bulk disclosure.','Export Approval Certificate and Verify Certificate permission-checked actions.']
]
},
{
id:'IMP-32',
evidenceReview:'The package PPAP declaration has audit/security flags FALSE but inherited effective grants are unproven, so the change is correctly qualified rather than claiming absent access. Current role-stage/file and visibility authorities support the new rules. The corrected step expressly secures pre-PPAP release/review context independently.',
languageReview:'Read the complete corrected security instructions and rendered task. Business roles, denied content, closed-state rules and visibility-only handover are explicit. The text distinguishes supplied native enforcement from setting up platform processing permissions.',
meaningReview:'Checked the full account/entity/classification/capability/stage intersection, Draft secrecy, supplier/internal separation, actor and pool eligibility, protected posted/rejected/approved files and direct access. Shared visibility may change on closed records without changing criticality, ownership or approved content; source/review records require no PPAP marker.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add target PPAP record, field and file restrictions with audited visibility-only handover.','Native target security/audit configuration and authorized classification-handover action.'],
steps:[
['Require the complete authorization intersection and keep Draft content inaccessible to suppliers.','Target account/object/record/entity/classification/capability/stage permission rules.'],
['Give issued supplier coordinators only their permitted scope, work, masses and external discussion.','Supplier coordinator record/field/action grants and internal/rejected-history exclusions.'],
['Separate engineer, management and inspection powers so task ownership or admin membership cannot imply approval authority.','Business-role stage/action permission matrix and governed approver-pool check.'],
['Secure PPAP descendants through owning context and secure source/review records through their own authorized pre-PPAP context.','Native record/file inheritance or supplied equivalent rules plus explicit source/review ACLs.'],
['Prevent locked-scope and closed-content changes while retaining fresh authorized open correction and history.','Issued/closed field/action restrictions and frozen evidence/attachment protection.'],
['Allow audited visibility-only handover without altering criticality, stage, accountability or approved content.','Authorized Visibility Classification handover action using supplied safe-update method.'],
['Apply the same security on direct and export paths while reusing native infrastructure without new processing permissions.','Record/field/file enforcement on API/import, URL, search, export and relationship navigation.']
],
mods:[['Enable governed audit/security on retained PPAP without assuming inherited grants are absent or rebuilding shared security.','PPAP APQP_PPAPAbstractObject audit/security metadata with supplied target/historical access rules.']]
},
{
id:'IMP-33',
evidenceReview:'The task configures new target event content and rules on native notification facilities, not a replacement message journal. Reminder defaults match current decisions; the daily clock time remains a proposed native-setting input. Current role/file permissions are named predecessor outputs.',
languageReview:'Notices are described in terms of recipients, current access and information the supplier may receive. Repeat delivery and failed transport are explained as delivery-only retries, and the waiting description states what content can proceed before native settings arrive.',
meaningReview:'Checked daily 08:00 business zone, three-day lead, due-day, weekly overdue and seven-day escalation to engineer versus administrators. New already-overdue work gets no backlog, closed/excluded work is suppressed and no notice changes responsibility or outcome.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add English event notices and configurable calendar-day reminders using current authorized recipients.','Native target notification templates/events and configured reminder scan.'],
steps:[
['Create target event messages without exposing internal management or discussion content to suppliers.','English native notice templates bound to the specified durable business events.'],
['Recheck recipient record rights at delivery and retry transport without recreating business work.','Native notification dispatch authorization and delivery-only retry settings.'],
['Scan active target work at the supplied business-zone time for lead, due and weekly overdue notices.','Native daily 08:00 reminder scan with configurable policy day offsets and suppression.'],
['Escalate supplier versus internal review work to the correct roles once without changing its outcome.','Seven-day escalation recipient rules and newly overdue first-scan behavior.'],
['Prevent duplicate event/episode notices and retain native failure evidence for administrators.','Native event/review/assignment/due-date delivery correlation and combined-recipient handling.']
]
},
{
id:'IMP-35',
evidenceReview:'Compared both inventory GUID/name changes against baseline views and the new operational reporting contract. Current queries use target workflow grain rather than legacy ProjectTasks. Corrected instructions specify stage-dependent deadline fields; the materially-overdue report threshold is a narrow supplied report setting, not a new policy field.',
languageReview:'The queues are explained through visible columns and distinct supplier/review delays. The corrected due-today and age paragraph states the calculation in plain language, while native query IDs/timezone remain precise waiting inputs.',
meaningReview:'Reviewed review/PPAP/element grains, current group versus actual actor, required-element readiness, scope filters and permission-safe drilldown. Parts/files/members cannot multiply counts; management and engineer review use their own deadlines, and stage age uses the latest stage entry.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add live review, PPAP and element queues with correct deadline/age interpretation and target inventory branches.','Native workflow reports and target Open/Closed PPAP inventory branches.'],
steps:[
['Show source drawing-review scope, route, current engineer and deadline only within reader permissions.','Drawing-review operational queue over native review instances and source links.'],
['Show one PPAP workflow row with scope/stage/engineer and required-element readiness instead of legacy counters.','Target PPAP queue and grouped required-element state measures.'],
['Show element assignment and review deadlines distinctly from supplier commitments at native element-instance grain.','Element work queue over current stage, assignment and due-date fields.'],
['Prevent association joins from multiplying counts and keep readiness/drilldown restricted to required authorized results.','Grouped related-data/existence filters and source permission checks.'],
['Use stage-specific due fields, due-today semantics and latest stage entry for age without inventing a material threshold.','Report date expressions using supplied timezone and approved materially-overdue setting.']
],
mods:[
['Add a target open-work inventory branch with source scope, engineer, age and required-element readiness.','APQP_PPAP_Inventory_Open target view branch.'],
['Separate Approved from Cancelled in target closed inventory with authorized actor/output/history navigation.','APQP_PPAP_Inventory_Closed target view branch.']
]
},
{
id:'IMP-36',
evidenceReview:'Historical reports consume first-complete timestamps, both frozen deadline fields and native decision/date history supplied earlier. Cancellation and reused/internal dispositions match the current metric decisions. Native report sources, timezone and period cohorts remain explicit inputs; no scorecard method is assigned.',
languageReview:'The task describes original versus revised commitments, zero eligible submissions and visible outstanding work clearly. Its steps preserve precise field names and avoid turning query uncertainty into a discovery task or an invented scorecard weighting rule.',
meaningReview:'Checked one first-complete supplier event per element, independent baseline/effective comparisons, no later accepted-resubmission substitution, separate rework/internal review and before/after-submission cancellation. Current due-work is distinct from frozen historical comparisons and all source drilldown retains PPAP authorization.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add dual-deadline first-submission and outstanding-work reports with separate rework and decision/date history.','Historical supplier-event report, current due-work report and native history views.'],
steps:[
['Compare the first complete supplier event separately with both frozen deadlines using the supplied business-day convention.','Submission-event query over first timestamp and issued/effective deadline snapshots.'],
['Display independent counts/rates and explicit denominators without counting retained/internal work as supplier submissions.','Baseline/effective report measures with a no-applicable-submissions zero-denominator label.'],
['Exclude unsubmitted cancelled work while retaining already submitted facts and separate cancellation totals.','Cancellation-aware historical population filters and immutable first-event comparisons.'],
['Show outstanding due work separately so missing submissions remain visible without changing prior comparisons.','Current due-work/unsubmitted-overdue query with its own population.'],
['Expose rework, review cycles and audited date decisions separately with permission-checked source drilldown.','Native rejection/decision/date-history views and governed fact output for future scorecard consumption.']
]
}
);

// Formatting and freshness binding only. Every statement above is a manual review conclusion.
const records=notes.map(n=>{
 const task=plan.tasks.find(t=>t.id===n.id);if(!task)throw Error('Missing reviewed task '+n.id);
 const instructions=[{path:'scope',requiredChange:n.scope[0],mechanism:n.scope[1]}];
 for(const [key,base] of [['rows','configurationRows'],['steps','steps'],['mods','modifications']]){
  const expected=(task[base]||[]).length,authored=n[key]||[];
  if(expected!==authored.length)throw Error(n.id+' '+base+' changed: '+expected+' current / '+authored.length+' manually reviewed');
  authored.forEach((pair,i)=>instructions.push({path:base+'.'+i,requiredChange:pair[0],mechanism:pair[1]}));
 }
 const actual=gate.units(task).map(x=>x.path).sort(),reviewed=instructions.map(x=>x.path).sort();
 if(JSON.stringify(actual)!==JSON.stringify(reviewed))throw Error('Review path mismatch '+n.id);
 return {id:n.id,taskHash:gate.hash(task),renderedTaskHash:gate.renderedHash(markdown,n.id),evidenceReview:n.evidenceReview,languageReview:n.languageReview,meaningReview:n.meaningReview,checks:n.checks,instructions};
});
fs.writeFileSync(path.join(__dirname,'interfaces-review.json'),JSON.stringify({version:1,tasks:records},null,2)+'\n');
console.log(JSON.stringify({tasks:records.length,instructions:records.reduce((s,x)=>s+x.instructions.length,0),fields:50,ids:records.map(x=>x.id)},null,2));
