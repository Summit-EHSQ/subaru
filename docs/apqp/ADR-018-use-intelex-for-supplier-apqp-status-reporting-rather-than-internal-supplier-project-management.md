---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
  - Brianne Carroll
  - Keith Freeman
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Advanced Product Quality Planning (APQP)
secondary-applications:
  - Supplier Portal
  - Supplier Relationship Management
---

# ADR-018: Use Intelex for Supplier APQP Status Reporting Rather Than Internal Supplier Project Management

## Context and Problem Statement

Suppliers already use different internal project-management tools and processes. Requiring every supplier to execute and route its internal APQP work through Intelex would require significant training, create inconsistent adoption, and impose SIA's workflow on organizations with different levels of maturity. SIA's essential need is timely, structured status and evidence.

## Decision Drivers

- Minimize supplier training and change-management burden.
- Collect consistent status data across suppliers with different internal tools.
- Avoid building a general-purpose project-management product inside APQP.
- Keep responsibility for supplier internal assignment and approvals with the supplier.
- Ensure SIA receives direct supplier updates rather than re-entering them internally.

## Considered Options

### Require suppliers to execute every APQP task and internal workflow in Intelex

Provides detailed control but imposes a complex external process and high training burden.

### Have SIA personnel re-enter supplier updates

Reduces supplier system use but duplicates effort and weakens data ownership.

### Have suppliers report status, dates, comments, and evidence in Intelex while managing internal execution elsewhere

Captures required data without dictating supplier operations.

## Decision Outcome

Treat APQP child tasks primarily as structured status records rather than workflow-enabled assignments for every person working inside the supplier.

An authorized supplier representative will update each task's status, supplier current-plan dates, variance explanation, progress, and supporting evidence directly in Intelex. The supplier may manage its internal assignments, approvals, and detailed project plan using its own tools. SIA will use Intelex for oversight, collaboration, reporting, and acknowledgement.

## Consequences

### Positive

- Reduces supplier adoption risk and training requirements.
- Places data entry with the party that owns the status.
- Produces consistent APQP information across the SIA organization.
- Avoids a costly attempt to duplicate mature project-management tools.

### Negative

- SIA will not have visibility into every internal supplier assignment or workflow step.
- Reliance on a supplier representative may create bottlenecks or delayed updates.
- Suppliers still need clear minimum update expectations.

### Follow-up and Constraints

- Define supplier roles permitted to update APQP data.
- Define minimum status, date, comment, progress, and evidence requirements.
- Determine whether selected suppliers may optionally use more detailed Intelex task features without changing the base model.
- Define escalation when supplier updates are overdue or incomplete.

## More Information

- Transcript discussion: approximately 2:51:51–2:59:51.
