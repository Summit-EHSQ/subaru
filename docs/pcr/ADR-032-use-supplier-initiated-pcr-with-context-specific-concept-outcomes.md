---
status: accepted
date: '2026-10-16'
decision-date: not-recorded-in-transcript
deciders:
- Luke Phillippo
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

Expose one PCR initiation action and one supplier-facing entry form regardless of which internal reviews or downstream validation processes apply. The supplier does not select between a Phase 2 request, a Phase 3 MOC process, or a depot-change process. Internal classification and workflow rules determine the applicable path. If internal review requires more information, return the existing request to the supplier through its clarification and revision cycle rather than requiring a new process initiation.

ADR-033 defines the minimum supplier-entry data and the governed classification inputs used by this form.

The Phase 2 increment implements supplier intake, clarification, rejection, and **Proceed to PPAP** under SQA ownership. Phase 3 expands the same PCR record and workflow with Supplier Management intake and cross-functional outcomes. The no-PPAP and broader context-specific outcomes in this ADR apply to the expanded workflow unless separately approved for the transition increment. ADR-105's proposal for a distinct PPAP-adjacent supplier request is rejected.

## Consequences

### Positive

- Supports the actual variation in PCR and depot-change scenarios.
- Avoids unnecessary PPAP for purely logistical changes.
- Maintains supplier ownership and clear resubmission paths.
- Keeps the supplier entry point stable while internal processing expands.

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
- PPAP design workshop continuation: approximately 3:02:25–3:17:56. This earlier discussion established a narrower transition increment and led to the application boundary proposed in ADR-105; the latest PCR review rejected that boundary without replacing the target outcome model.
- Latest PCR architecture transcript: approximately 00:00–16:40. This discussion established one stable supplier entry point and one PCR lifecycle across the Phase 2 and Phase 3 increments, replacing the separate request boundary proposed in ADR-105.
