# Certification Requirement workflow — baseline

| Property | Value |
|---|---|
| Mode | Baseline documentation; no proposed changes |
| Application/object | Supplier Management Framework / `SupplierMgmt_CertRequirementObject` |
| Workflow | Certification Requirement |
| Package/source | `SIA - OOTB SRM Export`, version `1.0.0.0`; `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack`; exported 2026-09-02T20:45:59Z; platform 6.6.25.1 |

## Executive flow summary

From **Draft**, a requirement is assigned to a supplier contact or archived when certification is not required. Assigned work can be submitted for review or cancellation review. Review can approve or reject back to Assigned, or archive. Archive can reactivate to Draft. A configured **Closed** stage contains the only completion action, but no configured transition reaches that stage.

All behavior below is **Extracted** unless marked otherwise.

## Assumptions, limitations, and unresolved items

- Recipient types 2 and 5 and permission `ApplyTo` values are raw enum values without exported labels.
- Assigned uses field `AuditDueDate` directly; evaluation timing/calendar/fallback are absent.
- Closed uses `RecipientType=4` with no recipient expression/property/role, so ownership is unresolved.
- Statuses Approval and Open exist but are not assigned to any exported stage.

## Stage details

| Stage/status | Responsible-person logic | Due date | Entry | Exit paths | Evidence/source |
|---|---|---|---|---|---|
| Draft / Draft | `SupplierAbs.PersResponsible`, RecipientType 2 | None | Initial or Activate Requirement | Assign → Assigned; Archive → Archive | Extracted; stage configuration |
| Assigned / Assigned | `AssignedTo.Employee.Name`, RecipientType 2 | Property `AuditDueDate` | Assign, Approve, or Reject | Submit for Review/Cancellation → Review | Extracted; stage configuration |
| Review / In Review | `IF(Approver=NULL, SupplierAbs.PersResponsible.Name, Approver.Name)`, RecipientType 2 | None | Supplier submission or cancellation request | Approve/Reject → Assigned; Archive → Archive | Extracted; stage configuration |
| Archive / Archived | Recipient role Supplier Certification Manager, RecipientType 5 | None | Archive from Draft or Review | Activate Requirement → Draft | Extracted; stage configuration |
| Closed / Closed | RecipientType 4; no recipient reference | None | No incoming transition identified | Close → Completed/Closed | Extracted/Unresolved; stage configuration |

## Workflow action details

| Stage/order | Action | Actor | Conditions, ordered automation, and result | Notification | Source |
|---|---|---|---|---|---|
| Draft / 1 | Assign | Visible; Workflow Buttons | Require `CertNotRequired=FALSE`; then require Audit Due Date, Assigned To, and Approver. On success transition Assigned and notify. Errors otherwise use the two configured messages. | Assigned-for-submission template to `AssignedTo.Employee` | Action configuration |
| Draft / 2 | Archive | Visible; Workflow Buttons | Require `CertNotRequired=TRUE`, else error; transition Archive. | None | Action configuration |
| Archive / 1 | Activate Requirement | Visible; Workflow Buttons | Require `CertNotRequired=FALSE`, else error. Transition Draft; set `AuditDueDate`, `AssignedTo`, `Approver`, `SupComments`, `DateCancelled` to null; set `SupCommHelper=FALSE`. | None | Action configuration |
| Assigned / 1 | Submit for Review | Visible; Workflow Buttons | Require `WFHelper<NbOfAudits`, else audit-history error. Transition Review; notify; clear `AccpCriteriamet`, `ApprovalDate`, `NewDueDate`, `Comments`, and `AuditDueDate`. | Submitted-for-review template to `Approver` | Action configuration |
| Assigned / 2 | Submit for Cancellation | Visible; Workflow Buttons | Require supplier remarks (`SupComments` neither null nor empty). Transition Review; set `SupCommHelper=TRUE`, `DateCancelled=TODAY`; clear acceptance/approval/new-date/comments/audit-due fields; notify. | Cancellation-requested template to `Approver` | Action configuration |
| Review / 1 | Approve | Visible; Workflow Buttons | Require certification required, acceptance criteria true, and latest audit result not Fail/null. Transition Assigned; set `AuditDueDate=LastAuditHist.ExpirationDate`, `WFHelper=NbOfAudits`, increment `NbOfApprovals`; notify. | Approval template to `AssignedTo.Employee` | Action configuration |
| Review / 2 | Reject | Visible; Workflow Buttons | Require certification required and acceptance criteria false. Transition Assigned; set `WFHelper=NbOfAudits`, `AuditDueDate=NewDueDate`, increment approvals; notify; set `SupCommHelper=FALSE`, `DateCancelled=NULL`. | Rejection template to `AssignedTo.Employee` | Action configuration |
| Review / 3 | Archive | Visible; Workflow Buttons | Require `CertNotRequired=TRUE`; transition Archive; clear acceptance, approval date, new due date, comments; notify. | Archived template to `AssignedTo.Employee` | Action configuration |
| Closed / 1 | Close | Visible; Workflow Buttons | Complete with Closed status. | None | Action configuration |

