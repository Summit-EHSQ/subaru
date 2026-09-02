---
status: accepted
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Glenn Blahnik
- Joel Frick
consulted:
- Keith Freeman
informed:
- Emma Lister
- Rick Redmond
primary-application: Supplier Scorecard
secondary-applications:
- Supplier Relationship Management
- Supplier Portal
- Intelex Platform Workflow
- Reporting
---

# ADR-086: Orchestrate Monthly Supplier Scorecard Data Entry, Review, and Publication

## Context and Problem Statement

Monthly supplier scorecards depend on contributions from multiple internal departments, supplier-entered safety information, and automated source data. The current process consolidates spreadsheets and distributes scorecards through email. The coordinating group needs visibility into incomplete contributions, and missing supplier data cannot be treated the same as missing internally owned data.

## Decision Drivers

- Reduce manual scorecard assembly and distribution.
- Assign contributors only the KPIs for which they are responsible.
- Let contributors enter related values across multiple suppliers efficiently.
- Give the coordinating group completion and overdue visibility.
- Preserve a time-boxed cross-functional review before supplier publication.
- Publish one consistent monthly package after required internal data is complete.
- Avoid unnecessary supplier acknowledgement tasks.

## Considered Options

### Continue spreadsheet compilation and email distribution

Preserves the current process but retains manual assembly, weak status visibility, and limited workflow evidence.

### Create an independent task for every KPI and supplier

Provides detailed assignment but creates excessive task and notification volume.

### Use consolidated role-based entry tasks followed by review and automated publication

Coordinates distributed contributions while retaining a controlled monthly release.

### Publish each supplier scorecard as soon as its data is available

May release some results earlier but fragments the review and publication process and complicates monthly governance.

## Decision Outcome

On the configured monthly start date, automatically create draft scorecards for the preceding period under ADR-058. Populate automated KPIs from their governed sources. Consolidate remaining KPIs into data-entry tasks by responsible role, group, and applicable supplier population so each contributor can enter the values for which that contributor is responsible without opening unrelated scorecard sections.

Provide the coordinating group with a dashboard or inventory showing completion and overdue status for all contribution tasks. At the data-entry cutoff:

- apply the configured zero or missing-value rule to supplier-provided KPIs for which non-submission is itself part of the measure; and
- do not publish incomplete internally owned values as zero by default. Hold publication and pursue the responsible internal contributor until required data is supplied or an authorized exception is recorded.

After required compilation, open a time-boxed internal review window for the departments that contribute to the scorecard. Provide one consolidated review entry point across the supplier population. Treat silence at the end of the review window as consent rather than requiring every reviewer to approve each supplier scorecard individually.

At the end of the review window, close the review and publish the completed scorecards to the appropriate supplier company and facility users. Notify recipients, but do not require the supplier to acknowledge that the scorecard was opened. Scorecard publication does not automatically create corrective action solely because a score or trend is unfavorable.

## Consequences

### Positive

- Replaces recurring spreadsheet and email coordination with governed workflow.
- Reduces task volume through consolidated role-based entry.
- Gives the coordinating group a clear completion and escalation inventory.
- Preserves the current silence-as-consent review model without creating hundreds of approvals.
- Produces a repeatable and traceable monthly publication event.

### Negative

- One missing required internal contribution can delay publication of the package.
- KPI ownership, requiredness, cutoff treatment, and exception authority require governance.
- Poorly configured reminders can create notification fatigue.
- Consolidated entry and review screens require purpose-built user-interface design.

### Follow-up and Constraints

- Define the monthly start, entry cutoff, review cutoff, and publication schedule.
- Define required and optional KPIs and the allowed missing-value treatment for each.
- Define reminder, escalation, authorized-exception, and delayed-publication behavior.
- Confirm whether publication occurs as one global batch or controlled sub-batches when an internal dependency remains unresolved.
- Define the initial completion dashboard and consolidated departmental review experience.

## More Information

- Subsequent supplier workflow transcript: approximately 1:47:35–1:51:35 and 2:03:32–2:34:11.
- ADR-058 governs KPI definitions, source data, scorecard hierarchy, and period snapshots.
