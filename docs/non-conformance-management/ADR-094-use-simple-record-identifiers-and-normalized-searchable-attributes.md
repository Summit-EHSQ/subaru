---
status: accepted
date: 2026-09-02
decision-date: not-recorded-in-transcript
deciders:
  - Dave McLean
  - Joel Frick
  - Bill Roberts
consulted:
  - Keith Freeman
informed:
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Reporting
  - Warranty Claims
---

# ADR-094: Use Simple Record Identifiers and Normalized Searchable Attributes

## Context and Problem Statement

Legacy PIR and WCAR identifiers and titles concatenate type, year, subtype sequence, VIN, part, and issue text. These formats compensate for limited legacy search capabilities. Reproducing them in Intelex would duplicate normalized data and introduce sequencing logic without adding capability when those fields are independently searchable.

## Decision Drivers

- Search and filter by type, date, VIN, part, supplier, and record sequence.
- Keep identifier generation stable and maintainable.
- Preserve normalized reportable attributes.
- Avoid requiring users to construct search-oriented titles.
- Support multiple supplier-issue types in one framework.

## Considered Options

### Reproduce each legacy composite identifier

Preserves familiarity but duplicates data and requires subtype-specific sequencing.

### Store search values in a manually formatted title

Avoids sequence logic but depends on consistent user entry.

### Use a simple identifier and expose normalized searchable attributes

Separates identity from business classification and search.

## Decision Outcome

Use a simple system-generated sequential identifier for the shared supplier-issue record. Store record type, reporting date, VIN, part, supplier, and other business attributes in separate governed fields.

Expose the relevant fields in inventory views, filters, exports, and search. Provide calculated display values, such as the last eight VIN characters, when they are operationally useful, but do not make them part of the primary identifier.

## Consequences

### Positive

- Removes complex and duplicative identifier logic.
- Allows independent sorting and filtering of each business attribute.
- Improves data quality by removing manually formatted search titles.

### Negative

- Users must transition from familiar legacy numbers and titles.
- The decision depends on well-configured inventory and search views.
- External references may need to retain a legacy identifier during migration.

### Follow-up and Constraints

- Configure and validate PIR and WCAR inventory views with operational users.
- Define any migrated legacy-identifier field and its search behavior.
- Confirm global-search behavior for normalized fields.
- Define a concise human-readable display label that does not become a second identifier.

## More Information

- Supplier NCR and warranty workflow transcript: approximately 2:45:54–2:54:20.
