# Supplier Scorecard navigation and security amendment tasks

This revision retains four separate amendment tasks and all 35 original task records unchanged. AMD-02 creates/reuses the three named native Groups and assigns catalogue Rights/maintenance. AMD-03 consumes those Groups for application/tab/object/inherited supplier access. AMD-04 consumes both outputs for final navigation. No specification or tenant configuration is changed by this ownership move.

| Amendment task | Linked original | Work needed first |
|---|---|---|
| AMD-01 — Add the Three Supplier Scorecard Tabs and Menu Groups | APP-01 | APP-01 |
| AMD-02 — Create Security Groups and Configure Catalogue Permissions | CFG-03 | CFG-03 |
| AMD-03 — Configure Application and Supplier Record Access | SEC-26 | SEC-26, AMD-01, AMD-02 |
| AMD-04 — Add Menu Links and Default Views | RPT-27 | RPT-27, AMD-02, AMD-03, FRM-08, FRM-11 |

## Amendment assignments

### AMD-01 — Add the Three Supplier Scorecard Tabs and Menu Groups

**Task ID:** AMD-01

**Title:** Add the Three Supplier Scorecard Tabs and Menu Groups

**Category:** Application configuration

**Objective:** Give internal viewers, program administrators, and developers their own clearly organized navigation.

**Detailed scope:** Configure the existing Supplier Scorecard application with exactly three ordered tabs: Supplier Scorecards, Program Administration, and Program Development. Add their nine ordered menu grouping headers. Use the application and placeholder navigation provided by the original application assignment; configure the approved three-tab structure without duplicating tabs or retaining an additional contribution tab. Leave final menu destinations, visibility bindings, and default views to the separate menu amendment task.

**Deliverable:** Three ordered application tabs and nine ordered menu grouping headers in the existing Supplier Scorecard application.

**Work needed first:** APP-01

**What is waiting:** The tab and grouping labels are decided. Configuration can start when the original application task has supplied the Supplier Scorecard application and its placeholder navigation.

**Recommended implementer role:** Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Adding tabs and ordered menu grouping headers is bounded application configuration suited to an Associate Consultant, with Senior Consultant review.

What the earlier tasks provide: APP-01: Configured Supplier Scorecard application shell with role-ready navigation.

**Fields and features to set up:**

| Field or feature | What to set up |
|---|---|
| Supplier Scorecards tab | Add the first Application tab with display label Supplier Scorecards. |
| Program Administration tab | Add the second Application tab with display label Program Administration. |
| Program Development tab | Add the third Application tab with display label Program Development. |
| Supplier Scorecards — Performance & History | Add the Menu grouping header Performance & History in position 1 within Supplier Scorecards. |
| Supplier Scorecards — Reporting Progress & Review | Add the Menu grouping header Reporting Progress & Review in position 2 within Supplier Scorecards. |
| Program Administration — Program & Scoring Setup | Add the Menu grouping header Program & Scoring Setup in position 1 within Program Administration. |
| Program Administration — Program Operations & Data Review | Add the Menu grouping header Program Operations & Data Review in position 2 within Program Administration. |
| Program Administration — Business Classifications | Add the Menu grouping header Business Classifications in position 3 within Program Administration. |
| Program Development — Scoring & Value Definitions | Add the Menu grouping header Scoring & Value Definitions in position 1 within Program Development. |
| Program Development — Data Collection & Initialization | Add the Menu grouping header Data Collection & Initialization in position 2 within Program Development. |
| Program Development — Scheduling | Add the Menu grouping header Scheduling in position 3 within Program Development. |
| Program Development — Result Provenance & Exceptions | Add the Menu grouping header Result Provenance & Exceptions in position 4 within Program Development. |

**Build instructions:**

1. Configure the supplied Supplier Scorecard application with the three ordered tab shells, reusing or replacing its placeholder navigation so no duplicate or extra tab remains.
2. Add the nine menu grouping headers to the stated tabs in their stated order; create no additional contribution tab.

**How to check the result:**

- The application has exactly three tabs in this order: Supplier Scorecards, Program Administration, Program Development.
- Supplier Scorecards has two grouping headers, Program Administration has three, and Program Development has four, using the exact displayed labels and order assigned here.

**Information needed for this task:** None

**Specification references:** Linked original assignment APP-01; its record and dependencies remain unchanged. Technical specification Sections 16.4 and 21.2; SC-035.

**Assumptions and open questions:** The original application task remains unchanged and supplies the application container. This amendment adds only the approved tabs/groupings and does not recreate that container.

### AMD-02 — Create Security Groups and Configure Catalogue Permissions

**Task ID:** AMD-02

**Title:** Create Security Groups and Configure Catalogue Permissions

**Category:** Catalogue configuration

**Objective:** Establish the three dedicated security groups and give them the approved catalogue read and maintenance permissions.

