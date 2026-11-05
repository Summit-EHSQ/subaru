# Supplier Nonconformances — field-level contract

Companion to [Technical Specification](supplier-nonconformances-technical-specification.md). Baseline metadata is labelled Extracted; additions and supplier-scoped behavior are Proposed. This is a review contract with the unresolved deployment gates in the main specification. Native platform identity, workflow and audit infrastructure is reused.

Metadata requiredness is distinguished from action-time validation. For inherited fields the package row is retained at its declaring object; supplier-specific overrides in the main specification apply only to the Supplier Nonconformance branch. Null metadata does not prove absence of tenant behavior. All inherited and dependency objects receive individual sections; zero exported fields does not prove zero tenant fields. Shared external authorities introduced by the target are referenced in the main specification and are not redefined here.

## 1.1 Abstract Corrective Action

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Completion Date, Completion Notes, Costs, Due Date, Is Completed, Total Actual Cost, Workflow

Stable metadata ID: `ffaeb11a-e798-47ed-a3fb-1336a82876dd`. Source: `/GraphData/Items/24/GraphData/Items/16`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Completion Date | Date | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `CompletionDate`; `9a09042e-ff57-4a57-b3e6-795e06006fd7`; `/GraphData/Items/24/GraphData/Items/20` |
| Completion Notes | Text; max length not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `CompletionNotes`; `86b9c673-ec53-4c9b-829d-ebac8bb5e503`; `/GraphData/Items/24/GraphData/Items/21` |
| Costs | Reference to Action Cost; Unresolved; inverse Action; Unresolved cardinality: inverse field is not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Costs`; `365d6dd3-6623-4050-b653-179f5ef59bdc`; `/GraphData/Items/90` |
| Due Date | Date | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `DueDate`; `664fc9c8-4c2c-43d4-9b44-e67467fdbab4`; `/GraphData/Items/24/GraphData/Items/6` |
| Is Completed | Yes/No | N | false | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `IsCompleted`; `84565854-3e9a-4898-aad8-0fc944032bc4`; `/GraphData/Items/63` |
| Total Actual Cost | Float; precision=None; scale=None (null means unspecified) | N | Calculation: SUM(Costs.ConvertedCost) | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `ToCostofActions`; `4722399e-aec9-439c-9811-cc65d737caf5`; `/GraphData/Items/59` |
| Workflow | Reference to Workflow Instance; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Workflow`; `852492da-9429-4bb5-849e-b38e817d7ae5`; `/GraphData/Items/219` |

## 1.2 Abstract Cost

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Actual Cost (USD)

Stable metadata ID: `b14ca608-e356-4b60-b9ec-3db8e6e208e0`. Source: `/GraphData/Items/179`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Actual Cost (USD) | Float; precision=None; scale=None (null means unspecified) | N | None | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `ConvertedCost`; `9451172b-8f00-4bd1-b3be-5f0b6ba485fd`; `/GraphData/Items/58`; population mechanism unresolved (G-12) |

## 1.3 Abstract Evidence

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `92a1b764-06f7-4556-8e6a-1f72be0b1c7c`. Source: `/GraphData/Items/38`.

## 1.4 Action Cost

**Inheritance parent:** Abstract Cost

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `9121f9af-5120-47d8-97e8-a04ea1ee6ce8`. Source: `/GraphData/Items/91`.

## 1.5 Action Plan Abstract

**Inheritance parent:** Abstract Corrective Action

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `edca9466-cdf8-4317-85c9-d3efb40373a2`. Source: `/GraphData/Items/24/GraphData/Items/14`.

## 1.6 Audit Finding

**Inheritance parent:** Audit Finding (AFW)

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `0f572752-7913-4941-a977-6b5961d37e73`. Source: `/GraphData/Items/67`.

## 1.7 Audit Finding (AFW)

**Inheritance parent:** Finding (CFW)

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `34098221-b909-44a1-8c64-48a9e8681fb9`. Source: `/GraphData/Items/220`.

## 1.8 Business Function

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `4a9452b8-2456-4184-9a3a-3df7857e766b`. Source: `/GraphData/Items/18`.

## 1.9 CAPA

**Inheritance parent:** Abstract Corrective Action

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `11b88061-922a-4690-86df-61f1b766b34a`. Source: `/GraphData/Items/205`.

## 1.10 CAR Abstract

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `9e02f3af-cb69-48f0-8206-dfbe8cb7d06c`. Source: `/GraphData/Items/234`.

## 1.11 Cause Analysis

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `a631a825-2e5f-4fb7-ae45-6d084d8582d3`. Source: `/GraphData/Items/131`.

## 1.12 Employee

**Inheritance parent:** Subject

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `6afb3ac6-96db-4072-9293-4d02699d1264`. Source: `/GraphData/Items/24/GraphData/Items/19`.

## 1.13 Event

**Inheritance parent:** Event Scenario

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Action Plan, Additional Cost, CAPAs, CAREvent, Cause Analysis, Effectiveness of Corrective Actions, Costs, Date Investigated, Date, Date Approved, Date (only), Date Reported, Date User Entered, End Date, Estimated Cost, Event Action Plans, Event Type, Evidence, Final Approver Notes, Final Approver, Immediate Action, Investigation Due Date, Investigation Results, Investigator, Lessons Learned, # CAPAs, # Opened CAPAs, Parent Event, Reported By, Review Notes, Risk, Root Causes, Severity, Sub Events, Summary, Suspected Cause, Team Leader, Team Leader Id, Team Members, Total Cost, Event Type

