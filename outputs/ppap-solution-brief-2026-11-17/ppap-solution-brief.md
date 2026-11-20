# PPAP Solution Brief

**Subaru of Indiana Automotive | Intelex Phase 2 | Draft for review | 17 November 2026**

## 1 Solution and release scope

The Production Part Approval Process (PPAP) application will provide one controlled approval package for **one manufacturing facility, one drawing and engineering revision context, and an explicit set of included part numbers**. It will bring supplier evidence, internal work, inspection results, review decisions and approval history into a connected Intelex workspace. Shipping depots will be linked separately for context and routing; using another depot will not by itself require another approval package. [1, 2, 4]

The business objective is to make approval scope clear, reduce repeated submission of unchanged evidence, and show who must act next. Independent element workflows will let work proceed in parallel while maintaining an explicit engineer decision for each requirement. Suppliers will receive a controlled PDF certificate of the actual approval rather than relying on screenshots. [2, 4, 5]

| Included in the first release | Deferred or outside this release |
|---|---|
| Automated operational BOMEX/ECS intake, controlled manual fallback and initial drawing review | Shipment/ASN integration and shipping-compliance controls |
| Internal draft preparation, explicit issue, supplier scope confirmation and integrated part warrant | Recurring post-approval validation and a dedicated TACT-TRI application |
| Governed requirements and templates, independent elements, approved-evidence reuse and controlled correction | Consolidated evidence downloads and additional electronic signing |
| Model scheduling, secure discussion, operational reports and PDF approval certificates | Migration of active/historical legacy PPAPs or their approved-evidence baseline |
| PPAP-side connections to MOC PCR, APQP and specialist inspections/pilot work | Delivery of the complete connected applications and changes to existing APQP behavior |

The solution starts with new PPAPs and builds its reusable evidence baseline through new submissions and approvals. Reconciliation of the existing SIA configuration library remains required even though operational migration is excluded. English is the launch language. [1, 2]

The current confirmed requirements govern this brief where older workshop discussions or ADR wording differ. **Each engineering change that requires PPAP starts a new PPAP**, including when an earlier package remains open. Issued scope, classifications and requirement applicability are locked. Interim approval is excluded. The target remains a proposed configuration requiring source reconciliation and tenant verification. [1, 2, 6]

## 2 Approval process

**Receive and review engineering context.** Automated BOMEX/ECS intake will create a source-linked initial drawing review for each applicable released drawing context. A restricted manual fallback uses the same identity and reconciliation rules. The engineer has a 14-calendar-day review target from drawing release. PPAP Required defaults to Yes; a no-PPAP decision needs a governed exception reason and rationale. Where inspection-specification review is needed, completion must link the released specification version covering the affected scope. [2, 4, 5]

**Prepare an internal draft.** The responsible engineer selects the manufacturing facility, drawing/revision, active included parts and published template. Model-change PPAPs use one governing model/program and one manufacturing stage. The template supplies governed requirements, instructions, questions, attachments, routing and date offsets. Authoritative important-safety, important-quality and regulated classifications determine the combined requirements. Unknown or conflicting classifications block issue. [1, 2]

**Issue explicitly and confirm scope.** Issue PPAP validates source provenance, required elements, assignments, overall and element due dates, and protected requirements. It freezes scope, configuration versions, classifications and original deadlines, starts required work and sends assignment notices. Drafts remain internal. Before the first supplier-element submission, an authorized supplier confirms the facility, drawing and included parts. Internal work may proceed independently. [1, 2]

**Complete and review elements.** Supplier, engineering, inspection-team and joint-inspection patterns route each requirement to its responsible role or team. Submission validates required answers/files and freezes the evidence. The engineer approves or returns that element with visible feedback; unrelated approved elements remain accepted. Internal work also requires engineer review, with self-review permitted. Detailed measurements remain in specialist applications; PPAP accepts the exact result/version or retained result artifact required by the element. [2, 4]

**Complete the warrant and approve.** Each included part requires average actual mass above zero and average metal mass from zero to actual mass, both in kilograms. These values form the integrated warrant. Complete PPAP requires all required elements approved, valid masses, no pending correction and current supplier eligibility. If any included part is important-safety, the package enters Management Review. Otherwise, the engineer's completion action approves and closes it. Important-quality or regulated content alone does not trigger management approval. [1, 2, 4]

