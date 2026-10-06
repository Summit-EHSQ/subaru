---
status: accepted
date: 2026-09-29
decision-date: not-recorded-in-transcript
deciders:
  - Joel Frick
  - Dave McLean
consulted: []
informed:
  - Emma Lister
  - Rick Redmond
primary-application: Shipping, Receiving and Inspection (Pilot Part Data)
secondary-applications:
  - Production Part Approval Process (PPAP)
  - Product Management
---

# ADR-098: Initiate Pilot Part Programs from PPAP Build-Event Context

## Context and Problem Statement

A drawing release can stage the source context and initial PPAP determination, but it cannot define the event-specific Pilot Part Data program. Pilot inspection is a new-model activity aligned with discrete development build events rather than a recurring frequency. The Pilot Part Data activity supports the PPAP but proceeds concurrently and independently; it is not a prerequisite stage inside the PPAP workflow.

## Decision Drivers

- Avoid unnecessary automatically created pilot records.
- Keep Pilot Part Data within new-model scope.
- Support multiple event-specific inspections under one PPAP.
- Allow pilot execution and PPAP element completion to run concurrently.
- Preserve the checklist version used for each inspection while allowing cumulative refinement between build events.
- Limit part selection to the drawing and PPAP scope.
- Keep the responsible engineer accountable for applicability and setup.

## Considered Options

### Automatically create pilot programs for every drawing or ECS

Provides full automation but creates irrelevant records and cannot interpret engineering judgment.

### Allow pilot programs for both new-model and running-change PPAPs

Provides flexibility but conflicts with the clarified operational boundary for Pilot Part Data.

### Let the responsible engineer initiate programs from the source-linked PPAP

Uses automation for source staging while retaining the required applicability decision.

## Decision Outcome

Allow the drawing or ECS integration to stage the source context and create the initial drawing review governed by ADR-030. Pilot Part Data applies to new-model PPAPs. The responsible engineer creates the applicable pilot program from the PPAP and selects one or more build events from the related model-change summary.

Each program is linked to the PPAP and has child event contexts for the selected build events. When selecting parts for the program, show only the parts included in the drawing and PPAP scope. The program establishes the checklist, inspection team, and event context used by later supplier shipments and inspections.

Pilot execution may overlap the PPAP element workflows. A supplier no longer needs to provide pilot inspection data after the applicable PPAP is approved. Build-event inspections are normally completed before the corresponding physical build begins.

Maintain a working checklist for the pilot program and publish immutable versions. Instructions are cumulative: engineering changes and lessons from completed builds may add or refine inspection points for later events. An inspection uses the active published checklist version when the inspection is created; later publication does not rewrite earlier inspections.

New-model versus mass-production remains a visibility classification governed by ADR-084, not the primary routing mechanism. Responsibility is taken from the PPAP or explicitly assigned on the pilot program, with fallback behavior required for first-time or unassigned records.

## Consequences

### Positive

- Balances integration automation with engineering judgment.
- Keeps the pilot architecture aligned with the clarified new-model process boundary.
- Prevents selection of unrelated parts.
- Supports multiple build events without recurring schedule records.
- Preserves a traceable cumulative checklist history.

### Negative

- Pilot initiation depends on timely engineer action.
- First-time assignment and absence fallback rules require configuration.
- Build events must be available before shipment setup.
- Running-change inspections require a different process or an explicitly approved future scope change.

### Follow-up and Constraints

- Define PPAP-to-program actions and required setup fields.
- Define engineer defaulting and fallback assignment.
- Define the build-event source and maintenance responsibility.
- Coordinate specification versioning with ADR-038.
- Define automatic or manual closure behavior when the PPAP is approved.

## More Information

- Supersedes ADR-042 for Pilot Part Data routing and ownership.
- Product Management and Pilot Part Data design transcript: approximately 2:24:26–2:40:23 and 4:05:04–4:10:07.
- PPAP design workshop transcript: approximately 1:34:02–1:44:03.
- PPAP design workshop continuation: approximately 2:19:34–3:01:37.
