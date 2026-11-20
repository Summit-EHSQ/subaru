# PPAP target acceptance scenarios

These are proposed acceptance criteria for the first-release target, dated 2026-11-17. They have not been executed against an Intelex tenant. [Requirements and ADR traceability](ppap-requirements-and-adr-traceability.md) maps all 42 current decisions and all 18 PPAP ADRs to these scenarios. The OOTB baseline and approved historical packages remain separate from target configuration.

The [target technical specification](ppap-target-technical-specification.md), [canonical field contract](ppap-target-field-contract.md) and [object model](ppap-target-object-model.md) define the exact configured names. PPAP stages are Draft, In Progress and Management Review; Approved and Cancelled are termination outcomes. PPAP Element stages are Work In Progress and Engineer Review; Approved and Cancelled are termination outcomes. Discussion replies use PPAP Discussion Post. Dedicated target objects/native workflows are guarded by `Target Configuration?` on the retained concrete PPAP; shared APQP schema is preserved.

## 1. Execution basis and fixtures

Use controlled test data: two unrelated supplier companies; two manufacturing facilities under one company; two shipping depots linked according to SRM; a company-scoped supplier user, a single-facility user, a multi-facility user, an unrelated-company user and a contact without portal access. Include new-model-only and mass-production-only users, an engineer, a PPAP administrator, an eligible management approver, an ineligible internal user and an engineer who is also in the eligible pool.

Use a drawing with two selected parts and a third part outside scope; alternate drawing revisions; a second drawing; safety, quality, regulated, explicitly unclassified and missing/conflicting source classifications; open and closed predecessor PPAPs; multiple approved evidence versions plus rejected/unapproved/cancelled-source versions; an element with multiple files; and required internal/supplier elements.

Actual production element types, templates, protection flags, checklists and offsets must come from **PPAP-INPUT-001**. Pending that source, synthetic fixtures can exercise mechanics but cannot prove SIA content acceptance. Record scenario result, test identity/time, record/source IDs, configuration version, expected/actual outcomes and evidence location. Capture denial evidence as well as success paths. Run permission checks through forms, direct URLs, search, related navigation, exports, APIs where available, notifications and attachment download routes. No scenario implies that a named custom evidence/audit object must exist when native facilities suffice.

## 2. Intake, scope and requirements

### AC-01 — Automated operational intake and drawing-review clock

**Sources:** PPAP-INT-001, PPAP-SCHEDULE-002; ADR-030.

Receive an applicable released BOMEX/ECS with two drawings, authoritative drawing revisions, part relationships, source IDs, drawing file/link and release date. Verify source-linked initial PPAP Drawing Reviews are created at the intended per-drawing granularity, routed by change-context SRM roles, with due dates exactly release + 14 calendar days across weekends/year boundaries. No PPAP or pilot program is created merely by intake. Replay initial events and later deltas: links remain traceable, no duplicate obligation is created, and ECS number order does not determine revision chronology. Prove the operational mapping without granting business users access to isolated integration staging.

### AC-02 — Review outcomes, manual fallback and governed exceptions

**Sources:** PPAP-INT-001, PPAP-CHANGE-001; ADR-030; adjacent ADR-039.

Exercise PPAP Required, governed PPAP Not Required and Addressed by Another PPAP. Require recorded reviewer, decision date and rationale; exception reasons must be governed and addressed-by must identify the relevant existing obligation. A different new engineering change requiring PPAP cannot be absorbed into an open PPAP through addressed-by. Required launches a source-linked PPAP draft carrying candidate facility, drawing/revision, selected-part candidates and model context. Test controlled manual initiation, including correcting a prior no-PPAP determination, then reconcile later automated intake without duplicate work. Where inspection content is affected, verify the specification checkpoint selects an appropriate released revision; detailed payload/permission rules require the reviewed interface contract.

### AC-03 — One MOC PCR source and PPAP-side linkage

**Sources:** PPAP-SCOPE-001; ADR-105 current rejection outcome; adjacent ADR-068, ADR-032–036.

Use an authorized MOC PCR Proceed to PPAP outcome to initiate a process-change PPAP with immutable originating PCR/source-context relationships and the correct supplier/drawing/parts. Replaying the launch must not duplicate the same requested obligation. Show that a proceed decision is not final PPAP approval or shipment authorization. Verify cancellation of the PPAP is exposed to the PCR owner for resolution without automatically cancelling or successfully fulfilling the PCR. Confirm no separate PPAP-adjacent Supplier PPAP Request record, workflow or supplier entry action is introduced. Full PCR review/implementation acceptance belongs to MOC/PCR.

### AC-04 — Manufacturing approval scope and depot context

**Sources:** PPAP-SCOPE-002; ADR-021, ADR-026; adjacent ADR-076.

