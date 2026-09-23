# Supplier Contact Request workflow — proposed target design

| Property | Value |
|---|---|
| Mode | New workflow design |
| Application/object | Supplier Relationship Management / Supplier Contact Request |
| Workflow | Supplier Contact Request |
| Model dependency | `solution_specification/object_model/user-access-request-logical-model.md` |
| Baseline dependency | OOTB Supplier Abstract, Supplier Parent Company, Supplier Facility, Supplier Contact, and existing Supplier Abstract–Supplier Contact M:N relationship |
| Requirements source | User design direction recorded in the current design conversation |
| API scope | Excluded. The workflow records Access Requested but does not initiate or describe API provisioning. |
| As of | 2026-09-21 |

## Executive flow summary

Any authenticated user with permission to create Supplier Contact Requests may prepare a Draft for one Supplier Parent Company, Supplier Facility, or depot represented through Supplier Abstract. When the request record is created, Intelex fetches the current Active Supplier Contact Request Settings parameters once and uses them to initialize its approval route, approver, and due-date behavior without storing the settings record or parameter snapshots on the request. Submit validates the contact data, supplier context, and duplicates, then evaluates the initialized approval route as part of the Draft-stage action. If approval is required, Submit transitions the record to Approval. If approval is not required, Submit runs the contact-creation operations and, when they succeed, completes the workflow with Workflow Status `Completed` and Status property `Closed`.

Successful automated processing creates one OOTB Supplier Contact, assigns its new authoritative Owning Supplier Entity relationship, and then synchronizes the existing OOTB M:N supplier-contact relationship used by inherited security. The workflow completes only after both relationships are established. Cancellation terminates the workflow with Workflow Status `Cancelled` and Status property `Cancelled`. Any validation, configuration, contact-creation, or relationship-synchronization failure leaves or returns the record to Draft and displays an actionable error. If an external side effect cannot be rolled back, any Created Supplier Contact reference is retained so that resubmission is idempotent.

`Access Requested` is retained as business intent. No account API, helper field, account creation, or access-granted outcome is part of this workflow revision.

## Assumptions, limitations, conflicts, and unresolved items

- “Any given user” is interpreted as any authenticated internal or external user granted Create permission on Supplier Contact Request. It does not mean anonymous submission or unrestricted visibility of supplier records.
- A requester may select only a Supplier Abstract already visible to that requester.
- Exactly one Active Supplier Contact Request Settings record must resolve when the request record is created. Missing or multiple Active settings records block workflow initialization and display a configuration error; they do not cause approval to be bypassed.
- The settings Approver is modeled as a System Subject so the final implementation may use a person or another supported recipient principal. Exact recipient-type support must be verified.
- The workflow approval due date is calculated from Date Submitted using the offset, unit, and calendar parameters fetched at record creation. It is not stored as a request field. Holiday calendar, time zone, and partial-day behavior remain unresolved.
- Duplicate evaluation uses normalized email as the primary signal. Exact matching and disclosure rules require confirmation before implementation.
- An existing contact with the same email under another owning supplier is not automatically reassigned because that would change security. Submit is blocked, the record remains in Draft, and the requester receives an error directing them to governed resolution.
- The OOTB M:N association is a derived security projection. Ordinary users do not maintain it directly in the target design.
- The workflow does not set OOTB Supplier Contact `AllowAccess`; the future provisioning design will determine its lifecycle.
- Native `swimlane-beta` rendering requires Mermaid 11.16.0 or later.

## Proposed swimlane

