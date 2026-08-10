---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
- Keith Freeman
- Brianne Carroll
- Andrea Turner
consulted:
- Dave McLean
- Shao Ngoi
informed:
- Jamie Dossey
- Joel Frick
- Rick Redmond
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
- BOMEX
- Design Change Request (DCR)
- Process Change Requests (PCR)
- Supplier Relationship Management
- Product Management
- Shipping, Receiving and Inspection (Pilot Part Data)
---

# ADR-030: Stage BOMEX Drawing and ECS Data and Create Source-Linked Draft PPAPs

## Context and Problem Statement

PPAP can originate from an Engineering Change Summary (ECS) or an approved Process Change Request. BOMEX contains ECS, drawing, drawing-revision, related-ECS, and part relationships. ECS numbering is not a reliable chronological or revision key because one release may reference multiple models and related ECS records, and drawing revisions may not advance in the same sequence as ECS numbers.

## Decision Drivers

- Preserve authoritative drawing and revision context.
- Separate integration ingestion from PPAP workflow decisions.
- Support one ECS affecting multiple drawings and part groups.
- Retain links to source files and future DCR lineage.
- Avoid assuming ECS number order represents drawing revision order.

## Considered Options

### Create PPAP records directly from a minimal ECS payload

Reduces staging but loses drawing-level context and tightly couples integration to PPAP.

### Import only ECS identifiers and ask users to find the drawing externally

Minimizes data movement but preserves fragmented investigation and setup.

### Stage BOMEX drawing, revision, ECS, part, and file context before PPAP creation

Provides durable source context and supports controlled automation.

## Decision Outcome

SIA's system-development group will provide a custom REST integration from BOMEX into a dedicated Intelex staging model. The integration will preserve, as available, drawing number, drawing revision, related ECS identifiers, affected parts, model context, source identifiers, and the drawing file or source link.

Use drawing number and drawing revision as the principal engineering context for PPAP and inspection-specification decisions. ECS identifiers remain traceability references and triggers, but are not treated as a reliable revision sequence.

The staged record evaluates whether PPAP is required and may create a source-linked draft PPAP populated with candidate supplier, drawing, and part scope. It also gates review or revision of the applicable inspection specification. A responsible SIA user confirms the final PPAP requirement and scope before release.

## Consequences

### Positive

- Provides a stable engineering-change context inside Intelex.
- Supports controlled draft automation and source traceability.
- Improves later access to drawings and related history.
- Uses an integration pattern already supported by the BOMEX-owning team.

### Negative

- Requires a richer custom API and staging model.
- Drawing, ECS, and part updates require synchronization and duplicate handling.
- Large drawing files affect storage planning.

### Follow-up and Constraints

- Define the BOMEX payload and authoritative keys.
- Define file-transfer or source-link handling for drawings.
- Define revision and duplicate update rules.
- Define PPAP-requirement rules and the responsible confirmation role.

## More Information

- Second transcript: approximately 0:08:20–0:12:02 and 2:43:52–2:52:33.
- Third transcript: approximately 0:19:39–0:24:55.
- Fourth transcript: approximately 0:25:57–0:36:19.
