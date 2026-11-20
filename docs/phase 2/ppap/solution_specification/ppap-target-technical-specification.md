# PPAP target technical specification

**Subaru of Indiana Automotive · Intelex Phase 2 · Draft 1 · 17 November 2026**

| Property | Value |
|---|---|
| Purpose | Define the target PPAP product configuration against the preserved out-of-the-box product, all current PPAP decisions, ADRs and workshop evidence |
| Design state | Proposed logical Intelex configuration, ready for design review; not a deployed application or an importable package |
| Decision authority | [42 current confirmed requirements and one superseded decision](../target-requirements-decisions.json) |
| Product baseline | [Package-derived OOTB technical specification](../ootb-ppap-baseline-model/ppap-ootb-technical-specification.md), preserved unchanged |
| Principal outstanding source | `PPAP-INPUT-001`: controlled SIA PPAP procedure, IntelliQuest library, and requirement/template/classification matrix |
| Scope boundary | New PPAPs only; existing APQP behavior preserved; PPAP-side PCR and inspection interfaces included |

## 1. Resulting solution

The target provides an approval package for **one manufacturing facility, one drawing/revision context and an explicit set of included parts**. The responsible engineer prepares and explicitly issues the package. Governed elements then progress independently through supplier or internal work and engineer review. Important-safety content requires a further explicit management approval; other classifications affect evidence requirements. Final approval closes the package and produces a controlled PDF certificate.

The design retains the existing concrete `APQP_PPAPAbstractObject` and its direct inheritance from `ProjectFwk_ProjectAbstractObject`. It introduces PPAP-specific elements, frozen evidence containers, configuration versions and scope associations rather than changing the shared APQP task/checklist lifecycle. The new `Target Configuration?` discriminator selects target behavior for new PPAPs. Existing packages, source files and historical records are not silently converted.

Every engineering change that requires PPAP creates **a new PPAP**, even when an earlier one is still open. The older PPAP normally continues against its original revision; the engineer may cancel it in an edge case. Non-engineering evidence corrections are different: an approved element in an open PPAP may be reopened for correction, while its last approved evidence snapshot remains reusable. Closed approved PPAPs cannot be reopened, cancelled or withdrawn in this release.

Issued manufacturing facility, drawing number, engineering revision context, selected parts, classification snapshots and requirement applicability are locked. Scope, requirement-set or applicable classification changes require cancellation and replacement. Schedule updates, eligible reassignment, controlled visibility handover and permitted evidence correction remain possible while work is open, with audit history.

## 2. Specification set and reading order

This entry document and the linked contracts form one specification. The field contract is the canonical definition of fields, relationship targets, requiredness, publication mappings, defaults and editability; supporting documents must not allocate competing fields.

| Deliverable | Contents |
|---|---|
| [Logical object model](ppap-target-object-model.md) | Four Mermaid partitions covering all modeled objects and active designed associations; direct inheritance and shared boundaries |
| [Canonical field contract](ppap-target-field-contract.md) | One numbered subsection per object and one row per active directly declared field or designed inverse grid; initial values under their own object |
| [Workflows and automation](ppap-workflows-and-automation.md) | Stages, termination states, actors, ordered actions, native services, publishing, scheduling, cancellation and retry semantics |
| [Interfaces, security and reporting](ppap-interfaces-security-and-reporting.md) | Shared authorities, separate operational BOMEX/ECS connection, central supplier eligibility, permission matrix, PCR/inspection boundaries and metric definitions |
| [Baseline change impact](ppap-baseline-change-impact.md) | Disposition of all 48 directly declared PPAP fields and 27 inherited Project Framework fields; handler/view changes and APQP safeguards |
| [Requirements and ADR traceability](ppap-requirements-and-adr-traceability.md) | All 42 confirmed decisions, the superseded decision, and all 18 PPAP ADR dispositions with acceptance links |
| [Acceptance scenarios](ppap-acceptance-scenarios.md) | 56 review and implementation acceptance scenarios; these are specifications, not executed test results |
| [Validation and open inputs](ppap-validation-and-open-inputs.md) | Static checks, material limitations, source/configuration inputs and tenant verification gates |
| [Machine-readable model](ppap-target-model.json) | Logical design identities, field properties, source IDs and object constraints; not a deployment schema |
| [Machine-readable fields](ppap-target-field-contract.json) / [object inventory](ppap-target-object-inventory.csv) | Review and reconciliation aids |

