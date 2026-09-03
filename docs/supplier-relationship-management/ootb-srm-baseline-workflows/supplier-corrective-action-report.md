# Supplier Corrective Action Report workflow — baseline

| Property | Value |
|---|---|
| Mode | Baseline documentation; no proposed changes |
| Application/object | Corrective Action Reporting / `CAR_SCARObject` (`b872c183-194b-4939-a078-b5425f03fe97`) |
| Workflow | Supplier Corrective Action Report (`12d05fe8-9437-41e8-ad04-e88839941dcf`) |
| Package/source | `SIA - OOTB SRM Export`, version `1.0.0.0`; `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack`; exported 2026-09-02T20:45:59Z; platform 6.6.25.1 |

## Executive flow summary

The record starts in **Draft**, assigned to Reported By. Assign moves it to **Root Cause & Implementation**, owned by Assignee. Verify requires every action plan to be closed, then moves to **Verification of Effectiveness**, owned by the Quality Management Role. That stage can complete the SCAR as Closed or return it for further action.

All behavior below is **Extracted** unless marked otherwise.

## Assumptions, limitations, and unresolved items

- Recipient types 3 and 5 and permission `ApplyTo` values 1/2 are retained raw.
- Draft has `DueDateLengthType=2`, `DueDateLengthValue=1`; the unit, reference date, calendar, and calculation timing are not labelled.
- Due-date expression timing for Verification is not exported.

## Swimlane diagram

```mermaid
swimlane-beta LR
  accTitle: Supplier Corrective Action Report workflow
  accDescr: The reporter assigns the SCAR, the assignee completes root cause and implementation work, and Quality Management verifies effectiveness or returns it for further action.

  subgraph reporter[Reported By]
    DRAFT[Draft<br/>Status: Draft]
  end

  subgraph assignee[Assignee]
    ROOT[Root Cause & Implementation<br/>Status: Open]
    CHECK{All action plans closed?}
  end

  subgraph quality[Quality Management Role]
    VERIFY[Verification of Effectiveness<br/>Status: Open]
    COMPLETE_CHECK{Verification fields complete?}
  end

  subgraph system[Intelex workflow system]
    CLOSED((Completed<br/>Status: Closed))
  end

  DRAFT -->|Assign| ROOT
  ROOT -->|Verify| CHECK
  CHECK -->|Yes| VERIFY
  CHECK -->|No: error| ROOT
  VERIFY -->|Close| COMPLETE_CHECK
  COMPLETE_CHECK -->|Yes| CLOSED
  COMPLETE_CHECK -->|No: error| VERIFY
  VERIFY -->|Further Action Required| ROOT
```

The native diagram requires Mermaid 11.16.0 or later.

## Stage details

| Stage ID | Stage/status | Responsible-person logic | Due-date logic | Entry | Exit paths | Evidence/source |
|---|---|---|---|---|---|---|
| `d6887883-c0a8-4951-b4e4-6ed341913f18` | Draft / Draft (`3356ef30-d911-4ddc-910b-036b638ff8a3`) | RecipientType 3; property Reported By (`b60e8985-feaf-4bb5-b601-11fda4bec80b`) | Raw length type 2/value 1 | Initial | Assign → Root Cause & Implementation | Extracted; package item `7367816e-cfbd-4c88-96b7-810bf67ce226` |
| `cd87cf31-0ebc-4e60-a47f-58006ab3b109` | Root Cause & Implementation / Open (`a822a96e-4007-4a8f-9ca1-8fbd5a119321`) | RecipientType 3; property Assignee (`276f5dc2-905e-4416-ac46-e22e51ddcdc1`) | Property Due Date (`774209fd-39d4-483f-9486-51b05905d8c7`) | Assign or Further Action Required | Verify → Verification when all action plans closed | Extracted; package item `b1c80987-7447-474a-9790-6755da241b14` |
| `817636eb-7c49-4018-9db6-ff5ec8ee9e2f` | Verification of Effectiveness / Open | RecipientType 5; Quality Management Role (`a8559924-fc9e-4ff8-b2db-57e9471a1d9e`) | `IF(COUNT(EffectReviewLog) > 0, MAX(EffectReviewLog.NextReviewDate), WFDateHelper+3)` | Verify | Close → Completed/Closed; Further Action Required → Root Cause & Implementation | Extracted; package item `0f3595b5-6574-44e0-9482-ae9c8525fea3` |

