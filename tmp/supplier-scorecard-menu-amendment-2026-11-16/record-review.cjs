const fs=require('node:fs');
const path=require('node:path');
const gate=require('C:/Users/DaveMcLean/.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs');
const dir=__dirname;
const plan=JSON.parse(fs.readFileSync(path.join(dir,'implementation-plan.json'),'utf8'));
const markdown=fs.readFileSync(path.join(dir,'implementation-plan.md'),'utf8');
// The decisions below were authored after reading the four complete rendered
// assignments and comparing their operative settings with the approved model.
// This file formats those decisions and calculates binding hashes only.
const decision=(p,c,m)=>({path:p,requiredChange:c,mechanism:m});
const reviews=[
 {
  id:'IMP-01',
  evidenceReview:'The original APP-01 assignment creates the application shell and generic navigation placeholders. The approved November 16 specification Section 16.4 supplies exactly three tab labels and nine grouping labels. The addendum keeps APP-01 as the prerequisite root and leaves the 24 menu destinations/defaults to the later view assignment. No existing live tenant menu or verified metadata ID is asserted.',
  languageReview:'I read the objective, expanded scope, twelve tab/group rows, two build steps, readiness text, role explanation and result checks. They state the user-visible tab/group result directly, preserve the supplied business labels, and distinguish shell creation from later bindings without requiring the assignee to interpret numbered requirements.',
  meaningReview:'I reconciled the exact ordered tab labels, the two/three/four group counts and all nine header spellings with the approved specification. APP-01 remains an Associate Consultant assignment reviewed by a Senior Consultant, has no predecessor, creates no extra contribution tab, and receives no dependency on reports or security work that would create a cycle.',
  checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
  instructions:[
   decision('scope','Expand the original generic application-shell scope with the three fixed tab labels and nine named groupings, leaving final destinations and defaults to later work.','Native Application and Application tab/Menu grouping configuration.'),
   decision('configurationRows.0','Create Supplier Scorecards as the first application tab.','Application tab display-label and ordering settings.'),
   decision('configurationRows.1','Create Program Administration as the second application tab.','Application tab display-label and ordering settings.'),
   decision('configurationRows.2','Create Program Development as the third application tab.','Application tab display-label and ordering settings.'),
   decision('configurationRows.3','Add Performance & History first beneath Supplier Scorecards.','Supplier Scorecards Menu grouping header and display order.'),
   decision('configurationRows.4','Add Reporting Progress & Review second beneath Supplier Scorecards.','Supplier Scorecards Menu grouping header and display order.'),
   decision('configurationRows.5','Add Program & Scoring Setup first beneath Program Administration.','Program Administration Menu grouping header and display order.'),
   decision('configurationRows.6','Add Program Operations & Data Review second beneath Program Administration.','Program Administration Menu grouping header and display order.'),
   decision('configurationRows.7','Add Business Classifications third beneath Program Administration.','Program Administration Menu grouping header and display order.'),
   decision('configurationRows.8','Add Scoring & Value Definitions first beneath Program Development.','Program Development Menu grouping header and display order.'),
   decision('configurationRows.9','Add Data Collection & Initialization second beneath Program Development.','Program Development Menu grouping header and display order.'),
   decision('configurationRows.10','Add Scheduling third beneath Program Development.','Program Development Menu grouping header and display order.'),
   decision('configurationRows.11','Add Result Provenance & Exceptions fourth beneath Program Development.','Program Development Menu grouping header and display order.'),
   decision('steps.0','Create the application container together with the three ordered tab shells.','Native application/container and tab setup.'),
   decision('steps.1','Populate the nine ordered grouping labels without introducing an extra contribution tab.','Native application menu grouping configuration.')
  ]
 },
 {
  id:'IMP-03',
  evidenceReview:'The original CFG-03 assignment owns catalogue forms, inherited fields, active filtering, audit and basic permissions. The updated specification Sections 7 and 16.1 explicitly replaces the blanket maintenance grant with three business and ten technical catalogues. I checked all thirteen names, the inherited Code/Name/Active?/Sort contract, Description on KPI Aggregation Method, and Frequency on Scorecard Cadence. The increment object/form is an earlier scheduling-amendment output, so only its privilege assignment waits for that target.',
  languageReview:'I read every catalogue row and each field-editability row without source references. Each identifies a concrete catalogue or field and names the allowed users, with lookup access explained separately. The task preserves the original catalogue setup scope and describes missing Group/target/capability information locally rather than turning it into a discovery assignment.',
  meaningReview:'I reconciled maintenance for Supplier Commodity, NAICS Classification and KPI Category to the application-admin group or Administrators, and all ten technical domains to Administrators only. The new grant applies across direct and administrative paths while Code first-use stability, used-Cadence Frequency immutability, inactive historical references, inherited field ownership, audit and inverse suppression remain as before. No field, Code, seed or inheritance change is assigned.',
  checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
  instructions:[
   decision('scope','Replace the planned blanket catalogue grant with the explicit three-business/ten-technical division and retain consuming-record lookup access.','Concrete catalogue record permissions and inherited/direct field editability settings.'),
   decision('configurationRows.0','Limit Supplier Commodity maintenance to the application-admin group or Administrators across the assigned access paths.','Supplier Commodity record administration permissions.'),
   decision('configurationRows.1','Limit NAICS Classification maintenance to the application-admin group or Administrators across the assigned access paths.','NAICS Classification record administration permissions.'),
   decision('configurationRows.2','Limit KPI Category maintenance to the application-admin group or Administrators across the assigned access paths.','KPI Category record administration permissions.'),
   decision('configurationRows.3','Restrict KPI Aggregation Method maintenance to Administrators rather than ordinary application administrators.','KPI Aggregation Method catalogue record permissions.'),
   decision('configurationRows.4','Restrict KPI Value Type maintenance to Administrators rather than ordinary application administrators.','KPI Value Type catalogue record permissions.'),
   decision('configurationRows.5','Restrict KPI Contribution Source maintenance to Administrators rather than ordinary application administrators.','KPI Contribution Source catalogue record permissions.'),
   decision('configurationRows.6','Restrict KPI Collection Method maintenance to Administrators rather than ordinary application administrators.','KPI Collection Method catalogue record permissions.'),
   decision('configurationRows.7','Restrict KPI Initialization Method maintenance to Administrators rather than ordinary application administrators.','KPI Initialization Method catalogue record permissions.'),
   decision('configurationRows.8','Restrict Safety Benchmark Metric maintenance to Administrators rather than ordinary application administrators.','Safety Benchmark Metric catalogue record permissions.'),
   decision('configurationRows.9','Restrict Scorecard Cadence maintenance to Administrators, retaining its existing used-record scheduling restrictions.','Scorecard Cadence catalogue record permissions.'),
   decision('configurationRows.10','Assign Administrators-only maintenance to Generation Lag Time Increment when the separately supplied object/form exists.','Generation Lag Time Increment catalogue record permissions on the earlier output.'),
   decision('configurationRows.11','Restrict KPI Value Origin maintenance to Administrators rather than ordinary application administrators.','KPI Value Origin catalogue record permissions.'),
   decision('configurationRows.12','Restrict Publication Exception Treatment maintenance to Administrators rather than ordinary application administrators.','Publication Exception Treatment catalogue record permissions.'),
   decision('configurationRows.13','Apply the concrete-child maintainer rule to inherited Code without changing first-use stability or redeclaring the field.','Inherited Code editability enforced on concrete catalogue administration.'),
   decision('configurationRows.14','Apply the concrete-child maintainer rule to inherited Name while retaining localizable labels.','Inherited Name editability enforced on concrete catalogue administration.'),
   decision('configurationRows.15','Apply the concrete-child maintainer rule to inherited Active? without invalidating existing historical references.','Inherited Active? editability enforced on concrete catalogue administration.'),
   decision('configurationRows.16','Apply the concrete-child maintainer rule to inherited Sort without adding another field declaration.','Inherited Sort editability enforced on concrete catalogue administration.'),
   decision('configurationRows.17','Restrict the directly declared Description field to Administrators; record changes do not implement unsupported algorithms.','KPI Aggregation Method.Description field permission.'),
   decision('configurationRows.18','Restrict Frequency editing to Administrators before its first published Program Version use and retain the later stability lock.','Scorecard Cadence.Frequency field permission with existing publication-use condition.'),
   decision('configurationRows.19','Separate lookup/read rights from maintenance so supported active values and historical inactive references remain usable.','Catalogue read/selection permissions on consuming configuration and operational records.'),
   decision('steps.0','Apply the two maintainer sets at concrete record and inherited/direct field boundaries.','Catalogue object and field permission configuration.'),
   decision('steps.1','Configure independent lookup rights for legitimate KPI, Program, benchmark and operational selections.','Catalogue read permission and existing active-selection filters.')
  ]
 },
 {
  id:'IMP-26',
  evidenceReview:'The original SEC-26 task owns nuanced application/object/record/workflow security. The approved specification fixes the three tab audiences and reviewer-only menu, while retaining supplier scope and existing action controls. I checked that this addendum supplies policies rather than trying to bind menu records before the later reporting task creates them. Catalogue record/field maintenance is owned by CFG-03, avoiding duplicated configuration ownership.',
  languageReview:'I read the original retained security scope, added audience policies, current-review condition, local waiting information and acceptance examples. The task explains who receives each tab and why tab membership cannot grant operations. Native Group bindings remain supplied configuration inputs; no system-processing grant or invented principal is assigned.',
  meaningReview:'Supplier Scorecards remains internal and scoped. Program Administration allows the application-admin group and Administrators; Program Development permits Administrators only. Review eligibility is for the applicable cycle and is passed to final menu assembly. Existing form/workflow/publication predecessors remain; no dependence on later RPT-27 menu records or grant of contribution/override/publication actions through tab access was introduced.',
  checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
  instructions:[
   decision('scope','Extend the existing security build with three tab-audience policies and a cycle-specific review condition for later binding.','Native application-user access policies and existing record/action permission controls.'),
   decision('configurationRows.0','Define the Supplier Scorecards audience as authorized internal SIA users within their existing supplier scope.','Internal-viewer application access policy.'),
   decision('configurationRows.1','Define the Program Administration audience as application admins or Administrators while preserving separate action checks.','Program Administration user-group access policy.'),
   decision('configurationRows.2','Define Program Development eligibility using Administrators membership only.','Program Development user-group access policy.'),
   decision('configurationRows.3','Supply the applicable reporting-cycle review authorization condition for conditional final navigation.','Existing reviewer authorization policy exposed for the later menu/view binding.'),
   decision('configurationRows.4','Keep tab eligibility separate from contributor, coordinator, correction, override and publication authority.','Record/workflow/action permission evaluation beneath navigation access.'),
   decision('steps.0','Assign the three approved audience policies to the supplied native Groups and current eligibility.','Application user-group policy configuration.'),
   decision('steps.1','Supply review eligibility for later menu visibility while retaining authoritative checks for followed and direct links.','Reviewer authorization output and record/action access enforcement.')
  ]
 },
 {
  id:'IMP-27',
  evidenceReview:'The updated specification Section 16.4 supplies all 24 menu labels, nine tab/group placements, destination objects/views and three default views. I compared each rendered row with that table and the approved conversation. The retained RPT-27 scope already owns native views and reporting. KPI and Program form prerequisites are added because final navigation opens those experiences. Only unverified native binding support is an input; newly created identifiers are build outputs.',
  languageReview:'I read all 27 feature rows, three ordered instructions, result checks, predecessor outputs and task-local waiting statements. Each menu path names the tab, grouping and displayed item before stating what opens. Blank defaults, reviewer-only visibility and the increment-specific blocker are understandable without source references, and the original reporting/ranking responsibilities remain explicit.',
  meaningReview:'I reconciled the five/nine/ten menu counts, exact destinations and item order. Defaults remain Scorecard Overview, blank, blank. Final assembly consumes rather than redefines the security policies and catalogue privileges. No My Contribution Tasks menu, fourth tab, abstract-catalogue form, or unrestricted Generation Delay creation path is added. Native audit, immutable Versions and existing contribution links remain in use; the separate increment object/form is not created here.',
  checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true},
  instructions:[
   decision('scope','Extend the retained views/reports assignment with 24 ordered menu links, security-policy bindings and three approved tab defaults.','Native report/view creation plus application menu destination/default bindings.'),
   decision('configurationRows.0','Add Scorecard Overview first in Performance & History and open the results/cycle/completion dashboard.','Supplier Scorecards menu destination binding to native overview views.'),
   decision('configurationRows.1','Add Supplier Scorecards second and bind the filtered operational snapshot inventory.','Supplier Scorecard inventory menu binding with existing record/stage security.'),
   decision('configurationRows.2','Add Supplier Scorecard History third and bind supplier company/facility profile history.','Supplier-profile navigation and related Scorecard history view binding.'),
   decision('configurationRows.3','Add Contribution Progress first in its grouping as read-only task/Run completion reporting.','Native Scorecard Contribution Task/Run progress report menu binding.'),
   decision('configurationRows.4','Add Scorecards in Review second and bind visibility to applicable-cycle review authorization.','Consolidated review view binding and supplied conditional reviewer visibility.'),
   decision('configurationRows.5','Add Scorecard Programs first in setup and open Program authoring with existing controlled child grids.','Scorecard Program inventory/authoring menu binding.'),
   decision('configurationRows.6','Add KPI Library second in setup and open KPI authoring and its immutable Versions.','Supplier Scorecard KPI authoring menu binding.'),
   decision('configurationRows.7','Add Supplier Participation third and open exact supplier/program effective-period assignments.','Supplier Scorecard Participation inventory menu binding.'),
   decision('configurationRows.8','Add Safety Benchmarks fourth and open benchmark authoring with immutable Versions.','Safety Benchmark authoring inventory menu binding.'),
   decision('configurationRows.9','Add Scorecard Runs first in operations and open monitoring with existing action checks.','Supplier Scorecard Run inventory menu binding.'),
   decision('configurationRows.10','Add Reported KPI Data second in operations and open governed values/provenance/points with native evidence.','Scorecard KPI Value report/view binding to native record audit and workflow history.'),
   decision('configurationRows.11','Add Supplier Commodities first among business classifications and open its catalogue.','Supplier Commodity catalogue administration menu binding.'),
   decision('configurationRows.12','Add NAICS Classifications second among business classifications and open its catalogue.','NAICS Classification catalogue administration menu binding.'),
   decision('configurationRows.13','Add KPI Categories third among business classifications and open its catalogue.','KPI Category catalogue administration menu binding.'),
   decision('configurationRows.14','Add KPI Aggregation Methods first in scoring/value definitions and open supported method records.','KPI Aggregation Method catalogue administration menu binding.'),
   decision('configurationRows.15','Add KPI Value Types second in scoring/value definitions and open supported typed-value records.','KPI Value Type catalogue administration menu binding.'),
   decision('configurationRows.16','Add Safety Benchmark Metrics third in scoring/value definitions and open metric records.','Safety Benchmark Metric catalogue administration menu binding.'),
   decision('configurationRows.17','Add KPI Contribution Sources first in collection/initialization and open source classifications.','KPI Contribution Source catalogue administration menu binding.'),
   decision('configurationRows.18','Add KPI Collection Methods second in collection/initialization and open processing-method records.','KPI Collection Method catalogue administration menu binding.'),
   decision('configurationRows.19','Add KPI Initialization Methods third in collection/initialization and open initial-value method records.','KPI Initialization Method catalogue administration menu binding.'),
   decision('configurationRows.20','Add Scorecard Cadences first in Scheduling and open recurrence records.','Scorecard Cadence catalogue administration menu binding.'),
   decision('configurationRows.21','Add Generation Lag Time Increments second in Scheduling after the separately supplied target exists.','Generation Lag Time Increment catalogue administration menu binding.'),
   decision('configurationRows.22','Add KPI Value Origins first in provenance/exceptions and open provenance catalogue records.','KPI Value Origin catalogue administration menu binding.'),
   decision('configurationRows.23','Add Publication Exception Treatments second in provenance/exceptions and open treatment records.','Publication Exception Treatment catalogue administration menu binding.'),
   decision('configurationRows.24','Set Supplier Scorecards to display Scorecard Overview immediately when opened.','Supplier Scorecards tab default-view binding.'),
   decision('configurationRows.25','Set Program Administration to open blank content until a menu item is selected.','Program Administration tab blank default-view setting.'),
   decision('configurationRows.26','Set Program Development to open blank content until a menu item is selected.','Program Development tab blank default-view setting.'),
   decision('steps.0','Create the named overview and supplemental views using configured records, responsive forms and native reporting.','Native report/view configuration within the retained reporting task.'),
   decision('steps.1','Bind the full ordered menu mapping and apply the previously configured tab/review policies.','Application menu destination and visibility settings.'),
   decision('steps.2','Set the three explicit defaults and omit unapproved task, fourth-tab, abstract-catalogue and unrestricted-delay menus.','Application tab default-view and approved menu composition settings.')
  ]
 }
];
for(const review of reviews){
 const task=plan.tasks.find(t=>t.id===review.id);
 review.taskHash=gate.hash(task);
 review.renderedTaskHash=gate.renderedHash(markdown,review.id);
 const actual=gate.units(task).map(x=>x.path).sort();
 const reviewed=review.instructions.map(x=>x.path).sort();
 if(JSON.stringify(actual)!==JSON.stringify(reviewed))throw Error('Manual instruction review paths incomplete for '+review.id);
}
const selected=reviews.map(r=>r.id);
const record={version:1,reviewDate:'2026-11-16',scope:'Four task addenda only; original 31 imported assignments are frozen and unreviewed.',tasks:reviews,unchangedTaskHashes:Object.fromEntries(Object.entries(plan.adapter.baselineTaskHashes).filter(([id])=>!selected.includes(id)))};
fs.writeFileSync(path.join(dir,'implementation-content-review.json'),JSON.stringify(record,null,2)+'\n');
console.log(JSON.stringify({reviewedTasks:reviews.length,reviewedInstructions:reviews.reduce((n,r)=>n+r.instructions.length,0),frozenUnreviewedTasks:Object.keys(record.unchangedTaskHashes).length},null,2));