Stable metadata ID: `3979d543-6df2-46a1-a26e-293cd7978bdc`. Source: `/GraphData/Items/1`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action Plan | Reference to Abstract Corrective Action; Unresolved; inverse EventRelated; Unresolved cardinality: inverse field is not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `AbsCorActPlan`; `3ea730da-aceb-4224-8793-27c61f2e1e40`; `/GraphData/Items/171` |
| Additional Cost | Float; precision=None; scale=None (null means unspecified) | N | None | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `AdditionalCost`; `a542a8b8-dd90-48bc-a535-7b10a15e0759`; `/GraphData/Items/202`; population mechanism unresolved (G-12) |
| CAPAs | Reference to CAPA; Unresolved; inverse Event; Unresolved cardinality: inverse field is not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `CAPAs`; `52172e03-323f-456d-83f8-a1be8f25a1e2`; `/GraphData/Items/65` |
| CAREvent | Reference to CAR Abstract; 0..* to 0..*; inverse RelatedEvents; Extracted (RelationData.Type=3 and m:n label) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `CAREvent`; `eb34cf88-1d00-4d8e-9884-911b58f0ff26`; `/GraphData/Items/193` |
| Cause Analysis | Reference to Cause Analysis; Unresolved; inverse Event; Unresolved cardinality: inverse field is not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `CauseAnalysis`; `a1799794-6b40-45d5-bb0d-20f01c47c474`; `/GraphData/Items/130` |
| Effectiveness of Corrective Actions | Text; max length 1000 | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `CorrectiActions`; `06b8b703-3ab8-4169-99d8-8b55d06142ec`; `/GraphData/Items/71` |
| Costs | Reference to Event Cost; Unresolved; inverse Event; Unresolved cardinality: inverse field is not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Costs`; `c143290b-6bee-4303-bdcf-e8d782544b33`; `/GraphData/Items/57` |
| Date Investigated | Date and Time; TimeZoneCapture=False | N | NOW() | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `DatInvestigated`; `1af36c43-8f16-4196-a359-06183b63327b`; `/GraphData/Items/0` |
| Date | Date and Time; TimeZoneCapture=True | Y | Exported value generator: TodayValueGenerator | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Date`; `0c3dee6c-4c57-468b-93b4-bcefa53838ea`; `/GraphData/Items/187` |
| Date Approved | Date and Time; TimeZoneCapture=None | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `DateApproved`; `fad9ae94-1ceb-4db8-aebf-750dd4b6fa92`; `/GraphData/Items/43` |
| Date (only) | Date | N | Calculation: IFERROR(DATE(YEAR(DateUserEntered),MONTH(DateUserEntered),DAY(DateUserEntered)), NULL)  | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `DateOnly`; `5115ab78-7ac4-4656-b8fb-0e965a1894fe`; `/GraphData/Items/72` |
| Date Reported | Date and Time; TimeZoneCapture=False | N | NOW | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `DateReported`; `760c52c0-2a61-4139-a0aa-a55022e38a3b`; `/GraphData/Items/44` |
| Date User Entered | Date and Time; TimeZoneCapture=False | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `DateUserEntered`; `e66d6677-14c5-44c5-875b-4fdd6231c3a6`; `/GraphData/Items/73` |
| End Date | Date and Time; TimeZoneCapture=None | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `EndDate`; `496a88f9-6f7a-4383-bf59-02dc7e166aa7`; `/GraphData/Items/183` |
| Estimated Cost | Float; precision=None; scale=None (null means unspecified) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `EstimatedCost`; `975585b6-ca4b-43e3-9b84-bb89621a037a`; `/GraphData/Items/35` |
| Event Action Plans | Reference to Event Action Plan; Unresolved; inverse RelatedEvent; Unresolved cardinality: inverse field is not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `EventActionPlan`; `04bfe728-720f-4a4b-aa46-008492ccd75b`; `/GraphData/Items/55` |
| Event Type | Text; max length not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `EventType`; `019fa055-545a-4039-ace5-8d61a1c4e278`; `/GraphData/Items/181` |
| Evidence | Reference to Abstract Evidence; Unresolved; inverse Event; Unresolved cardinality: inverse field is not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Evidence`; `e3a6f9ec-88bb-460c-851a-e841ebb6e0a3`; `/GraphData/Items/37` |
| Final Approver Notes | Text; max length not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `FinalAppNotes`; `3e281908-b2fa-47fd-b91d-1bf2892687d6`; `/GraphData/Items/201` |
| Final Approver | Reference to Employee; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `FinalApprover`; `3117446a-5f8b-492a-92ed-91ab8b125cd4`; `/GraphData/Items/163` |
| Immediate Action | Text; max length not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `ImmediateAction`; `086ba0b0-9427-47df-9ed9-bfe9533504d3`; `/GraphData/Items/180` |
| Investigation Due Date | Date | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `InvestDueDate`; `1bc4009a-c02a-49b1-a4af-f1fea9df5fe7`; `/GraphData/Items/128` |
| Investigation Results | Text; max length not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `InvestResults`; `a258080d-cc53-4f23-ad66-ac7c6d29c621`; `/GraphData/Items/196` |
| Investigator | Reference to Employee; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Investigator`; `a40f99fb-438b-47ab-98db-b7a30317c059`; `/GraphData/Items/188` |
| Lessons Learned | Reference to Lesson Learned; Unresolved; inverse RelatedEvent; Unresolved cardinality: inverse field is not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `LessonsLearned`; `32766e14-5021-4a87-a367-b4c3b3a4d0e2`; `/GraphData/Items/192` |
| # CAPAs | Number; precision=None; scale=None (null means unspecified) | N | Calculation: COUNT(CAPAs) | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `NBCAPAs`; `a559ab46-261b-40a9-b6da-a02d5dc14cda`; `/GraphData/Items/75` |
| # Opened CAPAs | Number; precision=None; scale=None (null means unspecified) | N | Calculation: COUNT(FILTER(CAPAs.IsCompleted, "=", FALSE)) | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `NBOpenedCAPAs`; `7f67fdc1-cd8e-46f7-9db2-d98c76c4a3b2`; `/GraphData/Items/62` |
| Parent Event | Reference to Event; 0..1 to 0..*; inverse Subs; Inferred from extracted inverse foreign-key field | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `ParentEvent`; `713746cf-a42b-4668-898f-a7584a158c4c`; `/GraphData/Items/189` |
| Reported By | Reference to Employee; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | CURRENTUSER() | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `ReportedBy`; `5453ca68-a7da-47d3-97a7-3d4fe3453480`; `/GraphData/Items/195` |
| Review Notes | Text; max length not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `ReviewNotes`; `56512862-479d-4c9e-8d95-e6a3c981b3e9`; `/GraphData/Items/199` |
| Risk | Reference to Operational Risk Abstract; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Risk`; `dfdc7fde-1138-4e7a-9fc6-f684551f6245`; `/GraphData/Items/191` |
| Root Causes | Reference to Root Cause; Unresolved; inverse Event; Unresolved cardinality: inverse field is not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `RootCauses`; `72ddf4db-f95a-4ca3-afcb-606a33e3daa9`; `/GraphData/Items/197` |
| Severity | Reference to Severity; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification; exported filter retained in package; scope dependencies require verification | Existing configuration; `Severity`; `9ae4fed4-f390-4652-a2a8-81d182f574b5`; `/GraphData/Items/79` |
| Sub Events | Reference to Event; 0..1 to 0..*; inverse ParentEvent; Inferred (foreign-key reverse collection; lower bound from inverse) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Subs`; `bc2c5a2b-6725-4c3d-9d54-89c9e7428108`; `/GraphData/Items/78` |
| Summary | Text; max length 1000 | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Summary`; `ebc4aaca-ae78-4dec-8913-16dd6d0675ee`; `/GraphData/Items/186` |
| Suspected Cause | Text; max length not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `SuspectedCause`; `b270e844-5c18-42bf-a3d7-e778ad45b5c1`; `/GraphData/Items/10` |
| Team Leader | Reference to Employee; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `TeamLeader`; `97fe76e0-1e0d-48be-a763-c0f9a17909b2`; `/GraphData/Items/198` |
| Team Leader Id | Guid | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `TeamLeaderId`; `0486cb82-d6ee-4630-b3dd-9e554ea203ff`; `/GraphData/Items/243` |
| Team Members | Reference to Team Member; Unresolved; inverse Event; Unresolved cardinality: inverse field is not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `TeamMembers`; `c3fd66c9-f24a-4a45-80bd-2b5a9a1ca679`; `/GraphData/Items/194` |
| Total Cost | Float; precision=None; scale=None (null means unspecified) | N | Calculation: SUM(Costs.ConvertedCost) + SUM(EventActionPlan.ToCostofActions) | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `TotalCost`; `a24ac374-0c8b-4e97-bae8-172955ca1586`; `/GraphData/Items/54` |
| Event Type | Reference to Event Type; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `TypeOfEvent`; `e7832899-27d1-4335-b3aa-0c5d7e75f5ab`; `/GraphData/Items/20`; population mechanism unresolved (G-12) |

## 1.14 Event Action Plan

**Inheritance parent:** Action Plan Abstract

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `684c77dc-7d3c-4387-98ca-d93cf8b6ae16`. Source: `/GraphData/Items/242`.

## 1.15 Event Cost

**Inheritance parent:** Abstract Cost

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `b2ca1b26-74a4-4a99-aa8c-fac02454835b`. Source: `/GraphData/Items/208`.

## 1.16 Event Scenario

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Created By, Description, Location, Name, Record No., Workflow

Stable metadata ID: `c0d0d372-c03c-46cd-9f51-cdd28b620177`. Source: `/GraphData/Items/4`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Created By | Reference to Employee; 0..* to 1..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | Y | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `CreatedBy`; `3a13447d-0907-465f-9cae-6230042a104e`; `/GraphData/Items/159` |
| Description | Text; max length not exported | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Description`; `72f0501c-5196-4fdd-9c48-6d2d1966a064`; `/GraphData/Items/248` |
| Location | Reference to Location; 0..* to 1..1; inverse EventFwkEventScenarioObject; Inferred (foreign-key start; lower bound extracted) | Y | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Location`; `0c3d1802-174b-40cf-af02-834e8b11a5ca`; `/GraphData/Items/126` |
| Name | Text; max length 250 | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Name`; `93ec7652-3348-4f98-b794-ac890ef7d602`; `/GraphData/Items/235` |
| Record No. | Auto Number | N | 1; 1 | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `RecordNo`; `b0732ad6-0546-4bea-9f04-e99d1f89a1c1`; `/GraphData/Items/165` |
| Workflow | Reference to Workflow Instance; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Workflow`; `826a22df-06f0-4567-bff3-1161031cf59e`; `/GraphData/Items/232` |

## 1.17 Event Type

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `33cdd92d-1fc4-4a8a-9cbe-48e6ffb26a13`. Source: `/GraphData/Items/21`.

## 1.18 Finding (CFW)

**Inheritance parent:** Event

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `97529fd9-8002-44d3-a87b-d540f421c578`. Source: `/GraphData/Items/81`.

## 1.19 Global Action Plan Abstract

**Inheritance parent:** Abstract Corrective Action

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `2746e1f2-7359-4939-8476-0426fb8e5f3e`. Source: `/GraphData/Items/240`.

## 1.20 Lesson Learned

**Inheritance parent:** Global Action Plan Abstract

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `63e2eb5b-3f7b-4dd3-a295-9f4f9f712cef`. Source: `/GraphData/Items/217`.

## 1.21 Location

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `f5d5209b-0a7d-4858-a302-678fcc065dd2`. Source: `/GraphData/Items/127`.

## 1.22 Nonconformance

**Inheritance parent:** Nonconformance Base

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Coordinator Notes, CounterHelper, Id, Number of Days Opened, Revised Nonconformance, Reference Nonconformance, Is this a valid Nonconformance?

Stable metadata ID: `61ec80a4-1ce7-40a2-982a-f0e6112a47c5`. Source: `/GraphData/Items/6/GraphData/Items/1`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Coordinator Notes | Text; max length 1000 | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `CoordinatoNotes`; `b0f966f7-38ec-422b-b6c7-4ec9ddd4e40f`; `/GraphData/Items/150` |
| CounterHelper | Number; precision=None; scale=None (null means unspecified) | N | Calculation: COUNT(RelatedEvents)+ COUNT(TeamLeader)+ COUNT(TeamMembers) | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `CounterHelper`; `eed5b89e-da24-49e7-979a-2f79a4f59a63`; `/GraphData/Items/153` |
| Id | Guid | Y | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Id`; `3931facb-8e96-42f8-bdd1-a94ca1fe3331`; `/GraphData/Items/45` |
| Number of Days Opened | Number; precision=None; scale=None (null means unspecified) | N | None | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `NumofDaysOpened`; `80922b76-e6aa-41ed-aba5-e1e0340a5820`; `/GraphData/Items/144`; population mechanism unresolved (G-12) |
| Revised Nonconformance | Reference to Nonconformance; 0..1 to 0..*; inverse RefNonconforman; Inferred from extracted inverse foreign-key field | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `RNonconformance`; `c995a716-3ca8-4f8c-82e1-925ea260756c`; `/GraphData/Items/155` |
| Reference Nonconformance | Reference to Nonconformance; 0..* to 0..1; inverse RNonconformance; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `RefNonconforman`; `85eb5683-fdc1-4431-9b86-4bdcd8488063`; `/GraphData/Items/46` |
| Is this a valid Nonconformance? | Yes/No | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `vNonconformance`; `5ff45169-57bf-453f-bf60-e89c8468510b`; `/GraphData/Items/136` |

