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

# ADR-025: Apply Conditional Overall Group-Leader Approval

## Context and Problem Statement

Most PPAP elements are reviewed by the responsible engineer. Important safety or important quality parts require an additional management review. Requiring the group leader to approve every individual element would create excessive workload and duplicate the engineer's detailed review.

## Decision Drivers

- Preserve required management oversight for critical parts.
- Avoid element-by-element duplicate approval.
- Automatically activate additional approval based on part classification.
- Ensure the group leader reviews the complete approved package.

## Considered Options

### Require group-leader approval on every element

Provides granular oversight but creates significant duplicate work.

### Require no additional approval beyond the engineer

Is efficient but does not meet the stated oversight requirement for critical parts.

### Add a conditional overall PPAP approval stage after all elements are approved

Provides complete-package oversight with less workflow burden.

## Decision Outcome

When the PPAP is associated with an important safety or important quality classification, activate an additional overall PPAP workflow stage for the responsible group leader after all required element workflows are approved.

The group-leader review applies to the PPAP as a whole rather than to each element. Non-critical PPAPs proceed to final approval after the responsible engineer has approved all required elements.

## Consequences

### Positive

- Meets elevated oversight requirements.
- Minimizes repetitive group-leader actions.
- Provides a clear final accountability point for critical PPAPs.

### Negative

- Adds elapsed time for critical PPAPs.
- Requires reliable part-classification data and group-leader assignment.
- A missing group leader could block completion.

### Follow-up and Constraints

- Confirm the authoritative criticality classifications.
- Define whether the responsible engineer performs a final readiness action before group-leader routing.
- Define delegation and escalation when the group leader is unavailable.

## More Information

- Second transcript: approximately 0:14:55–0:16:28 and 1:18:48–1:26:02.
