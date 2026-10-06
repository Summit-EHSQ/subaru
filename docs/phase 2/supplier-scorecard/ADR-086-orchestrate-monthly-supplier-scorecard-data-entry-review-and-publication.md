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
- Direct supplier questions to the SIA owner of the affected KPI.
- Keep supplier presentation separate from internal data-entry and override controls.

## Considered Options

### Continue spreadsheet compilation and email distribution

Preserves the current process but retains manual assembly, weak status visibility, and limited workflow evidence.

### Create an independent task for every KPI and supplier

Provides detailed assignment but creates excessive task and notification volume.

### Use consolidated role-based entry tasks followed by review and automated publication

Coordinates distributed contributions while retaining a controlled monthly release.

### Publish each supplier scorecard as soon as its data is available

May release some results earlier but fragments the review and publication process and complicates monthly governance.

### Add a formal supplier dispute workflow after publication

Would provide structured requests and approvals but is disproportionate to the observed adjustment volume.

### Publish read-only results with KPI-specific contacts and SIA-controlled corrections

Provides a direct support path while retaining internal control of published records.

## Decision Outcome

On the configured monthly start date, automatically create draft scorecards for the preceding period under ADR-058. Populate automated KPIs from their governed sources. Consolidate remaining KPIs into data-entry tasks by responsible role, group, and applicable supplier population so each contributor can enter the values for which that contributor is responsible without opening unrelated scorecard sections.

Provide the coordinating group with a dashboard or inventory showing completion and overdue status for all contribution tasks. At the data-entry cutoff:

- apply the configured zero or missing-value rule to supplier-provided KPIs for which non-submission is itself part of the measure; and
- do not publish incomplete internally owned values as zero by default. Hold publication and pursue the responsible internal contributor until required data is supplied or an authorized exception is recorded.

After required compilation, open a time-boxed internal review window for the internal community that works with suppliers. Send one notification with a link to the Supplier Scorecard application and provide a consolidated review entry point across the supplier population. Do not create separate review tasks by KPI, supplier, or reviewer. Treat silence at the end of the review window as consent rather than requiring every reviewer to approve each supplier scorecard individually.

At the end of the review window, close the review and publish the completed scorecards to the appropriate supplier company and facility users. Notify recipients, but do not require the supplier to acknowledge that the scorecard was opened. Scorecard publication does not automatically create corrective action solely because a score or trend is unfavorable.

Publish supplier results through read-only reports or dashboards rather than exposing the internal data-entry forms. Include the overall result, category results, KPI detail, and rolling-period trends, subject to the supplier-company and facility access model. Each KPI definition identifies an SIA feedback contact, and the published detail exposes that contact, preferably through a mail link, so questions reach the responsible department instead of the scorecard distributor.

Do not add a formal supplier dispute or score-exception approval workflow for the current adjustment volume. Suppliers and internal contributors raise questions through the configured business channel. Contributors may refresh query data, but only a Supplier Scorecard Application Administrator or system administrator may record an override and its required rationale. Suppliers do not edit or reopen published KPI records. Targeted refresh and override controls are governed by ADR-058.

## Consequences

### Positive

- Replaces recurring spreadsheet and email coordination with governed workflow.
- Reduces task volume through consolidated role-based entry.
- Gives the coordinating group a clear completion and escalation inventory.
- Preserves the current silence-as-consent review model without creating hundreds of approvals.
- Produces a repeatable and traceable monthly publication event.
- Directs supplier questions to the responsible KPI owner.
- Keeps internal override and rationale controls out of the supplier experience.

### Negative

- One missing required internal contribution can delay publication of the package.
- KPI ownership, requiredness, cutoff treatment, and exception authority require governance.
- Poorly configured reminders can create notification fatigue.
- Consolidated entry and review screens require purpose-built user-interface design.
- Correction correspondence may remain outside Intelex because no formal dispute workflow is created.
- KPI feedback-contact assignments require ongoing maintenance.

### Follow-up and Constraints

- Define the monthly start, entry cutoff, review cutoff, and publication schedule.
- Define required and optional KPIs and the allowed missing-value treatment for each.
- Define reminder, escalation, authorized-exception, and delayed-publication behavior.
- Confirm whether publication occurs as one global batch or controlled sub-batches when an internal dependency remains unresolved.
- Define the initial completion dashboard and consolidated departmental review experience.
- Validate supplier dashboard security for users with access to more than one facility.
- Reconsider a formal dispute workflow if correction volume grows materially or off-system correspondence becomes unmanageable.

## More Information

- Subsequent supplier workflow transcript: approximately 1:47:35–1:51:35 and 2:03:32–2:34:11.
- Phase 2A design workshop day 3: approximately 1:38:22–1:56:24 and 2:19:14–2:21:56. This discussion confirms the time-boxed spot-check review, read-only supplier reporting, KPI-specific contacts, SIA-controlled corrections, and the decision not to build a low-volume dispute workflow.
- Phase 2A design workshop day 3 afternoon: approximately 1:03:45–1:08:10 and 1:46:54–1:52:15. This discussion confirms one broad internal-review notification, no reviewer-specific approval tasks, and administrator-only overrides instead of a dedicated exception workflow.
- ADR-058 governs KPI definitions, source data, scorecard hierarchy, and period snapshots.
- ADR-083 governs the broader supplier workspace in which selected scorecard summaries may appear.