Create one PPAP for one manufacturing facility and drawing with two included parts. Relate two authorized shipping depots using the governed SRM relationship rules. Verify approval, reuse compatibility and certificate identify the manufacturing facility; neither depot replaces it. Another depot at that facility alone must not force another PPAP. A different manufacturing facility cannot be introduced into that same approval scope. Task routing can use the relevant depot coordinator while entity security remains enforced.

### AC-05 — Internal draft and explicit engineer issue

**Sources:** PPAP-RELEASE-001; ADR-021, ADR-026.

Save an unissued draft with candidate parts and generated elements. Authorized internal users can prepare it; every supplier persona is denied draft record, child task, discussion, file, search result and notification access. An authorized engineer explicitly issues after preflight; a supplier, non-responsible user or background save cannot issue. After issue, only supplier users satisfying entity, role, classification and lifecycle rules gain the applicable external view. Retain issuer/time and the issued configuration context.

### AC-06 — Release preflight completeness, role population and overdue warning

**Sources:** PPAP-RELEASE-002, PPAP-CLASSIFICATION-001, PPAP-SCHEDULE-003; ADR-026, ADR-101.

Attempt issue with a required supplier-element date missing, then with a required internal-element date missing: both fail before any external visibility or workflow transition. Attempt issue with unresolved source classification and with an empty/non-authenticated coordinator role: fail with actionable causes. Populate all required dates, including one in the past; display an overdue warning and permit issue after valid authorized action. Freeze the issued baseline once. Retrying issue cannot create duplicate tasks, baseline changes or duplicate release effects.

### AC-07 — Supplier confirmation and integrated part-mass gate

**Sources:** PPAP-RELEASE-001, PPAP-WARRANT-001; ADR-021.

Before supplier scope confirmation, reject the first supplier-element submission while allowing authorized internal work. Confirmation must cover manufacturing facility, drawing and exact included parts and retain actual actor/time. Before final submission, require actual and metal mass in kg for every included part; unknown remains missing. Reject actual ≤ 0, metal < 0 and metal > actual, and reject N/A as a bypass. Accept explicit metal = 0 with positive actual as no metal content. Confirmation is not a substitute for complete final mass data, and unselected parts do not acquire warrant rows implicitly.

### AC-08 — Issued scope lock and controlled replacement

**Sources:** PPAP-SCOPE-003, PPAP-LIFECYCLE-002, PPAP-RELEASE-001.

After issue, attempt facility, drawing number and selected-part additions/removals through engineer/admin forms, imports/API and relationship-edit routes: all are blocked. Perform authorized cancellation with reason and create a replacement draft with revised scope; retain original scope/history and repeat issue/supplier confirmation. Verify no administrator scope-amendment shortcut exists. Reuse selection must exclude evidence sourced from the cancelled original. An engineering revision needing PPAP follows AC-24 even if these three scope values remain the same.

### AC-09 — Authoritative business classifications and missing data

**Sources:** PPAP-CLASSIFICATION-001; ADR-025, ADR-030; adjacent ADR-084.

Load authoritative important-safety, important-quality and regulated drawing/part values and compare the draft's recorded source/context. Attempt engineer/admin PPAP-level overrides: deny. Missing or conflicting values block issue and are not interpreted as explicitly unclassified. Correct the authoritative source and process its integration update; issue can proceed when data is resolved. Changing security visibility classification must not alter these business values, waive requirements or activate a false classification-replacement cycle.

### AC-10 — Mixed-part evidence union and safety approval trigger

**Sources:** PPAP-CLASSIFICATION-002; ADR-021, ADR-025.

Select parts with different authoritative classifications on the same drawing. Generate the union of applicable requirements without duplicate requirements or forced separate PPAPs solely because classifications differ. Any selected important-safety part requires the explicit overall management stage. Quality/regulated-only selections add their governed evidence but do not independently activate management approval. Removing a part is permitted only in draft; the issued union/scope remains frozen.

### AC-11 — Classification refresh before issue and replacement after issue

**Sources:** PPAP-CLASSIFICATION-003, PPAP-LIFECYCLE-003.

Refresh an unissued draft from corrected authoritative values without cancellation. Correct applicable classifications for an issued open PPAP's original governed engineering context: the controlled path requires cancellation and a replacement initialized from current classifications; no in-place reassessment bypass is available. Preserve the original decisions and exclude cancelled-source evidence from future reuse. Separately receive a different engineering revision with its own classifications: create its new PPAP under AC-24 while the older original-context PPAP normally continues. Deliver a source correction relating to a closed approval and prove that approval/evidence/certificate remain unchanged; later required approval work is a new PPAP.

### AC-12 — Controlled SIA library reconciliation and source-completeness gate

**Sources:** PPAP-REQUIREMENTS-001, PPAP-REQUIREMENTS-002, PPAP-MIGRATION-001; ADR-022.

When PPAP-INPUT-001 arrives, map each relevant OOTB element, checklist, level/template entry, routing pattern and classification default to a controlled SIA source/version and a retained, modified, added or retired disposition. Verify actual protection flags and element/offset counts from that matrix. Demonstrate generated PPAP requirements match approved SIA examples for each applicable context/classification. Until then report content acceptance blocked; do not pass using the OOTB count or invented SIA seeds. Configuration reconciliation remains in scope despite no operational legacy migration.

