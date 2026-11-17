# Supplier Scorecard menu amendment validation adapter

## Scope and planning basis

This is a draft validation adapter for a four-task amendment. It supplements rather than replaces the original 35-task build scope. The source plan and specification have not been modified by this draft. Original task IDs remain authoritative; IMP IDs are validator aliases only. No tenant implementation or verification is claimed.

## Task summary

| Task Number | Task Category | Task Name | Objective and Detailed Scope | Recommended Implementer |
|---|---|---|---|---|
| IMP-01 | Application configuration | Create the Supplier Scorecard Application | **Objective:** Establish the application container and navigation for Supplier Scorecard configuration and operations.<br><br>**Detailed scope:** Create the Supplier Scorecard application, application-level settings, navigation areas, and placeholders for administration, contribution, review, published results, and reporting. Do not modify the OOTB SRM application or workflows. Add the three ordered application tabs Supplier Scorecards, Program Administration, and Program Development, and their nine named menu grouping headers. Create the tab and grouping shell here; final menu destinations, menu visibility bindings, and default views are completed with the view work after their targets exist. | Associate Consultant |
| IMP-02 | Object configuration | Create the Scorecard Catalogue Objects | **Objective:** Establish the inherited catalogue family required by all governed scorecard selections.<br><br>**Detailed scope:** Create non-instantiable `Supplier Scorecard Abstract Catalog Record` and its twelve direct children: Supplier Commodity, NAICS Classification, KPI Category, KPI Aggregation Method, KPI Value Type, KPI Contribution Source, KPI Collection Method, KPI Initialization Method, Safety Benchmark Metric, Scorecard Cadence, KPI Value Origin, and Publication Exception Treatment. | Senior Associate Consultant |
| IMP-03 | Catalogue configuration | Configure the Scorecard Catalogues | **Objective:** Make each catalogue usable as a governed Code-based selection source.<br><br>**Detailed scope:** Configure inherited `Code`, `Name`, `Active?`, and `Sort`; add `Description` to KPI Aggregation Method and `Frequency` to Scorecard Cadence; configure child administration forms, active-record filters, audit, and basic permissions. Do not expose inverse consumer grids. Replace the proposed blanket catalogue-maintenance grant with two explicit sets: the three business classification catalogues allow maintenance by the Supplier Scorecard Application Administrator group or members of Administrators; the ten technical catalogues allow maintenance only by members of Administrators. Retain the read access needed to select supported values and display historical references. Apply the same maintenance division to inherited and directly declared editable fields. | Senior Associate Consultant |
| IMP-04 | Initial configuration | Load the Scorecard Catalogue Records | **Objective:** Provide the approved catalogue values required by downstream configuration and automation.<br><br>**Detailed scope:** Load the specification-defined records for value type, contribution source, collection method, initialization method, safety metric, cadence, value origin, and publication exception treatment, plus approved commodity, NAICS, KPI category, and aggregation-method records. Preserve stable Codes and approved recurrence expressions. | Associate Consultant |
| IMP-05 | Shared object configuration | Update Supplier Abstract for Scorecards | **Objective:** Add scorecard classification and navigation to the authoritative supplier master.<br><br>**Detailed scope:** Add `Commodity` and `NAICS Classification` M:1 fields to `Supplier Abstract`, with catalogue inverses disabled, and add inverse grids for `Scorecard Participations` and `Scorecards`. Apply inherited behavior to Parent Company and Facility without creating another supplier object. | Senior Associate Consultant |
| IMP-06 | Action Handler configuration | Configure Commodity Synchronization | **Objective:** Keep Facility Commodity aligned with Parent Company Commodity under the initial no-override policy.<br><br>**Detailed scope:** Configure the Facility create/update handler and Parent Company Commodity update handler, including idempotent child updates, audit, failure reporting, and protection against metadata-only retriggers. | Consultant |
| IMP-07 | Object configuration | Create the KPI Configuration Objects | **Objective:** Provide editable KPI definitions and immutable effective-dated versions.<br><br>**Detailed scope:** Create `Supplier Scorecard KPI` and `Supplier Scorecard KPI Version` with all specification fields, relationships, inverse grids, uniqueness rules, conditional requirements, and immutable version behavior. | Senior Associate Consultant |
| IMP-08 | Form configuration | Configure the KPI Administration Forms | **Objective:** Give scorecard administrators a controlled KPI authoring and version-review experience.<br><br>**Detailed scope:** Configure KPI authoring and read-only version forms, active catalogue filters, conditional sections for contributor, defaults, query source, and safety benchmark settings, plus the Versions grid and Publish action placement. | Senior Associate Consultant |
| IMP-09 | Action Handler configuration | Configure KPI Publish | **Objective:** Publish one complete, immutable KPI Version without overlap or partial creation.<br><br>**Detailed scope:** Configure validation, concurrency control, deterministic version numbering, effective-range overlap prevention, full authoring-to-version field mapping, rollback, administrator authorization, and native execution evidence. | Senior Consultant |
| IMP-10 | Object configuration | Create the Program Configuration Objects | **Objective:** Provide editable scorecard methodologies and immutable published Program graphs.<br><br>**Detailed scope:** Create `Scorecard Program`, `Scorecard Program KPI`, `Scorecard Program Version`, and `Scorecard Program KPI Version` with specified fields, M:1/M:N relationships, inverse grids, uniqueness, effective dating, rollup-source reference, and immutable version behavior. | Senior Associate Consultant |
| IMP-11 | Form configuration | Configure Program and Generation Delay Forms | **Objective:** Support Program authoring, version review, KPI membership, and occurrence-specific generation delays.<br><br>**Detailed scope:** Configure Program authoring/version forms and grids; create `Scorecard Program Generation Delay`; configure its contextual New form, calculated display, occurrence fields, audit, Applied Run evidence, and read-only applied state. | Senior Associate Consultant |
| IMP-12 | Action Handler configuration | Configure Program Publish | **Objective:** Publish the complete Program Version, KPI membership, and supplier-recipient roles as one controlled change.<br><br>**Detailed scope:** Configure graph validation, cadence and rollup checks, cycle prevention, deterministic version numbering, complete child and M:N copying, overlap prevention, concurrency control, rollback, and immutability. | Senior Consultant |
| IMP-13 | Object configuration | Create Supplier Scorecard Participation | **Objective:** Govern which exact supplier entities participate in each Program and effective period.<br><br>**Detailed scope:** Create `Supplier Scorecard Participation`, its Supplier and Program relationships, active/effective fields, display value, audit, inverse navigation, and prevention of overlapping active ranges for the same Supplier and Program. | Senior Associate Consultant |
| IMP-14 | Object configuration | Create the Safety Benchmark Objects | **Objective:** Provide effective-dated NAICS and metric benchmarks for safety scoring.<br><br>**Detailed scope:** Create `Safety Benchmark` and immutable `Safety Benchmark Version` with catalogue relationships, source evidence, effective ranges, inverse Versions grid, uniqueness, and administration/read-only forms. | Senior Associate Consultant |
| IMP-15 | Action Handler configuration | Configure Safety Benchmark Publish | **Objective:** Publish complete benchmark versions with controlled effective dates.<br><br>**Detailed scope:** Configure required-field validation, stable benchmark uniqueness, effective-range checks, deterministic version numbering, full field copying, concurrency control, rollback, authorization, and immutable published records. | Consultant |
| IMP-16 | Object configuration | Create Run and Scorecard Objects | **Objective:** Establish the operational parent and supplier-period snapshot records.<br><br>**Detailed scope:** Create `Supplier Scorecard Run` and `Supplier Scorecard` with all specified scalar fields, supplier/program relationships, snapshots, inverse grids, Source Scorecards M:N, publication metadata, and uniqueness for Program occurrence and Run/Supplier. | Senior Associate Consultant |
| IMP-17 | Object configuration | Create KPI Value and Contribution Task Objects | **Objective:** Establish operational KPI results and consolidated contributor work records.<br><br>**Detailed scope:** Create `Scorecard KPI Value` and `Scorecard Contribution Task` with typed values, points, applicability, confirmation, exception, override, source evidence, catalogue relationships, contributor assignment, inverse grids, and required uniqueness rules. | Senior Associate Consultant |
| IMP-18 | Workflow configuration | Configure the Scorecard Workflow Skeletons | **Objective:** Establish stable stages, statuses, responsibility, due-date fields, and basic transitions for stage-aware configuration.<br><br>**Detailed scope:** Configure simple workflows for Supplier Scorecard Run, Supplier Scorecard, and Scorecard Contribution Task using the stages and terminal outcomes in the specification, with basic responsibility and transition actions only. | Associate Consultant |
| IMP-19 | Form configuration | Configure Operational Scorecard Forms | **Objective:** Provide responsive, stage-aware forms for Run coordination, contribution, review, correction, and published viewing.<br><br>**Detailed scope:** Configure Run, Scorecard, KPI Value, and Contribution Task forms and grids; typed-value visibility; stage containers; contributor editing; internal-only exception/override controls; source links; read-only publication views; and responsive connected-browser behavior. | Senior Associate Consultant |
| IMP-20 | Action Handler configuration | Configure KPI Value Calculations | **Objective:** Maintain effective points, completeness, provenance, confirmation evidence, and Scorecard totals when KPI values change.<br><br>**Detailed scope:** Configure input recalculation, confirmation metadata, publication-exception and override handlers, `Value Origin` assignment, parent total/category recalculation, recursion protection, retry behavior, and `Last Calculated At`. | Senior Consultant |
| IMP-21 | Event Service configuration | Configure Scheduled Scorecard Generation | **Objective:** Generate each due Program occurrence exactly once, including delayed occurrences, supplier snapshots, KPI values, and contribution tasks.<br><br>**Detailed scope:** Configure cadence evaluation, period boundaries, Generation Delay gate, Program/KPI version resolution, participation and status checks, rollup selection, retry-safe graph creation by specified uniqueness keys, failure ownership, and transition to Data Entry only after complete generation. | Senior Consultant |
| IMP-22 | Service and action configuration | Configure KPI Initialization and Refresh | **Objective:** Initialize operational KPI values and refresh one governed Query result without losing historical evidence or overrides.<br><br>**Detailed scope:** Configure no-default, static-default, and prior-period initialization; query capture metadata; open-period refresh; privileged targeted post-publication refresh; source evidence updates; total recalculation; and safeguards against background refresh of Published Scorecards. | Senior Consultant |
| IMP-23 | Event Service configuration | Configure Entry Cutoff Processing | **Objective:** Apply approved supplier-nonresponse behavior while keeping missing internal input visible and controlled.<br><br>**Detailed scope:** Configure the Entry Due At service to set only eligible supplier nonresponses to zero, stamp the governed origin, leave internal gaps unresolved, respect optional values, and preserve retry-safe execution evidence. | Consultant |
| IMP-24 | Workflow configuration | Complete the Scorecard Workflows | **Objective:** Enforce complete data entry, review-window, publication-ready, contribution-completion, return, cancellation, and due-date behavior.<br><br>**Detailed scope:** Add full validation, error handling, calculated responsibility and due dates, hidden parent-driven child transitions, Open/Close Review behavior, contribution completion/reopen rules, cancellation cascade, and native reminders. | Senior Consultant |
| IMP-25 | Action Handler configuration | Configure Publication and Notifications | **Objective:** Publish a complete Run safely and notify only authorized internal and supplier recipients without duplicates.<br><br>**Detailed scope:** Configure final validation, source-link safety checks, child and parent publication completion, publication stamps, recipient-role resolution, broad review notification, supplier publication notification, rollback or retry-safe partial-failure handling, and notification deduplication. | Senior Consultant |
| IMP-26 | Security configuration | Configure Supplier Scorecard Security | **Objective:** Restrict administration, contribution, aggregate viewing, corrections, publication, and supplier access while preserving source security.<br><br>**Detailed scope:** Configure application/object/record/workflow permissions for administrators, coordinators, reviewers, contributors, correction users, internal viewers, and supplier users; enforce supplier-entity scope, parent/child access rules, internal-only fields, read-only published results, and no access expansion from Group assignment. Add the three tab-audience policies and the applicable-review authorization policy that final menu assembly will consume. Supplier Scorecards allows authorized internal SIA viewers; Program Administration allows the Supplier Scorecard Application Administrator group and members of Administrators; Program Development allows members of Administrators only. Tab membership must not grant additional contributor, coordinator, reviewer, correction, override, or publication actions. | Senior Consultant |
| IMP-27 | Reporting and view configuration | Configure Scorecard Views and Reports | **Objective:** Provide operational oversight, published detail, profile drilldown, category results, trends, and on-demand authorized ranking.<br><br>**Detailed scope:** Configure responsive entry/review/admin/published views, supplier-profile grids, overdue and completeness reports, snapshot-aware KPI reporting, category aggregation, current-measure workspace links, and secured overall/commodity rank calculation without persisted rank fields. Add the named overview, history, contribution-progress, review, and reported-data views and complete the 24 ordered menu destinations across the three tab shells. Bind the audience and review-visibility policies supplied by the security work. Set Supplier Scorecards to open Scorecard Overview and the other two tabs to open blank content areas until a menu is selected. Omit My Contribution Tasks; retain all earlier reporting, responsive-view, ranking, and supplier-profile scope. | Consultant |
| IMP-28 | Integration configuration | Configure Supplier Survey Safety Capture | **Objective:** Capture LTIR, TRIR, and Safety Kaizen results from the authoritative Supplier Survey model with exact benchmark evidence.<br><br>**Detailed scope:** Configure supplier/period survey matching, completed-survey selection, NAICS/metric benchmark-version resolution, points calculation, nonresponse handling, Kaizen carry-forward, source references, and safe refresh behavior. | Senior Consultant |
| IMP-29 | Integration configuration | Configure the PPM Query KPI | **Objective:** Calculate the approved PPM score from chargeable supplier NCR quantities and consumed parts for the same supplier and period.<br><br>**Detailed scope:** Configure the governed source report/query binding, supplier and period mapping, included dispositions, parts-consumption input, aggregation and points logic, empty/failure behavior, correction handling, evidence link, and security-preserving drilldown. | Senior Consultant |
| IMP-30 | Integration configuration | Configure the Response Timeliness Query KPI | **Objective:** Score supplier response timeliness without charging internal review delay to the supplier.<br><br>**Detailed scope:** Configure the approved response source, supplier and period mapping, supplier submission timestamp, applicable due date, exclusions, scoring logic, correction handling, empty/failure behavior, and source-security-safe evidence link. | Consultant |
| IMP-31 | Integration configuration | Configure the Scrap Query KPI | **Objective:** Supply approved scrap results to Scorecards while leaving debit settlement outside Intelex.<br><br>**Detailed scope:** Configure the approved scrap source report, supplier and period mapping, aggregation and scoring rules, correction handling, empty/failure behavior, and secure evidence link; do not add debit settlement processing. | Consultant |
| IMP-32 | Integration configuration | Configure the Warranty Query KPI | **Objective:** Supply the approved warranty result from its authoritative source to the matching supplier-period KPI Value.<br><br>**Detailed scope:** Configure the approved warranty source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security. | Consultant |
| IMP-33 | Integration configuration | Configure the PPAP Query KPI | **Objective:** Supply the approved PPAP result from its authoritative source to the matching supplier-period KPI Value.<br><br>**Detailed scope:** Configure the approved PPAP source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security. | Consultant |
| IMP-34 | Integration configuration | Configure the Delivery Query KPI | **Objective:** Supply the approved delivery result from its authoritative source to the matching supplier-period KPI Value.<br><br>**Detailed scope:** Configure the approved delivery source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security. | Consultant |
| IMP-35 | Initial configuration | Configure the Initial Scorecard Configuration | **Objective:** Make the approved direct-entry-first Scorecard configuration available for operational generation.<br><br>**Detailed scope:** Create and publish approved safety benchmark, KPI, and Program records; assign KPI membership and recipient roles; create effective-dated supplier Participations; configure required status-capability decisions; and verify that published configuration resolves by the intended period. Query KPIs remain Direct Entry until their integration task is complete. | Senior Associate Consultant |

