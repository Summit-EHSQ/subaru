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
| As of | 2026-09-02 |

## Executive flow summary

Any authenticated user with permission to create Supplier Contact Requests may prepare a Draft for one Supplier Parent Company, Supplier Facility, or depot represented through Supplier Abstract. When the request record is created, Intelex fetches the current Active Supplier Contact Request Settings parameters once and uses them to initialize its approval route, approver, and due-date behavior without storing the settings record or parameter snapshots on the request. Submit validates the contact data, supplier context, and duplicates. If approval is not required, Intelex proceeds directly to automated contact creation. If approval is required, the workflow assigns the request to the configured approver with the configured due-date rule.

Successful processing creates one OOTB Supplier Contact, assigns its new authoritative Owning Supplier Entity relationship, and then synchronizes the existing OOTB M:N supplier-contact relationship used by inherited security. The request completes only after both relationships are established. Processing failures enter a recoverable Exception stage and retain any created contact reference so that retry is idempotent.

`Access Requested` is retained as business intent. No account API, helper field, account creation, or access-granted outcome is part of this workflow revision.

## Assumptions, limitations, conflicts, and unresolved items

- “Any given user” is interpreted as any authenticated internal or external user granted Create permission on Supplier Contact Request. It does not mean anonymous submission or unrestricted visibility of supplier records.
- A requester may select only a Supplier Abstract already visible to that requester.
- Exactly one Active Supplier Contact Request Settings record must resolve when the request record is created. Missing or multiple Active settings records block workflow initialization and display a configuration error; they do not cause approval to be bypassed.
- The settings Approver is modeled as a System Subject so the final implementation may use a person or another supported recipient principal. Exact recipient-type support must be verified.
- The workflow approval due date is calculated from Date Submitted using the offset, unit, and calendar parameters fetched at record creation. It is not stored as a request field. Holiday calendar, time zone, and partial-day behavior remain unresolved.
- Duplicate evaluation uses normalized email as the primary signal. Exact matching and disclosure rules require confirmation before implementation.
- An existing contact with the same email under another owning supplier is not automatically reassigned because that would change security. It enters Exception for governed resolution.
- The OOTB M:N association is a derived security projection. Ordinary users do not maintain it directly in the target design.
- The workflow does not set OOTB Supplier Contact `AllowAccess`; the future provisioning design will determine its lifecycle.
- Native `swimlane-beta` rendering requires Mermaid 11.16.0 or later.

## Proposed swimlane

```mermaid
swimlane-beta LR
  accTitle: Supplier Contact Request workflow
  accDescr: A requester submits supplier contact details; settings determine whether approval is required; Intelex creates the contact and synchronizes the authoritative and OOTB security relationships.

  subgraph requester[Requester]
    draft["Draft<br/>Status: Draft"]
    validate{"Submission valid?"}
  end

  subgraph approver[Configured Approver]
    approval["Approval<br/>Status: Approval"]
    decide{"Approval decision"}
  end

  subgraph system[Intelex]
    routing["Determine Routing<br/>Status: Submitted"]
    approval_required{"Approval required?"}
    processing["Create and Relate Contact<br/>Status: Processing"]
    relationships{"Both supplier relationships synchronized?"}
    exception["Exception<br/>Status: Exception"]
    completed(["Completed<br/>Contact and relationships created"])
    rejected(["Rejected"])
    cancelled(["Cancelled"])
  end

  draft -->|Submit| validate
  validate -->|Invalid: display validation error| draft
  validate -->|Valid| routing
  draft -->|Cancel| cancelled
  routing --> approval_required
  approval_required -->|No| processing
  approval_required -->|Yes| approval
  approval --> decide
  decide -->|Approve| processing
  decide -->|Return for correction| draft
  decide -->|Reject| rejected
  processing --> relationships
  relationships -->|Yes| completed
  relationships -->|No| exception
  exception -->|Retry after correction| processing
  exception -->|Cancel| cancelled
```