## Workflow action details

| Stage/order | Action ID/name | Actor | Ordered behavior | Result/notification | Source |
|---|---|---|---|---|---|
| Draft / 1 | `0abf01af-1538-41ff-832f-7afbf87a6619` Assign | Visible; Workflow permission | 1. transition Root Cause & Implementation; 2. notify `Assignee`. No action validation is configured. | Root Cause & Implementation; template `978d80c4-f787-4792-a665-4710ae48c04d`, “SCAR has been assigned to you.” | `0117e390-17d2-4710-bbb5-30baa45df8dc` |
| Root Cause & Implementation / 1 | `f25f3360-7f6d-4fb1-947d-23cac18499de` Verify | Visible; Workflow permission | If `COUNT(FILTER(ActionPlan.Workflow.WorkflowStatus,"=","Open")) >0`, show configured all-action-plans-closed error. Otherwise: set `WFDateHelper=TODAY()`, transition Verification, notify Quality Management Role. | Verification; template `c953e0c7-28db-40c9-aa0c-5b554d9d458d`, “SCAR is ready for Verification” | `8fc2dab9-8fb9-442b-b9b2-4e9229f9374b` |
| Verification / 1 | `405647ad-49c7-4390-be64-2d8609ea45f0` Close | Visible; Workflow permission | If any of `VerifiedEff`, `VerificatNotes`, `VerificationBy`, `VerificatDate` is null, show configured error. Otherwise: 1. notify CreatedBy and Quality Management Role; 2. complete Closed; 3. set `DateClosed=TODAY()`. | Completed/Closed (`3890ec41-5efd-402a-b6cb-525147e52033`); template `3fb88539-ecae-41ea-a4fa-497d39671a4d`, “SCAR has been Closed” | `b4dbcfd6-4221-4071-a8c6-3d81f1a5e742` |
| Verification / 2 | `95028afa-b5a7-45a8-8850-496c1a6f1869` Further Action Required | Visible; Workflow permission | Transition Root Cause & Implementation. | Root Cause & Implementation; no notification | `71a795f7-d45a-4d1d-ab63-bec57559bd05` |

## Permission exceptions

Comparison standard: all stages have `InheritedPermission=true`, `IsStandardPermission=false`; action buttons require Workflow.

| Scope | Principal | Serialized variation | Raw scope | Evidence/source |
|---|---|---|---|---|
| Draft | Person Responsible; Immediate supervisor | Delete for `ApplyTo=1`; View Security + Workflow + Modify for `ApplyTo=2` | 1/2 | Stage `d6887883-c0a8-4951-b4e4-6ed341913f18` |
| Draft | Quality Managers | Delete + Workflow + Modify | 2 | Same stage |
| Root Cause & Implementation | Quality Managers | Delete + Workflow + Modify | 2 | Stage `cd87cf31-0ebc-4e60-a47f-58006ab3b109` |
| Root Cause & Implementation | Person Responsible; Immediate supervisor | Delete for 1; View Security + Workflow + Modify for 2 | 1/2 | Same stage |
| Verification of Effectiveness | Person Responsible; Immediate supervisor | Delete for 1; View Security + Workflow + Modify for 2 | 1/2 | Stage `817636eb-7c49-4018-9db6-ff5ec8ee9e2f` |
| Verification of Effectiveness | Quality Managers | Delete + Workflow + Modify | 2 | Same stage |

## Email notification triggers

| ID | Trigger/condition | Template ID/name | Recipient logic | Timing |
|---|---|---|---|---|
| `SCAR-N1` | Assign action | `978d80c4-f787-4792-a665-4710ae48c04d` / SCAR assigned | Field `Assignee` | After transition |
| `SCAR-N2` | Verify, when no action plan workflow is Open | `c953e0c7-28db-40c9-aa0c-5b554d9d458d` / ready for verification | Role Quality Management Role | After set-value and transition |
| `SCAR-N3` | Close, when all four verification fields are non-null | `3fb88539-ecae-41ea-a4fa-497d39671a4d` / SCAR closed | Field `CreatedBy` plus Quality Management Role | Before completion and DateClosed set-value |

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
