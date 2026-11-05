---
status: accepted
date: 2026-09-02
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
  - Keith Freeman
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Supplier Portal
  - Intelex Platform Workflow
---

# ADR-050: Use Staged Supplier Responses with Independent Approvals, Drafts, and Rejection History

## Context and Problem Statement

Containment is needed sooner than root cause and corrective action, so each response component requires its own due date and approval. Suppliers should not be blocked from beginning later analysis while containment is under review. The NCR is also the primary collaboration tool for routine rejections, making rejection comments and history essential.

## Decision Drivers

- Track supplier timeliness by response component.
- Obtain containment quickly without delaying root cause work.
- Support repeated approve/reject loops.
- Allow work in progress without premature submission.
- Preserve complete rejection reasons and communication history.

## Considered Options

### Use one final approval for the entire supplier response

Is simple but loses interim containment control and component due dates.

### Use strictly serial stages that hide later sections until approval

Enforces sequence but unnecessarily blocks supplier work.

### Use component approvals that can run while the supplier works on later sections

Preserves timing control and collaborative flexibility.

## Decision Outcome

Configure typed supplier-response child forms for containment and subsequent corrective-action responses, with independent due dates and supplier-submission timestamps. These forms collect prescribed information and are not standard internal Action Plan records; Intelex does not task-manage the supplier's internal problem-solving team. Required fields must be complete before a component is submitted, but suppliers may save drafts and continue working on visible later sections.

Submitting a component activates its SIA approval while the supplier retains responsibility for the parent NCR and may continue other required work. Rejection records a required reason in an append-only history and returns the relevant response for revision without erasing prior submissions. Approval of one component does not imply approval of the others.

For required root-cause work, create one root-cause-analysis container holding the required methods or external evidence. The initial configuration may pre-create Five Whys and optionally Fishbone or Timeline placeholders. Route the complete container through one approval rather than approving each method separately.

## Consequences

### Positive

- Supports rapid containment and deeper later analysis.
- Provides accurate SLA and scorecard data.
- Makes routine NCR collaboration traceable.
- Allows supplier work to continue while approvals are pending.

### Negative

- Overlapping supplier work and approval loops require careful state management.
- Users may need clear indicators of which components are approved, rejected, or draft.
- Portal form complexity increases.

### Follow-up and Constraints

- Define response components by risk tier.
- Define due-date rules and supplier-submission timestamps.
- Define rollback behavior and immutable rejection history.
- Define what later content remains editable after an earlier component is approved.

## More Information

- Third transcript: approximately 1:40:41–1:48:48 and 1:50:37–1:56:59.
- Supplier NCR and warranty workflow transcript: approximately 1:07:29–1:48:57.
