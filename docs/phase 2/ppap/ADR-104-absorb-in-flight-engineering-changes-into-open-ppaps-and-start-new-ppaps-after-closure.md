---
status: accepted
date: 2026-09-30
decision-date: not-recorded-in-transcript
deciders:
  - Joel Frick
  - Dave McLean
consulted: []
informed:
  - Emma Lister
  - Rick Redmond
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
  - BOMEX / ECS
  - Product Management
---

# ADR-104: Absorb In-Flight Engineering Changes into Open PPAPs and Start New PPAPs After Closure

## Context and Problem Statement

Engineering changes can arrive after a PPAP has started and after some of its element tasks have already been approved. Most later changes affect only a subset of the approved work. Closing the active PPAP and creating a replacement for every new ECS would disrupt supplier tracking, while modifying a PPAP after final approval would undermine the integrity of the approved package.

The architecture must distinguish changes received while the PPAP is active from changes received after it is closed.

## Decision Drivers

- Preserve one stable active PPAP context through development changes.
- Retain traceability to every material ECS and drawing revision.
- Rework only the elements affected by an in-flight change.
- Prevent modification of an approved PPAP package.
- Reuse approved evidence when a later change requires a new PPAP.

## Considered Options

### Close and replace the PPAP whenever another ECS arrives

Keeps one ECS per PPAP but fragments active work and changes the identifier used by suppliers and internal tracking.

### Reopen an approved PPAP when a later ECS arrives

Avoids a new record but changes an already approved package and weakens auditability.

### Attach in-flight ECS revisions to the open PPAP and create a new PPAP after closure

Preserves active-work continuity while maintaining an immutable final approval boundary.

## Decision Outcome

When a material ECS or drawing revision arrives while the applicable PPAP is open, relate it to that PPAP as supplemental engineering context. The responsible engineer determines which previously approved elements are affected and reopens only those element tasks. The prior submission, approval, rejection, and resubmission history remains retained.

The first ECS remains identifiable as the originating trigger, while later ECS records and drawing revisions are visible from the same PPAP. The PPAP is not restarted merely because its engineering context evolves before final approval.

After a PPAP is approved and closed, do not reopen it for a later engineering change. Create a new source-linked PPAP. Initialize the new PPAP from the latest approved evidence lineage governed by ADR-023, requiring new submission only for elements affected by the change.

This decision does not prohibit concurrent PPAPs. Running-change, model-change, and process-change PPAPs may overlap as governed by ADR-027.

## Consequences

### Positive

- Preserves a stable identifier and work context during development.
- Limits rework to affected evidence.
- Retains complete ECS-to-PPAP traceability.
- Protects the integrity of closed approvals.
- Makes a post-approval change explicit as a new approval event.

### Negative

- An open PPAP may relate to several ECS records and drawing revisions.
- Engineers must identify affected elements accurately.
- Reporting must distinguish the originating ECS from supplemental changes.
- Concurrent PPAPs still require clear human sequencing.

### Follow-up and Constraints

- Define how supplemental ECS records are matched to an open PPAP.
- Define the authorized reopen action and its audit log.
- Define notifications when an approved element is reopened.
- Show originating and supplemental engineering context clearly to suppliers and internal reviewers.

## More Information

- PPAP design workshop transcript: approximately 0:45:24–0:56:35.
- ADR-023 governs evidence lineage and carry-forward.
- ADR-027 governs concurrent PPAPs.
- ADR-030 governs ECS staging and the initial drawing-review gate.

