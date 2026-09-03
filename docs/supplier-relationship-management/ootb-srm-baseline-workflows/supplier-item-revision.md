# Supplier Item Revision workflow — baseline

| Property | Value |
|---|---|
| Mode | Baseline documentation; no proposed changes |
| Application/object | Product Management / `ProductMgmt_SupItemRevisionObject` (`65aef81a-914a-4012-9797-f3a957202b6e`) |
| Workflow | Supplier Item Revision (`bbb335bf-b04e-4807-800b-e69aa614d409`) |
| Package/source | `SIA - OOTB SRM Export`, version `1.0.0.0`; `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack`; exported 2026-09-02T20:45:59Z; platform 6.6.25.1 |

## Executive flow summary

The workflow starts when `StartWorkflow` is true, enters **Creation**, then **Draft**, then **Approval**. Draft can submit for approval or mark Do Not Supply; both enter Approval with a flag and notification. Approval can complete as Released or Obsolete, cancel as Cancelled, or request supplier review by returning to Draft.

All behavior below is **Extracted** unless marked otherwise.

## Assumptions, limitations, and unresolved items

- `StartWorkflow` is a Boolean field whose exported default expression is `FALSE`; when/how another process changes it is outside this workflow.
- Due date `TODAY+14` on Draft has no calendar/fallback/evaluation timing metadata.
- Permission `ApplyTo=2` has no exported enum label.
- Several actions place transition or terminal operations before later validation operations. Exact order is preserved; transaction rollback semantics are not exported.

## Swimlane diagram

```mermaid
swimlane-beta LR
  accTitle: Supplier Item Revision workflow
  accDescr: A creator advances an item revision to the supplier, the supplier submits or declines supply, and the item owner releases, obsoletes, cancels, or returns the revision.

  subgraph creator[Calculated creator or person responsible]
    CREATE[Creation<br/>Status: Create]
  end

  subgraph supplier[Supplier person responsible]
    DRAFT[Draft<br/>Status: Draft]
  end

  subgraph owner[Calculated item owner]
    APPROVAL[Approval<br/>Status: Approval]
  end

  subgraph system[Intelex workflow system]
    RELEASED((Completed<br/>Status: Released))
    OBSOLETE((Completed<br/>Status: Obsolete))
    CANCELLED((Cancelled<br/>Status: Cancelled))
  end

  CREATE -->|Next| DRAFT
  DRAFT -->|Send for Approval| APPROVAL
  DRAFT -->|Submission validation error| DRAFT
  DRAFT -->|Do Not Supply| APPROVAL
  DRAFT -->|Cancellation-comment error| DRAFT
  APPROVAL -->|Request Review| DRAFT
  APPROVAL -->|Approve validation error| APPROVAL
  APPROVAL -->|Cancel Revision validation error| APPROVAL
  APPROVAL -->|Approve; normal revision| RELEASED
  APPROVAL -->|Approve; obsolete item| OBSOLETE
  APPROVAL -->|Cancel Revision| CANCELLED
```

The native diagram requires Mermaid 11.16.0 or later. The table below preserves cases where a transition or terminal operation is configured before a later validation operation; the diagram shows the configured outcome paths without asserting rollback behavior.

## Stage details

| Stage ID | Stage/status | Owner logic | Due date | Entry | Exit paths | Evidence/source |
|---|---|---|---|---|---|---|
| `b30915b2-ab27-4686-9b33-ec54dcce49d2` | Creation / Create (`085dc2e8-5adf-4f26-8152-5c9527a40c15`) | `IF(PersonResp.Employee=NULL,CreatedBy,PersonResp.Employee)`, RecipientType 2 | None | Initial, when workflow starts | Next → Draft | Extracted; package item `7de43662-c1e6-4895-8cda-7032f31f6559` |
| `289eea10-facc-4146-9af3-12af811c7fe6` | Draft / Draft (`713d1300-5944-4c67-b66a-1b4b2876fc27`) | `PersonResp.Employee`, RecipientType 2 | `TODAY+14` | Next or Request Review | Send for Approval / Do Not Supply → Approval | Extracted; package item `92e1a391-af5d-49f1-b0a5-0add716f0881` |
| `86c49a9c-d1cf-44a1-9ac1-e6247b2fe73d` | Approval / Approval (`efbeac1a-6ac7-437a-913b-045c22a7d7b9`) | `IF(ItemRevisions.Item.CurrentRevision.Owner<>NULL,ItemRevisions.Item.CurrentRevision.Owner,SupplierItem.Item.CurrentRevision.Owner)`, RecipientType 2 | None | Draft actions | Approve → Released/Obsolete; Cancel Revision → Cancelled; Request Review → Draft | Extracted | Package item `bda94fa5-7856-44f1-be50-bfeed99dcb12` |

## Workflow action details

