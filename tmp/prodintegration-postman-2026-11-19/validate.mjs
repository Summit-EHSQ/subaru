import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';

const taskDir=path.resolve('tmp/prodintegration-postman-2026-11-19');
const manifest=JSON.parse(await fs.readFile(path.join(taskDir,'manifest.json'),'utf8'));
const native=JSON.parse(await fs.readFile('tmp/prodintegration-api-audit-2026-11-19/evidence/all-objects-detailed.json','utf8')).value;
const contract=JSON.parse(await fs.readFile('tmp/prodintegration-api-audit-2026-11-19/expected-contract.json','utf8'));
const envFile=path.join(manifest.outputDir,'SIA-SummitDEV-Product-Integration.postman_environment.json');
const environment=JSON.parse(await fs.readFile(envFile,'utf8'));
assert.equal(environment.values.find(v=>v.key==='apiKey').value,'');
assert.equal(environment.values.find(v=>v.key==='apiKey').type,'secret');
assert.equal(environment.values.find(v=>v.key==='sourceSystem').value,'');
assert.equal(manifest.collections.length,11);
const initialEnv=Object.fromEntries(environment.values.map(v=>[v.key,v.value]));
for(const c of manifest.collections) assert.equal(initialEnv[c.idVariable],'');

const state={...initialEnv,apiKey:'validation-only-placeholder',sourceSystem:'VALIDATION_SOURCE'};
const replaceIn=(text,vars)=>String(text).replace(/\{\{([^{}]+)\}\}/g,(_,key)=>vars[key]??`{{${key}}}`);
const results=[];
function runScript(exec,item,vars,response) {
 const tests=[];const messages=[];let skipped=false;let parseCount=0;
 const pm={
  environment:{get:name=>vars[name],set:(name,value)=>{vars[name]=value;}},
  variables:{get:name=>vars[name],replaceIn:text=>replaceIn(text,vars)},
  request:{url:{toString:()=>item.request.url},body:item.request.body},
  execution:{skipRequest:()=>{skipped=true;}},
  test:(name,fn)=>{fn();tests.push(name);},
  expect:value=>({to:{eql:other=>assert.deepEqual(value,other),include:other=>assert.ok(value.includes(other))}}),
  response:response?{code:response.code,json:()=>{parseCount++;if(response.throwJson)throw new Error('No JSON body');return response.body;},headers:{get:name=>response.headers?.[name]??null}}:null,
 };
 vm.runInNewContext(exec.join('\n'),{pm,console:{error:message=>messages.push(message)}},{timeout:1000});
 return {skipped,tests,messages,parseCount};
}

