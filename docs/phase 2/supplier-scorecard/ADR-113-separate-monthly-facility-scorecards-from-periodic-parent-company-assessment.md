---
status: proposed
date: '2026-10-01'
decision-date: not-recorded-in-transcript
deciders:
- Joel Frick
- Brian Hensell
consulted:
- Dave McLean
informed:
- Keith Freeman
primary-application: Supplier Scorecard
secondary-applications:
- Supplier Relationship Management
- Supplier Portal
---

# ADR-113: Separate Monthly Facility Scorecards from Periodic Parent-Company Assessment

## Context and Problem Statement

Operational KPIs can be meaningfully attributed to supplier facilities, while cost reduction and some other measures are assessed for a parent company over a semiannual or annual period. Back-populating one later assessment into multiple closed monthly scorecards would weaken the period snapshot and require large-scale historical edits.

## Decision Drivers

- Attribute operational results to the responsible facility.
- Avoid entering the same metric independently at facility and parent levels.
- Preserve stable monthly snapshots.
- Represent semiannual and annual measures at their actual cadence.
- Produce a complete fiscal-year company assessment.

## Considered Options

### Score everything monthly at the parent-company level

Matches current company-level collection but loses facility accountability.

### Enter the same KPI at both facility and parent levels

Supports both views but creates duplication and potentially conflicting results.

### Back-populate periodic results into historical monthly records

Reproduces the legacy presentation but requires reopening and editing many closed records.

### Use facility-level monthly scorecards and parent-level periodic scorecards

Matches the natural entity and cadence of each measure while supporting calculated rollups.

## Decision Outcome

Propose generating monthly operational scorecards at facility or depot level and a separate fiscal-year parent-company scorecard. The parent scorecard will derive its monthly components from governed rollups of the related facility scorecards and will add direct-entry or query-based semiannual and annual KPIs at their natural reporting cadence.

Do not create duplicate parent-level monthly entries for values already captured at facilities. Do not reopen prior monthly records solely to distribute one later period result across those months.

The supplier entity used by a scorecard remains configuration data so adoption may begin at parent level for selected suppliers and move to facility level later. Final adoption of the proposed monthly/annual split requires management and procurement confirmation.

## Consequences

### Positive

- Preserves facility accountability and parent-company annual analysis.
- Avoids duplicate entry and conflicting values.
- Keeps monthly records stable after publication.
- Represents cost-reduction and similar KPIs honestly at their actual cadence.

### Negative

- Annual rollup rules require detailed design and testing.
- The monthly presentation will differ from the legacy scorecard.
- Supplier change management may be required for facility-level submissions.

### Follow-up and Constraints

- Obtain the outstanding management and procurement decision.
- Define each KPI's entity level, cadence, and rollup function.
- Define annual generation timing after monthly close and review.
- Confirm how suppliers with company-level source data submit values for facility scorecards during transition.

## More Information

- Phase 2A design workshop day 3 afternoon: approximately 0:35:35–0:52:07 and 0:54:33–1:03:42.
- ADR-076 governs the parent-company and facility hierarchy; ADR-058 governs scorecard snapshots.

