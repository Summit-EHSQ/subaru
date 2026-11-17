# OOTB field expression evidence

These are exact exported expressions and value-generator definitions, preserved for comparison. Exported validity flags are historical metadata; no expression was executed or validated on the target tenant.

## F 7391ff31-f677-47b9-a517-724070e58328 Calculation

APQP_APQPObject.DisplayField — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/625/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE("APQP ",Product," - ",Product.Name)</Expression></CalculationBase>
```

## F e8718d97-c2e3-49fa-9459-ac6f0a7e51cf DefaultValue

APQP_APQPObject.DraftWeight — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/241/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "Draft")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 404759da-8e01-4a02-806e-6353cb373174 DefaultValue

APQP_APQPObject.FifthGateWeight — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/352/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "FifthGate")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F d5101acf-7583-4459-85f6-0e74bfd61c97 DefaultValue

APQP_APQPObject.FirstGateWeight — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/626/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "FirstGate")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F b143febd-3260-4edc-ad75-8f0be3907736 DefaultValue

APQP_APQPObject.FourGateWeight — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/618/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "FourthGate")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F d726afa9-521d-4a3c-8108-c81a0d96315f DefaultValue

APQP_APQPObject.ProcessOwner — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/266/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CreatedBy</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F d726afa9-521d-4a3c-8108-c81a0d96315f FilterExpression

APQP_APQPObject.ProcessOwner — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/266/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"BelongsToGroup","For":"ID","Negate":false,"GroupId":"bfbec27b-d0b6-47b2-b6d4-9241abf697c7"}]}
```

## F 4202c8e9-e42b-473e-808e-27440d24e83f DefaultValue

APQP_APQPObject.SecGateWeight — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/616/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "SecondGate")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 89e8e416-cf54-4606-bc05-619109ba326a DefaultValue

APQP_APQPObject.Settings — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/484/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfAPQP_SettingsObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>7b040ae4-8679-43df-ad06-3ad53a684674</Id></ValueGenerator>
```

## F 602a6e63-3feb-4fd7-b054-cbbc06c5f986 DefaultValue

APQP_APQPObject.ThirdGateWeight — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/475/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "ThirdGate")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 998bd167-41b8-46bf-bc08-b1baa5ec3a50 Calculation

APQP_PPAPAbstractObject.DisplayField — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/579/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE("PPAP ",Product," - ",Product.Name)</Expression></CalculationBase>
```

## F 965d6b14-7820-4af9-8f87-460e11923049 DefaultValue

APQP_PPAPAbstractObject.DraftWeight — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/738/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "Draft")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F d4f0340b-fe8b-43a3-a9be-054df25737db DefaultValue

APQP_PPAPAbstractObject.IApprovalWeight — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/892/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "InterimApproval")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 2d7a337b-05a7-4fb7-881c-adafe86bb472 DefaultValue

APQP_PPAPAbstractObject.InProgresWeight — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/872/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "InProgress")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 63ea8832-1c8d-4ae4-acbf-4db8ffc3a407 DefaultValue

APQP_PPAPAbstractObject.InReviewWeight — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/531/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("ProjectFwk_PhaseObject", "WeightAssigned", "DateCreated Ascending", "ProjectTypeId", "=", ProjectTypeId,"WFStageName", "=", "InReview")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 1235abd4-f363-46d1-a1b6-314aefe130b9 FilterExpression

APQP_PPAPAbstractObject.ProjectOwner — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/201/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"BelongsToGroup","For":"ID","Negate":false,"GroupId":"bfbec27b-d0b6-47b2-b6d4-9241abf697c7"}]}
```

## F 9ee028e1-dc09-4781-86c2-1a103c89dc6c DefaultValue

APQP_PPAPAbstractObject.Settings — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/320/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfAPQP_SettingsObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>7b040ae4-8679-43df-ad06-3ad53a684674</Id></ValueGenerator>
```

## F 928f4637-0e14-46dc-89bc-90cb6e3fadd2 DefaultValue

APQP_PPAPAbstractObject.SubmissionDate — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/249/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Task.Workflow.DueDate</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F d11343ae-5ac5-46b9-a303-840b604f9056 DefaultValue

APQP_SettingsObject.APQPProjectType — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/319/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfProjectFwk_ProjectTypeObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>f467e500-49c1-4877-8b65-9a20492687f9</Id></ValueGenerator>
```

## F 4375e0a2-0a69-4823-be2d-091f4cc447c6 DefaultValue

APQP_SettingsObject.PPAPHidTskDraft — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/524/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F fa7c5344-880e-4d5b-a3b3-efc4040f410c DefaultValue

APQP_SettingsObject.PPAPProjectType — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/407/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfProjectFwk_ProjectTypeObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>a6aa71e1-4202-4d7f-b583-caddd4c87188</Id></ValueGenerator>
```

## F 881f7808-9a99-4521-970a-6e42587fb9ef DefaultValue

APQP_SettingsObject.SkipGate2 — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/522/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F 071bf3da-d8a0-4b50-b638-81b8c2f5d484 Calculation

CLF_ChecklistAnswerObject.ApplicQuestions — Checklist Framework(v1.0.0).ipack `/GraphData/Items/171/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(COUNT(QuestionAnswers)=0, COUNT(PubChecklist.PubQuestions), COUNT(QuestionAnswers)) + SUM(SubChecklists.ApplicQuestions) </Expression></CalculationBase>
```

## F 3c17b069-7b8e-4bd7-9a7c-923143d5e919 Calculation

