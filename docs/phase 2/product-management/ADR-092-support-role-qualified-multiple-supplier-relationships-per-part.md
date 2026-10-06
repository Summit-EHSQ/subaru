---
status: accepted
date: 2026-09-29
decision-date: not-recorded-in-transcript
deciders:
  - Dave McLean
  - Joel Frick
consulted: []
informed:
  - Keith Freeman
  - Rick Redmond
primary-application: Product Management
secondary-applications:
  - Supplier Relationship Management
  - Non-Conformance Management
---

# ADR-092: Support Role-Qualified Multiple-Supplier Relationships per Part

## Context and Problem Statement

A part normally has a manufacturing supplier, but assembly suppliers, sequencers, and other service providers may also handle it. Multiple suppliers can perform the same role as the part moves through the supply chain. A one-supplier-per-part constraint would lose this operational structure, while treating all organizations as equivalent manufacturers would make selection and reporting ambiguous.

## Decision Drivers

- Represent manufacturing, assembly, sequencing, and other governed supplier roles accurately.
- Restrict supplier selection to organizations related to the selected part.
- Support supplier-NCR security and routing.
- Avoid implying that multiple related suppliers perform the same function.

## Considered Options

### Permit only one supplier relationship per part

Matches the common case but cannot represent the sequencing scenario.

### Maintain an unrestricted list of suppliers on each transaction

Supports exceptions but weakens master-data validation and routing.

### Maintain multiple role-qualified part-to-supplier relationships

Represents the exception while distinguishing why each supplier is related.

## Decision Outcome

Allow a part to have any required number of supplier relationships. Qualify each relationship by its purpose, initially including manufacturing, assembly, sequencing, and other governed service roles. Relate the supplier company and, when known, the applicable facility or depot. Permit multiple active relationships of the same type when the business structure requires them.

When a supplier workflow starts from a part, shortlist the active related suppliers. Supplier non-conformance intake may default to the manufacturing relationship while allowing the originator to select another applicable relationship when the issue is attributable to assembly, sequencing, or another role. ADR-049 governs the security boundary after a supplier NCR is released.

## Consequences

### Positive

- Represents the observed sequencing use case without corrupting manufacturer data.
- Improves supplier selection and transaction security.
- Supports reporting by supplier relationship type.

### Negative

- Part-to-supplier integration and migration require relationship-type mapping.
- Users may need to investigate responsibility before choosing a supplier.
- Additional relationship types require governance.

### Follow-up and Constraints

- Define the initial relationship-type catalogue.
- Identify the authoritative source for sequencing relationships.
- Define active dates and precedence when relationships change.
- Align depot and facility relationships with ADR-062 and ADR-076.
- Confirm how upstream destination and supplier codes map to each relationship type.

## More Information

- Supplier NCR and warranty workflow transcript: approximately 0:21:34–0:27:51.
- ADR-049 prevents post-release reassignment of the responsible supplier.
- Product Management and Pilot Part Data design transcript: approximately 0:49:05–0:57:17.
