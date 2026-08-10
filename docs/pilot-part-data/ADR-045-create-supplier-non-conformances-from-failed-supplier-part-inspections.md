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
  - Non-Conformance Management
  - Supplier Portal
  - Internal Safe Launch
---

# ADR-045: Create Supplier Non-Conformances from Failed Supplier-Part Inspections

## Context and Problem Statement

Problems found during pilot-part inspections are currently communicated by email, which loses history and weakens handover to mass-production quality. Safe-launch issues already result in supplier problem reports. The future inspection framework needs a consistent escalation path for supplied parts.

## Decision Drivers

- Preserve traceability from inspection result to supplier response.
- Use the same governed problem process across inspection programs.
- Ensure suppliers are formally notified and accountable.
- Carry development issues into production handover and scorecard reporting.

## Considered Options

### Send email and attach it to the inspection if needed

Matches current pilot practice but does not create a governed workflow or reliable history.

### Record only an inspection failure disposition

Preserves the result but does not initiate supplier containment or corrective action.

### Launch a linked supplier NCR from the failed inspection

Creates an auditable escalation and preserves source context.

## Decision Outcome

When a supplied-part inspection identifies a non-conforming condition that requires supplier action, the user will create a supplier NCR directly from the inspection. The NCR will inherit the supplier, part, drawing, inspection type, sample, specification revision, failed attributes, and supporting evidence where available.

The initial implementation is limited to supplied parts. Internal-manufacturing inspection and NCR scenarios may be added later without changing the source-link pattern.

## Consequences

### Positive

- Eliminates email-only escalation.
- Creates source-to-resolution traceability.
- Supports supplier communication, reporting, and handover.

### Negative

- Inspectors require clear criteria for when an NCR is mandatory.
- A single inspection may identify multiple conditions requiring grouping rules.
- NCR volume may increase because previously informal issues become structured records.

### Follow-up and Constraints

- Define failure-to-NCR criteria and user permissions.
- Define whether one inspection can create multiple NCRs.
- Define copied versus linked evidence and attribute details.
- Confirm subtype differences for pilot, PPAP sample, and safe-launch issues.

## More Information

- Third transcript: approximately 0:56:49–1:02:06.
