---
status: proposed
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders: []
consulted:
- Keith Freeman
- Luke Filippo
- Dave McLean
- Rick Redmond
informed:
- Brianne Carroll
- Joel Frick
primary-application: Management of Change
secondary-applications:
- Action Authorization Sheet (AAS)
- Production Part Approval Process (PPAP)
- Product Management
- Supplier Relationship Management
---

# ADR-069: Digitize AAS as a Flexible Authorization Workflow Linked to Parts, Suppliers, PPAP, and Schedule Exceptions

## Context and Problem Statement

The Action Authorization Sheet is a broad paper-based mechanism used to approve temporary or permanent deviations from drawings, PPAP rules, schedules, and other business controls. The major operational pain is locating the required signatories and circulating paper. AAS records may be part- and supplier-related, but not every AAS is.

## Decision Drivers

- Replace manual paper routing and the search for available signers.
- Preserve a flexible authorization scope.
- Link deviations to the governed records they affect.
- Support distribution of approved authorization to suppliers when appropriate.

## Considered Options

### Retain paper AAS

Preserves the current process but provides weak routing and traceability.

### Create a narrow PPAP-deviation form

Solves one use case but cannot support the broader authorization function.

### Implement a flexible electronic AAS subtype in MOC

Supports multiple deviation categories with governed routing and links.

## Decision Outcome

Propose an electronic AAS workflow as a Management of Change subtype. The record captures the authorization purpose, applicable rule or baseline, effective period, temporary or permanent nature, required internal approvals, and supporting evidence.

Where applicable, relate the AAS to supplier, part, drawing, ECS, PPAP, or schedule records. An approved AAS may be distributed to the affected supplier through a controlled supplier-facing artifact, but all approvals remain internal to SIA. The exact workflow and approval matrix require the Production Control process owners.

## Consequences

### Positive

- Eliminates paper routing.
- Improves approval visibility and audit history.
- Connects deviations to affected quality and engineering records.

### Negative

- The breadth of AAS use cases can produce a complex form and approval matrix.
- Process owners were not present to confirm the design.
- Supplier distribution requires security and document controls.

### Follow-up and Constraints

- Hold a detailed design session with Production Control and frequent originators.
- Define categories, approval rules, numbering, duration, renewal, and closure.
- Define relationships to PPAP, drawings, schedules, and suppliers.

## More Information

- Fourth transcript: approximately 1:56:54–2:04:51.
