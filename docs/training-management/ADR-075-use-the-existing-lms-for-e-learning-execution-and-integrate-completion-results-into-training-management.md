---
status: proposed
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders: []
consulted:
- Eric McGregor
- Dave McLean
- Andrea Turner
informed:
- Brianne Carroll
- Joel Frick
- Rick Redmond
primary-application: Training Management
secondary-applications:
- SAP SuccessFactors Learning
- Document Control
- Employee Management
---

# ADR-075: Use the Existing LMS for E-Learning Execution and Integrate Completion Results into Training Management

## Context and Problem Statement

SIA already runs compliance and safety e-learning in its LMS. Intelex can host and play SCORM packages, but a package executed in Intelex does not automatically update the existing LMS, and a package executed in the LMS does not automatically update Intelex. SIA wants one consolidated training picture without maintaining duplicate completion records.

## Decision Drivers

- Preserve the established LMS for e-learning delivery.
- Avoid duplicate SCORM packages and completion records.
- Use Intelex for document acknowledgements, classroom, and other training records.
- Provide a consolidated training view.

## Considered Options

### Move all SCORM packages into Intelex

Creates Intelex completion records but duplicates or replaces established LMS operations and consumes storage.

### Keep both systems independent

Avoids integration but prevents a consolidated record.

### Execute e-learning in the LMS and integrate completion results into Intelex

Preserves the LMS while allowing Intelex Training Management to aggregate the broader record.

## Decision Outcome

Propose retaining the existing LMS as the execution system for SCORM-based e-learning. Build an inbound completion interface to Intelex Training Management for the courses and populations that must appear in the consolidated training record.

Use Intelex directly for training activities that originate there, including controlled-document read acknowledgements and other configured classroom or task-based training. Do not assume SCORM itself synchronizes records between systems; the completion feed is a separate integration and scope item.

## Consequences

### Positive

- Avoids duplicating established e-learning delivery.
- Supports a broader consolidated training record.
- Reduces duplicate completion entry.

### Negative

- The integration is not currently confirmed in scope.
- Course, person, version, and completion matching require governance.
- Two systems remain authoritative for different training modes.

### Follow-up and Constraints

- Review the active Training Management design with the project team.
- Confirm the target source of truth and integration scope.
- Define course and employee keys, completion fields, refresh timing, and corrections.
- Assess storage only for content intentionally executed in Intelex.

## More Information

- Fourth transcript: approximately 2:55:41–3:01:17.
