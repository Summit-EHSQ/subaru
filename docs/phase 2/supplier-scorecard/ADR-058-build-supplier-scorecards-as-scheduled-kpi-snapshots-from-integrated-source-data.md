---
status: accepted
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
- Glenn Blahnik
- Joel Frick
consulted:
- Dave McLean
- Shao Ngoi
- Yolanda Reyes
- Keith Freeman
informed:
- Keith Freeman
- Joel Frick
- Rick Redmond
primary-application: Supplier Scorecard
secondary-applications:
- Supplier Relationship Management
- Non-Conformance Management
- Production Part Approval Process (PPAP)
- Warranty Claims
- Scrap Data
- Parts Consumption
---

# ADR-058: Build Supplier Scorecards as Scheduled, Versioned KPI Snapshots

## Context and Problem Statement

Current supplier scorecards require Power BI exports, departmental spreadsheets, supplier-entered measures, and substantial monthly assembly. Metrics depend on multiple source systems and owners. In particular, parts-per-million performance requires supplier NCR disposition quantities and a monthly parts-consumption denominator maintained in an SIA SQL environment. Warranty, scrap, PPAP, delivery, safety, and response-timeliness data also contribute to supplier performance.

Most present KPIs are manually gathered, while others can be derived from governed Intelex reports or external feeds. The KPI catalogue will change over time, so each monthly scorecard must retain the definitions and values that applied to its reporting period.

## Decision Drivers

- Eliminate repetitive monthly data assembly.
- Create auditable period-specific scorecard records.
- Use authoritative operational sources for each KPI.
- Calculate PPM from consumed parts rather than shipments.
- Measure supplier timeliness without penalizing internal review delay.
- Support manual and automated KPI sources through one model.
- Allow the scorecard framework to launch before every source application and integration is available.
- Preserve KPI definitions and historical meaning as the catalogue changes.
- Distinguish facility or depot performance while retaining company-level rollups.
- Configure initialization and applicability independently for each KPI.
- Preserve the supplier classification used for period-specific peer comparisons.

## Considered Options

### Continue Power BI and Excel assembly

Preserves the current process but retains manual work and weak period records.

### Use only live dashboards

Shows current performance but cannot freeze the period result or workflow.

### Generate scorecard records and snapshot integrated KPI values

Creates governed supplier-period records populated from authoritative source data.

### Hard-code the current KPI catalogue as scorecard fields

Matches the current reporting layout but requires application changes when KPIs, owners, types, or formulas change.

### Generate scorecards from a versioned KPI library with manual and automated values

Supports evolving definitions, distributed ownership, integrated sources, and historical interpretation.

### Bulk-import external values directly into scorecard KPI records

Could reduce repetitive entry but exposes governed scorecard records to administrative import risk and is not appropriate as a general user-facing loader.

### Stage normalized external values and query them into scorecards

Isolates import risk and creates a governed source when bulk loading is justified, but requires a normalized dataset and an administered load or integration process.

## Decision Outcome

Create a monthly scorecard snapshot from a governed, versioned KPI library. Each KPI definition identifies its data type, applicability, calculation or source, manual or automated collection method, responsible role or group, effective version, feedback contact, and aggregation behavior. Instantiate the definitions applicable to the reporting period as structured scorecard values.

Launch the initial catalogue with direct entry for every KPI so the scorecard framework does not depend on unfinished source applications, reports, or integrations. Existing business processes may calculate those values outside Intelex during this phase. Convert eligible KPIs incrementally to governed query capture after the authoritative source field or dataset, supplier and reporting-period context, report, and scoring logic are available and validated. Likely candidates include PPAP or change-point performance, problem-reporting measures, PPM, and structured safety obligations; this candidate list does not itself approve a source design.

Create scorecards for the supplier entity configured for the applicable program rather than entering the same KPI independently at both parent and facility levels. Facility-level operational scorecards and parent-company rollups remain supported under ADR-076. ADR-113 records the proposed refinement to use facility-level monthly scorecards and parent-company annual scorecards for non-monthly measures.

Use one common scorecard methodology for participating production suppliers rather than a separate KPI catalogue for each supplier. Configure KPI initialization and explicit not-applicable treatment under ADR-111 rather than interpreting an empty value as not applicable.

Populate automated values through governed reports and integrations. Collect values manually when no authoritative automated source is available. ADR-086 governs assignment, review, and publication of those monthly records.

When a scorecard is created, capture each query-based KPI for the applicable supplier and reporting period. Open scorecards may refresh query results during the configured data-entry and review windows. After publication, do not recalculate historical scorecards automatically. An authorized SIA user may deliberately refresh one selected KPI for one supplier and period when a correction is warranted.

