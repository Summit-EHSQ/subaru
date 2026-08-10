---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Keith Freeman
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Product Management
secondary-applications:
  - BOMEX / ECS
  - Production Part Approval Process (PPAP)
  - Shipping, Receiving and Inspection (Pilot Part Data)
---

# ADR-039: Make ECS Processing Gate Inspection Specification Review and Revision

## Context and Problem Statement

The same Engineering Change Summary that may require a draft PPAP can also change what must be inspected during pilot builds. Today, the drawing-review process asks whether the inspection instruction and draft PPAP were addressed, but the check does not ensure that the work was completed in the governing systems.

## Decision Drivers

- Use one authoritative change event for downstream quality work.
- Prevent PPAP or pilot activity from proceeding with obsolete inspection content.
- Replace after-the-fact confirmation with an actionable workflow step.
- Preserve traceability from ECS to specification revision and PPAP.

## Considered Options

### Keep two manual checklist questions on the ECS review

Is simple but does not prove that either downstream record was created or updated.

### Allow engineers to revise specifications independently of ECS processing

Preserves flexibility but weakens change traceability and creates omission risk.

### Launch or select the required specification revision from the ECS workflow

Creates an enforceable change-control checkpoint linked to the authoritative change record.

## Decision Outcome

When an ECS is processed, the workflow will require the responsible user to address both downstream decisions: whether a PPAP is needed and whether the inspection specification must be created or revised.

The ECS workflow will provide a direct action to select an already-completed specification revision or launch a new revision. Where inspection content is affected, the workflow cannot complete the checkpoint until an appropriate released specification is linked. The ECS, specification revision, and any draft PPAP remain explicitly related.

## Consequences

### Positive

- Reduces missed inspection-instruction updates.
- Creates end-to-end ECS traceability.
- Aligns PPAP and inspection preparation without merging their data models.

### Negative

- Adds a mandatory step to ECS processing.
- Incorrect impact decisions can still require later correction.
- Integration timing must ensure the ECS record exists before orchestration begins.

### Follow-up and Constraints

- Define who owns each ECS checkpoint by model, supplier, or part.
- Define when the checkpoint may be marked not applicable.
- Define behavior when another user already created the required revision.
- Coordinate with ADR-030 ECS staging and draft PPAP creation.

## More Information

- Third transcript: approximately 0:20:53–0:24:55.