CLF_ChecklistAnswerObject.Depth — Checklist Framework(v1.0.0).ipack `/GraphData/Items/174/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(MasterChecklist&lt;&gt;NULL, MasterChecklist.Depth+1, 1)</Expression></CalculationBase>
```

## F 9eb5b820-84e7-459d-a736-062bf1637ac3 Calculation

CLF_ChecklistAnswerObject.FilledQuestions — Checklist Framework(v1.0.0).ipack `/GraphData/Items/175/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(QuestionAnswers.IsFilled) + SUM(SubChecklists.FilledQuestions)</Expression></CalculationBase>
```

## F 79aef9dd-9a4f-421e-915f-d7c30cef905c Calculation

CLF_ChecklistAnswerObject.MaxPoints — Checklist Framework(v1.0.0).ipack `/GraphData/Items/166/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(QuestionAnswers.MaxPoints) + SUM(SubChecklists.MaxPoints)</Expression></CalculationBase>
```

## F 4c9646f8-b586-45c0-9107-b66971cc7223 Calculation

CLF_ChecklistAnswerObject.NbFindings — Checklist Framework(v1.0.0).ipack `/GraphData/Items/158/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Findings) + SUM(SubChecklists.NbFindings)</Expression></CalculationBase>
```

## F 0655be39-410d-435c-a680-51b843ab6c52 Calculation

CLF_ChecklistAnswerObject.NbSubChecklists — Checklist Framework(v1.0.0).ipack `/GraphData/Items/155/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(SubChecklists)</Expression></CalculationBase>
```

## F 071a14bc-1d47-4277-a5c5-16b1ea4c487c Calculation

CLF_ChecklistAnswerObject.Path — Checklist Framework(v1.0.0).ipack `/GraphData/Items/170/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(MasterChecklist&lt;&gt;NULL, CONCATENATE(MasterChecklist.Path, ".", RecordNo), RecordNo)</Expression></CalculationBase>
```

## F 56f4f2db-044f-4833-aad6-0d0f0ee84d85 Calculation

CLF_ChecklistAnswerObject.PointsAwarded — Checklist Framework(v1.0.0).ipack `/GraphData/Items/165/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(QuestionAnswers.PointsAwarded) + SUM(SubChecklists.PointsAwarded)</Expression></CalculationBase>
```

## F 7ac79076-0202-4097-bac7-fad6c540e65b Calculation

CLF_ChecklistAnswerObject.Progress — Checklist Framework(v1.0.0).ipack `/GraphData/Items/161/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IFERROR(FilledQuestions / ApplicQuestions, 0)</Expression></CalculationBase>
```

## F b38a67c1-41b7-4534-b914-d7b6d1cbff55 Calculation

CLF_ChecklistAnswerObject.Score — Checklist Framework(v1.0.0).ipack `/GraphData/Items/173/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IFERROR(PointsAwarded/ MaxPoints, 0)</Expression></CalculationBase>
```

## F c209764b-a12f-4a31-aa65-91933fb938ea Calculation

CLF_ChecklistObject.NbQuestions — Checklist Framework(v1.0.0).ipack `/GraphData/Items/236/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Questions)</Expression></CalculationBase>
```

## F ad0459de-0804-4ff0-b296-da15d39e21a6 FilterExpression

CLF_ChecklistObject.Questions — Checklist Framework(v1.0.0).ipack `/GraphData/Items/237/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"ChecklistType","ID":null},"For":"ChecklistType","Negate":false}]}
```

## F 974e3544-2625-479e-8321-f0722992e415 DefaultValue

CLF_ChecklistObject.Reference — Checklist Framework(v1.0.0).ipack `/GraphData/Items/52/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE(ChecklistType.Reference, ".",  ChecklistType.NbChecklists+1)</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 645a536e-aa60-4c95-88bb-e43f8bf7812c Calculation

CLF_ChecklistTypeObject.MaxOrder — Checklist Framework(v1.0.0).ipack `/GraphData/Items/82/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>MAX(Questions.Order)</Expression></CalculationBase>
```

## F eac1371d-cd62-41a0-9cb4-d9b8df09b5be Calculation

CLF_ChecklistTypeObject.NbChecklists — Checklist Framework(v1.0.0).ipack `/GraphData/Items/151/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Checklists)</Expression></CalculationBase>
```

## F 7ef2fc23-54af-4dd1-aae1-4c945cd5cfc1 Calculation

CLF_ChecklistTypeObject.NbQuestions — Checklist Framework(v1.0.0).ipack `/GraphData/Items/209/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Questions)</Expression></CalculationBase>
```

## F 70d0d1df-7d5f-45ae-b01f-adf174f1cb94 DefaultValue

CLF_ChecklistTypeObject.QueAnswerObject — Checklist Framework(v1.0.0).ipack `/GraphData/Items/292/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfstring" xmlns="http://schemas.intelex.net"><Value>CLF_QuestionAnswerObject</Value></ValueGenerator>
```

## F 91e0613b-66fb-4cce-8158-de81572a4fa6 Calculation

CLF_ChoiceListObject.MaxPoints — Checklist Framework(v1.0.0).ipack `/GraphData/Items/16/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>MAX(Choices.Value)</Expression></CalculationBase>
```

## F afabde3b-355b-4536-86f0-797f937da850 Calculation

CLF_ChoiceListObject.NbChoices — Checklist Framework(v1.0.0).ipack `/GraphData/Items/20/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Choices)</Expression></CalculationBase>
```

## F 4710a81a-c167-40c9-a6d9-66f4d7479342 DefaultValue

CLF_ChoiceObject.Reference — Checklist Framework(v1.0.0).ipack `/GraphData/Items/114/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE(ChoiceList.Reference, ".",  ChoiceList.NbChoices+1)</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 51155bb6-f0cc-41eb-a602-3b4d70980405 FilterExpression

