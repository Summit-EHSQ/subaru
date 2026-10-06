# Supplier Parent Company workflow — baseline

| Property | Value |
|---|---|
| Mode | Baseline documentation; no proposed changes |
| Application/object | Supplier Management Framework / `SupplierMgmt_ParentCompnyObject` |
| Workflow | Supplier Parent Company |
| Package/source | `SIA - OOTB SRM Export`, version `1.0.0.0`; `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack`; exported 2026-09-02T20:45:59Z; platform 6.6.25.1 |

## Executive flow summary

This active, recurring workflow has one **Open** stage. **Submit Evaluation** completes it as Closed after evaluation-count and supplier-status validation. **Deactivate Supplier** cancels it as Closed when Supplier Status is Suspended. Ownership is Person Responsible with creator fallback.

All behavior below is **Extracted** unless marked otherwise.

## Assumptions, limitations, and unresolved items

- Numeric recipient, recurrence, and permission scope enums have no labels in the package and are preserved raw.
- The workflow is recurring, but interval/calendar details are not exposed. The recurrence record has `ScheduleType=1`, `RescheduleStrategyType=1`, automatic rescheduling enabled, and no grace period.
- Empty ACL lists are not interpreted.

## Stage details

| Stage name | Status | Responsible-person logic | Due-date logic | Entry condition | Exit paths | Evidence/classification | Source |
|---|---|---|---|---|---|---|---|
| Open (system name `Approval`) | Open | `IF(PersResponsible=NULL, CreatedBy.Name, PersResponsible.Name)`; evaluation timing unresolved | None configured | Initial/only stage | Submit Evaluation → Completed/Closed; Deactivate Supplier → Cancelled/Closed; failures remain Open | Extracted | Workflow and stage configuration |

## Workflow action details

| Stage | Order | Action | Actor/availability | Ordered behavior | Result | Notification | Source |
|---|---:|---|---|---|---|---|---|
| Open | 1 | Submit Evaluation | Visible user action requiring Workflow Buttons | Require `WFHelper<NoOfEvaluations`, else “Please add at least one Evaluation.” Then require supplier status Active/InActive, else configured status error. On success: complete Closed, then set `WFHelper=NoOfEvaluations`. | Completed/Closed | None | Action configuration |
| Open | 2 | Deactivate Supplier | Visible user action requiring Workflow Buttons | Confirmation asks that associated tasks be Closed. Require `SupplierStatus.Value='Suspended'`; otherwise show the configured error. On success: cancel Closed, then set `DateClosed=TODAY`. | Cancelled/Closed | None | Action configuration |

## Permission exceptions

Comparison standard: `InheritedPermission=true`, `IsStandardPermission=false`; serialized rows are the inspectable variation.

| Scope | Principal | Variation | Raw scope/condition | Standard | Classification/source |
|---|---|---|---|---|---|
| Open | Immediate supervisor | Workflow Buttons + Edit (`ApplyTo=0`); Create + Edit (`ApplyTo=1`) | None | Inherited stage permissions | Extracted; ApplyTo unresolved; Open stage configuration |
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