**Detailed scope:** Create or reuse exactly one native Group for each of these names: Supplier Scorecard App - Supplier User Security Group; Supplier Scorecard App - Viewers Security Group; Supplier Scorecard App - Application Admin Security Group. Give all three View via Rights on the thirteen concrete scorecard catalogues. Give the Application Admin group View/Create/Edit/Delete on Supplier Commodity, NAICS Classification and KPI Category subject to existing protections, and reserve maintenance of the ten technical catalogues for Administrators. Apply the maintainer rules to inherited and directly declared editable fields and preserve supported lookup and historical references. Repeating setup must not duplicate Groups or repurpose a general Supplier User group.

**Deliverable:** Three exact named native Group records, thirteen-catalogue View Rights, and the three-business/ten-technical catalogue maintenance permissions.

**Work needed first:** CFG-03

**What is waiting:** The original catalogue task must supply its catalogue objects and forms. The exact Group names and grants are decided, so Group creation/reuse and the twelve available catalogue assignments can proceed without a new naming decision. Only Generation Lag Time Increment Rights and maintenance wait for its object/form from the separate scheduling amendment; membership administration remains outside this task.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Creating native Groups and separating catalogue read Rights, record maintenance and inherited/direct field editability requires Senior Associate Consultant judgment, with Senior Consultant review.

What the earlier tasks provide: CFG-03: Configured catalogue fields, forms, filters, audit, and permissions.

**Fields and features to set up:**

