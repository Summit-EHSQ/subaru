---
status: accepted
date: 2026-09-02
decision-date: not-recorded-in-transcript
deciders:
  - Dave McLean
  - Joel Frick
consulted: []
informed:
  - Keith Freeman
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Supplier Portal
  - Supplier Relationship Management
---

# ADR-093: Model RMA as a Disposition-Linked Child Workflow

## Context and Problem Statement

Some supplier-NCR disposition types require a Return Material Authorization, but the RMA and disposition are not always created in the same sequence. Third-party sort activity can also require supplier instructions before the quantity of defective material is known. Embedding all return data in the disposition or using RMA as a general sort-instruction record would not support both cases cleanly.

## Decision Drivers

- Enforce RMA requirements for applicable disposition types.
- Allow either the disposition or RMA to be created first.
- Reconcile return quantities and avoid orphaned records.
- Support supplier response and later internal processing.
- Distinguish return authorization from third-party sort instructions.

## Considered Options

### Embed RMA fields directly in each disposition

Simplifies navigation but does not support an RMA created before its disposition.

### Keep RMA and disposition independent

Supports either creation order but permits missing and mismatched relationships.

### Use a separate RMA child workflow linked to disposition

Supports independent staging while retaining validation and traceability.

### Use RMA for both returns and all third-party sort instructions

Matches the current workaround but overloads the RMA concept.

## Decision Outcome

Represent RMA as a supplier-NCR child workflow separate from disposition. Support internal request, supplier response, and internal completion stages. Stage-specific sections and required fields appear as the RMA progresses.

Disposition categories configured as requiring an RMA cannot satisfy closure prerequisites without a related RMA. Completed true RMA records must relate to a disposition. Permit a temporary null relationship when the RMA is necessarily created first, then require reconciliation before completion.

When a third-party sort is requested, activate dedicated sort-instruction fields that tell SIA and the sorting firm how to handle any defects. Do not treat those instructions as a true RMA solely because the current platform uses that workaround.

## Consequences

### Positive

- Preserves independent RMA assignment, status, and reporting.
- Supports either creation sequence without losing validation.
- Separates return authorization from sort instructions.
- Enables conditional supplier fields for parcel return, hand carry, rework, or local scrap.

### Negative

- Temporary unlinked records require reconciliation controls.
- Parent closure logic must inspect disposition and RMA relationships.
- The no-defect third-party-sort scenario requires a defined completion rule.

### Follow-up and Constraints

- Confirm the disposition types that require an RMA.
- Define quantity reconciliation and exception handling.
- Define the status inventory for pending supplier response and pending internal processing.
- Confirm how a sort with no defects is recorded and closed.
- Determine whether the external inventory-control ticket remains the RMA request identifier.

## More Information

- Supplier NCR and warranty workflow transcript: approximately 0:43:29–1:01:53.
- ADR-046 governs the supplier NCR parent-and-child architecture.
