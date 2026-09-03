# Supplier Parent Company workflow — baseline

| Property | Value |
|---|---|
| Mode | Baseline documentation; no proposed changes |
| Application/object | Supplier Management Framework / `SupplierMgmt_ParentCompnyObject` (`ca226798-b56d-49bd-93bf-d8e81398150a`) |
| Workflow | Supplier Parent Company (`30b0a4b7-9971-46f6-8e4a-8d20907c38c1`) |
| Package/source | `SIA - OOTB SRM Export`, version `1.0.0.0`; `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack`; exported 2026-09-02T20:45:59Z; platform 6.6.25.1 |

## Executive flow summary

This active, recurring workflow has one **Open** stage. **Submit Evaluation** completes it as Closed after evaluation-count and supplier-status validation. **Deactivate Supplier** cancels it as Closed when Supplier Status is Suspended. Ownership is Person Responsible with creator fallback.

All behavior below is **Extracted** unless marked otherwise.

## Assumptions, limitations, and unresolved items

- Numeric recipient, recurrence, and permission scope enums have no labels in the package and are preserved raw.
- The workflow is recurring, but interval/calendar details are not exposed. The recurrence record has `ScheduleType=1`, `RescheduleStrategyType=1`, automatic rescheduling enabled, and no grace period.
- Empty ACL lists are not interpreted.

## Swimlane diagram

```mermaid
swimlane-beta LR
  accTitle: Supplier Parent Company workflow
  accDescr: The calculated stage owner can submit an evaluation to complete the workflow or deactivate a suspended supplier to cancel it.

  subgraph owner[Calculated stage owner]
    OPEN[Open<br/>Status: Open]
    EVAL{Submit Evaluation checks}
    DEACT{Deactivate Supplier check}
  end

  subgraph system[Intelex workflow system]
    COMPLETE((Completed<br/>Status: Closed))
    CANCEL((Cancelled<br/>Status: Closed))
  end

  OPEN -->|Submit Evaluation| EVAL
  EVAL -->|Evaluation exists and status Active/InActive| COMPLETE
  EVAL -->|Validation fails| OPEN
  OPEN -->|Deactivate Supplier| DEACT
  DEACT -->|Status Suspended| CANCEL
  DEACT -->|Validation fails| OPEN
```

The native diagram requires Mermaid 11.16.0 or later.

## Stage details

| Stage ID | Stage name | Status | Responsible-person logic | Due-date logic | Entry condition | Exit paths | Evidence/classification | Source |
|---|---|---|---|---|---|---|---|---|
| `fee4a701-a8db-4a9d-a770-5b07ada41c33` | Open (system name `Approval`) | Open (`4f8a9dc5-3c33-4f99-b3a9-0d4027ca5d30`) | `IF(PersResponsible=NULL, CreatedBy.Name, PersResponsible.Name)`; evaluation timing unresolved | None configured | Initial/only stage | Submit Evaluation → Completed/Closed; Deactivate Supplier → Cancelled/Closed; failures remain Open | Extracted | Workflow package item `05c97845-3070-4bb1-8451-617b8d3defe1`; stage package item `4b3944b6-45ef-4516-80c2-957928d00583` |

## Workflow action details

| Stage | Order | Action ID | Action | Actor/availability | Ordered behavior | Result | Notification | Source |
|---|---:|---|---|---|---|---|---|---|
| Open | 1 | `ffd3de06-67e8-4881-94a1-fafd3c905853` | Submit Evaluation | Visible user action requiring Workflow Buttons (`6ea02874-00ba-46e8-bda6-1277a3abe2c7`) | Require `WFHelper<NoOfEvaluations`, else “Please add at least one Evaluation.” Then require supplier status Active/InActive, else configured status error. On success: complete Closed, then set `WFHelper=NoOfEvaluations`. | Completed/Closed (`c4becc59-eb6e-4e5e-96ac-da98802441e4`) | None | Action package item `b16de97d-6457-4da2-94c9-26df62d33f82` |
| Open | 2 | `d16de38a-eb2a-4959-9c5d-7eb767a1ab07` | Deactivate Supplier | Visible user action requiring Workflow Buttons | Confirmation asks that associated tasks be Closed. Require `SupplierStatus.Value='Suspended'`; otherwise show the configured error. On success: cancel Closed, then set `DateClosed=TODAY`. | Cancelled/Closed | None | Action package item `7029d020-5dd6-4bfd-b72a-20aff1b4b086` |

## Permission exceptions

Comparison standard: `InheritedPermission=true`, `IsStandardPermission=false`; serialized rows are the inspectable variation.

| Scope | Principal | Variation | Raw scope/condition | Standard | Classification/source |
|---|---|---|---|---|---|
| Open | Immediate supervisor | Workflow Buttons + Edit (`ApplyTo=0`); Create + Edit (`ApplyTo=1`) | None | Inherited stage permissions | Extracted; ApplyTo unresolved; stage `fee4a701-a8db-4a9d-a770-5b07ada41c33` |
| Open | Person Responsible | Workflow Buttons + Edit (`ApplyTo=0`); Create + Edit (`ApplyTo=1`) | None | Inherited stage permissions | Extracted; ApplyTo unresolved; same stage |
| Open | Supplier User | Empty Allow/Deny rows for `ApplyTo=0` and `ApplyTo=3` on Audit History, Certification Requirement, Documentation Requirement, Public Profile, and Supplier Evaluation | Runtime effect unresolved | Inherited stage permissions | Extracted/Unresolved; same stage |

## Email notification triggers

No workflow-native notification operation or start notification is linked. A package template named “Supplier Parent Company evaluation is due” has no trigger/recipient relationship to this workflow.

## Unresolved references and validation findings

| Finding | Classification | Result |
|---|---|---|
| References | Extracted | All workflow stage, action, status, permission, object, and set-value target references resolve. |
| Structure | Extracted | One initial stage; two explicit terminal paths; no unreachable stage or duplicate action order. |
| Terminal operation ordering | Extracted | Complete/cancel precedes its subsequent set-value operation; transaction semantics are not exported. |
| Recurrence and notification timing | Unresolved | No calendar interval or linked notification trigger is present. |
| Permission enums | Unresolved | Numeric `ApplyTo` values and empty ACL rows have no exported semantic labels. |