| Field or feature | What to set up |
|---|---|
| Supplier Scorecard App - Supplier User Security Group Group record | Create the native Group with exact Name Supplier Scorecard App - Supplier User Security Group if absent. Reuse the verified exact matching record if present so repeating setup creates no duplicate; do not rename a general Supplier User group or assign members without approved membership. |
| Supplier Scorecard App - Viewers Security Group Group record | Create the native Group with exact Name Supplier Scorecard App - Viewers Security Group if absent. Reuse the verified exact matching record if present so repeating setup creates no duplicate; do not rename a general Supplier User group or assign members without approved membership. |
| Supplier Scorecard App - Application Admin Security Group Group record | Create the native Group with exact Name Supplier Scorecard App - Application Admin Security Group if absent. Reuse the verified exact matching record if present so repeating setup creates no duplicate; do not rename a general Supplier User group or assign members without approved membership. |
| Supplier Commodity View Rights | Grant View via Rights on Supplier Commodity to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| NAICS Classification View Rights | Grant View via Rights on NAICS Classification to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| KPI Category View Rights | Grant View via Rights on KPI Category to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| KPI Aggregation Method View Rights | Grant View via Rights on KPI Aggregation Method to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| KPI Value Type View Rights | Grant View via Rights on KPI Value Type to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| KPI Contribution Source View Rights | Grant View via Rights on KPI Contribution Source to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| KPI Collection Method View Rights | Grant View via Rights on KPI Collection Method to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| KPI Initialization Method View Rights | Grant View via Rights on KPI Initialization Method to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| Safety Benchmark Metric View Rights | Grant View via Rights on Safety Benchmark Metric to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| Scorecard Cadence View Rights | Grant View via Rights on Scorecard Cadence to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| Generation Lag Time Increment View Rights | Grant View via Rights on Generation Lag Time Increment to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| KPI Value Origin View Rights | Grant View via Rights on KPI Value Origin to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| Publication Exception Treatment View Rights | Grant View via Rights on Publication Exception Treatment to all three exact named security groups stated in this task. This is catalogue read access, not application/tab Use or maintenance. |
| Supplier Commodity catalogue maintenance | Grant View, Create, Edit and Delete on Supplier Commodity to Supplier Scorecard App - Application Admin Security Group and Administrators. Grant no Create/Edit/Delete to the supplier or viewer security group. Enforce the same restrictions on forms, direct URLs, APIs and import/update paths, with existing stable-Code, reference and deletion protections. |
| NAICS Classification catalogue maintenance | Grant View, Create, Edit and Delete on NAICS Classification to Supplier Scorecard App - Application Admin Security Group and Administrators. Grant no Create/Edit/Delete to the supplier or viewer security group. Enforce the same restrictions on forms, direct URLs, APIs and import/update paths, with existing stable-Code, reference and deletion protections. |
| KPI Category catalogue maintenance | Grant View, Create, Edit and Delete on KPI Category to Supplier Scorecard App - Application Admin Security Group and Administrators. Grant no Create/Edit/Delete to the supplier or viewer security group. Enforce the same restrictions on forms, direct URLs, APIs and import/update paths, with existing stable-Code, reference and deletion protections. |
| KPI Aggregation Method catalogue maintenance | Restrict Create, Edit and Delete on KPI Aggregation Method to members of Administrators. The three named Supplier Scorecard groups retain View via Rights only; Application Admin membership alone grants no maintenance through forms, direct URLs, APIs or import/update paths. Preserve stable-Code, reference and lifecycle restrictions. |
| KPI Value Type catalogue maintenance | Restrict Create, Edit and Delete on KPI Value Type to members of Administrators. The three named Supplier Scorecard groups retain View via Rights only; Application Admin membership alone grants no maintenance through forms, direct URLs, APIs or import/update paths. Preserve stable-Code, reference and lifecycle restrictions. |
| KPI Contribution Source catalogue maintenance | Restrict Create, Edit and Delete on KPI Contribution Source to members of Administrators. The three named Supplier Scorecard groups retain View via Rights only; Application Admin membership alone grants no maintenance through forms, direct URLs, APIs or import/update paths. Preserve stable-Code, reference and lifecycle restrictions. |
| KPI Collection Method catalogue maintenance | Restrict Create, Edit and Delete on KPI Collection Method to members of Administrators. The three named Supplier Scorecard groups retain View via Rights only; Application Admin membership alone grants no maintenance through forms, direct URLs, APIs or import/update paths. Preserve stable-Code, reference and lifecycle restrictions. |
| KPI Initialization Method catalogue maintenance | Restrict Create, Edit and Delete on KPI Initialization Method to members of Administrators. The three named Supplier Scorecard groups retain View via Rights only; Application Admin membership alone grants no maintenance through forms, direct URLs, APIs or import/update paths. Preserve stable-Code, reference and lifecycle restrictions. |
| Safety Benchmark Metric catalogue maintenance | Restrict Create, Edit and Delete on Safety Benchmark Metric to members of Administrators. The three named Supplier Scorecard groups retain View via Rights only; Application Admin membership alone grants no maintenance through forms, direct URLs, APIs or import/update paths. Preserve stable-Code, reference and lifecycle restrictions. |
| Scorecard Cadence catalogue maintenance | Restrict Create, Edit and Delete on Scorecard Cadence to members of Administrators. The three named Supplier Scorecard groups retain View via Rights only; Application Admin membership alone grants no maintenance through forms, direct URLs, APIs or import/update paths. Preserve stable-Code, reference and lifecycle restrictions. |
| Generation Lag Time Increment catalogue maintenance | Restrict Create, Edit and Delete on Generation Lag Time Increment to members of Administrators. The three named Supplier Scorecard groups retain View via Rights only; Application Admin membership alone grants no maintenance through forms, direct URLs, APIs or import/update paths. Preserve stable-Code, reference and lifecycle restrictions. |
| KPI Value Origin catalogue maintenance | Restrict Create, Edit and Delete on KPI Value Origin to members of Administrators. The three named Supplier Scorecard groups retain View via Rights only; Application Admin membership alone grants no maintenance through forms, direct URLs, APIs or import/update paths. Preserve stable-Code, reference and lifecycle restrictions. |
| Publication Exception Treatment catalogue maintenance | Restrict Create, Edit and Delete on Publication Exception Treatment to members of Administrators. The three named Supplier Scorecard groups retain View via Rights only; Application Admin membership alone grants no maintenance through forms, direct URLs, APIs or import/update paths. Preserve stable-Code, reference and lifecycle restrictions. |
| Inherited Code editability | Apply the concrete catalogue maintainer rule to inherited Code. Keep it editable before first use only and stable thereafter; do not redeclare the field. |
| Inherited Name editability | Apply the concrete catalogue maintainer rule to inherited Name, retaining localizable labels without redeclaring the field. |
| Inherited Active? editability | Apply the concrete catalogue maintainer rule to inherited Active?. Preserve inactive references on version/historical records without redeclaring the field. |
| Inherited Sort editability | Apply the concrete catalogue maintainer rule to inherited Sort without redeclaring the field. |
| KPI Aggregation Method.Description editability | Allow editing only by Administrators; changing a catalogue record does not implement an unsupported algorithm. |
| Scorecard Cadence.Frequency editability | Allow editing only by Administrators before the Cadence is first referenced by a published Program Version. Keep Frequency stable thereafter; a materially different schedule requires a new Cadence record. |
| Catalogue lookup behavior | Keep permitted active values selectable on consuming records and inactive values readable where already referenced historically. Catalogue View Rights grant no maintenance or application/tab Use. |

**Build instructions:**

1. Create or reuse the three exact named Groups before assigning catalogue Rights, without duplicate creation or repurposing a general Supplier User group; keep membership administration with its supplied owner.
2. Grant catalogue View via Rights to the three supplied Group records on each of the thirteen concrete catalogues.
3. Configure business-catalogue maintenance and Administrators-only technical maintenance at their record and field boundaries.
4. Apply the new grants without bypassing stable-Code, published-reference, used-Cadence or deletion protections.

**How to check the result:**

