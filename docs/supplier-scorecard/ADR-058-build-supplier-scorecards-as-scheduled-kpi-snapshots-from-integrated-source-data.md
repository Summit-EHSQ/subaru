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
- Preserve KPI definitions and historical meaning as the catalogue changes.
- Distinguish facility or depot performance while retaining company-level rollups.

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

## Decision Outcome

Create a monthly scorecard snapshot from a governed, versioned KPI library. Each KPI definition identifies its data type, applicability, calculation or source, manual or automated collection method, responsible role or group, effective version, and aggregation behavior. Instantiate the definitions applicable to the reporting period as structured scorecard values.

Create scorecards at facility or depot level where that operational context exists and aggregate them to the parent supplier company using the applicable KPI rules. Use one common scorecard methodology for participating production suppliers rather than a separate KPI catalogue for each supplier. Permit individual measures to be not applicable where the business rule requires it.

Populate automated values through governed reports and integrations. Collect values manually when no authoritative automated source is available. ADR-086 governs assignment, review, and publication of those monthly records.

For PPM, combine chargeable supplier NCR disposition quantities with the supplier's parts-consumption value for the same period. Load the parts-consumption dataset from the existing SQL source on a monthly cadence using the integration method selected by SIA IT. Other KPIs may consume PPAP, warranty, scrap, delivery, and response data.

Use the supplier submission timestamp and applicable due date for response-timeliness measures. Preserve the approved period snapshot even when live source data later changes.

Retain structured history for current-period, rolling-period, year-to-date, company, facility, composite, and individual-KPI analysis. Portal summaries may expose selected high-level measures and link users to the detailed scorecard or reporting view. Scorecard performance informs sourcing, awards, and supplier-management activity but does not, by itself, automatically launch a corrective workflow.

## Consequences

### Positive

- Reduces monthly manual work.
- Creates an auditable supplier-period record.
- Uses the correct consumption denominator for PPM.
- Supports multi-application performance measurement.
- Supports facility accountability and parent-company analysis.
- Allows the KPI catalogue to evolve without losing historical interpretation.
- Supports manual data collection while integrations are introduced incrementally.

### Negative

- Source-data quality and timing require strong governance.
- Different integration teams and methods must be coordinated.
- Frozen snapshots may differ from later corrected source data.
- KPI version changes may complicate comparisons across reporting periods.
- Parent rollups require governed aggregation rules to avoid invalid averaging or double counting.

### Follow-up and Constraints

- Define the initial KPI catalogue, types, applicability, formulas, sources, owners, and effective-version rules.
- Select the parts-consumption integration method and schedule.
- Define freeze, recalculation, approval, and supplier-comment rules.
- Define treatment of NCR subtypes and non-chargeable dispositions.
- Confirm which scorecard trends must appear directly on the scorecard form and which may remain in reporting dashboards.
- Confirm whether external reporting endpoints, including Power BI access, are required.

## More Information

- Third transcript: approximately 2:10:32–2:16:13.
- Fourth transcript: approximately 0:36:35–0:40:40.
- Subsequent supplier workflow transcript: approximately 0:41:35–0:46:53 and 2:03:32–2:32:05.
- ADR-076 governs the supplier hierarchy; ADR-086 governs the monthly contribution, review, and publication workflow.
