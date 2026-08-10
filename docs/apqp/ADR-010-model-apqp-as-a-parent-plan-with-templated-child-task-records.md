---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Jamie Dossey
- Keith Freeman
- Brianne Carroll
- Luke Filippo
consulted:
- Dave McLean
- Shao Ngoi
informed:
- Joel Frick
- Rick Redmond
primary-application: Advanced Product Quality Planning (APQP)
secondary-applications:
- Supplier Portal
- TACT-TRI
- Production Part Approval Process (PPAP)
- Shipping, Receiving and Inspection (Pilot Part Data)
---

# ADR-010: Model APQP as a Parent Plan with Templated Child Task Records

## Context and Problem Statement

The existing APQP workbook contains a plan header and approximately 49 development activities. Each activity has its own requirements, status, schedule, progress, and supporting evidence. Some activities can initially be represented as ordinary tasks, while later phases will implement specialist applications such as TACT-TRI that may become the substantive evidence that an APQP element is complete.

## Decision Drivers

- Represent the APQP task inventory without hard-coding each activity as a field.
- Support task-level status, dates, comments, and evidence.
- Allow templates to evolve and vary when justified.
- Permit future specialist applications to fulfill an APQP requirement without redesigning APQP.
- Keep the APQP header distinct from its execution details.

## Considered Options

### Store all APQP activities as fields on one record

Is simple to view but inflexible and cannot accommodate linked specialist processes cleanly.

### Create independent tasks with no extensibility contract

Meets the initial phase but forces later specialist applications to be bolted on inconsistently.

### Use a parent plan with templated child tasks and an extensible fulfillment relationship

Supports the initial task model and later linked application records.

## Decision Outcome

Represent APQP as a parent plan record with child task records generated from a governed template. Each task stores its definition, dependencies, baseline and supplier dates, status, progress, comments, evidence, and special-handling indicators.

For the Phase Two implementation, an APQP activity may be completed as an ordinary task with attachments. The task model must also preserve an extensibility point through which a task can later be fulfilled by one or more linked specialist records, such as TACT-TRI attempts or structured inspections. When a specialist application is introduced, its approved or completed state may satisfy the APQP task without removing the APQP-level requirement and reporting context.

## Consequences

### Positive

- Supports structured reporting and calculations at task and plan levels.
- Allows later applications to become governed evidence for APQP completion.
- Avoids delaying Phase Two while Phase Four custom applications are still unavailable.

### Negative

- Generic task completion and linked-record completion require clear precedence rules.
- Template and relationship versioning add configuration complexity.
- Users may need a consolidated interface across tasks and specialist records.

### Follow-up and Constraints

- Define task fulfillment types and related-record grids.
- Define how failed or repeated specialist records affect APQP task status.
- Define template versioning and changes to in-progress APQPs.
- Design the consolidated task interface.

## More Information

- First transcript: approximately 1:53:26–1:55:13, 2:16:18–2:20:51, and 2:51:51–2:54:05.
- Fourth transcript: approximately 2:08:38–2:19:57.
