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
primary-application: Product Management
secondary-applications:
  - Non-Conformance Management
  - Production Part Approval Process (PPAP)
  - Shipping, Receiving and Inspection (Pilot Part Data)
---

# ADR-097: Represent Parent-Child Part Hierarchies

## Context and Problem Statement

Assemblies may contain purchased, self-sourced, or supplier-added components. A component may belong to multiple parent assemblies, and a defect initially reported against an assembly may later be attributed to a specific child component and its supplier. A flat part list cannot provide that traceability.

## Decision Drivers

- Trace an assembly to its constituent parts.
- Navigate from a child part to every applicable parent.
- Help users identify the correct part and supplier for a quality event.
- Preserve changing relationships over time.
- Reuse the hierarchy across PPAP, pilot inspection, and non-conformance workflows.

## Considered Options

### Maintain only a flat part list

Is simple but leaves component investigation outside Intelex.

### Store child part numbers as fields on the parent

Displays some context but cannot represent reusable many-to-many relationships.

### Create effective-dated parent-child part relationship records

Supports navigation, history, reuse, and relationship-level properties.

## Decision Outcome

Create parent-child part relationship records. Each relationship identifies the parent and child parts and may retain quantity, effective start and end dates, parent drawing, ECS context, and other available source properties.

Permit a parent to contain many children and a child to belong to many parents. Provide navigation in both directions. Treat supplier-added and other subcomponents consistently for hierarchy purposes unless a later workflow demonstrates the need for a distinct subtype.

## Consequences

### Positive

- Improves assembly-to-component investigation.
- Supports correction of an NCR from the apparent assembly to the responsible component.
- Reuses one relationship model across quality applications.
- Preserves effective relationship history.

### Negative

- Requires reliable upstream relationship and lifecycle data.
- Large assemblies require filtered or contextual presentation.
- Relationship synchronization and deactivation rules add integration complexity.

### Follow-up and Constraints

- Confirm the authoritative source tables and relationship keys.
- Define effective-date and deletion behavior.
- Define contextual hierarchy views for PPAP and NCR forms.
- Align responsible-supplier selection with ADR-092.

## More Information

- Product Management and Pilot Part Data design transcript: approximately 0:57:17–1:07:15 and 2:05:57–2:10:08.

