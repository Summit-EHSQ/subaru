---
status: proposed
date: 2026-09-29
decision-date: not-recorded-in-transcript
deciders:
  - Joel Frick
  - Dave McLean
consulted:
  - Andrea Turner
  - Luke Filippo
  - Yolanda Reyes
  - Nathan Jannasch
informed:
  - Keith Freeman
  - Brianne Carroll
  - Emma Lister
  - Rick Redmond
primary-application: Product Management
secondary-applications:
  - BOMEX / ECS
  - PartsMaster
  - Supplier Relationship Management
  - Production Part Approval Process (PPAP)
  - Shipping, Receiving and Inspection (Pilot Part Data)
  - Non-Conformance Management
  - Warranty Corrective Action Report (WCAR)
---

# ADR-062: Create a Composite Part Master from BOMEX and PartsMaster Data

## Context and Problem Statement

Intelex needs a stable part reference for PPAP, pilot inspections, NCR, warranty, and supplier workflows. Required information is distributed across BOMEX and PartsMaster. BOMEX provides early engineering-change, drawing, revision, part, and initial supplier context. PartsMaster later provides logistics, model, production-status, destination, and depot information. Neither source alone is complete, and the records arrive at different points in the product lifecycle.

Current upstream data can also initially assign a default depot even when the manufacturing or shipping location is not yet established. Blindly copying or overwriting values would reproduce known defects and obscure the origin of each value.

## Decision Drivers

- Make parts available early enough to initiate PPAP and pilot work.
- Enrich the part with later logistics and production information.
- Provide one canonical part reference to downstream Intelex applications.
- Preserve engineering and logistics source history separately.
- Define authoritative field sources and controlled exception behavior.
- Assign supplier facilities or depots accurately without blocking early record creation.
- Include active production and applicable service-part information.

## Considered Options

### Use BOMEX as the only source

Provides early engineering context but omits later logistics and production attributes.

### Use PartsMaster as the only source

Provides logistics context but arrives too late for early PPAP and pilot activities.

### Expose both source records directly to every downstream workflow

Preserves source detail but forces every application to reconcile the same records.

### Create a canonical Intelex part composed from separate source-aligned records

Provides a stable downstream reference while retaining source history and provenance.

## Decision Outcome

Create one canonical Intelex part record keyed by the governed part identifier. BOMEX part data may create the canonical part when it first appears through an ECS or drawing release. PartsMaster and the applicable service-part feed subsequently enrich the same part.

Retain the BOMEX and PartsMaster records as separate source-aligned children or staging records. For every canonical field, define which source is authoritative. Engineering revision history remains represented through the applicable ECS and drawing records; a logistics change such as a depot correction does not create an artificial engineering revision.

Enrich the supplier-facility relationship from the best available authoritative source. Use a default depot only as an explicit fallback. A validated exception must have an owner, reason, and review path and must not be silently erased by a repeated incomplete upstream value.

Downstream applications reference the canonical part and, where historical context matters, the applicable drawing, ECS level, or source record.

## Consequences

### Positive

- Enables early PPAP and pilot activity before PartsMaster is populated.
- Gives downstream applications one consistent part reference.
- Preserves engineering and logistics history without conflating their lifecycles.
- Makes data provenance and update precedence explicit.

### Negative

- Requires asynchronous record matching and field-level source mapping.
- Authoritative depot, service-part, and exception sources still require confirmation.
- Source conflicts and delayed enrichment require reconciliation reporting.

### Follow-up and Constraints

- Obtain the BOMEX and PartsMaster data dictionaries and existing interface mappings.
- Define canonical keys, field ownership, update frequency, and conflict behavior.
- Identify authoritative sources for manufacturing location, shipping depot, destination, and service-part values.
- Define exception ownership and reconciliation reporting.
- Align part-to-supplier relationships with ADR-092 and supplier facilities with ADR-076.
- Align source staging and REST behavior with ADR-030.

## More Information

- Earlier PartsMaster design transcript: approximately 0:57:18–1:08:37.
- Product Management and Pilot Part Data design transcript: approximately 0:25:16–1:19:19, 1:58:03–2:06:36, and 3:50:55–4:04:40.
