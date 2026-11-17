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
- Reporting
- Action plans
- Witness information
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (0:10 (P0007))'
- 'raw_artifacts/meeting_transcripts/workshop-session-1.txt (1:51:33–1:52:08; 3:54:55–3:56:37)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-125: Provide Grouped Event Summaries Without Requiring a Master Intake

## Context and Problem Statement

The prior proposal describes summaries of child actions from a master record. Session 3 removes mandatory master intake but retains Safety-led grouping of separately reported incidents. The summary need from session 1 remains relevant, while its physical parent/master representation is no longer established. [S1 3:54:55–3:56:37; S3 0:10.]

## Decision Drivers

- See the actions and impacts belonging to the same reviewed event. [S1 1:51:33–1:52:08; 3:54:55–3:56:20.]
- Preserve independent incident ownership and avoid confusing summary views with duplicate action records. [S1 3:54:31–3:56:20; avoidance of duplicate storage is analysis.]
- Align summary availability with later grouping rather than an unneeded initial master. [S3 0:10.]

## Considered Options

- A summary view over reviewed event relationships, with the representation still to be confirmed.
- Require an intake master solely to obtain summaries (prior dependency now removed).
- Open each separate report to reconstruct all event actions manually (analyst-derived alternative).

## Decision Outcome

Chosen option: "A summary view over reviewed event relationships, with the representation still to be confirmed", because Safety still relates reports to an event even though Security no longer creates a master first. Preserve the session 1 proposal to show related action information with its source incident context. A grouped summary can follow the eventual reviewed-relationship model; do not allocate a mandatory parent/master object merely to reproduce the earlier demonstration. [S1 3:54:55–3:56:20; S3 0:10.]

This is summary/navigation intent, not a selected physical implementation. Storage, review cadence, grouping records versus direct relationships, and summary completeness remain open in ADR-118. Keep permissions aligned to ADR-122. Shared-witness behavior and cost collection/rollups remain unresolved, and the transcript does not approve copying an action into another record as a new action merely for display. [S1 3:55:27–3:56:37; S3 0:10; implementation and permission implications are analysis.]

## Consequences

- Analysis: users can eventually review a collective event while each source incident remains independently governed.
- Analysis: until grouping is reviewed, an event summary may be incomplete; reporting needs to make that limitation clear.
- Analysis: summary counts and drill-through must respect source permissions and avoid double-counting the same actions.

## More Information

- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 0:10 (P0007); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: medium. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Prior review text and evidence: [ADR-125 (archived session 1)](raw_artifacts/adr-review-history.zip). Earlier S1/S2 source links and locators remain in that history; this full replacement carries the continuing decision boundary forward.
- Unresolved: Choose relationship storage and summary/navigation representation with ADR-118.
- Unresolved: Confirm how source actions, evidence, witnesses, and any cost data appear, and whether an event-level completeness indicator is needed.
- Unresolved: Validate source visibility and summary filtering before exposing aggregated results.
- Related records: ADR-118, ADR-122, ADR-135. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
