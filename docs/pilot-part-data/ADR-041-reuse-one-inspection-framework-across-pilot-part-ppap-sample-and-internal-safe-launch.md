---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Keith Freeman
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Eric McGregor
  - Joel Frick
  - Rick Redmond
primary-application: Shipping, Receiving and Inspection (Pilot Part Data)
secondary-applications:
  - Product Management
  - Production Part Approval Process (PPAP)
  - Internal Safe Launch
---

# ADR-041: Reuse One Inspection Framework Across Pilot Part, PPAP Sample, and Internal Safe Launch

## Context and Problem Statement

Pilot-part inspections, PPAP sample inspections, and internal safe-launch inspections use closely related part characteristics. Reusing the inspection history would improve handover, but simply selecting the latest part revision can cause a safe-launch checklist to appear in a remaining pilot inspection or create conflicts across model changes.

## Decision Drivers

- Create a continuous development-to-production inspection history.
- Avoid maintaining duplicate checklists for the same part characteristics.
- Permit different subsets or measurement methods by inspection purpose.
- Prevent model-change and safe-launch revisions from unintentionally replacing each other.

## Considered Options

### Maintain separate applications and duplicate specifications for each program

Avoids cross-purpose conflicts but creates duplicated authoring and fragmented history.

### Always use the latest part specification regardless of inspection purpose

Is simple but can present the wrong attributes when programs overlap.

### Use one inspection framework with purpose-specific applicability and context filtering

Reuses common attributes while preserving the correct checklist for each inspection type.

## Decision Outcome

Use the same Product Management specification and Shipping, Receiving and Inspection framework for pilot-part, PPAP sample, and internal safe-launch inspections.

Specification attributes may be marked applicable to one or more inspection purposes. When an inspection is created, its purpose, model, drawing, part, and lifecycle context filter the released attributes presented to the inspector. The same attribute may apply to multiple purposes, while purpose-specific attributes remain isolated. Completed records form a continuous inspection history across development, PPAP, and mass-production launch.

## Consequences

### Positive

- Reduces duplicate specification maintenance.
- Supports development-to-production handover.
- Allows each inspection purpose to use a focused checklist.
- Creates comparable history across lifecycle stages.

### Negative

- Applicability and context rules add configuration complexity.
- Overlapping model changes require disciplined keys and revision governance.
- Safe-launch initiation and planning details remain to be designed.

### Follow-up and Constraints

- Define the inspection-purpose taxonomy and attribute applicability model.
- Confirm model/drawing/part keys that prevent revision collisions.
- Define how a pilot specification is handed over and refined for safe launch.
- Confirm whether additional inspection programs can reuse the same framework.

## More Information

- Third transcript: approximately 0:28:09–0:31:49 and 0:47:54–0:52:42.
