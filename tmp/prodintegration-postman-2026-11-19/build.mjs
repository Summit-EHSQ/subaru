import fs from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

const root=process.cwd();
const outputDir=path.join(root,'outputs/01a1f54f-prodintegration-postman');
const collectionsDir=path.join(outputDir,'collections');
const audit=JSON.parse(await fs.readFile(path.join(root,'outputs/01a1f54f-prodintegration-audit/ProdIntegration-Field-Audit-2026-11-19.json'),'utf8'));
const metadata=JSON.parse(await fs.readFile(path.join(root,'tmp/prodintegration-api-audit-2026-11-19/evidence/all-objects-detailed.json'),'utf8'));
const auditObjects=new Map(audit.objects.map(o=>[o.expectedObject,o]));
const variable=name=>`{{${name}}}`;
const sourceId=suffix=>`{{examplePrefix}}-${suffix}`;
const apiBaseUrl='https://preprod-na.intelex.com/Login3/SIA-SummitDEV/api/v2';
const link=(object,recordId)=>`{{apiBaseUrl}}/object/${auditObjects.get(object).systemName}({{${recordId}}})`;
const raw=object=>JSON.stringify(object);

const familySource={name:'Postman demo family',notes:null,selectedPartNumbersIds:[]};
const updatedFamilySource={...familySource,name:'Postman demo family updated',notes:'Updated through the native Product Family PATCH example.'};
const partSource={
 partName:'POSTMAN DEMO PART',partNumber:sourceId('PARTNO'),futurePartName:null,lsPartNumber:null,lePartNumber:null,unitCost:null,
 drawingNumber:sourceId('DRAWING'),id:sourceId('PART'),partClassification:null,program:null,
 programs:[{id:sourceId('PROGRAM'),name:'Postman demo program',status:true}],status:true,
 name:`${sourceId('PARTNO')} (POSTMAN DEMO PART)`,
 Flag:{id:sourceId('FLAG'),name:'Postman demo flag',status:true},customers:[],
 suppliers:[{id:sourceId('SUPPLIER'),name:'Postman demo supplier',status:true}],
 revLevels:['DEMO-REVISION'],partNumberRevLevels:[{id:sourceId('REVISION'),name:'DEMO-REVISION',status:true}],
 tags:[variable('partTagValue')],measures:[],notes:null,
 productFamily:{id:sourceId('FAMILY'),name:'Postman demo family',status:true},includeAllFacilities:false,facilities:[],
};
const updatedPartSource={...partSource,partName:'POSTMAN DEMO PART UPDATED',name:`${sourceId('PARTNO')} (POSTMAN DEMO PART UPDATED)`,unitCost:12.345678,notes:'Updated through the native BOMECS PATCH example.'};
const scopeSource={
 engineeringChangeNumber:{id:sourceId('ECN'),name:sourceId('ECN-NUMBER'),status:true},
 supplier:{id:sourceId('SUPPLIER'),name:'Postman demo supplier',status:true},partNumber:null,partNumberRevLevel:null,
 productFamily:{id:sourceId('FAMILY'),name:'Postman demo family',status:true},
 program:{Id:sourceId('PROGRAM'),Name:'Postman demo program',Status:true},
 description:'Postman demo engineering change scope.',comment:null,
};
const updatedScopeSource={...scopeSource,description:'Updated Postman demo engineering change scope.',comment:'Updated through the native Engineering Change Scope PATCH example.'};

