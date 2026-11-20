/* Manual semantic decisions authored after reading the assigned JSON and rendered tasks.
 * This formatter only assigns paths and computes binding hashes; it does not decide review outcomes. */
const fs=require('fs');
const path=require('path');
const gate=require('C:/Users/DaveMcLean/.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs');
const repo=path.resolve(__dirname,'../..');
const plan=JSON.parse(fs.readFileSync(path.join(repo,'docs/phase 2/ppap/solution_specification/implementation-plan.json'),'utf8'));
const markdown=fs.readFileSync(path.join(repo,'docs/phase 2/ppap/solution_specification/implementation-plan.md'),'utf8');
const notes=[
{
id:'IMP-12',
evidenceReview:'Reconciled all 38 source/review field rows to the current target contract. Source identities, explicit unknown criticality, Corrects Release, fixed release-date review target and released-specification reference are new configuration; Operational Part/Drawing targets and manual reviewers remain supplied inputs. The task creates no Product Integration connection.',
languageReview:'Read the complete field table and rendered assignment, then reread the corrected acceptance rows. The fixed-after wording retains the concrete Accepted At condition without the earlier broken expansion. Source preparation, no-PPAP reasons and waiting selectors are explained for the form builder.',
meaningReview:'Checked lengths 100/255/64/2000, required/conditional references, disabled inverses and the two declared inverse lists. Accepted source data stays frozen, NULL criticality remains unknown, and review completion requires a released version when inspection review applies. Receipt and completion automation remain with later owners.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Create internal source and review fields/forms with authoritative provenance before any supplier release.','New Engineering Release/Part and Drawing Review field and form configuration.'],
rows:[
['Store the required source-system namespace, limited to 100 characters, and prevent changes after acceptance.','Engineering Release.Source System text field and accepted-record read-only rule.'],
['Store the required 255-character upstream release key without treating its label as revision ordering.','Engineering Release.Source Release Key text field and acceptance lock.'],
['Retain optional ECS reference text, up to 100 characters, without using it as an ordinal revision.','Engineering Release.ECS Number field with accepted-context protection.'],
['Keep required drawing-number source text within 100 characters and freeze the accepted identity.','Engineering Release.Drawing Number field and source form editing condition.'],
['Keep the explicit drawing revision code within 100 characters and prevent later accepted-record edits.','Engineering Release.Drawing Revision Code field and acceptance read-only condition.'],
['Store the authoritative release calendar date that anchors the fourteen-day review deadline.','Engineering Release.Drawing Release Date field with policy-zone date meaning.'],
['Require one mapped operational drawing revision and retain no reverse consumer list on that external target.','Engineering Release.Drawing Revision M:1 selector and supplied native target binding.'],
['Require one active PPAP Type for new source selection and retain existing inactive references.','Engineering Release.Change Type M:1 field with Active? selection filter and disabled inverse.'],
['Require the exact source supplier entity needed for review routing without substituting creator identity.','Engineering Release.Routing Entity M:1 to Supplier Abstract and source acceptance rule.'],
['Show permitted candidate facilities as contextual multiple selection rather than approved scope or role access.','Engineering Release.Candidate Manufacturing Facilities native M:N relationship without custom map record.'],
['Default manual provenance to FALSE and let the controlled intake path set TRUE with source evidence.','Engineering Release.Manual Intake? system-controlled Boolean field.'],
['Retain the 64-character SHA-256 content fingerprint computed from the supplied normalized payload.','Engineering Release.Content Fingerprint text field populated by the intake Action Handler.'],
['Link a genuine same-event correction to its prior source context without changing accepted records.','Engineering Release.Corrects Release optional self-reference with inverse disabled.'],
['Preserve received source files through native attachments and make accepted files read only.','Engineering Release.Source Evidence native attachment control and acceptance protection.'],
['Record successful complete source acceptance as a timezone-enabled timestamp written by the accepting operation.','Engineering Release.Accepted At system timestamp field.'],
['Require each source-part row to identify one release and show it through that release existing link.','Engineering Release Part.Engineering Release M:1 with release.Parts inverse list.'],
['Require the mapped operational Part identity and freeze it with the accepted source graph.','Engineering Release Part.Part M:1 field using the supplied operational target.'],
['Keep required 100-character source part-number text for later PPAP scope copying.','Engineering Release Part.Part Number field populated before acceptance.'],
['Retain the optional 255-character source part description for historical package meaning.','Engineering Release Part.Part Description field with acceptance read-only condition.'],
['Preserve important-safety as NULL until an authoritative explicit Boolean is available; never provide a PPAP override.','Engineering Release Part.Important Safety? nullable Boolean and Issue-required source condition.'],
['Preserve important-quality as unknown rather than FALSE until the authoritative source supplies its value.','Engineering Release Part.Important Quality? nullable Boolean with accepted-context protection.'],
['Preserve regulated classification as an explicit source Boolean or unknown, required before package Issue.','Engineering Release Part.Regulated? nullable Boolean field and source-only editing.'],
['Bind the initial review to exactly one source release without permitting later reassignment.','Drawing Review.Engineering Release M:1 field and release.Drawing Reviews inverse list.'],
['Store the internally eligible review engineer without defaulting missing routing to the creator.','Drawing Review.Responsible Engineer M:1 to Employee and routed population.'],
['Retain the exact supplier entity copied from source for the review responsibility calculation.','Drawing Review.Routing Entity read-only M:1 to Supplier Abstract.'],
['Copy the source change type to the review and use stable type codes for engineer-role choice.','Drawing Review.Change Type read-only M:1 with catalogue inverse disabled.'],
['Store the resolved exact-entity internal role and require the assigned engineer to be its current member.','Drawing Review.Engineer Role M:1 to shared Supplier Specific Role.'],
['Retain the release-date plus fixed policy review-days deadline as a read-only calendar date.','Drawing Review.Due Date field populated by Accept Release.'],
['Bind the current operating policy used to calculate initial review responsibility and deadline.','Drawing Review.Operating Policy required read-only M:1 field.'],
['Default the review determination to PPAP required and allow the responsible engineer to decide while open.','Drawing Review.PPAP Required? Boolean default TRUE and review-stage edit condition.'],
['Require an active exception for a no-PPAP decision and clear it if the open review returns to PPAP required.','Drawing Review.Exception Reason catalogue selector and conditional form/Save rule.'],
['Require a meaningful no-PPAP rationale within 2000 characters and preserve it on closure.','Drawing Review.Decision Rationale text field with no-PPAP mandatory condition.'],
['Allow reconciliation only to an already-created package for the same source change and intended scope.','Drawing Review.Already Created PPAP optional M:1 selector and same-change validation.'],
['Default inspection-specification review need to TRUE and allow its responsible engineer to decide applicability.','Drawing Review.Inspection Specification Review Required? Boolean field.'],
['Capture the explicit inspection-content disposition without replacing the released-version completion checkpoint.','Drawing Review.Inspection Specification Disposition text control and completion requiredness.'],
['Require a released, correctly scoped specification version when review is required, leaving NULL only with nonapplicability rationale.','Drawing Review.Released Inspection Specification Version conditional M:1 and completion check.'],
['Show source-part children through their existing declaring release relationship without duplicate storage.','Engineering Release.Parts inverse 1:M navigation over source-part.Engineering Release.'],
['Show initial reviews through their declaring source-release relationship with read-only navigation.','Engineering Release.Drawing Reviews inverse 1:M over Drawing Review.Engineering Release.']
],
steps:[
['Lock the complete source/part graph when Accepted At is populated and require replacement context for a correction.','Accepted-record field/form read-only rules and Corrects Release relationship.'],
['Display unknown criticality without a FALSE default and keep authoritative editing outside PPAP preparation.','Nullable criticality controls and removal of local override inputs.'],
['Require evidence and governed identity fields for restricted manual preparation without expanding facility authorization.','Manual intake form conditions and candidate-facility contextual selection.'],
['Configure no-PPAP reason controls and the applicable released-specification selector on the review form.','Drawing Review conditional show/mandatory/clear view actions.']
]
},
{
id:'IMP-13',
evidenceReview:'Compared the six receiver instructions with the operational interface and Accept Engineering Release contract. They explicitly retain Product Integration isolation, source ordering, graph/review consistency and manual replay reconciliation. Producer keys, external credentials and native save/recovery methods remain narrow inputs, not discovery assignments.',
languageReview:'The receiver task explains repeated delivery as reuse of the earlier result and failed saves as no partial accepted graph. Its identity/fingerprint terms retain a named field and supplied normalization rule; the consultant is not asked to invent payload keys.',
meaningReview:'Validated release-only intake, SHA-256 fingerprint, source-part uniqueness, unknown flags allowed before Issue, fixed fourteen-day review creation and same-path manual acceptance. The source fields, review actions and responsibility check are named predecessor outputs; source correction impact belongs to IMP-15.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add the operational receiver and shared controlled-manual acceptance path with complete-source and review consistency.','Proposed Accept Engineering Release Action Handler and operational connection.'],
steps:[
['Accept only authenticated, agreed Production Control releases through a separate operational connection.','Accept Engineering Release Action Handler with supplied endpoint and producer credentials.'],
['Validate exact drawing/revision/routing source fields and compute the agreed source-content fingerprint before saving.','Receiver input validation and SHA-256 Content Fingerprint assignment.'],
['Return the original acceptance on replay and route changed or stale source content through controlled reconciliation.','Native source-key locking and fingerprint/release-order matching.'],
['Create unique release-part rows with authoritative source values and explicit unknown classification handling.','Receiver population of Engineering Release Part keyed by release plus operational Part.'],
['Save accepted source and create its routed review with a fourteen-day target without exposing partial acceptance.','Whole-save Accept Release operation invoking configured Drawing Review creation.'],
['Make restricted manual acceptance use identical keys/evidence checks and reconcile delayed matching automated deliveries.','Manual Accept Release entry point plus native replay/recovery correlation.']
]
},
{
id:'IMP-14',
evidenceReview:'The three named review actions and released specification gate match the current workflow and ADR-030/039 boundary. The task consumes the role resolver and Draft creation output rather than reproducing them. Missing exception content, released-state mapping and timezone are local inputs.',
languageReview:'The review assignment tells the consultant what each decision does, including the distinction between creating a Draft and issuing work. Its result checks independently demonstrate reasons, scope and repeat-safe launch behavior.',
meaningReview:'Checked exact NEW_MODEL/RUNNING_CHANGE/PROCESS_CHANGE policy mappings, release+14 calendar days, PPAP Required?=TRUE launch condition, same-change linking and conditional released-specification validation before Review Complete. It adds no pilot execution gate.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add the initial review decision actions with exact role routing and a required released-specification checkpoint.','Engineering Review workflow actions and Review Complete termination.'],
steps:[
['Assign review to the current internal member of the exact policy-selected change-type role.','Engineering Review responsibility rule calling the PPAP Responsibility Check.'],
['Set the fixed fourteen-calendar-day review date and allow an overdue date with a warning.','Drawing Review.Due Date population from release date and native decision history.'],
['Launch a scoped internal Draft once per launch token while retaining the open review stage.','Launch PPAP action calling Create Target PPAP Draft.'],
['Reject an already-created PPAP link unless its source change and intended drawing/facility/part scope match.','Link Same-Change PPAP action validation before relationship assignment.'],
['Require no-PPAP justification or created work and the applicable correct released specification before completion.','Complete Drawing Review pretransition validation over reason and specification fields.'],
['Terminate only the validated initial determination without creating pilot work or waiting for unrelated inspections.','Review Complete native termination after required checks.']
]
},
{
id:'IMP-15',
evidenceReview:'Reconciled correction lineage and hold behavior against the revised engineering-change decisions and Corrects Release field. Applicable original-context corrections differ from a new engineering revision. Native protected updates and producer correction keys remain supplied inputs.',
languageReview:'The task explains which old package is affected and which history is retained. It directs actual handler changes, not investigation, and its predecessor descriptions identify the source, preparation and finalization operations consumed.',
meaningReview:'Confirmed Draft source refresh/regeneration, issued Replacement Required?/Reason without overwriting snapshots, owner notice and finalization hold. Different new revisions retain earlier PPAP continuity; closed approved records remain unchanged.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add original-context source correction processing that refreshes Drafts and holds affected issued open packages.','Proposed Source Correction Action Handler and replacement-hold fields.'],
steps:[
['Trigger correction processing only from explicit accepted same-event correction lineage.','Source Correction Action Handler using Corrects Release and supplied scope keys.'],
['Refresh an unissued Draft source and deliberately regenerate preparation without changing issued packages.','Controlled source rebinding and the configured Draft requirement reset/generation action.'],
['Hold an issued open PPAP when its own applicable source flags change and notify its engineer to replace it.','Replacement Required?/Replacement Reason protected update and finalization hold event.'],
['Treat a different engineering revision as new work and prevent repeated corrections from altering closed history.','Receiver invocation for new context and native correction retry correlation.']
]
},
{
id:'IMP-17',
evidenceReview:'The package ProjectOwner filter uses the exported APQP and PPAP Owners group, so changing the target selector is a real modification rather than a field default change. Current SRM role/status authorities support exact-entity Members resolution and SERVICE/INACTIVE rules; actual IDs and actor/selector connections remain inputs.',
languageReview:'Role choices are explained as the right current people and no company or creator fallback. Shared technical record names remain precise. The task names the supplied method and exact failure conditions without outsourcing rules to an ADR.',
meaningReview:'Reviewed source-type role mappings, internal versus supplier populations, coordinator and team routes, action-time eligibility and audited reassignment. It does not create shared role objects, alter memberships or introduce a competing lifecycle policy.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add reusable exact-entity responsibility and participation checks for current actors and reassignment.','Proposed PPAP Responsibility Check, target owner selector and Reassign Work action.'],
steps:[
['Reject missing, duplicate or empty exact-entity roles instead of allowing assignment to an unrelated group.','PPAP Responsibility Check matching Supplier Abstract and Supplier Management Role identities.'],
['Resolve internal engineering roles by stable PPAP Type and require the selected engineer current membership.','Policy Model/Running/Process Engineer Role mapping and current-member validation.'],
['Route supplier and inspection work to eligible exact-scope groups while defaulting unseparated internal work to Project Owner.','Element Assigned Role/Team/Person resolution and permitted team-lead reassignment.'],
['Consume shared service/inactive capabilities at participation without automatic PPAP cancellation or central-policy duplication.','Central status-capability adapter intersecting manufacturing facility, company and routing entities.'],
['Recheck management pool membership and record eligible reassignment with current recipients and actual action actor.','Management action eligibility and audited Reassign Work native operation.']
],
mods:[['Replace the target hard-coded owner group selector with the resolved current internal role membership filter.','PPAP Project Owner selector / ProjectOwner target branch.']]
},
{
id:'IMP-18',
evidenceReview:'Creation consumes accepted release provenance, the retained concrete PPAP/base and the target-only legacy bypass. Required APQP Settings and administrative Location remain compatibility inputs, not supplier scope. The task leaves producer crosswalks, guard ordering and retry support explicit.',
languageReview:'The Draft task describes creation order and what remains empty before issue in direct terms. Its title, scope and observable results consistently describe internal drafts, without suggesting a new supplier request application.',
meaningReview:'Checked launch locking, Target Configuration? ordering, separate Draft schema, governed Project Owner, overall due-date source, all-origin source provenance and one model/stage for NEW_MODEL. Failed creation leaves no partial package or duplicate parts.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add one controlled target Draft creation operation shared by review, fallback and originating applications.','Create Target PPAP Draft Action Handler using supplied launch correlation.'],
steps:[
['Validate authorized launch identity and intended facility/drawing/parts before creating a single scoped Draft.','Create Target PPAP Draft precreation validation and launch-key lock.'],
['Set the target discriminator before legacy processing and bind the separate Draft workflow and compatibility settings.','Supported creation ordering for Target Configuration?, target schema and required native references.'],
['Populate authoritative scope and source references with a supplied overall date and one active operating policy.','Draft creation defaults and PPAP Part generation from matched accepted source parts.'],
['Require one governing model/stage for new-model work while retaining internal Draft access and empty decision/output facts.','NEW_MODEL creation validation and initial Draft field/security conditions.'],
['Prevent partial Drafts and duplicate part rows on failure while giving new changes their own work.','Native protected creation/retry correlation and new source-event selection.']
]
},
{
id:'IMP-20',
evidenceReview:'Issue and confirmation align with current scope/requirement/date locks and supplier release decisions. Sync Person Responsible is an exported handler that forces ProjectOwner outside Draft; the specified target change preserves selected management responsibility. Workflow/save and external actor methods remain narrow inputs.',
languageReview:'The assignment clearly separates engineer Issue, supplier acknowledgment and later mass submission. Its ordered checks state exact business results and meaningful failure behavior rather than requiring the builder to read another specification.',
meaningReview:'Checked exact accepted source-part matching, complete authoritative flags, protected configuration, refreshed open dates, all required element deadlines and write-once baselines. Required work starts once only after validation; internal work stays independent of supplier confirmation.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
scope:['Add explicit Issue and supplier scope confirmation with ordered validation and immutable issued baselines.','Issue PPAP and Confirm Scope native workflow actions.'],
steps:[
['Restrict Issue to the current responsible internal engineer in Draft and recheck all access before release.','Issue PPAP pretransition authority and concurrent-action protection.'],
['Reject unmatched source parts, unknown flags, incomplete versions or replacement holds before issue.','Issue scope/criticality/configuration validation against accepted release and prepared elements.'],
['Require the completed applicable review and current complete assignments before exposing supplier work.','Issue checks calling configured review, requirement setup and responsibility operations.'],
['Refresh connected dates and freeze all required original deadlines while warning rather than rejecting old dates.','Issue date refresh and copying into Issued Overall/Baseline Due Date fields.'],
['Save issue facts, locked scope and one workflow per required element before publishing release notices.','Whole-save Issue action with native element start and retained success correlation.'],
['Record supplier acknowledgment of the complete frozen scope without requiring masses or blocking internal work.','Confirm Scope action writing Scope Confirmed At/By once.']
],
mods:[['Prevent the target owner-sync handler from overwriting the chosen Management Review approver.','Sync Person Responsible target branch with stage-aware responsibility.']]
}
];
module.exports={notes,fs,path,gate,repo,plan,markdown};