```mermaid
swimlane-beta LR
  accTitle: Supplier Contact Request workflow
  accDescr: A requester submits supplier contact details; Submit routes to Approval when required or, after successful contact creation and relationship synchronization, completes the workflow with record Status Closed.

  subgraph requester[Requester]
    draft["Draft<br/>Status: Draft"]
    validate{"Submission valid?"}
  end

  subgraph approver[Configured Approver]
    approval["Approval<br/>Status: Approval"]
    decide{"Approval decision"}
  end

  subgraph system[Intelex]
    approval_required{"Approval required?"}
    processing["Create and Relate Contact<br/>Automated operation"]
    relationships{"Both supplier relationships synchronized?"}
    completed(["Complete Workflow<br/>Workflow Status: Completed<br/>Status: Closed"])
    cancelled(["Cancel Workflow<br/>Workflow Status: Cancelled<br/>Status: Cancelled"])
  end

  draft -->|Submit| validate
  validate -->|Invalid: display validation error| draft
  validate -->|Valid: evaluate Submit routing| approval_required
  draft -->|Cancel| cancelled
  approval_required -->|No: create contact before transition| processing
  approval_required -->|Yes| approval
  approval --> decide
  decide -->|Approve: create contact before transition| processing
  decide -->|Return for correction| draft
  decide -->|Reject: decision Rejected| cancelled
  processing -->|Operations succeed| relationships
  processing -->|Operation fails: display error| draft
  relationships -->|Yes| completed
  relationships -->|No: display error| draft
```

## Stage details

| Stage ID | Stage name | Status | Responsible-person logic | Due-date logic | Entry condition | Exit paths | Evidence/classification | Source |
|---|---|---|---|---|---|---|---|---|
| `SCR-DRAFT` | Draft | Draft | Created By Employee; populated at creation and unchanged | None | Initial creation, Return for Correction, or any failed validation/configuration/processing attempt | Submit with approval required → Approval; Submit without approval and with successful contact creation → Complete; Cancel → Cancel; any failed validation or processing remains Draft | Required/Proposed | User requirement plus design assumption for correction path |
| `SCR-APPROVAL` | Approval | Approval | Configured approver resolved when the request record is created; no fallback | Workflow due date is `Date Submitted + Approval Due Offset` using the settings parameters fetched at creation; no request field stores the result | Submit evaluated the initialized route and approval was required | Approve with successful contact creation → Complete; Return → Draft; Reject → Cancel; failed processing → Draft with error | Required/Proposed | User requirement; Return is a labelled design assumption |

Closed is not a workflow stage. `SCR-ROUTE`, `SCR-PROCESS`, `SCR-EXCEPTION`, and the previously proposed `SCR-CLOSED` are not stages: routing is decision logic within Submit, Create and Relate Contact is an automated operation executed before workflow completion, and all failed attempts resolve back to Draft.

### Terminal workflow outcomes

| Terminal action | Workflow Status | Status property | Reached from | Preconditions/effects | Evidence/classification | Source |
|---|---|---|---|---|---|---|
| Complete | `Completed` | `Closed` | Submit when approval is not required; Approve when approval is required | Contact creation and both supplier relationships must be verified successfully before completion | Required | User clarification dated 2026-09-21 |
| Cancel | `Cancelled` | `Cancelled` | Cancel from Draft; Reject from Approval | Draft Cancel requires confirmation; Approval Reject records Approval Decision = Rejected and requires Approval Comments before cancellation | Required/Proposed | User clarification dated 2026-09-21; rejection audit behavior retained from prior design |

## Workflow action details