const configs=[
 {object:'Supplier Relationship Role',idVar:'supplierRelationshipRoleId',file:'01_Supplier_Relationship_Role',
  post:{Code:sourceId('ROLE'),Name:'Postman demo role',Active:true,Sort:10},
  patch:{Name:'Postman demo role updated',Active:true,Sort:20},
  notes:'This creates an illustrative local catalogue role. It does not create or modify the proposed MANUFACTURING, ASSEMBLY, or SEQUENCING seed values. Code remains unchanged on PATCH.'},
 {object:'Part Flag',idVar:'partFlagId',file:'02_Part_Flag',
  post:{SourceSystem:variable('sourceSystem'),Code:sourceId('FLAG'),Name:'Postman demo flag',Active:true,Sort:10},
  patch:{Name:'Postman demo flag updated',Active:true,Sort:20},
  notes:'Code and SourceSystem remain unchanged. Name and Sort are illustrative catalogue values.'},
 {object:'Part Tag',idVar:'partTagId',file:'03_Part_Tag',
  post:{SourceSystem:variable('sourceSystem'),Value:variable('partTagValue')},
  patch:{Value:variable('partTagValue')},
  notes:'Both fields on this object are immutable under the specification. PATCH resends the exact existing Value as a no-op example. When patching a manually supplied partTagId, first set partTagValue to that record\'s exact current value. A different tag value requires a new record. This example does not test or guarantee server-side immutability enforcement.'},
 {object:'Program Reference',idVar:'programReferenceId',file:'04_Program_Reference',
  post:{SourceSystem:variable('sourceSystem'),ExternalID:sourceId('PROGRAM'),Name:'Postman demo program',Active:true},
  patch:{Name:'Postman demo program updated',Active:true},
  notes:'SourceSystem and ExternalID are immutable identity fields and are omitted from PATCH.'},
 {object:'Supplier Reference',idVar:'supplierReferenceId',file:'05_Supplier_Reference',
  post:{SourceSystem:variable('sourceSystem'),ExternalID:sourceId('SUPPLIER'),Name:'Postman demo supplier',Active:true},
  patch:{Name:'Postman demo supplier updated',Active:true},
  notes:'This is the component-local Supplier Reference object. It is not an existing supplier company or facility master. SourceSystem and ExternalID remain unchanged.'},
 {object:'Product Family',idVar:'productFamilyId',file:'06_Product_Family',
  post:{SourceSystem:variable('sourceSystem'),ExternalID:sourceId('FAMILY'),Name:'Postman demo family',Notes:null,Active:true,RawPayload:raw(familySource)},
  patch:{Name:updatedFamilySource.name,Notes:updatedFamilySource.notes,RawPayload:raw(updatedFamilySource)},
  notes:'The example supplies ExternalID as an explicit source-context fixture so other examples can refer to it. The standalone family wire body does not itself provide this ID; it may be null for a native-ID-only standalone family. PartNumbers is inverse navigation and is omitted. RawPayload is the full illustrative standalone family body encoded as text.'},
 {object:'BOMECS Part API Recod',idVar:'bomecsPartId',file:'07_BOMECS_API_Record',
  post:{SourceSystem:variable('sourceSystem'),ExternalID:sourceId('PART'),PartNumber:sourceId('PARTNO'),PartName:partSource.partName,
   FuturePartName:null,LSPartNumber:null,LEPartNumber:null,UnitCost:null,DrawingNumber:sourceId('DRAWING'),Active:true,Name:partSource.name,
   'Programs@odata.bind':[link('Program Reference','programReferenceId')],
   'Flag@odata.bind':link('Part Flag','partFlagId'),
   'Tags@odata.bind':[link('Part Tag','partTagId')],Notes:null,
   'ProductFamily@odata.bind':link('Product Family','productFamilyId'),InclAllFamilies:false,RawPayload:raw(partSource)},
  patch:{PartName:updatedPartSource.partName,Name:updatedPartSource.name,UnitCost:updatedPartSource.unitCost,Notes:updatedPartSource.notes,RawPayload:raw(updatedPartSource)},
  notes:'The live caption is BOMECS API Record and its verified system name is used in the URL. IMPORTANT: InclAllFamilies is the actual current Include All Families? field. Its meaning has not been verified against the missing Include All Facilities? field. Its false value here is a separate native-field example, not a mapping from the includeAllFacilities source property retained in RawPayload. No nonexistent Facilities field is sent. SuRelationships and Revisions are inverse grids, created through the child objects\' Part references. PATCH omits Programs and Tags; native binding-array replacement/clear semantics have not been tested. UnitCost 12.345678 illustrates the proposed 19/6 decimal contract; actual tenant precision remains unverified.'},
 {object:'Part Revision Reference',idVar:'partRevisionReferenceId',file:'08_Part_Revision_Reference',
  post:{'Part@odata.bind':link('BOMECS Part API Recod','bomecsPartId'),ExternalID:sourceId('REVISION'),Name:'DEMO-REVISION',Active:true,iLatestPartFeed:true},
  patch:{Active:true,iLatestPartFeed:false},
  notes:'Part and ExternalID remain unchanged. The verified latest-feed field system name is iLatestPartFeed. This PATCH models retained revision membership becoming false without deleting the revision or changing its source activity.'},
 {object:'Part Supplier Relationship',idVar:'partSupplierRelationshipId',file:'09_Part_Supplier_Relationship',
  post:{'Part@odata.bind':link('BOMECS Part API Recod','bomecsPartId'),'Supplier@odata.bind':link('Supplier Reference','supplierReferenceId')},
  patch:{'Role@odata.bind':link('Supplier Relationship Role','supplierRelationshipRoleId')},
  notes:'POST creates the source membership with no default role. PATCH assigns the local role deliberately. Part and Supplier are immutable membership keys and are omitted from PATCH. Use one source namespace for the referenced records.'},
 {object:'Engineering Change Number',idVar:'engineeringChangeNumberId',file:'10_Engineering_Change_Number',
  post:{SourceSystem:variable('sourceSystem'),ExternalID:sourceId('ECN'),Name:sourceId('ECN-NUMBER'),Active:true},
  patch:{Name:sourceId('ECN-NUMBER-UPDATED'),Active:true},
  notes:'Scopes is inverse navigation and is omitted. SourceSystem and ExternalID remain unchanged. These calls do not perform a workflow release or approval.'},
 {object:'Engineering Change Scope',idVar:'engineeringChangeScopeId',file:'11_Engineering_Change_Scope',
  post:{'EngChangeNumber@odata.bind':link('Engineering Change Number','engineeringChangeNumberId'),
   'Supplier@odata.bind':link('Supplier Reference','supplierReferenceId'),
   'ProductFamily@odata.bind':link('Product Family','productFamilyId'),
   'Program@odata.bind':link('Program Reference','programReferenceId'),Description:scopeSource.description,Comment:null,RawPayload:raw(scopeSource)},
  patch:{Description:updatedScopeSource.description,Comment:updatedScopeSource.comment,RawPayload:raw(updatedScopeSource)},
  notes:'The verified Engineering Change Number field system name is EngChangeNumber. Part and Revision are optional and omitted in this POST; the illustrative source row explicitly retains null for both. Their non-null producer wire shape is still unresolved. For a deliberate native association, add Part@odata.bind with {{apiBaseUrl}}/object/ProdIntegration_BOMECSAPIRecordObject({{bomecsPartId}}) and Revision@odata.bind with {{apiBaseUrl}}/object/ProdIntegration_RevisiReferenceObject({{partRevisionReferenceId}}), ensuring Revision.Part equals Part. That native binding does not establish the producer wire mapping. PATCH changes scope text only and preserves the six-component scope key.'},
];

