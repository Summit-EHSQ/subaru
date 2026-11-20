const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const gate = require('C:/Users/DaveMcLean/.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs');
const plan = JSON.parse(fs.readFileSync(path.join(root, 'docs/phase 2/ppap/solution_specification/implementation-plan.json'), 'utf8'));
const markdown = fs.readFileSync(path.join(root, 'docs/phase 2/ppap/solution_specification/implementation-plan.md'), 'utf8');

// The following notes are manually authored reviews of the named instructions.
// The formatter below calculates hashes and assigns their existing unit paths only.
const authored = {
 'IMP-07': {
  evidence: 'Compared all 50 field/list rows with the Requirement, Requirement Version, Question and Question Version declarations. Author Code is stable and unique, copied Code repeats across versions, question Code scopes differ correctly, all content/file/protection/routing fields mirror, and source content remains blocked by the requested SIA library and shared Routing Role identifiers. Native publication execution is deliberately owned by IMP-08.',
  language: 'Read the authoring/version assignment without source references: the editable versus published screens, per-field settings, source-content waiting text and observable administrator outcomes are understandable. Technical field names remain exact and SIA PPAP Engineer is not substituted for the configuration administrator.',
  meaning: 'Reconciled text capacities 100/255/16000/1000/2000/8000, nullable versus required fields, localized display content, Boolean defaults, question types/order, suppressed catalogue inverses, independent instruction files and the three inverse lists. The publication action supplies stored values and actor/time; source seeds are not invented.',
  scope: ['Create the editable requirement/question library and its immutable publication structures without loading invented SIA content.', 'Requirement/Question authoring and version fields, ordinary administration forms and source-backed configuration entry.'],
  rows: [
   ['Add the stable requirement key, limited to 100 characters and locked after its first publication.', 'PPAP Requirement.Code field and administrator authoring control.'],
   ['Add the required localized requirement name with a 255-character limit.', 'PPAP Requirement.Name field and editable authoring control.'],
   ['Add required localized requirement instructions up to 16000 characters.', 'PPAP Requirement.Instructions field and authoring editor.'],
   ['Add the required active category selector and leave catalogue reverse navigation disabled.', 'PPAP Requirement.Category M:1 field to PPAP Requirement Category.'],
   ['Add the required active work-pattern selector without a catalogue reverse list.', 'PPAP Requirement.Work Pattern M:1 field to PPAP Work Pattern.'],
   ['Add an optional reference to the shared routing-role library, without treating its group membership as assignees.', 'PPAP Requirement.Routing Role M:1 field to Supplier Management Role.'],
   ['Add explicit supplier visibility, default false, forcing supplier work visible and internal work hidden.', 'PPAP Requirement.Supplier Visible? Boolean and Work Pattern conditional control.'],
   ['Add the protection flag, initially false until controlled source requirements supply the mandate.', 'PPAP Requirement.Protected? Boolean authoring field.'],
   ['Add a required nonnegative whole-number minimum file count with initial value zero.', 'PPAP Requirement.Minimum Files Integer field and nonnegative validation.'],
   ['Add an optional 1000-character declarative extension list; null leaves native restrictions in effect.', 'PPAP Requirement.Allowed File Extensions text field.'],
   ['Add the independent required-result acceptance flag with initial value false.', 'PPAP Requirement.Inspection Acceptance Required? Boolean field.'],
   ['Add a required 1000-character source-procedure reference for governed content provenance.', 'PPAP Requirement.Source Procedure Reference text field.'],
   ['Add authoring activation that blocks new selection/publication without changing issued content.', 'PPAP Requirement.Active? Boolean field and new-selection/publication eligibility.'],
   ['Add native editable instruction attachments whose published files are independent copies.', 'PPAP Requirement.Instruction Attachments native collection.'],
   ['Add a required copied requirement Code that may repeat between versions of one author.', 'PPAP Requirement Version.Code stored publication-copy field.'],
   ['Add the immutable published localized name copied from the authoring requirement.', 'PPAP Requirement Version.Name field and Publish Requirement copy default.'],
   ['Add the immutable published instructions preserving the 16000-character capacity.', 'PPAP Requirement Version.Instructions field and named authoring copy.'],
   ['Add the immutable published category reference, validating activation only at publication.', 'PPAP Requirement Version.Category M:1 field and publication resolution.'],
   ['Add the immutable published work-pattern reference while preserving inactive historical references.', 'PPAP Requirement Version.Work Pattern M:1 field.'],
   ['Add the published shared routing-role reference as a stored copy rather than a live lookup.', 'PPAP Requirement Version.Routing Role M:1 field.'],
   ['Add the published supplier-visibility flag copied once from the authoring requirement.', 'PPAP Requirement Version.Supplier Visible? Boolean publication field.'],
   ['Add the published protection flag so later authoring changes cannot alter issued mandates.', 'PPAP Requirement Version.Protected? Boolean publication field.'],
   ['Add the immutable copied nonnegative minimum-file requirement.', 'PPAP Requirement Version.Minimum Files Integer publication field.'],
   ['Add the immutable copied extension rule without converting declarative text into executable code.', 'PPAP Requirement Version.Allowed File Extensions text publication field.'],
   ['Add the immutable required-result acceptance flag from the authoring requirement.', 'PPAP Requirement Version.Inspection Acceptance Required? publication field.'],
   ['Add the immutable copied procedure reference for the published requirement.', 'PPAP Requirement Version.Source Procedure Reference publication field.'],
   ['Add native published instruction attachments that are copied independently and cannot be edited by users.', 'PPAP Requirement Version.Instruction Attachments native collection.'],
   ['Add the required source-author relationship and its read-only Versions navigation.', 'PPAP Requirement Version.Authoring Record M:1 and PPAP Requirement.Versions inverse.'],
   ['Add a whole-number publication version allocated from the author family under a lock.', 'PPAP Requirement Version.Version Number field and Authoring Record+Version Number uniqueness.'],
   ['Add publication-managed activation so one complete version replaces its predecessor.', 'PPAP Requirement Version.Active? Boolean controlled by Publish Requirement.'],
   ['Add the UTC publication timestamp, displayed in the user timezone and not editable.', 'PPAP Requirement Version.Published At Date/Time field.'],
   ['Add the required authenticated publishing actor relationship without an inverse.', 'PPAP Requirement Version.Published By M:1 to Employee.'],
   ['Add the required authoring question-to-requirement link and its Questions navigation.', 'PPAP Question.Requirement M:1 and PPAP Requirement.Questions inverse.'],
   ['Add the question key unique within its authoring requirement and limited to 100 characters.', 'PPAP Question.Code text field and scoped uniqueness.'],
   ['Add the required localized question prompt up to 2000 characters.', 'PPAP Question.Prompt text field and authoring control.'],
   ['Add the required active answer-type selector without a catalogue reverse list.', 'PPAP Question.Answer Type M:1 to PPAP Answer Type.'],
   ['Add the independent question-required flag with initial value true.', 'PPAP Question.Required? Boolean authoring field.'],
   ['Add optional localized question instructions up to 8000 characters with null initial value.', 'PPAP Question.Instructions text field and authoring control.'],
   ['Add finite decimal display ordering with initial value zero.', 'PPAP Question.Sort Float field.'],
   ['Add the required link binding each copied question to the complete new requirement version.', 'PPAP Question Version.Requirement Version M:1 and version Questions inverse.'],
   ['Add immutable lineage to the exact authoring question rather than a new publication family.', 'PPAP Question Version.Authoring Question M:1 field.'],
   ['Add copied question Code unique within the receiving Requirement Version.', 'PPAP Question Version.Code stored publication field and scoped uniqueness.'],
   ['Add the immutable copied localized question prompt preserving its 2000-character limit.', 'PPAP Question Version.Prompt publication field.'],
   ['Add the immutable copied answer-type reference and validate active selection at publication.', 'PPAP Question Version.Answer Type M:1 publication field.'],
   ['Add immutable question-requiredness copied once from the authoring question.', 'PPAP Question Version.Required? Boolean publication field.'],
   ['Add immutable optional question instructions copied once without changing old versions.', 'PPAP Question Version.Instructions publication field.'],
   ['Add immutable question order copied as a finite Float from authoring Sort.', 'PPAP Question Version.Sort publication field.'],
   ['Expose requirement versions through the existing declaring author relationship, with no second stored link.', 'PPAP Requirement.Versions inverse 1:M over Requirement Version.Authoring Record.'],
   ['Expose authored questions through their declaring requirement relationship only.', 'PPAP Requirement.Questions inverse 1:M over Question.Requirement.'],
   ['Expose copied questions through their declaring version relationship only.', 'PPAP Requirement Version.Questions inverse 1:M over Question Version.Requirement Version.']
  ],
  steps: [
   ['Separate editable preparation from read-only publication and enforce author/version/question key scopes.', 'Requirement and Question administration screens and scoped Code uniqueness rules.'],
   ['Populate only supplied controlled SIA content, including source references and approved instruction attachments.', 'Requirement/Question authoring entries keyed by supplied Code, not display-name matching.'],
   ['Configure visibility forcing and protected applicability as separate explicit behaviors.', 'Work Pattern-dependent Supplier Visible? control and Protected? mandate setting.'],
   ['Validate nonnegative minimum files and keep optional extension text declarative.', 'Minimum Files Integer validation and Allowed File Extensions authoring control.']
  ]
 },
 'IMP-08': {
  evidence: 'Compared the publication action with all Requirement/Question authoring-to-version mappings. Every published scalar/reference, all question components and instruction files are named; author Active? is intentionally not copied. The supported whole-save, lock, independent-file-copy and retry method remains a local external input rather than an invented platform call.',
  language: 'The task explains a complete unchangeable copy, a failed component preserving the previous version, and repeat-safe execution in direct configuration language. Its predecessor supplies the actual authoring/version fields and its waiting text isolates the native save/copy method.',
  meaning: 'Confirmed maximum version+1 starting at one, source-author locking, exact field maps, question lineage, UTC actor/time, complete validation before active-version switch, scoped uniqueness and no historical rewrite. IMP-07 supplies every relationship/field consumed by these steps.',
  scope: ['Add complete requirement publication rather than exposing partially copied questions or files as current.', 'Proposed Publish Requirement Action Handler over Requirement/Question authoring and version records.'],
  steps: [
   ['Permit only valid active administrator-owned publication and serialize version allocation per author.', 'Publish Requirement authorization/validation and author-identity lock before Version Number allocation.'],
   ['Copy every named requirement property and independent instruction file, excluding authoring activation.', 'Publish Requirement stored value mappings and native Instruction Attachment copies.'],
   ['Create all question-version components with exact author lineage and six named copied properties.', 'Publish Requirement child creation for PPAP Question Version.'],
   ['Activate only a complete validated graph and switch prior versions off together; failed work preserves the former version.', 'Publish Requirement complete-save boundary and publication actor/time stamps.'],
   ['Return the original publication on retry and enforce family/question uniqueness without rewriting history.', 'Native action correlation plus author/version and version/question Code uniqueness.']
  ]
 },
 'IMP-09': {
  evidence: 'Compared all 38 rows against Template, Template Version, Template Requirement and Template Requirement Version. Author stable Requirement references transform into exact version references; eight row properties mirror; version metadata and three inverse lists are complete. Actual SIA matrix/protected rows remain pending and are not inferred from OOTB element count.',
  language: 'Read the task without traceability: it explains the administrator matrix, independent safety/quality/regulated conditions and the exact source values still awaited. Per-field types and links are retained, with separate fields rather than combined shorthand.',
  meaning: 'Confirmed 100/255/1000-character limits, required Type, activation behavior, uniqueness by Template+Requirement, classification OR aggregation, negative calendar offsets, finite sort, version-scoped copied Codes, immutable stored publication values and no catalogue inverses. Publication execution is owned by IMP-10 rather than duplicated here.',
  scope: ['Add editable PPAP template matrices and immutable version structures with source-backed applicability/date content.', 'Template and Template Requirement authoring/version fields and administration forms.'],
  rows: [
   ['Add the stable required template key with a 100-character capacity and first-publication lock.', 'PPAP Template.Code text field and authoring uniqueness.'],
   ['Add the required localized template name up to 255 characters.', 'PPAP Template.Name text field and authoring control.'],
   ['Add the required active PPAP Type relationship without a catalogue inverse.', 'PPAP Template.Type M:1 field to PPAP Type.'],
   ['Add the required controlled procedure reference up to 1000 characters.', 'PPAP Template.Source Procedure Reference text field.'],
   ['Add activation for new template selection/publication without changing old packages.', 'PPAP Template.Active? Boolean field.'],
   ['Add copied template Code that may repeat between versions of its authoring record.', 'PPAP Template Version.Code stored publication field.'],
   ['Add immutable copied localized template Name.', 'PPAP Template Version.Name publication field.'],
   ['Add immutable copied Type, validating active catalogue selection only when publishing.', 'PPAP Template Version.Type M:1 publication field.'],
   ['Add immutable copied source-procedure provenance.', 'PPAP Template Version.Source Procedure Reference publication field.'],
   ['Add source-author lineage and the read-only Versions navigation.', 'PPAP Template Version.Authoring Record M:1 to PPAP Template.'],
   ['Add publication version numbers scoped to the author, beginning at one.', 'PPAP Template Version.Version Number field and author/version uniqueness.'],
   ['Add publication-managed active-version selection instead of copying author activation.', 'PPAP Template Version.Active? Boolean controlled by Publish Template.'],
   ['Add the immutable UTC publication timestamp displayed in user timezone.', 'PPAP Template Version.Published At Date/Time field.'],
   ['Add the authenticated publishing actor relationship without an inverse.', 'PPAP Template Version.Published By M:1 to Employee.'],
   ['Add each authoring matrix row to exactly one template and enable its Requirements navigation.', 'PPAP Template Requirement.Template M:1 field.'],
   ['Select a stable active requirement author having a published version, unique within its template.', 'PPAP Template Requirement.Requirement M:1 field and Template+Requirement uniqueness.'],
   ['Add a distinct always-applicable switch initially true.', 'PPAP Template Requirement.Always Applicable? Boolean authoring field.'],
   ['Add the safety applicability trigger as a separate switch initially false.', 'PPAP Template Requirement.On Important Safety? Boolean field.'],
   ['Add the quality applicability trigger as a separate switch initially false.', 'PPAP Template Requirement.On Important Quality? Boolean field.'],
   ['Add the regulated applicability trigger as a separate switch initially false.', 'PPAP Template Requirement.On Regulated? Boolean field.'],
   ['Add row-specific protection independently from requirement-level protection.', 'PPAP Template Requirement.Protected? Boolean authoring field.'],
   ['Add an optional active phase selector without a catalogue reverse list.', 'PPAP Template Requirement.Schedule Phase M:1 to PPAP Schedule Phase.'],
   ['Add required integer calendar offsets, initially zero and allowing negative values.', 'PPAP Template Requirement.Offset Days Integer field.'],
   ['Add finite decimal row order with initial zero.', 'PPAP Template Requirement.Sort Float field.'],
   ['Bind each copied matrix row to its immutable receiving template version.', 'PPAP Template Requirement Version.Template Version M:1 and version Requirements inverse.'],
   ['Retain lineage to the exact authoring matrix row.', 'PPAP Template Requirement Version.Authoring Requirement Row M:1.'],
   ['Store the exact active requirement version resolved from the stable authoring reference.', 'PPAP Template Requirement Version.Requirement Version M:1.'],
   ['Add immutable copied always-applicable behavior.', 'PPAP Template Requirement Version.Always Applicable? publication field.'],
   ['Add immutable copied safety applicability behavior.', 'PPAP Template Requirement Version.On Important Safety? publication field.'],
   ['Add immutable copied quality applicability behavior.', 'PPAP Template Requirement Version.On Important Quality? publication field.'],
   ['Add immutable copied regulated applicability behavior.', 'PPAP Template Requirement Version.On Regulated? publication field.'],
   ['Add immutable copied row-protection behavior.', 'PPAP Template Requirement Version.Protected? publication field.'],
   ['Add immutable copied optional phase reference and preserve historical inactive values.', 'PPAP Template Requirement Version.Schedule Phase M:1 publication field.'],
   ['Add immutable copied integer calendar offset without a later live lookup.', 'PPAP Template Requirement Version.Offset Days publication field.'],
   ['Add immutable copied finite decimal row order.', 'PPAP Template Requirement Version.Sort publication field.'],
   ['Show template versions through their author link without duplicate storage.', 'PPAP Template.Versions inverse 1:M over Template Version.Authoring Record.'],
   ['Show authored matrix rows through their template link only.', 'PPAP Template.Requirements inverse 1:M over Template Requirement.Template.'],
   ['Show published matrix rows through their version link only.', 'PPAP Template Version.Requirements inverse 1:M over Template Requirement Version.Template Version.']
  ],
  steps: [
   ['Prevent duplicate authoring matrix requirements and keep stable author identity separate from its resolved publication.', 'Template+Requirement uniqueness and authoring Requirement relationship.'],
   ['Expose independent applicability switches and combine enabled classifications with the stated OR rule.', 'Template Requirement applicability controls and matrix evaluation.'],
   ['Populate only supplied controlled templates and protect source-mandated requirements while keeping version Code scope correct.', 'SIA-backed template/matrix entries, protection flags and Code uniqueness rules.']
  ]
 },
 'IMP-10': {
  evidence: 'Checked the template publication instructions against every authoring/version matrix field and the requirement publication output. All eight row values, exact Requirement Version, author-row lineage and four template scalar/reference values are explicit. The local native complete-save/lock input is a genuine execution blocker.',
  language: 'The task explains preserving the exact rules used by each PPAP, finding the current published requirement during publication, and retaining the old template after a failed copy. It does not ask the builder to recover missing settings from another document.',
  meaning: 'Confirmed active author authorization, unique row identities, next version allocation, complete question/file dependency, exact resolved requirement versions, one successful active switch, preserved existing PPAP configuration and no recursive requirement publication. IMP-08 and IMP-09 supply the actual prior operations and fields.',
  scope: ['Add whole-template publication that freezes its matrix and exact requirement versions.', 'Proposed Publish Template Action Handler.'],
  steps: [
   ['Restrict publication to valid active templates with one row per stable requirement and allocate a family-scoped version under lock.', 'Publish Template validation and template-identity lock.'],
   ['Copy template identity/content and create each version row with exact authoring lineage.', 'Template Version and Template Requirement Version creation mappings.'],
   ['Resolve exact active requirement versions and copy all eight named applicability/protection/date/order values.', 'Publish Template requirement-version resolution and matrix stored copies.'],
   ['Switch active versions only after complete validation and return prior success on retry without changing existing PPAPs.', 'Publish Template complete-save activation and native action correlation.']
  ]
 },
 'IMP-11': {
  evidence: 'Compared the 21 rows with all Model Change, Model Date and Build Event fields plus the three PPAP scheduling links. Separate event start/end dates, model/phase/stage uniqueness, active-value filters and three inverse lists are complete. Controlled phase/stage entries remain supplied SIA input; field structures can proceed.',
  language: 'The assignment begins with the model lead business result and explains physical builds separately from the milestone matrix. Every field/control retains its exact type and conditions, and waiting text specifies which phase/stage choices are missing.',
  meaning: 'Confirmed inclusive start/end dates and equality for same-day events, one governing NEW_MODEL context, required stage when model exists, forced false connection with no model, warned Draft clearing and issued context locks. Cascade calculations remain owned by IMP-16; no physical build-date movement silently recalculates PPAP dates.',
  scope: ['Add shared model milestone and physical-event forms with one governing PPAP context.', 'Model Change/Model Date/Build Event setup and PPAP model/stage/connection controls.'],
  rows: [
   ['Add the unique 100-character model/program key, locked after first related issue.', 'PPAP Model Change.Code field.'],
   ['Add the required model display name up to 255 characters with audit.', 'PPAP Model Change.Name field.'],
   ['Add the designated model lead without assigning that person ownership of linked PPAPs.', 'PPAP Model Change.Model Lead M:1 to Employee.'],
   ['Add model activation that blocks new connections but preserves existing work.', 'PPAP Model Change.Active? Boolean field.'],
   ['Add a milestone row to one model and enforce one model/phase/stage cell.', 'PPAP Model Date.Model Change M:1 and scoped matrix uniqueness.'],
   ['Add an active phase selector whose used identity cannot be retargeted.', 'PPAP Model Date.Phase M:1 catalogue field.'],
   ['Add an active manufacturing-stage selector with used-key protection.', 'PPAP Model Date.Manufacturing Stage M:1 catalogue field.'],
   ['Add the auditable required calendar milestone that later date logic watches.', 'PPAP Model Date.Planned Date field and named Model-date Update trigger.'],
   ['Add a mandatory change explanation when the milestone date changes, retaining prior reasons in audit.', 'PPAP Model Date.Change Reason text field and conditional requiredness.'],
   ['Bind each physical build event to one model independently of the milestone matrix.', 'PPAP Build Event.Model Change M:1.'],
   ['Add the 100-character event Code unique within its model and stable after use.', 'PPAP Build Event.Code field and scoped uniqueness.'],
   ['Add the required event display name up to 255 characters.', 'PPAP Build Event.Name field.'],
   ['Add active manufacturing-stage context for the physical event without using it as a milestone cell.', 'PPAP Build Event.Manufacturing Stage M:1 catalogue field.'],
   ['Add inclusive required event start and prevent it exceeding the event end.', 'PPAP Build Event.Start Date field and date-range validation.'],
   ['Add inclusive required event end, permitting a same-day event and preventing reversal.', 'PPAP Build Event.End Date field and Start Date<=End Date validation.'],
   ['Add one governing model link, required for NEW_MODEL and locked after issue.', 'PPAP.Model Change M:1 field and Type-dependent form behavior.'],
   ['Add a required stage when a model is selected, otherwise clear and hide it.', 'PPAP.Manufacturing Stage M:1 and Model Change conditional control.'],
   ['Add connection state defaulted from model selection and controlled by warned schedule actions.', 'PPAP.Schedule Connected? Boolean and Disconnect/Reconnect controls.'],
   ['Expose linked PPAPs through their declared Model Change field without duplicate storage.', 'PPAP Model Change.PPAPs inverse list.'],
   ['Expose date cells through their declared Model Change field only.', 'PPAP Model Change.Dates inverse list.'],
   ['Expose physical events through their declared Model Change field only.', 'PPAP Model Change.Build Events inverse list.']
  ],
  steps: [
   ['Enforce one matrix date per model/phase/stage and require an audited reason for date changes.', 'Model Date uniqueness and ordinary Model Lead date-maintenance controls.'],
   ['Keep physical event dates inclusive and validate their order independently of PPAP milestones.', 'Build Event Start Date/End Date validation.'],
   ['Require correct model/stage context, force disconnected state without a model and protect issued context.', 'PPAP model selection, conditional stage controls and warned Draft clearing.']
  ]
 },
 'IMP-16': {
  evidence: 'Matched all six scheduling steps to the accepted model-date, manual-date, Move Schedule Phase and disconnect/reconnect rules. Predecessors provide owning PPAP fields, element fields, model cells and current authority; local inputs cover calendar expressions, business timezone, audit history and safe batch execution.',
  language: 'The task describes the shared-date business effect before naming handlers, explains unchanged issued commitments, and gives explicit warnings and missing-cell behavior. It does not use a formal-testing or discovery assignment to obtain supported methods.',
  meaning: 'Confirmed Planned Date+Offset Days in calendar days, manual-first precedence, matching open connected Draft/In Progress population, no completed/closed updates, disconnected exclusion from phase move, safe reconnection and issue-time refresh before baseline freeze. First-submission facts and existing issued dates cannot be rewritten.',
  scope: ['Add controlled recalculation and explicit date/phase/connection changes while keeping historical commitments intact.', 'Model-date and Element-date Action Handlers plus four named schedule actions.'],
  steps: [
   ['Recalculate exact matching open connected elements from their model/phase/stage milestone and offset.', 'Model-date Update Action Handler watching Planned Date and Change Reason.'],
   ['Apply manual-date precedence without recursion or alteration of issued/submission deadline evidence.', 'Element-date Update Action Handler and write-only-if-changed calculation.'],
   ['Allow the responsible engineer to change one or selected open dates with reason and overdue warning.', 'Change Due Dates action and native overall/element date reason history.'],
   ['Move connected open elements within one model to a valid active phase, clearing only warned incompatible manual dates.', 'Move Schedule Phase action with model/stage cell validation.'],
   ['Disconnect by preserving current dates and reconnect only after valid recalculation can safely replace overrides.', 'Disconnect Schedule and Reconnect Schedule protected actions.'],
   ['Refresh before Issue freezes its first baseline and retain complete native date-change evidence.', 'Issue-callable date refresh/validation operation and native audited history.']
  ]
 },
 'IMP-19': {
  evidence: 'Compared initialization and Draft adjustment against exact published template/requirement/question structures and the final requirement-lock decisions. The revised action explicitly restricts all four setup operations to the current responsible internal engineer. Source-inapplicable unprotected rows receive the literal generated explanation, while inconsistent excluded mandatory content is rejected. SIA mandates and native whole-save/reset behavior remain supplied inputs.',
  language: 'The task explains preparing one controlled requirement set, disallows arbitrary requirement types and identifies the specific content still waiting. Its predecessor descriptions name the saved configuration, date and authority outputs consumed by setup.',
  meaning: 'Confirmed one element per PPAP/stable requirement, one working answer per exact question, OR applicability, combined protection, governed additions with no template row, Draft-only exclusion/reset and no partial usable preparation after failure. Issued scope and evidence are outside reset authority.',
  scope: ['Add controlled pre-issue initialization, governed additions and exclusions without post-issue waiver paths.', 'Initialize Elements, Add Governed Element, Reset Draft Elements and Exclude/Require Element actions.'],
  steps: [
   ['Initialize only authorized Draft preparation from one exact active type-matched template version.', 'Initialize Elements protected action with current responsible-engineer authorization.'],
   ['Generate one stable requirement element with explicit OR applicability and combined source protection.', 'Initialize Elements matrix evaluation and exact version field copies.'],
   ['Create exact-version answers, eligible assignments and dates; explain source-inapplicable unprotected rows without creating a waiver.', 'Initialize Elements generation, literal Not applicable under template classification rules. explanation and no-work rule for excluded rows.'],
   ['Add only an existing published requirement with a reason, true requiredness and its own protection flag.', 'Add Governed Element Draft action, uniqueness and explicit date-rule controls.'],
   ['Permit reasoned unprotected Draft exclusions only and clear the reason when requiredness is restored.', 'Exclude/Require Element action with protection and supplier-denial checks.'],
   ['Reset only unissued preparation under warning and preserve either the former usable set or no partial usable result.', 'Reset Draft Elements action and Issue-callable prepared-set validation.']
  ]
 },
 'IMP-21': {
  evidence: 'Compared submission with exact working/snapshot answer fields, result/version evidence and first-complete supplier metrics. All field/file validation precedes copying and stage change; safe native copying, actor binding, file constraints, timezone and the newly local supported calendar-date method remain explicit supplied inputs, including IN-14 for the five-day review calculation.',
  language: 'The assignment explains freezing exact submitted evidence and measuring the first complete submission in familiar action language. It explicitly distinguishes incomplete attempts, supplier versus internal work, the two deadlines and later rejection/resubmission.',
  meaning: 'Confirmed Work In Progress and issued In Progress gates, current assignee/capability checks, supplier scope confirmation, valid zero/FALSE values, locked per-element sequence, independent files/answers/results, UTC actor/time, configurable five-day review target and write-once first-event/both-deadline stamps. Failed copies cannot advance or record timeliness.',
  scope: ['Add complete submission that freezes exact evidence and first supplier timing facts before engineer review.', 'Submit Element action over working content and PPAP Evidence Snapshot.'],
  steps: [
   ['Permit current eligible assignees to submit only issued In Progress work and enforce supplier-only scope confirmation.', 'Submit Element action authorization and native stage preconditions.'],
   ['Reject missing required answers/files or invalid result evidence before creating a first performance event.', 'Submit Element required-answer/file/result validation before snapshot mutation.'],
   ['Allocate a unique sequence and copy all working content into an independent complete snapshot.', 'Submit Element element lock, Evidence Snapshot/Answer creation and native file copy.'],
   ['Stamp actual submission actor/time, current review due date and the two first-supplier deadline facts exactly once.', 'Submit Element stored timestamp/deadline mappings and policy-based review date.'],
   ['Advance only after complete save and return the same successful snapshot on retry.', 'Submit Element complete-save boundary, native action correlation and engineer-review event.']
  ]
 },
 'IMP-22': {
  evidence: 'Compared independent element decisions with native workflow transitions, immutable rejected/approved snapshots and the final non-engineering correction rule. Required result acceptance remains supplied by its named predecessor; native reopen/history and hidden cancellation methods remain local external inputs.',
  language: 'The task says accept or return one element, explains what remains visible to the assignee and preserves the prior approved content during correction. It keeps engineering change initiation distinct and avoids requiring another reviewer for engineer-completed internal work.',
  meaning: 'Confirmed explicit engineer approval/self-review, mandatory safe return feedback, immutable rejected history, no whole-package rejection, open same-context correction only, retained latest approved eligibility, new replacement approval and hidden cancellation limited to active work/review with terminal history preserved.',
  scope: ['Add independent element approval, return, permitted correction and cancellation effects without disturbing unrelated approvals.', 'Approve Element, Return Element, Reopen for Correction and hidden Cancel Element Work actions.'],
  steps: [
   ['Approve a current submitted element after required result acceptance and retain the actual internal engineer decision.', 'Approve Element Engineer Review transition and write-once snapshot approval metadata.'],
   ['Return only the current element with required safe feedback and retain the rejected submission internally.', 'Return Element workflow action, rejection stamp and correction event.'],
   ['Reopen approved work only for a reasoned non-engineering correction on an open In Progress PPAP.', 'Reopen for Correction action and verified native reopen/review-instance mechanism.'],
   ['Preserve the old approved baseline while fresh correction content is prepared and reviewed.', 'Latest Approved Snapshot retention and fresh working answer/file/result preparation.'],
   ['Expose cancellation only to its owning PPAP cascade and leave completed/previously cancelled work intact.', 'Hidden Cancel Element Work action and direct-invocation denial.']
  ]
 },
 'IMP-23': {
  evidence: 'Compared retained-evidence behavior with facility/drawing/stable requirement eligibility, cancelled-source exclusion, reasoned older-version choice, immutable receiving copies and retained original Question Versions. The revised action expressly checks current responsible engineer, receiving Work In Progress and issued PPAP In Progress, then allocates the receiving sequence under lock, copies the source comment and updates both current/latest pointers. Copy/protection/concurrency methods remain supplied inputs.',
  language: 'The assignment explains why compatibility confirmation and an independent copy are required, clearly separates older-version selection from the default suggestion, and says retention is not a supplier submission. Source security and the exact copied content remain understandable.',
  meaning: 'Confirmed approved-only candidates, same facility/drawing/requirement, current non-cancelled owner, latest approval ordering with stable tie-breaker, engineer confirmation for different revisions/parts, required receiving-answer reconciliation, source lineage, actual internal actor, complete-copy-before-approval and no retrospective transitive invalidation.',
  scope: ['Add engineer-controlled reuse that preserves complete independent receiving evidence and source lineage.', 'Candidate selection and Retain Evidence action for compatible approved snapshots.'],
  steps: [
   ['Allow only current responsible engineers on receiving Work In Progress and issued In Progress packages; filter approved non-cancelled sources.', 'Retain Evidence receiving-stage authorization and automatic/manual candidate query.'],
   ['Suggest the latest eligible version and require engineer compatibility confirmation plus an older-selection reason.', 'Retain Evidence candidate ordering and Compatibility Confirmation/Nonlatest Selection Reason controls.'],
   ['Recheck at commit and copy complete evidence, original question versions and accepted result links into the receiving package.', 'Retain Evidence protected copy action and receiving-answer reconciliation.'],
   ['Allocate a unique receiving sequence, copy the source comment and stamp current/latest retained approval without supplier timing facts.', 'Retain Evidence element lock, sequence uniqueness, snapshot/element metadata mappings and Approved termination.'],
   ['Return previous success on retry and preserve existing receiving copies if a source is later cancelled.', 'Retain Evidence native action correlation and prospective candidate-eligibility policy.']
  ]
 }
};

