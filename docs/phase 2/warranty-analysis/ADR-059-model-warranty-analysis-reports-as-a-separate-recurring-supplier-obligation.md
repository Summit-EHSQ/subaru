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
primary-application: Supplier Relationship Management
secondary-applications:
- Supplier Surveys
- Supplier Portal
- Warranty Claims
- Supplier Scorecard
---

# ADR-059: Use Supplier Surveys for Recurring Warranty Analysis Reporting

## Context and Problem Statement

Suppliers must periodically analyze warranty data, answer structured trend questions, and upload required charts. The current system uses problem reporting only to obtain portal visibility, even though the obligation is not a non-conformance. Warranty claim data is refreshed and filtered so each supplier can view only its own records. The monthly obligation has scorecard implications, including a defined result when the supplier has no claims for the period.

The reusable Supplier Surveys capability was designed after the initial Warranty Analysis direction. It provides the questionnaire, recurring assignment, and evidence pattern that would otherwise have required a dedicated Warranty Analysis object, and is expected to support the required automatic closure behavior subject to detailed validation.

## Decision Drivers

- Model the recurring obligation separately from NCR.
- Preserve daily supplier access to relevant warranty data.
- Automate monthly analysis creation and deadline tracking.
- Support structured responses, evidence, and scorecarding.
- Preserve a monthly scorecard source without requiring supplier effort when no warranty activity exists.
- Reuse the configurable Supplier Surveys capability instead of adding a dedicated application.
- Develop the claim feed and destination model in time to test the workflow end to end.

## Considered Options

### Continue using supplier NCR as a container

Reuses portal access but misclassifies the process.

### Provide warranty data only and track the obligation manually

Preserves visibility but loses workflow and timeliness controls.

### Create a dedicated recurring Warranty Analysis application over the integrated claim data

Matches the actual process and supports automation.

### Configure a recurring Supplier Survey over the integrated claim data

Matches the recurring questionnaire pattern, reuses shared functionality, and keeps the process outside NCR.

## Decision Outcome

Propose implementing the Warranty Analysis Report as a configured Supplier Survey rather than a dedicated application or supplier NCR type. Maintain a daily warranty-claim feed into a supplier-secured dataset that authorized suppliers can filter and export from their supplier profile.

On the configured monthly date, create one Warranty Analysis survey record for each in-scope supplier and assign actionable work through the supplier warranty role. Provide direct, preferably one-click, access from the survey to the applicable claim data. When the supplier has claims, require the configured analysis. When no claims exist, automatically close the record without supplier action and retain the result needed to award the no-claim scorecard value.

The supplier answers the required structured questions, provides narrative analysis, and uploads each required chart through a dedicated file field rather than a generic attachment bucket. Conditional questions may make an upload inapplicable. File validation confirms presence, not correctness; the warranty function may review the content operationally without a formal approval workflow.

The configured due date drives scorecard evaluation. A record requiring supplier action that is not submitted by the due date may remain overdue until the configured cutoff, when automation closes it as incomplete. Preserve the supplier submission time, claim-applicability result, and completion state for scorecard use. Close the prior monthly record before the next one is generated; the exact static interval remains configuration work.

Design the warranty-claim API payload and the Intelex destination table concurrently with application configuration. Validate claim ingestion, supplier matching, reporting-period selection, eligibility, and monthly generation during the build rather than attaching the integration after the workflow is complete.

The process must be implemented or otherwise replaced before the current supplier platform is retired. The proposed Supplier Survey approach places the work within the Supplier Relationship Management configuration scope. If detailed design identifies a requirement that the survey framework cannot support, the scope and application boundary must be reconsidered rather than falling back to an NCR type by default.

## Consequences

### Positive

- Correctly represents the business process.
- Keeps NCR data semantically clean.
- Preserves daily claim visibility and monthly accountability.
- Supports recurring automation and scorecarding.
- Avoids non-value-added supplier action when no claims exist while retaining a scorecard source record.
- Provides stronger completeness validation through dedicated uploads.
- Reuses a configurable questionnaire and task capability already planned for Supplier Relationship Management.

### Negative

- Requires daily data integration and supplier-level security.
- Depends on the Supplier Surveys implementation satisfying the warranty-specific access and automatic-closure rules.
- Dedicated fields cannot determine whether an uploaded chart is substantively correct.

### Follow-up and Constraints

- Validate the Warranty Analysis questionnaire against the Supplier Surveys implementation before confirming this ADR.
- Define claim-feed ownership, fields, supplier matching, reconciliation, failure handling, and supplier security.
- Confirm generation date, due date, automatic no-claim closure, month-end cutoff, and incomplete-state rules.
- Define which chart uploads are always required and which are conditional.
- Define migration before retiring the current platform.

## More Information

- Third transcript: approximately 2:49:31–2:56:02.
- Fourth transcript: approximately 0:40:53–0:43:36.
- Subsequent non-conformance design transcript: approximately 0:36:13–0:37:12 and 0:49:06–0:50:25. This discussion reconfirmed that Warranty Analysis is not an NCR and that replacement is required before IntelliQuest decommissioning.
- Supplier NCR and warranty workflow transcript: approximately 2:55:17–3:10:38.
- "Summit EHSQ | SIA | Revisit PIR Requirements + WCAR" transcript, 21 Oct 2026, 10:30 AM–12:00 PM ET: approximately 0:50:20–1:08:49. This discussion replaced the proposed dedicated application or object with the Supplier Surveys direction, subject to detailed fit confirmation.