const preflight=(config,method)=>[
 '(function () {',
 '  function stop(message) { console.error(message); pm.execution.skipRequest(); }',
 '  if (!pm.environment.get("apiBaseUrl")) return stop("Import and select the supplied SIA-SummitDEV environment first.");',
 '  const template = pm.request.url.toString() + "\\n" + (pm.request.body && pm.request.body.raw || "");',
 '  const names = Array.from(new Set(["apiKey", ...Array.from(template.matchAll(/\\{\\{([^{}]+)\\}\\}/g), match => match[1])]));',
 '  const missing = names.filter(name => !String(pm.variables.get(name) == null ? "" : pm.variables.get(name)).trim());',
 '  if (missing.length) return stop("Set these environment variables before sending: " + missing.join(", "));',
 '  const baseUrl = String(pm.variables.get("apiBaseUrl"));',
 '  if (!/^https:\\/\\/[^\\s?#]+\\/api\\/v2$/.test(baseUrl)) return stop("apiBaseUrl must be an HTTPS application API root ending in /api/v2, without a trailing slash.");',
 '  const guid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;',
 '  const invalidIds = names.filter(name => /Id$/.test(name) && !guid.test(String(pm.variables.get(name))));',
 '  if (invalidIds.length) return stop("Use native Intelex record GUIDs for: " + invalidIds.join(", ") + ". Do not use source ExternalID values or object metadata IDs.");',
 '  try { JSON.parse(pm.variables.replaceIn(pm.request.body.raw)); }',
 '  catch (error) { return stop("The body is not valid JSON after variable substitution. Check values containing quotes or backslashes."); }',
 ...(method==='POST'?[
  `  pm.environment.set(${JSON.stringify(config.idVar)}, "");`,
  '  // Prevent a later PATCH from using a stale ID when this POST fails.',
 ]:[]),
 '})();',
];

