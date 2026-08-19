---
status: accepted
date: 2026-08-18
decision-date: not-recorded-in-transcript
deciders:
  - Brianne Carroll
  - Jamie Dossey
  - Luke Filippo
  - Dave McLean
  - Joel Frick
consulted:
  - Shao Ngoi
  - Keith Freeman
  - Roy Lowery
informed:
  - Rick Redmond
  - Emma Lister
  - Jillian
primary-application: Supplier Relationship Management
secondary-applications:
  - Supplier Portal
  - Non-Conformance Management
  - Supplier Scorecard
  - Audit Management
  - Advanced Product Quality Planning (APQP)
  - Production Part Approval Process (PPAP)
---

# ADR-001: Establish Supplier Relationship Management as the Official Supplier Portal and Integration Hub

## Context and Problem Statement

Suppliers currently interact with numerous SIA systems that use different navigation patterns and interfaces. Supplier-facing Intelex applications also need a consistent supplier identity, facility structure, contact model, status, and security context. The existing supplier portal acts mainly as a redirection point and does not provide a complete entry experience or a common data hub.

Intelex will not replace every external supplier-facing system. The program therefore requires both a recognizable supplier home and a governed supplier master that downstream quality applications can reference.

## Decision Drivers

- Reduce supplier confusion caused by multiple portals and inconsistent interfaces.
- Provide one recognizable starting point for supplier interactions.
- Support phased implementation without requiring Intelex to replace every existing system.
- Make training and key documents easier for suppliers to locate.
- Reuse one supplier identity, profile, contact, and lifecycle model across downstream applications.
- Avoid application-specific supplier lists and duplicate supplier administration.

## Considered Options

### Use each application as a separate supplier entry point and data source

Preserves application independence but continues fragmented navigation, training, and supplier administration.

### Retain the existing supplier portal as the primary landing page

Avoids changing the entry point but does not address the portal's current limitations.

### Use Supplier Relationship Management and the Supplier Portal as the shared hub

Creates a unified entry experience and supplier-data model while respecting specialist application boundaries.

## Decision Outcome

Use the Intelex Supplier Portal, anchored by Supplier Relationship Management, as the official supplier landing page. Supplier Relationship Management will maintain the core supplier entities, facilities, contacts, roles, status, and portal context referenced by supplier-facing applications. Non-conformances, scorecards, audits, APQP, PPAP, and later supplier processes will remain specialist applications connected to that hub rather than duplicating its supplier master.

Supplier-facing processes delivered in Intelex will be available directly from the portal. Systems that remain outside Intelex will be represented through clearly organized links, supporting information, and training content.

The portal is therefore an integration and navigation hub, not a commitment to replace all supplier-facing systems.

## Consequences

### Positive

- Suppliers receive one primary entry point for SIA-related work.
- Future applications can be added to the portal without redesigning the supplier entry model.
- External systems can remain in place while still appearing within a coherent supplier experience.
- Downstream workflows share consistent supplier identity, contacts, permissions, and lifecycle context.

### Negative

- The supplier experience will still cross system boundaries, so interface consistency cannot be complete.
- Broken links, obsolete training, or unclear ownership of external links could undermine the portal.
- Changes to the shared supplier model require coordinated regression testing across connected applications.

### Follow-up and Constraints

- Define ownership for portal navigation, links, and training content.
- Confirm authentication and single-sign-on constraints for each linked external system.
- Establish information architecture and naming conventions for the landing page.
- Govern changes to shared supplier fields, relationships, roles, and statuses as cross-application changes.

## More Information

- Transcript discussion: approximately 1:03:27–1:05:46.
- Latest supplier-management design transcript: approximately 0:17:41–0:20:51.
- The decision describes the portal's architectural role; detailed page design was not completed in this session.
