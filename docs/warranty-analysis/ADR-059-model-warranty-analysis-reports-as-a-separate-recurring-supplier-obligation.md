---
status: proposed
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
- Joel Frick
- Bill Roberts
consulted:
- Dave McLean
- Shao Ngoi
- Yolanda Reyes
informed:
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

Suppliers must periodically analyze warranty data, answer structured trend questions, and upload required charts. The current system uses problem reporting only to obtain portal visibility, even though the obligation is not a non-conformance. Warranty claim data is refreshed and filtered so each supplier can view only its own records. The monthly obligation applies only when warranty claims exist for that supplier and reporting period and has scorecard implications.

## Decision Drivers

- Model the recurring obligation separately from NCR.
- Preserve daily supplier access to relevant warranty data.
- Automate monthly analysis creation and deadline tracking.
- Support structured responses, evidence, and scorecarding.
- Avoid generating empty work for suppliers without warranty activity.
- Develop the claim feed and destination model in time to test the workflow end to end.

## Considered Options

### Continue using supplier NCR as a container

Reuses portal access but misclassifies the process.

### Provide warranty data only and track the obligation manually

Preserves visibility but loses workflow and timeliness controls.

### Create a separate recurring Warranty Analysis process over the integrated claim data

Matches the actual process and supports automation.

## Decision Outcome

Propose a dedicated Warranty Analysis application or object. Maintain a daily warranty-claim feed into a supplier-secured dataset that authorized suppliers can filter and export.

On the configured monthly date, create one Warranty Analysis record for each supplier with applicable claims in the preceding period. Do not create a record for a supplier without claims. Assign the record through the supplier warranty role and display the claim context that caused the obligation to be generated.

The supplier answers the required structured questions, provides narrative analysis, and uploads each required chart through a dedicated file field rather than a generic attachment bucket. Conditional questions may make an upload inapplicable. File validation confirms presence, not correctness; the warranty function may review the content operationally without a formal approval workflow.

The configured due date drives scorecard evaluation. A record not submitted by the due date may remain overdue until the configured month-end cutoff, when automation closes it as incomplete. Preserve the supplier submission time and completion state for scorecard use.

Design the warranty-claim API payload and the Intelex destination table concurrently with application configuration. Validate claim ingestion, supplier matching, reporting-period selection, eligibility, and monthly generation during the build rather than attaching the integration after the workflow is complete.

The process must be implemented or otherwise replaced before the current supplier platform is retired. Final implementation remains contingent on confirmation of statement-of-work scope, phase, and custom-object licensing.

## Consequences

### Positive

- Correctly represents the business process.
- Keeps NCR data semantically clean.
- Preserves daily claim visibility and monthly accountability.
- Supports recurring automation and scorecarding.
- Avoids non-value-added records for suppliers without claims.
- Provides stronger completeness validation through dedicated uploads.

### Negative

- Requires daily data integration and supplier-level security.
- May require additional licensed custom objects.
- Scope and phase confirmation remain outstanding.
- Dedicated fields cannot determine whether an uploaded chart is substantively correct.

### Follow-up and Constraints

- Confirm scope, phase, licensing, and budget.
- Define claim-feed ownership, fields, supplier matching, reconciliation, failure handling, and supplier security.
- Confirm eligibility, generation date, due date, month-end cutoff, and incomplete-state rules.
- Define which chart uploads are always required and which are conditional.
- Define migration before retiring the current platform.

## More Information

- Third transcript: approximately 2:49:31–2:56:02.
- Fourth transcript: approximately 0:40:53–0:43:36.
- Subsequent non-conformance design transcript: approximately 0:36:13–0:37:12 and 0:49:06–0:50:25. This discussion reconfirmed that Warranty Analysis is not an NCR and that replacement is required before IntelliQuest decommissioning.
- Supplier NCR and warranty workflow transcript: approximately 2:55:17–3:10:38.
- The final session confirmed the daily claim-feed requirement but did not fully close the application-scope question.
