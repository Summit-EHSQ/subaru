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
- Resolver
- Security intake
- Environmental Management
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (1:03:20–1:08:36 (P0240–P0260))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-129: Enter EHS Reports Directly in Intelex and Retain Resolver for Other Security Work

## Context and Problem Statement

Environmental integration with Resolver is raised from the original assumptions. SIA explains that Security will now enter spill/hazmat/EHS reports directly in Intelex, so a connecting interface is not currently needed. Resolver continues to serve other Security uses. [S3 1:03:20–1:08:36.]

## Decision Drivers

- Keep EHS information in Intelex at its point of entry rather than relying on Resolver to supply it. [S3 1:04:02–1:05:02.]
- Avoid an unnecessary custom integration and duplicate EHS entry. [S3 1:04:27.]
- Avoid expanding the present EHS phase into all Security functions. [S3 1:05:21–1:06:13.]

## Considered Options

- Direct EHS entry in Intelex with Resolver retained for other Security work.
- Keep EHS intake in Resolver and build an interface (earlier assumption).
- Replace all Resolver processes in the current phase (discussed future possibility, not selected).

## Decision Outcome

Chosen option: "Direct EHS entry in Intelex with Resolver retained for other Security work", because SIA explicitly says the previously contemplated connection is not currently required under direct EHS intake. Park the Resolver interface for this phase rather than treating it as an implementation dependency. Retain Resolver for the other Security activities described in the workshop; a later replacement would require its own business/scope decision. [S3 1:04:02–1:08:36.]

Provide intake guidance distinguishing EHS reports entered in Intelex from work remaining in Resolver. The session reports existing management controls but does not supply their rules. The claim that a connector would be custom is workshop rationale, not an independently verified product capability statement. [S3 1:04:27; 1:07:17–1:08:20.]

## Consequences

- Analysis: EHS processing no longer depends on an upstream Resolver feed.
- Analysis: two systems remain in operation, making clear process boundaries important.
- Analysis: removing the current interface need does not establish data migration, decommissioning, or cancellation of other integration obligations.

## More Information

- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 1:03:20–1:08:36 (P0240–P0260); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: high. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Unresolved: Confirm the operating guide and exact boundary for ambiguous parking-lot, vehicle, or non-EHS calls.
- Unresolved: Confirm any contractual scope adjustment; the SOW itself was not supplied.
- Unresolved: Revisit integration only if intake ownership changes; this decision does not resolve OHM.
- Related records: ADR-064, ADR-119, ADR-126. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