## Stage details

COMMENT: Is "Determine Routing" and "Create and Relate Contact" actual workflow stages	 or just a decision the system needs to make after submit in the Draft stage? - Gillian

| Stage ID | Stage name | Status | Responsible-person logic | Due-date logic | Entry condition | Exit paths | Evidence/classification | Source |
|---|---|---|---|---|---|---|---|---|
| `SCR-DRAFT` | Draft | Draft | Created By Employee; populated at creation and unchanged | None | Initial creation or Return for Correction | Submit → Determine Routing; Cancel → Cancelled; failed validation remains Draft | Required/Proposed | User requirement plus design assumption for correction path |
| `SCR-ROUTE` | Determine Routing | Submitted | System service context | None | Successful Submit validation after workflow initialization from settings at record creation | No approval → Create and Relate Contact; approval required → Approval | Required/Proposed | User requirement |
| `SCR-APPROVAL` | Approval | Approval | Configured approver resolved when the request record is created; no fallback | Workflow due date is `Date Submitted + Approval Due Offset` using the settings parameters fetched at creation; no request field stores the result | Approval was configured as required when the request was created | Approve → Create and Relate Contact; Return → Draft; Reject → Rejected | Required/Proposed | User requirement; Return is a labelled design assumption |
| `SCR-PROCESS` | Create and Relate Contact | Processing | System service context | None | No approval is required or configured approver approves; Retry may re-enter | Success → Completed; any nonrecoverable or partial failure → Exception | Required/Proposed | User requirement |
| `SCR-EXCEPTION` | Exception | Exception | Proposed Supplier Contact Request Administrator role or support queue; exact principal TBD | Proposed operational SLA; not defined by source | Cross-supplier duplicate, contact-creation error, or relationship-synchronization failure | Retry → Create and Relate Contact; Cancel → Cancelled | Proposed/Unresolved owner and due date | Design needed for safe recovery |

Terminal outcomes are Completed, Rejected, and Cancelled. Exception is nonterminal and has explicit recovery or cancellation paths.

## Workflow action details

| Stage | Sort order | Action ID | Action name | Actor/availability | Trigger or decision logic | Set-value automation | Validation/error logic | Transition or terminal result | Notification refs | Evidence/classification | Source |
|---|---:|---|---|---|---|---|---|---|---|---|---|
| Draft | 1 | `SCR-A01` | Submit | Created By while request is Draft | User elects to submit | Set Date Submitted and Submitted By on first successful submission | Require Supplier, First Name, Last Name, Job Title, Email, and Access Requested; Phone remains optional; validate email; require supplier visibility; evaluate duplicates | Determine Routing using the parameters fetched at record creation | `SCR-N1` when approval is required; otherwise none | Required/Proposed | User requirement; validation details proposed |
| Draft | 2 | `SCR-A02` | Cancel | Created By while request is Draft | User confirms cancellation | None | None beyond confirmation | Cancelled terminal | None proposed | Proposed | Completeness assumption |
| Approval | 1 | `SCR-A03` | Approve | Configured Approver only | Approval review completed | Set Approval Decision to Approved; preserve optional Approval Comments; set Date Approved and Approved By | Approver must still be active and authorized; contact data and Supplier may not be edited in Approval | Create and Relate Contact | `SCR-N2` | Required/Proposed | User requirement |
| Approval | 2 | `SCR-A04` | Return for Correction | Configured Approver only | Correction is required but request should not be rejected | Set Approval Decision to Returned | Approval Comments required | Draft; requester may edit and resubmit using the workflow routing initialized at record creation | `SCR-N3` | Proposed | Design assumption |
| Approval | 3 | `SCR-A05` | Reject | Configured Approver only | Request should not proceed | Set Approval Decision to Rejected | Approval Comments required | Rejected terminal | `SCR-N4` | Proposed | Necessary explicit approval outcome |
| Exception | 1 | `SCR-A06` | Retry | Supplier Contact Request Administrator/support principal; exact role TBD | Reported cause has been corrected | None | If Created Supplier Contact is already populated, do not create another contact; rerun only incomplete operations | Create and Relate Contact | None proposed | Proposed | Idempotent recovery requirement |
| Exception | 2 | `SCR-A07` | Cancel | Supplier Contact Request Administrator/support principal; exact role TBD | Exception cannot or should not be resolved | None | Confirmation required; cancellation reason storage is not defined | Cancelled terminal | `SCR-N5` | Proposed/Partially modeled | Safe terminal path |

