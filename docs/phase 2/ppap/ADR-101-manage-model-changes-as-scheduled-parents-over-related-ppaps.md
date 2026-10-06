---
status: accepted
date: 2026-09-30
decision-date: not-recorded-in-transcript
deciders:
  - Joel Frick
  - Dave McLean
consulted:
  - Keith Freeman
informed:
  - Emma Lister
  - Amanda Raver
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
  - Product Management
  - Supplier Scorecard
---

# ADR-101: Manage Model Changes as Scheduled Parents over Related PPAPs

## Context and Problem Statement

A model change may involve hundreds of PPAPs whose ECS and drawing releases arrive at different times. The PPAPs may use different templates and classifications, but they share a model schedule. Milestone changes currently require repetitive updates, and management cannot readily measure progress across the model by development phase and manufacturing introduction stage.

Running-change and process-change PPAPs do not normally share this scheduling structure; their dates depend on the specific supplier implementation plan.

## Decision Drivers

- Maintain shared model milestones once.
- Cascade schedule changes across related PPAPs and tasks.
- Support different PPAP templates within one model change.
- Report progress by model, project phase, and manufacturing stage.
- Preserve the model lead's ownership of model-level planning.
- Provide the authoritative build-event choices used by Pilot Part Data.
- Allow exceptional late-release PPAPs to use realistic dates.
- Retain planned dates for supplier and program performance analysis.

## Considered Options

### Manage every PPAP and task date independently

Provides local flexibility but makes shared schedule changes and model-level reporting laborious.

### Store only a model code on each PPAP

Supports filtering but does not provide an authoritative schedule or controlled cascade behavior.

### Use a model-change parent with a shared phase-and-stage schedule

Provides schedule authority, aggregate reporting, and controlled derivation of child dates.

## Decision Outcome

Create a model-change summary record as the parent of PPAPs belonging to the same model change. The model lead creates and maintains the summary and its schedule. The initial drawing reviewer selects the applicable model-change summary when launching a related PPAP.

The model-change summary defines a configurable matrix of project phases and manufacturing introduction stages or part categories. Each matrix intersection has a governing date. PPAP templates relate their elements to the applicable phase, and the PPAP identifies its manufacturing stage. A task due date may then be calculated from the governing matrix date plus or minus a configured offset.

The same model-change summary also maintains the model's build events as records with a governed name, start date, and end date. The event set is normally established with the master schedule; authorized users may change dates and exceptionally add an event without rebuilding the model summary. Build events are distinct from the PPAP phase-and-stage matrix because the two schedules may occur at similar times without being intrinsically linked.

Pilot Part Data programs select their applicable events from this model-level list. This provides model-wide navigation from a build event to the PPAP-scoped pilot programs, shipments, inspections, and results that support that event.

Changes to a shared matrix date recalculate dependent task dates across related PPAPs. Authorized users may also use a controlled bulk action to move an element to another phase for a specific model change. That action recalculates affected dates and removes incompatible task-level custom dates. ADR-108 governs the audit history for calculated, overridden, and bulk-updated effective task dates.

Provide a PPAP-level schedule override for exceptional cases such as a drawing released after an earlier phase was due. Turning on the override disconnects operational task dates from automatic recalculation and requires manual dates. Reconnecting the PPAP restores calculated dates and replaces the manual values. The interface must warn users before either action.

Do not prevent creation when calculated dates are already overdue. Warn the user and surface the condition instead. Retain the model-planned date, approved operational due date, and actual completion date separately so reporting can distinguish planned lateness, approved exceptions, and missed supplier commitments.

Running-change and process-change PPAPs remain independently scheduled unless they are explicitly connected to a model-change context.

## Consequences

### Positive

- Model schedule changes can update large volumes of PPAP work consistently.
- Model leads gain one aggregate view of phase and stage progress.
- Baseline, exception, and actual dates support meaningful performance analysis.
- Late drawing releases no longer prevent PPAP creation.

### Negative

- Introduces a parent object, schedule matrix, and date-recalculation logic.
- Requires separate governance for PPAP milestones and physical build events.
- Model leads must establish the summary before consistent child scheduling can occur.
- PPAP-level overrides are less granular than task-level locks.
- Bulk resequencing needs strong permissions, warnings, and audit history.

### Follow-up and Constraints

- Finalize the names and governed values for project phases and manufacturing stages.
- Define which template elements use calculated dates and their default offsets.
- Define authorization requirements for bulk resequencing and schedule overrides; implement effective-date history under ADR-108.
- Align model or program identity with the shared context described in ADR-016 without assuming APQP and PPAP must use the same physical record.
- Define supplier-scorecard rules before using missed PPAP dates as a scored KPI.
- Confirm the authoritative source and maintenance process for build-event names and dates.

## More Information

- PPAP design workshop transcript: approximately 0:31:18–1:18:52 and 1:50:38–1:58:11.
- PPAP design workshop continuation: approximately 2:23:18–2:27:23 and 2:52:50–3:01:37.
- ADR-029 governs live operational reporting; this ADR supplies the model schedule and date dimensions used by those reports.
- ADR-108 governs task-date changes, audit history, and the decision not to add a dedicated supplier extension-request workflow.
