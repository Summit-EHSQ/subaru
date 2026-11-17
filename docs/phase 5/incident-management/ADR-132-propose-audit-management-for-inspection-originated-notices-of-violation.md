---
status: proposed
date: '2026-11-12'
discussion-date: '2026-11-04'
decision-date: not-formally-recorded
deciders: []
consulted: []
informed: []
primary-application: Audit Management
secondary-applications:
- Incident Management
- Environmental Management
- Corrective Action Management
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (53:13–1:02:55 (P0210–P0239))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-132: Propose Audit Management for Inspection-Originated Notices of Violation

## Context and Problem Statement

SIA explains that a NOV normally follows a regulatory inspection/enforcement path and may span several unrelated concerns. It therefore prefers the audit area to an incident subtype. The presenter agrees this is plausible but parks the change pending review of the existing audit design and scope. [S3 53:13–1:02:55.]

## Decision Drivers

- Keep the inspection, its multiple concerns, formal report, corrections, and follow-ups together. [S3 54:17–59:31.]
- Support Environmental’s regular internal/external audits and regulatory inspections in the shared audit application. [S3 59:31–1:02:36.]
- Check fit with existing shared Audit Management configuration before committing the change. [S3 1:01:04–1:02:55.]

## Considered Options

- Use Audit Management for inspection-originated NOV tracking, subject to fit/scope confirmation.
- Keep all NOVs as incident types (earlier scope assumption).
- Build a separate NOV application (analyst-derived alternative, not requested).

## Decision Outcome

Chosen option: "Use Audit Management for inspection-originated NOV tracking, subject to fit/scope confirmation", because the stated source process is regulatory inspection and enforcement rather than necessarily a discrete incident. Preserve the inspection context, written communication, concerns, corrections and follow-up. Preliminary concerns prompt investigation before the final report; the written final report is identified as the likely first formal Intelex artifact. Do not turn the stated usual report delay into a workflow deadline. [S3 53:13–59:31.]

This remains a proposal: the presenter explicitly parks NOV until shared-audit fit and scope are clarified. Do not mark it implemented, remove contracted incident functionality, or claim approval to change the SOW. Existing ADR-087 governs Findings and shared CAR escalation; this direction must fit that boundary rather than replacing it with a new incident or NCR model. [S3 58:20–1:02:55; existing ADR-087.]

Long-lived regulatory determinations arising from inspections are a separately identified retention/reuse need. The transcript does not select a repository or data model for that library; preserve it as a clarification candidate rather than inventing a document type. [S3 59:31.]

## Consequences

- Analysis: audit-centered tracking can preserve multiple findings from one inspection without forcing them into one event description.
- Analysis: changing the expected application boundary affects shared audit configuration and scope, so it needs a concrete fit decision.
- Analysis: an eventual related incident may still need a navigable relationship; it need not be the NOV’s parent by default.

## More Information

- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 53:13–1:02:55 (P0210–P0239); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: medium. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Unresolved: Review the configured audit solution with Environmental and existing audit owners; confirm required fields, status/follow-up behavior, and formal communication handling.
- Unresolved: Confirm SOW/change-control implications and whether the audit module is sufficient.
- Unresolved: Define the regulatory-determination library and retention ownership separately.
- Unresolved: Define any relationship to incidents, findings, NCRs, or CARs without automatically applying an escalation threshold.
- Related records: ADR-057, ADR-087, ADR-089, ADR-090, ADR-091, ADR-130. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
