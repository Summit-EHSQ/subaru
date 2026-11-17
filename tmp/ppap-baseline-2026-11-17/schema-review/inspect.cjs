const fs=require('fs'),path=require('path');
const source='C:/Users/DaveMcLean/Downloads/APQP & PPAP Manager v.1.0.0-20261117T142224Z-1-001/APQP & PPAP Manager v.1.0.0';
const out=__dirname;
function walk(v,p='',res=[]){if(v&&typeof v==='object'){if(!Array.isArray(v))res.push([v,p||'/']);for(const[k,x]of Object.entries(v))walk(x,p+'/'+k.replaceAll('~','~0').replaceAll('/','~1'),res);}return res;}
const type=n=>(n?.$type||'').split(',')[0].split('.').at(-1),sid=n=>n?.RecordId||n?.FieldData?.Id||'',name=n=>n?.FieldData?.Name||n?.Caption||'',caption=n=>n?.FieldData?.Caption||n?.Caption||name(n);
const packages=[];const declarations=new Map();
for(const file of fs.readdirSync(source).filter(x=>x.endsWith('.ipack'))){
 const pkg=JSON.parse(fs.readFileSync(path.join(source,file),'utf8').replace(/^\uFEFF/,''));const all=walk(pkg),nodes=new Map(all.filter(([n])=>n.$id).map(([n,p])=>[n.$id,{n,p}]));
 const resolve=x=>x?.$ref?nodes.get(x.$ref)?.n:x;
 const obj=new Map([...nodes].filter(([id,{n}])=>type(n)==='MetObjectPackageItemData'||(type(n)==='BusinessObjectPackageItemData'&&['MetObjectEntity','MetLookupObjectEntity'].includes(n.ObjectName))));
 const fields=new Map([...nodes].filter(([id,{n}])=>['MetPropertyPackageItemData','MetReferencePropertyPackageItemData'].includes(type(n))));
 const rel=all.filter(([n])=>n.Start&&n.End&&n.Source&&n.Type!==undefined),outgoing=new Map(),incoming=new Map();
 for(const[r,p]of rel){let s=r.Start.$ref,e=r.End.$ref;if(!outgoing.has(s))outgoing.set(s,[]);if(!incoming.has(e))incoming.set(e,[]);outgoing.get(s).push({r,p});incoming.get(e).push({r,p});}
 const root=new Set((pkg.GraphData.RootItems||[]).map(x=>x.$ref)),inc=new Set((pkg.GraphData.IncludedItems||[]).map(x=>x.$ref)),dep=new Set((pkg.GraphData.Dependencies||[]).map(x=>x.$ref));
 const role=id=>[root.has(id)?'Root':'',inc.has(id)?'Included':'',dep.has(id)?'Dependency':''].filter(Boolean).join(';')||'Nested';
 const objects=[];const fdata=[];
 for(const[id,{n,p}]of obj){const par=(outgoing.get(id)||[]).filter(x=>x.r.Source==='SuperType').map(x=>nodes.get(x.r.End.$ref)?.n);objects.push({id:sid(n),name:name(n),caption:caption(n),graph:id,source:p,role:role(id),parent:par.map(name),abstract:n.FieldData?.IsAbstract,properties:n.FieldData});}
 for(const[id,{n,p}]of fields){let owners=new Set([...(incoming.get(id)||[]).filter(x=>x.r.Source==='ObjectProperties').map(x=>x.r.Start.$ref),...(outgoing.get(id)||[]).filter(x=>x.r.Source==='Object').map(x=>x.r.End.$ref)]);let targets=[...(outgoing.get(id)||[])].filter(x=>x.r.Source==='Type').map(x=>nodes.get(x.r.End.$ref)?.n);let row={id:sid(n),name:name(n),caption:caption(n),source:p,role:role(id),owners:[...owners].map(x=>name(nodes.get(x)?.n)),targets:targets.map(x=>({id:sid(x),name:name(x),caption:caption(x),type:type(x)})),kind:type(n),data:resolve(n.FieldData),relation:resolve(n.RelationData),reverse:resolve(n.ReverseProperty)};fdata.push(row);}
 const unresolved=all.filter(([n])=>n.$ref&&!nodes.has(n.$ref)).map(([n,p])=>({ref:n.$ref,source:p}));
 for(const[id,{n,p}]of nodes){const stable=sid(n);if(!stable)continue;if(!declarations.has(stable))declarations.set(stable,[]);declarations.get(stable).push({file,source:p,type:type(n),name:name(n),data:n.FieldData,extra:Object.fromEntries(Object.entries(n).filter(([k])=>!['$id','Id','FieldData','RecordId','LocalizationData','$type','IsHidden','IfExists','IfNotExists'].includes(k)))});}
 packages.push({file,name:pkg.Name,id:pkg.Id,version:pkg.Version,requirements:pkg.Requirements,objects,fields:fdata,unresolved,counts:{nodes:nodes.size,relations:rel.length,objects:objects.length,fields:fdata.length,roots:root.size,included:inc.size,dependencies:dep.size,types:[...nodes].reduce((a,[id,{n}])=>(a[type(n)]=(a[type(n)]||0)+1,a),{})}});
}
const normalize=x=>JSON.stringify(x,(_,v)=>v&&typeof v==='object'&&!Array.isArray(v)?Object.fromEntries(Object.entries(v).filter(([k])=>!['$id','$ref'].includes(k)).sort(([a],[b])=>a.localeCompare(b))):v);
const overlaps=[...declarations].filter(([id,rows])=>rows.length>1).map(([id,rows])=>({id,files:rows.map(x=>x.file),name:rows[0].name,types:[...new Set(rows.map(x=>x.type))],fieldDataIdentical:rows.every(x=>normalize(x.data)===normalize(rows[0].data)),rows}));
fs.writeFileSync(path.join(out,'schema-inspection.json'),JSON.stringify({packages,overlaps},null,2));
console.log(JSON.stringify({packages:packages.map(({file,name,counts,unresolved})=>({file,name,counts,unresolved:unresolved.length})),overlapSummary:{total:overlaps.length,differentFieldData:overlaps.filter(x=>!x.fieldDataIdentical).length}},null,2));
