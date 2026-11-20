/* Fresh manual terminology-revision review after full rereading of the five assignments.
 * Code below retains previously authored unit notes, checks scope and calculates hashes only. */
const fs=require('fs');
const path=require('path');
const gate=require('C:/Users/DaveMcLean/.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs');
const repo=path.resolve(__dirname,'../..');
const dir=path.join(repo,'docs/phase 2/ppap/solution_specification');
const current=JSON.parse(fs.readFileSync(path.join(dir,'implementation-plan.json'),'utf8'));
const before=JSON.parse(fs.readFileSync(path.join(__dirname,'before-implementation-plan.json'),'utf8'));
const markdown=fs.readFileSync(path.join(dir,'implementation-plan.md'),'utf8');
const previous=JSON.parse(fs.readFileSync(path.join(repo,'tmp/ppap-implementation-review/interfaces-review.json'),'utf8'));
const scope=JSON.parse(fs.readFileSync(path.join(__dirname,'revision-scope.json'),'utf8'));
const decisions=[
{
id:'IMP-12',
evidenceReview:'Freshly reread all 38 field rows, four build instructions, input/dependency blocks and rendered task with references hidden. The before/current leaf comparison changes only the IMP-01 predecessor description and Candidate Manufacturing Facilities native-map wording. Source provenance, accepted locks, unknown classifications and released-specification requirements retain their earlier evidence and supplied-input limits.',
languageReview:'Objects now names the configuration output from IMP-01, while individual saved source records retain record wording. The M:N row now says native link storage without a new Object, which clearly distinguishes platform association storage from an additional user-configured Object. No field, action or permission name was replaced.',
meaningReview:'Rechecked the native Supplier Facility M:N link, inverse disabled, no association attributes, optional contextual selection and Accepted At freeze. Text/date lengths, nullable source flags, fixed fourteen-day review, reason clearing and released-version conditions remain unchanged. Previously authored unit notes were retained only after this complete reread.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true}
},
{
id:'IMP-18',
evidenceReview:'Freshly reread the complete current JSON and rendered Draft-creation assignment against its before snapshot. Its sole task-level revision is IMP-01 provides the new Objects; creation steps, native methods, source/role dependencies and three task-local supplied inputs are identical.',
languageReview:'The predecessor paragraph now consistently distinguishes Objects supplied earlier from the Draft record created by this assignment. The launch result, field names, overall-date alternatives, supplier secrecy and failure outcomes remain clear in the complete rendered instructions.',
meaningReview:'Rechecked target marker ordering before legacy generation, separate Draft workflow, required APQP Settings/Location, role-selected Project Owner, accepted source-part copying and one new-model context. No field/default/security/retry rule or prerequisite edge changed; the unchanged unit notes still describe these actual operations.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true}
},
{
id:'IMP-24',
evidenceReview:'Freshly reread all eight result-link rows, three instructions, result checks and waiting/dependency blocks in current JSON and Markdown. The only before/current task change is the IMP-01 Objects predecessor wording. Inspection target identifiers and native result/artifact methods remain supplied inputs, with no new adjacent-application work.',
languageReview:'Objects correctly describes the new configuration made available by IMP-01; result records, native audit and saved evidence copies retain appropriate record language. Exact Engineer Review and Retain Evidence names remain intact, and the artifact alternative is still explained in ordinary business terms.',
meaningReview:'Verified unchanged one-element/result references, 255-character version texts, FALSE acceptance default, engineer-only acceptance, conditional rejection explanation and snapshot-specific frozen links. Required results alone gate approval; external mutable result data still requires a controlled artifact. All retained instruction notes were reread against those exact rows.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true}
},
{
id:'IMP-25',
evidenceReview:'Freshly reread the four pilot association rows and three launch instructions with source references hidden, then compared current JSON with the before snapshot. Only the IMP-01 predecessor sentence changes record types to Objects. Supplied pilot operation/token and native replay/save methods remain narrow blockers.',
languageReview:'The Objects predecessor term is consistent with configuration setup, while program links and individual returned pilot records remain described as records. The complete assignment still makes NEW_MODEL, same-model Build Event and no automatic pilot creation understandable without following a source link.',
meaningReview:'Confirmed unchanged required PPAP/Build Event/Pilot Program references, PPAP inverse navigation, type/model/part checks and one program link per explicit successful launch. Running/process types remain denied and no shipment/measurement build enters scope. Retained unit notes correspond to the unchanged settings and actions.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true}
},
{
id:'IMP-32',
evidenceReview:'Freshly reread the whole security assignment, its named package-flag modification, seven instructions and complete supplied-input/predecessor blocks. Before/current comparison shows only the IMP-01 Objects wording changed. The package audit/security flags and unverified inherited grants are still stated accurately; native enforcement/principals remain inputs.',
languageReview:'Objects now refers to earlier configured types without replacing record-level access terminology. The task retains explicit supplier/internal roles, pre-PPAP source/review permissions and direct-file access wording. Its scope still describes business access rather than setup of platform processing permissions.',
meaningReview:'Rechecked unchanged full authorization intersection, Draft secrecy, record/file/actor restrictions, independent pre-PPAP source security, issued/closed locks and visibility-only handover. No role, permission, scope, dependency or owner changed. Prior per-instruction notes remain valid after the complete current reread, rather than being renewed from a word substitution alone.',
checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true}
}
];
function leaves(a,b,p=''){
 if(JSON.stringify(a)===JSON.stringify(b))return [];
 if(a&&b&&typeof a==='object'&&typeof b==='object')return [...new Set([...Object.keys(a),...Object.keys(b)])].flatMap(k=>leaves(a[k],b[k],p+'.'+k));
 return [{path:p,before:a,after:b}];
}
const reviewed=[];
for(const d of decisions){
 const t=current.tasks.find(x=>x.id===d.id),old=before.tasks.find(x=>x.id===d.id),prior=previous.tasks.find(x=>x.id===d.id);
 const differences=leaves(old,t);
 const expected=['.predecessorOutputs.0.description',...(d.id==='IMP-12'?['.configurationRows.9.1']:[])];
 if(JSON.stringify(differences.map(x=>x.path).sort())!==JSON.stringify(expected.sort()))throw Error('Unexpected task edits require rereview '+d.id);
 if(JSON.stringify(gate.units(t).map(x=>x.path).sort())!==JSON.stringify(prior.instructions.map(x=>x.path).sort()))throw Error('Instruction scope changed '+d.id);
 const instructions=JSON.parse(JSON.stringify(prior.instructions));
 if(d.id==='IMP-12'){
  const row=instructions.find(x=>x.path==='configurationRows.9');
  row.requiredChange='Configure contextual candidate facilities using the native Supplier Facility M:N link without creating an additional Object.';
  row.mechanism='Engineering Release.Candidate Manufacturing Facilities native M:N storage; inverse disabled and accepted-context lock.';
 }
 reviewed.push({...d,taskHash:gate.hash(t),renderedTaskHash:gate.renderedHash(markdown,d.id),instructions});
}
const unchanged=scope.unchangedTaskIds.map(id=>{
 const t=current.tasks.find(x=>x.id===id),old=before.tasks.find(x=>x.id===id);
 if(!t||JSON.stringify(t)!==JSON.stringify(old)||gate.hash(old)!==scope.unchangedTaskHashes[id])throw Error('Frozen task changed '+id);
 return id;
});
const oldOwn=previous.tasks.filter(x=>!decisions.some(d=>d.id===x.id)).map(x=>x.id);
for(const id of oldOwn){
 const a=before.tasks.find(t=>t.id===id),b=current.tasks.find(t=>t.id===id);
 if(JSON.stringify(a)!==JSON.stringify(b))throw Error('Previously reviewed unassigned task changed '+id);
}
fs.writeFileSync(path.join(__dirname,'interfaces-review.json'),JSON.stringify({version:1,tasks:reviewed},null,2)+'\n');
console.log(JSON.stringify({freshlyReviewed:reviewed.map(x=>x.id),instructionUnits:reviewed.reduce((s,x)=>s+x.instructions.length,0),frozenTaskCount:unchanged.length,previousOwnUnchanged:oldOwn.length,findings:[]},null,2));