- Exactly one verified Group is used for each approved exact name; repeating setup creates no duplicate or changes to a general Supplier User group.
- A user belonging only to Supplier Scorecard App - Supplier User Security Group can read all thirteen concrete catalogues via Rights and receives no catalogue Create, Edit or Delete permission.
- A user belonging only to Supplier Scorecard App - Viewers Security Group can read all thirteen concrete catalogues via Rights and cannot maintain them.
- A user belonging only to Supplier Scorecard App - Application Admin Security Group can read all thirteen catalogues and maintain Supplier Commodity, NAICS Classification and KPI Category subject to lifecycle protections.
- The Application Admin user cannot maintain any of the ten technical catalogues through forms, direct URLs, APIs or import/update paths; Administrators can maintain supported technical records subject to the existing locks.
- Catalogue lookup adds no application/tab Use, inherited fields remain inherited, and inactive historical references remain readable.

**Information needed for this task:** IN-22: Supply the Generation Lag Time Increment object and form from the separate scheduling amendment. Only that catalogue View Rights and maintenance assignment waits; the twelve other catalogue assignments can proceed.

**Specification references:** Linked original CFG-03 remains unchanged. Updated technical specification Sections 7, 16.1.1 and 16.1.2; SC-036, SC-038 and SC-040.

**Assumptions and open questions:** These are native Group records, not new business objects or inheritance classes. This task owns their creation/reuse and catalogue Rights/maintenance. The access amendment consumes the created Groups for app/tab/object/inherited access; the original catalogue configuration remains unchanged. Group membership is externally administered.

### AMD-03 — Configure Application and Supplier Record Access

**Task ID:** AMD-03

**Title:** Configure Application and Supplier Record Access

**Category:** Security configuration

**Objective:** Give suppliers published results through their supplier records and give internal viewers and administrators the approved application access.

**Detailed scope:** Use the three exact named Group records supplied by the catalogue-permission amendment. Configure application/tab Use independently of object grants. The supplier group gets no app/tab Use and inherits View only from accessible Supplier Abstract records to Published Supplier Scorecards and then their associated Scorecard KPI Values. Supplier Scorecard App - Viewers Security Group gets app and Supplier Scorecards tab Use plus View on all fourteen non-catalogue objects. Supplier Scorecard App - Application Admin Security Group gets app, Supplier Scorecards and Program Administration tab Use plus View/Create/Edit/Delete on those fourteen objects, subject to existing lifecycle, field, controlled-action and deletion protections. Retain Administrators-only Program Development. Supply current review eligibility and supplier notification eligibility without requiring supplier app/tab Use.

**Deliverable:** Application/tab Use grants, fourteen-object permissions, published-only supplier View inheritance and review/notification eligibility bindings for the supplied Groups.

**Work needed first:** SEC-26, AMD-01, AMD-02

**What is waiting:** Consume the original security outputs, the three configured tabs and the three named Group records from the catalogue-permission amendment. The decided Use and object grants can then proceed. Approved membership affects identity-based checks; only unsupported native View-only inheritance, current-access propagation, Published filtering and recipient authorization bindings wait for the technical input.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Why this role is recommended:** App/tab permissions, object grants, supplier inheritance, publication conditions and protected operations require a Senior Consultant and separate Principal Consultant reviewer.

What the earlier tasks provide: SEC-26: Complete scorecard security configuration across all surfaces. AMD-01: Three ordered application tabs and nine ordered menu grouping headers in the existing Supplier Scorecard application. AMD-02: Three exact named native Group records, thirteen-catalogue View Rights, and the three-business/ten-technical catalogue maintenance permissions.

**Fields and features to set up:**

