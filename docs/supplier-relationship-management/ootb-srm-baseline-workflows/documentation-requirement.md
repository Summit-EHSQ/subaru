# Documentation Requirement workflow — baseline

| Property | Value |
|---|---|
| Mode | Baseline documentation; no proposed changes |
| Application/object | Supplier Management Framework / `SupplierMgmt_DocRequirementObject` (`d99f3bc8-8a16-493d-9375-a478f39b9f25`) |
| Workflow | Documentation Requirement (`9d183809-03c4-445f-90dd-8a5e7f31dcc3`) |
| Package/source | `SIA - OOTB SRM Export`, version `1.0.0.0`; `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack`; exported 2026-09-02T20:45:59Z; platform 6.6.25.1 |

## Executive flow summary

The workflow moves from internal **Draft** assignment to supplier **Assigned**, then to internal **Approval**. Approval completes as Closed; More Info Required returns the record to Assigned and updates the due date and approval counter. All four actions are visible user actions protected by Workflow Buttons permission.

All behavior below is **Extracted** unless marked otherwise.

## Assumptions, limitations, and unresolved items

- Owner expression evaluation timing is not exported. `RecipientType` values 2 and 3 are retained raw; RecipientType 3 is associated through `RecipientProperty=Approver`.
- Assigned uses `DocumentDueDate` directly as its due-date property. Calendar/fallback and reevaluation timing are not exported.
- Serialized ACL `ApplyTo=0` is retained as a raw enum code.

## Swimlane diagram

```mermaid
swimlane-beta LR
  accTitle: Documentation Requirement workflow
  accDescr: An internal owner assigns a documentation requirement to a supplier contact, who submits it for approval; the approver either completes it or returns it for more information.

  subgraph internal[Calculated internal owner or approver]
    DRAFT[Draft<br/>Status: Draft]
    ASSIGN{Assign fields present?}
    APPROVAL[Approval<br/>Status: Approval]
    DECIDE{Approval decision}
  end

  subgraph supplier[Assigned supplier contact]
    ASSIGNED[Assigned<br/>Status: Assigned]
    SUBMIT{Effective Date present?}
  end

  subgraph system[Intelex workflow system]
    CLOSED((Completed<br/>Status: Closed))
  end

  DRAFT -->|Assign| ASSIGN
  ASSIGN -->|Due date, Assigned To, Approver present| ASSIGNED
  ASSIGN -->|Missing value: error| DRAFT
  ASSIGNED -->|Submit for Approval| SUBMIT
  SUBMIT -->|Valid| APPROVAL
  SUBMIT -->|Missing Effective Date: error| ASSIGNED
  APPROVAL --> DECIDE
  DECIDE -->|Approve; criteria Yes and Date Signed present| CLOSED
  DECIDE -->|More Info Required; criteria No| ASSIGNED
  DECIDE -->|Validation failure| APPROVAL
```

The native diagram requires Mermaid 11.16.0 or later.

## Stage details

| Stage ID | Stage | Status | Responsible-person logic | Due-date logic | Entry condition | Exit paths | Evidence/classification | Source |
|---|---|---|---|---|---|---|---|---|
| `8389e51a-e23a-4b4f-a65d-cc452c4c45a4` | Draft | Draft (`e92249da-2c34-4b31-a479-5bbbcce6515e`) | `SupplierAbs.PersResponsible` (`RecipientType=2`) | None | Initial stage | Assign → Assigned when required fields present | Extracted | Stage package item `0a76f0c1-248b-49df-8f8d-fdd19680f9ad` |
| `09b6ef30-3e26-444e-b4de-e8f7735bdf10` | Assigned | Assigned (`9e90f60f-b1fe-41ad-b32a-18ca8f07296d`) | `PersResponsible.Employee.Name` (`RecipientType=2`) | Field `DocumentDueDate` (`487ea4f8-3a57-4992-8192-1f667ccb1e14`); timing/calendar unresolved | Assign or More Info Required | Submit for Approval → Approval | Extracted | Stage package item `3c164499-3655-4935-a440-4a0e6dd8d076` |
| `3264ef53-e5f3-4e5e-ac5c-5e20ec48c0a3` | Approval | Approval (`c8d1e318-9155-4bd3-a459-ab8ce1b6badb`) | `RecipientType=3`; recipient property `Approver` (`800d45d9-a60b-49b1-89c4-4bdc8530c9da`) | None | Submit for Approval | Approve → Completed/Closed; More Info Required → Assigned | Extracted | Stage package item `6f040490-1db1-44b2-b4fa-f666b217052c` |

## Workflow action details