**Resolve management feedback and close.** A currently eligible approver can approve or Return for More Information with a mandatory internal comment. The engineer coordinates permitted corrections with supplier-safe feedback. Suppliers see pending/in-progress work without internal management commentary. Actual approval generates the controlled PDF certificate and approved outcome for originating work. Closed approved content remains immutable. [1, 2, 4]

## 3 Evidence and lifecycle controls

**Govern the requirement library.** Stable requirement and template identities will have immutable published versions. Each package retains its exact versions, including questions, instructions and files. New publications apply to new initialization. Engineers may add an existing published requirement or exclude an unprotected default in Draft with a reason. Protected requirements cannot be waived. After issue, scope, classification or applicability changes require cancellation and replacement. Suppliers may request N/A through discussion but cannot waive requirements. The controlled SIA procedure and IntelliQuest library govern final content; the OOTB 18-element/five-level configuration is a reconciliation input. [1, 2, 3]

**Reuse approved evidence deliberately.** The engineer may retain an approved snapshot from the same manufacturing facility, drawing number and stable requirement identity, confirming revision and included-part compatibility. The latest eligible snapshot is suggested; another eligible approved version may be selected with a reason. Files, answers, relevant result evidence and lineage are copied into an independent receiving snapshot. A source PPAP that is cancelled is ineligible for future reuse. Rejected submissions remain internal history and are never reuse candidates. [1, 2, 4]

**Separate correction from engineering change.** An approved element may reopen for non-engineering evidence correction while PPAP is In Progress, including after management return. Its previous approved snapshot remains reusable under the compatibility rules while correction proceeds; replacement evidence becomes reusable only after approval. Completion is blocked until correction is resolved. An engineering change requiring approval creates a whole new PPAP with its own context, issue, confirmation and metrics. The older package normally continues for its original revision. Concurrent packages remain explicitly scoped and sequenced by people. [1, 2, 4]

**Cancel without reporting success.** The responsible engineer or designated PPAP administrator may Cancel PPAP while open with a mandatory reason. Cancellation stops outstanding work and reminders, preserves evidence/history, and informs originating PCR/APQP owners of the cancelled outcome. It must not complete an originating obligation or issue a certificate. Previously copied evidence in other packages remains unchanged. Closed approved packages cannot be reopened, cancelled or withdrawn in this release. Records, evidence, discussion and certificates have no automatic deletion. [1, 2, 3]

## 4 Changes to the product baseline

The supplied product provides a reusable foundation, but the target requires substantial PPAP-specific configuration. This comparison uses the package-derived OOTB technical baseline; it does not assert the target tenant's installed behavior. The shared Project Framework and existing APQP process must be preserved. [2, 3]

| Area | Supplied OOTB baseline | Proposed target disposition |
|---|---|---|
| Core framework | Concrete PPAP object inherits Project Abstract; shared tasks, templates and contributors | Reuse object identity, direct inheritance, responsible engineer, native record/workflow facilities and APQP links. Separate new target behavior. |
| Approval scope | One Item Revision and a Public Profile supplier reference | Extend to one manufacturing facility, drawing/revision and included parts, with contextual depots and part-level warrant values. |
| Lifecycle | Draft, In Progress, In Review and Interim Approval; Reject cancels | Replace target orchestration with Draft, In Progress and conditional Management Review; Approved/Cancelled outcomes and returns for correction. |
| Requirements and evidence | Shared project/checklist tasks; five level templates with 18 assignments each | Introduce PPAP elements, versioned requirement/template graphs, typed answers and independent immutable evidence snapshots. |
| Completion and integration | Shared task counts/progress; linked task completes on approval or cancellation | Gate completion on required element approvals. Distinguish approval/cancellation outcomes; resolve multiple PPAP obligations explicitly. |
| Scheduling and reporting | Project phases, stage dates and weighted progress | Add model phase/stage dates, physical build events, issued/current deadlines and workflow worklists; separate first-submission timing and rework. |
| Outputs and access | PSW fields/mail merge; completed views expose EditReadOnly; referenced PSW template absent | Use integrated warrant and controlled PDF. Enforce locks and permissions on records, actions, APIs and files as well as forms. |