### AC-13 — Unprotected exclusions and supplier N/A requests

**Sources:** PPAP-REQUIREMENTS-002, PPAP-REQUIREMENTS-003.

During draft setup, let the responsible engineer mark an unprotected default Not Required only with a reason, without a separate administrator approval. Reject attempts to exclude a procedure/classification-protected requirement. Supplier can request N/A with explanation but cannot change applicability or self-approve waiver. Engineer rejection preserves the request/review trail. Engineer acceptance changing issued applicability follows cancellation/replacement; it does not silently waive an existing issued element.

### AC-14 — Issued requirement-set immutability

**Sources:** PPAP-REQUIREMENTS-003, PPAP-SCOPE-003, PPAP-CLASSIFICATION-003.

After issue, try adding a governed element, excluding an existing element, changing Not Required and bulk-editing applicability through every permitted editor and service account. Deny in-place change, including administrator paths. Cancel/replace for the revised set and verify original structure is retained. Correcting/resubmitting or authorized non-engineering reopening of an existing required element remains possible without adding/removing requirements or retargeting locked scope/classifications.

### AC-15 — Version publication, generated children and historical stability

**Sources:** PPAP-REQUIREMENTS-001, PPAP-REQUIREMENTS-003; ADR-022, ADR-023.

Publish revised requirement/template configuration and create a new PPAP; it receives the complete intended version graph and generation defaults. Existing issued/historical PPAPs retain exact requirement/checklist/routing/phase structure and source version context. Simulate concurrent publication and generation retry: version/element uniqueness is enforced and no partial published configuration is consumable. Inactive catalogue/configuration values cannot be newly selected where prohibited while old references remain intelligible. Publication or a bulk schedule action cannot amend issued applicability.

## 3. Elements, evidence and lifecycle

### AC-16 — Stable current roles and accountable internal reassignment

**Sources:** ADR-022, ADR-026; adjacent ADR-003, ADR-004, ADR-078.

For each governed routing pattern, resolve supplier tasks from authenticated active coordinator members in the applicable entity/depot context and initial internal owners from model/running/process-change roles. Test a multi-member supplier role, departure/replacement of a member while work is open and a contact without an account. Current eligible members may act, departed/ineligible members cannot; retain actual actor and distinct team responsibility. Route internal inspection work to the appropriate team then authorize individual reassignment with history. No transaction-specific role or mandatory part-owner table is required, and assignment never expands data scope.

### AC-17 — Independent rejection, complete submissions and retained history

**Sources:** PPAP-METRIC-002; ADR-022, ADR-023.

Submit two required supplier elements. Reject one with mandatory assignee-visible comments; only that element returns for replacement and the accepted element remains approved. Preserve each submitted multi-file set, rejecting actor/time/comments and all resubmissions in immutable internal history; show rejection history grouped by element and total rejection count. The rejected set is not the active supplier requirement or eligible reuse baseline. Missing required data/files fail complete-submission checks and do not establish the first-complete timestamp. Completion of the PPAP remains blocked by any open/rejected/unreviewed required element.

### AC-18 — Internal self-completion review and authenticated decisions

**Sources:** PPAP-APPROVAL-002, PPAP-APPROVAL-003; ADR-022.

Have the responsible engineer complete and explicitly approve an internal element. Permit this, retain separate completion/review events and apply the same evidence/protection gates. An internal associate-completed element still routes to the engineer; supplier completion cannot self-approve. Record authenticated actor, time and decision without an added signing/reauthentication step. Attempts by ineligible users or actions lacking required evidence fail before transition.

### AC-19 — Compatible approved evidence and latest eligible suggestion

**Sources:** PPAP-EVIDENCE-001, PPAP-EVIDENCE-004; ADR-023, ADR-027.

Offer evidence for the same manufacturing facility/drawing/element type. Suggest the latest eligible approved version with originating PPAP, revision, part scope and approval metadata. Exclude different facility/drawing/type, unapproved uploads, rejected versions and cancelled-source evidence from suggestions and manual search. Require engineer confirmation of receiving revision/part compatibility. Accept a different drawing revision or selected-part set when the engineer confirms compatibility; do not replace compatibility review with an identical-set requirement.

### AC-20 — Reasoned selection of an earlier approved version

**Sources:** PPAP-EVIDENCE-001; ADR-023, ADR-027 refined.

With two eligible approved versions, select an older version. Block selection without reason or without engineer compatibility confirmation; permit it with both and retain actor/time, selected version and rationale. The latest eligible suggestion remains the default. Selection privileges cannot expose an unrelated supplier's source record/file, select a cancelled source or make unapproved newer evidence eligible.

### AC-21 — Immutable multi-file receiving snapshot and lineage