CLF_FindingObject.ActionPlans — Checklist Framework(v1.0.0).ipack `/GraphData/Items/6/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"ChecklistAnswer","ID":null},"For":"ChecklistAnswer","Negate":false}]}
```

## F 18423386-cbd4-412e-9e90-710173f24669 DefaultValue

CLF_FindingObject.DueIn — Checklist Framework(v1.0.0).ipack `/GraphData/Items/218/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfCLF_FindingDDObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>eb1f2003-c086-4224-aca9-a26c842f6442</Id></ValueGenerator>
```

## F de676db5-1ec1-48bf-b482-62bc76e930b1 DefaultValue

CLF_FindingObject.FindingStatus — Checklist Framework(v1.0.0).ipack `/GraphData/Items/81/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfCLF_FindingStatusObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>2ea0b4d2-ce73-4bd4-a837-5030d44e6e45</Id></ValueGenerator>
```

## F e4ec6661-51b4-4bcc-9a3d-ff1aff4f2c1d Calculation

CLF_FindingObject.HasActionPlans — Checklist Framework(v1.0.0).ipack `/GraphData/Items/120/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(NbAPs&gt;0, TRUE, FALSE)</Expression></CalculationBase>
```

## F db85d606-b22d-4bfa-a34c-a6dea9e0f9ff Calculation

CLF_FindingObject.IsOpen — Checklist Framework(v1.0.0).ipack `/GraphData/Items/270/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(AND(FindingStatus.Code&lt;&gt;"Closed", FindingStatus.Code&lt;&gt;"Closed without Action"), 1, 0)</Expression></CalculationBase>
```

## F e8295e71-37e4-4a16-9475-70954d674bab DefaultValue

CLF_FindingObject.ManualClose — Checklist Framework(v1.0.0).ipack `/GraphData/Items/61/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F 990b34ac-0ccd-4636-a58f-b6b723cce8a8 Calculation

CLF_FindingObject.NbAPs — Checklist Framework(v1.0.0).ipack `/GraphData/Items/35/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(ActionPlans)</Expression></CalculationBase>
```

## F 8cdbcea5-e567-471c-a514-bc6f541a7b16 Calculation

CLF_FindingObject.NbOpAPs — Checklist Framework(v1.0.0).ipack `/GraphData/Items/4/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(FILTER(ActionPlans.IsCompleted, "&lt;&gt;", TRUE)) </Expression></CalculationBase>
```

## F f9df3607-ae7c-41f3-b5da-bc9d53598f4e DefaultValue

CLF_FindingObject.PersResponsible — Checklist Framework(v1.0.0).ipack `/GraphData/Items/275/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>ChecklistAnswer.DefPersRespFind</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F a69b116f-60c9-4ce2-80e5-9569d93baa68 FilterExpression

CLF_FindingObject.QuestionAnswers — Checklist Framework(v1.0.0).ipack `/GraphData/Items/273/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"ChecklistAnswer","ID":null},"For":"ChecklistAnswer","Negate":false}]}
```

## F 0e1e53f2-fc07-4118-a04f-e73435763482 DefaultValue

CLF_FindingStatusObject.Name — Checklist Framework(v1.0.0).ipack `/GraphData/Items/220/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Code</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 0ff76b4f-ebf5-422c-8cb4-47e7e50b95dc DefaultValue

CLF_InsActionPlanObject.ActionOwner — Checklist Framework(v1.0.0).ipack `/GraphData/Items/99/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>ChecklistAnswer.DefPersRespFind</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 97215722-33de-4fb1-a078-e008c9657e7b FilterExpression

CLF_InsActionPlanObject.Findings — Checklist Framework(v1.0.0).ipack `/GraphData/Items/100/FieldData/FilterExpression`

```xml
{"__type":"AdvancedExpression","Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"ChecklistAnswer","ID":null},"For":"ChecklistAnswer","Negate":false},{"__type":"Common","Type":1,"Operand":{"__type":"Value","Parse":false,"Text":"Open","ID":null},"For":"FindingStatus","Negate":false},{"__type":"Common","Type":1,"Operand":{"__type":"Value","Parse":false,"Text":"In Progress","ID":null},"For":"FindingStatus","Negate":false}],"AdvancedFilterFormula":"A and (B or C)","AdvancedFilterFormulaEnabled":true}
```

## F d39de5aa-36bf-4f11-9ffa-6d75f6952239 Calculation

CLF_PubChecklistObject.ChecklistType — Checklist Framework(v1.0.0).ipack `/GraphData/Items/197/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>Checklist.ChecklistType</Expression></CalculationBase>
```

## F 3f34e5f3-b2a0-46ed-b808-26a7f0817273 Calculation

CLF_PubQuestObject.AnswerTypeCode — Checklist Framework(v1.0.0).ipack `/GraphData/Items/92/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>AnswerType.Value</Expression></CalculationBase>
```

## F 0500b72d-388e-4883-9998-e75386a93c8d Calculation

CLF_PubQuestObject.MaxPoints — Checklist Framework(v1.0.0).ipack `/GraphData/Items/72/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>ChoiceList.MaxPoints</Expression></CalculationBase>
```

