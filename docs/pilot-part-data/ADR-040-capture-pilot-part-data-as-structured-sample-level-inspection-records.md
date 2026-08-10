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

Model Pilot Part Data as an inspection request linked to the applicable part, event, supplier, and released specification revision. The request records the number of samples and creates a result record for each sample.

Each sample receives the specification attributes with the appropriate response control, including confirmation, numeric measurement, date, text, or pick-list values. Numeric entries may be validated against tolerances. Inspectors can record general-condition observations and attach or preview supporting images and evidence on the same working form.

## Consequences

### Positive

- Replaces spreadsheet-based result capture.
- Supports point-level validation and analytics.
- Preserves sample-specific evidence.
- Improves the inspector experience by showing instructions and results together without making instructions editable.

### Negative

- Produces a larger structured data volume than file-only inspection records.
- Requires careful mobile and form-performance design.
- The sample count must be known or adjusted through governed logic.

### Follow-up and Constraints

- Define inspection-request, sample, attribute-result, and evidence objects.
- Define result validation and overall disposition rules.
- Confirm whether sample records are generated up front or on demand.
- Define image-preview and attachment behavior.

## More Information

- Third transcript: approximately 0:10:53–0:18:54 and 0:24:55–0:27:48.
