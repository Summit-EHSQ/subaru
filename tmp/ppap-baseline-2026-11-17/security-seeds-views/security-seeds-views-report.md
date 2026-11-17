# PPAP OOTB security views and seed evidence

All conclusions are Extracted unless explicitly qualified. JSON pointers are local to the named package. No configuration was installed or executed.

## Security

Permission definitions describe available operations; only ACL entries demonstrate exported grants. All security settings examined inherit permissions. An empty direct ACL is not an absence-of-access finding. Group membership and entity-specific/runtime security must be considered before asserting effective access. No individual user membership or runtime direct-access test is supplied.

| Group | Stable ID | Kind | Package and pointer |
|---|---|---|---|
| Quality - Comply - Standard Access | 4801f01c-91ef-4c34-9697-9e9adbf2e57f | SysUserGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/18 |
| Quality - Perform - Standard Access | 0ebd1972-dfb5-4600-ac0e-be9bf0e4fcaa | SysUserGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/19 |
| APQP and PPAP Owners | bfbec27b-d0b6-47b2-b6d4-9241abf697c7 | SysSecurityGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/63 |
| Everyone | 88678c69-5179-4d03-b531-9dec22028247 | SysSystemGroupEntity | Checklist Framework(v1.0.0).ipack /GraphData/Items/43 |
| Quality - Transform - Standard Access | 2c86e8c5-2d2d-41f0-9e9e-b718a74131a2 | SysUserGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/85 |
| APQP and PPAP Contributors | 55cd72fd-bc23-4488-83cb-abe55f84e5b8 | SysSecurityGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/153 |
| Quality Managers | 2cd7542a-dc45-431b-9a92-e9cdc752e02f | SysSecurityGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/191 |
| Quality - Transform - Full Access | 9597351f-960d-4cd5-a4c8-67ad4a28367e | SysUserGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/285 |
| Quality - Perform - Full Access | a4b61c0d-fd0f-48e2-999d-c05d8dbf3882 | SysUserGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/286 |
| Quality - Comply - Full Access | 350741af-74cc-4267-a38d-23aa3852d964 | SysUserGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/364 |
| Item Coordinator | fce368b6-d508-4ed8-aecc-5bed53361bec | SysSecurityGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/552 |
| Item Owner | 6a60ed95-6592-4fc2-9a2d-6c3ad7269206 | SysSecurityGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/554 |
| NCR Management | 15849ab9-ab69-4e83-b838-7ea7a9731f8d | SysSecurityGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/664 |
| Item User | dfd54047-fa55-4a51-a2fd-8ba00ea643cf | SysSecurityGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/841 |
| Complaint Management | 9fd2aa5a-ee79-45bc-8037-dc10ebe54c5e | SysSecurityGroupEntity | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/882 |
| Inspection - Full Access | b36f090a-0540-47f5-85bd-ce2d70bbd573 | SysSecurityGroupEntity | Checklist Framework(v1.0.0).ipack /GraphData/Items/296 |

The exported membership direction is `member MemberOf group`. It is a security-group association, not object inheritance.

| Member | Member of | Source |
|---|---|---|
| Quality - Perform - Standard Access | Quality - Comply - Standard Access | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Relations/103 |
| APQP and PPAP Owners | Item Coordinator | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Relations/385 |
| APQP and PPAP Owners | APQP and PPAP Contributors | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Relations/387 |
| Quality - Transform - Standard Access | Quality - Perform - Standard Access | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Relations/427 |
| Quality - Transform - Standard Access | APQP and PPAP Contributors | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Relations/428 |
| Quality - Transform - Full Access | Quality - Perform - Full Access | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Relations/976 |
| Quality - Transform - Full Access | APQP and PPAP Owners | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Relations/977 |
| Quality - Perform - Full Access | Quality - Comply - Full Access | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Relations/979 |

### Principal PPAP ACL evidence

| Secured record | Inherited | Subject | Allow operations | Source |
|---|---|---|---|---|
| APQP_PPAPAbstractObject | true | No direct ACL entries | Effective access unresolved from this record alone | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/81 |
| APQP_AbstractTextLo1Object | true | No direct ACL entries | Effective access unresolved from this record alone | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/104 |
| APQP_AbstractTextLo3Object | true | No direct ACL entries | Effective access unresolved from this record alone | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/163 |
| APQP_AbstractTextLo0Object | true | No direct ACL entries | Effective access unresolved from this record alone | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/176 |
| APQP_AbstractTextLo4Object | true | No direct ACL entries | Effective access unresolved from this record alone | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/244 |
| [A&PM] PPAP Status Dashboard | true | APQP and PPAP Owners | Edit | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/314 |
| [A&PM] PPAP Status Dashboard | true | Everyone | View | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/314 |
| APQP & PPAP Manager | true | APQP and PPAP Contributors | ViewDetails, ViewInInventory | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/370 |
| APQP & PPAP Manager | true | APQP and PPAP Owners | Create, Edit, HardDelete | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/370 |
| APQP and PPAP Contributors | true | APQP and PPAP Owners | Edit | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/419 |
| ProjectFwk_ProjectTaskDefObject | true | APQP and PPAP Contributors | View | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/541 |
| ProjectFwk_ProjectTaskDefObject | true | APQP and PPAP Owners | HardDelete, Create, Edit | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/541 |
| APQP_AbstractTextLo2Object | true | No direct ACL entries | Effective access unresolved from this record alone | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/577 |
| APQP and PPAP Owners | true | APQP and PPAP Owners | Edit | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/631 |
| ProjectFwk_PFWKProjectTaskObject | true | No direct ACL entries | Effective access unresolved from this record alone | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/773 |
| ProjectFwk_ProjectAbstractObject | true | No direct ACL entries | Effective access unresolved from this record alone | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/801 |
| ProjectFwk_ProjectTaskObject | true | No direct ACL entries | Effective access unresolved from this record alone | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/878 |
| [A&PM] PPAP Reports | true | APQP and PPAP Owners | Edit | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/944 |
| [A&PM] PPAP Reports | true | Everyone | View | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/944 |