## F ae6d1a33-3e2a-46dc-8786-84b48cf2c664 DefaultValue

CLF_QuestAbstractObject.AnswerType — Checklist Framework(v1.0.0).ipack `/GraphData/Items/190/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfCLF_AnswerTypeObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>771916e1-5251-4658-add8-3091457e7295</Id></ValueGenerator>
```

## F 6ca75a85-7f52-42de-bba7-618af4e7f28a Calculation

CLF_QuestionAnswerObject.AnswerText — Checklist Framework(v1.0.0).ipack `/GraphData/Items/86/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(PubQuestion.AnswerTypeCode="Choice", 
	Choice.Name
,
	IF(PubQuestion.AnswerTypeCode="Date",
		CONCATENATE(Date, "")
	,
		IF(PubQuestion.AnswerTypeCode="Float", 
			CONCATENATE(Float, "")
		,
			IF(PubQuestion.AnswerTypeCode="Text", 
				Text
			,
				IF(PubQuestion.AnswerTypeCode="Checkbox", 
					CONCATENATE(Checkbox, "")
				,
					""
				)
			)
		)
	)
)</Expression></CalculationBase>
```

## F 00b884fc-b74e-4f87-91cd-f0fcdea9fd59 FilterExpression

CLF_QuestionAnswerObject.Choice — Checklist Framework(v1.0.0).ipack `/GraphData/Items/93/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Reference","For":"ID","Negate":false,"ExpressionText":"PubQuestion.ChoiceList.Choices","BaseType":"CLF_QuestionAnswerObject"}]}
```

## F 028137c1-e158-40b5-8df6-1d00430fe251 FilterExpression

CLF_QuestionAnswerObject.Choices — Checklist Framework(v1.0.0).ipack `/GraphData/Items/182/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Reference","For":"ID","Negate":false,"ExpressionText":"PubQuestion.ChoiceList.Choices","BaseType":"CLF_QuestionAnswerObject"}]}
```

## F 8fea66f7-a0c8-4ca0-9e94-5ce6bc2cc591 FilterExpression

CLF_QuestionAnswerObject.Findings — Checklist Framework(v1.0.0).ipack `/GraphData/Items/260/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"ChecklistAnswer","ID":null},"For":"ChecklistAnswer","Negate":false}]}
```

## F 4431b722-2378-41fe-98d2-3a3b9927540a DefaultValue

CLF_QuestionAnswerObject.IsApplicable — Checklist Framework(v1.0.0).ipack `/GraphData/Items/50/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOflong5F2dSckg" xmlns="http://schemas.intelex.net"><Value>1</Value></ValueGenerator>
```

## F 0b2e82a0-a21f-444c-9833-03201f261d45 Calculation

CLF_QuestionAnswerObject.IsFilled — Checklist Framework(v1.0.0).ipack `/GraphData/Items/211/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(OR(
	AND(PubQuestion.AnswerTypeCode="Choice", Choice&lt;&gt;NULL), 
	AND(PubQuestion.AnswerTypeCode="Choices", COUNT(Choices)&gt;0), 
	AND(PubQuestion.AnswerTypeCode="Date", Date&lt;&gt;NULL), 
	AND(PubQuestion.AnswerTypeCode="Float", Float&lt;&gt;NULL), 
	AND(PubQuestion.AnswerTypeCode="Text", Text&lt;&gt;NULL), 
	AND(PubQuestion.AnswerTypeCode="Checkbox", Checkbox&lt;&gt;NULL)
	),1,0)</Expression></CalculationBase>
```

## F 7a552bca-cb1a-4bd0-9610-2c6103fb3978 Calculation

CLF_QuestionAnswerObject.MaxPoints — Checklist Framework(v1.0.0).ipack `/GraphData/Items/144/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(Choice.Value=NULL, NULL,  PubQuestion.MaxPoints)</Expression></CalculationBase>
```

## F 3339c315-5a31-4182-88fb-8ccdc11129b0 Calculation

CLF_QuestionAnswerObject.NbFindings — Checklist Framework(v1.0.0).ipack `/GraphData/Items/259/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Findings)</Expression></CalculationBase>
```

## F 13f33185-7b90-4a4c-a6ae-23231f4d20ba Calculation

CLF_QuestionAnswerObject.PointsAwarded — Checklist Framework(v1.0.0).ipack `/GraphData/Items/213/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(PubQuestion.AnswerTypeCode="Choice", Choice.Value, IF(PubQuestion.AnswerTypeCode="Choices", MAX(Choices.Value), NULL))</Expression></CalculationBase>
```

## F cbf01deb-2a66-4943-b517-0d9852655cb0 FilterExpression

CLF_QuestionAnswerObject.PubQuestion — Checklist Framework(v1.0.0).ipack `/GraphData/Items/90/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Reference","For":"ID","Negate":true,"ExpressionText":"ChecklistAnswer.QuestionAnswers.PubQuestion","BaseType":"CLF_QuestionAnswerObject"}]}
```

## F fadf3603-b0a8-4375-aa03-c69c58375923 FilterExpression

CLF_QuestObject.Checklists — Checklist Framework(v1.0.0).ipack `/GraphData/Items/238/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"ChecklistType","ID":null},"For":"ChecklistType","Negate":false}]}
```

## F e3a6ab98-6fc6-431f-af48-9d97a19e32cb Calculation

CLF_QuestObject.LastPublish — Checklist Framework(v1.0.0).ipack `/GraphData/Items/239/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>MAX(PubQuestions.DateCreated)</Expression></CalculationBase>
```

