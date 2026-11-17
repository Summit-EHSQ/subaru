---
status: proposed
date: '2026-07-25'
revision-date: '2026-11-10'
decision-date: not-recorded-in-transcript
deciders: []
consulted: []
informed: []
primary-application: Incident Management
secondary-applications:
- OHM
- Employee Management
- Clinic
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-2.txt (0:03:46–0:04:01)'
- 'raw_artifacts/meeting_transcripts/workshop-session-1.txt (3:44:10–3:53:32)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-064: Defer OHM Flow Selection and Correlate Individual Injuries

## Context and Problem Statement

Session 2 explicitly leaves the OHM integration as a parking-lot item: the exchanged data and how it enters Intelex are still undefined. This confirms the unresolved direction below; it does not select a new payload, source, transport, cadence, or clinic-entry agreement. [Session 2, 0:03:46–0:04:01.]

Unless explicitly labelled Session 2, timestamp citations in this retained revision refer to the session 1 transcript linked below.

The existing proposed ADR-064 assumes inbound OHM data remains necessary and can create or update the first injury report and start investigation. Session 1 revisits that assumption: clinic entry directly in Intelex, inbound OHM updates, and outbound reports or data extraction are all discussed. Clinic leadership agreement and the needed data points are still pending. The current OHM feed is described as four times daily; an API is not demonstrated to change that timing. [Session 1, 3:44:10–3:51:49.]

The session also distinguishes a master event from its individual injury records. A master identifier alone cannot select which injured person's case an update belongs to. [3:48:22–3:49:18; 3:52:19–3:53:32.]

## Decision Drivers

- Start investigation promptly rather than depending on delayed external initiation. [3:45:05–3:45:33; 3:53:40–3:54:50.]
- Identify the data points actually needed from the clinic before deciding the exchange design. [3:46:28–3:47:53.]
- Establish the unique identifier that ties injury information together. [3:48:22–3:49:18.]
- Obtain clinic leadership agreement for direct entry and any return report. [3:48:03–3:48:16; 3:50:32–3:51:49.]

## Considered Options

- Retain OHM entry and bring selected clinical updates into Intelex.
- Enter relevant clinical information directly in Intelex and provide a clinic-oriented report for their other system.
- Exchange selected data through an API where its purpose and ownership are confirmed; direction and payload remain open.

These are discussed directions, not an approved interface specification. Secure-flat-file transport exists in the earlier draft but is not selected anew by session 1.

## Decision Outcome

Chosen option: "Defer the clinical exchange direction while requiring individual-injury correlation", because the necessary data and clinic entry model remain unresolved, while the distinction between the master and each injury is explicit. Proceed with the intake and investigation direction in the revised ADR-119 and ADR-120, subject to their reopened routing questions, independently of selecting the OHM data flow. Do not treat Resolver-based automatic initiation, mandatory inbound OHM synchronization, or migration of the clinic's entire medical system as confirmed scope. [3:44:10–3:51:49.]

If an inbound update is used, it must identify the specific Intelex injury record. For example, a master numbered 27 with injury records 30 and 32 requires the update to identify 30 or 32, not just 27. Define how the OHM case identifier and Intelex injury identifier are associated before implementing updates. The exact key format, storage, and exchange mapping remain open. [3:48:22–3:49:18; 3:52:19–3:53:32.]

Outbound reporting or API extraction remains a separate requirement to specify; it is not evidence that inbound OHM data must also be implemented. Do not commit to real-time exchange or a new frequency from this session. [3:45:43–3:46:17; 3:50:32–3:52:15.]

## Consequences

- Analysis: the application can be designed around individual injury identity without committing prematurely to one clinical source or transport.
- Analysis: direct clinic entry may remove some inbound-data needs but may retain duplicate entry into OHM; the discussed report assists transcription rather than proving full automation.
- Analysis: field ownership, update ordering, privacy boundaries, and treatment of later changes must be explicit before any two-system exchange is built.
- Analysis: unresolved clinic agreement is a dependency for the direct-entry operating model, not grounds to claim that the existing integration has been cancelled.

## More Information

- New evidence: [Session 2 transcript](raw_artifacts/meeting_transcripts/workshop-session-2.txt), 0:03:46–0:04:01. The earlier direction is reaffirmed as unresolved.
- Revision lineage: [session 1 ADR-064 proposal (archived session 1)](raw_artifacts/adr-review-history.zip); earlier versions are preserved in the history archive. No new ID or supersession is allocated.
- Evidence: [Session 1 transcript](raw_artifacts/meeting_transcripts/workshop-session-1.txt), 3:44:10–3:53:32. Confidence: high that flow selection remains unresolved and injury-level correlation is required.
- This is the consolidated proposed ADR-064; earlier proposal text is archived and no supersession or approval is implied. Its original draft date is preserved. Its earlier citation, Fourth transcript 0:44:49–0:51:38, was not supplied here and is not independently verified.
- Unresolved: clinic leadership confirmation; data inventory; authoritative source per field; inbound/outbound scope; reporting versus API needs; identifier crosswalk; missing/duplicate match behavior; schedule; retry and reconciliation behavior; access and medical-data boundaries.
- Unresolved: how changes in work-relatedness, injury classification, recordability, or event association affect workflow, reporting, and already approved records. These are workshop examples of evolving data, not regulatory rules established by this ADR.
- Related records: ADR-118, ADR-119, ADR-120, ADR-123. Separate care/case-management adoption remains a needs-clarification candidate.
