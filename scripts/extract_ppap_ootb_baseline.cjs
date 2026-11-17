/* Reconstruct the supplied historical OOTB bundle without applying target ADRs. */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const ROOT = path.resolve(__dirname, '..');
const INPUT = path.join(ROOT, 'ootb_config_packages/APQP & PPAP Manager v1.0.0');
const OUT = path.join(ROOT, 'docs/phase 2/ppap/ootb-ppap-baseline-model');
const order = ['Checklist Framework(v1.0.0).ipack', 'APQP & PPAP Manager(v1.0.0.0).ipack', 'Checklist Framework - Data(v1.0.0).ipack', 'APQP & PPAP Manager - Data(v1.0.0.0).ipack', 'Views Add-on(v1.0.0.0).ipack'];
function walk(v, p = '', out = []) {
  if (v && typeof v === 'object') {
    if (!Array.isArray(v)) out.push({node:v, pointer:p || '/'});
    for (const [k,c] of Object.entries(v)) walk(c, p+'/'+k.replace(/~/g,'~0').replace(/\//g,'~1'), out);
  }
  return out;
}
function short(n) { return (n.$type || '').split(',')[0].split('.').pop(); }
function plain(v) {
  if (Array.isArray(v)) return v.map(plain);
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).filter(([k])=>!['$id','$type'].includes(k)).map(([k,c])=>[k,plain(c)]));
  return v;
}
function loadBundle() {
  const packages = order.map((file, i) => {
    const bytes=fs.readFileSync(path.join(INPUT,file));
    const data=JSON.parse(bytes.toString('utf8').replace(/^\uFEFF/,''));
    const walked=walk(data), nodes=new Map(), paths=new Map(), duplicates=[];
    for (const {node,pointer} of walked) if(node.$id) {
      if(nodes.has(node.$id)) duplicates.push(node.$id);
      if(!nodes.has(node.$id)||Object.keys(node).length>Object.keys(nodes.get(node.$id)).length){nodes.set(node.$id,node);paths.set(node.$id,pointer);}
    }
    const resolve=v=>v?.$ref?nodes.get(v.$ref):v;
    const relations=walked.filter(({node})=>node.Start&&node.End&&Object.hasOwn(node,'Source')&&Object.hasOwn(node,'Type'));
    const roles={}; for(const key of ['RootItems','IncludedItems','Dependencies','ExcludedItems']) for(const r of data.GraphData[key]||[]) {const id=resolve(r)?.RecordId; if(id)(roles[id] ||= []).push(key);}
    return {file,i,data,nodes,paths,walked,resolve,relations,duplicates,roles,hash:crypto.createHash('sha256').update(bytes).digest('hex').toUpperCase(),size:bytes.length};
  });
  const occurrences=new Map();
  for(const p of packages) for(const [local,n]of p.nodes) if(n.RecordId) {
    const o={node:n,package:p.file,pointer:p.paths.get(local),local,p};
    if(!occurrences.has(n.RecordId))occurrences.set(n.RecordId,[]);occurrences.get(n.RecordId).push(o);
  }
  const rank=o=>(o.package.startsWith('APQP & PPAP Manager(')?10000:o.package.startsWith('Checklist Framework(')?8000:o.package.startsWith('Views')?1000:2000)+Object.keys(o.node.FieldData||{}).length;
  const selected=new Map([...occurrences].map(([id,os])=>[id,[...os].sort((a,b)=>rank(b)-rank(a))[0]]));
  return {packages,occurrences,selected};
}
const objectKinds=new Set(['MetObjectEntity','MetLookupObjectEntity','MetHierarchyObjectEntity']);
const fieldKinds=new Set(['MetSimplePropertyEntity','MetReferencePropertyEntity']);
function extract(bundle) {
  const {packages,occurrences,selected}=bundle;
  const objects=[], fields=[], conflicts=[], unresolved=[], relations=[];
  const objectsById=new Map(), fieldsById=new Map();
  const name=id=>{const n=selected.get(id)?.node;return n?.FieldData?.Name||n?.Caption||id||'Unresolved';};
  for(const [id,o]of selected) if(objectKinds.has(o.node.ObjectName)) {
    const d=o.p.resolve(o.node.FieldData)||{};
    const obj={stable_id:id,internal_name:d.Name||o.node.Caption,display_name:d.Caption||o.node.Caption,kind:o.node.ObjectName==='MetLookupObjectEntity'?'Lookup':o.node.ObjectName==='MetHierarchyObjectEntity'?'Hierarchy':'Record',inheritance_parent_id:null,inheritance_parent:'None',parent_evidence:'Unresolved until graph checked',declared_fields:[],metadata:plain(d),package:o.package,source_pointer:o.pointer,occurrences:occurrences.get(id).map(x=>({package:x.package,pointer:x.pointer,role:x.p.roles[id]||['Nested dependency']}))};
    objects.push(obj);objectsById.set(id,obj);
  }
  const owners=new Map(), types=new Map(), parents=new Map();
  const add=(map,k,id,ev)=>{if(!k||!id)return;if(!map.has(k))map.set(k,new Map());const m=map.get(k);if(!m.has(id))m.set(id,[]);m.get(id).push(ev);};
  for(const p of packages) for(const {node:r,pointer}of p.relations) {
    const a=p.resolve(r.Start),b=p.resolve(r.End),aid=a?.RecordId,bid=b?.RecordId;
    if(!a||!b){unresolved.push({kind:'Graph endpoint',package:p.file,pointer,start:r.Start,end:r.End});continue;}
    const ev={package:p.file,pointer,source:r.Source,type:r.Type};
    if(r.Source==='ObjectProperties'&&objectsById.has(aid)&&fieldKinds.has(b.ObjectName))add(owners,bid,aid,ev);
    if(r.Source==='Object'&&fieldKinds.has(a.ObjectName)&&objectsById.has(bid))add(owners,aid,bid,ev);
    if(r.Source==='Type'&&fieldKinds.has(a.ObjectName))add(types,aid,bid,ev);
    if(r.Source==='SuperType'&&objectsById.has(aid)&&objectsById.has(bid))add(parents,aid,bid,ev);
  }
  for(const obj of objects) {
    const ps=parents.get(obj.stable_id)||new Map();
    if(ps.size===1){obj.inheritance_parent_id=[...ps.keys()][0];obj.inheritance_parent=name(obj.inheritance_parent_id);obj.parent_evidence=[...ps.values()][0];}
    else if(ps.size>1){obj.inheritance_parent='Unresolved';unresolved.push({kind:'Conflicting inheritance',object:obj.internal_name,candidates:[...ps.keys()]});}
    else {const raw=obj.metadata.SuperType;obj.parent_evidence='No SuperType graph edge; exported SuperType='+JSON.stringify(raw);if(!Object.hasOwn(obj.metadata,'SuperType')){obj.inheritance_parent='Unresolved';unresolved.push({kind:'Missing inheritance metadata',object:obj.internal_name});}else if(raw&&typeof raw==='string'){if(objectsById.has(raw)){obj.inheritance_parent_id=raw;obj.inheritance_parent=name(raw);}else {obj.inheritance_parent='Unresolved';unresolved.push({kind:'Missing inheritance definition',object:obj.internal_name,id:raw});}}}
  }
  for(const [id,o]of selected) if(fieldKinds.has(o.node.ObjectName)) {
    const n=o.node,d=o.p.resolve(n.FieldData)||{},os=owners.get(id)||new Map(),ts=types.get(id)||new Map();
    const owner=os.size===1?[...os.keys()][0]:null,target=ts.size===1?[...ts.keys()][0]:null;
    const f={stable_id:id,owner_id:owner,owner:name(owner),internal_name:d.Name,display_name:d.Caption||n.Caption,kind:n.ObjectName==='MetReferencePropertyEntity'?'Reference':'Scalar',type_id:target,type:name(target),type_display:selected.get(target)?.node?.FieldData?.Caption||selected.get(target)?.node?.Caption||name(target),metadata:plain(d),relation_data:plain(o.p.resolve(n.RelationData)||null),reverse_property:plain(o.p.resolve(n.ReverseProperty)||null),calculation_dependencies:plain(n.CalculationDependencies),package:o.package,source_pointer:o.pointer,owner_evidence:[...os.values()].flat(),type_evidence:[...ts.values()].flat(),occurrences:occurrences.get(id).map(x=>({package:x.package,pointer:x.pointer}))};
    if(!owner||!target)unresolved.push({kind:!owner?'Field owner':'Field type',field:id,name:d.Name,owners:[...os.keys()],types:[...ts.keys()]});
    fields.push(f);fieldsById.set(id,f);objectsById.get(owner)?.declared_fields.push(id);
  }
  for(const f of fields.filter(x=>x.kind==='Reference')) {
    const reverseName=f.reverse_property?.Name;
    const inverse=fields.find(x=>x.owner_id===f.type_id&&x.internal_name===reverseName);
    const rel=f.relation_data, invrel=inverse?.relation_data;
    let cardinality='Unresolved',classification='Unresolved';
    if(rel?.Type===3||(!rel&&invrel?.Type===3)){cardinality='M:N';classification=rel?.Type===3?'Extracted relation Type=3':'Inferred from paired inverse Type=3';}
    else if(f.metadata.IsStartOfRelation===true&&(rel?.Type===2||invrel?.Type===2)){cardinality='M:1';classification='Inferred from foreign-key relation and declaring start; requiredness extracted';}
    else if(f.metadata.IsStartOfRelation===false&&(rel?.Type===2||invrel?.Type===2)){cardinality='1:M';classification='Inferred from foreign-key inverse and declaring end';}
    else if(rel?.Type===1){cardinality='1:1';classification='Unresolved relation Type=1 interpretation';}
    const junction=(rel?.Name||invrel?.Name||'').match(/\(via\s+([^\)]+)\)/)?.[1]||'';
    if(!f.owner_id||!f.type_id)classification='Unresolved owner/type; relation shape only: '+classification;
    relations.push({field_id:f.stable_id,source_object:f.owner,declaring_field:f.internal_name,target_object:f.type,source_id:f.owner_id,target_id:f.type_id,cardinality,required:f.metadata.IsRequired,reverse_property:reverseName||'',inverse_field_id:inverse?.stable_id||'',is_start:f.metadata.IsStartOfRelation,relation_type:rel?.Type??invrel?.Type??null,relation_name:rel?.Name||invrel?.Name||'',junction,classification,package:f.package,source_pointer:f.source_pointer});
    if(cardinality==='Unresolved'||classification.startsWith('Unresolved relation'))unresolved.push({kind:'Cardinality',field:f.stable_id,object:f.owner,name:f.internal_name,relationType:rel?.Type??null,reverse:reverseName});
  }
  for(const [id,os]of occurrences) {
    if(!objectsById.has(id)&&!fieldsById.has(id))continue;
    const props=new Set(os.flatMap(o=>Object.keys(o.p.resolve(o.node.FieldData)||{})));
    for(const prop of props) {
      if(['$id','Id'].includes(prop))continue;
      const vs=os.filter(o=>{const d=o.p.resolve(o.node.FieldData)||{};return Object.hasOwn(d,prop)&&(d[prop]===null||typeof d[prop]!=='object');}).map(o=>({package:o.package,value:o.p.resolve(o.node.FieldData)[prop],pointer:o.pointer+'/FieldData/'+prop}));
      if(new Set(vs.map(x=>JSON.stringify(x.value))).size>1)conflicts.push({stable_id:id,name:name(id),property:prop,values:vs,selected_package:selected.get(id).package});
    }
  }
  const cycles=[];
  for(const obj of objects){let curr=obj;const visited=[];while(curr?.inheritance_parent_id){if(visited.includes(curr.stable_id)){cycles.push(visited.concat(curr.stable_id));break;}visited.push(curr.stable_id);curr=objectsById.get(curr.inheritance_parent_id);}}
  return {objects:objects.sort((a,b)=>a.internal_name.localeCompare(b.internal_name)),fields:fields.sort((a,b)=>(a.owner+'.'+a.internal_name).localeCompare(b.owner+'.'+b.internal_name)),relationships:relations,conflicts,unresolved,cycles,manifest:packages.map(p=>({file:p.file,id:p.data.Id,name:p.data.Name,version:p.data.Version,version_id:p.data.VersionId,source:plain(p.data.Source),sha256:p.hash,bytes:p.size,requirements:plain(p.data.Requirements),graph_items:p.data.GraphData.Items.length,graph_relations:p.data.GraphData.Relations.length,root_items:p.data.GraphData.RootItems.length,included_items:p.data.GraphData.IncludedItems.length,dependencies:p.data.GraphData.Dependencies.length,excluded_items:p.data.GraphData.ExcludedItems.length,duplicate_json_ids:p.duplicates}))};
}
function csv(file,rows){const keys=[...new Set(rows.flatMap(Object.keys))];const cell=v=>'"'+String(v===null||v===undefined?'':typeof v==='object'?JSON.stringify(v):v).replace(/"/g,'""')+'"';fs.writeFileSync(path.join(OUT,file),'\uFEFF'+[keys.map(cell).join(','),...rows.map(r=>keys.map(k=>cell(r[k])).join(','))].join('\r\n')+'\r\n');}
function write(data){fs.mkdirSync(OUT,{recursive:true});fs.writeFileSync(path.join(OUT,'baseline-model.json'),JSON.stringify(data,null,2)+'\n');fs.writeFileSync(path.join(OUT,'source-manifest.json'),JSON.stringify(data.manifest,null,2)+'\n');csv('object-inventory.csv',data.objects.map(o=>({stable_id:o.stable_id,internal_name:o.internal_name,display_name:o.display_name,kind:o.kind,inheritance_parent:o.inheritance_parent,inheritance_parent_id:o.inheritance_parent_id,declared_field_count:o.declared_fields.length,abstract:o.metadata.IsAbstract,system:o.metadata.IsSystem,has_workflow:o.metadata.HasWorkflow,audit:o.metadata.IsAuditEnabled,security:o.metadata.IsSecurityEnabled,package:o.package,source_pointer:o.source_pointer})));csv('field-inventory.csv',data.fields.map(f=>({stable_id:f.stable_id,owner:f.owner,internal_name:f.internal_name,display_name:f.display_name,kind:f.kind,type:f.type,type_display:f.type_display,required:f.metadata.IsRequired,read_only:f.metadata.IsReadOnly,primary_key:f.metadata.IsPrimaryKey,default:f.metadata.DefaultValue,calculation:f.metadata.Calculation,max_length:f.metadata.MaxLength,precision:f.metadata.Precision,scale:f.metadata.Scale,timezone:f.metadata.TimeZoneCapture,package:f.package,source_pointer:f.source_pointer})));csv('relationship-register.csv',data.relationships);csv('inheritance-register.csv',data.objects.filter(o=>o.inheritance_parent_id).map(o=>({source:o.internal_name,inheritance_parent:o.inheritance_parent,source_id:o.stable_id,parent_id:o.inheritance_parent_id,evidence:o.parent_evidence})));csv('metadata-variation-register.csv',data.conflicts);fs.writeFileSync(path.join(OUT,'extraction-summary.json'),JSON.stringify({counts:{objects:data.objects.length,fields:data.fields.length,relationships:data.relationships.length,inheritance_edges:data.objects.filter(x=>x.inheritance_parent_id).length,metadata_variations:data.conflicts.length},unresolved:data.unresolved,inheritance_cycles:data.cycles},null,2)+'\n');}
if(require.main===module){const data=extract(loadBundle());write(data);console.log(JSON.stringify({counts:{objects:data.objects.length,fields:data.fields.length,owned_fields:data.fields.filter(x=>x.owner_id).length,typed_fields:data.fields.filter(x=>x.type_id).length,relationships:data.relationships.length,inheritance:data.objects.filter(x=>x.inheritance_parent_id).length,variations:data.conflicts.length,unresolved:data.unresolved.length},unresolved_categories:Object.fromEntries([...new Set(data.unresolved.map(x=>x.kind))].map(k=>[k,data.unresolved.filter(x=>x.kind===k).length])),relationship_categories:Object.fromEntries([...new Set(data.relationships.map(x=>x.cardinality))].map(k=>[k,data.relationships.filter(x=>x.cardinality===k).length]))},null,2));}
module.exports={loadBundle,extract,walk,short,plain,ROOT,INPUT,OUT,csv};