Permit only a Supplier Scorecard Application Administrator or system administrator to override a query result when business judgment establishes that the awarded outcome should differ from the current calculated value. Require an internal rationale and retain the queried value, overridden value, effective value, actor, and time. Ordinary contributors may refresh a query but do not receive override controls. Do not expose override controls or rationale to supplier users.

For PPM, combine chargeable supplier NCR disposition quantities with the supplier's parts-consumption value for the same period. Load the parts-consumption dataset from the existing SQL source on a monthly cadence using the integration method selected by SIA IT. Other KPIs may consume PPAP, warranty, scrap, delivery, and response data.

Use the supplier submission timestamp and applicable due date for response-timeliness measures. Preserve the approved period snapshot even when live source data later changes, unless an authorized user performs the targeted refresh or override described above.

Do not expose the administrative import tool as a general contributor mechanism or use it to write external values directly into scorecard KPI records. If bulk loading is later approved for data such as third-party sorting costs, load one normalized row per supplier, reporting period, KPI, and value into a dedicated staging dataset, then query that governed source into the scorecard. Until that operating model is approved, retain direct entry.

Retain structured history for current-period, rolling-period, year-to-date, company, facility, composite, and individual-KPI analysis. Portal summaries may expose selected high-level measures and link users to the detailed scorecard or reporting view. Scorecard performance informs sourcing, awards, and supplier-management activity but does not, by itself, automatically launch a corrective workflow.

Snapshot the applicable supplier commodity on the scorecard and calculate commodity and overall peer rank under ADR-114. Collect safety metrics and reference effective-dated industry benchmarks under ADR-112. Secure aggregate scorecard data and administrative setup under ADR-115, and deliver the detailed experience through responsive browser views under ADR-116.

## Consequences

### Positive

- Reduces monthly manual work.
- Creates an auditable supplier-period record.
- Uses the correct consumption denominator for PPM.
- Supports multi-application performance measurement.
- Supports facility accountability and parent-company analysis.
- Allows the KPI catalogue to evolve without losing historical interpretation.
- Supports manual data collection while integrations are introduced incrementally.
- Allows controlled correction without continuously rewriting historical scorecards.
- Limits any approved bulk-load failure to a replaceable source dataset rather than the scorecard record itself.

### Negative

- Source-data quality and timing require strong governance.
- Different integration teams and methods must be coordinated.
- Frozen snapshots may differ from later corrected source data.
- KPI version changes may complicate comparisons across reporting periods.
- Parent rollups require governed aggregation rules to avoid invalid averaging or double counting.
- The first release retains current manual calculation work until source automation is validated.
- Reports must distinguish queried, overridden, and effective KPI values.
- Explicit defaults and not-applicable states require additional KPI-instance fields and validation.

### Follow-up and Constraints

- Define the initial KPI catalogue, types, applicability, formulas, sources, owners, feedback contacts, and effective-version rules.
- Select the parts-consumption integration method and schedule.
- Assign the Supplier Scorecard Application Administrator group and define its operating procedure for targeted overrides.
- Define treatment of NCR subtypes and non-chargeable dispositions.
- Confirm which scorecard trends must appear directly on the scorecard form and which may remain in reporting dashboards.
- Confirm whether external reporting endpoints, including Power BI access, are required.
- Decide whether the benefit of a normalized staging load for external monthly datasets justifies its transformation and administration effort; no bulk-load implementation was approved in the day-three discussion.

## More Information

- Third transcript: approximately 2:10:32–2:16:13.
- Fourth transcript: approximately 0:36:35–0:40:40.
- Subsequent supplier workflow transcript: approximately 0:41:35–0:46:53 and 2:03:32–2:32:05.
- Phase 2A design workshop day 3: approximately 1:58:13–2:20:01 and 2:24:49–2:45:06. This discussion establishes direct-entry-first sequencing, controlled snapshot refresh and override behavior, and the constraint against direct administrative imports into scorecard records. The choice to implement a normalized staging load remains unresolved.
- Phase 2A design workshop day 3 afternoon: approximately 0:01:31–0:18:01, 0:24:03–0:35:14, 0:54:33–1:03:42, and 1:27:31–1:52:15. This discussion adds KPI defaulting, explicit applicability, safety benchmark, hierarchy, commodity, ranking, and administrator-only override decisions.
- ADR-076 governs the supplier hierarchy; ADR-086 governs the monthly contribution, review, and publication workflow; ADR-111 through ADR-116 govern the detailed scorecard refinements.
