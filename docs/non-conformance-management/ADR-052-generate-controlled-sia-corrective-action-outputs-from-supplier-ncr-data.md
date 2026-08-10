---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Keith Freeman
  - Joel Frick
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Document Generation
  - Supplier Portal
---

# ADR-052: Generate Controlled SIA Corrective-Action Outputs from Supplier NCR Data

## Context and Problem Statement

Serious supplier issues can require a PRC response, an SIA 7-4 form, and an internal CAR-style document that substantially overlap. Suppliers may be asked to complete three forms containing similar problem, cause, action, owner, date, and evidence information. Some documents must remain recognizable because they are referenced in the management system.

## Decision Drivers

- Eliminate duplicate supplier data entry.
- Preserve required management-system document formats.
- Keep Intelex as the governing workflow and data record.
- Support printable or distributable controlled outputs.

## Considered Options

### Continue requiring separate supplier-completed forms

Preserves existing documents but maintains double or triple entry.

### Retire all legacy forms and use only the Intelex screen

Eliminates duplication but may conflict with management-system references and operational needs.

### Generate required documents from NCR data

Preserves recognizable outputs while keeping one source of structured data.

## Decision Outcome

Use the supplier NCR as the source of truth for problem, containment, cause, corrective action, ownership, dates, and evidence metadata. Provide controlled document-generation templates that populate the SIA 7-4 and other materially overlapping outputs from the NCR.

Where a document contains unique fields not suitable for the NCR, the generated output may leave clearly identified completion areas or collect those fields before generation. The generated artifact is retained with the NCR and identifies the source record and generation version.

## Consequences

### Positive

- Reduces supplier burden and transcription error.
- Preserves management-system document needs.
- Creates consistent outputs from governed data.

### Negative

- Template changes require governance and regression testing.
- Some unique content may still require manual completion.
- Generated documents can become stale if recreated after later NCR changes without version control.

### Follow-up and Constraints

- Map the 7-4 and related forms to NCR fields.
- Define template ownership and approval.
- Define regeneration, versioning, and signature behavior.
- Confirm whether 70–90% pre-population is sufficient for each form.

## More Information

- Third transcript: approximately 2:06:15–2:10:32.
