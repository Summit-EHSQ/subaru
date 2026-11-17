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
- Security intake
- Clinic
- Safety Management
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (1:01:20–1:05:42 (P0261–P0286))'
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (0:10–1:50 (P0007–P0009); 15:12–20:54 (P0062–P0090); 1:03:20–1:08:36 (P0240–P0260))'
- 'raw_artifacts/meeting_transcripts/workshop-session-2.txt (0:04:18–0:05:15; 0:21:18–0:40:25; 0:50:34–0:57:20; 1:03:46–1:14:01; 1:38:27–1:40:46; 1:47:56–1:49:31)'
- 'raw_artifacts/meeting_transcripts/workshop-session-1.txt (prior decision evidence; see linked session 1 text)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-119: Use Security Intake for Ordinary Incidents and Clinic Intake for Hearing Conservation

## Context and Problem Statement

Session 4 adds a test-originated hearing-conservation path: the clinic initiates the provisional case, and it does not go through Security/2222. The ordinary Security intake description below is therefore a default, not a universal prerequisite for every injury record. [S4 1:01:20–1:05:42.]

The earlier draft limited Security to factual intake while leaving creation of masters and specialist cases open. Session 3 selects separate typed incident reports created by Security and direct entry of EHS information in Intelex; grouping follows review. [S3 0:10; 1:04:02–1:08:36.]

## Decision Drivers

- Capture who, what, when, where, and how at the reporting contact. [S3 0:10.]
- Avoid requiring a master to initiate each incident’s work. [S3 0:10.]
- Route EHS intake to Intelex while retaining other Security work in Resolver. [S3 1:04:02–1:08:36.]

## Considered Options

- Security creates separate typed EHS reports in Intelex.
- Security creates only a master and waits for specialists to create all reports (prior alternative).
- Receive EHS reports from Resolver through an integration (earlier assumption, now parked).

## Decision Outcome

Chosen option: "Security creates separate typed EHS reports in Intelex", for ordinary reported incidents, because session 3 explicitly assigns creation of each incident type to Security instead of requiring a master-first handoff. Capture the factual intake information and immediate actions, then route the resulting record into its type-specific process. Retain the session 2 direction against speculative initial suspected-cause requirements. [S3 0:10; S2 1:11:10–1:12:49.]

For ordinary injury reports entering the active response flow, the first review is assigned to the injured associate’s supervisor; for PIT, to the involved driver’s supervisor. Environmental reports follow oversight-led response, not the same supervisor flow. Dispatch of environmental cleanup contractors stays outside Intelex under ADR-131. [S3 0:10–1:50; 15:12–20:54.]

Security needs guidance on whether a call belongs in Intelex EHS intake or the retained Resolver processes; the workshop reports that management has controls, but their content is not supplied. Near-miss reporting is a separate conditional self-service path, not automatically another Security intake category. [S3 1:03:20–1:08:36; 1:35:21–1:36:22.]

The clinic-led hearing-conservation exception uses its own provisional entry/release direction under ADR-139. It does not reinstate master-first intake or select a future clinical application. Exact placeholder data, report inclusion, and release assignments remain open. [S4 1:03:19–1:05:42.]

## Consequences

- Analysis: Security has a defined data-entry responsibility and typed workflow handoff rather than merely supplying a master number.
- Analysis: correct type, subject/driver, and supervisor data are needed to resolve initial assignment.
- Analysis: direct system choice needs a maintained operating guide to avoid duplicate or misplaced reports.

## More Information

- New evidence: [Session 4](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 1:01:20–1:05:42 (P0261–P0286); [prior proposal (archived session 3)](raw_artifacts/adr-review-history.zip). Earlier S1–S3 citations refer to the preserved source links below.
- Unresolved after session 4: confirm hearing-case initial data, recordability/provisional status, confirmation/release ownership, and when ordinary tasks/notifications begin; see ADR-139.
- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 0:10–1:50 (P0007–P0009); 15:12–20:54 (P0062–P0090); 1:03:20–1:08:36 (P0240–P0260); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: high. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Prior review text and evidence: [ADR-119 (archived session 2)](raw_artifacts/adr-review-history.zip). Earlier S1/S2 source links and locators remain in that history; this full replacement carries the continuing decision boundary forward.
- Unresolved: Confirm minimum required intake fields, unknown-person handling, multiple people/equipment per call, and assignment fallbacks.
- Unresolved: Resolve absent/accompanying management member versus assigned supervisor exceptions retained from session 2; the default supervisor route does not settle every exception.
- Unresolved: Keep emergency response independent of completion of computer entry; reporting-line and continuity procedures remain to be detailed.
- Unresolved: Do not assume this determines near-miss authentication, intake, or vehicle scope.
- Related records: ADR-118, ADR-120, ADR-121, ADR-126, ADR-129, ADR-130, ADR-131, ADR-134, ADR-139. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
