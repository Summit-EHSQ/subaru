# PPAP target workflows and automation

**Proposed configuration · 17 November 2026 · No tenant execution claimed.**

[Technical specification](ppap-target-technical-specification.md) · [Field contract](ppap-target-field-contract.md) · [Acceptance scenarios](ppap-acceptance-scenarios.md)

## 1. Engine ownership and universal action order

Native workflow owns instance identity, current stage, assignment and termination history. Do not add a custom workflow-status field. Stages and termination states are distinct. Tables below list the proposed configured workflow/business actions; ordinary Save, background recalculation and native persistence are not workflow buttons.

Every action executes in this order: acquire native concurrency/record protection; recheck authenticated actor, exact role/entity membership, supplier capability and confidentiality; validate its current stage and all named prerequisites; persist action metadata/evidence and related-record changes; transition/terminate; dispatch authorized notifications after durable success. Failure before durable success leaves no partially advanced workflow. Native execution history owns errors and retry correlation. Notifications retry without replaying business creation.

Services and shared handler branches operating on PPAP or its children require the stable typed PPAP relationship and `Target Configuration?=TRUE`. Pre-PPAP intake/drawing review and configuration Publish use their own governed target authorization; they do not depend on a PPAP that does not yet exist. Resolve the PPAP guard through a tenant-verified typed binding; no unverified type-inspection expression is specified. Historical PPAP/APQP branches retain their baseline behavior.

## 2. PPAP workflow

### 2.1 Stages and termination states

| Stage | Responsible person / eligible actor | Due basis | Supplier presentation |
|---|---|---|---|
| Draft | Existing Project Owner, selected from exact current internal engineer role; administrators maintain setup | PPAP Due Date | No access, including files and direct references |
| In Progress | Project Owner coordinates; independent element workflows hold their assignees | PPAP Due Date; each element has its own effective date | Issued scope and authorized supplier-visible work, files and discussion |
| Management Review | Selected Final Management Approver, current eligible pool membership required | Management Review Due Date | Pending/in progress; no internal comment exposure; evidence and masses locked |

| Termination state | Meaning |
|---|---|
| Approved — completed | All required evidence and warrant values accepted, required management action complete, immutable package and certificate |
| Cancelled — cancelled | Explicit reasoned cancellation, outstanding work stopped, history preserved; not successful originating-work fulfilment |

There is no Interim Approval stage/termination/action, conditional certificate, automatic rejection of the full PPAP, post-approval cancellation, withdrawal or reopen action.

### 2.2 Ordered actions

| Action | From → result | Actor and ordered validation / effects |
|---|---|---|
| Issue PPAP | Draft → In Progress | Responsible engineer. Validate all Issue gates in main §7.3, including source-part scope, explicit criticality, published graph, protected requirements, due dates and eligible assignments. Refresh current connected model-derived dates before baseline freeze; warn on past dates. Snapshot Issued Overall Due Date and each required Issued Baseline Due Date; stamp Issued At/By; lock scope/configuration; start exactly one native workflow for each required element; send authorized assignment/issue notifications. Supplier confirmation remains NULL. Repeated action returns original successful issue, never duplicates work |
| Confirm Scope | In Progress → In Progress | Authorized supplier in exact role/entity scope. Show frozen facility, drawing and complete part set; require explicit confirmation. Stamp Scope Confirmed At/By once. No mass validation yet. Do not block internal work. Repeat returns original confirmation |
| Complete PPAP | In Progress → Approved or Management Review | Responsible engineer. Validate required elements Approved, no open correction, no Replacement Required?, all part masses valid, current eligibility and required source gates. Non-safety: execute approval/output transaction. Safety: require eligible selected management approver; stamp Management Submitted At and due date = local submission date + policy Management Review Days; lock masses/evidence; enter Management Review and notify. Do not skip management because engineer is also eligible |
| Approve PPAP | Management Review → Approved | Selected approver with current pool membership; engineer may act if eligible. Recheck unchanged prerequisites and scope/source hold. Stamp actual Approved At/By, native completion and PPAP Completion Date; generate/freeze PDF/reference; publish originating outcome; lock operational content and all discussion. No reauthentication/e-sign step beyond authenticated action |
| Return for More Information | Management Review → In Progress | Selected eligible management approver. Require nonblank Management Return Comment, internal-only. Preserve element approvals and all prior submissions. Record return in native history, notify engineer internally, permit targeted correction requests. Supplier sees pending/in progress and receives only separately authored safe feedback |
| Cancel PPAP | Draft / In Progress / Management Review → Cancelled | Responsible engineer or current PPAP administrator. Require Cancellation Reason; audit intent/actor. Run cancellation cascade in §7, including current native element work and reminders. Write Cancelled At/By and terminate only after cascade success; notify authorized supplier/owners; emit cancelled PCR/APQP outcome. Deny if already Approved. Repeated successful cancellation is idempotent |

