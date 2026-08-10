---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Brianne Carroll
  - Keith Freeman
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

# ADR-017: Treat Native Recurring APQP Tasks as Optional and Prioritize Dependency Scheduling

## Context and Problem Statement

Some current APQP-related activities are requested monthly, but the future live-update model may reduce the need for fixed recurring submissions. The workshop explicitly prioritized task dependencies and date calculations over native recurrence. Tracking a redundant submission event would add work without necessarily adding value.

## Decision Drivers

- Concentrate build effort on the capabilities that previously blocked adoption.
- Avoid duplicate tracking when the underlying information is already maintained live.
- Retain a fallback for a small number of genuinely repeated activities.

## Considered Options

### Implement native recurring supplier tasks as a mandatory APQP capability

Provides automation but adds complexity and was not considered essential.

### Exclude all repeated activities from APQP

Simplifies the model but may not cover legitimate repeated obligations.

### Treat recurrence as optional and model repeated instances explicitly when needed

Preserves capability without displacing higher-priority scheduling work.

## Decision Outcome

Prioritize dependency management, milestone-based date calculation, and schedule variance over native recurring-task automation within APQP.

Where a repeated APQP activity is truly required and native recurrence is not implemented, include multiple explicit task instances in the APQP template. Activities that are already captured through live supplier updates should not also create recurring submission tasks solely to prove that an update occurred.

## Consequences

### Positive

- Protects scope for the capabilities most important to adoption.
- Avoids duplicate supplier effort.
- Provides a simple fallback for limited recurring needs.

### Negative

- Explicit repeated tasks make templates longer.
- Changing recurrence frequency requires a template change.
- Some future use cases may justify native recurrence.

### Follow-up and Constraints

- Identify the small set of APQP activities that genuinely require repeated instances.
- Revisit native recurrence only if repeated-template tasks become materially difficult to manage.

## More Information

- Transcript discussion: approximately 2:43:48–2:48:10.
