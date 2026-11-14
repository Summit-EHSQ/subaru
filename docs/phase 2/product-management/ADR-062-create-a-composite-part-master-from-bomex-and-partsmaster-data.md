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
  - SIA integration layer
  - Supplier Relationship Management
  - Production Part Approval Process (PPAP)
  - Shipping, Receiving and Inspection (Pilot Part Data)
  - Non-Conformance Management
  - Warranty Corrective Action Report (WCAR)
source_references:
  - "raw_artifacts/meeting_transcripts/2026-11-12-supplier-integrations-and-go-live-testing.txt; 16:35–21:18, 21:41–24:26"
  - "raw_artifacts/meeting_transcripts/2026-11-12-supplier-integrations-and-go-live-testing-context.md; user-confirmed meeting date and time"
approval_references: []
---

# ADR-062: Create a Composite Part Master from BOMEX and PartsMaster Data

## Context and Problem Statement

Intelex needs one stable part reference across PPAP, pilot inspections, NCR, warranty, and supplier processes. The earlier version of this proposed decision described engineering information arriving from BOMEX before production and logistics information from PartsMaster, with separate source-aligned records inside Intelex composing a canonical part.

The supplied call clarifies that SIA's integration layer already combines these sources for the current interface. The implementation lead describes creating the part initially from BOMEX and enriching that same part when PartsMaster information becomes available; SIA's integration lead confirms the existing upstream consolidation. Building a second source-consolidation mechanism inside Intelex is therefore not established as necessary. [Call 19:48–21:18.]

The production attributes are not yet a confirmed schema. Participants initially describe two booleans and later identify part classification, supplier changes, and destination/consignee-code changes. Populated examples are requested before the target dictionary and sample calls are finalized. [Call 16:35–19:39, 21:41–21:59.]

## Decision Drivers

- Make the part available from early BOMEX information before PartsMaster enrichment is available. [Call 20:04–20:36.]
- Preserve a single part reference rather than asking Intelex to merge two independent source records. [Call 20:36–21:18.]
- Reuse the existing upstream integration capability. [Call 19:48–21:18.]
- Confirm actual field names, values, and types before producing target payload examples. [Call 18:23–19:39.]
- Retain established engineering context and controlled supplier/depot handling from the existing ADR and related ADR-030, ADR-076, and ADR-092; the call does not withdraw them.

## Considered Options

1. **Use the existing upstream consolidation and create/update one operational Intelex part.** Explicitly supported in the call, 19:48–21:18.
2. **Receive independent BOMEX and PartsMaster records and consolidate them inside Intelex.** The earlier ADR's approach and the implementation lead's alternative at 20:36–21:08.
3. **Wait for PartsMaster before creating any part.** Analyst-derived alternative; inconsistent with the early BOMEX lifecycle described at 20:04–20:36.

## Decision Outcome

Chosen option: "Use the existing upstream consolidation and create/update one operational Intelex part," because SIA confirms that its integration layer already combines BOMEX and PartsMaster and can supply early part data followed by enrichment. This remains a proposed refinement of ADR-062. [Call 19:48–21:18.]

Retain one canonical operational Intelex part keyed by the governed part identifier. The integration initially creates it from BOMEX information and subsequently updates the same part with applicable PartsMaster information. Consolidation of these two sources is the upstream integration layer's responsibility. Do not require duplicate BOMEX and PartsMaster child records inside Intelex solely to repeat that consolidation.

Confirm the part key, update matching, field authority, and populated production-attribute payload before finalizing implementation. Part classification, supplier-code changes, and destination/consignee-code changes are the identified update categories. The discussion does not resolve whether classification is an enumeration or several booleans, or whether the code terms denote the same property. It does not justify freezing three physical fields or their data types. [Call 16:35–19:39.]

Preserve engineering revision context through the applicable drawing and ECS records under ADR-030. A logistics update does not, by itself, establish a new engineering revision. Enrich the supplier-facility relationship from the best available authoritative source. Use a default depot only as an explicit fallback. A validated exception must have an owner, reason, and review path and must not be silently erased by a repeated incomplete upstream value. The call does not resolve the source of those values or remove those controls. Applicable service-part enrichment remains an existing scope question, not something confirmed by this call.

Downstream operational applications continue to reference the canonical part and applicable engineering context. This target does not change the separate, isolated API Data component defined by the current Product Management API technical specification. That specification explicitly prohibits connections to existing business objects. Any path from its intake records to an operational canonical part requires a separately agreed mapping/scope decision; no such connection is introduced by this draft.

## Consequences

The following consequences are architectural analysis unless explicitly attributed.

### Positive

- Reuses the confirmed consolidation layer and avoids repeating source-merging logic in Intelex.
- Keeps early engineering work and later production enrichment on one operational reference.
- Avoids treating every supplier/logistics update as an engineering revision.

### Negative

- Canonical-part completeness depends on the upstream integration's matching and enrichment behavior.
- Source provenance and field ownership still need an explicit contract; a combined payload alone does not resolve conflicts.
- The current isolated intake specification does not deliver the operational linkage described here, so that boundary remains a follow-on design dependency.

### Follow-up and Constraints

- Obtain populated classification, supplier-change, and destination/consignee samples from SIA's integration team.
- Define governed part identity, update matching, source field authority, and missing/null behavior. These are open design requirements, not agreed API mechanics.
- Validate business field coverage with internal supplier-management, NCR, and scorecard users. The call allows their one-week review to proceed without blocking integration work. [Call 22:22–24:26.]
- Retain ADR-076 supplier-entity context, ADR-092 multiple supplier relationships, and ADR-030 engineering staging; a single supplier code in one payload does not remove those requirements.
- Confirm whether operational integration follows the isolated API build as another phase or requires an expressly authorized specification revision.

## More Information

- [Supplied transcript](raw_artifacts/meeting_transcripts/2026-11-12-supplier-integrations-and-go-live-testing.txt): 16:35–19:39 (attribute uncertainty), 19:48–21:18 (upstream consolidation), 21:41–24:26 (samples and business review).
- Revised in place on 2026-11-13 from the previously proposed ADR-062. The same decision identifier and original draft date are retained.
- Historical references preserved from the earlier version: earlier PartsMaster design transcript, approximately 0:57:18–1:08:37; Product Management and Pilot Part Data design transcript, approximately 0:25:16–1:19:19, 1:58:03–2:06:36, and 3:50:55–4:04:40. These historical locators were not newly verified against original transcripts in this review.
- [Current API technical specification](solution_specification/object_model/product-management-api-technical-specification.md), §§1–2.3 and §6.2: isolated component scope and unresolved classification projection.
- Prepared for review on 2026-11-13; the original draft date is preserved. The user confirmed the meeting was November 12, 2026, at 1:00 AM ET; see [meeting metadata clarification](raw_artifacts/meeting_transcripts/2026-11-12-supplier-integrations-and-go-live-testing-context.md). Formal approval remains unrecorded. The historical decision-date field is unchanged; the new meeting metadata does not establish approval. People fields are carried forward from the existing ADR and do not imply approval of this revision.
- No supersession is proposed: this revises the same unapproved ADR under the same ID. No accepted record is rewritten.
