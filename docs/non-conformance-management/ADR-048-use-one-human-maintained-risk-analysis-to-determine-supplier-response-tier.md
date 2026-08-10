---
status: accepted
date: 2026-07-25
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
  - Supplier Scorecard
---

# ADR-048: Use One Human-Maintained Risk Analysis to Determine Supplier Response Tier

## Context and Problem Statement

Supplier-quality uses a four-question weighted risk analysis to select the required response level. The assessment includes trained judgment about responsibility, vehicle impact, reporting area, and recurrence. Additional occurrences may change the inputs and response tier. Automatically deriving all inputs from counts or fields would oversimplify the decision.

## Decision Drivers

- Retain the established risk model and thresholds.
- Apply the correct supplier response depth.
- Allow engineers to escalate or de-escalate based on judgment.
- Reassess risk as new occurrences or evidence arrive.

## Considered Options

### Derive risk automatically from occurrence counts and defect fields

Reduces work but cannot account for the required engineering judgment.

### Create a new risk assessment for every occurrence

Preserves event-level scoring but creates conflicting response tiers for one problem.

### Maintain one revisable risk analysis on the NCR

Supports one governing response tier while preserving informed updates.

## Decision Outcome

Each supplier NCR will have one governing risk analysis using the established four inputs, weights, and thresholds. Authorized associates complete the initial assessment; responsible engineers may revise it when new evidence or occurrences change the evaluation.

The calculated result selects Quick Feedback, Containment, or PRC response requirements. Inputs are not automatically changed solely because an occurrence is added. Every revision is dated and attributable. If the response tier changes after supplier release, the system updates the required response content and notifies the supplier; implementation may require a controlled reset or migration of incompatible response data.

## Consequences

### Positive

- Preserves the proven SQA risk model.
- Combines consistency with human judgment.
- Allows response requirements to evolve with the case.

### Negative

- Training and review remain necessary.
- Risk changes may invalidate or reset supplier-entered data.
- Tier-change migration logic can be complex.

### Follow-up and Constraints

- Confirm risk inputs, values, weights, and thresholds.
- Define who may change risk after supplier submission.
- Define audit history and supplier notification.
- Define data-retention behavior when response tiers change.

## More Information

- Third transcript: approximately 1:29:34–1:40:41.
