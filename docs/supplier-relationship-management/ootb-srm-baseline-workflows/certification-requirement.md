# Certification Requirement workflow — baseline

| Property | Value |
|---|---|
| Mode | Baseline documentation; no proposed changes |
| Application/object | Supplier Management Framework / `SupplierMgmt_CertRequirementObject` (`e802f725-f639-4c35-897f-c0ae49ebeb6c`) |
| Workflow | Certification Requirement (`c076be56-6bee-4618-8ed4-7b525727a7e3`) |
| Package/source | `SIA - OOTB SRM Export`, version `1.0.0.0`; `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack`; exported 2026-09-02T20:45:59Z; platform 6.6.25.1 |

## Executive flow summary

From **Draft**, a requirement is assigned to a supplier contact or archived when certification is not required. Assigned work can be submitted for review or cancellation review. Review can approve or reject back to Assigned, or archive. Archive can reactivate to Draft. A configured **Closed** stage contains the only completion action, but no configured transition reaches that stage.

All behavior below is **Extracted** unless marked otherwise.

## Assumptions, limitations, and unresolved items

- Recipient types 2 and 5 and permission `ApplyTo` values are raw enum values without exported labels.
- Assigned uses field `AuditDueDate` directly; evaluation timing/calendar/fallback are absent.
- Closed uses `RecipientType=4` with no recipient expression/property/role, so ownership is unresolved.
- Statuses Approval and Open exist but are not assigned to any exported stage.

## Swimlane diagram

```mermaid
swimlane-beta LR
  accTitle: Certification Requirement workflow
  accDescr: Internal owners assign and review certification work, the supplier contact submits evidence, and the certification manager controls archived requirements; the configured Closed stage is unreachable.

  subgraph internal[Calculated internal owner or reviewer]
    DRAFT[Draft<br/>Status: Draft]
    REVIEW[Review<br/>Status: In Review]
  end

  subgraph supplier[Assigned supplier contact]
    ASSIGNED[Assigned<br/>Status: Assigned]
  end

  subgraph manager[Supplier Certification Manager]
    ARCHIVE[Archive<br/>Status: Archived]
  end

  subgraph unresolved[Unresolved stage owner]
    CLOSED[Closed<br/>Status: Closed<br/>unreachable]
  end

  subgraph system[Intelex workflow system]
    DONE((Completed<br/>Status: Closed))
  end

  DRAFT -->|Assign; certification required and fields present| ASSIGNED
  DRAFT -->|Assign validation error| DRAFT
  DRAFT -->|Archive; CertNotRequired=true| ARCHIVE
  DRAFT -->|Archive validation error| DRAFT
  ARCHIVE -->|Activate Requirement; CertNotRequired=false| DRAFT
  ARCHIVE -->|Activation validation error| ARCHIVE
  ASSIGNED -->|Submit for Review; audit exists| REVIEW
  ASSIGNED -->|Review validation error| ASSIGNED
  ASSIGNED -->|Submit for Cancellation; remarks present| REVIEW
  ASSIGNED -->|Cancellation validation error| ASSIGNED
  REVIEW -->|Approve; criteria/audit pass| ASSIGNED
  REVIEW -->|Approve validation error| REVIEW
  REVIEW -->|Reject; criteria No| ASSIGNED
  REVIEW -->|Reject validation error| REVIEW
  REVIEW -->|Archive; CertNotRequired=true| ARCHIVE
  REVIEW -->|Archive validation error| REVIEW
  CLOSED -->|Close| DONE
```

The native diagram requires Mermaid 11.16.0 or later.

## Stage details

