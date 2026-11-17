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
- Clinic
- Hearing conservation
- Safety Management
- OSHA reporting
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (52:42–1:05:42 (P0233–P0286))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-139: Provide a Clinic-Led Hearing-Conservation Variant with Deferred Investigation Release

## Context and Problem Statement

Monthly hearing testing can produce a provisional hearing-shift case before retesting confirms the outcome. SIA describes the current placeholder practice without an AIR/investigation until confirmation, then explicitly says this would not begin with a 2222 call. Future clinical applications are discussed, but participants insist the near-term process cannot rely on an unplanned clinical-system replacement. [S4 52:42–1:05:42.]

## Decision Drivers

- Represent recurring test-originated hearing cases that do not start as a floor incident call. [S4 1:01:20–1:03:46.]
- Avoid assigning the ordinary response before the relevant confirmation point. [S4 1:03:19–1:03:46.]
- Provide an interim solution without depending on future care/case-management or occupational-health adoption. [S4 1:04:00–1:05:17.]

## Considered Options

- A clearly identified clinic-led hearing-conservation variant with provisional handling and defined later release.
- Force every hearing test placeholder through Security and ordinary investigation immediately (incompatible with the described process).
- Wait for a future clinical application before supporting these cases (challenged in the session).

## Decision Outcome

Chosen option: "A clearly identified clinic-led hearing-conservation variant with provisional handling and defined later release", because the workshop identifies clinic initiation and distinguishes the hearing placeholder from ordinary incident intake. Propose using the injury/illness framework with explicit hearing-conservation context, clinic-led creation, and no automatic ordinary supervisor-investigation assignments before the agreed confirmation point. This is a working direction, not a completed subtype/workflow specification. [S4 1:03:19–1:05:42.]

Do not equate undecided recordability with a confirmed No. A yes/no/TBD representation is requested but not selected. The current practice is described as placing an initial case on the log while awaiting retest; legal timing, the future recordability state, and the exact release trigger remain disputed or deferred. No seven-day/30-day rule is adopted by this ADR. [S4 52:42–57:38; 1:00:10–1:00:33.]

Allow no initial treatment where that accurately describes the case, but do not invent required medical data before it is known. Obtain the clinical procedure and data list to define what constitutes a valid provisional record and how it becomes an investigated case. Reopening/reapproval of an already closed case remains under ADR-123; that alone does not solve the initial placeholder lifecycle. [S4 58:00–1:05:42.]

Keep future clinical application adoption and OHM integration separate. The session explicitly parks further discussion rather than approving a new occupational-health application or a completed production configuration. [S4 1:04:00–1:05:42.]

## Consequences

- Analysis: a specific provisional state/path can avoid triggering inappropriate ordinary work while preserving the reported clinical context.
- Analysis: placeholder creation, report inclusion, and investigation release become separate design events that need explicit ownership.
- Analysis: the variant needs its own required-field and permission rules; ordinary Security defaults cannot be applied blindly.

## More Information

- Evidence: [Session 4 extraction](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 52:42–1:05:42 (P0233–P0286); [source DOCX](raw_artifacts/meeting_transcripts/workshop-session-4.docx). Recording header dated 4 November 2026; this review prepared 12 November 2026.
- Confidence: medium. Status is proposed; discussion is not formal approval, implementation, or verified product/regulatory evidence.
- Unresolved: Confirm clinical procedure and regulatory interpretation with the clinic/process owner before setting timing or recordability defaults.
- Unresolved: Define provisional state, retest/outcome evidence, yes/no/undecided semantics, report inclusion, assignment release, cancellation/correction, and audit history.
- Unresolved: Confirm clinic entry permissions, minimum data, required treatment fields, and downstream supervisor/Safety flow.
- Unresolved: Confirm whether the interim variant is approved scope and how it will coexist with any later clinical system.
- Related records: ADR-064, ADR-119, ADR-120, ADR-121, ADR-122, ADR-123, ADR-127, ADR-137, ADR-138. Resolve the latest review text through the [current ADR index](README.md).
