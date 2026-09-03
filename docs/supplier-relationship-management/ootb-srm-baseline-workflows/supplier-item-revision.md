# Supplier Item Revision workflow — baseline

| Property | Value |
|---|---|
| Mode | Baseline documentation; no proposed changes |
| Application/object | Product Management / `ProductMgmt_SupItemRevisionObject` |
| Workflow | Supplier Item Revision |
| Package/source | `SIA - OOTB SRM Export`, version `1.0.0.0`; `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack`; exported 2026-09-02T20:45:59Z; platform 6.6.25.1 |

## Executive flow summary

The workflow starts when `StartWorkflow` is true, enters **Creation**, then **Draft**, then **Approval**. Draft can submit for approval or mark Do Not Supply; both enter Approval with a flag and notification. Approval can complete as Released or Obsolete, cancel as Cancelled, or request supplier review by returning to Draft.

All behavior below is **Extracted** unless marked otherwise.

## Assumptions, limitations, and unresolved items

- `StartWorkflow` is a Boolean field whose exported default expression is `FALSE`; when/how another process changes it is outside this workflow.
- Due date `TODAY+14` on Draft has no calendar/fallback/evaluation timing metadata.
- Permission `ApplyTo=2` has no exported enum label.
- Several actions place transition or terminal operations before later validation operations. Exact order is preserved; transaction rollback semantics are not exported.

## Stage details

| Stage/status | Owner logic | Due date | Entry | Exit paths | Evidence/source |
|---|---|---|---|---|---|
| Creation / Create | `IF(PersonResp.Employee=NULL,CreatedBy,PersonResp.Employee)`, RecipientType 2 | None | Initial, when workflow starts | Next → Draft | Extracted; stage configuration |
| Draft / Draft | `PersonResp.Employee`, RecipientType 2 | `TODAY+14` | Next or Request Review | Send for Approval / Do Not Supply → Approval | Extracted; stage configuration |
| Approval / Approval | `IF(ItemRevisions.Item.CurrentRevision.Owner<>NULL,ItemRevisions.Item.CurrentRevision.Owner,SupplierItem.Item.CurrentRevision.Owner)`, RecipientType 2 | None | Draft actions | Approve → Released/Obsolete; Cancel Revision → Cancelled; Request Review → Draft | Extracted; stage configuration |

## Workflow action details

| Stage/order | Action | Actor | Exact ordered behavior | Result/notification | Source |
|---|---|---|---|---|---|
| Creation / 1 | Next | Visible; Perform WF Action | 1. `CreatAttValHelp=TRUE`; 2. transition Draft; 3. if Name or `ParNumberHelper` null, error; else if `RevisionNumber=0`, set `SupplierItem=GETRELATED("ProductMgmt_SupplierItemObject", "SuppPartNumber", ParNumberHelper,"CompPP", CompPP,"Item",ItemRevisions.Item)`. | Draft; no notification | Action configuration |
| Draft / 1 | Send for Approval | Visible; Perform WF Action | For non-obsolete revision require no incomplete supplier attributes. Then require non-null Comment. On success: append formatted comment through `GETRELATED`, clear Comment, `ValidateAtts=TRUE`, transition Approval, notify, `Cancelled=FALSE`. | Approval; sent-for-approval template to Item Coordinator group plus `ItemRevisions.Owner` | Action configuration |
| Draft / 2 | Do Not Supply | Visible; Perform WF Action | Require Comment. Transition Approval; notify; `Cancelled=TRUE`; append formatted comment; clear Comment. Otherwise show configured cancellation-comment error. | Approval; provisioning-rejected template to Item Coordinator plus `ItemRevisions.Owner` | Action configuration |
| Approval / 1 | Approve | Visible; Perform WF Action | 1. `CurrentRevHelp=TRUE`. 2. If obsolete: `SupItemStatHelp=FALSE`, set Removed status via `GETRELATED`, complete Obsolete, clear current-revision link. Else: `SupItemStatHelp=TRUE`, complete Released, clear supplier-item current revision, set `CurItemRevisionId=ItemRevisionsId`. 3. For non-obsolete, error if approval decision is not true. 4. Error if Comment null; else append/clear comment. 5. `DateApproved=NOW`. | Completed Released or Obsolete; no notification | Action configuration |
| Approval / 2 | Request Review | Visible; Perform WF Action | 1. transition Draft. 2. If approval decision true, error. Otherwise if Comment null, error; else append/clear comment, `ValidateAtts=FALSE`, notify. | Draft; reconsideration-required template to `PersonResp.Employee` | Action configuration |
| Approval / 3 | Cancel Revision | Visible; Perform WF Action | Error if approval decision true. Then error if Comment null; else append/clear comment and cancel as Cancelled. | Cancelled; no notification | Action configuration |

## Permission exceptions

Comparison standard: Creation and Draft set `InheritedPermission=false`; Approval sets it true. All action records require Perform WF Action.

| Scope | Principal | Variation | Raw scope | Standard | Evidence/source |
|---|---|---|---|---|---|
| Creation, Draft, Approval | Person Responsible | Delete, Edit, Perform WF Action, Create | `ApplyTo=2` | Stage-specific serialized permissions | Extracted; all stage ACLs |
| Creation, Draft, Approval | Item Coordinator | Delete, Edit, Perform WF Action, Create | `ApplyTo=2` | Stage-specific serialized permissions | Extracted; all stage ACLs |
| Creation, Draft, Approval | Item Owner | View only | `ApplyTo=2` | Stage-specific serialized permissions | Extracted; all stage ACLs |

## Email notification triggers

| ID | Trigger/condition | Template name | Recipient logic | Timing/evidence |
|---|---|---|---|---|
| `SIR-N1` | Workflow start when `StartWorkflow` starts workflow | Item revision has been submitted to supplier | System Subject Person Responsible | Start-notification configuration |
| `SIR-N2` | Send for Approval succeeds | sent for approval | Fixed Item Coordinator plus field `ItemRevisions.Owner` | After transition; action configuration |
| `SIR-N3` | Do Not Supply with Comment | provisioning rejected | Item Coordinator plus `ItemRevisions.Owner` | After transition; action configuration |
| `SIR-N4` | Request Review passes decision/comment checks | reconsideration required | `PersonResp.Employee` | After transition and set-values; action configuration |

To/CC/BCC distinctions are not exported.

## Unresolved references and validation findings

| Finding | Classification | Result |
|---|---|---|
| Stage/status/template/recipient references | Extracted | All resolve. All stages are reachable; terminal outcomes distinguish Released, Obsolete, and Cancelled. |
| Set-value target | Unresolved | `CurItemRevisionId` used by Approve is not exported as a field node under that exact name. A `CurItemRevision` relationship exists, but equivalence is not asserted. |
| Operation order | Extracted | Next and Request Review transition before their later validation branches. Approve executes completion within its second operation before later approval-decision/comment validation and `DateApproved`. Runtime rollback/short-circuit behavior is not supplied. |
| Registered unused statuses | Extracted | Closed is registered but is not used by a stage or terminal action. |
| Action order | Extracted | Orders are unique within stages. |
| Due date | Unresolved | `TODAY+14` lacks calendar and evaluation timing metadata. |
