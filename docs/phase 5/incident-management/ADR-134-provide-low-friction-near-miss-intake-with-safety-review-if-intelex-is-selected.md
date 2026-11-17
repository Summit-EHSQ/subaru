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
- Employee access
- Notifications
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (1:11:12–1:11:54 (P0277–P0280); 1:25:59–1:28:47 (P0353–P0357); 1:35:21–1:49:33 (P0366–P0427))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-134: Provide Low-Friction Near-Miss Intake with Safety Review if Intelex Is Selected

## Context and Problem Statement

SIA has not selected Intelex versus another Manufacturing Way application for near misses. The workshop explores an Intelex path with QR access, simple fact capture, partial reports accepted over no report, and Safety review for all categories. Authenticated, guest, and anonymous access are debated without a final selection. [S3 1:11:12–1:11:54; 1:25:59; 1:35:21–1:49:33.]

## Decision Drivers

- Avoid login difficulty and excessive mandatory fields suppressing useful reports. [S3 1:35:34–1:36:52; 1:44:37–1:47:37.]
- Have reported near misses reviewed rather than ignored. [S3 1:26:49–1:28:47; 1:39:53–1:42:41.]
- Use supervisor context where it helps without making the process cumbersome. [S3 1:41:42–1:43:37.]

## Considered Options

- If Intelex is chosen, direct simple reporting to a Safety review path with optional/contextual supervisor involvement.
- Require near-miss callers to go through Security (questioned, then distinguished from the desired direct path).
- Use Manufacturing Way for near-miss intake (host alternative still open).

## Decision Outcome

Chosen option: "If Intelex is chosen, direct simple reporting to a Safety review path with optional/contextual supervisor involvement", because this is the directional workflow discussed while the host remains undecided. Propose direct form/QR access rather than requiring Security intake. Capture facts such as where/when/what almost happened, actions taken if any, and suggested prevention. Favor accepting incomplete reports over demanding extensive classification before submission. Suggested measures are input for review, not automatic approved action assignments. [S3 1:35:21–1:40:55.]

All categories route to Safety for evaluation in the later discussion, including environmental and PIT near misses; this takes precedence over the earlier demonstration’s category-specific reviewer suggestion. Safety may correct category/severity and decide on analysis or countermeasures before closing. Where the reporter is known, supervisor notification/contextual input is desired, but a mandatory supervisor approval stage is not finalized. [S3 1:26:49; 1:39:41–1:43:37.]

Do not claim a deployed public/anonymous form or an authentication exception to ADR-061. The workshop describes public forms as additional/out-of-scope configuration, while participants prefer identity if it does not inhibit reporting and also explore anonymous/guest entry. Those alternatives, their scope, and routing of unidentified reports remain unresolved. No unauthenticated reporting endpoint is authorized by this draft alone. [S3 1:41:15–1:49:33.]

## Consequences

- Analysis: direct, minimal reporting can increase coverage while producing entries that need review and correction.
- Analysis: a common Safety queue reduces dependence on reporters making perfect category decisions.
- Analysis: anonymous entry limits follow-up and supervisor resolution, while authenticated entry introduces a sign-in step; the tradeoff needs a decision.

## More Information

- Evidence: [Session 3 extraction](raw_artifacts/meeting_transcripts/workshop-session-3.txt), 1:11:12–1:11:54 (P0277–P0280); 1:25:59–1:28:47 (P0353–P0357); 1:35:21–1:49:33 (P0366–P0427); [original source DOCX](raw_artifacts/meeting_transcripts/workshop-session-3.docx). The recording header is dated 4 November 2026; drafting/revision date is 12 November 2026.
- Confidence: medium. Status is proposed; no formal approval, configured capability, deployment, or verified contractual change is claimed.
- Unresolved: Select Intelex versus Manufacturing Way and confirm the proposed path with the process owner.
- Unresolved: Resolve authentication/anonymity, any guest route, scope, identity visibility, supervisor lookup, and public-form protections if such a route is chosen.
- Unresolved: Define minimum fields, category/severity wording, default ownership, partial-report behavior, and supervisor contribution expectations.
- Unresolved: Resolve multi-outcome classification and optional linking under ADR-133; no mandatory Five Whys depth is set for every near miss.
- Related records: ADR-061, ADR-091, ADR-122, ADR-133, ADR-135, ADR-136. Resolve the latest proposed/retained version through the [reconciliation plan](consolidation-plan.md).