**Sources:** PPAP-EVIDENCE-001; ADR-023.

Reuse an eligible multi-file element into a receiving task. Verify every governed file and required metadata is copied into the receiving immutable task-level container with copied-from/source lineage; one missing file is not a complete reuse outcome. Later changes to source working content must not rewrite the receiving copy, approved source snapshot or earlier copies. Test copy failure/retry for no partial accepted container or duplicates. Verify independently authorized file access and count the additional copies in storage planning.

### AC-22 — Cancellation prospectively excludes source evidence

**Sources:** PPAP-EVIDENCE-002; PPAP-LIFECYCLE-002.

Approve an element on an open source PPAP and successfully reuse its snapshot elsewhere. Cancel the source PPAP. Verify its evidence disappears from future suggestions and cannot be chosen manually or revalidated by an administrator for reuse. Existing receiving snapshots, lineage and closed approvals remain unchanged and readable to authorized users. A new receiving PPAP with no other eligible evidence must obtain and approve fresh submission; do not delete the original evidence.

### AC-23 — Non-engineering correction preserves prior reuse eligibility

**Sources:** PPAP-EVIDENCE-004, PPAP-REQUIREMENTS-003; ADR-023, ADR-025.

On an open PPAP, reopen an approved required element for evidence correction/internal management feedback with history. Its prior approved snapshot remains eligible for compatible future reuse while replacement work is incomplete. Replacement evidence becomes eligible only after its own approval; rejected/unapproved replacements never displace the approved baseline. Preserve all prior approvals, receiving copies and locked scope/classifications/requirements. The same correction action is unavailable on a closed approved PPAP and cannot be used to process an engineering change.

### AC-24 — Every required engineering change starts another PPAP

**Sources:** PPAP-CHANGE-001, PPAP-CHANGE-002, PPAP-METRIC-002; ADR-030 and ADR-104 corrected.

Receive a different new engineering change requiring PPAP while an earlier PPAP is open with approved elements; repeat with a closed predecessor. In both cases create a new source-linked PPAP, its own issue/confirmation and metrics. Do not append the new engineering context to retarget the earlier PPAP, reopen its approved elements or create an engineering commitment/reopening metric cycle. The older open record normally continues for its original revision, with no automatic cancellation; closed history is immutable. Reuse is allowed only under AC-19–AC-22. An engineer may separately use Cancel PPAP for the older open record under AC-26.

### AC-25 — Concurrent overlapping PPAPs retain explicit context

**Sources:** PPAP-CHANGE-001, PPAP-CHANGE-002; ADR-027.

Open model, running and process-change PPAPs with overlapping drawing/parts. Permit concurrency without automatic conflict merge or blocking. Each view clearly identifies originating source/type, revision, facility, included parts, responsible organization, elements and dates; group open work by scope/due date for human sequencing. A newer unapproved upload in another open PPAP does not become the approved reusable baseline. Separate PPAP metrics and histories remain distinct.

### AC-26 — Cancel PPAP permission, reason, cascade and linked outcomes

**Sources:** PPAP-LIFECYCLE-002, PPAP-CHANGE-002; ADR-022, ADR-029.

On issued open work, permit the responsible engineer or designated PPAP administrator to invoke **Cancel PPAP** with a mandatory reason and retained actor/time. Deny supplier/unrelated internal users and empty reasons; no separate approval stage is required. Stop outstanding element actions and reminders while preserving completed elements, all evidence, discussions and decision/date history. Make discussion read-only, exclude source evidence from future reuse and expose cancelled outcome for linked PCR/APQP owners' resolution. Do not treat cancellation as success or cancel the entire linked application record.

### AC-27 — Cancellation retry and action concurrency

**Sources:** PPAP-LIFECYCLE-002; target implementation validation.

Inject a failure partway through cancellation's related-work stop and retry through the owning platform mechanism. Verify completed/stopped work is not duplicated or erased and final cancellation is reported complete only after required cascade effects succeed; unresolved failure has an accountable diagnostic/retry path. Race cancellation with supplier submit/element approve/final approve. Recheck state/authorization atomically enough that no submission or approval is accepted after cancellation and no closed approval is cancelled. Repeated action cannot emit contradictory terminal outcomes or duplicate reminders.

### AC-28 — Final approval gate, current pool and eligible engineer

**Sources:** PPAP-CLASSIFICATION-002, PPAP-APPROVAL-001, PPAP-APPROVAL-003; ADR-025.

With any required element open, rejected or awaiting engineer review, block engineer completion/management submission. For safety scope, after all gates pass require explicit management submission to a currently eligible selected approver; test an eligible responsible engineer acting as final approver and allow it without skipping the stage. Remove a selected user's pool membership before action: deny until a current eligible approver acts. Quality/regulated-only scope follows engineer final completion without safety-only management stage. Actual actor/time/decision and all completion gates remain required; no timer or selection alone approves.

### AC-29 — Management Return for More Information stays internal