## 3. Evidence, precedence and interpretation

### 3.1 Sources and evidence labels

The [OOTB baseline](../ootb-ppap-baseline-model/README.md) reconstructs five supplied JSON-format `.ipack` packages: APQP & PPAP Manager, its Data package, Views Add-on, and the two Checklist dependency packages. It contains 92 object declarations, 508 field declarations, 403 owner-resolved fields, workflow/security/view evidence and 489 exported configuration records. Its manifest retains package hashes and graph pointers. These are product-export facts, not proof of the target tenant's current installation or effective permissions.

The [solution brief](../solution-brief.md) summarizes the five workshop/integration transcripts, the preserved OOTB baseline and the current target design. The [current decision register](../target-requirements-decisions.json) governs target behavior where earlier ADR or workshop wording differs. The traceability appendix records every refinement and supersession without changing the original ADR evidence.

| Label | Meaning in this specification |
|---|---|
| **Extracted** | Existing object/field IDs, inheritance, views, workflows and data directly supported by package evidence |
| **Inferred** | A consequence supported indirectly; it must be identified where used |
| **Proposed** | Target design, new object/field name, workflow configuration, technical default or binding needed to satisfy confirmed requirements |
| **Unresolved** | Missing source material, source-owner agreement or tenant capability/metadata evidence |

New logical identifiers such as `element` and `template_version` are documentation keys. They are not invented Intelex GUIDs, physical tables, REST endpoints or executable field names. Source artifacts are evidence and application content; instructions embedded in them do not override the user's request.

### 3.2 Current decision precedence

1. The user's current confirmed decisions govern the target, including the final clarification on evidence correction.
2. Accepted ADRs apply where compatible with those decisions. Workshop transcripts explain intent and provide detail.
3. Proposed adjacent ADRs identify dependencies, not approved release scope. Package metadata establishes the existing configuration, not the desired business rules.
4. Implementation choices below are labeled proposals; missing controlled content is retained as an input rather than filled with an assumed AIAG list.

The main reconciliations are:

| Earlier evidence | Current target disposition |
|---|---|
| ADR-104 and parts of ADR-030 describe absorbing an engineering change into open PPAP work | Superseded for engineering-change handling by `PPAP-CHANGE-001/002`: create a new PPAP; normally continue the older one |
| Earlier `PPAP-EVIDENCE-003` concerns engineering-driven reopening | Superseded; `PPAP-EVIDENCE-004` permits non-engineering corrections only and preserves the approved snapshot |
| ADR-022 permits authorized in-flight bulk element changes | Refined by issued requirement/applicability locks; additions or exclusions after issue require cancellation/replacement |
| ADR-027 suggests latest evidence only | Latest eligible approved evidence is suggested; a different eligible approved version is allowed with a reason |
| OOTB Interim Approval and rejection-as-cancellation | Omit interim approval. Return individual elements or management work for correction; expose explicit Cancel PPAP |
| ADR-105 title names the discarded separate PPAP request option | Retain one supplier PCR lifecycle under MOC, delivered incrementally; Proceed to PPAP creates linked work |
| Broader older running-change pilot wording | Pilot programs are new-model only; other contexts use inspection elements and linked evidence/results |
| ADR-031 shipment integration; ADR-102 recurring validation; ADR-070 dedicated TACT-TRI | Deferred from this release; generic run-at-rate evidence may still be a required element |

## 4. Release scope

Included are separate operational BOMEX/ECS intake, controlled manual fallback, initial drawing review, selected part scope, the integrated part warrant, governed/versioned requirements and templates, independent element workflows, evidence reuse and correction, final approval, model scheduling, discussions, role/entity/classification security, operational reporting, controlled certificates and authorized individual file downloads. PPAP-side launch/outcome interfaces to PCR, APQP and specialist inspections are included.

