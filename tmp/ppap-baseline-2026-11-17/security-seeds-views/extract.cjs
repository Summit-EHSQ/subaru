const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const out = __dirname;
const packages = JSON.parse(fs.readFileSync(path.join(out, 'indexed-packages.json')));
const short = n => (n.$type || '').split(',')[0].split('.').pop();
const label = n => n?.FieldData?.Name || n?.FieldData?.Caption || n?.FieldData?.Title || n?.FieldData?.ProjectTempName || n?.Caption || n?.RecordId || 'Unresolved';
const val = v => v === undefined ? 'Not exported' : v === null ? 'NULL' : typeof v === 'object' ? JSON.stringify(v) : String(v);
const cell = v => val(v).replace(/\|/g, '\\|').replace(/[\r\n]+/g, ' ');
const csv = rows => rows.length ? Object.keys(rows[0]).join(',') + '\n' + rows.map(r => Object.values(r).map(v => '"' + val(v).replace(/"/g, '""') + '"').join(',')).join('\n') + '\n' : '';
const table = (heads, rows) => '| ' + heads.join(' | ') + ' |\n|' + heads.map(()=>'---').join('|') + '|\n' + rows.map(r=>'| '+r.map(cell).join(' | ')+' |').join('\n')+'\n';
const global = new Map();
for(const p of packages) for(const {node:n,pointer} of Object.values(p.nodes)) if(n.RecordId) {
  const key = n.ObjectName + ':' + n.RecordId;
  if(!global.has(key)) global.set(key, []);
  global.get(key).push({package:p.file,node:n,pointer});
}
const resolveId = id => {
  for(const p of packages) for(const {node:n} of Object.values(p.nodes)) if(n.RecordId === id && !['SecurityPackageItemData'].includes(short(n))) return label(n);
  return `Unresolved ${id}`;
};
const metadata = {groups:[],memberships:[],permissions:[],security:[],views:[],seeds:[],templateTasks:[],templateSummaries:[],lookupValues:[],settings:[],conflicts:[]};
for(const p of packages) {
  const entries = Object.values(p.nodes), ns = entries.map(x=>x.node);
  const edges = ns.filter(n=>n.Start?.$ref && n.End?.$ref && n.Source);
  const outgoing = id => edges.filter(e=>e.Start.$ref===id);
  for(const {node:n,pointer} of entries) {
    const data = n.FieldData || {};
    if(['SysUserGroupEntity','SysSecurityGroupEntity','SysSystemGroupEntity'].includes(n.ObjectName)) metadata.groups.push({package:p.file,object:n.ObjectName,id:n.RecordId,name:label(n),description:data.Description,source:pointer});
    if(['SecPermissionEntity','SecSystemPermissionMaskEntity'].includes(n.ObjectName)) metadata.permissions.push({package:p.file,id:n.RecordId,object:n.ObjectName,name:data.Name||data.Caption,description:data.Description,source:pointer});
    if(short(n)==='SecurityPackageItemData') {
      const grants = (n.Permissions||[]).map(a=>({subject_id:a.SubjectId,subject:resolveId(a.SubjectId),apply_to:a.ApplyTo,apply_to_object_id:a.ApplyToObjectId,allow_ids:a.Allow||[],allow:(a.Allow||[]).map(resolveId),deny_ids:Array.isArray(a.Deny)?a.Deny:a.Deny?.$values||[],deny:(Array.isArray(a.Deny)?a.Deny:a.Deny?.$values||[]).map(resolveId)}));
      const recordEdge=outgoing(n.$id).find(e=>e.Source==='Record');
      const record=p.nodes[recordEdge?.End?.$ref]?.node;
      metadata.security.push({package:p.file,id:n.RecordId,caption:n.Caption,secured_record_id:record?.RecordId,secured_record:label(record),inherit_permissions:n.InheritPermissions,grants,source:pointer});
    }
    if(short(n)==='SysConfigurableViewPackageItemData') {
      const content=data.Content||'';
      const tags=content.match(/<ix:(?:Field|Column|GridSection|StageContainer|MassUpdateAction|MailMergeTemplates)\b[^>]*>/g)||[];
      const fields=[...new Set([...content.matchAll(/<ix:Field\b[^>]*\bFor="([^"]+)"/g)].map(m=>m[1]))];
      metadata.views.push({package:p.file,id:n.RecordId,name:data.Name,type:data.Type,is_public:data.IsPublic,mobile_parsed:data.IsParsedForMobile,if_exists:n.IfExists,if_not_exists:n.IfNotExists,content_sha256:crypto.createHash('sha256').update(content).digest('hex'),content_length:content.length,fields,configuration_tags:tags,source:pointer});
    }
    if(short(n)==='BusinessObjectPackageItemData') {
      const links=outgoing(n.$id).filter(e=>!['Security','Objects','Record'].includes(e.Source)).map(e=>({field:e.Source,type:e.Type,target_object:p.nodes[e.End.$ref]?.node.ObjectName,target_id:p.nodes[e.End.$ref]?.node.RecordId,target:label(p.nodes[e.End.$ref]?.node),source_id:e.$id}));
      metadata.seeds.push({package:p.file,object:n.ObjectName,id:n.RecordId,caption:n.Caption,values:Object.fromEntries(Object.entries(data).filter(([k])=>k!=='$id')),relationships:links,if_exists:n.IfExists,if_not_exists:n.IfNotExists,source:pointer});
      if(/^APQP_AbstractTextLo/.test(n.ObjectName)) metadata.lookupValues.push({package:p.file,object:n.ObjectName,id:n.RecordId,value:data.Value,caption:data.Caption,index:data.Index,deleted:data.Deleted,source:pointer});
      if(n.ObjectName==='APQP_SettingsObject') metadata.settings.push({package:p.file,id:n.RecordId,values:Object.fromEntries(Object.entries(data).filter(([k])=>!['$id','CustomCSS'].includes(k))),custom_css_length:data.CustomCSS?.length,source:pointer});
      if(n.ObjectName==='ProjectFwk_PFWKTemplateObject') {
        const type=links.find(l=>l.field==='ProjectType');
        const tasks=outgoing(n.$id).filter(e=>e.Source==='ProjectTasks').map(e=>p.nodes[e.End.$ref]?.node).filter(Boolean);
        metadata.templateSummaries.push({package:p.file,id:n.RecordId,name:data.ProjectTempName,active:data.Active,description:data.Description,project_type:type?.target,task_count:tasks.length,source:pointer});
        for(const task of tasks){const ls=outgoing(task.$id).map(e=>({field:e.Source,node:p.nodes[e.End.$ref]?.node}));const def=ls.find(l=>l.field==='ProjTaskDefObj'||l.field==='TaskDef'||l.field==='ProjectTaskDef'||l.field==='Def')?.node;metadata.templateTasks.push({package:p.file,template_id:n.RecordId,template:data.ProjectTempName,assignment_id:task.RecordId,order:task.FieldData.Order,task_definition_id:def?.RecordId,task_definition:label(def),relationships:ls.map(l=>({field:l.field,object:l.node?.ObjectName,id:l.node?.RecordId,caption:label(l.node)})),source:p.nodes[task.$id]?.pointer});}
      }
    }
  }
  for(const e of edges.filter(e=>e.Source==='MemberOf')) {
    const s=p.nodes[e.Start.$ref]?.node,t=p.nodes[e.End.$ref]?.node;
    if(s?.ObjectName?.includes('Group')&&t?.ObjectName?.includes('Group')) metadata.memberships.push({package:p.file,member_id:s.RecordId,member:label(s),member_of_id:t.RecordId,member_of:label(t),source:p.nodes[e.$id]?.pointer});
  }
}
for(const [key,reps] of global) if(reps.length>1 && reps.every(r=>short(r.node)==='BusinessObjectPackageItemData')) {
  const changes={};
  const keys=[...new Set(reps.flatMap(r=>Object.keys(r.node.FieldData||{})))].filter(k=>k!=='$id');
  for(const k of keys){const present=reps.filter(r=>Object.hasOwn(r.node.FieldData||{},k)); if(new Set(present.map(r=>JSON.stringify(r.node.FieldData[k]))).size>1) changes[k]=present.map(r=>({package:r.package,value:r.node.FieldData[k]}));}
  if(Object.keys(changes).length)metadata.conflicts.push({key,id:reps[0].node.RecordId,caption:reps[0].node.Caption,changes,sources:reps.map(r=>({package:r.package,pointer:r.pointer}))});
}
fs.writeFileSync(path.join(out,'security-seeds-views.json'),JSON.stringify(metadata,null,2));
fs.writeFileSync(path.join(out,'view-inventory.csv'),csv(metadata.views.map(v=>({...v,fields:v.fields.join('; '),configuration_tags:JSON.stringify(v.configuration_tags)}))));
fs.writeFileSync(path.join(out,'security-grants.csv'),csv(metadata.security.flatMap(s=>s.grants.length?s.grants.map(g=>({package:s.package,record:s.secured_record,record_id:s.secured_record_id,inherit_permissions:s.inherit_permissions,subject:g.subject,subject_id:g.subject_id,allow:g.allow.join('; '),allow_ids:g.allow_ids.join('; '),deny:g.deny.join('; '),apply_to:g.apply_to,apply_to_object_id:g.apply_to_object_id,source:s.source})):[{package:s.package,record:s.secured_record,record_id:s.secured_record_id,inherit_permissions:s.inherit_permissions,subject:'No direct ACL entries',subject_id:'',allow:'',allow_ids:'',deny:'',apply_to:'',apply_to_object_id:'',source:s.source}])));
fs.writeFileSync(path.join(out,'template-task-assignments.csv'),csv(metadata.templateTasks.map(t=>({...t,relationships:JSON.stringify(t.relationships)}))));
const main=packages.find(p=>p.file==='APQP & PPAP Manager(v1.0.0.0).ipack');
const q=metadata.seeds.filter(s=>s.object==='CLF_QuestObject');
const uniqueQuestions=[...new Map(q.map(s=>[s.id,s])).values()].sort((a,b)=>a.values.Order-b.values.Order);
let md='# PPAP OOTB security views and seed evidence\n\nAll conclusions are Extracted unless explicitly qualified. JSON pointers are local to the named package. No configuration was installed or executed.\n\n## Security\n\n';
md+='Permission definitions describe available operations; only ACL entries demonstrate exported grants. All security settings examined inherit permissions. An empty direct ACL is not an absence-of-access finding. Group membership and entity-specific/runtime security must be considered before asserting effective access. No individual user membership or runtime direct-access test is supplied.\n\n';
const groups=[...new Map(metadata.groups.map(g=>[g.id,g])).values()];
md+=table(['Group','Stable ID','Kind','Package and pointer'],groups.map(g=>[g.name,g.id,g.object,`${g.package} ${g.source}`]));
md+='\nThe exported membership direction is `member MemberOf group`. It is a security-group association, not object inheritance.\n\n';
md+=table(['Member','Member of','Source'],metadata.memberships.map(g=>[g.member,g.member_of,`${g.package} ${g.source}`]));
md+='\n### Principal PPAP ACL evidence\n\n';
const relevant=metadata.security.filter(s=>s.package===main.file&&(/PPAP|Project Task Definition|Project Task Security|Project Abstract|Project\/Task/.test(s.caption)));
md+=table(['Secured record','Inherited','Subject','Allow operations','Source'],relevant.flatMap(s=>s.grants.length?s.grants.map(g=>[s.secured_record,s.inherit_permissions,g.subject,g.allow.join(', '),`${s.package} ${s.source}`]):[[s.secured_record,s.inherit_permissions,'No direct ACL entries','Effective access unresolved from this record alone',`${s.package} ${s.source}`]]));
md+='\nThe PPAP Status Dashboard grants Owners Edit and Everyone View. The PPAP Reports definition grants Owners Edit and Everyone View. These artifact-level grants do not prove access to all records used in reports. APQP & PPAP Manager module-level grants give Contributors View Details and View in Inventory; Owners Create, Edit and Delete. Module ACL entries are additional evidence, not a complete per-record security contract.\n\n';
md+='## Seed configuration\n\n';
md+=table(['Template','Project type','Active','Assignment records','Stable ID','Source'],metadata.templateSummaries.map(t=>[t.name,t.project_type,t.active,t.task_count,t.id,`${t.package} ${t.source}`]));
md+='\nTemplate task assignments are exported as Project/Task records with relationships, not operational completed tasks. The full mappings are in `template-task-assignments.csv`. Preserve relationships when reusing or migrating templates.\n\n### PPAP checklist element questions\n\n';
md+=table(['Order','Question reference','Question','Stable ID','Source'],uniqueQuestions.map(q=>[q.values.Order,q.values.QuestionRef,q.values.Content,q.id,`${q.package} ${q.source}`]));
md+='\n### Controlled lookup values\n\n';
md+=table(['Internal lookup object','Value','Caption','Index','Deleted','Source'],metadata.lookupValues.map(l=>[l.object,l.value,l.caption,l.index,l.deleted,`${l.package} ${l.source}`]));
md+='\n### Shared configuration records\n\n';
for(const type of ['ProjectFwk_PhaseObject','ProjectFwk_PFRoleObject','ProjectFwk_ProjectTypeObject','ProjectFwk_TaskTypeObject','ProjectFwk_ChecklistTypeObject','ProjectFwk_TypeofRecordObject','CLF_AnswerTypeObject','CLF_FindingDDObject','CLF_FindingStatusObject','CLF_ChoiceListObject','CLF_ChoiceObject']){
  const seeds=[...new Map(metadata.seeds.filter(s=>s.object===type).map(s=>[s.id,s])).values()];
  md+=`\n**${type}**\n\n`+table(['Stable ID','Caption','Exported values','Relations','Source'],seeds.map(s=>[s.id,s.caption,JSON.stringify(s.values),s.relationships.filter(l=>!['Object','Module','Application'].includes(l.field)).map(l=>`${l.field} → ${l.target}`).join('; '),`${s.package} ${s.source}`]));
}
md+='\n### Default application settings\n\n';
for(const s of metadata.settings)md+=table(['Setting','Value'],Object.entries(s.values).filter(([k])=>k!=='Id'))+`\nSource: ${s.package} ${s.source}; ${s.id}. CustomCSS is also exported (${s.custom_css_length} characters).\n`;
md+='\n### Cross-package record differences\n\n';
md+='These are differing exported representations, not an asserted effective post-install value. IfExists/IfNotExists numeric policy codes are retained in JSON; their import semantics must be confirmed before claiming which value wins.\n\n';
md+=table(['Record','Stable ID','Differing fields and representations','Sources'],metadata.conflicts.map(c=>[c.caption,c.id,JSON.stringify(c.changes),c.sources.map(s=>`${s.package} ${s.pointer}`).join('; ')]));
md+='\n## Views and form behavior\n\n';
md+='The PPAP detail view is `APQP_PPAP_Detail` (stable ID `ee3fad4b-3787-45b3-a463-9f6f9ba01364`, main package `/GraphData/Items/812`). It is not public and is not marked parsed for mobile. Those export flags do not establish browser responsiveness. The complete extracted raw view is retained alongside this report.\n\n';
md+='- Create requires ProjectTemplate, Product (caption Part Number), and ProjectOwner in the view. Product is singular; this is not the target drawing-scoped multi-part warrant. Customer and Supplier selectors are present. The create Save action is captioned Continue.\n- Draft keeps template read only but exposes Product, Customer, Supplier, ProjectOwner and SubmissionDate. InProgress/InReview/InterimApproval render Product, Customer and Supplier read only with EditReadOnly enabled. Completed/cancelled views make these and ProjectOwner read only, displaying completion or rejection date as appropriate. Top-level ShowEditReadOnlyLink=true means field immutability must not be inferred solely from the read-only markup.\n- PSW Details includes customer part number, regulatory flag, drawing/change identifiers and dates, purchase order, weight, checking aid, material/reporting information, submission reasons/level, results, process code, run rate, hours and comments. PSW Templates is a mail-merge panel. Completed/cancelled PSW fields are read only with EditReadOnly permitted in the markup.\n- Contributors grid assigns one Member against each ProjectRole. The task instruction text states that populated roles supply responsibility, empty roles default tasks to the PPAP responsible person, and changing the team member updates open tasks. These are extracted UI instructions; handler evidence should establish execution semantics.\n- Task instructions state that task workflow remains Delayed until a due date exists; assigning a due date sends email and adds the task to My Tasks. The grid provides Assign Due Dates mass update and orders/group tasks by Phase.Order, Phase and Order.\n- Open task rows expose integrated-record creation/view links, attachment links, responsible person/due date/status and completion data. CAR and Lesson Learned grids are present, with CAR display governed in the view by the EnableCARPPAP setting. Completed/cancelled contributor/task/CAR/lesson grids are rendered read only. General attachment, document and workflow comment sections are present.\n- The draft task block uses the literal condition Draft && !ApplicationSettings.Get<bool>(APQP_SettingsObject, PPAPHidTskDraft, true) to render no task block. The exported Default setting PPAPHidTskDraft=false therefore suppresses that block in Draft under this view expression; the setting name should not be used to infer opposite behavior. Confirm runtime behavior before changing it.\n\n';
md+='### Views Add-on\n\n';
md+='The supplied installation note calls this mandatory for platform 6.5.75 or higher (ILX-8580). The package itself supplies 11 shared selection views, with zero APQP/PPAP-named views. It introduces no directly declared PPAP field in the view package. Preserve it as a separate compatibility dependency.\n\n';
md+=table(['View','Stable ID','Source'],metadata.views.filter(v=>v.package.startsWith('Views Add')).map(v=>[v.name,v.id,`${v.package} ${v.source}`]));
md+='\nThe ProductMgmt_Employee_SelectApprovers selector excludes employee IDs already represented by ProductMgmt_ItemApproverObject for the item revision supplied in the _DependsOn.Parent$ query string (SubQueryPredicate Type=In, Negate=true). It is a Product Management selection helper, not evidence of the intended PPAP final approver pool. All add-on views are IsPublic=false and IsParsedForMobile=false.\n\n';
md+='## Supplied installation evidence and limitations\n\n';
md+='The note lists Supplier Relationship Management 1.3.0, Product Management 1.2.1 and Quality Comply Solution 1.0.0 as preconditions. It prescribes Checklist Framework, APQP & PPAP Manager, Checklist Framework Data, then APQP & PPAP Manager Data, with the platform-dependent Views Add-on. These are vendor bundle instructions, not user authorization to install. No package installation was performed.\n\nThe note asks for a PPAP merge template `PSW_Intelex.docx`, downloadable as Word. That DOCX is absent from the supplied directory, which contains only the five packages and text note. The template body, generated PSW layout and Word merge output cannot be verified from this bundle.\n\n';
md+=table(['Issue','Supplied known issue wording'],[
 ['TP#154212','Members of APQP&PPAP Contributors can answer checklist questions for tasks where they are not person responsible (Checklist Framework limitation).'],
 ['TP#151543','Members of APQP&PPAP Contributors cannot see details on Program grid (current Product Management security issue).'],
 ['TP#151452','Instructions, workflow diagrams and section titles are not translated by the tool (Platform limitation).'],
 ['TP#152726','Process/Project Owner slicer does not filter according to the APQP&PPAP Owner group existing filter (Platform limitation).'],
 ['TP#154170','APQP&PPAP Owner can create Public Profile records for SRM (current SRM security settings).'],
 ['TP#155049','Wrong Due Date caption in validation error on Task record (current Action Plan configuration).']]);
md+='\nThese are historical bundle notes; the exports do not establish whether each issue persists on the target tenant/platform. Validate during baseline verification.\n';
fs.writeFileSync(path.join(out,'security-seeds-views-report.md'),md);
console.log(JSON.stringify({groups:groups.length,membership_edges:metadata.memberships.length,security_representations:metadata.security.length,acl_rows:metadata.security.reduce((n,s)=>n+s.grants.length,0),view_representations:metadata.views.length,unique_view_ids:new Set(metadata.views.map(v=>v.id)).size,templates:metadata.templateSummaries,questions:uniqueQuestions.length,lookup_values:metadata.lookupValues.length,cross_package_differences:metadata.conflicts.map(c=>({caption:c.caption,id:c.id,fields:Object.keys(c.changes)}))},null,2));