**Sources:** PPAP-EVIDENCE-004, PPAP-REQUIREMENTS-003, PPAP-REVIEW-001; ADR-025.

During final review lock approved element data. Management Return for More Information requires an internal comment, returns PPAP to internal In Progress and preserves return history; supplier sees pending/in-progress rather than an overall rejected stage or management exchange. Engineer may clarify/resubmit without supplier action or reopen selected existing elements for non-engineering correction with separate assignee-visible comments. Reapprove affected elements before resubmitting and start a new management review deadline without changing locked requirements. First-pass reporting retains the original return facts.

### AC-30 — Full approval only and closed-package immutability

**Sources:** PPAP-LIFECYCLE-001, PPAP-LIFECYCLE-003; ADR-025, ADR-028, ADR-104 retained boundary.

Inspect target PPAP stages, actions, phases, weights/progress calculations, forms, views, reminders and reports for remaining active Interim Approval dependencies. No interim/conditional result can complete PPAP. After full approval, deny Cancel PPAP, withdrawal and reopen/edit approved package routes, including administrator routes intended for ordinary work. No withdrawal-driven certificate verification state exists. Later engineering work follows AC-24; existing approved evidence/certificate/history remain intact. APQP baseline checks are independently required by AC-51.

## 4. Scheduling, notifications and metrics

### AC-31 — One model/stage, calendar offsets and independent dates

**Sources:** PPAP-SCHEDULE-001, PPAP-SCHEDULE-002; ADR-101.

Create a model-change PPAP with one governing model/program and one manufacturing stage. Verify each applicable template phase/stage intersection plus positive/negative offset yields the intended calendar date across weekends/leap/year boundaries, with no holiday adjustment. Reject simultaneous independently governing schedules. Running/process-change PPAPs use their independently assigned dates until explicitly connected. Model build-event dates remain distinct from the phase/stage matrix and do not silently become PPAP deadlines.

### AC-32 — Open connected recalculation preserves issued history

**Sources:** PPAP-SCHEDULE-003, PPAP-METRIC-001; ADR-101, ADR-108.

Issue connected PPAPs, complete one element and close a separate PPAP. Change a governing model date. Recalculate only effective due dates of open connected work; original issued baseline, completed-task date history and closed PPAP history remain byte-for-byte equivalent in relevant facts. Record old/new effective dates and change source/time/actor where applicable. A later supplier submission snapshots the current operational date while the original baseline remains independently reportable.

### AC-33 — Controlled schedule disconnection and reconnection

**Sources:** PPAP-SCHEDULE-003; ADR-101, ADR-108.

An authorized user receives a warning before disconnecting a PPAP from model scheduling and assigns required manual dates. Further PPAP Model Changes leave those operational dates unchanged. Warn before authorized reconnection, replace the permitted open operational manual dates with calculated dates and retain prior override history; issued baseline/completed history stay preserved. Unauthorized users cannot toggle either control, and reconnection cannot alter scope, requirements or completed work.

### AC-34 — Engineer single/mass date changes and schedule resequencing

**Sources:** PPAP-SCHEDULE-003; ADR-101, ADR-108.

Engineer changes one date inline and applies one date to selected tasks in a controlled mass action; supplier can discuss need but has no dedicated extension-request workflow or unrestricted edit. Audit initial calculation, manual, model and bulk effective changes with prior/new date, source, timestamp and actor where applicable. Bulk phase resequencing recalculates permitted open work and clears only incompatible operational custom values, preserving their history and original issued baseline. Unauthorized/unselected/completed tasks remain unaffected. Reassignment follows owner-controlled permission and recorded acting user.

### AC-35 — Reminder/escalation and review targets

**Sources:** PPAP-NOTIFICATION-001, PPAP-REVIEW-001; ADR-026, ADR-029.

Exercise due − 3 calendar days, due day, weekly overdue reminders and due + 7 escalation. Notify current assignees; escalate supplier work to responsible engineer and internal work/review/final approval to PPAP administrators. A complete element submission/resubmission sets a new configurable initial 5-calendar-day engineer review target; package submission/resubmission sets a separate 5-day management target while retaining prior cycles. Changed operational dates/current membership affect future notifications without changing baseline metrics. Completed/cancelled work stops reminders. Threshold edits apply according to the documented configuration effect; no reminder/escalation auto-approves, reassigns or cancels work, and retry must not duplicate a due notification.

### AC-36 — First complete submission against two frozen deadlines

**Sources:** PPAP-METRIC-001, PPAP-METRIC-002, PPAP-SCHEDULE-003; ADR-029, ADR-108.

Issue an element with baseline due 10 January, then change operational due to 15 January before its first complete supplier submission on 12 January. Report baseline late and operational on time as two separate measures; freeze 15 January with that submission. An incomplete 9 January attempt establishes neither timeliness event nor deadline snapshot. Reject and approve a later resubmission; retain original 12 January event/results and report rework separately. Change the operational date again after submission: historical comparisons remain unchanged. Engineer approval/review lateness is a distinct measure. Validate inclusive date-boundary/timezone handling against the approved reporting contract; no implicit score weighting or counting both measures as two submitted elements.

