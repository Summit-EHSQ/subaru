---
status: accepted
date: '2026-10-01'
decision-date: not-recorded-in-transcript
deciders:
- Joel Frick
- Brian Hensell
consulted:
- Dave McLean
- Keith Freeman
informed: []
primary-application: Supplier Scorecard
secondary-applications:
- Supplier Relationship Management
- Supplier Portal
- Reporting
---

# ADR-116: Use Responsive Browser Scorecard Views and Supplier-Profile Drilldown

## Context and Problem Statement

Scorecard entry and review are connected, data-dense activities normally performed while consulting spreadsheets, emails, reports, or source records. The application does not have a strong offline field-execution use case, but users may still open results from tablets or phones. Users also need a stable place to find current and historical scorecards.

## Decision Drivers

- Focus user-interface effort on the principal work environment.
- Keep detailed scorecards connected to their supplier context.
- Support different browser form factors.
- Avoid a low-value native-mobile configuration.

## Considered Options

### Configure dedicated native-mobile application views

Supports the mobile application but adds effort for workflows that require connectivity and large reference datasets.

### Support desktop browsers only

Matches the main entry environment but unnecessarily prevents usable tablet and phone access.

### Use responsive browser forms linked from the supplier profile

Supports connected access across devices while preserving supplier-centric navigation.

## Decision Outcome

Do not configure Supplier Scorecard for native-mobile or offline execution. Deliver responsive browser forms that reorganize appropriately for laptops, tablets, and phones.

Use the supplier company or facility profile as the principal navigation anchor for scorecard history. Open each period scorecard as a read-only detailed view containing grouped KPI values, maximum and awarded points, totals, and the on-demand ranking governed by ADR-114. Retain global inventories, dashboards, and search as supplemental navigation.

Use native Intelex operational reports by default. If a confirmed visualization or presentation requirement exceeds native reporting, expose governed source reports for an authenticated Power BI dataset rather than duplicating operational data-entry logic outside Intelex.

## Consequences

### Positive

- Build effort is concentrated on the primary connected workflow.
- Historical results remain easy to find from supplier context.
- Browser access remains usable on smaller devices.
- Advanced reporting retains a governed integration path.

### Negative

- Offline scorecard work is unavailable.
- Responsive layouts require deliberate design and testing.
- Power BI, if adopted, adds authentication, refresh, ownership, and support responsibilities.

### Follow-up and Constraints

- Test entry, review, and read-only views at supported browser widths.
- Define supplier-profile history filters and retention behavior.
- Confirm whether any Power BI deliverable is required; no specific external report was approved in this session.
- Ensure exported reports distinguish snapshot values from live source data.

## More Information

- Phase 2A design workshop day 3 afternoon: approximately 1:18:08–1:27:05 and 1:32:27–1:40:33.
- ADR-083 governs the wider supplier workspace and drill-down model.
