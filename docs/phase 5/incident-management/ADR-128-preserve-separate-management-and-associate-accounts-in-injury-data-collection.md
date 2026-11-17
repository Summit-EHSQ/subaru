---
status: proposed
date: '2026-11-10'
decision-date: not-recorded-in-transcript
deciders: []
consulted: []
informed: []
primary-application: Incident Management
secondary-applications:
- Clinic
- Safety Management
- AIR
- Job process analysis
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-2.txt (1:23:29–1:25:07; 1:27:37–1:28:24; 1:31:46–1:36:17)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-128: Preserve Separate Management and Associate Accounts in Injury Data Collection

## Context and Problem Statement

The clinic is suggested as a possible owner of all initial data entry to simplify routing. SIA explains why that would change the information being collected: the AIR records the perspective of the management member taking the associate to the clinic, while the clinic gathers the associate’s perspective separately so the associate can speak freely. The assigned supervisor doing corrective actions may be another person. [S2 1:31:46–1:36:17.]

## Decision Drivers

- Preserve the management member’s own account rather than treating it as the associate’s statement. [S2 1:35:26–1:35:52.]
- Allow the clinic to gather the associate’s perspective without the group leader present. [S2 1:35:35–1:36:02.]
- Retain both distinct question sets in the injury process. [S2 1:23:29–1:25:07.]

## Considered Options

- Distinct management and associate contributions linked to the same injury case.
- Have the clinic supply a single combined narrative in place of both contributions (routing simplification discussed and challenged).
- Keep disconnected forms without a common injury relationship (analyst-derived alternative).

## Decision Outcome

Chosen option: "Distinct management and associate contributions linked to the same injury case", because the two contributions represent different perspectives and interviewing contexts. Preserve separately identifiable management/AIR content and clinic-collected associate/job-process-analysis content. An intake description from Security is another source of initial facts and must not be assumed to replace either contribution. [S2 1:23:29–1:25:07; 1:35:26–1:36:17; 0:51:35–0:52:04.]

The management contributor is the person who can provide that account, potentially the member accompanying the associate; do not substitute the clinic’s own account solely to simplify workflow assignment. The clinic can record what is reported, but SIA identifies an interview-and-relay of the manager through the clinic as an undesirable handoff. The exact questions, fields, and technical form/child-record structure require the referenced AIR and job-process-analysis materials. [S2 1:27:37–1:28:24; 1:35:26–1:36:17.]

Distinct perspectives do not establish a selected sequential workflow or a finalized confidentiality rule between contributors. Routing remains under ADR-121, and visibility under ADR-122. [S2 1:24:45–1:28:42; 1:29:06–1:31:28.]

## Consequences

- Analysis: distinct source attribution reduces the risk of presenting a relayed or management account as the associate’s own statement.
- Analysis: one digital case still needs more than one contribution area and appropriate authorship/context metadata; the exact implementation is not selected.
- Analysis: separate interview context does not automatically enforce separate viewing permissions in the application.

## More Information

- Evidence: [Session 2](raw_artifacts/meeting_transcripts/workshop-session-2.txt), 1:23:29–1:25:07; 1:27:37–1:28:24; 1:31:46–1:36:17.
- Evidence nature: explicit information-provenance boundary. Confidence: high.
- New proposal, not approval or implementation evidence. This cited source segment ends for lunch; later workshop evidence is reflected in the related consolidated ADRs.
- Unresolved: Obtain and map the actual question sets; confirm which form content represents whose statement.
- Unresolved: Confirm whether separate sections or related contribution records best fit the selected workflow without manufacturing product object names.
- Unresolved: Define who enters, confirms, corrects, and can view each contribution and how corrections preserve source attribution.
- Unresolved: Resolve the initial contributor versus assigned supervisor handoff with ADR-121.
- Related records: ADR-119, ADR-120, ADR-121, ADR-122, ADR-123. Resolve each ID through the [reconciliation plan](consolidation-plan.md), which identifies its current proposal or retained source.
