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
  - Supplier Relationship Management
---

# ADR-011: Use One Standard APQP Process with Risk-Based 12-Step Oversight

## Context and Problem Statement

All suppliers and parts are managed through APQP, but selected high-risk supplier-part combinations receive enhanced 12-step oversight. The distinction primarily changes review frequency, cross-functional attention, and milestone management rather than replacing APQP with a different process.

## Decision Drivers

- Maintain one coherent APQP data model.
- Apply stronger governance where risk warrants it.
- Allow risk to consider both supplier history and the specific part, commodity, plant, or change.
- Avoid duplicating the APQP task model for high-risk work.

## Considered Options

### Create separate standard and 12-step APQP applications

Provides isolation but duplicates data, workflow, and reporting.

### Use one APQP with no risk-based variation

Is simple but cannot represent enhanced oversight requirements.

### Use one APQP model and apply risk-based oversight rules

Keeps one architecture while varying cadence and governance.

## Decision Outcome

Use the same APQP parent and task structure for all supplier-item or supplier-drawing combinations. Mark an APQP for 12-step or enhanced oversight when risk criteria require it.

The 12-step designation will influence management cadence, review frequency, notifications, and cross-functional oversight. It will not create a separate APQP application or duplicate the base task architecture.

## Consequences

### Positive

- Preserves consistent data and reporting across all APQPs.
- Allows risk rules to evolve without maintaining two process architectures.
- Supports monthly or otherwise enhanced review for high-risk development.

### Negative

- Risk rules and oversight rules introduce conditional automation.
- Users must clearly see when enhanced oversight applies and why.

### Follow-up and Constraints

- Define the exact effects of a 12-step designation on meetings, approvals, dashboards, and notifications.
- Clarify whether any APQP tasks become mandatory only under enhanced oversight.
- Confirm how manual risk concerns are recorded and approved.

## More Information

- Transcript discussion: approximately 1:58:59–2:01:19 and 2:05:32–2:13:41.
