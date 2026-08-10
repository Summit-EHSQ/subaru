---
status: proposed
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
consulted:
- Dave McLean
- Shao Ngoi
- Yolanda Reyes
informed:
- Joel Frick
- Rick Redmond
primary-application: Warranty Analysis
secondary-applications:
- Supplier Relationship Management
- Supplier Portal
- Warranty Claims
- Supplier Scorecard
---

# ADR-059: Model Warranty Analysis Reports as a Separate Recurring Supplier Obligation

## Context and Problem Statement

Suppliers must periodically analyze warranty data, answer structured trend questions, and upload a chart. The current system uses problem reporting only to obtain portal visibility. Warranty claim data is already refreshed daily and filtered so each supplier can view and export only its own records. The monthly analysis obligation is generated when warranty data exists and has scorecard implications.

## Decision Drivers

- Model the recurring obligation separately from NCR.
- Preserve daily supplier access to relevant warranty data.
- Automate monthly analysis creation and deadline tracking.
- Support structured responses, evidence, and scorecarding.

## Considered Options

### Continue using supplier NCR as a container

Reuses portal access but misclassifies the process.

### Provide warranty data only and track the obligation manually

Preserves visibility but loses workflow and timeliness controls.

### Create a separate recurring Warranty Analysis process over the integrated claim data

Matches the actual process and supports automation.

## Decision Outcome

Propose a dedicated Warranty Analysis application or object. Maintain a daily warranty-claim feed into a supplier-secured dataset that authorized suppliers can filter and export.

On the configured monthly date, create a Warranty Analysis record for each supplier with applicable warranty data. The supplier answers the required structured questions, provides narrative analysis, and attaches the requested chart by the deadline. The warranty function reviews the submission and sends completion or timeliness results to the supplier scorecard.

The process must be implemented or otherwise replaced before the current supplier platform is retired. Final implementation remains contingent on confirmation of statement-of-work scope, phase, and custom-object licensing.

## Consequences

### Positive

- Correctly represents the business process.
- Keeps NCR data semantically clean.
- Preserves daily claim visibility and monthly accountability.
- Supports recurring automation and scorecarding.

### Negative

- Requires daily data integration and supplier-level security.
- May require additional licensed custom objects.
- Scope and phase confirmation remain outstanding.

### Follow-up and Constraints

- Confirm scope, phase, licensing, and budget.
- Define claim-feed ownership, fields, and supplier security.
- Define eligibility, generation date, due date, and reviewer workflow.
- Define migration before retiring the current platform.

## More Information

- Third transcript: approximately 2:49:31–2:56:02.
- Fourth transcript: approximately 0:40:53–0:43:36.
- The final session confirmed the daily claim-feed requirement but did not fully close the application-scope question.
