---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
consulted:
- Dave McLean
- Andrea Turner
- Yolanda Reyes
informed:
- Brianne Carroll
- Joel Frick
- Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
- Supplier Portal
- Scrap Data
- Supplier Scorecard
---

# ADR-063: Provide Suppliers Current-Period Scrap Visibility While Keeping Financial Debit Processing External

## Context and Problem Statement

Suppliers currently receive final scrap charges through procurement, but they also need visibility during the month so that a debit memo is not the first indication of a material charge. The financial debit process is outside the Intelex implementation scope.

## Decision Drivers

- Give suppliers earlier visibility to accumulating scrap.
- Reduce disputes caused by surprise month-end charges.
- Avoid duplicating the procurement debit-memo process.
- Apply supplier-level security to operational data.

## Considered Options

### Show scrap only on the final debit memo

Preserves the current process but provides no early visibility.

### Move debit calculation and settlement into Intelex

Would centralize the process but exceeds scope and duplicates financial controls.

### Publish operational scrap records in Intelex while retaining external settlement

Improves transparency without replacing the financial process.

## Decision Outcome

Integrate scrap data into a supplier-secured Intelex dataset or supplier record view throughout the reporting period. Each supplier can view only its own accumulated scrap information.

Procurement remains responsible for the final report, debit memo, and financial settlement outside Intelex. Intelex provides operational visibility and may supply scorecard data, but it is not the system of record for the charge.

## Consequences

### Positive

- Improves supplier transparency.
- Reduces surprise and reconciliation effort.
- Keeps financial processing in the established system.

### Negative

- Operational values may differ from the final settled amount.
- The feed requires supplier-level security and clear refresh timing.
- Users need messaging that Intelex values are informational until finalized.

### Follow-up and Constraints

- Define source, fields, refresh cadence, and correction handling.
- Define supplier-facing disclaimers and period close behavior.
- Define whether scorecards use preliminary or finalized scrap values.

## More Information

- Fourth transcript: approximately 0:43:36–0:44:32.