## Permission exceptions

Comparison standard: all stages set `InheritedPermission=true`, `IsStandardPermission=false`. All listed action buttons separately require Workflow Buttons.

| Scope | Principal | Serialized variation | Raw scope | Evidence/source |
|---|---|---|---|---|
| Draft | Person Responsible; Immediate supervisor | Edit + Workflow Buttons for `ApplyTo=0`; empty lists for `ApplyTo=1` | 0/1 | Draft stage configuration |
| Draft | SRM Corporate Full Access | Empty Allow/Deny | 0 | Same stage; runtime effect unresolved |
| Assigned | Person Responsible; Immediate supervisor | Edit + Workflow Buttons (`ApplyTo=0`); empty lists (`ApplyTo=1`); Create + Edit on Audit History (`ApplyTo=3`) | 0/1/3 | Assigned stage configuration |
| Review, Archive | Person Responsible; Immediate supervisor | Edit + Workflow Buttons | 0 and 1 | Review and Archive stage configurations |
| Closed | Person Responsible | Edit + Workflow Buttons for 0 and 1 | 0/1 | Closed stage configuration |
| Closed | Immediate supervisor | Edit + Workflow Buttons for 0; Workflow Buttons only for 1 | 0/1 | Same stage |

Empty rows are preserved as **Unresolved**, not interpreted as grants or denials.

## Email notification triggers

| ID | Trigger/condition | Template name | Recipient | Timing |
|---|---|---|---|---|
| `CR-N1` | Assign succeeds | assigned for submission | `AssignedTo.Employee` | After transition |
| `CR-N2` | Submit for Review finds an audit | submitted for review | `Approver` | After transition, before field clears |
| `CR-N3` | Submit for Cancellation has remarks | cancellation requested | `Approver` | After transition and set-values |
| `CR-N4` | Approve passes all checks | approved | `AssignedTo.Employee` | After transition/set-values |
| `CR-N5` | Reject passes checks | rejected | `AssignedTo.Employee` | After transition/set-values |
| `CR-N6` | Review Archive with Not Required true | archived | `AssignedTo.Employee` | After transition/field clears |

All rows are Extracted from the corresponding actions above. To/CC/BCC is not exported.

## Unresolved references and validation findings

| Finding | Classification | Result |
|---|---|---|
| Stable references | Extracted | All transition, terminal status, template, recipient, permission, and set-value references resolve. |
| Unreachable stage | Extracted | Closed has no incoming transition from any reachable stage. Its Close action and the workflow's only terminal completion are therefore unreachable through the exported action graph. |
| Cycles | Extracted | Draft ↔ Archive and Assigned ↔ Review cycles have exits/guards; intent is not separately documented. |
| Status usage | Extracted | Approval and Open statuses are registered but not associated with any exported stage. |
| Action order | Extracted | Orders are unique within each stage. |
| Missing owner | Unresolved | Closed RecipientType 4 has no recipient expression/property/role. |
| Permission semantics | Unresolved | ApplyTo enum labels and empty ACL rows are absent from the package. |