## F 2cfbe2bb-b3ca-432e-8690-f67f6d8d42c3 Calculation

CLF_QuestObject.NbChecklists — Checklist Framework(v1.0.0).ipack `/GraphData/Items/249/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Checklists)</Expression></CalculationBase>
```

## F c5277595-969b-4857-98ae-ff9f1df39590 DefaultValue

CLF_QuestObject.QuestionRef — Checklist Framework(v1.0.0).ipack `/GraphData/Items/245/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE(ChecklistType.Reference, ".",  ChecklistType.NbQuestions+1)</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F d19523f4-839a-424c-831a-866fdda10855 DefaultValue

CLF_QuestObject.UseReferences — Checklist Framework(v1.0.0).ipack `/GraphData/Items/188/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F e4f63cb1-16ca-4baf-8736-b6e30b5639f2 Calculation

ComplyFramework_CARAbstractObject.DisplayField — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/601/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE("CAR No. ", RecordNo)</Expression></CalculationBase>
```

## F 8453847c-fcf7-47b4-9836-1f7e2075ebda Calculation

EventFwk_LessonLearnedObject.DisplayField — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/13/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE("LL"," - ",ActionNo)</Expression></CalculationBase>
```

## F 9c5c7f39-367b-4064-a39f-080fc3b034a8 Calculation

EventFwk_LessonLearnedObject.HelpNotify — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/400/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(RecipientsRol ) </Expression></CalculationBase>
```

## F bfffeabb-83d5-46fe-a632-817282181185 FilterExpression

EventFwk_LessonLearnedObject.Responsible — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/67/FieldData/FilterExpression`

```xml
{"__type":"AdvancedExpression","Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Value","Parse":false,"Text":"6afb3ac6-96db-4072-9293-4d02699d1264","ID":null},"For":"SystemType","Negate":false},{"__type":"Common","Type":1,"Operand":{"__type":"Value","Parse":false,"Text":"1b44b982-2248-41c5-971e-dfa68eddb196","ID":null},"For":"SystemType","Negate":false}],"AdvancedFilterFormula":"A OR B","AdvancedFilterFormulaEnabled":true}
```

## F 3da8d270-4d02-4832-bd06-338809a6d110 DefaultValue

EventFwk_LessonLearnedObject.SSafetyBulletin — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/192/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F 84565854-3e9a-4898-aad8-0fc944032bc4 DefaultValue

FragApplication_AbCorrectivActiObject.IsCompleted — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/136/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F 31c86647-e0d9-4aab-a3d9-cab0f01ad988 Calculation

ProductMgmt_ItemRevisionObject.Code — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/112/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE(Item.PartNumber, " v.",  RevisionNumber)</Expression></CalculationBase>
```

## F 9adc18a7-569a-4b2c-8776-74c96bfa2ba9 DefaultValue

ProductMgmt_ItemRevisionObject.Name — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/493/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Item.Name</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 6db9e762-30a1-4b8c-b920-9d29fe8e2730 DefaultValue

ProductMgmt_ItemRevisionObject.RevisionNumber — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/113/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>IF(Item.CurrentRevision=NULL, 0, Item.CurrentRevision.RevisionNumber+1)</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F bc245361-f360-4f6f-a38d-1d69922e21fc Calculation

ProjectFwk_AdHocTaskObject.StartCondition — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/185/GraphData/Items/3/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(DueDate&lt;&gt;NULL,TRUE,FALSE)</Expression></CalculationBase>
```

## F deaae573-7d74-4ac4-a4a1-a55fc0754f7b FilterExpression

ProjectFwk_ChecklistDefObject.Checklist — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/634/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"ChecklistType","ID":null},"For":"ChecklistType","Negate":false}]}
```

## F 791d2816-dd37-4d05-8d8a-7a095a0366a6 Calculation

ProjectFwk_ChecklistObject.StartCondition — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/237/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(DueDate&lt;&gt;NULL,TRUE,FALSE)</Expression></CalculationBase>
```

## F 6d49ba21-e617-4eb7-9bf0-dd1327e663f1 FilterExpression

ProjectFwk_PFWKProjectTaskObject.Phase — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/213/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Reference","For":"ID","Negate":false,"ExpressionText":"ProjectTemplate.ProjectType.Phases","BaseType":"ProjectFwk_PFWKProjectTaskObject"},{"__type":"Common","Type":1,"Operand":{"__type":"Value","Parse":false,"Text":"TRUE","ID":null},"For":"Active","Negate":false}]}
```

## F 50a40716-6b0f-440d-ba9a-f029a8ba09ef FilterExpression

ProjectFwk_PFWKProjectTaskObject.ProjTaskDefObj — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/291/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Value","Parse":false,"Text":"TRUE","ID":null},"For":"Active","Negate":false}]}
```

## F b54ea28c-0990-440a-9329-418e988f10b5 DefaultValue

ProjectFwk_PFWKTemplateObject.Active — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/748/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F 2c3fa19f-e2f4-44b1-bafb-0367bfb86867 DefaultValue

ProjectFwk_PhaseObject.Active — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/421/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

## F 9a04e858-5931-4d74-9bb5-fa4f8b4a3a1c DefaultValue

ProjectFwk_PhaseObject.Order — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/224/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>MAX(ProjectType.Phases.Order)+1</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 3cb34495-f82c-4d59-a0fe-28157fbed0f2 Calculation