The PPAP Status Dashboard grants Owners Edit and Everyone View. The PPAP Reports definition grants Owners Edit and Everyone View. These artifact-level grants do not prove access to all records used in reports. APQP & PPAP Manager module-level grants give Contributors View Details and View in Inventory; Owners Create, Edit and Delete. Module ACL entries are additional evidence, not a complete per-record security contract.

## Seed configuration

| Template | Project type | Active | Assignment records | Stable ID | Source |
|---|---|---|---|---|---|
| Level 1 PPAP | PPAP | true | 18 | e0ce9e4d-5e41-4ad5-b7bb-da3dfb5119f4 | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/27 |
| Standard APQP | APQP | true | 43 | ad77ca9d-0725-4561-9243-8e34826fbea4 | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/33 |
| Level 5 PPAP | PPAP | true | 18 | 693867ef-2d58-43a6-a5f0-0c8cdab7f0eb | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/107 |
| Level 2 PPAP | PPAP | true | 18 | 7409a80a-0d57-4d3f-9c7e-bd7d62c9c810 | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/110 |
| Level 4 PPAP | PPAP | true | 18 | c3357f3e-cc86-483c-ac02-01f82e4489e4 | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/119 |
| Level 3 PPAP | PPAP | true | 18 | e8ef85b5-edc5-4c0f-a440-1aa5250076fb | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/270 |

Template task assignments are exported as Project/Task records with relationships, not operational completed tasks. The full mappings are in `template-task-assignments.csv`. Preserve relationships when reusing or migrating templates.

### PPAP checklist element questions

| Order | Question reference | Question | Stable ID | Source |
|---|---|---|---|---|
| 1 | PPAP01.1 | Design Documentation complete and attached? | 410db840-f55a-4670-b537-ac7038472456 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/809 |
| 2 | PPAP01.2 | Engineering Change Documentation has been attached? | e99c38fb-a632-4467-8ea9-e85e251d948d | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/122 |
| 3 | PPAP01.3 | Customer Engineering Approval has been attached? | 5a310626-2585-4632-8479-93caab272da6 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/864 |
| 4 | PPAP01.4 | DFMEA has been attached? | f1fb227b-c49c-4050-a0f0-fa5da58e0683 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/666 |
| 5 | PPAP01.5 | Process Flow Diagram has been attached? | 1639f83e-3c81-40aa-a042-335960acde78 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/875 |
| 6 | PPAP01.6 | PFMEA has been attached? | 604b65b1-b4bf-48b1-99d3-ddd491a1a445 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/511 |
| 7 | PPAP01.7 | Control Plan has been attached? | 3aa02b88-9db8-48fa-bfa3-7cde119b2128 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/220 |
| 8 | PPAP01.8 | Measurement Systems Analysis (MSA) has been attached? | ff095fe1-c57c-4c27-8193-ed1adf892592 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/428 |
| 9 | PPAP01.9 | Dimensional Results have been attached? | 252cdbc5-270d-4877-9297-32ba4a96f00e | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/948 |
| 10 | PPAP01.10 | Records of Material / Performance Tests have been attached? | 469716c7-822d-4a37-b1cf-cec8edec7338 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/940 |
| 11 | PPAP01.11 | Initial Process Studies have been attached? | 627cdff8-94bc-4631-8022-a9fb562ed35d | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/768 |
| 12 | PPAP01.12 | Qualified Lab Documentation has been attached? | c18805b9-04c5-4a21-bafd-4482b4715230 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/265 |
| 13 | PPAP01.13 | Appearance Approval Report has been attached? | a4872d44-e82d-4c4b-bc46-d0c7820833c8 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/767 |
| 14 | PPAP01.14 | Sample Production Parts are ready for shipment? | dc8cbadf-f529-45f5-9c67-f5060e8345a0 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/934 |
| 15 | PPAP01.15 | Master Sample is ready for shipment? | 0acc4121-e00b-474a-b82f-7ed3ab5b8b7e | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/489 |
| 16 | PPAP01.16 | Checking Aids have been attached? | e8225ce8-a10f-4c2d-9cef-8d1636d2c037 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/645 |
| 17 | PPAP01.17 | Customer Specific Requirements have been attached? | 72af3b6a-dc5c-4200-ac54-71322dea4ecc | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/149 |
| 18 | PPAP01.18 | Part Submission Warrant (PSW) has been completed? | 024990e4-5492-4cd2-8276-8a192ac04fb4 | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/709 |

### Controlled lookup values