## 1.23 Nonconformance Abstract

**Inheritance parent:** Event

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Use 8D Methodology, Date first discovered, Is this a recurrence?

Stable metadata ID: `ac4266ea-f1d6-4bb3-aca7-31e1585dd540`. Source: `/GraphData/Items/13`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Use 8D Methodology | Yes/No | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Use8DMethod`; `07fa544e-b95c-48e0-9c5e-b4d58623c6ee`; `/GraphData/Items/221` |
| Date first discovered | Date | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `firstdiscovered`; `8f18354b-0934-4383-b507-f2905a2e48ce`; `/GraphData/Items/212` |
| Is this a recurrence? | Yes/No | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `thisarecurrence`; `70f73b22-3162-465d-bbd7-c2a4b780099d`; `/GraphData/Items/246` |

## 1.24 Nonconformance Base

**Inheritance parent:** Nonconformance Abstract

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Category, Date Closed, Priority, Process, Record Title, Related Process Events, Related Nonconformances

Stable metadata ID: `e3ab2745-3739-48c4-bd23-4fd41c47f357`. Source: `/GraphData/Items/84`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Category | Reference to Nonconformance Category; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Category`; `4692e5a6-3b20-4820-ae72-18e3384717de`; `/GraphData/Items/244` |
| Date Closed | Date | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `DateClosed`; `fff1de1f-efc1-4c51-b777-2fe005325b70`; `/GraphData/Items/204` |
| Priority | Reference to Priority; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Priority`; `9f97e5a6-bca3-47df-8078-9c616c9af0a8`; `/GraphData/Items/185` |
| Process | Reference to Process; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Process`; `02140d6b-73b9-43c9-9dbb-c4a786b03392`; `/GraphData/Items/164` |
| Record Title | Text; max length 255 | N | Calculation: CONCATENATE("Record No. ",RecordNo,": Nonconformance") | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `RecordTitle`; `cf7880c2-4654-4db7-866b-8260486b708c`; `/GraphData/Items/211` |
| Related Process Events | Reference to Nonconformance Base; 0..* to 0..*; inverse RelatedNonconf; Inferred from extracted inverse m:n field | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification; exported filter retained in package; scope dependencies require verification | Existing configuration; `RelatedEvents`; `9dbf1ae6-694e-464f-a52f-470e2d175ef2`; `/GraphData/Items/237` |
| Related Nonconformances | Reference to Nonconformance Base; 0..* to 0..*; inverse RelatedEvents; Extracted (RelationData.Type=3 and m:n label) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `RelatedNonconf`; `4bc95f52-4d52-45b4-badd-30fe4978a607`; `/GraphData/Items/176` |

## 1.25 Nonconformance Category

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `8624092c-de79-48ac-8586-6c6f949ed47d`. Source: `/GraphData/Items/50`.

## 1.26 Operational Risk Abstract

**Inheritance parent:** Risk

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `3ede7c62-0206-4a39-b6ed-ba8c99b79f4c`. Source: `/GraphData/Items/206`.

## 1.27 Priority

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Severity Mapping

Stable metadata ID: `673059dd-e8fa-45d8-ac60-8c6b2cd7e7d3`. Source: `/GraphData/Items/178`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Severity Mapping | Reference to Severity; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `SeverityMapping`; `72163ff6-8d18-435f-857a-9a317ccbf181`; `/GraphData/Items/177` |

## 1.28 Process

**Inheritance parent:** Business Function

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `8e19ea4a-4105-4640-acf0-944d7b2b0ad9`. Source: `/GraphData/Items/120`.

## 1.29 Risk

**Inheritance parent:** Event Scenario

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `da1604a8-ddbd-463b-83c3-8b5240f9cbbe`. Source: `/GraphData/Items/122`.

## 1.30 Root Cause

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `cb8d3588-d610-4120-b084-f31276410731`. Source: `/GraphData/Items/15`.

## 1.31 Severity

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `412062e5-1181-47a1-83c0-91d0e52a2bd6`. Source: `/GraphData/Items/80`.

## 1.32 Subject

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `785124a0-20be-4606-8d25-56dd86248bbf`. Source: `/GraphData/Items/24/GraphData/Items/25`.

## 1.33 Supplier Abstract

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Location

Stable metadata ID: `904aac63-aa3d-42d5-8a35-9c8426e7b96a`. Source: `/GraphData/Items/129`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Location | Reference to Location; 0..* to 1..1; inverse SupplierMgmtSupAbstractObject; Inferred (foreign-key start; lower bound extracted) | Y | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Location`; `5788c4ba-b62e-439f-9389-2cbce0e48e6a`; `/GraphData/Items/215` |

## 1.34 Supplier Action Plan

**Inheritance parent:** Action Plan Abstract

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Action Validated?, Related Supplier NCR, Person Responsible

Stable metadata ID: `8c66ee0c-9bc6-4f5f-a401-14e3f8543b38`. Source: `/GraphData/Items/22`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action Validated? | Yes/No | N | false | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `ActionValidated`; `09733335-a3fa-4a21-ae97-403c0ec8ccc6`; `/GraphData/Items/24/GraphData/Items/3` |
| Related Supplier NCR | Reference to Supplier Nonconformance Base; 0..* to 0..1; inverse SupActionPlans; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `RelatedSupNCR`; `0cf9fdca-005a-44da-9161-df1cce788c48`; `/GraphData/Items/32` |
| Person Responsible | Reference to Supplier Contact; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification; exported filter retained in package; scope dependencies require verification | Existing configuration; `SupPersonResp`; `a16eb05c-c0f6-4461-901e-9d44edce18f1`; `/GraphData/Items/24/GraphData/Items/8` |

## 1.35 Supplier Contact

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Employee

Stable metadata ID: `2ade6733-a831-440e-8505-ed8fa81444aa`. Source: `/GraphData/Items/24/GraphData/Items/18`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Employee | Reference to Employee; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Employee`; `d1cb9b41-5dad-493e-b527-a11e4bd4de5e`; `/GraphData/Items/24/GraphData/Items/9` |