### AC-37 — Cancellation denominators and retained submitted results

**Sources:** PPAP-METRIC-003, PPAP-METRIC-001, PPAP-METRIC-002.

Cancel one element/package before any first complete supplier submission and exclude that work from both on-time denominators while reporting the cancellation. Cancel another after first complete submission: retain both original results and submission/date/cancellation facts. Incomplete attempts before cancellation do not qualify as complete submissions. Compare reporting/export totals with underlying facts and preserve separate cancellation counts/reasons. Published scorecard snapshots remain frozen unless their owning controlled correction process runs.

### AC-38 — Current workflow reporting and attribution

**Sources:** ADR-029; PPAP-METRIC-001–003.

Change a task stage, role membership, individual owner and due date, then refresh the operational view against native workflow-instance data joined to PPAP context. Verify open/completed/overdue/materially overdue groupings, aging and filters for model/program, manufacturing stage, supplier/facility, source type, engineer/role and due date match current records. Distinguish shared role responsibility from the actual submit/review/approval actor, and distinguish internal management returns from supplier rework. Drill-through enforces source security. Broader external BI and scorecard snapshots need not have identical refresh timing and cannot be the sole current task source.

## 5. Inspection, permissions and outputs

### AC-39 — Explicit required-result approval gates and measurement boundary

**Sources:** PPAP-INSPECTION-001, PPAP-INSPECTION-002; ADR-024; adjacent ADR-038, ADR-039, ADR-041.

Link an inspection or run-at-rate result expressly required by an element. Keep that element incomplete until the engineer accepts the required result/evidence; a file/link alone is not acceptance. Keep an unrelated linked pilot program, inspection and failure open and verify they do not blanket-block PPAP when all actual element requirements are satisfied. First-release run-at-rate uses PPAP task/evidence handling. Structured measurements/checklists/specification versions remain in the specialist process, and PPAP preserves the accepted-result/specification context and access rules without duplicating measurement fields or building TACT-TRI.

### AC-40 — New-model pilot initiation and scope

**Sources:** PPAP-INSPECTION-002; ADR-101; adjacent ADR-098.

From a new-model PPAP, authorized engineer may initiate applicable Pilot Part Data using build events on its governing PPAP Model Change and only parts within drawing/PPAP scope. Intake/review alone creates no pilot program. Repeat from running-change and process-change PPAPs: pilot-program initiation is unavailable; required inspection elements accept appropriately linked results/evidence instead. Pilot work may run concurrently and remains governed externally; its unrelated open activity does not create a new PPAP closure gate. No full pilot/Safe Launch application delivery is inferred from this PPAP-side test.

### AC-41 — Entity, classification and lifecycle at every access boundary

**Sources:** PPAP-SCOPE-002, PPAP-OUTPUT-001; ADR-026, ADR-107; adjacent ADR-078, ADR-084.

Use the fixture personas across own facility, multiple authorized facilities, governed company-wide scope and unrelated company. Combine entity rights with application roles, new-model/mass-production classification and draft/issued/closed lifecycle. Test record, child task, discussion, evidence version/copy, file URL, certificate, search, export, related selection and notification link access. Assignment, recipients, location-tree placement and parent-company rollup reports cannot bypass denied source scope. Suppliers never gain internal tasks, management-return exchange, internal discussion or staging records. Current relationship changes must revoke/grant applicable access without altering historical actors.

### AC-42 — Security handover does not change approval classifications or ownership

**Sources:** PPAP-CLASSIFICATION-001, PPAP-CLASSIFICATION-003; adjacent ADR-084.

Perform authorized model/program visibility handover on a mixed set of open/completed related PPAP records, tasks and applicable inspection descendants. Expand permitted mass-production visibility consistently, with audit and recoverable partial-failure diagnostics, while preserving business safety/quality/regulated snapshots, workflow stage, owner, open responsibility, scope and requirements. A mass-production-only user cannot see new-model records before handover; a user with new-model rights can read permitted mass-production history. This access-only transition does not trigger classification cancellation/replacement or claim all work completed.

### AC-43 — Secured append-only discussion and no implied tasks

**Sources:** PPAP-DISCUSSION-001; ADR-107.

Authorized SIA/supplier users create and reply to visible supplier-facing threads while SIA can maintain internal threads. Require comment text, preserve subject/order/author/time and use governed Intelex attachments. Draft preparation may be edited, but posted text/files cannot be edited/deleted; corrections are new replies. Notification recipients do not narrow or broaden visibility. Internal content cannot become external; validate protected-reply inheritance if enabled, otherwise use the accepted immutable thread-level classification fallback with parallel threads. Posting creates no accountable workflow task. Later authorized participants can read permitted history.

### AC-44 — Discussion read-only after either closure outcome