| Internal lookup object | Value | Caption | Index | Deleted | Source |
|---|---|---|---|---|---|
| APQP_AbstractTextLooObject | 2 | Medium | 1 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/147 |
| APQP_AbstractTextLo4Object | statistical process package | statistical process package | 3 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/150 |
| APQP_AbstractTextLo3Object | Level 5 – Warrant with product samples and complete supporting data reviewed at supplier’s manufacturing location. | Level 5 – Warrant with product samples and complete supporting data reviewed at supplier’s manufacturing location. | 4 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/161 |
| APQP_AbstractTextLo3Object | Level 4 – Warrant and other requirements as defined by customer. | Level 4 – Warrant and other requirements as defined by customer. | 3 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/162 |
| APQP_AbstractTextLo3Object | Level 1 – Warrant only (and for designated appearance items, an Appearance Approval Report) submitted to customer. | Level 1 – Warrant only (and for designated appearance items, an Appearance Approval Report) submitted to customer. | 0 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/164 |
| APQP_AbstractTextLo3Object | Level 2 – Warrant with product samples and limited supporting data submitted to customer. | Level 2 – Warrant with product samples and limited supporting data submitted to customer. | 1 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/167 |
| APQP_AbstractTextLo3Object | Level 3 – Warrant with product samples and complete supporting data submitted to customer. | Level 3 – Warrant with product samples and complete supporting data submitted to customer. | 2 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/170 |
| APQP_AbstractTextLo0Object | Appearance | Appearance | 2 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/172 |
| APQP_AbstractTextLo0Object | Materials/Functional | Materials/Functional | 1 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/173 |
| APQP_AbstractTextLo0Object | Dimensional | Dimensional | 0 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/177 |
| APQP_AbstractTextLooObject | 1 | Low | 2 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/272 |
| APQP_AbstractTextLo2Object | Change in Part Processing | Change in Part Processing | 2 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/327 |
| APQP_AbstractTextLo1Object | Initial Submission | Initial Submission | 0 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/363 |
| APQP_AbstractTextLo2Object | Change to Optional Construction or Material | Change to Optional Construction or Material | 0 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/365 |
| APQP_AbstractTextLo2Object | Other - please specify | Other - please specify | 4 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/375 |
| APQP_AbstractTextLo1Object | Tooling Inactive > than 1 year | Tooling Inactive > than 1 year | 4 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/391 |
| APQP_AbstractTextLooObject | 3 | High | 0 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/423 |
| APQP_AbstractTextLo4Object | material and functional tests | material and functional tests | 1 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/426 |
| APQP_AbstractTextLo2Object | Sub-Supplier or Material Source Change | Sub-Supplier or Material Source Change | 1 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/574 |
| APQP_AbstractTextLo2Object | Parts Produced at Additional Location | Parts Produced at Additional Location | 3 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/576 |
| APQP_AbstractTextLo1Object | Tooling: Transfer, Replacement, Refurbishment or additional | Tooling: Transfer, Replacement, Refurbishment or additional | 2 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/662 |
| APQP_AbstractTextLo1Object | Engineering Change(s) | Engineering Change(s) | 1 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/744 |
| APQP_AbstractTextLo1Object | Correction of Discrepancy | Correction of Discrepancy | 3 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/746 |
| APQP_AbstractTextLo4Object | appearance criteria | appearance criteria | 2 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/810 |
| APQP_AbstractTextLo4Object | dimensional measurement | dimensional measurement | 0 | false | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/861 |

### Shared configuration records


**ProjectFwk_PhaseObject**