## 1.36 Supplier Nonconformance

**Inheritance parent:** Supplier Nonconformance Base

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `8bebdef2-8f2f-4693-8eff-53f92bcd0fa9`. Source: `/GraphData/Items/9`.

## 1.37 Supplier Nonconformance Base

**Inheritance parent:** Nonconformance

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** NCR Type, NbOfCAPAHelper, Supplier Action Plans, Assigned To, Supplier, Supplier Id, Problem Profile, Impact Level, Defect Classification, Source Pilot Failure, Source Incident, Source SPANF, Replacement NCR, Issue Type, Issue Subtype, Configuration, Part, Drawing, Visibility Classification, Response Tier, Internal Owner, Supplier Owner, Source Intake, Responsible Manufacturer, Responsibility Rating, Vehicle Impact Rating, Reporting Area Rating, Recurrence Rating, Risk Score, Released At, Closed At, VIN, Tracking Number, Shipping Address, Warranty Contact, Triage Instructions, Create PIR?, Cancellation Reason, Occurrences, Responses, Dispositions, RMAs, Shipments, Follow-up Checks, Generated Outputs, Downstream PIRs, Affected Quantity, Three Certified Shipments?, Third-Party Sort Requested?, Sort Authorization, Sort Job, Sort Link, Sort Instructions

Stable metadata ID: `a453a879-d652-48d3-a74e-789b8cd5ba0b`. Source: `/GraphData/Items/77`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| NCR Type | Reference to Supplier_Mgmt_NCRType; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `NCRType`; `6975a562-ba6a-48cf-8c00-1274f23f1003`; `/GraphData/Items/106`; population mechanism unresolved (G-12) |
| NbOfCAPAHelper | Number; precision=None; scale=None (null means unspecified) | N | Calculation: COUNT(SupActionPlans) | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `NbOfCAPAHelper`; `40424a85-07df-4def-9218-945867e3029c`; `/GraphData/Items/104` |
| Supplier Action Plans | Reference to Supplier Action Plan; 0..1 to 0..*; inverse RelatedSupNCR; Inferred from extracted inverse foreign-key field | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `SupActionPlans`; `8c0b25b4-5f89-4b5f-b973-0b04eba9d318`; `/GraphData/Items/110` |
| Assigned To | Reference to Supplier Contact; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification; exported filter retained in package; scope dependencies require verification | Existing configuration; `SupPersonRespon`; `1fd7e1bd-bb6e-4a62-b3ef-c69a7d546f70`; `/GraphData/Items/99` |
| Supplier | Reference to Supplier Abstract; 0..* to 0..1; inverse SupplierNCRs; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata read only; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `SupplierAbs`; `84861555-95e4-4245-aad5-b9514f8eeb74`; `/GraphData/Items/93`; population mechanism unresolved (G-12) |
| Supplier Id | Guid | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `SupplierAbsId`; `16b4194d-5bc0-40ae-a070-5a234f3b7ef6`; `/GraphData/Items/239` |
| Problem Profile | M:1 to Supplier Problem Profile; many to zero or one; inverse disabled | Conditional | None | Internal intake; required for PIR release; engineer changes after release invoke applicability review | Frozen configuration interprets stable codes; no automatic reassignment from occurrence counts |
| Impact Level | M:1 to Supplier Impact Level; many to zero or one; inverse disabled | Conditional | None | Internal intake; required for PIR release; engineer changes after release invoke applicability review | Frozen configuration interprets stable codes; no automatic reassignment from occurrence counts |
| Defect Classification | M:1 to Supplier Defect Classification; many to zero or one; inverse disabled | Conditional | None | Internal intake; required for PIR release; engineer changes after release invoke applicability review | Frozen configuration interprets stable codes; no automatic reassignment from occurrence counts |
| Source Pilot Failure | M:1 to Pilot Inspection Failure; many to zero or one; inverse disabled | N | None | Internal only; integration handler or authorized investigator | Typed lineage; target access checked independently; never exposed across supplier entities |
| Source Incident | M:1 to Incident; many to zero or one; inverse disabled | N | None | Internal only; integration handler or authorized investigator | Typed lineage; target access checked independently; never exposed across supplier entities |
| Source SPANF | M:1 to SPANF; many to zero or one; inverse disabled | N | None | Internal only; integration handler or authorized investigator | Typed lineage; target access checked independently; never exposed across supplier entities |
| Replacement NCR | M:1 to Supplier Nonconformance Base; many to zero or one; inverse disabled | N | None | Internal only; integration handler or authorized investigator | Typed lineage; target access checked independently; never exposed across supplier entities |
| Issue Type | M:1 to Supplier Issue Type; many to exactly one; inverse disabled | Y | None | Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness | Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only |
| Issue Subtype | M:1 to Supplier Issue Subtype; many to zero or one; inverse disabled | N | None | Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness | Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only |
| Configuration | M:1 to Supplier NCR Process Configuration; many to exactly one; inverse disabled | Y | None | Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness | Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only |
| Part | M:1 to Canonical Part; many to exactly one; inverse disabled | Y | None | Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness | Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only |
| Drawing | M:1 to Drawing; many to zero or one; inverse disabled | Conditional | None | Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness | Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only |
| Visibility Classification | M:1 to Shared Visibility Classification; many to exactly one; inverse disabled | Y | None | Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness | Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only |
| Response Tier | M:1 to Supplier Response Tier; many to zero or one; inverse disabled | Conditional | None | Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness | Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only |
| Internal Owner | M:1 to Supplier Specific Role; many to exactly one; inverse disabled | Y | None | Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness | Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only |
| Supplier Owner | M:1 to Supplier Specific Role; many to zero or one; inverse disabled | Conditional | None | Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness | Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only |
| Source Intake | M:1 to Supplier Nonconformance Base; many to zero or one; inverse Downstream PIRs | N | None | Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness | Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only |
| Responsible Manufacturer | M:1 to Supplier Abstract; many to zero or one; inverse disabled | Conditional | None | Supplier-scoped intake editor before first submission; release and source-link restrictions in section 6; stage gate defines conditional requiredness | Audited; Issue Type/Issue Subtype/Configuration frozen at first submission; Supplier frozen at release; external lineage fields internal only |
| Responsibility Rating | M:1 to Supplier Risk Option; many to zero or one; inverse disabled | Conditional | None | Internal associate initially; responsible engineer after release; mandatory for PIR release; option Input Code must match this input | Human maintained; risk revision handler; occurrence creation never overwrites an input |
| Vehicle Impact Rating | M:1 to Supplier Risk Option; many to zero or one; inverse disabled | Conditional | None | Internal associate initially; responsible engineer after release; mandatory for PIR release; option Input Code must match this input | Human maintained; risk revision handler; occurrence creation never overwrites an input |
| Reporting Area Rating | M:1 to Supplier Risk Option; many to zero or one; inverse disabled | Conditional | None | Internal associate initially; responsible engineer after release; mandatory for PIR release; option Input Code must match this input | Human maintained; risk revision handler; occurrence creation never overwrites an input |
| Recurrence Rating | M:1 to Supplier Risk Option; many to zero or one; inverse disabled | Conditional | None | Internal associate initially; responsible engineer after release; mandatory for PIR release; option Input Code must match this input | Human maintained; risk revision handler; occurrence creation never overwrites an input |
| Risk Score | Float; precision/scale G-01 | N | Calculated from the four selected ratings and frozen Configuration.Risk Calculation Rule; exact expression unresolved G-01 | Read only; internal risk display | Calculation/handler syntax and thresholds require controlled form verification |
| Released At | Date/Time; timezone enabled | N | NULL | Read only | Release transaction stamps once after successful preflight; immutable |
| Closed At | Date/Time; timezone enabled | N | NULL | Read only | Successful terminal closure handler; timezone-aware source for reporting |
| VIN | Text, max 17 | Conditional | None | Internal intake; mandatory only where WCAR configuration requires VIN | Searchable; no composite identifier |
| Tracking Number | Text, max 255 | Conditional | None | Internal shipping user in WCAR SHIPPING; required for WCAR release | Persisting first nonblank valid tracking invokes release handler; do not clear after release |
| Shipping Address | Text, max 4000 | Conditional | None | Internal warranty initiator; mandatory for WCAR before PCC notification | Frozen with release; changes after release require audited correction notice |
| Warranty Contact | M:1 to Supplier Contact; many to zero or one; inverse disabled | Conditional | None | Internal warranty initiator; required for WCAR SHIPPING; contact must match Supplier and warranty role | PCC notification uses selected contact and address; authenticated supplier responsibility remains Supplier Owner group |
| Triage Instructions | Text, max 4000 | Conditional | None | Internal triage; required before closing Supplier-Reported Problem | Reporting supplier sees only approved handling/return instructions |
| Create PIR? | Yes/No | Conditional | NULL | Internal triage for SUPPLIER_REPORTED only; decision required; otherwise hidden and NULL | TRUE requires Responsible Manufacturer and successful downstream creation before intake closure |
| Cancellation Reason | Text, max 4000 | Conditional | None | Internal owner; mandatory when cancelling | Native audit and workflow evidence; protected against supplier editing |
| Occurrences | Inverse 1:M grid from Supplier NCR Occurrence.NCR | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |
| Responses | Inverse 1:M grid from Supplier Response.NCR | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |
| Dispositions | Inverse 1:M grid from Supplier NCR Disposition.NCR | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |
| RMAs | Inverse 1:M grid from Supplier NCR RMA.NCR | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |
| Shipments | Inverse 1:M grid from Certified Shipment.NCR | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |
| Follow-up Checks | Inverse 1:M grid from Supplier NCR Follow-up.NCR | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |
| Generated Outputs | Inverse 1:M grid from Supplier NCR Output.NCR | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |
| Downstream PIRs | Inverse 1:M grid from Supplier Nonconformance Base.Source Intake | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |
| Affected Quantity | Number; nonnegative integer | N | Sum of Occurrences.Quantity; declarative calculation, validate platform expression | Read only | Computed rollup; never used to change risk inputs automatically |
| Three Certified Shipments? | Yes/No | Y | FALSE | Responsible engineer; applicable PIR profile only; retain historical shipment rows when disabled | TRUE requires exactly three distinct verified shipment entries before closure |
| Third-Party Sort Requested? | Yes/No | Y | FALSE | Responsible engineer; applicable PIR profile | TRUE activates Sort Authorization, Sort Job, Sort Link, Sort Instructions; FALSE hides and retains historical values read only |
| Sort Authorization | Text, max 4000 | Conditional | None | Engineer/supplier as permitted by stage; required when Third-Party Sort Requested?=TRUE; otherwise hidden and retained read only | Sort instructions have no RMA identity; URL validation for Sort Link |
| Sort Job | Text, max 4000 | Conditional | None | Engineer/supplier as permitted by stage; required when Third-Party Sort Requested?=TRUE; otherwise hidden and retained read only | Sort instructions have no RMA identity; URL validation for Sort Link |
| Sort Link | Text, max 4000 | Conditional | None | Engineer/supplier as permitted by stage; required when Third-Party Sort Requested?=TRUE; otherwise hidden and retained read only | Sort instructions have no RMA identity; URL validation for Sort Link |
| Sort Instructions | Text, max 4000 | Conditional | None | Engineer/supplier as permitted by stage; required when Third-Party Sort Requested?=TRUE; otherwise hidden and retained read only | Sort instructions have no RMA identity; URL validation for Sort Link |