| Stage | Order | Action ID/name | Actor/availability | Ordered operations, conditions, automation, and errors | Result | Notification | Source |
|---|---:|---|---|---|---|---|---|
| Draft | 1 | `22cf782c-586c-4241-81e4-c463da418156` Assign | Visible; Workflow Buttons | If any of `DocumentDueDate`, `PersResponsible`, or `Approver` is null, block with the configured “Please ensure…” error. Otherwise: 1. transition Assigned; 2. notify `PersResponsible.Employee`. | Assigned | Template `e0eb0d6f-cdc5-443a-94ac-7f93b2f4ba0c`, “Documentation requirement has been assigned to you for submission” | Package item `2cbf624a-e356-46e6-9534-970fcba2b5a6` |
| Assigned | 1 | `1c4c4df2-6c5b-4af2-93d8-d45b967b8eca` Submit for Approval | Visible; Workflow Buttons; confirmation states submitted content is true/correct | Require `EffectiveDate<>NULL`, else configured error. Then: 1. transition Approval; 2. set `AccpCriteriaMet=NULL`; 3. `DateApproved=NULL`; 4. `NewDueDate=NULL`; 5. `Comments=NULL`; 6. notify `Approver`. | Approval | Template `2dc5b218-5c07-41a4-bb57-c1176b00b884`, “Documentation requirement has been submitted to you for review.” | Package item `d7744a65-5c05-481f-a598-6c3456eaaf0f` |
| Approval | 1 | `8ab84c5a-c2f7-408b-a2a1-76632fb35cd0` Approve | Visible; Workflow Buttons; confirmation asks to approve | Require acceptance criteria true (the action errors when false or null), then require `DateSigned<>NULL`. On success: 1. complete Closed; 2. notify `PersResponsible.Employee`. | Completed/Closed (`c95b5b24-aa0b-4927-966b-ffa05324e3ad`) | Template `e2be948a-d0cd-4cbd-83ad-e801247df358`, “Documentation requirement you provided has been approved.” | Package item `97e9da74-6bee-4e87-beca-f3403e33fb19` |
| Approval | 2 | `f10f9b18-f480-4d26-8c0f-ca13ad14f844` More Info Required | Visible; Workflow Buttons | If criteria is true or null, error requesting No. Otherwise: 1. transition Assigned; 2. set `DocumentDueDate=NewDueDate`; 3. set `NbOfApprvHelper=NbOfApprvHelper+1`; 4. notify `PersResponsible.Employee`. | Assigned | Template `ce49372b-d5e4-47cd-bc85-9ce1bf87a737`, “More information is required for documentation requirement” | Package item `f4b32d6e-333c-4252-9187-82f9243adc0a` |

## Permission exceptions

Comparison standard: each stage has `InheritedPermission=true`, `IsStandardPermission=false`.

| Scope | Principal | Variation | Condition/raw scope | Standard | Evidence/source |
|---|---|---|---|---|---|
| Draft, Assigned, Approval | Person Responsible (`320bc96e-5a2d-4ff6-b697-b916ae1eae29`) | Edit + Workflow Buttons | `ApplyTo=0` | Inherited stage permissions | Extracted; all three stage ACLs |
| Draft, Assigned, Approval | Immediate supervisor (`aee8aab7-6033-4318-aae9-8cf52bf1e45e`) | Edit + Workflow Buttons | `ApplyTo=0` | Inherited stage permissions | Extracted; all three stage ACLs |

## Email notification triggers

| Notification ID | Trigger | Condition | Template ID/name | Recipient logic | Timing | Evidence/source |
|---|---|---|---|---|---|---|
| `DR-N1` | Draft / Assign | Required assignment fields present | `e0eb0d6f-cdc5-443a-94ac-7f93b2f4ba0c` / assigned for submission | To field `PersResponsible.Employee` | After transition operation | Extracted; action `22cf782c-586c-4241-81e4-c463da418156` |
| `DR-N2` | Assigned / Submit for Approval | Effective Date present | `2dc5b218-5c07-41a4-bb57-c1176b00b884` / submitted for review | To field `Approver` | After transition and four set-values | Extracted; action `1c4c4df2-6c5b-4af2-93d8-d45b967b8eca` |
| `DR-N3` | Approval / Approve | Criteria true and Date Signed present | `e2be948a-d0cd-4cbd-83ad-e801247df358` / approved | To field `PersResponsible.Employee` | After completion operation | Extracted; action `8ab84c5a-c2f7-408b-a2a1-76632fb35cd0` |
| `DR-N4` | Approval / More Info Required | Criteria false | `ce49372b-d5e4-47cd-bc85-9ce1bf87a737` / more information required | To field `PersResponsible.Employee` | After transition and set-values | Extracted; action `f10f9b18-f480-4d26-8c0f-ca13ad14f844` |

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