## External inputs and constraints

- **IN-01 — Catalogue inheritance and uniqueness result:** Confirm per-concrete-child uniqueness for inherited `Code`, or provide approved globally unique replacement Codes.
- **IN-02 — Approved catalogue content:** Approve Commodity, NAICS, KPI Category, KPI Aggregation Method, Value Type, and any changes to the specification seed values.
- **IN-03 — Cadence and calendar configuration:** Supply verified recurrence expressions, period-boundary rules, scheduler timezone, business calendar, generation time, entry/review cutoffs, reminders, and escalation behavior.
- **IN-04 — Approved operating model:** Approve or reject ADR-113 parent-periodic/facility-monthly rollup behavior.
- **IN-05 — Approved exception policy:** Approve `SET_TO_ZERO` and `EXCLUDE_FROM_DENOMINATOR`, or provide replacement policy.
- **IN-06 — Named groups and separation of duties:** Name administrator, coordinator, review, correction, contributor, and support groups and approve role separation.
- **IN-07 — Supplier status capability decisions:** Approve status/capability matrix entries and parent-restriction behavior for monthly and, if used, periodic generation.
- **IN-08 — Tenant capability results:** Confirm Group responsibility, M:N version copying, inherited-Code behavior, aggregate recalculation, completed-parent child correction, report/query binding, recurrence rendering, and scheduler interpretation.
- **IN-09 — Approved KPI catalogue:** Supply KPI definitions, categories, maxima, initialization, applicability, missing-value behavior, aggregation, contacts, effective dates, Program membership, requiredness, and participant population.
- **IN-10 — Security decisions:** Approve entity-scope rules, parent/facility access, supplier recipient roles, correction role, field visibility, and source-link expectations.
- **IN-11 — Ranking rules:** Define ties, exclusions, null scores, population count, and interaction with security filtering.
- **IN-12 — Commodity and NAICS governance:** Confirm Commodity override policy, NAICS ownership, missing-code behavior, benchmark sources, and update procedure.
- **IN-13 — Safety survey/scoring configuration:** Provide issued survey identifiers/schedules, supplier/period matching, completion rules, and exact LTIR/TRIR and Kaizen scoring.
- **IN-14 — PPM source contract:** Select parts-consumption integration, map chargeable NCR dispositions/quantities, supplier keys, periods, scoring, corrections, and secure drilldown.
- **IN-15 — Response timeliness source contract:** Define authoritative source, supplier/period keys, due/submission timestamps, exclusions, scoring, corrections, and secure drilldown.
- **IN-16 — Scrap source contract:** Define authoritative source, supplier/period keys, aggregation, scoring, corrections, and secure drilldown.
- **IN-17 — Warranty source contract:** Define authoritative source, supplier/period keys, inclusions, aggregation, scoring, corrections, and secure drilldown.
- **IN-18 — PPAP source contract:** Define authoritative source, supplier/period keys, inclusions, aggregation, scoring, corrections, and secure drilldown.
- **IN-19 — Delivery source contract:** Define authoritative source, supplier/period keys, inclusions, aggregation, scoring, corrections, and secure drilldown.
- **IN-20 — Group bindings and membership:** Supply the existing Group bindings and eligible membership for Supplier Scorecard Application Administrator, Administrators, authorized internal SIA viewers, and the applicable review groups. Their approved business labels and access division are fixed. Catalogue privileges and user-access policies wait only for the affected Group binding or membership; creating the tab and grouping labels can proceed.
- **IN-21 — Supported native navigation settings:** Supply the supported native settings only where the available evidence does not establish how to bind a menu destination, open a tab with a blank content view, or make the review menu conditional on applicable review authorization. The approved labels, order, destinations, and defaults are already decided. New view identifiers are outputs of the existing build tasks and final view work, not decisions requested from the user.
- **IN-22 — Generation Lag Time Increment destination:** The separately drafted November 5 generation-scheduling amendment supplies the Generation Lag Time Increment object and administration form beneath the existing catalogue work. Only that catalogue permission assignment and its menu link wait for this output. This navigation amendment does not create the object or absorb the earlier scheduling work.

## Detailed configuration tasks

### IMP-01 — Create the Supplier Scorecard Application

**Task ID:** IMP-01

**Title:** Create the Supplier Scorecard Application

**Category:** Application configuration

**Objective:** Establish the application container and navigation for Supplier Scorecard configuration and operations.

**Detailed scope:** Create the Supplier Scorecard application, application-level settings, navigation areas, and placeholders for administration, contribution, review, published results, and reporting. Do not modify the OOTB SRM application or workflows. Add the three ordered application tabs Supplier Scorecards, Program Administration, and Program Development, and their nine named menu grouping headers. Create the tab and grouping shell here; final menu destinations, menu visibility bindings, and default views are completed with the view work after their targets exist.

**Deliverable:** Supplier Scorecard application container with three ordered tab shells and nine ordered menu grouping headers, ready for later menu and view bindings.

**Work needed first:** None

**What is waiting:** Ready for application, tab, and grouping-label configuration. Final menu links and default views are completed by the later view assignment after its configured targets and security policies exist.

**Recommended implementer role:** Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** This is bounded application setup using an established Intelex pattern; Senior Consultant review protects the SRM boundary.

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

1. Create the Supplier Scorecard application container and its three tab shells in the stated order.
2. Add the nine menu grouping headers to the stated tabs in their stated order; create no additional contribution tab.

**How to check the result:**

- The application has exactly three tabs in this order: Supplier Scorecards, Program Administration, Program Development.
- Supplier Scorecards has two grouping headers, Program Administration has three, and Program Development has four, using the exact displayed labels and order assigned here.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment APP-01; original scope is retained. Technical specification Sections 1, 3, 16.4 and 21.2; SC-035 and SC-037.

**Assumptions and open questions:** The three tab and grouping shells can be created before their final menu destinations are bound. Final native menu/default settings are addressed in the later view assignment; no live tenant configuration is claimed.

### IMP-02 — Create the Scorecard Catalogue Objects

**Task ID:** IMP-02

**Title:** Create the Scorecard Catalogue Objects

**Category:** Object configuration

**Objective:** Establish the inherited catalogue family required by all governed scorecard selections.

**Detailed scope:** Create non-instantiable `Supplier Scorecard Abstract Catalog Record` and its twelve direct children: Supplier Commodity, NAICS Classification, KPI Category, KPI Aggregation Method, KPI Value Type, KPI Contribution Source, KPI Collection Method, KPI Initialization Method, Safety Benchmark Metric, Scorecard Cadence, KPI Value Origin, and Publication Exception Treatment.

**Deliverable:** Abstract catalogue parent and twelve correctly inherited concrete child objects.

**Work needed first:** IMP-01

**What is waiting:** Blocked until APP-01 is complete.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** The object work is routine, but inheritance and non-instantiable behavior require independent configuration judgment.

What the earlier tasks provide: IMP-01: Configured Supplier Scorecard application shell with role-ready navigation.

**Build instructions:**

1. Create non-instantiable `Supplier Scorecard Abstract Catalog Record` and its twelve direct children: Supplier Commodity, NAICS Classification, KPI Category, KPI Aggregation Method, KPI Value Type, KPI Contribution Source, KPI Collection Method, KPI Initialization Method, Safety Benchmark Metric, Scorecard Cadence, KPI Value Origin, and Publication Exception Treatment.

**How to check the result:**

- Exactly twelve direct children inherit from the abstract parent; the parent cannot be instantiated or selected; no multiple parent or cycle exists.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment OBJ-02. Sections 4.2, 5, 7.1, 21.1

**Assumptions and open questions:** None.

### IMP-03 — Configure the Scorecard Catalogues

**Task ID:** IMP-03

**Title:** Configure the Scorecard Catalogues

**Category:** Catalogue configuration

**Objective:** Make each catalogue usable as a governed Code-based selection source.

**Detailed scope:** Configure inherited `Code`, `Name`, `Active?`, and `Sort`; add `Description` to KPI Aggregation Method and `Frequency` to Scorecard Cadence; configure child administration forms, active-record filters, audit, and basic permissions. Do not expose inverse consumer grids. Replace the proposed blanket catalogue-maintenance grant with two explicit sets: the three business classification catalogues allow maintenance by the Supplier Scorecard Application Administrator group or members of Administrators; the ten technical catalogues allow maintenance only by members of Administrators. Retain the read access needed to select supported values and display historical references. Apply the same maintenance division to inherited and directly declared editable fields.

**Deliverable:** Catalogue forms and fields with the approved three-business/ten-technical maintenance division, authorized lookup access, active-selection filtering, and existing audit and lifecycle restrictions.

**Work needed first:** IMP-02

**What is waiting:** Partly waiting. The catalogue field/form work and known access rules can be prepared after the catalogue objects exist. Applying user privileges waits for the relevant Group bindings and membership. Only Generation Lag Time Increment permissions additionally wait for that object and form from the separate scheduling amendment. Inherited-Code uniqueness and recurrence storage still use the existing supplied capability results.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Inherited fields, recurrence presentation, and inverse suppression exceed simple catalogue setup.

What the earlier tasks provide: IMP-02: Abstract catalogue parent and twelve correctly inherited concrete child objects.

**Fields and features to set up:**