Existing APQP behavior, Project Framework base contracts and the isolated Product Integration application remain under their own authorities. Implementing whole PCR, inspection, pilot, supplier-status or scorecard applications is outside this PPAP specification. Shipment integration, recurring post-approval validation, a dedicated TACT-TRI application, consolidated evidence-package downloads, additional electronic signing and post-approval withdrawal are outside this release.

Only new operational PPAPs are in scope. No active/historical PPAP records or reusable legacy evidence baseline will be migrated. New reusable evidence starts with fresh submissions approved in the target application. Reconciliation of SIA's configuration library is still required and is distinct from operational migration.

## 5. Logical architecture and ownership

### 5.1 Object responsibilities

| Family | Target responsibility |
|---|---|
| Existing PPAP and Project Framework inheritance | Preserve identity, existing responsible engineer field, native record number/workflow infrastructure and originating APQP links; replace PPAP-only orchestration |
| PPAP Part; PPAP Shipping Depot | Explicit included-part association with masses/classification snapshots, and separate contextual depot associations |
| PPAP Element; PPAP Answer | One native work/review workflow per required governed element; one editable answer per exact question version |
| PPAP Evidence Snapshot; PPAP Evidence Answer | Independent frozen file/answer content, submission/review facts and reuse lineage; preserve approved/rejected attempts |
| PPAP Requirement / Version; PPAP Question / Version | Stable governed element identity plus immutable published instructions, attachment rules, routing and typed checklist questions |
| PPAP Template / Version; PPAP Template Requirement / Version | Stable matrix authoring and complete immutable applicability/date-rule graph, referencing exact requirement versions |
| PPAP Operating Policy and concrete catalogues | Configurable reminder/review targets, governed pools and single-selection values; no extra custom workflow/audit/reminder records |
| PPAP Model Change; PPAP Model Date; PPAP Build Event | Governing model/program, phase-by-manufacturing-stage date matrix and separate physical-event start/end dates |
| PPAP Engineering Release / Part; PPAP Drawing Review | Accepted operational provenance and initial engineering decision before PPAP exists |
| PPAP Inspection Result Link; PPAP Pilot Program Link | Frozen specialist result context/acceptance and explicit new-model pilot launch associations |
| PPAP Discussion Thread / Post | Immutable audience boundary and append-only posted conversation/files |

Shared supplier, group, part, drawing, MOC, inspection and pilot objects remain external authorities. Their subsections identify the authority and unresolved native binding; they are not new masters. No change to external inheritance is inferred from similar names. Exact existing names containing “Parent” remain unchanged; record associations are not inheritance.

### 5.2 Native capability decisions

Use native workflow instances/stages/history for lifecycle and action actors; native audit for governed field/date/assignment changes; native attachment management for files; native notifications/reminders for delivery; and native integration execution evidence for errors and retries. Do not add a custom State, Audit, Event, Reminder Rule or transport-error object.

Evidence Snapshot is justified by the explicit requirement for **independent immutable multi-file copies with source lineage**, including eligibility of the prior approved snapshot during correction. A mutable attachment collection plus an audit log cannot safely supply that behavior. Requirement/Template Version objects are justified by frozen operational configuration. PPAP Engineering Release retains an accepted source graph used by approval; it is not another integration execution journal.

### 5.3 Retained product and APQP compatibility

The concrete PPAP GUID is `a99ca3b8-48ed-43eb-9696-a1dd26122c39`; its existing inheritance base GUID is `89351fdb-6445-4899-86da-d888a1787563`. No reparenting is proposed. Existing inherited Product, Supplier and Location fields retain their types; they are not repurposed as a drawing, manufacturing facility or current SRM entity. New target forms use Drawing Revision, Manufacturing Facility and PPAP Part instead.

`ProjectOwner` remains the sole responsible-engineer field. `SubmissionDate` remains the current overall PPAP due date, supplemented by an immutable Issued Overall Due Date. Existing Project Framework task counters/progress, shared checklist generation, singular Product selectors, PSW upload assumptions and stage weights do not govern target completion. Target progress queries required PPAP Element workflows.

Shared handlers operating on PPAP or its work must resolve a typed target PPAP reference and inspect `Target Configuration?`. Pre-PPAP intake/drawing review and configuration publication use their own governed target authorization and do not require an existing PPAP. Do not invent a runtime subtype function or assume a base handler can read descendant fields. The safe lookup/binding is a tenant gate. New target PPAPs use a PPAP-only native workflow schema; preserve existing schema instances. Prove new-record schema selection before deployment.