for(const entry of manifest.collections) {
 const p=path.join(manifest.outputDir,'collections',entry.file);
 const collection=JSON.parse(await fs.readFile(p,'utf8'));
 assert.equal(collection.item.length,2);
 assert.deepEqual(collection.item.map(i=>i.request.method),['POST','PATCH']);
 assert.equal(collection.auth.type,'apikey');
 assert.equal(collection.auth.apikey.find(v=>v.key==='value').value,'ApiKey {{apiKey}}');
 const object=native.find(o=>o.Name===entry.systemName);
 assert.ok(object);
 const canonical=contract.objects.find(o=>o.caption===entry.object);
 const inverseNames=new Set(canonical.fields.filter(f=>f.kind==='inverse_navigation').map(f=>f.caption));
 const declaredProperties=new Map(object.ObjectProperties.map(p=>[p.Name,p]));
 const bodyProperties=new Set();
 for(const item of collection.item) {
  const templateBody=JSON.parse(item.request.body.raw);
  for(const [key,value] of Object.entries(templateBody)) {
   const fieldName=key.replace(/@odata\.bind$/,'');
   const field=declaredProperties.get(fieldName);
   assert.ok(field,`${entry.object}: unknown field ${fieldName}`);
   assert.equal(field.IsSystem,false,`${entry.object}: infrastructure field in body ${fieldName}`);
   assert.ok(!inverseNames.has(field.Caption),`${entry.object}: inverse grid in body ${fieldName}`);
   bodyProperties.add(field.Caption);
   if(key.endsWith('@odata.bind')) {
    assert.ok(field['@odata.type'].endsWith('MetReferencePropertyEntity'));
    const target=manifest.collections.find(c=>c.systemName===field.Type.Name);
    assert.ok(target,`${entry.object}: binding points outside component`);
    for(const url of Array.isArray(value)?value:[value]) {
     assert.equal(url,`{{apiBaseUrl}}/object/${target.systemName}({{${target.idVariable}}})`);
    }
    const expected=canonical.fields.find(f=>f.caption===field.Caption);
    if(expected.relationship.cardinality==='M:N')assert.ok(Array.isArray(value));
    else assert.equal(typeof value,'string');
   } else {
    assert.ok(field['@odata.type'].endsWith('MetSimplePropertyEntity'));
    if(value!==null) {
     if(field.Type.Caption==='Yes/No') assert.equal(typeof value,'boolean');
     if(['Float','Decimal'].includes(field.Type.Caption)) assert.equal(typeof value,'number');
     if(field.Type.Caption==='Text') assert.equal(typeof value,'string');
    }
   }
  }
  for(const event of item.event) new vm.Script(event.script.exec.join('\n'));
  const badAuth={...state,apiKey:''};
  const bad=runScript(item.event[0].script.exec,item,badAuth);
  assert.equal(bad.skipped,true,'Missing API key was not skipped');
  assert.ok(bad.messages.every(m=>!m.includes('validation-only-placeholder')));
 }
 const [post,patch]=collection.item;
 assert.equal(post.request.url,`{{apiBaseUrl}}/object/${entry.systemName}`);
 assert.equal(patch.request.url,`{{apiBaseUrl}}/object/${entry.systemName}({{${entry.idVariable}}})`);
 const staleId=randomUUID();state[entry.idVariable]=staleId;
 const ready=runScript(post.event[0].script.exec,post,state);
 assert.equal(ready.skipped,false,`${entry.object}: valid POST skipped: ${ready.messages}`);
 assert.equal(state[entry.idVariable],'','POST did not clear its prior saved Id');
 const resolved=JSON.parse(replaceIn(post.request.body.raw,state));
 if(resolved.RawPayload) JSON.parse(resolved.RawPayload);
 const missingPatch=runScript(patch.event[0].script.exec,patch,{...state});
 assert.equal(missingPatch.skipped,true,'PATCH with no native Id was not skipped');
 const newId=randomUUID();
 const success=runScript(post.event[1].script.exec,post,state,{code:201,body:{Id:newId}});
 assert.equal(state[entry.idVariable],newId);
 assert.equal(success.tests.length,2);
 const preparedPatch=runScript(patch.event[0].script.exec,patch,state);
 assert.equal(preparedPatch.skipped,false,`${entry.object}: valid PATCH skipped: ${preparedPatch.messages}`);
 const patchResolved=JSON.parse(replaceIn(patch.request.body.raw,state));
 if(patchResolved.RawPayload)JSON.parse(patchResolved.RawPayload);
 const patchResult=runScript(patch.event[1].script.exec,patch,state,{code:204,throwJson:true});
 assert.equal(patchResult.parseCount,0,'PATCH parsed an empty 204 response');
 runScript(patch.event[1].script.exec,patch,state,{code:200,body:{Id:newId}});
 const fromLocation={...state,[entry.idVariable]:''};
 runScript(post.event[1].script.exec,post,fromLocation,{code:201,throwJson:true,headers:{Location:`https://example.invalid/api/v2/object/${entry.systemName}(${newId})`}});
 assert.equal(fromLocation[entry.idVariable],newId,'Location fallback failed');
 const fromWrapped={...state,[entry.idVariable]:''};
 runScript(post.event[1].script.exec,post,fromWrapped,{code:201,body:{value:{Id:newId}}});
 assert.equal(fromWrapped[entry.idVariable],newId,'Wrapped Id response failed');
 const badNativeId={...state,[entry.idVariable]:'not-a-native-guid'};
 assert.equal(runScript(patch.event[0].script.exec,patch,badNativeId).skipped,true);
 for(const key of ['SourceSystem','ExternalID','Code','Part@odata.bind','Supplier@odata.bind','EngChangeNumber@odata.bind','Revision@odata.bind','ProductFamily@odata.bind','Program@odata.bind']) {
  if(entry.object==='Part Supplier Relationship'&&key==='Supplier@odata.bind')assert.ok(!(key in JSON.parse(patch.request.body.raw)));
  else assert.ok(!(key in JSON.parse(patch.request.body.raw)),`${entry.object}: PATCH changes identity/key field ${key}`);
 }
 if(entry.object==='Part Tag') assert.deepEqual(JSON.parse(patch.request.body.raw),{Value:'{{partTagValue}}'});
 if(entry.object==='BOMECS Part API Recod') {
  assert.ok('InclAllFamilies' in resolved);
  assert.ok(!('IncludeAllFacilities' in resolved));
  assert.ok(collection.info.description.includes('not a mapping'));
 }
 results.push({object:entry.actualCaption,requests:2,keysAndBindingsMatchAuditedSchema:true,scriptMocksPassed:true,coveredFieldCaptions:[...bodyProperties]});
}
assert.equal(results.reduce((n,r)=>n+r.requests,0),22);
await fs.writeFile(path.join(taskDir,'validation-results.json'),JSON.stringify({collections:11,requests:22,tenantRequestsExecuted:0,environmentKeyBlank:true,results},null,2)+'\n');
console.log(JSON.stringify({collections:11,requests:22,bodyKeysAndBindingsValid:true,preflightAndResponseScriptMocksPassed:true,tenantRequestsExecuted:0}));