const postResponse=config=>[
 'pm.test("Record created (HTTP 201)", function () { pm.expect(pm.response.code).to.eql(201); });',
 'if (pm.response.code === 201) {',
 '  let body = null;',
 '  try { body = pm.response.json(); } catch (error) { /* Location can carry the new record URL. */ }',
 '  const record = body && body.value && !Array.isArray(body.value) ? body.value : body;',
 '  const location = pm.response.headers.get("Location") || (record && record["@odata.id"]) || "";',
 '  const match = String(location).match(/\\(([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\\)/i);',
 '  const id = record && record.Id || match && match[1];',
 '  const valid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(id || ""));',
 '  pm.test("Response provides a native Intelex record Id", function () { pm.expect(valid).to.eql(true); });',
 `  if (valid) pm.environment.set(${JSON.stringify(config.idVar)}, String(id));`,
 '}',
];
const patchResponse=[
 'pm.test("Record patched (HTTP 200 or 204)", function () { pm.expect([200, 204]).to.include(pm.response.code); });',
 '// A successful HTTP 204 has no JSON body to parse.',
];
const sharedDescription=[
 'Native Intelex Object Data API examples for the SIA-SummitDEV development tenant. Exact object and field system names come from the read-only ProdIntegration audit on 2026-11-19.',
 'Import and select the included environment. Set apiKey locally, set the verified sourceSystem namespace where required, and review the illustrative values. The exported API key is blank.',
 'POST creates a new native record, not a source-key upsert. On success it stores the native Id in the shared environment for PATCH and related-object bindings. To PATCH a pre-existing record, set the object-specific ID variable manually and send PATCH alone. Each POST clears its old saved ID before sending so a failed create cannot cause a subsequent PATCH to target a stale record.',
 'Related IDs are native data-record GUIDs, not source ExternalID values or metadata IDs. Every referenced source-owned record must use the same source namespace. Omitted properties in PATCH are preserved; these examples do not clear relationships or demonstrate native M:N replacement semantics.',
 'RawPayload values are illustrative complete source documents/rows serialized as Unicode text. They do not execute the PMAPI-PART, PMAPI-FAMILY, or PMAPI-ECN receive logic. These native CRUD calls do not implement compound-key upserts, association reconciliation, conditional validation, source immutability, or multi-object transactions.',
 'The requests were generated and validated without sending any POST or PATCH to the tenant. Previously identified tenant configuration gaps remain. The two physical M:N map objects are implementation objects and have no separate collections.',
 'API syntax: https://developers.intelex.com/ . Collection format: https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html .',
].join('\n\n');

