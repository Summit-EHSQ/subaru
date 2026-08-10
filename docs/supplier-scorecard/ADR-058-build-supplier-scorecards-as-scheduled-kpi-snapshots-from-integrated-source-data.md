---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
consulted:
- Dave McLean
- Shao Ngoi
- Yolanda Reyes
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

# ADR-058: Build Supplier Scorecards as Scheduled KPI Snapshots from Integrated Source Data

## Context and Problem Statement

Current supplier scorecards require Power BI exports and substantial monthly Excel work. Metrics depend on multiple source systems. In particular, parts-per-million performance requires supplier NCR disposition quantities and a monthly parts-consumption denominator maintained in an SIA SQL environment. Warranty, scrap, PPAP, and response-timeliness data also contribute to supplier performance.

## Decision Drivers

- Eliminate repetitive monthly data assembly.
- Create auditable period-specific scorecard records.
- Use authoritative operational sources for each KPI.
- Calculate PPM from consumed parts rather than shipments.
- Measure supplier timeliness without penalizing internal review delay.

## Considered Options

### Continue Power BI and Excel assembly

Preserves the current process but retains manual work and weak period records.

### Use only live dashboards

Shows current performance but cannot freeze the period result or workflow.

### Generate scorecard records and snapshot integrated KPI values

Creates governed supplier-period records populated from authoritative source data.

## Decision Outcome

Create one scorecard record for each participating supplier and reporting period. Populate KPI fields or child records through governed reports and integration feeds.

For PPM, combine chargeable supplier NCR disposition quantities with the supplier's parts-consumption value for the same period. Load the parts-consumption dataset from the existing SQL source on a monthly cadence using the integration method selected by SIA IT. Other KPIs may consume PPAP, warranty, scrap, delivery, and response data.

Use the supplier submission timestamp and applicable due date for response-timeliness measures. Preserve the approved period snapshot even when live source data later changes.

## Consequences

### Positive

- Reduces monthly manual work.
- Creates an auditable supplier-period record.
- Uses the correct consumption denominator for PPM.
- Supports multi-application performance measurement.

### Negative

- Source-data quality and timing require strong governance.
- Different integration teams and methods must be coordinated.
- Frozen snapshots may differ from later corrected source data.

### Follow-up and Constraints

- Define KPI formulas, sources, and owners.
- Select the parts-consumption integration method and schedule.
- Define freeze, recalculation, approval, and supplier-comment rules.
- Define treatment of NCR subtypes and non-chargeable dispositions.

## More Information

- Third transcript: approximately 2:10:32–2:16:13.
- Fourth transcript: approximately 0:36:35–0:40:40.
