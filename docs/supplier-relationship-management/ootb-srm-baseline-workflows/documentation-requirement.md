# Documentation Requirement workflow — baseline

| Property | Value |
|---|---|
| Mode | Baseline documentation; no proposed changes |
| Application/object | Supplier Management Framework / `SupplierMgmt_DocRequirementObject` |
| Workflow | Documentation Requirement |
| Package/source | `SIA - OOTB SRM Export`, version `1.0.0.0`; `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack`; exported 2026-09-02T20:45:59Z; platform 6.6.25.1 |

## Executive flow summary

The workflow moves from internal **Draft** assignment to supplier **Assigned**, then to internal **Approval**. Approval completes as Closed; More Info Required returns the record to Assigned and updates the due date and approval counter. All four actions are visible user actions protected by Workflow Buttons permission.

All behavior below is **Extracted** unless marked otherwise.

## Assumptions, limitations, and unresolved items

- Owner expression evaluation timing is not exported. `RecipientType` values 2 and 3 are retained raw; RecipientType 3 is associated through `RecipientProperty=Approver`.
- Assigned uses `DocumentDueDate` directly as its due-date property. Calendar/fallback and reevaluation timing are not exported.
- Serialized ACL `ApplyTo=0` is retained as a raw enum code.

## Stage details

| Stage | Status | Responsible-person logic | Due-date logic | Entry condition | Exit paths | Evidence/classification | Source |
|---|---|---|---|---|---|---|---|
| Draft | Draft | `SupplierAbs.PersResponsible` (`RecipientType=2`) | None | Initial stage | Assign → Assigned when required fields present | Extracted | Stage configuration |
| Assigned | Assigned | `PersResponsible.Employee.Name` (`RecipientType=2`) | Field `DocumentDueDate`; timing/calendar unresolved | Assign or More Info Required | Submit for Approval → Approval | Extracted | Stage configuration |
| Approval | Approval | `RecipientType=3`; recipient property `Approver` | None | Submit for Approval | Approve → Completed/Closed; More Info Required → Assigned | Extracted | Stage configuration |

## Workflow action details

| Stage | Order | Action | Actor/availability | Ordered operations, conditions, automation, and errors | Result | Notification | Source |
|---|---:|---|---|---|---|---|---|
| Draft | 1 | Assign | Visible; Workflow Buttons | If any of `DocumentDueDate`, `PersResponsible`, or `Approver` is null, block with the configured “Please ensure…” error. Otherwise: 1. transition Assigned; 2. notify `PersResponsible.Employee`. | Assigned | Template “Documentation requirement has been assigned to you for submission” | Action configuration |
| Assigned | 1 | Submit for Approval | Visible; Workflow Buttons; confirmation states submitted content is true/correct | Require `EffectiveDate<>NULL`, else configured error. Then: 1. transition Approval; 2. set `AccpCriteriaMet=NULL`; 3. `DateApproved=NULL`; 4. `NewDueDate=NULL`; 5. `Comments=NULL`; 6. notify `Approver`. | Approval | Template “Documentation requirement has been submitted to you for review.” | Action configuration |
| Approval | 1 | Approve | Visible; Workflow Buttons; confirmation asks to approve | Require acceptance criteria true (the action errors when false or null), then require `DateSigned<>NULL`. On success: 1. complete Closed; 2. notify `PersResponsible.Employee`. | Completed/Closed | Template “Documentation requirement you provided has been approved.” | Action configuration |
| Approval | 2 | More Info Required | Visible; Workflow Buttons | If criteria is true or null, error requesting No. Otherwise: 1. transition Assigned; 2. set `DocumentDueDate=NewDueDate`; 3. set `NbOfApprvHelper=NbOfApprvHelper+1`; 4. notify `PersResponsible.Employee`. | Assigned | Template “More information is required for documentation requirement” | Action configuration |

## Permission exceptions

Comparison standard: each stage has `InheritedPermission=true`, `IsStandardPermission=false`.

| Scope | Principal | Variation | Condition/raw scope | Standard | Evidence/source |
|---|---|---|---|---|---|
| Draft, Assigned, Approval | Person Responsible | Edit + Workflow Buttons | `ApplyTo=0` | Inherited stage permissions | Extracted; all three stage ACLs |
| Draft, Assigned, Approval | Immediate supervisor | Edit + Workflow Buttons | `ApplyTo=0` | Inherited stage permissions | Extracted; all three stage ACLs |

## Email notification triggers

| Notification ID | Trigger | Condition | Template name | Recipient logic | Timing | Evidence/source |
|---|---|---|---|---|---|---|
| `DR-N1` | Draft / Assign | Required assignment fields present | assigned for submission | To field `PersResponsible.Employee` | After transition operation | Extracted; action configuration |
| `DR-N2` | Assigned / Submit for Approval | Effective Date present | submitted for review | To field `Approver` | After transition and four set-values | Extracted; action configuration |
| `DR-N3` | Approval / Approve | Criteria true and Date Signed present | approved | To field `PersResponsible.Employee` | After completion operation | Extracted; action configuration |
| `DR-N4` | Approval / More Info Required | Criteria false | more information required | To field `PersResponsible.Employee` | After transition and set-values | Extracted; action configuration |

To/CC/BCC distinctions are not present in the workflow operations.

## Unresolved references and validation findings

| Finding | Classification | Result |
|---|---|---|
| Reference resolution | Extracted | All transition, terminal status, template, recipient, permission, and set-value references resolve in the package. |
| Structure | Extracted | One initial stage; all three stages reachable; Approval has an explicit completion path; no dead-end stage. |
| Cycle | Extracted | Assigned ↔ Approval is an intentional-looking resubmission loop exposed by More Info Required; it also has an exit through Approve. Intent is not independently stated. |
| Action order | Extracted | Order values are unique within each stage. |
| Due date | Unresolved | `DocumentDueDate` is identified, but evaluation timing, calendar, and null fallback are absent. |
| Permission enums | Unresolved | `ApplyTo=0` has no exported label. |