| Stage ID | Stage/status | Responsible-person logic | Due date | Entry | Exit paths | Evidence/source |
|---|---|---|---|---|---|---|
| `57273b2b-e2e9-404b-91b1-bbfff8c39616` | Draft / Draft (`5925b542-5014-4049-b5be-fb31f86334f5`) | `SupplierAbs.PersResponsible`, RecipientType 2 | None | Initial or Activate Requirement | Assign → Assigned; Archive → Archive | Extracted; package item `34974c90-0743-48f3-82c7-98aa88d22c88` |
| `4fb0b91d-8215-4172-b379-d2f016f89af1` | Assigned / Assigned (`b503f79b-d266-4c11-8048-79d7a9959e62`) | `AssignedTo.Employee.Name`, RecipientType 2 | Property `AuditDueDate` (`35907afd-5a46-459e-b4e9-969a1a664df6`) | Assign, Approve, or Reject | Submit for Review/Cancellation → Review | Extracted; package item `3a6c3b8f-2f28-42e4-8e28-f7da4846d156` |
| `d5f024dd-2cf7-4c73-80db-487bb980f802` | Review / In Review (`dc699686-68e2-4467-a899-74b03fce4cec`) | `IF(Approver=NULL, SupplierAbs.PersResponsible.Name, Approver.Name)`, RecipientType 2 | None | Supplier submission or cancellation request | Approve/Reject → Assigned; Archive → Archive | Extracted; package item `7e7018c5-cc01-493c-8fff-d83b1876cc43` |
| `557b607d-e479-47c3-a57c-bf8a1e553f00` | Archive / Archived (`13f755a1-d57e-43f9-81b8-41a54bddaee8`) | Recipient role Supplier Certification Manager (`9db98348-c5b3-4a6c-acc8-da01a4a50345`), RecipientType 5 | None | Archive from Draft or Review | Activate Requirement → Draft | Extracted; package item `d9e5ecc1-571e-4268-9959-cb236c183ff2` |
| `ef863b0d-49f2-4647-8f85-7a8c55329f0e` | Closed / Closed (`f1b6ddec-958f-4585-ab25-2c6bc47be599`) | RecipientType 4; no recipient reference | None | No incoming transition identified | Close → Completed/Closed | Extracted/Unresolved; package item `0786db88-c083-448e-bfec-797dbf5fe0c2` |

## Workflow action details

| Stage/order | Action ID/name | Actor | Conditions, ordered automation, and result | Notification | Source |
|---|---|---|---|---|---|
| Draft / 1 | `9979d012-548e-4a9f-9f13-97b7740d6c24` Assign | Visible; Workflow Buttons | Require `CertNotRequired=FALSE`; then require Audit Due Date, Assigned To, and Approver. On success transition Assigned and notify. Errors otherwise use the two configured messages. | `90a79cfe-6da9-488d-a96a-da793e7e8857`, assigned for submission, to `AssignedTo.Employee` | `26e357ad-018f-4292-8567-4229787051f4` |
| Draft / 2 | `10ca4901-1b28-4875-a3da-070ea4c59d91` Archive | Visible; Workflow Buttons | Require `CertNotRequired=TRUE`, else error; transition Archive. | None | `590f957e-cd36-4d1a-ae0b-62f419e4d801` |
| Archive / 1 | `75a84e6e-d5e8-4708-a9a3-98a83d7ccbe6` Activate Requirement | Visible; Workflow Buttons | Require `CertNotRequired=FALSE`, else error. Transition Draft; set `AuditDueDate`, `AssignedTo`, `Approver`, `SupComments`, `DateCancelled` to null; set `SupCommHelper=FALSE`. | None | `f881bfa2-7a42-43bb-95ab-fd2f60da88a3` |
| Assigned / 1 | `6ece5292-212d-4f9f-b274-65cea4c75e6e` Submit for Review | Visible; Workflow Buttons | Require `WFHelper<NbOfAudits`, else audit-history error. Transition Review; notify; clear `AccpCriteriamet`, `ApprovalDate`, `NewDueDate`, `Comments`, and `AuditDueDate`. | `b6468145-0341-4f49-9b20-a552b0af19a6`, submitted for review, to `Approver` | `2dea2b86-cf4b-46fe-b137-d3a5ff54d34b` |
| Assigned / 2 | `442873a8-0ba2-4a87-8da1-b6636e1b1437` Submit for Cancellation | Visible; Workflow Buttons | Require supplier remarks (`SupComments` neither null nor empty). Transition Review; set `SupCommHelper=TRUE`, `DateCancelled=TODAY`; clear acceptance/approval/new-date/comments/audit-due fields; notify. | `92307e7a-9435-43c2-a715-e5c578c2d033`, cancellation requested, to `Approver` | `b845c702-d7e0-4e2d-a9d1-abef6f4c617e` |
| Review / 1 | `01c57070-c717-4f7c-8ef4-7a780f726310` Approve | Visible; Workflow Buttons | Require certification required, acceptance criteria true, and latest audit result not Fail/null. Transition Assigned; set `AuditDueDate=LastAuditHist.ExpirationDate`, `WFHelper=NbOfAudits`, increment `NbOfApprovals`; notify. | `a95999a1-5348-4106-b396-b710e33cf3f5`, approved, to `AssignedTo.Employee` | `295ba603-f785-4c6a-9256-094b572c78fe` |
| Review / 2 | `8d97ac2f-26c5-4c31-ab15-e9a90e804fa2` Reject | Visible; Workflow Buttons | Require certification required and acceptance criteria false. Transition Assigned; set `WFHelper=NbOfAudits`, `AuditDueDate=NewDueDate`, increment approvals; notify; set `SupCommHelper=FALSE`, `DateCancelled=NULL`. | `addc64ad-8b45-40ee-8b6a-eb19f7f20a71`, rejected, to `AssignedTo.Employee` | `f16f3c05-1db5-4d1a-8a0f-b40f5caac910` |
| Review / 3 | `944470f1-9ec0-45fa-beb7-a44ce3890043` Archive | Visible; Workflow Buttons | Require `CertNotRequired=TRUE`; transition Archive; clear acceptance, approval date, new due date, comments; notify. | `b8ef7df3-b209-416c-887a-ac7d920a70db`, archived, to `AssignedTo.Employee` | `a6cafe7e-1e0a-42f8-adbc-217dc7db0819` |
| Closed / 1 | `cb65e53a-4eaa-47ec-a11e-2a65332187a4` Close | Visible; Workflow Buttons | Complete with Closed status. | None | `32f1915f-9b18-4255-89ba-25ddfa8f6506` |

