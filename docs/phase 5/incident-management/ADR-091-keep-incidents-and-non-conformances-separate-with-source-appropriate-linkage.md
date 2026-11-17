---
status: proposed
date: '2026-09-02'
revision-date: '2026-11-12'
discussion-date: '2026-11-04'
decision-date: not-formally-recorded
deciders: []
consulted: []
informed: []
primary-application: Incident Management
secondary-applications:
- Audit Management
- Non-Conformance Management
- Corrective Action Management
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (53:13–1:02:55 (P0210–P0239); 1:11:12–1:11:54 (P0277–P0280); 1:25:59 (P0353))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-091: Keep Incidents and Non-Conformances Separate with Source-Appropriate Linkage

## Context and Problem Statement

The existing proposed ADR-091 separates incident cases from independently meaningful non-conformances, but states that near misses are managed in Incident Management. Session 3 leaves the near-miss platform undecided and proposes treating inspection-originated notices of violation in Audit Management, subject to fit and scope confirmation. [Existing ADR-091; S3 53:13–1:02:55; 1:11:12–1:11:54; 1:25:59.]

## Decision Drivers

- Preserve specialized incident and non-conformance purposes. [Existing ADR-091.]
- Keep external inspection findings, responses, and follow-ups together rather than treating every citation as a discrete incident. [S3 53:13–59:31.]
- Avoid assuming the near-miss hosting decision is already made. [S3 1:11:12–1:11:54; 1:25:59.]

## Considered Options

- Separate source records with explicit relationships and conditional application boundaries.
- Treat every incident, near miss, and regulatory notice as one non-conformance lifecycle (analyst-derived alternative).
- Keep related applications disconnected (existing alternative).

## Decision Outcome

Chosen option: "Separate source records with explicit relationships and conditional application boundaries", because investigation of an event and governance of a distinct process/compliance failure remain different decisions. Retain the existing direction to launch a related typed NCR when incident investigation identifies an independently meaningful non-conformance; do not create a meta-NCR solely to group repeat incidents. Normally create the related NCR during investigation rather than initial reporting. Relate repeated incidents directly and expose prior occurrences to the later investigator; common-event grouping remains ADR-118. [Existing ADR-091.]

Qualify the existing context: near-miss recording may be in Intelex or Manufacturing Way; session 3 does not choose the host. Inspection-originated NOVs are proposed for Audit Management under ADR-132 rather than automatically created as incident subtypes. This is compatible with accepted ADR-087’s Audit Finding/shared-CAR boundary; it does not replace Findings, change CAR rules, or prove the current audit configuration fits NOVs. [S3 53:13–1:02:55; 1:11:12–1:11:54; 1:25:59; existing ADR-087.]

## Consequences

- Analysis: source context remains clear while relationships support cross-application traceability.
- Analysis: combined reporting must accommodate incidents, findings/NOVs, and a still-unselected near-miss host without collapsing their lifecycles.

## More Information

- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 53:13–1:02:55 (P0210–P0239); 1:11:12–1:11:54 (P0277–P0280); 1:25:59 (P0353); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: medium. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Prior review text and evidence: [earlier ADR-091](raw_artifacts/adr-review-history.zip), preserved under its original root filename in the archive. The consolidated record carries the continuing decision boundary forward.
- Unresolved: Retain prior open field mappings, incident-to-NCR launch points, repeat-event visibility, and closure dependencies.
- Unresolved: Confirm NOV audit fit/scope with ADR-132 and near-miss hosting with ADR-134.
- Related records: ADR-087, ADR-089, ADR-090, ADR-118, ADR-132, ADR-134. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
