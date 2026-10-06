---
status: superseded by ADR-098
date: 2026-09-29
decision-date: not-recorded-in-transcript
deciders:
  - Keith Freeman
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Shipping, Receiving and Inspection (Pilot Part Data)
secondary-applications:
  - Product Management
  - Supplier Relationship Management
  - Production Part Approval Process (PPAP)
---

# ADR-042: Route Inspection Ownership Through Part-Level Development and Production Assignments

## Context and Problem Statement

Supplier-level ownership is usually sufficient to identify the responsible engineer, but development work may be divided among multiple engineers for different part families from the same supplier. Inspection-specification updates and inspection requests therefore need a more precise routing context and a controlled handover from new-model engineering to SQA.

## Decision Drivers

- Route ECS and inspection work to the responsible engineer.
- Default assignments without preventing part-specific exceptions.
- Support development-to-mass-production handover.
- Avoid recalculating historical assignments whenever supplier ownership changes.
- Support workload balancing below the supplier level.
- Reuse part ownership for other part-scoped workflows where technically appropriate.

## Considered Options

### Route all work solely from the supplier-level engineer

Is easy to maintain but fails when multiple development engineers share one supplier.

### Select an engineer manually on every transaction

Is flexible but repetitive and error-prone.

### Maintain editable part-level development and production ownership with supplier defaults

Balances defaulting, exceptions, and lifecycle handover.

## Decision Outcome

This proposed approach is superseded by ADR-098. The later design does not use separate QC New Model and SQA part assignments as the primary routing mechanism for pilot work.

Pilot responsibility is established through the PPAP or pilot-program engineer and through explicit inspection-team and inspector assignment. New-model versus mass-production is treated as a visibility classification governed by ADR-084 rather than as a routing assignment.

Part-level ownership may still be reconsidered for other applications, but it is no longer the selected Pilot Part Data architecture.

## Consequences

### Positive

- Removes a large assignment dataset from the Pilot Part Data dependency chain.
- Separates workflow responsibility from record visibility.
- Makes each assignment explicit in the operational record.

### Negative

- Other applications may still require a governed part-owner concept.
- First-time or unassigned PPAP records require fallback assignment logic.

### Follow-up and Constraints

- See ADR-098 for current pilot-program initiation and ownership.
- See ADR-099 for receipt, team-lead, and inspector assignment.
- See ADR-084 for new-model and mass-production visibility.

## More Information

- Third transcript: approximately 0:31:49–0:34:21. The structural direction was supported, but the detailed ownership and handover model remains open.
- Subsequent supplier workflow transcript: approximately 1:21:44–1:33:16.
- Product Management and Pilot Part Data design transcript: approximately 2:24:26–2:35:51, 4:22:34–4:35:47, and 6:41:46–6:42:16.
