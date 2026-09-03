---
status: accepted
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Eric McGregor
consulted:
- Joel Frick
informed:
- Emma Lister
- Rick Redmond
primary-application: Corrective Action Management
secondary-applications:
- Action Plan Management
- Non-Conformance Management
- Audit Management
- Notifications
---

# ADR-090: Gate Internal CAR Actions on Plan Approval and Separate Implementation from Effectiveness Verification

## Context and Problem Statement

Actions entered while preparing a CAR are proposals that may change during review. Releasing them immediately would notify owners before approval and require tasks to be recalled. Urgent containment may also be completed before the CAR is entered. After approved actions are completed, evidence that the plan was implemented is not necessarily evidence that it solved the original problem, particularly when effectiveness can only be measured months later.

## Decision Drivers

- Prevent premature action assignments and contradictory notifications.
- Review the complete proposed plan before release.
- Record urgent work without delaying the real-world response.
- Verify both plan execution and actual effectiveness.
- Keep long-term checks off active task lists until action is required.
- Retain auditable review comments and evidence.

## Considered Options

### Release every action when it is saved and close when all actions complete

Uses ordinary action behavior but does not govern proposed work or prove effectiveness.

### Release only containment actions immediately based on action type

Supports urgency but assumes action classification and release urgency are always equivalent.

### Hold proposed actions for plan approval, support completed-at-creation actions, and use separate implementation and effectiveness reviews

Preserves governance without making Intelex a prerequisite for urgent response.

## Decision Outcome

Create proposed CAR actions with a disabled start. The CAR originator or designated reviewer may make minor corrections, approve the plan, or reject it with comments. Plan approval releases all still-pending actions to their individual owners and returns the CAR to its accountable owner for implementation oversight.

Allow an action to be marked already completed during plan preparation. Require its actual completion date and completion notes, then create it in the completed state so urgent containment performed before data entry remains visible in the complete plan.

After all approved actions are complete, route the CAR for implementation verification. The reviewer confirms that the approved work was performed and that objective evidence is present, or rejects the execution with comments.

When implementation is accepted, require a conscious effectiveness decision:

- if effectiveness can be verified immediately, record how it was verified before closure; or
- if a future check is required, select a responsible person and due date or governed interval.

Suspend a future effectiveness task so it does not remain on the active task list. Reactivate it at the configured lead time through a recurring date comparison and notify the responsible person. Record the result and evidence before final closure. An ineffective or inconclusive result may return the CAR for revision or generate another effectiveness check.

## Consequences

### Positive

- Only approved proposed work is assigned.
- Immediate real-world containment is not blocked by system entry.
- Reviewers see completed and planned work together.
- Completion evidence and effectiveness evidence remain distinct.
- Long-running verification does not create persistent task-list noise.

### Negative

- Action records require inactive, completed-at-creation, and activated states.
- Suspended-workflow reactivation adds automation complexity.
- Business areas may require different intervals or multiple checks.
- Reviewer edits require an auditable change history.

### Follow-up and Constraints

- Define plan-review service expectations and escalation.
- Configure effectiveness intervals and advance-reactivation periods by process type.
- Define the revision path when implementation or effectiveness is rejected.
- Confirm whether any use case requires an explicit immediate-release flag in addition to completed-at-creation handling.
- Confirm quality-specific 30/60/90-day or multiple-review rules in the deferred QC design session.

## More Information

- Subsequent non-conformance design transcript: approximately 2:31:15–2:50:40.
- ADR-051 retains the supplier-NCR-specific closure and follow-up model. This ADR governs the separate internal CAR lifecycle.
