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
- OSHA reporting
- Document retention
- Clinic
- Safety Management
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (10:31–27:17 (P0048–P0103); 49:01–52:21 (P0206–P0230))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-138: Preserve the Issued Annual Summary PDF While Keeping Current Log Data Revisable

## Context and Problem Statement

SIA initially asks whether Intelex freezes the annual summary electronically. The presenter says regenerated output uses live data, while participants discuss later case changes and prior-year totals. The eventual accepted workaround is to save the issued PDF and reuse it for matching reprints. The discussion of a native freeze feature remains an unverified product question. [S4 10:31–16:00; 18:33–27:17.]

## Decision Drivers

- Make a replacement copy match the summary originally issued/posted. [S4 12:37; 18:54–20:13; 26:23–26:45.]
- Continue correcting the current log and underlying prior-year data when clinical or exposure information changes. [S4 10:49–12:14.]
- Avoid an unnoticed mismatch between a posted copy and a newly regenerated report. [S4 18:54–20:13.]

## Considered Options

- Save the issued summary PDF and distinguish it from current regenerated output.
- Assume regeneration automatically reproduces the earlier issued version (not established).
- Stop updating all underlying historical cases/exposure totals after summary issuance (not the chosen direction).

## Decision Outcome

Chosen option: "Save the issued summary PDF and distinguish it from current regenerated output", because SIA explicitly accepts saving the report artifact for identical reprints while keeping live data current. Retain an identifiable issued 300A PDF at the issuance decision point and reprint that file when the earlier issued version is requested. Generating a new report from changed data must not silently substitute for that saved version. [S4 26:23–27:17; artifact identification detail is analysis.]

Permit current case classifications and exposure totals, including prior-year values, to be updated through their governed processes. Keep a current log/report distinct from the saved annual summary. A later case changed to non-recordable may leave the current log under ADR-123 without rewriting the retained issued PDF automatically. [S4 10:49–12:14; 49:01–52:21.]

Do not claim that a native electronic freeze/versioning feature is either verified absent or delivered. The workshop explicitly raises follow-up on conflicting demo expectations; the saved-PDF approach is the usable proposal supported by the final discussion. Do not reproduce the participants’ posting calendars, retention periods, or cited legal interpretations as confirmed compliance requirements. [S4 12:37–16:00; 18:33–18:54; 26:23–27:17.]

The reporting population must be complete for the intended establishment, including eligible temporary associates as discussed, rather than accidentally exporting only one employment category. Exact inclusion criteria and data reconciliation remain to be confirmed; the workshop’s statements are process evidence, not a legal eligibility determination. [S4 20:13–25:19.]

## Consequences

- Analysis: a retained artifact can be reproduced exactly without freezing operational case data.
- Analysis: current and issued values may intentionally differ, so file/report labels and retrieval paths matter.
- Analysis: artifact retention needs controlled ownership and storage even though the final repository is not selected.

## More Information

- Evidence: [Session 4 extraction](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 10:31–27:17 (P0048–P0103); 49:01–52:21 (P0206–P0230); [source DOCX](raw_artifacts/meeting_transcripts/workshop-session-4.docx). Recording header dated 4 November 2026; this review prepared 12 November 2026.
- Confidence: high. Status is proposed; discussion is not formal approval, implementation, or verified product/regulatory evidence.
- Unresolved: Select storage location, naming/indexing, issue authority, access, retention, replacement/reissue handling, and preservation of the issuance context.
- Unresolved: Confirm whether to use a configured report archive or another governed file location; none is selected.
- Unresolved: Verify the desired platform report behavior and any outstanding vendor answer about electronic snapshots.
- Unresolved: Confirm the final clinic/Intelex reporting ownership and complete population/establishment mappings.
- Related records: ADR-064, ADR-074, ADR-122, ADR-123, ADR-135, ADR-137. Resolve the latest review text through the [current ADR index](README.md).
