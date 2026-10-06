---
status: accepted
date: '2026-09-29'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
- Keith Freeman
- Brianne Carroll
- Andrea Turner
- Joel Frick
consulted:
- Dave McLean
- Shao Ngoi
- Nathan Jannasch
informed:
- Jamie Dossey
- Emma Lister
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

# ADR-030: Stage BOMEX Drawing and ECS Data and Gate PPAP Creation Through Drawing Review

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

Use the BOMEX publication event—after Production Control has completed and released the record—as the baseline integration trigger. Send later changes to material fields as updates. The initial creation may use a batch containing the ECS, drawings, parts, and relationships; subsequent changes may be sent as deltas. The final batch-versus-individual-call design remains an implementation choice subject to Intelex API limits.

The integration layer will retain mappings between BOMEX identifiers and Intelex record GUIDs so updates do not require repeated lookup calls. Integration staging objects will be restricted to administrators; business users will work with derived part, drawing, PPAP, and inspection records.

Use drawing number and drawing revision as the principal engineering context for PPAP and inspection-specification decisions. ECS identifiers remain traceability references and triggers, but are not treated as a reliable revision sequence.

For each applicable SIA drawing on a released ECS, create a source-linked initial drawing-review record rather than a draft PPAP. The review is a lightweight control record outside the PPAP inventory. It records the reviewer, decision date, rationale, and one of these outcomes:

- PPAP required;
- PPAP not required, with a governed reason; or
- addressed by another PPAP, with a relationship to that PPAP.

The working business assumption is that an engineering change requires PPAP unless the reviewer records an exception. When PPAP is required, the reviewer launches a PPAP from the review so the source ECS, drawing, candidate supplier, part scope, and model context carry forward. If an earlier no-PPAP decision is later found to be incorrect, an authorized user may still create the PPAP manually and relate it to the review.

When a later ECS affects a PPAP that is still open, the drawing review may select **addressed by another PPAP** and relate the ECS as supplemental engineering context to that open PPAP. The engineer then reassesses and reopens affected elements under ADR-104. If the applicable PPAP is already approved and closed, the later ECS requires a new PPAP unless the reviewer records another governed exception.

Set a two-week target from drawing release for completing the initial review. Route it through the applicable model-change, running-change, or PCR internal responsibility described in ADR-026. The same review also gates review or revision of the applicable inspection specification; it does not automatically create a pilot-part program.

## Consequences

### Positive

- Provides a stable engineering-change context inside Intelex.
- Keeps preliminary determinations out of the operational PPAP inventory.
- Preserves an auditable decision when PPAP is not required or is addressed elsewhere.
- Supports controlled PPAP creation and source traceability.
- Improves later access to drawings and related history.
- Uses an integration pattern already supported by the BOMEX-owning team.

### Negative

- Requires a richer custom API and staging model.
- Drawing, ECS, and part updates require synchronization and duplicate handling.
- Large drawing files affect storage planning.
- Identifier mapping, retry handling, batching, and throttling become integration responsibilities.
- Requires a separate initial drawing-review object, reason catalogue, routing, and overdue reporting.

### Follow-up and Constraints

- Define the BOMEX payload and authoritative keys.
- Define file-transfer or source-link handling for drawings.
- Define revision and duplicate update rules.
- Define the no-PPAP reason catalogue and notification or escalation behavior for overdue reviews.
- Confirm how an "addressed by another PPAP" relationship is validated when the related PPAP is not yet complete.
- Decide the initial batch and later delta payload strategy.
- Define integration retry, reconciliation, and GUID-mapping ownership.

## More Information

- Second transcript: approximately 0:08:20–0:12:02 and 2:43:52–2:52:33.
- Third transcript: approximately 0:19:39–0:24:55.
- Fourth transcript: approximately 0:25:57–0:36:19.
- Product Management and Pilot Part Data design transcript: approximately 3:28:31–3:50:25 and 6:25:28–6:26:45.
- PPAP design workshop transcript: approximately 0:09:17–0:13:53 and 1:34:02–1:57:13.
- PPAP design workshop continuation: approximately 0:45:24–0:56:35.
- The later workshop replaces the earlier draft-PPAP creation pattern with a separate initial drawing-review gate. The integration-staging portion of this ADR remains unchanged.
