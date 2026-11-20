const fs=require('fs'),path=require('path'),crypto=require('crypto');
const dir=__dirname,root=path.resolve(dir,'../..');
const sourceRelative='docs/phase 2/ppap/solution_specification/implementation-plan.json';
const sourcePath=path.join(root,sourceRelative),sourceBytes=fs.readFileSync(sourcePath);
const read=n=>JSON.parse(fs.readFileSync(path.join(dir,n),'utf8').replace(/^\uFEFF/,''));
const project=read('project.json'),parent=read('parent.json'),all=read('current-project-tasks.json');
const plan=JSON.parse(sourceBytes.toString('utf8'));
const sourceSha256=crypto.createHash('sha256').update(sourceBytes).digest('hex');
if(project.id!==594236||project.company_project_id!==544||project.custom_project_id!=='P544'||!project.use_sub_tasks)throw Error('Project does not match P544 with subtasks enabled.');
if(parent.id!==16732377||parent.company_task_id!==24719||parent.project_id!==project.id)throw Error('Parent does not match the selected project.');
const planDir=path.dirname(sourcePath);
for(const n of ['implementation-plan-validation.json','implementation-content-validation.json'])if(!JSON.parse(fs.readFileSync(path.join(planDir,n),'utf8')).passed)throw Error('Source validation failed: '+n);
if(plan.tasks.length!==36||new Set(plan.tasks.map(t=>t.id)).size!==36)throw Error('Unexpected plan task set.');
const escape=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/\r?\n/g,'<br/>');
function section(label,value){return '<div><strong>'+escape(label)+'</strong><br/>'+escape(value)+'</div><br/>';}
function listed(label,values,numbered=false){return '<div><strong>'+escape(label)+'</strong><br/>'+values.map((v,i)=>escape(numbered?(i+1)+'. '+v:'• '+v)).join('<br/>')+'</div><br/>';}
function rows(label,values){return '<div><strong>'+escape(label)+'</strong><br/>'+values.map(([name,instruction])=>'<strong>'+escape(name)+'</strong><br/>'+escape(instruction)).join('<br/><br/>')+'</div><br/>';}
const plain=html=>String(html||'').replace(/<br\s*\/?\s*>/gi,'\n').replace(/<\/(?:div|p|li)>/gi,'\n').replace(/<[^>]*>/g,'').replace(/&nbsp;/gi,' ').replace(/&#39;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const inputMap=new Map(plan.externalInputs.map(x=>[x.id,x]));
const tasks=[];
for(const t of plan.tasks){
 if(!/^IMP-\d{2}$/.test(t.id))throw Error('Unsafe task ID');
 const title='['+t.id+'] '+t.title;
 const marker='PPAP implementation plan / '+t.id;
 let html=section('Source task',marker)+section('Source plan',sourceRelative+'; plan date '+plan.date+'; SHA-256 '+sourceSha256);
 for(const [key,label]of [['id','Task ID'],['title','Title'],['category','Category'],['objective','Objective'],['scope','Detailed scope'],['deliverable','Deliverable']])html+=section(label,t[key]);
 html+=section('Work needed first',t.prerequisites.length?t.prerequisites.map(id=>id+' — '+plan.tasks.find(x=>x.id===id).title).join('\n'):'None');
 if(t.predecessorOutputs.length)html+=listed('What the earlier tasks provide',t.predecessorOutputs.map(x=>x.description));
 for(const [key,label]of [['blockedStatus','What is waiting'],['implementer','Recommended implementer role'],['reviewer','Recommended reviewer/approver role'],['rationale','Why this role is recommended']])html+=section(label,t[key]);
 if(t.configurationRows.length)html+=rows('Fields and features to set up',t.configurationRows);
 if(t.modifications.length)html+=rows('Changes to the existing setup',t.modifications.map(x=>[x.element,x.change]));
 if(t.steps.length)html+=listed('Build instructions',t.steps,true);
 html+=listed('How to check the result',t.accept);
 html+=section('Information needed for this task',t.suppliedInputDescriptions.length?t.suppliedInputDescriptions.map(x=>x.id+': '+x.description).join('\n'):'None');
 if(t.inputs.length)html+=listed('Supplied input context',t.inputs.map(id=>{const x=inputMap.get(id);if(!x)throw Error('Missing input '+id);return x.id+' — '+x.title+': '+x.description;}));
 html+=listed('Specification references',t.refs)+section('Assumptions and open questions',t.assumptions);
 // Compare every source string against decoded HTML so no setting/condition is dropped by the renderer.
 const expected=[t.id,t.title,t.category,t.objective,t.scope,t.deliverable,t.blockedStatus,t.implementer,t.reviewer,t.rationale,t.assumptions,...t.predecessorOutputs.map(x=>x.description),...t.configurationRows.flat(),...t.modifications.flatMap(x=>[x.element,x.change]),...t.steps,...t.accept,...t.suppliedInputDescriptions.map(x=>x.description),...t.refs];
 const bodyText=plain(html);for(const s of expected)if(!bodyText.includes(String(s).replace(/\s+/g,' ').trim()))throw Error('Lost description content '+t.id+': '+String(s).slice(0,50));
 const matches=all.filter(x=>x.title===title||plain(x.description).includes(marker)||(x.parent_task_id===parent.id&&((String(x.title||'').match(/\bIMP-\d{2}\b/)||[])[0]===t.id||x.title===t.title)));
 if(matches.length>1)throw Error('Multiple existing matches for '+t.id);
 const existing=matches[0];
 if(existing&&(existing.project_id!==project.id||existing.parent_task_id!==parent.id||existing.title!==title||plain(existing.description)!==bodyText))throw Error('Existing content or hierarchy conflicts for '+t.id+' / T'+existing.company_task_id);
 const payload={project_id:project.id,parent_task_id:parent.id,title,description:html};
 const payloadFile='payload-'+t.id+'.json';
 fs.writeFileSync(path.join(dir,payloadFile),'\ufeff'+JSON.stringify(payload,null,2)+'\n','utf8');
 tasks.push({sourceTaskId:t.id,title,marker,operation:existing?'skip':'create',payloadFile,descriptionCharacters:html.length,descriptionSha256:crypto.createHash('sha256').update(html).digest('hex'),plainDescriptionSha256:crypto.createHash('sha256').update(bodyText).digest('hex'),existingTaskId:existing?.id||null,existingTaskNumber:existing?.company_task_id||null});
}
const manifest={date:'2026-11-20',source:sourceRelative,sourceSha256,project:{id:project.id,number:project.company_project_id,code:project.custom_project_id,name:project.name},parent:{id:parent.id,number:parent.company_task_id,title:parent.title},taskCount:tasks.length,createCount:tasks.filter(t=>t.operation==='create').length,skipCount:tasks.filter(t=>t.operation==='skip').length,payloadFields:['project_id','parent_task_id','title','description'],tasks};
fs.writeFileSync(path.join(dir,'import-manifest.json'),JSON.stringify(manifest,null,2)+'\n','utf8');
let md='# PPAP Forecast import preview\n\nPrepared20November2026 from the current approved implementation plan.\n\n';
md+='- Project: **P544 — '+project.name+'** (internal ID '+project.id+').\n- Parent: **T24719 — '+parent.title+'** (internal ID '+parent.id+').\n- Operations: **'+manifest.createCount+' create; '+manifest.skipCount+' skip**.\n- Hierarchy: every task is a direct subtask of T24719; no existing task is moved.\n- Description: full configuration assignment, fields/features, existing changes, steps, result checks, role recommendations, predecessors and supplied-input context.\n- Native fields sent: project_id, parent_task_id, title and description only. Recommended roles/dependencies remain descriptive text.\n\n';
md+='| Source task | Operation | Forecast title | Description characters |\n|---|---|---|---:|\n';
for(const t of tasks)md+='| '+t.sourceTaskId+' | '+t.operation+' | '+t.title+' | '+t.descriptionCharacters+' |\n';
md+='\nSource SHA-256: `'+sourceSha256+'`. Existing matches are checked against the exact parent, stable source marker, title and full normalized description before any mutation.\n';
fs.writeFileSync(path.join(dir,'import-preview.md'),md,'utf8');
console.log(JSON.stringify({project:manifest.project,parent:manifest.parent,create:manifest.createCount,skip:manifest.skipCount,descriptionsComplete:true,maximumDescriptionCharacters:Math.max(...tasks.map(t=>t.descriptionCharacters)),payloadFields:manifest.payloadFields,preview:path.join(dir,'import-preview.md')},null,2));
