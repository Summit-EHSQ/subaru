import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const taskDir=path.resolve('tmp/prodintegration-api-audit-2026-11-19');
const read=async relative=>JSON.parse((await fs.readFile(path.join(taskDir,relative),'utf8')).replace(/^\uFEFF/,''));
const expected=await read('expected-contract.json');
const module=(await read('evidence/module-with-objects.json')).value[0];
const live=await read('evidence/all-objects-detailed.json');
if(live['@odata.nextLink'] || module['Objects@odata.nextLink']) throw new Error('Unresolved pagination');
const objects=live.value;
const objectMap=new Map(expected.objects.map(e=>{
 const caption=e.caption==='BOMECS Part API Recod'?'BOMECS API Record':e.caption;
 const matches=objects.filter(o=>o.Caption===caption);
 if(matches.length!==1)throw new Error(`Expected one live match for ${e.caption}, got ${matches.length}`);
 return [e.caption,matches[0]];
}));
const sourceHash=crypto.createHash('sha256').update(await fs.readFile(expected.source.path)).digest('hex').toUpperCase();
if(sourceHash!==expected.source.sha256)throw new Error('Specification changed since checklist extraction');

function parseControls(content='') {
 return [...content.matchAll(/<ix:(Field|GridSection)\b([^>]*)>/gi)].map(m=>{
  const attrs=Object.fromEntries([...m[2].matchAll(/([\w:.-]+)\s*=\s*(["'])(.*?)\2/g)].map(a=>[a[1].toLowerCase(),a[3]]));
  return {kind:m[1],...attrs};
 });
}
const rows=[];
const summaries=[];
for(const e of expected.objects) {
 const actual=objectMap.get(e.caption);
 const controls=parseControls(actual.DefaultDetailView?.Content);
 const objectRows=[];
 for(const f of e.fields) {
  const candidates=actual.ObjectProperties.filter(p=>p.Caption===f.caption);
  if(candidates.length>1)throw new Error(`Duplicate caption ${e.caption}.${f.caption}`);
  const p=candidates[0]??null;
  const control=p?controls.filter(c=>c.for===p.Name):[];
  const expectedTarget=f.relationship?objectMap.get(f.relationship.targetObjectCaption??f.relationship.targetCaption??f.relationship.targetObject):null;
  const targetMatches=p && f.relationship? (expectedTarget?p.Type?.Id===expectedTarget.Id:null):null;
  const primitiveMatches=p && f.kind==='scalar'?p.Type?.Caption===(f.logicalType==='Raw JSON evidence'?'Text':f.logicalType):null;
  const hasReadOnly=p?.IsReadOnly===true || control.some(c=>String(c.editreadonly).toLowerCase()==='true'||String(c.readonly).toLowerCase()==='true'||String(c.displaymode).toLowerCase()==='view');
  const row={
   object:e.caption,actualObjectCaption:actual.Caption,actualObjectSystemName:actual.Name,
   section:f.sourceSection,specificationLine:f.sourceLine,field:f.caption,kind:f.kind,
   expectedType:f.typeContract,expectedRequired:f.requiredContract,
   expectedMaxLengthCharacters:f.proposedMaxLengthCharacters,
   expectedDecimalPrecision:f.proposedDecimalPrecision,expectedDecimalScale:f.proposedDecimalScale,
   expectedHumanReadOnly:f.expectedHumanReadOnly,
   present:p!==null,actualFieldSystemName:p?.Name??null,actualFieldId:p?.Id??null,
   actualPrimitiveType:p?.Type?.Caption??null,actualTypeSystemName:p?.Type?.Name??null,actualTypeId:p?.Type?.Id??null,
   primitiveTypeMatches:primitiveMatches,referenceTargetMatches:targetMatches,
   fieldMetadataRequired:p?.IsRequired??null,
   defaultDetailFormPresent:control.length>0,
   defaultDetailFormMandatory:control.some(c=>String(c.ismandatory).toLowerCase()==='true'),
   fieldMetadataReadOnly:p?.IsReadOnly??null,
   explicitReadOnlyOnFieldOrDefaultForm:p?hasReadOnly:null,
   defaultValue:p?.DefaultValue??null,calculation:p?.Calculation??null,
   returnedValidationRuleCount:p?.ValidationRules?.length??null,
   editPermissionReturned:p?.EditPermission??null,viewPermissionReturned:p?.ViewPermission??null,
   formControls:control,
   expectedLifecycle:f.automationLifecycleContract,
   evidence:p?`${actual['@odata.id']}/ObjectProperties(${p.Id})`:actual['@odata.id'],
   notes:[],
  };
  if(!p)row.notes.push('No matching field caption exists. Include All Families? (InclAllFamilies) is present but has different semantics and is not credited as Include All Facilities?.');
  if(p&&f.unconditionalRequired&&!p.IsRequired&&row.defaultDetailFormMandatory)row.notes.push('Mandatory in the default form, optional in underlying field metadata. This read-only audit does not prove receive/API persistence enforcement.');
  if(p&&f.expectedHumanReadOnly&&!hasReadOnly)row.notes.push('No explicit read-only setting on the field or its default form control. Full effective permissions/runtime behavior not tested.');
  if(p&&f.requiredContract==='Conditional')row.notes.push('Conditional requiredness is not demonstrated by the returned field or form metadata; optional metadata alone is not a defect.');
  if(f.proposedMaxLengthCharacters||f.proposedDecimalPrecision||f.caption==='Raw Payload')row.notes.push('The returned base field projection does not expose full length/precision/storage constraints. No truncation, payload-capacity, or decimal boundary writes were attempted.');
  if(f.relationship)row.notes.push('Target type checked; exact cardinality and inverse linkage are not proven by this API projection.');
  rows.push(row);objectRows.push(row);
 }
 const businessNames=new Set(e.fields.map(f=>f.caption));
 const unrecognized=actual.ObjectProperties.filter(p=>!p.IsSystem&&!businessNames.has(p.Caption));
 summaries.push({expectedObject:e.caption,actualCaption:actual.Caption,systemName:actual.Name,objectId:actual.Id,
  captionMatches:actual.Caption===e.caption,expectedFields:e.fields.length,presentFields:objectRows.filter(r=>r.present).length,
  missingFields:objectRows.filter(r=>!r.present).map(r=>r.field),
  expectedRequiredFields:e.fields.filter(f=>f.unconditionalRequired).length,
  requiredPresentButOptionalMetadata:objectRows.filter(r=>r.expectedRequired==='Y'&&r.present&&!r.fieldMetadataRequired).map(r=>r.field),
  requiredPresentAndMandatoryOnDefaultForm:objectRows.filter(r=>r.expectedRequired==='Y'&&r.present&&r.defaultDetailFormMandatory).length,
  inheritanceParent:actual.SuperType?.Name??null,displayField:actual.DisplayProperty?.Name??null,
  auditEnabled:actual.IsAuditEnabled,objectValidationRuleCount:actual.ValidationRules?.length??null,
  fieldsWithoutExplicitReadonly:objectRows.filter(r=>r.present&&r.expectedHumanReadOnly&&!r.explicitReadOnlyOnFieldOrDefaultForm).map(r=>r.field),
  unexpectedCustomFields:unrecognized.map(p=>({caption:p.Caption,systemName:p.Name})),
  defaultDetailView:{id:actual.DefaultDetailView?.Id??null,systemName:actual.DefaultDetailView?.Name??null},
 });
}
// Relationship target keys are derived from the extraction contract, never names alone.
for(const row of rows.filter(r=>r.present&&r.kind!=='scalar')) {
 const f=expected.objects.find(o=>o.caption===row.object).fields.find(f=>f.caption===row.field);
 const targetName=f.relationship.targetObjectCaption??f.relationship.targetCaption??f.relationship.targetObject??f.relationship.target;
 if(!targetName || !objectMap.has(targetName)) throw new Error(`Unresolved expected target ${row.object}.${row.field}: ${JSON.stringify(f.relationship)}`);
 row.referenceTargetMatches=row.actualTypeId===objectMap.get(targetName).Id;
}
const matched=rows.filter(r=>r.present);
const nativeMapObjects=objects.filter(o=>![...objectMap.values()].some(a=>a.Id===o.Id)).map(o=>({caption:o.Caption,systemName:o.Name,id:o.Id}));
const requestFiles=(await fs.readdir(path.join(taskDir,'evidence'))).filter(n=>n.endsWith('-request.json'));
const requests=await Promise.all(requestFiles.map(n=>read('evidence/'+n)));
if(requests.some(r=>r.method!=='GET'))throw new Error('Unexpected non-GET request');
const audit={
 auditDate:'2026-11-19',tenantLoginUrl:expected.requestedAuditTarget.tenantLoginUrl,module:{id:module.Id,caption:module.Caption,urlCaption:module.UrlCaption},
 scope:'Section 5 object and field coverage, logical primitive types and local reference targets, base required/read-only settings, default detail forms, display field, and inheritance. Configuration inspection only; no tenant records or configuration were modified.',
 specification:{path:expected.source.path,sha256:sourceHash,section:'5'},
 snapshot:await read('evidence/all-objects-detailed-request.json'),
 summary:{businessObjectsExpected:expected.objects.length,businessObjectsPresent:objectMap.size,physicalManyToManyMapObjects:nativeMapObjects.length,
  expectedFieldsAndGrids:rows.length,matchedFieldsAndGrids:matched.length,missingFieldsAndGrids:rows.length-matched.length,
  primitiveTypesMatched:matched.filter(r=>r.kind==='scalar'&&r.primitiveTypeMatches).length,
  referenceTargetTypesMatched:matched.filter(r=>r.kind!=='scalar'&&r.referenceTargetMatches).length,
  wrongPrimitiveTypes:matched.filter(r=>r.kind==='scalar'&&!r.primitiveTypeMatches).length,
  wrongReferenceTargets:matched.filter(r=>r.kind!=='scalar'&&!r.referenceTargetMatches).length,
  presentRequiredFieldsOptionalInMetadata:matched.filter(r=>r.expectedRequired==='Y'&&!r.fieldMetadataRequired).length,
  presentRequiredFieldsMandatoryOnDefaultForms:matched.filter(r=>r.expectedRequired==='Y'&&r.defaultDetailFormMandatory).length,
  expectedReadOnlyRowsPresent:matched.filter(r=>r.expectedHumanReadOnly).length,
  expectedReadOnlyRowsWithoutExplicitSetting:matched.filter(r=>r.expectedHumanReadOnly&&!r.explicitReadOnlyOnFieldOrDefaultForm).length,
  objectsWithAuditDisabled:summaries.filter(o=>!o.auditEnabled).length,
 },
 findings:[
  {id:'F01',category:'Field coverage',finding:'BOMECS Include All Facilities? is absent. Include All Families? (InclAllFamilies) exists instead.',action:'Confirm the intended meaning and correct the field definition and receive mapping to match includeAllFacilities. Do not assume family applicability is facility applicability.'},
  {id:'F02',category:'Object naming',finding:'The part object caption is BOMECS API Record; the specification caption is BOMECS Part API Recod.',action:'Reconcile the agreed display name with the specification. Existing system name remains identified independently.'},
  {id:'F03',category:'Receiving screen editability',finding:'59 of 60 present fields/grids identified as source-controlled or read-only in the checklist have no explicit read-only field/default-form setting. Included in Latest Part Feed? alone has EditReadOnly=true.',action:'Review source controls and inverse-grid editing on receiving screens. Keep expressly editable local catalogue fields and supplier Role editable. Conditional immutability still needs lifecycle enforcement.'},
  {id:'F04',category:'Requiredness layer',finding:'All 39 present unconditionally required expected fields are mandatory in the default detail forms, but all have IsRequired=false in field metadata.',action:'Confirm the receive service enforces persisted required values. UI mandatory markers alone are not proof of API validation. No invalid writes were attempted.'},
  {id:'F05',category:'Revision navigation',finding:'The BOMECS Revisions grid exists but its default detail markup declares no Included in Latest Part Feed?=TRUE filter.',action:'Confirm or configure the default latest-feed filter while retaining access to historical revision rows.'},
  {id:'F06',category:'Native history',finding:'IsAuditEnabled=false on all 11 business objects.',action:'Reconcile object auditing with the specification requirement for native audit history and retained prior source evidence.'},
 ],
 unverified:[
  'Exact text lengths, Notes/Description/Comment native long-text capacity, Raw Payload 1 MiB UTF-8 capacity, and Unit Cost precision 19/scale 6 were not exposed by the returned base metadata projection.',
  'Exact relationship cardinalities, disabled inverses, and the four inverse pairings are not proven by target-type matches alone. Two appropriate physical M:N maps exist.',
  'Composite uniqueness, null-equality scope keys, source-namespace enforcement, source immutability, conditional requiredness, and receive synchronization behavior need integration/configuration evidence beyond these projections.',
  'No effective permission impersonation, save tests, business payload reads, integration executions, or tenant writes were performed.',
 ],
 supportingObjects:nativeMapObjects,objects:summaries,fieldComparison:rows,
 apiRequests:requests.map(({method,url,status,contentType,observedAtUtc,evidenceFile})=>({method,url,status,contentType,observedAtUtc,evidenceFile})),
};
if(rows.length!==68||matched.length!==67||audit.summary.referenceTargetTypesMatched!==18||audit.summary.primitiveTypesMatched!==49)throw new Error('Unexpected reconciliation counts');
const outputDir=path.resolve('outputs/01a1f54f-prodintegration-audit');
await fs.mkdir(outputDir,{recursive:true});
const output=path.join(outputDir,'ProdIntegration-Field-Audit-2026-11-19.json');
await fs.writeFile(output,JSON.stringify(audit,null,2)+'\n');
console.log(JSON.stringify({output,summary:audit.summary,objects:summaries.map(o=>({object:o.expectedObject,coverage:`${o.presentFields}/${o.expectedFields}`,formMandatory:o.requiredPresentAndMandatoryOnDefaultForm}))},null,2));
