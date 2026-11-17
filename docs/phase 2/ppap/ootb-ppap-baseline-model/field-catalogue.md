# OOTB PPAP field catalogue

Each exported object has its own subsection. The catalogue contains exactly one row for each of the 403 owner-resolved fields, including exported inverse fields. The 105 detached dependency fields remain in the full field inventory and unresolved register, without guessed ownership or type. No target fields or inverse grids are added.

Requiredness combines direct metadata with the explicitly documented PPAP form conditions. Metadata read-only flags do not prove final UI immutability or effective authorization. Null scalar limits/time-zone properties are unspecified, not asserted unlimited or timezone-enabled. Full expression XML is in [field expressions](field-expressions.md).

## 1 PPAP

**Internal name:** `APQP_PPAPAbstractObject`. **Stable metadata ID:** `a99ca3b8-48ed-43eb-9696-a1dd26122c39`. **Classification:** Extracted record metadata.

**Inheritance parent:** ProjectFwk_ProjectAbstractObject.

**Directly declared fields:** 48 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=true; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=true; documents=true; mail merge=true.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/45`.

**Identity-name overlap:** PPAP.Id and Project Abstract.Id are distinct directly exported field GUIDs. Both declarations are preserved; effective inherited identity binding is not established by this static reconstruction.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Additional Engineering Changes | Text (nvarchar); max length 200 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal AdditEngChanges; field ID a7c3ccfa-f68b-49d3-80dd-574297b098c0 |
| AEC Dated | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal AECDated; field ID 68d22482-56d0-41c7-a735-085f142fddb1 |
| Results For - appearance criteria helper | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Helper field for M:M merge template; internal AppearanHelper; field ID 7e3679ab-2585-4831-924a-cdf47beea6ec |
| Application | Text (nvarchar); max length 500 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; internal Application; field ID 8d73395e-5e26-4482-9972-9bf8746e1cb2 |
| APQP Abstract | 1:M to APQP (APQP_APQPObject); inverse collection; no new stored reference; reverse PPAPAbstract; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; internal APQPAbstract; field ID 67abec90-f697-4696-a3f8-75f14bdf14c8 |
| Buyer / Buyer Code | Text (nvarchar); max length 500 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; internal BuyerBuyerCode; field ID a55dba6f-a020-412f-98c5-8c67ca14d515 |
| Checking Aid No. | Text (nvarchar); max length 100 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal CheckingAidNo; field ID e9a67f21-cc7e-4ab6-87f6-130dc745dfcf |
| Has customer-required Substances of Concern information been reported<br>Submitted by IMDS or other customer format | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal CustomerFormat; field ID ff2f2cd4-2f52-480e-8aaa-f1e2419076c7 |
| Customer Part Number | Text (nvarchar); max length 100 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Part number given by the customer.; internal CustomerPartNo; field ID 639635e9-8b42-474f-8a2a-d33c70b80ab2 |
| Results For - dimensional measurement helper | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Helper field for M;M mergetemplate; internal DimensionHelper; field ID 36295cb0-be2e-44c5-841c-8a797a1df41d |
| DisplayField | Text (nvarchar); max length unspecified | N | Calculation: CONCATENATE("PPAP ",Product," - ",Product.Name) [F 998bd167-41b8-46bf-bc08-b1baa5ec3a50 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Exported calculated field; description: CONCATENATE("PPAP ",Product," - ",Product.Name); internal DisplayField; field ID 998bd167-41b8-46bf-bc08-b1baa5ec3a50 |
| DraftWeight | Percent (Percent); max length unspecified; precision=18, scale=2 | N | DefaultValue: FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "Draft") [F 965d6b14-7820-4af9-8f87-460e11923049 DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Exported create-time value generator; description: Weighting assigned to the project progress for the Draft stage.; internal DraftWeight; field ID 965d6b14-7820-4af9-8f87-460e11923049 |
| Engineering Drawing Change Level | Text (nvarchar); max length 100 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal DrawChangeLevel; field ID 837a65b8-a7fb-457f-a108-a857fcf2bcfb |
| ECL Dated | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal ECLDated; field ID e59ee28f-adb8-449b-8ea4-1438217a1859 |
| EDCL Dated | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal EDCLDated; field ID 2df09b3d-bb34-4ec7-951b-62048302dfc5 |
| Engineering Change Level | Text (nvarchar); max length 100 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal EngChangeLevel; field ID b0ee1d07-58be-4efa-a99f-0d93f78159e9 |
| EXPLANATION / COMMENTS | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal ExpComments; field ID 57ecafb5-cccd-401f-9159-3297b9db89ac |
| Interim Approval Weight | Percent (Percent); max length unspecified; precision=18, scale=2 | N | DefaultValue: FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "InterimApproval") [F d4f0340b-fe8b-43a3-a9be-054df25737db DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Exported create-time value generator; description: Weighting assigned to the project progress for the Interim Approval Stage.; internal IApprovalWeight; field ID d4f0340b-fe8b-43a3-a9be-054df25737db |
| Interim Approval Completion Date | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Workflow PPAP / Interim Approval / Approve; Workflow PPAP / Interim Approval / Reject; description: Indicates when the interim approval was completed.; internal IApprovCompDate; field ID 1b1cec57-81df-4e3b-93f7-2b78ac17125a |
| Id | Guid (uniqueidentifier); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Logical identity metadata; generation mechanism not exported; internal Id; field ID abb52bc8-9c94-4ebe-8a03-a7f648cb9b4b |
| IMDS # | M:1 to IMDS #_PPAP Abstract__Text__Lookup (APQP_AbstractTextLo2Object); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal IMDS; field ID 960ab691-b964-49cf-b537-e58b3ea5d8a7 |
| IMDS Other | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Action Handler: Clear IMDS Field; internal IMDSOther; field ID 41c28c7a-2842-4515-99f9-141e7d29d328 |
| In-progress Completion Date | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Workflow PPAP / In Progress / Proceed to Review Stage; description: Indicates when the in-progress stage was completed on.; internal InProgCompDate; field ID 86af7b2a-a619-4aa1-91d2-d0b7f1516001 |
| InProgress Weight | Percent (Percent); max length unspecified; precision=18, scale=2 | N | DefaultValue: FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "InProgress") [F 2d7a337b-05a7-4fb7-881c-adafe86bb472 DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Exported create-time value generator; description: Weighting assigned to the project progress for the In Progress Stage.; internal InProgresWeight; field ID 2d7a337b-05a7-4fb7-881c-adafe86bb472 |
| In Review Weight | Percent (Percent); max length unspecified; precision=18, scale=2 | N | DefaultValue: FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "InReview") [F 63ea8832-1c8d-4ae4-acbf-4db8ffc3a407 DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Exported create-time value generator; description: Weighting assigned to the project progress for the In Review Stage.; internal InReviewWeight; field ID 63ea8832-1c8d-4ae4-acbf-4db8ffc3a407 |
| Are polymeric parts identified with appropriate ISO marking codes? | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal ISOmarkingcodes; field ID 3d8c385e-2543-4e4b-a92b-98f00de636ef |
| Results For - material and functional tests helper | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Helper field for M:M merge template; internal MaterialHelper; field ID b4381de4-586a-4133-9520-33ba2f609c3e |
| Mold / Cavity / Production Process | Text (nvarchar); max length 200 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal MCProdProcess; field ID bfb49a0a-6f11-470e-b66a-c32fc3cfc7fa |
| PPAP Completion Date | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Workflow PPAP / In Review / Approve; Workflow PPAP / Interim Approval / Approve; description: Indicates when the PPAP was completed on.; internal PPAPCompDate; field ID 13560454-ef1b-415c-8c7b-415add11f776 |
| PPAP Rejection Date | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Workflow PPAP / In Review / Reject; Workflow PPAP / Interim Approval / Reject; description: Rejection Date of PPAP; internal PPAPRejeDate; field ID 7712a276-d36c-48e6-826a-79bf0c1c2291 |
| Project Owner | M:1 to Employee (SysEmployeeEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Conditional | FilterExpression: {"__type":"Expression","Operator":0,"Predicates":[{"__type":"BelongsToGroup","For":"ID","Negate":false,"GroupId":"bfbec27b-d0b6-47b2-b6d4-9241abf697c7"}]} [F 1235abd4-f363-46d1-a1b6-314aefe130b9 FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; Metadata required=false; required markup in PPAP form including Create and other stage contexts; later read-only/EditReadOnly rendering documented in view appendix; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Person responsible for ensuring PPAP completion.; internal ProjectOwner; field ID 1235abd4-f363-46d1-a1b6-314aefe130b9 |
| Project Owner Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Action Handler: Update Related PPAP Project Owner and Due Date; Action Handler: Initialize PPAP When Task&lt;&gt;NULL; internal ProjectOwnerId; field ID 4d00fd0b-0676-47ea-b0c5-969bcf30f742 |
| Purchase Order No. | Text (nvarchar); max length 100 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal PurchaseOrderNo; field ID b2f77b0a-fba4-42ec-af95-abecf27fad66 |
| Reason for Submission | M:1 to Reason for Submission_PPAP Abstract__Text__Lookup (APQP_AbstractTextLo1Object); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal ReasonforSubm; field ID 1292d574-5faa-4969-8426-a1dd95dfa678 |
| The results for | M:N to The results for:_PPAP Abstract__Text__Lookup (APQP_AbstractTextLo4Object); multiple selection; native map cusAPQP_PPAPAbstractResultsForToAPQP_AbstractTextLo4Map; reverse ResultsFors; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal ResultsFor; field ID e551909e-a79b-47fb-8ab5-8fd1bf6b5c3a |
| These results meet all design record requirements | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal ResultsMeetReq; field ID acd1787a-0426-44a6-be14-e12bfaa1f8fa |
| Review Completion Date | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Workflow PPAP / In Review / Approve; Workflow PPAP / In Review / Interim Approval; Workflow PPAP / In Review / Reject; description: Indicates when the review stage was completed.; internal ReviewCompDate; field ID 9b9816d7-179d-4348-ab83-b9ff40017253 |
| Run Rate | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal RunRate; field ID 75679744-a28b-4189-a124-fd989c1c24fd |
| Run Rate Hours | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal RunRateHours; field ID 9b75f520-2ee3-47dd-a6a8-69a5ba0c3dc1 |
| Safety and/or Government Regulation | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal SaoGRegulation; field ID 7ea4d627-d9dd-4cf7-8a05-b23f97e1efe3 |
| Settings | M:1 to APQP Settings (APQP_SettingsObject); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | DefaultValue: 7b040ae4-8679-43df-ad06-3ad53a684674 [F 9ee028e1-dc09-4781-86c2-1a103c89dc6c DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Exported create-time value generator; internal Settings; field ID 9ee028e1-dc09-4781-86c2-1a103c89dc6c |
| Shown on Drawing No. | Text (nvarchar); max length 100 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal ShownDrawingNo; field ID 54371e46-175c-4d7c-ad7a-7302381e4604 |
| Results For - statistical process package helper | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Helper field for M:M merge template; internal StatisHelper; field ID 0a09139e-55cf-4aa8-9dfc-5881705c58e8 |
| PPAP Due Date | Date (Date); max length unspecified; TimeZoneCapture=false | Y | DefaultValue: Task.Workflow.DueDate [F 928f4637-0e14-46dc-89bc-90cb6e3fadd2 DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | Action Handler: Update Related PPAP Project Owner and Due Date; Action Handler: Initialize PPAP When Task&lt;&gt;NULL; description: Date PPAP is required to be submitted by.; internal SubmissionDate; field ID 928f4637-0e14-46dc-89bc-90cb6e3fadd2 |
| Submission Information | M:1 to Submission Information_PPAP Abstract__Text__Lookup (APQP_AbstractTextLo0Object); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal SubmissionInfo; field ID d58e94e0-1dbd-48f9-a233-da07fad1171e |
| Requested Submission Level (Check one) | M:1 to Requested Submission Level (Check one)_PPAP Abstract__Text__Lookup (APQP_AbstractTextLo3Object); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal SubmissionLevel; field ID ec0dc811-cce7-47ea-8988-d44f1fe2883b |
| Task | M:1 to Integrated Task (ProjectFwk_TaskObject); many → 0..1; reverse PPAPs; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: A project task that is integrated to other applications, providing ease of use.  OOTB integration with PPAP, others to follow.; internal Task; field ID e34df78d-5613-42e8-88e9-e32f3dd12f0b |
| Weight (kg) | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; see PPAP view behavior in security-seeds-views.md | No field-specific population operation resolved; description: Field required for Part Submission Warrant (PSW) and used for merge template.; internal Weight; field ID a2e6f51e-785a-4ff5-9a42-b11020c5012b |


## 2 Project Abstract

**Internal name:** `ProjectFwk_ProjectAbstractObject`. **Stable metadata ID:** `89351fdb-6445-4899-86da-d888a1787563`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 27 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/6`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Corrective Actions | M:N to CAR Abstract (ComplyFramework_CARAbstractObject); multiple selection; native map cusProjectFwk_ProjectAbstractCARsToComplyFramework_CARAbstractMap; reverse ProjecAbstracts; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: M:N relation to CAR Abstract.; internal CARs; field ID a52d21da-99ae-49b0-af7d-2854002f28e1 |
| Created By | M:1 to Employee (SysEmployeeEntity); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal CreatedBy; field ID e00fae98-c1b6-48cf-9217-634d68133eaf |
| Customer | M:1 to Customer (CustComplaints_CustomerObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: 1:M relation to Customer from Customer Complaints application.; internal Customer; field ID acf62bdd-717c-4a7f-8021-54784258271e |
| Customer Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Initialize PPAP When Task&lt;&gt;NULL; internal CustomerId; field ID ac93149a-5b55-484c-9d1e-29e9cb747dc0 |
| Id | Guid (uniqueidentifier); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Logical identity metadata; generation mechanism not exported; internal Id; field ID d0e823b0-c3ac-438e-a476-6fc4e4c72bd4 |
| Lesson Learned | 1:M to Lesson Learned (EventFwk_LessonLearnedObject); inverse collection; no new stored reference; no named inverse exported; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: 1:M relation to Lessons Learned.; internal LessonLearned; field ID 99e65ff0-b550-48b5-9b71-a9c3f37f88ae |
| Location | M:1 to Location (SysLocationEntity); many → 1; reverse ProjectFwkProjectAbstractObject; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Location; field ID 708994d5-82cb-480e-816e-fe3d55ef115f |
| Location Id | Guid (uniqueidentifier); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal LocationId; field ID 4fbaae64-cadf-4ef8-84b5-ee4d8efebf44 |
| [Helper] Current Stage | Text (nvarchar); max length 250 | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Workflow PPAP / Draft / Proceed to Next Stage; Workflow PPAP / In Progress / Proceed to Review Stage; Workflow PPAP / In Review / Approve; Workflow PPAP / In Review / Interim Approval; Workflow PPAP / In Review / Reject; Workflow PPAP / Interim Approval / Approve; Workflow PPAP / Interim Approval / Reject; Workflow APQP / Draft / Proceed to First Gate; Workflow APQP / Gate 1 / Proceed to Next Gate; Workflow APQP / Gate 2 / Proceed to Next Gate; Workflow APQP / Gate 3 / Proceed to Next Gate; Workflow APQP / Gate 4 / Proceed to Next Gate; Workflow APQP / Gate 5 / Approve; internal MyCurrentStage; field ID 6f0edd6e-5bf8-40ea-994d-0ccc509d9eb5 |
| # of Project Tasks | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: IF(ProjectType.ProjeSystemName = "APQP_APQPObject",COUNT(ProjectTasks), COUNT(FILTER(ProjectTasks.PhaseNamehelper, "=", Phase.Name)) ) [F 3cb34495-f82c-4d59-a0fe-28157fbed0f2 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: Used for Gate or Task progress calculations.; internal NbofProTasks; field ID 3cb34495-f82c-4d59-a0fe-28157fbed0f2 |
| # of Open Project Tasks | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(FILTER(ProjectTasks.IsCompleted, "=", FALSE)) [F fa18162f-8520-4601-91f7-9735b1a75da6 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: Used for Gate or Task progress calculations.; internal NbOpenProTasks; field ID fa18162f-8520-4601-91f7-9735b1a75da6 |
| Phase | M:1 to Phase (ProjectFwk_PhaseObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | FilterExpression: full expression in field-expressions.md [F d2cdabfd-5b74-4e87-b700-abd3546f53ee FilterExpression] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Set Phase Field &amp; Task Creation; Workflow PPAP / In Review / Approve; Workflow PPAP / In Review / Reject; Workflow PPAP / Interim Approval / Approve; Workflow PPAP / Interim Approval / Reject; Workflow APQP / Gate 5 / Approve; description: Referred to as "Gate" throughout the application and is used in template creation.; internal Phase; field ID d2cdabfd-5b74-4e87-b700-abd3546f53ee |
| Phase Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Set Phase Field &amp; Task Creation; internal PhaseId; field ID e2ac0318-e2a9-428a-803c-d0f4957ae0fb |
| Product | M:1 to Item Revision (ProductMgmt_ItemRevisionObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Conditional | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; Metadata required=false; required markup in PPAP form including Create and other stage contexts; later read-only/EditReadOnly rendering documented in view appendix | No field-specific population operation resolved; description: 1:M relation to Item Revision from Product Management.; internal Product; field ID 90c44904-6bd4-4670-bff6-e220d61d8f4a |
| Product Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Initialize PPAP When Task&lt;&gt;NULL; internal ProductId; field ID 02bc401c-1df2-4e73-a39a-cbda7b44143c |
| Gate Progress | Percent (Percent); max length unspecified; precision=18, scale=0 | N | Calculation: IFERROR((NbofProTasks-NbOpenProTasks)/NbofProTasks, 0) [F 4e811d57-dafb-43cd-adf5-66b40c4dc58b Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: Used for project progress calculations.; internal ProgProTasks; field ID 4e811d57-dafb-43cd-adf5-66b40c4dc58b |
| Project Progress | Percent (Percent); max length unspecified; precision=18, scale=2 | N | DefaultValue: 0 [F fd378739-8a62-45ed-899e-a21562a317d9 DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Workflow PPAP / Draft / Proceed to Next Stage; Workflow PPAP / In Progress / Proceed to Review Stage; Workflow PPAP / In Review / Approve; Workflow PPAP / In Review / Interim Approval; Workflow PPAP / Interim Approval / Approve; Workflow APQP / Draft / Proceed to First Gate; Workflow APQP / Gate 1 / Proceed to Next Gate; Workflow APQP / Gate 2 / Proceed to Next Gate; Workflow APQP / Gate 3 / Proceed to Next Gate; Workflow APQP / Gate 4 / Proceed to Next Gate; Workflow APQP / Gate 5 / Approve; description: This Field will be populated from the Workflow based on Weight Assigned to the Project Phase.; internal Progress; field ID fd378739-8a62-45ed-899e-a21562a317d9 |
| Project Tasks | 1:M to Project Task (ProjectFwk_ProjectTaskObject); inverse collection; no new stored reference; reverse Project; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: M:1 relation to Project Tasks.; internal ProjectTasks; field ID 93305599-3adc-411f-96b4-dbae38a3a930 |
| Template | M:1 to Project Template (ProjectFwk_PFWKTemplateObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Conditional | FilterExpression: full expression in field-expressions.md [F 586066b4-9b82-43b3-ae32-eb80bc8ebf68 FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage; Metadata required=false; additionally required by PPAP create-mode view | No field-specific population operation resolved; description: Identifies the project template to be used during record creation.; internal ProjectTemplate; field ID 586066b4-9b82-43b3-ae32-eb80bc8ebf68 |
| Project Template Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Initialize PPAP When Task&lt;&gt;NULL; internal ProjectTemplateId; field ID e86e6764-02d8-456b-a5a5-21e9655e274a |
| Project Type | M:1 to Project Type (ProjectFwk_ProjectTypeObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Set Relation to Project Type; description: Identifies the project type.; internal ProjectType; field ID 49eba879-2ac4-484a-9bcb-06095a1f8a6e |
| Project Type Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjectTypeId; field ID e0bb9527-2cc4-4c6a-847b-64b47aecc526 |
| Project/Role/Team Member | 1:M to Project/Role/Team Member (ProjectFwk_ProjRoleTeMemObject); inverse collection; no new stored reference; reverse Project; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjRoleTeamMem; field ID 8f410f63-b48f-4554-80e8-45b3dd668c84 |
| Record No. | Auto Number (AutoNumber); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal RecordNo; field ID 2afef093-9ce0-4610-a87f-b32dcf2d1667 |
| Supplier | M:1 to Public Profile (SupplierMgmt_PublicProfileObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | FilterExpression: full expression in field-expressions.md [F 146f9fc3-c225-482f-9671-6d12ccb8eefb FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Identifies the supplier of the product associated to the record.; internal Supplier; field ID 146f9fc3-c225-482f-9671-6d12ccb8eefb |
| Supplier Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Initialize PPAP When Task&lt;&gt;NULL; internal SupplierId; field ID c39ea860-8f9e-414f-8e47-a61640067a7c |
| Workflow | M:1 to Workflow Instance (SysWorkflowInstanceEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Workflow; field ID 01ce7c50-ac76-4d85-b127-d74027e104af |


## 3 Project Task

**Internal name:** `ProjectFwk_ProjectTaskObject`. **Stable metadata ID:** `fbda7a0f-aa14-45fb-985c-6fbee3aeeb9f`. **Classification:** Extracted record metadata.

**Inheritance parent:** ActionPlans_ActionPlanAbsObject.

**Directly declared fields:** 14 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/54`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Description | Text (nvarchar); max length unspecified | N | DefaultValue: ProjectTaskMap.ProjTaskDefObj.Description [F 47bedb3a-d72f-4ff9-9af0-c81d00957d4c DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal Description; field ID 47bedb3a-d72f-4ff9-9af0-c81d00957d4c |
| Helper - Role Member Changed | Yes/No (bit); max length unspecified | N | Calculation: FALSE [F 9b1fbd04-1f0b-4069-a29b-c2a40dc70070 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Update Task Person Responsible; internal HelpMemChanged; field ID 9b1fbd04-1f0b-4069-a29b-c2a40dc70070 |
| Helper - Is PPAP Project Workflow Changed | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Update Phase for open tasks; Workflow PPAP / Draft / Proceed to Next Stage; internal HelpProjWorkCh; field ID 798f7c0f-c5a2-4db4-a389-9e9c4bcfc8e9 |
| Order | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | DefaultValue: ProjectTaskMap.Order [F 3fda830d-aff9-4d22-a61a-4e8b89ee3a43 DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal Order; field ID 3fda830d-aff9-4d22-a61a-4e8b89ee3a43 |
| Person Responsible | M:1 to Project/Role/Team Member (ProjectFwk_ProjRoleTeMemObject); many → 0..1; reverse ProjectTasks; Inferred from foreign-key relation and declaring start; requiredness extracted | N | FilterExpression: full expression in field-expressions.md [F 8e823fb2-07c3-4e02-bdc1-d77d470e214f FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Set Person Responsible on create; internal PersResponsible; field ID 8e823fb2-07c3-4e02-bdc1-d77d470e214f |
| Person Responsible Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Set Person Responsible on create; internal PersResponsibleId; field ID c9bfec00-62e4-4cf3-84e4-7a93c62d5228 |
| Phase | M:1 to Phase (ProjectFwk_PhaseObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | DefaultValue: ProjectTaskMap.Phase [F 1304e2a8-c0c4-4e4a-91a2-8f3bdd29aa3d DefaultValue]; FilterExpression: full expression in field-expressions.md [F 1304e2a8-c0c4-4e4a-91a2-8f3bdd29aa3d FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Update Phase for open tasks; internal Phase; field ID 1304e2a8-c0c4-4e4a-91a2-8f3bdd29aa3d |
| Phase Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Initialize when Project &lt;&gt; NULL; internal PhaseId; field ID 7ce5c916-8396-49c7-8314-d47421b2252a |
| Phase Name (helper) | Text (nvarchar); max length unspecified | N | Calculation: Phase.Name [F 2950fb4e-5e79-4720-a7fd-0718eb766cd4 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal PhaseNamehelper; field ID 2950fb4e-5e79-4720-a7fd-0718eb766cd4 |
| Project | M:1 to Project Abstract (ProjectFwk_ProjectAbstractObject); many → 0..1; reverse ProjectTasks; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Project; field ID de032907-db30-43af-8d21-6243fc2c9be2 |
| Project Abstract Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjectId; field ID daf4e726-1984-4e3e-9d19-a1b54f7b69f4 |
| Project Role | M:1 to Project Role (ProjectFwk_PFRoleObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | DefaultValue: ProjectTaskMap.ProjTaskDefObj.ProjectRole [F 96f0c7da-ace1-49ba-b881-f79f900ef571 DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal ProjectRole; field ID 96f0c7da-ace1-49ba-b881-f79f900ef571 |
| Project Role Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjectRoleId; field ID 44195624-4da6-494f-b098-f1290b04ea0a |
| Project/Task | M:1 to Project/Task (ProjectFwk_PFWKProjectTaskObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal ProjectTaskMap; field ID c136cdcc-6db9-4330-a9b8-d3adc2613367 |


## 4 Task

**Internal name:** `ProjectFwk_AdHocTaskObject`. **Stable metadata ID:** `75752ee8-d6f1-4243-b9bf-a508e6163b09`. **Classification:** Extracted record metadata.

**Inheritance parent:** ProjectFwk_ProjectTaskObject.

**Directly declared fields:** 1 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=true; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=true; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/73`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Start Condition | Yes/No (bit); max length unspecified | N | Calculation: IF(DueDate&lt;&gt;NULL,TRUE,FALSE) [F bc245361-f360-4f6f-a38d-1d69922e21fc Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: This is a workflow start condition which requires the Due Date to be entered before workflow will begin.; internal StartCondition; field ID bc245361-f360-4f6f-a38d-1d69922e21fc |


## 5 Integrated Task

**Internal name:** `ProjectFwk_TaskObject`. **Stable metadata ID:** `04b40719-eb5d-4202-9811-60b039739c78`. **Classification:** Extracted record metadata.

**Inheritance parent:** ProjectFwk_ProjectTaskObject.

**Directly declared fields:** 9 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=true; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=true; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/236`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Task Definition | M:1 to Task Definition (ProjectFwk_TaskDefObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Def; field ID 3bf53908-38e8-4920-9ac5-a5892f00066e |
| Task Definition Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Copy Values on Create and Create PPAP; internal DefId; field ID 6d95da63-950c-431c-ae19-fe0c02097768 |
| [Helper] Task ID | GUID (GUID); max length unspecified | N | Calculation: IFNULL(RelatedPPAP.Id, NULL) [F 6f8de12f-cc79-4203-bc6d-9442978def69 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: IFNULL(RelatedPPAP.Id, RelatedFMEA.Id); internal HelperTaskId; field ID 6f8de12f-cc79-4203-bc6d-9442978def69 |
| [Helper] Task Exists | Yes/No (bit); max length unspecified | N | Calculation: HelperTaskId&lt;&gt;NULL [F bfe43cf5-a333-43e5-bc9b-92a8e456d1cb Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: HelperTaskId&lt;&gt;NULL; internal HelpeTaskExists; field ID bfe43cf5-a333-43e5-bc9b-92a8e456d1cb |
| PPAPs | 1:M to PPAP (APQP_PPAPAbstractObject); inverse collection; no new stored reference; reverse Task; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: This relation is used to create a PPAP task from APQP.; internal PPAPs; field ID 38442ff4-7378-4624-9ac0-54349c7ad98d |
| Related PPAP | M:1 to PPAP (APQP_PPAPAbstractObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: This relation is used to view a PPAP task from APQP.; internal RelatedPPAP; field ID 89bc2d39-75a3-4158-b7f5-ea9595c329a8 |
| Related PPAP Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Set RelatedPPAP on Task; internal RelatedPPAPId; field ID 0c5a8c29-d3c5-45c0-b16b-c16dd3de3b46 |
| Start Condition | Yes/No (bit); max length unspecified | N | Calculation: IF(DueDate&lt;&gt;NULL,TRUE,FALSE) [F 32973f22-f583-4ed9-b735-4b2c340292f4 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: This is a workflow start condition which requires the Due Date to be entered before workflow will begin.; internal StartCondition; field ID 32973f22-f583-4ed9-b735-4b2c340292f4 |
| Application Integration | M:1 to Type of Record (ProjectFwk_TypeofRecordObject); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | DefaultValue: Def.TypeofRecord [F 85af8aef-ed27-425f-9778-0a9384664d2f DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal TypeOfRecord; field ID 85af8aef-ed27-425f-9778-0a9384664d2f |


## 6 Checklist

**Internal name:** `ProjectFwk_ChecklistObject`. **Stable metadata ID:** `598d5f76-41c9-4ed7-99c0-8cccb2ecdf3b`. **Classification:** Extracted record metadata.

**Inheritance parent:** ProjectFwk_ProjectTaskObject.

**Directly declared fields:** 5 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=true; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=true; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/119`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Checklist Answer | M:1 to Checklist Record (ProjectFwk_ChecklistRecordObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Copy Values on Create; internal ChecklistAnswer; field ID 4f788663-622b-4616-bd3e-e94651c0dcbe |
| Checklist Definition | M:1 to Checklist Definition (ProjectFwk_ChecklistDefObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Def; field ID 9f0e8e6a-ae2d-49fb-ac80-2e2de6f4b573 |
| Checklist Definition Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Copy Values on Create; internal DefId; field ID cddd6059-c0a4-40be-8505-5de50180d9bf |
| [Helper] Pub Checklist Id | GUID (GUID); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Copy Values on Create; internal HelpPubCheck; field ID 309c0f2c-e39b-4f04-99d1-9c203552356f |
| Start Condition | Yes/No (bit); max length unspecified | N | Calculation: IF(DueDate&lt;&gt;NULL,TRUE,FALSE) [F 791d2816-dd37-4d05-8d8a-7a095a0366a6 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal StartCondition; field ID 791d2816-dd37-4d05-8d8a-7a095a0366a6 |


## 7 Project Task Definition

**Internal name:** `ProjectFwk_ProjectTaskDefObject`. **Stable metadata ID:** `29c6b0ac-e44a-4c68-a34e-b349e1954a9f`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 9 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/2`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Active | Yes/No (bit); max length unspecified | Y | DefaultValue: true [F 70b37be2-5cc8-4e16-addf-48fdd45d5ba0 DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal Active; field ID 70b37be2-5cc8-4e16-addf-48fdd45d5ba0 |
| Description | Text (nvarchar); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Identifies what is required for task completion.; internal Description; field ID 01fc5a5b-a245-4bc4-a5b5-165177c598e1 |
| Display Value | Text (nvarchar); max length unspecified | N | Calculation: CONCATENATE(RecordNo, " - ", IF(LEN(Description)&gt;50, CONCATENATE(LEFT(Description, 47), "..."), Description)) [F f5238818-ba54-4b30-ac33-52891bad0149 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal DisplayValue; field ID f5238818-ba54-4b30-ac33-52891bad0149 |
| Id | Guid (uniqueidentifier); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Logical identity metadata; generation mechanism not exported; internal Id; field ID a476a85d-c2b0-4102-b1bd-06399953db1d |
| Project Role | M:1 to Project Role (ProjectFwk_PFRoleObject); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Identifies the role that would typically be responsible for completing a specific task.; internal ProjectRole; field ID 63d53bba-f55b-4944-a7b4-3dc1e30f134a |
| Project/Task | 1:M to Project/Task (ProjectFwk_PFWKProjectTaskObject); inverse collection; no new stored reference; reverse ProjTaskDefObj; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjectTask; field ID d42c2ca5-1abc-4643-a267-164cf56c6b04 |
| Recommended For | M:1 to Project Type (ProjectFwk_ProjectTypeObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Provides a way to view tasks (by Project Type) during project template creation.; internal RecommendedFor; field ID ed2a7eac-7045-4854-8074-b6457464aebf |
| Record No. | Auto Number (AutoNumber); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal RecordNo; field ID 2d418795-5894-4609-9cc3-7325b811434a |
| Task Type | M:1 to Task Type (ProjectFwk_TaskTypeObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Set Relation with Task Type; internal TaskType; field ID 7da95534-7ec0-4313-990d-c0a5d5ec92b1 |


## 8 Task Definition

**Internal name:** `ProjectFwk_TaskDefObject`. **Stable metadata ID:** `38a6959e-970e-4606-9caf-85dca20189a8`. **Classification:** Extracted record metadata.

**Inheritance parent:** ProjectFwk_ProjectTaskDefObject.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/397`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| PPAP Template | M:1 to Project Template (ProjectFwk_PFWKTemplateObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | FilterExpression: full expression in field-expressions.md [F 82c9b33c-d408-4012-9d04-5050375ba0d8 FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PPAPTemplate; field ID 82c9b33c-d408-4012-9d04-5050375ba0d8 |
| PPAP Template Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PPAPTemplateId; field ID a2e706b1-bf54-4b0a-93a4-480f2c5bb2f2 |
| App Integration | M:1 to Type of Record (ProjectFwk_TypeofRecordObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal TypeofRecord; field ID 06fe6b3b-1de4-4f7a-9424-207fa60525a0 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | TypeofRecord | PPAPTemplate | Active | Description | DisplayValue | RecordNo | ProjectRole | TaskType | RecommendedFor | ProjectTask | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 85335f70-5615-4bc4-b721-5d663d98cc0c | null | null | true | Attach Customer Engineering Approval. | 46 - Attach Customer Engineering Approval. | 46 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [b3262bb4-45a8-45e9-a862-510b5490bf97]; Project/Task [752be2f2-5250-4af1-869a-7f63977c59fd]; Project/Task [a0e78eeb-8030-4c62-88c4-549bd9362e2e]; Project/Task [9e96dbd0-a794-40c2-96c4-7bb1948c796a]; Project/Task [06863465-ab66-4a07-8c1c-fc274c781066] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/28 |
| be93524a-b19d-442c-b70f-d395a816521d | null | null | true | Review Engineering Drawings and Math Data. | 13 - Review Engineering Drawings and Math Data. | 13 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [7e4ba6c5-71cf-434b-ad3d-d5ec1df9c481] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/78 |
| 52454de7-09ba-47a7-a4aa-8eca66ebdeb7 | null | null | true | Complete Pre-Launch Control Plan. | 27 - Complete Pre-Launch Control Plan. | 27 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [d2c7a3bc-5385-49f1-b573-87096ba58ff3] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/82 |
| ea925482-8ad6-4b2c-82fb-86a52835fdd1 | null | null | true | Attach Dimensional Results. | 52 - Attach Dimensional Results. | 52 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [21007458-f927-49f3-bccf-ae2275f31e63]; Project/Task [494a8d5e-f00c-4e88-97f4-248a3fb8468a]; Project/Task [b3412b6e-4b43-4348-9b01-abaaa7e9e163]; Project/Task [655b99be-d38e-40c1-bfe2-7ea7b8a9a974]; Project/Task [76de116b-b012-432a-85e7-3b19bdaa86d8] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/84 |
| 41c5300a-a634-4766-a087-8e790b3dc88b | null | null | true | Attach Process Flow Diagram. | 48 - Attach Process Flow Diagram. | 48 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [200f9185-321a-4e56-9176-5e9e74fe201a]; Project/Task [e8f22c64-c2c7-4788-a5b3-280a536dc674]; Project/Task [820212e6-e654-4d7e-8f65-72a150751c56]; Project/Task [71ce6b6c-e89c-4b83-93b9-e4fba280378c]; Project/Task [739fd278-a7cd-4bd3-9e1e-df62c97b2883] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/106 |
| 2aa4ce58-eea4-47f4-bfe2-2621e229fb4d | null | null | true | Complete Part Submission Warrant (PSW). | 61 - Complete Part Submission Warrant (PSW). | 61 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | 99 [e03f8719-e03c-4025-8c64-bdb199085ecc]; 99 [7280ecab-e622-4f2a-9520-c145db22bcfe]; 99 [850d0439-f03e-4fb4-9146-0daf83f0cc4a]; 99 [b4fdfc10-dd0e-40ed-917a-c692eae28e41]; 99 [5e27e886-000d-4638-957c-039ab9be2524] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/111 |
| 80c699c6-a078-4904-96ee-647c42577cd7 | null | null | true | Review New Equipment, Tooling and Facilities Requirements to ensure capability and timing requirements are met. | 17 - Review New Equipment, Tooling and Facilities Re... | 17 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [c55939f1-32a5-4e84-a73d-56a878f73e5e] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/117 |
| c2f8f2a3-ff26-4866-b234-562c4da026d4 | null | null | true | Ensure Master Sample is ready for shipment. | 58 - Ensure Master Sample is ready for shipment. | 58 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [fc41e528-5ab6-47a5-aa53-973fd45110d6]; Project/Task [d006d2bb-ea6e-4e4a-8bc8-131b8f549f72]; Project/Task [0398be94-1c65-4392-ae85-5ce69524a2d2]; Project/Task [8dba694c-acef-47a6-950a-bb00d243bb0c]; Project/Task [a4c7c125-43e9-4a32-855c-888a124122ca] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/122 |
| 291251b9-0046-4de0-a893-e5d50f1af53e | null | null | true | Reduced Variation | 40 - Reduced Variation | 40 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [d613c739-14ec-4bda-b87c-4211ddc65f56] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/123 |
| 9f2c0e73-fc36-447a-8e62-cb754f603b6e | null | null | true | Quality Planning Sign-Off and Gateway approval | 39 - Quality Planning Sign-Off and Gateway approval | 39 | Process Owner [889717f1-2f57-4903-bd87-c40e96fe0c01] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | 99 [8deeef53-899f-49f7-9aa5-d7c74bab0f42] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/151 |
| eed360a9-007e-4adb-b17c-47053a9f1797 | null | null | true | Complete Floor Plan Layout to facilitate synchronous flow of materials through process. | 24 - Complete Floor Plan Layout to facilitate synchr... | 24 | Manufacturing [20388020-8033-4066-8d14-1dcb953033ca] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [55a18bb5-631a-4df2-aa3d-b0713820aeb5] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/153 |
| e7eb9134-38b8-4439-b0e4-4389805a0b8f | null | null | true | Complete a Quality System Review to determine if any additional controls and/or procedural changes are required. | 22 - Complete a Quality System Review to determine i... | 22 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [d0838ff7-cd2f-4a7f-ba92-20186a847d8c] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/155 |
| f88dfa11-3d19-4572-b84f-c759b5999802 | null | null | true | Attach Records of Material / Performance Tests. | 53 - Attach Records of Material / Performance Tests. | 53 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [bbb499f1-85c3-4f06-addf-e5475b990964]; Project/Task [1c3e1011-bd65-4eb6-8a58-2362d1ab4282]; Project/Task [43f37219-ad00-47b7-a92f-bcd223af7ba0]; Project/Task [ac6ebab2-50fa-46cd-bece-a2aa4ff31f70]; Project/Task [14ca1875-0dc3-45ab-800c-c54ce459e319] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/159 |
| 0fd4e5ec-df1d-4c58-a633-6c723f158776 | null | null | true | Process Capability Studies | 34 - Process Capability Studies | 34 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [dbeae902-0d17-482d-9a7b-aa6edd7697a3] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/163 |
| 7c0599df-9752-418f-baa5-54ce70d2894d | null | null | true | Attach DFMEA. | 47 - Attach DFMEA. | 47 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [d7faca2d-1d5a-4125-b3b9-db6ee21e8c2c]; Project/Task [0083be19-7a3b-4635-9089-b16a5b96334b]; Project/Task [0519258c-7f78-4f35-82ef-1873190f1937]; Project/Task [98e9ea72-012b-444b-b08a-7ebf1f1e07ef]; Project/Task [67f48cfb-6fc3-468a-ad49-c8fd3720ee87] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/171 |
| 9ed55736-2473-4356-8c25-0ca814e66b67 | null | null | true | Attach PFMEA. | 49 - Attach PFMEA. | 49 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [1880f007-c8f8-4099-a080-aa153aacbf9b]; Project/Task [c5f35c05-0996-4605-a60e-fa517e77587a]; Project/Task [742e0d0d-59d5-47a3-a5d0-01d0efe828c3]; Project/Task [c139d0f8-8560-4698-bd5d-21be3e1753ad]; Project/Task [972a6a2e-5aa6-431d-bdc4-405e9531e2d0] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/184 |
| 1f5a90d0-9850-469b-b756-943310aad938 | null | null | true | Ensure Design Goals are identified and measurable. | 1 - Ensure Design Goals are identified and measurable. | 1 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [2b9cebf1-a84a-4e6f-8e03-4d66a9ed4b09] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/185 |
| 9bd4a019-36aa-41b2-b84a-a46191604b15 | null | null | true | Complete a Process Flow Chart to assist with conducting PFMEA and designing a control plan. | 23 - Complete a Process Flow Chart to assist with co... | 23 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [42cd34bc-ef9a-4b18-962c-a9bcf50dd7e4] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/186 |
| 35514dff-df76-4347-9252-604845487c2a | null | null | true | Identify the Preliminary list of Special Characteristics. | 5 - Identify the Preliminary list of Special Charac... | 5 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [383682ac-e275-45c1-93b1-fd6884ab6f15] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/188 |
| 6667c6a3-7e8a-4dd2-b734-26121f76c9ce | null | null | true | Significant Production Run | 32 - Significant Production Run | 32 | Manufacturing [20388020-8033-4066-8d14-1dcb953033ca] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [74cf557d-7a2a-4063-aeb6-2aeefcc5ef99] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/195 |
| 42bc845a-80ca-47b9-880b-dab8ed369f67 | null | null | true | Attach Control Plan. | 50 - Attach Control Plan. | 50 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [2d11984d-5d24-468e-8f48-9e50973e97b2]; Project/Task [c79bc1f6-21c5-403f-bef1-b29eda45575d]; Project/Task [22604117-86b7-4d5c-a1cf-88f2fc14ced0]; Project/Task [96f70b7b-4121-4121-84d4-0c141d57d747]; Project/Task [cd5b53b7-55c9-466d-962a-9b535f0316b0] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/201 |
| 6cbd42f2-71b9-48e2-8b81-573f7cbcb287 | null | null | true | Attach Customer Specific Requirements. | 60 - Attach Customer Specific Requirements. | 60 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [7f1db540-4d50-4ea8-9c74-79e9c361c86f]; Project/Task [3d5e11fb-07fd-4608-8a53-2b3f4dad522c]; Project/Task [2387fc51-da23-4d78-9d85-b47afb225219]; Project/Task [1ac92a30-3028-43e4-bdfb-b14012f8a531]; Project/Task [342db5f7-4080-4db2-8ad5-a9011349e60c] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/208 |
| 7a731d91-98eb-4609-9395-c4a5fc35c094 | null | null | true | Attach Measurement Systems Analysis (MSA). | 51 - Attach Measurement Systems Analysis (MSA). | 51 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [bedf00a5-7a94-40cf-8102-cd2e8d6be985]; Project/Task [c00cc6a1-9c65-40c8-8843-980607a11601]; Project/Task [9ca8f966-d2bc-48c0-a5fe-0558f4e568ed]; Project/Task [f5bf0372-f615-4c98-8d19-1260e21ec895]; Project/Task [f658253e-5b58-4501-b5cd-41f959f6bca3] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/213 |
| 51f24dd0-4a62-431e-9054-8ba71dfffb89 | null | null | true | Attach Engineering Change Documentation. | 45 - Attach Engineering Change Documentation. | 45 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [696970cc-d6b3-4995-9fcf-b223b5b7b0a6]; Project/Task [150373a7-faab-46a4-9cad-a451792f3ed6]; Project/Task [530306e7-eb6e-43b7-b9fc-38fdb8243004]; Project/Task [bfa9073f-d3b2-498d-b936-4ad0ba6b695b]; Project/Task [86211de4-dd79-406c-b4a6-03590df80c12] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/234 |
| 59374e18-b587-46d8-8bbc-bc3ad9bb95dd | null | null | true | Identify Gages / Testing Equipment Requirements are met. | 19 - Identify Gages / Testing Equipment Requirements... | 19 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [8dda9f7e-446c-463d-a9f3-d57aafcec110] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/258 |
| 237a8a01-4fa9-43e4-8b74-382d9c7383a0 | null | null | true | Complete Design for Manufacturing and Assembly (DFM/A). | 9 - Complete Design for Manufacturing and Assembly ... | 9 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [de4e972a-6844-476a-a9af-50a554219009] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/260 |
| 501c7969-967a-4ed6-bb3b-7fedc063328f | null | null | true | Attach Qualified Lab Documentation. | 55 - Attach Qualified Lab Documentation. | 55 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [980501ab-ce55-4f82-8ff1-55714b365912]; Project/Task [5d1f8e02-5b2f-404f-aa98-935d021c95b5]; Project/Task [870f3983-1eb7-49f4-a29b-682c3b03f147]; Project/Task [c8e0e5fa-7f29-41a3-a791-eee63a766f1e]; Project/Task [d33123da-3348-4ce5-9269-0952cadc10b6] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/263 |
| 9fc38032-3f82-432c-834c-089a61b30c70 | null | null | true | Complete and attach Design Documentation. | 44 - Complete and attach Design Documentation. | 44 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [76fc5ea4-79d9-4588-976a-ea0942eceaf2]; Project/Task [6f98288d-ea87-486d-913f-a0dd70c9857f]; Project/Task [62f21e81-e3a1-4cfc-83aa-84e600d352a0]; Project/Task [d1af7f3b-c87a-4ef6-bde3-7fd2b46c2476]; Project/Task [3987407d-9560-48b1-b5c6-fda2b6779bcd] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/288 |
| 221c8033-ac86-4bd2-ab4b-523b1e240a27 | null | null | true | Preliminary process capability plan | 30 - Preliminary process capability plan | 30 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [1a5cf867-0437-426c-91c5-d69212d68602] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/289 |
| 8342481b-21af-439d-a26d-dd406ad97c66 | null | null | true | Attach Initial Process Studies. | 54 - Attach Initial Process Studies. | 54 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [600d48b1-6a44-4814-ad95-fd4d48f59fb8]; Project/Task [0a278b58-69ff-484a-95c1-787fb20a79a0]; Project/Task [eb0d78a8-7325-4122-a691-3d8216d3f09d]; Project/Task [015957b9-504a-4af7-bb3c-7dcd919fa65f]; Project/Task [d52951a1-b9eb-46c2-b5e5-4a41311822c9] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/293 |
| 42d55309-acf4-4184-a6ff-c6fbc99e44fb | null | null | true | Complete Design FMEA (DFMEA). | 8 - Complete Design FMEA (DFMEA). | 8 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [88dbe57f-ef3b-4e59-8efb-a08c21e3b02d] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/298 |
| f7b14f8a-0825-408e-892f-68f4810723ab | null | null | true | Production Validation Testing | 36 - Production Validation Testing | 36 | Manufacturing [20388020-8033-4066-8d14-1dcb953033ca] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [19a6e7c0-776a-4e54-b636-e44066f2b39e] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/305 |
| a29a4503-3160-400b-a11f-c0dbb9bd4380 | null | null | true | Attach Checking Aids. | 59 - Attach Checking Aids. | 59 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [f6d4f620-47cb-4cb5-8a24-5368c480a0ed]; Project/Task [edfa987b-ad6a-41a6-a8cc-1475cf51be0e]; Project/Task [556ec201-2660-4a14-9cf0-96913e3aec6b]; Project/Task [50e59b7a-c45a-4b3d-b47b-aa9692a851a7]; Project/Task [817b44b6-58e8-46bf-984e-82e2fd049882] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/314 |
| 2098e0a5-d385-4916-a56a-3f429f676306 | null | null | true | Complete a Characteristics Matrix to display relationships between process parameters and manufacturing stations. | 25 - Complete a Characteristics Matrix to display re... | 25 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [67f4f8f1-ef0c-461c-b477-938f98637854] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/317 |
| 8cb9362f-93ef-4b26-98aa-8dde5bf8d0c3 | null | null | true | Assess Team Feasibility Commitment and review process for Gateway approval. | 20 - Assess Team Feasibility Commitment and review p... | 20 | Process Owner [889717f1-2f57-4903-bd87-c40e96fe0c01] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | 99 [6c23ec83-c395-447f-91ee-fe66340e5d93] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/332 |
| 1793c1e4-995f-4384-8b4d-822099d5876e | null | null | true | Gateway approval | 31 - Gateway approval | 31 | Process Owner [889717f1-2f57-4903-bd87-c40e96fe0c01] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | 99 [0afae04a-4958-48b5-8c18-5d4c5693b3ac] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/334 |
| 149b5284-6364-4ffa-8e3a-f6d7fb5cdc5e | null | null | true | Ensure Change Control for Drawings is happening. | 16 - Ensure Change Control for Drawings is happening. | 16 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [8d0b23a8-013f-4513-8b1a-b5d46034adad] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/345 |
| d6603387-be88-42df-9986-0a1ff84da095 | null | null | true | MSA Results | 33 - MSA Results | 33 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [ab9063f6-398e-4644-acd0-8cc15ac07d44] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/352 |
| bbba6e51-320c-4f82-84b7-dddffa05025e | null | null | true | Ensure Sample Production Parts are ready for shipment. | 57 - Ensure Sample Production Parts are ready for sh... | 57 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [4ba5e979-a436-47b6-af27-f4b38032bd9c]; Project/Task [01508217-6d27-4ada-b749-70e6a5619561]; Project/Task [67836074-ed15-4df1-8a1e-6772750c3008]; Project/Task [06fe00a5-25ff-43c9-b363-f001750e0c4e]; Project/Task [85f562a7-dd6d-447a-9082-237093fc256c] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/354 |
| 803d9425-31a1-4b6b-856f-1454fb7ee6d7 | null | null | true | Complete Design Verification. | 10 - Complete Design Verification. | 10 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [60bcbfb1-b1d7-43bf-b5fb-7b8b386c0d62] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/355 |
| ea797412-82ce-4c80-bdf7-30e493a33920 | null | null | true | Attach Appearance Approval Report. | 56 - Attach Appearance Approval Report. | 56 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | Project/Task [07e605e8-2e6b-4d01-8b49-6536799f31ac]; Project/Task [5d1d6da2-cc21-4e4a-9cb2-383f20b36b89]; Project/Task [82f0e55f-0122-4c2a-a298-d0da34ce63c0]; Project/Task [22f8a6a5-76a0-4dc7-802d-59907d0b3016]; Project/Task [76b2999f-6dc7-4132-8d89-b5bcae56d488] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/384 |
| c19e1947-6653-4eae-93e4-4af334837a90 | null | null | true | Packaging Evaluation | 37 - Packaging Evaluation | 37 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [deafe7ab-67f1-49cc-bf3a-eb051ccdd9f9] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/389 |
| 6990d5e3-6d1a-420e-9388-8c5fafc6f4d0 | null | null | true | Ensure all Packaging Standards and Specifications are addressed. | 21 - Ensure all Packaging Standards and Specificatio... | 21 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [67d556d4-9cfb-4979-9c9e-10af6443439e] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/390 |
| 4f9b66ed-4fb5-4946-b68f-4addd2e5b492 | null | null | true | Measurement Systems Analysis (MSA) Plan | 29 - Measurement Systems Analysis (MSA) Plan | 29 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [313e34bd-fdff-401f-b8d9-f2f272a09f5a] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/393 |
| b496f778-cee4-4f02-a656-c9b8377fc931 | null | null | true | Complete Process FMEA (PFMEA). | 26 - Complete Process FMEA (PFMEA). | 26 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [a5ce6c7d-e0f2-443f-934f-beedec4eb3ad] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/410 |
| d0a8f788-19e2-472b-aae4-03f6baa98fa1 | null | null | true | Complete the Preliminary Bill of Material (BOM) and include a potential supplier list | 3 - Complete the Preliminary Bill of Material (BOM)... | 3 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [c4a23308-a60a-47ea-b18e-57184cbacaa6] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/413 |
| 5151caa4-271f-4861-8db3-abdc4ed1f34d | null | null | true | Effective Use of Lessons Learned | 43 - Effective Use of Lessons Learned | 43 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [6bbbface-5b6a-42b7-94f8-d4065ef378ad] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/414 |
| 1291db6e-7eb8-430b-8f81-fe898497f248 | null | null | true | Complete a Preliminary Process Flow based on BOM and product/process assumptions. | 4 - Complete a Preliminary Process Flow based on BO... | 4 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [51ee9f15-7b9a-4100-b225-f1a891becd1c] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/419 |
| 14334a39-24ff-4488-9707-719aab026906 | null | null | true | Ensure Special Product and Process Characteristics are idenified. | 18 - Ensure Special Product and Process Characterist... | 18 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [cf0ccb02-4ee6-4bf1-becc-3f505fa36df4] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/420 |
| 1aeeef2d-72ea-4e2c-b26e-106dcf60c0da | null | null | true | Improved Customer Satisfaction | 41 - Improved Customer Satisfaction | 41 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [b99a7676-5264-49e5-a38e-12cc55becf3a] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/422 |
| 640f338e-6d8f-40c5-b4a9-dee63f794d89 | null | null | true | Production Part Approval Process (PPAP) | 35 - Production Part Approval Process (PPAP) | 35 | Quality Control [bdff9983-3d0d-45d4-9534-bfcf7142cffd] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [69087b9b-290d-4f05-945d-91d46719b297] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/423 |
| e2b7ee07-126d-4a29-b68c-c1346955f5f5 | null | null | true | Review Material Specifications. | 15 - Review Material Specifications. | 15 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [3361f9a6-f66b-4d81-99be-e5aadb012a4e] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/424 |
| 1270aa56-9ad6-477c-9432-0f8c97367329 | null | null | true | Review and complete the Gateway approval. | 7 - Review and complete the Gateway approval. | 7 | Process Owner [889717f1-2f57-4903-bd87-c40e96fe0c01] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | 99 [ed23cee6-c499-4595-86b1-27a66882e26d] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/435 |
| c29216cd-d698-4c30-b0be-36a33b95f128 | null | null | true | Ensure Reliability and Quality Goals are established. | 2 - Ensure Reliability and Quality Goals are establ... | 2 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [9b69f5b1-0867-470a-9119-535db92ba96b] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/441 |
| 7fee8a33-a076-4d68-9a6b-5bbec70cc78a | null | null | true | Complete Prototype Control Plan. | 12 - Complete Prototype Control Plan. | 12 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [56225a2d-af4c-4dfd-9c2e-3107014f355d] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/443 |
| 3d419104-3680-440b-946f-db31bb37e4c1 | null | null | true | Review Engineering Specifications. | 14 - Review Engineering Specifications. | 14 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [a51e3ac3-8619-469e-a876-8372d6ae4440] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/445 |
| d7f89c74-7640-4d63-8dfa-2fb4f5cc5e07 | null | null | true | Complete Design Review to verify activities. | 11 - Complete Design Review to verify activities. | 11 | Engineering [a5d3512a-3558-4d58-b082-678ef5ed7b73] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [678c1196-96af-4728-a47a-a9939d26090b] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/448 |
| 80342c49-84e4-411d-9b95-b78249821646 | null | null | true | Complete Process Instructions for SOPs. | 28 - Complete Process Instructions for SOPs. | 28 | Quality Assurance [d50bd6b3-8532-43dd-8142-e26404d93edf] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [c6ca37c9-c994-48f5-8411-7538b8b93c48] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/458 |
| 0cbdddd6-4a91-492b-bb9f-f1464cabb1af | null | null | true | Improved Delivery Performance | 42 - Improved Delivery Performance | 42 | Manufacturing [20388020-8033-4066-8d14-1dcb953033ca] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [15552a67-80cc-4b92-b5fd-07425bfd54fe] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/471 |
| 20ef4d75-6658-4989-9c02-8add84b3402a | null | null | true | Production Control Plan | 38 - Production Control Plan | 38 | Manufacturing [20388020-8033-4066-8d14-1dcb953033ca] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [b49b0e90-aa54-4bc0-90dc-5083452c2223] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/475 |
| 7b75a2ec-d20f-4f93-9cf3-c148b9e00444 | null | null | true | Complete the Product Assurance Plan to ensure design goals have been translated into requirements. | 6 - Complete the Product Assurance Plan to ensure d... | 6 | Manufacturing [20388020-8033-4066-8d14-1dcb953033ca] | Task [c06d8c67-cf4e-4b75-8f54-ad108c72951b] | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | Project/Task [aee195c4-7380-4903-b46b-80ec2c0e3762] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/483 |


## 9 Checklist Definition

**Internal name:** `ProjectFwk_ChecklistDefObject`. **Stable metadata ID:** `624352bd-22c9-4d08-962e-a4d947af6a4c`. **Classification:** Extracted record metadata.

**Inheritance parent:** ProjectFwk_ProjectTaskDefObject.

**Directly declared fields:** 2 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/198`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Checklist | M:1 to Checklist (CLF_ChecklistObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | FilterExpression: full expression in field-expressions.md [F deaae573-7d74-4ac4-a4a1-a55fc0754f7b FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Checklist; field ID deaae573-7d74-4ac4-a4a1-a55fc0754f7b |
| Checklist Type | M:1 to Checklist Type (ProjectFwk_ChecklistTypeObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ChecklistType; field ID 285f6b8a-843a-48ba-96e5-628e268e806f |


## 10 Project/Task

**Internal name:** `ProjectFwk_PFWKProjectTaskObject`. **Stable metadata ID:** `2a0d9417-a635-4c5f-b6e0-29b39b4c5b66`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 10 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/146`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Gate | M:1 to Phase (ProjectFwk_PhaseObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Assign Gate on Mass Update; internal GateMassHelper; field ID 5e972763-8526-42b3-9481-4bc5387e6af7 |
| [Helper] Project Task to Create | M:1 to Project Task (ProjectFwk_ProjectTaskObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: [Listener] Create Tasks; internal HelpProjTask; field ID a761db79-f722-4c8a-ac45-258481c6cbc1 |
| [Helper] Project Being Updated | M:1 to Project Abstract (ProjectFwk_ProjectAbstractObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: [Listener] Create Tasks; internal HelpProjUp; field ID 2270e7af-f3f5-4e6e-9e24-598f609a67e4 |
| [Helper] Project Being Updated Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Set Phase Field &amp; Task Creation; internal HelpProjUpId; field ID 532dc543-91c0-4f2a-b8b9-2308489b9ace |
| Id | Guid (uniqueidentifier); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Logical identity metadata; generation mechanism not exported; internal Id; field ID 787623bf-70f8-4318-9da9-cb4b375b8586 |
| Order | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Order; field ID 74105ba2-d9dd-4096-b657-cf8ccd2c856c |
| Phase | M:1 to Phase (ProjectFwk_PhaseObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | FilterExpression: full expression in field-expressions.md [F 6d49ba21-e617-4eb7-9bf0-dd1327e663f1 FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Assign Gate on Mass Update; internal Phase; field ID 6d49ba21-e617-4eb7-9bf0-dd1327e663f1 |
| Phase Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PhaseId; field ID a12c7a69-45a5-4c78-acb5-3cb0c087611a |
| Project Template | M:1 to Project Template (ProjectFwk_PFWKTemplateObject); many → 0..1; reverse ProjectTasks; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjectTemplate; field ID 599ba86a-a049-4e33-8c44-f39798983d33 |
| Project Task Definition | M:1 to Project Task Definition (ProjectFwk_ProjectTaskDefObject); many → 1; reverse ProjectTask; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | FilterExpression: full expression in field-expressions.md [F 50a40716-6b0f-440d-ba9a-f029a8ba09ef FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjTaskDefObj; field ID 50a40716-6b0f-440d-ba9a-f029a8ba09ef |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Order | HelpProjUp | GateMassHelper | HelpProjTask | ProjectTemplate | ProjTaskDefObj | Phase | Evidence |
|---|---|---|---|---|---|---|---|---|
| 752be2f2-5250-4af1-869a-7f63977c59fd | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 46 - Attach Customer Engineering Approval. [85335f70-5615-4bc4-b721-5d663d98cc0c] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/881; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/26 |
| c4a23308-a60a-47ea-b18e-57184cbacaa6 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 3 - Complete the Preliminary Bill of Material (BOM)... [d0a8f788-19e2-472b-aae4-03f6baa98fa1] | Plan &amp; Define [e2654a55-0631-42e8-8573-b77d145078ea] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/425; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/34 |
| ed23cee6-c499-4595-86b1-27a66882e26d | 99 | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 7 - Review and complete the Gateway approval. [1270aa56-9ad6-477c-9432-0f8c97367329] | Plan &amp; Define [e2654a55-0631-42e8-8573-b77d145078ea] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/465; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/35 |
| 8d0b23a8-013f-4513-8b1a-b5d46034adad | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 16 - Ensure Change Control for Drawings is happening. [149b5284-6364-4ffa-8e3a-f6d7fb5cdc5e] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/685; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/36 |
| c6ca37c9-c994-48f5-8411-7538b8b93c48 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 28 - Complete Process Instructions for SOPs. [80342c49-84e4-411d-9b95-b78249821646] | Process Design &amp; Development [55f969fc-6f05-4dc2-b2bf-17c5ed25b94a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/731; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/37 |
| 2b9cebf1-a84a-4e6f-8e03-4d66a9ed4b09 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 1 - Ensure Design Goals are identified and measurable. [1f5a90d0-9850-469b-b756-943310aad938] | Plan &amp; Define [e2654a55-0631-42e8-8573-b77d145078ea] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/876; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/38 |
| 0afae04a-4958-48b5-8c18-5d4c5693b3ac | 99 | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 31 - Gateway approval [1793c1e4-995f-4384-8b4d-822099d5876e] | Process Design &amp; Development [55f969fc-6f05-4dc2-b2bf-17c5ed25b94a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/966; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/39 |
| 88dbe57f-ef3b-4e59-8efb-a08c21e3b02d | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 8 - Complete Design FMEA (DFMEA). [42d55309-acf4-4184-a6ff-c6fbc99e44fb] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/927; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/41 |
| a51e3ac3-8619-469e-a876-8372d6ae4440 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 14 - Review Engineering Specifications. [3d419104-3680-440b-946f-db31bb37e4c1] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/884; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/42 |
| d613c739-14ec-4bda-b87c-4211ddc65f56 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 40 - Reduced Variation [291251b9-0046-4de0-a893-e5d50f1af53e] | Feedback Assessment &amp; Corrective Action [1efd3b1f-ac46-4ad1-8db3-41b53c027ada] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/56; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/43 |
| 383682ac-e275-45c1-93b1-fd6884ab6f15 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 5 - Identify the Preliminary list of Special Charac... [35514dff-df76-4347-9252-604845487c2a] | Plan &amp; Define [e2654a55-0631-42e8-8573-b77d145078ea] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/976; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/44 |
| b49b0e90-aa54-4bc0-90dc-5083452c2223 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 38 - Production Control Plan [20ef4d75-6658-4989-9c02-8add84b3402a] | Product &amp; Process Validation [dc417e1e-0eff-440a-bd00-da10294b21db] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/803; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/45 |
| ab9063f6-398e-4644-acd0-8cc15ac07d44 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 33 - MSA Results [d6603387-be88-42df-9986-0a1ff84da095] | Product &amp; Process Validation [dc417e1e-0eff-440a-bd00-da10294b21db] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/120; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/46 |
| 74cf557d-7a2a-4063-aeb6-2aeefcc5ef99 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 32 - Significant Production Run [6667c6a3-7e8a-4dd2-b734-26121f76c9ce] | Product &amp; Process Validation [dc417e1e-0eff-440a-bd00-da10294b21db] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/968; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/47 |
| 67f4f8f1-ef0c-461c-b477-938f98637854 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 25 - Complete a Characteristics Matrix to display re... [2098e0a5-d385-4916-a56a-3f429f676306] | Process Design &amp; Development [55f969fc-6f05-4dc2-b2bf-17c5ed25b94a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/965; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/48 |
| 67d556d4-9cfb-4979-9c9e-10af6443439e | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 21 - Ensure all Packaging Standards and Specificatio... [6990d5e3-6d1a-420e-9388-8c5fafc6f4d0] | Process Design &amp; Development [55f969fc-6f05-4dc2-b2bf-17c5ed25b94a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/819; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/49 |
| dbeae902-0d17-482d-9a7b-aa6edd7697a3 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 34 - Process Capability Studies [0fd4e5ec-df1d-4c58-a633-6c723f158776] | Product &amp; Process Validation [dc417e1e-0eff-440a-bd00-da10294b21db] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/982; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/50 |
| 15552a67-80cc-4b92-b5fd-07425bfd54fe | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 42 - Improved Delivery Performance [0cbdddd6-4a91-492b-bb9f-f1464cabb1af] | Feedback Assessment &amp; Corrective Action [1efd3b1f-ac46-4ad1-8db3-41b53c027ada] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/855; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/51 |
| 678c1196-96af-4728-a47a-a9939d26090b | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 11 - Complete Design Review to verify activities. [d7f89c74-7640-4d63-8dfa-2fb4f5cc5e07] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/406; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/52 |
| 1a5cf867-0437-426c-91c5-d69212d68602 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 30 - Preliminary process capability plan [221c8033-ac86-4bd2-ab4b-523b1e240a27] | Process Design &amp; Development [55f969fc-6f05-4dc2-b2bf-17c5ed25b94a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/563; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/53 |
| 51ee9f15-7b9a-4100-b225-f1a891becd1c | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 4 - Complete a Preliminary Process Flow based on BO... [1291db6e-7eb8-430b-8f81-fe898497f248] | Plan &amp; Define [e2654a55-0631-42e8-8573-b77d145078ea] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/602; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/54 |
| d0838ff7-cd2f-4a7f-ba92-20186a847d8c | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 22 - Complete a Quality System Review to determine i... [e7eb9134-38b8-4439-b0e4-4389805a0b8f] | Process Design &amp; Development [55f969fc-6f05-4dc2-b2bf-17c5ed25b94a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/961; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/55 |
| de4e972a-6844-476a-a9af-50a554219009 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 9 - Complete Design for Manufacturing and Assembly ... [237a8a01-4fa9-43e4-8b74-382d9c7383a0] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/140; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/56 |
| deafe7ab-67f1-49cc-bf3a-eb051ccdd9f9 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 37 - Packaging Evaluation [c19e1947-6653-4eae-93e4-4af334837a90] | Product &amp; Process Validation [dc417e1e-0eff-440a-bd00-da10294b21db] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/672; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/57 |
| aee195c4-7380-4903-b46b-80ec2c0e3762 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 6 - Complete the Product Assurance Plan to ensure d... [7b75a2ec-d20f-4f93-9cf3-c148b9e00444] | Plan &amp; Define [e2654a55-0631-42e8-8573-b77d145078ea] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/558; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/58 |
| 69087b9b-290d-4f05-945d-91d46719b297 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 35 - Production Part Approval Process (PPAP) [640f338e-6d8f-40c5-b4a9-dee63f794d89] | Product &amp; Process Validation [dc417e1e-0eff-440a-bd00-da10294b21db] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/988; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/59 |
| d2c7a3bc-5385-49f1-b573-87096ba58ff3 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 27 - Complete Pre-Launch Control Plan. [52454de7-09ba-47a7-a4aa-8eca66ebdeb7] | Process Design &amp; Development [55f969fc-6f05-4dc2-b2bf-17c5ed25b94a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/911; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/60 |
| b99a7676-5264-49e5-a38e-12cc55becf3a | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 41 - Improved Customer Satisfaction [1aeeef2d-72ea-4e2c-b26e-106dcf60c0da] | Feedback Assessment &amp; Corrective Action [1efd3b1f-ac46-4ad1-8db3-41b53c027ada] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/132; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/61 |
| a5ce6c7d-e0f2-443f-934f-beedec4eb3ad | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 26 - Complete Process FMEA (PFMEA). [b496f778-cee4-4f02-a656-c9b8377fc931] | Process Design &amp; Development [55f969fc-6f05-4dc2-b2bf-17c5ed25b94a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/985; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/62 |
| 8dda9f7e-446c-463d-a9f3-d57aafcec110 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 19 - Identify Gages / Testing Equipment Requirements... [59374e18-b587-46d8-8bbc-bc3ad9bb95dd] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/263; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/63 |
| 56225a2d-af4c-4dfd-9c2e-3107014f355d | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 12 - Complete Prototype Control Plan. [7fee8a33-a076-4d68-9a6b-5bbec70cc78a] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/665; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/64 |
| 60bcbfb1-b1d7-43bf-b5fb-7b8b386c0d62 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 10 - Complete Design Verification. [803d9425-31a1-4b6b-856f-1454fb7ee6d7] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/398; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/65 |
| 7e4ba6c5-71cf-434b-ad3d-d5ec1df9c481 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 13 - Review Engineering Drawings and Math Data. [be93524a-b19d-442c-b70f-d395a816521d] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/675; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/66 |
| 9b69f5b1-0867-470a-9119-535db92ba96b | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 2 - Ensure Reliability and Quality Goals are establ... [c29216cd-d698-4c30-b0be-36a33b95f128] | Plan &amp; Define [e2654a55-0631-42e8-8573-b77d145078ea] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/979; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/67 |
| 6c23ec83-c395-447f-91ee-fe66340e5d93 | 99 | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 20 - Assess Team Feasibility Commitment and review p... [8cb9362f-93ef-4b26-98aa-8dde5bf8d0c3] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/820; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/68 |
| c55939f1-32a5-4e84-a73d-56a878f73e5e | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 17 - Review New Equipment, Tooling and Facilities Re... [80c699c6-a078-4904-96ee-647c42577cd7] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/912; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/69 |
| 42cd34bc-ef9a-4b18-962c-a9bcf50dd7e4 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 23 - Complete a Process Flow Chart to assist with co... [9bd4a019-36aa-41b2-b84a-a46191604b15] | Process Design &amp; Development [55f969fc-6f05-4dc2-b2bf-17c5ed25b94a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/684; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/70 |
| 8deeef53-899f-49f7-9aa5-d7c74bab0f42 | 99 | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 39 - Quality Planning Sign-Off and Gateway approval [9f2c0e73-fc36-447a-8e62-cb754f603b6e] | Product &amp; Process Validation [dc417e1e-0eff-440a-bd00-da10294b21db] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/874; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/71 |
| 6bbbface-5b6a-42b7-94f8-d4065ef378ad | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 43 - Effective Use of Lessons Learned [5151caa4-271f-4861-8db3-abdc4ed1f34d] | Feedback Assessment &amp; Corrective Action [1efd3b1f-ac46-4ad1-8db3-41b53c027ada] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/585; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/72 |
| 313e34bd-fdff-401f-b8d9-f2f272a09f5a | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 29 - Measurement Systems Analysis (MSA) Plan [4f9b66ed-4fb5-4946-b68f-4addd2e5b492] | Process Design &amp; Development [55f969fc-6f05-4dc2-b2bf-17c5ed25b94a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/937; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/73 |
| 55a18bb5-631a-4df2-aa3d-b0713820aeb5 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 24 - Complete Floor Plan Layout to facilitate synchr... [eed360a9-007e-4adb-b17c-47053a9f1797] | Process Design &amp; Development [55f969fc-6f05-4dc2-b2bf-17c5ed25b94a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/857; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/74 |
| 3361f9a6-f66b-4d81-99be-e5aadb012a4e | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 15 - Review Material Specifications. [e2b7ee07-126d-4a29-b68c-c1346955f5f5] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/277; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/75 |
| cf0ccb02-4ee6-4bf1-becc-3f505fa36df4 | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 18 - Ensure Special Product and Process Characterist... [14334a39-24ff-4488-9707-719aab026906] | Product Design &amp; Development [c77b0f50-4ace-47b5-bede-fffaca3da42d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/125; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/76 |
| 19a6e7c0-776a-4e54-b636-e44066f2b39e | null | null | null | null | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | 36 - Production Validation Testing [f7b14f8a-0825-408e-892f-68f4810723ab] | Product &amp; Process Validation [dc417e1e-0eff-440a-bd00-da10294b21db] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/180; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/77 |
| 655b99be-d38e-40c1-bfe2-7ea7b8a9a974 | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 52 - Attach Dimensional Results. [ea925482-8ad6-4b2c-82fb-86a52835fdd1] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/395; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/83 |
| 820212e6-e654-4d7e-8f65-72a150751c56 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 48 - Attach Process Flow Diagram. [41c5300a-a634-4766-a087-8e790b3dc88b] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/402; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/105 |
| 7280ecab-e622-4f2a-9520-c145db22bcfe | 99 | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 61 - Complete Part Submission Warrant (PSW). [2aa4ce58-eea4-47f4-bfe2-2621e229fb4d] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/656; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/109 |
| b3262bb4-45a8-45e9-a862-510b5490bf97 | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 46 - Attach Customer Engineering Approval. [85335f70-5615-4bc4-b721-5d663d98cc0c] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/667; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/118 |
| 0398be94-1c65-4392-ae85-5ce69524a2d2 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 58 - Ensure Master Sample is ready for shipment. [c2f8f2a3-ff26-4866-b234-562c4da026d4] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/967; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/121 |
| 43f37219-ad00-47b7-a92f-bcd223af7ba0 | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 53 - Attach Records of Material / Performance Tests. [f88dfa11-3d19-4572-b84f-c759b5999802] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/950; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/158 |
| d7faca2d-1d5a-4125-b3b9-db6ee21e8c2c | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 47 - Attach DFMEA. [7c0599df-9752-418f-baa5-54ce70d2894d] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/716; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/170 |
| c139d0f8-8560-4698-bd5d-21be3e1753ad | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 49 - Attach PFMEA. [9ed55736-2473-4356-8c25-0ca814e66b67] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/992; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/183 |
| 96f70b7b-4121-4121-84d4-0c141d57d747 | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 50 - Attach Control Plan. [42bc845a-80ca-47b9-880b-dab8ed369f67] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/671; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/200 |
| 3d5e11fb-07fd-4608-8a53-2b3f4dad522c | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 60 - Attach Customer Specific Requirements. [6cbd42f2-71b9-48e2-8b81-573f7cbcb287] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/752; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/207 |
| c00cc6a1-9c65-40c8-8843-980607a11601 | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 51 - Attach Measurement Systems Analysis (MSA). [7a731d91-98eb-4609-9395-c4a5fc35c094] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/732; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/212 |
| 76fc5ea4-79d9-4588-976a-ea0942eceaf2 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 44 - Complete and attach Design Documentation. [9fc38032-3f82-432c-834c-089a61b30c70] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/832; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/214 |
| 67836074-ed15-4df1-8a1e-6772750c3008 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 57 - Ensure Sample Production Parts are ready for sh... [bbba6e51-320c-4f82-84b7-dddffa05025e] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/946; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/215 |
| e03f8719-e03c-4025-8c64-bdb199085ecc | 99 | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 61 - Complete Part Submission Warrant (PSW). [2aa4ce58-eea4-47f4-bfe2-2621e229fb4d] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/432; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/216 |
| f6d4f620-47cb-4cb5-8a24-5368c480a0ed | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 59 - Attach Checking Aids. [a29a4503-3160-400b-a11f-c0dbb9bd4380] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/340; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/217 |
| 2387fc51-da23-4d78-9d85-b47afb225219 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 60 - Attach Customer Specific Requirements. [6cbd42f2-71b9-48e2-8b81-573f7cbcb287] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/858; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/218 |
| f5bf0372-f615-4c98-8d19-1260e21ec895 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 51 - Attach Measurement Systems Analysis (MSA). [7a731d91-98eb-4609-9395-c4a5fc35c094] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/991; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/219 |
| bbb499f1-85c3-4f06-addf-e5475b990964 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 53 - Attach Records of Material / Performance Tests. [f88dfa11-3d19-4572-b84f-c759b5999802] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/234; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/220 |
| d33123da-3348-4ce5-9269-0952cadc10b6 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 55 - Attach Qualified Lab Documentation. [501c7969-967a-4ed6-bb3b-7fedc063328f] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/333; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/222 |
| 82f0e55f-0122-4c2a-a298-d0da34ce63c0 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 56 - Attach Appearance Approval Report. [ea797412-82ce-4c80-bdf7-30e493a33920] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/663; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/223 |
| a4c7c125-43e9-4a32-855c-888a124122ca | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 58 - Ensure Master Sample is ready for shipment. [c2f8f2a3-ff26-4866-b234-562c4da026d4] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/596; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/224 |
| 21007458-f927-49f3-bccf-ae2275f31e63 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 52 - Attach Dimensional Results. [ea925482-8ad6-4b2c-82fb-86a52835fdd1] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/825; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/225 |
| 9e96dbd0-a794-40c2-96c4-7bb1948c796a | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 46 - Attach Customer Engineering Approval. [85335f70-5615-4bc4-b721-5d663d98cc0c] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/994; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/226 |
| 015957b9-504a-4af7-bb3c-7dcd919fa65f | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 54 - Attach Initial Process Studies. [8342481b-21af-439d-a26d-dd406ad97c66] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/501; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/227 |
| 2d11984d-5d24-468e-8f48-9e50973e97b2 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 50 - Attach Control Plan. [42bc845a-80ca-47b9-880b-dab8ed369f67] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/648; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/228 |
| 0519258c-7f78-4f35-82ef-1873190f1937 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 47 - Attach DFMEA. [7c0599df-9752-418f-baa5-54ce70d2894d] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/159; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/229 |
| 530306e7-eb6e-43b7-b9fc-38fdb8243004 | null | null | null | null | Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb] | 45 - Attach Engineering Change Documentation. [51f24dd0-4a62-431e-9054-8ba71dfffb89] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/70; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/230 |
| fc41e528-5ab6-47a5-aa53-973fd45110d6 | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 58 - Ensure Master Sample is ready for shipment. [c2f8f2a3-ff26-4866-b234-562c4da026d4] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/269; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/235 |
| d006d2bb-ea6e-4e4a-8bc8-131b8f549f72 | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 58 - Ensure Master Sample is ready for shipment. [c2f8f2a3-ff26-4866-b234-562c4da026d4] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/910; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/236 |
| 8dba694c-acef-47a6-950a-bb00d243bb0c | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 58 - Ensure Master Sample is ready for shipment. [c2f8f2a3-ff26-4866-b234-562c4da026d4] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/660; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/237 |
| 06863465-ab66-4a07-8c1c-fc274c781066 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 46 - Attach Customer Engineering Approval. [85335f70-5615-4bc4-b721-5d663d98cc0c] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/458; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/243 |
| 9ca8f966-d2bc-48c0-a5fe-0558f4e568ed | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 51 - Attach Measurement Systems Analysis (MSA). [7a731d91-98eb-4609-9395-c4a5fc35c094] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/751; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/244 |
| 86211de4-dd79-406c-b4a6-03590df80c12 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 45 - Attach Engineering Change Documentation. [51f24dd0-4a62-431e-9054-8ba71dfffb89] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/11; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/245 |
| b3412b6e-4b43-4348-9b01-abaaa7e9e163 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 52 - Attach Dimensional Results. [ea925482-8ad6-4b2c-82fb-86a52835fdd1] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/430; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/246 |
| d1af7f3b-c87a-4ef6-bde3-7fd2b46c2476 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 44 - Complete and attach Design Documentation. [9fc38032-3f82-432c-834c-089a61b30c70] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/76; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/247 |
| edfa987b-ad6a-41a6-a8cc-1475cf51be0e | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 59 - Attach Checking Aids. [a29a4503-3160-400b-a11f-c0dbb9bd4380] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/887; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/248 |
| 1ac92a30-3028-43e4-bdfb-b14012f8a531 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 60 - Attach Customer Specific Requirements. [6cbd42f2-71b9-48e2-8b81-573f7cbcb287] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/692; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/249 |
| 5d1f8e02-5b2f-404f-aa98-935d021c95b5 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 55 - Attach Qualified Lab Documentation. [501c7969-967a-4ed6-bb3b-7fedc063328f] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/440; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/250 |
| 5d1d6da2-cc21-4e4a-9cb2-383f20b36b89 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 56 - Attach Appearance Approval Report. [ea797412-82ce-4c80-bdf7-30e493a33920] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/282; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/251 |
| 1c3e1011-bd65-4eb6-8a58-2362d1ab4282 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 53 - Attach Records of Material / Performance Tests. [f88dfa11-3d19-4572-b84f-c759b5999802] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/296; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/252 |
| d52951a1-b9eb-46c2-b5e5-4a41311822c9 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 54 - Attach Initial Process Studies. [8342481b-21af-439d-a26d-dd406ad97c66] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/467; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/253 |
| 739fd278-a7cd-4bd3-9e1e-df62c97b2883 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 48 - Attach Process Flow Diagram. [41c5300a-a634-4766-a087-8e790b3dc88b] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/807; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/254 |
| 06fe00a5-25ff-43c9-b363-f001750e0c4e | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 57 - Ensure Sample Production Parts are ready for sh... [bbba6e51-320c-4f82-84b7-dddffa05025e] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/613; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/255 |
| 972a6a2e-5aa6-431d-bdc4-405e9531e2d0 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 49 - Attach PFMEA. [9ed55736-2473-4356-8c25-0ca814e66b67] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/604; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/256 |
| 22604117-86b7-4d5c-a1cf-88f2fc14ced0 | null | null | null | null | Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | 50 - Attach Control Plan. [42bc845a-80ca-47b9-880b-dab8ed369f67] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/922; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/257 |
| 5e27e886-000d-4638-957c-039ab9be2524 | 99 | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 61 - Complete Part Submission Warrant (PSW). [2aa4ce58-eea4-47f4-bfe2-2621e229fb4d] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/492; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/262 |
| 7f1db540-4d50-4ea8-9c74-79e9c361c86f | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 60 - Attach Customer Specific Requirements. [6cbd42f2-71b9-48e2-8b81-573f7cbcb287] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/471; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/271 |
| 200f9185-321a-4e56-9176-5e9e74fe201a | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 48 - Attach Process Flow Diagram. [41c5300a-a634-4766-a087-8e790b3dc88b] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/498; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/272 |
| a0e78eeb-8030-4c62-88c4-549bd9362e2e | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 46 - Attach Customer Engineering Approval. [85335f70-5615-4bc4-b721-5d663d98cc0c] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/869; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/273 |
| b4fdfc10-dd0e-40ed-917a-c692eae28e41 | 99 | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 61 - Complete Part Submission Warrant (PSW). [2aa4ce58-eea4-47f4-bfe2-2621e229fb4d] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/971; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/274 |
| ac6ebab2-50fa-46cd-bece-a2aa4ff31f70 | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 53 - Attach Records of Material / Performance Tests. [f88dfa11-3d19-4572-b84f-c759b5999802] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/609; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/275 |
| 50e59b7a-c45a-4b3d-b47b-aa9692a851a7 | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 59 - Attach Checking Aids. [a29a4503-3160-400b-a11f-c0dbb9bd4380] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/784; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/276 |
| eb0d78a8-7325-4122-a691-3d8216d3f09d | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 54 - Attach Initial Process Studies. [8342481b-21af-439d-a26d-dd406ad97c66] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/800; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/277 |
| 85f562a7-dd6d-447a-9082-237093fc256c | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 57 - Ensure Sample Production Parts are ready for sh... [bbba6e51-320c-4f82-84b7-dddffa05025e] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/203; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/278 |
| 98e9ea72-012b-444b-b08a-7ebf1f1e07ef | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 47 - Attach DFMEA. [7c0599df-9752-418f-baa5-54ce70d2894d] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/871; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/279 |
| 494a8d5e-f00c-4e88-97f4-248a3fb8468a | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 52 - Attach Dimensional Results. [ea925482-8ad6-4b2c-82fb-86a52835fdd1] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/777; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/280 |
| bedf00a5-7a94-40cf-8102-cd2e8d6be985 | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 51 - Attach Measurement Systems Analysis (MSA). [7a731d91-98eb-4609-9395-c4a5fc35c094] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/885; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/281 |
| 22f8a6a5-76a0-4dc7-802d-59907d0b3016 | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 56 - Attach Appearance Approval Report. [ea797412-82ce-4c80-bdf7-30e493a33920] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/642; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/282 |
| c79bc1f6-21c5-403f-bef1-b29eda45575d | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 50 - Attach Control Plan. [42bc845a-80ca-47b9-880b-dab8ed369f67] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/786; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/283 |
| 62f21e81-e3a1-4cfc-83aa-84e600d352a0 | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 44 - Complete and attach Design Documentation. [9fc38032-3f82-432c-834c-089a61b30c70] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/957; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/284 |
| 980501ab-ce55-4f82-8ff1-55714b365912 | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 55 - Attach Qualified Lab Documentation. [501c7969-967a-4ed6-bb3b-7fedc063328f] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/513; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/285 |
| c5f35c05-0996-4605-a60e-fa517e77587a | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 49 - Attach PFMEA. [9ed55736-2473-4356-8c25-0ca814e66b67] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/408; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/286 |
| 696970cc-d6b3-4995-9fcf-b223b5b7b0a6 | null | null | null | null | Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb] | 45 - Attach Engineering Change Documentation. [51f24dd0-4a62-431e-9054-8ba71dfffb89] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/782; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/287 |
| 0a278b58-69ff-484a-95c1-787fb20a79a0 | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 54 - Attach Initial Process Studies. [8342481b-21af-439d-a26d-dd406ad97c66] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/724; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/292 |
| 67f48cfb-6fc3-468a-ad49-c8fd3720ee87 | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 47 - Attach DFMEA. [7c0599df-9752-418f-baa5-54ce70d2894d] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/742; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/302 |
| f658253e-5b58-4501-b5cd-41f959f6bca3 | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 51 - Attach Measurement Systems Analysis (MSA). [7a731d91-98eb-4609-9395-c4a5fc35c094] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/791; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/303 |
| 600d48b1-6a44-4814-ad95-fd4d48f59fb8 | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 54 - Attach Initial Process Studies. [8342481b-21af-439d-a26d-dd406ad97c66] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/893; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/309 |
| 71ce6b6c-e89c-4b83-93b9-e4fba280378c | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 48 - Attach Process Flow Diagram. [41c5300a-a634-4766-a087-8e790b3dc88b] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/818; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/315 |
| 1880f007-c8f8-4099-a080-aa153aacbf9b | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 49 - Attach PFMEA. [9ed55736-2473-4356-8c25-0ca814e66b67] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/917; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/346 |
| 742e0d0d-59d5-47a3-a5d0-01d0efe828c3 | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 49 - Attach PFMEA. [9ed55736-2473-4356-8c25-0ca814e66b67] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/29; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/347 |
| 4ba5e979-a436-47b6-af27-f4b38032bd9c | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 57 - Ensure Sample Production Parts are ready for sh... [bbba6e51-320c-4f82-84b7-dddffa05025e] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/276; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/353 |
| 0083be19-7a3b-4635-9089-b16a5b96334b | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 47 - Attach DFMEA. [7c0599df-9752-418f-baa5-54ce70d2894d] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/839; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/370 |
| 76b2999f-6dc7-4132-8d89-b5bcae56d488 | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 56 - Attach Appearance Approval Report. [ea797412-82ce-4c80-bdf7-30e493a33920] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/71; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/383 |
| cd5b53b7-55c9-466d-962a-9b535f0316b0 | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 50 - Attach Control Plan. [42bc845a-80ca-47b9-880b-dab8ed369f67] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/958; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/388 |
| 850d0439-f03e-4fb4-9146-0daf83f0cc4a | 99 | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 61 - Complete Part Submission Warrant (PSW). [2aa4ce58-eea4-47f4-bfe2-2621e229fb4d] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/284; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/394 |
| 817b44b6-58e8-46bf-984e-82e2fd049882 | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 59 - Attach Checking Aids. [a29a4503-3160-400b-a11f-c0dbb9bd4380] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/986; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/402 |
| 870f3983-1eb7-49f4-a29b-682c3b03f147 | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 55 - Attach Qualified Lab Documentation. [501c7969-967a-4ed6-bb3b-7fedc063328f] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/275; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/403 |
| bfa9073f-d3b2-498d-b936-4ad0ba6b695b | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 45 - Attach Engineering Change Documentation. [51f24dd0-4a62-431e-9054-8ba71dfffb89] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/862; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/404 |
| 01508217-6d27-4ada-b749-70e6a5619561 | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 57 - Ensure Sample Production Parts are ready for sh... [bbba6e51-320c-4f82-84b7-dddffa05025e] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/240; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/405 |
| 3987407d-9560-48b1-b5c6-fda2b6779bcd | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 44 - Complete and attach Design Documentation. [9fc38032-3f82-432c-834c-089a61b30c70] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/852; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/406 |
| 07e605e8-2e6b-4d01-8b49-6536799f31ac | null | null | null | null | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4] | 56 - Attach Appearance Approval Report. [ea797412-82ce-4c80-bdf7-30e493a33920] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/27; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/407 |
| c8e0e5fa-7f29-41a3-a791-eee63a766f1e | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 55 - Attach Qualified Lab Documentation. [501c7969-967a-4ed6-bb3b-7fedc063328f] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/689; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/409 |
| e8f22c64-c2c7-4788-a5b3-280a536dc674 | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 48 - Attach Process Flow Diagram. [41c5300a-a634-4766-a087-8e790b3dc88b] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/909; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/412 |
| 556ec201-2660-4a14-9cf0-96913e3aec6b | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 59 - Attach Checking Aids. [a29a4503-3160-400b-a11f-c0dbb9bd4380] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/509; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/418 |
| 6f98288d-ea87-486d-913f-a0dd70c9857f | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 44 - Complete and attach Design Documentation. [9fc38032-3f82-432c-834c-089a61b30c70] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/632; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/438 |
| 150373a7-faab-46a4-9cad-a451792f3ed6 | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 45 - Attach Engineering Change Documentation. [51f24dd0-4a62-431e-9054-8ba71dfffb89] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/424; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/439 |
| 76de116b-b012-432a-85e7-3b19bdaa86d8 | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 52 - Attach Dimensional Results. [ea925482-8ad6-4b2c-82fb-86a52835fdd1] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/727; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/440 |
| 342db5f7-4080-4db2-8ad5-a9011349e60c | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 60 - Attach Customer Specific Requirements. [6cbd42f2-71b9-48e2-8b81-573f7cbcb287] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/925; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/478 |
| 14ca1875-0dc3-45ab-800c-c54ce459e319 | null | null | null | null | Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4] | 53 - Attach Records of Material / Performance Tests. [f88dfa11-3d19-4572-b84f-c759b5999802] | In Progress [64be0280-30b2-464c-8457-22e392a0167a] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/705; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/479 |


## 11 Project Template

**Internal name:** `ProjectFwk_PFWKTemplateObject`. **Stable metadata ID:** `3bb45500-fb17-4aeb-922e-df40d6166737`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 6 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/32`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Active | Yes/No (bit); max length unspecified | Y | DefaultValue: false [F b54ea28c-0990-440a-9329-418e988f10b5 DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal Active; field ID b54ea28c-0990-440a-9329-418e988f10b5 |
| Description | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Description provides additional detail or context to the project template.; internal Description; field ID 9fe03816-9cb1-424d-a7fe-47a7faff6948 |
| Project/Task | 1:M to Project/Task (ProjectFwk_PFWKProjectTaskObject); inverse collection; no new stored reference; reverse ProjectTemplate; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjectTasks; field ID 4687ece1-9e62-4f77-b739-1bbdf8e6daf5 |
| Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: This name is used when creating a template and also when selecting a template on record creation.; internal ProjectTempName; field ID 4f3c737b-464e-4699-9188-eae8e11c01cb |
| Project Type | M:1 to Project Type (ProjectFwk_ProjectTypeObject); many → 1; reverse Templates; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Identifies what type of record will be created when template is selected.; internal ProjectType; field ID 54ca8f64-7373-4ef6-a844-cf7391283134 |
| Record No. | Auto Number (AutoNumber); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal RecordNo; field ID e823c882-d41e-4873-b156-e6c23f085516 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Active | Description | ProjectTempName | RecordNo | ProjectTasks | ProjectType | Evidence |
|---|---|---|---|---|---|---|---|
| e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4 | true | Level 1 - Warrant only (and for designated appearance items, an Appearance Approval Report) submitted to customer. | Level 1 PPAP | 2 | Full value in seed-records.json | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/27 |
| ad77ca9d-0725-4561-9243-8e34826fbea4 | true | Standard APQP which includes all required tasks required for completion. | Standard APQP | 1 | Full value in seed-records.json | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/33 |
| 693867ef-2d58-43a6-a5f0-0c8cdab7f0eb | true | Level 5 - Warrant with product samples and complete supporting data reviewed at supplier's manufacturing location. | Level 5 PPAP | 6 | Full value in seed-records.json | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/107 |
| 7409a80a-0d57-4d3f-9c7e-bd7d62c9c810 | true | Level 2 - Warrant with product samples and limited supporting data submitted to customer. | Level 2 PPAP | 3 | Full value in seed-records.json | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/110 |
| c3357f3e-cc86-483c-ac02-01f82e4489e4 | true | Level 4 - Warrant and other requirements as defined by customer. | Level 4 PPAP | 5 | Full value in seed-records.json | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/119 |
| e8ef85b5-edc5-4c0f-a440-1aa5250076fb | true | Level 3 - Warrant with product samples and complete supporting data submitted to customer. | Level 3 PPAP | 4 | Full value in seed-records.json | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/270 |


## 12 Project Type

**Internal name:** `ProjectFwk_ProjectTypeObject`. **Stable metadata ID:** `fc3617e7-102b-4667-ae9d-ce95ca2eb673`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 6 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/31`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Id | Guid (uniqueidentifier); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Logical identity metadata; generation mechanism not exported; internal Id; field ID 271ba572-84b3-4bca-86f1-481a415dba76 |
| Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Name; field ID 2b1cc778-c156-4d43-a672-31b385329272 |
| Phases | 1:M to Phase (ProjectFwk_PhaseObject); inverse collection; no new stored reference; reverse ProjectType; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: List of phases within the project.; internal Phases; field ID 057c3f19-86fd-45ff-90aa-32df550cfc80 |
| Project System Name | Text (nvarchar); max length 200 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjeSystemName; field ID d2859e03-01ad-41b0-a778-2048153890c8 |
| Project Templates | 1:M to Project Template (ProjectFwk_PFWKTemplateObject); inverse collection; no new stored reference; reverse ProjectType; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Allows user to chose from project templates.; internal Templates; field ID 48df615e-8157-41c5-8028-b624ff14ef26 |
| Total Phase Weight | Percent (Percent); max length unspecified; precision=18, scale=2 | N | Calculation: SUM(Phases.WeightAssigned) [F a267768c-e643-4892-b226-c1aa92abcde2 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal TotPhaseWeight; field ID a267768c-e643-4892-b226-c1aa92abcde2 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Name | ProjeSystemName | TotPhaseWeight | Phases | Templates | Evidence |
|---|---|---|---|---|---|---|
| f467e500-49c1-4877-8b65-9a20492687f9 | APQP | APQP_APQPObject | 1 | Full value in seed-records.json | Standard APQP [ad77ca9d-0725-4561-9243-8e34826fbea4] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/40 |
| a6aa71e1-4202-4d7f-b583-caddd4c87188 | PPAP | APQP_PPAPAbstractObject | 1 | Interim Approval [edb7edce-692d-460c-8cdc-1c0e4ca3388e]; In Review [243e9bf3-5fda-4d60-a606-dea7f36d14d3]; In Progress [64be0280-30b2-464c-8457-22e392a0167a]; Draft [f62b46fd-ff5d-4d8c-ad75-c2379c6169e8] | Level 1 PPAP [e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4]; Level 5 PPAP [693867ef-2d58-43a6-a5f0-0c8cdab7f0eb]; Level 3 PPAP [e8ef85b5-edc5-4c0f-a440-1aa5250076fb]; Level 4 PPAP [c3357f3e-cc86-483c-ac02-01f82e4489e4]; Level 2 PPAP [7409a80a-0d57-4d3f-9c7e-bd7d62c9c810] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/221 |


## 13 Phase

**Internal name:** `ProjectFwk_PhaseObject`. **Stable metadata ID:** `c79c08a0-ab81-4d5a-ae09-e18fa92f7667`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 7 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/43`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Active | Yes/No (bit); max length unspecified | Y | DefaultValue: true [F 2c3fa19f-e2f4-44b1-bafb-0367bfb86867 DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Clear Product Design &amp; Development and dehactivate; description: An Inactive Phase will be hidden from Project Template.; internal Active; field ID 2c3fa19f-e2f4-44b1-bafb-0367bfb86867 |
| Is Skip Product Development (Helper) | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Update "Skip Product Design Gate" (Helper) on phases for APQP project type; internal DevelopmeHelper; field ID aaf0b21b-9cfb-4259-89c1-0c8ec1a04d02 |
| Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Name; field ID 8b81e48f-0dba-4d47-b37c-718552a36803 |
| Order | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | DefaultValue: MAX(ProjectType.Phases.Order)+1 [F 9a04e858-5931-4d74-9bb5-fa4f8b4a3a1c DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal Order; field ID 9a04e858-5931-4d74-9bb5-fa4f8b4a3a1c |
| Project Type | M:1 to Project Type (ProjectFwk_ProjectTypeObject); many → 1; reverse Phases; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjectType; field ID 7e9bf2c3-d33d-4a42-90ef-6be61087e0d6 |
| Weight Assigned | Percent (Percent); max length unspecified; precision=18, scale=0 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Clear Product Design &amp; Development and dehactivate; internal WeightAssigned; field ID c9b8496b-998c-46c3-a571-2374d5ffdba7 |
| WF Stage Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal WFStageName; field ID d263b54a-8cff-4c9f-a3c0-95cf52f15050 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Active | DevelopmeHelper | Name | Order | WeightAssigned | WFStageName | ProjectType | Evidence |
|---|---|---|---|---|---|---|---|---|
| 64be0280-30b2-464c-8457-22e392a0167a | true | null | In Progress | 2 | 0.85 | InProgress | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/873; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/29 |
| 55f969fc-6f05-4dc2-b2bf-17c5ed25b94a | true | false | Process Design &amp; Development | 4 | 0.25 | ThirdGate | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/610; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/81 |
| dc417e1e-0eff-440a-bd00-da10294b21db | true | false | Product &amp; Process Validation | 5 | 0.25 | FourthGate | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/156; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/152 |
| e2654a55-0631-42e8-8573-b77d145078ea | true | false | Plan &amp; Define | 1 | 0.2 | FirstGate | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/572; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/187 |
| c77b0f50-4ace-47b5-bede-fffaca3da42d | true | false | Product Design &amp; Development | 3 | 0.25 | SecondGate | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/204; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/259 |
| edb7edce-692d-460c-8cdc-1c0e4ca3388e | true | null | Interim Approval | 4 | 0.05 | InterimApproval | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/964; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/348 |
| 243e9bf3-5fda-4d60-a606-dea7f36d14d3 | true | null | In Review | 3 | 0.1 | InReview | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/210; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/349 |
| f62b46fd-ff5d-4d8c-ad75-c2379c6169e8 | false | null | Draft | 1 | 0 | Draft | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/133; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/350 |
| 7894a735-9a2f-4077-96d6-765fde91ca17 | false | false | Draft | 1 | 0 | Draft | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/323; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/357 |
| 1efd3b1f-ac46-4ad1-8db3-41b53c027ada | true | false | Feedback Assessment &amp; Corrective Action | 6 | 0.05 | FifthGate | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/261; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/358 |


## 14 Project Role

**Internal name:** `ProjectFwk_PFRoleObject`. **Stable metadata ID:** `48e91fff-ed6f-4c5a-bf94-767d3812a736`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 5 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/232`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Code | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Code; field ID b2937261-a929-47aa-9dce-b6196a9e696f |
| [Helper] Project ID | GUID (GUID); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Role Creation; Action Handler: [Listener] Create Project/Role/TeamMembers; internal HelperProjectID; field ID 19dd5ce0-995d-4557-a51c-6e3729273cae |
| [Helper] Project/Role/Team Member | M:1 to Project/Role/Team Member (ProjectFwk_ProjRoleTeMemObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: [Listener] Create Project/Role/TeamMembers; internal HelpProjRolMem; field ID 6760eec2-10be-4d35-944b-8ad12b6cad40 |
| Id | Guid (uniqueidentifier); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Logical identity metadata; generation mechanism not exported; internal Id; field ID d6cebce3-30da-4888-9981-6d0f9df1a343 |
| Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Identifies the role within a project.; internal Name; field ID 8dc751c8-bca8-40ba-bbcc-07565bcf384b |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | HelpProjRolMem | Code | HelperProjectID | Name | Evidence |
|---|---|---|---|---|---|
| a5d3512a-3558-4d58-b082-678ef5ed7b73 | null | R50 | null | Engineering | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/86; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/80 |
| d50bd6b3-8532-43dd-8142-e26404d93edf | null | R30 | null | Quality Assurance | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/682; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/124 |
| 20388020-8033-4066-8d14-1dcb953033ca | null | R60 | null | Manufacturing | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/914; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/154 |
| bdff9983-3d0d-45d4-9534-bfcf7142cffd | null | R40 | null | Quality Control | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/504; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/164 |
| 889717f1-2f57-4903-bd87-c40e96fe0c01 | null | R10 | null | Process Owner | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/611; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/333 |
| d9cd20c5-8191-411a-aa4d-2e956542de30 | null | R20 | null | Project Owner | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/328 |
| 4e53bb1a-3dfd-49e1-ba4d-f057ed9df2c1 | null | R70 | null | Supplier | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/427 |
| 53b26a17-1b79-4c3e-9c26-fa588715eb6e | null | R80 | null | Customer | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/886 |


## 15 Project/Role/Team Member

**Internal name:** `ProjectFwk_ProjRoleTeMemObject`. **Stable metadata ID:** `2fdbd4a1-fbd7-407e-b567-fba4093eb019`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 6 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/91`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Display Value | Text (nvarchar); max length unspecified | N | Calculation: CONCATENATE(Member.FullName, " (", ProjectRole.Name,")")  [F e4a91b64-b576-486a-ae33-2fcb48ddb022 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal DisplayValue; field ID e4a91b64-b576-486a-ae33-2fcb48ddb022 |
| Team Member | M:1 to Employee (SysEmployeeEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | FilterExpression: {"__type":"Expression","Operator":0,"Predicates":[{"__type":"BelongsToGroup","For":"ID","Negate":false,"GroupId":"55cd72fd-bc23-4488-83cb-abe55f84e5b8"}]} [F 4ed9437a-433d-46fc-b3a5-1113d9b91471 FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Member; field ID 4ed9437a-433d-46fc-b3a5-1113d9b91471 |
| Member Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal MemberId; field ID d8dc8b36-ed32-4a74-aef2-d4d40d444693 |
| Project | M:1 to Project Abstract (ProjectFwk_ProjectAbstractObject); many → 1; reverse ProjRoleTeamMem; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Project; field ID f171fbe0-26e9-4ae6-a3fe-2dc2bd933aba |
| Project Role | M:1 to Project Role (ProjectFwk_PFRoleObject); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjectRole; field ID ef33446f-a6c6-433f-b5e4-9971ceee1be9 |
| Project Tasks | 1:M to Project Task (ProjectFwk_ProjectTaskObject); inverse collection; no new stored reference; reverse PersResponsible; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjectTasks; field ID bb30e3d6-6ad4-4a2b-bbee-59cc4a3db86f |


## 16 Task Type

**Internal name:** `ProjectFwk_TaskTypeObject`. **Stable metadata ID:** `9a24f3cd-aca8-4b04-a3d4-0d0e85af0471`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/110`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Name; field ID 600fc6d0-9f77-4d99-bd4f-5cf2ff8d3e05 |
| Relation Name | Text (nvarchar); max length 200 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal RelationName; field ID 20db964e-758e-42fc-b632-30b7da6c2f3b |
| Table Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal TableName; field ID de7c8f29-3543-426a-974c-19c5accb49ac |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Name | RelationName | TableName | Evidence |
|---|---|---|---|---|
| c06d8c67-cf4e-4b75-8f54-ad108c72951b | Task | Def | ProjectFwk_TaskObject | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/844; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/79 |
| 05bcb6f1-fbfe-47d6-8405-c224a7aca861 | Checklist | Def | ProjectFwk_ChecklistObject | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/765 |


## 17 Type of Record

**Internal name:** `ProjectFwk_TypeofRecordObject`. **Stable metadata ID:** `d4fafc0f-1932-423c-a178-0b23a22c5bd0`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/322`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Name; field ID c6bfba73-d8dc-48dc-b601-8455b65317c5 |
| Object System Name | Text (nvarchar); max length 200 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ObjSystemName; field ID d26135db-28e8-47e5-9078-049fef3e6ca2 |
| Related Path | Text (nvarchar); max length 200 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal RelatedPath; field ID 34e0f1da-31a1-4770-b361-8c052a47c309 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Name | ObjSystemName | RelatedPath | Evidence |
|---|---|---|---|---|
| a003b6cf-3e85-405c-a76c-fa70855ac422 | PPAP | APQP_PPAPAbstractObject | ProjectFwk_TaskObject.PPAPs | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/476 |


## 18 APQP Settings

**Internal name:** `APQP_SettingsObject`. **Stable metadata ID:** `79918b70-a3d1-48a1-9708-80b2f8dfba92`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 14 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/38`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| APQP Caution Indicator | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Caution indicator applies yellow highlight to the grid view.  This indicates that the task or record is coming due for completion.; internal APQPCautioInd; field ID da2ec3e3-21e1-4b3b-8e21-c26716beb66a |
| APQP Project Type | M:1 to Project Type (ProjectFwk_ProjectTypeObject); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | DefaultValue: f467e500-49c1-4877-8b65-9a20492687f9 [F d11343ae-5ac5-46b9-a303-840b604f9056 DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal APQPProjectType; field ID d11343ae-5ac5-46b9-a303-840b604f9056 |
| APQP Task Caution Indicator | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Caution indicator applies yellow highlight to the grid view.  This indicates that the task or record is coming due for completion.; internal APQPTaskCaution; field ID 2d481e6d-fb38-4e9d-8cd6-f3be1795000d |
| CustomCSS | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Used for custom CSS in the APQP views.; internal CustomCSS; field ID b7aa15bb-da3c-4369-8b25-92e7ab15b092 |
| Enable CAR for APQP | Yes/No (bit); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Enables or disables Corrective Action Reporting for APQP.; internal EnableCAR; field ID e1ac2413-d383-4244-a16e-f87378542bb5 |
| Enable CAR | Yes/No (bit); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal EnableCARPPAP; field ID 9aa10715-fc5b-4e83-9087-e6d1b4a36755 |
| Show Task Grid on Draft | Yes/No (bit); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Option allows for the hiding of the Project Task on the Draft Stage.; internal HideTaskDraft; field ID d5a52e3d-c3ba-4ffc-9fe5-bc737655de14 |
| Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Name of the settings record "Default"; internal Name; field ID 0b4b772b-9cea-4dbe-8358-719e81eaa9ec |
| PPAP Caution Indicator | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Caution indicator applies yellow highlight to the grid view.  This indicates that the task or record is coming due for completion.; internal PPAPCautioInd; field ID d9a73a1d-006a-4536-b680-382a4f2e4558 |
| Show Task Grid on Draft | Yes/No (bit); max length unspecified | Y | DefaultValue: false [F 4375e0a2-0a69-4823-be2d-091f4cc447c6 DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: Option allows for the hiding of the Project Task on the PPAP Draft Stage.; internal PPAPHidTskDraft; field ID 4375e0a2-0a69-4823-be2d-091f4cc447c6 |
| PPAP Project Type | M:1 to Project Type (ProjectFwk_ProjectTypeObject); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | DefaultValue: a6aa71e1-4202-4d7f-b583-caddd4c87188 [F fa7c5344-880e-4d5b-a3b3-efc4040f410c DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal PPAPProjectType; field ID fa7c5344-880e-4d5b-a3b3-efc4040f410c |
| PPAP Task Caution Indicator | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Caution indicator applies yellow highlight to the grid view.  This indicates that the task or record is coming due for completion.; internal PPAPTaskCaution; field ID 85367731-207b-4433-ab64-72d732ed5d5a |
| Skip Product Development | Yes/No (bit); max length unspecified | Y | DefaultValue: false [F 881f7808-9a99-4521-970a-6e42587fb9ef DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: Option to skip the Product Design &amp; Development gate where the customer does not do any design work.; internal SkipGate2; field ID 881f7808-9a99-4521-970a-6e42587fb9ef |
| Skip Gate 2 Warning Message | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Warning message for the administrator that chooses to "Skip Product Development" workflow stage.; internal SkipGate2Msg; field ID 9f71a07c-5a48-4af2-9a5e-1ddcd051ea0b |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | APQPCautioInd | APQPTaskCaution | EnableCAR | EnableCARPPAP | HideTaskDraft | Name | PPAPCautioInd | PPAPHidTskDraft | PPAPTaskCaution | SkipGate2 | SkipGate2Msg | APQPProjectType | PPAPProjectType | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 7b040ae4-8679-43df-ad06-3ad53a684674 | 15 | 15 | true | true | false | Default | 15 | false | 15 | false | Please ensure that you adjust the APQP Gate Weighting after saving this change. | APQP [f467e500-49c1-4877-8b65-9a20492687f9] | PPAP [a6aa71e1-4202-4d7f-b583-caddd4c87188] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/429 |


## 19 APQP

**Internal name:** `APQP_APQPObject`. **Stable metadata ID:** `f03e2731-655c-4af2-9c84-d3035e3fc61a`. **Classification:** Extracted record metadata.

**Inheritance parent:** ProjectFwk_ProjectAbstractObject.

**Directly declared fields:** 20 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=true; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=true; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/9`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| DisplayField | Text (nvarchar); max length unspecified | N | Calculation: CONCATENATE("APQP ",Product," - ",Product.Name) [F 7391ff31-f677-47b9-a517-724070e58328 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: CONCATENATE("APQP ",Product," - ",Product.Name); internal DisplayField; field ID 7391ff31-f677-47b9-a517-724070e58328 |
| Draft Weight | Percent (Percent); max length unspecified; precision=18, scale=2 | N | DefaultValue: FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "Draft") [F e8718d97-c2e3-49fa-9459-ac6f0a7e51cf DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: Weighting assigned to the project progress for the Draft Stage.; internal DraftWeight; field ID e8718d97-c2e3-49fa-9459-ac6f0a7e51cf |
| FifthGate Weight | Percent (Percent); max length unspecified; precision=18, scale=2 | N | DefaultValue: FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "FifthGate") [F 404759da-8e01-4a02-806e-6353cb373174 DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: Weighting assigned to the project progress for the 5th Gate.; internal FifthGateWeight; field ID 404759da-8e01-4a02-806e-6353cb373174 |
| FirstGate Weight | Percent (Percent); max length unspecified; precision=18, scale=2 | N | DefaultValue: FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "FirstGate") [F d5101acf-7583-4459-85f6-0e74bfd61c97 DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: Weighting assigned to the project progress for the 1st Gate.; internal FirstGateWeight; field ID d5101acf-7583-4459-85f6-0e74bfd61c97 |
| FourthGate Weight | Percent (Percent); max length unspecified; precision=18, scale=2 | N | DefaultValue: FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "FourthGate") [F b143febd-3260-4edc-ad75-8f0be3907736 DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: Weighting assigned to the project progress for the 4th Gate.; internal FourGateWeight; field ID b143febd-3260-4edc-ad75-8f0be3907736 |
| First Gate Completed On | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Workflow APQP / Gate 1 / Proceed to Next Gate; description: Due date for the first gate.; internal Gate1Completed; field ID 688dd9a1-3a49-416d-9c39-d590792f4490 |
| Second Gate Completed On | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Workflow APQP / Gate 2 / Proceed to Next Gate; description: Date that the second gate was completed on.; internal Gate2Completed; field ID 8d9e0431-147d-4ea9-8440-9e0425c00828 |
| Third Gate Completed On | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Workflow APQP / Gate 3 / Proceed to Next Gate; description: Date that the third gate was completed on.; internal Gate3Completed; field ID 40293a64-b7a8-4f36-906a-c5a6486908cd |
| Fourth Gate Completed On | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Workflow APQP / Gate 4 / Proceed to Next Gate; description: Date that the fourth gate was completed on.; internal Gate4Completed; field ID a3604c5c-10e1-43a8-b10b-8ae6c6015147 |
| Fifth Gate Completed On | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Workflow APQP / Gate 5 / Approve; description: Date that the fifth gate was completed on.; internal Gate5Completed; field ID 79213c17-e7af-4c38-aa84-4eb35ba7b869 |
| PPAP Abstract | M:1 to PPAP (APQP_PPAPAbstractObject); many → 0..1; reverse APQPAbstract; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PPAPAbstract; field ID dfb50215-0b52-4c99-8278-6dde82e68c9f |
| PPAP Due Date | Date (Date); max length unspecified; TimeZoneCapture=false | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Indicates when the PPAP is due for submission to the customer.; internal PPAPDueDate; field ID bc9b0b17-8f1c-46a7-a9fd-7960cdf9cf25 |
| Process Owner | M:1 to Employee (SysEmployeeEntity); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | DefaultValue: CreatedBy [F d726afa9-521d-4a3c-8108-c81a0d96315f DefaultValue]; FilterExpression: {"__type":"Expression","Operator":0,"Predicates":[{"__type":"BelongsToGroup","For":"ID","Negate":false,"GroupId":"bfbec27b-d0b6-47b2-b6d4-9241abf697c7"}]} [F d726afa9-521d-4a3c-8108-c81a0d96315f FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: Person Responsible for ensuring APQP completion.; internal ProcessOwner; field ID d726afa9-521d-4a3c-8108-c81a0d96315f |
| Process Owner Id | Guid (uniqueidentifier); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProcessOwnerId; field ID 465aa6b6-c91a-45ec-8d01-99e36d0bf4c0 |
| Completion Date | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Workflow APQP / Gate 5 / Approve; description: Date when the project was completed.; internal ProjCompletedOn; field ID 1ee92dcf-9a37-47c5-9172-ea3a9472ea3d |
| Risk Level | M:1 to Risk Level_APQP Abstract__Text__Lookup (APQP_AbstractTextLooObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal RiskLevel; field ID 3822ed80-f049-4285-9dd4-2357e506061a |
| SecondGate Weight | Percent (Percent); max length unspecified; precision=18, scale=2 | N | DefaultValue: FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "SecondGate") [F 4202c8e9-e42b-473e-808e-27440d24e83f DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: Weighting assigned to the project progress for the 2nd Gate.; internal SecGateWeight; field ID 4202c8e9-e42b-473e-808e-27440d24e83f |
| Settings | M:1 to APQP Settings (APQP_SettingsObject); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | DefaultValue: 7b040ae4-8679-43df-ad06-3ad53a684674 [F 89e8e416-cf54-4606-bc05-619109ba326a DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal Settings; field ID 89e8e416-cf54-4606-bc05-619109ba326a |
| Target Sign-Off Date | Date (Date); max length unspecified; TimeZoneCapture=false | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Indicates when the APQP should be completed in its entirety.; internal SignoffDate; field ID c36a7cf7-19e0-4eb0-9d65-b93377142fb6 |
| ThirdGate Weight | Percent (Percent); max length unspecified; precision=18, scale=2 | N | DefaultValue: FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "ThirdGate") [F 602a6e63-3feb-4fd7-b054-cbbc06c5f986 DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: Weighting assigned to the project progress for the 3rd Gate.; internal ThirdGateWeight; field ID 602a6e63-3feb-4fd7-b054-cbbc06c5f986 |


## 20 Action Plan Abstract

**Internal name:** `ActionPlans_ActionPlanAbsObject`. **Stable metadata ID:** `edca9466-cdf8-4317-85c9-d3efb40373a2`. **Classification:** Extracted record metadata.

**Inheritance parent:** FragApplication_AbCorrectivActiObject.

**Directly declared fields:** 2 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/103`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Person Responsible | M:1 to Employee (SysEmployeeEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: M:1 relation to Employee; internal PersonResp; field ID 6e7e504f-9b46-45c2-8aec-cae6c88a90b2 |
| Person Responsible Id | Guid (uniqueidentifier); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PersonRespId; field ID b766e0bd-08df-4c4e-8ca2-e760efaccb8a |


## 21 Global Action Plan Abstract

**Internal name:** `ActionPlans_GlobActPlanAbsObject`. **Stable metadata ID:** `2746e1f2-7359-4939-8476-0426fb8e5f3e`. **Classification:** Extracted record metadata.

**Inheritance parent:** FragApplication_AbCorrectivActiObject.

**Directly declared fields:** 1 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/718`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Role Responsible | M:1 to Role (SysRoleEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: M:1 relation to Role. This defines the role responsible for the local action plan at the location level.; internal RoleResponsible; field ID 51729c6a-c4e0-407e-bac7-fcc29d6a622f |


## 22 Submission Information_PPAP Abstract__Text__Lookup

**Internal name:** `APQP_AbstractTextLo0Object`. **Stable metadata ID:** `e523f23d-1284-41d6-9939-41a98c0de14b`. **Classification:** Extracted lookup metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/171`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Caption | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Caption; field ID cc7b7670-8cef-4f9b-85ae-9a179f5e5464 |
| Index | Integer (int); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal Index; field ID 9f0ee844-383e-4361-9424-11bdadc924fa |
| Value | Text (nvarchar); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Value; field ID f6dc9b6a-1eda-42b8-b128-b02a1ad29517 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Deleted | Value | Index | Caption | Evidence |
|---|---|---|---|---|---|
| ab939180-53e5-47a9-96f3-34856d90f9e2 | false | Appearance | 2 | Appearance | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/172 |
| 6e528161-d011-411f-a69b-dfdea02d4f45 | false | Materials/Functional | 1 | Materials/Functional | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/173 |
| aa3c72e3-45af-42ad-822f-33a20e555a7f | false | Dimensional | 0 | Dimensional | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/177 |


## 23 Reason for Submission_PPAP Abstract__Text__Lookup

**Internal name:** `APQP_AbstractTextLo1Object`. **Stable metadata ID:** `0a139285-231e-46e6-a3a0-a0a2d48a4934`. **Classification:** Extracted lookup metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/34`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Caption | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Caption; field ID 37dec153-b747-4054-a43e-8e5b777b6569 |
| Index | Integer (int); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal Index; field ID 675c9e6f-89a9-4b5c-8773-0dd9187492c1 |
| Value | Text (nvarchar); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Value; field ID d2b25964-86d0-4ba7-8fe1-307af692b4e9 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Deleted | Value | Index | Caption | Evidence |
|---|---|---|---|---|---|
| d3f67c5c-1fbc-4e11-a953-b97d449b3dba | false | Initial Submission | 0 | Initial Submission | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/363 |
| bf9d123c-20ea-465a-b2cc-96353a6756f4 | false | Tooling Inactive &gt; than 1 year | 4 | Tooling Inactive &gt; than 1 year | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/391 |
| 4906edf7-b3dd-430e-a1ba-6e48719f6ea1 | false | Tooling: Transfer, Replacement, Refurbishment or additional | 2 | Tooling: Transfer, Replacement, Refurbishment or additional | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/662 |
| 9298cbde-a9fc-41bd-bc32-bdc9dc9d6843 | false | Engineering Change(s) | 1 | Engineering Change(s) | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/744 |
| d5899e7b-42da-48ef-a0a4-cc0738aebd4c | false | Correction of Discrepancy | 3 | Correction of Discrepancy | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/746 |


## 24 IMDS #_PPAP Abstract__Text__Lookup

**Internal name:** `APQP_AbstractTextLo2Object`. **Stable metadata ID:** `f315c59e-0de3-4489-83a5-945116b3cea1`. **Classification:** Extracted lookup metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/108`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Caption | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Caption; field ID 702d825c-4619-4ee3-8532-b31695e1da3d |
| Index | Integer (int); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal Index; field ID 032cbcd4-a0dc-438c-99ab-3f0a6752cb9f |
| Value | Text (nvarchar); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Value; field ID 20d93a38-a28e-42e1-a069-e648d6e7818d |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Deleted | Value | Index | Caption | Evidence |
|---|---|---|---|---|---|
| 0cb7fb9a-5f99-4cfd-89bc-73f92336809b | false | Change in Part Processing | 2 | Change in Part Processing | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/327 |
| 52a64985-ead6-4d20-8c10-f74a99b1a581 | false | Change to Optional Construction or Material | 0 | Change to Optional Construction or Material | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/365 |
| 7d25ad10-d115-495b-9434-f317b823bff6 | false | Other - please specify | 4 | Other - please specify | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/375 |
| f5f6db01-53c8-41f8-96f3-959236ebb849 | false | Sub-Supplier or Material Source Change | 1 | Sub-Supplier or Material Source Change | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/574 |
| a8693975-e190-488d-94f7-2c04138dfe69 | false | Parts Produced at Additional Location | 3 | Parts Produced at Additional Location | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/576 |


## 25 Requested Submission Level (Check one)_PPAP Abstract__Text__Lookup

**Internal name:** `APQP_AbstractTextLo3Object`. **Stable metadata ID:** `fdc9bc97-14ce-4894-8456-28c074286aae`. **Classification:** Extracted lookup metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/160`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Caption | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Caption; field ID eb89b28d-c1c3-4541-9fe3-16ac94382320 |
| Index | Integer (int); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal Index; field ID 06900d40-231b-402c-b21e-614cbd3b151f |
| Value | Text (nvarchar); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Value; field ID 78de8a09-bfb4-4940-9396-c2ab18f71ced |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Deleted | Value | Index | Caption | Evidence |
|---|---|---|---|---|---|
| 6a268f9f-5faa-4d30-822d-f3edf38e836a | false | Level 5 – Warrant with product samples and complete supporting data reviewed at supplier’s manufacturing location. | 4 | Level 5 – Warrant with product samples and complete supporting data reviewed at supplier’s manufacturing location. | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/161 |
| 145715f4-9b51-4c26-bb6b-2ef9ad3d5de4 | false | Level 4 – Warrant and other requirements as defined by customer. | 3 | Level 4 – Warrant and other requirements as defined by customer. | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/162 |
| 282af8dd-fa1b-4864-93b6-b860550bd00e | false | Level 1 – Warrant only (and for designated appearance items, an Appearance Approval Report) submitted to customer. | 0 | Level 1 – Warrant only (and for designated appearance items, an Appearance Approval Report) submitted to customer. | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/164 |
| 40227e1d-d773-4d31-88ee-d1efc2e1bbf3 | false | Level 2 – Warrant with product samples and limited supporting data submitted to customer. | 1 | Level 2 – Warrant with product samples and limited supporting data submitted to customer. | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/167 |
| b192e464-6f45-4330-b75e-9f5450583c8b | false | Level 3 – Warrant with product samples and complete supporting data submitted to customer. | 2 | Level 3 – Warrant with product samples and complete supporting data submitted to customer. | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/170 |


## 26 The results for:_PPAP Abstract__Text__Lookup

**Internal name:** `APQP_AbstractTextLo4Object`. **Stable metadata ID:** `a50f6b5e-fe6a-4f16-b2a8-477d4ff567a6`. **Classification:** Extracted lookup metadata.

**Inheritance parent:** None.

**Directly declared fields:** 4 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/208`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Caption | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Caption; field ID 546332f4-4845-49ef-bb58-c0c9e26e6e51 |
| Index | Integer (int); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal Index; field ID c69db3a9-526c-40b0-876c-e72ede969168 |
| The results for:s | M:N to PPAP (APQP_PPAPAbstractObject); multiple selection; native map cusAPQP_PPAPAbstractResultsForToAPQP_AbstractTextLo4Map; reverse ResultsFor; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ResultsFors; field ID 2cf1c1f6-2a3a-4899-9619-45e502ed639a |
| Value | Text (nvarchar); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Value; field ID 0a714413-d4de-4cc0-8380-bd0773abc51b |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Deleted | Value | Index | Caption | Evidence |
|---|---|---|---|---|---|
| 23fbaafe-4942-42fa-bb37-9785e20b8624 | false | statistical process package | 3 | statistical process package | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/150 |
| 8f56a21c-b336-4d97-af89-9bbb2ebbf121 | false | material and functional tests | 1 | material and functional tests | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/426 |
| 012e742d-2576-4dee-b3db-ef063de9ea72 | false | appearance criteria | 2 | appearance criteria | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/810 |
| e880b089-db49-47ec-9af9-5d5b983b933e | false | dimensional measurement | 0 | dimensional measurement | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/861 |


## 27 Risk Level_APQP Abstract__Text__Lookup

**Internal name:** `APQP_AbstractTextLooObject`. **Stable metadata ID:** `a3ae526f-6c5b-4e5c-b94c-94a199c5fa74`. **Classification:** Extracted lookup metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/271`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Caption | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Caption; field ID bef2f955-c174-4d9d-8254-5d426ab11f55 |
| Index | Integer (int); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal Index; field ID e569892f-f409-4846-b10a-3b2bb1359158 |
| Value | Text (nvarchar); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Value; field ID f5ec7e04-771b-4e95-a687-2c41b44c5fb5 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Deleted | Value | Index | Caption | Evidence |
|---|---|---|---|---|---|
| 7892eeaf-275a-430b-af05-105808463f34 | false | 2 | 1 | Medium | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/147 |
| 534fee02-a48b-4ea0-805f-02d4f47225d0 | false | 1 | 2 | Low | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/272 |
| f53eb237-5228-4725-991d-4f5e274815a4 | false | 3 | 0 | High | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/423 |


## 28 Calendar Day

**Internal name:** `CalenManagement_DayObject`. **Stable metadata ID:** `ce69b1eb-bc48-442c-9477-c00b8df345cb`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** Views Add-on(v1.0.0.0).ipack `/GraphData/Items/6`.


## 29 CLF - Answer Type

**Internal name:** `CLF_AnswerTypeObject`. **Stable metadata ID:** `4b8c65a0-c069-4f9d-afb1-d4fc97140e41`. **Classification:** Extracted lookup metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/128`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Caption | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Caption; field ID 169171f6-0a17-4c18-b9cb-a402a5cb1b3a |
| Index | Integer (int); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal Index; field ID af2b2478-5c57-480a-9ddd-fefba5c89b53 |
| Value | Text (nvarchar); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Value; field ID 08da12dc-5601-430f-ae35-567028f8584d |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Value | Index | Caption | Deleted | Evidence |
|---|---|---|---|---|---|
| 771916e1-5251-4658-add8-3091457e7295 | Choice | 0 | Choice | false | Checklist Framework(v1.0.0).ipack /GraphData/Items/312; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/15 |
| a6e3bb24-6722-4dd2-b7fd-02ae1a16debd | Checkbox | 1 | Checkbox | Not exported | Checklist Framework(v1.0.0).ipack /GraphData/Items/251 |
| 93ab1484-09ce-4868-9618-bfa62ea0b01c | Choices | 5 | Choices | Not exported | Checklist Framework(v1.0.0).ipack /GraphData/Items/261 |
| c52ac043-81af-413a-a393-6490fec6b1aa | Text | 3 | Text | Not exported | Checklist Framework(v1.0.0).ipack /GraphData/Items/262 |
| ed36fa47-3b62-4323-a2ca-a58c8fad2ac1 | Float | 2 | Float | Not exported | Checklist Framework(v1.0.0).ipack /GraphData/Items/269 |
| 7580b590-07e8-4142-9059-3020a636d918 | Date | 4 | Date | Not exported | Checklist Framework(v1.0.0).ipack /GraphData/Items/299 |


## 30 Checklist Abstract

**Internal name:** `CLF_CheckliAbstractObject`. **Stable metadata ID:** `c726d108-022c-4b4b-8928-5160ce43a535`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 2 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/754`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Description | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Copy Values; internal Description; field ID b90945dd-c741-4ab6-b883-e3b777267f63 |
| Title | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Title; field ID a32a9d49-8aa6-4b54-ae75-31903e8427c6 |


## 31 Checklist Answer

**Internal name:** `CLF_ChecklistAnswerObject`. **Stable metadata ID:** `3557470f-8de9-461c-bdcb-9edf9cc2b6c6`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 24 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/792`.

**Package variations:** 1 property differences are retained in [metadata variation register](metadata-variation-register.csv). The main definition is a documentary reference; the optional compatibility add-on and import policy can affect installed values.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Action Plans | 1:M to Inspection Action Plan (CLF_InsActionPlanObject); inverse collection; no new stored reference; reverse ChecklistAnswer; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ActionPlans; field ID 731bc79d-6325-4b83-9986-225eee33103e |
| # Questions | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: IF(COUNT(QuestionAnswers)=0, COUNT(PubChecklist.PubQuestions), COUNT(QuestionAnswers)) + SUM(SubChecklists.ApplicQuestions)  [F 071bf3da-d8a0-4b50-b638-81b8c2f5d484 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal ApplicQuestions; field ID 071bf3da-d8a0-4b50-b638-81b8c2f5d484 |
| Comments | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Comments; field ID 86f9024d-7642-48e6-8c11-3ea82541b0c7 |
| Action Owner | M:1 to Employee (SysEmployeeEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal DefPersRespFind; field ID c5d24b84-138c-4c83-b1c2-74da6a8873a4 |
| Depth | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: IF(MasterChecklist&lt;&gt;NULL, MasterChecklist.Depth+1, 1) [F 3c17b069-7b8e-4bd7-9a7c-923143d5e919 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal Depth; field ID 3c17b069-7b8e-4bd7-9a7c-923143d5e919 |
| # Filled Questions | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: SUM(QuestionAnswers.IsFilled) + SUM(SubChecklists.FilledQuestions) [F 9eb5b820-84e7-459d-a736-062bf1637ac3 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: On Question Answer, there is Field called IsFilled. It contains an expression that set it to 1 or 0. That expression can be changed with configuration.<br>At the Checklist answer level, this field is meant to Count the number of Question Answer currently considered as "Filled".<br>The expression grab data from directly attached Question Answer Records as well as from Sub-Checklists.<br><br>It is not recommended to change this expression.; internal FilledQuestions; field ID 9eb5b820-84e7-459d-a736-062bf1637ac3 |
| Findings | 1:M to Finding (CLF_FindingObject); inverse collection; no new stored reference; reverse ChecklistAnswer; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Findings; field ID d235c2f2-e2d2-422d-a109-4b4ef4ef11b4 |
| Location | M:1 to Location (SysLocationEntity); many → 1; reverse CLFChecklistAnswerObject; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Location; field ID ced48448-47a3-4add-a9b8-bd2a04939e23 |
| Audit | M:1 to Checklist Answer (CLF_ChecklistAnswerObject); many → 0..1; reverse SubChecklists; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal MasterChecklist; field ID d685044a-b32a-4bd6-ae1f-8125836e1514 |
| Max Points | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: SUM(QuestionAnswers.MaxPoints) + SUM(SubChecklists.MaxPoints) [F 79aef9dd-9a4f-421e-915f-d7c30cef905c Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: SUM(QuestionAnswers.MaxPoints) + SUM(SubChecklists.MaxPoints); internal MaxPoints; field ID 79aef9dd-9a4f-421e-915f-d7c30cef905c |
| Name | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: On Create; internal Name; field ID dbab4405-3e42-40be-97c6-b1ac86afcd03 |
| # Actions | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal NbActions; field ID c8e5a2fc-211d-4fd4-abcd-35f0904f3dbb |
| # Findings | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(Findings) + SUM(SubChecklists.NbFindings) [F 4c9646f8-b586-45c0-9107-b66971cc7223 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: This field count the number of finding attached to the Checklist and Sub-Checklist.<br>It is not recommended to change that expression; internal NbFindings; field ID 4c9646f8-b586-45c0-9107-b66971cc7223 |
| # Sub-Checklists | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(SubChecklists) [F 0655be39-410d-435c-a680-51b843ab6c52 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal NbSubChecklists; field ID 0655be39-410d-435c-a680-51b843ab6c52 |
| Path | Text (nvarchar); max length unspecified | N | Calculation: IF(MasterChecklist&lt;&gt;NULL, CONCATENATE(MasterChecklist.Path, ".", RecordNo), RecordNo) [F 071a14bc-1d47-4277-a5c5-16b1ea4c487c Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal Path; field ID 071a14bc-1d47-4277-a5c5-16b1ea4c487c |
| Points Awarded | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: SUM(QuestionAnswers.PointsAwarded) + SUM(SubChecklists.PointsAwarded) [F 56f4f2db-044f-4833-aad6-0d0f0ee84d85 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal PointsAwarded; field ID 56f4f2db-044f-4833-aad6-0d0f0ee84d85 |
| Previous Checklist Id | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; description: This field is used for workflow recurrence.<br>It needs to be set with an expression in the last transition to Closed stage.; internal PrevChecklistId; field ID be41f39c-b135-4981-9ae0-9b7c16be240d |
| Progress | Percent (Percent); max length unspecified; precision=18, scale=0 | N | Calculation: IFERROR(FilledQuestions / ApplicQuestions, 0) [F 7ac79076-0202-4097-bac7-fad6c540e65b Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal Progress; field ID 7ac79076-0202-4097-bac7-fad6c540e65b |
| Checklist | M:1 to Published Checklist (CLF_PubChecklistObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: This field allows to select a Checklist coming from the Published Checklist Object.<br>By default, the list is be filtered based on IsActive=Yes.<br>This filter can be changed if needed.<br><br>The Custom Action Handler uses this field to know what Question to used to generate Answer Records.<br><br>Do not delete this field.; internal PubChecklist; field ID 5ea74822-514e-4b51-87a9-2c37016a8def |
| Question Answers | 1:M to Question Answer (CLF_QuestionAnswerObject); inverse collection; no new stored reference; reverse ChecklistAnswer; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal QuestionAnswers; field ID d7681ce4-f832-41a5-a42c-175f70511e0c |
| Record No. | Auto Number (AutoNumber); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal RecordNo; field ID 9af1b94a-91f8-41b5-a41b-aaa63f8a4d96 |
| Score | Percent (Percent); max length unspecified; precision=18, scale=2 | N | Calculation: IFERROR(PointsAwarded/ MaxPoints, 0) [F b38a67c1-41b7-4534-b914-d7b6d1cbff55 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal Score; field ID b38a67c1-41b7-4534-b914-d7b6d1cbff55 |
| Sub Checklists | 1:M to Checklist Answer (CLF_ChecklistAnswerObject); inverse collection; no new stored reference; reverse MasterChecklist; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal SubChecklists; field ID 924680d6-eb03-4564-b90e-2bf3e4feb9bc |
| System Type Helper | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; description: Contains the system name of the object. It is needed if workflow recurrence and Sub-Checklist is used.<br>An Action Handler in Create must set its value.; internal SysteTypeHelper; field ID 0be43c32-01b6-4c35-b53a-646906d0d529 |


## 32 Checklist

**Internal name:** `CLF_ChecklistObject`. **Stable metadata ID:** `6fe45655-67bc-4593-91e3-675ccc304fdc`. **Classification:** Extracted record metadata.

**Inheritance parent:** CLF_CheckliAbstractObject.

**Directly declared fields:** 6 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=true; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/802`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Checklist Type | M:1 to Checklist Type (CLF_ChecklistTypeObject); many → 1; reverse Checklists; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ChecklistType; field ID 77d811b5-7075-4fe4-a722-7acf1bbd1776 |
| Id | Guid (uniqueidentifier); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Logical identity metadata; generation mechanism not exported; internal Id; field ID 6d9db473-69e7-47e2-b8c0-48b9eafc67e8 |
| # Questions | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(Questions) [F c209764b-a12f-4a31-aa65-91933fb938ea Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal NbQuestions; field ID c209764b-a12f-4a31-aa65-91933fb938ea |
| Published Checklists | 1:M to Published Checklist (CLF_PubChecklistObject); inverse collection; no new stored reference; reverse Checklist; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PubChecklists; field ID e509141b-0ebd-405f-b11b-8281456fa0f1 |
| Questions | M:N to Question (CLF_QuestObject); multiple selection; native map CLF_ChecklistQuestionsToCLF_QuestMapObject; reverse Checklists; Extracted relation Type=3 | N | FilterExpression: full expression in field-expressions.md [F ad0459de-0804-4ff0-b296-da15d39e21a6 FilterExpression] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Questions; field ID ad0459de-0804-4ff0-b296-da15d39e21a6 |
| Code | Text (nvarchar); max length 100 | Y | DefaultValue: CONCATENATE(ChecklistType.Reference, ".",  ChecklistType.NbChecklists+1) [F 974e3544-2625-479e-8321-f0722992e415 DefaultValue] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal Reference; field ID 974e3544-2625-479e-8321-f0722992e415 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | NbQuestions | Reference | Description | Title | Questions | ChecklistType | PubChecklists | Evidence |
|---|---|---|---|---|---|---|---|---|
| 7d972e73-1a1c-4f42-8395-4e221bda8583 | 18 | PPAP01.1 | Level 1 - Warrant only (and for designated appearance items, an Appearance Approval Report) submitted to customer. | Level 1 PPAP | Full value in seed-records.json | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/658; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/14 |
| 569baf9f-4304-495f-be2d-1d5f63b9d72a | 18 | PPAP01.5 | Level 5 - Warrant with product samples and complete supporting data reviewed at supplier's manufacturing location. | Level 5 PPAP | Full value in seed-records.json | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/586; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/16 |
| 591a78ed-b245-46db-8cd9-f085a223efb3 | 18 | PPAP01.2 | Level 2 - Warrant with product samples and limited supporting data submitted to customer. | Level 2 PPAP | Full value in seed-records.json | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/905; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/18 |
| 507b911d-693d-4208-8f6b-d2da93d66da5 | 18 | PPAP01.4 | Level 4 - Warrant and other requirements as defined by customer. | Level 4 PPAP | Full value in seed-records.json | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/123; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/24 |
| 6a2588cd-a093-4268-a7a9-b1a3da836842 | 18 | PPAP01.3 | Level 3 - Warrant with product samples and complete supporting data submitted to customer. | Level 3 PPAP | Full value in seed-records.json | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/59; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/25 |


## 33 Checklist Type

**Internal name:** `CLF_ChecklistTypeObject`. **Stable metadata ID:** `0259a1d3-455a-4ba5-8c4b-dbd3f0be9ea7`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 9 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/280`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Checklists | 1:M to Checklist (CLF_ChecklistObject); inverse collection; no new stored reference; reverse ChecklistType; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Checklists; field ID 9e84d870-2193-4eea-9014-1ac51b31a889 |
| Description | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Description; field ID 500ca023-7512-4d73-9186-9d4bd574c1af |
| Max Order | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: MAX(Questions.Order) [F 645a536e-aa60-4c95-88bb-e43f8bf7812c Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal MaxOrder; field ID 645a536e-aa60-4c95-88bb-e43f8bf7812c |
| Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Name; field ID a4dac596-3c7a-4401-aed4-b8700c486108 |
| # Checklists | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(Checklists) [F eac1371d-cd62-41a0-9cb4-d9b8df09b5be Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal NbChecklists; field ID eac1371d-cd62-41a0-9cb4-d9b8df09b5be |
| # Questions | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(Questions) [F 7ef2fc23-54af-4dd1-aae1-4c945cd5cfc1 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal NbQuestions; field ID 7ef2fc23-54af-4dd1-aae1-4c945cd5cfc1 |
| Question Answer Object | Text (nvarchar); max length 200 | Y | DefaultValue: CLF_QuestionAnswerObject [F 70d0d1df-7d5f-45ae-b01f-adf174f1cb94 DefaultValue] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: This field can be used to define in what Child Object of Question Answer the Custom Action Handler must generate records.<br>By default records are inserted directly in the Question Answer Object.<br>That value is set using the Static Expression below.<br><br>If there is no need to have different Child Object of Question Answer, that field can be ignored and excluded form the view as long as it is not deleted and <br>that the expression remains as is.; internal QueAnswerObject; field ID 70d0d1df-7d5f-45ae-b01f-adf174f1cb94 |
| Questions | 1:M to Question (CLF_QuestObject); inverse collection; no new stored reference; reverse ChecklistType; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Questions; field ID 35be6b82-dbd1-4939-9a7b-8a947e300daf |
| Code | Text (nvarchar); max length 100 | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Reference; field ID 0763a8e5-52aa-4e3d-9ac6-7d01c73d5bb2 |


## 34 Choice List

**Internal name:** `CLF_ChoiceListObject`. **Stable metadata ID:** `b8491b3d-469a-4bdf-b9e1-ddcecf257422`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 6 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/9`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Choices | 1:M to Choice (CLF_ChoiceObject); inverse collection; no new stored reference; reverse ChoiceList; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Choices; field ID cfbcd61f-c174-4a63-8abe-92f6f435fd57 |
| Description | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Description; field ID 123ef5a5-af42-4a5f-bd45-39ffaf5a47d6 |
| Max Points | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: MAX(Choices.Value) [F 91e0613b-66fb-4cce-8158-de81572a4fa6 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal MaxPoints; field ID 91e0613b-66fb-4cce-8158-de81572a4fa6 |
| Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Name; field ID f45a0af0-e631-4e97-a593-2405ea55c866 |
| # Choices | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(Choices) [F afabde3b-355b-4536-86f0-797f937da850 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal NbChoices; field ID afabde3b-355b-4536-86f0-797f937da850 |
| Code | Text (nvarchar); max length 100 | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Reference; field ID 5152b9c1-e128-4e3c-ae3e-85d9b5da6b2c |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Description | MaxPoints | Name | NbChoices | Reference | Choices | Evidence |
|---|---|---|---|---|---|---|---|
| 70b9d693-5d24-424b-a8e7-a17d9a072296 | null | null | Yes/No | 0 | YN | No [5e0d7c72-dadb-4241-b293-f79c213b1870]; Yes [03b79b78-1c12-4e19-bcc4-da6e5e9f14b5] | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/4; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/19 |
| cc01b77b-0ed2-4294-9b4a-d3c859f6ef69 | null | 1 | Yes/No/NA | 3 | YNN | NA [8d75d3c0-54cc-43dd-be51-ca488ca18b0e]; Yes [9bbe68b1-ab58-4b28-9262-6c4c2beb289e]; No [f5a08400-fcae-4ad2-b150-326fdebb9daf] | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/9 |


## 35 Choice

**Internal name:** `CLF_ChoiceObject`. **Stable metadata ID:** `d36a079a-12db-4b54-9c70-f80d146ff8ca`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 7 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/23`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Background-color | M:1 to Color (FragApplication_ColorObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal BColor; field ID 88d0293d-c656-4994-beab-53ae02bbb274 |
| Choice List | M:1 to Choice List (CLF_ChoiceListObject); many → 1; reverse Choices; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ChoiceList; field ID fefa6dce-6938-4c14-ac76-8c7a85daada7 |
| Css | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Css; field ID 9ad5d925-c26d-443b-9b47-148e1cc5f035 |
| Name | Text (nvarchar); max length 200 | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Name; field ID f856ad02-7c5f-4d97-8b98-f778c0581c8b |
| Code | Text (nvarchar); max length 100 | Y | DefaultValue: CONCATENATE(ChoiceList.Reference, ".",  ChoiceList.NbChoices+1) [F 4710a81a-c167-40c9-a6d9-66f4d7479342 DefaultValue] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal Reference; field ID 4710a81a-c167-40c9-a6d9-66f4d7479342 |
| Text-color | M:1 to Color (FragApplication_ColorObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal TColor; field ID 629a2f2a-f962-4737-9bd8-76acf2e54fb8 |
| Value | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Value; field ID c6afb18b-4a5a-4cb7-adbc-8d099a8adb0a |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Css | Name | Reference | Value | BColor | ChoiceList | TColor | Evidence |
|---|---|---|---|---|---|---|---|---|
| 5e0d7c72-dadb-4241-b293-f79c213b1870 | text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted darkred; | No | YN.2 | 0 | Red [f1da27ed-8e56-4222-a00d-32a31789a937] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | White [794c6052-8e18-403a-a957-995ea4f52df4] | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/2 |
| 9bbe68b1-ab58-4b28-9262-6c4c2beb289e | text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted darkgreen; | Yes | YNN.1 | 1 | Green [76001999-bc51-4888-975f-7aac7a612abc] | Yes/No/NA [cc01b77b-0ed2-4294-9b4a-d3c859f6ef69] | Black [2917ee4e-4752-4062-9c5e-e7b6b8ab01ee] | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/6 |
| f5a08400-fcae-4ad2-b150-326fdebb9daf | text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted darkred; | No | YNN.2 | 0 | Red [f1da27ed-8e56-4222-a00d-32a31789a937] | Yes/No/NA [cc01b77b-0ed2-4294-9b4a-d3c859f6ef69] | White [794c6052-8e18-403a-a957-995ea4f52df4] | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/10 |
| 8d75d3c0-54cc-43dd-be51-ca488ca18b0e | text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted grey; | NA | YNN.3 | null | White [794c6052-8e18-403a-a957-995ea4f52df4] | Yes/No/NA [cc01b77b-0ed2-4294-9b4a-d3c859f6ef69] | Grey [2f52cefd-fb5c-4d35-876f-a5d3cb86ca90] | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/12 |
| 03b79b78-1c12-4e19-bcc4-da6e5e9f14b5 | text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted darkgreen; | Yes | YN.1 | 1 | Green [76001999-bc51-4888-975f-7aac7a612abc] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | Black [2917ee4e-4752-4062-9c5e-e7b6b8ab01ee] | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/15 |


## 36 CLF - Finding Due Date

**Internal name:** `CLF_FindingDDObject`. **Stable metadata ID:** `235842cd-b2bd-4a2e-a8c3-b8e0f0d351f9`. **Classification:** Extracted lookup metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/123`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Caption | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Caption; field ID 81f29242-0eb8-4075-a10b-7c09dcc13e20 |
| Index | Integer (int); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal Index; field ID 93d53fa6-3dfd-42fb-98cd-989ac39c13fa |
| Value | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Value; field ID 3467529b-52cc-4e96-adc6-d9ecde42ad44 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Value | Index | Caption | Evidence |
|---|---|---|---|---|
| 692618c0-eb32-4580-98d4-3d4984baffb6 | 7 | 2 | 1 week | Checklist Framework(v1.0.0).ipack /GraphData/Items/78 |
| eb1f2003-c086-4224-aca9-a26c842f6442 | 3 | 1 | 3 days | Checklist Framework(v1.0.0).ipack /GraphData/Items/134 |
| 062252c9-faae-4eca-a428-8293818c98f3 | 14 | 3 | 2 weeks | Checklist Framework(v1.0.0).ipack /GraphData/Items/135 |
| 5e108aed-80b1-4b12-82c9-109287c51ffe | 1 | 0 | Immediately | Checklist Framework(v1.0.0).ipack /GraphData/Items/136 |
| 6f4b1be9-7436-409d-8af3-ad3f246625c9 | 30 | 4 | 1 month | Checklist Framework(v1.0.0).ipack /GraphData/Items/139 |


## 37 Finding

**Internal name:** `CLF_FindingObject`. **Stable metadata ID:** `18bb2218-f236-4baf-ad0b-cc187222c8f2`. **Classification:** Extracted record metadata.

**Inheritance parent:** EventFwk_EventObject.

**Directly declared fields:** 13 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=true; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=true; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/8`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Action Plans | M:N to Inspection Action Plan (CLF_InsActionPlanObject); multiple selection; native map cusCLF_InsActionPlanFindingsToCLF_FindingMap; reverse Findings; Extracted relation Type=3 | N | FilterExpression: full expression in field-expressions.md [F 51155bb6-f0cc-41eb-a602-3b4d70980405 FilterExpression] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ActionPlans; field ID 51155bb6-f0cc-41eb-a602-3b4d70980405 |
| Checklist | M:1 to Checklist Answer (CLF_ChecklistAnswerObject); many → 0..1; reverse Findings; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Default Expression:; internal ChecklistAnswer; field ID badc7bfc-06b0-4b12-acb6-4398eff3a934 |
| Due in | M:1 to CLF - Finding Due Date (CLF_FindingDDObject); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | DefaultValue: eb1f2003-c086-4224-aca9-a26c842f6442 [F 18423386-cbd4-412e-9e90-710173f24669 DefaultValue] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal DueIn; field ID 18423386-cbd4-412e-9e90-710173f24669 |
| Status | M:1 to Finding Status (CLF_FindingStatusObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | DefaultValue: 2ea0b4d2-ce73-4bd4-a837-5030d44e6e45 [F de676db5-1ec1-48bf-b482-62bc76e930b1 DefaultValue] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Update Status; internal FindingStatus; field ID de676db5-1ec1-48bf-b482-62bc76e930b1 |
| Has Action Plans | Yes/No (bit); max length unspecified | N | Calculation: IF(NbAPs&gt;0, TRUE, FALSE) [F e4ec6661-51b4-4bcc-9a3d-ff1aff4f2c1d Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal HasActionPlans; field ID e4ec6661-51b4-4bcc-9a3d-ff1aff4f2c1d |
| Is Open | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: IF(AND(FindingStatus.Code&lt;&gt;"Closed", FindingStatus.Code&lt;&gt;"Closed without Action"), 1, 0) [F db85d606-b22d-4bfa-a34c-a6dea9e0f9ff Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal IsOpen; field ID db85d606-b22d-4bfa-a34c-a6dea9e0f9ff |
| Manual Close Comment | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ManCloseCom; field ID ddc530a0-8585-4533-a8ea-2cf61ed41d64 |
| Close without Action | Yes/No (bit); max length unspecified | N | DefaultValue: false [F e8295e71-37e4-4a16-9475-70954d674bab DefaultValue] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal ManualClose; field ID e8295e71-37e4-4a16-9475-70954d674bab |
| # Action Plans | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(ActionPlans) [F 990b34ac-0ccd-4636-a58f-b6b723cce8a8 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal NbAPs; field ID 990b34ac-0ccd-4636-a58f-b6b723cce8a8 |
| # Opened Action Plans | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(FILTER(ActionPlans.IsCompleted, "&lt;&gt;", TRUE))  [F 8cdbcea5-e567-471c-a514-bc6f541a7b16 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal NbOpAPs; field ID 8cdbcea5-e567-471c-a514-bc6f541a7b16 |
| Person Responsible | M:1 to Employee (SysEmployeeEntity); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | DefaultValue: ChecklistAnswer.DefPersRespFind [F f9df3607-ae7c-41f3-b5da-bc9d53598f4e DefaultValue] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal PersResponsible; field ID f9df3607-ae7c-41f3-b5da-bc9d53598f4e |
| Related Questions | M:N to Question Answer (CLF_QuestionAnswerObject); multiple selection; native map cusCLF_QuestionAnswerFindingsToCLF_FindingMap; reverse Findings; Extracted relation Type=3 | N | FilterExpression: full expression in field-expressions.md [F a69b116f-60c9-4ce2-80e5-9569d93baa68 FilterExpression] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal QuestionAnswers; field ID a69b116f-60c9-4ce2-80e5-9569d93baa68 |
| Response Due | Date (Date); max length unspecified; TimeZoneCapture=null | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Calc Due Date; internal ResponseDue; field ID 542c9285-afc8-48db-b5a9-9ba34915ad4d |


## 38 Finding Status

**Internal name:** `CLF_FindingStatusObject`. **Stable metadata ID:** `2c6e1a6e-253b-4275-9c0c-d9f4b64a8834`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 5 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/125`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Background Color | M:1 to Color (FragApplication_ColorObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal BC; field ID 34b2c376-237c-4feb-b4ad-ee359132fa03 |
| Code | Text (nvarchar); max length 50 | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Code; field ID 5f7af5ed-dc6f-46f3-9370-12cda1502ad3 |
| Icon | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Icon; field ID 1d1ce663-3d82-47b9-ad57-f21c74492d04 |
| Name | Text (nvarchar); max length 250 | N | DefaultValue: Code [F 0e1e53f2-fc07-4118-a04f-e73435763482 DefaultValue] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal Name; field ID 0e1e53f2-fc07-4118-a04f-e73435763482 |
| Text Color | M:1 to Color (FragApplication_ColorObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal TC; field ID 8b8baa98-7ddd-4ca7-9d28-b783f682b60e |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | BC | Code | Icon | Name | TC | Evidence |
|---|---|---|---|---|---|---|
| 522c4ce8-9478-4f0b-bbfc-b050d615cdfb | null | Closed without Action | null | Closed without Action | Dark Blue [5586fde5-8b5c-4edc-b297-d76a895839b6] | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/0 |
| 90db8f7f-26b5-4dfa-93b6-7dec96683ee7 | null | In Progress | null | In Progress | Dark Green [5aab1860-f10c-42e5-b967-1a938cd6ede0] | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/13 |
| b1a82f40-1b4f-4811-8880-717d4fb812b4 | null | Closed | null | Closed | Dark Blue [5586fde5-8b5c-4edc-b297-d76a895839b6] | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/16 |
| 2ea0b4d2-ce73-4bd4-a837-5030d44e6e45 | null | Open | null | Open | Red [f1da27ed-8e56-4222-a00d-32a31789a937] | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/17 |


## 39 Inspection Action Plan

**Internal name:** `CLF_InsActionPlanObject`. **Stable metadata ID:** `b714db5b-7015-4f4e-b05f-a9eb0e507d53`. **Classification:** Extracted record metadata.

**Inheritance parent:** ActionPlans_ActionPlanAbsObject.

**Directly declared fields:** 4 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=true; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/33`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Action Owner | M:1 to Employee (SysEmployeeEntity); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | DefaultValue: ChecklistAnswer.DefPersRespFind [F 0ff76b4f-ebf5-422c-8cb4-47e7e50b95dc DefaultValue] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal ActionOwner; field ID 0ff76b4f-ebf5-422c-8cb4-47e7e50b95dc |
| Checklist Answer | M:1 to Checklist Answer (CLF_ChecklistAnswerObject); many → 1; reverse ActionPlans; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ChecklistAnswer; field ID 95c636e0-b3de-4c31-a95e-9c5d3f650860 |
| Related Findings | M:N to Finding (CLF_FindingObject); multiple selection; native map cusCLF_InsActionPlanFindingsToCLF_FindingMap; reverse ActionPlans; Extracted relation Type=3 | N | FilterExpression: full expression in field-expressions.md [F 97215722-33de-4fb1-a078-e008c9657e7b FilterExpression] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Findings; field ID 97215722-33de-4fb1-a078-e008c9657e7b |
| Record Name | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Set Record Name; internal RecordName; field ID 7f006665-2bb0-41f3-a16a-82d3833c055a |


## 40 Multiple checklists

**Internal name:** `CLF_MultichecklistsObject`. **Stable metadata ID:** `d1173495-0379-44d4-851a-9cab62d3f144`. **Classification:** Extracted record metadata.

**Inheritance parent:** CLF_ChecklistAnswerObject.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=true.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/39`.


## 41 Published Checklist

**Internal name:** `CLF_PubChecklistObject`. **Stable metadata ID:** `f0ba4595-963b-45fd-8b19-592ce53f7b3c`. **Classification:** Extracted record metadata.

**Inheritance parent:** CLF_CheckliAbstractObject.

**Directly declared fields:** 5 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/2`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Checklist | M:1 to Checklist (CLF_ChecklistObject); many → 1; reverse PubChecklists; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Checklist; field ID d8cdefde-5b27-49e3-9903-e96d87fb9f03 |
| Checklist Code | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Copy Values; internal ChecklistRef; field ID 8f9f7d5e-6d8e-49a9-afb2-b837c474c3e0 |
| Checklist Type | M:1 to Checklist Type (CLF_ChecklistTypeObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | Calculation: Checklist.ChecklistType [F d39de5aa-36bf-4f11-9ffa-6d75f6952239 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal ChecklistType; field ID d39de5aa-36bf-4f11-9ffa-6d75f6952239 |
| Is Active | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: For a given Checklist, only one Published Checklist is supposed to be "Active".<br>The Custom Action Handler that publishes Checklist will update this flag automatically.<br>This field must not be deleted.; internal IsActive; field ID 0ba9ffa9-1b46-485d-8d04-84c75a6538af |
| Published Questions | M:N to Published Question (CLF_PubQuestObject); multiple selection; native map CLF_PubChecklistPubQuestionsToCLF_PubQuestMapObject; reverse PubChecklists; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PubQuestions; field ID 29e166c6-3c98-4077-92e4-2c11e9216617 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | ChecklistRef | IsActive | Description | Title | PubQuestions | Checklist | ChecklistType | Evidence |
|---|---|---|---|---|---|---|---|---|
| 58cc867f-8c81-4645-b107-c23f71bebcae | PPAP01.3 | true | Level 3 - Warrant with product samples and complete supporting data submitted to customer. | Level 3 PPAP | Full value in seed-records.json | Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842] | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/31 |
| 0901e0ad-68f4-48b8-af3f-a90191695995 | PPAP01.5 | true | Level 5 - Warrant with product samples and complete supporting data reviewed at supplier's manufacturing location. | Level 5 PPAP | Full value in seed-records.json | Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a] | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/89 |
| f5cee304-fd60-4e39-9fac-32194f591014 | PPAP01.4 | true | Level 4 - Warrant and other requirements as defined by customer. | Level 4 PPAP | Full value in seed-records.json | Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5] | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/120 |
| 6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0 | PPAP01.2 | true | Level 2 - Warrant with product samples and limited supporting data submitted to customer. | Level 2 PPAP | Full value in seed-records.json | Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3] | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/133 |
| 8a4a02cd-37f1-4b52-b97f-8bd186b790e0 | PPAP01.1 | true | Level 1 - Warrant only (and for designated appearance items, an Appearance Approval Report) submitted to customer. | Level 1 PPAP | Full value in seed-records.json | Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583] | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/239 |


## 42 Published Question

**Internal name:** `CLF_PubQuestObject`. **Stable metadata ID:** `0e5d5f7f-2039-4194-8f37-86771b63e36f`. **Classification:** Extracted record metadata.

**Inheritance parent:** CLF_QuestAbstractObject.

**Directly declared fields:** 5 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/74`.

**Package variations:** 1 property differences are retained in [metadata variation register](metadata-variation-register.csv). The main definition is a documentary reference; the optional compatibility add-on and import policy can affect installed values.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Answer Type Code | Text (nvarchar); max length unspecified | N | Calculation: AnswerType.Value [F 3f34e5f3-b2a0-46ed-b808-26a7f0817273 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal AnswerTypeCode; field ID 3f34e5f3-b2a0-46ed-b808-26a7f0817273 |
| Max Points | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: ChoiceList.MaxPoints [F 0500b72d-388e-4883-9998-e75386a93c8d Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal MaxPoints; field ID 0500b72d-388e-4883-9998-e75386a93c8d |
| Published Checklists | M:N to Published Checklist (CLF_PubChecklistObject); multiple selection; native map CLF_PubChecklistPubQuestionsToCLF_PubQuestMapObject; reverse PubQuestions; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PubChecklists; field ID 58db9e04-185a-43b7-8bd6-70f33d147908 |
| Question | M:1 to Question (CLF_QuestObject); many → 1; reverse PubQuestions; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Question; field ID 36704f83-7090-44a3-8b37-72b0b45ebe8c |
| Question Code | Text (nvarchar); max length 100 | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Copy Values from Question during Publish; internal QuestionRef; field ID bb18c2b7-d1f2-4931-bbba-f8f6b50a1964 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | AnswerTypeCode | MaxPoints | QuestionRef | Content | DateModifiedHel | Guideline | Order | Section | PubChecklists | ChoiceList | Question | AnswerType | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6dfe38d1-fea4-41e4-b075-9fcd35c44bcb | Choice | null | PPAP01.18 | Part Submission Warrant (PSW) has been completed? | 2017-09-28T20:50:21.323Z | null | 18 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.18 [024990e4-5492-4cd2-8276-8a192ac04fb4] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/17 |
| 68a65280-c4e1-4ed6-afe6-5f5c1e12c1e8 | Choice | null | PPAP01.18 | Part Submission Warrant (PSW) has been completed? | 2017-09-28T20:50:10.523Z | null | 18 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.18 [024990e4-5492-4cd2-8276-8a192ac04fb4] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/20 |
| a112e5f0-3a3e-401f-b8b8-175c0c417e3f | Choice | null | PPAP01.18 | Part Submission Warrant (PSW) has been completed? | 2017-09-28T20:49:17.65Z | null | 18 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.18 [024990e4-5492-4cd2-8276-8a192ac04fb4] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/21 |
| b1489394-db74-4741-83ea-352b69a49290 | Choice | null | PPAP01.18 | Part Submission Warrant (PSW) has been completed? | 2017-09-28T20:49:59.39Z | null | 18 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.18 [024990e4-5492-4cd2-8276-8a192ac04fb4] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/22 |
| 4639d7c8-2605-40af-889e-c49ee8587766 | Choice | null | PPAP01.18 | Part Submission Warrant (PSW) has been completed? | 2017-09-28T20:49:46.433Z | null | 18 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.18 [024990e4-5492-4cd2-8276-8a192ac04fb4] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/23 |
| 4fbe346f-11c0-41c8-9dc4-b5e20aeca75b | Choice | null | PPAP01.5 | Process Flow Diagram has been attached? | 2017-09-28T20:50:07.62Z | null | 5 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.5 [1639f83e-3c81-40aa-a042-335960acde78] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/30 |
| 2dd2c5cc-7d70-4ae7-973c-7d4f9f4518ac | Choice | null | PPAP01.14 | Sample Production Parts are ready for shipment? | 2017-09-28T20:50:16.013Z | null | 14 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.14 [dc8cbadf-f529-45f5-9c67-f5060e8345a0] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/85 |
| e251d10c-03a2-4664-b852-a2fcf50cbbd7 | Choice | null | PPAP01.12 | Qualified Lab Documentation has been attached? | 2017-09-28T20:50:19.06Z | null | 12 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.12 [c18805b9-04c5-4a21-bafd-4482b4715230] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/108 |
| 7d942400-f00a-4a51-9e7c-797ec8d6fa4a | Choice | null | PPAP01.15 | Master Sample is ready for shipment? | 2017-09-28T20:50:20.81Z | null | 15 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.15 [0acc4121-e00b-474a-b82f-7ed3ab5b8b7e] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/125 |
| f70af990-d75b-46a3-937d-cb1442752639 | Choice | null | PPAP01.3 | Customer Engineering Approval has been attached? | 2017-09-28T20:50:00.543Z | null | 3 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.3 [5a310626-2585-4632-8479-93caab272da6] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/132 |
| 1c21cdff-3d89-45b9-baa7-2d55b36021d1 | Choice | null | PPAP01.2 | Engineering Change Documentation has been attached? | 2017-09-28T20:49:52.18Z | null | 2 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.2 [e99c38fb-a632-4467-8ea9-e85e251d948d] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/134 |
| 1c5c537b-ed04-4a1f-a37c-f79b2861e2ad | Choice | null | PPAP01.17 | Customer Specific Requirements have been attached? | 2017-09-28T20:49:43.86Z | null | 17 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.17 [72af3b6a-dc5c-4200-ac54-71322dea4ecc] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/135 |
| 15e7ccbe-39d3-41dd-9c46-c86397b428f8 | Choice | null | PPAP01.5 | Process Flow Diagram has been attached? | 2017-09-28T20:49:42.09Z | null | 5 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.5 [1639f83e-3c81-40aa-a042-335960acde78] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/136 |
| 99a2e41a-a64b-4ca1-835a-0066409fe17a | Choice | null | PPAP01.6 | PFMEA has been attached? | 2017-09-28T20:49:51.413Z | null | 6 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.6 [604b65b1-b4bf-48b1-99d3-ddd491a1a445] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/137 |
| d42cea62-da93-41bd-8a3c-9666902a40aa | Choice | null | PPAP01.8 | Measurement Systems Analysis (MSA) has been attached? | 2017-09-28T20:49:52.787Z | null | 8 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.8 [ff095fe1-c57c-4c27-8193-ed1adf892592] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/138 |
| 17a1a58d-f662-4fab-a94a-e4426c3b2f5d | Choice | null | PPAP01.10 | Records of Material / Performance Tests have been attached? | 2017-09-28T20:49:49.98Z | null | 10 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.10 [469716c7-822d-4a37-b1cf-cec8edec7338] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/139 |
| f6a49d7b-94a5-4113-801a-87fec725d3e9 | Choice | null | PPAP01.9 | Dimensional Results have been attached? | 2017-09-28T20:49:38.58Z | null | 9 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.9 [252cdbc5-270d-4877-9297-32ba4a96f00e] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/140 |
| cb94b031-eac1-4ca5-80aa-ed8d90cbc98f | Choice | null | PPAP01.13 | Appearance Approval Report has been attached? | 2017-09-28T20:49:50.68Z | null | 13 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.13 [a4872d44-e82d-4c4b-bc46-d0c7820833c8] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/141 |
| e270243c-b62f-44e1-8e8c-03929d8ea11a | Choice | null | PPAP01.14 | Sample Production Parts are ready for shipment? | 2017-09-28T20:49:53.52Z | null | 14 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.14 [dc8cbadf-f529-45f5-9c67-f5060e8345a0] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/142 |
| 79d5b525-1386-4644-b184-f2b2daeaf9b7 | Choice | null | PPAP01.15 | Master Sample is ready for shipment? | 2017-09-28T20:49:45.56Z | null | 15 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.15 [0acc4121-e00b-474a-b82f-7ed3ab5b8b7e] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/143 |
| 47d6f773-79a1-4147-a070-49c93bed8b1f | Choice | null | PPAP01.11 | Initial Process Studies have been attached? | 2017-09-28T20:49:48.433Z | null | 11 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.11 [627cdff8-94bc-4631-8022-a9fb562ed35d] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/144 |
| 8d03dfe6-e345-4da8-a631-7d955dcf4a67 | Choice | null | PPAP01.7 | Control Plan has been attached? | 2017-09-28T20:49:44.657Z | null | 7 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.7 [3aa02b88-9db8-48fa-bfa3-7cde119b2128] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/145 |
| cf07782d-0862-43dc-b4c1-03e60658044f | Choice | null | PPAP01.4 | DFMEA has been attached? | 2017-09-28T20:49:54.193Z | null | 4 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.4 [f1fb227b-c49c-4050-a0f0-fa5da58e0683] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/146 |
| dd8600b4-b40b-4fef-89da-e9726e2c42f5 | Choice | null | PPAP01.3 | Customer Engineering Approval has been attached? | 2017-09-28T20:49:47.843Z | null | 3 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.3 [5a310626-2585-4632-8479-93caab272da6] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/147 |
| a22b06f3-1815-4257-bb44-71d08d1dade3 | Choice | null | PPAP01.16 | Checking Aids have been attached? | 2017-09-28T20:49:47.17Z | null | 16 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.16 [e8225ce8-a10f-4c2d-9cef-8d1636d2c037] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/148 |
| 9e8e2634-3951-4e9f-9987-0bb1ea944185 | Choice | null | PPAP01.1 | Design Documentation complete and attached? | 2017-09-28T20:49:49.12Z | null | 1 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.1 [410db840-f55a-4670-b537-ac7038472456] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/149 |
| 76c6428e-a31b-4fb2-9b91-6c819709980e | Choice | null | PPAP01.12 | Qualified Lab Documentation has been attached? | 2017-09-28T20:49:43.11Z | null | 12 | PPAP Elements | Level 2 PPAP [6b9eee1b-4e5e-4e72-9aec-9e681fbe71f0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.12 [c18805b9-04c5-4a21-bafd-4482b4715230] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/150 |
| e53add00-1d2c-456a-9984-e4d3c7386211 | Choice | null | PPAP01.11 | Initial Process Studies have been attached? | 2017-09-28T20:50:23.023Z | null | 11 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.11 [627cdff8-94bc-4631-8022-a9fb562ed35d] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/169 |
| 1af930b1-1228-47de-bef6-7ba23132425f | Choice | null | PPAP01.16 | Checking Aids have been attached? | 2017-09-28T20:50:00Z | null | 16 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.16 [e8225ce8-a10f-4c2d-9cef-8d1636d2c037] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/191 |
| 67a5a173-5cae-441c-b8a5-4a56ae467223 | Choice | null | PPAP01.16 | Checking Aids have been attached? | 2017-09-28T20:50:11.053Z | null | 16 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.16 [e8225ce8-a10f-4c2d-9cef-8d1636d2c037] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/192 |
| c68b25be-93b8-42d3-8e7f-bdd8613f5838 | Choice | null | PPAP01.16 | Checking Aids have been attached? | 2017-09-28T20:49:17.683Z | null | 16 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.16 [e8225ce8-a10f-4c2d-9cef-8d1636d2c037] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/193 |
| 01919462-0947-491f-a7aa-e5c55ce3aefd | Choice | null | PPAP01.16 | Checking Aids have been attached? | 2017-09-28T20:50:21.87Z | null | 16 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.16 [e8225ce8-a10f-4c2d-9cef-8d1636d2c037] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/194 |
| 476e5e59-091d-4730-b777-f979720c8fa1 | Choice | null | PPAP01.13 | Appearance Approval Report has been attached? | 2017-09-28T20:49:17.837Z | null | 13 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.13 [a4872d44-e82d-4c4b-bc46-d0c7820833c8] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/238 |
| 18e8fa85-3815-4fda-941d-ce7fd6f4c797 | Choice | null | PPAP01.3 | Customer Engineering Approval has been attached? | 2017-09-28T20:49:17.713Z | null | 3 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.3 [5a310626-2585-4632-8479-93caab272da6] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/240 |
| 597560d8-f283-4b26-8d8a-9c6620682628 | Choice | null | PPAP01.3 | Customer Engineering Approval has been attached? | 2017-09-28T20:50:22.417Z | null | 3 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.3 [5a310626-2585-4632-8479-93caab272da6] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/241 |
| 45071396-dbef-457f-bad8-4c2143ba6d0c | Choice | null | PPAP01.3 | Customer Engineering Approval has been attached? | 2017-09-28T20:50:11.583Z | null | 3 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.3 [5a310626-2585-4632-8479-93caab272da6] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/242 |
| 4001ffdd-4fc5-43c2-83df-d2de1dec05d1 | Choice | null | PPAP01.2 | Engineering Change Documentation has been attached? | 2017-09-28T20:50:14.907Z | null | 2 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.2 [e99c38fb-a632-4467-8ea9-e85e251d948d] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/261 |
| c7a58bfc-f548-4cae-8b51-370dd3d9ec80 | Choice | null | PPAP01.4 | DFMEA has been attached? | 2017-09-28T20:50:16.607Z | null | 4 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.4 [f1fb227b-c49c-4050-a0f0-fa5da58e0683] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/290 |
| 1c2923e5-78f9-4ab8-ad10-305ecd1b60d2 | Choice | null | PPAP01.5 | Process Flow Diagram has been attached? | 2017-09-28T20:49:56.457Z | null | 5 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.5 [1639f83e-3c81-40aa-a042-335960acde78] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/296 |
| 96cc34f2-ab87-4f1e-81bd-9c6d991fa93d | Choice | null | PPAP01.11 | Initial Process Studies have been attached? | 2017-09-28T20:50:12.143Z | null | 11 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.11 [627cdff8-94bc-4631-8022-a9fb562ed35d] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/297 |
| ffd3dfd6-5328-49d1-9e80-ee21c361f290 | Choice | null | PPAP01.7 | Control Plan has been attached? | 2017-09-28T20:49:17.59Z | null | 7 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.7 [3aa02b88-9db8-48fa-bfa3-7cde119b2128] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/299 |
| ebe920c3-3f29-4eff-ae08-dee30dbb3898 | Choice | null | PPAP01.7 | Control Plan has been attached? | 2017-09-28T20:50:09.32Z | null | 7 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.7 [3aa02b88-9db8-48fa-bfa3-7cde119b2128] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/304 |
| 2a96adb1-7d3e-4bf3-8584-7acc2bdf8b13 | Choice | null | PPAP01.2 | Engineering Change Documentation has been attached? | 2017-09-28T20:50:03.953Z | null | 2 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.2 [e99c38fb-a632-4467-8ea9-e85e251d948d] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/306 |
| 37162401-b015-498b-b5fd-639a93b993cd | Choice | null | PPAP01.11 | Initial Process Studies have been attached? | 2017-09-28T20:50:01.107Z | null | 11 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.11 [627cdff8-94bc-4631-8022-a9fb562ed35d] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/318 |
| 58c3a4f0-c7d9-4582-ba77-77176c8de103 | Choice | null | PPAP01.15 | Master Sample is ready for shipment? | 2017-09-28T20:49:58.797Z | null | 15 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.15 [0acc4121-e00b-474a-b82f-7ed3ab5b8b7e] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/319 |
| 1abd3f2a-f54d-4dd0-bf98-c77f82519425 | Choice | null | PPAP01.12 | Qualified Lab Documentation has been attached? | 2017-09-28T20:49:57.003Z | null | 12 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.12 [c18805b9-04c5-4a21-bafd-4482b4715230] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/320 |
| 5bf76ad4-1de3-49ab-bbd4-bb04a517bab2 | Choice | null | PPAP01.8 | Measurement Systems Analysis (MSA) has been attached? | 2017-09-28T20:50:04.563Z | null | 8 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.8 [ff095fe1-c57c-4c27-8193-ed1adf892592] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/321 |
| 005c9fa2-11a0-4e73-b971-6d350a2a3b85 | Choice | null | PPAP01.1 | Design Documentation complete and attached? | 2017-09-28T20:50:01.67Z | null | 1 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.1 [410db840-f55a-4670-b537-ac7038472456] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/322 |
| bd2710ce-1795-4b74-bf97-f2edb19e0766 | Choice | null | PPAP01.17 | Customer Specific Requirements have been attached? | 2017-09-28T20:49:57.563Z | null | 17 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.17 [72af3b6a-dc5c-4200-ac54-71322dea4ecc] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/323 |
| 431bf4f7-53df-477b-96c3-d8377c1d3bc1 | Choice | null | PPAP01.10 | Records of Material / Performance Tests have been attached? | 2017-09-28T20:50:02.247Z | null | 10 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.10 [469716c7-822d-4a37-b1cf-cec8edec7338] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/324 |
| fd0ebb92-65ac-4b33-b1fa-d6f7b230be8c | Choice | null | PPAP01.9 | Dimensional Results have been attached? | 2017-09-28T20:49:55.817Z | null | 9 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.9 [252cdbc5-270d-4877-9297-32ba4a96f00e] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/325 |
| 65e5729d-64a1-40bd-9297-60e32075da92 | Choice | null | PPAP01.4 | DFMEA has been attached? | 2017-09-28T20:50:05.7Z | null | 4 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.4 [f1fb227b-c49c-4050-a0f0-fa5da58e0683] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/326 |
| 3a3cf762-eeb9-4dfa-b956-0b0c46f45123 | Choice | null | PPAP01.7 | Control Plan has been attached? | 2017-09-28T20:49:58.19Z | null | 7 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.7 [3aa02b88-9db8-48fa-bfa3-7cde119b2128] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/327 |
| a375f556-d9c3-4537-bb77-9753f2f1f084 | Choice | null | PPAP01.14 | Sample Production Parts are ready for shipment? | 2017-09-28T20:50:05.14Z | null | 14 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.14 [dc8cbadf-f529-45f5-9c67-f5060e8345a0] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/328 |
| e7d0ca8b-d174-402b-9179-a732f6f276be | Choice | null | PPAP01.13 | Appearance Approval Report has been attached? | 2017-09-28T20:50:02.823Z | null | 13 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.13 [a4872d44-e82d-4c4b-bc46-d0c7820833c8] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/329 |
| 1a629c5d-a36a-4a8f-9031-d864b99aa771 | Choice | null | PPAP01.6 | PFMEA has been attached? | 2017-09-28T20:50:03.393Z | null | 6 | PPAP Elements | Level 4 PPAP [f5cee304-fd60-4e39-9fac-32194f591014] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.6 [604b65b1-b4bf-48b1-99d3-ddd491a1a445] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/330 |
| 2e0bbdc4-e292-4798-952b-8157758b3feb | Choice | null | PPAP01.9 | Dimensional Results have been attached? | 2017-09-28T20:50:07.09Z | null | 9 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.9 [252cdbc5-270d-4877-9297-32ba4a96f00e] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/331 |
| b3fdf006-6d0f-4f81-8b02-0662d13750d1 | Choice | null | PPAP01.9 | Dimensional Results have been attached? | 2017-09-28T20:49:17.493Z | null | 9 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.9 [252cdbc5-270d-4877-9297-32ba4a96f00e] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/335 |
| 75cf48bc-a1e5-47d0-bd58-6567774cb1eb | Choice | null | PPAP01.2 | Engineering Change Documentation has been attached? | 2017-09-28T20:49:17.9Z | null | 2 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.2 [e99c38fb-a632-4467-8ea9-e85e251d948d] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/351 |
| 59b229a3-8691-4608-84f2-c0b98664f81a | Choice | null | PPAP01.10 | Records of Material / Performance Tests have been attached? | 2017-09-28T20:49:17.807Z | null | 10 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.10 [469716c7-822d-4a37-b1cf-cec8edec7338] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/359 |
| aa4bf854-b5c0-4cf4-bd87-8cc41e5dcd6e | Choice | null | PPAP01.8 | Measurement Systems Analysis (MSA) has been attached? | 2017-09-28T20:49:17.933Z | null | 8 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.8 [ff095fe1-c57c-4c27-8193-ed1adf892592] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/360 |
| bb6c773b-27d8-4592-989a-ac784fb7f6b7 | Choice | null | PPAP01.4 | DFMEA has been attached? | 2017-09-28T20:49:18.01Z | null | 4 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.4 [f1fb227b-c49c-4050-a0f0-fa5da58e0683] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/361 |
| 6e340537-7c23-49f3-8905-63cc220e6fe8 | Choice | null | PPAP01.11 | Initial Process Studies have been attached? | 2017-09-28T20:49:17.743Z | null | 11 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.11 [627cdff8-94bc-4631-8022-a9fb562ed35d] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/362 |
| 5880c121-fa7d-4417-ace7-57b97e281d6e | Choice | null | PPAP01.5 | Process Flow Diagram has been attached? | 2017-09-28T20:49:17.51Z | null | 5 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.5 [1639f83e-3c81-40aa-a042-335960acde78] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/363 |
| 52467c9c-a406-4e79-999f-734f86f0e05e | Choice | null | PPAP01.14 | Sample Production Parts are ready for shipment? | 2017-09-28T20:49:17.98Z | null | 14 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.14 [dc8cbadf-f529-45f5-9c67-f5060e8345a0] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/364 |
| 933066da-8bf6-4a20-9a5a-413e7115d60f | Choice | null | PPAP01.1 | Design Documentation complete and attached? | 2017-09-28T20:49:17.777Z | null | 1 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.1 [410db840-f55a-4670-b537-ac7038472456] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/365 |
| e684af09-1eed-465d-9736-8ea43ac8b11d | Choice | null | PPAP01.12 | Qualified Lab Documentation has been attached? | 2017-09-28T20:49:17.527Z | null | 12 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.12 [c18805b9-04c5-4a21-bafd-4482b4715230] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/366 |
| b77b52af-38fc-4b72-b517-2c074512d90b | Choice | null | PPAP01.6 | PFMEA has been attached? | 2017-09-28T20:49:17.87Z | null | 6 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.6 [604b65b1-b4bf-48b1-99d3-ddd491a1a445] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/367 |
| 2a920f82-8237-4f58-b99a-d1d2a04a4ca6 | Choice | null | PPAP01.15 | Master Sample is ready for shipment? | 2017-09-28T20:49:17.62Z | null | 15 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.15 [0acc4121-e00b-474a-b82f-7ed3ab5b8b7e] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/368 |
| 176f233a-febe-41b3-85d4-b376c13b5c8d | Choice | null | PPAP01.17 | Customer Specific Requirements have been attached? | 2017-09-28T20:49:17.557Z | null | 17 | PPAP Elements | Level 1 PPAP [8a4a02cd-37f1-4b52-b97f-8bd186b790e0] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.17 [72af3b6a-dc5c-4200-ac54-71322dea4ecc] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/369 |
| 0fcc429f-6029-4ffd-949d-c35dc29ec340 | Choice | null | PPAP01.9 | Dimensional Results have been attached? | 2017-09-28T20:50:17.887Z | null | 9 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.9 [252cdbc5-270d-4877-9297-32ba4a96f00e] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/378 |
| 98af929b-44cc-415a-be9c-84c7ca4c5802 | Choice | null | PPAP01.17 | Customer Specific Requirements have been attached? | 2017-09-28T20:50:08.773Z | null | 17 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.17 [72af3b6a-dc5c-4200-ac54-71322dea4ecc] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/387 |
| 2c2ff285-7285-4b90-9bc5-430060aa04e4 | Choice | null | PPAP01.10 | Records of Material / Performance Tests have been attached? | 2017-09-28T20:50:24.163Z | null | 10 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.10 [469716c7-822d-4a37-b1cf-cec8edec7338] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/395 |
| 5025dbf3-f942-43a6-91a7-4dd858d661a0 | Choice | null | PPAP01.10 | Records of Material / Performance Tests have been attached? | 2017-09-28T20:50:13.27Z | null | 10 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.10 [469716c7-822d-4a37-b1cf-cec8edec7338] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/396 |
| 2beced50-263f-4b07-af3d-7c2d910c06b2 | Choice | null | PPAP01.6 | PFMEA has been attached? | 2017-09-28T20:50:25.307Z | null | 6 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.6 [604b65b1-b4bf-48b1-99d3-ddd491a1a445] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/415 |
| 5c6bd067-5b89-4162-be76-751db226307f | Choice | null | PPAP01.6 | PFMEA has been attached? | 2017-09-28T20:50:14.377Z | null | 6 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.6 [604b65b1-b4bf-48b1-99d3-ddd491a1a445] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/416 |
| 999edc99-a633-4211-a45a-4cfeef487f6f | Choice | null | PPAP01.4 | DFMEA has been attached? | 2017-09-28T20:50:27.473Z | null | 4 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.4 [f1fb227b-c49c-4050-a0f0-fa5da58e0683] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/417 |
| 14835552-b8ae-4e6b-97b4-7656d1093894 | Choice | null | PPAP01.5 | Process Flow Diagram has been attached? | 2017-09-28T20:50:18.48Z | null | 5 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.5 [1639f83e-3c81-40aa-a042-335960acde78] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/428 |
| 62ae9a73-118c-40d1-aaf6-7f89c873df46 | Choice | null | PPAP01.17 | Customer Specific Requirements have been attached? | 2017-09-28T20:50:19.67Z | null | 17 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.17 [72af3b6a-dc5c-4200-ac54-71322dea4ecc] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/430 |
| 9757f902-53ca-4ed4-a481-810fc587e213 | Choice | null | PPAP01.8 | Measurement Systems Analysis (MSA) has been attached? | 2017-09-28T20:50:15.437Z | null | 8 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.8 [ff095fe1-c57c-4c27-8193-ed1adf892592] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/449 |
| c596986d-caa1-4453-b60a-81a39fe13d49 | Choice | null | PPAP01.15 | Master Sample is ready for shipment? | 2017-09-28T20:50:09.96Z | null | 15 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.15 [0acc4121-e00b-474a-b82f-7ed3ab5b8b7e] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/450 |
| 2cc75059-43df-46d6-9c1e-aa7aba216cf2 | Choice | null | PPAP01.1 | Design Documentation complete and attached? | 2017-09-28T20:50:12.723Z | null | 1 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.1 [410db840-f55a-4670-b537-ac7038472456] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/451 |
| 172ab4f4-0078-4be7-9471-198ef43a877f | Choice | null | PPAP01.1 | Design Documentation complete and attached? | 2017-09-28T20:50:23.617Z | null | 1 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.1 [410db840-f55a-4670-b537-ac7038472456] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/452 |
| c87064a4-cc62-4326-80a5-0e0a671f6c84 | Choice | null | PPAP01.13 | Appearance Approval Report has been attached? | 2017-09-28T20:50:13.83Z | null | 13 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.13 [a4872d44-e82d-4c4b-bc46-d0c7820833c8] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/453 |
| 6e149c51-318a-4708-8b5c-bbcf6e8223ff | Choice | null | PPAP01.13 | Appearance Approval Report has been attached? | 2017-09-28T20:50:24.697Z | null | 13 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.13 [a4872d44-e82d-4c4b-bc46-d0c7820833c8] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/456 |
| 389b5b18-8eca-439b-afdd-ec440123b240 | Choice | null | PPAP01.12 | Qualified Lab Documentation has been attached? | 2017-09-28T20:50:08.213Z | null | 12 | PPAP Elements | Level 3 PPAP [58cc867f-8c81-4645-b107-c23f71bebcae] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.12 [c18805b9-04c5-4a21-bafd-4482b4715230] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/464 |
| 2e9a6695-3f31-4f5b-97e3-e7d0ad79469b | Choice | null | PPAP01.7 | Control Plan has been attached? | 2017-09-28T20:50:20.2Z | null | 7 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.7 [3aa02b88-9db8-48fa-bfa3-7cde119b2128] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/465 |
| 76471da5-5a3d-4a04-8fbb-fc76a403ebd0 | Choice | null | PPAP01.8 | Measurement Systems Analysis (MSA) has been attached? | 2017-09-28T20:50:26.43Z | null | 8 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.8 [ff095fe1-c57c-4c27-8193-ed1adf892592] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/466 |
| 5b479fff-70ec-4a80-93bc-3431f1dff2ff | Choice | null | PPAP01.2 | Engineering Change Documentation has been attached? | 2017-09-28T20:50:25.837Z | null | 2 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.2 [e99c38fb-a632-4467-8ea9-e85e251d948d] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/477 |
| 1f030ce7-fd03-44eb-b403-2f355a6a3c0e | Choice | null | PPAP01.14 | Sample Production Parts are ready for shipment? | 2017-09-28T20:50:26.943Z | null | 14 | PPAP Elements | Level 5 PPAP [0901e0ad-68f4-48b8-af3f-a90191695995] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | PPAP01.14 [dc8cbadf-f529-45f5-9c67-f5060e8345a0] | Choice [771916e1-5251-4658-add8-3091457e7295] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/482 |


## 43 Question Abstract

**Internal name:** `CLF_QuestAbstractObject`. **Stable metadata ID:** `312a57bc-343e-4337-a251-91609c550820`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 8 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/127`.

**Package variations:** 1 property differences are retained in [metadata variation register](metadata-variation-register.csv). The main definition is a documentary reference; the optional compatibility add-on and import policy can affect installed values.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Answer Type | M:1 to CLF - Answer Type (CLF_AnswerTypeObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | DefaultValue: 771916e1-5251-4658-add8-3091457e7295 [F ae6d1a33-3e2a-46dc-8786-84b48cf2c664 DefaultValue] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Copy Values from Question during Publish; internal AnswerType; field ID ae6d1a33-3e2a-46dc-8786-84b48cf2c664 |
| Choice List | M:1 to Choice List (CLF_ChoiceListObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Clean up Choice List Field; Action Handler: Copy Values from Question during Publish; internal ChoiceList; field ID c5a89cb6-3576-4a9c-b988-d4cb637239ec |
| Question | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Copy Values from Question during Publish; internal Content; field ID 959ddf0c-0824-4f40-bcd3-e3df2ac3440c |
| Date Created | Date and Time (datetime); max length unspecified; TimeZoneCapture=null | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal DateCreated; field ID 61736226-122f-4368-a3a0-fc0da15c4be1 |
| Date Modified Helper | Date and Time (datetime); max length unspecified; TimeZoneCapture=null | N | None exported | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; description: Set by a Custom Action Handler to track "real" last modification date/time.<br>Do not touch this field.; internal DateModifiedHel; field ID ef60b652-eb8c-450e-953a-12df640dbf2a |
| Guideline | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Copy Values from Question during Publish; internal Guideline; field ID ec2afd43-5eb1-4e93-969f-812dffc7f1c6 |
| Order | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Init Values; Action Handler: Copy Values from Question during Publish; internal Order; field ID dc7ebfa2-f7f5-4ae0-a693-268dda18dc4e |
| Section | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Copy Values from Question during Publish; internal Section; field ID ce64e09e-51c6-41db-a259-63a723265b69 |


## 44 Question Answer

**Internal name:** `CLF_QuestionAnswerObject`. **Stable metadata ID:** `9083e2f5-2e24-4174-92db-75a61a217d0b`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 20 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=true; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/51`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Answer Text | Text (nvarchar); max length unspecified | N | Calculation: full expression in field-expressions.md [F 6ca75a85-7f52-42de-bba7-618af4e7f28a Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: This field contains the Text of the Answer.; internal AnswerText; field ID 6ca75a85-7f52-42de-bba7-618af4e7f28a |
| Answer - Checkbox | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Checkbox; field ID 8211a4c7-41ee-4e85-adbf-4c75d44152ff |
| Checklist Answer | M:1 to Checklist Answer (CLF_ChecklistAnswerObject); many → 1; reverse QuestionAnswers; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ChecklistAnswer; field ID 8ce10742-2390-4fb2-bdc1-232fec7d5da7 |
| Answer - Choice | M:1 to Choice (CLF_ChoiceObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | FilterExpression: full expression in field-expressions.md [F 00b884fc-b74e-4f87-91cd-f0fcdea9fd59 FilterExpression] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Check Consistency; internal Choice; field ID 00b884fc-b74e-4f87-91cd-f0fcdea9fd59 |
| Answer - Choices | M:N to Choice (CLF_ChoiceObject); multiple selection; native map CLF_QuestionAnswerChoicesToCLF_ChoiceMapObject; no named inverse exported; Extracted relation Type=3 | N | FilterExpression: full expression in field-expressions.md [F 028137c1-e158-40b5-8df6-1d00430fe251 FilterExpression] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Choices; field ID 028137c1-e158-40b5-8df6-1d00430fe251 |
| Comments | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Comments; field ID 404a4db3-2588-4f72-af27-59eef36fb8e2 |
| Answer - Date | Date (Date); max length unspecified; TimeZoneCapture=null | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Date; field ID 6457b898-ecf8-48cd-9a35-fc4960969a87 |
| Findings | M:N to Finding (CLF_FindingObject); multiple selection; native map cusCLF_QuestionAnswerFindingsToCLF_FindingMap; reverse QuestionAnswers; Extracted relation Type=3 | N | FilterExpression: full expression in field-expressions.md [F 8fea66f7-a0c8-4ca0-9e94-5ce6bc2cc591 FilterExpression] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Findings; field ID 8fea66f7-a0c8-4ca0-9e94-5ce6bc2cc591 |
| Answer - Float | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Float; field ID c89ec8e0-2cc7-4ec6-885d-a23bcd6f32da |
| Is Applicable | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | DefaultValue: 1 [F 4431b722-2378-41fe-98d2-3a3b9927540a DefaultValue] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: This field is set to 1 by the custom action handler; internal IsApplicable; field ID 4431b722-2378-41fe-98d2-3a3b9927540a |
| Is Filled | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: full expression in field-expressions.md [F 0b2e82a0-a21f-444c-9833-03201f261d45 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: This field must contains 1 if the Question can be considered as "answered", 0 if not. This expression can be changed if needed.; internal IsFilled; field ID 0b2e82a0-a21f-444c-9833-03201f261d45 |
| Choice (Mass Update) | M:1 to Choice (CLF_ChoiceObject); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Check Consistency; internal MassUpChoice; field ID 4843a3c0-c8ac-4d05-830b-6d1bf0bca72f |
| Max Points | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: IF(Choice.Value=NULL, NULL,  PubQuestion.MaxPoints) [F 7a552bca-cb1a-4bd0-9610-2c6103fb3978 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: This field is also populated by the custom action handler.<br><br>It must not be deleted.; internal MaxPoints; field ID 7a552bca-cb1a-4bd0-9610-2c6103fb3978 |
| # Actions | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal NbActions; field ID 4aaa1dc7-9163-4bc8-9893-cdaf2ea87ba1 |
| # Findings | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(Findings) [F 3339c315-5a31-4182-88fb-8ccdc11129b0 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal NbFindings; field ID 3339c315-5a31-4182-88fb-8ccdc11129b0 |
| # Docs | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal NumbofDocuments; field ID 83421bd8-0fee-4dc9-b85c-a7776c12b89c |
| Points Awarded | Float (Float); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: IF(PubQuestion.AnswerTypeCode="Choice", Choice.Value, IF(PubQuestion.AnswerTypeCode="Choices", MAX(Choices.Value), NULL)) [F 13f33185-7b90-4a4c-a6ae-23231f4d20ba Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal PointsAwarded; field ID 13f33185-7b90-4a4c-a6ae-23231f4d20ba |
| Published Question | M:1 to Published Question (CLF_PubQuestObject); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | FilterExpression: full expression in field-expressions.md [F cbf01deb-2a66-4943-b517-0d9852655cb0 FilterExpression] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PubQuestion; field ID cbf01deb-2a66-4943-b517-0d9852655cb0 |
| Question Code | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; description: This field contains the Reference of the Question. It is populated by the Generate Answer Custom Action Handler (PubQuestion.QuestionRef). It can be <br>used as a Key to update Question Answer when using Import.; internal QuestionRef; field ID 3e4b579c-7c9f-4dc2-a392-328560e1040c |
| Answer - Text | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Text; field ID 287b378e-2e62-478b-a1f9-cc1a831d684f |


## 45 Question

**Internal name:** `CLF_QuestObject`. **Stable metadata ID:** `92628acf-dcc3-41c3-b23f-198d83cba0ef`. **Classification:** Extracted record metadata.

**Inheritance parent:** CLF_QuestAbstractObject.

**Directly declared fields:** 9 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=true; documents=true; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/31`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Checklists | M:N to Checklist (CLF_ChecklistObject); multiple selection; native map CLF_ChecklistQuestionsToCLF_QuestMapObject; reverse Questions; Extracted relation Type=3 | N | FilterExpression: full expression in field-expressions.md [F fadf3603-b0a8-4375-aa03-c69c58375923 FilterExpression] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Checklists; field ID fadf3603-b0a8-4375-aa03-c69c58375923 |
| Checklist Type | M:1 to Checklist Type (CLF_ChecklistTypeObject); many → 1; reverse Questions; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ChecklistType; field ID 56ef9f9e-5084-4305-b54c-cc8179a3f627 |
| Last Publish | Date and Time (datetime); max length unspecified; TimeZoneCapture=null | N | Calculation: MAX(PubQuestions.DateCreated) [F e3a6ab98-6fc6-431f-af48-9d97a19e32cb Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: This field is used by the published mechanism. It must not be modified.; internal LastPublish; field ID e3a6ab98-6fc6-431f-af48-9d97a19e32cb |
| # Checklists | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(Checklists) [F 2cfbe2bb-b3ca-432e-8690-f67f6d8d42c3 Calculation] | Metadata IsReadOnly=true; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal NbChecklists; field ID 2cfbe2bb-b3ca-432e-8690-f67f6d8d42c3 |
| Published Questions | 1:M to Published Question (CLF_PubQuestObject); inverse collection; no new stored reference; reverse Question; Inferred from foreign-key inverse and declaring end | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PubQuestions; field ID 03a5d8d6-8ea7-4d34-9262-0b548318c141 |
| Question Code | Text (nvarchar); max length 200 | Y | DefaultValue: CONCATENATE(ChecklistType.Reference, ".",  ChecklistType.NbQuestions+1) [F c5277595-969b-4857-98ae-ff9f1df39590 DefaultValue] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal QuestionRef; field ID c5277595-969b-4857-98ae-ff9f1df39590 |
| Tags | M:N to Tag (CLF_TagObject); multiple selection; native map cusCLF_QuestReferencesToCLF_TagMap; reverse Questions; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal References; field ID 0a7920cd-f4f4-4542-a136-bf51e567de47 |
| Text References | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Clean up Choice List Field; internal TextReferences; field ID 628a37dc-4c8b-4c5e-876f-d2f98fb29bd6 |
| Include References | Yes/No (bit); max length unspecified | N | DefaultValue: false [F d19523f4-839a-424c-831a-866fdda10855 DefaultValue] | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal UseReferences; field ID d19523f4-839a-424c-831a-866fdda10855 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | LastPublish | NbChecklists | QuestionRef | TextReferences | UseReferences | Content | DateModifiedHel | Guideline | Order | Section | References | ChecklistType | Checklists | AnswerType | PubQuestions | ChoiceList | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 024990e4-5492-4cd2-8276-8a192ac04fb4 | 2017-09-28T20:50:32.053Z | 5 | PPAP01.18 | null | false | Part Submission Warrant (PSW) has been completed? | 2017-09-28T20:50:32.193Z | null | 18 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.18 [6dfe38d1-fea4-41e4-b075-9fcd35c44bcb]; PPAP01.18 [68a65280-c4e1-4ed6-afe6-5f5c1e12c1e8]; PPAP01.18 [a112e5f0-3a3e-401f-b8b8-175c0c417e3f]; PPAP01.18 [b1489394-db74-4741-83ea-352b69a49290]; PPAP01.18 [4639d7c8-2605-40af-889e-c49ee8587766] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/709; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/12 |
| 1639f83e-3c81-40aa-a042-335960acde78 | 2017-09-28T20:50:29.18Z | 5 | PPAP01.5 | null | false | Process Flow Diagram has been attached? | 2017-09-28T20:50:29.35Z | null | 5 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.5 [15e7ccbe-39d3-41dd-9c46-c86397b428f8]; PPAP01.5 [5880c121-fa7d-4417-ace7-57b97e281d6e]; PPAP01.5 [14835552-b8ae-4e6b-97b4-7656d1093894]; PPAP01.5 [4fbe346f-11c0-41c8-9dc4-b5e20aeca75b]; PPAP01.5 [1c2923e5-78f9-4ab8-ad10-305ecd1b60d2] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/875; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/32 |
| dc8cbadf-f529-45f5-9c67-f5060e8345a0 | 2017-09-28T20:50:37.87Z | 5 | PPAP01.14 | null | false | Sample Production Parts are ready for shipment? | 2017-09-28T20:50:37.997Z | null | 14 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.14 [2dd2c5cc-7d70-4ae7-973c-7d4f9f4518ac]; PPAP01.14 [52467c9c-a406-4e79-999f-734f86f0e05e]; PPAP01.14 [e270243c-b62f-44e1-8e8c-03929d8ea11a]; PPAP01.14 [1f030ce7-fd03-44eb-b403-2f355a6a3c0e]; PPAP01.14 [a375f556-d9c3-4537-bb77-9753f2f1f084] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/934; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/86 |
| e8225ce8-a10f-4c2d-9cef-8d1636d2c037 | 2017-09-28T20:50:32.723Z | 5 | PPAP01.16 | null | false | Checking Aids have been attached? | 2017-09-28T20:50:32.863Z | null | 16 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.16 [a22b06f3-1815-4257-bb44-71d08d1dade3]; PPAP01.16 [1af930b1-1228-47de-bef6-7ba23132425f]; PPAP01.16 [67a5a173-5cae-441c-b8a5-4a56ae467223]; PPAP01.16 [c68b25be-93b8-42d3-8e7f-bdd8613f5838]; PPAP01.16 [01919462-0947-491f-a7aa-e5c55ce3aefd] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/645; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/87 |
| 252cdbc5-270d-4877-9297-32ba4a96f00e | 2017-09-28T20:50:28.587Z | 5 | PPAP01.9 | null | false | Dimensional Results have been attached? | 2017-09-28T20:50:28.713Z | null | 9 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.9 [fd0ebb92-65ac-4b33-b1fa-d6f7b230be8c]; PPAP01.9 [f6a49d7b-94a5-4113-801a-87fec725d3e9]; PPAP01.9 [b3fdf006-6d0f-4f81-8b02-0662d13750d1]; PPAP01.9 [2e0bbdc4-e292-4798-952b-8157758b3feb]; PPAP01.9 [0fcc429f-6029-4ffd-949d-c35dc29ec340] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/948; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/88 |
| 469716c7-822d-4a37-b1cf-cec8edec7338 | 2017-09-28T20:50:35Z | 5 | PPAP01.10 | null | false | Records of Material / Performance Tests have been attached? | 2017-09-28T20:50:35.14Z | null | 10 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.10 [59b229a3-8691-4608-84f2-c0b98664f81a]; PPAP01.10 [2c2ff285-7285-4b90-9bc5-430060aa04e4]; PPAP01.10 [5025dbf3-f942-43a6-91a7-4dd858d661a0]; PPAP01.10 [431bf4f7-53df-477b-96c3-d8377c1d3bc1]; PPAP01.10 [17a1a58d-f662-4fab-a94a-e4426c3b2f5d] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/940; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/90 |
| 72af3b6a-dc5c-4200-ac54-71322dea4ecc | 2017-09-28T20:50:30.397Z | 5 | PPAP01.17 | null | false | Customer Specific Requirements have been attached? | 2017-09-28T20:50:30.52Z | null | 17 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.17 [1c5c537b-ed04-4a1f-a37c-f79b2861e2ad]; PPAP01.17 [62ae9a73-118c-40d1-aaf6-7f89c873df46]; PPAP01.17 [98af929b-44cc-415a-be9c-84c7ca4c5802]; PPAP01.17 [176f233a-febe-41b3-85d4-b376c13b5c8d]; PPAP01.17 [bd2710ce-1795-4b74-bf97-f2edb19e0766] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/149; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/91 |
| 0acc4121-e00b-474a-b82f-7ed3ab5b8b7e | 2017-09-28T20:50:31.523Z | 5 | PPAP01.15 | null | false | Master Sample is ready for shipment? | 2017-09-28T20:50:31.647Z | null | 15 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.15 [c596986d-caa1-4453-b60a-81a39fe13d49]; PPAP01.15 [58c3a4f0-c7d9-4582-ba77-77176c8de103]; PPAP01.15 [79d5b525-1386-4644-b184-f2b2daeaf9b7]; PPAP01.15 [2a920f82-8237-4f58-b99a-d1d2a04a4ca6]; PPAP01.15 [7d942400-f00a-4a51-9e7c-797ec8d6fa4a] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/489; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/92 |
| c18805b9-04c5-4a21-bafd-4482b4715230 | 2017-09-28T20:50:29.82Z | 5 | PPAP01.12 | null | false | Qualified Lab Documentation has been attached? | 2017-09-28T20:50:29.96Z | null | 12 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.12 [e251d10c-03a2-4664-b852-a2fcf50cbbd7]; PPAP01.12 [76c6428e-a31b-4fb2-9b91-6c819709980e]; PPAP01.12 [e684af09-1eed-465d-9736-8ea43ac8b11d]; PPAP01.12 [389b5b18-8eca-439b-afdd-ec440123b240]; PPAP01.12 [1abd3f2a-f54d-4dd0-bf98-c77f82519425] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/265; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/93 |
| e99c38fb-a632-4467-8ea9-e85e251d948d | 2017-09-28T20:50:36.607Z | 5 | PPAP01.2 | null | false | Engineering Change Documentation has been attached? | 2017-09-28T20:50:36.733Z | null | 2 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.2 [1c21cdff-3d89-45b9-baa7-2d55b36021d1]; PPAP01.2 [4001ffdd-4fc5-43c2-83df-d2de1dec05d1]; PPAP01.2 [75cf48bc-a1e5-47d0-bd58-6567774cb1eb]; PPAP01.2 [5b479fff-70ec-4a80-93bc-3431f1dff2ff]; PPAP01.2 [2a96adb1-7d3e-4bf3-8584-7acc2bdf8b13] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/122; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/94 |
| 627cdff8-94bc-4631-8022-a9fb562ed35d | 2017-09-28T20:50:33.83Z | 5 | PPAP01.11 | null | false | Initial Process Studies have been attached? | 2017-09-28T20:50:33.957Z | null | 11 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.11 [37162401-b015-498b-b5fd-639a93b993cd]; PPAP01.11 [96cc34f2-ab87-4f1e-81bd-9c6d991fa93d]; PPAP01.11 [e53add00-1d2c-456a-9984-e4d3c7386211]; PPAP01.11 [6e340537-7c23-49f3-8905-63cc220e6fe8]; PPAP01.11 [47d6f773-79a1-4147-a070-49c93bed8b1f] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/768; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/95 |
| ff095fe1-c57c-4c27-8193-ed1adf892592 | 2017-09-28T20:50:37.137Z | 5 | PPAP01.8 | null | false | Measurement Systems Analysis (MSA) has been attached? | 2017-09-28T20:50:37.277Z | null | 8 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.8 [d42cea62-da93-41bd-8a3c-9666902a40aa]; PPAP01.8 [5bf76ad4-1de3-49ab-bbd4-bb04a517bab2]; PPAP01.8 [76471da5-5a3d-4a04-8fbb-fc76a403ebd0]; PPAP01.8 [aa4bf854-b5c0-4cf4-bd87-8cc41e5dcd6e]; PPAP01.8 [9757f902-53ca-4ed4-a481-810fc587e213] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/428; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/96 |
| 410db840-f55a-4670-b537-ac7038472456 | 2017-09-28T20:50:34.377Z | 5 | PPAP01.1 | null | false | Design Documentation complete and attached? | 2017-09-28T20:50:34.5Z | null | 1 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.1 [9e8e2634-3951-4e9f-9987-0bb1ea944185]; PPAP01.1 [933066da-8bf6-4a20-9a5a-413e7115d60f]; PPAP01.1 [2cc75059-43df-46d6-9c1e-aa7aba216cf2]; PPAP01.1 [172ab4f4-0078-4be7-9471-198ef43a877f]; PPAP01.1 [005c9fa2-11a0-4e73-b971-6d350a2a3b85] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/809; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/97 |
| a4872d44-e82d-4c4b-bc46-d0c7820833c8 | 2017-09-28T20:50:35.53Z | 5 | PPAP01.13 | null | false | Appearance Approval Report has been attached? | 2017-09-28T20:50:35.657Z | null | 13 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.13 [cb94b031-eac1-4ca5-80aa-ed8d90cbc98f]; PPAP01.13 [476e5e59-091d-4730-b777-f979720c8fa1]; PPAP01.13 [c87064a4-cc62-4326-80a5-0e0a671f6c84]; PPAP01.13 [e7d0ca8b-d174-402b-9179-a732f6f276be]; PPAP01.13 [6e149c51-318a-4708-8b5c-bbcf6e8223ff] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/767; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/98 |
| f1fb227b-c49c-4050-a0f0-fa5da58e0683 | 2017-09-28T20:50:38.447Z | 5 | PPAP01.4 | null | false | DFMEA has been attached? | 2017-09-28T20:50:38.573Z | null | 4 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.4 [c7a58bfc-f548-4cae-8b51-370dd3d9ec80]; PPAP01.4 [bb6c773b-27d8-4592-989a-ac784fb7f6b7]; PPAP01.4 [999edc99-a633-4211-a45a-4cfeef487f6f]; PPAP01.4 [65e5729d-64a1-40bd-9297-60e32075da92]; PPAP01.4 [cf07782d-0862-43dc-b4c1-03e60658044f] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/666; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/99 |
| 5a310626-2585-4632-8479-93caab272da6 | 2017-09-28T20:50:33.283Z | 5 | PPAP01.3 | null | false | Customer Engineering Approval has been attached? | 2017-09-28T20:50:33.457Z | null | 3 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.3 [18e8fa85-3815-4fda-941d-ce7fd6f4c797]; PPAP01.3 [f70af990-d75b-46a3-937d-cb1442752639]; PPAP01.3 [597560d8-f283-4b26-8d8a-9c6620682628]; PPAP01.3 [dd8600b4-b40b-4fef-89da-e9726e2c42f5]; PPAP01.3 [45071396-dbef-457f-bad8-4c2143ba6d0c] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/864; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/100 |
| 604b65b1-b4bf-48b1-99d3-ddd491a1a445 | 2017-09-28T20:50:36.093Z | 5 | PPAP01.6 | null | false | PFMEA has been attached? | 2017-09-28T20:50:36.217Z | null | 6 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.6 [5c6bd067-5b89-4162-be76-751db226307f]; PPAP01.6 [99a2e41a-a64b-4ca1-835a-0066409fe17a]; PPAP01.6 [2beced50-263f-4b07-af3d-7c2d910c06b2]; PPAP01.6 [b77b52af-38fc-4b72-b517-2c074512d90b]; PPAP01.6 [1a629c5d-a36a-4a8f-9031-d864b99aa771] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/511; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/101 |
| 3aa02b88-9db8-48fa-bfa3-7cde119b2128 | 2017-09-28T20:50:30.99Z | 5 | PPAP01.7 | null | false | Control Plan has been attached? | 2017-09-28T20:50:31.113Z | null | 7 | PPAP Elements | null | PPAP Checklists [969b68f3-e25f-4382-9d2d-9c68b494a3d8] | Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842] | Choice [771916e1-5251-4658-add8-3091457e7295] | PPAP01.7 [8d03dfe6-e345-4da8-a631-7d955dcf4a67]; PPAP01.7 [ebe920c3-3f29-4eff-ae08-dee30dbb3898]; PPAP01.7 [3a3cf762-eeb9-4dfa-b956-0b0c46f45123]; PPAP01.7 [ffd3dfd6-5328-49d1-9e80-ee21c361f290]; PPAP01.7 [2e9a6695-3f31-4f5b-97e3-e7d0ad79469b] | Yes/No [70b9d693-5d24-424b-a8e7-a17d9a072296] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/220; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/102 |


## 46 Single checklist

**Internal name:** `CLF_SinglechecklistObject`. **Stable metadata ID:** `3baadf79-b7a0-482b-8165-fa490a96bcae`. **Classification:** Extracted record metadata.

**Inheritance parent:** CLF_ChecklistAnswerObject.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=true.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/63`.


## 47 Sub-checklist

**Internal name:** `CLF_SubchecklistObject`. **Stable metadata ID:** `3f6970f2-408f-4bee-bdae-80f0db6ca83a`. **Classification:** Extracted record metadata.

**Inheritance parent:** CLF_ChecklistAnswerObject.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=true.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/24`.


## 48 Tag

**Internal name:** `CLF_TagObject`. **Stable metadata ID:** `820903cc-cbc9-4198-834f-a80d2b78b20e`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 2 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/110`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Name | Text (nvarchar); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Name; field ID a620a5c4-94ab-4a85-8866-661632e40602 |
| Questions | M:N to Question (CLF_QuestObject); multiple selection; native map cusCLF_QuestReferencesToCLF_TagMap; reverse References; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Questions; field ID f06c6cc0-0a24-4579-90f1-ba90ca381d32 |


## 49 CAR Abstract

**Internal name:** `ComplyFramework_CARAbstractObject`. **Stable metadata ID:** `9e02f3af-cb69-48f0-8206-dfbe8cb7d06c`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/436`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Display Field | Text (nvarchar); max length 100 | N | Calculation: CONCATENATE("CAR No. ", RecordNo) [F e4f63cb1-16ca-4baf-8736-b6e30b5639f2 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal DisplayField; field ID e4f63cb1-16ca-4baf-8736-b6e30b5639f2 |
| Project Abstracts | M:N to Project Abstract (ProjectFwk_ProjectAbstractObject); multiple selection; native map cusProjectFwk_ProjectAbstractCARsToComplyFramework_CARAbstractMap; reverse CARs; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal ProjecAbstracts; field ID 9f178f96-7d90-4747-a271-b2f9efb01fa6 |
| Record No. | Auto Number (AutoNumber); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; internal RecordNo; field ID fad7b46f-2bc6-4333-a94a-2dbb543131a7 |


## 50 Customer

**Internal name:** `CustComplaints_CustomerObject`. **Stable metadata ID:** `f491262a-4762-473d-9ef2-c772344c89b2`. **Classification:** Extracted record metadata.

**Inheritance parent:** UserReg_CategoryObject.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/47`.


## 51 Dashboard

**Internal name:** `DasDashboardEntity`. **Stable metadata ID:** `0f92c848-669d-4c9d-ab30-9b4999dfc70d`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/62`.

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | BiDashboardId | Caption | Description | Metadata | Reporting | WidgetMaps | Evidence |
|---|---|---|---|---|---|---|---|
| db4b930d-762c-4b9f-8149-6d4e9b4f4fde | 28 | [A&amp;PM] APQP Status Dashboard | This dashboard  helps a project owner quickly assess the status of APQPs. This includes progress of open APQPs and open tasks to be completed. | {} | Quality [c05f9f9e-589d-6e00-2358-27f5649e9b9e] | Full value in seed-records.json | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/64/GraphData/Items/0 |
| 4fc51e86-175b-4784-a566-9ddfe679a214 | 30 | [A&amp;PM] PPAP Status Dashboard | This dashboard  helps a project owner quickly assess the status of PPAPs. This includes progress of open PPAPs and open tasks to be completed. | {} | Quality [c05f9f9e-589d-6e00-2358-27f5649e9b9e] | Full value in seed-records.json | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/312/GraphData/Items/0 |


## 52 Document

**Internal name:** `DocDocumentEntity`. **Stable metadata ID:** `3689096d-a5c4-48a1-be81-a2554c720d25`. **Classification:** Extracted record metadata.

**Inheritance parent:** Unresolved.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=true; IsAuditEnabled=true; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** Views Add-on(v1.0.0.0).ipack `/GraphData/Items/1`.


## 53 Event

**Internal name:** `EventFwk_EventObject`. **Stable metadata ID:** `3979d543-6df2-46a1-a26e-293cd7978bdc`. **Classification:** Extracted record metadata.

**Inheritance parent:** EventFwk_EventScenarioObject.

**Directly declared fields:** 1 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/264`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Event Type | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Init Abstract Field Values on Create; description: This field is used to track what kind of event it is such as Nonconformances,Defect Tracking, etc; internal EventType; field ID 019fa055-545a-4039-ace5-8d61a1c4e278 |


## 54 Event Scenario

**Internal name:** `EventFwk_EventScenarioObject`. **Stable metadata ID:** `c0d0d372-c03c-46cd-9f51-cdd28b620177`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/107`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Description | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Description of the Event.; internal Description; field ID 72f0501c-5196-4fdd-9c48-6d2d1966a064 |
| Location | M:1 to Location (SysLocationEntity); many → 1; reverse EventFwkEventScenarioObject; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Init Abstract Field Values on Create; internal Location; field ID 89017e1b-b3b4-4c3c-9fc5-496ec1aadfa0 |
| Name | Text (nvarchar); max length 250 | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Action Handler: Set Record Name; description: Name of the Event.; internal Name; field ID 93ec7652-3348-4f98-b794-ac890ef7d602 |


## 55 Keywords

**Internal name:** `EventFwk_KeyWordsObject`. **Stable metadata ID:** `0e46bf9f-3c6e-4737-9f86-868c70813337`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 3 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/88`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Key Word | Text (nvarchar); max length 100 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Key words are used as additional filter or search criteria.; internal KeyWord; field ID 61874fc4-b252-49a7-bb4e-c84e8bfef21e |
| Lesson Learned | M:N to Lesson Learned (EventFwk_LessonLearnedObject); multiple selection; native map cusEventFwk_LessonLearnedKeyWordsToEventFwk_KeyWordsMap; reverse KeyWords; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal LessonLearned; field ID f7bd4f91-0b2c-46a0-b7af-d878f7f89118 |
| Record No. | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal RecordNo; field ID 37c44700-d5b9-4c7a-bde0-e14433c3e1b8 |

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | LessonLearned | KeyWord | RecordNo | Evidence |
|---|---|---|---|---|
| 0230fa02-dba3-4a39-a99c-1e95a9fba1f3 | null | Daylight Savings | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/106 |
| c2fa8ca4-6454-4eb3-88ab-d7dea549ba10 | null | Machine | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/157 |
| d9f76eed-9836-4a27-bd83-1cb4bd1098b8 | null | Rain | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/302 |
| 209a59a8-1760-4f4e-becb-a6c1743d4cb7 | null | Measurement | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/360 |
| 224e7ccb-24eb-40e0-8112-af230c01af7e | null | PPE | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/416 |
| f1358ca9-a0cd-49bb-bada-3429158dda35 | null | Management | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/512 |
| e6c66c27-8a4d-427a-adee-28ff59845596 | null | Regulation | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/644 |
| c8f19acc-6363-49a8-8fff-d72bef4f0dd3 | null | Method | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/771 |
| aac21109-f93d-43d0-9cf6-0091b73840e4 | null | Equipment | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/916 |
| 55231756-7a50-48a5-a1b4-6da695fd26f4 | null | People | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/920 |
| e1a60707-739a-4b10-9b1e-ca62756a4121 | null | Documentation | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/936 |
| fa994dc6-d48d-4fc2-9734-916d70cb765f | null | Customer Requirement | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/960 |
| ba3db53d-08ee-437b-a50b-2455c3f8d68d | null | Process | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/983 |


## 56 Lesson Learned Category

**Internal name:** `EventFwk_LearnedCategoryObject`. **Stable metadata ID:** `5a40f955-f434-4a77-ad9c-ec3f3985c123`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/335`.

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Name | RecordNo | Evidence |
|---|---|---|---|
| abe73588-c847-4bad-be59-7513d725007e | Best Practice | 3 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/349 |
| 7d914f34-1b19-4cd0-85ad-9923bbf0f00d | Supplier Management | 2 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/399 |
| 2d2d2194-4367-44d8-bfe3-4272d43c6407 | Health | 6 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/543 |
| 9da8cb82-b072-41a8-b729-9b08271edf0e | Safety | 5 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/678 |
| 05bceb8a-9844-4f84-9601-0771af048a15 | Quality | 7 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/706 |
| aa08bcc6-7046-4dc0-89fa-a8e41d00fd51 | Operations | 4 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/758 |
| 5b2240a6-3f15-4080-9d5d-3fb19b5fd358 | Enviroment | 1 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/980 |


## 57 Lesson Learned

**Internal name:** `EventFwk_LessonLearnedObject`. **Stable metadata ID:** `63e2eb5b-3f7b-4dd3-a295-9f4f9f712cef`. **Classification:** Extracted record metadata.

**Inheritance parent:** ActionPlans_GlobActPlanAbsObject.

**Directly declared fields:** 9 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=true; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=true; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/14`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Category | M:N to Lesson Learned Category (EventFwk_LearnedCategoryObject); multiple selection; native map EventFwk_LessonLearnedCategoryToEventFwk_LearnedCategoryMapObject; no named inverse exported; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Category; field ID 83cf7346-7cc5-4de5-84c6-662b2acf2974 |
| Display Field | Text (nvarchar); max length unspecified | N | Calculation: CONCATENATE("LL"," - ",ActionNo) [F 8453847c-fcf7-47b4-9836-1f7e2075ebda Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: This is the display field for Lessons Learned.; internal DisplayField; field ID 8453847c-fcf7-47b4-9836-1f7e2075ebda |
| Helper Notification | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | Calculation: COUNT(RecipientsRol )  [F 9c5c7f39-367b-4064-a39f-080fc3b034a8 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; description: If lesson learned notification has been sent, set to true so the notification won't be sent more than once.; internal HelpNotify; field ID 9c5c7f39-367b-4064-a39f-080fc3b034a8 |
| Keywords | M:N to Keywords (EventFwk_KeyWordsObject); multiple selection; native map cusEventFwk_LessonLearnedKeyWordsToEventFwk_KeyWordsMap; reverse LessonLearned; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: M:N relation to Key Words.; internal KeyWords; field ID c01e1834-2450-4521-a982-d451a023e227 |
| Recipients (Roles) | M:N to Role (SysRoleEntity); multiple selection; native map EventFwk_LessonLearnedRecipientsRolToSetup_RoleMapObject; no named inverse exported; Extracted relation Type=3 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal RecipientsRol; field ID f48a29fd-e9dd-4cf0-b5ea-68610504d361 |
| Roles and Employees Responsible | M:N to Subject (SysSubjectEntity); multiple selection; native map EventFwk_LessonLearnedResponsibleToSetup_SubjectMapObject; no named inverse exported; Extracted relation Type=3 | N | FilterExpression: full expression in field-expressions.md [F bfffeabb-83d5-46fe-a632-817282181185 FilterExpression] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Responsible; field ID bfffeabb-83d5-46fe-a632-817282181185 |
| Send Safety Bulletin | Yes/No (bit); max length unspecified | N | DefaultValue: false [F 3da8d270-4d02-4832-bd06-338809a6d110 DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: If user wants to notify responsible roles about the lesson learned; internal SSafetyBulletin; field ID 3da8d270-4d02-4832-bd06-338809a6d110 |
| What happened? | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Whathappened; field ID 239f7de7-fa8d-4e41-8886-3635c9c60802 |
| Why did it happen? | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Whyithappened; field ID c3f04646-c6f6-4001-bb83-699485a8c643 |


## 58 Abstract Corrective Action

**Internal name:** `FragApplication_AbCorrectivActiObject`. **Stable metadata ID:** `ffaeb11a-e798-47ed-a3fb-1336a82876dd`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 11 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/53`.

**Package variations:** 10 property differences are retained in [metadata variation register](metadata-variation-register.csv). The main definition is a documentary reference; the optional compatibility add-on and import policy can affect installed values.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Action No. | Auto Number (AutoNumber); max length unspecified; precision=unspecified, scale=unspecified | N | None exported | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Population mechanism unresolved in exported evidence; description: Auto number to assign a unique action number.; internal ActionNo; field ID fd93af69-129a-4271-b0d7-1e8ed7acb017 |
| Completed By | M:1 to Employee (SysEmployeeEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Auto Close Related Task WF; Workflow Task / Open / Complete Task; Workflow Project Checklist / Open / Complete Task; Workflow Inspection Action Plan / In Progress / Complete; description: Employee who completed the task on behalf of Person Responsible.  Do not use this field if it is always the Person Responsible (Employee who receives the task in My Tasks) who completes the <br>action.; internal CompletedBy; field ID c49aee33-a42a-4fe2-ba2a-d309e1091942 |
| Completion Date | Date (Date); max length unspecified; TimeZoneCapture=null | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | Workflow Task / Open / Complete Task; Workflow Project Checklist / Open / Complete Task; Workflow Inspection Action Plan / In Progress / Complete; description: The date when the action was completed.; internal CompletionDate; field ID 9a09042e-ff57-4a57-b3e6-795e06006fd7 |
| Completion Notes | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: A textbox for notes related to completing the action.; internal CompletionNotes; field ID 86b9c673-ec53-4c9b-829d-ebac8bb5e503 |
| Action Required | Text (nvarchar); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Description of the action that must be performed for the action.; internal CPARActionReq; field ID aca0bcb5-e539-461c-ac74-12d92a944200 |
| Created By | M:1 to Employee (SysEmployeeEntity); many → 1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=undefined; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal CreatedBy; field ID f65262cb-75a4-473d-aa86-53369f224cdd |
| Due Date | Date (Date); max length unspecified; TimeZoneCapture=false | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Update Integrated Task Due Date; description: The date when the action is due.; internal DueDate; field ID 664fc9c8-4c2c-43d4-9b44-e67467fdbab4 |
| Is Completed | Yes/No (bit); max length unspecified | N | DefaultValue: false [F 84565854-3e9a-4898-aad8-0fc944032bc4 DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Auto Close Related Task WF; Workflow Task / Open / Complete Task; Workflow Project Checklist / Open / Complete Task; Workflow Inspection Action Plan / In Progress / Complete; description: A field to flag when the action is completed. It is used as a validation in workflow.; internal IsCompleted; field ID 84565854-3e9a-4898-aad8-0fc944032bc4 |
| Location | M:1 to Location (SysLocationEntity); many → 1; reverse FragApplicationAbCorrectivActiObject; Inferred from foreign-key relation and declaring start; requiredness extracted | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Set Field values on Abstract; internal Location; field ID 58691738-0274-4573-9080-8b7b7614b56a |
| Location Id | Guid (uniqueidentifier); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Initialize when Project &lt;&gt; NULL; internal LocationId; field ID 1b92481d-e59f-47ad-8da8-008d85492f19 |
| Workflow | M:1 to Workflow Instance (SysWorkflowInstanceEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Workflow; field ID 6b994c6d-7ba1-40ba-8be6-805b18311863 |


## 59 Color

**Internal name:** `FragApplication_ColorObject`. **Stable metadata ID:** `dc9d451a-c909-4a8d-8296-f0cf88971f06`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** Checklist Framework(v1.0.0).ipack `/GraphData/Items/141`.

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Caption | Value | Evidence |
|---|---|---|---|
| 5586fde5-8b5c-4edc-b297-d76a895839b6 | Dark Blue | #0023EC | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/1 |
| f1da27ed-8e56-4222-a00d-32a31789a937 | Red | #FA5555 | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/3 |
| 794c6052-8e18-403a-a957-995ea4f52df4 | White | #FFFFFF | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/5 |
| 76001999-bc51-4888-975f-7aac7a612abc | Green | #9FE1CA | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/7 |
| 2917ee4e-4752-4062-9c5e-e7b6b8ab01ee | Black | #3A3B3C | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/8 |
| 2f52cefd-fb5c-4d35-876f-a5d3cb86ca90 | Grey | #C4C6C4 | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/11 |
| 5aab1860-f10c-42e5-b967-1a938cd6ede0 | Dark Green | #00930E | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/14 |


## 60 Geography

**Internal name:** `FragApplication_GeographyObject`. **Stable metadata ID:** `2b8f4ccb-0663-45f9-9b6d-e15b06ea2c41`. **Classification:** Extracted hierarchy metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager - Data(v1.0.0.0).ipack `/GraphData/Items/172`.


## 61 Product Abstract

**Internal name:** `FragApplication_ProductObject`. **Stable metadata ID:** `2458a6a9-9470-4912-8955-ac038166f727`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 1 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/20`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Name | Text (nvarchar); max length 250 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Name; field ID 5b6a3ac3-5d03-4b37-9836-b9ac5e2ce971 |


## 62 Hierarchy Object

**Internal name:** `MetHierarchyObjectEntity`. **Stable metadata ID:** `fc3c550c-9bee-487f-98e9-f82dacfc9610`. **Classification:** Extracted record metadata.

**Inheritance parent:** MetObjectEntity.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/553`.


## 63 Lookup Object

**Internal name:** `MetLookupObjectEntity`. **Stable metadata ID:** `6e023053-172e-4dae-b851-dcf819ad69f6`. **Classification:** Extracted record metadata.

**Inheritance parent:** MetObjectEntity.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/105`.


## 64 Object

**Internal name:** `MetObjectEntity`. **Stable metadata ID:** `09300b47-1b32-4ea7-9dfc-be1fb427d12f`. **Classification:** Extracted record metadata.

**Inheritance parent:** MetTypeEntity.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/82`.


## 65 Type

**Internal name:** `MetTypeEntity`. **Stable metadata ID:** `a69a7f61-e713-41c0-96fa-1cf97a084f74`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/131`.


## 66 Menu

**Internal name:** `MnuMenuEntity`. **Stable metadata ID:** `2c06e4e1-aaf5-4377-b59f-7cbefe95d46c`. **Classification:** Extracted hierarchy metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager - Data(v1.0.0.0).ipack `/GraphData/Items/308`.

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Icon | NameMenu | Order | MenuItems | ListMenu | ParentMenu | ModuleTab | Evidence |
|---|---|---|---|---|---|---|---|---|
| 3eaee2c7-036e-6591-4db6-cbf9daca9514 | Raven/Icons/BrightBlue_48/multiple25.png | Role/Team Members | 2 | null | null | Settings [d1aecce4-4cba-4e20-a064-deedcb300f77] | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/913; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/0 |
| d1aecce4-4cba-4e20-a064-deedcb300f77 | null | Settings | 16 | null | System Setup [dac9d07a-1c6d-7384-82b4-0151a2877eb6]; Templates [aa599245-e683-0687-f76d-20a14f40967a]; Role/Team Members [3eaee2c7-036e-6591-4db6-cbf9daca9514]; Product Details [04e4a958-d528-b5c6-79b8-cf120738a308] | null | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/951; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/1 |
| 4468e8c4-7f2e-95c8-2432-e1fa57c20318 | Raven/Icons/BrightBlue_48/layer12.png | Templates | 3 | Task Definitions [5723bb16-ba86-4c9e-91ce-588830d2817f]; Checklist Definitions [cbe70dc6-3652-4469-aa53-dc9ec2e5e4b7]; Project Templates [d1b211dd-80cb-4535-8262-3668145a7ec9]; Checklist Types [e06c2d22-3ec0-4717-8693-0f79648e89f2] | null | Settings [b37bbee5-0abd-49e4-a807-0824faac64ae] | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/683; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/6 |
| bbf9778f-1b41-6dc0-5072-fe83aef8b0cb | Raven/Icons/BrightBlue_48/delivery36.png | Products | 0 | Products [8791202c-2255-4792-a326-813f3951a6a3]; Item Categories [a652e968-b0f6-4bd0-a46f-c727852fa1f2] | null | Settings [b37bbee5-0abd-49e4-a807-0824faac64ae] | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/955; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/11 |
| 7249e588-47dc-2030-bdc7-4ff18d81fff2 | Raven/Icons/BrightBlue_48/multiple25.png | Contributors and Roles | 4 | Roles [c5ba1e09-aae3-415c-ad70-8fc91dd504e7]; Contributors and Security [3706c79b-67c8-4308-a130-82c54e40a37e] | null | Settings [b37bbee5-0abd-49e4-a807-0824faac64ae] | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/797; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/114 |
| c6912cba-0efd-359e-cf16-14d195029af9 | Raven/Icons/BrightBlue_48/oone.png | Lesson Learned | 5 | Categories [fc2a87bb-1f44-481b-ab07-8bd3b693fc63]; Keywords [fa62fc6b-14a4-4205-9062-a9523af2cf5b] | null | Settings [b37bbee5-0abd-49e4-a807-0824faac64ae] | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/560; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/176 |
| b37bbee5-0abd-49e4-a807-0824faac64ae | null | Settings | 14 | Preferences [c6d89f3b-062d-4653-a2cf-b01252ea2f28] | Contributors and Roles [7249e588-47dc-2030-bdc7-4ff18d81fff2]; Customers [ee4231d2-b81a-998e-c716-61195f0e024c]; System Setup [d34ff608-349d-9f02-4db5-b18cab78e20e]; Suppliers [2cc02f79-1146-2f19-ea46-005b8c800cd3]; Products [bbf9778f-1b41-6dc0-5072-fe83aef8b0cb]; Templates [4468e8c4-7f2e-95c8-2432-e1fa57c20318]; Lesson Learned [c6912cba-0efd-359e-cf16-14d195029af9] | null | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/499; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/177 |
| d34ff608-349d-9f02-4db5-b18cab78e20e | null | System Setup | 6 | Application Integrations [7bc58b9d-67ca-4638-b07a-26a6d893d5de]; Project Types [ce690e6d-78aa-4416-9525-345539fdaa7c]; Task Types [d360a3f1-6b01-4a09-9a5f-3519bdee6114] | null | Settings [b37bbee5-0abd-49e4-a807-0824faac64ae] | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/194; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/197 |
| 5607c6f8-1738-487d-887b-9547fa62d04d | null | PPAP | 1 | Closed [726721df-7fdc-4050-857d-7d1d07b4d9d8]; Open [49f760db-aedd-4d4e-867f-807ea3e66fe6] | null | null | PPAP [4330fbae-8eef-4ccb-9218-2e830dc3cb04] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/562; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/206 |
| 55c3461c-393e-4191-a337-75e41eebc311 | null | APQP | 2 | Closed [a75e20e4-8982-4f84-bcb8-1d1841ec6941]; Open [33797ca2-6130-4738-86f8-13e868fe673f] | null | null | APQP [e47ea5d2-967f-4abf-854e-24990bbe05c6] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/717; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/232 |
| 04e4a958-d528-b5c6-79b8-cf120738a308 | Raven/Icons/BrightBlue_48/flag32.png | Product Details | 0 | null | null | Settings [d1aecce4-4cba-4e20-a064-deedcb300f77] | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/708; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/312 |
| aa599245-e683-0687-f76d-20a14f40967a | Raven/Icons/BrightBlue_48/code13.png | Templates | 1 | null | null | Settings [d1aecce4-4cba-4e20-a064-deedcb300f77] | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/921; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/372 |
| dac9d07a-1c6d-7384-82b4-0151a2877eb6 | null | System Setup | 3 | null | null | Settings [d1aecce4-4cba-4e20-a064-deedcb300f77] | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/80; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/385 |
| 2cc02f79-1146-2f19-ea46-005b8c800cd3 | Raven/Icons/BrightBlue_48/delivery55.png | Suppliers | 1 | Suppliers [4c0975ff-1669-432d-8a19-8b4d296962c7]; Supplier Locations [ad83fe47-474d-432b-a951-adcf37f34ebe]; Supplier Categories [1aeaa35a-f49a-4837-9932-d4478e50273a] | null | Settings [b37bbee5-0abd-49e4-a807-0824faac64ae] | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/829; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/434 |
| ee4231d2-b81a-998e-c716-61195f0e024c | Raven/Icons/BrightBlue_48/group8.png | Customers | 2 | Customers [874dacd3-0f54-4102-9408-77dd39b68373] | null | Settings [b37bbee5-0abd-49e4-a807-0824faac64ae] | Settings [aedf68cc-1085-49e3-ad6b-2cdd5262928c] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/121; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/436 |


## 67 Menu Item

**Internal name:** `MnuMenuItemEntity`. **Stable metadata ID:** `7b46f151-04c7-4dff-9abc-4a3e311ee96c`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager - Data(v1.0.0.0).ipack `/GraphData/Items/131`.

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Caption | Icon | Link | Order | StaticViewName | Type | ConfigurableView | Menu | Evidence |
|---|---|---|---|---|---|---|---|---|---|
| 5723bb16-ba86-4c9e-91ce-588830d2817f | Task Definitions | null | null | 20 | null | 1 | ProjectFwk_TaskDef_Inventory [fe8a531c-26e1-4965-b1e4-db6dfcc6f0be] | Templates [4468e8c4-7f2e-95c8-2432-e1fa57c20318] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/4 |
| a652e968-b0f6-4bd0-a46f-c727852fa1f2 | Item Categories | null | null | 10 | null | 1 | ProductMgmt_ItemCategory_Inventory [4b04a6bd-8d0e-4856-a144-c924608c78c7] | Products [bbf9778f-1b41-6dc0-5072-fe83aef8b0cb] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/8 |
| 3706c79b-67c8-4308-a130-82c54e40a37e | Contributors and Security | null | null | 10 | null | 1 | APQP_SecurityGroup_Inventory [495fa16c-b84e-4f8a-9555-fa3c852300e0] | Contributors and Roles [7249e588-47dc-2030-bdc7-4ff18d81fff2] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/112 |
| c6d89f3b-062d-4653-a2cf-b01252ea2f28 | Preferences | Raven/Icons/BrightBlue_48/equalizer3.png | null | 20 | null | 1 | APQP_Settings_Inventory [1f941958-ba0d-4d45-b9eb-68705b6d5b7b] | Settings [b37bbee5-0abd-49e4-a807-0824faac64ae] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/130 |
| ad83fe47-474d-432b-a951-adcf37f34ebe | Supplier Locations | null | null | 20 | null | 1 | FragApplication_GeographyObjectInventoryView [495e08b1-7727-4185-af98-527977daba61] | Suppliers [2cc02f79-1146-2f19-ea46-005b8c800cd3] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/161 |
| 4c0975ff-1669-432d-8a19-8b4d296962c7 | Suppliers | null | null | 30 | null | 1 | SupplierMgmt_SupAbstract_Inventory [7ca21027-2cd2-46ad-96d5-d21f407d8ab8] | Suppliers [2cc02f79-1146-2f19-ea46-005b8c800cd3] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/168 |
| d1b211dd-80cb-4535-8262-3668145a7ec9 | Project Templates | null | null | 10 | null | 1 | ProjectFwk_PFWKTemplate_Inventory [4488e51e-139b-4c33-83b3-73744022b5bd] | Templates [4468e8c4-7f2e-95c8-2432-e1fa57c20318] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/175 |
| fc2a87bb-1f44-481b-ab07-8bd3b693fc63 | Categories | null | null | 10 | null | 1 | EventFwk_LearnedCategory_Inventory [e2a493a0-70f0-48f0-a230-d85e2398c9bf] | Lesson Learned [c6912cba-0efd-359e-cf16-14d195029af9] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/341; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/178 |
| fa62fc6b-14a4-4205-9062-a9523af2cf5b | Keywords | null | null | 20 | null | 1 | EventFwk_KeyWordsObjectInventoryView [3bb46277-8017-4e71-ac7f-f9687fff7de7] | Lesson Learned [c6912cba-0efd-359e-cf16-14d195029af9] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/179 |
| cbe70dc6-3652-4469-aa53-dc9ec2e5e4b7 | Checklist Definitions | null | null | 40 | null | 1 | ProjectFwk_ChecklistDef_Inventory [6e58f0cb-8a42-4915-980c-9d99188a305a] | Templates [4468e8c4-7f2e-95c8-2432-e1fa57c20318] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/301; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/182 |
| 7bc58b9d-67ca-4638-b07a-26a6d893d5de | Application Integrations | null | null | 40 | null | 1 | ProjectFwk_TypeofRecord_Inventory [9f0f2d8b-b4fe-4d90-867b-beac939edfcc] | System Setup [d34ff608-349d-9f02-4db5-b18cab78e20e] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/158; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/196 |
| 49f760db-aedd-4d4e-867f-807ea3e66fe6 | Open | Raven/Icons/BrightBlue_48/play38.png | null | 10 | null | 1 | APQP_PPAP_Inventory_Open [602f2dea-d5e4-4980-97a9-7418f8203540] | PPAP [5607c6f8-1738-487d-887b-9547fa62d04d] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/203 |
| d360a3f1-6b01-4a09-9a5f-3519bdee6114 | Task Types | null | null | 30 | null | 1 | ProjectFwk_TaskType_Inventory [0b1b62ee-d839-4191-a57c-3ac7647c304c] | System Setup [d34ff608-349d-9f02-4db5-b18cab78e20e] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/266 |
| a75e20e4-8982-4f84-bcb8-1d1841ec6941 | Closed | Raven/Icons/BrightBlue_48/acceptance.png | null | 2 | null | 1 | APQP_APQP_Inventory_Closed [586ef24f-cda7-480e-87b0-299148d395c8] | APQP [55c3461c-393e-4191-a337-75e41eebc311] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/267 |
| 33797ca2-6130-4738-86f8-13e868fe673f | Open | Raven/Icons/BrightBlue_48/play38.png | null | 1 | null | 1 | APQP_APQP_Inventory_Open [d8c514bd-5c1e-4e28-951d-822603a1ed8f] | APQP [55c3461c-393e-4191-a337-75e41eebc311] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/269 |
| 1aeaa35a-f49a-4837-9932-d4478e50273a | Supplier Categories | null | null | 10 | null | 1 | SupplierMgmt_SupCategory_Inventory [02982b0f-32e5-46ba-abe8-2ab210afb40e] | Suppliers [2cc02f79-1146-2f19-ea46-005b8c800cd3] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/301 |
| ce690e6d-78aa-4416-9525-345539fdaa7c | Project Types | null | null | 20 | null | 1 | ProjectFwk_ProjectType_Inventory [d3c7cf38-8800-4c2b-ba50-9f32967bafe5] | System Setup [d34ff608-349d-9f02-4db5-b18cab78e20e] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/356 |
| c5ba1e09-aae3-415c-ad70-8fc91dd504e7 | Roles | null | null | 20 | null | 1 | ProjectFwk_PFRole_Inventory [61eb295a-e589-4222-b84b-8b6339970f42] | Contributors and Roles [7249e588-47dc-2030-bdc7-4ff18d81fff2] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/376 |
| 8791202c-2255-4792-a326-813f3951a6a3 | Products | null | null | 20 | null | 1 | ProjectFwk_ItemRevision_Inventory [50f9d668-a9c2-4c11-9c03-280d62937915] | Products [bbf9778f-1b41-6dc0-5072-fe83aef8b0cb] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/379 |
| 874dacd3-0f54-4102-9408-77dd39b68373 | Customers | null | null | 10 | null | 1 | CustComplaints_Customer_Inventory [1768f9cf-2f63-4be6-acf6-c050cbceac66] | Customers [ee4231d2-b81a-998e-c716-61195f0e024c] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/392 |
| e06c2d22-3ec0-4717-8693-0f79648e89f2 | Checklist Types | Raven/Icons/BrightBlue_48/tick7.png | null | 30 | null | 1 | ProjectFwk_ChecklistType_Inventory [85a7128f-ab7d-4941-8340-1285fd565829] | Templates [4468e8c4-7f2e-95c8-2432-e1fa57c20318] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/851; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/457 |
| 726721df-7fdc-4050-857d-7d1d07b4d9d8 | Closed | Raven/Icons/BrightBlue_48/acceptance.png | null | 20 | null | 1 | APQP_PPAP_Inventory_Closed [2d0d1ac4-ae26-46f1-826d-c07b4422f7f8] | PPAP [5607c6f8-1738-487d-887b-9547fa62d04d] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/762; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/461 |


## 68 Item

**Internal name:** `ProductMgmt_ItemObject`. **Stable metadata ID:** `2789b9d3-2199-49ff-9368-6b18a2351024`. **Classification:** Extracted record metadata.

**Inheritance parent:** FragApplication_ProductObject.

**Directly declared fields:** 1 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/55`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Item Number | Text (nvarchar); max length 100 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PartNumber; field ID 7c88eeb7-2d6e-456e-9c3b-3e62a1824901 |


## 69 Item Revision

**Internal name:** `ProductMgmt_ItemRevisionObject`. **Stable metadata ID:** `1db2d8c5-5c20-44f6-bf44-bf2fd9da6f23`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 4 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=true; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/49`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Code | Text (nvarchar); max length 100 | Y | Calculation: CONCATENATE(Item.PartNumber, " v.",  RevisionNumber) [F 31c86647-e0d9-4aab-a3d9-cab0f01ad988 Calculation] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported calculated field; internal Code; field ID 31c86647-e0d9-4aab-a3d9-cab0f01ad988 |
| Item | M:1 to Item (ProductMgmt_ItemObject); many → 0..1; reverse Revisions; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Item; field ID 9e311327-6433-4763-8c81-c9e8650f7503 |
| Name | Text (nvarchar); max length 100 | N | DefaultValue: Item.Name [F 9adc18a7-569a-4b2c-8776-74c96bfa2ba9 DefaultValue] | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; internal Name; field ID 9adc18a7-569a-4b2c-8776-74c96bfa2ba9 |
| Revision Number | Number (bigint); max length unspecified; precision=unspecified, scale=unspecified | N | DefaultValue: IF(Item.CurrentRevision=NULL, 0, Item.CurrentRevision.RevisionNumber+1) [F 6db9e762-30a1-4b8c-b920-9d29fe8e2730 DefaultValue] | Metadata IsReadOnly=true; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Exported create-time value generator; description: IF(Item.RevisionCount=NULL, 0, MAX(Item.CurrentRevision.RevisionNumber)+1); internal RevisionNumber; field ID 6db9e762-30a1-4b8c-b920-9d29fe8e2730 |


## 70 Requirement Abstract

**Internal name:** `ProgramFmk_ReqAbsObject`. **Stable metadata ID:** `0e1e7614-8cfb-407c-8ddb-ea2ea42a9393`. **Classification:** Extracted record metadata.

**Inheritance parent:** Unresolved.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** Views Add-on(v1.0.0.0).ipack `/GraphData/Items/3`.


## 71 Attendee

**Internal name:** `ProjectFwk_AttendeeObject`. **Stable metadata ID:** `8d1f0b1e-81b2-44f0-b16f-5c7fdd7e82c9`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 2 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/587`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Employee | M:1 to Employee (SysEmployeeEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Employee; field ID 30d83795-cb14-41e1-9f62-4551880083e9 |
| Present | Yes/No (bit); max length unspecified | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Was the attendee present?; internal Present; field ID f5ffe861-5197-405c-b924-d0cf4c39642f |


## 72 Checklist Record

**Internal name:** `ProjectFwk_ChecklistRecordObject`. **Stable metadata ID:** `16466a62-6fa1-4eff-af53-2df667c5d462`. **Classification:** Extracted record metadata.

**Inheritance parent:** CLF_ChecklistAnswerObject.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/404`.


## 73 Checklist Type

**Internal name:** `ProjectFwk_ChecklistTypeObject`. **Stable metadata ID:** `4daf2bbe-da08-4e50-b0a2-6a5e40609f66`. **Classification:** Extracted record metadata.

**Inheritance parent:** CLF_ChecklistTypeObject.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/129`.

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Description | MaxOrder | Name | NbChecklists | NbQuestions | QueAnswerObject | Reference | Questions | Checklists | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| 969b68f3-e25f-4382-9d2d-9c68b494a3d8 | Checklist consisting of the 18 elements of a PPAP. | 18 | PPAP Checklists | 5 | 18 | CLF_QuestionAnswerObject | PPAP01 | Full value in seed-records.json | Level 5 PPAP [569baf9f-4304-495f-be2d-1d5f63b9d72a]; Level 1 PPAP [7d972e73-1a1c-4f42-8395-4e221bda8583]; Level 4 PPAP [507b911d-693d-4208-8f6b-d2da93d66da5]; Level 2 PPAP [591a78ed-b245-46db-8cd9-f085a223efb3]; Level 3 PPAP [6a2588cd-a093-4268-a7a9-b1a3da836842] | APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/13 |


## 74 Report

**Internal name:** `RepDataDefinitionEntity`. **Stable metadata ID:** `8781f68e-633d-4e9a-914d-36d5fe497a30`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/331`.

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Report Objects | BiReportId | Caption | ColorPalettes | Definition | Description | IsSourceReport | UnderlyingDataIsActive | Report Fields | Visualizations | Reporting | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 379b524d-0e58-4e5d-818a-c2424e7100ab | Full value in seed-records.json | 88 | [A&amp;PM] PPAP Reports | [] | Full value in seed-records.json | Reports included are:<br>- PPAP Progress by Part Number<br>- PPAP Status by Task<br>- PPAP Progress by Customer<br>- PPAP by Gate<br>- PPAP by Customer | false | false | Full value in seed-records.json | PPAP by Customer [4dc000d4-5545-4973-b3cb-c1fad9205346]; PPAP Progress by Customer [eea827d3-6b62-4a9d-9662-c4b72018122e]; PPAP Progress by Part Number [abb2f0f3-e0f7-4369-8d86-dbf6e0297c4b]; PPAP by Stage [20d35242-1553-4ef7-989b-a4f048cb1598]; PPAP Tasks by Part Number [78e7a086-f2e4-4561-b1d5-7f56ced9850c] | Quality [c05f9f9e-589d-6e00-2358-27f5649e9b9e] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/42 |
| 49d0686d-879f-4397-b33d-aa8912f6f0c2 | Full value in seed-records.json | 87 | [A&amp;PM] APQP Reports | [] | Full value in seed-records.json | Reports included are:<br>- Project Progress by Part Number<br>- Project Status by Task<br>- Project Progress by Customer<br>- Projects by Gate<br>- Projects by Customer | false | false | Full value in seed-records.json | Projects by Customer [581b1d00-b8b2-4521-be07-9c7218dfc03a]; Project Progress by Part Number [865c5e7b-6fd4-4024-8043-229824fa7b49]; Project Tasks by Part Number [47fc1830-4e31-4d8f-b9da-9d7019092642]; Project Progress by Customer [d8a81f32-0bfd-4d9b-b903-872ca6326648]; Projects by Gate [0024570b-4a70-4bb9-9fdd-3a08010e44a8] | Quality [c05f9f9e-589d-6e00-2358-27f5649e9b9e] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/64/GraphData/Items/14 |


## 75 Hazards

**Internal name:** `RiskFmk_HazardsObject`. **Stable metadata ID:** `5fdd9f30-372f-4fb2-abf9-2ec1cc316386`. **Classification:** Extracted record metadata.

**Inheritance parent:** Unresolved.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=true; documents=false; mail merge=false.

**Source:** Views Add-on(v1.0.0.0).ipack `/GraphData/Items/9`.


## 76 Good/Service Category

**Internal name:** `SupplierMgmt_ItemCategoryObject`. **Stable metadata ID:** `5623b957-9bf4-4c10-a2dd-396e66ab6473`. **Classification:** Extracted hierarchy metadata.

**Inheritance parent:** None.

**Directly declared fields:** 2 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/44`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Category Name | Text (nvarchar); max length 150 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Name of a category that will be used to group a logical set of goods/services. For example, baked goods or frozen goods.; internal NameItemCatego; field ID 93e920a3-59f2-4e7c-9649-8349b812ddb6 |
| Parent Category Name | M:1 to Good/Service Category (SupplierMgmt_ItemCategoryObject); many → 0..1; reverse ListItemCatego; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Name of the category that is parent to this category.; internal ParentItemCate; field ID f304d648-07f0-4654-87e6-271f9c2f9acd |


## 77 Public Profile

**Internal name:** `SupplierMgmt_PublicProfileObject`. **Stable metadata ID:** `04e993f5-37e0-47f1-bf6e-d08f0a98f688`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 1 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/50`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Supplier Name | Text (nvarchar); max length 50 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: Name of the supplier for which this public profile is created.; internal Name; field ID f6258159-2182-4fdc-9cdc-0778265e4643 |


## 78 Supplier Abstract

**Internal name:** `SupplierMgmt_SupAbstractObject`. **Stable metadata ID:** `904aac63-aa3d-42d5-8a35-9c8426e7b96a`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 1 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/415`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Name | Text (nvarchar); max length 100 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; description: This is the name of the Supplier; internal Name; field ID 27388d10-f613-4b32-9b7e-16f3cf18c0bd |


## 79 Supplier Category

**Internal name:** `SupplierMgmt_SupCategoryObject`. **Stable metadata ID:** `9d79b05c-9a47-4fd9-8e25-16926c7dcdc0`. **Classification:** Extracted hierarchy metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager - Data(v1.0.0.0).ipack `/GraphData/Items/166`.


## 80 Employee

**Internal name:** `SysEmployeeEntity`. **Stable metadata ID:** `6afb3ac6-96db-4072-9293-4d02699d1264`. **Classification:** Extracted record metadata.

**Inheritance parent:** SysSubjectEntity.

**Directly declared fields:** 1 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/51`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Full Name | Text (nvarchar); max length 500 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal FullName; field ID 2961dfbd-15de-416c-a793-352b7ba1d611 |


## 81 Group

**Internal name:** `SysGroupEntity`. **Stable metadata ID:** `dc95c2f3-4325-40d5-91af-046ef46fdfc4`. **Classification:** Extracted record metadata.

**Inheritance parent:** SysSubjectEntity.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/356`.


## 82 Location

**Internal name:** `SysLocationEntity`. **Stable metadata ID:** `f5d5209b-0a7d-4858-a302-678fcc065dd2`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/641`.


## 83 Application

**Internal name:** `SysModuleEntity`. **Stable metadata ID:** `a365a5fc-32b7-4ca3-a0e7-ca198a43733d`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/144`.

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Group | SelectedModuleTab | Tabs | SecurityGroups | Caption | Description | Disabled | Index | IsAvailableForMobile | IsAvailableOffline | LegacyModuleId | MobileCaption | MobileIcon | UrlCaption | UrlIcon | VersionNumber | VersionOrder | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 20e43a78-2e97-4dbb-bb52-395986361e76 | null | null | null | null | Project Framework | Parent for APQP/PPAP | false | null | false | false | null | null | null | ProjectFwk | null | 1.0.0 | 1000000 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/98; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/104 |
| a6d611a6-86ad-4f84-b740-849b97cc1595 | Not exported | Not exported | Not exported | Not exported | Event Framework | null | false | null | false | false | null | null | null | EventFwk | null | 1.0.3 | 1000003 | Checklist Framework(v1.0.0).ipack /GraphData/Items/119; APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/339; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/127 |
| 7d367cad-6e63-45d6-ab1d-2a301a9967af | Not exported | Not exported | Not exported | Not exported | User Registeration | null | false | null | false | false | null | null | null | UserReg | null | 1.0.0 | 1000000 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/84; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/157 |
| 1df3c2f1-8a0c-4ec6-80d7-15a291933dc9 | Not exported | Not exported | Not exported | Not exported | Fragment Application | Install version: 6.1.22<br>This is the application for abstract objects. | false | 16 | false | false | null | null | null | FragApplication | null | 1.0.2 | 1000002 | Checklist Framework(v1.0.0).ipack /GraphData/Items/102/GraphData/Items/21; APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/21; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/173 |
| 2d24088a-7d4c-4be0-a57d-b49b01f335b2 | Not exported | Not exported | Not exported | Not exported | Supplier Management Framework | Allow managing supplier relationships between a parent company and its facilities.<br>Create supplier certification and documentation requirements.<br>Record corrective and preventative actions for suppliers. | false | null | false | false | null | null | null | SupplierMgmt | null | 1.0.0 | 1000000 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/359; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/190 |
| 1071cf74-b815-42bf-b7fe-d58f6ceb01e3 | Quality [a117cb9d-1437-44bb-a5dc-1bcaf6fb9993] | Dashboard [7f3d476b-eaeb-4231-9a51-5c03ea9c4cb6] | Dashboard [7f3d476b-eaeb-4231-9a51-5c03ea9c4cb6] | APQP and PPAP Contributors [55cd72fd-bc23-4488-83cb-abe55f84e5b8]; APQP and PPAP Owners [bfbec27b-d0b6-47b2-b6d4-9241abf697c7] | APQP &amp; PPAP Manager | This application provides the ability to manage your new product process in Advanced Product Quality Planning (APQP) &amp; Production Part Approval Process (PPAP) management system. | false | null | false | false | null | null | null | APQP | Raven/Icons/BrightBlue_48/marketing8.png | 1.0.0 | 1000000 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/169; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/233 |
| fe0eb852-ece3-431a-8813-75d0633a2c64 | Not exported | Not exported | Not exported | Not exported | System Objects | Setup | true | 9999 | false | false | null | null | null | Setup | Icons/new/48x48/wrench.gif | 1.0.0 | 1000000 | Checklist Framework(v1.0.0).ipack /GraphData/Items/42; APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/116; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/264; Views Add-on(v1.0.0.0).ipack /GraphData/Items/12 |
| 2f34de26-c2c6-432d-8461-228c6a7c1ad8 | Not exported | Not exported | Not exported | Not exported | Customer Complaint Reporting | null | false | 0 | true | false | null | Customer Complaint | null | CustComplaints | null | 1.0.0 | 1000000 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/653; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/343 |
| cb6277a9-6157-4149-bf7d-e44900119b0e | null | Checklist Types [ed5883fc-0b00-4940-866c-9bed50647395] | Checklist Types [ed5883fc-0b00-4940-866c-9bed50647395]; Checklists [517989b3-72f0-4779-9dd5-83130d3838eb]; Choice Lists [bb298421-753b-482e-8390-f81b41e56264]; Question Tags [558a09e7-6552-4927-bb0d-ff4063bcf97a]; Questions [0348cb8e-dd90-4da4-b78f-e9d0efab446e] | null | Checklist Framework | null | false | 19 | false | true | null | null | null | CLF | Icons/new/48x48/preferences.gif | 1.0.0 | 1000000 | Checklist Framework(v1.0.0).ipack /GraphData/Items/21; APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/199; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/375; Views Add-on(v1.0.0.0).ipack /GraphData/Items/11 |
| fe285e18-057e-4777-9877-0cdef2d4e288 | Not exported | Not exported | Not exported | Not exported | Product Management | null | false | null | false | false | null | null | null | ProductMgmt | null | 1.0.0 | 1000000 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/566; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/446 |
| 548e2216-7931-4c36-91ee-5aee70ca0c14 | Not exported | Not exported | Not exported | Not exported | Nonconformance Reporting | null | false | 1 | true | false | null | NCR | inspection | NCR | null | 1.0.0 | 1000000 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/36 |
| 5d47f306-956a-4a9d-bdfd-fec0cedc6f12 | Not exported | Not exported | Not exported | Not exported | Quality Comply Framework | null | false | null | false | false | null | null | null | ComplyFramework | null | 1.0.0 | 1000000 | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/111 |
| 31a07fe7-8e4b-41bb-aa95-29bb9a7bb8a0 | Not exported | Not exported | Not exported | Not exported | My Tasks Summary | null | false | 11 | false | false | null | null | null | MyTasksSummary | null | 1.0.0 | null | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/124 |
| 4ed20735-6d62-41a7-9b9b-2cd26bb2a9bf | Not exported | Not exported | Not exported | Not exported | Action Plans | The purpose of this application is to create action items. <br>The actions can be standalone, can be related to a list of sequential activities, can be assigned from the global level <br>to the local level or can be generated from a defined template. | false | null | true | false | null | Action Plans | hospital-leaflet | ActionPlans | null | 1.2.1 | 1002001 | Checklist Framework(v1.0.0).ipack /GraphData/Items/49; APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/185/GraphData/Items/37 |
| 552ac529-b2e5-4597-a16a-725c46ab992b | Not exported | Not exported | Not exported | Not exported | Inspections | null | false | null | Not exported | true | null | Not exported | Not exported | Insp | Icons/new/48x48/preferences.gif | 1.0.0 | 1000000 | Checklist Framework(v1.0.0).ipack /GraphData/Items/142 |
| c44b7847-8000-4003-a154-b0da7ada0757 | Not exported | Not exported | Not exported | Not exported | Program Framework | null | false | null | false | false | null | null | null | ProgramFmk | null | 1.1.0 | 1001000 | Views Add-on(v1.0.0.0).ipack /GraphData/Items/4 |
| 07a3548e-f2c9-4f6d-88b4-b6469f83864d | Not exported | Not exported | Not exported | Not exported | Risk Framework | null | false | null | false | false | null | null | null | RiskFmk | null | 1.0.0 | 1000000 | Views Add-on(v1.0.0.0).ipack /GraphData/Items/10 |
| 1fd6eb33-f6b7-46f7-b533-9a9fc1ba39e6 | Not exported | Not exported | Not exported | Not exported | Calendar Management | Calendar Management | false | 1 | false | false | null | null | null | CalenManagement | null | 1.0.0 | 1000000 | Views Add-on(v1.0.0.0).ipack /GraphData/Items/20 |


## 84 Application Tab

**Internal name:** `SysModuleTabConfigurableViewEntity`. **Stable metadata ID:** `f0e0954f-f763-43aa-a99c-6a14a202f538`. **Classification:** Extracted record metadata.

**Inheritance parent:** SysModuleTabEntity.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager - Data(v1.0.0.0).ipack `/GraphData/Items/210`.

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | ViewMode | Caption | Index | IsMenuEnabled | IsMobileTab | IsOfflineEnabled | TileIcon | UrlCaption | Menus | Module | ConfigurableView | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| aedf68cc-1085-49e3-ad6b-2cdd5262928c | null | Settings | 3 | true | false | false | null | Settings | Full value in seed-records.json | APQP &amp; PPAP Manager [1071cf74-b815-42bf-b7fe-d58f6ceb01e3] | _EmptyView [77b54ebf-5c19-4689-b806-180e25718198] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/681; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/3 |
| e47ea5d2-967f-4abf-854e-24990bbe05c6 | null | APQP | 1 | true | false | false | null | APQP | APQP [55c3461c-393e-4191-a337-75e41eebc311] | APQP &amp; PPAP Manager [1071cf74-b815-42bf-b7fe-d58f6ceb01e3] | APQP_APQP_Inventory_Open [d8c514bd-5c1e-4e28-951d-822603a1ed8f] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/514; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/211 |
| 4330fbae-8eef-4ccb-9218-2e830dc3cb04 | null | PPAP | 2 | true | false | false |  | PPAP | PPAP [5607c6f8-1738-487d-887b-9547fa62d04d] | APQP &amp; PPAP Manager [1071cf74-b815-42bf-b7fe-d58f6ceb01e3] | APQP_PPAP_Inventory_Open [602f2dea-d5e4-4980-97a9-7418f8203540] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/865; APQP &amp; PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/425 |


## 85 Module Tab Dashboard

**Internal name:** `SysModuleTabDashboardEntity`. **Stable metadata ID:** `1572333a-de41-4c0f-a010-89d971b52c47`. **Classification:** Extracted record metadata.

**Inheritance parent:** SysModuleTabEntity.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/79`.

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | Menus | Caption | Index | IsMenuEnabled | IsMobileTab | IsOfflineEnabled | TileIcon | UrlCaption | Module | Dashboard | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 7f3d476b-eaeb-4231-9a51-5c03ea9c4cb6 | null | Dashboard | 0 | false | false | false | null | Da | APQP &amp; PPAP Manager [1071cf74-b815-42bf-b7fe-d58f6ceb01e3] | [A&amp;PM] APQP Status Dashboard [stable ID not exported] | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/78 |


## 86 Application Tab

**Internal name:** `SysModuleTabEntity`. **Stable metadata ID:** `3d57c12e-38cb-48c6-bdaa-87cde39f593a`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=true; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/117`.


## 87 Role

**Internal name:** `SysRoleEntity`. **Stable metadata ID:** `1b44b982-2248-41c5-971e-dfa68eddb196`. **Classification:** Extracted record metadata.

**Inheritance parent:** SysGroupEntity.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/355`.


## 88 Security Group

**Internal name:** `SysSecurityGroupEntity`. **Stable metadata ID:** `a9bd6c79-4bd4-455f-b35f-770df0814fb7`. **Classification:** Extracted record metadata.

**Inheritance parent:** SysGroupEntity.

**Directly declared fields:** None exported. This is not evidence that a dependency object has no fields on an installed tenant. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/741`.

Initial values:

Exported records for this concrete object are listed below. Inherited values in these records do not redeclare fields. Record attributes absent from the field graph remain extracted record attributes, not new field definitions. Full values, reference IDs, per-value conflicts and source representations are retained in [seed records](seed-records.json).

| Record ID | ISOScopes | Programs | ReqGenGroup | DefaultToolbarId | Description | Icon | IsSystem | Name | Application | MemberOf | Members | CustomField | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| bfbec27b-d0b6-47b2-b6d4-9241abf697c7 | null | null | null | null | A Full Access group | Raven/Icons/BrightBlue_48/users81.png | false | APQP and PPAP Owners | APQP &amp; PPAP Manager [1071cf74-b815-42bf-b7fe-d58f6ceb01e3] | Item Coordinator [fce368b6-d508-4ed8-aecc-5bed53361bec]; APQP and PPAP Contributors [55cd72fd-bc23-4488-83cb-abe55f84e5b8] | Quality - Transform - Full Access [9597351f-960d-4cd5-a4c8-67ad4a28367e] | Not exported | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/63 |
| 55cd72fd-bc23-4488-83cb-abe55f84e5b8 | null | null | null | null | A Standard Access group | Raven/Icons/BrightBlue_48/multiple25.png | false | APQP and PPAP Contributors | APQP &amp; PPAP Manager [1071cf74-b815-42bf-b7fe-d58f6ceb01e3] | null | Quality - Transform - Standard Access [2c86e8c5-2d2d-41f0-9e9e-b718a74131a2]; APQP and PPAP Owners [bfbec27b-d0b6-47b2-b6d4-9241abf697c7] | Not exported | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/153 |
| 2cd7542a-dc45-431b-9a92-e9cdc752e02f | Not exported | Not exported | Not exported | null | null | null | false | Quality Managers | Quality Comply Framework [5d47f306-956a-4a9d-bdfd-fec0cedc6f12] | Not exported | Not exported | Not exported | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/191 |
| fce368b6-d508-4ed8-aecc-5bed53361bec | null | null | null | null | Default application security groups | null | false | Item Coordinator | Product Management [fe285e18-057e-4777-9877-0cdef2d4e288] | null | APQP and PPAP Owners [bfbec27b-d0b6-47b2-b6d4-9241abf697c7] | Not exported | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/552 |
| 6a60ed95-6592-4fc2-9a2d-6c3ad7269206 | Not exported | Not exported | Not exported | null | Default application security groups | null | false | Item Owner | Product Management [fe285e18-057e-4777-9877-0cdef2d4e288] | Not exported | Not exported | Not exported | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/554 |
| 15849ab9-ab69-4e83-b838-7ea7a9731f8d | Not exported | Not exported | Not exported | null | null | null | false | NCR Management | Nonconformance Reporting [548e2216-7931-4c36-91ee-5aee70ca0c14] | Not exported | Not exported | Not exported | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/664 |
| dfd54047-fa55-4a51-a2fd-8ba00ea643cf | Not exported | Not exported | Not exported | null | Default application security groups | null | false | Item User | Product Management [fe285e18-057e-4777-9877-0cdef2d4e288] | Not exported | Not exported | Not exported | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/841 |
| 9fd2aa5a-ee79-45bc-8037-dc10ebe54c5e | Not exported | Not exported | Not exported | null | Default application security groups | null | false | Complaint Management | Customer Complaint Reporting [2f34de26-c2c6-432d-8461-228c6a7c1ad8] | Not exported | Not exported | Not exported | APQP &amp; PPAP Manager(v1.0.0.0).ipack /GraphData/Items/882 |
| b36f090a-0540-47f5-85bd-ce2d70bbd573 | Not exported | Not exported | Not exported | Not exported | full access (Manager) | null | false | Inspection - Full Access | Inspections [552ac529-b2e5-4597-a16a-725c46ab992b] | Not exported | Not exported | null | Checklist Framework(v1.0.0).ipack /GraphData/Items/296 |


## 89 Subject

**Internal name:** `SysSubjectEntity`. **Stable metadata ID:** `785124a0-20be-4606-8d25-56dd86248bbf`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 1 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/52`.

**Package variations:** 1 property differences are retained in [metadata variation register](metadata-variation-register.csv). The main definition is a documentary reference; the optional compatibility add-on and import policy can affect installed values.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Name | Text (nvarchar); max length 250 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Name; field ID 9f473171-6667-448d-9302-f7bd754999a6 |


## 90 Workflow Instance

**Internal name:** `SysWorkflowInstanceEntity`. **Stable metadata ID:** `ff5895e2-f1a0-4f19-83fc-417947fcef53`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 6 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/48`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Current Stage | M:1 to Workflow Stage (SysWorkflowStageEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal CurrentStage; field ID 3d6d06e9-f939-4570-8a50-96e2b0cf2e0c |
| Date Not Required | Date (Date); max length 0; TimeZoneCapture=null | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Auto Close Related Task WF; internal DateNotRequired; field ID 258f338e-9606-470f-beb9-8b05551ee613 |
| Due Date | Date and Time (datetime); max length 0; TimeZoneCapture=null | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal DueDate; field ID e4998719-4187-4bb5-946d-268882a2557b |
| Person Responsible | M:1 to Subject (SysSubjectEntity); many → 0..1; no named inverse exported; Inferred from foreign-key relation and declaring start; requiredness extracted | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal PersonResponsible; field ID f50139e1-050f-4af7-9b08-2ea71d9f6d93 |
| Person Responsible Id | Guid (uniqueidentifier); max length 0 | N | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | Action Handler: Sync Person Responsible; internal PersonResponsibleId; field ID 8dc1c8dc-f39c-4159-8e38-699de87f3e8f |
| Workflow Status | Workflow  Status  Type (Workflow Status Type); max length 0 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal WorkflowStatus; field ID e082ebf7-344c-4215-a8e5-ae1f4e77937f |


## 91 Workflow Stage

**Internal name:** `SysWorkflowStageEntity`. **Stable metadata ID:** `f3ca6a8e-9736-4749-9c16-6c27e180b90e`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 1 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=false; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/488`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| System Name | Text (nvarchar); max length 250 | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal SystemName; field ID 9e190464-0b9e-4d2d-964a-9cfac35c9fff |


## 92 Category

**Internal name:** `UserReg_CategoryObject`. **Stable metadata ID:** `1e179eb3-9d29-44d2-856c-8e435e382ac6`. **Classification:** Extracted record metadata.

**Inheritance parent:** None.

**Directly declared fields:** 1 exported fields. Inherited fields are documented once on the declaring object.

**Object flags:** IsAbstract=false; HasWorkflow=false; IsAuditEnabled=false; IsSecurityEnabled=true; attachments=false; documents=false; mail merge=false.

**Source:** APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/46`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Name | Text (nvarchar); max length unspecified | Y | None exported | Metadata IsReadOnly=false; IsProtected=false; effective editor/visibility depends on inherited security and view/stage | No field-specific population operation resolved; internal Name; field ID 72b081bd-f6cd-41cf-a34f-3f0c4d5eff20 |