| Stage/order | Action ID/name | Actor | Exact ordered behavior | Result/notification | Source |
|---|---|---|---|---|---|
| Creation / 1 | `aee25564-392f-4b74-b114-c730177b1819` Next | Visible; Perform WF Action | 1. `CreatAttValHelp=TRUE`; 2. transition Draft; 3. if Name or `ParNumberHelper` null, error; else if `RevisionNumber=0`, set `SupplierItem=GETRELATED("ProductMgmt_SupplierItemObject", "SuppPartNumber", ParNumberHelper,"CompPP", CompPP,"Item",ItemRevisions.Item)`. | Draft; no notification | `542f3f63-cd2b-4122-9de5-c15c35493815` |
| Draft / 1 | `740334d6-cd8b-4fda-94ed-5a78b97b55ba` Send for Approval | Visible; Perform WF Action | For non-obsolete revision require no incomplete supplier attributes. Then require non-null Comment. On success: append formatted comment through `GETRELATED`, clear Comment, `ValidateAtts=TRUE`, transition Approval, notify, `Cancelled=FALSE`. | Approval; template `fd85407b-eacc-4d27-b251-7a38093fc8f6` to Item Coordinator group plus `ItemRevisions.Owner` | `81883e6e-f5d1-4685-823d-d398967b2f05` |
| Draft / 2 | `8b8ba700-67da-4215-b4a2-ad1d5faaada2` Do Not Supply | Visible; Perform WF Action | Require Comment. Transition Approval; notify; `Cancelled=TRUE`; append formatted comment; clear Comment. Otherwise show configured cancellation-comment error. | Approval; template `74b1846b-d3ae-4c25-9313-5243bc85cd0d` to Item Coordinator plus `ItemRevisions.Owner` | `251269cd-2549-4981-b68b-65f5f72a154a` |
| Approval / 1 | `a9c890cd-d1af-49e2-b57d-d99ae9e78ad8` Approve | Visible; Perform WF Action | 1. `CurrentRevHelp=TRUE`. 2. If obsolete: `SupItemStatHelp=FALSE`, set Removed status via `GETRELATED`, complete Obsolete, clear current-revision link. Else: `SupItemStatHelp=TRUE`, complete Released, clear supplier-item current revision, set `CurItemRevisionId=ItemRevisionsId`. 3. For non-obsolete, error if approval decision is not true. 4. Error if Comment null; else append/clear comment. 5. `DateApproved=NOW`. | Completed Released (`aed9733c-4251-458d-aad4-e06f2aec7982`) or Obsolete (`546e3da8-f28b-4b84-bd73-05ecb1503e94`); no notification | `a069fe96-54d9-47bf-a3ea-216895b69b9f` |
| Approval / 2 | `3607897a-6d46-4a93-99ae-2dcffe715ca2` Request Review | Visible; Perform WF Action | 1. transition Draft. 2. If approval decision true, error. Otherwise if Comment null, error; else append/clear comment, `ValidateAtts=FALSE`, notify. | Draft; template `dae9e309-e714-4a51-9cfd-83abb406854a` to `PersonResp.Employee` | `25258cbb-1950-4693-8c9f-ee373fe6e5f2` |
| Approval / 3 | `b964735b-cade-4e36-8133-0831670ab884` Cancel Revision | Visible; Perform WF Action | Error if approval decision true. Then error if Comment null; else append/clear comment and cancel as Cancelled. | Cancelled (`5e388306-7b15-4a2d-9840-69d3aaa1992a`); no notification | `55f9ce79-d7b3-416a-8ecc-d214878057c2` |

## Permission exceptions

Comparison standard: Creation and Draft set `InheritedPermission=false`; Approval sets it true. All action records require Perform WF Action.

| Scope | Principal | Variation | Raw scope | Standard | Evidence/source |
|---|---|---|---|---|---|
| Creation, Draft, Approval | Person Responsible | Delete, Edit, Perform WF Action, Create | `ApplyTo=2` | Stage-specific serialized permissions | Extracted; all stage ACLs |
| Creation, Draft, Approval | Item Coordinator | Delete, Edit, Perform WF Action, Create | `ApplyTo=2` | Stage-specific serialized permissions | Extracted; all stage ACLs |
| Creation, Draft, Approval | Item Owner | View only | `ApplyTo=2` | Stage-specific serialized permissions | Extracted; all stage ACLs |

## Email notification triggers

| ID | Trigger/condition | Template ID/name | Recipient logic | Timing/evidence |
|---|---|---|---|---|
| `SIR-N1` | Workflow start when `StartWorkflow` starts workflow | `2d77d02a-d7b3-4dd4-90de-d471decaf827` / Item revision has been submitted to supplier | System Subject Person Responsible | Start-notification record `4447acfb-b243-4c43-b4f2-b62486840e32` |
| `SIR-N2` | Send for Approval succeeds | `fd85407b-eacc-4d27-b251-7a38093fc8f6` / sent for approval | Fixed Item Coordinator (`fce368b6-d508-4ed8-aecc-5bed53361bec`) plus field `ItemRevisions.Owner` | After transition; action `740334d6-cd8b-4fda-94ed-5a78b97b55ba` |
| `SIR-N3` | Do Not Supply with Comment | `74b1846b-d3ae-4c25-9313-5243bc85cd0d` / provisioning rejected | Item Coordinator plus `ItemRevisions.Owner` | After transition; action `8b8ba700-67da-4215-b4a2-ad1d5faaada2` |
| `SIR-N4` | Request Review passes decision/comment checks | `dae9e309-e714-4a51-9cfd-83abb406854a` / reconsideration required | `PersonResp.Employee` | After transition and set-values; action `3607897a-6d46-4a93-99ae-2dcffe715ca2` |

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