| Field or feature | What to set up |
|---|---|
| Supplier Commodity catalogue maintenance | Allow record creation and change through its administration surface only to the Supplier Scorecard Application Administrator group or members of Administrators; apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and historical-reference restrictions continue to apply. |
| NAICS Classification catalogue maintenance | Allow record creation and change through its administration surface only to the Supplier Scorecard Application Administrator group or members of Administrators; apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and historical-reference restrictions continue to apply. |
| KPI Category catalogue maintenance | Allow record creation and change through its administration surface only to the Supplier Scorecard Application Administrator group or members of Administrators; apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and historical-reference restrictions continue to apply. |
| KPI Aggregation Method catalogue maintenance | Allow record creation and change through its administration surface only to members of Administrators; application-admin membership alone grants no maintenance. Apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and lifecycle restrictions continue to apply. |
| KPI Value Type catalogue maintenance | Allow record creation and change through its administration surface only to members of Administrators; application-admin membership alone grants no maintenance. Apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and lifecycle restrictions continue to apply. |
| KPI Contribution Source catalogue maintenance | Allow record creation and change through its administration surface only to members of Administrators; application-admin membership alone grants no maintenance. Apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and lifecycle restrictions continue to apply. |
| KPI Collection Method catalogue maintenance | Allow record creation and change through its administration surface only to members of Administrators; application-admin membership alone grants no maintenance. Apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and lifecycle restrictions continue to apply. |
| KPI Initialization Method catalogue maintenance | Allow record creation and change through its administration surface only to members of Administrators; application-admin membership alone grants no maintenance. Apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and lifecycle restrictions continue to apply. |
| Safety Benchmark Metric catalogue maintenance | Allow record creation and change through its administration surface only to members of Administrators; application-admin membership alone grants no maintenance. Apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and lifecycle restrictions continue to apply. |
| Scorecard Cadence catalogue maintenance | Allow record creation and change through its administration surface only to members of Administrators; application-admin membership alone grants no maintenance. Apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and lifecycle restrictions continue to apply. |
| Generation Lag Time Increment catalogue maintenance | Allow record creation and change through its administration surface only to members of Administrators; application-admin membership alone grants no maintenance. Apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and lifecycle restrictions continue to apply. |
| KPI Value Origin catalogue maintenance | Allow record creation and change through its administration surface only to members of Administrators; application-admin membership alone grants no maintenance. Apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and lifecycle restrictions continue to apply. |
| Publication Exception Treatment catalogue maintenance | Allow record creation and change through its administration surface only to members of Administrators; application-admin membership alone grants no maintenance. Apply the same restriction to direct URLs, APIs, and import/update paths. Existing stable-Code and lifecycle restrictions continue to apply. |
| Inherited Code editability | Apply the concrete catalogue maintenance rule to Code. Code remains editable only before first use and stable afterward; do not redeclare the inherited field. |
| Inherited Name editability | Apply the concrete catalogue maintenance rule to Name, retaining its localizable display-label behavior; do not redeclare the inherited field. |
| Inherited Active? editability | Apply the concrete catalogue maintenance rule to Active?. Retain existing inactive references on version and historical records; do not redeclare the inherited field. |
| Inherited Sort editability | Apply the concrete catalogue maintenance rule to Sort without redeclaring the inherited field. |
| KPI Aggregation Method.Description editability | Allow editing only by members of Administrators. Changing a catalogue record does not itself implement a new supported aggregation algorithm. |
| Scorecard Cadence.Frequency editability | Allow editing only by members of Administrators before the Cadence is referenced by a published Program Version. Keep Frequency stable after that first published use; a materially different schedule requires a new Cadence record. |
| Catalogue lookup access | Allow authorized users of consuming records to read and select the permitted active catalogue records without granting catalogue-maintenance rights; retain read access to inactive values already referenced by historical or version records. |

**Build instructions:**

1. Apply the business and technical catalogue maintenance rules to the relevant record and field permissions.
2. Configure the lookup/read permissions independently from record maintenance so program administrators can continue choosing supported methods on KPI, Program, benchmark, and operational forms.

**How to check the result:**

- An application-admin user without Administrators membership can maintain Supplier Commodity, NAICS Classification, and KPI Category, and can select supported technical catalogue values on consuming forms.
- The same application-admin user cannot maintain any of the ten technical catalogues through the administration form, a direct URL, API, or import/update path.
- A member of Administrators can maintain the technical catalogues subject to existing stable-Code, used-Cadence, and historical-reference restrictions.
- Code, Name, Active?, and Sort remain inherited; Description remains declared on KPI Aggregation Method and Frequency on Scorecard Cadence.

**Information needed for this task:** IN-08: Supply the supported inherited-Code uniqueness and recurrence storage/display behavior used by the existing catalogue configuration. Only the affected constraints and Frequency configuration wait for those results. IN-20: Supply the native Group bindings and membership for Supplier Scorecard Application Administrator and Administrators so the two catalogue-maintenance sets can be assigned accurately. IN-22: Supply the Generation Lag Time Increment object and administration form from the separate scheduling amendment; only its catalogue privilege assignment waits for this target.

**Specification references:** Original implementation-plan assignment CFG-03; original scope is retained. Technical specification Sections 7, 16.1, 16.4.2, 16.4.3 and 21.2; SC-036.

**Assumptions and open questions:** This changes the planned maintenance grant, not any catalogue fields, inheritance, supported Codes, or seed values. Ordinary object audit, active filtering, and catalogue inverse suppression remain part of the original catalogue assignment.

### IMP-04 — Load the Scorecard Catalogue Records

**Task ID:** IMP-04

**Title:** Load the Scorecard Catalogue Records

**Category:** Initial configuration

**Objective:** Provide the approved catalogue values required by downstream configuration and automation.

**Detailed scope:** Load the specification-defined records for value type, contribution source, collection method, initialization method, safety metric, cadence, value origin, and publication exception treatment, plus approved commodity, NAICS, KPI category, and aggregation-method records. Preserve stable Codes and approved recurrence expressions.

**Deliverable:** Approved, audited records in every concrete catalogue.

**Work needed first:** IMP-03

**What is waiting:** Blocked by CFG-03 and by approved catalogue content, recurrence expressions, and inherited-Code uniqueness outcome.

**Recommended implementer role:** Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Record loading is bounded once governance and platform constraints are supplied.

What the earlier tasks provide: IMP-03: Configured catalogue fields, forms, filters, audit, and permissions.

**Build instructions:**

1. Load the specification-defined records for value type, contribution source, collection method, initialization method, safety metric, cadence, value origin, and publication exception treatment, plus approved commodity, NAICS, KPI category, and aggregation-method records. Preserve stable Codes and approved recurrence expressions.

**How to check the result:**

- Every approved record is present once on the correct concrete child; Codes are stable; inactive filtering works; cadence Frequency values are valid.

**Information needed for this task:** IN-01: Confirm per-concrete-child uniqueness for inherited `Code`, or provide approved globally unique replacement Codes. IN-02: Approve Commodity, NAICS, KPI Category, KPI Aggregation Method, Value Type, and any changes to the specification seed values. IN-03: Supply verified recurrence expressions, period-boundary rules, scheduler timezone, business calendar, generation time, entry/review cutoffs, reminders, and escalation behavior. IN-05: Approve `SET_TO_ZERO` and `EXCLUDE_FROM_DENOMINATOR`, or provide replacement policy.

**Specification references:** Original implementation-plan assignment DAT-04. Sections 7.2–7.13, 20.2, 21.2

**Assumptions and open questions:** No unapproved catalogue values are invented.

### IMP-05 — Update Supplier Abstract for Scorecards

**Task ID:** IMP-05

**Title:** Update Supplier Abstract for Scorecards

**Category:** Shared object configuration

**Objective:** Add scorecard classification and navigation to the authoritative supplier master.

**Detailed scope:** Add `Commodity` and `NAICS Classification` M:1 fields to `Supplier Abstract`, with catalogue inverses disabled, and add inverse grids for `Scorecard Participations` and `Scorecards`. Apply inherited behavior to Parent Company and Facility without creating another supplier object.

**Deliverable:** Supplier Abstract extensions and inherited Parent Company/Facility presentation.

**Work needed first:** IMP-03

**What is waiting:** Blocked until CFG-03 is complete.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** The fields are straightforward, but changes to an authoritative inherited object require careful cross-application configuration.

What the earlier tasks provide: IMP-03: Configured catalogue fields, forms, filters, audit, and permissions.

**Build instructions:**

1. Add `Commodity` and `NAICS Classification` M:1 fields to `Supplier Abstract`, with catalogue inverses disabled, and add inverse grids for `Scorecard Participations` and `Scorecards`. Apply inherited behavior to Parent Company and Facility without creating another supplier object.

**How to check the result:**

- Both catalogue fields are inherited by Parent Company and Facility; catalogue inverses remain disabled; navigation grids use the owned child relationships.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment OBJ-05. Sections 3.1, 4.1, 10.2, 20.1

**Assumptions and open questions:** Existing `Type of Supplier Entity` is reused and not duplicated.

### IMP-06 — Configure Commodity Synchronization

**Task ID:** IMP-06

**Title:** Configure Commodity Synchronization

**Category:** Action Handler configuration

**Objective:** Keep Facility Commodity aligned with Parent Company Commodity under the initial no-override policy.

**Detailed scope:** Configure the Facility create/update handler and Parent Company Commodity update handler, including idempotent child updates, audit, failure reporting, and protection against metadata-only retriggers.

**Deliverable:** Two working Commodity synchronization handlers with controlled failure behavior.

**Work needed first:** IMP-05

**What is waiting:** Blocked by OBJ-05 and the approved Commodity override policy.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Cross-object child updates, idempotency, and partial failure reporting require Consultant-level automation judgment.

What the earlier tasks provide: IMP-05: Supplier Abstract extensions and inherited Parent Company/Facility presentation.

**Build instructions:**

1. Configure the Facility create/update handler and Parent Company Commodity update handler, including idempotent child updates, audit, failure reporting, and protection against metadata-only retriggers.

**How to check the result:**

- Facility creation/parent change copies Commodity; Parent Company changes update related Facilities once; failures are reported without recursive updates.

**Information needed for this task:** IN-12: Confirm Commodity override policy, NAICS ownership, missing-code behavior, benchmark sources, and update procedure.

**Specification references:** Original implementation-plan assignment AUT-06. Section 10.2

**Assumptions and open questions:** Initial release does not permit Facility override.

### IMP-07 — Create the KPI Configuration Objects

**Task ID:** IMP-07

**Title:** Create the KPI Configuration Objects

**Category:** Object configuration

**Objective:** Provide editable KPI definitions and immutable effective-dated versions.

**Detailed scope:** Create `Supplier Scorecard KPI` and `Supplier Scorecard KPI Version` with all specification fields, relationships, inverse grids, uniqueness rules, conditional requirements, and immutable version behavior.

**Deliverable:** Complete KPI authoring/version object and field configuration.

**Work needed first:** IMP-03

**What is waiting:** Blocked until CFG-03 is complete.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Numerous conditional relationships and immutable version fields require independent configuration judgment but not advanced automation.

What the earlier tasks provide: IMP-03: Configured catalogue fields, forms, filters, audit, and permissions.

**Build instructions:**

1. Create `Supplier Scorecard KPI` and `Supplier Scorecard KPI Version` with all specification fields, relationships, inverse grids, uniqueness rules, conditional requirements, and immutable version behavior.

**How to check the result:**

- Every Section 8.1/8.2 field exists with correct ownership, relationship, requirement, editability, and inverse behavior; version records are read only.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment OBJ-07. Sections 4.3, 8.1, 8.2

**Assumptions and open questions:** Exact executable expressions are deferred to their automation tasks.

### IMP-08 — Configure the KPI Administration Forms

**Task ID:** IMP-08

**Title:** Configure the KPI Administration Forms

**Category:** Form configuration

**Objective:** Give scorecard administrators a controlled KPI authoring and version-review experience.

**Detailed scope:** Configure KPI authoring and read-only version forms, active catalogue filters, conditional sections for contributor, defaults, query source, and safety benchmark settings, plus the Versions grid and Publish action placement.

**Deliverable:** Usable KPI authoring and immutable-version forms.

**Work needed first:** IMP-07

**What is waiting:** Blocked until OBJ-07 is complete.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** The layout is sizeable and includes interdependent show/hide/clear/required behavior.

What the earlier tasks provide: IMP-07: Complete KPI authoring/version object and field configuration.

**Build instructions:**

1. Configure KPI authoring and read-only version forms, active catalogue filters, conditional sections for contributor, defaults, query source, and safety benchmark settings, plus the Versions grid and Publish action placement.

**How to check the result:**

- Only relevant fields appear for each governed Code combination; hidden conditional fields clear as specified; published versions cannot be edited.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment FRM-08. Sections 8.1, 8.2, 16.1

**Assumptions and open questions:** None.

### IMP-09 — Configure KPI Publish

**Task ID:** IMP-09

**Title:** Configure KPI Publish

**Category:** Action Handler configuration

**Objective:** Publish one complete, immutable KPI Version without overlap or partial creation.

**Detailed scope:** Configure validation, concurrency control, deterministic version numbering, effective-range overlap prevention, full authoring-to-version field mapping, rollback, administrator authorization, and native execution evidence.

**Deliverable:** Controlled KPI Publish action.

**Work needed first:** IMP-07, IMP-08

**What is waiting:** Blocked by OBJ-07 and FRM-08; final mechanism depends on tenant capability results.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Why this role is recommended:** Concurrency, atomicity, rollback, and immutable effective dating are consequential cross-record automation.

What the earlier tasks provide: IMP-07: Complete KPI authoring/version object and field configuration. IMP-08: Usable KPI authoring and immutable-version forms.

**Build instructions:**

1. Configure validation, concurrency control, deterministic version numbering, effective-range overlap prevention, full authoring-to-version field mapping, rollback, administrator authorization, and native execution evidence.

**How to check the result:**

- One action creates exactly one complete version; invalid or overlapping data creates none; concurrent attempts cannot duplicate version numbers.

**Information needed for this task:** IN-08: Confirm Group responsibility, M:N version copying, inherited-Code behavior, aggregate recalculation, completed-parent child correction, report/query binding, recurrence rendering, and scheduler interpretation.

