---
status: proposed
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Eric McGregor
consulted:
  - Dave McLean
  - Shao Ngoi
  - Keith Freeman
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Shipping, Receiving and Inspection (Pilot Part Data)
secondary-applications:
  - Internal Safe Launch
  - Inspections
---

# ADR-044: Use Inspection Plans and Frequency Targets Instead of Pre-Creating Scheduled Inspections

## Context and Problem Statement

Safe-launch and similar programs define how many inspections should occur by shift or period, but users typically create an inspection when the activity occurs. Intelex scheduling can mean pre-creating individual records, which requires users to locate and complete the correct scheduled instance and can create adoption problems.

## Decision Drivers

- Report what should have occurred compared with what was completed.
- Allow inspectors to create records naturally at the time of work.
- Support frequency targets by shift, day, week, or other period.
- Avoid orphaned or duplicate pre-created inspection records.

## Considered Options

### Pre-create every scheduled inspection instance

Provides explicit expected records but creates a burdensome user interaction and duplicate risk.

### Allow only ad hoc inspections with no plan object

Is simple for inspectors but cannot report target-to-actual performance.

### Create an inspection plan with period and frequency targets

Separates planning from execution while retaining compliance reporting.

## Decision Outcome

Propose creating inspection-plan records that define the applicable part, inspection purpose, effective period, shift or location context, and required frequency or quantity. Inspectors create individual inspection records when work is performed, and reporting compares completed inspections with the plan target.

The plan should not automatically create appointment-like inspection records unless a specific process later demonstrates that this is necessary.

## Consequences

### Positive

- Aligns the product with how inspections are performed.
- Supports target-to-actual reporting.
- Reduces orphaned scheduled records and user confusion.

### Negative

- Requires custom plan-to-actual calculations.
- The approach must be reconciled with other inspection requirements already discussed.
- Exact recurrence and exception behavior remains undefined.

### Follow-up and Constraints

- Review the pattern with the broader inspection-design stakeholders.
- Define plan periods, shift rules, targets, and calculation behavior.
- Determine whether any inspection types genuinely require pre-created records.

## More Information

- Third transcript: approximately 0:52:42–0:56:49. The concept was supported but explicitly required follow-up with earlier inspection stakeholders.
