---
status: accepted
date: '2026-08-18'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
- Keith Freeman
consulted:
- Roy Lowery
informed:
- Emma Lister
- Jillian
- Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
- Non-Conformance Management
- Supplier Scorecard
- Audit Management
- Product Management
---

# ADR-076: Model Suppliers as Parent Companies with Child Facilities and Depots

## Context and Problem Statement

One supplier corporate entity may have multiple shipping depots and manufacturing facilities. Operational problems, audits, shipments, and contacts usually relate to a specific facility or depot, while corporate contacts, reporting, and some oversight apply across the supplier organization. A flat supplier list cannot represent both levels without duplication or loss of detail.

## Decision Drivers

- Attribute operational events to the responsible facility or shipping depot.
- Roll facility performance and history up to the corporate supplier.
- Support corporate and facility-specific contacts and access.
- Preserve upstream supplier and depot identifiers.
- Avoid representing related facilities as unrelated suppliers.

## Considered Options

### Represent each facility or depot as an unrelated supplier

Supports facility-level work but fragments corporate history, contacts, and reporting.

### Store all locations in one flat supplier record

Simplifies the master record but cannot reliably scope operational records, permissions, or facility performance.

### Use a supplier parent company with child facility and shipping-depot records

Supports facility accountability and corporate aggregation within one supplier identity.

## Decision Outcome

Represent each supplier corporate entity as a parent supplier-company record. Represent each operational shipping depot or facility as a child record under that parent. Classify child records by the relevant facility or depot type rather than assuming every shipping depot is also the manufacturing location.

Associate non-conformances, audits, parts, and other operational records with the applicable child facility or depot when that context is known. Make those records and facility-level measures available for aggregation and navigation at the parent-company level. Exact supplier-scorecard issuance and routing remain governed by ADR-058.

Allow contacts to relate to the parent company, one facility, or multiple facilities. Store the upstream parent supplier code and depot code as governed identifiers; do not generate a depot code in Intelex when Procurement is responsible for assigning it.

## Consequences

### Positive

- Preserves both corporate history and facility accountability.
- Supports parent-level roll-ups without duplicating facility records.
- Provides a stable boundary for contact relationships and portal access.
- Aligns supplier and depot identifiers with upstream systems.

### Negative

- Migration must distinguish corporate and facility records correctly.
- Reporting and integrations must select the correct hierarchy level.
- Facilities that manufacture and ship through different locations may require an additional direct relationship.

### Follow-up and Constraints

- Define the child-record classification catalogue.
- Map legacy supplier and depot identifiers to the hierarchy.
- Confirm how manufacturing facilities relate directly to one or more shipping depots beyond their common parent.
- Align part-to-depot enrichment with ADR-062.

## More Information

- Latest supplier-management design transcript: approximately 0:20:56–0:30:45, 1:22:29–1:31:01.
- The direct manufacturing-facility-to-shipping-depot relationship was deliberately deferred for downstream workflow analysis.