## 1.38 Team Member

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** None. Available fields are inherited from the identified inheritance parent; dependency exports may omit additional tenant declarations.

Stable metadata ID: `88f9a145-d866-4be9-961a-a741789ec394`. Source: `/GraphData/Items/216`.

## 1.39 Workflow Instance

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** Current Stage, Due Date, Person Responsible, Person Responsible Id, Workflow Status

Stable metadata ID: `ff5895e2-f1a0-4f19-83fc-417947fcef53`. Source: `/GraphData/Items/87`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Current Stage | Reference to Workflow Stage; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `CurrentStage`; `3d6d06e9-f939-4570-8a50-96e2b0cf2e0c`; `/GraphData/Items/213` |
| Due Date | Date and Time; TimeZoneCapture=False | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `DueDate`; `e4998719-4187-4bb5-946d-268882a2557b`; `/GraphData/Items/231` |
| Person Responsible | Reference to Subject; 0..* to 0..1; inverse not exported; Inferred (foreign-key start; lower bound extracted) | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `PersonResponsible`; `f50139e1-050f-4af7-9b08-2ea71d9f6d93`; `/GraphData/Items/174` |
| Person Responsible Id | Guid | N | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `PersonResponsibleId`; `8dc1c8dc-f39c-4159-8e38-699de87f3e8f`; `/GraphData/Items/173` |
| Workflow Status | Workflow  Status  Type | Y | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `WorkflowStatus`; `e082ebf7-344c-4215-a8e5-ae1f4e77937f`; `/GraphData/Items/85` |

## 1.40 Workflow Stage

**Inheritance parent:** None

**Classification:** Extracted; unchanged unless a supplier-scoped override is specified

**Responsibility:** Existing package object; baseline declaration retained

**Directly declared fields:** System Name

Stable metadata ID: `f3ca6a8e-9736-4749-9c16-6c27e180b90e`. Source: `/GraphData/Items/53`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| System Name | Text; max length 250 | Y | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `SystemName`; `60d81ee3-cc89-4829-8b47-381956d72c0d`; `/GraphData/Items/52` |

## 1.41 Supplier_Mgmt_NCRType

**Inheritance parent:** Unresolved

**Classification:** Extracted

**Responsibility:** Legacy NCR type lookup; read-only historical authority pending mapped replacement

**Directly declared fields:** Value

Stable metadata ID: `7d1148ac-b0d3-4863-81c4-cd7a00424548`. Source: `/GraphData/Items/40`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Value | Text; max length not exported | Y | None | Metadata editable; effective stage/field ACL and form visibility require tenant verification | Existing configuration; `Value`; `13669f41-8b55-4585-91fc-017430979a05`; `/GraphData/Items/224` |

## 1.42 Supplier Issue Type

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Governed replacement for new-case NCR Type selection

**Directly declared fields:** Code, Name, Active?, Sort

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, max 100 | Y | None | Administrator; stable after first use | Unique within catalogue; non-localizable |
| Name | Text, max 255 | Y | None | Administrator; localizable | Localizable catalogue and Name field |
| Active? | Yes/No | Y | TRUE | Administrator | FALSE prevents new selection; preserves existing references |
| Sort | Float; precision/scale tenant validation required | N | None | Administrator | Presentation order only |

Initial values:

| Code | Name | Active? | Sort |
| --- | --- | --- | --- |
| PIR | PIR | True | 10 |
| WCAR | WCAR | True | 20 |
| SUPPLIER_REPORTED | Supplier-Reported Problem | True | 30 |
| PILOT_FAILURE | Pilot Inspection Failure | False | 40 |

Seed records and codes are Proposed; the package does not establish these values.

## 1.43 Supplier Issue Subtype

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Type-specific governed subtype; business values unresolved

**Directly declared fields:** Code, Name, Active?, Sort, Issue Type

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, max 100 | Y | None | Administrator; stable after first use | Unique within catalogue; non-localizable |
| Name | Text, max 255 | Y | None | Administrator; localizable | Localizable catalogue and Name field |
| Active? | Yes/No | Y | TRUE | Administrator | FALSE prevents new selection; preserves existing references |
| Sort | Float; precision/scale tenant validation required | N | None | Administrator | Presentation order only |
| Issue Type | M:1 to Supplier Issue Type; many to exactly one; inverse disabled | Y | None | Administrator; active values only for new selection; retain inactive historical values | Validate scope on every write; audit relationship changes |

## 1.44 Supplier Response Tier

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Risk-controlled response depth

**Directly declared fields:** Code, Name, Active?, Sort

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, max 100 | Y | None | Administrator; stable after first use | Unique within catalogue; non-localizable |
| Name | Text, max 255 | Y | None | Administrator; localizable | Localizable catalogue and Name field |
| Active? | Yes/No | Y | TRUE | Administrator | FALSE prevents new selection; preserves existing references |
| Sort | Float; precision/scale tenant validation required | N | None | Administrator | Presentation order only |

Initial values:

| Code | Name | Active? | Sort |
| --- | --- | --- | --- |
| QUICK | Quick Feedback | True | 10 |
| CONTAINMENT | Containment | True | 20 |
| PRC | PRC | True | 30 |

Seed records and codes are Proposed; the package does not establish these values.

## 1.45 Supplier Risk Option

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Allowed answers for four risk inputs; exact controlled form values remain G-01

**Directly declared fields:** Code, Name, Active?, Sort, Input Code, Points

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, max 100 | Y | None | Administrator; stable after first use | Unique within catalogue; non-localizable |
| Name | Text, max 255 | Y | None | Administrator; localizable | Localizable catalogue and Name field |
| Active? | Yes/No | Y | TRUE | Administrator | FALSE prevents new selection; preserves existing references |
| Sort | Float; precision/scale tenant validation required | N | None | Administrator | Presentation order only |
| Input Code | Text, max 100 | Y | None | Administrator; one of RESPONSIBILITY, VEHICLE_IMPACT, REPORTING_AREA, RECURRENCE | Configuration validation; never display-label comparison |
| Points | Float; precision/scale unresolved G-01 | Conditional | None | Administrator before first case use; required only when controlled form defines a numeric answer; immutable after use | Scoring disabled until G-01 resolved; changed scoring uses new option records and a reviewed configuration revision |

## 1.46 Disposition Category

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Disposition rules; initial production values and RMA flags remain G-06

**Directly declared fields:** Code, Name, Active?, Sort, RMA Required?

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, max 100 | Y | None | Administrator; stable after first use | Unique within catalogue; non-localizable |
| Name | Text, max 255 | Y | None | Administrator; localizable | Localizable catalogue and Name field |
| Active? | Yes/No | Y | TRUE | Administrator | FALSE prevents new selection; preserves existing references |
| Sort | Float; precision/scale tenant validation required | N | None | Administrator | Presentation order only |
| RMA Required? | Yes/No | Y | FALSE | Administrator before first disposition use; immutable after use | Changed RMA behavior requires a new category record/code and reviewed configuration revision; old references retain their meaning |

## 1.47 Warranty Response Outcome

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Outcome controls warranty analysis applicability

**Directly declared fields:** Code, Name, Active?, Sort

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, max 100 | Y | None | Administrator; stable after first use | Unique within catalogue; non-localizable |
| Name | Text, max 255 | Y | None | Administrator; localizable | Localizable catalogue and Name field |
| Active? | Yes/No | Y | TRUE | Administrator | FALSE prevents new selection; preserves existing references |
| Sort | Float; precision/scale tenant validation required | N | None | Administrator | Presentation order only |

Initial values:

| Code | Name | Active? | Sort |
| --- | --- | --- | --- |
| ANALYSIS | Analysis Required | True | 10 |
| NTF | No Trouble Found | True | 20 |

Seed records and codes are Proposed; the package does not establish these values.

## 1.48 Follow-up Result

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Result of one effectiveness check

**Directly declared fields:** Code, Name, Active?, Sort

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, max 100 | Y | None | Administrator; stable after first use | Unique within catalogue; non-localizable |
| Name | Text, max 255 | Y | None | Administrator; localizable | Localizable catalogue and Name field |
| Active? | Yes/No | Y | TRUE | Administrator | FALSE prevents new selection; preserves existing references |
| Sort | Float; precision/scale tenant validation required | N | None | Administrator | Presentation order only |

Initial values:

| Code | Name | Active? | Sort |
| --- | --- | --- | --- |
| PASS | Pass | True | 10 |
| FAIL | Fail | True | 20 |
| INCONCLUSIVE | Inconclusive | True | 30 |

Seed records and codes are Proposed; the package does not establish these values.

## 1.49 Supplier Problem Profile

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Business-owned profile selecting response/evidence requirements; seed matrix G-03

**Directly declared fields:** Code, Name, Active?, Sort

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, max 100 | Y | None | Administrator; stable after first use | Unique within catalogue; non-localizable |
| Name | Text, max 255 | Y | None | Administrator; localizable | Localizable catalogue and Name field |
| Active? | Yes/No | Y | TRUE | Administrator | FALSE prevents new selection; preserves existing references |
| Sort | Float; precision/scale tenant validation required | N | None | Administrator | Presentation order only |

## 1.50 Supplier Impact Level

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Governed impact domain for response/closure applicability; seed matrix G-03

**Directly declared fields:** Code, Name, Active?, Sort

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, max 100 | Y | None | Administrator; stable after first use | Unique within catalogue; non-localizable |
| Name | Text, max 255 | Y | None | Administrator; localizable | Localizable catalogue and Name field |
| Active? | Yes/No | Y | TRUE | Administrator | FALSE prevents new selection; preserves existing references |
| Sort | Float; precision/scale tenant validation required | N | None | Administrator | Presentation order only |

## 1.51 Supplier Defect Classification

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Search and matching classification; business-owned seed values G-03

**Directly declared fields:** Code, Name, Active?, Sort

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, max 100 | Y | None | Administrator; stable after first use | Unique within catalogue; non-localizable |
| Name | Text, max 255 | Y | None | Administrator; localizable | Localizable catalogue and Name field |
| Active? | Yes/No | Y | TRUE | Administrator | FALSE prevents new selection; preserves existing references |
| Sort | Float; precision/scale tenant validation required | N | None | Administrator | Presentation order only |

## 1.52 Supplier NCR Process Configuration

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** One governed immutable configuration revision for a type/subtype; direct configuration maintenance, no separate authoring object

**Directly declared fields:** Issue Type, Issue Subtype, Revision, Active?, Risk Calculation Rule, Closure Rule, Follow-up Schedule, Internal Owner Role, Supplier Quality Role, Supplier Warranty Role, Warranty Coordinator Role, Group Leader Role, Stage Rules, Response Rules

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Issue Type | M:1 to Supplier Issue Type; many to exactly one; inverse disabled | Y | None | Administrator; active values only for new selection; retain inactive historical values | Validate scope on every write; audit relationship changes |
| Issue Subtype | M:1 to Supplier Issue Subtype; many to zero or one; inverse disabled | N | None | Administrator; active values only for new selection; retain inactive historical values | Validate scope on every write; audit relationship changes |
| Revision | Number; integer | Y | None | Administrator; unique for type/subtype | Immutable once referenced; issue a new configuration record for later cases |
| Active? | Yes/No | Y | FALSE | Administrator; activate only after all readiness gates for this type pass | Exactly one active revision per type/subtype; deactivation blocks new cases, retains existing cases |
| Risk Calculation Rule | Text, max 4000 | N | None | Administrator; declarative non-executable specification | Controlled arithmetic and weights G-01; reviewed handler implements validated rule |
| Closure Rule | Text, max 4000 | Y | None | Administrator; declarative non-executable specification | Exact risk/category/reporting-area criteria G-04; reject incomplete configuration |
| Follow-up Schedule | Text, max 4000 | N | None | Administrator; declarative non-executable schedule specification | Intervals, business calendar, lead time and repeat rules G-05; no invented executable recurrence expression |
| Internal Owner Role | M:1 to Supplier Management Role; many to zero or one; inverse disabled | Conditional | None | Administrator; role catalogue is owned by SRM; require each role used by this configuration | Resolve live Supplier Specific Role for exact case Supplier; no fallback across supplier entities |
| Supplier Quality Role | M:1 to Supplier Management Role; many to zero or one; inverse disabled | Conditional | None | Administrator; role catalogue is owned by SRM; require each role used by this configuration | Resolve live Supplier Specific Role for exact case Supplier; no fallback across supplier entities |
| Supplier Warranty Role | M:1 to Supplier Management Role; many to zero or one; inverse disabled | Conditional | None | Administrator; role catalogue is owned by SRM; require each role used by this configuration | Resolve live Supplier Specific Role for exact case Supplier; no fallback across supplier entities |
| Warranty Coordinator Role | M:1 to Supplier Management Role; many to zero or one; inverse disabled | Conditional | None | Administrator; role catalogue is owned by SRM; require each role used by this configuration | Resolve live Supplier Specific Role for exact case Supplier; no fallback across supplier entities |
| Group Leader Role | M:1 to Supplier Management Role; many to zero or one; inverse disabled | Conditional | None | Administrator; role catalogue is owned by SRM; require each role used by this configuration | Resolve live Supplier Specific Role for exact case Supplier; no fallback across supplier entities |
| Stage Rules | Inverse 1:M grid from Supplier NCR Stage Rule.Configuration | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |
| Response Rules | Inverse 1:M grid from Supplier NCR Response Rule.Configuration | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |

## 1.53 Supplier NCR Stage Rule

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Governed activation, ownership, deadlines, guidance and notifications for one configured stage

**Directly declared fields:** Configuration, Stage Code, Activation Rule, Owner Role, Due Offset, Instructions, Notification Template Key

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Configuration | M:1 to Supplier NCR Process Configuration; many to exactly one; inverse Stage Rules | Y | None | Authorized editor within the same NCR and supplier scope | Validate scope on every write; audit relationship changes |
| Stage Code | Text, max 100 | Y | None | Administrator; allowed codes are the lifecycle codes in section 7 | Unique within Configuration; explicit code registry, not free executable code |
| Activation Rule | Text, max 4000 | Y | None | Administrator; declarative non-executable conditions over modelled fields | Handler implements and tests reviewed condition |
| Owner Role | M:1 to Supplier Management Role; many to zero or one; inverse disabled | Conditional | None | Administrator; mandatory for actionable stage; holding subject for pending follow-up | Live supplier-specific membership; first authorized action consumes approval slot |
| Due Offset | Number; integer business days | N | None | Administrator | Anchor and calendar must be defined before activation; G-02 |
| Instructions | Text, max 4000 | Y | None | Administrator; sanitized instructional content | Displayed to authorized participant for matching stage and subtype |
| Notification Template Key | Text, max 255 | N | None | Administrator | Reference to governed platform email template; key validation before activation |

## 1.54 Supplier NCR Response Rule

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Response type activation and deadlines per configuration and tier

**Directly declared fields:** Configuration, Tier, Component Code, Required?, Due Offset, Reviewer Role

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Configuration | M:1 to Supplier NCR Process Configuration; many to exactly one; inverse Response Rules | Y | None | Authorized editor within the same NCR and supplier scope | Validate scope on every write; audit relationship changes |
| Tier | M:1 to Supplier Response Tier; many to zero or one; inverse disabled | N | None | Administrator; active values only for new selection; retain inactive historical values | Validate scope on every write; audit relationship changes |
| Component Code | Text, max 100 | Y | None | Administrator; QUICK, CONTAINMENT, ROOT_CAUSE, CORRECTIVE, WARRANTY | Code selects concrete response class; unique per Configuration/Tier/Component |
| Required? | Yes/No | Y | TRUE | Administrator | Case applicability evaluated at release and on controlled risk revision |
| Due Offset | Number; integer business days | Conditional | None | Administrator; required for required components | Release-based deadline; business calendar G-02 |
| Reviewer Role | M:1 to Supplier Management Role; many to exactly one; inverse disabled | Y | None | Authorized editor within the same NCR and supplier scope | Resolve exact supplier-specific internal role at action time |

## 1.55 Supplier NCR Occurrence

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** One reported instance of the same drawing/problem; retained event history

**Directly declared fields:** NCR, Reported At, Part, Source Area, Shift, Quantity, Comments, Evidence, Dispositions

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| NCR | M:1 to Supplier Nonconformance Base; many to exactly one; inverse Occurrences | Y | None | Authorized editor within the same NCR and supplier scope | Validate scope on every write; audit relationship changes |
| Reported At | Date/Time; timezone enabled | N | NULL | Read only | Create handler stamps current server time once |
| Part | M:1 to Canonical Part; many to exactly one; inverse disabled | Y | None | Authorized editor within the same NCR and supplier scope | Must belong to governing NCR drawing/problem context |
| Source Area | Text, max 255 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Shift | Text, max 100 | N | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Quantity | Number; nonnegative integer | Y | None | Internal reporter; correction audited | NCR affected-quantity rollup recalculates; disposition quantities reconciled separately |
| Comments | Text, max 4000 | N | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Evidence | File collection; native secured attachments | N | None | Reporter; supplier sees only approved shared evidence | Audit deletion; retention G-10; evidence access follows NCR release/classification |
| Dispositions | Inverse 1:M grid from Supplier NCR Disposition.Occurrence | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |

## 1.56 Supplier Response

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Abstract non-instantiable response contract; independent submission/approval cycle

**Directly declared fields:** NCR, Rule, Applicable?, Due Date, Submitted At, Submitted By, Reviewer, Review Comment, Evidence

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| NCR | M:1 to Supplier Nonconformance Base; many to exactly one; inverse Responses | Y | None | Authorized editor within the same NCR and supplier scope | Validate scope on every write; audit relationship changes |
| Rule | M:1 to Supplier NCR Response Rule; many to exactly one; inverse disabled | Y | None | Authorized editor within the same NCR and supplier scope | Frozen generation source; unique NCR/Rule; regenerate idempotently |
| Applicable? | Yes/No | Y | TRUE | Read only | Release/risk-change handler sets from current required component set; inactive content retained |
| Due Date | Date | Y | Release date plus Rule.Due Offset using approved business calendar | Internal owner may extend with audited reason; supplier read only | Retain every prior deadline in audit; native reminders use current deadline |
| Submitted At | Date/Time; timezone enabled | N | NULL | Read only | Submit stamps successful submission time on each cycle; previous timestamps immutable in native history |
| Submitted By | M:1 to Employee; many to zero or one; inverse disabled | N | None | Read only | Submit action stamps authenticated supplier actor |
| Reviewer | M:1 to Supplier Specific Role; many to exactly one; inverse disabled | Y | None | Read only | Generation resolves Rule.Reviewer Role for exact NCR supplier; membership remains live |
| Review Comment | Text, max 4000 | Conditional | None | Reviewer in REVIEW; required on rejection; prior comments retained in native append-only history | Reject persists comment/actor/time before reopening draft; immutable history required by ADR-050 |
| Evidence | File collection; native secured attachments | N | None | Supplier owner in draft/returned; read only during review/approval | Prior submissions preserved through audit and retained attachment versions; gate G-11 |

## 1.57 Quick Feedback Response

**Inheritance parent:** Supplier Response

**Classification:** Proposed

**Responsibility:** Concrete typed response; common submission and review inherited

**Directly declared fields:** Feedback

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Feedback | Text, max 4000 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |

## 1.58 Containment Response

**Inheritance parent:** Supplier Response

**Classification:** Proposed

**Responsibility:** Concrete typed response; common submission and review inherited

**Directly declared fields:** Containment Actions, Suspect Population, Breakpoint, Completed On

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Containment Actions | Text, max 4000 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Suspect Population | Text, max 4000 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Breakpoint | Text, max 4000 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Completed On | Date | Y | None | Supplier in draft/returned | Evidence of containment execution; distinct from submission timestamp |

## 1.59 Root Cause Response

**Inheritance parent:** Supplier Response

**Classification:** Proposed

**Responsibility:** Concrete typed response; common submission and review inherited

**Directly declared fields:** Methods, Root Cause Summary

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Methods | Inverse 1:M grid from Supplier Cause Method.Response | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |
| Root Cause Summary | Text, max 4000 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |

## 1.60 Corrective Action Response

**Inheritance parent:** Supplier Response

**Classification:** Proposed

**Responsibility:** Concrete typed response; common submission and review inherited

**Directly declared fields:** Corrective Actions, Preventive Actions, Action Owner, Implementation Date

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Corrective Actions | Text, max 4000 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Preventive Actions | Text, max 4000 | Conditional | None | Supplier draft/returned; mandatory when Rule requires it; otherwise optional and retain entered content | Audited; preserve prior submitted values through native audit |
| Action Owner | Text, max 255 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Implementation Date | Date | Y | None | Supplier draft/returned | Supplier evidence; no internal Action Plan task assignment |

## 1.61 Warranty Response

**Inheritance parent:** Supplier Response

**Classification:** Proposed

**Responsibility:** Concrete typed response; common submission and review inherited

**Directly declared fields:** Outcome, Findings, Corrective Response

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Outcome | M:1 to Warranty Response Outcome; many to exactly one; inverse disabled | Y | None | Administrator; active values only for new selection; retain inactive historical values | Validate scope on every write; audit relationship changes |
| Findings | Text, max 4000 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Corrective Response | Text, max 4000 | Conditional | None | Supplier draft/returned; required for Outcome.Code=ANALYSIS; NTF hides and retains earlier content read only | No root-cause-analysis requirement by default; reviewed subtype rule may enable it |

