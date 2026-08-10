---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Keith Freeman
consulted:
  - Dave McLean
  - Shao Ngoi
  - Brianne Carroll
  - Luke Filippo
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Advanced Product Quality Planning (APQP)
secondary-applications: []
---

# ADR-015: Support Multiple Finish-to-Start Dependencies Between APQP Tasks

## Context and Problem Statement

Many APQP activities cannot begin until one or more preceding activities are complete. Some work occurs independently or in parallel, but when a dependency is defined it is generally waterfall. Later tasks may require several predecessor activities, so a single predecessor field is insufficient.

## Decision Drivers

- Represent the real sequencing of APQP work.
- Support schedule recalculation through dependency chains.
- Allow a task to wait for multiple prerequisites.
- Avoid implementing dependency types that were not identified as necessary.

## Considered Options

### Use sequence numbers only

Supports display order but cannot calculate prerequisite-driven dates.

### Allow one predecessor per task

Supports simple chains but not tasks with multiple prerequisites.

### Allow multiple finish-to-start predecessors

Supports the required dependency model without unnecessary dependency types.

### Implement all project-management dependency types

Provides flexibility but adds complexity not supported by the current requirement.

## Decision Outcome

Allow each APQP task template to reference zero, one, or multiple predecessor tasks. When dependencies exist, use finish-to-start behavior: a dependent task cannot begin until all required predecessors are complete or their calculated baseline windows have concluded, according to the final scheduling rules.

Independent tasks may run in parallel by having no dependency relationship. Start-to-start and finish-to-finish dependencies are not required in the current design.

## Consequences

### Positive

- Supports realistic APQP sequencing and multiple prerequisites.
- Provides a clear calculation model for cascading baseline dates.
- Limits scope to the dependency behavior actually identified.

### Negative

- Multiple predecessors increase recalculation and exception-handling complexity.
- Template authors must avoid circular or invalid dependency chains.

### Follow-up and Constraints

- Add template validation for circular references and missing predecessors.
- Define how manual overrides and completed tasks interact with recalculation.
- Confirm whether completion status or calculated date controls dependency release in each context.

## More Information

- Transcript discussion: approximately 2:32:01–2:39:43.