**Specification references:** Original implementation-plan assignment AUT-09. Section 8.3; Sections 21.1–21.2

**Assumptions and open questions:** None.

### IMP-10 — Create the Program Configuration Objects

**Task ID:** IMP-10

**Title:** Create the Program Configuration Objects

**Category:** Object configuration

**Objective:** Provide editable scorecard methodologies and immutable published Program graphs.

**Detailed scope:** Create `Scorecard Program`, `Scorecard Program KPI`, `Scorecard Program Version`, and `Scorecard Program KPI Version` with specified fields, M:1/M:N relationships, inverse grids, uniqueness, effective dating, rollup-source reference, and immutable version behavior.

**Deliverable:** Complete Program authoring/version object and field configuration.

**Work needed first:** IMP-03, IMP-07

**What is waiting:** Blocked until CFG-03 and OBJ-07 are complete.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** The graph is larger than routine object setup and mixes child and M:N version content.

What the earlier tasks provide: IMP-03: Configured catalogue fields, forms, filters, audit, and permissions. IMP-07: Complete KPI authoring/version object and field configuration.

**Build instructions:**

1. Create `Scorecard Program`, `Scorecard Program KPI`, `Scorecard Program Version`, and `Scorecard Program KPI Version` with specified fields, M:1/M:N relationships, inverse grids, uniqueness, effective dating, rollup-source reference, and immutable version behavior.

**How to check the result:**

- All Section 9.1–9.4 fields and relationships exist; `Entity Level` and `Recurrence Definition` do not; version records and children are read only.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment OBJ-10. Sections 4.3, 9.1–9.4, 21.1

**Assumptions and open questions:** None.

### IMP-11 — Configure Program and Generation Delay Forms

**Task ID:** IMP-11

**Title:** Configure Program and Generation Delay Forms

**Category:** Form configuration

**Objective:** Support Program authoring, version review, KPI membership, and occurrence-specific generation delays.

**Detailed scope:** Configure Program authoring/version forms and grids; create `Scorecard Program Generation Delay`; configure its contextual New form, calculated display, occurrence fields, audit, Applied Run evidence, and read-only applied state.

**Deliverable:** Program/version administration forms and Generation Delay object/form/grid.

**Work needed first:** IMP-10

**What is waiting:** Blocked until OBJ-10 is complete; valid occurrence selection depends on approved cadence rules.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** This combines a larger administration form with contextual child creation and lifecycle-dependent editability.

What the earlier tasks provide: IMP-10: Complete Program authoring/version object and field configuration.

**Build instructions:**

1. Configure Program authoring/version forms and grids; create `Scorecard Program Generation Delay`; configure its contextual New form, calculated display, occurrence fields, audit, Applied Run evidence, and read-only applied state.

**How to check the result:**

- Program grids expose membership, versions, and delays; Program defaults/locks on new Delay; invalid dates, duplicate occurrence, and applied edits are prevented.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment FRM-11. Sections 9.1, 9.5, 9.6, 16.1

**Assumptions and open questions:** Exact display formulas and occurrence picker implementation use verified tenant syntax.

### IMP-12 — Configure Program Publish

**Task ID:** IMP-12

**Title:** Configure Program Publish

**Category:** Action Handler configuration

**Objective:** Publish the complete Program Version, KPI membership, and supplier-recipient roles as one controlled change.

**Detailed scope:** Configure graph validation, cadence and rollup checks, cycle prevention, deterministic version numbering, complete child and M:N copying, overlap prevention, concurrency control, rollback, and immutability.

**Deliverable:** Controlled Program Publish action.

**Work needed first:** IMP-10, IMP-11

**What is waiting:** Blocked by OBJ-10 and FRM-11; tenant M:N-copy result and approved rollup operating model may also block completion.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Why this role is recommended:** Atomic multi-record/M:N publication, cycle checks, and high rework risk require senior technical authority.

What the earlier tasks provide: IMP-10: Complete Program authoring/version object and field configuration. IMP-11: Program/version administration forms and Generation Delay object/form/grid.

**Build instructions:**

1. Configure graph validation, cadence and rollup checks, cycle prevention, deterministic version numbering, complete child and M:N copying, overlap prevention, concurrency control, rollback, and immutability.

**How to check the result:**

- A valid action creates one complete Program graph; invalid membership, cadence, routing, overlap, or rollup creates no partial version.

**Information needed for this task:** IN-04: Approve or reject ADR-113 parent-periodic/facility-monthly rollup behavior. IN-08: Confirm Group responsibility, M:N version copying, inherited-Code behavior, aggregate recalculation, completed-parent child correction, report/query binding, recurrence rendering, and scheduler interpretation.

**Specification references:** Original implementation-plan assignment AUT-12. Sections 9.5, 21.1–21.2

**Assumptions and open questions:** Rollup validation is enabled only if ADR-113 behavior is approved.

### IMP-13 — Create Supplier Scorecard Participation

**Task ID:** IMP-13

**Title:** Create Supplier Scorecard Participation

**Category:** Object configuration

**Objective:** Govern which exact supplier entities participate in each Program and effective period.

**Detailed scope:** Create `Supplier Scorecard Participation`, its Supplier and Program relationships, active/effective fields, display value, audit, inverse navigation, and prevention of overlapping active ranges for the same Supplier and Program.

**Deliverable:** Participation object, forms, relationships, audit, and range control.

**Work needed first:** IMP-05, IMP-10

**What is waiting:** Blocked until OBJ-05 and OBJ-10 are complete.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Effective-range control and authoritative supplier relationships require more judgment than a basic child object.

What the earlier tasks provide: IMP-05: Supplier Abstract extensions and inherited Parent Company/Facility presentation. IMP-10: Complete Program authoring/version object and field configuration.

**Build instructions:**

1. Create `Supplier Scorecard Participation`, its Supplier and Program relationships, active/effective fields, display value, audit, inverse navigation, and prevention of overlapping active ranges for the same Supplier and Program.

**How to check the result:**

- Parent Company or Facility can be selected without Program entity filtering; duplicate/overlapping ranges are blocked; status Deny cannot be overridden.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment OBJ-13. Sections 10.1, 10.3

**Assumptions and open questions:** Capability records are supplied by the authoritative Supplier Status design.

### IMP-14 — Create the Safety Benchmark Objects

**Task ID:** IMP-14

**Title:** Create the Safety Benchmark Objects

**Category:** Object configuration

**Objective:** Provide effective-dated NAICS and metric benchmarks for safety scoring.

**Detailed scope:** Create `Safety Benchmark` and immutable `Safety Benchmark Version` with catalogue relationships, source evidence, effective ranges, inverse Versions grid, uniqueness, and administration/read-only forms.

**Deliverable:** Complete benchmark authoring/version configuration.

**Work needed first:** IMP-03

**What is waiting:** Blocked until CFG-03 is complete; initial records depend on approved NAICS and benchmark governance.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Effective dating and governed catalogue combinations require independent configuration judgment.

What the earlier tasks provide: IMP-03: Configured catalogue fields, forms, filters, audit, and permissions.

**Build instructions:**

1. Create `Safety Benchmark` and immutable `Safety Benchmark Version` with catalogue relationships, source evidence, effective ranges, inverse Versions grid, uniqueness, and administration/read-only forms.

**How to check the result:**

- One stable benchmark exists per NAICS/Metric; version fields are immutable; catalogue inverses remain disabled.

**Information needed for this task:** IN-12: Confirm Commodity override policy, NAICS ownership, missing-code behavior, benchmark sources, and update procedure.

**Specification references:** Original implementation-plan assignment OBJ-14. Sections 4.5, 11.1, 11.2

**Assumptions and open questions:** None.

### IMP-15 — Configure Safety Benchmark Publish

**Task ID:** IMP-15

**Title:** Configure Safety Benchmark Publish

**Category:** Action Handler configuration

**Objective:** Publish complete benchmark versions with controlled effective dates.

**Detailed scope:** Configure required-field validation, stable benchmark uniqueness, effective-range checks, deterministic version numbering, full field copying, concurrency control, rollback, authorization, and immutable published records.

**Deliverable:** Controlled Safety Benchmark Publish action.

**Work needed first:** IMP-14

**What is waiting:** Blocked until OBJ-14 is complete.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** This is moderately complex publish automation using the already established version pattern.

What the earlier tasks provide: IMP-14: Complete benchmark authoring/version configuration.

**Build instructions:**

1. Configure required-field validation, stable benchmark uniqueness, effective-range checks, deterministic version numbering, full field copying, concurrency control, rollback, authorization, and immutable published records.

**How to check the result:**

- Valid publication creates one complete version; overlaps or missing data create none; published data cannot be edited.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment AUT-15. Section 11.2; Section 21.2

**Assumptions and open questions:** None.

### IMP-16 — Create Run and Scorecard Objects

**Task ID:** IMP-16

**Title:** Create Run and Scorecard Objects

**Category:** Object configuration

**Objective:** Establish the operational parent and supplier-period snapshot records.

**Detailed scope:** Create `Supplier Scorecard Run` and `Supplier Scorecard` with all specified scalar fields, supplier/program relationships, snapshots, inverse grids, Source Scorecards M:N, publication metadata, and uniqueness for Program occurrence and Run/Supplier.

**Deliverable:** Complete Run and Scorecard object/field/relationship configuration.

**Work needed first:** IMP-05, IMP-10, IMP-13

**What is waiting:** Blocked until OBJ-05, OBJ-10, and OBJ-13 are complete.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Snapshot and rollup relationships make this more consequential than routine object creation.

What the earlier tasks provide: IMP-05: Supplier Abstract extensions and inherited Parent Company/Facility presentation. IMP-10: Complete Program authoring/version object and field configuration. IMP-13: Participation object, forms, relationships, audit, and range control.

**Build instructions:**

1. Create `Supplier Scorecard Run` and `Supplier Scorecard` with all specified scalar fields, supplier/program relationships, snapshots, inverse grids, Source Scorecards M:N, publication metadata, and uniqueness for Program occurrence and Run/Supplier.

**How to check the result:**

- Every Section 12.1/12.2 field exists; uniqueness is enforceable; ranks are not persisted; owned inverse grids do not duplicate relationships.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment OBJ-16. Sections 4.4, 12.1, 12.2

**Assumptions and open questions:** Total calculations are configured in AUT-20.

### IMP-17 — Create KPI Value and Contribution Task Objects

**Task ID:** IMP-17

**Title:** Create KPI Value and Contribution Task Objects

**Category:** Object configuration

**Objective:** Establish operational KPI results and consolidated contributor work records.

**Detailed scope:** Create `Scorecard KPI Value` and `Scorecard Contribution Task` with typed values, points, applicability, confirmation, exception, override, source evidence, catalogue relationships, contributor assignment, inverse grids, and required uniqueness rules.

**Deliverable:** Complete KPI Value and Contribution Task object/field configuration.

**Work needed first:** IMP-03, IMP-07, IMP-14, IMP-16

**What is waiting:** Blocked until CFG-03, OBJ-07, OBJ-14, and OBJ-16 are complete.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** The configuration is field-heavy and security-sensitive but automation is handled separately.

What the earlier tasks provide: IMP-03: Configured catalogue fields, forms, filters, audit, and permissions. IMP-07: Complete KPI authoring/version object and field configuration. IMP-14: Complete benchmark authoring/version configuration. IMP-16: Complete Run and Scorecard object/field/relationship configuration.

**Build instructions:**

1. Create `Scorecard KPI Value` and `Scorecard Contribution Task` with typed values, points, applicability, confirmation, exception, override, source evidence, catalogue relationships, contributor assignment, inverse grids, and required uniqueness rules.

**How to check the result:**

- Every Section 12.3/12.4 field exists with correct ownership, editability, inverse suppression, and unique keys; no custom status field is added.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment OBJ-17. Sections 4.4, 12.3, 12.4

**Assumptions and open questions:** Executable calculation syntax is not set in this task.

### IMP-18 — Configure the Scorecard Workflow Skeletons

**Task ID:** IMP-18

**Title:** Configure the Scorecard Workflow Skeletons

**Category:** Workflow configuration

**Objective:** Establish stable stages, statuses, responsibility, due-date fields, and basic transitions for stage-aware configuration.

**Detailed scope:** Configure simple workflows for Supplier Scorecard Run, Supplier Scorecard, and Scorecard Contribution Task using the stages and terminal outcomes in the specification, with basic responsibility and transition actions only.

**Deliverable:** Three workflow skeletons with stable stage system names.

**Work needed first:** IMP-16, IMP-17

**What is waiting:** Blocked until OBJ-16 and OBJ-17 are complete.

**Recommended implementer role:** Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** First-pass stages and straightforward responsibility are an established configuration pattern.

What the earlier tasks provide: IMP-16: Complete Run and Scorecard object/field/relationship configuration. IMP-17: Complete KPI Value and Contribution Task object/field configuration.

**Build instructions:**

1. Configure simple workflows for Supplier Scorecard Run, Supplier Scorecard, and Scorecard Contribution Task using the stages and terminal outcomes in the specification, with basic responsibility and transition actions only.

**How to check the result:**

- Stages/outcomes exactly match Section 14; native stage/status is authoritative; no custom workflow-state field exists.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment WFL-18. Sections 14.1–14.3

