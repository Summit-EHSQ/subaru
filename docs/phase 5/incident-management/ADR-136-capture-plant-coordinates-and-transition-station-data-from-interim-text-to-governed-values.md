---
status: proposed
date: '2026-11-12'
revision-date: '2026-11-12'
discussion-date: '2026-11-04'
decision-date: not-formally-recorded
deciders: []
consulted: []
informed: []
primary-application: Incident Management
secondary-applications:
- Near-miss reporting
- Location reference data
- Station data
- Reporting
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (29:08–31:16 (P0110–P0124); 41:22–47:34 (P0162–P0199))'
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (1:55:01–2:00:18 (P0447–P0471))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-136: Capture Plant Coordinates and Transition Station Data from Interim Text to Governed Values

## Context and Problem Statement

Session 3 requires plant coordinates and organizational location. Session 4 addresses a different granularity: production stations may not be available as master data at go-live. Participants favor controlled station values for trending, but accept that free text may be necessary initially and reject premature numeric/left-right assumptions that could conflict with future station data. [S3 1:55:01–2:00:18; S4 29:08–31:16; 45:03–47:34.]

## Decision Drivers

- Retain X/Y or A/B plant detail with the location context required for area analysis. [S3 1:55:01–2:00:18.]
- Use standardized station values where reliable station-level trends are required. [S4 29:42–31:16.]
- Avoid a temporary station scheme that creates avoidable remapping when authoritative station data arrives. [S4 45:03–46:45.]

## Considered Options

- Plant coordinates plus organizational location, with interim station text until controlled station data is ready.
- Require complete station master data before any incident reporting can begin (analyst-derived alternative).
- Force a numeric/left-right station convention immediately (discussed but not selected).

## Decision Outcome

Chosen option: "Plant coordinates plus organizational location, with interim station text until controlled station data is ready", because session 4 accepts temporary text for stations while identifying controlled values as the reliable basis for station-level trends. Retain session 3’s local-coordinate conventions and organizational location context; station is not silently the same thing as a building coordinate. [S3 1:55:01–2:00:18; S4 29:42–31:16; 45:03–46:45.]

Plan to replace or supplement interim station text with governed station references when the source is ready. Do not claim the station catalogue is complete, go-live readiness is guaranteed, or a numbering/left-right representation has been selected. Preserve historical text and map it deliberately under ADR-140, including ambiguities, rather than assuming a changed field type automatically normalizes old records. [S4 42:26–47:34.]

Map visualization, coordinate-to-shop derivation, non-manufacturing location coverage, and station history/maintenance rules remain open from session 3. Free-text station capture is an interim collection choice, not a claim of reliable heat-map grouping. [S3 1:56:30–2:00:18; S4 30:11–31:16.]

## Consequences

- Analysis: incident capture can proceed before the controlled station source is ready, but station-based trend results will have known quality limits.
- Analysis: preserving text supports future reconciliation instead of silently discarding unmatched values.
- Analysis: coordinate, organizational location, station identity, and effective time must remain distinguishable to interpret historical trends.

## More Information

- Evidence: [Session 4 extraction](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 29:08–31:16 (P0110–P0124); 41:22–47:34 (P0162–P0199); [source DOCX](raw_artifacts/meeting_transcripts/workshop-session-4.docx). Recording header dated 4 November 2026; this review prepared 12 November 2026.
- Confidence: medium. Status is proposed; discussion is not formal approval, implementation, or verified product/regulatory evidence.
- Prior proposal and earlier source evidence: [ADR-136 (archived session 3)](raw_artifacts/adr-review-history.zip). Preserve its ID/date; earlier review files remain history.
- Unresolved: Identify the authoritative station source, owner, readiness point, representation, effective history, and validation rules.
- Unresolved: Define controlled-value mappings and handling of unknown/ambiguous historical station text.
- Unresolved: Retain coordinate examples/floor-plan, hierarchy coverage, and optional map/derivation requirements as unresolved.
- Unresolved: Do not derive browsing permissions solely from the recorded operational location or station.
- Related records: ADR-082, ADR-122, ADR-135, ADR-140. Resolve the latest review text through the [current ADR index](README.md).
