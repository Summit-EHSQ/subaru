---
status: accepted
date: '2026-10-01'
decision-date: not-recorded-in-transcript
deciders:
- Joel Frick
consulted:
- Dave McLean
- Keith Freeman
informed:
- Brian Hensell
primary-application: Supplier Scorecard
secondary-applications:
- Supplier Relationship Management
- Reporting
---

# ADR-114: Snapshot Commodity and Calculate Period Rankings on Demand

## Context and Problem Statement

Suppliers are compared both overall and within a commodity. Commodity assignments may change, and a score correction for one supplier can change the rank of many suppliers. Reading the supplier's current commodity for an old scorecard would also rewrite the historical peer group.

## Decision Drivers

- Preserve the peer group applicable to each reporting period.
- Show overall and commodity-relative performance.
- Avoid rewriting every scorecard after one score changes.
- Support corrections without scheduled rank-maintenance jobs.

## Considered Options

### Use the supplier's current commodity for every scorecard

Is simple but retroactively changes historical comparisons.

### Persist ranks and recalculate the full population after every correction

Supports reporting and trending but creates broad synchronization work.

### Snapshot commodity and calculate rank when viewed

Preserves period context and avoids persistent rank synchronization.

## Decision Outcome

Copy the applicable commodity to each scorecard when the record is created. A later supplier commodity change applies prospectively and does not change the historical snapshot.

Initially select commodity at the parent-company level and inherit it to facilities. The field exists on the shared supplier-entity structure so facilities may be made independently editable if the pending business decision requires it.

Calculate overall and same-commodity rank for the scorecard period when the detailed scorecard is opened. Do not require the rank to be persisted or shown on every dashboard. If native reporting can calculate the same result reliably without stored values, that implementation may be used instead.

## Consequences

### Positive

- Historical peer groups remain stable.
- Corrected scores produce current rankings without rewriting all records.
- Parent-level defaults do not prevent later facility-specific classification.

### Negative

- On-demand calculation may add a short page-load delay.
- Unstored rank is not directly available for longitudinal reporting or every export.
- Facility-level commodity ownership remains to be confirmed.

### Follow-up and Constraints

- Confirm whether a facility may override its parent's commodity.
- Validate ties, excluded suppliers, and population-count behavior.
- Test native report ranking before implementing a custom page-load query.
- Decide whether a later requirement for ranking trends justifies persisted snapshots.

## More Information

- Phase 2A design workshop day 3 afternoon: approximately 1:27:31–1:44:36.
- Commodity ranking was identified as more important than overall ranking.