await fs.mkdir(collectionsDir,{recursive:true});
const manifest=[];
for(const config of configs) {
 const obj=auditObjects.get(config.object);
 const makeRequest=method=>{
  const isPost=method==='POST';
  const body=isPost?config.post:config.patch;
  const url=`{{apiBaseUrl}}/object/${obj.systemName}${isPost?'':`({{${config.idVar}}})`}`;
  const description=[
   isPost?`Creates one ${obj.actualCaption} record. On HTTP 201, saves the returned native Id as ${config.idVar}.`:`Updates the native record identified by ${config.idVar}. Populate this variable from POST or enter an existing native record Id. Identity fields are preserved.`,
   config.notes,
  ].join('\n\n');
  return {name:`${method} - ${isPost?'Create new record':'Patch existing record'}`,
   event:[{listen:'prerequest',script:{type:'text/javascript',exec:preflight(config,method)}},{listen:'test',script:{type:'text/javascript',exec:isPost?postResponse(config):patchResponse}}],
   request:{method,header:[{key:'Accept',value:'application/json',type:'text'},{key:'Content-Type',value:'application/json; charset=utf-8',type:'text'}],
    body:{mode:'raw',raw:JSON.stringify(body,null,2),options:{raw:{language:'json'}}},url,description},response:[]};
 };
 const collection={info:{_postman_id:randomUUID(),name:`Product Integration - ${obj.actualCaption}`,schema:'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',description:`${sharedDescription}\n\nObject: ${obj.actualCaption}\nSystem name: ${obj.systemName}\nRecord ID variable: ${config.idVar}\n\n${config.notes}`},
  auth:{type:'apikey',apikey:[{key:'key',value:'Authorization',type:'string'},{key:'value',value:'ApiKey {{apiKey}}',type:'string'},{key:'in',value:'header',type:'string'}]},
  item:[makeRequest('POST'),makeRequest('PATCH')]};
 const filename=`${config.file}.postman_collection.json`;
 await fs.writeFile(path.join(collectionsDir,filename),JSON.stringify(collection,null,2)+'\n');
 manifest.push({file:filename,object:config.object,actualCaption:obj.actualCaption,systemName:obj.systemName,idVariable:config.idVar,methods:['POST','PATCH']});
}
const environment={id:randomUUID(),name:'SIA-SummitDEV - Product Integration',
 values:[
  {key:'apiBaseUrl',value:apiBaseUrl,type:'default',enabled:true},
  {key:'apiKey',value:'',type:'secret',enabled:true},
  {key:'sourceSystem',value:'',type:'default',enabled:true},
  {key:'examplePrefix',value:'POSTMAN-DEMO-001',type:'default',enabled:true},
  {key:'partTagValue',value:'POSTMAN-DEMO-001-TAG',type:'default',enabled:true},
  ...configs.map(config=>({key:config.idVar,value:'',type:'default',enabled:true})),
 ],_postman_variable_scope:'environment'};
await fs.writeFile(path.join(outputDir,'SIA-SummitDEV-Product-Integration.postman_environment.json'),JSON.stringify(environment,null,2)+'\n');

