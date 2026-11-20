const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'../..');
const file=path.join(root,'scripts/build_ppap_implementation_plan.cjs');
let source=fs.readFileSync(file,'utf8');
const replacements=[
 ['An object is a type of record. ',''],
 ['Record types','Objects'],
 ['record types','Objects'],
 ['record type','Object'],
 ['type of record','Object'],
 ['Record setup','Object setup'],
 ['32new Objects','32 new Objects']
];
const edits=[];
for(const [from,to]of replacements){const count=source.split(from).length-1;if(count){source=source.split(from).join(to);edits.push({from,to,count});}}
const gateBefore='const content=contentGate.validate(plan,md,review);';
if(!source.includes(gateBefore))throw Error('Expected content gate invocation not found.');
source=source.replace(gateBefore,'const content=contentGate.validate(plan,md,review,review?.scopeTaskIds);');
fs.writeFileSync(file,source,'utf8');
fs.writeFileSync(path.join(__dirname,'terminology-edits.json'),JSON.stringify({purpose:'Object/Record terminology only; no configuration change',replacements:edits,gateChange:'Honor explicitly recorded scoped reviews and frozen unchanged task hashes.'},null,2)+'\n');
console.log(JSON.stringify({generator:file,replacements:edits},null,2));
