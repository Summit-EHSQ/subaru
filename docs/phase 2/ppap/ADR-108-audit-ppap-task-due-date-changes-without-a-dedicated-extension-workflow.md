---
status: accepted
date: '2026-10-01'
decision-date: '2026-10-01'
deciders:
  - Dave McLean
  - Joel Frick
  - Keith Freeman
consulted:
  - Brian Hensell
informed:
  - Emma Lister
primary-application: Production Part Approval Process (PPAP)
secondary-applications: Supplier Portal, Intelex Platform Workflow, Reporting
---

# ADR-108: Audit PPAP Task Due-Date Changes Without a Dedicated Extension Workflow

## Context and Problem Statement

PPAP task dates may originate from phase schedules, be overridden by an engineer, or change after a supplier discussion. A formal supplier extension-request workflow would improve structure, but it would also create repetitive requests and approvals when several tasks share a date. The more important operational need is to understand how each effective due date changed over time.

## Decision Drivers

* Preserve traceability for schedule-driven and manual date changes.
* Keep supplier and engineer effort proportionate to the volume of changes.
* Support rapid updates to several tasks in one PPAP.
* Retain engineer control over the effective task date.
* Avoid a workflow that forces all-or-nothing approval of grouped requests.

## Considered Options

* Add a supplier-initiated extension request and approval workflow for each task.
* Add a grouped extension request with per-task approval outcomes.
* Let engineers manage dates directly and audit every effective-date change.
* Allow unrestricted date changes without structured history.

## Decision Outcome

Chosen option: "Let engineers manage dates directly and audit every effective-date change," because direct collaboration is the established operating model and the audit trail supplies the missing traceability without adding high-volume approval work.

Supplier users will not receive a dedicated due-date extension workflow in the initial design. They may raise the need through the PPAP discussion mechanism or another agreed communication channel. An authorized PPAP engineer will change the applicable task dates.

The application will record the progression of each task's effective due date, including changes caused by initial calculation, a changed parent phase or stage date, and a manual override. The history should identify the prior and new dates, change time, change source, and actor where applicable. A recalculated date must not silently erase the ability to understand a prior override.

Engineers may update a single task inline. The design will also support a mass-update action for selected tasks when one date applies to several PPAP elements. Task responsibility changes will follow the same owner-controlled pattern rather than a reassignment-request workflow.

## Consequences

* Good, because date history can explain how an overdue or extended task reached its current state.
* Good, because suppliers and engineers avoid repetitive request and approval records.
* Good, because mass update supports running-change PPAPs with common task dates.
* Bad, because extension negotiation may still occur outside Intelex unless users use the PPAP discussion feature.
* Bad, because audit implementation must capture both calculation-driven and user-driven changes consistently.
* Bad, because the engineer remains responsible for recording the agreed date accurately.

## More Information

This decision was established at approximately 0:35:31–1:00:52. A formal extension-request workflow may be reconsidered if off-system requests become too frequent or insufficiently traceable.
