const fs=require('node:fs');
const path=require('node:path');
const gate=require('C:/Users/DaveMcLean/.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs');
const root=path.resolve(__dirname,'../..');
const plan=JSON.parse(fs.readFileSync(path.join(root,'docs/phase 2/ppap/solution_specification/implementation-plan.json'),'utf8'));
const before=JSON.parse(fs.readFileSync(path.join(__dirname,'before-implementation-plan.json'),'utf8'));
const previousReview=JSON.parse(fs.readFileSync(path.join(__dirname,'before-implementation-content-review.json'),'utf8'));
const markdown=fs.readFileSync(path.join(root,'docs/phase 2/ppap/solution_specification/implementation-plan.md'),'utf8');

// Fresh manual decisions following a complete reread of these three assignments,
// their unchanged field/step content and the actual predecessor-text comparison.
const authored={
 'IMP-07':{
  evidenceReview:'Reread the complete current library assignment, all 50 field/list rows, four build steps, criteria, inputs and rendered metadata with traceability hidden. Compared it with the archived assignment: only the IMP-01 predecessor description changed from new record types to new Objects. All authoring/version/question fields, source-copy mappings, Code scopes, attachment rules and SIA/shared-role input limits are unchanged. The requested client library is still absent and no seed content has been inferred.',
  languageReview:'The revised predecessor now correctly names configured Objects supplied by IMP-01; the target-record marker still describes the flag on individual PPAP Records. Reading the full requirement/question task remains clear about editable authoring Records versus fixed published Records. Exact PPAP Answer Type, Work Pattern, field data types and configured field names are preserved. There is no Object-to-record-type proxy in the revised assignment.',
  meaningReview:'Rechecked the 100/255/16000/1000/2000/8000 text limits, required and optional fields, activation filters, SUPPLIER/INTERNAL visibility forcing, protected requirements, file counts/extensions, scoped Codes, stored publication copies, actor/time fields and all three inverse lists. The same 50 configuration rows and four steps retain their original ownership. Prerequisite IDs, supplied-input IDs/descriptions, implementer, separate reviewer, criteria and the library coverage entries match the archived version exactly.'
 },
 'IMP-09':{
  evidenceReview:'Reread all 38 current template/matrix field/list rows, three steps, acceptance criteria, readiness and rendered task metadata without relying on references. Compared the full task to its archived version: the only changed property is the IMP-01 predecessor explanation, which now says new Objects. The stable Requirement reference, exact Requirement Version resolution, source-row lineage, complete publication mirrors and pending controlled SIA matrix remain intact.',
  languageReview:'The Objects wording accurately identifies the configuration entities created earlier and avoids renaming them as record types. The assignment still describes administrator-created template and matrix Records, independent classification switches and exact calendar offsets in understandable terms. Actual PPAP Type, Template Version and Requirement Version names, technical field types and relationship terms remain unchanged.',
  meaningReview:'Rechecked required Type/Code/Name/procedure provenance, author versus copied Code uniqueness, eight separate row properties, OR classification applicability, combined protected mandates, negative integer calendar offsets, finite sort, author-to-version mappings and three navigation lists. All 38 rows, three instructions, two criteria, IDs, roles, predecessor edges, local matrix input and task-owned coverage entries are identical to the archived task apart from the predecessor noun correction.'
 },
 'IMP-11':{
  evidenceReview:'Reread the full current model schedule/event assignment, its 21 field/list rows, three build steps, criteria, local phase/stage input and rendered task metadata. The archived/current comparison shows only the IMP-01 predecessor description changed to new Objects. Model/date/event entities, the three PPAP scheduling controls and their source-model settings have not been altered by the terminology revision.',
  languageReview:'The predecessor now correctly supplies configured Objects, while references to a model Record, linked PPAP Records and record grants retain their instance meanings. The complete task still explains the model lead schedule and separate physical build dates plainly. PPAP Model Change, PPAP Model Date, PPAP Build Event, PPAP Type and all actual field names remain exact; no plain-language proxy replaces Object.',
  meaningReview:'Rechecked one Model Change+Phase+Manufacturing Stage cell, required/active selectors, used-key locks, inclusive Start/End dates with same-day equality, NEW_MODEL model requiredness, conditional stage clearing, false connection with no model, warned Draft clearing and issued-context preservation. The 21 rows, three steps, two criteria, field coverage owners, role assignments, input and dependency IDs are unchanged. Cascading date operations remain owned by IMP-16 rather than being reassigned here.'
 }
};

const tasks=[];
for(const [id,notes] of Object.entries(authored)){
 const oldTask=before.tasks.find(t=>t.id===id),task=plan.tasks.find(t=>t.id===id);
 const prior=previousReview.tasks.find(t=>t.id===id);
 if(!oldTask||!task||!prior)throw Error('Missing reviewed task '+id);
 if(prior.taskHash!==gate.hash(oldTask))throw Error('Archived review is not bound to archived task '+id);
 const oldRest={...oldTask},newRest={...task};delete oldRest.predecessorOutputs;delete newRest.predecessorOutputs;
 if(JSON.stringify(oldRest)!==JSON.stringify(newRest))throw Error('Additional task content changed: '+id);
 if(JSON.stringify(gate.units(oldTask))!==JSON.stringify(gate.units(task)))throw Error('An operative instruction changed: '+id);
 const oldCoverage=before.coverage.filter(c=>c.owner===id),newCoverage=plan.coverage.filter(c=>c.owner===id);
 if(JSON.stringify(oldCoverage)!==JSON.stringify(newCoverage))throw Error('Task coverage changed: '+id);
 tasks.push({id,taskHash:gate.hash(task),renderedTaskHash:gate.renderedHash(markdown,id),
  ...notes,
  checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
  instructions:prior.instructions});
}
const review={version:1,tasks};
fs.writeFileSync(path.join(__dirname,'model-review.json'),JSON.stringify(review,null,2)+'\n');
const ids=tasks.map(t=>t.id);
const result=gate.validate({...plan,tasks:plan.tasks.filter(t=>ids.includes(t.id))},markdown,review);
result.unreviewedTaskIds=plan.tasks.filter(t=>!ids.includes(t.id)).map(t=>t.id);
result.limits='Manual terminology/meaning review and scoped content validation for IMP-07, IMP-09 and IMP-11 only; remaining tasks are outside this review part, not tenant-verified.';
fs.writeFileSync(path.join(__dirname,'model-review-validation.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({passed:result.passed,tasks:tasks.length,units:tasks.reduce((n,t)=>n+t.instructions.length,0),errors:result.errors},null,2));
if(!result.passed)process.exitCode=1;