ProjectFwk_ProjectAbstractObject.NbofProTasks — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/448/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(ProjectType.ProjeSystemName = "APQP_APQPObject",COUNT(ProjectTasks), COUNT(FILTER(ProjectTasks.PhaseNamehelper, "=", Phase.Name)) )</Expression></CalculationBase>
```

## F fa18162f-8520-4601-91f7-9735b1a75da6 Calculation

ProjectFwk_ProjectAbstractObject.NbOpenProTasks — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/447/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(FILTER(ProjectTasks.IsCompleted, "=", FALSE))</Expression></CalculationBase>
```

## F d2cdabfd-5b74-4e87-b700-abd3546f53ee FilterExpression

ProjectFwk_ProjectAbstractObject.Phase — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/670/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"ProjectType","ID":null},"For":"ProjectType","Negate":false}]}
```

## F 4e811d57-dafb-43cd-adf5-66b40c4dc58b Calculation

ProjectFwk_ProjectAbstractObject.ProgProTasks — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/446/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IFERROR((NbofProTasks-NbOpenProTasks)/NbofProTasks, 0)</Expression></CalculationBase>
```

## F fd378739-8a62-45ed-899e-a21562a317d9 DefaultValue

ProjectFwk_ProjectAbstractObject.Progress — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/679/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfdecimal5F2dSckg" xmlns="http://schemas.intelex.net"><Value>0</Value></ValueGenerator>
```

## F 586066b4-9b82-43b3-ae32-eb80bc8ebf68 FilterExpression

ProjectFwk_ProjectAbstractObject.ProjectTemplate — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/779/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"ProjectType","ID":null},"For":"ProjectType","Negate":false},{"__type":"Common","Type":1,"Operand":{"__type":"Value","Parse":false,"Text":"TRUE","ID":null},"For":"Active","Negate":false}]}
```

## F 146f9fc3-c225-482f-9671-6d12ccb8eefb FilterExpression

ProjectFwk_ProjectAbstractObject.Supplier — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/866/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Reference","For":"ID","Negate":false,"ExpressionText":"Product.SuppItemRevs.CompPP","BaseType":"ProjectFwk_ProjectAbstractObject"}]}
```

## F 70b37be2-5cc8-4e16-addf-48fdd45d5ba0 DefaultValue

ProjectFwk_ProjectTaskDefObject.Active — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/734/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

## F f5238818-ba54-4b30-ac33-52891bad0149 Calculation

ProjectFwk_ProjectTaskDefObject.DisplayValue — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/361/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE(RecordNo, " - ", IF(LEN(Description)&gt;50, CONCATENATE(LEFT(Description, 47), "..."), Description))</Expression></CalculationBase>
```

## F 47bedb3a-d72f-4ff9-9af0-c81d00957d4c DefaultValue

ProjectFwk_ProjectTaskObject.Description — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/698/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>ProjectTaskMap.ProjTaskDefObj.Description</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 9b1fbd04-1f0b-4069-a29b-c2a40dc70070 Calculation

ProjectFwk_ProjectTaskObject.HelpMemChanged — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/582/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>FALSE</Expression></CalculationBase>
```

## F 3fda830d-aff9-4d22-a61a-4e8b89ee3a43 DefaultValue

ProjectFwk_ProjectTaskObject.Order — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/990/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>ProjectTaskMap.Order</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 8e823fb2-07c3-4e02-bdc1-d77d470e214f FilterExpression

ProjectFwk_ProjectTaskObject.PersResponsible — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/185/GraphData/Items/13/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"ProjectRole","ID":null},"For":"ProjectRole","Negate":false},{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"Project","ID":null},"For":"Project","Negate":false},{"__type":"IsNull","For":"Member","Negate":true}]}
```

## F 1304e2a8-c0c4-4e4a-91a2-8f3bdd29aa3d DefaultValue

ProjectFwk_ProjectTaskObject.Phase — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/367/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>ProjectTaskMap.Phase</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 1304e2a8-c0c4-4e4a-91a2-8f3bdd29aa3d FilterExpression

ProjectFwk_ProjectTaskObject.Phase — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/367/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Reference","For":"ID","Negate":false,"ExpressionText":"Project.ProjectType.Phases","BaseType":"ProjectFwk_ProjectTaskObject"}]}
```

## F 2950fb4e-5e79-4720-a7fd-0718eb766cd4 Calculation

ProjectFwk_ProjectTaskObject.PhaseNamehelper — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/759/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>Phase.Name</Expression></CalculationBase>
```

## F 96f0c7da-ace1-49ba-b881-f79f900ef571 DefaultValue

ProjectFwk_ProjectTaskObject.ProjectRole — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/534/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>ProjectTaskMap.ProjTaskDefObj.ProjectRole</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F a267768c-e643-4892-b226-c1aa92abcde2 Calculation

ProjectFwk_ProjectTypeObject.TotPhaseWeight — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/790/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(Phases.WeightAssigned)</Expression></CalculationBase>
```

## F e4a91b64-b576-486a-ae33-2fcb48ddb022 Calculation

ProjectFwk_ProjRoleTeMemObject.DisplayValue — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/95/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE(Member.FullName, " (", ProjectRole.Name,")") </Expression></CalculationBase>
```

## F 4ed9437a-433d-46fc-b3a5-1113d9b91471 FilterExpression

