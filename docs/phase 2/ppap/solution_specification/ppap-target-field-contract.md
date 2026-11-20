# PPAP target — canonical field-level implementation contract

**Draft · 17 November 2026 · Logical Intelex model · Proposed unless explicitly extracted.**

[Technical specification](ppap-target-technical-specification.md) · [Object model](ppap-target-object-model.md) · [Machine-readable contract](ppap-target-field-contract.json)

This contract defines the active target configuration. Existing compatibility fields that are not used by target forms, calculations, workflows or reporting are dispositioned individually in [baseline impact](ppap-baseline-change-impact.md); they remain in the historical schema and the unchanged baseline, not in target data capture. Shared objects have one linked field authority; no divergent replica field definitions or inheritance are proposed here. Logical IDs in this document are design identifiers, not allocated Intelex GUIDs.

New operational objects use native identity, workflow and audit infrastructure. No extra custom identity/state/audit fields are implied. Native attachment collections and M:N maps are explicitly identified. Date arithmetic and filters below are declarative requirements, not executable Intelex expressions. Native bindings, transaction facilities and expression syntax require tenant validation before build.

All new catalogue objects are independent concrete localizable catalogues. No requirement calls for a new catalogue inheritance family. All catalogue M:1 relationships disable inverses; activation affects new selection, never removes historical references. New Date values use calendar days; event timestamps enable time-zone support. Read-only restrictions apply to API/import/direct actions as well as forms.

## 1. Project Framework Project

**Logical ID:** `project`. **Evidence:** Extracted / Unresolved binding. **Inheritance parent:** None (extracted).

Existing abstract direct inheritance base, all 27 declared fields remain under the baseline authority.

**Existing stable metadata ID:** `89351fdb-6445-4899-86da-d888a1787563`; internal name `ProjectFwk_ProjectAbstractObject`.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../ootb-ppap-baseline-model/field-catalogue.md). No shared field change or new inverse is authorized by this target. All 27 existing fields stay under that authority.

Initial values:

No new records. Use the existing shared authority.

## 2. Employee

**Logical ID:** `employee`. **Evidence:** Extracted / Unresolved binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Authenticated individual actor and assignee.

**Existing stable metadata ID:** `6afb3ac6-96db-4072-9293-4d02699d1264`; internal name `SysEmployeeEntity`.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../ootb-ppap-baseline-model/field-catalogue.md). No shared field change or new inverse is authorized by this target. 

Initial values:

No new records. Use the existing shared authority.

## 3. Group

**Logical ID:** `group`. **Evidence:** Extracted / Unresolved binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Native group membership, internal pools and notification recipients; do not invent a second identity store.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../../supplier-relationship-management/solution_specification/object_model/supplier-management-role-logical-model.md). No shared field change or new inverse is authorized by this target. 

Initial values:

No new records. Use the existing shared authority.

## 4. Supplier Facility

**Logical ID:** `facility`. **Evidence:** Extracted / Unresolved binding. **Inheritance parent:** Supplier Abstract.

Authoritative manufacturing facility and shipping-depot entity, distinguished by governed SRM entity semantics.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../../supplier-relationship-management/solution_specification/object_model/supplier-management-role-logical-model.md). No shared field change or new inverse is authorized by this target. 

Initial values:

No new records. Use the existing shared authority.

## 5. Supplier Abstract

**Logical ID:** `supplier_abstract`. **Evidence:** Extracted / Unresolved binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Exact supplier entity for role resolution, including facility/depot; never infer membership from company.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../../supplier-relationship-management/solution_specification/object_model/supplier-management-role-logical-model.md). No shared field change or new inverse is authorized by this target. 

Initial values:

No new records. Use the existing shared authority.

## 6. Supplier Specific Role

**Logical ID:** `supplier_role`. **Evidence:** Proposed shared contract / Unresolved native tenant binding. **Inheritance parent:** Group.

Shared target Group-derived exact-entity role; current inherited Members determine action eligibility; tenant deployment binding unverified.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../../supplier-relationship-management/solution_specification/object_model/supplier-management-role-logical-model.md). No shared field change or new inverse is authorized by this target. 

Initial values:

No new records. Use the existing shared authority.

## 7. Supplier Management Role

**Logical ID:** `management_role`. **Evidence:** Proposed shared contract / Unresolved native tenant binding. **Inheritance parent:** Group.

Shared governed target role library used to resolve Supplier Specific Role; no new PPAP role catalogue; tenant deployment binding unverified.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../../supplier-relationship-management/solution_specification/object_model/supplier-management-role-logical-model.md). No shared field change or new inverse is authorized by this target. 

Initial values:

No new records. Use the existing shared authority.

## 8. Shared Record Visibility Classification

**Logical ID:** `visibility`. **Evidence:** Proposed shared contract / Unresolved native tenant binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Governed development/mass-production access classification; separate from criticality flags.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../../supplier-relationship-management/adrs/ADR-084-apply-mutable-visibility-classifications-to-supplier-related-records.md). Exact target object/field metadata unresolved; ADR-084 is semantic authority. 

Initial values:

No new records. Use the existing shared authority.

## 9. Operational Part

**Logical ID:** `part`. **Evidence:** Proposed shared contract / Unresolved native tenant binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Canonical operational part supplied by separately defined BOMEX/PartsMaster connection; isolated Product Integration objects are excluded.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../../product-management/ADR-062-create-a-composite-part-master-from-bomex-and-partsmaster-data.md). Canonical operational identity and native target type unresolved. 

Initial values:

No new records. Use the existing shared authority.

## 10. Operational Drawing Revision

**Logical ID:** `drawing`. **Evidence:** Proposed shared contract / Unresolved native tenant binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Operational released drawing/revision and source lineage supplied by separate BOMEX/ECS connection.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../ADR-030-stage-bomex-drawing-and-ecs-data-and-create-source-linked-draft-ppaps.md). Native target object/field IDs unresolved; do not bind isolated API objects. 

Initial values:

No new records. Use the existing shared authority.

## 11. MOC PCR

**Logical ID:** `pcr`. **Evidence:** Proposed shared contract / Unresolved native tenant binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Single supplier-initiated PCR under MOC; PPAP-side launch/callback contract only.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../../../management-of-change/ADR-068-implement-distinct-change-processes-as-moc-subtypes-while-preserving-the-core-moc-framework.md). Exact MOC PCR subtype metadata and launch action binding unresolved. 

Initial values:

No new records. Use the existing shared authority.

## 12. Inspection Result

**Logical ID:** `inspection`. **Evidence:** Proposed shared contract / Unresolved native tenant binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Specialist inspection execution and frozen inspection-specification version; evidence accepted within PPAP.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../../pilot-part-data/ADR-041-reuse-one-inspection-framework-across-pilot-part-ppap-sample-and-internal-safe-launch.md). Native result/specification version metadata unresolved. 

Initial values:

No new records. Use the existing shared authority.

## 13. Released Inspection Specification Version

**Logical ID:** `inspection_specification_version`. **Evidence:** Proposed shared contract / Unresolved native tenant binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Released version governing drawing/part inspection; Product Management remains its sole authority.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../../product-management/ADR-038-manage-versioned-part-inspection-specifications-in-product-management.md). Exact version object, release-state and scope metadata unresolved. 

Initial values:

No new records. Use the existing shared authority.

## 14. Pilot Part Program

**Logical ID:** `pilot`. **Evidence:** Proposed shared contract / Unresolved native tenant binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

New-model programs only; physical build-event context; no blanket PPAP approval gate.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../../pilot-part-data/ADR-098-initiate-pilot-part-programs-from-ppap-build-event-context.md). Program creation adapter metadata unresolved. 

Initial values:

No new records. Use the existing shared authority.

## 15. Integrated Task

**Logical ID:** `integrated_task`. **Evidence:** Extracted / Unresolved binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Existing linked originating APQP work item; successful closure only on actual PPAP approval.

**Existing stable metadata ID:** `04b40719-eb5d-4202-9811-60b039739c78`; internal name `ProjectFwk_TaskObject`.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../ootb-ppap-baseline-model/field-catalogue.md). No shared field change or new inverse is authorized by this target. 

Initial values:

No new records. Use the existing shared authority.

## 16. APQP

**Logical ID:** `apqp`. **Evidence:** Extracted / Unresolved binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Existing APQP owns PPAP association; existing behavior retained.

**Existing stable metadata ID:** `f03e2731-655c-4af2-9c84-d3035e3fc61a`; internal name `APQP_APQPObject`.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../ootb-ppap-baseline-model/field-catalogue.md). No shared field change or new inverse is authorized by this target. 

Initial values:

No new records. Use the existing shared authority.

## 17. APQP Settings

**Logical ID:** `settings`. **Evidence:** Extracted / Unresolved binding. **Inheritance parent:** Unresolved; see authoritative shared definition; no change proposed.

Existing required compatibility setting on concrete PPAP; not authority for new policy.

**Existing stable metadata ID:** `79918b70-a3d1-48a1-9708-80b2f8dfba92`; internal name `APQP_SettingsObject`.

**Directly declared target changes:** None. Inherited and directly declared shared fields remain defined once in the [authoritative source](../ootb-ppap-baseline-model/field-catalogue.md). No shared field change or new inverse is authorized by this target. 

Initial values:

No new records. Use the existing shared authority.

## 18. PPAP Type

**Logical ID:** `ppap_type`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Governed single-selection values; localizable Name, stable non-localizable Code.

**Directly declared active target fields:** Code; Name; Active?; Sort. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters | Y | None; unique within this concrete catalogue | PPAP configuration administrator; immutable after first reference | Save validates uniqueness; never translated. |
| Name | Text; max 255 characters | Y | None | PPAP configuration administrator; localizable English launch label | Save updates display label; existing references retained. |
| Active? | Yes/No (Boolean) | Y | TRUE | PPAP configuration administrator | FALSE prevents new selection and new generation; historical references remain valid. |
| Sort | Float; finite; display up to 6 decimal places; no silent rounding of stored values | N | NULL | PPAP configuration administrator | Presentation order, then Code for ties. |

Initial values:

| Code | Name | Active? | Sort |
| --- | --- | --- | --- |
| NEW_MODEL | Model change | TRUE | 10 |
| RUNNING_CHANGE | Running change | TRUE | 20 |
| PROCESS_CHANGE | Process change | TRUE | 30 |

## 19. PPAP Work Pattern

**Logical ID:** `work_pattern`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Governed single-selection values; localizable Name, stable non-localizable Code.

**Directly declared active target fields:** Code; Name; Active?; Sort. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters | Y | None; unique within this concrete catalogue | PPAP configuration administrator; immutable after first reference | Save validates uniqueness; never translated. |
| Name | Text; max 255 characters | Y | None | PPAP configuration administrator; localizable English launch label | Save updates display label; existing references retained. |
| Active? | Yes/No (Boolean) | Y | TRUE | PPAP configuration administrator | FALSE prevents new selection and new generation; historical references remain valid. |
| Sort | Float; finite; display up to 6 decimal places; no silent rounding of stored values | N | NULL | PPAP configuration administrator | Presentation order, then Code for ties. |

Initial values:

| Code | Name | Active? | Sort |
| --- | --- | --- | --- |
| SUPPLIER | Supplier submission | TRUE | 10 |
| INTERNAL | Internal engineering work | TRUE | 20 |
| INSPECTION | Inspection-team work | TRUE | 30 |
| JOINT | Joint inspection | TRUE | 40 |

## 20. PPAP Answer Type

**Logical ID:** `answer_type`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Governed single-selection values; localizable Name, stable non-localizable Code.

**Directly declared active target fields:** Code; Name; Active?; Sort. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters | Y | None; unique within this concrete catalogue | PPAP configuration administrator; immutable after first reference | Save validates uniqueness; never translated. |
| Name | Text; max 255 characters | Y | None | PPAP configuration administrator; localizable English launch label | Save updates display label; existing references retained. |
| Active? | Yes/No (Boolean) | Y | TRUE | PPAP configuration administrator | FALSE prevents new selection and new generation; historical references remain valid. |
| Sort | Float; finite; display up to 6 decimal places; no silent rounding of stored values | N | NULL | PPAP configuration administrator | Presentation order, then Code for ties. |

Initial values:

| Code | Name | Active? | Sort |
| --- | --- | --- | --- |
| TEXT | Text | TRUE | 10 |
| NUMBER | Number | TRUE | 20 |
| BOOLEAN | Yes or no | TRUE | 30 |
| DATE | Calendar date | TRUE | 40 |

## 21. PPAP Requirement Category

**Logical ID:** `requirement_category`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Governed single-selection values; localizable Name, stable non-localizable Code.