**Assumptions and open questions:** Full validation and calculated behavior are deferred to WFL-24.

### IMP-19 — Configure Operational Scorecard Forms

**Task ID:** IMP-19

**Title:** Configure Operational Scorecard Forms

**Category:** Form configuration

**Objective:** Provide responsive, stage-aware forms for Run coordination, contribution, review, correction, and published viewing.

**Detailed scope:** Configure Run, Scorecard, KPI Value, and Contribution Task forms and grids; typed-value visibility; stage containers; contributor editing; internal-only exception/override controls; source links; read-only publication views; and responsive connected-browser behavior.

**Deliverable:** Complete responsive operational form set.

**Work needed first:** IMP-17, IMP-18

**What is waiting:** Blocked until OBJ-17 and WFL-18 are complete.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Multiple large stage-aware forms and sensitive conditional controls require independent judgment.

What the earlier tasks provide: IMP-17: Complete KPI Value and Contribution Task object/field configuration. IMP-18: Three workflow skeletons with stable stage system names.

**Build instructions:**

1. Configure Run, Scorecard, KPI Value, and Contribution Task forms and grids; typed-value visibility; stage containers; contributor editing; internal-only exception/override controls; source links; read-only publication views; and responsive connected-browser behavior.

**How to check the result:**

- Only the matching typed field appears; stage/edit rules work; supplier views exclude internal rationale and controls; published views are read only.

**Information needed for this task:** None

**Specification references:** Original implementation-plan assignment FRM-19. Sections 12, 14, 16.3

**Assumptions and open questions:** No native-mobile/offline forms are configured.

### IMP-20 — Configure KPI Value Calculations

**Task ID:** IMP-20

**Title:** Configure KPI Value Calculations

**Category:** Action Handler configuration

**Objective:** Maintain effective points, completeness, provenance, confirmation evidence, and Scorecard totals when KPI values change.

**Detailed scope:** Configure input recalculation, confirmation metadata, publication-exception and override handlers, `Value Origin` assignment, parent total/category recalculation, recursion protection, retry behavior, and `Last Calculated At`.

**Deliverable:** Verified KPI Value and parent-total calculation handlers.

**Work needed first:** IMP-17, IMP-19

**What is waiting:** Blocked by OBJ-17 and FRM-19; final mechanism depends on approved exception policy and tenant calculation results.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Why this role is recommended:** Cross-grid totals, recursion, retry, privileged changes, and scoring consequences require senior authority.

What the earlier tasks provide: IMP-17: Complete KPI Value and Contribution Task object/field configuration. IMP-19: Complete responsive operational form set.

**Build instructions:**

1. Configure input recalculation, confirmation metadata, publication-exception and override handlers, `Value Origin` assignment, parent total/category recalculation, recursion protection, retry behavior, and `Last Calculated At`.

**How to check the result:**

- All specified input combinations produce correct effective points/maxima, origin, completeness, metadata, totals, null-denominator behavior, and no recursive loop.

**Information needed for this task:** IN-05: Approve `SET_TO_ZERO` and `EXCLUDE_FROM_DENOMINATOR`, or provide replacement policy. IN-08: Confirm Group responsibility, M:N version copying, inherited-Code behavior, aggregate recalculation, completed-parent child correction, report/query binding, recurrence rendering, and scheduler interpretation.

**Specification references:** Original implementation-plan assignment AUT-20. Sections 12.2–12.3, 14.4, 15.2–15.4

**Assumptions and open questions:** Approved scoring ranges and exception policy are external inputs.

### IMP-21 — Configure Scheduled Scorecard Generation

**Task ID:** IMP-21

**Title:** Configure Scheduled Scorecard Generation

**Category:** Event Service configuration

**Objective:** Generate each due Program occurrence exactly once, including delayed occurrences, supplier snapshots, KPI values, and contribution tasks.

**Detailed scope:** Configure cadence evaluation, period boundaries, Generation Delay gate, Program/KPI version resolution, participation and status checks, rollup selection, retry-safe graph creation by specified uniqueness keys, failure ownership, and transition to Data Entry only after complete generation.

**Deliverable:** Scheduled generation service with retry-safe occurrence processing.

**Work needed first:** IMP-09, IMP-12, IMP-13, IMP-17, IMP-18

**What is waiting:** Blocked by all prerequisites and by approved cadence/calendar, operating-model, status-capability, and tenant scheduler results.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Why this role is recommended:** Multi-stage generation, delay gating, idempotency, version resolution, rollups, and failure recovery are advanced automation.

What the earlier tasks provide: IMP-09: Controlled KPI Publish action. IMP-12: Controlled Program Publish action. IMP-13: Participation object, forms, relationships, audit, and range control. IMP-17: Complete KPI Value and Contribution Task object/field configuration. IMP-18: Three workflow skeletons with stable stage system names.

**Build instructions:**

1. Configure cadence evaluation, period boundaries, Generation Delay gate, Program/KPI version resolution, participation and status checks, rollup selection, retry-safe graph creation by specified uniqueness keys, failure ownership, and transition to Data Entry only after complete generation.

**How to check the result:**

- Repeated execution creates no duplicates; delayed occurrences preserve the original anchor; missing versions/capability denials create no unauthorized Scorecard; partial work resumes safely.

**Information needed for this task:** IN-03: Supply verified recurrence expressions, period-boundary rules, scheduler timezone, business calendar, generation time, entry/review cutoffs, reminders, and escalation behavior. IN-04: Approve or reject ADR-113 parent-periodic/facility-monthly rollup behavior. IN-07: Approve status/capability matrix entries and parent-restriction behavior for monthly and, if used, periodic generation. IN-08: Confirm Group responsibility, M:N version copying, inherited-Code behavior, aggregate recalculation, completed-parent child correction, report/query binding, recurrence rendering, and scheduler interpretation.

**Specification references:** Original implementation-plan assignment AUT-21. Sections 9.6, 10.3, 13.1, 13.5, 21.2

**Assumptions and open questions:** Parent rollup is configured only when externally approved.

### IMP-22 — Configure KPI Initialization and Refresh

**Task ID:** IMP-22

**Title:** Configure KPI Initialization and Refresh

**Category:** Service and action configuration

**Objective:** Initialize operational KPI values and refresh one governed Query result without losing historical evidence or overrides.

**Detailed scope:** Configure no-default, static-default, and prior-period initialization; query capture metadata; open-period refresh; privileged targeted post-publication refresh; source evidence updates; total recalculation; and safeguards against background refresh of Published Scorecards.

**Deliverable:** Initialization component and targeted Refresh KPI Result action.

**Work needed first:** IMP-20, IMP-21

**What is waiting:** Blocked by AUT-20 and AUT-21; post-publication behavior depends on the completed-parent capability result.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Why this role is recommended:** Historical carry-forward, privileged completed-record correction, and evidence preservation are high-consequence automation.

What the earlier tasks provide: IMP-20: Verified KPI Value and parent-total calculation handlers. IMP-21: Scheduled generation service with retry-safe occurrence processing.

**Build instructions:**

1. Configure no-default, static-default, and prior-period initialization; query capture metadata; open-period refresh; privileged targeted post-publication refresh; source evidence updates; total recalculation; and safeguards against background refresh of Published Scorecards.

**How to check the result:**

- Each initialization Code behaves as specified; prior override rationale is not copied; refresh affects one KPI only, preserves override, recalculates totals, and cannot be selected by background jobs after publication.

**Information needed for this task:** IN-08: Confirm Group responsibility, M:N version copying, inherited-Code behavior, aggregate recalculation, completed-parent child correction, report/query binding, recurrence rendering, and scheduler interpretation.

**Specification references:** Original implementation-plan assignment AUT-22. Sections 13.2, 13.3, 15.3

**Assumptions and open questions:** Source-specific calculations are added by INT-28–INT-34.

### IMP-23 — Configure Entry Cutoff Processing

**Task ID:** IMP-23

**Title:** Configure Entry Cutoff Processing

**Category:** Event Service configuration

**Objective:** Apply approved supplier-nonresponse behavior while keeping missing internal input visible and controlled.

**Detailed scope:** Configure the Entry Due At service to set only eligible supplier nonresponses to zero, stamp the governed origin, leave internal gaps unresolved, respect optional values, and preserve retry-safe execution evidence.

**Deliverable:** Scheduled entry-cutoff service.

**Work needed first:** IMP-20, IMP-21

**What is waiting:** Blocked by AUT-20 and AUT-21 and by approved exception/nonresponse policy.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** The service is bounded but changes scoring outcomes and must distinguish supplier from internal responsibility.

What the earlier tasks provide: IMP-20: Verified KPI Value and parent-total calculation handlers. IMP-21: Scheduled generation service with retry-safe occurrence processing.

**Build instructions:**

1. Configure the Entry Due At service to set only eligible supplier nonresponses to zero, stamp the governed origin, leave internal gaps unresolved, respect optional values, and preserve retry-safe execution evidence.

**How to check the result:**

- Only configured supplier nonresponses become zero; internal gaps remain incomplete; repeat execution is safe; optional blanks remain distinguishable.

**Information needed for this task:** IN-05: Approve `SET_TO_ZERO` and `EXCLUDE_FROM_DENOMINATOR`, or provide replacement policy.

**Specification references:** Original implementation-plan assignment AUT-23. Sections 13.4, 15.1

**Assumptions and open questions:** None.

### IMP-24 — Complete the Scorecard Workflows

**Task ID:** IMP-24

**Title:** Complete the Scorecard Workflows

**Category:** Workflow configuration

**Objective:** Enforce complete data entry, review-window, publication-ready, contribution-completion, return, cancellation, and due-date behavior.

**Detailed scope:** Add full validation, error handling, calculated responsibility and due dates, hidden parent-driven child transitions, Open/Close Review behavior, contribution completion/reopen rules, cancellation cascade, and native reminders.

**Deliverable:** Completed Run, Scorecard, and Contribution Task workflows.

**Work needed first:** IMP-18, IMP-20

**What is waiting:** Blocked by WFL-18 and AUT-20 and by named groups, calendar, reminder, and exception-policy inputs.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Why this role is recommended:** Coordinated parent/child workflow, error recovery, and cancellation consequences require senior authority.

What the earlier tasks provide: IMP-18: Three workflow skeletons with stable stage system names. IMP-20: Verified KPI Value and parent-total calculation handlers.

**Build instructions:**

1. Add full validation, error handling, calculated responsibility and due dates, hidden parent-driven child transitions, Open/Close Review behavior, contribution completion/reopen rules, cancellation cascade, and native reminders.

**How to check the result:**

- Review opens only when data is complete/excepted; one window is maintained; contribution completion validates linked values; cancellation is retry-safe and stops reminders.

**Information needed for this task:** IN-03: Supply verified recurrence expressions, period-boundary rules, scheduler timezone, business calendar, generation time, entry/review cutoffs, reminders, and escalation behavior. IN-05: Approve `SET_TO_ZERO` and `EXCLUDE_FROM_DENOMINATOR`, or provide replacement policy. IN-06: Name administrator, coordinator, review, correction, contributor, and support groups and approve role separation.

**Specification references:** Original implementation-plan assignment WFL-24. Sections 14.1–14.3, 15.1

**Assumptions and open questions:** Silence at review deadline remains consent; no review-response object is added.

### IMP-25 — Configure Publication and Notifications

**Task ID:** IMP-25

**Title:** Configure Publication and Notifications

**Category:** Action Handler configuration

**Objective:** Publish a complete Run safely and notify only authorized internal and supplier recipients without duplicates.

**Detailed scope:** Configure final validation, source-link safety checks, child and parent publication completion, publication stamps, recipient-role resolution, broad review notification, supplier publication notification, rollback or retry-safe partial-failure handling, and notification deduplication.

**Deliverable:** Publish Scorecards action and specified notification behavior.

**Work needed first:** IMP-20, IMP-24

**What is waiting:** Blocked by AUT-20 and WFL-24 and by approved exception policy, recipient/security decisions, and tenant notification/transaction results.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Why this role is recommended:** Atomic multi-record publication and external recipient resolution carry substantial security and recovery consequences.

What the earlier tasks provide: IMP-20: Verified KPI Value and parent-total calculation handlers. IMP-24: Completed Run, Scorecard, and Contribution Task workflows.

**Build instructions:**

1. Configure final validation, source-link safety checks, child and parent publication completion, publication stamps, recipient-role resolution, broad review notification, supplier publication notification, rollback or retry-safe partial-failure handling, and notification deduplication.

**How to check the result:**

- All required validation passes before publication; partial failure is rolled back or resumes safely; unresolved required recipients hold only the affected publication; notifications are not duplicated.

**Information needed for this task:** IN-05: Approve `SET_TO_ZERO` and `EXCLUDE_FROM_DENOMINATOR`, or provide replacement policy. IN-06: Name administrator, coordinator, review, correction, contributor, and support groups and approve role separation. IN-08: Confirm Group responsibility, M:N version copying, inherited-Code behavior, aggregate recalculation, completed-parent child correction, report/query binding, recurrence rendering, and scheduler interpretation. IN-10: Approve entity-scope rules, parent/facility access, supplier recipient roles, correction role, field visibility, and source-link expectations.

**Specification references:** Original implementation-plan assignment AUT-25. Sections 14.1, 16.2, 21.2