const guide=[
 'PRODUCT INTEGRATION POSTMAN COLLECTIONS',
 '',
 '11 collections, one per business object. Each collection has exactly two requests: POST and PATCH.',
 'Verified target: https://preprod-na.intelex.com/Login3/SIA-SummitDEV',
 'Object and field identifiers are from the read-only tenant audit on 19 November 2026.',
 '',
 'IMPORT AND CONFIGURE',
 '1. Extract this ZIP.',
 '2. Import the environment JSON and all 11 JSON files in collections/ into Postman.',
 '3. Select SIA-SummitDEV - Product Integration as the active environment.',
 '4. Set apiKey locally to your current Intelex API key. The exported value is blank.',
 '5. Set sourceSystem to the verified connector source namespace. No namespace was assumed.',
 '6. Review examplePrefix and partTagValue. Use new source identities for new sample records; POST does not perform a source-key upsert.',
 '',
 'CREATE ORDER AND NATIVE RECORD IDS',
 ...manifest.map((entry,index)=>`${index+1}. ${entry.actualCaption}: POST saves ${entry.idVariable}.`),
 '',
 'This order creates reference data before records that bind to it. Run POST requests in this order when using the related illustrative records. PATCH requests may be run after each successful POST, or separately against existing records.',
 'The shared environment carries native IDs across collections. A pre-request check skips requests with missing variables, invalid native GUIDs, an invalid API root, or invalid substituted JSON. It does not make HTTP calls.',
 'To patch an existing record without creating one, enter its native Id in the indicated variable and send only the PATCH request. Source ExternalID values and metadata object/field IDs are not native business record IDs.',
 'A POST clears its previous saved target Id before sending. It saves a new Id only after a valid HTTP 201 creation response. If POST fails, resolve the failure before attempting PATCH.',
 '',
 'EXAMPLE BODIES AND SPECIFICATION NOTES',
 'These are native object CRUD examples with system-name JSON keys and OData relationship bindings. They do not call or implement the separate specification receive-service operations, source-key upserts, membership reconciliation, or atomic multi-object processing.',
 'RawPayload is a JSON string containing an illustrative complete source document/row. Writing it does not populate other fields or create related records automatically.',
 'SourceSystem, ExternalID, Code and immutable membership references are omitted from PATCH. No PATCH changes a scope key. The Part Tag exception below resends the same immutable value.',
 'Part Tag PATCH: both fields are immutable in the spec. Its example resends partTagValue unchanged. When setting partTagId manually, partTagValue must exactly equal that existing record value; this is a no-op example, not a rename operation.',
 'BOMECS: the current field InclAllFamilies means Include All Families? in the audited tenant. The example includes that actual field separately and does not pretend it implements the missing Include All Facilities? field or the source includeAllFacilities property. Reconcile this known audit gap before using the collection as an integration mapping.',
 'Inverse grids Revisions, SuRelationships, PartNumbers and Scopes are omitted from bodies. Declaring Part, ProductFamily and EngChangeNumber references maintain the relevant links.',
 'Engineering Change Scope POST leaves optional Part and Revision unset, with explicit null source context retained in RawPayload. The request description explains optional native bindings without inventing the unconfirmed non-null producer wire shape.',
 'Programs and Tags use arrays of full native-record URLs on POST. PATCH does not modify those collections; replacement and empty-array clear semantics were not established by the audit or public examples.',
 'Unit Cost PATCH includes the illustrative number 12.345678. The proposed precision 19 / scale 6 and long-text or payload limits have not been verified in the tenant.',
 'No POST or PATCH has been executed against the tenant during collection creation. Object settings, permissions, immutable rules, storage capacity, and integration behavior still govern actual execution.',
 '',
 'REFERENCE DOCUMENTATION',
 'Intelex Object Data API, authentication, create and update examples: https://developers.intelex.com/',
 'Postman Collection 2.1 schema: https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json',
 'Postman execution / skipRequest: https://learning.postman.com/docs/tests-and-scripts/write-scripts/postman-sandbox-reference/pm-execution/',
 'Postman environment variables: https://learning.postman.com/docs/use/send-requests/variables/environment-variables',
 '',
].join('\n');
await fs.writeFile(path.join(outputDir,'README.txt'),guide);
await fs.writeFile(path.join(root,'tmp/prodintegration-postman-2026-11-19/manifest.json'),JSON.stringify({outputDir,collections:manifest,requestCount:22,environmentVariables:environment.values.map(v=>v.key)},null,2)+'\n');
console.log(JSON.stringify({outputDir,collections:manifest.length,requests:manifest.length*2,environmentVariables:environment.values.length},null,2));
