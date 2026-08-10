---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Keith Freeman
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Eric McGregor
  - Joel Frick
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Supplier Portal
  - Corrective Action Management
---

# ADR-046: Model Supplier NCR as One End-to-End Record with Integrated Investigation and Corrective Action

## Context and Problem Statement

The Intelex baseline separates a simple NCR problem record from an optional Corrective Action Request investigation. The current supplier-quality process treats the problem and its progressive response as one continuous record, with response depth varying by risk. Splitting the investigation into a separate CAR would create an unnatural handoff and complicate supplier collaboration.

## Decision Drivers

- Match the established supplier-quality operating model.
- Preserve one coherent supplier-facing record.
- Allow response depth to vary without creating disconnected cases.
- Keep problem history, evidence, approvals, and follow-up together.

## Considered Options

### Use the baseline NCR and launch a separate CAR when investigation is needed

Uses standard objects but fragments the supplier experience and case history.

### Use only a CAR record and omit the NCR layer

Centers the investigation but weakens initial problem and occurrence tracking.

### Extend supplier NCR to include investigation and corrective-action stages

Matches the current process and preserves one end-to-end case.

## Decision Outcome

Configure supplier NCR as the governing parent record from initial problem intake through final closure. The record includes occurrence history, risk analysis, supplier response requirements, containment, root cause, corrective action, evidence, internal approvals, tasks, returns, and follow-up or effectiveness checks as applicable.

Corrective-action capabilities may be implemented through sections, child records, or workflow components, but they remain part of the supplier NCR lifecycle rather than requiring a separate user-facing CAR case.

## Consequences

### Positive

- Provides one complete audit trail.
- Reduces navigation and duplicate data entry.
- Supports risk-based response within a consistent supplier experience.

### Negative

- Creates a more complex NCR configuration than the product baseline.
- Large records require careful form, performance, and permission design.
- Shared components must still support distinct supplier NCR subtypes.

### Follow-up and Constraints

- Map current IntelliQuest features to the target NCR object model.
- Define which components are fields, child records, or workflow instances.
- Confirm retention and attachment-volume requirements.
- Validate portal permissions at every stage.

## More Information

- Third transcript: approximately 1:17:33–1:19:11 and 2:03:31–2:10:32.