The retained PPAP object is the implementation anchor. PPAP-owned structures will hold additional scope, configuration, evidence, source review, scheduling and discussion responsibilities. Native workflow history, audit, notifications and integration diagnostics provide lifecycle and operational traceability. Supplier, part, drawing, MOC and inspection records remain under their own application authorities. [2, 3]

## 5 Ownership and operating controls

**Responsibility and access.** The SIA responsible engineer owns the package. Supplier work routes through the governed PPAP coordinator role for the exact routed supplier/depot entity; internal ownership follows the change context. Missing or ambiguous required roles block issue or assignment. Keep the responsible group distinct from the individual who acts. Supplier entity, classification, stage and file permissions apply across direct links, APIs, search, exports and downloads. Controlled visibility handover may change access without changing approved content or unfinished-work ownership. [2, 4]

**Scheduling and reminders.** Model leads maintain phase-by-manufacturing-stage dates; template offsets calculate connected deadlines. Authorized overrides and schedule disconnection/reconnection are audited and preserve issued baselines. Shared updates affect eligible open connected work and preserve completed history. Engineer and management reviews default to five calendar days from each submission/resubmission. Reminders default to three days before due, on the due date and weekly overdue, with escalation after seven overdue days. Review/reminder defaults are configurable; a missed target never grants approval. The SIA business timezone still requires agreement. [1, 2]

**Collaboration and reporting.** Separate threads have immutable internal or supplier-visible audiences. Posted comments/files are append-only; corrections use replies. All discussion becomes read-only after approval or cancellation. Responsive connected browser forms support desktop, tablet and phone. Workflow worklists show stage, responsibility, deadlines, overdue work and review history. Supplier timeliness uses the first complete element submission against both the issued baseline and the operational deadline then in force. Rework is separate. Cancellation before that event is excluded from the denominator; cancellation afterward preserves it. Scorecard weighting and publication remain separately governed. [1, 2, 4]

| Connection | PPAP responsibility and boundary |
|---|---|
| BOMEX/ECS and Product Management | Receive authoritative released drawing/part/classification context through a separate operational connection. Preserve isolated Product Integration. Reconcile replays/corrections without duplicate obligations. |
| SRM | Consume governed facility/depot relationships, current role membership, visibility and supplier capability. Status changes do not automatically cancel PPAP. |
| MOC PCR and APQP | Receive authorized launches and return scoped approved/cancelled outcomes. Supplier PCR remains one lifecycle under MOC; Proceed to PPAP does not authorize shipment. |
| Inspection and Pilot Part Data | Link exact released specifications and required results. Deliberately launch pilot work only for new-model context and its build event; other changes use inspection elements/results. |

## 6 Dependencies and release readiness

The target specification provides a reviewable logical design, canonical fields, baseline impacts and 56 acceptance scenarios. These are specified checks, not executed tenant tests. The principal remaining source dependency is **PPAP-INPUT-001**, the controlled SIA PPAP procedure, IntelliQuest requirement/question library, templates and classification matrix. The final requirement set, protected mandates, routing, attachment rules and offsets depend on this material. [2, 6]

| Dependency | Proposed accountable owner | Evidence needed before enabling the affected functionality |
|---|---|---|
| Controlled configuration library | SIA PPAP process owner | Versioned sources, reconciliation of OOTB content and approved initial requirement/template versions. |
| Engineering source and masters | SIA system development and Product Management | Payload, identity, revision and correction contract; verified part/drawing/classification mappings; manual fallback and replay examples. |
| Roles and security | SIA SRM/security owners and Intelex lead | Entity-role and management-pool bindings; supplier-status contract; tested record, export, file and handover permissions. |
| Native platform and APQP compatibility | Intelex technical lead | Target-only workflow/handler binding; immutable copies; safe publication, retry and cancellation; unchanged APQP/historical behavior. |
| Connected applications and outputs | MOC/APQP/inspection owners and SIA PPAP owner | Launch/outcome adapters, multiple-PPAP obligation rules, exact result retention, approved PDF layout and authenticated verification. |
| Operations and capacity | SIA PPAP owner and Intelex administrator | Timezone, reminder/report mappings, file limits and representative worklist/storage verification. |