**Directly declared active target fields:** Code; Name; Active?; Sort. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters | Y | None; unique within this concrete catalogue | PPAP configuration administrator; immutable after first reference | Save validates uniqueness; never translated. |
| Name | Text; max 255 characters | Y | None | PPAP configuration administrator; localizable English launch label | Save updates display label; existing references retained. |
| Active? | Yes/No (Boolean) | Y | TRUE | PPAP configuration administrator | FALSE prevents new selection and new generation; historical references remain valid. |
| Sort | Float; finite; display up to 6 decimal places; no silent rounding of stored values | N | NULL | PPAP configuration administrator | Presentation order, then Code for ties. |

Initial values:

No new records. Source-backed SIA values pending PPAP-INPUT-001; do not invent phases, stages or exception reasons.

## 22. PPAP Schedule Phase

**Logical ID:** `phase`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Governed single-selection values; localizable Name, stable non-localizable Code.

**Directly declared active target fields:** Code; Name; Active?; Sort. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters | Y | None; unique within this concrete catalogue | PPAP configuration administrator; immutable after first reference | Save validates uniqueness; never translated. |
| Name | Text; max 255 characters | Y | None | PPAP configuration administrator; localizable English launch label | Save updates display label; existing references retained. |
| Active? | Yes/No (Boolean) | Y | TRUE | PPAP configuration administrator | FALSE prevents new selection and new generation; historical references remain valid. |
| Sort | Float; finite; display up to 6 decimal places; no silent rounding of stored values | N | NULL | PPAP configuration administrator | Presentation order, then Code for ties. |

Initial values:

No new records. Source-backed SIA values pending PPAP-INPUT-001; do not invent phases, stages or exception reasons.

## 23. PPAP Manufacturing Stage

**Logical ID:** `stage`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Governed single-selection values; localizable Name, stable non-localizable Code.

**Directly declared active target fields:** Code; Name; Active?; Sort. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters | Y | None; unique within this concrete catalogue | PPAP configuration administrator; immutable after first reference | Save validates uniqueness; never translated. |
| Name | Text; max 255 characters | Y | None | PPAP configuration administrator; localizable English launch label | Save updates display label; existing references retained. |
| Active? | Yes/No (Boolean) | Y | TRUE | PPAP configuration administrator | FALSE prevents new selection and new generation; historical references remain valid. |
| Sort | Float; finite; display up to 6 decimal places; no silent rounding of stored values | N | NULL | PPAP configuration administrator | Presentation order, then Code for ties. |

Initial values:

No new records. Source-backed SIA values pending PPAP-INPUT-001; do not invent phases, stages or exception reasons.

## 24. PPAP Drawing Review Exception Reason

**Logical ID:** `no_ppap_reason`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Governed single-selection values; localizable Name, stable non-localizable Code.

**Directly declared active target fields:** Code; Name; Active?; Sort. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters | Y | None; unique within this concrete catalogue | PPAP configuration administrator; immutable after first reference | Save validates uniqueness; never translated. |
| Name | Text; max 255 characters | Y | None | PPAP configuration administrator; localizable English launch label | Save updates display label; existing references retained. |
| Active? | Yes/No (Boolean) | Y | TRUE | PPAP configuration administrator | FALSE prevents new selection and new generation; historical references remain valid. |
| Sort | Float; finite; display up to 6 decimal places; no silent rounding of stored values | N | NULL | PPAP configuration administrator | Presentation order, then Code for ties. |

Initial values:

No new records. Source-backed SIA values pending PPAP-INPUT-001; do not invent phases, stages or exception reasons.

## 25. PPAP

**Logical ID:** `ppap`. **Evidence:** Extracted identity / Proposed target changes. **Inheritance parent:** Project Framework Project.

Drawing-scoped approval for exactly one manufacturing facility and locked selected part set.

**Existing stable metadata ID:** `a99ca3b8-48ed-43eb-9696-a1dd26122c39`; internal name `APQP_PPAPAbstractObject`.

