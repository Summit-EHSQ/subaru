---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
- Jamie Dossey
consulted:
- Dave McLean
- Shao Ngoi
informed:
- Keith Freeman
- Brianne Carroll
- Joel Frick
- Rick Redmond
primary-application: Process Change Requests (PCR)
secondary-applications:
- Production Part Approval Process (PPAP)
- Supplier Portal
- Management of Change
---

# ADR-032: Use Supplier-Initiated PCR with Context-Specific Concept Outcomes

## Context and Problem Statement

A Process Change Request covers a supplier-proposed change that requires review before implementation. Most manufacturing-process changes require PPAP, but the expanded PCR scope may also include depot or pickup-location changes that have no effect on the manufacturing process and therefore do not require quality validation. The concept-stage wording must not imply shipment authorization when PPAP is still required.

## Decision Drivers

- Preserve supplier accountability for requesting changes.
- Separate clarification and concept acceptance from authorization to ship.
- Allow logistics-only changes to close without unnecessary PPAP.
- Route manufacturing or quality-impacting changes through validation.

## Considered Options

### Require PPAP for every accepted PCR

Is simple but over-processes depot or logistics changes with no quality impact.

### Allow unrestricted approval without PPAP

Is flexible but risks suppliers treating concept approval as authorization to ship.

### Use rule-driven outcomes based on change impact

Preserves control while permitting no-PPAP outcomes where justified.

## Decision Outcome

PCR records are initiated by authorized supplier users. The concept workflow provides the following outcomes:

- **Reject:** close the request; a materially different request requires a new submission.
- **Request More Information:** return the request for clarification and resubmission.
- **Proceed to PPAP or other validation:** authorize the supplier to perform the required validation work; this does not authorize shipment.
- **Approve the non-quality change without PPAP:** close the request after all required cross-functional approvals when governed rules establish that no manufacturing or quality validation is required.

The system must label outcomes so that concept acceptance cannot be mistaken for production approval.

## Consequences

### Positive

- Supports the actual variation in PCR and depot-change scenarios.
- Avoids unnecessary PPAP for purely logistical changes.
- Maintains supplier ownership and clear resubmission paths.

### Negative

- Business rules must reliably distinguish quality-impacting and logistics-only changes.
- More outcome paths increase training and workflow complexity.
- Incorrect classification could bypass required validation.

### Follow-up and Constraints

- Define the governed conditions for no-PPAP closure.
- Define supplier-facing terminology for each outcome.
- Define data transfer to PPAP when validation is required.

## More Information

- Second transcript: approximately 2:01:27–2:13:59.
- Fourth transcript: approximately 1:35:17–1:44:47.
- This revision removes the earlier universal requirement that every accepted PCR proceed to PPAP.
