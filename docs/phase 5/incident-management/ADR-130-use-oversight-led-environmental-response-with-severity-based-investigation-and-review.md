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
- Environmental Management
- Incident oversight
- Notifications
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (13:46–16:22 (P0058–P0074); 25:22–47:40 (P0100–P0178); 48:20–52:42 (P0181–P0208))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-130: Use Oversight-Led Environmental Response with Severity-Based Investigation and Review

## Context and Problem Statement

Environmental incidents use a different flow from injury/PIT. Security dispatches the on-site response/oversight team and cleanup contractor. Oversight supervises cleanup, records the response, and assesses whether Environmental escalation is needed. Environmental performs review for routine cases and more substantial investigation for severe ones. [S3 13:46–16:22; 25:22–43:57.]

## Decision Drivers

- Keep cleanup oversight and field assessment with the on-site team. [S3 16:10–16:22; 25:41–29:47.]
- Bring Environmental in promptly for serious conditions, including information discovered on site. [S3 30:08–39:39.]
- Require cause analysis and manager review where severity warrants them, without imposing that burden on every routine spill. [S3 40:05–47:40.]
- Retain the response effort even when no active spill remains. [S3 51:08–52:42.]

## Considered Options

- Oversight assessment, Environmental review/investigation by severity, and conditional Environmental Manager approval.
- Copy the injury supervisor/Safety flow unchanged (opening comparison, not selected).
- Require full cause analysis and manager approval for every spill (analyst-derived alternative).

## Decision Outcome

Chosen option: "Oversight assessment, Environmental review/investigation by severity, and conditional Environmental Manager approval", because session 3 distinguishes routine cleanup review from higher-severity investigation. After Security intake and dispatch, the on-site oversight team supervises cleanup, documents it, and assesses the material, location, scale, and need to escalate. Environmental can support a serious response immediately while oversight retains the initial task. [S3 13:46–16:22; 25:22–39:39.]

Routine/minor or moderate reports pass to Environmental for summary/review and closure. At major or higher severity in the discussed scheme, Environmental owns cause/Five Whys analysis, root-cause and countermeasure work with the affected section, then submits to the Environmental Manager for final review and closure. The final manager step is conditional; it is not required for every routine case. Configure analysis requirements by severity where the demonstrated mechanism fits. Exact labels, full criteria, and minimum counts require confirmation against business definitions. [S3 40:05–47:40.]

Initial assessment is provisional and can change after field observation. The discussion treats outside spills as at least moderate and storm-drain exposure as a major concern; these are SIA working assessment rules, not legal reporting thresholds. Environmental evaluates external reportability; no automatic agency submission, legal formula, or actual notification integration is selected. [S3 26:55–39:15.]

For a response where a spill is gone, resolved, or apparently a false call, the final direction is to document the response, allow Environmental to see/review it, and close it rather than discard the time spent. Earlier cancellation/category-change suggestions do not establish a universal environmental deletion/cancellation rule. [S3 48:20–52:42.]

## Consequences

- Analysis: field assessment can trigger additional Environmental work without making every cleanup a full investigation.
- Analysis: provisional severity changes can alter required data and final approval routing, so the system needs an explicit transition rule.
- Analysis: retaining reports of apparently resolved/false calls supports response workload history.

## More Information

- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 13:46–16:22 (P0058–P0074); 25:22–47:40 (P0100–P0178); 48:20–52:42 (P0181–P0208); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: high. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Unresolved: Obtain the environmental field list, controlled severity definitions, escalation questions, and required investigation content.
- Unresolved: Confirm exact closure actors for routine cases and manager return/rejection handling for severe cases.
- Unresolved: Define initial unknown answers, severity changes, required analysis presence, and affected-section participation.
- Unresolved: Define agency-reportability evidence fields and responsibility without copying NCR-to-CAR scoring rules into spill escalation.
- Unresolved: Confirm whether any remaining cancellation category is needed; no destructive deletion is approved.
- Related records: ADR-091, ADR-096, ADR-119, ADR-127, ADR-131, ADR-132. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
