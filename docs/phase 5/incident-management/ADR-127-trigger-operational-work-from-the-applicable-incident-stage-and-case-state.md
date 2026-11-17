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
- Notifications
- Security intake
- Clinic
- Safety Management
- Environmental Management
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (1:03:19–1:05:42 (P0273–P0286))'
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (0:10–1:50 (P0007–P0009); 31:19–39:39 (P0123–P0149))'
- 'raw_artifacts/meeting_transcripts/workshop-session-2.txt (0:32:05–0:43:19; 1:07:57–1:09:37; 1:16:02–1:16:28; 1:18:12–1:20:24)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-127: Trigger Operational Work from the Applicable Incident Stage and Case State

## Context and Problem Statement

Session 4 distinguishes creating a clinic-led hearing placeholder from assigning the ordinary supervisor investigation. The notification/assignment design must recognize provisional case state and the eventual agreed release trigger. [S4 1:03:19–1:05:42.]

The session 2 proposal anchored alerts on master creation to close a handoff gap. Session 3 removes the intake master and shows environmental oversight notified when Security creates the incident, with early Environmental awareness depending on available severity information. Injury/PIT starts with the specified supervisor assignment. [S3 0:10–1:50; 31:19–39:39.]

## Decision Drivers

- Trigger operational awareness without waiting for later event grouping. [S3 0:10; 37:40.]
- Get the on-site oversight team the environmental report it needs to assess. [S3 37:40–39:15.]
- Alert Environmental early for sufficiently severe reported conditions while preserving oversight ownership. [S3 31:19–36:53; 39:15–39:39.]

## Considered Options

- Typed-incident creation and stage/condition-based notifications.
- Retain an intake-master alert as a prerequisite (prior proposal, now incompatible with ADR-118).
- Wait for later Safety grouping before notifying operational teams (analyst-derived alternative).

## Decision Outcome

Chosen option: "Typed-incident creation and stage/condition-based notifications", because operational incident intake now precedes reviewed event grouping. Initiate work from the typed report: ordinary active injury/PIT reports to their defined supervisor route, environmental to the oversight team for response/assessment. Keep notification separate from proof of edit access or receipt. [S3 0:10–1:50; 36:53–39:15.]

For environmental reports, initial information can trigger early Environmental notification/support for severe conditions, while the oversight team retains its task. Responders may escalate after seeing conditions not known to Security. Do not wait for oversight completion when a serious condition is already known, and do not assume every outdoor spill needs the same immediate Environmental alert. [S3 31:19–36:53; 39:15–39:39.]

This replaces the master-specific trigger while preserving the same notification/handoff decision ID. It is not a claim that all injury recipient groups, every threshold, or a delivery SLA has been selected. Cleanup contractor dispatch remains a phone/external process in ADR-131. [S3 19:37–20:54.]

Do not assume an unconfirmed hearing placeholder activates ordinary supervisor investigation assignments on creation. Define its follow-up alerts, ownership, and release conditions with ADR-139; this is not a requirement to leave clinical confirmation work unowned. [S4 1:03:19–1:05:42; ownership distinction is analysis.]

## Consequences

- Analysis: removing the master trigger prevents later event analysis from delaying operational work.
- Analysis: initial and reassessed severity can generate different notifications, requiring clear update rules and duplicate-alert handling.
- Analysis: workflow ownership and supporting-party notification can differ, so receiving an alert must not silently transfer the task.

## More Information

- New evidence: [Session 4](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 1:03:19–1:05:42 (P0273–P0286); [prior proposal (archived session 3)](raw_artifacts/adr-review-history.zip). Earlier S1–S3 citations refer to the preserved source links below.
- Unresolved after session 4: confirm hearing-case initial data, recordability/provisional status, confirmation/release ownership, and when ordinary tasks/notifications begin; see ADR-139.
- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 0:10–1:50 (P0007–P0009); 31:19–39:39 (P0123–P0149); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: high for trigger change; medium for complete recipient rules. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Prior review text and evidence: [ADR-127 (archived session 2)](raw_artifacts/adr-review-history.zip). Earlier S1/S2 source links and locators remain in that history; this full replacement carries the continuing decision boundary forward.
- Unresolved: Confirm recipient matrix, severity triggers, channels, fallback, repeated/changed-severity alerts, and delivery monitoring.
- Unresolved: Confirm whether the clinic receives an initial awareness alert or only access during Safety review; session 3 settles contribution timing more clearly than the complete notification matrix.
- Unresolved: Validate configured notifications and record permissions; no delivery testing is supplied.
- Related records: ADR-118, ADR-119, ADR-120, ADR-121, ADR-122, ADR-130, ADR-131, ADR-139. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