| Field or feature | What to set up |
|---|---|
| Supplier group application Use | Grant no Use for the Supplier Scorecard application to Supplier Scorecard App - Supplier User Security Group. Supplier identities must not acquire app Use through another group; apply approved membership separation. |
| Supplier group tab Use | Grant no Use for Supplier Scorecards, Program Administration or Program Development to Supplier Scorecard App - Supplier User Security Group; inherited record View must not become tab access. |
| Viewer group application Use | Grant Use for the Supplier Scorecard application to Supplier Scorecard App - Viewers Security Group. |
| Viewer group Supplier Scorecards tab Use | Grant Use for Supplier Scorecards to Supplier Scorecard App - Viewers Security Group, and no Use for Program Administration or Program Development through this group. |
| Application Admin group application Use | Grant Use for the Supplier Scorecard application to Supplier Scorecard App - Application Admin Security Group. |
| Application Admin group Supplier Scorecards tab Use | Grant Use for Supplier Scorecards to Supplier Scorecard App - Application Admin Security Group. |
| Application Admin group Program Administration tab Use | Grant Use for Program Administration to Supplier Scorecard App - Application Admin Security Group. |
| Program Development tab Use | Restrict Program Development Use to existing Administrators; none of the three named Supplier Scorecard groups receives this grant. |
| Supplier Scorecard KPI object permissions | Grant View on Supplier Scorecard KPI to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Keep stable Code after first Publish and existing authoring/Publish controls. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Supplier Scorecard KPI Version object permissions | Grant View on Supplier Scorecard KPI Version to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Create versions only through Publish; base rights do not permit manual creation, editing, deletion, re-dating or import-over. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Scorecard Program object permissions | Grant View on Scorecard Program to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Keep existing authoring, schedule, membership, stable-Code and Publish controls. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Scorecard Program KPI object permissions | Grant View on Scorecard Program KPI to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Keep membership changes within Program authoring and its existing publication restrictions. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Scorecard Program Version object permissions | Grant View on Scorecard Program Version to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Create only through Program Publish and keep immutable; base rights do not permit independent creation, edits, deletion or import-over. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Scorecard Program KPI Version object permissions | Grant View on Scorecard Program KPI Version to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Create only with Program Publish and keep immutable; base rights do not permit independent creation, edits or deletion. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Scorecard Program Generation Delay object permissions | Grant View on Scorecard Program Generation Delay to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Create only through New Delay for Next Generation on Program.Generation Delays; preserve read-only cycle fields and immutable/non-ordinarily-deletable applied records. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Supplier Scorecard Participation object permissions | Grant View on Supplier Scorecard Participation to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Keep exact supplier scope, creation-only Supplier/Program selection, range checks and status-capability restrictions. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Safety Benchmark object permissions | Grant View on Safety Benchmark to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Keep stable identity, NAICS/metric uniqueness, authoring and Publish controls. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Safety Benchmark Version object permissions | Grant View on Safety Benchmark Version to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Create only through Benchmark Publish and keep immutable; base rights do not permit manual creation, editing, deletion or import-over. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Supplier Scorecard Run object permissions | Grant View on Supplier Scorecard Run to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Keep generated-record creation, captured-field locks and existing coordinator, cancellation and publication controls. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Supplier Scorecard object permissions | Grant View on Supplier Scorecard to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Keep generated creation, captured fields, publication locks and privileged correction rules; no unrestricted manual creation or graph deletion. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Scorecard KPI Value object permissions | Grant View on Scorecard KPI Value to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Keep generated creation, typed/stage edit rules, read-only queried/calculated evidence and protected overrides/exceptions and published corrections. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Scorecard Contribution Task object permissions | Grant View on Scorecard Contribution Task to Supplier Scorecard App - Viewers Security Group, and View/Create/Edit/Delete to Supplier Scorecard App - Application Admin Security Group. Keep generated creation, assignment, completion/reopen eligibility, field locks and cancellation/deletion controls. Give the supplier group no blanket View or write grant; the two supplier-readable operational types use the separate inherited View rules. |
| Supplier Scorecard supplier View inheritance | For Supplier Scorecard App - Supplier User Security Group, inherit View only from the exact Supplier Abstract selected by Supplier Scorecard.Supplier. Require the Scorecard's native Published termination. Use the supported native binding; do not copy ACLs, use cross-supplier Run permissions or add another supplier relationship. |
| Scorecard KPI Value supplier View inheritance | For Supplier Scorecard App - Supplier User Security Group, inherit View only through Scorecard KPI Value.Scorecard to the authorized Published Scorecard, transitively using its Supplier access. Gate direct KPI Value access on that Scorecard's Published termination; KPI Value has no new workflow or publication field. Inherit no Create/Edit/Delete. |
| Supplier access-path and revocation enforcement | Apply current supplier authorization and Published checks to both record types through forms, direct URLs, APIs, search, exports, attachments and related-record navigation. Loss of Supplier Abstract access removes derived Scorecard/KPI Value View. Do not inherit through Run, Parent Company snapshot, Source Scorecards, Rolled Up Into or catalogue Rights; supplier access adds no Run, Program, version, Participation, Benchmark or Contribution Task View. |
| Supplier internal-field and source protection | Keep Override Rationale and Publication Exception Rationale internal through the existing field controls, keep administrative actions unavailable to suppliers, and reapply source-application security when following Source Evidence Link. Record View does not grant source-record access. |
| Applicable-review authorization condition | Supply current reporting-cycle review eligibility to final Scorecards in Review visibility and destination; object View or tab Use alone does not authorize review actions. |
| Protected actions beneath object grants | Keep contributor, coordinator, reviewer, correction, override, exception and publication eligibility at the actual action boundary. Base Application Admin CRUD remains subject to generated-record, immutable-version, applied-delay and deletion safeguards. |
| Prepublication supplier recipient eligibility | Bind the existing publication recipient resolution to current Supplier Scorecard App - Supplier User Security Group membership, eligible exact-supplier recipient role and View to the related Supplier Abstract. Before publication, validate eligibility for the intended Published result without requiring draft Scorecard View or app/tab Use; unresolved required recipients hold the affected publication. |
| Postpublication supplier notification authorization | After Scorecard Published termination and before existing notification dispatch, recheck recipient membership, account/role eligibility and actual inherited View of that Published Scorecard. Require no app/tab Use for Supplier Scorecard App - Supplier User Security Group; retain the existing dispatch, deduplication and supplier-context link behavior. |

**Build instructions:**

