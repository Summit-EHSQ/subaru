// Combines existing manually authored decisions. No checks, reasons or hashes are generated or renewed.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'../..');
const dir=path.join(root,'docs/phase 2/ppap/solution_specification');
const plan=JSON.parse(fs.readFileSync(path.join(dir,'implementation-plan.json'),'utf8'));
const parts=['baseline-review','model-review','interfaces-review','root-review'].map(n=>JSON.parse(fs.readFileSync(path.join(__dirname,n+'.json'),'utf8')));
const entries=parts.flatMap(p=>p.tasks);
if(new Set(entries.map(x=>x.id)).size!==entries.length)throw Error('Duplicate manual review');
const reviews=plan.tasks.map(t=>{const r=entries.find(x=>x.id===t.id);if(!r)throw Error('Missing manual review '+t.id);return r;});
if(entries.length!==reviews.length)throw Error('Unknown manual review');
const review={version:1,date:'2026-11-17',reviewScope:'All36 active tasks; full new-plan review, with579 individually authored operative-instruction notes. No tenant configuration or runtime verification is claimed.',tasks:reviews};
fs.writeFileSync(path.join(dir,'implementation-content-review.json'),JSON.stringify(review,null,2)+'\n','utf8');
console.log(JSON.stringify({tasks:reviews.length,instructions:reviews.reduce((n,r)=>n+r.instructions.length,0)}));