**Assumptions and open questions:** No supplier acknowledgement or dispute workflow is configured.

### IMP-26 — Configure Supplier Scorecard Security

**Task ID:** IMP-26

**Title:** Configure Supplier Scorecard Security

**Category:** Security configuration

**Objective:** Restrict administration, contribution, aggregate viewing, corrections, publication, and supplier access while preserving source security.

**Detailed scope:** Configure application/object/record/workflow permissions for administrators, coordinators, reviewers, contributors, correction users, internal viewers, and supplier users; enforce supplier-entity scope, parent/child access rules, internal-only fields, read-only published results, and no access expansion from Group assignment. Add the three tab-audience policies and the applicable-review authorization policy that final menu assembly will consume. Supplier Scorecards allows authorized internal SIA viewers; Program Administration allows the Supplier Scorecard Application Administrator group and members of Administrators; Program Development allows members of Administrators only. Tab membership must not grant additional contributor, coordinator, reviewer, correction, override, or publication actions.

**Deliverable:** Existing scorecard record/action security plus three tab-audience policies and an applicable-review authorization policy ready for final menu/view binding.

**Work needed first:** IMP-19, IMP-24, IMP-25

**What is waiting:** Partly waiting. Existing form, workflow, and publication predecessors remain required. The access rules are decided; assigning them waits for the affected Group bindings and membership and the existing supplier-scope/correction/recipient security inputs. Final menu-record visibility is applied later by the menu/view assignment, so this task does not depend on those later menu records.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Why this role is recommended:** Nuanced cross-object, workflow, source, parent/facility, and supplier security requires senior technical authority.

What the earlier tasks provide: IMP-19: Complete responsive operational form set. IMP-24: Completed Run, Scorecard, and Contribution Task workflows. IMP-25: Publish Scorecards action and specified notification behavior.

**Fields and features to set up:**

| Field or feature | What to set up |
|---|---|
| Supplier Scorecards tab-audience policy | Allow authorized internal SIA Supplier Scorecard users to consume aggregate results and task progress within their existing supplier-entity scope. |
| Program Administration tab-audience policy | Allow the Supplier Scorecard Application Administrator group and members of Administrators. Apply existing role, supplier-scope, and workflow checks to individual actions. |
| Program Development tab-audience policy | Allow members of Administrators only. Membership of Supplier Scorecard Application Administrator without Administrators membership does not qualify. |
| Applicable-review authorization policy | Authorize review only for a user permitted to review the applicable reporting cycle, using its current review authorization. Supply that condition for the later Scorecards in Review menu visibility and destination binding. |
| Action authorization beneath tabs | Configure tab access as navigation access only. Continue evaluating contributor, coordinator, reviewer, correction, override, and publication permissions at the actual record/action boundary rather than granting those capabilities through tab membership. |

**Build instructions:**

1. Configure the three audience policies against the supplied Groups and current eligibility.
2. Provide the applicable-review authorization condition for final menu visibility binding, while keeping the record and action checks authoritative when users follow a link or direct URL.

**How to check the result:**

- An application-admin user without Administrators membership qualifies for Program Administration but does not qualify for Program Development.
- An authorized internal viewer receives Supplier Scorecards access within the existing supplier scope; tab access does not grant review, correction, override, publication, or contribution actions.
- Review authorization is evaluated for the applicable reporting cycle, and source-record drilldown still requires the source application permissions.

**Information needed for this task:** IN-06: Supply coordinator, review, correction, contributor, and support Group assignments and the approved separation of duties used by the original security task; these are distinct from the already decided tab labels and Administrators requirement. IN-10: Supply any still-unresolved supplier-entity scope, related-facility access, correction-role, field-visibility, and source-link security decisions needed by the original record/action security configuration. IN-20: Supply the native Group bindings and eligible membership for the application-admin group, Administrators, internal SIA viewers, and current review Groups before their tab/review policies are assigned.

**Specification references:** Original implementation-plan assignment SEC-26; original scope is retained. Technical specification Sections 16.1, 16.4 and 21.2; SC-018, SC-035 and SC-036.

**Assumptions and open questions:** Catalogue record/field maintenance grants are configured by the catalogue assignment. This assignment owns user-access policies and existing record/action security; final menu records and their visibility bindings are configured by the later view assignment.

### IMP-27 — Configure Scorecard Views and Reports

**Task ID:** IMP-27

**Title:** Configure Scorecard Views and Reports

**Category:** Reporting and view configuration

**Objective:** Provide operational oversight, published detail, profile drilldown, category results, trends, and on-demand authorized ranking.

**Detailed scope:** Configure responsive entry/review/admin/published views, supplier-profile grids, overdue and completeness reports, snapshot-aware KPI reporting, category aggregation, current-measure workspace links, and secured overall/commodity rank calculation without persisted rank fields. Add the named overview, history, contribution-progress, review, and reported-data views and complete the 24 ordered menu destinations across the three tab shells. Bind the audience and review-visibility policies supplied by the security work. Set Supplier Scorecards to open Scorecard Overview and the other two tabs to open blank content areas until a menu is selected. Omit My Contribution Tasks; retain all earlier reporting, responsive-view, ranking, and supplier-profile scope.

**Deliverable:** Existing scorecard report/view set plus 24 ordered menu links with secured visibility and the approved Overview, Blank, Blank tab defaults.

**Work needed first:** IMP-20, IMP-26, IMP-08, IMP-11

**What is waiting:** Partly waiting. Complete the earlier calculation, security, KPI-form, and Program-form outputs before binding their destinations. Menu labels and destination purposes are decided; only unverified native binding settings wait for supplied support details. Only the Generation Lag Time Increments link additionally waits for its catalogue object/form from the separate scheduling amendment. Existing ranking and report/query inputs still block their affected reporting features.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** Cross-object reporting and secured query ranking require broader technical judgment but not bespoke UI architecture.

What the earlier tasks provide: IMP-20: Verified KPI Value and parent-total calculation handlers. IMP-26: Existing scorecard record/action security plus three tab-audience policies and an applicable-review authorization policy ready for final menu/view binding. IMP-08: Usable KPI authoring and immutable-version forms. IMP-11: Program/version administration forms and Generation Delay object/form/grid.

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

**Build instructions:**

1. Create the named overview and supplemental views using the existing configured objects, responsive forms, and native reporting.
2. Bind the 24 menu items to the stated destinations in the stated tab/group order, and apply the three tab-audience policies plus the applicable-review condition to their navigation visibility.
3. Apply the three explicit tab default views. Configure no My Contribution Tasks menu, no fourth application tab, no abstract-catalogue administration menu, and no standalone unrestricted Generation Delay creation menu.

**How to check the result:**

- The final navigation contains three tabs, nine grouping headers, and 24 menu items: five under Supplier Scorecards, nine under Program Administration, and ten under Program Development.
- Opening Supplier Scorecards displays Scorecard Overview. Opening Program Administration or Program Development displays blank content until a menu is selected.
- Each of the 24 menu items opens its named object inventory or view, and Scorecards in Review is shown only to users authorized for the applicable reporting cycle.
- Program and KPI Versions open through their authoring records, and Generation Delay creation remains through the controlled Program grid action.
- The three business catalogue menus permit the assigned business maintainers, while the ten technical catalogue menus require Administrators membership; selecting supported values on consuming forms does not grant maintenance.
- Contribution Progress is read only, My Contribution Tasks is absent, and no abstract-catalogue or standalone unrestricted Generation Delay creation menu is introduced.

**Information needed for this task:** IN-08: Supply the supported report/query binding needed by the existing views and ranking work; this blocks only the view/query bindings whose native method remains unverified. IN-11: Supply tie, exclusion, null-score, population-count, and security-filtering rules for the existing overall and commodity ranking features; the approved tab/menu labels do not wait for a new naming decision. IN-21: Supply only unverified supported native menu/default settings, including blank tab content and the applicable-review visibility condition. New view identifiers are produced by the relevant build tasks, not requested as user decisions. IN-22: Supply the Generation Lag Time Increment object and administration form from the separate scheduling amendment before completing that one catalogue menu link; other menu and view bindings can proceed.

**Specification references:** Original implementation-plan assignment RPT-27; original scope is retained. Technical specification Sections 15.4–15.5, 16.3, 16.4 and 21.2; SC-035 through SC-037.

**Assumptions and open questions:** The three tab shells and grouping labels come from the application task; catalogue privileges and security policies come from their named earlier outputs. Existing task notification links and contribution entry/completion behavior remain in use. No new data object, field, Power BI dataset, or custom audit object is assigned by this amendment.

### IMP-28 — Configure Supplier Survey Safety Capture

**Task ID:** IMP-28

**Title:** Configure Supplier Survey Safety Capture

**Category:** Integration configuration

**Objective:** Capture LTIR, TRIR, and Safety Kaizen results from the authoritative Supplier Survey model with exact benchmark evidence.

**Detailed scope:** Configure supplier/period survey matching, completed-survey selection, NAICS/metric benchmark-version resolution, points calculation, nonresponse handling, Kaizen carry-forward, source references, and safe refresh behavior.

**Deliverable:** Governed safety Query KPI bindings and carry-forward behavior.

**Work needed first:** IMP-15, IMP-22, IMP-26

**What is waiting:** Blocked by AUT-15, AUT-22, and SEC-26 and by approved survey identifiers/schedules, safety scoring, NAICS, and benchmark governance.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Why this role is recommended:** Cross-component effective dating, scoring, evidence, and nonresponse handling are consequential.

What the earlier tasks provide: IMP-15: Controlled Safety Benchmark Publish action. IMP-22: Initialization component and targeted Refresh KPI Result action. IMP-26: Complete scorecard security configuration across all surfaces.

**Build instructions:**

1. Configure supplier/period survey matching, completed-survey selection, NAICS/metric benchmark-version resolution, points calculation, nonresponse handling, Kaizen carry-forward, source references, and safe refresh behavior.

**How to check the result:**

- Exact completed survey and benchmark version are stored; missing NAICS/benchmark is reported rather than guessed; Kaizen carry-forward follows the approved period rule.

**Information needed for this task:** IN-12: Confirm Commodity override policy, NAICS ownership, missing-code behavior, benchmark sources, and update procedure. IN-13: Provide issued survey identifiers/schedules, supplier/period matching, completion rules, and exact LTIR/TRIR and Kaizen scoring.

**Specification references:** Original implementation-plan assignment INT-28. Sections 11, 13.4, 17

**Assumptions and open questions:** Supplier Survey implementation is supplied by its authoritative specification.

### IMP-29 — Configure the PPM Query KPI

**Task ID:** IMP-29

**Title:** Configure the PPM Query KPI

**Category:** Integration configuration

**Objective:** Calculate the approved PPM score from chargeable supplier NCR quantities and consumed parts for the same supplier and period.

**Detailed scope:** Configure the governed source report/query binding, supplier and period mapping, included dispositions, parts-consumption input, aggregation and points logic, empty/failure behavior, correction handling, evidence link, and security-preserving drilldown.

**Deliverable:** One governed PPM Query KPI source integration.

**Work needed first:** IMP-22, IMP-26

**What is waiting:** Blocked by AUT-22 and SEC-26 and by the complete PPM source contract.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Why this role is recommended:** Multi-source calculation and supplier-period reconciliation have substantial architectural and scoring consequences.

What the earlier tasks provide: IMP-22: Initialization component and targeted Refresh KPI Result action. IMP-26: Complete scorecard security configuration across all surfaces.

**Build instructions:**

1. Configure the governed source report/query binding, supplier and period mapping, included dispositions, parts-consumption input, aggregation and points logic, empty/failure behavior, correction handling, evidence link, and security-preserving drilldown.

**How to check the result:**

- Numerator/denominator use approved sources and period; missing/failure states are explicit; correction and refresh are safe; drilldown reapplies source security.

**Information needed for this task:** IN-14: Select parts-consumption integration, map chargeable NCR dispositions/quantities, supplier keys, periods, scoring, corrections, and secure drilldown.

**Specification references:** Original implementation-plan assignment INT-29. Sections 17, 22.11

**Assumptions and open questions:** Parts-consumption transfer method is externally supplied.

### IMP-30 — Configure the Response Timeliness Query KPI

**Task ID:** IMP-30

**Title:** Configure the Response Timeliness Query KPI

**Category:** Integration configuration

**Objective:** Score supplier response timeliness without charging internal review delay to the supplier.

**Detailed scope:** Configure the approved response source, supplier and period mapping, supplier submission timestamp, applicable due date, exclusions, scoring logic, correction handling, empty/failure behavior, and source-security-safe evidence link.

**Deliverable:** One governed response-timeliness Query KPI integration.

**Work needed first:** IMP-22, IMP-26

**What is waiting:** Blocked by AUT-22 and SEC-26 and by the complete response-timeliness source contract.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** This is a bounded report-fed source once its business contract is supplied.

What the earlier tasks provide: IMP-22: Initialization component and targeted Refresh KPI Result action. IMP-26: Complete scorecard security configuration across all surfaces.

**Build instructions:**

1. Configure the approved response source, supplier and period mapping, supplier submission timestamp, applicable due date, exclusions, scoring logic, correction handling, empty/failure behavior, and source-security-safe evidence link.

