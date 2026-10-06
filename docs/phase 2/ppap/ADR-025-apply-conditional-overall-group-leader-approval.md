---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Keith Freeman
  - Jamie Dossey
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Brianne Carroll
  - Joel Frick
  - Rick Redmond
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
  - Supplier Relationship Management
---

# ADR-025: Apply Conditional Overall Management Approval to Important-Safety PPAPs

## Context and Problem Statement

Most PPAP elements are reviewed by the responsible engineer. Important-quality or regulated classifications add evidence requirements. The later design discussion clarified that the additional overall management approval is activated for the important-safety classification. Requiring the group leader to approve every individual element would create excessive workload and duplicate the engineer's detailed review.

## Decision Drivers

- Preserve required management oversight for critical parts.
- Avoid element-by-element duplicate approval.
- Automatically activate additional approval based on part classification.
- Ensure the group leader reviews the complete approved package.
- Allow an available authorized approver to act when the engineer's normal group leader is unavailable.
- Keep management-to-engineer comments internal while retaining supplier-visible task feedback.

## Considered Options

### Require group-leader approval on every element

Provides granular oversight but creates significant duplicate work.

### Require no additional approval beyond the engineer

Is efficient but does not meet the stated oversight requirement for critical parts.

### Add a conditional overall PPAP approval stage after all elements are approved

Provides complete-package oversight with less workflow burden.

## Decision Outcome

When the PPAP is associated with the important-safety classification, activate an additional overall PPAP workflow stage for the responsible group leader after all required element workflows are approved. Important-quality or regulated classification changes the default evidence set but does not, by itself, activate this additional approval unless the controlled procedure is revised.

The management review applies to the PPAP as a whole rather than to each element. Non-critical PPAPs proceed to final approval after the responsible engineer has approved all required elements.

For each PPAP type or program that enables final management review, application power users maintain the eligible approver pool. When the responsible engineer submits the completed PPAP, the engineer selects an available approver from that controlled list. Do not depend exclusively on the employee's HR supervisor relationship because absence and workload frequently require another authorized approver.

Lock the approved element data during final review. The approver may approve the PPAP or use an action labelled `Return for More Information`, or equivalent, with a required internal comment. The return moves the PPAP back to its internal `In Progress` stage and sets an internal return indicator; it does not place the PPAP in a supplier-visible `Rejected` stage. Management comments, the return indicator, and the approval exchange remain hidden from suppliers, whose view continues to show the PPAP as pending or in progress.

The engineer may respond with clarification and resubmit without supplier action, or reopen affected elements and provide separate assignee-visible rejection comments. After all reopened elements are approved again, the engineer resubmits the PPAP to an eligible approver. Reporting that distinguishes first-pass approval from returned approval must use the internal return history or indicator in addition to the current workflow stage.

## Consequences

### Positive

- Meets elevated oversight requirements.
- Minimizes repetitive group-leader actions.
- Provides a clear final accountability point for critical PPAPs.
- Avoids exposing internal management-return terminology or feedback to suppliers.

### Negative

- Adds elapsed time for critical PPAPs.
- Requires reliable part-classification data and governance of the eligible approver list.
- Selecting an alternate approver is a controlled human action rather than a fully automatic assignment.
- Approval reporting must interpret the return history because the workflow does not retain a supplier-visible rejected stage.

### Follow-up and Constraints

- Confirm the authoritative criticality classifications.
- Define escalation and reassignment when the selected approver does not act within the target period.
- Confirm whether different PPAP types require different eligible approver pools.

## More Information

- Second transcript: approximately 0:14:55–0:16:28 and 1:18:48–1:26:02.
- PPAP design workshop transcript: approximately 0:25:55–0:29:45.
- PPAP design workshop continuation: approximately 1:35:47–2:06:47.
- This later discussion narrows the trigger recorded in the earlier version of this ADR from important-safety or important-quality to important-safety.
- Phase 2A design workshop day 3: approximately 0:06:20–0:10:52. This discussion replaces `Reject` terminology for the overall approval return with an internal `Return for More Information` action while retaining the `In Progress` stage.