1. Configure app/tab Use separately from the stated View and CRUD object grants; retain Administrators-only Program Development and existing field/lifecycle/action safeguards.
2. Configure supplier View inheritance on Supplier Scorecard.Supplier and Scorecard KPI Value.Scorecard using the supplied native method, with current-access and Published checks on both direct paths before supplier entry is enabled.
3. Apply internal-field/source protections and supply current reporting-cycle review eligibility for final menu binding.
4. Bind supplier recipient authorization around the existing publication notification process: validate supplier membership and Supplier Abstract access before publication without exposing drafts, then recheck actual inherited Published View before sending without app/tab Use.

**How to check the result:**

- A user belonging only to Supplier Scorecard App - Supplier User Security Group has no application/tab Use yet can View its authorized Published Scorecard and KPI Values through supplier permission inheritance.
- That supplier user cannot open unpublished or out-of-scope Scorecards/KPI Values via direct URL, API, search, export, attachment or related route, and loss of source Supplier Abstract access removes derived View.
- The supplier group inherits no Create/Edit/Delete, no other non-catalogue object access, and no internal rationales, administrative actions or unauthorized source details.
- A user belonging only to Supplier Scorecard App - Viewers Security Group can Use the app and Supplier Scorecards tab and View all fourteen non-catalogue types, but receives no record write or other tab Use through this group.
- A user belonging only to Supplier Scorecard App - Application Admin Security Group can Use the app, Supplier Scorecards and Program Administration and has base CRUD on fourteen non-catalogue types, while Program Development and protected version/generated/applied-delay actions remain restricted.
- Recipient eligibility can pass before publication using the supplier authorization without draft access; after publication only a still-eligible recipient with actual inherited Published View receives the existing supplier link, without app/tab Use.
- Review menu eligibility remains reporting-cycle specific; tab Use and object View alone do not grant review actions.

**Information needed for this task:** IN-20: Supply approved membership and role-separation decisions for the three named Groups and existing Administrators/coordinator/review responsibilities. Group records are supplied by the catalogue-permission amendment; membership administration remains external, while the decided access grants can proceed on those records. IN-23: Supply the supported native View-only inheritance binding for Supplier Scorecard.Supplier and Scorecard KPI Value.Scorecard, current-access propagation, Published enforcement on both direct paths, and recipient eligibility checks before/after publication. Only these controls wait; do not invent enum values, copy supplier ACLs, or grant app Use as a workaround.

**Specification references:** Linked original SEC-26 remains unchanged. Updated technical specification Sections 12.2, 12.3, 16.1 and 16.2; SC-038 through SC-040. Existing AUT-25 dispatch remains unchanged; this amendment adds its recipient eligibility security binding.

**Assumptions and open questions:** The three native Group records and catalogue Rights are supplied by the catalogue-permission amendment; this task does not create or rename Groups. Final menu/supplier entry links belong to the menu amendment. Existing publication dispatch remains owned by the original notification task; this task adds only its group/record eligibility binding and application/object/record access rules.

### AMD-04 — Add Menu Links and Default Views

**Task ID:** AMD-04

**Title:** Add Menu Links and Default Views

**Category:** Reporting and view configuration

**Objective:** Let users open the approved scorecard destinations from the correct menu and see the intended view when entering each tab.

**Detailed scope:** Add the named overview, history, contribution-progress, review and reported-data views and the 24 ordered menu links across three tabs and nine groupings. Apply the supplied Use/review rules for Supplier Scorecard App - Viewers Security Group, Supplier Scorecard App - Application Admin Security Group and existing Administrators. Default Supplier Scorecards to Scorecard Overview and the other two tabs to blank content until a menu is selected. Configure supplier-context links for Supplier Scorecard App - Supplier User Security Group to open authorized Published Scorecards and associated KPI Values through inherited View without app/tab Use. Omit My Contribution Tasks.

**Deliverable:** Twenty-four authorized menu links, supplemental views, three tab defaults and supplier-context links opening published inherited records without application/tab Use.

**Work needed first:** RPT-27, AMD-02, AMD-03, FRM-08, FRM-11

**What is waiting:** Complete the original reports/forms, catalogue Rights/maintenance and named-group access outputs before final assembly. Only unverified native menu/default/review bindings wait for the navigation input. Supplier-context opening without app/tab Use waits only for the native access method. Only the increment menu link waits for its separate catalogue object/form.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Binding cross-object views, completed authoring forms, access rules, and default views requires Consultant judgment, reviewed by a Senior Consultant.

What the earlier tasks provide: RPT-27: Native operational and published reports/views with profile navigation and on-demand ranks. AMD-02: Three exact named native Group records, thirteen-catalogue View Rights, and the three-business/ten-technical catalogue maintenance permissions. AMD-03: Application/tab Use grants, fourteen-object permissions, published-only supplier View inheritance and review/notification eligibility bindings for the supplied Groups. FRM-08: Usable KPI authoring and immutable-version forms. FRM-11: Program/version administration forms and Generation Delay object/form/grid.