## Permission exceptions

Comparison standard: all stages set `InheritedPermission=true`, `IsStandardPermission=false`. All listed action buttons separately require Workflow Buttons.

| Scope | Principal | Serialized variation | Raw scope | Evidence/source |
|---|---|---|---|---|
| Draft | Person Responsible; Immediate supervisor | Edit + Workflow Buttons for `ApplyTo=0`; empty lists for `ApplyTo=1` | 0/1 | Stage `57273b2b-e2e9-404b-91b1-bbfff8c39616` |
| Draft | SRM Corporate Full Access | Empty Allow/Deny | 0 | Same stage; runtime effect unresolved |
| Assigned | Person Responsible; Immediate supervisor | Edit + Workflow Buttons (`ApplyTo=0`); empty lists (`ApplyTo=1`); Create + Edit on Audit History (`ApplyTo=3`) | 0/1/3 | Stage `4fb0b91d-8215-4172-b379-d2f016f89af1` |
| Review, Archive | Person Responsible; Immediate supervisor | Edit + Workflow Buttons | 0 and 1 | Stages `d5f024dd-2cf7-4c73-80db-487bb980f802`, `557b607d-e479-47c3-a57c-bf8a1e553f00` |
| Closed | Person Responsible | Edit + Workflow Buttons for 0 and 1 | 0/1 | Stage `ef863b0d-49f2-4647-8f85-7a8c55329f0e` |
| Closed | Immediate supervisor | Edit + Workflow Buttons for 0; Workflow Buttons only for 1 | 0/1 | Same stage |

Empty rows are preserved as **Unresolved**, not interpreted as grants or denials.

## Email notification triggers

| ID | Trigger/condition | Template ID/name | Recipient | Timing |
|---|---|---|---|---|
| `CR-N1` | Assign succeeds | `90a79cfe-6da9-488d-a96a-da793e7e8857` / assigned for submission | `AssignedTo.Employee` | After transition |
| `CR-N2` | Submit for Review finds an audit | `b6468145-0341-4f49-9b20-a552b0af19a6` / submitted for review | `Approver` | After transition, before field clears |
| `CR-N3` | Submit for Cancellation has remarks | `92307e7a-9435-43c2-a715-e5c578c2d033` / cancellation requested | `Approver` | After transition and set-values |
| `CR-N4` | Approve passes all checks | `a95999a1-5348-4106-b396-b710e33cf3f5` / approved | `AssignedTo.Employee` | After transition/set-values |
| `CR-N5` | Reject passes checks | `addc64ad-8b45-40ee-8b6a-eb19f7f20a71` / rejected | `AssignedTo.Employee` | After transition/set-values |
| `CR-N6` | Review Archive with Not Required true | `b8ef7df3-b209-416c-887a-ac7d920a70db` / archived | `AssignedTo.Employee` | After transition/field clears |

All rows are Extracted from the corresponding action IDs above. To/CC/BCC is not exported.

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
