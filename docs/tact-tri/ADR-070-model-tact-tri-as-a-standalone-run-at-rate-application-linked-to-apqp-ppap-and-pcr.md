---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
- Keith Freeman
consulted:
- Dave McLean
informed:
- Brianne Carroll
- Joel Frick
- Rick Redmond
primary-application: TACT-TRI
secondary-applications:
- Advanced Product Quality Planning (APQP)
- Production Part Approval Process (PPAP)
- Process Change Requests (PCR)
- Supplier Relationship Management
---

# ADR-070: Model TACT-TRI as a Standalone Run-at-Rate Application Linked to APQP, PPAP, and PCR

## Context and Problem Statement

TACT-TRI validates that a supplier can achieve the awarded production rate. The current process relies on Excel. It may be required during new-model APQP or after a PCR such as a facility move, and multiple preliminary or full attempts may be needed before passing.

## Decision Drivers

- Replace spreadsheet-only execution with structured records.
- Preserve every failed and successful attempt.
- Link the activity to the requirement that triggered it.
- Support later app-builder ownership without weakening APQP traceability.

## Considered Options

### Keep TACT-TRI as an APQP attachment

Is simple but loses attempt-level data and workflow.

### Embed all run-at-rate fields directly in APQP or PPAP

Creates tight coupling and cannot support standalone or repeated use.

### Build a standalone TACT-TRI app linked to APQP, PPAP, or PCR

Supports repeated execution and reusable relationships.

## Decision Outcome

Implement TACT-TRI as a standalone custom application with structured run-at-rate data, supplier and part context, preliminary versus full stage, planned rate, observed rate, result, evidence, and approval.

Allow multiple attempt records until the requirement is satisfied. A TACT-TRI may be initiated from APQP, PPAP, PCR, or another authorized context. The originating APQP task or PPAP element remains open until the required TACT-TRI stage has an accepted result. Phase Two may initially use a generic task and attachment, but its data model must permit the later linked application.

## Consequences

### Positive

- Preserves repeated attempt history.
- Supports use across new-model and change scenarios.
- Allows APQP and PPAP to retain requirement-level reporting.

### Negative

- The custom app and integrations arrive later than initial APQP.
- Trigger and completion rules require detailed design.
- May require custom-app licensing and internal builder capacity.

### Follow-up and Constraints

- Confirm process ownership, fields, stages, and approvals.
- Define trigger and completion rules from APQP, PPAP, and PCR.
- Define migration from spreadsheet evidence.
- Confirm custom-app licensing and build responsibility.

## More Information

- Fourth transcript: approximately 2:06:38–2:19:57.
