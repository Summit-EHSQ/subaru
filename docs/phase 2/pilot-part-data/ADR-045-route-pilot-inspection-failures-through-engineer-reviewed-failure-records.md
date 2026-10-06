---
status: accepted
date: 2026-09-29
decision-date: not-recorded-in-transcript
deciders:
  - Keith Freeman
  - Luke Filippo
  - Joel Frick
  - Dave McLean
consulted:
  - Shao Ngoi
informed:
  - Emma Lister
  - Rick Redmond
primary-application: Shipping, Receiving and Inspection (Pilot Part Data)
secondary-applications:
  - Non-Conformance Management
  - Supplier Portal
  - Internal Safe Launch
---

# ADR-045: Route Pilot Inspection Failures Through Engineer-Reviewed Failure Records

## Context and Problem Statement

Pilot-part failures must not be resolved only through email because their history is valuable during later production-quality work. However, automatically issuing a full supplier NCR for every failed attribute is disproportionate and can expose an unvalidated finding. The responsible engineer first determines whether the discrepancy is valid, whether supplier action is required, and how the affected parts will be dispositioned.

## Decision Drivers

- Preserve traceability from failed inspection responses to resolution.
- Prevent unvalidated internal findings from being exposed to suppliers.
- Group repeated failures representing the same condition.
- Support use-as-is, rework, and replacement dispositions.
- Reinspect replacement or reworked parts through the same governed process.
- Keep pilot failures reportable with supplier non-conformances without forcing the full production workflow.

## Considered Options

### Resolve failures through email

Matches current practice but loses structured history and production handover value.

### Create and release a full supplier NCR for every failed response

Provides formal control but creates duplicate records and bypasses engineering validation.

### Create an engineer-reviewed pilot failure record using the shared supplier-issue framework

Preserves history while allowing proportionate review, disposition, and supplier escalation.

## Decision Outcome

Create a pilot inspection failure record when one or more failed responses require disposition. An inspection cannot be completed while a failed response lacks a related failure record. One failure record may cover multiple responses when they represent the same condition.

Route the failure first to the engineer responsible for the PPAP or pilot program. The engineer may close it internally or release it to the supplier with the required response depth. Record the disposition as use-as-is, rework, replacement, or another governed option.

When replacement parts are required, the supplier response must initiate a new pilot shipment linked to the failure and the same build event. The replacement units pass through receipt, assignment, and inspection again. The supplier cannot see the failure until it reaches the supplier-response stage.

## Consequences

### Positive

- Eliminates email-only failure handling.
- Preserves pre-production history for later mass-production users.
- Avoids duplicate records for repeated instances of one condition.
- Creates a closed-loop replacement and verification process.

### Negative

- Adds review and disposition steps to failed inspections.
- Requires rules for grouping responses and selecting supplier-response depth.
- Increases structured failure volume compared with current practice.

### Follow-up and Constraints

- Define failure grouping, disposition, and supplier-response fields.
- Define when root cause and corrective action are mandatory.
- Align the subtype with the shared supplier-issue base from ADR-054.
- Ensure ADR-049 and workflow-state security prevent premature supplier access.

## More Information

- Earlier inspection-design transcript: approximately 0:56:49–1:02:06.
- Product Management and Pilot Part Data design transcript: approximately 5:00:11–5:19:15 and 6:21:46–6:23:23.
- PPAP design workshop continuation: approximately 2:58:13–2:59:32.
