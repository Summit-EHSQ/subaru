---
status: proposed
date: '2026-11-12'
discussion-date: '2026-11-04'
decision-date: not-formally-recorded
deciders: []
consulted: []
informed: []
primary-application: Incident Management
secondary-applications:
- Data configuration
- Station data
- Historical reporting
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (41:22–47:34 (P0162–P0199))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-140: Change Capture Types Through Explicit New-Field Mapping and Historical Preservation

## Context and Problem Statement

The team asks whether a station text field can later become a dropdown and whether text can become decimal. The presenter explains that the proposed method is a new typed field plus mapping of old values, because free text may contain inconsistent or unconvertible content. Participants acknowledge the effort and the need to design types carefully. [S4 41:22–47:34.]

## Decision Drivers

- Avoid loss of historical data when capture representation changes. [S4 42:26–44:46.]
- Reconcile inconsistent labels and values before they are used as controlled data. [S4 43:06–44:26.]
- Align changes with future authoritative station data rather than create repeat remapping. [S4 45:55–47:34.]

## Considered Options

- Introduce the required typed field with explicit historical mapping and preservation of source values.
- Assume changing the field type automatically converts every prior value correctly (challenged).
- Keep every data point as unrestricted text indefinitely (analyst-derived alternative).

## Decision Outcome

Chosen option: "Introduce the required typed field with explicit historical mapping and preservation of source values", because the workshop describes a controlled transition rather than an automatic data-type switch. When a representation changes, define the destination field/value catalogue, retain the original values, and map existing records deliberately. Ambiguous or unconvertible entries need an agreed exception treatment rather than silent deletion or coercion. [S4 42:26–44:46; exception treatment is analysis.]

Do not claim that every native type change always requires the same implementation. The presenter describes the likely approach for these cases; validate actual platform behavior and the chosen field model before migration. For stations, wait for the target source/representation to inform mapping instead of prematurely standardizing to a numeric/left-right scheme that may not match it. [S4 42:26–47:34.]

Review reporting dependencies and historical interpretation when introducing the new field, so a blank controlled value on an old record is not mistaken for an absence of original evidence. This is an analyst-derived consequence of the described blank-new-field case. [S4 42:26–43:39.]

## Consequences

- Analysis: old evidence remains available when a new field is incomplete or an exact mapping cannot be made.
- Analysis: data cleansing/mapping is real work with ownership and exceptions; it cannot be assumed to occur with a simple display change.
- Analysis: reports may need a deliberate transition between original and normalized values.

## More Information

- Evidence: [Session 4 extraction](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 41:22–47:34 (P0162–P0199); [source DOCX](raw_artifacts/meeting_transcripts/workshop-session-4.docx). Recording header dated 4 November 2026; this review prepared 12 November 2026.
- Confidence: high for mapping requirement; medium for final implementation. Status is proposed; discussion is not formal approval, implementation, or verified product/regulatory evidence.
- Unresolved: Define mapping owners, normalization catalogue, exception handling, validation/reconciliation, and when new versus historical fields are used.
- Unresolved: Confirm any approval/history constraints when updating closed records during a migration.
- Unresolved: Validate actual platform/API behavior and dependent reports before changing production capture.
- Unresolved: Confirm station readiness and authoritative values with ADR-136; no migration execution or estimate is approved here.
- Related records: ADR-123, ADR-135, ADR-136. Resolve the latest review text through the [current ADR index](README.md).
