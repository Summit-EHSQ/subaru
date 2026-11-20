// Merge already authored fresh decisions. Unchanged-task hashes stay fixed to the saved pre-edit plan.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'../..'),dir=path.join(root,'docs/phase 2/ppap/solution_specification');
const gate=require('C:/Users/DaveMcLean/.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs');
const scope=JSON.parse(fs.readFileSync(path.join(__dirname,'revision-scope.json'),'utf8'));
if(!scope.terminologyOnly||scope.otherDifferences.length)throw Error('Unexpected configuration differences');
const plan=JSON.parse(fs.readFileSync(path.join(dir,'implementation-plan.json'),'utf8'));
const old=JSON.parse(fs.readFileSync(path.join(__dirname,'before-implementation-content-review.json'),'utf8'));
const parts=['baseline-review','model-review','interfaces-review','root-review'].map(n=>JSON.parse(fs.readFileSync(path.join(__dirname,n+'.json'),'utf8')));
const fresh=parts.flatMap(x=>x.tasks);
if(new Set(fresh.map(x=>x.id)).size!==fresh.length)throw Error('Duplicate fresh review');
if(JSON.stringify(fresh.map(x=>x.id).sort())!==JSON.stringify([...scope.changedTaskIds].sort()))throw Error('Fresh review scope mismatch');
const reviews=plan.tasks.map(t=>{
 if(scope.changedTaskIds.includes(t.id))return fresh.find(r=>r.id===t.id);
 if(gate.hash(t)!==scope.unchangedTaskHashes[t.id])throw Error('Unreviewed task changed: '+t.id);
 return old.tasks.find(r=>r.id===t.id);
});
const review={version:1,date:'2026-11-17',revision:'Object/Record terminology only; no configuration or dependency change.',reviewScope:'Fresh complete-assignment review of16changed tasks;20unchanged tasks retained from the earlier full-plan review and frozen to their original task hashes.',scopeTaskIds:scope.changedTaskIds,unchangedTaskHashes:scope.unchangedTaskHashes,tasks:reviews};
fs.writeFileSync(path.join(dir,'implementation-content-review.json'),JSON.stringify(review,null,2)+'\n','utf8');
console.log(JSON.stringify({freshTasks:fresh.length,freshOperativeUnits:fresh.reduce((n,r)=>n+r.instructions.length,0),frozenTasks:scope.unchangedTaskIds.length}));