### Resubmission policy

Return for Correction sends the record back to Draft. On the next Submit, the workflow continues using the routing parameters fetched when the record was originally created. Settings are not fetched again and no settings snapshots are stored on the request. The Approval Decision and Approval Comments fields, together with workflow history, preserve the prior review outcome.



COMMENT: Do we want a separate approval history object to track approval decision and comments history? - Gillian

## Automated operations

### Initialize from settings at record creation

| Order | Operation | Success behavior | Failure behavior | Classification |
|---:|---|---|---|---|
| 1 | Confirm that exactly one Supplier Contact Request Settings record is Active | Continue initialization without storing a settings relationship | Block workflow initialization and display a configuration error when none or multiple records are Active | Required/Proposed |
| 2 | Fetch Approval Required, Approver, Approval Due Offset, Approval Due Unit, and Approval Calendar as applicable | Configure the workflow route, approval owner, and due-date behavior | Block workflow initialization and display a configuration error if required approval parameters are incomplete | Required/Proposed |
| 3 | Do not copy the settings record or any fetched parameter into Supplier Contact Request fields | Continue to Draft | N/A | Required |

### Determine Routing after Submit

| Order | Operation | Success behavior | Failure behavior | Classification |
|---:|---|---|---|---|
| 1 | Use the approval route initialized at record creation | Approval required → Approval; no approval required → Create and Relate Contact | Enter Exception if the initialized route is unavailable | Required/Proposed |
| 2 | If approval is required, calculate the workflow-stage due date from Date Submitted using the previously fetched parameters | Enter Approval with configured owner and due date | Enter Exception if calculation fails | Required/Proposed |

### Create and Relate Contact

| Order | Operation | Success behavior | Failure behavior | Classification |
|---:|---|---|---|---|
| 1 | Recheck duplicate and supplier conditions immediately before creation | Continue | Enter Exception; do not create a contact | Proposed concurrency control |
| 2 | If Created Supplier Contact is blank, create an OOTB Supplier Contact from First Name, Last Name, Job Title, Email, and optional Phone | Store Created Supplier Contact | Enter Exception; failure detail remains in workflow/system diagnostics because no request error field is defined | Required/Proposed |
| 3 | Set the created contact's proposed Owning Supplier Entity to the request's Supplier | Continue | Enter Exception; retain Created Supplier Contact for repair/retry | Required/Proposed |
| 4 | Create or verify the corresponding pair in the existing OOTB Supplier Abstract–Supplier Contact M:N relationship | Continue after positive verification; no synchronization timestamp is stored | Enter Exception; do not create a second contact on Retry | Required/Proposed |
| 5 | Link the request permanently to Created Supplier Contact and confirm both relationships | Continue | Enter Exception if verification fails | Required/Proposed |
| 6 | Complete workflow | Completed terminal | N/A | Required/Proposed |

`Access Requested` is not acted upon in this operation. It remains on the completed request for the separately designed provisioning process.

## Duplicate-handling rules

| Condition | Proposed response | Reason |
|---|---|---|
| Same normalized email already belongs to an active contact owned by the selected Supplier | Block Submit and direct the requester to the existing-contact maintenance process | Prevent duplicate contacts within one supplier entity |
| Same normalized email exists under another owning Supplier | Enter Exception for governed resolution | Automatic reassignment would change security; the strict one-owner model cannot represent both relationships |
| Potential name/phone match but email differs | Warn or route for review according to a future match threshold; current behavior unresolved | Avoid false-positive blocking |
| Created Supplier Contact already populated during Retry | Resume from the first incomplete relationship operation | Prevent duplicate creation after partial processing |

