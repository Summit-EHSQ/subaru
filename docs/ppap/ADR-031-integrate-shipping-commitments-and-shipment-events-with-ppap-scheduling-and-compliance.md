---
status: proposed
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Keith Freeman
  - Brianne Carroll
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Jamie Dossey
  - Joel Frick
  - Rick Redmond
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
  - BOMEX
  - RFQ
  - Shipping and Receiving
---

# ADR-031: Integrate Shipping Commitments and Shipment Events with PPAP Scheduling and Compliance

## Context and Problem Statement

Running-change PPAP due dates are often estimated from incomplete ECS timing, while suppliers separately provide expected shipment timing through RFQ or other logistics processes. A PPAP extension can therefore move the approval date beyond the expected first shipment without the conflict being visible to the quality team. Suppliers must not ship the changed parts before PPAP approval.

## Decision Drivers

- Align PPAP due dates with the best available supplier shipment commitment.
- Alert users when a timing change creates a PPAP-versus-shipment conflict.
- Detect actual shipment of a new ECS level without PPAP approval.
- Reduce manual comparison across disconnected systems.

## Considered Options

### Continue weekly manual comparison across systems

Requires no integration but preserves delayed and error-prone detection.

### Block all ordering or shipping until PPAP approval

Provides strong control but may disrupt required planning and ordering activities.

### Integrate timing and shipment signals and trigger warnings or exception workflows

Improves control while allowing business processes to continue.

## Decision Outcome

Design the PPAP integration boundary to accept shipment-commitment dates and actual shipment or ASN events associated with the ECS, drawing, or part scope.

When a reliable shipment commitment is available, use it to propose a PPAP due date using a configurable lead-time offset. If the commitment changes while PPAP is open, notify the responsible quality users and identify the resulting schedule conflict. When a shipment event is received, compare it with PPAP approval status and trigger an exception alert when parts are shipping without approval.

The exact source systems, event timing, date offsets, and downstream quarantine or blocking behavior remain unresolved. The current decision establishes the integration and exception-control requirement rather than the final mechanics.

## Consequences

### Positive

- Reduces the risk of unapproved changed parts being shipped.
- Makes PPAP timing more realistic.
- Reduces manual cross-system reconciliation.

### Negative

- Depends on reliable identifiers and timely logistics data.
- False alerts may occur when shipment commitments are tentative.
- Operational blocking or quarantine rules require cross-functional agreement.

### Follow-up and Constraints

- Identify the authoritative commitment and shipment-event sources.
- Define the lead-time rule and update behavior.
- Define recipients, escalation, and response actions for conflicts.
- Determine whether the future control is warning-only, blocking, or quarantine-triggering.

## More Information

- Second transcript: approximately 2:59:36–3:10:43.
- Integration mechanics were assigned for further investigation; therefore this ADR remains proposed.
