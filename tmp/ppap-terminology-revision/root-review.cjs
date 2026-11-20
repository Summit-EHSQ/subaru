// Fresh task-specific editorial decisions after rereading the complete affected assignments.
// Existing instruction notes are retained only after checking each against the unchanged operative text.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'../..'),dir=path.join(root,'docs/phase 2/ppap/solution_specification');
const gate=require('C:/Users/DaveMcLean/.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs');
const plan=JSON.parse(fs.readFileSync(path.join(dir,'implementation-plan.json'),'utf8'));
const oldPlan=JSON.parse(fs.readFileSync(path.join(__dirname,'before-implementation-plan.json'),'utf8'));
const oldReview=JSON.parse(fs.readFileSync(path.join(__dirname,'before-implementation-content-review.json'),'utf8'));
const markdown=fs.readFileSync(path.join(dir,'implementation-plan.md'),'utf8');
const decisions={
 'IMP-02':{
 evidenceReview:'Reread the complete current list/policy task and its rendered section with references hidden, including all54 unchanged configuration rows. Compared it with the saved pre-revision task: only the new-Object predecessor description and catalogue-creation step terminology changed. The seven Object definitions and eleven reference Records still have their original fields/values.',
 languageReview:'The task now calls a configured list an Object while retaining Record for its saved values and preserving actual names PPAP Type, PPAP Answer Type and Operating Policy. Title, source-content waiting explanation, field controls, role reason and result checks remain readable to technical readers without the former proxy terminology.',
 meaningReview:'Rechecked100/255 text limits, Float sort, Boolean defaults,3/7/7/5/5 day defaults, fixed14, single active complete policy, inactive-history behavior and narrow input descriptions. No field setting, initial value, selection rule, timing, implementer/reviewer or prerequisite ID changed.',
 checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true}
 },
 'IMP-05':{
 evidenceReview:'Reread current Element/Answer task, all38 operative field/list rows and its rendered instructions with references hidden. Compared the pre-revision JSON: only IMP-01 predecessor output now says Objects. Every assignment, date, typed answer, linked-list and role/actor input rule is unchanged, with generation and consequential writes still owned elsewhere.',
 languageReview:'Confirmed that Object metadata and Record-instance work are distinguishable without explaining Object as a record type. The existing SIA PPAP Engineer role wording, exact Engineer Review stage/field names and complete answer conditions remain intact. No scope or acceptance sentence was shortened during the terminology revision.',
 meaningReview:'Checked required/protected/exclusion behavior, one Element plus exact Question Version answer, M:1/inverse targets, typed clearing, optional-question visibility and FALSE/0 handling. Frozen baselines/first-submission facts and role/person references retain their original edit restrictions. Task IDs, dependencies, roles, inputs and ownership match the saved baseline.',
 checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true}
 },
 'IMP-06':{
 evidenceReview:'Reread the complete current saved-evidence assignment and all21 field/list rows, and compared its rendered section and JSON with the pre-revision version. Its only change is the predecessor output calling the new definitions Objects. Native file use, source lineage and typed saved-answer contents remain the original proposed configuration.',
 languageReview:'The current text keeps PPAP Evidence Snapshot and PPAP Evidence Answer as exact Object names, while submitted records and files remain individual evidence. The ordinary controls, local supplier-actor/file inputs and result checks remain self-contained. No substitution or ordinary-language rewrite altered their technical labels.',
 meaningReview:'Reconciled integer sequence, exact source question versions, native files, mutually exclusive one-time decision stamps, current versus historic visibility, typed copy mappings and read-only navigations. The six unchanged definitions elsewhere, operation ownership, requiredness, capacities, timezone settings and dependency/role/input IDs are untouched.',
 checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true}
 },
 'IMP-29':{
 evidenceReview:'Reread every discussion field/list row and all four posting steps in current JSON/rendered text with references hidden. Compared the old task: the predecessor output says Objects and the native M:N recipient row now says no new Object. The same native link storage is prescribed; no new record structure, permission or audience was introduced.',
 languageReview:'The native recipient description now uses Object for an additional configuration entity, while the existing individual posts/threads remain Records in context. Exact Notification Recipients, Internal Only?, Thread and Reply To names remain unchanged; audience, posting and closed-record conditions remain explicit.',
 meaningReview:'Rechecked Subject255, Body8000, forced supplierFALSE audience, internalTRUE default, same-thread replies, eligible native M:N recipients, actual posted actor/time and attachment freezing. Closure still stops all discussion and no recipient grants access. All numeric values, roles, inputs, dependencies and ownership are identical to the pre-revision task.',
 checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true}
 }
};
const reviews=[];
for(const [id,d]of Object.entries(decisions)){
 const current=plan.tasks.find(t=>t.id===id),before=oldPlan.tasks.find(t=>t.id===id),previous=oldReview.tasks.find(t=>t.id===id);
 const checkedUnits=gate.units(current),previousUnits=gate.units(before);
 if(checkedUnits.length!==previousUnits.length)throw Error('Unexpected unit count change '+id);
 for(let i=0;i<checkedUnits.length;i++){
  const a=checkedUnits[i],b=previousUnits[i];
  if(a.path!==b.path)throw Error('Unexpected instruction move '+id);
  const expected=b.text.replaceAll('record types','Objects').replaceAll('record type','Object');
  if(a.text!==expected)throw Error('Unexpected operative change '+id+' '+a.path);
 }
 reviews.push({...previous,...d,taskHash:gate.hash(current),renderedTaskHash:gate.renderedHash(markdown,id)});
}
fs.writeFileSync(path.join(__dirname,'root-review.json'),JSON.stringify({version:1,tasks:reviews},null,2)+'\n','utf8');
console.log(JSON.stringify({reviewed:reviews.map(x=>x.id),operativeUnits:reviews.reduce((n,r)=>n+r.instructions.length,0)}));