## 1.62 Supplier Cause Method

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** One structured analysis or external evidence entry in the single root-cause response container

**Directly declared fields:** Response, Method Code, Conclusion, External Evidence, Analysis Entries

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Response | M:1 to Root Cause Response; many to exactly one; inverse Methods | Y | None | Authorized editor within the same NCR and supplier scope | Validate scope on every write; audit relationship changes |
| Method Code | Text, max 100 | Y | None | Supplier draft/returned; FIVE_WHY, FISHBONE, TIMELINE or EXTERNAL | Fixed method registry; not a selectable business catalogue |
| Conclusion | Text, max 4000 | Conditional | None | Supplier; required before container submission; blank permitted for generated placeholder | Audited; preserve prior submitted values through native audit |
| External Evidence | File | Conditional | NULL | Supplier; required for Method Code=EXTERNAL; otherwise optional; retain when method changes | Method change blocked after container submission |
| Analysis Entries | Inverse 1:M grid from Supplier Cause Entry.Method | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |

## 1.63 Supplier Cause Entry

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Structured why chain, fishbone branch, or timeline entry

**Directly declared fields:** Method, Sequence, Category, Question, Answer

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Method | M:1 to Supplier Cause Method; many to exactly one; inverse Analysis Entries | Y | None | Authorized editor within the same NCR and supplier scope | Validate scope on every write; audit relationship changes |
| Sequence | Number; positive integer | Y | None | Supplier draft/returned | Unique within Method; order used by outputs |
| Category | Text, max 255 | N | None | Supplier draft/returned; fishbone branch or timeline label | Required per controlled method form G-03 |
| Question | Text, max 4000 | N | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Answer | Text, max 4000 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |

## 1.64 Supplier NCR Disposition

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Governed material treatment and chargeable quantities

**Directly declared fields:** NCR, Occurrence, Category, Quantity, Chargeable?, Approved On, RMAs, Instructions

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| NCR | M:1 to Supplier Nonconformance Base; many to exactly one; inverse Dispositions | Y | None | Authorized editor within the same NCR and supplier scope | Validate scope on every write; audit relationship changes |
| Occurrence | M:1 to Supplier NCR Occurrence; many to exactly one; inverse Dispositions | Y | None | Authorized editor within the same NCR and supplier scope | Occurrence.NCR must equal NCR; no cross-case allocation |
| Category | M:1 to Disposition Category; many to exactly one; inverse disabled | Y | None | Administrator; active values only for new selection; retain inactive historical values | Validate scope on every write; audit relationship changes |
| Quantity | Number; nonnegative integer | Y | None | Internal disposition owner | Aggregate allocated quantity cannot exceed occurrence quantity; reconcile split dispositions |
| Chargeable? | Yes/No | Y | FALSE | Authorized internal disposition owner | Audit changes; source for PPM only after approved disposition |
| Approved On | Date | N | NULL | Read only | Approve Disposition action stamps business date; defines proposed PPM period basis pending G-09 |
| RMAs | Inverse 1:M grid from Supplier NCR RMA.Disposition | N | None | Read only; security-filtered navigation | Navigation over the named reference; no duplicate stored relationship |
| Instructions | Text, max 4000 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |

## 1.65 Supplier NCR RMA

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Independent true return authorization; optional disposition until completion

**Directly declared fields:** NCR, Disposition, Supplier Owner, Request Reference, Supplier Authorization, Handling Instructions, Quantity, Responded At

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| NCR | M:1 to Supplier Nonconformance Base; many to exactly one; inverse RMAs | Y | None | Authorized editor within the same NCR and supplier scope | Validate scope on every write; audit relationship changes |
| Disposition | M:1 to Supplier NCR Disposition; many to zero or one; inverse RMAs | Conditional | None | Internal request or reconciliation; required at Complete RMA; may be null before disposition exists | Same NCR required; completion validates quantities and permitted return method |
| Supplier Owner | M:1 to Supplier Specific Role; many to exactly one; inverse disabled | Y | None | Authorized editor within the same NCR and supplier scope | Same supplier; eligible current portal membership required before request |
| Request Reference | Text, max 255 | N | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Supplier Authorization | Text, max 4000 | Conditional | None | Supplier in RESPONSE; required for Submit Authorization | Audited; preserve prior submitted values through native audit |
| Handling Instructions | Text, max 4000 | Conditional | None | Supplier in RESPONSE; required for Submit Authorization | Audited; preserve prior submitted values through native audit |
| Quantity | Number; nonnegative integer | Conditional | NULL | Internal completion owner; required to complete | Sum completed RMA quantities reconciles with disposition; exact split rules G-06 |
| Responded At | Date/Time; timezone enabled | N | NULL | Read only | Submit Authorization stamps successful supplier response |

## 1.66 Certified Shipment

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** One verified logistics evidence entry in the required set of three

**Directly declared fields:** NCR, Shipment Identifier, Ship Date, Verified?

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| NCR | M:1 to Supplier Nonconformance Base; many to exactly one; inverse Shipments | Y | None | Authorized editor within the same NCR and supplier scope | Validate scope on every write; audit relationship changes |
| Shipment Identifier | Text, max 255 | Y | None | Assigned participant; editable in its draft or returned stage | Audited; preserve prior submitted values through native audit |
| Ship Date | Date | Y | None | Supplier during response | Accept supplier-appropriate logistics identifiers; unique NCR/Shipment Identifier |
| Verified? | Yes/No | Y | FALSE | Internal engineer | Closure requires exactly three distinct verified entries if Three Certified Shipments?=TRUE |

## 1.67 Supplier NCR Follow-up

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Scheduled procedure-driven effectiveness check; independent repeated checks

**Directly declared fields:** NCR, Schedule Key, Due Date, Activate On, Owner, Result, Evidence Notes, Completed At

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| NCR | M:1 to Supplier Nonconformance Base; many to exactly one; inverse Follow-up Checks | Y | None | Authorized editor within the same NCR and supplier scope | Validate scope on every write; audit relationship changes |
| Schedule Key | Text, max 255 | Y | None | Read only | Generation handler identifies rule and occurrence; unique NCR/Schedule Key; repeat allocates new key |
| Due Date | Date | Y | Generated from Configuration.Follow-up Schedule | Internal owner; extensions audited | Exact intervals and calendar G-05 |
| Activate On | Date | Y | Due Date less configured lead time | Read only | Generation handler populates once; scheduler activates only eligible scheduled checks |
| Owner | M:1 to Supplier Specific Role; many to exactly one; inverse disabled | Y | None | Authorized editor within the same NCR and supplier scope | Live internal supplier-specific role; role replacement transfers open responsibility |
| Result | M:1 to Follow-up Result; many to zero or one; inverse disabled | Conditional | None | Owner in ACTIVE; required for Submit Check | Validate scope on every write; audit relationship changes |
| Evidence Notes | Text, max 4000 | Conditional | None | Owner in ACTIVE; required for Submit Check | Audited; preserve prior submitted values through native audit |
| Completed At | Date/Time; timezone enabled | N | NULL | Read only | Successful passing check completion; unsuccessful result enters management determination |

## 1.68 Supplier NCR Output

**Inheritance parent:** None

**Classification:** Proposed

**Responsibility:** Immutable generated controlled artifact with source and template version

**Directly declared fields:** NCR, Template Version, Generation Number, Generated At, Generated By, Artifact

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| NCR | M:1 to Supplier Nonconformance Base; many to exactly one; inverse Generated Outputs | Y | None | Authorized editor within the same NCR and supplier scope | Validate scope on every write; audit relationship changes |
| Template Version | Text, max 255 | Y | None | Read only | Generation handler stamps approved controlled template identity/version |
| Generation Number | Number; positive integer | Y | Next number within NCR/template; first 1 | Read only | Generation handler serializes allocation; every regeneration creates a new record |
| Generated At | Date/Time; timezone enabled | N | NULL | Read only | Generation handler stamps once after render succeeds |
| Generated By | M:1 to Employee; many to exactly one; inverse disabled | Y | None | Read only | Generation handler stamps authenticated requesting user |
| Artifact | File | Y | None | Read only | Generation writes complete file before committing record; retained immutable; no overwrite |
