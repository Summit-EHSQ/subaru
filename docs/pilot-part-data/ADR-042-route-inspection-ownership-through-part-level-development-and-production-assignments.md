---
status: proposed
date: 2026-07-25
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

## Considered Options

### Route all work solely from the supplier-level engineer

Is easy to maintain but fails when multiple development engineers share one supplier.

### Select an engineer manually on every transaction

Is flexible but repetitive and error-prone.

### Maintain editable part-level development and production ownership with supplier defaults

Balances defaulting, exceptions, and lifecycle handover.

## Decision Outcome

Propose maintaining separate QC New Model and SQA ownership relationships on the part context. New parts default from the relevant supplier ownership, after which authorized users may adjust the part assignment for interior/exterior, model, or other responsibility splits.

Workflow routing will use the part-level assignment when present. Default-source changes will not silently overwrite an explicit part assignment. Handover may populate or activate the SQA assignment while preserving the development owner history.

## Consequences

### Positive

- Improves routing accuracy.
- Supports shared supplier portfolios and model-specific responsibility.
- Provides an explicit handover mechanism.

### Negative

- Introduces another assignment dataset to govern.
- Part-level maintenance may be significant for large part populations.
- The handover event and overwrite rules are not yet fully defined.

### Follow-up and Constraints

- Confirm authoritative part data and assignment maintenance screens.
- Define defaulting, override, and inheritance rules.
- Define the handover trigger and historical assignment retention.
- Validate routing feasibility and reporting performance.

## More Information

- Third transcript: approximately 0:31:49–0:34:21. The structural direction was supported, but the detailed ownership and handover model remains open.
