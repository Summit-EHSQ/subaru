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
  - Jamie Dossey
  - Brianne Carroll
  - Joel Frick
  - Rick Redmond
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
  - Supplier Relationship Management
---

# ADR-023: Version and Reuse Approved PPAP Element Evidence

## Context and Problem Statement

Successive PPAPs for a drawing do not always require every element to change. A process change may require a revised control plan while leaving the balloon drawing and traceability plan unchanged. The system must show which approved version of each element is currently valid and which PPAP established it.

## Decision Drivers

- Preserve traceability across running changes, model changes, and process changes.
- Avoid requiring suppliers to resubmit unchanged evidence.
- Identify the latest approved state of each PPAP element.
- Support audits and retrieval of the complete approved baseline for a drawing.
- Allow an element task to hold multiple files, including subcomponent evidence.

## Considered Options

### Copy every prior attachment into each new PPAP

Creates a complete package but duplicates files and obscures lineage.

### Require every element to be resubmitted for every PPAP

Simplifies version selection but creates unnecessary work.

### Reference the latest approved element version and replace it only when the new PPAP requires change

Preserves lineage while minimizing duplicate submissions.

## Decision Outcome

Maintain versioned PPAP element evidence. When a PPAP is initialized, each applicable element references the latest approved version associated with the drawing. During PPAP setup, the SIA engineer determines which elements require new submission. Unchanged elements retain the prior approved reference; changed elements create a new element version through the current PPAP workflow.

Approval of the new element version makes it the current approved version for subsequent PPAPs while preserving the previous versions and their originating PPAPs.

Elements remain drawing-scoped. An element such as appearance approval may contain multiple documents for part variants or subcomponents in one element record rather than forcing every file into a part-number-specific child record.

## Consequences

### Positive

- Provides a traceable approved baseline across many PPAPs.
- Reduces duplicate supplier submissions.
- Supports retrieval of the currently applicable evidence.
- Preserves historical context for audits and investigations.

### Negative

- Requires explicit lineage and current-version logic.
- Incorrect element scoping could carry obsolete evidence forward.
- Multi-file drawing-level elements need strong naming and metadata conventions.

### Follow-up and Constraints

- Define the key used to identify an element lineage across PPAPs.
- Define how superseded, rejected, or withdrawn element versions are displayed.
- Define whether files are referenced or copied for retention purposes.
- Provide a consolidated view of the effective approved PPAP baseline.

## More Information

- Second transcript: approximately 0:25:12–0:39:21 and 1:10:19–1:17:58.