**Fields and features to set up:**

| Field or feature | What to set up |
|---|---|
| Supplier Scorecards > Performance & History > Scorecard Overview | Add menu item Scorecard Overview in position 1 within this grouping. Open the native dashboard/report views showing current results, reporting-cycle status, and contribution completion. |
| Supplier Scorecards > Performance & History > Supplier Scorecards | Add menu item Supplier Scorecards in position 2 within this grouping. Open the Supplier Scorecard inventory with supplier, program, reporting-period, and publication-status filters; apply existing record and stage permissions. |
| Supplier Scorecards > Performance & History > Supplier Scorecard History | Add menu item Supplier Scorecard History in position 3 within this grouping. Open supplier company/facility profiles and their related current and historical Supplier Scorecards. |
| Supplier Scorecards > Reporting Progress & Review > Contribution Progress | Add menu item Contribution Progress in position 1 within this grouping. Open read-only reporting over Scorecard Contribution Task and related Runs, showing assigned, completed, and overdue work within authorized scope. |
| Supplier Scorecards > Reporting Progress & Review > Scorecards in Review | Add menu item Scorecards in Review in position 2 within this grouping. Open the consolidated review view for applicable Runs and Scorecards. Bind menu visibility to the applicable-review authorization policy; ordinary internal-viewer access alone must not display or authorize the review menu. |
| Program Administration > Program & Scoring Setup > Scorecard Programs | Add menu item Scorecard Programs in position 1 within this grouping. Open Scorecard Program authoring. Its existing grids provide Program KPI membership, immutable Versions, and Generation Delays; delay creation stays on the controlled Program.Generation Delays action. |
| Program Administration > Program & Scoring Setup > KPI Library | Add menu item KPI Library in position 2 within this grouping. Open Supplier Scorecard KPI authoring for definitions, scoring settings, collection methods, applicability, and effective dates; open immutable Versions through the KPI record. |
| Program Administration > Program & Scoring Setup > Supplier Participation | Add menu item Supplier Participation in position 3 within this grouping. Open Supplier Scorecard Participation for exact supplier/program assignments and effective periods. |
| Program Administration > Program & Scoring Setup > Safety Benchmarks | Add menu item Safety Benchmarks in position 4 within this grouping. Open Safety Benchmark authoring and its related immutable Versions for effective-dated values. |
| Program Administration > Program Operations & Data Review > Scorecard Runs | Add menu item Scorecard Runs in position 1 within this grouping. Open the Supplier Scorecard Run inventory for monitoring and authorized operational actions; retain existing coordinator and workflow action checks. |
| Program Administration > Program Operations & Data Review > Reported KPI Data | Add menu item Reported KPI Data in position 2 within this grouping. Open the governed Scorecard KPI Value review/reporting view with reported values, provenance, queried/base, override and effective points, and publication exceptions; expose native audit/workflow evidence subject to existing privileged-action and supplier-scope controls. |
| Program Administration > Business Classifications > Supplier Commodities | Add menu item Supplier Commodities in position 1 within this grouping. Open Supplier Commodity catalogue maintenance. |
| Program Administration > Business Classifications > NAICS Classifications | Add menu item NAICS Classifications in position 2 within this grouping. Open NAICS Classification catalogue maintenance. |
| Program Administration > Business Classifications > KPI Categories | Add menu item KPI Categories in position 3 within this grouping. Open KPI Category catalogue maintenance. |
| Program Development > Scoring & Value Definitions > KPI Aggregation Methods | Add menu item KPI Aggregation Methods in position 1 within this grouping. Open KPI Aggregation Method catalogue maintenance for supported rollup and aggregation algorithms. |
| Program Development > Scoring & Value Definitions > KPI Value Types | Add menu item KPI Value Types in position 2 within this grouping. Open KPI Value Type catalogue maintenance for supported typed-value presentation and validation. |
| Program Development > Scoring & Value Definitions > Safety Benchmark Metrics | Add menu item Safety Benchmark Metrics in position 3 within this grouping. Open Safety Benchmark Metric catalogue maintenance for KPI-to-benchmark matching. |
| Program Development > Data Collection & Initialization > KPI Contribution Sources | Add menu item KPI Contribution Sources in position 1 within this grouping. Open KPI Contribution Source catalogue maintenance for internal, supplier, and automated contribution handling. |
| Program Development > Data Collection & Initialization > KPI Collection Methods | Add menu item KPI Collection Methods in position 2 within this grouping. Open KPI Collection Method catalogue maintenance for direct-entry and query processing. |
| Program Development > Data Collection & Initialization > KPI Initialization Methods | Add menu item KPI Initialization Methods in position 3 within this grouping. Open KPI Initialization Method catalogue maintenance for default and prior-period initialization. |
| Program Development > Scheduling > Scorecard Cadences | Add menu item Scorecard Cadences in position 1 within this grouping. Open Scorecard Cadence catalogue maintenance for scheduler recurrence and reporting-period behavior. |
| Program Development > Scheduling > Generation Lag Time Increments | Add menu item Generation Lag Time Increments in position 2 within this grouping. Open Generation Lag Time Increment catalogue maintenance for the exact case-sensitive interval Codes d and M after its object/form exists. |
| Program Development > Result Provenance & Exceptions > KPI Value Origins | Add menu item KPI Value Origins in position 1 within this grouping. Open KPI Value Origin catalogue maintenance for system-assigned provenance classifications. |
| Program Development > Result Provenance & Exceptions > Publication Exception Treatments | Add menu item Publication Exception Treatments in position 2 within this grouping. Open Publication Exception Treatment catalogue maintenance for zero-point and denominator-exclusion behavior. |
| Supplier Scorecards default view | Set the tab default to Scorecard Overview, so opening the tab displays that overview. |
| Program Administration default view | Set a blank content view when the tab opens. Do not open a dashboard, inventory, or record automatically; show the selected menu destination only after a menu item is chosen. |
| Program Development default view | Set a blank content view when the tab opens. Do not open a dashboard, inventory, or record automatically; show the selected menu destination only after a menu item is chosen. |
| Published supplier Scorecard profile links | Configure the existing Supplier Abstract.Scorecards profile/related view links so Supplier Scorecard App - Supplier User Security Group opens only its authorized Published Scorecard using inherited View without app/tab Use. Keep exact supplier context and use the supported entry method; add no supplier application tab. |
| Published supplier KPI Value detail links | From an authorized Published Scorecard, open its associated Scorecard KPI Value through the Scorecard relationship and inherited View without app/tab Use. Apply the supplied Published, current-supplier, internal-field and source checks to profile/publication links and direct detail entry. |