### 2.3 Other business actions on an open PPAP

These are named object actions, not additional workflow transitions. Bind them to allowed stages and native auditing.

| Action | Allowed context and exact behavior |
|---|---|
| Initialize Elements | Draft with selected active Template and no existing generated work. Resolve active Template Version under lock, bind exact version, create element rows and working answers idempotently. One row per stable Requirement. Excluded rows are retained but do not start native work. On failure roll back or leave no usable partial initialization |
| Add Governed Element | Draft only. Select active published Requirement Version, prohibit duplicate stable requirement, require Setup Addition Reason and required date/assignment data. Template Requirement Version remains NULL; other snapshots come from selected version. No free-text new requirement type |
| Reset Draft Elements | Draft only, explicit warning/reason. Deliberately remove/reset unissued generated preparation and clear Template Version before selecting another template. Native audit retains action; never operate after Issue or on historical issued evidence |
| Exclude / Require Element | Draft only. Reject exclusion if Protected?=TRUE; otherwise require reason when excluded and clear exclusion reason if returned required before issue. Never create a post-issue waiver action. Supplier N/A request is discussion, not this action |
| Change Due Dates | Engineer while open; one or selected elements. Validate only open work, require reason, write Manual Due Date and recompute Effective Due Date; do not overwrite issued baseline. Reject completed/closed work. For overall due date write existing PPAP Due Date with audit reason in native action evidence |
| Move Schedule Phase | Engineer; selected open schedule-connected elements for one Model Change. Require reason and active destination phase with appropriate model/stage matrix cell; warn and clear incompatible manual dates, copy new phase reference and recompute current calculated/effective dates. Exclude disconnected work until explicit Reconnect. Preserve issued due baseline and exact source template/version lineage. Never add/exclude a requirement or edit completed/closed work |
| Disconnect Schedule | Open PPAP with model context. Warn/reason, set Schedule Connected?=FALSE and copy current effective open-element dates into their manual dates; completed history unchanged |
| Reconnect Schedule | Open disconnected PPAP with unchanged model/stage. Warn that disconnected manual dates will be replaced; require reason, clear those manual overrides for selected open work, set connected TRUE and recompute exact model-phase-stage rules. Missing matrix values block required-work issue/finalization, not silent NULL. Completed history unchanged |
| Reassign Work | Engineer or designated inspection-team leader in authorized scope. Select eligible role/team member, audit former/new assignee and reason, notify affected eligible users; preserve original action actors and deadlines |
| Request Mass Correction | Engineer while In Progress after management return. Give supplier-safe instructions, permit both mass values to be corrected together within frozen part scope; native audit retains prior submitted values. No internal management comment is automatically forwarded |
| Launch Pilot Program | Explicit engineer action for Type.Code=NEW_MODEL only. Select Build Event of same Model Change; use external adapter/idempotency token, store PPAP Pilot Program Link. Do not block unrelated PPAP work; no running/process pilot launch |
| Export Approval Certificate | Approved only and authorized reader. Return immutable issued PDF bytes; missing artifact invokes controlled rendering retry against frozen approval facts, never recomputes using latest master values |

## 3. PPAP Element workflow

### 3.1 Patterns, stages and terminals

| Pattern Code | Work In Progress accountability | Review |
|---|---|---|
| SUPPLIER | Current eligible exact-entity PPAP coordinator role members or eligible assigned individual; scope confirmation gates Submit | Responsible PPAP engineer |
| INTERNAL | Eligible internal engineer/role; internal-only content | Responsible PPAP engineer, including self-review if same person |
| INSPECTION | Eligible assigned inspection team, optionally reassigned to individual | Responsible PPAP engineer |
| JOINT | Proposed one internal inspection coordinator/team collecting joint evidence; supplier collaboration follows authorized thread/file access | Responsible PPAP engineer; SIA matrix must reconcile any additional acknowledgments |

