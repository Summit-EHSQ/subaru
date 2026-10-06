---
status: accepted
date: '2026-10-01'
decision-date: not-recorded-in-transcript
deciders:
- Joel Frick
consulted:
- Dave McLean
informed:
- Keith Freeman
- Brian Hensell
primary-application: Supplier Scorecard
secondary-applications:
- Supplier Surveys
- Supplier Relationship Management
- Supplier Portal
---

# ADR-112: Collect Safety Performance Through Cadence-Specific Surveys and Versioned Benchmarks

## Context and Problem Statement

Supplier safety scoring uses monthly supplier-reported incident rates and a semiannual qualitative Safety Kaizen submission. Incident-rate points depend on industry averages by NAICS code, while the Kaizen submission requires human review and remains effective for six months. Combining these patterns in one changing monthly survey would create special-purpose publication logic.

## Decision Drivers

- Capture supplier inputs as queryable Intelex data.
- Compare incident rates with maintainable, time-appropriate benchmarks.
- Keep the recurring monthly survey stable.
- Preserve human judgment for qualitative Kaizen evidence.

## Considered Options

### Continue external spreadsheet collection and scoring

Preserves the current process but retains manual consolidation and opaque formulas.

### Add and remove the Kaizen question from the monthly survey

Provides one supplier form in selected months but requires exceptional republishing and scheduling logic.

### Use separate monthly and semiannual surveys with a benchmark lookup

Matches each collection cadence and keeps the scoring sources governed.

## Decision Outcome

Issue a recurring monthly supplier safety survey to collect LTIR and TRIR values. Query those responses into Supplier Scorecard and compare them with an effective-dated reference library of recordable and lost-time incident-rate averages by NAICS code.

Maintain the benchmark library through Supplier Scorecard Application Administrators. Store the applicable year or effective-date range so scoring does not depend on hard-coded category values. Until a newer benchmark is loaded, continue using the latest applicable prior value.

Issue a separate semiannual Safety Kaizen survey. Route the response to the responsible internal reviewer for manual scoring, then use ADR-111 prior-period defaulting to carry the result forward until the next assessment. The survey may use structured questions as well as narrative evidence where that improves reporting.

## Consequences

### Positive

- Supplier-provided safety inputs become structured and queryable.
- Benchmark updates do not require formula rewrites.
- Monthly and semiannual collection remain independently maintainable.
- Kaizen scoring retains required human review.

### Negative

- Suppliers receive two safety tasks during Kaizen months.
- Administrators must maintain benchmark effective dates and values.
- Reviewers must recognize the common reassessment months.

### Follow-up and Constraints

- Confirm the monthly and semiannual issuance and close schedules.
- Define survey non-response treatment.
- Define the benchmark source, update procedure, and validation controls.
- Map supplier NAICS codes and handle missing or changed classifications.

## More Information

- Phase 2A design workshop day 3 afternoon: approximately 0:05:15–0:30:04.
- ADR-058 governs query capture; ADR-111 governs Kaizen carry-forward.