**Build instructions:**

1. Create the named overview and supplemental views using the existing configured objects, responsive forms, and native reporting.
2. Bind the 24 menu items in stated tab/group order using Supplier Scorecard App - Viewers Security Group and Supplier Scorecard App - Application Admin Security Group eligibility on their permitted tabs, retain Administrators-only Program Development and apply reporting-cycle review authorization to Scorecards in Review.
3. Apply the three explicit tab default views. Configure no My Contribution Tasks menu, no fourth application tab, no abstract-catalogue administration menu, and no standalone unrestricted Generation Delay creation menu.
4. Configure supplier-profile, publication-link and associated KPI detail destinations using the supported no-app-Use entry method and supplied published inherited View; do not grant app/tab Use or bypass source security.

**How to check the result:**

- The final navigation contains three tabs, nine grouping headers, and 24 menu items: five under Supplier Scorecards, nine under Program Administration, and ten under Program Development.
- Opening Supplier Scorecards displays Scorecard Overview. Opening Program Administration or Program Development displays blank content until a menu is selected.
- Each of the 24 menu items opens its named object inventory or view, and Scorecards in Review is shown only to users authorized for the applicable reporting cycle.
- Program and KPI Versions open through their authoring records, and Generation Delay creation remains through the controlled Program grid action.
- The three business catalogue menus permit the assigned business maintainers, while the ten technical catalogue menus require Administrators membership; selecting supported values on consuming forms does not grant maintenance.
- Contribution Progress is read only, My Contribution Tasks is absent, and no abstract-catalogue or standalone unrestricted Generation Delay creation menu is introduced.
- A user belonging only to Supplier Scorecard App - Supplier User Security Group opens its authorized Published Scorecard and associated KPI detail from supplier profiles/publication links without app/tab Use; links reject unpublished or out-of-scope records and retain internal-field/source protections.

**Information needed for this task:** IN-21: Supply only unverified native menu/default settings, including blank tab content and applicable-review visibility. Labels, order and defaults are approved; new view identifiers are build outputs. IN-22: Supply the Generation Lag Time Increment object/form from the separate scheduling amendment before completing that one menu link; other links can proceed. IN-23: Supply supported supplier-profile entry to authorized Published Scorecard and KPI Value records without application/tab Use. The security amendment supplies inherited View and Published checks; do not add Use to bypass an unsupported entry method.

**Specification references:** Linked original RPT-27 remains unchanged. FRM-08 and FRM-11 supply completed authoring experiences. Updated technical specification Sections 16.1 through 16.4; SC-035 through SC-040.

**Assumptions and open questions:** Original calculations, ranking, forms, notifications, version grids and controlled delay creation remain in use. This task owns menu/default and supplier-context destination bindings; Group creation and catalogue Rights belong to the catalogue task; Use/object grants, inherited View and recipient eligibility belong to the access task. No new data object, field or workflow is assigned.

## Inputs and validation limits

The approved security model, 24 menu paths, three defaults, native inheritance/publication checks and lifecycle protections are unchanged. Group membership remains external. Only unsupported native bindings and the separate Generation Lag Time Increment target block their affected settings. Validation covers the changed amendment scope and full 39-task dependency graph, not live tenant execution.
