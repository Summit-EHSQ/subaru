---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Keith Freeman
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
  - Brianne Carroll
informed:
  - Joel Frick
  - Rick Redmond
  - Gary Cooper
primary-application: Advanced Product Quality Planning (APQP)
secondary-applications:
  - Supplier Relationship Management
  - Production Part Approval Process (PPAP)
  - Shipping, Receiving and Inspection (Pilot Part Data)
  - Internal Safe Launch
---

# ADR-020: Retain APQP Development History for Mass-Production Handover and Cross-Functional Visibility

## Context and Problem Statement

APQP information is currently distributed across spreadsheets and departments and is not consistently shared. Mass-production teams need to understand what occurred during development, how the process was established, what issues or schedule changes occurred, and what evidence was produced. The APQP solution must remain useful after immediate development work is complete.

## Decision Drivers

- Support development-to-mass-production handover.
- Provide one accessible history of supplier and part development.
- Reduce repeated requests for historical context.
- Support future quality analysis, audits, and supplier performance review.

## Considered Options

### Archive APQP data only within the development team

Minimizes exposure but preserves organizational silos.

### Summarize only the final result into Supplier Relationship Management

Is concise but loses task-level context and evidence.

### Retain the complete APQP record and expose it through governed cross-functional views

Preserves traceability while supporting broad organizational access.

## Decision Outcome

Retain the APQP parent record, task status, schedules, variance explanations, acknowledgements, and supporting evidence after closure. Make that history available through governed views and related-record navigation to authorized mass-production, supplier-quality, new-model, and other supply-chain stakeholders.

The history will be referenced from the supplier context and related PPAP or downstream quality processes rather than copied into separate repositories. Related inspection history should form a continuous trace from pilot-part development through PPAP sample inspection and, where used, internal safe launch.

## Consequences

### Positive

- Improves handover and organizational learning.
- Creates traceability from supplier and part development into mass production.
- Supports future reporting without reassembling spreadsheets.

### Negative

- Long-term evidence retention increases storage, permissions, and records-governance requirements.
- Broad access must not expose supplier-confidential information inappropriately.

### Follow-up and Constraints

- Define retention periods and archival behavior.
- Define internal and supplier-facing security for historical records and attachments.
- Define related-record navigation between APQP, supplier, PPAP, Pilot Part Data, safe launch, and downstream quality processes.

## More Information

- First transcript: approximately 0:59:38–1:02:39, 2:15:36–2:16:20, and 2:57:16–2:57:45.
- Third transcript: approximately 0:28:09–0:31:49.
