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
- Employee Management
- Safety Management
- Clinic
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (0:10–3:12 (P0007–P0014))'
- 'raw_artifacts/meeting_transcripts/workshop-session-2.txt (0:35:54–0:40:25; 1:18:12–1:28:58; 1:31:46–1:35:23; 1:39:14–1:43:19)'
- 'raw_artifacts/meeting_transcripts/workshop-session-1.txt (prior decision evidence; see linked session 1 text)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-121: Sequence Supervisor and Safety Work While Allowing Clinical Contribution During Safety Review

## Context and Problem Statement

The session 2 draft withdrew certainty about combining a static team and dynamic supervisor. Session 3 instead gives the supervisor a first pass and then assigns the record to Safety, while permitting the clinic to add injury information simultaneously with Safety’s work. [S3 0:10–2:29.]

## Decision Drivers

- Preserve the supervisor’s initial account and initial Five Whys. [S3 0:10–2:38.]
- Let clinic add injury classification and medical information during Safety review. [S3 1:50.]
- Keep one stated workflow owner during that parallel contribution. [S3 1:50.]

## Considered Options

- Sequential supervisor then Safety responsibility, with parallel clinical contribution during Safety review.
- One shared investigation stage combining stable groups and a dynamic supervisor (earlier unverified mechanism).
- Fully sequential supervisor, clinic, then Safety stages (earlier alternative).

## Decision Outcome

Chosen option: "Sequential supervisor then Safety responsibility, with parallel clinical contribution during Safety review", because session 3 specifies that sequence while keeping the Safety task owned by Safety. Use the injured associate’s supervisor for the injury first pass and the involved driver’s supervisor for PIT. After supervisor submission, Safety owns review/finalization. For injury, clinic personnel may populate their clinical content during that Safety-owned period. [S3 0:10–3:12.]

This resolves the business sequence; it does not prove a specific permission implementation, safe simultaneous saves, or a platform ability to merge dynamic supervisors into a static group. Define clinic contribution access independently of the current workflow owner and verify it during configuration. Do not make clinic a mandatory intervening stage without new evidence. [S3 1:50; implementation implications are analysis.]

Retain distinct management and associate accounts under ADR-128. The recap’s default to the assigned supervisor does not explicitly resolve all session 2 exceptions involving an accompanying management member, absence, or incomplete supervisor data. [S2 1:27:37–1:28:24; 1:31:46–1:34:14.]

## Consequences

- Analysis: the workflow no longer requires every contributor to be in one shared responsible group.
- Analysis: clinic access must be granted without silently transferring Safety’s task or broadening non-clinical edit authority.
- Analysis: a supervisor handoff precedes Safety review; service expectations and fallback are necessary to avoid stalled reports.

## More Information

- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 0:10–3:12 (P0007–P0014); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: high. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Prior review text and evidence: [ADR-121 (archived session 2)](raw_artifacts/adr-review-history.zip). Earlier S1/S2 source links and locators remain in that history; this full replacement carries the continuing decision boundary forward.
- Unresolved: Validate supervisor lookup, absence/reassignment, initial contributor exceptions, and post-handoff view/edit scope.
- Unresolved: Validate clinical field permissions, simultaneous updates, change attribution, and readiness for final submission.
- Unresolved: The referenced detailed AIR, PIT, and clinical question sets remain unsupplied.
- Related records: ADR-060, ADR-120, ADR-122, ADR-123, ADR-128. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
