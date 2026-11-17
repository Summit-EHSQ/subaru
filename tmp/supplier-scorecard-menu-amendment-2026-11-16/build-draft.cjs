const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const dir = __dirname;
const planPath = path.resolve(dir, '../../docs/phase 2/supplier-relationship-management/solution_specification/object_model/supplier-scorecard-implementation-plan.md');
const specPath = path.resolve(dir, '../../docs/phase 2/supplier-relationship-management/solution_specification/object_model/supplier-scorecard-technical-specification.md');
const source = fs.readFileSync(planPath, 'utf8');
const spec = fs.readFileSync(specPath, 'utf8');
const digest = text => crypto.createHash('sha256').update(text).digest('hex');
const hash = value => digest(JSON.stringify(value));
const labels = {id:'Task ID',title:'Title',category:'Category',objective:'Objective',scope:'Detailed scope',deliverable:'Deliverable',prerequisites:'Strict technical prerequisites',blockedStatus:'Blocked status',implementer:'Recommended implementer role',reviewer:'Recommended reviewer/approver role',rationale:'Role rationale',accept:'Acceptance criteria',refs:'Specification references',assumptions:'Assumptions and open questions'};
const matches = [...source.matchAll(/^### ([A-Z]{3}-\d{2}) — (.+)$/gm)];
if(matches.length !== 35) throw Error('Expected the existing 35-task plan.');
const mappings = Object.fromEntries(matches.map((m,i)=>[m[1],`IMP-${String(i+1).padStart(2,'0')}`]));
const originalIds = Object.fromEntries(Object.entries(mappings).map(([a,b])=>[b,a]));
const rawTasks = matches.map((m,i)=>{
  let end = matches[i+1]?.index ?? source.indexOf('\n## ', m.index+1);
  if(end < 0) end=source.length;
  const markdown=source.slice(m.index,end).trimEnd();
  const fields={};
  for(const [key,label] of Object.entries(labels)) {
    const escaped=label.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const value=markdown.match(new RegExp('^- \\*\\*'+escaped+':\\*\\* (.*)$','m'))?.[1];
    if(value===undefined) throw Error('Missing '+label+' for '+m[1]);
    fields[key]=value;
  }
  return {originalId:m[1],validatorId:mappings[m[1]],markdown,fields};
});
const rawByOriginal = Object.fromEntries(rawTasks.map(t=>[t.originalId,t]));
const externalBlock=source.split('## External inputs and constraints')[1].split('## Implementation tasks')[0];
const externalRows=externalBlock.split(/\r?\n/).filter(l=>l.startsWith('| ')&&!l.startsWith('| External input')).map(l=>l.slice(1,-1).split('|').map(c=>c.trim()));
const externalInputs=externalRows.map((r,i)=>({id:`IN-${String(i+1).padStart(2,'0')}`,title:r[0],description:r[1],originalAffectedTasks:r[2]}));
const tasks = rawTasks.map(raw=>{
 const f=raw.fields;
 const prerequisites=[...f.prerequisites.matchAll(/\b[A-Z]{3}-\d{2}\b/g)].map(m=>mappings[m[0]]);
 const inputs=externalInputs.filter(x=>new RegExp('\\b'+raw.originalId+'\\b').test(x.originalAffectedTasks)).map(x=>x.id);
 return {id:raw.validatorId,originalTaskId:raw.originalId,title:f.title,category:f.category,objective:f.objective,scope:f.scope,deliverable:f.deliverable,prerequisites,predecessorOutputs:prerequisites.map(id=>({id,description:rawByOriginal[originalIds[id]].fields.deliverable})),blockedStatus:f.blockedStatus,implementer:f.implementer,reviewer:f.reviewer,rationale:f.rationale,assumptions:f.assumptions,inputs,suppliedInputDescriptions:inputs.map(id=>({id,description:externalInputs.find(x=>x.id===id).description})),configurationRows:[],modifications:[],steps:[f.scope],accept:[f.accept],refs:[`Original implementation-plan assignment ${raw.originalId}. ${f.refs}`]};
});
const baselineTaskHashes=Object.fromEntries(tasks.map(t=>[t.id,hash(t)]));
const changedOriginalIds=['APP-01','CFG-03','SEC-26','RPT-27'];
const selected=changedOriginalIds.map(id=>mappings[id]);
const taskByOriginal=Object.fromEntries(tasks.map(t=>[t.originalTaskId,t]));
externalInputs.push(
 {id:'IN-20',title:'Group bindings and membership',description:'Supply the existing Group bindings and eligible membership for Supplier Scorecard Application Administrator, Administrators, authorized internal SIA viewers, and the applicable review groups. Their approved business labels and access division are fixed. Catalogue privileges and user-access policies wait only for the affected Group binding or membership; creating the tab and grouping labels can proceed.'},
 {id:'IN-21',title:'Supported native navigation settings',description:'Supply the supported native settings only where the available evidence does not establish how to bind a menu destination, open a tab with a blank content view, or make the review menu conditional on applicable review authorization. The approved labels, order, destinations, and defaults are already decided. New view identifiers are outputs of the existing build tasks and final view work, not decisions requested from the user.'},
 {id:'IN-22',title:'Generation Lag Time Increment destination',description:'The separately drafted November 5 generation-scheduling amendment supplies the Generation Lag Time Increment object and administration form beneath the existing catalogue work. Only that catalogue permission assignment and its menu link wait for this output. This navigation amendment does not create the object or absorb the earlier scheduling work.'}
);
function amend(id,changes) {
 const t=taskByOriginal[id],f=rawByOriginal[id].fields;
 Object.assign(t,changes);
 t.scope=f.scope+' '+changes.scope;
 t.refs=[`Original implementation-plan assignment ${id}; original scope is retained.`,...changes.refs];
 t.predecessorOutputs=t.prerequisites.map(alias=>({id:alias,description:rawByOriginal[originalIds[alias]].fields.deliverable}));
}
const groupDefinitions=[
 ['Supplier Scorecards','Performance & History',1],['Supplier Scorecards','Reporting Progress & Review',2],
 ['Program Administration','Program & Scoring Setup',1],['Program Administration','Program Operations & Data Review',2],['Program Administration','Business Classifications',3],
 ['Program Development','Scoring & Value Definitions',1],['Program Development','Data Collection & Initialization',2],['Program Development','Scheduling',3],['Program Development','Result Provenance & Exceptions',4]
];
amend('APP-01',{
 scope:'Add the three ordered application tabs Supplier Scorecards, Program Administration, and Program Development, and their nine named menu grouping headers. Create the tab and grouping shell here; final menu destinations, menu visibility bindings, and default views are completed with the view work after their targets exist.',
 deliverable:'Supplier Scorecard application container with three ordered tab shells and nine ordered menu grouping headers, ready for later menu and view bindings.',
 blockedStatus:'Ready for application, tab, and grouping-label configuration. Final menu links and default views are completed by the later view assignment after its configured targets and security policies exist.',
 configurationRows:[
  ['Supplier Scorecards tab','Add the first Application tab with display label Supplier Scorecards.'],
  ['Program Administration tab','Add the second Application tab with display label Program Administration.'],
  ['Program Development tab','Add the third Application tab with display label Program Development.'],
  ...groupDefinitions.map(([tab,group,order])=>[`${tab} — ${group}`,`Add the Menu grouping header ${group} in position ${order} within ${tab}.`])
 ],
 steps:['Create the Supplier Scorecard application container and its three tab shells in the stated order.','Add the nine menu grouping headers to the stated tabs in their stated order; create no additional contribution tab.'],
 modifications:[],
 accept:['The application has exactly three tabs in this order: Supplier Scorecards, Program Administration, Program Development.','Supplier Scorecards has two grouping headers, Program Administration has three, and Program Development has four, using the exact displayed labels and order assigned here.'],
 inputs:[],suppliedInputDescriptions:[],assumptions:'The three tab and grouping shells can be created before their final menu destinations are bound. Final native menu/default settings are addressed in the later view assignment; no live tenant configuration is claimed.',
 refs:['Technical specification Sections 1, 3, 16.4 and 21.2; SC-035 and SC-037.']
});
const business=['Supplier Commodity','NAICS Classification','KPI Category'];
const technical=['KPI Aggregation Method','KPI Value Type','KPI Contribution Source','KPI Collection Method','KPI Initialization Method','Safety Benchmark Metric','Scorecard Cadence','Generation Lag Time Increment','KPI Value Origin','Publication Exception Treatment'];
amend('CFG-03',{
 scope:'Replace the proposed blanket catalogue-maintenance grant with two explicit sets: the three business classification catalogues allow maintenance by the Supplier Scorecard Application Administrator group or members of Administrators; the ten technical catalogues allow maintenance only by members of Administrators. Retain the read access needed to select supported values and display historical references. Apply the same maintenance division to inherited and directly declared editable fields.',
 deliverable:'Catalogue forms and fields with the approved three-business/ten-technical maintenance division, authorized lookup access, active-selection filtering, and existing audit and lifecycle restrictions.',
 blockedStatus:'Partly waiting. The catalogue field/form work and known access rules can be prepared after the catalogue objects exist. Applying user privileges waits for the relevant Group bindings and membership. Only Generation Lag Time Increment permissions additionally wait for that object and form from the separate scheduling amendment. Inherited-Code uniqueness and recurrence storage still use the existing supplied capability results.',
 configurationRows:[
  ...business.map(name=>[`${name} catalogue maintenance`,`Allow record creation and change through its administration surface only to the Supplier Scorecard Application Administrator group or members of Administrators; apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and historical-reference restrictions continue to apply.`]),
  ...technical.map(name=>[`${name} catalogue maintenance`,`Allow record creation and change through its administration surface only to members of Administrators; application-admin membership alone grants no maintenance. Apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and lifecycle restrictions continue to apply.`]),
  ['Inherited Code editability','Apply the concrete catalogue maintenance rule to Code. Code remains editable only before first use and stable afterward; do not redeclare the inherited field.'],
  ['Inherited Name editability','Apply the concrete catalogue maintenance rule to Name, retaining its localizable display-label behavior; do not redeclare the inherited field.'],
  ['Inherited Active? editability','Apply the concrete catalogue maintenance rule to Active?. Retain existing inactive references on version and historical records; do not redeclare the inherited field.'],
  ['Inherited Sort editability','Apply the concrete catalogue maintenance rule to Sort without redeclaring the inherited field.'],
  ['KPI Aggregation Method.Description editability','Allow editing only by members of Administrators. Changing a catalogue record does not itself implement a new supported aggregation algorithm.'],
  ['Scorecard Cadence.Frequency editability','Allow editing only by members of Administrators before the Cadence is referenced by a published Program Version. Keep Frequency stable after that first published use; a materially different schedule requires a new Cadence record.'],
  ['Catalogue lookup access','Allow authorized users of consuming records to read and select the permitted active catalogue records without granting catalogue-maintenance rights; retain read access to inactive values already referenced by historical or version records.']
 ],
 steps:['Apply the business and technical catalogue maintenance rules to the relevant record and field permissions.','Configure the lookup/read permissions independently from record maintenance so program administrators can continue choosing supported methods on KPI, Program, benchmark, and operational forms.'],
 modifications:[],
 accept:['An application-admin user without Administrators membership can maintain Supplier Commodity, NAICS Classification, and KPI Category, and can select supported technical catalogue values on consuming forms.','The same application-admin user cannot maintain any of the ten technical catalogues through the administration form, a direct URL, API, or import/update path.','A member of Administrators can maintain the technical catalogues subject to existing stable-Code, used-Cadence, and historical-reference restrictions.','Code, Name, Active?, and Sort remain inherited; Description remains declared on KPI Aggregation Method and Frequency on Scorecard Cadence.'],
 inputs:['IN-08','IN-20','IN-22'],
 suppliedInputDescriptions:[{id:'IN-08',description:'Supply the supported inherited-Code uniqueness and recurrence storage/display behavior used by the existing catalogue configuration. Only the affected constraints and Frequency configuration wait for those results.'},{id:'IN-20',description:'Supply the native Group bindings and membership for Supplier Scorecard Application Administrator and Administrators so the two catalogue-maintenance sets can be assigned accurately.'},{id:'IN-22',description:'Supply the Generation Lag Time Increment object and administration form from the separate scheduling amendment; only its catalogue privilege assignment waits for this target.'}],
 assumptions:'This changes the planned maintenance grant, not any catalogue fields, inheritance, supported Codes, or seed values. Ordinary object audit, active filtering, and catalogue inverse suppression remain part of the original catalogue assignment.',
 refs:['Technical specification Sections 7, 16.1, 16.4.2, 16.4.3 and 21.2; SC-036.']
});
amend('SEC-26',{
 scope:'Add the three tab-audience policies and the applicable-review authorization policy that final menu assembly will consume. Supplier Scorecards allows authorized internal SIA viewers; Program Administration allows the Supplier Scorecard Application Administrator group and members of Administrators; Program Development allows members of Administrators only. Tab membership must not grant additional contributor, coordinator, reviewer, correction, override, or publication actions.',
 deliverable:'Existing scorecard record/action security plus three tab-audience policies and an applicable-review authorization policy ready for final menu/view binding.',
 blockedStatus:'Partly waiting. Existing form, workflow, and publication predecessors remain required. The access rules are decided; assigning them waits for the affected Group bindings and membership and the existing supplier-scope/correction/recipient security inputs. Final menu-record visibility is applied later by the menu/view assignment, so this task does not depend on those later menu records.',
 configurationRows:[
  ['Supplier Scorecards tab-audience policy','Allow authorized internal SIA Supplier Scorecard users to consume aggregate results and task progress within their existing supplier-entity scope.'],
  ['Program Administration tab-audience policy','Allow the Supplier Scorecard Application Administrator group and members of Administrators. Apply existing role, supplier-scope, and workflow checks to individual actions.'],
  ['Program Development tab-audience policy','Allow members of Administrators only. Membership of Supplier Scorecard Application Administrator without Administrators membership does not qualify.'],
  ['Applicable-review authorization policy','Authorize review only for a user permitted to review the applicable reporting cycle, using its current review authorization. Supply that condition for the later Scorecards in Review menu visibility and destination binding.'],
  ['Action authorization beneath tabs','Configure tab access as navigation access only. Continue evaluating contributor, coordinator, reviewer, correction, override, and publication permissions at the actual record/action boundary rather than granting those capabilities through tab membership.']
 ],
 steps:['Configure the three audience policies against the supplied Groups and current eligibility.','Provide the applicable-review authorization condition for final menu visibility binding, while keeping the record and action checks authoritative when users follow a link or direct URL.'],
 modifications:[],
 accept:['An application-admin user without Administrators membership qualifies for Program Administration but does not qualify for Program Development.','An authorized internal viewer receives Supplier Scorecards access within the existing supplier scope; tab access does not grant review, correction, override, publication, or contribution actions.','Review authorization is evaluated for the applicable reporting cycle, and source-record drilldown still requires the source application permissions.'],
 inputs:['IN-06','IN-10','IN-20'],
 suppliedInputDescriptions:[{id:'IN-06',description:'Supply coordinator, review, correction, contributor, and support Group assignments and the approved separation of duties used by the original security task; these are distinct from the already decided tab labels and Administrators requirement.'},{id:'IN-10',description:'Supply any still-unresolved supplier-entity scope, related-facility access, correction-role, field-visibility, and source-link security decisions needed by the original record/action security configuration.'},{id:'IN-20',description:'Supply the native Group bindings and eligible membership for the application-admin group, Administrators, internal SIA viewers, and current review Groups before their tab/review policies are assigned.'}],
 assumptions:'Catalogue record/field maintenance grants are configured by the catalogue assignment. This assignment owns user-access policies and existing record/action security; final menu records and their visibility bindings are configured by the later view assignment.',
 refs:['Technical specification Sections 16.1, 16.4 and 21.2; SC-018, SC-035 and SC-036.']
});
const menus=[
 ['Supplier Scorecards','Performance & History','Scorecard Overview','Open the native dashboard/report views showing current results, reporting-cycle status, and contribution completion.'],
 ['Supplier Scorecards','Performance & History','Supplier Scorecards','Open the Supplier Scorecard inventory with supplier, program, reporting-period, and publication-status filters; apply existing record and stage permissions.'],
 ['Supplier Scorecards','Performance & History','Supplier Scorecard History','Open supplier company/facility profiles and their related current and historical Supplier Scorecards.'],
 ['Supplier Scorecards','Reporting Progress & Review','Contribution Progress','Open read-only reporting over Scorecard Contribution Task and related Runs, showing assigned, completed, and overdue work within authorized scope.'],
 ['Supplier Scorecards','Reporting Progress & Review','Scorecards in Review','Open the consolidated review view for applicable Runs and Scorecards. Bind menu visibility to the applicable-review authorization policy; ordinary internal-viewer access alone must not display or authorize the review menu.'],
 ['Program Administration','Program & Scoring Setup','Scorecard Programs','Open Scorecard Program authoring. Its existing grids provide Program KPI membership, immutable Versions, and Generation Delays; delay creation stays on the controlled Program.Generation Delays action.'],
 ['Program Administration','Program & Scoring Setup','KPI Library','Open Supplier Scorecard KPI authoring for definitions, scoring settings, collection methods, applicability, and effective dates; open immutable Versions through the KPI record.'],
 ['Program Administration','Program & Scoring Setup','Supplier Participation','Open Supplier Scorecard Participation for exact supplier/program assignments and effective periods.'],
 ['Program Administration','Program & Scoring Setup','Safety Benchmarks','Open Safety Benchmark authoring and its related immutable Versions for effective-dated values.'],
 ['Program Administration','Program Operations & Data Review','Scorecard Runs','Open the Supplier Scorecard Run inventory for monitoring and authorized operational actions; retain existing coordinator and workflow action checks.'],
 ['Program Administration','Program Operations & Data Review','Reported KPI Data','Open the governed Scorecard KPI Value review/reporting view with reported values, provenance, queried/base, override and effective points, and publication exceptions; expose native audit/workflow evidence subject to existing privileged-action and supplier-scope controls.'],
 ['Program Administration','Business Classifications','Supplier Commodities','Open Supplier Commodity catalogue maintenance.'],
 ['Program Administration','Business Classifications','NAICS Classifications','Open NAICS Classification catalogue maintenance.'],
 ['Program Administration','Business Classifications','KPI Categories','Open KPI Category catalogue maintenance.'],
 ['Program Development','Scoring & Value Definitions','KPI Aggregation Methods','Open KPI Aggregation Method catalogue maintenance for supported rollup and aggregation algorithms.'],
 ['Program Development','Scoring & Value Definitions','KPI Value Types','Open KPI Value Type catalogue maintenance for supported typed-value presentation and validation.'],
 ['Program Development','Scoring & Value Definitions','Safety Benchmark Metrics','Open Safety Benchmark Metric catalogue maintenance for KPI-to-benchmark matching.'],
 ['Program Development','Data Collection & Initialization','KPI Contribution Sources','Open KPI Contribution Source catalogue maintenance for internal, supplier, and automated contribution handling.'],
 ['Program Development','Data Collection & Initialization','KPI Collection Methods','Open KPI Collection Method catalogue maintenance for direct-entry and query processing.'],
 ['Program Development','Data Collection & Initialization','KPI Initialization Methods','Open KPI Initialization Method catalogue maintenance for default and prior-period initialization.'],
 ['Program Development','Scheduling','Scorecard Cadences','Open Scorecard Cadence catalogue maintenance for scheduler recurrence and reporting-period behavior.'],
 ['Program Development','Scheduling','Generation Lag Time Increments','Open Generation Lag Time Increment catalogue maintenance for the exact case-sensitive interval Codes d and M after its object/form exists.'],
 ['Program Development','Result Provenance & Exceptions','KPI Value Origins','Open KPI Value Origin catalogue maintenance for system-assigned provenance classifications.'],
 ['Program Development','Result Provenance & Exceptions','Publication Exception Treatments','Open Publication Exception Treatment catalogue maintenance for zero-point and denominator-exclusion behavior.']
];
amend('RPT-27',{
 scope:'Add the named overview, history, contribution-progress, review, and reported-data views and complete the 24 ordered menu destinations across the three tab shells. Bind the audience and review-visibility policies supplied by the security work. Set Supplier Scorecards to open Scorecard Overview and the other two tabs to open blank content areas until a menu is selected. Omit My Contribution Tasks; retain all earlier reporting, responsive-view, ranking, and supplier-profile scope.',
 deliverable:'Existing scorecard report/view set plus 24 ordered menu links with secured visibility and the approved Overview, Blank, Blank tab defaults.',
 prerequisites:[...taskByOriginal['RPT-27'].prerequisites,mappings['FRM-08'],mappings['FRM-11']],
 blockedStatus:'Partly waiting. Complete the earlier calculation, security, KPI-form, and Program-form outputs before binding their destinations. Menu labels and destination purposes are decided; only unverified native binding settings wait for supplied support details. Only the Generation Lag Time Increments link additionally waits for its catalogue object/form from the separate scheduling amendment. Existing ranking and report/query inputs still block their affected reporting features.',
 configurationRows:[
  ...menus.map(([tab,group,label,destination],i)=>[`${tab} > ${group} > ${label}`,`Add menu item ${label} in position ${menus.slice(0,i).filter(x=>x[0]===tab&&x[1]===group).length+1} within this grouping. ${destination}`]),
  ['Supplier Scorecards default view','Set the tab default to Scorecard Overview, so opening the tab displays that overview.'],
  ['Program Administration default view','Set a blank content view when the tab opens. Do not open a dashboard, inventory, or record automatically; show the selected menu destination only after a menu item is chosen.'],
  ['Program Development default view','Set a blank content view when the tab opens. Do not open a dashboard, inventory, or record automatically; show the selected menu destination only after a menu item is chosen.']
 ],
 steps:['Create the named overview and supplemental views using the existing configured objects, responsive forms, and native reporting.','Bind the 24 menu items to the stated destinations in the stated tab/group order, and apply the three tab-audience policies plus the applicable-review condition to their navigation visibility.','Apply the three explicit tab default views. Configure no My Contribution Tasks menu, no fourth application tab, no abstract-catalogue administration menu, and no standalone unrestricted Generation Delay creation menu.'],
 modifications:[],
 accept:['The final navigation contains three tabs, nine grouping headers, and 24 menu items: five under Supplier Scorecards, nine under Program Administration, and ten under Program Development.','Opening Supplier Scorecards displays Scorecard Overview. Opening Program Administration or Program Development displays blank content until a menu is selected.','Each of the 24 menu items opens its named object inventory or view, and Scorecards in Review is shown only to users authorized for the applicable reporting cycle.','Program and KPI Versions open through their authoring records, and Generation Delay creation remains through the controlled Program grid action.','The three business catalogue menus permit the assigned business maintainers, while the ten technical catalogue menus require Administrators membership; selecting supported values on consuming forms does not grant maintenance.','Contribution Progress is read only, My Contribution Tasks is absent, and no abstract-catalogue or standalone unrestricted Generation Delay creation menu is introduced.'],
 inputs:['IN-08','IN-11','IN-21','IN-22'],
 suppliedInputDescriptions:[{id:'IN-08',description:'Supply the supported report/query binding needed by the existing views and ranking work; this blocks only the view/query bindings whose native method remains unverified.'},{id:'IN-11',description:'Supply tie, exclusion, null-score, population-count, and security-filtering rules for the existing overall and commodity ranking features; the approved tab/menu labels do not wait for a new naming decision.'},{id:'IN-21',description:'Supply only unverified supported native menu/default settings, including blank tab content and the applicable-review visibility condition. New view identifiers are produced by the relevant build tasks, not requested as user decisions.'},{id:'IN-22',description:'Supply the Generation Lag Time Increment object and administration form from the separate scheduling amendment before completing that one catalogue menu link; other menu and view bindings can proceed.'}],
 assumptions:'The three tab shells and grouping labels come from the application task; catalogue privileges and security policies come from their named earlier outputs. Existing task notification links and contribution entry/completion behavior remain in use. No new data object, field, Power BI dataset, or custom audit object is assigned by this amendment.',
 refs:['Technical specification Sections 15.4–15.5, 16.3, 16.4 and 21.2; SC-035 through SC-037.']
});
taskByOriginal['RPT-27'].predecessorOutputs.find(output=>output.id===mappings['SEC-26']).description=taskByOriginal['SEC-26'].deliverable;
const coverage=rawTasks.map(raw=>({element:`Retained original assignment ${raw.originalId}`,action:'Add',owner:raw.validatorId,description:`The proposed build retains the complete original assignment and its scope: ${raw.fields.scope}`}));
coverage.push(
 {element:'Three ordered application tab shells',action:'Add',owner:mappings['APP-01'],description:'Create Supplier Scorecards, Program Administration, and Program Development as the application shell.'},
 {element:'Nine ordered menu grouping headers',action:'Add',owner:mappings['APP-01'],description:'Create the two consumer, three administration, and four development menu groupings with the approved labels.'},
 {element:'Business catalogue record maintenance privileges',action:'Modify',owner:mappings['CFG-03'],description:'Allow the three named business classifications to application administrators or Administrators.',blockedBy:['IN-20']},
 {element:'Technical catalogue record maintenance privileges',action:'Modify',owner:mappings['CFG-03'],description:'Restrict ten named technical catalogues to Administrators; only the increment-specific permission portion also waits for its earlier object output.',blockedBy:['IN-20','IN-22']},
 {element:'Catalogue inherited and direct field editability',action:'Modify',owner:mappings['CFG-03'],description:'Apply the catalogue maintenance division to inherited Code, Name, Active?, and Sort, plus Description and Frequency, retaining stability locks.'},
 {element:'Three tab-audience policies',action:'Add',owner:mappings['SEC-26'],description:'Create the internal-viewer, application-admin/Administrators, and Administrators-only audience policies.',blockedBy:['IN-20']},
 {element:'Applicable-review authorization policy',action:'Add',owner:mappings['SEC-26'],description:'Supply the reporting-cycle-specific review condition without granting review through ordinary tab access.',blockedBy:['IN-20']},
 {element:'Twenty-four ordered menu destination bindings',action:'Add',owner:mappings['RPT-27'],description:'Create the complete consumer, administration, and development menu mapping to named inventories or views; only the increment link waits for its separate target.',blockedBy:['IN-21','IN-22']},
 {element:'Three tab default-view bindings',action:'Add',owner:mappings['RPT-27'],description:'Set Scorecard Overview, Blank view, and Blank view as the tab defaults.',blockedBy:['IN-21']},
 {element:'Menu visibility bindings',action:'Add',owner:mappings['RPT-27'],description:'Apply the supplied tab-audience and applicable-review policies to the final navigation.',blockedBy:['IN-21']},
 {element:'Native audit and workflow evidence',action:'Reuse',owner:null,description:'Reported-data inspection uses existing record audit and workflow history rather than a new evidence object.'},
 {element:'Existing contribution assignment and notification links',action:'Reuse',owner:null,description:'Omitting My Contribution Tasks does not remove the task object, assignment, notification links, or completion behavior.'},
 {element:'Existing supplier scope, source security, and workflow/action controls',action:'Reuse',owner:null,description:'Navigation membership does not grant wider record access or new actions.'},
 {element:'Existing immutable versions and stable catalogue Codes',action:'Reuse',owner:null,description:'Version immutability, first-use Code stability, used-Cadence stability, and historical references remain authoritative.'},
 {element:'Generation Lag Time Increment object and form',action:'External',owner:null,description:'Consume the output of the separately drafted November 5 scheduling amendment, which remains outside this navigation amendment.'},
 {element:'My Contribution Tasks menu',action:'Not applicable',owner:null,description:'This entry was removed from the proposal and must not be added; no tenant deletion is asserted.'},
 {element:'New data objects, fields, relationships, and workflow changes',action:'Not applicable',owner:null,description:'The navigation amendment assigns no structural model or workflow changes.'}
);
const plan={planContractVersion:2,title:'Supplier Scorecard menu amendment validation adapter',date:'2026-11-16',scope:'Draft amendment only. Four addenda supplement the existing 35-task implementation plan; the established plan document remains unchanged. The full converted task list is a lossless validation adapter, not a competing approved plan.',basis:[{source:planPath,classification:'Existing proposed implementation plan',limitation:'The original plan is dated October 20 and is not evidence of live tenant configuration.'},{source:specPath,classification:'Approved target specification revision',limitation:'The November 16 navigation requirements define logical labels and rules; native metadata bindings remain build outputs or narrow supplied capability inputs.'}],evidenceNames:{},externalInputs,tasks,coverage,adapter:{purpose:'Lossless validator adapter only; retain original task IDs for any later real-plan amendment.',originalToValidator:mappings,validatorToOriginal:originalIds,changedOriginalTaskIds:changedOriginalIds,selectedValidatorTaskIds:selected,untouchedOriginalTaskIds:rawTasks.filter(t=>!changedOriginalIds.includes(t.originalId)).map(t=>t.originalId),baselineSourceSha256:digest(source),specificationSha256:digest(spec),sourceFile:planPath,sourceText:source,baselineTaskRecords:rawTasks,baselineTaskHashes,notes:['Unchanged records are mechanically adapted without semantic approval. Their original detailed scope is repeated as an ordered instruction to preserve its operative text in the validator schema.','Changed records retain original scope and carry additional configuration rows/steps for this amendment. The original task records remain intact in baselineTaskRecords.','Only validator aliases use IMP numbering; real task IDs are unchanged and no new main-plan task IDs are created.']}};
const esc = value=>String(value).replace(/\|/g,'&#124;').replace(/\r?\n/g,' ');
function renderTask(t){
 const lines=[`### ${t.id} — ${t.title}`,''];
 for(const [key,label]of Object.entries({id:'Task ID',title:'Title',category:'Category',objective:'Objective',scope:'Detailed scope',deliverable:'Deliverable',prerequisites:'Work needed first',blockedStatus:'What is waiting',implementer:'Recommended implementer role',reviewer:'Recommended reviewer/approver role',rationale:'Why this role is recommended'})) lines.push(`**${label}:** ${key==='prerequisites'?(t.prerequisites.length?t.prerequisites.join(', '):'None'):t[key]}`,'');
 if(t.predecessorOutputs.length)lines.push('What the earlier tasks provide: '+t.predecessorOutputs.map(o=>`${o.id}: ${o.description}`).join(' '),'');
 if(t.configurationRows.length)lines.push('**Fields and features to set up:**','','| Field or feature | What to set up |','|---|---|',...t.configurationRows.map(r=>`| ${esc(r[0])} | ${esc(r[1])} |`),'');
 if(t.modifications.length)lines.push('**Changes to the existing setup:**','','| Existing field or screen | What needs to change |','|---|---|',...t.modifications.map(r=>`| ${esc(r.element)} | ${esc(r.change)} |`),'');
 if(t.steps.length)lines.push('**Build instructions:**','',...t.steps.map((step,i)=>`${i+1}. ${step}`),'');
 lines.push('**How to check the result:**','',...t.accept.map(a=>'- '+a),'',`**Information needed for this task:** ${t.suppliedInputDescriptions.length?t.suppliedInputDescriptions.map(x=>x.id+': '+x.description).join(' '):'None'}`,'',`**Specification references:** ${t.refs.join(' ')}`,'',`**Assumptions and open questions:** ${t.assumptions}`,'');
 return lines.join('\n');
}
function summary(list){return ['| Task Number | Task Category | Task Name | Objective and Detailed Scope | Recommended Implementer |','|---|---|---|---|---|',...list.map(t=>`| ${t.id} | ${esc(t.category)} | ${esc(t.title)} | **Objective:** ${esc(t.objective)}<br><br>**Detailed scope:** ${esc(t.scope)} | ${esc(t.implementer)} |`)].join('\n');}
const graph=['```mermaid','flowchart TD',...tasks.map(t=>`  ${t.id.replace('-','_')}["${t.id} ${t.title}"]`),...tasks.flatMap(t=>t.prerequisites.map(p=>`  ${p.replace('-','_')} --> ${t.id.replace('-','_')}`)),'```'].join('\n');
const coverageMd=['| Part of the build | Responsible task | What happens |','|---|---|---|',...coverage.map(c=>`| ${esc(c.element)} | ${c.owner||c.action} | ${esc(c.description)} |`)].join('\n');
const opening='This is a draft validation adapter for a four-task amendment. It supplements rather than replaces the original 35-task build scope. The source plan and specification have not been modified by this draft. Original task IDs remain authoritative; IMP IDs are validator aliases only. No tenant implementation or verification is claimed.';
const markdown=[`# ${plan.title}`,'','## Scope and planning basis','',opening,'','## Task summary','',summary(tasks),'','## External inputs and constraints','',...externalInputs.map(x=>`- **${x.id} — ${x.title}:** ${x.description}`),'','## Detailed configuration tasks','',...tasks.map(renderTask),'## Work that depends on earlier tasks','','Each arrow means the later task requires the configured output of the earlier task. Missing supplied information does not create a graph node. The KPI and Program form outputs are added as prerequisites of the final menu/view assembly; the application shell remains the root.', '',graph,'','## Who covers each part of the build','',coverageMd,''].join('\n');
const changed=tasks.filter(t=>selected.includes(t.id));
let human=['# Supplier Scorecard implementation plan amendment — draft','','This proposal supplements the existing APP-01, CFG-03, SEC-26, and RPT-27 assignments. It does not replace their original build scope or change the established implementation-plan document. No new main-plan task ID is introduced.','','| Main-plan task | Amendment responsibility |','|---|---|',...changed.map(t=>`| ${t.originalTaskId} | ${t.id==='IMP-01'?'Three tab shells and nine grouping headers':t.id==='IMP-03'?'Catalogue maintenance division and field editability':t.id==='IMP-26'?'Tab-audience and review-authorization policies':'Twenty-four menu bindings, visibility and three default views'} |`),'','The 31 other task records are unchanged and are included only in the separate adapter for dependency validation. The earlier generation-scheduling amendment remains separate.','','## Draft addenda','',...changed.map(renderTask),'## Dependency amendment','','Keep existing prerequisites. Add the completed KPI administration forms from FRM-08 and Program/Generation Delay forms from FRM-11 as inputs to RPT-27. APP-01 has no later-view dependency; SEC-26 supplies policies and RPT-27 binds them to final navigation.','','## Scope and evidence limits','','Only the named Group/native-capability inputs and the separately supplied increment object/form remain outside this amendment. New component identifiers are outputs of their build tasks, not new user decisions. Catalogue lookup, source-record security, native audit, contribution links, and immutable versions remain in use. No data object, field, relationship, formula, or workflow is added by these addenda.',''].join('\n');
human=human.replace(/\bIMP-\d{2}\b/g,id=>originalIds[id]||id);
fs.writeFileSync(path.join(dir,'baseline-implementation-plan.md'),source);
fs.writeFileSync(path.join(dir,'baseline-task-snapshot.json'),JSON.stringify({sourceSha256:digest(source),tasks:rawTasks,canonicalTasks:tasks.map(t=>selected.includes(t.id)?null:t).filter(Boolean),baselineTaskHashes,originalToValidator:mappings},null,2)+'\n');
fs.writeFileSync(path.join(dir,'implementation-plan.json'),JSON.stringify(plan,null,2)+'\n');
fs.writeFileSync(path.join(dir,'implementation-plan.md'),markdown);
fs.writeFileSync(path.join(dir,'amendment-proposal.md'),human);
fs.writeFileSync(path.join(dir,'amendment-task-records.json'),JSON.stringify({draft:true,baseScopeRetained:true,originalToValidator:mappings,tasks:changed},null,2)+'\n');
fs.writeFileSync(path.join(dir,'ADAPTER.md'),'# Draft amendment adapter\n\n'+opening+'\n\nThe complete original source text and 35 original task records are preserved in implementation-plan.json under adapter.sourceText and adapter.baselineTaskRecords and in baseline-implementation-plan.md. The original-to-validator map is explicit and reversible. No main task is renamed. The four amended snapshots retain original scope and add configuration details; 31 unreviewed tasks retain their initial adapted hashes. The full rendered adapter supports graph/schema checks. amendment-proposal.md contains the four addenda for human review.\n\nThe task-content gate scope is IMP-01, IMP-03, IMP-26, IMP-27. A pass for those four records does not certify the 31 imported records or live tenant behavior. Both bundled gates must pass before delivery.\n');
console.log(JSON.stringify({directory:dir,taskCount:tasks.length,changedTaskIds:changedOriginalIds,validatorScope:selected,unchangedTaskCount:31,coverageCount:coverage.length,planDocumentUntouched:fs.readFileSync(planPath,'utf8')===source},null,2));