## Permission exceptions

Comparison standard: proposed default application permissions for Supplier Contact Request. Exact platform principals and inherited permission enum values remain to be configured.

| Scope (stage/action) | Principal | Permission variation | Condition | Standard compared against | Evidence/classification | Source |
|---|---|---|---|---|---|---|
| Create and Draft | Authenticated request user | Create; view and edit own Draft; Submit and Cancel own Draft | Supplier selection limited to records already visible to requester | Proposed application default | Required/Proposed | User requirement plus least-privilege design |
| Approval | Configured Approver | View request; Approve, Return, or Reject; no edit to submitted identity or supplier context | Principal equals the approver used to initialize the workflow at record creation | Proposed application default | Proposed | Settings-driven approval requirement |
| Processing | System service context | Create Supplier Contact; set owning relationship; maintain OOTB M:N; update request | Only after routing authorization | No ordinary-user equivalent | Required/Proposed | User requirement |
| Exception | Supplier Contact Request Administrator/support role TBD | View exception detail; Retry or Cancel | Assigned support scope | Proposed application default | Proposed/Unresolved | Recovery design |
| Completed/Rejected/Cancelled | Created By and authorized administrators | View only | Subject to supplier security and retention rules | Proposed application default | Proposed | Auditability assumption |

Supplier Contact creation permission is exercised by the system processing context, not delegated directly to every requester.

## Notification triggers

Template names are descriptive placeholders and require configuration.

| Notification ID | Trigger stage/action/event | Condition | Template ID/name | Recipient logic | Timing | Evidence/classification | Source |
|---|---|---|---|---|---|---|---|
| `SCR-N1` | Submit routes to Approval | Workflow was initialized with approval required | `Supplier contact request awaiting approval` | Configured workflow approver resolved at record creation | On entry to Approval | Proposed | User requirement implies assignment; notification design proposed |
| `SCR-N2` | Approve | Approval succeeds | `Supplier contact request approved` | Created By Employee | After transition to Processing | Proposed | Design assumption |
| `SCR-N3` | Return for Correction | Comments present | `Supplier contact request returned for correction` | Created By Employee | On entry to Draft | Proposed | Design assumption |
| `SCR-N4` | Reject | Comments present | `Supplier contact request rejected` | Created By Employee | After rejection | Proposed | Design assumption |
| `SCR-N5` | Exception Cancel | Cancellation succeeds | `Supplier contact request cancelled after exception` | Created By Employee | After cancellation | Proposed | Design assumption |
| `SCR-N6` | Automated processing completes | Contact and both relationships verified | `Supplier contact request completed` | Created By Employee | After completion | Proposed | Design assumption |
| `SCR-N7` | Automated processing enters Exception | Any processing/configuration failure | `Supplier contact request requires support` | Supplier Contact Request Administrator/support role TBD | On entry to Exception | Proposed/Unresolved recipient | Safe operations requirement |

No access-provisioning notification is defined in this revision.

## Requirements traceability

