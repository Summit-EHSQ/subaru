const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'..'),out=path.join(root,'tmp/ppap-terminology-revision');
const planDir=path.join(root,'docs/phase 2/ppap/solution_specification');
const skillDir='C:/Users/DaveMcLean/.codex/skills/intelex-implementation-planner';
fs.mkdirSync(out,{recursive:true});
function keep(source,name){const target=path.join(out,name);if(fs.existsSync(target))throw Error('Existing revision baseline: '+target);fs.copyFileSync(source,target);}
for(const file of ['implementation-plan.json','implementation-plan.md','implementation-content-review.json','implementation-plan-validation.json','implementation-content-validation.json'])keep(path.join(planDir,file),'before-'+file);
keep(path.join(root,'scripts/build_ppap_implementation_plan.cjs'),'before-build_ppap_implementation_plan.cjs');
const specs=[
 {file:'SKILL.md',name:'SKILL.md',edits:[
  ['- **Business-friendly language throughout:** Explain what users will be able to do, what information is needed and what happens when a condition changes. Write titles, scopes, field rows, instructions, role reasons, result checks, readiness notes and dependency/coverage explanations in this voice. Include exact technical settings after their business meaning; never simplify away a rule.',
   '- **Business-friendly language throughout:** Explain what users will be able to do, what information is needed and what happens when a condition changes. Write titles, scopes, field rows, instructions, role reasons, result checks, readiness notes and dependency/coverage explanations in this voice. Include exact technical settings after their business meaning; never simplify away a rule.\n- **Established Intelex terminology:** Assume readers understand **Object** and **Record**. Retain Object for a configured entity and Record for an individual instance. Do not replace Object with "record type" or "type of record" to simplify the prose. Preserve exact configured names and technical identifiers.']
 ]},
 {file:'references/business-language-contract.md',name:'business-language-contract.md',edits:[
  ['Write for business stakeholders and Intelex configuration consultants who do not need software-engineering vocabulary to understand the work.',
   'Write for business stakeholders and Intelex configuration consultants who understand the established Intelex terms **Object** and **Record**. Use Object for a configured entity and Record for an individual instance; do not substitute "record type" or "type of record" for Object. Preserve exact configured names and technical identifiers.'],
  ['3. Explain a necessary technical term at its first meaningful use. For example, an object is a type of record; a read-only related-record list shows links already stored elsewhere. Keep an actual Action Handler or workflow action name when that is the configured mechanism.',
   '3. Explain an unfamiliar technical term at its first meaningful use only when the explanation helps the intended reader. Retain established Intelex terminology, including Object and Record, without replacing it with plain-language proxies. For example, a read-only related-record list shows links already stored elsewhere. Keep an actual Action Handler or workflow action name when that is the configured mechanism.'],
  ['| Schema | Record and field setup, or file columns and formatting, depending on context. |',
   '| Schema | Object and field configuration, or file columns and formatting, depending on context. |'],
  ['- for relationships, the selected record type, allowed number of references, declaring link and whether a reverse list is enabled;',
   '- for relationships, the target Object, allowed number of linked Records, declaring relationship field and whether a reverse list is enabled;']
 ]}
];
const manifest=[];
for(const spec of specs){const source=path.join(skillDir,spec.file),bytes=fs.readFileSync(source);keep(source,'before-'+spec.name);let content=bytes.toString('utf8');const nl=content.includes('\r\n')?'\r\n':'\n';
 for(const [old,replacement]of spec.edits){if(content.split(old).length!==2)throw Error('Expected exactly one anchor in '+source+': '+old.slice(0,60));content=content.replace(old,replacement.replace(/\n/g,nl));}
 const staged=path.join(out,spec.name+'.proposed');fs.writeFileSync(staged,content,'utf8');manifest.push({target:source,staged,expectedBeforeSha256:crypto.createHash('sha256').update(bytes).digest('hex'),expectedAfterSha256:crypto.createHash('sha256').update(content).digest('hex'),changes:spec.edits.length});
}
fs.writeFileSync(path.join(out,'skill-update-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({revisionDirectory:out,skillChanges:manifest.map(m=>({target:m.target,changes:m.changes}))},null,2));
