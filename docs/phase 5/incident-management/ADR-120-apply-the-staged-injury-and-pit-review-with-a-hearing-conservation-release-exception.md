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
- PIT safety
- Clinic
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (52:42–1:05:42 (P0233–P0286))'
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (0:10–3:12 (P0007–P0014); 4:50–12:23 (P0021–P0055))'
- 'raw_artifacts/meeting_transcripts/workshop-session-2.txt (0:02:41–0:03:43; 1:16:28–1:17:43; 1:21:43–1:28:42; 1:39:37–1:43:19)'
- 'raw_artifacts/meeting_transcripts/workshop-session-1.txt (prior decision evidence; see linked session 1 text)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-120: Apply the Staged Injury and PIT Review with a Hearing-Conservation Release Exception

## Context and Problem Statement

Session 4 identifies hearing-conservation placeholders that do not start with ordinary investigation or assignment before confirmation. Retain the staged review below for ordinary injury/PIT cases and for the later active hearing-case response once its release rules are confirmed. Do not require AIR/Five Whys completion merely to create a provisional hearing record. [S4 52:42–1:05:42.]

Sessions 1–2 left direct shared investigation versus a preceding supervisor contribution open. Session 3 presents a staged injury/PIT flow. The team corrects the initial attribution of Five Whys: the supervisor prepares the initial analysis and temporary countermeasure proposals, and Safety reviews/finalizes the response before manager approval. [S3 0:10–3:12; 4:50.]

## Decision Drivers

- Have the relevant supervisor fill in the first-pass incident details and initial analysis. [S3 0:10–2:38.]
- Have Safety review and finalize proposed countermeasures. [S3 2:59–3:12; 4:50.]
- Obtain Safety Manager review before closing the report. [S3 4:50.]

## Considered Options

- Supervisor review, Safety review/finalization, then Safety Manager approval.
- Immediate shared investigation with one final safety-specialist approval (earlier proposal).
- Supervisor first contribution followed by a separate mandatory clinic workflow gate (prior alternative, not the selected recap).

## Decision Outcome

Chosen option: "Supervisor review, Safety review/finalization, then Safety Manager approval", because this is the session 3 recap and corrected allocation of analysis work. For the ordinary active injury/PIT response, Security creates the report. Clinic-led provisional hearing records follow ADR-139 before release into any applicable staged review. The injured associate’s supervisor, or the PIT driver’s supervisor, receives the first review, completes its details, performs initial Five Whys, and proposes temporary countermeasures. Safety reviews that analysis, finalizes or adds countermeasures, and submits to the Safety Manager for approval and report closure. [S3 0:10–3:12; 4:50.]

Clinic entry of injury classification/medical information can proceed during the Safety-owned review under ADR-121 and ADR-123. This preserves a sequential supervisor-to-Safety handoff while allowing the specified parallel clinical contribution; it is not the all-parties shared-stage design from session 1. [S3 1:50.]

Invalid reports may be cancelled during supervisor or Safety review. Cancellation at final manager review is debated; late clinical classification changes are then discussed separately, so do not assert cancellation permission at every stage. Closed injury records can be reopened to Safety review and return for manager review as described in ADR-123. [S3 7:37–12:23.]

Do not use cancellation alone as a proxy for removing a case from the current log: session 4 distinguishes the recordability flag from workflow status. Clinical reclassification and reviewed reopening follow ADR-123. [S4 49:01–52:21; 58:19–1:00:10.]

## Consequences

- Analysis: analysis preparation, response finalization, and final approval have distinct responsibilities.
- Analysis: report approval/closure is now a Safety Manager responsibility rather than the earlier single safety-specialist closure.
- Analysis: proposed temporary measures need a defined release/assignment rule; the workshop does not establish that urgent real-world containment waits for approval.

## More Information

- New evidence: [Session 4](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 52:42–1:05:42 (P0233–P0286); [prior proposal (archived session 3)](raw_artifacts/adr-review-history.zip). Earlier S1–S3 citations refer to the preserved source links below.
- Unresolved after session 4: confirm hearing-case initial data, recordability/provisional status, confirmation/release ownership, and when ordinary tasks/notifications begin; see ADR-139.
- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 0:10–3:12 (P0007–P0014); 4:50–12:23 (P0021–P0055); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: high. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Prior review text and evidence: [ADR-120 (archived session 2)](raw_artifacts/adr-review-history.zip). Earlier S1/S2 source links and locators remain in that history; this full replacement carries the continuing decision boundary forward.
- Unresolved: Confirm exact stage labels, return/rejection paths, due dates, absence/delegation rules, and how the actual initial contributor gets access.
- Unresolved: Define release and completion prerequisites for countermeasures; the transcript does not establish closure dependencies or an effectiveness-monitoring schedule.
- Unresolved: Confirm severity-dependent Five Whys requirements using ADR-124 rather than treating one demo minimum as the complete procedure.
- Unresolved: PIT is designed directionally, but broader vehicle/property scope remains subject to ADR-126.
- Related records: ADR-119, ADR-121, ADR-123, ADR-124, ADR-126, ADR-128, ADR-139. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