Planning estimates are approximately 1,500 PPAPs per year, 200 active and one concurrent user, with an average 1.5 files per element at 1 MB per file. These are sizing assumptions, not limits. Storage must account for rejected/resubmitted evidence, independent retained copies, discussion, certificates and ongoing retention; element counts depend on the SIA matrix. [1, 2, 6]

The recommended build sequence is to confirm shared authorities and the controlled library, publish governed versions, configure source intake and PPAP workflows, then complete screens, permissions, outputs and reporting. Release requires resolved applicable source/binding gates and executed acceptance evidence, including APQP compatibility and direct file-access checks. [6]

## 7 Evidence and decision traceability

The current 42 confirmed requirements take precedence over earlier design wording. Accepted ADRs apply where compatible, transcripts explain intent, and the OOTB baseline records the supplied product. The target describes proposed configuration; no tenant deployment or runtime acceptance is claimed. [1, 2, 6]

| Source | Contribution |
|---|---|
| [1 Current confirmed requirements](../../docs/phase%202/ppap/target-requirements-decisions.json) | Release scope, engineering changes, locked scope, correction, cancellation, metrics and new-only rollout. One older evidence decision is superseded. |
| [2 Target technical specification](../../docs/phase%202/ppap/solution_specification/ppap-target-technical-specification.md) | Target structure/process and linked field, workflow, interface, reporting and acceptance contracts. |
| [3 OOTB technical baseline](../../docs/phase%202/ppap/ootb-ppap-baseline-model/ppap-ootb-technical-specification.md) and [change impact](../../docs/phase%202/ppap/solution_specification/ppap-baseline-change-impact.md) | Package-derived product facts, retained framework, required changes and APQP safeguards. |
| [4 Requirements and ADR traceability](../../docs/phase%202/ppap/solution_specification/ppap-requirements-and-adr-traceability.md) | All 18 PPAP ADR dispositions and reconciliation with current requirements. |
| [5 Meeting transcripts](../../docs/phase%202/ppap/raw_artifacts/meeting_transcripts/) | Workshops on 30 September and 1 October and the supplier PPAP integration meeting on 16 October 2026. |
| [6 Validation and open inputs](../../docs/phase%202/ppap/solution_specification/ppap-validation-and-open-inputs.md) | Source dependency, technical gates, suggested owners, exit evidence and verification limits. |

Meeting evidence establishes drawing review and governed requirements (30 September morning, 0:09:17 to 0:29:45), independent review and evidence reuse (30 September afternoon), management returns and discussion controls (1 October morning), and the single MOC-based supplier PCR direction (16 October, 11:55 to 14:15). The 1 October afternoon workshop adds cross-application and reporting context. Later confirmed requirements resolve differences in earlier discussions. [5]

The source ADR set contains 15 accepted records: ADR-021 through ADR-030, ADR-101, ADR-104, ADR-107, ADR-108 and ADR-110. Current requirements constrain their interpretation: ADR-104 and part of ADR-030 no longer govern absorption of new engineering changes, and ADR-022 does not permit changing issued applicability. Proposed ADR-031 shipment integration and ADR-102 recurring validation are deferred. Rejected ADR-105 records the discarded separate supplier-request boundary; the current PCR direction remains within MOC. [1, 4]

Individual transcripts: [30 September morning](../../docs/phase%202/ppap/raw_artifacts/meeting_transcripts/2026-09-30-phase-2a-design-workshop-day-2-morning.md), [30 September afternoon](../../docs/phase%202/ppap/raw_artifacts/meeting_transcripts/2026-09-30-phase-2a-design-workshop-day-2-afternoon.md), [1 October morning](../../docs/phase%202/ppap/raw_artifacts/meeting_transcripts/2026-10-01-phase-2a-design-workshop-day-3-morning.md), [1 October afternoon](../../docs/phase%202/ppap/raw_artifacts/meeting_transcripts/2026-10-01-phase-2a-design-workshop-day-3-afternoon.md), and [16 October integration](../../docs/phase%202/ppap/raw_artifacts/meeting_transcripts/2026-10-16-summit-ehsq-sia-integration-supplier-ppap.md).