ProjectFwk_ProjRoleTeMemObject.Member — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/101/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"BelongsToGroup","For":"ID","Negate":false,"GroupId":"55cd72fd-bc23-4488-83cb-abe55f84e5b8"}]}
```

## F 82c9b33c-d408-4012-9d04-5050375ba0d8 FilterExpression

ProjectFwk_TaskDefObject.PPAPTemplate — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/470/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Value","Parse":false,"Text":"APQP_PPAPAbstractObject","ID":null},"For":"ProjectType.ProjeSystemName","Negate":false},{"__type":"Common","Type":1,"Operand":{"__type":"Value","Parse":false,"Text":"True","ID":null},"For":"Active","Negate":false}]}
```

## F 6f8de12f-cc79-4203-bc6d-9442978def69 Calculation

ProjectFwk_TaskObject.HelperTaskId — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/297/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IFNULL(RelatedPPAP.Id, NULL)</Expression></CalculationBase>
```

## F bfe43cf5-a333-43e5-bc9b-92a8e456d1cb Calculation

ProjectFwk_TaskObject.HelpeTaskExists — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/305/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>HelperTaskId&lt;&gt;NULL</Expression></CalculationBase>
```

## F 32973f22-f583-4ed9-b735-4b2c340292f4 Calculation

ProjectFwk_TaskObject.StartCondition — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/309/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(DueDate&lt;&gt;NULL,TRUE,FALSE)</Expression></CalculationBase>
```

## F 85af8aef-ed27-425f-9778-0a9384664d2f DefaultValue

ProjectFwk_TaskObject.TypeOfRecord — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/306/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Def.TypeofRecord</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 6b5ba9c8-4a6a-43a6-9a67-601613bfa137 Calculation

Unresolved.Address — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/442/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE("Street No. ", Street, IF(City&lt;&gt;NULL,CONCATENATE(", ", City),""),IF(Geography&lt;&gt;NULL,CONCATENATE(", ", Geography),""),IF(Geography.ParentGeography&lt;&gt;NULL,CONCATENATE(", ", Geography.ParentGeography),""), IF(PostalCode&lt;&gt;NULL,CONCATENATE(". Postal Code/Zip Code: ", PostalCode),""))</Expression></CalculationBase>
```

## F 46bbda27-ca85-44b3-8721-021cc7568704 DefaultValue

Unresolved.CancelAppHelp — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/0/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F 847457b8-7fdc-4f33-876a-7640e03576f7 DefaultValue

Unresolved.CancelSIAppHelp — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/977/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F f45f4432-5ab0-44be-9de9-6a8a66696248 DefaultValue

Unresolved.ContainmentHelp — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/496/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("FragApplication_CorrectivePreveObject", "Id", "DateCreated Ascending", "Value", "=", "Containment")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F b30b0734-80ec-4ca8-a98b-2babc9c94c0d DefaultValue

Unresolved.CorrectiveHelpe — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/75/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("FragApplication_CorrectivePreveObject", "Id", "DateCreated Ascending", "Value", "=", "Corrective")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F baab61ce-d437-400e-8f15-1c257089af10 Calculation

Unresolved.CountSupItmHelp — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/799/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(FILTER(SuppItemRevs.DateApproved,"&lt;&gt;",NULL))</Expression></CalculationBase>
```

## F f5aa9fbe-8063-4773-b392-1cb07796adc3 DefaultValue

Unresolved.CreateAppHelp — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/842/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F b60e8985-feaf-4bb5-b601-11fda4bec80b DefaultValue

Unresolved.CreateBy — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/827/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CURRENTUSER</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 7c237fef-4bbb-4e46-8ac3-728478e1946c DefaultValue

Unresolved.CreateSRHelper — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/545/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F 1e0d8863-90af-4aed-9600-ae886c5ccaa9 Calculation

Unresolved.Criticality — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/568/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>PRODUCT(Severity.value,  Occurrence.Value)</Expression></CalculationBase>
```

## F 3c216669-cb9e-48d0-9546-948264a04583 DefaultValue

Unresolved.DateCreate — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/649/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="TodayValueGenerator" xmlns="http://schemas.intelex.net" />
```

## F d63b0bcc-b27a-453d-904a-49f74f67d213 DefaultValue

Unresolved.Description — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/583/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Item.CurrentRevision.Description</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 6d4cfda9-613c-4b38-8e6f-244319fd74b1 DefaultValue

Unresolved.HelpActPlanProg — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/730/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfstring" xmlns="http://schemas.intelex.net"><Value>N/A</Value></ValueGenerator>
```

## F 37ee4174-358f-465d-bcdd-28399969f8ee DefaultValue

Unresolved.HelpRevTypeObs — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/926/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfProductMgmt_RevisionTypeObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>fbdd55ce-7b79-4327-ba89-96b7cb65f093</Id></ValueGenerator>
```

## F 37ee4174-358f-465d-bcdd-28399969f8ee FilterExpression

Unresolved.HelpRevTypeObs — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/926/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Value","Parse":false,"Text":"Reactivate Item","ID":null},"For":"Name","Negate":true}]}
```

## F 1e8291b8-ab53-4d1a-a643-c31fca14f1a1 DefaultValue

Unresolved.HelpRevTypeReac — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/643/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfProductMgmt_RevisionTypeObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>1495e186-1aa4-45ba-aee8-f4d4fa42048e</Id></ValueGenerator>
```

## F 1e8291b8-ab53-4d1a-a643-c31fca14f1a1 FilterExpression

Unresolved.HelpRevTypeReac — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/643/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Value","Parse":false,"Text":"Reactivate Item","ID":null},"For":"Name","Negate":false}]}
```

## F 748d7116-54c6-4025-82bf-4f7636cc3d99 DefaultValue