**How to check the result:**

- Scoring uses supplier submission and applicable due date only; internal review time is excluded; correction, failure, and evidence behavior match the source contract.

**Information needed for this task:** IN-15: Define authoritative source, supplier/period keys, due/submission timestamps, exclusions, scoring, corrections, and secure drilldown.

**Specification references:** Original implementation-plan assignment INT-30. Section 17

**Assumptions and open questions:** None.

### IMP-31 — Configure the Scrap Query KPI

**Task ID:** IMP-31

**Title:** Configure the Scrap Query KPI

**Category:** Integration configuration

**Objective:** Supply approved scrap results to Scorecards while leaving debit settlement outside Intelex.

**Detailed scope:** Configure the approved scrap source report, supplier and period mapping, aggregation and scoring rules, correction handling, empty/failure behavior, and secure evidence link; do not add debit settlement processing.

**Deliverable:** One governed Scrap Query KPI integration.

**Work needed first:** IMP-22, IMP-26

**What is waiting:** Blocked by AUT-22 and SEC-26 and by the complete Scrap source contract.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** This is a bounded source integration once the authoritative mapping and rules are supplied.

What the earlier tasks provide: IMP-22: Initialization component and targeted Refresh KPI Result action. IMP-26: Complete scorecard security configuration across all surfaces.

**Build instructions:**

1. Configure the approved scrap source report, supplier and period mapping, aggregation and scoring rules, correction handling, empty/failure behavior, and secure evidence link; do not add debit settlement processing.

**How to check the result:**

- Correct supplier-period scrap result is captured; debit processing is absent; correction/failure behavior is explicit; source security is preserved.

**Information needed for this task:** IN-16: Define authoritative source, supplier/period keys, aggregation, scoring, corrections, and secure drilldown.

**Specification references:** Original implementation-plan assignment INT-31. Sections 2 (SC-023), 17

**Assumptions and open questions:** None.

### IMP-32 — Configure the Warranty Query KPI

**Task ID:** IMP-32

**Title:** Configure the Warranty Query KPI

**Category:** Integration configuration

**Objective:** Supply the approved warranty result from its authoritative source to the matching supplier-period KPI Value.

**Detailed scope:** Configure the approved warranty source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security.

**Deliverable:** One governed Warranty Query KPI integration.

**Work needed first:** IMP-22, IMP-26

**What is waiting:** Blocked by AUT-22 and SEC-26 and by the complete Warranty source contract.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** This is a bounded source integration once its contract is supplied.

What the earlier tasks provide: IMP-22: Initialization component and targeted Refresh KPI Result action. IMP-26: Complete scorecard security configuration across all surfaces.

**Build instructions:**

1. Configure the approved warranty source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security.

**How to check the result:**

- The approved result maps to the correct supplier/period; refresh and correction follow policy; failures are explicit; drilldown preserves source authorization.

**Information needed for this task:** IN-17: Define authoritative source, supplier/period keys, inclusions, aggregation, scoring, corrections, and secure drilldown.

**Specification references:** Original implementation-plan assignment INT-32. Section 17

**Assumptions and open questions:** None.

### IMP-33 — Configure the PPAP Query KPI

**Task ID:** IMP-33

**Title:** Configure the PPAP Query KPI

**Category:** Integration configuration

**Objective:** Supply the approved PPAP result from its authoritative source to the matching supplier-period KPI Value.

**Detailed scope:** Configure the approved PPAP source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security.

**Deliverable:** One governed PPAP Query KPI integration.

**Work needed first:** IMP-22, IMP-26

**What is waiting:** Blocked by AUT-22 and SEC-26 and by the complete PPAP source contract.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** This is a bounded cross-application source integration once its contract is supplied.

What the earlier tasks provide: IMP-22: Initialization component and targeted Refresh KPI Result action. IMP-26: Complete scorecard security configuration across all surfaces.

**Build instructions:**

1. Configure the approved PPAP source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security.

**How to check the result:**

- The approved result maps to the correct supplier/period; refresh and correction follow policy; failures are explicit; drilldown preserves PPAP security.

**Information needed for this task:** IN-18: Define authoritative source, supplier/period keys, inclusions, aggregation, scoring, corrections, and secure drilldown.

**Specification references:** Original implementation-plan assignment INT-33. Section 17

**Assumptions and open questions:** None.

### IMP-34 — Configure the Delivery Query KPI

**Task ID:** IMP-34

**Title:** Configure the Delivery Query KPI

**Category:** Integration configuration

**Objective:** Supply the approved delivery result from its authoritative source to the matching supplier-period KPI Value.

**Detailed scope:** Configure the approved delivery source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security.

**Deliverable:** One governed Delivery Query KPI integration.

**Work needed first:** IMP-22, IMP-26

**What is waiting:** Blocked by AUT-22 and SEC-26 and by the complete Delivery source contract.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** This is a bounded source integration once its contract is supplied.

What the earlier tasks provide: IMP-22: Initialization component and targeted Refresh KPI Result action. IMP-26: Complete scorecard security configuration across all surfaces.

**Build instructions:**

1. Configure the approved delivery source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security.

**How to check the result:**

- The approved result maps to the correct supplier/period; refresh and correction follow policy; failures are explicit; drilldown preserves source authorization.

**Information needed for this task:** IN-19: Define authoritative source, supplier/period keys, inclusions, aggregation, scoring, corrections, and secure drilldown.

**Specification references:** Original implementation-plan assignment INT-34. Section 17

**Assumptions and open questions:** None.

### IMP-35 — Configure the Initial Scorecard Configuration

**Task ID:** IMP-35

**Title:** Configure the Initial Scorecard Configuration

**Category:** Initial configuration

**Objective:** Make the approved direct-entry-first Scorecard configuration available for operational generation.

**Detailed scope:** Create and publish approved safety benchmark, KPI, and Program records; assign KPI membership and recipient roles; create effective-dated supplier Participations; configure required status-capability decisions; and verify that published configuration resolves by the intended period. Query KPIs remain Direct Entry until their integration task is complete.

**Deliverable:** Published initial benchmark/KPI/Program versions, Participations, routing, and capability configuration.

**Work needed first:** IMP-04, IMP-09, IMP-12, IMP-13, IMP-15

**What is waiting:** Blocked by all prerequisites and by the approved KPI catalogue, participant population, groups, status decisions, cadence/calendar, Commodity/NAICS governance, and operating model.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Why this role is recommended:** This is controlled configuration-record setup using completed publish mechanisms; review protects the approved design baseline.

What the earlier tasks provide: IMP-04: Approved, audited records in every concrete catalogue. IMP-09: Controlled KPI Publish action. IMP-12: Controlled Program Publish action. IMP-13: Participation object, forms, relationships, audit, and range control. IMP-15: Controlled Safety Benchmark Publish action.

**Build instructions:**

1. Create and publish approved safety benchmark, KPI, and Program records; assign KPI membership and recipient roles; create effective-dated supplier Participations; configure required status-capability decisions; and verify that published configuration resolves by the intended period. Query KPIs remain Direct Entry until their integration task is complete.

**How to check the result:**

- Approved KPIs and Program publish without overlap; each intended supplier has one valid Participation; routing resolves; Direct Entry remains the default until each Query integration is ready.

**Information needed for this task:** IN-02: Approve Commodity, NAICS, KPI Category, KPI Aggregation Method, Value Type, and any changes to the specification seed values. IN-03: Supply verified recurrence expressions, period-boundary rules, scheduler timezone, business calendar, generation time, entry/review cutoffs, reminders, and escalation behavior. IN-04: Approve or reject ADR-113 parent-periodic/facility-monthly rollup behavior. IN-06: Name administrator, coordinator, review, correction, contributor, and support groups and approve role separation. IN-07: Approve status/capability matrix entries and parent-restriction behavior for monthly and, if used, periodic generation. IN-09: Supply KPI definitions, categories, maxima, initialization, applicability, missing-value behavior, aggregation, contacts, effective dates, Program membership, requiredness, and participant population. IN-12: Confirm Commodity override policy, NAICS ownership, missing-code behavior, benchmark sources, and update procedure.

**Specification references:** Original implementation-plan assignment DAT-35. Sections 8–10, 20.2–20.3, 22.1–22.8

**Assumptions and open questions:** Historical spreadsheet import is excluded and would require a separate migration plan.

## Work that depends on earlier tasks

Each arrow means the later task requires the configured output of the earlier task. Missing supplied information does not create a graph node. The KPI and Program form outputs are added as prerequisites of the final menu/view assembly; the application shell remains the root.

```mermaid
flowchart TD
  IMP_01["IMP-01 Create the Supplier Scorecard Application"]
  IMP_02["IMP-02 Create the Scorecard Catalogue Objects"]
  IMP_03["IMP-03 Configure the Scorecard Catalogues"]
  IMP_04["IMP-04 Load the Scorecard Catalogue Records"]
  IMP_05["IMP-05 Update Supplier Abstract for Scorecards"]
  IMP_06["IMP-06 Configure Commodity Synchronization"]
  IMP_07["IMP-07 Create the KPI Configuration Objects"]
  IMP_08["IMP-08 Configure the KPI Administration Forms"]
  IMP_09["IMP-09 Configure KPI Publish"]
  IMP_10["IMP-10 Create the Program Configuration Objects"]
  IMP_11["IMP-11 Configure Program and Generation Delay Forms"]
  IMP_12["IMP-12 Configure Program Publish"]
  IMP_13["IMP-13 Create Supplier Scorecard Participation"]
  IMP_14["IMP-14 Create the Safety Benchmark Objects"]
  IMP_15["IMP-15 Configure Safety Benchmark Publish"]
  IMP_16["IMP-16 Create Run and Scorecard Objects"]
  IMP_17["IMP-17 Create KPI Value and Contribution Task Objects"]
  IMP_18["IMP-18 Configure the Scorecard Workflow Skeletons"]
  IMP_19["IMP-19 Configure Operational Scorecard Forms"]
  IMP_20["IMP-20 Configure KPI Value Calculations"]
  IMP_21["IMP-21 Configure Scheduled Scorecard Generation"]
  IMP_22["IMP-22 Configure KPI Initialization and Refresh"]
  IMP_23["IMP-23 Configure Entry Cutoff Processing"]
  IMP_24["IMP-24 Complete the Scorecard Workflows"]
  IMP_25["IMP-25 Configure Publication and Notifications"]
  IMP_26["IMP-26 Configure Supplier Scorecard Security"]
  IMP_27["IMP-27 Configure Scorecard Views and Reports"]
  IMP_28["IMP-28 Configure Supplier Survey Safety Capture"]
  IMP_29["IMP-29 Configure the PPM Query KPI"]
  IMP_30["IMP-30 Configure the Response Timeliness Query KPI"]
  IMP_31["IMP-31 Configure the Scrap Query KPI"]
  IMP_32["IMP-32 Configure the Warranty Query KPI"]
  IMP_33["IMP-33 Configure the PPAP Query KPI"]
  IMP_34["IMP-34 Configure the Delivery Query KPI"]
  IMP_35["IMP-35 Configure the Initial Scorecard Configuration"]
  IMP_01 --> IMP_02
  IMP_02 --> IMP_03
  IMP_03 --> IMP_04
  IMP_03 --> IMP_05
  IMP_05 --> IMP_06
  IMP_03 --> IMP_07
  IMP_07 --> IMP_08
  IMP_07 --> IMP_09
  IMP_08 --> IMP_09
  IMP_03 --> IMP_10
  IMP_07 --> IMP_10
  IMP_10 --> IMP_11
  IMP_10 --> IMP_12
  IMP_11 --> IMP_12
  IMP_05 --> IMP_13
  IMP_10 --> IMP_13
  IMP_03 --> IMP_14
  IMP_14 --> IMP_15
  IMP_05 --> IMP_16
  IMP_10 --> IMP_16
  IMP_13 --> IMP_16
  IMP_03 --> IMP_17
  IMP_07 --> IMP_17
  IMP_14 --> IMP_17
  IMP_16 --> IMP_17
  IMP_16 --> IMP_18
  IMP_17 --> IMP_18
  IMP_17 --> IMP_19
  IMP_18 --> IMP_19
  IMP_17 --> IMP_20
  IMP_19 --> IMP_20
  IMP_09 --> IMP_21
  IMP_12 --> IMP_21
  IMP_13 --> IMP_21
  IMP_17 --> IMP_21
  IMP_18 --> IMP_21
  IMP_20 --> IMP_22
  IMP_21 --> IMP_22
  IMP_20 --> IMP_23
  IMP_21 --> IMP_23
  IMP_18 --> IMP_24
  IMP_20 --> IMP_24
  IMP_20 --> IMP_25
  IMP_24 --> IMP_25
  IMP_19 --> IMP_26
  IMP_24 --> IMP_26
  IMP_25 --> IMP_26
  IMP_20 --> IMP_27
  IMP_26 --> IMP_27
  IMP_08 --> IMP_27
  IMP_11 --> IMP_27
  IMP_15 --> IMP_28
  IMP_22 --> IMP_28
  IMP_26 --> IMP_28
  IMP_22 --> IMP_29
  IMP_26 --> IMP_29
  IMP_22 --> IMP_30
  IMP_26 --> IMP_30
  IMP_22 --> IMP_31
  IMP_26 --> IMP_31
  IMP_22 --> IMP_32
  IMP_26 --> IMP_32
  IMP_22 --> IMP_33
  IMP_26 --> IMP_33
  IMP_22 --> IMP_34
  IMP_26 --> IMP_34
  IMP_04 --> IMP_35
  IMP_09 --> IMP_35
  IMP_12 --> IMP_35
  IMP_13 --> IMP_35
  IMP_15 --> IMP_35
```

