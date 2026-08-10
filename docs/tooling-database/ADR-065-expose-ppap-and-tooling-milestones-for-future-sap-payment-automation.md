---
status: proposed
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders: []
consulted:
- Brianne Carroll
- Vijay Akella
- Keith Freeman
- Dave McLean
informed:
- Joel Frick
- Rick Redmond
primary-application: Tooling Database
secondary-applications:
- Production Part Approval Process (PPAP)
- SAP
---

# ADR-065: Expose PPAP and Tooling Milestones for Future SAP Payment Automation

## Context and Problem Statement

Tooling payments are currently supported by manual confirmation of PPAP approval and other tooling milestones. SIA is considering a tiered payment model in which different percentages are received or paid when PPAP approval, tooling transfer, or other milestones occur. No outbound Intelex-to-SAP integration is currently included in scope.

## Decision Drivers

- Reduce manual milestone verification.
- Tie financial release to governed workflow events.
- Support tiered tooling payments.
- Avoid committing to an interface before SAP requirements are known.

## Considered Options

### Continue manual email confirmation

Requires no new integration but preserves delay and weak traceability.

### Build the SAP interface immediately from incomplete requirements

Could accelerate automation but risks rework.

### Define a future outbound milestone-event contract after the SAP process is agreed

Preserves the architectural boundary without premature implementation.

## Decision Outcome

Propose exposing governed Intelex milestone events for a future outbound SAP integration. Candidate events include PPAP approval, tooling transfer, and other agreed tooling states. The outbound message would include the stable source record identifier, milestone, status, timestamp, and any keys required by SAP.

Do not implement the interface until the SAP team and business owners define the tiered payment process, event criteria, and receiving endpoint. Treat this as additional scope unless it is formally incorporated into the project.

## Consequences

### Positive

- Creates a clear future automation boundary.
- Uses governed workflow state rather than manual lookup.
- Supports traceable tiered payments.

### Negative

- Requirements and scope are not yet defined.
- Financial integration demands strong error and reconciliation controls.
- Milestone changes after transmission may require compensating logic.

### Follow-up and Constraints

- Complete the SAP process-design discussion.
- Define events, keys, percentages, reversals, and error handling.
- Confirm licensing, security, scope, and delivery ownership.

## More Information

- Fourth transcript: approximately 1:01:02–1:11:34.