Unresolved.IsCurrent — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/956/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F c4e07a94-d6c2-419e-b1f4-e3679c1142ec DefaultValue

Unresolved.ItemSource — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/647/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>IF(Item.CurrentRevision&lt;&gt;NULL, Item.CurrentRevision.ItemSource.Value, "Manufactured")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 5f78dd5e-dd23-41ef-bec6-5e97d8efbd26 DefaultValue

Unresolved.MeasurementType — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/853/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Item.CurrentRevision.MeasurementType</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F a383b681-69d8-4da6-93ce-0d5b13d23bca DefaultValue

Unresolved.NewRevHelper — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/650/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F cf629945-fce4-4ca1-8bec-23c7d5365c10 Calculation

Unresolved.NoOfEvaluations — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/943/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(SupEvaluations)</Expression></CalculationBase>
```

## F 163088d1-c73e-40ac-a25b-36e28f324cbe DefaultValue

Unresolved.Owner — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/260/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Item.CurrentRevision.Owner</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 163088d1-c73e-40ac-a25b-36e28f324cbe FilterExpression

Unresolved.Owner — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/260/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"BelongsToGroup","For":"ID","Negate":false,"GroupId":"6a60ed95-6592-4fc2-9a2d-6c3ad7269206"}]}
```

## F 08cac1c6-e54d-4c66-85fa-9ffc35e69096 DefaultValue

Unresolved.PreventiveHelpe — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/211/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>FETCHVALUE("FragApplication_CorrectivePreveObject", "Id", "DateCreated Ascending", "Value", "=", "Preventive")</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F b9d58985-2f6e-4a8f-84c1-4429dce219b2 DefaultValue

Unresolved.Price — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/584/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Item.CurrentRevision.Price</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F eb71d959-6040-4e04-8d45-0354231912d3 Calculation

Unresolved.RevisionType — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/564/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(HelpRevTypeObs.Name&lt;&gt;NULL,  HelpRevTypeObs.Name,  HelpRevTypeReac.Name)</Expression></CalculationBase>
```

## F 068c78ba-10fb-4c49-90f8-72d45d241e6c Calculation

Unresolved.RollUpPrice — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/255/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(Relations&lt;&gt;NULL,SUM(Relations.Price),0)</Expression></CalculationBase>
```

## F f9344f07-30a9-4482-969d-75360fa6acc7 Calculation

Unresolved.RPN — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/739/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>PRODUCT(Severity.value,Occurrence.Value,Detection.Value)</Expression></CalculationBase>
```

## F ebb67da5-36b8-4b08-aa14-649c4f05544c DefaultValue

Unresolved.SamplingScheme — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/750/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Item.CurrentRevision.SamplingScheme.Name</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F b5a4b716-0c3a-4b8e-8d9d-ba8b937daa00 DefaultValue

Unresolved.Settings — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/989/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfCAR_SettingsObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>acd226dc-9740-4030-aeba-7318248f5dc3</Id></ValueGenerator>
```

## F 7d59b437-d53f-4ebd-b602-c050291c3798 FilterExpression

Unresolved.SupContacts — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/599/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"ID","ID":null},"For":"Suppliers","Negate":false}]}
```

## F efe0a44e-d45f-4530-8cc3-9c3ab954890c DefaultValue

Unresolved.SupplierStatus — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/969/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfSupplierMgmt_SupplierStatusObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>a6c02bbf-5a31-48a9-aede-656d8e950f66</Id></ValueGenerator>
```

## F c414f217-6f4c-4a03-ac23-263910d984b4 Calculation

Unresolved.TotalCoPQ — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/749/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(Cost.ConvertedCost)</Expression></CalculationBase>
```

## F 44dc1d5b-fb2d-4018-97e3-256485e740b1 Calculation

Unresolved.TotalPrice — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/500/FieldData/Calculation`

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(Price,  RollUpPrice)</Expression></CalculationBase>
```

## F 9cd06759-fb5b-42d9-8c47-e3ca3661192f DefaultValue

Unresolved.Type — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/902/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Item.CurrentRevision.Type</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 588b3a43-be93-4d54-a1c6-fa705124886f DefaultValue

Unresolved.UnitofMeasure — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/490/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Item.CurrentRevision.UnitofMeasure</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 588b3a43-be93-4d54-a1c6-fa705124886f FilterExpression

Unresolved.UnitofMeasure — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/490/FieldData/FilterExpression`

```xml
{"__type":"Expression","Operator":0,"Predicates":[{"__type":"Common","Type":1,"Operand":{"__type":"Dependent","Parse":false,"FieldExpression":"MeasurementType","ID":null},"For":"Category","Negate":false}]}
```

## F c304bbc2-9905-4610-ae43-ae6a628b3270 DefaultValue

Unresolved.VerificatDate — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/835/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="TodayValueGenerator" xmlns="http://schemas.intelex.net" />
```

## F 6a8ccedc-c9f2-48c2-9e53-92d393ddd7b0 DefaultValue

Unresolved.VerificationBy — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/693/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CURRENTUSER</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

## F 806c27c4-0510-4f79-b990-05edc3d55be2 DefaultValue

Unresolved.WasCanceledHelp — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/974/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

## F 5277f66f-d621-49e0-b14d-b2733d8cc83c DefaultValue

Unresolved.WFHelper — APQP & PPAP Manager(v1.0.0.0).ipack `/GraphData/Items/348/FieldData/DefaultValue`

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOflong5F2dSckg" xmlns="http://schemas.intelex.net"><Value>0</Value></ValueGenerator>
```