The baseline's Auto Close Related Task workflow currently treats both completion and cancellation as successful fulfilment. Replace its **target branch**: actual approval emits success; cancellation emits a cancelled outcome and notifies the originating owner. Never set the linked task completed or not-required merely because PPAP cancelled. The existing inverse collection `Task.PPAPs` can contain multiple PPAPs; leave the legacy singular `RelatedPPAP` untouched for target concurrency. A single explicitly bound obligation may complete on its PPAP approval. With multiple linked PPAPs, require the originating adapter/owner to resolve required scope before completing the task; do not close on the first approval. See the field-by-field [impact appendix](ppap-baseline-change-impact.md).

## 6. Source intake, initial review and initiation

### 6.1 Separate operational connection

Automated BOMEX/ECS intake is a first-release requirement, with a restricted manual fallback. It is a **separate operational connection**, not an extension of the isolated eleven-object Product Integration component. The [interface contract](ppap-interfaces-security-and-reporting.md#3-separate-operational-bomexecs-intake) lists semantic inputs and unknown wire mappings. No endpoint, payload property name or operational GUID has been fabricated.

The operational service validates source identity, release evidence, explicit drawing/revision identity, affected part mapping, source classifications and role-routing context. It writes a complete accepted PPAP Engineering Release/Part graph and creates one initial PPAP Drawing Review for each applicable canonical released SIA drawing context. Replay must reuse that review. Missing transport/mapping/assignee data is owned integration work with native diagnostics; it must not assign the record to the creator or infer revision sequence from ECS numbering.

Unknown/conflicting criticality may be reconciled during review and draft preparation but **blocks Issue**. Preserve explicit unknowns; do not convert missing flags to FALSE. Applicable drawing-level criticality must be represented in the authoritative effective per-part assertions; agree source precedence/provenance with the producer instead of resolving a drawing/part conflict inside PPAP. Accepted source context is immutable. Later source corrections create controlled replacement source context linked through Corrects Release; they do not overwrite the graph referenced by issued/approved packages or duplicate the initial review of the same canonical released change.

All PPAP origins require accepted authoritative drawing/part provenance before Issue. A process-change PCR can reference the **existing** released drawing context; it need not manufacture a new ECS. Controlled intake captures/reconciles an existing source context if it is not yet available. Manufacturing scope is selected from authorized source relationships, never from a free-text facility name or isolated source-local reference.

### 6.2 Initial drawing review

The initial review belongs to the governed current internal engineer role for its exact routing entity and change type. The due date is drawing release date plus 14 calendar days. An overdue date is allowed with a warning.

PPAP Required? defaults TRUE. A no-PPAP outcome requires an active governed exception reason and meaningful rationale. Exception-reason contents are pending the SIA controlled procedure. A link to an already-created PPAP is allowed only to reconcile the **same source change** and intended scope; it cannot absorb a different new change into an older open PPAP.

The engineer explicitly decides inspection-specification review need. When needed, completion requires a linked **released inspection specification version** covering the affected drawing/revision/parts; free text or a promise of later review is insufficient. Product Management owns that version lifecycle. This checkpoint does not require all subsequent pilot/inspection execution to finish, and it does not create a pilot program automatically.

Launch PPAP creates internal draft work with the source review link. Multiple manufacturing facilities may need separate PPAPs from the reviewed drawing context. The initial review is drawing-scoped; the resulting approval packages are facility-scoped. The producer mapping and controlled procedure must identify applicable candidate entities; no unsupported automatic all-facility generation is assumed.

### 6.3 Other initiation paths

MOC's authorized Proceed to PPAP decision launches a linked process-change PPAP idempotently, preserving PCR decision correlation and scope. It does not authorize shipment, create a separate supplier request lifecycle or complete the originating PCR. APQP may launch linked PPAP through the existing Integrated Task relationship. Restricted manual initiation uses the same source validation, internal draft, Issue and supplier-confirmation rules as automated work.

## 7. Configuration, scope and issue

### 7.1 Authoritative library and publication

The controlled SIA procedure and current IntelliQuest library govern target requirement types, categories, questions, instructions, attachment rules, protection, templates, classifications, routing and date offsets. The OOTB 18 checklist elements and five level templates are reconciliation inputs, not the approved target seed set. No parity or target-library completeness is claimed until `PPAP-INPUT-001` is supplied.

Requirement publication copies every authoring field, question component and instruction attachment into one immutable version graph. Template publication copies every authoring matrix row and resolves its stable Requirement reference to an exact active Requirement Version. Per-field mappings are in the canonical tables. Version numbering starts at 1 and increments within the stable authoring identity under lock. Copied Code may repeat between versions; authoring Code is the stable unique key. Publication switches active versions atomically. If the tenant cannot atomically publish the graph and files, keep it unavailable until verified complete and expose no partial active version; that mechanism is a build gate.

Templates reference stable requirement identities during authoring. Initialization stores the exact Template Version and Requirement Versions. Later publications affect new initialization only. Deactivation prevents new selection/generation and preserves historical references. New authoring content cannot rewrite issued instructions/questions/files.

### 7.2 Draft assembly and applicability

The engineer selects active drawing-associated parts and exactly one manufacturing facility. Each model-change PPAP has one governing Model Change and one Manufacturing Stage. Other PPAP types may use explicit model context or independent dates.

Initialize Elements creates one row per governed template requirement, evaluates the union of applicable safety/quality/regulated triggers, and preserves the exact template row/version. The engineer can add an **existing published governed requirement** before Issue with a reason and explicit date rule. Arbitrary ad hoc requirement types are not permitted. Unique PPAP + stable Requirement identity prevents duplicates.

Unprotected defaults may be marked Not Required in Draft with a reason. Requirements protected by the SIA procedure or applicable classification cannot be waived. Excluded rows remain as issue-scope evidence but receive no operational workflow/reminders. Suppliers may request N/A through discussion; they cannot waive a requirement. After Issue, an N/A request that would change applicability requires cancellation/replacement, rather than editing the issued requirement set.

Every PPAP includes the SIA-mandated data-review requirement; source-backed identity and content await the controlled library. Part review and joint inspection use the governed setup/template rules. An inactive/missing configuration value, missing version, unresolved mandate or required empty role is an actionable setup error, never silent fallback.

### 7.3 Issue gate and supplier confirmation

Issue is an explicit responsible-engineer action. Recheck current authorization, supplier capability and optimistic concurrency, then validate:

- One manufacturing facility; exact accepted drawing/revision source; at least one included part; each source-part relationship matches that part and the selected release/drawing context.
- All three criticality flags are explicit, authoritative and conflict-free for all included parts. The combined requirement set matches the approved matrix and protected requirements remain required.
- A complete exact published configuration graph, correct type/model/stage context, and no unresolved replacement requirement.
- Overall due date and an Effective Due Date for **every required supplier and internal element**. Past dates require a visible warning, not a blocking age rule.
- The responsible engineer and all required role/team assignments are valid with current eligible members; important-safety work has a governed management pool.
- Initial review is complete where applicable; the required released inspection specification checkpoint is satisfied.

Issue freezes scope/configuration/criticality and original due baselines, stamps actor/time, starts only required element workflows and sends supplier/internal assignment notifications. Supplier access begins only within existing entity and visibility permissions. Drafts are internal, including files, related records and direct URLs.

An authorized supplier confirms the manufacturing facility, drawing and included parts once before its first supplier-element Submit. Masses are not required at this confirmation. Internal work may proceed without supplier confirmation. Confirmation is evidence of the frozen scope; it does not broaden access or permit later scope amendment.

## 8. Element execution, evidence and approval

### 8.1 Work and review

Each required element has its own native workflow. Reusable patterns cover supplier submission, internal engineer work, inspection-team work and joint inspection. Proposed joint-work accountability is one designated internal inspection team/individual coordinating the joint evidence, followed by engineer review; the SIA matrix must reconcile any required separate participant acknowledgments before publication. A supplier-facing assignment uses the exact governed depot/entity PPAP coordinator role. Internal-only work remains hidden from suppliers.

Submit validates required typed answers, minimum/allowed files, result/version references and the supplier scope gate when applicable. It freezes a new evidence snapshot and transitions only that element to Engineer Review. The responsible engineer may approve their own internal work, but supplier work always needs internal review. Return Element requires assignee-visible feedback, retains the rejected snapshot internally and returns only that element for correction. Native immutable action history supplies the rejection log; show each rejection's actor/time/comment grouped by element and total count in the PPAP and management views.

Working answers use one record per Element + Question Version. Optional questions remain visible for their matching answer type. Nonmatching typed fields are NULL; FALSE and numeric zero are valid answers. Submission copies typed values and files into the snapshot. Reworking the current answer never rewrites previous submitted answers/files.

Only inspection/run-at-rate results explicitly required by an element gate its acceptance. The engineer accepts the relevant result/version; unrelated pilot failures do not automatically block PPAP. If the external result is mutable, retain a controlled result artifact within the evidence snapshot. New-model pilot programs are launched deliberately from PPAP and the correct model Build Event; running/process-change PPAPs use inspection elements/results without creating pilot programs.

### 8.2 Evidence reuse and correction

Retain Evidence is an explicit engineer action. Eligible candidates have an approved snapshot, the same Manufacturing Facility, Drawing Number and stable Requirement identity, and a source PPAP that is not cancelled. The engineer confirms revision and included-part compatibility; identical revision or identical selected-part set is not mandatory. Suggest the latest eligible approved snapshot, ordered by approval timestamp with stable identity as a tie breaker. Selecting another eligible version requires a reason.

Copy files, typed answers, relevant result evidence and source lineage into an independent receiving snapshot before marking the receiving element approved. Do not reference a shared mutable file container or silently expose the source PPAP. Version-specific question answers preserve their source question versions; where receiving questions differ, the engineer must reconcile required receiving answers before retention completes. No fresh supplier-submission metric is manufactured by retention.

An approved element may reopen only while PPAP is In Progress, for a non-engineering evidence correction or after management return. Require a reason, preserve the old approved snapshot, prepare new working content and block overall completion until the replacement work is reviewed. The prior approved snapshot remains eligible elsewhere while correction proceeds; replacement evidence becomes eligible only after its own approval. Rejected evidence remains retained internal history but is not a baseline candidate.

Cancellation excludes that source PPAP's evidence from future suggestions **and manual retention**, without an administrator exception. Existing receiving copies/history remain unchanged. Their own later eligibility uses their owning PPAP and immutable approval facts; no unrequested retrospective withdrawal or automatic transitive invalidation is introduced. All reuse still requires engineer compatibility confirmation and retained lineage.

### 8.3 Part warrant and final approval

Before Complete PPAP, every included part requires Average Actual Mass (kg) > 0 and Average Metal Mass (kg) between 0 and actual mass inclusive. Both values are required. Zero metal mass confirms no metal; NULL means unknown. These are integrated part values, not a separate uploaded PSW. Supplier values are audited and freeze for final review; management return permits coordinated non-scope correction while open with supplier-safe instructions, then refreezes values on resubmission.

Complete PPAP requires every required element approved, no pending correction/replacement, current supplier eligibility and valid mass data. If no included part is important-safety, the responsible engineer's action approves/closes the PPAP. If any part is important-safety, the action enters Management Review with a selected currently eligible final approver. Important-quality or regulated content alone does not trigger that stage.

Management Review locks supplier evidence and warrant editing. Approve PPAP rechecks current pool membership and closes explicitly; the engineer can perform this action if they belong to the pool. Return for More Information requires an internal comment and returns PPAP to In Progress without invalidating unrelated approved elements. The engineer decides which permitted corrections to request with separate supplier-safe feedback. The supplier sees pending/in-progress status, not internal management commentary. No automatic approval, extra signing step, segregation-of-duties restriction or interim approval is added.

### 8.4 Cancellation and closed records

Responsible engineers and designated PPAP administrators can Cancel PPAP while open with a mandatory reason. Stop only outstanding element work and reminders; preserve already completed/cancelled work, files, answers, all approvals, submissions and discussion. Complete the cascade and durably queue the originating cancelled outcome before terminal commit; deliver it afterward with retry. A partial technical failure leaves a retryable action with native diagnostics; never report successful cancellation while work remains actionable.

New engineering changes do not automatically cancel older PPAPs. Applicable source-classification corrections to an issued open PPAP require engineer cancellation/replacement; place the affected package on a finalization hold and notify the owner. Corrections belonging to a different new engineering revision do not alter the old PPAP. Closed approved packages remain immutable. All discussions become read only after approval or cancellation, including internal replies and file additions.

## 9. Scheduling, notifications and historical metrics

Use calendar days. Model leads maintain one PPAP Model Date per Model Change + Phase + Manufacturing Stage. Template offsets produce calculated dates from that cell. Effective Due Date uses an explicit authorized Manual Due Date when present; otherwise it uses the calculated date. Individual overrides remain audited until explicitly cleared. This proposed precedence resolves the ADR-108 individual/bulk date-edit capability without overwriting the model source.

Model-date changes recalculate only open connected work with the matching model/phase/stage, including prepared Draft elements; Issue refreshes/validates the current calculation before freezing its baseline. Engineers may move selected open, schedule-connected elements to another schedule phase for one model change, with a warning/reason, valid destination matrix cell and clearing of incompatible manual dates. Exclude disconnected work from this bulk action until explicitly reconnected. This changes operational scheduling, not issued requirement membership/applicability or historical template lineage. Preserve issued baselines, completed elements and closed PPAPs. A PPAP may Disconnect with a warning/reason and retain current effective dates as its manual dates. Reconnect warns that calculated dates will replace disconnected manual dates; clear those overrides deliberately, recompute open work and retain history. Reconnection does not change immutable scope/model-stage context. A complete date change audit must retain prior/new value, actor, time and reason; verify native audit sufficiency instead of adding a custom date-log object.

Engineer review targets are 5 calendar days from each submission/resubmission; management review targets are 5 calendar days from each final submission/resubmission. These dates are separate from supplier completion commitments. Defaults are configurable. Missing review targets never imply approval.

Native reminders default to 3 calendar days before due, on the due date and weekly overdue, with escalation after 7 overdue days. Supplier work escalates to the PPAP engineer; internal work/review/final approval escalates to PPAP administrators. Reminder scans use a governed business timezone, not the workstation timezone. Notify only current eligible assignees; do not automatically reassign or cancel work. Exact cadence, deduplication and retry rules are in the automation contract.

For supplier timeliness, preserve **both** issued baseline and effective operational due date at the **first complete supplier-element submission**. Mandatory answer/file checks must pass before that event is recorded. Rejection and later acceptance do not rewrite it. Cancellation before first complete submission excludes the work from that denominator; cancellation afterward preserves the event. Retained/internal work is identified separately. Reports expose both comparisons and quality/rework facts without inventing scorecard weighting or double-counting a submission. Scorecard configuration, participation and published snapshots remain under the scorecard authority.

Business timezone and scorecard cohort/period mapping require agreement before report activation. Calendar date comparisons should treat the whole due date as timely in the agreed zone; this is the proposed operational convention, not a confirmed upstream timestamp rule. See [metric definitions and examples](ppap-interfaces-security-and-reporting.md#6-reporting-and-metric-definitions).

## 10. Security, conversation, experience and outputs

Use the central supplier capability policy for exact manufacturing facility, company restrictions and routed entities. Service Parts Only suppliers may perform service-related PPAP work, while mass-production new work is blocked. Status changes do not automatically cancel PPAP. The shared status specification's annotated open-work transition gate remains its owner's unresolved binding; PPAP must not silently implement a competing lifecycle policy.

At action time, resolve exact Supplier Abstract + Supplier Management Role to one Supplier Specific Role and current eligible members. No company-to-facility/depot fallback is allowed. Empty or duplicate required roles block issue/assignment with an actionable message. Preserve the group responsible and the actual individual actor. Engineer/team reassignment is authorized, audited and notified; notification recipients never gain access merely by being selected. Governed ADR-084 security handover can change access metadata on open or closed records without changing approved content, certificates, workflow or ownership; audit that exception to ordinary closed-content editing restrictions.

Enable native security/audit on governed target records and relevant relationships. Enforce draft invisibility, internal element/history restrictions, supplier entity scope, record visibility classification, immutable evidence and closed-record restrictions at forms, direct URLs, APIs/imports, exports, search, relationship navigation and attachment download. OOTB view read-only styling and inherited ACL declarations are not sufficient proof. See the [security matrix](ppap-interfaces-security-and-reporting.md#52-stage-and-role-matrix).

Discussion uses the ADR-107 accepted **separate immutable-audience thread** approach. Internal users may create internal or authorized supplier-visible threads; suppliers create supplier-visible threads only. Replies inherit thread visibility, and internal threads cannot become external. Each posted comment requires text context; files may accompany it. Body/files are append-only after posting; corrections use a new reply. Both audiences become read only after PPAP approval/cancellation. Preparing before Post is allowed. Posts do not create workflow tasks.

The browser workspace connects scope, part warrant, elements, files, history, schedule and discussion without a disconnected mobile build. Use responsive forms/grids on desktop, tablet and phone; retain accessible labels, keyboard navigation, validation messages and secure download behavior. English is the launch language for forms, instructions, notifications and certificates. Catalogue Name and user-facing configuration text support future localization; stable Codes are never translated.

Approval generates a controlled PDF showing PPAP reference, approved manufacturing facility/supplier identity, drawing/revision, complete included parts, approval date/outcome and actual authority. Snapshot the approved facility, supplier and actual authority display labels at the approval action, alongside stable relationships and frozen part/drawing context, so later master-data/name changes cannot rewrite rendering. Include an opaque certificate reference and an authenticated verification link; a QR code is optional if the tenant can render it safely. No public verification endpoint or withdrawal state is assumed. The output must match frozen approved data, never latest mutable master content. Authorized suppliers can download the PDF and individual authorized files. Internal comments, rejected internal history and other suppliers' evidence must not appear. Bulk evidence packaging is deferred.

## 11. Nonfunctional and operational contract

| Area | Target |
|---|---|
| Planning volume | Approximately 1,500 PPAPs/year and 200 active; approximately one concurrent user is a planning estimate, not a single-user limit |
| File profile | Average 1.5 files/element, average 1 MB/file; no specialist formats expected; verify tenant maximums rather than treating the average as a limit |
| Capacity calculation | If the final SIA matrix averages E elements per PPAP, new primary element files are approximately `2,250 × E MB/year` (decimal MB), before rejected/resubmitted attempts, retained copies, instruction files, discussion, PDFs, platform metadata and backup factors |
| Concurrency | Still enforce optimistic locking, unique generation/publication keys and idempotency even with low estimated human concurrency; integration/schedulers can overlap |
| Retention | No automatic deletion of operational records, approved/rejected evidence, discussion or certificates in release 1; no invented legal retention period |
| Security | Least-privilege service access and object/file authorization on every access channel; role membership and lifecycle eligibility rechecked on actions |
| Historical correctness | Immutable configuration/source/evidence snapshots; native audit on mutable operational data; preserved issued dates and completed history |
| Recovery | Retry-safe generation/publication/cancellation/output actions using native execution evidence and owned diagnostics; no silent partial success |
| Performance verification | Exercise representative 200-active worklists and realistic file/history volumes; no measured response SLA is claimed without tenant evidence |

Index supported relationship and filter keys for source identity, PPAP scope, workflow instance, element requirement identity, version identity and model date keys where the tenant permits it. Verify query plans/limits rather than inventing physical database constraints. No external file store, specialist viewer or bespoke audit platform is required by current evidence.

## 12. Review and implementation readiness

The target design is reviewable with explicit fields, relationships, actions, publication mappings, change impacts and acceptance criteria. It is not yet a source-complete build baseline because the controlled SIA library has not been supplied and several external/tenant bindings are unverified. These are listed with owners, impact and exit evidence in [validation and open inputs](ppap-validation-and-open-inputs.md).

Before configuration is released, reconcile the SIA library row by row; allocate/verify actual metadata IDs; prove target-only schema/handler guards; agree operational payload, identity and correction semantics; bind roles, timezone and central capability adapters; verify native reopen/audit/transaction/file mechanisms; and execute the acceptance scenarios. Preserve all source packages and the OOTB baseline. This specification does not promote the target to a replacement baseline or claim those runtime checks have passed.