| Stage | Sort order | Action ID | Action name | Actor/availability | Trigger or decision logic | Set-value automation | Validation/error logic | Transition or terminal result | Notification refs | Evidence/classification | Source |
|---|---:|---|---|---|---|---|---|---|---|---|---|
| Draft | 1 | `SCR-A01` | Submit | Created By while request is Draft | After validation, evaluate the approval route initialized at record creation | Set Date Submitted and Submitted By on first successful submission; when approval is not required, execute Create and Relate Contact before completion | Require Supplier, First Name, Last Name, Job Title, Email, and Access Requested; Phone remains optional; validate email format, supplier visibility, duplicate conditions, initialized routing, and every contact/relationship operation. If any check or operation fails, display an actionable error, do not transition or terminate the workflow, and keep the request in Draft. Preserve any Created Supplier Contact reference that cannot be rolled back so resubmission resumes without creating a duplicate. | Approval required → Approval stage; approval not required and processing succeeds → Complete with Workflow Status `Completed` and Status `Closed`; any failure → remain Draft | `SCR-N1` when approval is required; `SCR-N6` on successful completion | Required/Proposed | User requirements and clarifications dated 2026-09-21; validation details proposed |
| Draft | 2 | `SCR-A02` | Cancel | Created By while request is Draft | User confirms cancellation | Set Status property to `Cancelled` as part of workflow cancellation | Confirmation required | Cancel with Workflow Status `Cancelled` and Status `Cancelled` | None proposed | Required/Proposed | User clarification dated 2026-09-21 |
| Approval | 1 | `SCR-A03` | Approve | Configured Approver only | Approval review completed | Execute Create and Relate Contact; only after successful processing, set Approval Decision to Approved, preserve optional Approval Comments, set Date Approved and Approved By, and set Status property to `Closed` as part of workflow completion | Approver must still be active and authorized; contact data and Supplier may not be edited in Approval. If contact or relationship processing fails, display an actionable error, do not commit the approval audit values, and return the request to Draft, retaining any non-rollback Created Supplier Contact reference for idempotent resubmission. | Processing succeeds → Complete with Workflow Status `Completed` and Status `Closed`; processing failure → Draft | `SCR-N2`, `SCR-N6` on success | Required/Proposed | User requirement and clarification dated 2026-09-21 |
| Approval | 2 | `SCR-A04` | Return for Correction | Configured Approver only | Correction is required but request should not be rejected | Set Approval Decision to Returned | Approval Comments required | Draft; requester may edit and resubmit using the workflow routing initialized at record creation | `SCR-N3` | Proposed | Design assumption |
| Approval | 3 | `SCR-A05` | Reject | Configured Approver only | Request should not proceed | Set Approval Decision to Rejected and Status property to `Cancelled` as part of workflow cancellation | Approval Comments required | Cancel with Workflow Status `Cancelled` and Status `Cancelled` | `SCR-N4` | Required/Proposed | User clarification dated 2026-09-21; rejected decision remains auditable without defining a Rejected workflow terminal status |

### Resubmission policy

Return for Correction sends the record back to Draft. A failed Submit remains in Draft, and a failed Approve action returns the record to Draft without committing an Approved decision or its approval audit values. On the next Submit, the workflow continues using the routing parameters fetched when the record was originally created; if approval is configured, it routes through Approval again. Settings are not fetched again and no settings snapshots are stored on the request. Any non-rollback Created Supplier Contact reference is reused so the next attempt resumes incomplete operations instead of creating a duplicate.



COMMENT: Do we want a separate approval history object to track approval decision and comments history? - Gillian

## Automated operations

### Initialize from settings at record creation

| Order | Operation | Success behavior | Failure behavior | Classification |
|---:|---|---|---|---|
| 1 | Confirm that exactly one Supplier Contact Request Settings record is Active | Continue initialization without storing a settings relationship | Block workflow initialization and display a configuration error when none or multiple records are Active | Required/Proposed |
| 2 | Fetch Approval Required, Approver, Approval Due Offset, Approval Due Unit, and Approval Calendar as applicable | Configure the workflow route, approval owner, and due-date behavior | Block workflow initialization and display a configuration error if required approval parameters are incomplete | Required/Proposed |
| 3 | Do not copy the settings record or any fetched parameter into Supplier Contact Request fields | Continue to Draft | N/A | Required |

### Evaluate routing within Submit

| Order | Operation | Success behavior | Failure behavior | Classification |
|---:|---|---|---|---|
| 1 | As part of the Draft-stage Submit action, use the approval route initialized at record creation | Approval required → Approval; no approval required → run Create and Relate Contact and then complete the workflow with Status `Closed` | Display an actionable configuration error and remain in Draft if the initialized route is unavailable | Required/Proposed |
| 2 | If approval is required, calculate the workflow-stage due date from Date Submitted using the previously fetched parameters | Enter Approval with configured owner and due date | Display an actionable due-date error and remain in Draft if calculation fails | Required/Proposed |

### Create and Relate Contact

