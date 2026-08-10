---
status: proposed
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

# ADR-016: Use a Master Model or Program Schedule Record to Drive Shared Milestones and Reusable Dashboards

## Context and Problem Statement

Management needs to view APQP status by model or program without building a separate dashboard for every launch. Filtering a shared dashboard is sufficient for reporting. However, a later discussion established that model-level milestones such as SOP should be maintained once and applied to all related APQPs. This creates a need for a shared program context even though a reporting-only parent record was initially considered unnecessary.

## Decision Drivers

- Maintain one authoritative SOP and other master milestones per model or program.
- Apply milestone changes consistently across all related APQPs.
- Use one reusable dashboard rather than hundreds of program-specific dashboards.
- Avoid creating a parent record solely for visual grouping.

## Considered Options

### Store program name and SOP independently on every APQP

Allows filtering but duplicates master schedule data and makes bulk changes difficult.

### Create a parent record only to group APQPs for reporting

Adds structure but was not needed for dashboard filtering alone.

### Create a master model or program schedule record for shared milestones and filter dashboards by that relationship

Provides schedule authority and reusable reporting.

## Decision Outcome

Introduce a master model or program schedule record when multiple APQPs share governing milestones. Relate each APQP to that record and use it as the authoritative source for SOP and other shared development milestones.

Use reusable APQP dashboards with model or program filters. Do not create a separate dashboard configuration for each program, and do not introduce additional grouping layers unless they serve a scheduling or governance purpose beyond reporting.

## Consequences

### Positive

- Supports one-point milestone maintenance and consistent recalculation.
- Provides clean program-level filtering and roll-up reporting.
- Avoids dashboard proliferation.

### Negative

- Introduces an additional parent relationship and lifecycle to govern.
- Program corrections or merges could affect many APQPs.
- Not every APQP may belong to a large program, requiring optional relationship rules.

### Follow-up and Constraints

- Define the master program object's fields, lifecycle, and ownership.
- Confirm whether all APQPs require a program or whether standalone APQPs are allowed.
- Define authorization and impact review before changing shared milestones.
- Resolve the final relation between program, model, drawing, and APQP master data.

## More Information

- Transcript discussion: approximately 2:25:15–2:31:53.
- The reporting decision was explicit, while the shared program record is a restrained inference from the later requirement to maintain SOP once for all related APQPs.