Ordinary stages are **Work In Progress** and **Engineer Review**. Termination states are **Approved** (completed) and **Cancelled** (cancelled). Native Approved workflow termination must support controlled reopen on the same business element with preserved action history, or a native new review instance linked to that same element. Prove the exact tenant mechanism before build; do not mutate approved evidence or add a custom state as a shortcut. Required?=FALSE rows have no active operational instance.

### 3.2 Ordered element actions

| Action | From → result | Validation, persistence and effects |
|---|---|---|
| Submit Element | Work In Progress → Engineer Review | Current eligible assignee; PPAP issued and In Progress. Supplier submissions additionally require scope confirmation. Validate exact question versions and required matching typed values, file count/extensions/native constraints, and applicable result/version references. Lock, allocate unique sequence, copy files/answers/result evidence, stamp Submitted At/By, set Current Submission, set review due date +5 configurable calendar days. Freeze content before transition. First complete supplier submission stamps immutable first-event time and both due-date facts exactly once. Resubmission does not overwrite first event. Notify engineer |
| Approve Element | Engineer Review → Approved | Responsible engineer; PPAP In Progress. Validate all required result acceptances and current frozen submission. Stamp write-once Approved At/By on current snapshot, set Latest Approved Snapshot, terminate element Approved. Retain actor even self-approved internal work. No new supplier timeliness event |
| Return Element | Engineer Review → Work In Progress | Responsible engineer. Require assignee-visible Review Feedback, stamp current snapshot Rejected At and feedback, preserve snapshot internally and native rejection action/history, notify assignee with safe feedback. New working files replace active supplier requirement; do not delete rejected history. Other approved elements unaffected |
| Retain Evidence | Work In Progress → Approved | Responsible engineer. Validate source eligibility, same facility/drawing/stable requirement, current source not cancelled, revision/part compatibility and nonlatest reason when needed. Copy complete approved content plus lineage, reconcile receiving required answers/questions, accept relevant result evidence, stamp retention/approval; only then terminate. Recheck source eligibility immediately before commit. No supplier-submission fact |
| Reopen for Correction | Approved → Work In Progress through verified native reopen mechanism | Responsible engineer; PPAP In Progress and open. Require Correction Reason; enforce unchanged facility/drawing/revision/parts/classifications/requirement set. Deny engineering-change use. Retain Latest Approved Snapshot and its eligibility. Prepare fresh current answers/files/result links; replacement becomes eligible only after own approval. Notify appropriate assignee |
| Cancel Element Work | Open work/review → Cancelled | Hidden cascade action invoked only by authorized Cancel PPAP service context; direct user invocation denied. Validate owning target PPAP cancellation intent. Preserve data and decisions; stop native reminders. Already Approved/Cancelled element is unchanged. Native execution correlation prevents duplicates |

An approved snapshot is not later relabeled Rejected when correction is requested. A new submitted snapshot receives its own decision. Rejection history uses native immutable actions plus retained snapshot feedback, with no new custom rejection-log object.

## 4. Initial Drawing Review workflow

Ordinary stage: **Engineering Review**, assigned to the resolved exact-entity internal engineer. Terminal: **Review Complete**, with native decision history. No default Exception stage is added for intake failures; those remain owned native integration work.

| Action | Transition | Preconditions and effects |
|---|---|---|
| Launch PPAP | Engineering Review → Engineering Review | Engineer; PPAP Required?=TRUE; authorized source/facility mapping. Create an internal Draft with exact release/review provenance and selected proposed context; no duplicate for same launch token. Does not issue or approve PPAP |
| Link Same-Change PPAP | Engineering Review → Engineering Review | Engineer; existing target PPAP has same canonical engineering change and intended scope. Set Already Created PPAP after validation. Never link an unrelated/new revision into older work |
| Complete Drawing Review | Engineering Review → Review Complete | Engineer. For PPAP Required?=FALSE require governed Exception Reason and rationale. For TRUE require created/linked same-change PPAP draft(s). Require explicit specification disposition; when specification review required, require correct released inspection specification version. Record native action/decision. No automatic pilot creation or all-inspection-complete gate |

## 5. Publication and generation contracts