| Order | Operation | Success behavior | Failure behavior | Classification |
|---:|---|---|---|---|
| 1 | Recheck duplicate and supplier conditions immediately before creation | Continue | Display an actionable error and leave/return the request in Draft; do not create a contact | Proposed concurrency control |
| 2 | If Created Supplier Contact is blank, create an OOTB Supplier Contact from First Name, Last Name, Job Title, Email, and optional Phone | Store Created Supplier Contact | Display an actionable error and leave/return the request in Draft; retain technical detail in system diagnostics | Required/Proposed |
| 3 | Set the created contact's proposed Owning Supplier Entity to the request's Supplier | Continue | Display an actionable error and leave/return the request in Draft; retain Created Supplier Contact when the creation side effect cannot be rolled back | Required/Proposed |
| 4 | Create or verify the corresponding pair in the existing OOTB Supplier Abstract–Supplier Contact M:N relationship | Continue after positive verification; no synchronization timestamp is stored | Display an actionable error and leave/return the request in Draft; do not create a second contact on resubmission | Required/Proposed |
| 5 | Link the request permanently to Created Supplier Contact and confirm both relationships | Continue | Display an actionable error and leave/return the request in Draft if verification fails | Required/Proposed |
| 6 | Complete the workflow and assign the terminal Status property | Workflow Status = `Completed`; Status = `Closed` | N/A | Required |

`Access Requested` is not acted upon in this operation. It remains on the completed request, whose Status is `Closed`, for the separately designed provisioning process.

## Duplicate-handling rules

| Condition | Proposed response | Reason |
|---|---|---|
| Same normalized email already belongs to an active contact owned by the selected Supplier | Block Submit, keep the request in Draft, and direct the requester to the existing-contact maintenance process | Prevent duplicate contacts within one supplier entity |
| Same normalized email exists under another owning Supplier | Block Submit, keep the request in Draft, and direct the requester to governed resolution | Automatic reassignment would change security; the strict one-owner model cannot represent both relationships |
| Potential name/phone match but email differs | Warn or route for review according to a future match threshold; current behavior unresolved | Avoid false-positive blocking |
| Created Supplier Contact already populated after a failed attempt | On resubmission, resume from the first incomplete relationship operation | Prevent duplicate creation after partial processing |

## Permission exceptions

Comparison standard: proposed default application permissions for Supplier Contact Request. Exact platform principals and inherited permission enum values remain to be configured.

| Scope (stage/action) | Principal | Permission variation | Condition | Standard compared against | Evidence/classification | Source |
|---|---|---|---|---|---|---|
| Create and Draft | Authenticated request user | Create; view and edit own Draft; Submit and Cancel own Draft | Supplier selection limited to records already visible to requester | Proposed application default | Required/Proposed | User requirement plus least-privilege design |
| Approval | Configured Approver | View request; Approve, Return, or Reject; no edit to submitted identity or supplier context | Principal equals the approver used to initialize the workflow at record creation | Proposed application default | Proposed | Settings-driven approval requirement |
| Submit/Approve/resubmission automated operations | System service context | Create Supplier Contact; set owning relationship; maintain OOTB M:N; update request before workflow completion | Only after routing authorization | No ordinary-user equivalent | Required/Proposed | User requirement |
| Completed/Cancelled workflows | Created By and authorized administrators | View only | Completed records have Status `Closed`; cancelled records have Status `Cancelled`; subject to supplier security and retention rules | Proposed application default | Required/Proposed | User clarification dated 2026-09-21 and auditability assumption |

Supplier Contact creation permission is exercised by the system processing context, not delegated directly to every requester.

## Notification triggers

Template names are descriptive placeholders and require configuration.

| Notification ID | Trigger stage/action/event | Condition | Template ID/name | Recipient logic | Timing | Evidence/classification | Source |
|---|---|---|---|---|---|---|---|
| `SCR-N1` | Submit routes to Approval | Workflow was initialized with approval required | `Supplier contact request awaiting approval` | Configured workflow approver resolved at record creation | On entry to Approval | Proposed | User requirement implies assignment; notification design proposed |
| `SCR-N2` | Approve | Approval and contact processing succeed | `Supplier contact request approved` | Created By Employee | After workflow completion with Status `Closed` | Proposed | Design assumption |
| `SCR-N3` | Return for Correction | Comments present | `Supplier contact request returned for correction` | Created By Employee | On entry to Draft | Proposed | Design assumption |
| `SCR-N4` | Reject | Comments present and cancellation succeeds | `Supplier contact request rejected` | Created By Employee | After Workflow Status becomes `Cancelled` and Status becomes `Cancelled` | Proposed | Design assumption |
| `SCR-N6` | Automated processing completes | Contact and both relationships verified | `Supplier contact request completed` | Created By Employee | After Workflow Status becomes `Completed` and Status becomes `Closed` | Proposed | Design assumption |

