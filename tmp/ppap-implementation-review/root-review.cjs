// These are task-specific decisions authored after reading every listed task and its source.
// The code only formats the authored notes and attaches the current task/rendered hashes.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'../..');
const dir=path.join(root,'docs/phase 2/ppap/solution_specification');
const gate=require('C:/Users/DaveMcLean/.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs');
const plan=JSON.parse(fs.readFileSync(path.join(dir,'implementation-plan.json'),'utf8'));
const md=fs.readFileSync(path.join(dir,'implementation-plan.md'),'utf8');
const notes={
'IMP-02':{
 evidenceReview:'Reviewed all seven concrete catalogue definitions, the fourteen Operating Policy fields and eleven supplied starting entries against the target model. The missing four SIA value sets, shared role/group references and business timezone are explicitly local inputs; no OOTB library parity or live memberships are assumed.',
 languageReview:'Read the complete list/policy assignment without its references. Titles and controls explain what administrators select, what inactive values do and why policy activation waits. Exact Codes, numeric defaults and field names remain unchanged; the policy rule ID was removed from operative wording.',
 meaningReview:'Checked Code100/Name255, localizable Name and stable Code, TRUE activation defaults, Float order, nonnegative integer day values and interval minimum1. Confirmed 3/7/7/5/5 defaults, fixed14 drawing review, one active default, inactive historical retention and separate shared group/library-role references.',
 checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
 scope:['Create the seven independent lists and complete policy form with only approved values; partial readiness is stated precisely.','Catalogue object/field configuration and Operating Policy setup'],
 rows:[
 ['Add the stable unique100-character PPAP type key, locked after reference.','PPAP Type.Code field and administration control'],
 ['Add the required255-character localizable type label with no default.','PPAP Type.Name field and administration control'],
 ['Add active type selection control defaultTRUE while retaining inactive history.','PPAP Type.Active? Boolean and selection behavior'],
 ['Add optional Float type order with Code as deterministic tie breaker.','PPAP Type.Sort field and list ordering'],
 ['Add the stable unique100-character work-pattern key, locked after reference.','PPAP Work Pattern.Code field and administration control'],
 ['Add required localizable255-character work-pattern display text.','PPAP Work Pattern.Name field and administration control'],
 ['Add defaultTRUE work-pattern activation that affects new use only.','PPAP Work Pattern.Active? Boolean and selection behavior'],
 ['Add optional finite Float ordering for the work-pattern list.','PPAP Work Pattern.Sort field and list ordering'],
 ['Add a stable unique100-character answer-type Code without translating it.','PPAP Answer Type.Code field and administration control'],
 ['Add required localizable255-character answer-type display label.','PPAP Answer Type.Name field and administration control'],
 ['Add defaultTRUE answer-type activation and retain former references.','PPAP Answer Type.Active? Boolean and selection behavior'],
 ['Add optional finite Float answer-type ordering then Code.','PPAP Answer Type.Sort field and list ordering'],
 ['Add unique stable100-character requirement-category key for supplied values.','PPAP Requirement Category.Code field and control'],
 ['Add required localizable255-character category label without invented seeds.','PPAP Requirement Category.Name field and control'],
 ['Add defaultTRUE category activation controlling new selection only.','PPAP Requirement Category.Active? Boolean and selector rules'],
 ['Add optional Float category order with Code tie breaking.','PPAP Requirement Category.Sort field and ordering'],
 ['Add unique stable100-character schedule-phase key.','PPAP Schedule Phase.Code field and administration control'],
 ['Add required localizable255-character phase name for supplied content.','PPAP Schedule Phase.Name field and administration control'],
 ['Add defaultTRUE phase activation, preserving historic references.','PPAP Schedule Phase.Active? Boolean and selection behavior'],
 ['Add optional finite Float schedule-phase ordering.','PPAP Schedule Phase.Sort field and list ordering'],
 ['Add the stable unique100-character manufacturing-stage key.','PPAP Manufacturing Stage.Code field and administration control'],
 ['Add the required localizable255-character manufacturing-stage label.','PPAP Manufacturing Stage.Name field and administration control'],
 ['Add defaultTRUE manufacturing-stage activation without deleting history.','PPAP Manufacturing Stage.Active? Boolean and selectors'],
 ['Add optional finite Float manufacturing-stage sort value.','PPAP Manufacturing Stage.Sort field and list ordering'],
 ['Add stable unique100-character no-PPAP exception key awaiting SIA content.','PPAP Drawing Review Exception Reason.Code field'],
 ['Add required localizable255-character exception explanation label.','PPAP Drawing Review Exception Reason.Name field'],
 ['Add defaultTRUE exception activation, disabling only new use when false.','PPAP Drawing Review Exception Reason.Active? Boolean'],
 ['Add optional finite Float exception-list order then Code.','PPAP Drawing Review Exception Reason.Sort field'],
 ['Add required100-character PPAP_DEFAULT key and enforce one active default.','PPAP Operating Policy.Code field and default-policy check'],
 ['Add required100-character native timezone identifier without assuming Toronto.','PPAP Operating Policy.Business Time Zone field and activation check'],
 ['Add policy activation and prevent a missing or duplicate default.','PPAP Operating Policy.Active? field and form validation'],
 ['Add whole-number reminder lead default3, without changing issued dates.','PPAP Operating Policy.Reminder Lead Days field'],
 ['Add whole-number overdue interval default7 and require at least1.','PPAP Operating Policy.Overdue Reminder Interval Days field'],
 ['Add whole-number escalation threshold default7 with audit.','PPAP Operating Policy.Escalation Overdue Days field'],
 ['Add whole-number engineer review days default5 for future cycles.','PPAP Operating Policy.Engineer Review Days field'],
 ['Add whole-number management review days default5 for future cycles.','PPAP Operating Policy.Management Review Days field'],
 ['Add read-only fixed14 drawing-review days populated by policy creation.','PPAP Operating Policy.Drawing Review Days field'],
 ['Add required single shared administrator-group reference without an inverse.','PPAP Operating Policy.PPAP Administrators M:1 link'],
 ['Add optional single management-pool reference, needed for safety issue.','PPAP Operating Policy.Default Management Approver Pool M:1 link'],
 ['Add required shared model engineer library-role reference, not memberships.','PPAP Operating Policy.Model Engineer Role M:1 link'],
 ['Add required shared running-change engineer library-role reference.','PPAP Operating Policy.Running Change Engineer Role M:1 link'],
 ['Add required shared process-change engineer library-role reference.','PPAP Operating Policy.Process Change Engineer Role M:1 link'],
 ['Create active NEW_MODEL entry named Model change with Sort10.','PPAP Type NEW_MODEL reference record'],
 ['Create active RUNNING_CHANGE entry named Running change with Sort20.','PPAP Type RUNNING_CHANGE reference record'],
 ['Create active PROCESS_CHANGE entry named Process change with Sort30.','PPAP Type PROCESS_CHANGE reference record'],
 ['Create active SUPPLIER pattern named Supplier submission with Sort10.','PPAP Work Pattern SUPPLIER reference record'],
 ['Create active INTERNAL pattern named Internal engineering work with Sort20.','PPAP Work Pattern INTERNAL reference record'],
 ['Create active INSPECTION pattern named Inspection-team work with Sort30.','PPAP Work Pattern INSPECTION reference record'],
 ['Create active JOINT pattern named Joint inspection with Sort40.','PPAP Work Pattern JOINT reference record'],
 ['Create active TEXT answer type named Text with Sort10.','PPAP Answer Type TEXT reference record'],
 ['Create active NUMBER answer type named Number with Sort20.','PPAP Answer Type NUMBER reference record'],
 ['Create active BOOLEAN answer type named Yes or no with Sort30.','PPAP Answer Type BOOLEAN reference record'],
 ['Create active DATE answer type named Calendar date with Sort40.','PPAP Answer Type DATE reference record'],
 ['Create the one complete default policy with known numeric values and supplied references before activation.','PPAP_DEFAULT Operating Policy record and activation validation']
 ],
 steps:[
 ['Create localizable concrete list types with audit/security and one distinct control per field.','Seven catalogue object settings and administration forms'],
 ['Load only supplied SIA catalogue values using their stable Codes and approved labels/order.','Category/phase/stage/exception reference-value configuration'],
 ['Enforce integer/range rules, fixed14 and complete unique default activation.','Operating Policy ordinary validation and read-only controls']
 ]
},
'IMP-05':{
 evidenceReview:'Read all thirty-eight field/list rows, setup scope, named predecessor outputs and result checks against the Element/Answer model. The assignment sets fields and ordinary controls only; generation, submission, role resolution and deep record/file permissions keep their separate owners. Exact shared role/person connections remain local inputs.',
 languageReview:'The assignment describes separate work areas and what each actor can edit, while preserving exact field/stage names including Engineer Review. Conditional rows state matching answer type, optional visibility and clearing. The working-file wording was narrowed to saved evidence rather than a mechanical doubled phrase.',
 meaningReview:'Reconciled M:1 references and inverse lists, required/protected/exclusion/addition rules, stored date fields and baseline preservation, scope/team eligibility and current versus approved snapshot pointers. Checked text8000, finite numeric answers, nullable Boolean FALSE, calendar Date and one Element+Question Version working record.',
 checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
 scope:['Create Element and working Answer fields and ordinary controls, with actual role and answer conditions inline.','Element/Answer field configuration and native forms'],
 rows:[
 ['Add required owning PPAP link, immutable assignment and read-only Elements list.','PPAP Element.PPAP M:1 link and form control'],
 ['Add required exact Requirement Version link that cannot follow latest on correction.','PPAP Element.Requirement Version M:1 link'],
 ['Add optional matrix-row version link required only for generated template work.','PPAP Element.Template Requirement Version M:1 link'],
 ['Add2000-character addition reason required for a governed non-template addition.','PPAP Element.Setup Addition Reason field and conditional form action'],
 ['Add required applicability Boolean, editable only before issue and protected from waiver.','PPAP Element.Required? field and Draft control'],
 ['Add read-only protection Boolean from requirement and applicable row mandates.','PPAP Element.Protected? field and setup-action write restriction'],
 ['Add2000-character reason mandatory when excluded and cleared when required in Draft.','PPAP Element.Exclusion Reason field and conditional form actions'],
 ['Add exact Work Pattern catalogue link with active filter and no inverse.','PPAP Element.Work Pattern M:1 link and selector'],
 ['Add scoped exact entity link for supplier/configured role routing.','PPAP Element.Routing Entity M:1 link'],
 ['Add role reference resolved from exact entity and library role, with no fallback.','PPAP Element.Assigned Role M:1 link and protected selector'],
 ['Add team reference for INSPECTION/JOINT, clearing/hiding when inapplicable.','PPAP Element.Assigned Team M:1 link and conditional control'],
 ['Add optional eligible person link with internal-owner default and permitted reassignment.','PPAP Element.Assigned Person M:1 link and selection control'],
 ['Add phase catalogue link allowing only controlled open connected moves after issue.','PPAP Element.Schedule Phase M:1 link and controlled editing'],
 ['Add signed integer offset from matrix row or0 for additions, frozen on issue.','PPAP Element.Offset Days field and Draft control'],
 ['Add stored read-only calculated calendar date from matching model cell plus offset.','PPAP Element.Calculated Due Date field'],
 ['Add optional engineer manual calendar date with reason and explicit override behavior.','PPAP Element.Manual Due Date field and change control'],
 ['Add effective date required on every required element before issue, with past-date warning.','PPAP Element.Effective Due Date field and form rules'],
 ['Add frozen issued date copied once from effective date, never recomputed.','PPAP Element.Issued Baseline Due Date field'],
 ['Add2000-character internal reason for manual/bulk/connection date changes and audit.','PPAP Element.Date Change Reason field and conditional requiredness'],
 ['Add separate read-only engineer-review calendar date for each submit cycle.','PPAP Element.Engineer Review Due Date field'],
 ['Add2000-character working comment editable by current assignee before submission.','PPAP Element.Submission Comment field and Work In Progress form'],
 ['Add native working files editable only in permitted work without deleting saved evidence.','PPAP Element.Working Files attachment control'],
 ['Add read-only current-submission reference to exact saved evidence.','PPAP Element.Current Submission M:1 link'],
 ['Add read-only last-approved reference retained during correction.','PPAP Element.Latest Approved Snapshot M:1 link'],
 ['Add2000-character assignee-visible feedback required on Return Element.','PPAP Element.Review Feedback field and return control'],
 ['Add2000-character reason mandatory for non-engineering reopen before closure.','PPAP Element.Correction Reason field and reopen control'],
 ['Add UTC/timezone-enabled first complete supplier event, never overwritten.','PPAP Element.First Complete Submission At timestamp field'],
 ['Add frozen original deadline captured at first complete supplier submission.','PPAP Element.First Submission Issued Due Date field'],
 ['Add frozen effective deadline captured at the same first supplier event.','PPAP Element.First Submission Effective Due Date field'],
 ['Add timezone-enabled retention timestamp that does not imply supplier submission.','PPAP Element.Retained At timestamp field'],
 ['Add fixed required working-answer owner link and native Answers list.','PPAP Answer.Element M:1 link and inverse navigation'],
 ['Add fixed required exact question-version link with one answer per element/question.','PPAP Answer.Question Version M:1 link and uniqueness rule'],
 ['Add8000-character TEXT answer with matching-type visibility and requiredness only when mandated.','PPAP Answer.Answer - Text field and typed form actions'],
 ['Add finite NUMBER answer without silent rounding and with matching-type visibility.','PPAP Answer.Answer - Number field and typed form actions'],
 ['Add nullable BOOLEAN answer where FALSE is complete and NULL unanswered.','PPAP Answer.Answer - Yes or No field and typed form actions'],
 ['Add calendar DATE answer with matching-type visibility, preserving optional questions.','PPAP Answer.Answer - Date field and typed form actions'],
 ['Add read-only PPAP.Elements navigation using the existing declaring new link only.','PPAP.Elements inverse list over PPAP Element.PPAP'],
 ['Add read-only working Answers navigation without another stored relationship.','PPAP Element.Answers inverse list over PPAP Answer.Element']
 ],
 steps:[
 ['Show the matching typed field, preserve optional visibility and clear nonmatching working values only.','PPAP Answer form show/require/clear actions keyed by Answer Type.Code'],
 ['Enforce working answer/requirement uniqueness without adding duplicate workflow/audit records.','Element/Answer unique-key and native-record configuration'],
 ['Apply only the stated Draft/open control edits and protect approved/first-event evidence from work-form edits.','PPAP Element stage-aware ordinary field controls']
 ]
},
'IMP-06':{
 evidenceReview:'Reviewed the fourteen evidence snapshot fields, six frozen-answer fields and three relevant inverse navigations across the model/plan owner split. Every submitted answer/file remains separate from working content. Supplier actor identity and rejected-file access/protection are supplied inputs rather than assumed native behavior.',
 languageReview:'The task explains saved evidence and lineage separately from editable working content. Read-only actor/time facts and conditional compatibility/nonlatest reasons are understandable without source references; exact Snapshot object names and Question Version fields remain intact.',
 meaningReview:'Checked unique Element+Sequence, independent native files, source link without ACL widening, required actual submit actor, one-time mutually exclusive review facts and exact typed source mappings for Submit/Retain. Native copy actions own writes; field forms and related lists own no duplicate workflow or file table.',
 checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
 scope:['Create protected evidence and frozen-answer field/control structures while leaving content copying to named actions.','Evidence Snapshot/Answer field and historical form configuration'],
 rows:[
 ['Add required fixed Element ownership and read-only snapshot navigation.','PPAP Evidence Snapshot.Element M:1 link'],
 ['Add integer sequence allocated under Element lock with unique element/sequence.','PPAP Evidence Snapshot.Sequence field and action-only control'],
 ['Add2000-character comment copied once from the submitted working comment.','PPAP Evidence Snapshot.Submission Comment field'],
 ['Add independent native file collection with fixed submitted bytes/metadata.','PPAP Evidence Snapshot.Files attachment collection'],
 ['Add optional internal immediate-source lineage link without source-record access grants.','PPAP Evidence Snapshot.Reused From self-reference'],
 ['Add2000-character compatibility confirmation required only for retention source links.','PPAP Evidence Snapshot.Compatibility Confirmation field'],
 ['Add2000-character reason required for a nonlatest eligible source selection.','PPAP Evidence Snapshot.Nonlatest Selection Reason field'],
 ['Add write-once timezone-enabled Submit/Retain action timestamp.','PPAP Evidence Snapshot.Submitted At field'],
 ['Add required actual submit/retain actor link, waiting on supplier identity connection.','PPAP Evidence Snapshot.Submitted By M:1 link'],
 ['Add timezone-enabled approval stamp retained when its element reopens.','PPAP Evidence Snapshot.Approved At field'],
 ['Add actual engineer approval/retention actor link with no direct editor.','PPAP Evidence Snapshot.Approved By M:1 link'],
 ['Add one-time rejected timestamp distinct from approved content.','PPAP Evidence Snapshot.Rejected At field'],
 ['Add2000-character current-return feedback while preserving internal rejected history.','PPAP Evidence Snapshot.Review Feedback field'],
 ['Add fixed frozen-answer owner link and read-only Answers navigation.','PPAP Evidence Answer.Evidence Snapshot M:1 link'],
 ['Add exact source question-version reference unique within its snapshot.','PPAP Evidence Answer.Question Version M:1 link'],
 ['Add fixed8000-character typed TEXT copy from working/source/reconciled answer.','PPAP Evidence Answer.Answer - Text field and copy-only control'],
 ['Add fixed finite NUMBER copy without coercing changed source answer types.','PPAP Evidence Answer.Answer - Number field and copy-only control'],
 ['Add fixed nullable BOOLEAN copy preserving FALSE versus unanswered.','PPAP Evidence Answer.Answer - Yes or No field and copy-only control'],
 ['Add fixed calendar DATE copy while retaining exact question version.','PPAP Evidence Answer.Answer - Date field and copy-only control'],
 ['Add read-only historical snapshot list over the declaring Element link.','PPAP Element.Evidence Snapshots inverse list'],
 ['Add read-only frozen-answer list over the declaring snapshot link.','PPAP Evidence Snapshot.Answers inverse list']
 ],
 steps:[
 ['Separate saved submissions from Working Files/answers and preserve source question/version/sequence.','Evidence historical forms and read-only source/working navigation'],
 ['Restrict direct content edits while permitting named write-once action decision stamps.','Evidence field/form editing restrictions and action-only decision controls'],
 ['Keep rejected history internal and expose only current supplier-safe feedback.','Evidence historical views and internal lineage navigation']
 ]
},
'IMP-29':{
 evidenceReview:'Read all thread/post fields, native M:N recipient storage and inverse lists against the chosen immutable-thread-audience design. Confirmed the user later required all discussion read only after approval/cancellation, suppliers forced external audience and text required even for file posts. Native actor/file protection remains local supplied information.',
 languageReview:'The title, scope, row controls and four steps describe who can post, when text/files become fixed and how corrections use new replies. Internal/external visibility, recipient eligibility and closed behavior are stated directly; exact record/field names and native types are retained.',
 meaningReview:'Checked Subject255, Body8000, Internal Only? TRUE for internal/default and forcedFALSE for supplier, optional same-thread Reply To, actual timezone-enabled Posted At and native Employee actor/recipients. Field/form ownership is distinct from record ACL and delivery owners; no discussion workflow tasks are created.',
 checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
 scope:['Create fixed-audience append-only thread/post fields and actions, with closure/recipient conditions inline.','Discussion Thread/Post configuration and native posting actions'],
 rows:[
 ['Add required fixed PPAP ownership and read-only discussion navigation.','PPAP Discussion Thread.PPAP M:1 link'],
 ['Add required255-character subject editable only before first post.','PPAP Discussion Thread.Subject field and form control'],
 ['Add audience Boolean defaultTRUE for internal and forcedFALSE for supplier, fixed after first post.','PPAP Discussion Thread.Internal Only? field and form actions'],
 ['Add native M:N eligible recipient selection without granting access or new junction attributes.','PPAP Discussion Thread.Notification Recipients native link'],
 ['Add fixed required Thread ownership with read-only Posts navigation.','PPAP Discussion Post.Thread M:1 link'],
 ['Add optional fixed reply link limited to a visible post in the same thread.','PPAP Discussion Post.Reply To self-reference'],
 ['Add required nonblank8000-character body, immutable after posting even with files.','PPAP Discussion Post.Body field and posting validation'],
 ['Add native attachment preparation then freeze all file additions/deletions at Post.','PPAP Discussion Post.Attachments native collection'],
 ['Add required actual actor link without invented supplier-to-employee conversion.','PPAP Discussion Post.Posted By M:1 field'],
 ['Add action-only UTC/timezone-enabled posted timestamp, leaving preparation unposted.','PPAP Discussion Post.Posted At field'],
 ['Add read-only thread navigation over the declaring PPAP relationship.','PPAP.Discussion Threads inverse list'],
 ['Add read-only post navigation over the declaring Thread relationship.','PPAP Discussion Thread.Posts inverse list']
 ],
 steps:[
 ['Add authorized open-package Start Discussion/Post Reply with subject/body and same-thread validation.','Proposed Start Discussion and Post Reply object actions'],
 ['Force suppliers external and freeze subject/audience at first post, inheriting audience on replies.','Thread audience form conditions and posting checks'],
 ['Recheck access/recipients, stamp actual actor/time and freeze content before publishing event.','Post action ordered validation/write and native event connection'],
 ['Deny posted edits/deletion/new files and all posting after closure; corrections are new replies.','Post edit restrictions and PPAP-closure conditions']
 ]
}
};
const reviews=[];
for(const [id,n]of Object.entries(notes)){
 const t=plan.tasks.find(t=>t.id===id);
 if(n.rows.length!==t.configurationRows.length||n.steps.length!==t.steps.length)throw Error('Manual note count mismatch '+id);
 const instructions=[{path:'scope',requiredChange:n.scope[0],mechanism:n.scope[1]},...n.rows.map((x,i)=>({path:'configurationRows.'+i,requiredChange:x[0],mechanism:x[1]})),...n.steps.map((x,i)=>({path:'steps.'+i,requiredChange:x[0],mechanism:x[1]}))];
 if(instructions.length!==gate.units(t).length)throw Error('Incomplete manual review '+id);
 reviews.push({id,taskHash:gate.hash(t),renderedTaskHash:gate.renderedHash(md,id),evidenceReview:n.evidenceReview,languageReview:n.languageReview,meaningReview:n.meaningReview,checks:n.checks,instructions});
}
fs.writeFileSync(path.join(__dirname,'root-review.json'),JSON.stringify({version:1,tasks:reviews},null,2)+'\n','utf8');
console.log(JSON.stringify({reviewed:reviews.map(x=>x.id),units:reviews.reduce((n,x)=>n+x.instructions.length,0)}));
