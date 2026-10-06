---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Keith Freeman
  - Jamie Dossey
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Brianne Carroll
  - Joel Frick
  - Rick Redmond
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
  - Supplier Relationship Management
  - Intelex Platform Workflow
---

# ADR-029: Use Live Workflow Instances for PPAP Operational Reporting

## Context and Problem Statement

Managers need a current view of open and overdue PPAP work by engineer, supplier, program, source type, and workflow stage. The current Power BI view refreshes periodically and does not always reflect changes made immediately before a status review.

Intelex creates a workflow instance for each active record stage, using a common workflow model across applications. That shared model provides a consistent basis for operational reporting.

## Decision Drivers

- Provide near-live visibility of PPAP workload and delays.
- Distinguish individual responsibility from shared-role responsibility.
- Reuse the platform workflow model rather than build redundant task tables.
- Support program and adoption monitoring.

## Considered Options

### Continue relying only on periodically refreshed external dashboards

Provides analytical flexibility but introduces latency.

### Build PPAP-specific task fields and reports only

Supports local reporting but duplicates platform workflow data.

### Use workflow instances for operational dashboards and PPAP data for process context

Combines live task status with application-specific filtering.

## Decision Outcome

Use the Intelex workflow-instance data as the primary source for live PPAP operational dashboards. Join workflow instances to PPAP metadata to filter and group tasks by program, model, supplier, source type, responsible engineer or role, workflow stage, due date, and aging.

Provide views for open, completed, overdue, and materially overdue work. Where tasks are assigned to a shared role, reports must distinguish team responsibility from the individual who ultimately completed or accepted the task.

External BI may continue to support broader analytics, but it is not the sole operational source for current task status.

## Consequences

### Positive

- Provides current management visibility.
- Reuses a platform-wide task model.
- Enables consistent workload and adoption metrics.
- Supports drill-through from summary to PPAP detail.

### Negative

- Workflow reports must account for shared-role ownership.
- High workflow volume may require careful indexing and filter design.
- Operational and analytical dashboards may show different refresh timing.

### Follow-up and Constraints

- Define standard PPAP operational dashboard filters and aging thresholds.
- Define how reassigned and shared-role tasks are attributed.
- Establish performance requirements for live views.

## More Information

- Second transcript: approximately 2:53:05–2:59:36.
