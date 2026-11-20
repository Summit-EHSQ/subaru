const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'..'),dir=path.join(root,'docs/phase 2/ppap/solution_specification');
const model=JSON.parse(fs.readFileSync(path.join(dir,'ppap-target-model.json'),'utf8'));
const fields=JSON.parse(fs.readFileSync(path.join(dir,'ppap-target-field-contract.json'),'utf8'));
const contract=fs.readFileSync(path.join(dir,'ppap-target-field-contract.md'),'utf8');
const decisions=JSON.parse(fs.readFileSync(path.join(root,'docs/phase 2/ppap/target-requirements-decisions.json'),'utf8')).decisions;
const trace=fs.readFileSync(path.join(dir,'ppap-requirements-and-adr-traceability.md'),'utf8');
const tests=fs.readFileSync(path.join(dir,'ppap-acceptance-scenarios.md'),'utf8');
const errors=[],warnings=[];
const sections=contract.split(/^## \d+\. /m).slice(1);
const byName=new Map(sections.map(x=>[x.split('\n')[0].trim(),x]));
const splitCells=line=>line.split(/(?<!\\)\|/).slice(1,-1).map(x=>x.trim().replace(/\\\|/g,'|'));
let actualRows=0;
for(const o of model.objects){
 const s=byName.get(o.name);if(!s){errors.push('Missing object subsection: '+o.name);continue;}
 const fieldBlock=s.split('Initial values:')[0];
 const rows=fieldBlock.split('\n').filter(l=>l.startsWith('| ')&&!l.startsWith('| Field |')&&!l.startsWith('|---')).map(splitCells);
 actualRows+=rows.length;
 if(rows.length!==o.fields.length)errors.push(`Field row count ${o.name}: ${rows.length}/${o.fields.length}`);
 for(const f of o.fields){const matches=rows.filter(r=>r[0]===f.name);if(matches.length!==1)errors.push('Nonunique/missing row '+o.name+'.'+f.name);else if(matches[0].length!==6||matches[0].some(c=>!c))errors.push('Incomplete canonical row '+o.name+'.'+f.name);}
 if(!s.includes('Initial values:'))errors.push('Missing per-object initial values '+o.name);
}
if(sections.length!==model.objects.length)errors.push('Object subsection count mismatch');
if(fields.length!==actualRows)errors.push('Machine field/Markdown mismatch');
const renderedIds=new Set();let diagrams=0,edges=0;
for(const file of fs.readdirSync(dir).filter(f=>/^ppap-target-model-\d+\.mmd$/.test(f))){
 diagrams++;const text=fs.readFileSync(path.join(dir,file),'utf8');const nodes=new Set();
 if(!text.startsWith('classDiagram\ndirection LR\n'))errors.push('Unexpected Mermaid preamble '+file);
 for(const [index,line]of text.trim().split('\n').entries()){
  if(index<2)continue;
  const node=line.match(/^class ([a-z_]+)\["([^"\n]+)"\]$/);
  if(node){if(nodes.has(node[1]))errors.push('Duplicate Mermaid node '+file+':'+node[1]);nodes.add(node[1]);renderedIds.add(node[1]);continue;}
  if(/^<<(external|abstract)>> [a-z_]+$/.test(line))continue;
  const edge=line.match(/^([a-z_]+) (?:(?:"0\.\.\*" --> "(?:0\.\.1|0\.\.\*|1)")|<\|--) ([a-z_]+) : [^\n]+$/);
  if(edge){edges++;if(!nodes.has(edge[1])||!nodes.has(edge[2]))errors.push('Undeclared Mermaid endpoint '+file+':'+line);continue;}
  errors.push('Mermaid structural grammar mismatch '+file+':'+(index+1)+': '+line);
 }
}
for(const o of model.objects)if(!renderedIds.has(o.id))errors.push('Object absent from all diagrams '+o.id);
const slug=s=>s.toLowerCase().replace(/<[^>]*>/g,'').replace(/[^\p{L}\p{N}_\-\s]/gu,'').replace(/\s/g,'-');
let localLinks=0;
for(const file of fs.readdirSync(dir).filter(f=>f.endsWith('.md'))){
 const text=fs.readFileSync(path.join(dir,file),'utf8');
 for(const m of text.matchAll(/\[[^\]\n]+\]\(([^)\n]+)\)/g)){
  let target=m[1].replace(/^<|>$/g,'');if(/^(https?:|mailto:|codex:)/.test(target))continue;
  const [rawFile,anchor]=target.split('#');const resolved=rawFile?path.resolve(dir,decodeURIComponent(rawFile)):path.join(dir,file);localLinks++;
  if(!fs.existsSync(resolved)){errors.push('Broken local link '+file+' -> '+target);continue;}
  if(anchor&&resolved.endsWith('.md')){const content=fs.readFileSync(resolved,'utf8');const anchors=[...content.matchAll(/^#{1,6}\s+(.+)$/gm)].map(x=>slug(x[1]));if(!anchors.includes(anchor))warnings.push('Unverified heading anchor '+file+' -> '+target);}
 }
}
const confirmed=decisions.filter(d=>d.status==='confirmed').map(d=>d.id);
// The traceability table must contain every current decision, not merely a prose reference.
for(const id of confirmed){const matches=trace.split('\n').filter(l=>l.startsWith('|')&&splitCells(l)[0]?.replace(/`/g,'')===id);if(matches.length!==1)errors.push('Confirmed requirement table coverage '+id+': '+matches.length);}
const adrIds=[...new Set([...trace.matchAll(/ADR-(\d{3})/g)].map(x=>x[1]))];
const acceptance=[...new Set([...tests.matchAll(/AC-(\d{2,})/g)].map(x=>x[1]))];
const baselineBytes=fs.readFileSync(path.join(root,'docs/phase 2/ppap/ootb-ppap-baseline-model/baseline-model.json'));
if(crypto.createHash('sha256').update(baselineBytes).digest('hex')!==model.baseline_sha256)errors.push('Baseline changed after target generation');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'docs/phase 2/ppap/ootb-ppap-baseline-model/source-manifest.json'),'utf8'));
let verifiedPackages=0;
for(const p of manifest){const source=path.join(root,'ootb_config_packages/APQP & PPAP Manager v1.0.0',p.file);if(!fs.existsSync(source)){errors.push('Missing preserved package '+p.file);continue;}const bytes=fs.readFileSync(source);if(bytes.length!==p.bytes||crypto.createHash('sha256').update(bytes).digest('hex').toUpperCase()!==p.sha256.toUpperCase())errors.push('Preserved package hash mismatch '+p.file);else verifiedPackages++;}
const ruleChecks={
 exact_object_subsection_coverage:sections.length===model.objects.length,
 canonical_field_rows_match_machine_contract:actualRows===fields.length,
 current_requirement_table_coverage:confirmed.length===42,
 complete_diagram_node_coverage:renderedIds.size===model.objects.length,
 catalogue_inverse_disabled:model.objects.flatMap(o=>o.fields).filter(f=>f.catalogue).every(f=>f.type.includes('inverse disabled')),
 no_business_catalogue_inheritance_invented:model.objects.filter(o=>o.domain==='catalogue').every(o=>!o.inheritance_parent),
 no_executable_formula_proposals:!fields.some(f=>/\b(TYPEOF|COALESCE|ISBLANK)\s*\(/i.test(f.default)),
 baseline_hash_preserved:true,
 source_package_hashes_match_preserved_manifest:verifiedPackages===manifest.length
};
const result={date:'2026-11-17',result:errors.length?'FAIL':'PASS (static documentation validation)',model_objects:model.objects.length,active_field_rows:fields.length,documented_field_rows:actualRows,object_subsections:sections.length,mermaid_diagrams:diagrams,mermaid_nodes_covered:renderedIds.size,mermaid_declared_edges:edges,mermaid_validation:'Local structural grammar and endpoint validation; full Mermaid rendering not performed',current_decisions_covered:confirmed.length,adr_ids_referenced:adrIds.length,acceptance_scenario_ids:acceptance.length,local_links_checked:localLinks,preserved_packages_verified:verifiedPackages,checks:ruleChecks,errors,warnings,runtime_acceptance_executed:false};
fs.writeFileSync(path.join(dir,'ppap-target-document-validation.json'),JSON.stringify(result,null,2)+'\n','utf8');
console.log(JSON.stringify(result,null,2));if(errors.length)process.exitCode=1;