## Who covers each part of the build

| Part of the build | Responsible task | What happens |
|---|---|---|
| Retained original assignment APP-01 | IMP-01 | The proposed build retains the complete original assignment and its scope: Create the Supplier Scorecard application, application-level settings, navigation areas, and placeholders for administration, contribution, review, published results, and reporting. Do not modify the OOTB SRM application or workflows. |
| Retained original assignment OBJ-02 | IMP-02 | The proposed build retains the complete original assignment and its scope: Create non-instantiable `Supplier Scorecard Abstract Catalog Record` and its twelve direct children: Supplier Commodity, NAICS Classification, KPI Category, KPI Aggregation Method, KPI Value Type, KPI Contribution Source, KPI Collection Method, KPI Initialization Method, Safety Benchmark Metric, Scorecard Cadence, KPI Value Origin, and Publication Exception Treatment. |
| Retained original assignment CFG-03 | IMP-03 | The proposed build retains the complete original assignment and its scope: Configure inherited `Code`, `Name`, `Active?`, and `Sort`; add `Description` to KPI Aggregation Method and `Frequency` to Scorecard Cadence; configure child administration forms, active-record filters, audit, and basic permissions. Do not expose inverse consumer grids. |
| Retained original assignment DAT-04 | IMP-04 | The proposed build retains the complete original assignment and its scope: Load the specification-defined records for value type, contribution source, collection method, initialization method, safety metric, cadence, value origin, and publication exception treatment, plus approved commodity, NAICS, KPI category, and aggregation-method records. Preserve stable Codes and approved recurrence expressions. |
| Retained original assignment OBJ-05 | IMP-05 | The proposed build retains the complete original assignment and its scope: Add `Commodity` and `NAICS Classification` M:1 fields to `Supplier Abstract`, with catalogue inverses disabled, and add inverse grids for `Scorecard Participations` and `Scorecards`. Apply inherited behavior to Parent Company and Facility without creating another supplier object. |
| Retained original assignment AUT-06 | IMP-06 | The proposed build retains the complete original assignment and its scope: Configure the Facility create/update handler and Parent Company Commodity update handler, including idempotent child updates, audit, failure reporting, and protection against metadata-only retriggers. |
| Retained original assignment OBJ-07 | IMP-07 | The proposed build retains the complete original assignment and its scope: Create `Supplier Scorecard KPI` and `Supplier Scorecard KPI Version` with all specification fields, relationships, inverse grids, uniqueness rules, conditional requirements, and immutable version behavior. |
| Retained original assignment FRM-08 | IMP-08 | The proposed build retains the complete original assignment and its scope: Configure KPI authoring and read-only version forms, active catalogue filters, conditional sections for contributor, defaults, query source, and safety benchmark settings, plus the Versions grid and Publish action placement. |
| Retained original assignment AUT-09 | IMP-09 | The proposed build retains the complete original assignment and its scope: Configure validation, concurrency control, deterministic version numbering, effective-range overlap prevention, full authoring-to-version field mapping, rollback, administrator authorization, and native execution evidence. |
| Retained original assignment OBJ-10 | IMP-10 | The proposed build retains the complete original assignment and its scope: Create `Scorecard Program`, `Scorecard Program KPI`, `Scorecard Program Version`, and `Scorecard Program KPI Version` with specified fields, M:1/M:N relationships, inverse grids, uniqueness, effective dating, rollup-source reference, and immutable version behavior. |
| Retained original assignment FRM-11 | IMP-11 | The proposed build retains the complete original assignment and its scope: Configure Program authoring/version forms and grids; create `Scorecard Program Generation Delay`; configure its contextual New form, calculated display, occurrence fields, audit, Applied Run evidence, and read-only applied state. |
| Retained original assignment AUT-12 | IMP-12 | The proposed build retains the complete original assignment and its scope: Configure graph validation, cadence and rollup checks, cycle prevention, deterministic version numbering, complete child and M:N copying, overlap prevention, concurrency control, rollback, and immutability. |
| Retained original assignment OBJ-13 | IMP-13 | The proposed build retains the complete original assignment and its scope: Create `Supplier Scorecard Participation`, its Supplier and Program relationships, active/effective fields, display value, audit, inverse navigation, and prevention of overlapping active ranges for the same Supplier and Program. |
| Retained original assignment OBJ-14 | IMP-14 | The proposed build retains the complete original assignment and its scope: Create `Safety Benchmark` and immutable `Safety Benchmark Version` with catalogue relationships, source evidence, effective ranges, inverse Versions grid, uniqueness, and administration/read-only forms. |
| Retained original assignment AUT-15 | IMP-15 | The proposed build retains the complete original assignment and its scope: Configure required-field validation, stable benchmark uniqueness, effective-range checks, deterministic version numbering, full field copying, concurrency control, rollback, authorization, and immutable published records. |
| Retained original assignment OBJ-16 | IMP-16 | The proposed build retains the complete original assignment and its scope: Create `Supplier Scorecard Run` and `Supplier Scorecard` with all specified scalar fields, supplier/program relationships, snapshots, inverse grids, Source Scorecards M:N, publication metadata, and uniqueness for Program occurrence and Run/Supplier. |
| Retained original assignment OBJ-17 | IMP-17 | The proposed build retains the complete original assignment and its scope: Create `Scorecard KPI Value` and `Scorecard Contribution Task` with typed values, points, applicability, confirmation, exception, override, source evidence, catalogue relationships, contributor assignment, inverse grids, and required uniqueness rules. |
| Retained original assignment WFL-18 | IMP-18 | The proposed build retains the complete original assignment and its scope: Configure simple workflows for Supplier Scorecard Run, Supplier Scorecard, and Scorecard Contribution Task using the stages and terminal outcomes in the specification, with basic responsibility and transition actions only. |
| Retained original assignment FRM-19 | IMP-19 | The proposed build retains the complete original assignment and its scope: Configure Run, Scorecard, KPI Value, and Contribution Task forms and grids; typed-value visibility; stage containers; contributor editing; internal-only exception/override controls; source links; read-only publication views; and responsive connected-browser behavior. |
| Retained original assignment AUT-20 | IMP-20 | The proposed build retains the complete original assignment and its scope: Configure input recalculation, confirmation metadata, publication-exception and override handlers, `Value Origin` assignment, parent total/category recalculation, recursion protection, retry behavior, and `Last Calculated At`. |
| Retained original assignment AUT-21 | IMP-21 | The proposed build retains the complete original assignment and its scope: Configure cadence evaluation, period boundaries, Generation Delay gate, Program/KPI version resolution, participation and status checks, rollup selection, retry-safe graph creation by specified uniqueness keys, failure ownership, and transition to Data Entry only after complete generation. |
| Retained original assignment AUT-22 | IMP-22 | The proposed build retains the complete original assignment and its scope: Configure no-default, static-default, and prior-period initialization; query capture metadata; open-period refresh; privileged targeted post-publication refresh; source evidence updates; total recalculation; and safeguards against background refresh of Published Scorecards. |
| Retained original assignment AUT-23 | IMP-23 | The proposed build retains the complete original assignment and its scope: Configure the Entry Due At service to set only eligible supplier nonresponses to zero, stamp the governed origin, leave internal gaps unresolved, respect optional values, and preserve retry-safe execution evidence. |
| Retained original assignment WFL-24 | IMP-24 | The proposed build retains the complete original assignment and its scope: Add full validation, error handling, calculated responsibility and due dates, hidden parent-driven child transitions, Open/Close Review behavior, contribution completion/reopen rules, cancellation cascade, and native reminders. |
| Retained original assignment AUT-25 | IMP-25 | The proposed build retains the complete original assignment and its scope: Configure final validation, source-link safety checks, child and parent publication completion, publication stamps, recipient-role resolution, broad review notification, supplier publication notification, rollback or retry-safe partial-failure handling, and notification deduplication. |
| Retained original assignment SEC-26 | IMP-26 | The proposed build retains the complete original assignment and its scope: Configure application/object/record/workflow permissions for administrators, coordinators, reviewers, contributors, correction users, internal viewers, and supplier users; enforce supplier-entity scope, parent/child access rules, internal-only fields, read-only published results, and no access expansion from Group assignment. |
| Retained original assignment RPT-27 | IMP-27 | The proposed build retains the complete original assignment and its scope: Configure responsive entry/review/admin/published views, supplier-profile grids, overdue and completeness reports, snapshot-aware KPI reporting, category aggregation, current-measure workspace links, and secured overall/commodity rank calculation without persisted rank fields. |
| Retained original assignment INT-28 | IMP-28 | The proposed build retains the complete original assignment and its scope: Configure supplier/period survey matching, completed-survey selection, NAICS/metric benchmark-version resolution, points calculation, nonresponse handling, Kaizen carry-forward, source references, and safe refresh behavior. |
| Retained original assignment INT-29 | IMP-29 | The proposed build retains the complete original assignment and its scope: Configure the governed source report/query binding, supplier and period mapping, included dispositions, parts-consumption input, aggregation and points logic, empty/failure behavior, correction handling, evidence link, and security-preserving drilldown. |
| Retained original assignment INT-30 | IMP-30 | The proposed build retains the complete original assignment and its scope: Configure the approved response source, supplier and period mapping, supplier submission timestamp, applicable due date, exclusions, scoring logic, correction handling, empty/failure behavior, and source-security-safe evidence link. |
| Retained original assignment INT-31 | IMP-31 | The proposed build retains the complete original assignment and its scope: Configure the approved scrap source report, supplier and period mapping, aggregation and scoring rules, correction handling, empty/failure behavior, and secure evidence link; do not add debit settlement processing. |
| Retained original assignment INT-32 | IMP-32 | The proposed build retains the complete original assignment and its scope: Configure the approved warranty source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security. |
| Retained original assignment INT-33 | IMP-33 | The proposed build retains the complete original assignment and its scope: Configure the approved PPAP source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security. |
| Retained original assignment INT-34 | IMP-34 | The proposed build retains the complete original assignment and its scope: Configure the approved delivery source binding, supplier and period mapping, inclusions, aggregation, points logic, correction timing, empty/failure behavior, evidence link, and source security. |
| Retained original assignment DAT-35 | IMP-35 | The proposed build retains the complete original assignment and its scope: Create and publish approved safety benchmark, KPI, and Program records; assign KPI membership and recipient roles; create effective-dated supplier Participations; configure required status-capability decisions; and verify that published configuration resolves by the intended period. Query KPIs remain Direct Entry until their integration task is complete. |
| Three ordered application tab shells | IMP-01 | Create Supplier Scorecards, Program Administration, and Program Development as the application shell. |
| Nine ordered menu grouping headers | IMP-01 | Create the two consumer, three administration, and four development menu groupings with the approved labels. |
| Business catalogue record maintenance privileges | IMP-03 | Allow the three named business classifications to application administrators or Administrators. |
| Technical catalogue record maintenance privileges | IMP-03 | Restrict ten named technical catalogues to Administrators; only the increment-specific permission portion also waits for its earlier object output. |
| Catalogue inherited and direct field editability | IMP-03 | Apply the catalogue maintenance division to inherited Code, Name, Active?, and Sort, plus Description and Frequency, retaining stability locks. |
| Three tab-audience policies | IMP-26 | Create the internal-viewer, application-admin/Administrators, and Administrators-only audience policies. |
| Applicable-review authorization policy | IMP-26 | Supply the reporting-cycle-specific review condition without granting review through ordinary tab access. |
| Twenty-four ordered menu destination bindings | IMP-27 | Create the complete consumer, administration, and development menu mapping to named inventories or views; only the increment link waits for its separate target. |
| Three tab default-view bindings | IMP-27 | Set Scorecard Overview, Blank view, and Blank view as the tab defaults. |
| Menu visibility bindings | IMP-27 | Apply the supplied tab-audience and applicable-review policies to the final navigation. |
| Native audit and workflow evidence | Reuse | Reported-data inspection uses existing record audit and workflow history rather than a new evidence object. |
| Existing contribution assignment and notification links | Reuse | Omitting My Contribution Tasks does not remove the task object, assignment, notification links, or completion behavior. |
| Existing supplier scope, source security, and workflow/action controls | Reuse | Navigation membership does not grant wider record access or new actions. |
| Existing immutable versions and stable catalogue Codes | Reuse | Version immutability, first-use Code stability, used-Cadence stability, and historical references remain authoritative. |
| Generation Lag Time Increment object and form | External | Consume the output of the separately drafted November 5 scheduling amendment, which remains outside this navigation amendment. |
| My Contribution Tasks menu | Not applicable | This entry was removed from the proposal and must not be added; no tenant deletion is asserted. |
| New data objects, fields, relationships, and workflow changes | Not applicable | The navigation amendment assigns no structural model or workflow changes. |
