---
status: accepted
date: 2026-09-29
decision-date: not-recorded-in-transcript
deciders:
  - Keith Freeman
  - Luke Filippo
  - Joel Frick
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Eric McGregor
  - Joel Frick
  - Rick Redmond
primary-application: Shipping, Receiving and Inspection (Pilot Part Data)
secondary-applications:
  - Product Management
  - Production Part Approval Process (PPAP)
  - Supplier Relationship Management
---

# ADR-040: Capture Pilot Part Data as Structured Sample-Level Inspection Records

## Context and Problem Statement

Pilot parts are not yet PPAP approved and are inspected before release to pilot builds. Current results are recorded in spreadsheets, limiting validation, live visibility, and reuse of the data. Inspections may include binary confirmations, measured values, dates, comments, and supporting images.

## Decision Drivers

- Capture the substantive result of each inspection point.
- Support different answer types and numeric tolerances.
- Preserve one result set per physical sample.
- Display instructions and reference images beside data entry.
- Enable reporting without parsing spreadsheets.

## Considered Options

### Upload a completed spreadsheet and record only overall pass or fail

Minimizes configuration but loses structured evidence and point-level analytics.

### Store one result record for the entire shipment or inspection event

Is simpler but cannot distinguish individual sample results.

### Create an inspection request with sample records and attribute-result children

Supports structured execution, evidence, and traceability at the required level.

## Decision Outcome

Model Pilot Part Data as structured records linked through the applicable PPAP, build event, shipment part, supplier, part, and released specification revision. Build-event pilot work normally requires inspection of every received in-scope unit. When the assigned inspector begins work, the system defaults the requested inspection quantity from the shipped quantity and permits an authorized adjustment for damaged or excluded units. It then creates one inspection record for each physical unit to be inspected.

Each sample receives the specification attributes with the appropriate response control, including confirmation, numeric measurement, date, text, or pick-list values. Numeric entries may be validated against tolerances. Inspectors can record general-condition observations and attach or preview supporting images and evidence on the same working form.

Provide both a unit-oriented view and a consolidated grid so inspectors can complete all attributes for one unit or enter the same attribute across multiple units without opening every inspection separately.

## Consequences

### Positive

- Replaces spreadsheet-based result capture.
- Supports point-level validation and analytics.
- Preserves sample-specific evidence.
- Improves the inspector experience by showing instructions and results together without making instructions editable.
- Supports rapid data entry for both unit-by-unit and attribute-by-attribute inspection methods.

### Negative

- Produces a larger structured data volume than file-only inspection records.
- Requires careful mobile and form-performance design.
- The sample count must be known or adjusted through governed logic.

### Follow-up and Constraints

- Define inspection-request, sample, attribute-result, and evidence objects.
- Define result validation and overall disposition rules.
- Generate sample records when the inspector confirms the quantity to inspect rather than at program setup.
- Define image-preview and attachment behavior.
- Define performance limits and pagination for large generated grids.

## More Information

- Third transcript: approximately 0:10:53–0:18:54 and 0:24:55–0:27:48.
- Product Management and Pilot Part Data design transcript: approximately 4:27:52–4:44:54.
- PPAP design workshop continuation: approximately 2:46:54–2:52:50.
