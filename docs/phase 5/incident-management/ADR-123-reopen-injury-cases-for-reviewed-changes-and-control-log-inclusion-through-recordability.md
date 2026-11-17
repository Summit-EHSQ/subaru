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
- Clinic
- Safety Management
- OSHA reporting
- OHM
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (48:23–52:21 (P0200–P0230); 58:00–1:00:10 (P0247–P0251))'
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (1:50–2:29 (P0009–P0010); 8:38–12:23 (P0030–P0055))'
- 'raw_artifacts/meeting_transcripts/workshop-session-2.txt (0:29:06–0:30:33; 1:24:19–1:28:24; 1:35:26–1:36:17)'
- 'raw_artifacts/meeting_transcripts/workshop-session-1.txt (prior decision evidence; see linked session 1 text)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-123: Reopen Injury Cases for Reviewed Changes and Control Log Inclusion Through Recordability

## Context and Problem Statement

Session 3 permits clinical entry during Safety review and reopening closed cases for later changes. Session 4 adds a concrete example: a previously recordable case later becomes non-work-related. Participants accept changing recordability so it leaves the current log rather than reproducing OHM redline display. The session also describes closed cases as read-only until reopened and reapproved. [S3 1:50; 8:38–12:23; S4 48:23–52:21; 58:00–1:00:10.]

## Decision Drivers

- Correct a case’s reporting classification when later information changes the conclusion. [S4 50:10–52:21; 58:19.]
- Avoid counting a case after it is no longer classified as recordable. [S4 50:29–51:19.]
- Review edits before returning a reopened case to read-only closure. [S4 58:19–1:00:10.]

## Considered Options

- Reviewed reopening with explicit recordability controlling current-log inclusion.
- Reproduce OHM-style strike-through entries as a mandatory report feature (discussed, not required after clarification).
- Cancel a record but leave recordability unchanged and assume it stops counting (shown to be insufficient in the discussion).

## Decision Outcome

Chosen option: "Reviewed reopening with explicit recordability controlling current-log inclusion", because the group accepts removal from the current log when the case is changed to non-recordable, without requiring a visual redline. Do not rely on cancellation alone to control regulatory-log counts. Preserve the case and its revision history requirements; removing it from a report is distinct from deleting or archiving its underlying record. [S4 49:01–52:21; preservation detail is analysis.]

Keep clinic stewardship of clinical conclusions and clinical contribution during Safety-owned review. For a closed injury requiring changed treatment, work-relatedness, or classification, reopen into the investigation/Safety-review part of the defined flow, make the permitted changes, and resubmit to the Safety Manager before read-only closure. The source calls the reopened step investigation; align that label with the Safety-review stage from session 3 rather than inventing a second lifecycle. [S3 1:50; 11:43–12:23; S4 58:19–1:00:10.]

Current log data can evolve while an already issued annual-summary PDF remains the preserved artifact under ADR-138. The hearing-conservation discussion asks whether recordability needs an undecided/TBD state; it does not select that state or redefine the legal timing of recordability. Keep that subtype’s entry/confirmation rules open under ADR-139. [S4 10:49–12:37; 26:23–27:17; 1:00:10–1:05:42.]

## Consequences

- Analysis: clinical corrections can change current reporting without automatically creating a duplicate injury.
- Analysis: read-only closure and controlled reopening require clear permissions and attributable changes.
- Analysis: historical summaries and current logs can intentionally differ, so they must be distinguishable in reporting.

## More Information

- Evidence: [Session 4 extraction](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 48:23–52:21 (P0200–P0230); 58:00–1:00:10 (P0247–P0251); [source DOCX](raw_artifacts/meeting_transcripts/workshop-session-4.docx). Recording header dated 4 November 2026; this review prepared 12 November 2026.
- Confidence: high. Status is proposed; discussion is not formal approval, implementation, or verified product/regulatory evidence.
- Prior proposal and earlier source evidence: [ADR-123 (archived session 3)](raw_artifacts/adr-review-history.zip). Preserve its ID/date; earlier review files remain history.
- Unresolved: Define reopen authority, reasons, change history, report regeneration, and notifications/reapproval.
- Unresolved: Define cancellation/archive/retention policy; the presenter’s archive explanation is not a selected destructive-retention design.
- Unresolved: Confirm placeholder versus no/yes/TBD recordability for hearing cases and the approved clinical procedure.
- Unresolved: Retain unresolved OHM ownership/flow, clinic-system agreement, and repeat-report merge/append/counting rules.
- Related records: ADR-064, ADR-120, ADR-121, ADR-122, ADR-137, ADR-138, ADR-139. Resolve the latest review text through the [current ADR index](README.md).