No access-provisioning notification is defined in this revision.

## Requirements traceability

| Requirement ID | Source | Interpreted requirement | Workflow response | Status | Assumption/conflict |
|---|---|---|---|---|---|
| `SCR-R01` | User direction | Any permitted user can request creation of a supplier contact | Create/Draft permissions and Submit action | Satisfied | “Any user” remains constrained by authentication and visible supplier scope |
| `SCR-R02` | User direction | Capture supplier, first name, last name, job title, email, optional phone, and access intent | Submit validates inherited fields plus Supplier; Phone is not required | Satisfied | Phone is explicitly optional |
| `SCR-R03` | User direction | Settings determine whether approval is required | Record creation fetches the single Active settings record once and initializes workflow routing without storing settings data on the request | Satisfied | Exactly one Active setting is required |
| `SCR-R04` | User direction | Settings determine approver and due date when approval is required | Approval owner and due date resolve from settings | Satisfied | Calendar details unresolved |
| `SCR-R05` | User direction | No-approval requests create the contact immediately after Submit | Submit's No branch executes Create and Relate Contact and completes the workflow with Status `Closed` on success | Satisfied | Processing is system-owned automation rather than a workflow stage |
| `SCR-R06` | User direction | Created contact maps to the selected parent/facility/depot through new many-to-one relationship | Automated processing sets Owning Supplier Entity before workflow completion | Satisfied | Strict one-owner limitation retained |
| `SCR-R07` | User direction | Existing OOTB M:N relationship is automatically maintained | Automated processing creates/verifies the derived map entry before workflow completion | Satisfied | Exact automation implementation TBD |
| `SCR-R08` | User direction | Ignore API behavior for now | Workflow records Access Requested but stops after contact/relationship completion | Satisfied | Access is neither granted nor denied by this workflow |
| `SCR-R09` | User clarification dated 2026-09-21 | Determine Routing is Submit decision logic, not a stage; Submit routes to Approval when enabled and completes when not enabled | Removed `SCR-ROUTE`; the Draft Submit action evaluates Approval Required and targets Approval or, after successful automated processing, workflow completion | Satisfied | Earlier “Closed stage” terminology is superseded by SCR-R11; failed attempts remain in or return to Draft under SCR-R10 |
| `SCR-R10` | User clarification dated 2026-09-21 | No Exception stage; any processing failure behaves like a validation failure and leaves the record in Draft | Removed `SCR-EXCEPTION`; Submit and Approve display actionable errors and leave/return the request to Draft when configuration, creation, or relationship processing fails | Satisfied | Non-rollback side effects are retained and detected so resubmission remains idempotent |
| `SCR-R11` | User clarification dated 2026-09-21 | Closed and Cancelled are record Status properties on terminal Intelex Workflow Statuses, not workflow stages; the workflow terminates only by Complete or Cancel | Successful Submit/Approve uses Workflow Status `Completed` with Status `Closed`; Draft Cancel and Approval Reject use Workflow Status `Cancelled` with Status `Cancelled` | Satisfied | Reject remains an approval decision but is not a separate terminal workflow status |

## Change summary

There is no baseline Supplier Contact Request workflow to revise. This is a new design that consumes, but does not overwrite, the documented OOTB SRM workflows.