| Requirement ID | Source | Interpreted requirement | Workflow response | Status | Assumption/conflict |
|---|---|---|---|---|---|
| `SCR-R01` | User direction | Any permitted user can request creation of a supplier contact | Create/Draft permissions and Submit action | Satisfied | “Any user” remains constrained by authentication and visible supplier scope |
| `SCR-R02` | User direction | Capture supplier, first name, last name, job title, email, optional phone, and access intent | Submit validates inherited fields plus Supplier; Phone is not required | Satisfied | Phone is explicitly optional |
| `SCR-R03` | User direction | Settings determine whether approval is required | Record creation fetches the single Active settings record once and initializes workflow routing without storing settings data on the request | Satisfied | Exactly one Active setting is required |
| `SCR-R04` | User direction | Settings determine approver and due date when approval is required | Approval owner and due date resolve from settings | Satisfied | Calendar details unresolved |
| `SCR-R05` | User direction | No-approval requests create the contact immediately after Submit | No branch routes directly to Create and Relate Contact | Satisfied | Processing is system-owned rather than requester-owned |
| `SCR-R06` | User direction | Created contact maps to the selected parent/facility/depot through new many-to-one relationship | Processing sets Owning Supplier Entity | Satisfied | Strict one-owner limitation retained |
| `SCR-R07` | User direction | Existing OOTB M:N relationship is automatically maintained | Processing creates/verifies derived map entry | Satisfied | Exact automation implementation TBD |
| `SCR-R08` | User direction | Ignore API behavior for now | Workflow records Access Requested but stops after contact/relationship completion | Satisfied | Access is neither granted nor denied by this workflow |

## Change summary

There is no baseline Supplier Contact Request workflow to revise. This is a new design that consumes, but does not overwrite, the documented OOTB SRM workflows.

| Change ID | Action | Element | Baseline | Proposed | Requirement ID | Rationale | Impact |
|---|---|---|---|---|---|---|---|
| `SCR-C01` | Add | Supplier Contact Request workflow | None | Draft, routing, optional approval, automated processing, exception, and terminal outcomes | SCR-R01–SCR-R08 | Provides governed contact creation | New workflow and permissions |
| `SCR-C02` | Add | Settings-driven approval branch | None | Current Active settings are fetched once at record creation to initialize approval, approver, and due-date behavior | SCR-R03, SCR-R04 | Makes approval configurable without request-side settings storage | Requires settings governance |
| `SCR-C03` | Add | Automated Supplier Contact creation | Direct/manual contact maintenance only | System creates contact after authorization | SCR-R05 | Separates request permission from master-data creation permission | Requires system execution context |
| `SCR-C04` | Modify relationship maintenance | OOTB supplier-contact M:N | Existing direct M:N | Derived from new Owning Supplier Entity relationship | SCR-R06, SCR-R07 | Retains inherited security behavior | Requires synchronization and reconciliation |
| `SCR-C05` | Add | Exception recovery | None | Idempotent Retry and explicit Cancel | SCR-R07 | Prevents partial processing from creating duplicate contacts | Requires support ownership |

## Validation findings

| Finding | Classification | Result |
|---|---|---|
| Initial stage | Proposed | Exactly one initial stage: Draft. |
| Reachability | Proposed | Draft, Determine Routing, Approval, Processing, and Exception are reachable; Approval is conditional. |
| Terminal outcomes | Proposed | Completed, Rejected, and Cancelled are distinct. |
| Default routing | Proposed | Approval Required has explicit Yes and No outcomes; invalid settings block workflow initialization at record creation. |
| Recovery | Proposed | Exception has Retry and Cancel; no dead-end nonterminal stage is present. |
| Action order | Proposed | Sort orders are unique within Draft, Approval, and Exception. |
| Approval owner | Partially unresolved | Settings supply Approver, but final supported principal/recipient type requires platform verification. |
| Approval due date | Partially unresolved | Settings provide the parameters at record creation and the workflow calculates its stage due date from Date Submitted; time zone, holiday calendar, and partial-day behavior require confirmation. |
| Duplicate prevention | Partially unresolved | Primary behavior is defined, but fuzzy-match threshold and privacy-safe error wording remain open. |
| Relationship synchronization | Proposed | Processing order and idempotent retry are defined; implementation mechanism and reconciliation schedule remain open. |
| Access request | Required | Captured but deliberately not executed; the workflow makes no claim that access was granted. |
| Permissions | Partially unresolved | Least-privilege pattern is defined; final groups/roles and platform permission scopes require configuration. |
| Notifications | Proposed | Trigger and recipient logic are defined; final templates, CC/BCC behavior, and support recipient remain TBD. |