| Mechanism | Trigger and watched inputs | Ordered behavior / uniqueness / failure |
|---|---|---|
| Publish Requirement Action Handler | Explicit administrator action; authoring Code, Name, Instructions, Category, Work Pattern, Routing Role, Supplier Visible?, Protected?, Minimum Files, Allowed File Extensions, Inspection Acceptance Required?, Source Procedure Reference, instruction files and all Question rows | Recheck active governed references and content/protection rules. Lock authoring identity; allocate next Version Number; create version with exact per-field stored defaults; create all Question Versions and independent instruction files; validate complete graph; switch Active? atomically. Unique author+version, question code per version. Error leaves no active partial graph. Existing operations unchanged |
| Publish Template Action Handler | Explicit administrator action; authoring Code, Name, Type, Source Procedure Reference, complete Template Requirement row membership and row fields | Resolve active Requirement Version per stable Requirement; validate one row per identity, mandate and applicability/source rules; create exact Template Version plus every immutable matrix row; activate complete graph atomically. Code is not globally unique across versions. Retry correlation returns previous successful version |
| Initialize Elements Action Handler | Explicit Draft object action, selected Template + exact resolved Template Version + selected part classifications/model context | Evaluate applicability OR rules; copy required/protected/routing/phase/offset fields; create one element per PPAP+stable Requirement and one working answer per element+Question Version; do not start required operational work until Issue. Source changes require deliberate Draft reset, not duplicate append |
| Accept Engineering Release Action Handler | Separate operational intake after transport/mapping validation; source system/key/fingerprint, released drawing context, mapped part graph and routing inputs | Lock canonical source identity; same replay returns existing graph/review. Conflicting content is owned correction/reconciliation, not overwrite. Persist immutable accepted graph then initial review with date/owner policy; native diagnostics/retry if mapping/role absent. Unresolved classifications may reach review/Draft but block PPAP Issue |
| Source Correction handler | Accepted new corrected source context; compare same canonical drawing revision/part scope and prior flags | Update unissued Draft source context under normal audit; for issued open packages whose original applicable flags changed set Replacement Required?/Reason, block finalization and notify engineer to Cancel/replace. Closed records unchanged. Different new revision creates separate new source review/PPAP and never silently updates/cancels older context |
| PCR/APQP launch adapter | Explicit authorized originating action/token | Validate current source/supplier/scope, create Draft once per token and originating obligation, preserve references. No shipment authorization, singular RelatedPPAP overwrite or automatic originating completion |

Publication stores every mapped scalar/reference and instruction file, not an opaque serialized configuration blob. Question Version has no independent active publication lifecycle; its containing Requirement Version owns it. Template publication does not republish requirements or refresh existing PPAPs. Native transaction/locking/file-copy guarantees must be proven on the target tenant.

## 6. Date, assignment and notification automation

| Mechanism | Trigger / eligible population | Rules and evidence |
|---|---|---|
| Model-date Update Action Handler | Watches PPAP Model Date.Planned Date and explicit change reason only | Identify matching Model Change+Phase+Manufacturing Stage; process only prepared Draft or open In Progress elements on target PPAPs with Schedule Connected?=TRUE; update Calculated Due Date, then Effective Due Date where no Manual Due Date. Issue refreshes/revalidates current values before freezing baseline. Audit old/new/reason/actor; never update Issued Baseline Due Date or completed/closed work. Native durable queue/batch retry reuses same source-change correlation |
| Element-date Update Action Handler | Watches Manual Due Date, relevant schedule source/model action, and authorised bulk-date action | Compute explicit override precedence. Require reason for manual changes; past allowed warning. Write only changed values; metadata-only update must not retrigger. In Draft missing dates block Issue. Do not add a dedicated extension-request workflow |
| Review-target Action Handler | Successful element Submit/resubmit or PPAP Complete entry/resubmission to Management Review | Use configured business-zone local submission date + current policy review days. Set only cycle's current due field; native history preserves former cycles. Supplier commitment fields unaffected |
| Assignment Action Handler | Watches Assigned Person, Assigned Role, Assigned Team or authorized Project Owner/final-approver action | Validate current exact scope/team/pool; audit actual actor and former/new assignment; notify after durable change. No automated reassignment on overdue/status change |
| Native reminder engine | Proposed daily scan at 08:00 in Operating Policy.Business Time Zone; verify native supported configuration | Select active target workflow instances only. Lead reminder at due−3, due-day reminder at due, weekly reminders due+7,+14… while open; configurable defaults. Escalate once after 7 overdue days. New already-overdue work receives one current overdue notice/escalation on first eligible scan, never a historical backlog. Closed/cancelled/excluded work suppressed |
| Native notification dispatcher | Durable issue/assignment/submit/return/approval/cancel/Post events or reminder scan | Recheck recipients can access content at delivery. Deduplicate by native instance + relevant review/assignment/event correlation + notification kind + due-date episode/date. If overdue reminder and escalation coincide combine recipient/content delivery where supported. Retry transport only; preserve native delivery/execution evidence; PPAP administrator owns failures |

