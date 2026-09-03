# Supplier Corrective Action Report workflow — baseline

| Property | Value |
|---|---|
| Mode | Baseline documentation; no proposed changes |
| Application/object | Corrective Action Reporting / `CAR_SCARObject` |
| Workflow | Supplier Corrective Action Report |
| Package/source | `SIA - OOTB SRM Export`, version `1.0.0.0`; `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack`; exported 2026-09-02T20:45:59Z; platform 6.6.25.1 |

## Executive flow summary

The record starts in **Draft**, assigned to Reported By. Assign moves it to **Root Cause & Implementation**, owned by Assignee. Verify requires every action plan to be closed, then moves to **Verification of Effectiveness**, owned by the Quality Management Role. That stage can complete the SCAR as Closed or return it for further action.

All behavior below is **Extracted** unless marked otherwise.

## Assumptions, limitations, and unresolved items

- Recipient types 3 and 5 and permission `ApplyTo` values 1/2 are retained raw.
- Draft has `DueDateLengthType=2`, `DueDateLengthValue=1`; the unit, reference date, calendar, and calculation timing are not labelled.
- Due-date expression timing for Verification is not exported.

## Stage details

| Stage/status | Responsible-person logic | Due-date logic | Entry | Exit paths | Evidence/source |
|---|---|---|---|---|---|
| Draft / Draft | RecipientType 3; property Reported By | Raw length type 2/value 1 | Initial | Assign → Root Cause & Implementation | Extracted; stage configuration |
| Root Cause & Implementation / Open | RecipientType 3; property Assignee | Property Due Date | Assign or Further Action Required | Verify → Verification when all action plans closed | Extracted; stage configuration |
| Verification of Effectiveness / Open | RecipientType 5; Quality Management Role | `IF(COUNT(EffectReviewLog) > 0, MAX(EffectReviewLog.NextReviewDate), WFDateHelper+3)` | Verify | Close → Completed/Closed; Further Action Required → Root Cause & Implementation | Extracted; stage configuration |

## Workflow action details

| Stage/order | Action | Actor | Ordered behavior | Result/notification | Source |
|---|---|---|---|---|---|
| Draft / 1 | Assign | Visible; Workflow permission | 1. transition Root Cause & Implementation; 2. notify `Assignee`. No action validation is configured. | Root Cause & Implementation; template “SCAR has been assigned to you.” | Action configuration |
| Root Cause & Implementation / 1 | Verify | Visible; Workflow permission | If `COUNT(FILTER(ActionPlan.Workflow.WorkflowStatus,"=","Open")) >0`, show configured all-action-plans-closed error. Otherwise: set `WFDateHelper=TODAY()`, transition Verification, notify Quality Management Role. | Verification; template “SCAR is ready for Verification” | Action configuration |
| Verification / 1 | Close | Visible; Workflow permission | If any of `VerifiedEff`, `VerificatNotes`, `VerificationBy`, `VerificatDate` is null, show configured error. Otherwise: 1. notify CreatedBy and Quality Management Role; 2. complete Closed; 3. set `DateClosed=TODAY()`. | Completed/Closed; template “SCAR has been Closed” | Action configuration |
| Verification / 2 | Further Action Required | Visible; Workflow permission | Transition Root Cause & Implementation. | Root Cause & Implementation; no notification | Action configuration |

## Permission exceptions

Comparison standard: all stages have `InheritedPermission=true`, `IsStandardPermission=false`; action buttons require Workflow.

| Scope | Principal | Serialized variation | Raw scope | Evidence/source |
|---|---|---|---|---|
| Draft | Person Responsible; Immediate supervisor | Delete for `ApplyTo=1`; View Security + Workflow + Modify for `ApplyTo=2` | 1/2 | Draft stage configuration |
| Draft | Quality Managers | Delete + Workflow + Modify | 2 | Same stage |
| Root Cause & Implementation | Quality Managers | Delete + Workflow + Modify | 2 | Root Cause & Implementation stage configuration |
| Root Cause & Implementation | Person Responsible; Immediate supervisor | Delete for 1; View Security + Workflow + Modify for 2 | 1/2 | Same stage |
| Verification of Effectiveness | Person Responsible; Immediate supervisor | Delete for 1; View Security + Workflow + Modify for 2 | 1/2 | Verification of Effectiveness stage configuration |
| Verification of Effectiveness | Quality Managers | Delete + Workflow + Modify | 2 | Same stage |

## Email notification triggers

| ID | Trigger/condition | Template name | Recipient logic | Timing |
|---|---|---|---|---|
| `SCAR-N1` | Assign action | SCAR assigned | Field `Assignee` | After transition |
| `SCAR-N2` | Verify, when no action plan workflow is Open | ready for verification | Role Quality Management Role | After set-value and transition |
| `SCAR-N3` | Close, when all four verification fields are non-null | SCAR closed | Field `CreatedBy` plus Quality Management Role | Before completion and DateClosed set-value |

To/CC/BCC distinctions are not exported.

## Unresolved references and validation findings

| Finding | Classification | Result |
|---|---|---|
| Reference resolution | Extracted | All stage, status, template, role, field, permission, and set-value references resolve. |
| Structure | Extracted | One initial stage; all stages reachable; explicit completion path; no dead-end nonterminal stage. |
| Cycle | Extracted | Root Cause & Implementation ↔ Verification has an exit through Close. |
| Action order | Extracted | Verification orders 1 and 2 are unique; other stages have one action. |
| Due-date units/timing | Unresolved | Draft length type 2/value 1 and expression evaluation calendars/timing are not labelled. |
| Completion ordering | Extracted | Close sends email before completing, then sets DateClosed; rollback semantics are absent. |
| Permission enums | Unresolved | `ApplyTo` values 1 and 2 lack exported enum labels. |