| Change ID | Action | Element | Baseline | Proposed | Requirement ID | Rationale | Impact |
|---|---|---|---|---|---|---|---|
| `SCR-C01` | Add | Supplier Contact Request workflow | None | Draft and optional Approval stages with Completed/Closed and Cancelled/Cancelled terminal outcomes; routing and contact processing are action logic rather than stages | SCR-R01–SCR-R11 | Provides governed contact creation using Intelex-appropriate stage and terminal-status boundaries | New workflow and permissions |
| `SCR-C02` | Add | Settings-driven approval branch | None | Current Active settings are fetched once at record creation to initialize approval, approver, and due-date behavior | SCR-R03, SCR-R04 | Makes approval configurable without request-side settings storage | Requires settings governance |
| `SCR-C03` | Add | Automated Supplier Contact creation | Direct/manual contact maintenance only | System creates contact after authorization | SCR-R05 | Separates request permission from master-data creation permission | Requires system execution context |
| `SCR-C04` | Modify relationship maintenance | OOTB supplier-contact M:N | Existing direct M:N | Derived from new Owning Supplier Entity relationship | SCR-R06, SCR-R07 | Retains inherited security behavior | Requires synchronization and reconciliation |
| `SCR-C05` | Add | Draft-based failure recovery | None | Validation, configuration, and processing failures leave or return the request to Draft; resubmission resumes idempotently | SCR-R07, SCR-R10 | Uses the normal Draft correction cycle instead of a separate exception lifecycle | Requires actionable error messages and partial-side-effect detection |
| `SCR-C06` | Remove | `SCR-ROUTE` Determine Routing stage | Earlier proposed target included a persisted Submitted routing stage | Approval Required is evaluated within the Draft-stage Submit action | SCR-R09 | A routing decision does not require a persisted workflow stage | Removes an unnecessary status/stage transition and its reporting footprint |
| `SCR-C07` | Replace | `SCR-PROCESS` Create and Relate Contact stage | Earlier proposed target included a persisted Processing stage | Contact creation and relationship synchronization execute as automated action operations before workflow completion | SCR-R05, SCR-R09 | Submit must complete directly when approval is disabled, while still completing required automation safely | Removes the Processing stage; failed automation leaves or returns the request to Draft |
| `SCR-C08` | Remove | `SCR-EXCEPTION` Exception stage | Earlier proposed target included a recoverable Exception stage with Retry and Cancel actions | All validation, configuration, and processing failures use the Draft-stage correction and resubmission path | SCR-R10 | Aligns processing errors with standard Submit validation behavior | Removes the Exception status, support-stage permissions, actions, and notifications |
| `SCR-C09` | Replace | `SCR-CLOSED` Closed stage and Rejected terminal outcome | Earlier proposed target treated Closed as a stage and Rejected as a separate terminal outcome | Successful paths Complete with Workflow Status `Completed` and Status `Closed`; Cancel and Reject paths terminate with Workflow Status `Cancelled` and Status `Cancelled` | SCR-R11 | Aligns the design with Intelex workflow terminal-state semantics | Removes the Closed stage and separate Rejected terminal; reporting must distinguish cancellation reason or approval decision when needed |

## Validation findings

| Finding | Classification | Result |
|---|---|---|
| Initial stage | Proposed | Exactly one initial stage: Draft. |
| Reachability | Proposed | Draft and conditional Approval are the only workflow stages. Determine Routing and Create and Relate Contact are decision/operation nodes, not stages. |
| Terminal outcomes | Required | Exactly two workflow terminal statuses exist: `Completed` with Status `Closed`, and `Cancelled` with Status `Cancelled`. Reject records a Rejected approval decision and then uses the Cancelled terminal status. |
| Default routing | Proposed | The Draft Submit action has explicit Approval Required Yes and No outcomes; invalid settings block workflow initialization at record creation. |
| Recovery | Required/Proposed | Every validation, configuration, and processing failure leaves or returns the request to Draft with an actionable error; resubmission is idempotent. No separate Exception stage exists. |
| Action order | Proposed | Sort orders are unique within Draft and Approval. |
| Approval owner | Partially unresolved | Settings supply Approver, but final supported principal/recipient type requires platform verification. |
| Approval due date | Partially unresolved | Settings provide the parameters at record creation and the workflow calculates its stage due date from Date Submitted; time zone, holiday calendar, and partial-day behavior require confirmation. |
| Duplicate prevention | Partially unresolved | Primary behavior is defined, but fuzzy-match threshold and privacy-safe error wording remain open. |
| Relationship synchronization | Proposed | Automated operation order and idempotent resubmission are defined; implementation mechanism and reconciliation schedule remain open. |
| Access request | Required | Captured but deliberately not executed; the workflow makes no claim that access was granted. |
| Permissions | Partially unresolved | Least-privilege pattern is defined; final groups/roles and platform permission scopes require configuration. |
| Notifications | Proposed | Trigger and recipient logic are defined for successful routing and terminal outcomes; final templates and CC/BCC behavior remain TBD. No failure notification is required because the acting user receives the inline error and the record remains in Draft. |
