---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Keith Freeman
  - Jamie Dossey
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Brianne Carroll
  - Joel Frick
  - Rick Redmond
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
  - Supplier Relationship Management
  - Supplier Portal
---

# ADR-021: Model PPAP as a Drawing-Scoped Parent with Selected Part Numbers and an Integrated Part Warrant

## Context and Problem Statement

A drawing can contain multiple part numbers, and one engineering release can affect all or only a subset of those parts. Running-change and new-model PPAPs may therefore use the same drawing while covering different part-number groups. The current model makes it difficult to distinguish exactly which parts a PPAP approves and has led to incorrect approval of new-model parts during a running-change review.

## Decision Drivers

- Represent PPAP scope precisely without creating one PPAP per part number.
- Support running-change, model-change, and process-change PPAPs against the same drawing.
- Make the approved part-number set explicit and reportable.
- Reuse authoritative drawing-to-part relationships from SIA systems.
- Eliminate a separate part-submission-warrant document where the data can be captured directly.

## Considered Options

### Create one PPAP for every part number

Provides precise scope but multiplies records and duplicates drawing-level work.

### Create one PPAP for the entire drawing with no part-level scope

Is simple but cannot distinguish running-change and new-model approvals.

### Create one drawing-scoped PPAP with an explicit selected part table

Preserves drawing-level work while defining the exact parts approved.

## Decision Outcome

Model each PPAP as a parent record associated with one supplier and one drawing. Maintain an integrated part table on the PPAP identifying the exact part numbers included in that submission.

When authoritative drawing-part relationships are available, populate the draft PPAP with every active part number currently associated with the drawing. Before release to the supplier, the PPAP initiator may deselect parts that are outside the submission's scope. The supplier confirms the included part numbers as part of the submission rather than uploading a separate part-submission-warrant form.

Capture part-level attributes required by the approval process, including the supplier's average actual mass and average metal mass where applicable. These values are captured in the integrated table even though the PPAP elements themselves remain drawing-scoped.

## Consequences

### Positive

- Precisely identifies what each PPAP approves.
- Avoids excessive PPAP duplication.
- Supports concurrent model and running changes on the same drawing.
- Makes part scope available for reporting and certification.

### Negative

- Depends on accurate drawing-part master data.
- Users must review auto-populated scope before issuing the PPAP.
- Part-level data and drawing-level elements require careful form design.

### Follow-up and Constraints

- Confirm the authoritative drawing-part integration source.
- Define treatment of inactive or superseded part numbers.
- Define validation for mass fields and units.
- Determine whether part-scope changes after issuance require a controlled revision.

## More Information

- Second transcript: approximately 0:39:34–0:59:32.
