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
- Clinic
- Intelex Platform
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (1:15:09–1:17:26 (P0324–P0335))'
- 'raw_artifacts/meeting_transcripts/workshop-session-2.txt (0:59:54–1:02:38; 1:18:12–1:20:24; 1:29:06–1:31:46)'
- 'raw_artifacts/meeting_transcripts/workshop-session-1.txt (prior decision evidence; see linked session 1 text)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-122: Confirm Role and Department Visibility Before Granting Broad Incident Access

## Context and Problem Statement

Earlier workshops considered leadership-wide visibility and defined specialist/section audiences. Session 4 asks whether any individual incident is confidential, then proposes management-level visibility. Participants explicitly decline to finalize whether departments can see one another’s reports and table the matter for a larger internal discussion. [S1 3:19:20–3:23:07; S2 0:59:54–1:02:38; S4 1:15:09–1:17:26.]

## Decision Drivers

- Align visibility with defined user responsibilities rather than assume general access. [S4 1:15:52–1:16:13.]
- Resolve cross-department and detail visibility with the appropriate internal group. [S4 1:16:45–1:17:26.]
- Retain prior concern about unrelated personal medical narrative. [S2 1:01:20–1:02:38.]

## Considered Options

- Confirm the role/type/department/detail matrix before granting broad access.
- Give all management every incident and every detail (raised as an assumption, not finalized).
- Restrict all management to its own department (question raised, not selected).

## Decision Outcome

Chosen option: "Confirm the role/type/department/detail matrix before granting broad access", because session 4 explicitly tables the final visibility question. Preserve role-based operational access as the design basis, but do not treat management seniority as approval to view all injury/medical detail, other departments’ cases, or every incident type. Record the proposed management threshold and earlier section/specialist audiences as inputs requiring confirmation. [S4 1:15:09–1:17:26; S1 3:19:20–3:23:07.]

The question about record-specific confidentiality is not resolved by the subsequent discussion of roles. No decision selects or rejects a confidential-case flag, a special record access list, or a field-level medical boundary. Workflow-contribution rights must be specified separately from general browsing. [S4 1:15:09–1:17:26; distinction is analysis informed by S2 1:18:12–1:20:24.]

Retain the prior coaching/content-quality concern for irrelevant medical narrative, and the need to enforce permissions in notifications, exports, search, summaries, and drill-through. No input-AI control or anonymous public-form access is confirmed by this session. [S2 1:01:20–1:02:38; S3 2:00:43–2:02:54; application implications are analysis.]

## Consequences

- Analysis: explicitly recording the deferral avoids turning a conversational management-access assumption into a permission grant.
- Analysis: cross-department reporting and external datasets must wait for, or be constrained by, the eventual access matrix.
- Analysis: clinically initiated hearing records need specific contribution and browsing rules rather than inheriting all ordinary Security permissions.

## More Information

- Evidence: [Session 4 extraction](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 1:15:09–1:17:26 (P0324–P0335); [source DOCX](raw_artifacts/meeting_transcripts/workshop-session-4.docx). Recording header dated 4 November 2026; this review prepared 12 November 2026.
- Confidence: high for deferral; medium for final access direction. Status is proposed; discussion is not formal approval, implementation, or verified product/regulatory evidence.
- Prior proposal and earlier source evidence: [ADR-122 (archived session 2)](raw_artifacts/adr-review-history.zip). Preserve its ID/date; earlier review files remain history.
- Unresolved: Confirm role memberships, organizational scope, cross-department visibility, incident types, medical fields, and any record-specific confidentiality exceptions.
- Unresolved: Confirm contribution access and post-handoff/closed-case access for clinic, supervisors, Safety, and Security.
- Unresolved: Define correction/retention of inappropriate medical text and any output de-identification rules.
- Unresolved: Resolve clinic-provider identities and prospective near-miss guest access under ADR-061/ADR-134 without assuming supplier authentication.
- Related records: ADR-061, ADR-082, ADR-121, ADR-123, ADR-125, ADR-127, ADR-134, ADR-135, ADR-139. Resolve the latest review text through the [current ADR index](README.md).
