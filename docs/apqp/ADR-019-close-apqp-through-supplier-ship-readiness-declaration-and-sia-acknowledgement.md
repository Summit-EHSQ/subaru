---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Keith Freeman
consulted:
  - Dave McLean
  - Shao Ngoi
  - Brianne Carroll
  - Luke Filippo
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Advanced Product Quality Planning (APQP)
secondary-applications:
  - Supplier Portal
---

# ADR-019: Close APQP Through Supplier Ship-Readiness Declaration and SIA Acknowledgement

## Context and Problem Statement

The APQP does not require a separate, detached final approval after all tasks are complete. The current process culminates in a supplier decision or declaration that the required criteria are complete and the part is ready to proceed toward mass-production shipment. SIA reviews and acknowledges that declaration.

## Decision Drivers

- Align system closure with the existing operational decision point.
- Retain supplier accountability for declaring readiness.
- Record SIA review and confirmation.
- Avoid adding an unnecessary approval layer beyond the final APQP activity.

## Considered Options

### Automatically close when all child tasks are marked complete

Is simple but omits the supplier readiness declaration and SIA confirmation.

### Add a separate APQP final-approval workflow after all tasks

Provides formal control but duplicates the existing final readiness step.

### Use the ship-readiness task as the closing decision and record SIA acknowledgement

Matches the established process.

## Decision Outcome

Use the final ship-readiness or equivalent APQP task as the closing decision point. The supplier declares that required criteria are complete and that the part is ready to proceed. SIA reviews the declaration, records an acknowledgement, and confirms the result to the supplier.

The APQP parent record closes after the acknowledgement is completed and required child tasks satisfy the configured closure conditions.

## Consequences

### Positive

- Aligns system closure with the real operational milestone.
- Records both supplier declaration and SIA acknowledgement.
- Provides a clear transition to final readiness, line fill, and SOP activity.

### Negative

- Closure depends on accurately defining prerequisite tasks and exceptions.
- An acknowledgement is not the same as SIA taking ownership of the supplier's declaration.

### Follow-up and Constraints

- Define the exact readiness checklist and closure conditions.
- Define who may issue the supplier declaration and who may acknowledge it for SIA.
- Define reopen and exception handling when issues are discovered after acknowledgement.

## More Information

- Transcript discussion: approximately 2:48:18–2:51:39.