**Directly declared active target fields:** Id; Project Owner; PPAP Due Date; Settings; Task; APQP Abstract; PPAP Completion Date; DisplayField; Target Configuration?; Type; Manufacturing Facility; Drawing Revision; Engineering Release; Drawing Number; Drawing Revision Code; Drawing Review; Originating PCR; Replaces PPAP; Service Parts Only?; Visibility Classification; Model Change; Manufacturing Stage; Schedule Connected?; Template; Template Version; Operating Policy; Engineer Routing Entity; Engineer Role; Management Approver Pool; Final Management Approver; Issued Overall Due Date; Issued At; Issued By; Scope Confirmed At; Scope Confirmed By; Replacement Required?; Replacement Reason; Management Submitted At; Management Review Due Date; Management Return Comment; Cancellation Reason; Cancelled At; Cancelled By; Approved At; Approved By; Approved Manufacturing Facility Label; Approved Supplier Label; Approved Authority Label; Certificate Reference; Approval Certificate; Parts; Shipping Depots; Elements; Pilot Programs; Discussion Threads. Inherited fields remain defined once on the inheritance base, not duplicated here.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Id | Guid (uniqueidentifier); max length unspecified | Y | None exported | Native identity only; no user edit | Native creation allocates identity; preserve duplicate-name binding ambiguity with inherited Id until tenant verification. Existing field abb52bc8-9c94-4ebe-8a03-a7f648cb9b4b; /GraphData/Items/298. |
| Project Owner | M:1 to Employee (SysEmployeeEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Conditional | FilterExpression: {"__type":"Expression","Operator":0,"Predicates":[{"__type":"BelongsToGroup","For":"ID","Negate":false,"GroupId":"bfbec27b-d0b6-47b2-b6d4-9241abf697c7"}]} [F 1235abd4-f363-46d1-a1b6-314aefe130b9 FilterExpression] | Responsible engineer or administrator selects current eligible internal engineer; required before Issue; audited reassignment while open | Issue and all engineer actions recheck assignment; existing ProjectOwner is the sole responsible-engineer field. Existing field 1235abd4-f363-46d1-a1b6-314aefe130b9; /GraphData/Items/201. |
| PPAP Due Date | Date (Date); max length unspecified; TimeZoneCapture=false | Y | None; engineer supplies overall due date at Draft creation, or originating APQP launch explicitly copies its linked Task due date once when present; no unconditional Task expression | Engineer editable while open with mandatory date-change reason; supplier read only | Current overall PPAP due date; target adapter stops unguarded bidirectional Task.DueDate overwrites; audit old/new/reason. Existing field 928f4637-0e14-46dc-89bc-90cb6e3fadd2; /GraphData/Items/249. |
| Settings | M:1 to APQP Settings (APQP_SettingsObject); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | DefaultValue: 7b040ae4-8679-43df-ad06-3ad53a684674 [F 9ee028e1-dc09-4781-86c2-1a103c89dc6c DefaultValue] | System selected existing APQP Settings; hidden from suppliers | Create handler satisfies required compatibility metadata; guard old settings-dependent handlers for target branch. Existing field 9ee028e1-dc09-4781-86c2-1a103c89dc6c; /GraphData/Items/320. |
| Task | M:1 to Integrated Task (ProjectFwk_TaskObject); many → 0..1; reverse PPAPs; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | System populated by originating APQP launch; authorized internal navigation only | Compatibility relationship unchanged; approval emits outcome and completes only a single explicitly bound obligation after scope-aware checks; multiple linked PPAPs require originating owner/adapter resolution. Cancellation flags owner without successful fulfilment. Existing field e34df78d-5613-42e8-88e9-e32f3dd12f0b; /GraphData/Items/503. |
| APQP Abstract | 1:M to APQP (APQP_APQPObject); inverse collection; no new stored reference; reverse PPAPAbstract; Inferred from foreign-key inverse and declaring end | N | None exported | Read-only authorized internal navigation | Existing inverse relationship from APQP.PPAPAbstract; no duplicate stored relationship. Existing field 67abec90-f697-4696-a3f8-75f14bdf14c8; /GraphData/Items/461. |
| PPAP Completion Date | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | System read only | Approve PPAP or non-safety Complete PPAP Action Handler writes local business date once; closed immutability. Existing field 13560454-ef1b-415c-8c7b-415add11f776; /GraphData/Items/931. |
| DisplayField | Text (nvarchar); proposed target max 512 characters (baseline exported no maximum) | N | Declarative continuing display calculation from inherited Project Framework Project.RecordNo, PPAP.Drawing Number and PPAP.Drawing Revision Code; no Product dependency | System calculated read only | Target display calculation uses inherited RecordNo (Record No.), Drawing Number and Drawing Revision Code in that order, separator " / "; NULL context components omitted; verify expression syntax and input/output length before binding; never silently truncate identity. Existing field 998bd167-41b8-46bf-bc08-b1baa5ec3a50; /GraphData/Items/579. |
| Target Configuration? | Yes/No (Boolean) | Y | FALSE for existing; TRUE for target create path only | System read only; hidden | Target Create handler sets TRUE before guarded shared handlers run; never toggle after creation. |
| Type | M:1 to PPAP Type; target 1; source 0..*; inverse disabled | Y | NULL | Responsible engineer in Draft; read only after Issue; new selection filters Active?=TRUE; preserve existing inactive references read only | Draft Save validates; immutable at Issue. |
| Manufacturing Facility | M:1 to Supplier Facility; target 0..1; source 0..*; inverse disabled | Conditional | NULL | Engineer selects current eligible manufacturing facility in Draft; supplier read only; mandatory before Issue | Issue freezes scope; never use inherited Location or Supplier as this relationship. |
| Drawing Revision | M:1 to Operational Drawing Revision; target 0..1; source 0..*; inverse disabled | Conditional | NULL | System maps accepted operational source; engineer selects validated source in Draft; mandatory before Issue | Issue freezes released engineering context; a different engineering change creates a NEW PPAP. |
| Engineering Release | M:1 to PPAP Engineering Release; target 0..1; source 0..*; inverse PPAP Engineering Release.PPAPs | Conditional | NULL | Engineer selects accepted authoritative drawing/part context in Draft; mandatory before Issue for ALL origins including PCR/manual | PCR/manual may reference the existing accepted released drawing context without a new ECS event; controlled intake captures it if absent. Create initializes source; Issue snapshots classifications; no in-flight absorption. |
| Drawing Number | Text; max 100 characters | Conditional | PPAP Engineering Release.Drawing Number at source selection | System read only; must be populated before Issue | Controlled manual fallback imports authoritative source; issue locks number, no PPAP override. |
| Drawing Revision Code | Text; max 100 characters | Conditional | PPAP Engineering Release.Drawing Revision Code at source selection | System read only; mandatory before Issue | Issue freezes original revision; later change creates new PPAP. |
| Drawing Review | M:1 to PPAP Drawing Review; target 0..1; source 0..*; inverse PPAP Drawing Review.PPAPs | N | NULL | System set by Launch PPAP; read only | Retain initial review provenance. |
| Originating PCR | M:1 to MOC PCR; target 0..1; source 0..*; inverse disabled | N | NULL | System set by authorized Proceed to PPAP adapter; internal read only | Idempotent launch per PCR decision token and approved scope; no shipment authorization. |
| Replaces PPAP | M:1 to PPAP; target 0..1; source 0..*; inverse disabled | N | NULL | Engineer selects relevant cancelled PPAP in Draft; read only after Issue | Informational lineage only; does not bypass cancelled-source evidence exclusion. |
| Service Parts Only? | Yes/No (Boolean) | Y | FALSE | Engineer in Draft; mandatory validation against approved part purpose before Issue | Eligibility adapter queries central supplier status capabilities; service flag is purpose, not a supplier-status override. |
| Visibility Classification | M:1 to Shared Record Visibility Classification; target 1; source 0..*; inverse disabled | Y | NULL | Designated visibility manager only; supplier read only | Controlled audited ADR-084 handover may change access without changing criticality, workflow or ownership. |
| Model Change | M:1 to PPAP Model Change; target 0..1; source 0..*; inverse PPAP Model Change.PPAPs | Conditional | NULL | Engineer in Draft; required when Type.Code=NEW_MODEL; optional for explicit connected other types | Changing Type away from NEW_MODEL does not silently clear populated context: Draft user confirms retention or clears all model fields together; immutable context after Issue. |
| Manufacturing Stage | M:1 to PPAP Manufacturing Stage; target 0..1; source 0..*; inverse disabled | Conditional | NULL | Engineer in Draft; required when Model Change populated; hidden and NULL when no Model Change; new selection filters Active?=TRUE; preserve existing inactive references read only | Draft context clearing clears stage after warning; issued context locked. |
| Schedule Connected? | Yes/No (Boolean) | Y | TRUE when Model Change selected; FALSE otherwise | Engineer may Disconnect/Reconnect while open with warning and reason; FALSE forced if Model Change NULL | Schedule recalculation handler operates only when TRUE; manual dates persist disconnected. |
| Template | M:1 to PPAP Template; target 0..1; source 0..*; inverse disabled | Conditional | NULL | Engineer in Draft; active published template matching Type; mandatory before Issue | Select Template action resolves exact active published version; cannot switch while generated elements remain. |
| Template Version | M:1 to PPAP Template Version; target 0..1; source 0..*; inverse disabled | Conditional | NULL | System read only; mandatory before Issue | Initialize Elements resolves exact active version under lock, stores and never refreshes on later publication. |
| Operating Policy | M:1 to PPAP Operating Policy; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Create handler binds single active operating policy; current configurable settings govern future reminders; issued deadline snapshots remain fixed. |
| Engineer Routing Entity | M:1 to Supplier Abstract; target 0..1; source 0..*; inverse disabled | Conditional | NULL | Engineer or administrator in Draft; required before Issue; exact governed supplier context | Resolve internal supplier-specific engineer role by Type and Operating Policy role mapping; no company-to-facility/depot fallback; issued routing context retained. |
| Engineer Role | M:1 to Supplier Specific Role; target 0..1; source 0..*; inverse disabled | Conditional | NULL | System read only; required before Issue | Resolve Engineer Routing Entity plus current policy role for Type; Project Owner must be current eligible member at Issue and on engineer action; reassignment stays in eligible role. |
| Management Approver Pool | M:1 to Group; target 0..1; source 0..*; inverse disabled | Conditional | NULL | Administrator sets governed eligible group; mandatory before Issue when any selected part Important Safety?=TRUE | Current membership validated on final action; no HR Immediate Supervisor shortcut. |
| Final Management Approver | M:1 to Employee; target 0..1; source 0..*; inverse disabled | Conditional | NULL | Engineer selects current eligible pool member before Complete PPAP when management required; otherwise NULL and hidden | Assign/reassign only while open, notify; engineer can select self if eligible; no automatic stage bypass. |
| Issued Overall Due Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | Conditional | NULL | System read only; mandatory once issued | Issue snapshots PPAP Due Date once. |
| Issued At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Issue writes authenticated server timestamp once; retained after closure. |
| Issued By | M:1 to Employee; target 0..1; source 0..*; inverse disabled | N | NULL | System read only | Issue writes actual actor. |
| Scope Confirmed At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Confirm Scope supplier action writes once; no mass requirement at this point. |
| Scope Confirmed By | M:1 to Employee; target 0..1; source 0..*; inverse disabled | N | NULL | System read only | Confirm Scope writes authenticated supplier actor; actual platform external-user identity binding must be verified. |
| Replacement Required? | Yes/No (Boolean) | Y | FALSE | System read only; internal warning and supplier non-technical action hold | Source correction handler sets TRUE only for authoritative criticality correction applicable to this issued original context; blocks finalization until engineer cancels/replaces. Different engineering revision alone never sets it. |
| Replacement Reason | Text; max 2000 characters | Conditional | NULL | System read only; required when Replacement Required?=TRUE, otherwise NULL | Source correction handler stores affected context and changed flags; reason persists on cancellation. |
| Management Submitted At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Complete PPAP writes current submission/resubmission time on entry to Management Review; native workflow retains each prior entry. |
| Management Review Due Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | N | NULL | System read only; hidden unless Management Review or its history | Complete PPAP computes local submission date plus current policy Management Review Days; freeze for that review cycle. |
| Management Return Comment | Text; max 2000 characters | Conditional | NULL | Current eligible management approver; internal only; required for Return for More Information; otherwise retain prior value read only | Return Action Handler validates nonblank, writes audit/workflow history; never include in supplier notification. |
| Cancellation Reason | Text; max 2000 characters | Conditional | NULL | Responsible engineer or PPAP administrator through Cancel PPAP only; required on cancellation; otherwise NULL | Cancel writes before cascade; preserve after terminal cancellation. |
| Cancelled At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Cancel PPAP writes only after outstanding work cascade succeeds. |
| Cancelled By | M:1 to Employee; target 0..1; source 0..*; inverse disabled | N | NULL | System read only | Cancel PPAP writes actual actor after successful cascade. |
| Approved At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Final approval or non-safety Complete PPAP writes once, in same logical transaction as immutable output creation. |
| Approved By | M:1 to Employee; target 0..1; source 0..*; inverse disabled | N | NULL | System read only | Records actual authenticated approving actor; engineer for non-safety; eligible management actor for safety. |
| Approved Manufacturing Facility Label | Text; max 255 characters | Conditional | NULL | System read only; required at approval, NULL beforehand | Approval Action Handler snapshots Manufacturing Facility native display value with its stable identity; native display-field binding verified under certificate gate; immutable source for certificate rendering/authorized retry. |
| Approved Supplier Label | Text; max 255 characters | Conditional | NULL | System read only; required at approval, NULL beforehand | Approval Action Handler snapshots Manufacturing Facility.ParentCompany native display value; exact existing shared field binding verified before build; stable facility/company identity remains in shared relationship; immutable certificate evidence. |
| Approved Authority Label | Text; max 255 characters | Conditional | NULL | System read only; required at approval, NULL beforehand | Approval Action Handler snapshots authenticated Approved By native display value; actual actor identity remains Approved By; label immutable so later person-name changes cannot rewrite certificate. |
| Certificate Reference | Text; max 100 characters | N | NULL | System read only; authorized supplier/internal view after approval | Approve allocates unique opaque reference; verification always requires authorized access; QR optional, no public endpoint assumed. |
| Approval Certificate | Native Intelex attachment collection; native file identity, name, length and content type; no new file table | N | None | Read only authorized download after approval | Approval renderer creates controlled PDF from approved frozen package; exactly one active issued artifact, retry by Certificate Reference; retain original bytes. |
| Parts | Inverse 1:M grid from PPAP Part.PPAP | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Shipping Depots | Inverse 1:M grid from PPAP Shipping Depot.PPAP | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Elements | Inverse 1:M grid from PPAP Element.PPAP | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Pilot Programs | Inverse 1:M grid from PPAP Pilot Program Link.PPAP | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Discussion Threads | Inverse 1:M grid from PPAP Discussion Thread.PPAP | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |

- Native audit/security enabled on PPAP and all target operational children; hard delete denied after creation.
- Issue requires >=1 selected part, all authoritative flags, exact source mapping, approved template/version, required due dates, and nonempty required role memberships.
- Facility, drawing/revision source context, part set, classification snapshots and requirement applicability lock at Issue.
- Source correction applicable to original context holds finalization for cancel/replace; later distinct revision creates a separate PPAP without cancelling older work.

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 26. PPAP Requirement

**Logical ID:** `requirement`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Stable authoring identity of a governed element type.

**Directly declared active target fields:** Code; Name; Instructions; Category; Work Pattern; Routing Role; Supplier Visible?; Protected?; Minimum Files; Allowed File Extensions; Inspection Acceptance Required?; Source Procedure Reference; Active?; Instruction Attachments; Versions; Questions. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters; unique stable authoring key | Y | None | Configuration administrator; immutable after first Publish | Publish copies PPAP Requirement.Code to PPAP Requirement Version.Code; editing author does not change existing versions. |
| Name | Text; max 255 characters; localizable | Y | None | PPAP configuration administrator before Publish | Publish copies PPAP Requirement.Name to PPAP Requirement Version.Name; editing author does not change existing versions. |
| Instructions | Text; max 16000 characters; localizable | Y | None | PPAP configuration administrator before Publish | Publish copies PPAP Requirement.Instructions to PPAP Requirement Version.Instructions; editing author does not change existing versions. |
| Category | M:1 to PPAP Requirement Category; target 1; source 0..*; inverse disabled | Y | None | Configuration administrator; new selection Active?=TRUE; preserve inactive existing reference | Publish copies PPAP Requirement.Category to PPAP Requirement Version.Category; editing author does not change existing versions. |
| Work Pattern | M:1 to PPAP Work Pattern; target 1; source 0..*; inverse disabled | Y | None | Configuration administrator; new selection Active?=TRUE; preserve inactive existing reference | Publish copies PPAP Requirement.Work Pattern to PPAP Requirement Version.Work Pattern; editing author does not change existing versions. |
| Routing Role | M:1 to Supplier Management Role; target 0..1; source 0..*; inverse disabled | N | NULL | PPAP configuration administrator before Publish | Publish copies PPAP Requirement.Routing Role to PPAP Requirement Version.Routing Role; editing author does not change existing versions. |
| Supplier Visible? | Yes/No (Boolean) | Y | FALSE | Configuration administrator; SUPPLIER pattern forces TRUE; INTERNAL forces FALSE; INSPECTION/JOINT governed by SIA source | Publish copies PPAP Requirement.Supplier Visible? to PPAP Requirement Version.Supplier Visible?; editing author does not change existing versions. |
| Protected? | Yes/No (Boolean) | Y | FALSE | PPAP configuration administrator before Publish | Publish copies PPAP Requirement.Protected? to PPAP Requirement Version.Protected?; editing author does not change existing versions. |
| Minimum Files | Integer (Int32); >=0 | Y | 0 | PPAP configuration administrator before Publish | Publish copies PPAP Requirement.Minimum Files to PPAP Requirement Version.Minimum Files; editing author does not change existing versions. |
| Allowed File Extensions | Text; max 1000 characters; declarative comma-separated normalized extensions, not executable | N | NULL; only native tenant restrictions apply when NULL | PPAP configuration administrator before Publish | Publish copies PPAP Requirement.Allowed File Extensions to PPAP Requirement Version.Allowed File Extensions; editing author does not change existing versions. |
| Inspection Acceptance Required? | Yes/No (Boolean) | Y | FALSE | PPAP configuration administrator before Publish | Publish copies PPAP Requirement.Inspection Acceptance Required? to PPAP Requirement Version.Inspection Acceptance Required?; editing author does not change existing versions. |
| Source Procedure Reference | Text; max 1000 characters | Y | None | PPAP configuration administrator before Publish | Publish copies PPAP Requirement.Source Procedure Reference to PPAP Requirement Version.Source Procedure Reference; editing author does not change existing versions. |
| Active? | Yes/No (Boolean) | Y | TRUE | Configuration administrator | Controls new selection and publication only; not copied to version because version Active? is publication managed; existing issued work unchanged. |
| Instruction Attachments | Native Intelex attachment collection; native file identity, name, length and content type; no new file table | N | None | Configuration administrator edits authoring files | Publish copies every native attachment to Requirement Version.Instruction Attachments; no mutable shared container. |
| Versions | Inverse 1:M grid from PPAP Requirement Version.Authoring Record | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Questions | Inverse 1:M grid from PPAP Question.Requirement | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |

- Code immutable after first Publish; no default SIA library records invented while PPAP-INPUT-001 is pending.

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 27. PPAP Requirement Version

**Logical ID:** `requirement_version`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Immutable approved publication of requirement content and routing; genuinely required operational configuration evidence.

**Directly declared active target fields:** Code; Name; Instructions; Category; Work Pattern; Routing Role; Supplier Visible?; Protected?; Minimum Files; Allowed File Extensions; Inspection Acceptance Required?; Source Procedure Reference; Instruction Attachments; Authoring Record; Version Number; Active?; Published At; Published By; Questions. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters; copied stable authoring key; not unique across versions | Y | Stored default-value copy from PPAP Requirement.Code at Publish | System read only; immutable after successful Publish | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Name | Text; max 255 characters; localizable | Y | Stored default-value copy from PPAP Requirement.Name at Publish | System read only; immutable after successful Publish | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Instructions | Text; max 16000 characters; localizable | Y | Stored default-value copy from PPAP Requirement.Instructions at Publish | System read only; immutable after successful Publish | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Category | M:1 to PPAP Requirement Category; target 1; source 0..*; inverse disabled | Y | Stored default-value copy from PPAP Requirement.Category at Publish | System read only; immutable after successful Publish; no manual selection; Publish validates Active?=TRUE at resolution, then preserves copied reference if later inactive | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Work Pattern | M:1 to PPAP Work Pattern; target 1; source 0..*; inverse disabled | Y | Stored default-value copy from PPAP Requirement.Work Pattern at Publish | System read only; immutable after successful Publish; no manual selection; Publish validates Active?=TRUE at resolution, then preserves copied reference if later inactive | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Routing Role | M:1 to Supplier Management Role; target 0..1; source 0..*; inverse disabled | N | Stored default-value copy from PPAP Requirement.Routing Role at Publish | System read only; immutable after successful Publish | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Supplier Visible? | Yes/No (Boolean) | Y | Stored default-value copy from PPAP Requirement.Supplier Visible? at Publish | System read only; immutable after successful Publish | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Protected? | Yes/No (Boolean) | Y | Stored default-value copy from PPAP Requirement.Protected? at Publish | System read only; immutable after successful Publish | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Minimum Files | Integer (Int32); >=0 | Y | Stored default-value copy from PPAP Requirement.Minimum Files at Publish | System read only; immutable after successful Publish | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Allowed File Extensions | Text; max 1000 characters; declarative comma-separated normalized extensions, not executable | N | Stored default-value copy from PPAP Requirement.Allowed File Extensions at Publish | System read only; immutable after successful Publish | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Inspection Acceptance Required? | Yes/No (Boolean) | Y | Stored default-value copy from PPAP Requirement.Inspection Acceptance Required? at Publish | System read only; immutable after successful Publish | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Source Procedure Reference | Text; max 1000 characters | Y | Stored default-value copy from PPAP Requirement.Source Procedure Reference at Publish | System read only; immutable after successful Publish | Publish PPAP Requirement creates this value once; no continuing calculation. |
| Instruction Attachments | Native Intelex attachment collection; native file identity, name, length and content type; no new file table | N | None | System read only | Publish copies from Requirement.Instruction Attachments once; full graph rollback if copy fails. |
| Authoring Record | M:1 to PPAP Requirement; target 1; source 0..*; inverse PPAP Requirement.Versions | Y | NULL | System read only | Publish PPAP Requirement retains stable source; authoring record cannot be deleted after use. |
| Version Number | Integer (Int32); whole number | Y | Maximum related Versions.Version Number + 1; first 1 | System read only | Publish serializes by authoring identity; enforce unique Authoring Record+Version Number. |
| Active? | Yes/No (Boolean) | Y | TRUE on successful Publish | System read only | Publish atomically deactivates older versions of same author; no ordinary user edit; inactive version remains valid for existing PPAP. |
| Published At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Publish PPAP Requirement stamps server timestamp after full graph validation. |
| Published By | M:1 to Employee; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Publish PPAP Requirement writes actual authenticated administrator. |
| Questions | Inverse 1:M grid from PPAP Question Version.Requirement Version | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 28. PPAP Question

**Logical ID:** `question`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Typed checklist question authored within a requirement.

**Directly declared active target fields:** Requirement; Code; Prompt; Answer Type; Required?; Instructions; Sort. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Requirement | M:1 to PPAP Requirement; target 1; source 0..*; inverse PPAP Requirement.Questions | Y | NULL | Configuration administrator before Publish | Publish uses this authoring membership to create Requirement Version.Questions components. |
| Code | Text; max 100 characters; unique within Requirement | Y | None | PPAP configuration administrator before Publish | Publish copies PPAP Question.Code to PPAP Question Version.Code; editing author does not change existing versions. |
| Prompt | Text; max 2000 characters; localizable | Y | None | PPAP configuration administrator before Publish | Publish copies PPAP Question.Prompt to PPAP Question Version.Prompt; editing author does not change existing versions. |
| Answer Type | M:1 to PPAP Answer Type; target 1; source 0..*; inverse disabled | Y | None | Configuration administrator; new selection Active?=TRUE; preserve inactive existing reference | Publish copies PPAP Question.Answer Type to PPAP Question Version.Answer Type; editing author does not change existing versions. |
| Required? | Yes/No (Boolean) | Y | TRUE | PPAP configuration administrator before Publish | Publish copies PPAP Question.Required? to PPAP Question Version.Required?; editing author does not change existing versions. |
| Instructions | Text; max 8000 characters; localizable | N | NULL | PPAP configuration administrator before Publish | Publish copies PPAP Question.Instructions to PPAP Question Version.Instructions; editing author does not change existing versions. |
| Sort | Float; finite | Y | 0 | PPAP configuration administrator before Publish | Publish copies PPAP Question.Sort to PPAP Question Version.Sort; editing author does not change existing versions. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 29. PPAP Question Version

**Logical ID:** `question_version`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Immutable question component published with its requirement version.

**Directly declared active target fields:** Requirement Version; Authoring Question; Code; Prompt; Answer Type; Required?; Instructions; Sort. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Requirement Version | M:1 to PPAP Requirement Version; target 1; source 0..*; inverse PPAP Requirement Version.Questions | Y | NULL | System read only | Publish Requirement links created immutable components to the new requirement version. |
| Authoring Question | M:1 to PPAP Question; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Publish traces exact source question; not a separate independently published family. |
| Code | Text; max 100 characters; unique within Requirement Version | Y | Stored default-value copy from PPAP Question.Code at Publish | System read only; immutable after successful Publish | Publish PPAP Question creates this value once; no continuing calculation. |
| Prompt | Text; max 2000 characters; localizable | Y | Stored default-value copy from PPAP Question.Prompt at Publish | System read only; immutable after successful Publish | Publish PPAP Question creates this value once; no continuing calculation. |
| Answer Type | M:1 to PPAP Answer Type; target 1; source 0..*; inverse disabled | Y | Stored default-value copy from PPAP Question.Answer Type at Publish | System read only; immutable after successful Publish; no manual selection; Publish validates Active?=TRUE at resolution, then preserves copied reference if later inactive | Publish PPAP Question creates this value once; no continuing calculation. |
| Required? | Yes/No (Boolean) | Y | Stored default-value copy from PPAP Question.Required? at Publish | System read only; immutable after successful Publish | Publish PPAP Question creates this value once; no continuing calculation. |
| Instructions | Text; max 8000 characters; localizable | N | Stored default-value copy from PPAP Question.Instructions at Publish | System read only; immutable after successful Publish | Publish PPAP Question creates this value once; no continuing calculation. |
| Sort | Float; finite | Y | Stored default-value copy from PPAP Question.Sort at Publish | System read only; immutable after successful Publish | Publish PPAP Question creates this value once; no continuing calculation. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 30. PPAP Template

**Logical ID:** `template`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Stable authoring identity of an SIA requirement matrix for a PPAP type.

**Directly declared active target fields:** Code; Name; Type; Source Procedure Reference; Active?; Versions; Requirements. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters; unique stable authoring key | Y | None | Configuration administrator; immutable after first Publish | Publish copies PPAP Template.Code to PPAP Template Version.Code; editing author does not change existing versions. |
| Name | Text; max 255 characters; localizable | Y | None | PPAP configuration administrator before Publish | Publish copies PPAP Template.Name to PPAP Template Version.Name; editing author does not change existing versions. |
| Type | M:1 to PPAP Type; target 1; source 0..*; inverse disabled | Y | None | Configuration administrator; new selection Active?=TRUE; preserve inactive existing reference | Publish copies PPAP Template.Type to PPAP Template Version.Type; editing author does not change existing versions. |
| Source Procedure Reference | Text; max 1000 characters | Y | None | PPAP configuration administrator before Publish | Publish copies PPAP Template.Source Procedure Reference to PPAP Template Version.Source Procedure Reference; editing author does not change existing versions. |
| Active? | Yes/No (Boolean) | Y | TRUE | Configuration administrator | Controls new selection and Publish; not copied because Template Version.Active? is publication managed; existing issued work unchanged. |
| Versions | Inverse 1:M grid from PPAP Template Version.Authoring Record | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Requirements | Inverse 1:M grid from PPAP Template Requirement.Template | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |

- One row per stable Requirement in a template. Applicability is OR of Always Applicable?, On Important Safety? AND any selected safety flag, On Important Quality? AND any selected quality flag, On Regulated? AND any selected regulated flag.
- Always include SIA mandatory data-review requirement; actual source-backed row identity, other elements and mandatory classifications await PPAP-INPUT-001.

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 31. PPAP Template Version

**Logical ID:** `template_version`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Immutable published complete requirement/date/applicability matrix.

**Directly declared active target fields:** Code; Name; Type; Source Procedure Reference; Authoring Record; Version Number; Active?; Published At; Published By; Requirements. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters; copied stable authoring key; not unique across versions | Y | Stored default-value copy from PPAP Template.Code at Publish | System read only; immutable after successful Publish | Publish PPAP Template creates this value once; no continuing calculation. |
| Name | Text; max 255 characters; localizable | Y | Stored default-value copy from PPAP Template.Name at Publish | System read only; immutable after successful Publish | Publish PPAP Template creates this value once; no continuing calculation. |
| Type | M:1 to PPAP Type; target 1; source 0..*; inverse disabled | Y | Stored default-value copy from PPAP Template.Type at Publish | System read only; immutable after successful Publish; no manual selection; Publish validates Active?=TRUE at resolution, then preserves copied reference if later inactive | Publish PPAP Template creates this value once; no continuing calculation. |
| Source Procedure Reference | Text; max 1000 characters | Y | Stored default-value copy from PPAP Template.Source Procedure Reference at Publish | System read only; immutable after successful Publish | Publish PPAP Template creates this value once; no continuing calculation. |
| Authoring Record | M:1 to PPAP Template; target 1; source 0..*; inverse PPAP Template.Versions | Y | NULL | System read only | Publish PPAP Template retains stable source; authoring record cannot be deleted after use. |
| Version Number | Integer (Int32); whole number | Y | Maximum related Versions.Version Number + 1; first 1 | System read only | Publish serializes by authoring identity; enforce unique Authoring Record+Version Number. |
| Active? | Yes/No (Boolean) | Y | TRUE on successful Publish | System read only | Publish atomically deactivates older versions of same author; no ordinary user edit; inactive version remains valid for existing PPAP. |
| Published At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Publish PPAP Template stamps server timestamp after full graph validation. |
| Published By | M:1 to Employee; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Publish PPAP Template writes actual authenticated administrator. |
| Requirements | Inverse 1:M grid from PPAP Template Requirement Version.Template Version | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 32. PPAP Template Requirement

**Logical ID:** `template_line`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Authoring association of template and governed requirement with applicability and scheduling attributes.

**Directly declared active target fields:** Template; Requirement; Always Applicable?; On Important Safety?; On Important Quality?; On Regulated?; Protected?; Schedule Phase; Offset Days; Sort. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Template | M:1 to PPAP Template; target 1; source 0..*; inverse PPAP Template.Requirements | Y | NULL | Configuration administrator | Publish Template reads each authoring line exactly once. |
| Requirement | M:1 to PPAP Requirement; target 1; source 0..*; inverse disabled | Y | NULL | Configuration administrator; active with published version | Publish resolves exact active Requirement Version under lock; unique Template+Requirement authoring identity; publication disposition is transformed to Requirement Version, stable identity retained via that version. |
| Always Applicable? | Yes/No (Boolean) | Y | TRUE | PPAP configuration administrator before Publish | Publish copies PPAP Template Requirement.Always Applicable? to PPAP Template Requirement Version.Always Applicable?; editing author does not change existing versions. |
| On Important Safety? | Yes/No (Boolean) | Y | FALSE | PPAP configuration administrator before Publish | Publish copies PPAP Template Requirement.On Important Safety? to PPAP Template Requirement Version.On Important Safety?; editing author does not change existing versions. |
| On Important Quality? | Yes/No (Boolean) | Y | FALSE | PPAP configuration administrator before Publish | Publish copies PPAP Template Requirement.On Important Quality? to PPAP Template Requirement Version.On Important Quality?; editing author does not change existing versions. |
| On Regulated? | Yes/No (Boolean) | Y | FALSE | PPAP configuration administrator before Publish | Publish copies PPAP Template Requirement.On Regulated? to PPAP Template Requirement Version.On Regulated?; editing author does not change existing versions. |
| Protected? | Yes/No (Boolean) | Y | FALSE | PPAP configuration administrator before Publish | Publish copies PPAP Template Requirement.Protected? to PPAP Template Requirement Version.Protected?; editing author does not change existing versions. |
| Schedule Phase | M:1 to PPAP Schedule Phase; target 0..1; source 0..*; inverse disabled | N | NULL | Configuration administrator; new selection Active?=TRUE; preserve inactive existing reference | Publish copies PPAP Template Requirement.Schedule Phase to PPAP Template Requirement Version.Schedule Phase; editing author does not change existing versions. |
| Offset Days | Integer (Int32); calendar days; negative permitted | Y | 0 | PPAP configuration administrator before Publish | Publish copies PPAP Template Requirement.Offset Days to PPAP Template Requirement Version.Offset Days; editing author does not change existing versions. |
| Sort | Float; finite | Y | 0 | PPAP configuration administrator before Publish | Publish copies PPAP Template Requirement.Sort to PPAP Template Requirement Version.Sort; editing author does not change existing versions. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 33. PPAP Template Requirement Version

**Logical ID:** `template_line_version`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Immutable matrix row; captures the exact requirement version resolved during publication.

**Directly declared active target fields:** Template Version; Authoring Requirement Row; Requirement Version; Always Applicable?; On Important Safety?; On Important Quality?; On Regulated?; Protected?; Schedule Phase; Offset Days; Sort. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Template Version | M:1 to PPAP Template Version; target 1; source 0..*; inverse PPAP Template Version.Requirements | Y | NULL | System read only | Publish Template creates full immutable child graph. |
| Authoring Requirement Row | M:1 to PPAP Template Requirement; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Publish retains source matrix row. |
| Requirement Version | M:1 to PPAP Requirement Version; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Publish resolves Template Requirement.Requirement to exact active version and validates all referenced question/file components exist; no continuing latest lookup. |
| Always Applicable? | Yes/No (Boolean) | Y | Stored default-value copy from PPAP Template Requirement.Always Applicable? at Publish | System read only; immutable after successful Publish | Publish PPAP Template Requirement creates this value once; no continuing calculation. |
| On Important Safety? | Yes/No (Boolean) | Y | Stored default-value copy from PPAP Template Requirement.On Important Safety? at Publish | System read only; immutable after successful Publish | Publish PPAP Template Requirement creates this value once; no continuing calculation. |
| On Important Quality? | Yes/No (Boolean) | Y | Stored default-value copy from PPAP Template Requirement.On Important Quality? at Publish | System read only; immutable after successful Publish | Publish PPAP Template Requirement creates this value once; no continuing calculation. |
| On Regulated? | Yes/No (Boolean) | Y | Stored default-value copy from PPAP Template Requirement.On Regulated? at Publish | System read only; immutable after successful Publish | Publish PPAP Template Requirement creates this value once; no continuing calculation. |
| Protected? | Yes/No (Boolean) | Y | Stored default-value copy from PPAP Template Requirement.Protected? at Publish | System read only; immutable after successful Publish | Publish PPAP Template Requirement creates this value once; no continuing calculation. |
| Schedule Phase | M:1 to PPAP Schedule Phase; target 0..1; source 0..*; inverse disabled | N | Stored default-value copy from PPAP Template Requirement.Schedule Phase at Publish | System read only; immutable after successful Publish; no manual selection; Publish validates Active?=TRUE at resolution, then preserves copied reference if later inactive | Publish PPAP Template Requirement creates this value once; no continuing calculation. |
| Offset Days | Integer (Int32); calendar days; negative permitted | Y | Stored default-value copy from PPAP Template Requirement.Offset Days at Publish | System read only; immutable after successful Publish | Publish PPAP Template Requirement creates this value once; no continuing calculation. |
| Sort | Float; finite | Y | Stored default-value copy from PPAP Template Requirement.Sort at Publish | System read only; immutable after successful Publish | Publish PPAP Template Requirement creates this value once; no continuing calculation. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 34. PPAP Operating Policy

**Logical ID:** `policy`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

One governed current policy for configurable reminder and review targets.

**Directly declared active target fields:** Code; Business Time Zone; Active?; Reminder Lead Days; Overdue Reminder Interval Days; Escalation Overdue Days; Engineer Review Days; Management Review Days; Drawing Review Days; PPAP Administrators; Default Management Approver Pool; Model Engineer Role; Running Change Engineer Role; Process Change Engineer Role. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Code | Text; max 100 characters | Y | PPAP_DEFAULT | Administrator; stable after use | Enforce a single active default policy. |
| Business Time Zone | Text; max 100 characters | Y | None; SIA reporting timezone pending confirmation | Configuration administrator; native-supported timezone identifier required before activation | Native scheduler and UTC timestamp-to-calendar-date comparisons use this timezone; workstation timezone is not inferred. |
| Active? | Yes/No (Boolean) | Y | TRUE | Administrator | Exactly one active policy; do not deactivate while target create paths have no replacement. |
| Reminder Lead Days | Integer (Int32); whole number | Y | 3 | PPAP administrator; audited; nonnegative except interval must be >=1 | Native reminder/review configuration reads current value for future scheduled work; existing issued/review due snapshots not rewritten. |
| Overdue Reminder Interval Days | Integer (Int32); whole number | Y | 7 | PPAP administrator; audited; nonnegative except interval must be >=1 | Native reminder/review configuration reads current value for future scheduled work; existing issued/review due snapshots not rewritten. |
| Escalation Overdue Days | Integer (Int32); whole number | Y | 7 | PPAP administrator; audited; nonnegative except interval must be >=1 | Native reminder/review configuration reads current value for future scheduled work; existing issued/review due snapshots not rewritten. |
| Engineer Review Days | Integer (Int32); whole number | Y | 5 | PPAP administrator; audited; nonnegative except interval must be >=1 | Native reminder/review configuration reads current value for future scheduled work; existing issued/review due snapshots not rewritten. |
| Management Review Days | Integer (Int32); whole number | Y | 5 | PPAP administrator; audited; nonnegative except interval must be >=1 | Native reminder/review configuration reads current value for future scheduled work; existing issued/review due snapshots not rewritten. |
| Drawing Review Days | Integer (Int32); whole number | Y | 14 | System read only; 14 fixed by PPAP-SCHEDULE-002 | Policy Create Action Handler sets 14; changing this confirmed target requires a controlled requirements revision. |
| PPAP Administrators | M:1 to Group; target 1; source 0..*; inverse disabled | Y | NULL | Configuration administrator | Current eligible members receive internal/review/management escalations and may cancel open PPAP; no supplier access. |
| Default Management Approver Pool | M:1 to Group; target 0..1; source 0..*; inverse disabled | N | NULL | Configuration administrator | Default PPAP.Management Approver Pool; required whenever safety work is issued. |
| Model Engineer Role | M:1 to Supplier Management Role; target 1; source 0..*; inverse disabled | Y | NULL | Configuration administrator; shared governed library role | Resolve exact Supplier Specific Role for review/PPAP routing entity; operational Members come from specific role, never library membership. |
| Running Change Engineer Role | M:1 to Supplier Management Role; target 1; source 0..*; inverse disabled | Y | NULL | Configuration administrator; shared governed library role | Resolve exact Supplier Specific Role for review/PPAP routing entity; operational Members come from specific role, never library membership. |
| Process Change Engineer Role | M:1 to Supplier Management Role; target 1; source 0..*; inverse disabled | Y | NULL | Configuration administrator; shared governed library role | Resolve exact Supplier Specific Role for review/PPAP routing entity; operational Members come from specific role, never library membership. |

Initial values:

| Code | Business Time Zone | Active? | Reminder Lead Days | Overdue Reminder Interval Days | Escalation Overdue Days | Engineer Review Days | Management Review Days | Drawing Review Days | PPAP Administrators | Default Management Approver Pool | Model Engineer Role | Running Change Engineer Role | Process Change Engineer Role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PPAP_DEFAULT | Pending SIA/tenant confirmation | TRUE after required bindings resolved | 3 | 7 | 7 | 5 | 5 | 14 | Pending governed tenant group | Pending governed tenant group | Pending shared role binding | Pending shared role binding | Pending shared role binding |

## 35. PPAP Model Change

**Logical ID:** `model`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

One governing model/program with owned schedule and physical build-event navigation.

**Directly declared active target fields:** PPAPs; Code; Name; Model Lead; Active?; Dates; Build Events. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| PPAPs | Inverse 1:M grid from PPAP.Model Change | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Code | Text; max 100 characters | Y | None | Designated model lead; immutable after first related PPAP Issue | Unique model/program code; not ECS number. |
| Name | Text; max 255 characters | Y | None | Designated model lead; audited | Display label; not a schedule key. |
| Model Lead | M:1 to Employee; target 1; source 0..*; inverse disabled | Y | NULL | Designated schedule administrator | Current designated lead maintains date matrix/build events; does not inherit ownership of linked PPAP. |
| Active? | Yes/No (Boolean) | Y | TRUE | Schedule administrator | FALSE blocks new connections; current PPAP and published historical context retained. |
| Dates | Inverse 1:M grid from PPAP Model Date.Model Change | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Build Events | Inverse 1:M grid from PPAP Build Event.Model Change | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 36. PPAP Model Date

**Logical ID:** `model_date`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

One model × phase × manufacturing-stage calendar milestone.

**Directly declared active target fields:** Model Change; Phase; Manufacturing Stage; Planned Date; Change Reason. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Model Change | M:1 to PPAP Model Change; target 1; source 0..*; inverse PPAP Model Change.Dates | Y | NULL | Model lead or schedule administrator | Unique Model Change+Phase+Manufacturing Stage; update triggers connected-open-work recalculation. |
| Phase | M:1 to PPAP Schedule Phase; target 1; source 0..*; inverse disabled | Y | NULL | Model lead; active values for new row; new selection filters Active?=TRUE; preserve existing inactive references read only | Freeze identity once referenced by issued work; changing key means a deliberate new row. |
| Manufacturing Stage | M:1 to PPAP Manufacturing Stage; target 1; source 0..*; inverse disabled | Y | NULL | Model lead; active values for new row; new selection filters Active?=TRUE; preserve existing inactive references read only | One cell per governed stage; key immutable once used. |
| Planned Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | Y | None | Model lead or schedule administrator; audited | Save handler watches Planned Date only, queues recalculation for open connected elements with matching phase/stage; no closed history rewrite. |
| Change Reason | Text; max 2000 characters | Conditional | NULL | Model lead; required when Planned Date changes; otherwise retain read only | Native audit preserves old/new date, reason, actor/time; metadata-only handler changes must not recurse. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 37. PPAP Build Event

**Logical ID:** `build_event`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Physical build occurrence, separate from the date matrix.

**Directly declared active target fields:** Model Change; Code; Name; Manufacturing Stage; Start Date; End Date. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Model Change | M:1 to PPAP Model Change; target 1; source 0..*; inverse PPAP Model Change.Build Events | Y | NULL | Model lead or schedule administrator | Physical event belongs to exactly one model; not a phase-matrix cell. |
| Code | Text; max 100 characters | Y | None | Model lead; stable after downstream use | Unique within Model Change. |
| Name | Text; max 255 characters | Y | None | Model lead | Display label. |
| Manufacturing Stage | M:1 to PPAP Manufacturing Stage; target 1; source 0..*; inverse disabled | Y | NULL | Model lead; new selection filters Active?=TRUE; preserve existing inactive references read only | Used for pilot context and navigation, not substitute for date-matrix phase. |
| Start Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | Y | None | Model lead; audited | Inclusive physical-event start; must be <= End Date. Changes notify downstream pilot adapter, not PPAP date calculations unless matrix separately changes. |
| End Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | Y | None | Model lead; audited | Inclusive physical-event end; must be >= Start Date; same-day event uses equal values; no inferred duration rule. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 38. PPAP Engineering Release

**Logical ID:** `release`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Accepted immutable source-linked operational drawing release context from separate intake, including controlled manual fallback.

**Directly declared active target fields:** PPAPs; Source System; Source Release Key; ECS Number; Drawing Number; Drawing Revision Code; Drawing Release Date; Drawing Revision; Change Type; Routing Entity; Candidate Manufacturing Facilities; Manual Intake?; Content Fingerprint; Corrects Release; Source Evidence; Accepted At; Parts; Drawing Reviews. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| PPAPs | Inverse 1:M grid from PPAP.Engineering Release | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Source System | Text; max 100 characters | Y | None | Integration service or restricted intake administrator; immutable after Engineering Release.Accepted At is populated | Canonical source-system identifier supplied by separate operational connection. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Source Release Key | Text; max 255 characters | Y | None | Integration service or restricted controlled-manual intake; immutable after Engineering Release.Accepted At is populated | Stable upstream event/release identity; never infer revision ordering from ECS number. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| ECS Number | Text; max 100 characters | N | NULL | Integration service; restricted manual intake with source evidence; immutable after Engineering Release.Accepted At is populated | Identifier for provenance, not an ordinal revision. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Drawing Number | Text; max 100 characters | Y | None | Integration service or controlled-manual intake; immutable after acceptance; immutable after Engineering Release.Accepted At is populated | Validate source mapping before initial review creation. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Drawing Revision Code | Text; max 100 characters | Y | None | Integration service or controlled-manual intake; immutable after acceptance; immutable after Engineering Release.Accepted At is populated | Explicit revision identity; no numeric inference. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Drawing Release Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | Y | None | Integration service or controlled manual intake; immutable after acceptance; immutable after Engineering Release.Accepted At is populated | Authoritative calendar release date anchors initial drawing review plus 14 days. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Drawing Revision | M:1 to Operational Drawing Revision; target 1; source 0..*; inverse disabled | Y | NULL | Integration service or authorized mapping administrator; immutable after Engineering Release.Accepted At is populated | Separate operational adapter resolves canonical type/key; unresolved mapping stays in native integration diagnostics, no unvalidated review generation. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Change Type | M:1 to PPAP Type; target 1; source 0..*; inverse disabled | Y | NULL | Operational integration or controlled intake administrator before acceptance; new selection filters Active?=TRUE; preserve existing inactive references read only; immutable after Engineering Release.Accepted At is populated | Source change-context mapping determines correct internal engineer role; immutable after acceptance. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Routing Entity | M:1 to Supplier Abstract; target 1; source 0..*; inverse disabled | Y | NULL | Operational integration or controlled mapping administrator before acceptance; immutable after Engineering Release.Accepted At is populated | Exact authoritative supplier entity for initial-review role resolution; missing mapping stays owned intake work, never defaults creator; immutable after acceptance. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Candidate Manufacturing Facilities | Native M:N to Supplier Facility; inverse disabled; no association attributes | N | Source-approved operational supplier crosswalk | Integration or controlled mapping administrator before acceptance; authorized internal users only; immutable after Engineering Release.Accepted At is populated | Retain source candidates for PPAP Draft facility selection; not an approved scope and never role membership fallback; immutable after acceptance. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Manual Intake? | Yes/No (Boolean) | Y | FALSE | System read only; immutable after Engineering Release.Accepted At is populated | Controlled manual creation sets TRUE and requires source evidence; automated reconciliation matches same canonical release identity, does not generate another review. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Content Fingerprint | Text; max 64 characters | Y | Integration computes SHA-256 of agreed canonical semantic payload | System read only; immutable after Engineering Release.Accepted At is populated | Payload canonicalization/transport mapping requires interface agreement; replay same identity+fingerprint is idempotent, conflicting content uses controlled source-correction route. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Corrects Release | M:1 to PPAP Engineering Release; target 0..1; source 0..*; inverse disabled | N | NULL | Integration service or controlled intake administrator before acceptance; immutable after Engineering Release.Accepted At is populated | Only a genuine source correction to same source event/drawing revision; preserve both immutable contexts. New engineering change never uses this field to absorb into older PPAP. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Source Evidence | Native Intelex attachment collection; native file identity, name, length and content type; no new file table | N | None | Integration service or intake administrator before accept; read only after acceptance; immutable after Engineering Release.Accepted At is populated | Retain original source/file evidence; no automatic deletion; native execution logs own retry diagnostics. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Accepted At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only; immutable after Engineering Release.Accepted At is populated | Accept Release handler stamps only after full release+part graph validation; no partial accepted graph. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Parts | Inverse 1:M grid from PPAP Engineering Release Part.Engineering Release | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Drawing Reviews | Inverse 1:M grid from PPAP Drawing Review.Engineering Release | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |

- Native integration execution evidence owns transport failures/retries. Accepted release is operational provenance, not a custom integration log.
- Same source key/fingerprint retry returns original graph. Different content for the same key is not silently overwritten; reconcile source correction versus new engineering event.

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 39. PPAP Engineering Release Part

**Logical ID:** `release_part`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Per-part source classifications and mapping for an accepted drawing release.

**Directly declared active target fields:** Engineering Release; Part; Part Number; Part Description; Important Safety?; Important Quality?; Regulated?. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Engineering Release | M:1 to PPAP Engineering Release; target 1; source 0..*; inverse PPAP Engineering Release.Parts | Y | NULL | Integration service or intake administrator before acceptance; immutable after Engineering Release.Accepted At is populated | Unique Engineering Release+Part canonical identity. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Part | M:1 to Operational Part; target 1; source 0..*; inverse disabled | Y | NULL | Integration maps; restricted administrator resolves authoritative mapping; immutable after Engineering Release.Accepted At is populated | Accepted graph requires canonical operational part; no isolated API-object relationship. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Part Number | Text; max 100 characters | Y | Authoritative source part number | Integration service before acceptance; immutable afterward; immutable after Engineering Release.Accepted At is populated | Original semantic source path recorded by interface mapping; PPAP selection snapshots it. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Part Description | Text; max 255 characters | N | Authoritative source description or NULL | Integration service before acceptance; immutable afterward; immutable after Engineering Release.Accepted At is populated | Copied to PPAP Part for historical scope. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Important Safety? | Yes/No (Boolean) | Conditional | NULL until explicit TRUE or FALSE from authority | Integration service only; no PPAP editing; incomplete source may enter review/draft, never Issue; immutable after Engineering Release.Accepted At is populated | Preserve unknown/conflict in source preparation diagnostics; all three explicit flags required at PPAP Issue. Source correction creates controlled accepted context and impacts only matching issued original context. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Important Quality? | Yes/No (Boolean) | Conditional | NULL until explicit TRUE or FALSE from authority | Integration service only; no PPAP editing; incomplete source may enter review/draft, never Issue; immutable after Engineering Release.Accepted At is populated | Preserve unknown/conflict in source preparation diagnostics; all three explicit flags required at PPAP Issue. Source correction creates controlled accepted context and impacts only matching issued original context. Corrections create controlled replacement source context; never overwrite an accepted release graph. |
| Regulated? | Yes/No (Boolean) | Conditional | NULL until explicit TRUE or FALSE from authority | Integration service only; no PPAP editing; incomplete source may enter review/draft, never Issue; immutable after Engineering Release.Accepted At is populated | Preserve unknown/conflict in source preparation diagnostics; all three explicit flags required at PPAP Issue. Source correction creates controlled accepted context and impacts only matching issued original context. Corrections create controlled replacement source context; never overwrite an accepted release graph. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 40. PPAP Drawing Review

**Logical ID:** `review`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Initial engineering review for a released drawing before PPAP exists, with inspection-specification disposition.

**Directly declared active target fields:** PPAPs; Engineering Release; Responsible Engineer; Routing Entity; Change Type; Engineer Role; Due Date; Operating Policy; PPAP Required?; Exception Reason; Decision Rationale; Already Created PPAP; Inspection Specification Review Required?; Inspection Specification Disposition; Released Inspection Specification Version. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| PPAPs | Inverse 1:M grid from PPAP.Drawing Review | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Engineering Release | M:1 to PPAP Engineering Release; target 1; source 0..*; inverse PPAP Engineering Release.Drawing Reviews | Y | NULL | System read only | Accept Release creates one initial review per canonical released SIA drawing context; replay/manual reconciliation cannot create duplicates. |
| Responsible Engineer | M:1 to Employee; target 1; source 0..*; inverse disabled | Y | NULL | Routing adapter resolves governed engineer; authorized intake administrator corrects missing route | Missing required assignment remains owned integration diagnostic and cannot silently assign creator. |
| Routing Entity | M:1 to Supplier Abstract; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Accept Release copies Engineering Release.Routing Entity; exact-entity role resolution only. |
| Change Type | M:1 to PPAP Type; target 1; source 0..*; inverse disabled | Y | NULL | System read only; new selection filters Active?=TRUE; preserve existing inactive references read only | Accept Release copies Engineering Release.Change Type; selects Operating Policy internal engineer role by stable Type.Code. |
| Engineer Role | M:1 to Supplier Specific Role; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Accept Release resolves Routing Entity + policy Model/Running/Process Engineer Role; Responsible Engineer must be an eligible current member. |
| Due Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | Y | Engineering Release.Drawing Release Date + Operating Policy.Drawing Review Days | System read only | Accept Release calculates calendar date; past date warns, no holiday roll. |
| Operating Policy | M:1 to PPAP Operating Policy; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Accept Release binds current policy; initial Due Date snapshot preserved. |
| PPAP Required? | Yes/No (Boolean) | Y | TRUE | Responsible engineer while review open | No-PPAP decision requires active Exception Reason and mandatory rationale; new revision cannot be absorbed by an older PPAP. |
| Exception Reason | M:1 to PPAP Drawing Review Exception Reason; target 0..1; source 0..*; inverse disabled | Conditional | NULL | Engineer when PPAP Required?=FALSE; hidden/NULL when TRUE; active values only; new selection filters Active?=TRUE; preserve existing inactive references read only | Save clears only before review closure if PPAP Required? returns TRUE; no-PPAP completion requires controlled source-backed reason. |
| Decision Rationale | Text; max 2000 characters | Conditional | NULL | Engineer; mandatory if PPAP Required?=FALSE; retained on closure | Records governed exception or PPAP launch explanation; native workflow preserves decision. |
| Already Created PPAP | M:1 to PPAP; target 0..1; source 0..*; inverse disabled | N | NULL | Engineer may link only PPAP created for SAME canonical source change and intended facility/scope | This is duplicate-link reconciliation only; never address a different engineering change using an existing open PPAP. |
| Inspection Specification Review Required? | Yes/No (Boolean) | Y | TRUE | Engineer while review open | Initial review explicitly decides specification-review need; detailed spec version control stays in Product Management. |
| Inspection Specification Disposition | Text; max 2000 characters | Conditional | NULL | Engineer; required to complete initial review; records linked spec-review outcome or routed work reference | Review completion does not auto-create pilot program or require all later inspection execution complete. |
| Released Inspection Specification Version | M:1 to Released Inspection Specification Version; target 0..1; source 0..*; inverse disabled | Conditional | NULL | Engineer selects released version covering affected drawing/revision/parts; mandatory when Inspection Specification Review Required?=TRUE | Complete Drawing Review validates released status, correct scope and version binding; pending routed work/text alone cannot satisfy this checkpoint; NULL retained only when review not required with rationale. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 41. PPAP Part

**Logical ID:** `ppap_part`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Exact selected part and authoritative criticality snapshot, plus integrated part-warrant masses.

**Directly declared active target fields:** PPAP; Part; Source Release Part; Part Number; Part Description; Important Safety?; Important Quality?; Regulated?; Average Actual Mass (kg); Average Metal Mass (kg). 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| PPAP | M:1 to PPAP; target 1; source 0..*; inverse PPAP.Parts | Y | NULL | System read only; creation action binds exact owning record; no later reassignment | Create Action Handler binds relationship in the authorized creation context; never user-reassign; preserve related-record history. |
| Part | M:1 to Operational Part; target 1; source 0..*; inverse disabled | Y | NULL | Engineer selects active drawing-associated part in Draft | Validate exact drawing association and facility eligibility; no free-text part identity. |
| Source Release Part | M:1 to PPAP Engineering Release Part; target 0..1; source 0..*; inverse disabled | Conditional | NULL | System read only; mandatory before Issue for ALL origins | Selection handler requires Part equal selected Part, Engineering Release equal PPAP.Engineering Release and its Drawing Revision equal PPAP.Drawing Revision; copies authoritative flags and identity; missing/mismatched provenance blocks Issue. |
| Part Number | Text; max 100 characters | Y | Source Release Part.Part Number | System read only | Select Part copies display identity; frozen at Issue. |
| Part Description | Text; max 255 characters | N | Source Release Part.Part Description | System read only | Select Part captures description for approved certificate and historical scope. |
| Important Safety? | Yes/No (Boolean) | Conditional | NULL until authoritative source known | System read only; all three must be non-NULL before Issue | Select Part copies Source Release Part.Important Safety?; no PPAP override; Issue freezes; applicable correction requires cancel/replace. |
| Important Quality? | Yes/No (Boolean) | Conditional | NULL until authoritative source known | System read only; all three must be non-NULL before Issue | Select Part copies Source Release Part.Important Quality?; no PPAP override; Issue freezes; applicable correction requires cancel/replace. |
| Regulated? | Yes/No (Boolean) | Conditional | NULL until authoritative source known | System read only; all three must be non-NULL before Issue | Select Part copies Source Release Part.Regulated?; no PPAP override; Issue freezes; applicable correction requires cancel/replace. |
| Average Actual Mass (kg) | Float; finite; display up to 6 decimal places; no silent rounding of stored values | Conditional | NULL | Authorized supplier may edit before final submission; internal engineer read only | Required for every included part before Complete PPAP; >0; freeze at final submission, reopen for non-scope correction on management return only. |
| Average Metal Mass (kg) | Float; finite; display up to 6 decimal places; no silent rounding of stored values | Conditional | NULL | Authorized supplier may edit before final submission; internal engineer read only | Required for every included part before Complete PPAP; 0 <= value <= Average Actual Mass (kg); 0 confirms no metal; NULL remains unknown; freeze at final submission; coordinated correction of both mass fields on management return uses supplier-safe feedback, audit and refreezes on resubmission. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 42. PPAP Shipping Depot

**Logical ID:** `depot`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Facility approval context linked to distinct shipping depots for routing; not an additional approval scope.

**Directly declared active target fields:** PPAP; Shipping Depot. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| PPAP | M:1 to PPAP; target 1; source 0..*; inverse PPAP.Shipping Depots | Y | NULL | System read only; creation action binds exact owning record; no later reassignment | Create Action Handler binds relationship in the authorized creation context; never user-reassign; preserve related-record history. |
| Shipping Depot | M:1 to Supplier Facility; target 1; source 0..*; inverse disabled | Y | NULL | Engineer selects eligible shipping depot for Manufacturing Facility context while open; audited; no scope expansion | Validate governed depot semantics and entity access; unique PPAP+Shipping Depot; does not change approved manufacturing scope. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 43. PPAP Element

**Logical ID:** `element`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

One independently routed requirement work item; native workflow owns work/review/terminal state.

**Directly declared active target fields:** PPAP; Requirement Version; Template Requirement Version; Setup Addition Reason; Required?; Protected?; Exclusion Reason; Work Pattern; Routing Entity; Assigned Role; Assigned Team; Assigned Person; Schedule Phase; Offset Days; Calculated Due Date; Manual Due Date; Effective Due Date; Issued Baseline Due Date; Date Change Reason; Engineer Review Due Date; Submission Comment; Working Files; Current Submission; Latest Approved Snapshot; Review Feedback; Correction Reason; First Complete Submission At; First Submission Issued Due Date; First Submission Effective Due Date; Retained At; Evidence Snapshots; Answers; Inspection Results. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| PPAP | M:1 to PPAP; target 1; source 0..*; inverse PPAP.Elements | Y | NULL | System read only; creation action binds exact owning record; no later reassignment | Create Action Handler binds relationship in the authorized creation context; never user-reassign; preserve related-record history. |
| Requirement Version | M:1 to PPAP Requirement Version; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Initialize Elements copies exact Template Requirement Version.Requirement Version; never latest on reopen. |
| Template Requirement Version | M:1 to PPAP Template Requirement Version; target 0..1; source 0..*; inverse disabled | Conditional | NULL | System read only; required for template-generated elements, NULL for governed additions in Draft | Initialize Elements stores row that generated work; Add Governed Element in Draft selects active published Requirement Version; unique PPAP+stable Requirement identity. No arbitrary new requirement type. |
| Setup Addition Reason | Text; max 2000 characters | Conditional | NULL | Engineer in Draft; mandatory when Template Requirement Version=NULL; otherwise NULL | Add Governed Element records reason and exact requirement version; source identity and applicability lock at Issue. |
| Required? | Yes/No (Boolean) | Y | Template Requirement Version applicability evaluation; TRUE for Add Governed Element | Engineer in Draft only; supplier read only | Protected requirements cannot become FALSE; FALSE requires Exclusion Reason; after Issue never change. |
| Protected? | Yes/No (Boolean) | Y | Requirement Version.Protected? OR applicable Template Requirement Version.Protected?; absent template row contributes FALSE | System read only | Initialize Elements/Add Governed Element computes combined mandate; requirement-set and flags freeze at Issue. |
| Exclusion Reason | Text; max 2000 characters | Conditional | NULL | Engineer in Draft; required when Required?=FALSE; visible internal and supplier applicable explanation; cleared on Draft change back to TRUE | Issue retains excluded row and reason as scope evidence; no operational task/reminders for excluded work. |
| Work Pattern | M:1 to PPAP Work Pattern; target 1; source 0..*; inverse disabled | Y | Requirement Version.Work Pattern | System read only; new selection filters Active?=TRUE; preserve existing inactive references read only | Initialize Elements copies Requirement Version.Work Pattern; issue locks routing pattern. |
| Routing Entity | M:1 to Supplier Abstract; target 0..1; source 0..*; inverse disabled | Conditional | NULL | Engineer chooses exact linked depot/facility in Draft; required for SUPPLIER pattern and where internal supplier-specific route applies; otherwise NULL | Resolve exact-entity Supplier Specific Role; no company/facility/depot fallback; preserve used entity after Issue. |
| Assigned Role | M:1 to Supplier Specific Role; target 0..1; source 0..*; inverse disabled | Conditional | NULL | System resolves exact Routing Entity plus Requirement Version.Routing Role; engineer can resolve missing assignment before issue | Required when pattern SUPPLIER or configured role routing applies; recheck current membership at actions; no automatic fallback. |
| Assigned Team | M:1 to Group; target 0..1; source 0..*; inverse disabled | Conditional | NULL | Engineer selects inspection team for Work Pattern.Code=INSPECTION or JOINT; hidden/NULL for other patterns unless requirement config defines internal team | Current eligible members can act; no copy of members into another group. |
| Assigned Person | M:1 to Employee; target 0..1; source 0..*; inverse disabled | N | NULL | Engineer may assign/reassign eligible individual while open; person must remain eligible for entity/team/role context | Initialize defaults PPAP.Project Owner for INTERNAL when no separate configured route; otherwise NULL leaves current eligible role/team responsible. Issue requires a real eligible route. Assignment handler audits/notifies; no automatic overdue reassignment. |
| Schedule Phase | M:1 to PPAP Schedule Phase; target 0..1; source 0..*; inverse disabled | N | Template Requirement Version.Schedule Phase, otherwise NULL | Engineer may assign in Draft or Move Schedule Phase for open schedule-connected work with mandatory reason; supplier read only; new selection filters Active?=TRUE; preserve existing inactive references read only | Initialize copies Template Requirement Version.Schedule Phase; NULL for manual date rules. Model-specific bulk phase move validates new cell, warns/clears incompatible Manual Due Date only on connected work, recalculates open work; disconnected manual dates await explicit Reconnect; completed/closed work and issued baseline/config lineage preserved. |
| Offset Days | Integer (Int32); whole number | Y | Template Requirement Version.Offset Days, otherwise 0 | Read only for template row; engineer in Draft for governed addition | Integer calendar offset frozen at Issue; may be negative. |
| Calculated Due Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | N | NULL | System read only | Initialize/recalculate uses exact Model Change + Schedule Phase + Manufacturing Stage date plus Offset Days; NULL when no connected model rule. |
| Manual Due Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | N | NULL | Engineer while open with mandatory reason; supplier read only | Manual date used while disconnected or explicit authorized per-element override; clearing warns and returns connected calculation. |
| Effective Due Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | Conditional | NULL | System read only; required for every Required?=TRUE element before Issue; NULL permitted for excluded work | Date handler uses Manual Due Date if supplied, otherwise Calculated Due Date; connected refresh changes open non-overridden work only. Past dates warn, never block solely for age. |
| Issued Baseline Due Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | Conditional | NULL | System read only; required for required elements after issue | Issue snapshots Effective Due Date once; never recalculated. |
| Date Change Reason | Text; max 2000 characters | Conditional | NULL | Engineer required on manual date change, Disconnect/Reconnect and bulk updates; internal only; retain last reason otherwise | Save handler watches Manual Due Date, Effective Due Date and schedule connection action; native audit must retain each old/new date, actor, timestamp and reason. |
| Engineer Review Due Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | N | NULL | System read only; displayed during Engineer Review and historical reports | Submit/resubmit computes local submission date plus Operating Policy.Engineer Review Days; distinct from supplier due date. |
| Submission Comment | Text; max 2000 characters | N | NULL | Current assignee may edit in Work In Progress; engineer read only | Submit snapshots to Evidence Snapshot.Submission Comment; begin correction prepares fresh value while previous submission stays frozen. |
| Working Files | Native Intelex attachment collection; native file identity, name, length and content type; no new file table | N | None | Current assignee may edit only Work In Progress while issued PPAP In Progress; supplier uses scope gate on Submit | Submit copies to immutable Evidence Snapshot.Files; no shared mutable container; clearing working draft never deletes snapshot copies. |
| Current Submission | M:1 to PPAP Evidence Snapshot; target 0..1; source 0..*; inverse disabled | N | NULL | System read only | Submit stores exact newly frozen snapshot; return preserves it in history; points to current submitted cycle. |
| Latest Approved Snapshot | M:1 to PPAP Evidence Snapshot; target 0..1; source 0..*; inverse disabled | N | NULL | System read only | Approve Element or Retain Evidence updates after approval; correction reopening retains prior pointer until replacement approval. |
| Review Feedback | Text; max 2000 characters | Conditional | NULL | Responsible engineer on Return Element; assignee-visible; required on return; previous feedback retained in native history | Return writes to current snapshot feedback and workflow history; supplier-safe content only; rework quality separate from timeliness. |
| Correction Reason | Text; max 2000 characters | Conditional | NULL | Responsible engineer on Reopen for Correction; required for approved element; otherwise NULL or retained historical reason | Only before PPAP closure and only same scope/classes/requirement set; never for engineering change; native reopen action binding must be verified. |
| First Complete Submission At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | First successful complete supplier Submit writes once; mandatory file/answer checks precede write; never overwritten by rejection/resubmission. |
| First Submission Issued Due Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | N | NULL | System read only | First complete supplier Submit copies Issued Baseline Due Date for frozen timeliness comparison. |
| First Submission Effective Due Date | Date; no time component; business-day boundary uses PPAP Operating Policy.Business Time Zone | N | NULL | System read only | First complete supplier Submit copies Effective Due Date for second frozen timeliness comparison. |
| Retained At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Retain Evidence writes for explicit retained path; does not create a supplier-submission performance event. |
| Evidence Snapshots | Inverse 1:M grid from PPAP Evidence Snapshot.Element | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Answers | Inverse 1:M grid from PPAP Answer.Element | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |
| Inspection Results | Inverse 1:M grid from PPAP Inspection Result Link.Element | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |

- Unique PPAP + stable Requirement identity. Excluded rows have no active workflow/reminders.
- Work Pattern controls responsibility, not a duplicate status. Engineer reviews every required element.
- Approved element may reopen only for non-engineering correction while PPAP open; native reopen must retain immutable evidence and full history.

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 44. PPAP Answer

**Logical ID:** `answer`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

One editable typed answer per element and question version; native audit preserves preparation changes.

**Directly declared active target fields:** Element; Question Version; Answer - Text; Answer - Number; Answer - Yes or No; Answer - Date. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Element | M:1 to PPAP Element; target 1; source 0..*; inverse PPAP Element.Answers | Y | NULL | System read only; creation action binds exact owning record; no later reassignment | Create Action Handler binds relationship in the authorized creation context; never user-reassign; preserve related-record history. |
| Question Version | M:1 to PPAP Question Version; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Initialize Elements creates exactly one answer per Element+Question Version; resubmission edits same working answer. |
| Answer - Text | Text; max 8000 characters | Conditional | NULL | Current assignee may edit Work In Progress only; visible when Question Version.Answer Type.Code=TEXT; required only when that type matches AND Question Version.Required?=TRUE; optional matching-type questions remain visible; other types hidden | Save clears other typed fields only in editable preparation; if published type changes it creates a new Question Version, never mutate old question/answer context. Submit validates the matching value (FALSE and numeric 0 count as answered). |
| Answer - Number | Float; finite; no silent rounding | Conditional | NULL | Current assignee may edit Work In Progress only; visible when Question Version.Answer Type.Code=NUMBER; required only when that type matches AND Question Version.Required?=TRUE; optional matching-type questions remain visible; other types hidden | Save clears other typed fields only in editable preparation; if published type changes it creates a new Question Version, never mutate old question/answer context. Submit validates the matching value (FALSE and numeric 0 count as answered). |
| Answer - Yes or No | Nullable Boolean; NULL is unanswered | Conditional | NULL | Current assignee may edit Work In Progress only; visible when Question Version.Answer Type.Code=BOOLEAN; required only when that type matches AND Question Version.Required?=TRUE; optional matching-type questions remain visible; other types hidden | Save clears other typed fields only in editable preparation; if published type changes it creates a new Question Version, never mutate old question/answer context. Submit validates the matching value (FALSE and numeric 0 count as answered). |
| Answer - Date | Date; no time component | Conditional | NULL | Current assignee may edit Work In Progress only; visible when Question Version.Answer Type.Code=DATE; required only when that type matches AND Question Version.Required?=TRUE; optional matching-type questions remain visible; other types hidden | Save clears other typed fields only in editable preparation; if published type changes it creates a new Question Version, never mutate old question/answer context. Submit validates the matching value (FALSE and numeric 0 count as answered). |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 45. PPAP Evidence Snapshot

**Logical ID:** `evidence`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Immutable multi-file/answer submission, approval and reuse lineage required by ADR-023; native audit alone cannot provide independent copied evidence containers.

**Directly declared active target fields:** Element; Sequence; Submission Comment; Files; Reused From; Compatibility Confirmation; Nonlatest Selection Reason; Submitted At; Submitted By; Approved At; Approved By; Rejected At; Review Feedback; Answers. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Element | M:1 to PPAP Element; target 1; source 0..*; inverse PPAP Element.Evidence Snapshots | Y | NULL | System read only; creation action binds exact owning record; no later reassignment | Create Action Handler binds relationship in the authorized creation context; never user-reassign; preserve related-record history. |
| Sequence | Integer (Int32); whole number | Y | Next integer within Element under lock | System read only | Submit/Retain allocates with unique Element+Sequence; retry key action correlation, not double-click count. |
| Submission Comment | Text; max 2000 characters | N | PPAP Element.Submission Comment on Submit | System read only; assignee may see own active submission; rejected snapshots internal history | Submit copies once; no direct edits. |
| Files | Native Intelex attachment collection; native file identity, name, length and content type; no new file table | N | None | System writes at Submit/Retain; read only download subject to snapshot audience | Copy original bytes and native file metadata; validate copy completeness before workflow transition; approved/rejected history retained; no automatic deletion. |
| Reused From | M:1 to PPAP Evidence Snapshot; target 0..1; source 0..*; inverse disabled | N | NULL | System read only; internal lineage navigation only | Retain stores immediate source; fresh submission NULL. Never grant receiving supplier access to source PPAP through lineage. |
| Compatibility Confirmation | Text; max 2000 characters | Conditional | NULL | Engineer via Retain Evidence; required when Reused From populated; otherwise NULL | Explicit confirmation of revision and selected-part compatibility; records source/receiving frozen contexts; same facility/drawing/element validated. |
| Nonlatest Selection Reason | Text; max 2000 characters | Conditional | NULL | Engineer via Retain Evidence; required if selected source differs from latest eligible approved snapshot; otherwise NULL | Store decision at selection; suggested latest determined by Approved At then immutable identity as tie breaker. |
| Submitted At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Submit or Retain records actual action time once; native history retains action correlation. |
| Submitted By | M:1 to Employee; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Submit/Retain writes actual actor identity; external identity binding must be verified. |
| Approved At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Approve Element or Retain Evidence records approval once; absent until approved; never clear when element correction reopens. |
| Approved By | M:1 to Employee; target 0..1; source 0..*; inverse disabled | N | NULL | System read only | Engineer approval or explicit retention actor stamps once; engineer can approve own internal work. |
| Rejected At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Return Element records rejection once on current snapshot; rejected snapshot never becomes reusable. |
| Review Feedback | Text; max 2000 characters | Conditional | NULL | System read only; assignee sees current return feedback, prior rejected snapshot remains internal | Return copies nonblank Element.Review Feedback; approved snapshot cannot later become rejected. |
| Answers | Inverse 1:M grid from PPAP Evidence Answer.Evidence Snapshot | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |

- Frozen content at Submit/Retain; review stamps are action-only write-once metadata.
- Fresh attempt cannot be both Approved and Rejected. Rejected evidence is internal historical data, never a candidate for reuse.
- Candidate owning PPAP must not be Cancelled; approved snapshot may remain eligible during non-engineering correction. Existing receiving copies are never edited on source cancellation.
- No custom notification, audit, workflow or error-log object is added.

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 46. PPAP Evidence Answer

**Logical ID:** `evidence_answer`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Immutable typed answer component copied into an evidence snapshot.

**Directly declared active target fields:** Evidence Snapshot; Question Version; Answer - Text; Answer - Number; Answer - Yes or No; Answer - Date. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Evidence Snapshot | M:1 to PPAP Evidence Snapshot; target 1; source 0..*; inverse PPAP Evidence Snapshot.Answers | Y | NULL | System read only; creation action binds exact owning record; no later reassignment | Create Action Handler binds relationship in the authorized creation context; never user-reassign; preserve related-record history. |
| Question Version | M:1 to PPAP Question Version; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Submit/Retain copies exact question version; unique Evidence Snapshot+Question Version. |
| Answer - Text | Text; max 8000 characters | Conditional | Submit: PPAP Answer.Answer - Text; Retain: selected source PPAP Evidence Answer.Answer - Text, or reconciled receiving PPAP Answer.Answer - Text | System read only; visible when Question Version.Answer Type.Code=TEXT; required only when that type matches AND Question Version.Required?=TRUE; optional matching-type questions remain visible; other types hidden | Submit/Retain Action Handler copies named source value; immutable, other typed values NULL. Preserve original source question version; receiving required answers must also be satisfied, never coerce changed answer types. |
| Answer - Number | Float; finite; no silent rounding | Conditional | Submit: PPAP Answer.Answer - Number; Retain: selected source PPAP Evidence Answer.Answer - Number, or reconciled receiving PPAP Answer.Answer - Number | System read only; visible when Question Version.Answer Type.Code=NUMBER; required only when that type matches AND Question Version.Required?=TRUE; optional matching-type questions remain visible; other types hidden | Submit/Retain Action Handler copies named source value; immutable, other typed values NULL. Preserve original source question version; receiving required answers must also be satisfied, never coerce changed answer types. |
| Answer - Yes or No | Nullable Boolean; NULL is unanswered | Conditional | Submit: PPAP Answer.Answer - Yes or No; Retain: selected source PPAP Evidence Answer.Answer - Yes or No, or reconciled receiving PPAP Answer.Answer - Yes or No | System read only; visible when Question Version.Answer Type.Code=BOOLEAN; required only when that type matches AND Question Version.Required?=TRUE; optional matching-type questions remain visible; other types hidden | Submit/Retain Action Handler copies named source value; immutable, other typed values NULL. Preserve original source question version; receiving required answers must also be satisfied, never coerce changed answer types. |
| Answer - Date | Date; no time component | Conditional | Submit: PPAP Answer.Answer - Date; Retain: selected source PPAP Evidence Answer.Answer - Date, or reconciled receiving PPAP Answer.Answer - Date | System read only; visible when Question Version.Answer Type.Code=DATE; required only when that type matches AND Question Version.Required?=TRUE; optional matching-type questions remain visible; other types hidden | Submit/Retain Action Handler copies named source value; immutable, other typed values NULL. Preserve original source question version; receiving required answers must also be satisfied, never coerce changed answer types. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 47. PPAP Inspection Result Link

**Logical ID:** `result_link`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Links a required element to a specialist result/version with engineer acceptance evidence.

**Directly declared active target fields:** Element; Inspection Result; Specification Version Reference; Result Version Reference; Accepted?; Acceptance Comment; Evidence Snapshot. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Element | M:1 to PPAP Element; target 1; source 0..*; inverse PPAP Element.Inspection Results | Y | NULL | System read only; creation action binds exact owning record; no later reassignment | Create Action Handler binds relationship in the authorized creation context; never user-reassign; preserve related-record history. |
| Inspection Result | M:1 to Inspection Result; target 1; source 0..*; inverse disabled | Y | NULL | Assignee links authorized result during Work In Progress | Freeze exact result/specification-version reference on element submission; detailed measurements remain outside PPAP. |
| Specification Version Reference | Text; max 255 characters | Y | Authoritative linked result specification identifier | System read only | Link result adapter resolves exact frozen specification version; mutable latest-spec pointer is insufficient. |
| Result Version Reference | Text; max 255 characters | Y | Authoritative immutable result/version identifier | System read only | Link adapter must prove referenced result version immutable; if external tool only offers mutable result, copy controlled accepted result artifact into Evidence Snapshot.Files at Submit and preserve this source/version reference. |
| Accepted? | Yes/No (Boolean) | Y | FALSE | Responsible engineer in Engineer Review, or explicit Retain Evidence action with current eligibility/compatibility validation | Explicit acceptance required for result relied upon by required inspection element; Retain creates receiving snapshot-specific link and stamps engineer acceptance through named action; native audit retains actor/time; unrelated failed programs do not gate approval. |
| Acceptance Comment | Text; max 2000 characters | Conditional | NULL | Engineer; required when rejecting result for use; optional when Accepted?=TRUE; retain on review | Native audit captures acceptance change; signed-off result links locked with approved snapshot, correction creates fresh working links rather than editing historical ones. |
| Evidence Snapshot | M:1 to PPAP Evidence Snapshot; target 0..1; source 0..*; inverse disabled | N | NULL | System read only | Submit binds result links to current snapshot; snapshot-specific links immutable after decision; new correction creates new links. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 48. PPAP Pilot Program Link

**Logical ID:** `pilot_link`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Links new-model PPAP and physical build event to an externally owned pilot program.

**Directly declared active target fields:** PPAP; Build Event; Pilot Program. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| PPAP | M:1 to PPAP; target 1; source 0..*; inverse PPAP.Pilot Programs | Y | NULL | System read only; creation action binds exact owning record; no later reassignment | Create Action Handler binds relationship in the authorized creation context; never user-reassign; preserve related-record history. |
| Build Event | M:1 to PPAP Build Event; target 1; source 0..*; inverse disabled | Y | NULL | Engineer selects event for same Model Change | Launch Pilot validates PPAP.Type.Code=NEW_MODEL; event model must equal PPAP.Model Change. |
| Pilot Program | M:1 to Pilot Part Program; target 1; source 0..*; inverse disabled | Y | NULL | System read only | External program launch adapter creates/links once per explicit launch token; no auto-creation merely because Drawing Review completes. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 49. PPAP Discussion Thread

**Logical ID:** `thread`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Subject and immutable audience boundary, independent of workflow tasks.

**Directly declared active target fields:** PPAP; Subject; Internal Only?; Notification Recipients; Posts. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| PPAP | M:1 to PPAP; target 1; source 0..*; inverse PPAP.Discussion Threads | Y | NULL | System read only; creation action binds exact owning record; no later reassignment | Create Action Handler binds relationship in the authorized creation context; never user-reassign; preserve related-record history. |
| Subject | Text; max 255 characters | Y | None | Authorized participant prepares before first post; immutable after first post | Thread create checks PPAP open, record access and scope. |
| Internal Only? | Yes/No (Boolean) | Y | TRUE for internal author; FALSE forced for supplier author | Internal author chooses before first post; supplier forced FALSE/read only; immutable after first post | External thread requires authorized supplier-visible audience; internal content cannot become external. |
| Notification Recipients | Native M:N to Employee; inverse disabled; no junction attributes | N | None | Thread author/authorized participants select only users eligible to see thread while PPAP open | Notify on new post; membership never grants record access; native notification deduplication, no workflow tasks. |
| Posts | Inverse 1:M grid from PPAP Discussion Post.Thread | N | None | Read only; apply record and attachment security independently | Navigation over source relationship only; no second stored relationship. |

- Use separate internal/external threads with immutable audience. This chooses an explicitly allowed ADR-107 implementation fallback.
- PPAP closure makes both internal and external thread/post operations read only, including files and notifications.

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

## 50. PPAP Discussion Post

**Logical ID:** `post`. **Evidence:** Proposed. **Inheritance parent:** None (proposed; native infrastructure is not a business inheritance edge).

Append-only posted body and attachments, optional reply relationship.

**Directly declared active target fields:** Thread; Reply To; Body; Attachments; Posted By; Posted At. 

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---:|---|---|---|
| Thread | M:1 to PPAP Discussion Thread; target 1; source 0..*; inverse PPAP Discussion Thread.Posts | Y | NULL | System read only; creation action binds exact owning record; no later reassignment | Create Action Handler binds relationship in the authorized creation context; never user-reassign; preserve related-record history. |
| Reply To | M:1 to PPAP Discussion Post; target 0..1; source 0..*; inverse disabled | N | NULL | Author chooses visible post in same Thread before Post; immutable afterward | Validate same Thread; no mixed visibility within a thread. |
| Body | Text; max 8000 characters | Y | None | Authorized thread participant before Post only; nonblank text mandatory including attachment posts; never edit/delete after Post | Post validates PPAP open; encode/sanitize rich content through native controls; corrections require a new reply. |
| Attachments | Native Intelex attachment collection; native file identity, name, length and content type; no new file table | N | None | Author prepares before Post; append-only immutable after Post; same access as thread | Post freezes native attachment collection including additions/deletions; both discussion objects read only after PPAP Approved/Cancelled. |
| Posted By | M:1 to Employee; target 1; source 0..*; inverse disabled | Y | NULL | System read only | Post writes authenticated actor once; external supplier-to-native actor identity binding must be verified, no invented contact-to-Employee conversion. |
| Posted At | Date/Time; time-zone support enabled; store UTC, display user zone | N | NULL | System read only | Post writes server timestamp once; prepared drafts are not posted or notified. |

Initial values:

No operational seed records. Configuration content is loaded only from the controlled SIA source; new operational records are action-generated.

