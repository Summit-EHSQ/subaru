---
status: accepted
date: 2026-09-02
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

A part normally has one manufacturing supplier, but a sequencing or service provider may also handle the same part. A one-supplier-per-part constraint would lose this operational relationship, while treating both organizations as equivalent manufacturers would make supplier selection and reporting ambiguous.

## Decision Drivers

- Represent the manufacturer and sequencing or service provider accurately.
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

Allow a part to have more than one supplier relationship. Qualify each relationship by its purpose, including manufacturing and sequencing or another governed service role.

When a supplier workflow starts from a part, shortlist the active related suppliers and require the originator to select the responsible one. Do not automatically select a supplier when more than one qualifying relationship exists. ADR-049 governs the security boundary after a supplier NCR is released.

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

## More Information

- Supplier NCR and warranty workflow transcript: approximately 0:21:34–0:27:51.
- ADR-049 prevents post-release reassignment of the responsible supplier.
