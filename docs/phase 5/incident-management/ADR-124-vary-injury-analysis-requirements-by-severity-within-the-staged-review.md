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
- Cause analysis
- Countermeasures
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (0:10–3:12 (P0007–P0014); 43:03–46:20 (P0165–P0174))'
- 'raw_artifacts/meeting_transcripts/workshop-session-1.txt (0:48:44–0:53:14; 1:08:20–1:09:50; 3:57:24–4:00:28)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-124: Vary Injury Analysis Requirements by Severity Within the Staged Review

## Context and Problem Statement

The session 1 draft ties injury analysis requirements to severity, but explicitly refers to an immediate-investigation sequence. Session 3 establishes supervisor initial Five Whys followed by Safety review and manager approval. Its later configuration examples concern environmental incidents; they illustrate optional/required analysis controls without establishing the complete injury requirement matrix. [S1 3:57:24–4:00:28; S3 0:10–3:12; 43:03–46:20.]

## Decision Drivers

- Retain SIA’s severity-dependent investigation expectations and safety review of analysis quality. [S1 3:57:24–4:00:28.]
- Reflect supervisor preparation of the initial Five Whys before Safety finalization. [S3 2:29–3:12.]
- Distinguish generic presence enforcement from the controlled definition and quality of analysis. [S1 3:59:17–4:00:28; S3 44:09–46:20.]

## Considered Options

- Severity-based analysis requirements within the supervisor/Safety/manager sequence.
- Identical investigation depth for all injuries (analyst-derived alternative).
- Use example configuration counts as the complete SIA analysis procedure (analyst-derived alternative).

## Decision Outcome

Chosen option: "Severity-based analysis requirements within the supervisor/Safety/manager sequence", because the severity-based business need continues while the contribution sequence is now clear. Preserve configurable investigation-depth requirements and Safety’s assessment of whether the analysis meets SIA definitions. Align the roles to ADR-120: the supervisor prepares initial Five Whys and temporary proposals; Safety reviews/finalizes the response; the Safety Manager approves the report. Remove the earlier absolute immediate-investigation assumption. [S1 3:57:24–4:00:28; S3 0:10–3:12; 4:50.]

Do not use the environmental moderate/major examples to set an injury severity catalogue or minimum analysis count. They demonstrate optional versus required configuration for that incident type. SIA’s exact injury Five Whys definitions, requirement matrix, and treatment of later severity changes still need confirmation. Severity-driven analysis does not silently bypass the selected injury/PIT review stages. [S3 43:03–46:20; S1 3:59:17–4:00:28.]

## Consequences

- Analysis: the investigation-content rule and the stage-responsibility rule stay coherent without creating separate workflows solely for analysis depth.
- Analysis: configured completeness checks can confirm required entries exist, while reviewers remain responsible for analytical adequacy.

## More Information

- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 0:10–3:12 (P0007–P0014); 43:03–46:20 (P0165–P0174); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: medium. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Prior review text and evidence: [ADR-124 (archived session 1)](raw_artifacts/adr-review-history.zip). Earlier S1/S2 source links and locators remain in that history; this full replacement carries the continuing decision boundary forward.
- Unresolved: Obtain the controlled injury severity definitions, exact Five Whys structure, and requirements by severity.
- Unresolved: Define how reclassification changes required work, completed analyses, notifications, and prior approvals.
- Unresolved: Verify which checks are configuration and which need additional validation; no capability is independently tested here.
- Related records: ADR-120, ADR-121, ADR-123, ADR-130. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
