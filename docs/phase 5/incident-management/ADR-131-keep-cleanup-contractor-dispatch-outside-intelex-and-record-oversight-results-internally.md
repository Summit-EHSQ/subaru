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
- Security dispatch
- Environmental Management
- Cleanup contractors
- Janitorial service
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (15:12–24:55 (P0062–P0098); 48:20–50:16 (P0181–P0192))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-131: Keep Cleanup Contractor Dispatch Outside Intelex and Record Oversight Results Internally

## Context and Problem Statement

The cleanup contractor performs the cleanup and does not enter information in Intelex. Security calls the crew outside the application, while the on-site oversight team supervises and reports the response. The team distinguishes water cleanup from chemical/non-water cleanup and discusses larger contractors only for exceptional responses. [S3 15:12–24:55; 48:20–50:16.]

## Decision Drivers

- Notify crews through a method they actually use during response rather than relying on computers. [S3 19:37–20:54.]
- Retain cleanup response details through the oversight report. [S3 20:55–22:38.]
- Avoid ambiguity between janitorial and chemical cleanup responsibility. [S3 17:15–18:31; 49:40–50:16.]

## Considered Options

- External contractor dispatch with oversight-entered cleanup records.
- Require contractor tasks and direct Intelex entry (raised and explicitly ruled out for the current process).
- Store only a Security dispatch note without cleanup details (analyst-derived alternative).

## Decision Outcome

Chosen option: "External contractor dispatch with oversight-entered cleanup records", because the workshop explicitly keeps cleanup crews outside application entry and dependent on phone/other external dispatch. Security notifies the appropriate crew outside Intelex; the oversight team records cleanup details and supervises completion. Do not create licensed contractor workflow users or an automated contractor-dispatch integration from this discussion. [S3 18:20–21:38.]

Use SIA’s operational distinction: water spills go to janitorial service; chemical/non-water spills, including water mixed with chemicals, go to the environmental cleanup contractor. Field responders can correct an initial material/category assessment and coordinate the appropriate crew. This is a local responsibility rule, not a universal chemical classification. [S3 17:15–18:31; 48:20–50:16.]

Record the cleanup details. Contractor-company attribution is discussed as useful for history; individual crew members are not a required tracking level established here. Multiple/additional outside companies for severe events remain an exception to define, not a fully selected contractor-management model. [S3 20:55–24:33.]

## Consequences

- Analysis: application workflow is not a prerequisite for contractor response or a replacement for dispatch communication.
- Analysis: response evidence depends on oversight reporting rather than contractor self-entry.
- Analysis: company history may need to accommodate changing contracts and additional responders without expanding into a crew roster.

## More Information

- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 15:12–24:55 (P0062–P0098); 48:20–50:16 (P0181–P0192); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: high. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Unresolved: Confirm whether contractor-company attribution is mandatory, optional, or a later placeholder, and how multiple companies are recorded.
- Unresolved: Confirm exact dispatch guide, correction/handoff procedures, and links to any existing contractor/training records.
- Unresolved: Do not infer future contractor portal provisioning, procurement integration, or individual training administration from the discussion.
- Related records: ADR-119, ADR-127, ADR-130. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
