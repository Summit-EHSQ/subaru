const fs=require('fs'),path=require('path');
const src='C:/Users/DaveMcLean/Downloads/APQP & PPAP Manager v.1.0.0-20261117T142224Z-1-001/APQP & PPAP Manager v.1.0.0';
const out='tmp/ppap-baseline-2026-11-17/security-seeds-views';
function walk(v,p=''){if(!v||typeof v!=='object')return; if(!Array.isArray(v))yieldNode(v,p); for(const [k,x]of Object.entries(v))walk(x,p+'/'+k.replace(/~/g,'~0').replace(/\//g,'~1'));}
let current, all=[];
function yieldNode(n,p){if(n.$id){ current.nodes[n.$id]={node:n,pointer:p};}}
for(const file of fs.readdirSync(src).filter(f=>f.endsWith('.ipack'))){current={file,package:JSON.parse(fs.readFileSync(path.join(src,file),'utf8').replace(/^\uFEFF/,'')),nodes:{}}; walk(current.package); let types={};for(const {node}of Object.values(current.nodes)){let type=(node.$type||node.ObjectName||'other').split(',')[0].split('.').pop();types[type]=(types[type]||0)+1;} all.push(current); console.log(JSON.stringify({file,name:current.package.Name,keys:Object.keys(current.package),counts:types}));}
fs.writeFileSync(path.join(out,'indexed-packages.json'),JSON.stringify(all));
