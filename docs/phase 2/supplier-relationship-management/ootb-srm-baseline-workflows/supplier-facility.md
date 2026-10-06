# Supplier Facility workflow — baseline

| Property | Value |
|---|---|
| Mode | Baseline documentation; no proposed changes |
| Application/object | Supplier Management Framework / `SupplierMgmt_FacilityObject` |
| Workflow | Supplier Facility |
| Package | `SIA - OOTB SRM Export`, version `1.0.0.0` |
| Source/as of | `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack`; exported 2026-09-02T20:45:59Z; platform 6.6.25.1 |

## Executive flow summary

The active, recurring workflow starts in **Open**. The calculated owner is Person Responsible, falling back to the creator's name when Person Responsible is null. **Submit Evaluation** completes the workflow as Closed after evaluation-count and supplier-status checks. **Deactivate Supplier** cancels the workflow as Closed when Supplier Status is Suspended. The workflow's configured “date not required” final status is also Closed.

All behavior below is **Extracted** unless marked otherwise.

## Assumptions, limitations, and unresolved items

- `RecipientType=2` and serialized permission `ApplyTo` numeric codes are retained because the package does not provide enum labels.
- No due-date expression is configured. Recurrence is enabled, but the recurrence settings expose only `ScheduleType=1`, `RescheduleStrategyType=1`, automatic rescheduling enabled, and grace period disabled; units/timing are unresolved.
- Empty `Allow` and `Deny` arrays in serialized ACL rows are recorded without interpreting their runtime effect.

## Stage details

| Stage name | Status | Responsible-person logic | Due-date logic | Entry condition | Exit paths | Evidence/classification | Source |
|---|---|---|---|---|---|---|---|
| Open (system name `Approval`) | Open | Exact: `IF(PersResponsible=NULL, CreatedBy.Name, PersResponsible.Name)`; evaluation timing and null/name return semantics unresolved | None configured | Initial and only stage | Submit Evaluation → Completed/Closed; Deactivate Supplier → Cancelled/Closed; failed checks remain Open | Extracted | Workflow and stage configuration |

## Workflow action details

| Stage | Sort order | Action name | Actor/availability | Ordered execution, decision, set-value, and validation logic | Result | Notification refs | Evidence/classification | Source |
|---|---:|---|---|---|---|---|---|---|
| Open | 1 | Submit Evaluation | Visible user action; no action-level permission reference; stage ACL grants Workflow Buttons to Person Responsible and Immediate supervisor | 1. If `WFHelper<NoOfEvaluations` is false, error: “Please add at least one Evaluation.” 2. If true, require `OR(SupplierStatus.Value='InActive',SupplierStatus.Value='Active')`; otherwise show the configured supplier-status error. 3. Complete as Closed. 4. Set `WFHelper=NoOfEvaluations`. | Completed, status Closed | None identified | Extracted | Action configuration |
| Open | 2 | Deactivate Supplier | Visible user action; no action-level permission reference; stage ACL applies | Confirmation asks that associated tasks be Closed. If `SupplierStatus.Value='Suspended'` is false, error: “The 'Supplier Status' must be 'Suspended' to proceed with supplier deactivation.” If true: 1. cancel as Closed; 2. set `DateClosed=TODAY`. | Cancelled, status Closed | None identified | Extracted | Action configuration |

## Permission exceptions

Comparison standard: the stage has `InheritedPermission=true` and `IsStandardPermission=false`; the serialized stage ACL is therefore documented as the inspectable variation beyond inherited behavior.

| Scope | Principal | Permission variation | Condition/raw scope | Standard compared against | Evidence/classification | Source |
|---|---|---|---|---|---|---|
| Open | Immediate supervisor | Workflow Buttons + Edit for `ApplyTo=0`; Create + Edit for `ApplyTo=1` | No additional condition | Inherited stage permissions | Extracted; `ApplyTo` meaning unresolved | Open stage configuration |
| Open | Person Responsible | Workflow Buttons + Edit for `ApplyTo=0`; Create + Edit for `ApplyTo=1` | No additional condition | Inherited stage permissions | Extracted; `ApplyTo` meaning unresolved | Same stage |
| Open | Supplier User | Serialized rows with empty Allow/Deny for `ApplyTo=0` and `ApplyTo=3` on Audit History, Supplier Evaluation, Documentation Requirement, Certification Requirement, Public Profile, and Component | Runtime effect of empty lists unresolved | Inherited stage permissions | Extracted/Unresolved | Same stage |
| Open / Certification Requirement child | Person Responsible | Serialized `ApplyTo=3` row with empty Allow/Deny | Certification Requirement child object | Inherited stage permissions | Extracted/Unresolved | Same stage |

## Email notification triggers

No workflow-native email notification operation or start-notification relation was identified. The package contains a template named “Supplier Facility evaluation is due,” but no relation from this workflow or its actions establishes a trigger or recipient; it is therefore not represented as a workflow trigger.

## Unresolved references and validation findings

| Finding | Classification | Result |
|---|---|---|
| Graph/action references | Extracted | All stage, status, permission, object, and action references used by this workflow resolve. |
| Initial/terminal structure | Extracted | One initial stage; both user actions have explicit terminal outcomes. Completion and cancellation deliberately share Closed status. |
| Action order | Extracted | Orders 1 and 2 are unique. |
| Terminal operation ordering | Extracted | Submit Evaluation completes before setting `WFHelper`; Deactivate Supplier cancels before setting `DateClosed`. Transaction/rollback behavior is not present in the package. |
| Notification template | Unresolved | The similarly named due template has no workflow trigger/recipient linkage in the workflow graph. |
| Permission enums | Unresolved | Numeric `ApplyTo` values and empty ACL rows cannot be safely translated beyond their exact serialized form. |