const reviews=[];
for(const [id,a] of Object.entries(authored)){
 const t=plan.tasks.find(t=>t.id===id);
 if(!t)throw new Error('Missing task '+id);
 const instructions=[{path:'scope',requiredChange:a.scope[0],mechanism:a.scope[1]}];
 (a.rows||[]).forEach((n,i)=>instructions.push({path:'configurationRows.'+i,requiredChange:n[0],mechanism:n[1]}));
 a.steps.forEach((n,i)=>instructions.push({path:'steps.'+i,requiredChange:n[0],mechanism:n[1]}));
 const actual=gate.units(t).map(u=>u.path).sort(),noted=instructions.map(n=>n.path).sort();
 if(JSON.stringify(actual)!==JSON.stringify(noted))throw new Error('Review paths differ for '+id);
 reviews.push({id,taskHash:gate.hash(t),renderedTaskHash:gate.renderedHash(markdown,id),evidenceReview:a.evidence,
  checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
  languageReview:a.language,meaningReview:a.meaning,instructions});
}
const out=path.join(__dirname,'model-review.json');
fs.writeFileSync(out,JSON.stringify({version:1,tasks:reviews},null,2)+'\n');
console.log(JSON.stringify({out,tasks:reviews.length,units:reviews.reduce((n,r)=>n+r.instructions.length,0)},null,2));
