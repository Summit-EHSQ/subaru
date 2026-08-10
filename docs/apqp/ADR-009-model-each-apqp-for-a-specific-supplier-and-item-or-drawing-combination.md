---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Keith Freeman
consulted:
  - Dave McLean
  - Shao Ngoi
  - Brianne Carroll
  - Luke Filippo
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Advanced Product Quality Planning (APQP)
secondary-applications:
  - Supplier Relationship Management
---

# ADR-009: Model Each APQP for a Specific Supplier and Item or Drawing Combination

## Context and Problem Statement

APQP begins after a supplier has been selected and a drawing or specification has been released. Although two suppliers may occasionally provide similar parts, the development plan, risk, schedule, and evidence differ by supplier and assigned drawing. A supplier-level or item-level APQP would therefore combine independent development obligations.

## Decision Drivers

- Preserve supplier-specific risk, schedule, and performance.
- Support the uncommon case of multiple suppliers for similar parts.
- Maintain traceability to the awarded supplier and released drawing.
- Provide an unambiguous unit of work for APQP status and closure.

## Considered Options

### Create one APQP per supplier

Cannot distinguish multiple parts or drawings being developed with the same supplier.

### Create one APQP per item or drawing

Cannot distinguish supplier-specific plans when sourcing differs.

### Create one APQP per supplier-item or supplier-drawing combination

Maintains the required development and risk context.

## Decision Outcome

Create a separate APQP record for each awarded supplier and item or drawing combination. The APQP will reference the supplier, item or drawing, applicable model or program, and the development milestones that govern that combination.

The APQP starts after supplier award and drawing release; supplier selection remains outside the APQP workflow.

## Consequences

### Positive

- Creates clear traceability and independent scheduling.
- Allows the same supplier to have many APQPs and a drawing family to be sourced through distinct APQPs.
- Supports supplier-specific risk-based oversight.

### Negative

- Large programs will create many APQP records.
- Consistent supplier, item, drawing, and program master data becomes essential.

### Follow-up and Constraints

- Confirm whether the primary technical key is item, drawing, or a combined item-drawing record.
- Define duplicate-prevention rules for supplier-item or supplier-drawing combinations.
- Define how revised drawings relate to an existing APQP versus starting a new APQP.

## More Information

- Transcript discussion: approximately 1:55:13–1:58:45 and 2:09:44–2:12:21.