| Stable ID | Caption | Exported values | Relations | Source |
|---|---|---|---|---|
| 64be0280-30b2-464c-8457-22e392a0167a | In Progress | {"Id":"64be0280-30b2-464c-8457-22e392a0167a","Active":true,"DevelopmeHelper":null,"Name":"In Progress","Order":2,"WeightAssigned":0.85,"WFStageName":"InProgress"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/873 |
| 55f969fc-6f05-4dc2-b2bf-17c5ed25b94a | Process Design & Development | {"Id":"55f969fc-6f05-4dc2-b2bf-17c5ed25b94a","Active":true,"DevelopmeHelper":false,"Name":"Process Design & Development","Order":4,"WeightAssigned":0.25,"WFStageName":"ThirdGate"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/610 |
| dc417e1e-0eff-440a-bd00-da10294b21db | Product & Process Validation | {"Id":"dc417e1e-0eff-440a-bd00-da10294b21db","Active":true,"DevelopmeHelper":false,"Name":"Product & Process Validation","Order":5,"WeightAssigned":0.25,"WFStageName":"FourthGate"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/156 |
| e2654a55-0631-42e8-8573-b77d145078ea | Plan & Define | {"Id":"e2654a55-0631-42e8-8573-b77d145078ea","Active":true,"DevelopmeHelper":false,"Name":"Plan & Define","Order":1,"WeightAssigned":0.2,"WFStageName":"FirstGate"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/572 |
| c77b0f50-4ace-47b5-bede-fffaca3da42d | Product Design & Development | {"Id":"c77b0f50-4ace-47b5-bede-fffaca3da42d","Active":true,"DevelopmeHelper":false,"Name":"Product Design & Development","Order":3,"WeightAssigned":0.25,"WFStageName":"SecondGate"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/204 |
| edb7edce-692d-460c-8cdc-1c0e4ca3388e | Interim Approval | {"Id":"edb7edce-692d-460c-8cdc-1c0e4ca3388e","Active":true,"DevelopmeHelper":null,"Name":"Interim Approval","Order":4,"WeightAssigned":0.05,"WFStageName":"InterimApproval"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/964 |
| 243e9bf3-5fda-4d60-a606-dea7f36d14d3 | In Review | {"Id":"243e9bf3-5fda-4d60-a606-dea7f36d14d3","Active":true,"DevelopmeHelper":null,"Name":"In Review","Order":3,"WeightAssigned":0.1,"WFStageName":"InReview"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/210 |
| f62b46fd-ff5d-4d8c-ad75-c2379c6169e8 | Draft | {"Id":"f62b46fd-ff5d-4d8c-ad75-c2379c6169e8","Active":false,"DevelopmeHelper":null,"Name":"Draft","Order":1,"WeightAssigned":0,"WFStageName":"Draft"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/133 |
| 7894a735-9a2f-4077-96d6-765fde91ca17 | Draft | {"Id":"7894a735-9a2f-4077-96d6-765fde91ca17","Active":false,"DevelopmeHelper":false,"Name":"Draft","Order":1,"WeightAssigned":0,"WFStageName":"Draft"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/323 |
| 1efd3b1f-ac46-4ad1-8db3-41b53c027ada | Feedback Assessment & Corrective Action | {"Id":"1efd3b1f-ac46-4ad1-8db3-41b53c027ada","Active":true,"DevelopmeHelper":false,"Name":"Feedback Assessment & Corrective Action","Order":6,"WeightAssigned":0.05,"WFStageName":"FifthGate"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/261 |

**ProjectFwk_PFRoleObject**

| Stable ID | Caption | Exported values | Relations | Source |
|---|---|---|---|---|
| a5d3512a-3558-4d58-b082-678ef5ed7b73 | Engineering | {"HelpProjRolMem":null,"Id":"a5d3512a-3558-4d58-b082-678ef5ed7b73","Code":"R50","HelperProjectID":null,"Name":"Engineering"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/86 |
| d50bd6b3-8532-43dd-8142-e26404d93edf | Quality Assurance | {"HelpProjRolMem":null,"Id":"d50bd6b3-8532-43dd-8142-e26404d93edf","Code":"R30","HelperProjectID":null,"Name":"Quality Assurance"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/682 |
| 20388020-8033-4066-8d14-1dcb953033ca | Manufacturing | {"HelpProjRolMem":null,"Id":"20388020-8033-4066-8d14-1dcb953033ca","Code":"R60","HelperProjectID":null,"Name":"Manufacturing"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/914 |
| bdff9983-3d0d-45d4-9534-bfcf7142cffd | Quality Control | {"HelpProjRolMem":null,"Id":"bdff9983-3d0d-45d4-9534-bfcf7142cffd","Code":"R40","HelperProjectID":null,"Name":"Quality Control"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/504 |
| 889717f1-2f57-4903-bd87-c40e96fe0c01 | Process Owner | {"HelpProjRolMem":null,"Id":"889717f1-2f57-4903-bd87-c40e96fe0c01","Code":"R10","HelperProjectID":null,"Name":"Process Owner"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/611 |
| d9cd20c5-8191-411a-aa4d-2e956542de30 | Project Owner | {"HelpProjRolMem":null,"Id":"d9cd20c5-8191-411a-aa4d-2e956542de30","Code":"R20","HelperProjectID":null,"Name":"Project Owner"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/328 |
| 4e53bb1a-3dfd-49e1-ba4d-f057ed9df2c1 | Supplier | {"HelpProjRolMem":null,"Id":"4e53bb1a-3dfd-49e1-ba4d-f057ed9df2c1","Code":"R70","HelperProjectID":null,"Name":"Supplier"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/427 |
| 53b26a17-1b79-4c3e-9c26-fa588715eb6e | Customer | {"HelpProjRolMem":null,"Id":"53b26a17-1b79-4c3e-9c26-fa588715eb6e","Code":"R80","HelperProjectID":null,"Name":"Customer"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/886 |

**ProjectFwk_ProjectTypeObject**

| Stable ID | Caption | Exported values | Relations | Source |
|---|---|---|---|---|
| f467e500-49c1-4877-8b65-9a20492687f9 | APQP | {"Id":"f467e500-49c1-4877-8b65-9a20492687f9","Name":"APQP","ProjeSystemName":"APQP_APQPObject","TotPhaseWeight":1} | Phases → Process Design & Development; Templates → Standard APQP; Phases → Product Design & Development; Phases → Plan & Define; Phases → Draft; Phases → Feedback Assessment & Corrective Action; Phases → Product & Process Validation | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/40 |
| a6aa71e1-4202-4d7f-b583-caddd4c87188 | PPAP | {"Id":"a6aa71e1-4202-4d7f-b583-caddd4c87188","Name":"PPAP","ProjeSystemName":"APQP_PPAPAbstractObject","TotPhaseWeight":1} | Templates → Level 1 PPAP; Phases → Interim Approval; Phases → In Review; Templates → Level 5 PPAP; Phases → In Progress; Templates → Level 3 PPAP; Templates → Level 4 PPAP; Templates → Level 2 PPAP; Phases → Draft | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/221 |

**ProjectFwk_TaskTypeObject**

| Stable ID | Caption | Exported values | Relations | Source |
|---|---|---|---|---|
| c06d8c67-cf4e-4b75-8f54-ad108c72951b | Task | {"Id":"c06d8c67-cf4e-4b75-8f54-ad108c72951b","Name":"Task","RelationName":"Def","TableName":"ProjectFwk_TaskObject"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/844 |
| 05bcb6f1-fbfe-47d6-8405-c224a7aca861 | Checklist | {"Id":"05bcb6f1-fbfe-47d6-8405-c224a7aca861","Name":"Checklist","RelationName":"Def","TableName":"ProjectFwk_ChecklistObject"} |  | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/765 |

**ProjectFwk_ChecklistTypeObject**

| Stable ID | Caption | Exported values | Relations | Source |
|---|---|---|---|---|
| 969b68f3-e25f-4382-9d2d-9c68b494a3d8 | PPAP Checklists | {"Id":"969b68f3-e25f-4382-9d2d-9c68b494a3d8","Description":"Checklist consisting of the 18 elements of a PPAP.","MaxOrder":18,"Name":"PPAP Checklists","NbChecklists":5,"NbQuestions":18,"QueAnswerObject":"CLF_QuestionAnswerObject","Reference":"PPAP01"} | Questions → PPAP01.8; Questions → PPAP01.17; Checklists → Level 5 PPAP; Questions → PPAP01.2; Questions → PPAP01.1; Questions → PPAP01.14; Questions → PPAP01.10; Questions → PPAP01.4; Questions → PPAP01.5; Questions → PPAP01.3; Checklists → Level 1 PPAP; Checklists → Level 4 PPAP; Questions → PPAP01.11; Questions → PPAP01.12; Questions → PPAP01.18; Questions → PPAP01.7; Checklists → Level 2 PPAP; Questions → PPAP01.6; Questions → PPAP01.13; Questions → PPAP01.15; Questions → PPAP01.9; Questions → PPAP01.16; Checklists → Level 3 PPAP | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/13 |

**ProjectFwk_TypeofRecordObject**

| Stable ID | Caption | Exported values | Relations | Source |
|---|---|---|---|---|
| a003b6cf-3e85-405c-a76c-fa70855ac422 | PPAP | {"Id":"a003b6cf-3e85-405c-a76c-fa70855ac422","Name":"PPAP","ObjSystemName":"APQP_PPAPAbstractObject","RelatedPath":"ProjectFwk_TaskObject.PPAPs"} |  | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/476 |

**CLF_AnswerTypeObject**

| Stable ID | Caption | Exported values | Relations | Source |
|---|---|---|---|---|
| 771916e1-5251-4658-add8-3091457e7295 | Choice | {"Id":"771916e1-5251-4658-add8-3091457e7295","Value":"Choice","Index":0,"Caption":"Choice"} |  | Checklist Framework(v1.0.0).ipack /GraphData/Items/312 |
| a6e3bb24-6722-4dd2-b7fd-02ae1a16debd | Checkbox | {"Id":"a6e3bb24-6722-4dd2-b7fd-02ae1a16debd","Value":"Checkbox","Index":1,"Caption":"Checkbox"} |  | Checklist Framework(v1.0.0).ipack /GraphData/Items/251 |
| 93ab1484-09ce-4868-9618-bfa62ea0b01c | Choices | {"Id":"93ab1484-09ce-4868-9618-bfa62ea0b01c","Value":"Choices","Index":5,"Caption":"Choices"} |  | Checklist Framework(v1.0.0).ipack /GraphData/Items/261 |
| c52ac043-81af-413a-a393-6490fec6b1aa | Text | {"Id":"c52ac043-81af-413a-a393-6490fec6b1aa","Value":"Text","Index":3,"Caption":"Text"} |  | Checklist Framework(v1.0.0).ipack /GraphData/Items/262 |
| ed36fa47-3b62-4323-a2ca-a58c8fad2ac1 | Float | {"Id":"ed36fa47-3b62-4323-a2ca-a58c8fad2ac1","Value":"Float","Index":2,"Caption":"Float"} |  | Checklist Framework(v1.0.0).ipack /GraphData/Items/269 |
| 7580b590-07e8-4142-9059-3020a636d918 | Date | {"Id":"7580b590-07e8-4142-9059-3020a636d918","Value":"Date","Index":4,"Caption":"Date"} |  | Checklist Framework(v1.0.0).ipack /GraphData/Items/299 |

**CLF_FindingDDObject**

| Stable ID | Caption | Exported values | Relations | Source |
|---|---|---|---|---|
| 692618c0-eb32-4580-98d4-3d4984baffb6 | 1 week | {"Id":"692618c0-eb32-4580-98d4-3d4984baffb6","Value":7,"Index":2,"Caption":"1 week"} |  | Checklist Framework(v1.0.0).ipack /GraphData/Items/78 |
| eb1f2003-c086-4224-aca9-a26c842f6442 | 3 days | {"Id":"eb1f2003-c086-4224-aca9-a26c842f6442","Value":3,"Index":1,"Caption":"3 days"} |  | Checklist Framework(v1.0.0).ipack /GraphData/Items/134 |
| 062252c9-faae-4eca-a428-8293818c98f3 | 2 weeks | {"Id":"062252c9-faae-4eca-a428-8293818c98f3","Value":14,"Index":3,"Caption":"2 weeks"} |  | Checklist Framework(v1.0.0).ipack /GraphData/Items/135 |
| 5e108aed-80b1-4b12-82c9-109287c51ffe | Immediately | {"Id":"5e108aed-80b1-4b12-82c9-109287c51ffe","Value":1,"Index":0,"Caption":"Immediately"} |  | Checklist Framework(v1.0.0).ipack /GraphData/Items/136 |
| 6f4b1be9-7436-409d-8af3-ad3f246625c9 | 1 month | {"Id":"6f4b1be9-7436-409d-8af3-ad3f246625c9","Value":30,"Index":4,"Caption":"1 month"} |  | Checklist Framework(v1.0.0).ipack /GraphData/Items/139 |

**CLF_FindingStatusObject**

| Stable ID | Caption | Exported values | Relations | Source |
|---|---|---|---|---|
| 522c4ce8-9478-4f0b-bbfc-b050d615cdfb | Closed without Action | {"BC":null,"Id":"522c4ce8-9478-4f0b-bbfc-b050d615cdfb","Code":"Closed without Action","Icon":null,"Name":"Closed without Action"} | TC → Dark Blue | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/0 |
| 90db8f7f-26b5-4dfa-93b6-7dec96683ee7 | In Progress | {"BC":null,"Id":"90db8f7f-26b5-4dfa-93b6-7dec96683ee7","Code":"In Progress","Icon":null,"Name":"In Progress"} | TC → Dark Green | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/13 |
| b1a82f40-1b4f-4811-8880-717d4fb812b4 | Closed | {"BC":null,"Id":"b1a82f40-1b4f-4811-8880-717d4fb812b4","Code":"Closed","Icon":null,"Name":"Closed"} | TC → Dark Blue | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/16 |
| 2ea0b4d2-ce73-4bd4-a837-5030d44e6e45 | Open | {"BC":null,"Id":"2ea0b4d2-ce73-4bd4-a837-5030d44e6e45","Code":"Open","Icon":null,"Name":"Open"} | TC → Red | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/17 |

**CLF_ChoiceListObject**

| Stable ID | Caption | Exported values | Relations | Source |
|---|---|---|---|---|
| 70b9d693-5d24-424b-a8e7-a17d9a072296 | Yes/No | {"Id":"70b9d693-5d24-424b-a8e7-a17d9a072296","Description":null,"MaxPoints":1,"Name":"Yes/No","NbChoices":2,"Reference":"YN"} | Choices → No; Choices → Yes | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/4 |
| cc01b77b-0ed2-4294-9b4a-d3c859f6ef69 | Yes/No/NA | {"Id":"cc01b77b-0ed2-4294-9b4a-d3c859f6ef69","Description":null,"MaxPoints":1,"Name":"Yes/No/NA","NbChoices":3,"Reference":"YNN"} | Choices → NA; Choices → Yes; Choices → No | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/9 |

**CLF_ChoiceObject**

| Stable ID | Caption | Exported values | Relations | Source |
|---|---|---|---|---|
| 5e0d7c72-dadb-4241-b293-f79c213b1870 | No | {"Id":"5e0d7c72-dadb-4241-b293-f79c213b1870","Css":"text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted darkred;","Name":"No","Reference":"YN.2","Value":0} | BColor → Red; ChoiceList → Yes/No; TColor → White | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/2 |
| 9bbe68b1-ab58-4b28-9262-6c4c2beb289e | Yes | {"Id":"9bbe68b1-ab58-4b28-9262-6c4c2beb289e","Css":"text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted darkgreen;","Name":"Yes","Reference":"YNN.1","Value":1} | BColor → Green; TColor → Black; ChoiceList → Yes/No/NA | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/6 |
| f5a08400-fcae-4ad2-b150-326fdebb9daf | No | {"Id":"f5a08400-fcae-4ad2-b150-326fdebb9daf","Css":"text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted darkred;","Name":"No","Reference":"YNN.2","Value":0} | TColor → White; BColor → Red; ChoiceList → Yes/No/NA | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/10 |
| 8d75d3c0-54cc-43dd-be51-ca488ca18b0e | NA | {"Id":"8d75d3c0-54cc-43dd-be51-ca488ca18b0e","Css":"text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted grey;","Name":"NA","Reference":"YNN.3","Value":null} | ChoiceList → Yes/No/NA; TColor → Grey; BColor → White | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/12 |
| 03b79b78-1c12-4e19-bcc4-da6e5e9f14b5 | Yes | {"Id":"03b79b78-1c12-4e19-bcc4-da6e5e9f14b5","Css":"text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted darkgreen;","Name":"Yes","Reference":"YN.1","Value":1} | TColor → Black; ChoiceList → Yes/No; BColor → Green | Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/15 |

### Default application settings

| Setting | Value |
|---|---|
| APQPCautioInd | 15 |
| APQPTaskCaution | 15 |
| EnableCAR | true |
| EnableCARPPAP | true |
| HideTaskDraft | false |
| Name | Default |
| PPAPCautioInd | 15 |
| PPAPHidTskDraft | false |
| PPAPTaskCaution | 15 |
| SkipGate2 | false |
| SkipGate2Msg | Please ensure that you adjust the APQP Gate Weighting after saving this change. |

Source: APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/429; 7b040ae4-8679-43df-ad06-3ad53a684674. CustomCSS is also exported (2805 characters).

### Cross-package record differences

These are differing exported representations, not an asserted effective post-install value. IfExists/IfNotExists numeric policy codes are retained in JSON; their import semantics must be confirmed before claiming which value wins.

| Record | Stable ID | Differing fields and representations | Sources |
|---|---|---|---|
| Yes/No | 70b9d693-5d24-424b-a8e7-a17d9a072296 | {"MaxPoints":[{"package":"APQP & PPAP Manager - Data(v1.0.0.0).ipack","value":null},{"package":"Checklist Framework - Data(v1.0.0).ipack","value":1}],"NbChoices":[{"package":"APQP & PPAP Manager - Data(v1.0.0.0).ipack","value":0},{"package":"Checklist Framework - Data(v1.0.0).ipack","value":2}]} | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/19; Checklist Framework - Data(v1.0.0).ipack /GraphData/Items/4 |
| Fragment Application | 1df3c2f1-8a0c-4ec6-80d7-15a291933dc9 | {"Index":[{"package":"APQP & PPAP Manager - Data(v1.0.0.0).ipack","value":16},{"package":"APQP & PPAP Manager(v1.0.0.0).ipack","value":16},{"package":"Checklist Framework(v1.0.0).ipack","value":25}]} | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/173; APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/21; Checklist Framework(v1.0.0).ipack /GraphData/Items/102/GraphData/Items/21 |
| System Objects | fe0eb852-ece3-431a-8813-75d0633a2c64 | {"Disabled":[{"package":"APQP & PPAP Manager - Data(v1.0.0.0).ipack","value":false},{"package":"APQP & PPAP Manager(v1.0.0.0).ipack","value":false},{"package":"Checklist Framework(v1.0.0).ipack","value":true},{"package":"Views Add-on(v1.0.0.0).ipack","value":true}],"Index":[{"package":"APQP & PPAP Manager - Data(v1.0.0.0).ipack","value":12},{"package":"APQP & PPAP Manager(v1.0.0.0).ipack","value":12},{"package":"Checklist Framework(v1.0.0).ipack","value":12},{"package":"Views Add-on(v1.0.0.0).ipack","value":9999}]} | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/264; APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/116; Checklist Framework(v1.0.0).ipack /GraphData/Items/42; Views Add-on(v1.0.0.0).ipack /GraphData/Items/12 |
| Checklist Framework | cb6277a9-6157-4149-bf7d-e44900119b0e | {"Disabled":[{"package":"APQP & PPAP Manager - Data(v1.0.0.0).ipack","value":true},{"package":"APQP & PPAP Manager(v1.0.0.0).ipack","value":true},{"package":"Checklist Framework(v1.0.0).ipack","value":true},{"package":"Views Add-on(v1.0.0.0).ipack","value":false}],"Index":[{"package":"APQP & PPAP Manager - Data(v1.0.0.0).ipack","value":null},{"package":"APQP & PPAP Manager(v1.0.0.0).ipack","value":null},{"package":"Checklist Framework(v1.0.0).ipack","value":null},{"package":"Views Add-on(v1.0.0.0).ipack","value":19}]} | APQP & PPAP Manager - Data(v1.0.0.0).ipack /GraphData/Items/375; APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/199; Checklist Framework(v1.0.0).ipack /GraphData/Items/21; Views Add-on(v1.0.0.0).ipack /GraphData/Items/11 |
| Action Plans | 4ed20735-6d62-41a7-9b9b-2cd26bb2a9bf | {"VersionNumber":[{"package":"APQP & PPAP Manager(v1.0.0.0).ipack","value":"1.2.1"},{"package":"Checklist Framework(v1.0.0).ipack","value":"1.0.0"}],"VersionOrder":[{"package":"APQP & PPAP Manager(v1.0.0.0).ipack","value":1002001},{"package":"Checklist Framework(v1.0.0).ipack","value":1000000}]} | APQP & PPAP Manager(v1.0.0.0).ipack /GraphData/Items/185/GraphData/Items/37; Checklist Framework(v1.0.0).ipack /GraphData/Items/49 |

## Views and form behavior

The PPAP detail view is `APQP_PPAP_Detail` (stable ID `ee3fad4b-3787-45b3-a463-9f6f9ba01364`, main package `/GraphData/Items/812`). It is not public and is not marked parsed for mobile. Those export flags do not establish browser responsiveness. The complete extracted raw view is retained alongside this report.

- Create requires ProjectTemplate, Product (caption Part Number), and ProjectOwner in the view. Product is singular; this is not the target drawing-scoped multi-part warrant. Customer and Supplier selectors are present. The create Save action is captioned Continue.
- Draft keeps template read only but exposes Product, Customer, Supplier, ProjectOwner and SubmissionDate. InProgress/InReview/InterimApproval render Product, Customer and Supplier read only with EditReadOnly enabled. Completed/cancelled views make these and ProjectOwner read only, displaying completion or rejection date as appropriate. Top-level ShowEditReadOnlyLink=true means field immutability must not be inferred solely from the read-only markup.
- PSW Details includes customer part number, regulatory flag, drawing/change identifiers and dates, purchase order, weight, checking aid, material/reporting information, submission reasons/level, results, process code, run rate, hours and comments. PSW Templates is a mail-merge panel. Completed/cancelled PSW fields are read only with EditReadOnly permitted in the markup.
- Contributors grid assigns one Member against each ProjectRole. The task instruction text states that populated roles supply responsibility, empty roles default tasks to the PPAP responsible person, and changing the team member updates open tasks. These are extracted UI instructions; handler evidence should establish execution semantics.
- Task instructions state that task workflow remains Delayed until a due date exists; assigning a due date sends email and adds the task to My Tasks. The grid provides Assign Due Dates mass update and orders/group tasks by Phase.Order, Phase and Order.
- Open task rows expose integrated-record creation/view links, attachment links, responsible person/due date/status and completion data. CAR and Lesson Learned grids are present, with CAR display governed in the view by the EnableCARPPAP setting. Completed/cancelled contributor/task/CAR/lesson grids are rendered read only. General attachment, document and workflow comment sections are present.
- The draft task block uses the literal condition Draft && !ApplicationSettings.Get<bool>(APQP_SettingsObject, PPAPHidTskDraft, true) to render no task block. The exported Default setting PPAPHidTskDraft=false therefore suppresses that block in Draft under this view expression; the setting name should not be used to infer opposite behavior. Confirm runtime behavior before changing it.

### Views Add-on

The supplied installation note calls this mandatory for platform 6.5.75 or higher (ILX-8580). The package itself supplies 11 shared selection views, with zero APQP/PPAP-named views. It introduces no directly declared PPAP field in the view package. Preserve it as a separate compatibility dependency.

| View | Stable ID | Source |
|---|---|---|
| DocCtrl_Document_Select_RelatedDocuments | aa0ec1fd-fa4a-4ef7-bddf-e27b34f579fa | Views Add-on(v1.0.0.0).ipack /GraphData/Items/0 |
| TrainMgmt_CourseReq_Select_FromEmployee | 6e9181e8-aa76-4f68-928b-0fffb4172b00 | Views Add-on(v1.0.0.0).ipack /GraphData/Items/2 |
| CalenManagement_Day_OIIDay_Select | 325bc716-c085-480f-9c23-091a1876b932 | Views Add-on(v1.0.0.0).ipack /GraphData/Items/5 |
| TrainMgmt_CourseReq_Select_FromLocation | c6af9adc-d9d0-4d2e-aa7b-f996dac7e47c | Views Add-on(v1.0.0.0).ipack /GraphData/Items/7 |
| EnvAspImp_Hazards_Select | 55a2e231-291b-430b-a19f-a3d3c6256936 | Views Add-on(v1.0.0.0).ipack /GraphData/Items/8 |
| ProductMgmt_Employee_SelectApprovers | 4c20b939-b887-4e4a-974b-57c11fb3cc2c | Views Add-on(v1.0.0.0).ipack /GraphData/Items/13 |
| TrainMgmt_CourseReq_Select_FromGroup | c2cf03b0-1b86-41c8-836a-de3d1b077e64 | Views Add-on(v1.0.0.0).ipack /GraphData/Items/15 |
| Insp_PubQuestion_Select | d42b7332-e01a-46cc-9bf8-93217f3861df | Views Add-on(v1.0.0.0).ipack /GraphData/Items/16 |
| CalenManagement_Day_OIIDay_SelectFromAbsenceRecord | 5ef60aff-6f2f-4b99-86df-46eb836da6c3 | Views Add-on(v1.0.0.0).ipack /GraphData/Items/18 |
| TrainMgmt_Employee_Select_NoStatus | d1fa5f36-1d9c-41f7-9894-299f5fce4b2c | Views Add-on(v1.0.0.0).ipack /GraphData/Items/19 |
| TrainMgmt_Employee_Select_WithStatus | 413d7155-212b-4475-b340-262943d5f35e | Views Add-on(v1.0.0.0).ipack /GraphData/Items/23 |

The ProductMgmt_Employee_SelectApprovers selector excludes employee IDs already represented by ProductMgmt_ItemApproverObject for the item revision supplied in the _DependsOn.Parent$ query string (SubQueryPredicate Type=In, Negate=true). It is a Product Management selection helper, not evidence of the intended PPAP final approver pool. All add-on views are IsPublic=false and IsParsedForMobile=false.

## Supplied installation evidence and limitations

The note lists Supplier Relationship Management 1.3.0, Product Management 1.2.1 and Quality Comply Solution 1.0.0 as preconditions. It prescribes Checklist Framework, APQP & PPAP Manager, Checklist Framework Data, then APQP & PPAP Manager Data, with the platform-dependent Views Add-on. These are vendor bundle instructions, not user authorization to install. No package installation was performed.

The note asks for a PPAP merge template `PSW_Intelex.docx`, downloadable as Word. That DOCX is absent from the supplied directory, which contains only the five packages and text note. The template body, generated PSW layout and Word merge output cannot be verified from this bundle.

| Issue | Supplied known issue wording |
|---|---|
| TP#154212 | Members of APQP&PPAP Contributors can answer checklist questions for tasks where they are not person responsible (Checklist Framework limitation). |
| TP#151543 | Members of APQP&PPAP Contributors cannot see details on Program grid (current Product Management security issue). |
| TP#151452 | Instructions, workflow diagrams and section titles are not translated by the tool (Platform limitation). |
| TP#152726 | Process/Project Owner slicer does not filter according to the APQP&PPAP Owner group existing filter (Platform limitation). |
| TP#154170 | APQP&PPAP Owner can create Public Profile records for SRM (current SRM security settings). |
| TP#155049 | Wrong Due Date caption in validation error on Task record (current Action Plan configuration). |

These are historical bundle notes; the exports do not establish whether each issue persists on the target tenant/platform. Validate during baseline verification.

### Verified overlapping view delta

`Insp_PubQuestion_Select` is present in Checklist Framework and Views Add-on with the same stable view ID `d42b7332-e01a-46cc-9bf8-93217f3861df`. The substantive selector difference is `Request.QueryString["_DependsOn.Parent"]` in Checklist Framework versus `Request.QueryString["_DependsOn.Parent$"]` in Views Add-on. The remaining filter compares `Question.ChecklistType.Id` with the related inspection's TypeOfInspec and requires DateCreated >= Question.LastPublish. This supports treating the add-on as a compatibility view update. `Employee_AssignToPersonResponsible` also has two content hashes, but the observed difference is XML attribute ordering on columns, not an identified behavioral change.

### Canonical seed handoff

`canonical-seeds-by-object.json` groups 788 unique business/configuration records across 67 ObjectName values by ObjectName plus RecordId. It overlays scalar values in the supplied installation sequence for authoring convenience, merges relationship evidence, and retains per-source representations and value conflicts. This overlay does not claim effective installed values because IfExists/IfNotExists numeric import policies were not verified. `display_values` resolves relationship fields to caption plus stable target ID, including fields whose FieldData placeholder is null. Do not present a null FieldData placeholder as an absent relationship when a graph edge supplies its target. Typed lookup record values retain exact Value, Index, Caption and Deleted attributes even where field definitions are not exported; label those as extracted record attributes rather than invented field definitions.
