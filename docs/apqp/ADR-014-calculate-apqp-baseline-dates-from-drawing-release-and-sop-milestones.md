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

# ADR-014: Calculate APQP Baseline Dates from Drawing Release and SOP Milestones

## Context and Problem Statement

Automotive development timing works backward from Start of Production (SOP), while some early tasks are anchored to drawing release. Major milestone changes can affect many APQPs and many dependent tasks. A static schedule copied into each APQP would require manual updates and reproduce a major limitation of the prior solution.

## Decision Drivers

- Reflect the master model schedule in every related APQP.
- Support both forward calculation from drawing release and backward calculation from SOP.
- Allow milestone changes to recalculate affected baseline dates.
- Prevent suppliers from modifying SIA-controlled milestones.
- Identify schedule compression and invalid date conditions.

## Considered Options

### Enter baseline dates manually for every APQP

Is flexible but creates large-scale rework and inconsistency.

### Shift every task by the same number of days when SOP changes

Is simple but incorrect because not every task is SOP-dependent.

### Anchor tasks to governed milestones and recalculate only affected dependency chains

Matches the described scheduling model.

## Decision Outcome

Define each APQP template task as anchored to drawing release, SOP, another applicable master milestone, or a predecessor task. Generate its SIA baseline dates from configured offsets and dependencies.

When an SIA-controlled master milestone changes, recalculate the affected baseline dates for open APQPs and re-evaluate supplier-plan variance. Tasks not dependent on the changed milestone will not be shifted solely because that milestone moved.

The detailed recalculation mechanism must account for schedule compression, tasks already completed, and transaction volume.

## Consequences

### Positive

- Reduces manual schedule maintenance across large model programs.
- Preserves the logic behind each required date.
- Enables timely visibility when a supplier plan becomes noncompliant after a master schedule change.

### Negative

- Recalculation across many APQPs and tasks may be computationally and operationally complex.
- Pulling milestones forward may create impossible or negative durations.
- Changing baseline dates after work begins may create user confusion unless clearly communicated.

### Follow-up and Constraints

- Define all supported master milestones and task-anchor types.
- Design batch recalculation, sequencing, error handling, and performance controls.
- Define treatment of completed tasks and supplier plans after a baseline change.
- Define schedule-compression exceptions and required manual review.

## More Information

- Transcript discussion: approximately 2:14:15–2:15:36 and 2:28:20–2:43:03.
- The business requirement is clear, but implementation feasibility and recalculation rules were not finalized.
