const fs = require('fs');
const path = require('path');
const dir='C:/Users/DaveMcLean/Downloads/APQP & PPAP Manager v.1.0.0-20261117T142224Z-1-001/APQP & PPAP Manager v.1.0.0';
const all={};
for(const file of fs.readdirSync(dir).filter(x=>x.endsWith('.ipack'))){
 const p=JSON.parse(fs.readFileSync(path.join(dir,file),'utf8').replace(/^\uFEFF/,''));
 const nodes=new Map(), ptr=new Map();
 function walk(v,q=''){if(!v||typeof v!=='object')return;if(v.$id){nodes.set(v.$id,v);ptr.set(v.$id,q||'/')}if(Array.isArray(v))v.forEach((x,i)=>walk(x,q+'/'+i));else for(const[k,z]of Object.entries(v))walk(z,q+'/'+k.replace(/~/g,'~0').replace(/\//g,'~1'))}
 walk(p);
 const workflows=[]; const autos=[];
 for(const [id,n]of nodes){const t=(n.$type||'').split(',')[0].split('.').pop();if(t==='WorkflowPackageItemData')workflows.push({pointer:ptr.get(id),node:n});if(/ActionHandler|EventService|Batch|Workflow/.test(n.ObjectName||''))autos.push({pointer:ptr.get(id),node:n});}
 all[file]={workflows,automation:autos};
 console.log(file,JSON.stringify({workflowCount:workflows.length,automationCount:autos.length,workflowProps:workflows.map(x=>({pointer:x.pointer,keys:Object.keys(x.node),caption:x.node.Caption,record:x.node.RecordId,fieldDataKeys:Object.keys(x.node.FieldData||{})})),automationTypes:[...new Set(autos.map(x=>x.node.ObjectName))]}));
}
fs.writeFileSync('tmp/ppap-baseline-2026-11-17/workflows/raw-workflows.json',JSON.stringify(all,null,2));