**Sources:** PPAP-DISCUSSION-002, PPAP-RETENTION-001; ADR-107.

After full approval and, separately, cancellation, attempt new thread, reply and attachment operations as supplier, engineer and PPAP administrator. Deny all, including direct endpoint routes and a post prepared before closure but submitted afterward. Existing permitted discussion and its attachments remain readable under entity/classification/lifecycle security and append-only history. No internal-only post-closure exception exists.

### AC-45 — Controlled PDF certificate and authorized individual files

**Sources:** PPAP-OUTPUT-001, PPAP-APPROVAL-003, PPAP-LIFECYCLE-003; ADR-028.

Before final approval no artifact may claim approval. After actual authenticated completion, generate a controlled English PDF identifying PPAP, supplier/manufacturing facility, drawing/revision, selected parts, approval status/date and actual applicable approval authority. Verify PDF content against frozen approved facts and test generation retry without conflicting certificates. An optional stable verification link/QR must require authorization and resolve the source record without public exposure. Authorized suppliers may download individual permitted evidence files, never internal-only files/management exchanges. No consolidated approved-evidence package action or withdrawal verification state is delivered. Preserve certificate through later engineering changes.

### AC-46 — Central supplier eligibility and service work

**Sources:** PPAP-ELIGIBILITY-001; adjacent ADR-079.

For Service Parts Only, allow specifically service-related PPAP work and block new mass-production PPAPs. Test Active/Inactive and company/facility restrictions against the current central capability matrix without inventing additional status values. Combine eligibility with user/entity/classification permissions; service eligibility alone grants no extra history or cross-supplier visibility. Change status with open PPAPs and prove the central open-work policy governs; no PPAP-local automatic cancellation is introduced.

## 6. Release boundary, retention and technical validation

### AC-47 — New-only operations and evidence baseline growth

**Sources:** PPAP-MIGRATION-001, PPAP-INT-001; ADR-023, ADR-030.

Initialize the release without importing legacy active workflows, approved packages or the legacy reusable evidence baseline. First PPAPs with no eligible Intelex evidence request fresh submissions; new approved evidence subsequently becomes reusable under the agreed rules. Confirm automated operational source intake still runs and controlled library/template reconciliation remains required. Configuration setup is not misreported as operational migration; legacy history remains outside this build's migration scope.

### AC-48 — No automatic retention deletion

**Sources:** PPAP-RETENTION-001; ADR-023, ADR-107.

Advance time or exercise scheduled jobs across draft/open/approved/cancelled records with approved/rejected evidence, old versions, discussions, copied snapshots and certificates. Verify no assumed-duration automatic purge/archive removes those facts or files. Historical authorized read access and restrictions remain enforced. A deactivated catalogue/configuration source must not erase operational history or readable labels. Document any platform-global deletion setting that would conflict before release acceptance; do not invent a legal retention period.

### AC-49 — English launch with stable identifiers

**Sources:** PPAP-LOCALIZATION-001; ADR-028.

Review all user-facing forms, instructions, checklist content, errors, notifications and certificates in English, using the controlled SIA content when supplied. Confirm configurable/localizable display labels and catalogue names are separate from stable codes/integration keys. A display-label change does not change code-based rules, source matching or historical approval meaning. Do not require additional culture translations as a first-release gate.

### AC-50 — Representative capacity, file support and connected browser

**Sources:** PPAP-CAPACITY-001, PPAP-SCOPE-001; ADR-023, ADR-029, ADR-110.

Validate representative operations with 200 active PPAPs and annual growth of 1,500, using actual SIA element counts when available and approximately 1.5 files/element at 1 MB average. Include rejected/resubmitted versions, historical records and immutable receiving copies in storage estimates; report assumptions rather than assuming the OOTB element count. Verify actual tenant upload types/limits with representative standard files; 1 MB is not a maximum and one estimated concurrent user is not an application restriction. Record observed performance against agreed tenant acceptance thresholds rather than inventing an SLA. Exercise connected desktop/tablet/phone forms, task grids, plans, discussion, attachments and authenticated email links; offline native completion is not required. Shipment-event controls, recurring-validation build and dedicated TACT-TRI remain deferred.

### AC-51 — OOTB preservation and shared APQP regression

**Sources:** PPAP-SCOPE-001, PPAP-LIFECYCLE-001; retained OOTB baseline; adjacent ADR-016.

Compare the retained source packages/baseline evidence and extraction files before/after target preparation: they remain unchanged and target configuration is separately identifiable. In a representative existing APQP, validate create/default settings, template/task generation, checklist use, phase/gate transitions, task assignments, date behavior, native reminders and permissions against the baseline. Pay particular attention to shared `ProjectFwk_ProjectAbstractObject`, `ProjectFwk_ProjectTaskObject`, `ProjectFwk_PhaseObject`, task-definition/template/checklist framework and shared settings/formulas. PPAP removal of Interim Approval and its progress/phase dependencies must not remove APQP phases, change APQP weighting/counts/filter branches or break shared actions/views. Linked APQP sees PPAP cancellation for owner resolution without automatic APQP cancellation or successful completion. APQP/program physical-record sharing is not assumed without an explicit owning contract.

