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
- Preserve rejected submissions for internal traceability without leaving them active for supplier reuse.
- Avoid requiring suppliers to find and manually relate prior evidence.
- Prevent later changes to reused evidence from rewriting an approved PPAP package.
- Support several concurrent PPAPs without treating unapproved submissions as the current baseline.

## Considered Options

### Copy every prior attachment into each new PPAP

Creates a complete package but duplicates files and obscures lineage.

### Require every element to be resubmitted for every PPAP

Simplifies version selection but creates unnecessary work.

### Reference the latest approved element version and replace it only when the new PPAP requires change

Preserves lineage while minimizing duplicate submissions.

### Reuse one shared evidence container across several PPAP tasks

Minimizes file storage but makes several approved packages depend on the same record and increases the risk of retroactive change.

## Decision Outcome

Maintain versioned PPAP element evidence. Identify an evidence lineage by the governed element type and applicable drawing, with the originating PPAP and selected part scope retained as context. During PPAP setup, the SIA engineer determines which elements require new submission and which may retain approved evidence. For retained elements, the system suggests the latest approved version and exposes enough metadata to confirm the originating PPAP, drawing revision, approval date, and part scope. Unapproved submissions from concurrent PPAPs are not eligible as the approved baseline.

Carry retained evidence into a new immutable task-level evidence snapshot or document container while preserving its source lineage. Do not make several approved PPAP tasks depend on one mutable shared container. This may duplicate files, but it prevents a later change to one record from rewriting several approved packages. A multi-file element is copied and governed as one container.

Approval of the new element version makes it the current approved version for subsequent PPAPs while preserving the previous versions, copied-from relationships, and originating PPAPs.

When a submission is rejected, retain the submitted files, comments, reviewer, and decision in an internal rejection history. Remove the rejected submission from the supplier's active requirement so the supplier must provide a replacement. The supplier is not responsible for searching for or linking the prior approved version; the system resolves the lineage automatically.

Elements remain drawing-scoped. An element such as appearance approval may contain multiple documents for part variants or subcomponents in one element record rather than forcing every file into a part-number-specific child record.

## Consequences

### Positive

- Provides a traceable approved baseline across many PPAPs.
- Reduces duplicate supplier submissions.
- Supports retrieval of the currently applicable evidence.
- Preserves historical context for audits and investigations.
- Retains evidence needed to explain rejection, delay, and resubmission disputes.

### Negative

- Requires explicit lineage and current-version logic.
- Incorrect element scoping could carry obsolete evidence forward.
- Multi-file drawing-level elements need strong naming and metadata conventions.
- Automatic suggestion and controlled reuse depend on accurate drawing and element-type relationships.
- Immutable snapshots can consume more file storage than shared references.

### Follow-up and Constraints

- Define the key used to identify an element lineage across PPAPs.
- Define how superseded, rejected, or withdrawn element versions are displayed.
- Define the physical copy mechanism and copied-from metadata for multi-file containers.
- Provide a consolidated view of the effective approved PPAP baseline.
- Distinguish point-in-time PPAP evidence from recurring operational validation records governed by ADR-102.

## More Information

- Second transcript: approximately 0:25:12–0:39:21 and 1:10:19–1:17:58.
- PPAP design workshop transcript: approximately 0:18:14–0:23:25 and 2:08:35–2:14:46.
- PPAP design workshop continuation: approximately 0:55:02–1:35:31.
