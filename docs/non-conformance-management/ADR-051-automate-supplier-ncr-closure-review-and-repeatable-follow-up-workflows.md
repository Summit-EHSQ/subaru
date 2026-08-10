---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Keith Freeman
  - Joel Frick
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Intelex Platform Workflow
  - Supplier Portal
---

# ADR-051: Automate Supplier NCR Closure Review and Repeatable Follow-Up Workflows

## Context and Problem Statement

High-tier supplier NCRs require engineer review, group-leader closure approval, and sometimes later verification. The current process requires an extra manual request for group-leader approval, provides weak visibility when closure is rejected, and depends on engineers remembering to schedule follow-ups required by certain source types.

## Decision Drivers

- Remove unnecessary manual routing clicks.
- Prevent closure while required responses, tasks, returns, or containment remain open.
- Make group-leader rejection visible and actionable.
- Automatically satisfy procedure-driven follow-up timing.
- Allow repeated effectiveness checks when validation fails.

## Considered Options

### Keep manual closure-request and follow-up setup

Matches current behavior but preserves missed handoffs and monitoring gaps.

### Close automatically when all supplier responses are approved

Is efficient but removes required management oversight and effectiveness validation.

### Use automated prerequisite checks, closure routing, and generated follow-ups

Preserves governance while reducing manual orchestration.

## Decision Outcome

When all required supplier response components and related closure prerequisites are complete, the system will automatically activate group-leader closure review where required. A rejection returns the NCR to the responsible engineer with a visible workflow status, rejection reason, and dashboard item.

If the NCR source, type, or governing procedure requires follow-up, the system creates the appropriate follow-up or effectiveness-check record with its target date rather than relying on manual recognition. Failed or inconclusive checks may generate another follow-up. Final closure occurs only when no further follow-up is required.

## Consequences

### Positive

- Reduces missed closure and follow-up work.
- Improves visibility of management rejection.
- Supports repeatable effectiveness verification.
- Removes an unnecessary manual routing step.

### Negative

- Business rules for closure prerequisites and follow-up intervals must be precise.
- Automated follow-up generation can create excess work if source data is incorrect.
- Long-running follow-up states require clear reporting.

### Follow-up and Constraints

- Define closure prerequisites by response tier and subtype.
- Define group-leader assignment and escalation.
- Define follow-up triggers, intervals, evidence, and repeat rules.
- Define status terminology for pending follow-up versus closed.

## More Information

- Third transcript: approximately 1:57:07–2:03:26.