### AC-52 — Field contract, native mechanisms and absence of deferred structures

**Sources:** All current target decisions; Intelex data-model specification validation.

Reconcile each target inventory/diagram object to its own canonical field-contract subsection, every directly declared field/designed inverse grid to one row, and every formula/action source to real fields. Verify cardinality/requiredness/defaulting/read-only population, catalogue active filters and disabled catalogue inverses, declared inheritance without duplicated inherited fields, publication mappings and no stale removed dependencies. Prove target-tenant support for native audit/workflow/reminder evidence, action authorization/concurrency, retry-safe generation and snapshot copy before claiming implementation readiness. No fabricated executable expression, physical SQL schema or custom audit/event/reminder object substitutes for missing proof. Confirm absence of a separate Supplier PPAP Request, engineering absorption/reopen handler, interim approval, withdrawal, shipment/recurring-validation implementation, dedicated TACT-TRI and consolidated package-download flow. Pending SIA content/interface/runtime work remains visible in the acceptance report.

### AC-53 — Model-specific Move Schedule Phase preserves locked requirements

**Sources:** PPAP-SCHEDULE-001, PPAP-SCHEDULE-003, PPAP-REQUIREMENTS-003; ADR-101, ADR-108.

Select open elements belonging to one PPAP Model Change and invoke **Move Schedule Phase** as an authorized engineer. Require a reason, an active destination phase and a valid date-matrix cell for each affected manufacturing stage; warn before clearing incompatible manual dates on connected work. Recalculate permitted operational calculated/effective dates and audit former/new phase, date, override, actor and reason. Disconnected manual/effective dates stay unchanged until authorized Reconnect; phase move cannot bypass that protection. Preserve issued due baselines, source template/requirement-version lineage and requirement membership/applicability. Deny unauthorized, mixed-model, invalid-cell and completed/closed-work changes; retry must not duplicate effects or erase prior overrides. Subsequent model-date refresh uses the new operational phase. No ordinary direct phase edit bypasses this action after issue.

### AC-54 — Draft schedule refresh and issue-time baseline

**Sources:** PPAP-SCHEDULE-001, PPAP-SCHEDULE-003, PPAP-RELEASE-002; ADR-101.

Prepare connected Draft elements, then change their governing model date before issue. Refresh their model-derived calculated/effective dates while preserving permitted manual overrides and disconnected manual dates. At Issue, revalidate the current model/phase/stage calculation under concurrency protection and freeze the resulting effective dates as the issued baseline; a queued/stale Draft calculation cannot become the baseline accidentally. Missing required dates block issue, populated overdue dates warn, and unselected/completed/closed work remains unchanged. Later recalculation follows the issued-baseline preservation rules.

### AC-55 — Target guards work before PPAP exists

**Sources:** PPAP-INT-001, PPAP-REQUIREMENTS-001, PPAP-SCOPE-001; ADR-030; retained OOTB shared framework.

Execute authorized operational intake, initial drawing review and requirement/template publication when no PPAP record exists. Their governed source/configuration permissions apply without requiring `Target Configuration?` on a nonexistent PPAP. For handlers operating on an existing PPAP or its work, resolve the typed owning PPAP and check its discriminator before target mutation; unresolved/legacy references cannot invoke target effects. Verify legacy PPAP/APQP handlers retain their behavior and do not generate target work. Direct hidden-action invocation, save retries and source-event replay cannot bypass the appropriate pre-PPAP or PPAP-bound authorization guard.

### AC-56 — Durable cancellation outcome before commit, delivery afterward

**Sources:** PPAP-LIFECYCLE-002, PPAP-METRIC-003; ADR-029; PCR/APQP interface boundary.

After the outstanding-work stop succeeds, durably record/queue the cancellation outcome with exact PPAP, source obligation, scope, reason and actor/time before the terminal cancellation commit. Inject queue failure: do not report successful terminal cancellation without a durable originating outcome; retry safely with native diagnostics. Commit Cancelled and enforce discussion/reminder/action restrictions, then deliver the queued PCR/APQP outcome and authorized notifications. Inject delivery failure after commit: preserve the cancelled result and retry transport without re-running cancellation or losing history. Duplicate/reordered delivery is idempotent at the owning adapter, flags the originating owner for resolution, and never emits successful fulfilment or automatically cancels the whole PCR/APQP.

## 7. Acceptance exit record

All 56 scenario IDs are defined. Execution status is **Not executed**. Configuration-source acceptance remains blocked by PPAP-INPUT-001; payload mapping and tenant mechanism validation remain separate implementation gates. A release acceptance record must distinguish passed runtime scenarios, source-blocked cases and failed cases, with linked evidence and owners. It must not claim acceptance from this written scenario catalogue alone.
