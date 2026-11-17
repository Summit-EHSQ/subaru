---
status: proposed
date: '2026-11-10'
revision-date: '2026-11-12'
discussion-date: '2026-11-04'
decision-date: not-formally-recorded
deciders: []
consulted: []
informed: []
primary-application: Incident Management
secondary-applications:
- Safety Management
- Environmental Management
- Security intake
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (0:10–1:50 (P0007–P0009))'
- 'raw_artifacts/meeting_transcripts/workshop-session-2.txt (0:02:41–0:04:01; 0:21:18–0:23:56; 0:43:41–0:48:21; 1:14:36–1:17:43; 1:43:19–1:49:31)'
- 'raw_artifacts/meeting_transcripts/workshop-session-1.txt (prior decision evidence; see linked session 1 text)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-118: Group Separately Reported Incidents Through Safety Review

## Context and Problem Statement

Session 2 left master-first intake versus analysis-time grouping contested. Session 3 opens with a recap of the intervening decisions: Security creates each incident type separately, and Safety relates records belonging to one event on review. The storage mechanism and review frequency remain open. [S3 0:10, P0007.]

## Decision Drivers

- Let Security report each incident without requiring an overarching master at intake. [S3 0:10.]
- Retain a way to connect incidents that belong to one event. [S3 0:10.]
- Use Safety review to establish event relationships. [S3 0:10.]

## Considered Options

- Separate typed incident intake with subsequent Safety-led event grouping.
- Require a master at intake before creating every child (session 1 option).
- Keep separate reports without reviewed event relationships (analyst-derived alternative).

## Decision Outcome

Chosen option: "Separate typed incident intake with subsequent Safety-led event grouping", because the session 3 recap explicitly removes the need for a master incident at intake while preserving event correlation through Safety. Security creates the applicable incident types separately. Safety reviews the records and ties those belonging to the same event together. Do not require an initial master record or generate incident workflows solely from master selections. [S3 0:10, P0007.]

Preserve independent incident investigations and completion; grouping is a relationship and reporting concern, not approval of every linked report. The recap does not choose a new grouping object, the storage location, an automated matching algorithm, or a fixed review cadence. It also does not forbid an eventual event-summary record created during review. [S3 0:10; independence retained from S2 1:14:46–1:17:43.]

## Consequences

- Analysis: intake no longer depends on creating or maintaining a master first.
- Analysis: event-level summaries depend on reviewed relationships and may lag initial reporting.
- Analysis: duplicate detection, relationship corrections, and grouped-event counts need an agreed model; time and place alone are not proof of common cause.

## More Information

- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 0:10–1:50 (P0007–P0009); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: high. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Prior review text and evidence: [ADR-118 (archived session 2)](raw_artifacts/adr-review-history.zip). Earlier S1/S2 source links and locators remain in that history; this full replacement carries the continuing decision boundary forward.
- Unresolved: Define relationship storage, review frequency, review ownership when several disciplines are involved, and who may correct grouping.
- Unresolved: Define optional event summaries/completeness indicators and permissions without recreating an unapproved master intake workflow.
- Unresolved: Retain prior concern about preserving injury identity and counting accurately when records are regrouped.
- Related records: ADR-091, ADR-119, ADR-120, ADR-125, ADR-127, ADR-135. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