Reminder defaults: supplier work → current supplier assignee(s), escalation to PPAP engineer; internal work/engineer review/management approval → current assignee(s), escalation to PPAP administrators. Assignment/reminder recipients do not become ACL grants. Template contents are English and supplier-safe. Internal management return and internal discussion bodies are excluded from supplier messages. The proposed daily clock time is an implementation default to verify, not a confirmed business requirement.

## 7. Cancellation cascade and originating outcomes

1. Validate open target PPAP, current responsible-engineer/admin authority and nonblank reason. Lock against concurrent approval/submit and record native action correlation.
2. For each required element with active Work In Progress/Engineer Review, invoke hidden Cancel Element Work under the verified service context. Preserve answers/files, first-submission facts and current history. Already Approved/Cancelled work is untouched.
3. Suppress parent/element/review reminders and prohibit new actions while cancellation is committing. Retain evidence regardless of its own approval. Exclude the cancelled source from future reuse selection at query and commit time.
4. Durably record/queue the cancelled originating outcome with exact PCR/APQP reference, PPAP identity and scope before terminal commit, using native durable execution facilities. Persist cancelled time/actor, terminate PPAP Cancelled and make all discussion read only.
5. Dispatch authorized cancellation notifications and deliver the queued originating outcome after commit; transport failure retries delivery without replaying cancellation. Flag originating owner for resolution. Never complete the task, mark requirement not-required as success or cancel the whole originating PCR/APQP automatically.

Use a native transaction where supported. If the cascade is too large for one transaction, retain native action-in-progress protection and resume by correlation, treating already-cancelled elements as satisfied steps. Never expose terminal successful cancellation with actionable child work. The exact lock/resume mechanism is a tenant gate, not a proposed custom status/log object.

Approval emits a distinct successful outcome after durable approval and controlled-output creation. A single explicitly bound task obligation can complete. Multiple linked PPAPs require originating obligation/scope resolution; a first-success or latest-PPAP shortcut is prohibited. Callback failure retries under native execution evidence and does not erase approval or send a false success message.

## 8. Discussion and output actions

| Action | Authorization and ordered effects |
|---|---|
| Start Discussion / Post Reply | Authorized participant, owning PPAP open and thread visible. Internal author chooses audience before posting; supplier forced supplier-visible. Require subject for new thread, nonblank body for each post, valid same-thread Reply To and authorized notification recipients. Freeze posted body/files/audience, stamp actual actor/time, then notify. Prepared content is not visible as posted until success. No edit/delete after Post |
| Render Approval Certificate | Invoked only by durable approval action or authorized retry. Approval first snapshots Approved Manufacturing Facility Label, Approved Supplier Label and Approved Authority Label alongside stable relationships. Query frozen labels/scope, approved masses/evidence and actual authority identity; generate English PDF and unique opaque reference; validate no internal content; attach immutable bytes. Retry never reads mutable master labels. Unique PPAP+approved native outcome/reference. No automatic public access or bulk evidence packaging |
| Verify Certificate | Authorized authenticated reader; resolve opaque reference to original approved package and artifact; show approved facts within record permissions. No first-release withdrawn state; applicable later PPAPs do not mutate the earlier certificate |

## 9. Required runtime evidence

Execute acceptance cases for concurrent Issue/Submit/Cancel, permission changes before action, empty roles, publication/file-copy rollback, replayed intake/manual reconciliation, native element reopen, immutable rejected/approved files, due-date reason history, timezone boundaries, notification retries and originating cancellation. Validate direct URL/API/export/search/file access separately from form behavior. Static diagrams and field coverage do not constitute this execution evidence.
