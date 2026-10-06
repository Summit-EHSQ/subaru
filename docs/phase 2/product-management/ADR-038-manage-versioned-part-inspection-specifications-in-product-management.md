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
  - Eric McGregor
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Product Management
secondary-applications:
  - Shipping, Receiving and Inspection (Pilot Part Data)
  - Production Part Approval Process (PPAP)
  - BOMEX / ECS
---

# ADR-038: Manage Versioned Part Inspection Specifications in Product Management

## Context and Problem Statement

Pilot-part inspection instructions are currently maintained in Excel and linked from other systems. The same sheet may contain both instructions and results, allowing inspectors to modify controlled instructions and making revision history difficult to govern. Inspection content changes frequently as Engineering Change Summaries are processed.

## Decision Drivers

- Separate controlled instructions from execution results.
- Support daily revision of part-specific inspection content.
- Represent confirmation, numeric, date, text, and tolerance-based attributes structurally.
- Preserve the exact specification version used by each inspection.
- Keep controlled work instructions in the QMS while storing executable inspection specifications in Intelex.

## Considered Options

### Continue linking editable Excel files from SharePoint

Retains the current user experience but preserves weak control, duplicate data, and limited reporting.

### Store instructions as attachments on each inspection

Freezes evidence but duplicates documents and does not provide structured attributes or reusable revisions.

### Maintain approved, versioned inspection specifications in Product Management

Separates specification authoring from execution and supplies governed content to downstream inspections.

## Decision Outcome

Use Product Management to maintain versioned inspection specifications for the applicable part, drawing, and inspection-program context. Each pilot part program has a controlled checklist that may be seeded from a prior checklist for the same drawing or from development content used to establish Safe Launch. Copying creates a new governed checklist; it does not alter the source version.

Each specification contains the attributes to inspect, the response type, instructions, optional images, and numeric tolerances where applicable. Supported response types include confirmation or governed choices, numeric measurement, date, time, text, and identifiers such as serial numbers. Numeric attributes may define a target and upper and lower guardrails.

The checklist author specifies the unit in which a numeric response must be entered. That unit is displayed as read-only guidance and applies to the configured target and guardrails. The baseline design does not perform automatic unit conversion.

New-model engineering users may create or revise specifications. Inspectors receive read-only specification content. A correction requires a new released version; it does not rewrite historical inspections already bound to an earlier version. Controlled procedural work instructions may remain in the QMS and be referenced from the specification.

## Consequences

### Positive

- Creates governed, reusable inspection content.
- Prevents inspectors from modifying instructions while entering results.
- Enables structured validation and reporting.
- Preserves historical inspection context by revision.

### Negative

- Requires daily specification maintenance by new-model engineering.
- Migration from existing spreadsheets will require interpretation and data setup.
- Part, drawing, model, and revision keys must be consistently governed.
- Authors and inspectors must use the instructed unit consistently because results are not converted automatically.

### Follow-up and Constraints

- Define the specification key, including part number, drawing, model, and ECS context.
- Define the review and release workflow for specification revisions.
- Define migration rules for existing Excel instructions and images.
- Confirm the boundary between executable specification content and controlled QMS work instructions.
- Confirm the copy-forward interaction and publication control for program-specific checklists.

## More Information

- Third transcript: approximately 0:10:53–0:20:53 and 0:24:55–0:27:48.
- Product Management and Pilot Part Data design transcript: approximately 2:22:25–2:35:51 and 4:45:28–4:57:03.
