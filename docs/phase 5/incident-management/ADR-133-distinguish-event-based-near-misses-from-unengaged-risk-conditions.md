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
- Near-miss reporting
- Safety Management
- Manufacturing Way
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (1:13:06–1:17:52 (P0287–P0312); 1:21:40–1:24:11 (P0329–P0346); 1:28:47–1:33:25 (P0357–P0360))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-133: Distinguish Event-Based Near Misses from Unengaged Risk Conditions

## Context and Problem Statement

Early examples treat a dangling energized cable as a possible near miss. Later, with additional participation, the session distinguishes that unengaged condition from an actual near-miss event: slipping and catching oneself without injury is a near miss; merely having a wet floor or live cable with nobody engaging with it is a risk condition. [S3 1:15:24–1:15:53; 1:28:47.]

## Decision Drivers

- Correct inconsistent internal use of near-miss terminology. [S3 1:13:06–1:14:12.]
- Distinguish a recorded event from a standing risk condition. [S3 1:28:47.]
- Keep actual injury reporting distinct from almost having a worse injury. [S3 1:13:30–1:14:12; 1:16:54–1:17:35.]

## Considered Options

- Event-based near-miss classification distinct from unengaged risk conditions.
- Treat every hazardous condition as a near miss (earlier debated example).
- Classify an actual injury as a near miss because a worse outcome was avoided (explicitly challenged).

## Decision Outcome

Chosen option: "Event-based near-miss classification distinct from unengaged risk conditions", because the later discussion explicitly corrects the earlier cable example. An event with an avoided injury, such as slipping but catching oneself without injury, can be a near miss. A hazardous condition with no engagement/event remains a risk condition. An actual injury does not become an injury near miss merely because it could have been more severe. [S3 1:13:30–1:17:35; 1:28:47.]

Manufacturing Way’s safety-concerns list is identified as an existing route for risk conditions. This does not select the platform for all true near misses: Intelex versus Manufacturing Way remains open. Mixed-impact cases, such as property damage with an avoided injury, require clear potential-outcome categorization; the workshop does not finish those rules or approve multiple linked near-miss records as the standard. [S3 1:21:40–1:25:59; 1:28:47.]

## Consequences

- Analysis: an event-based distinction improves comparability and helps avoid mixing unresolved hazards with avoided incidents.
- Analysis: reporting guidance must explain the distinction using practical examples; examples alone do not determine every mixed-outcome case.
- Analysis: useful information need not be rejected solely because the reporter initially chooses the wrong category; correction is part of the review approach.

## More Information

- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 1:13:06–1:17:52 (P0287–P0312); 1:21:40–1:24:11 (P0329–P0346); 1:28:47–1:33:25 (P0357–P0360); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: high for event distinction; medium for mixed outcomes. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Unresolved: Confirm controlled definitions and handling of actual property damage plus avoided injury or environmental harm.
- Unresolved: Resolve single category, multiple potential outcomes, or linked near-miss records; those remain alternatives.
- Unresolved: Select the host and the relationship to the existing safety-concerns list before changing operational reporting procedures.
- Related records: ADR-091, ADR-134, ADR-135, ADR-136. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
