---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Keith Freeman
  - Jamie Dossey
  - Brianne Carroll
  - Joel Frick
  - Rick Redmond
primary-application: Process Change Requests (PCR)
secondary-applications:
  - Supplier Portal
---

# ADR-036: Reset PCR Approvals After Supplier Revisions and Lock Final Approved Content

## Context and Problem Statement

In the current system, suppliers can change portions of a request after approvals have been completed. A revision made to satisfy one reviewer's concern could materially change information relied upon by reviewers who already approved the concept.

## Decision Drivers

- Ensure every approval applies to the same content version.
- Prevent approved records from being silently altered.
- Preserve a clear audit trail of supplier revisions and reviewer decisions.
- Allow clarification and correction without retaining stale approvals.

## Considered Options

### Allow edits while preserving completed approvals

Is convenient but invalidates the meaning of earlier decisions.

### Make the record permanently read-only after the first review begins

Protects integrity but prevents required clarification and correction.

### Allow controlled supplier revision and reset the applicable approval cycle

Balances collaboration with decision integrity.

## Decision Outcome

When the PCR owner returns a request to the supplier for correction, create or identify a new content revision. On supplier resubmission, invalidate and reactivate all concept-review approvals that could have relied on the changed content, including reviewers that previously approved.

Once the concept reaches its final proceed-to-PPAP decision, lock supplier-editable approved content. Any later material change must occur through a controlled revision or new PCR rather than direct editing of the approved version.

Review feedback may be consolidated by the PCR owner before return to the supplier, while retaining each reviewer's original decision and comments for traceability.

## Consequences

### Positive

- Ensures approvals remain meaningful and auditable.
- Prevents silent post-approval changes.
- Keeps all reviewers aligned to one content revision.

### Negative

- Minor supplier edits can cause repeated review effort.
- Revision rules and materiality must be communicated clearly.
- Review cycles may lengthen when many functions participate.

### Follow-up and Constraints

- Define which field changes reset approvals.
- Define whether non-substantive administrative corrections require full re-review.
- Provide version comparison or change highlighting where feasible.
- Define owner authority to consolidate feedback.

## More Information

- Second transcript: approximately 2:30:51–2:35:44.
