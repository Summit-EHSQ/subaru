---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Keith Freeman
  - Brianne Carroll
consulted:
  - Dave McLean
  - Shao Ngoi
  - Luke Filippo
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Advanced Product Quality Planning (APQP)
secondary-applications:
  - Supplier Portal
---

# ADR-013: Maintain SIA Baseline, Supplier Current Plan, and Actual Progress Separately

## Context and Problem Statement

The APQP workbook distinguishes the schedule SIA requires, the schedule the supplier currently plans, and the supplier's actual progress. Earlier tooling did not preserve all three views, which created duplicate work and made schedule variance difficult to identify. Overwriting a single date set would hide whether a supplier's plan differs from SIA expectations.

## Decision Drivers

- Preserve SIA's required timing independently of supplier commitments.
- Allow suppliers to maintain a current realistic plan.
- Measure actual progress and completion against both plans.
- Identify schedule variance without manually comparing spreadsheets.
- Support plan-level and management-level reporting.

## Considered Options

### Use one editable schedule

Is simple but loses the distinction between requirement, commitment, and actual result.

### Keep full version history of every supplier plan revision

Provides detailed traceability but adds complexity not identified as necessary.

### Store three schedule dimensions and alert on variance from the baseline

Preserves the essential distinctions with manageable complexity.

## Decision Outcome

For each APQP task, store:

1. **SIA baseline plan** — the dates generated from the governed template and master milestones. Suppliers cannot edit these dates.
2. **Supplier current plan** — the supplier's current planned dates.
3. **Actual progress or completion** — the task's realized status and actual dates.

Generate a visual indicator and/or notification when the supplier current plan falls outside the SIA baseline. A complete history of every supplier plan revision is not required at this stage, although standard record audit history may still apply.

## Consequences

### Positive

- Creates clear schedule variance and accountability.
- Supports dashboards showing tasks or APQPs behind the SIA plan.
- Allows suppliers to update their realistic plan without altering SIA requirements.

### Negative

- Forms and reports must clearly distinguish three date sets.
- Notification volume could become high if variance rules are not tuned.
- Limited plan-revision history may reduce detailed analysis of repeated replanning.

### Follow-up and Constraints

- Define whether each schedule uses start and end dates, milestones, or both.
- Define variance thresholds and required supplier explanation.
- Choose notification recipients and channel.
- Define how recalculated SIA baselines affect existing supplier-plan variance.

## More Information

- Transcript discussion: approximately 2:17:35–2:24:59.
