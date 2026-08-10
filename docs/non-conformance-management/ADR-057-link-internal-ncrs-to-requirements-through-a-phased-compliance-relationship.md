---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Eric McGregor
  - Monica Klaas
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Audit Management
  - Compliance Tracking
  - Permit Management
---

# ADR-057: Link Internal NCRs to Requirements Through a Phased Compliance Relationship

## Context and Problem Statement

Internal environmental and compliance NCRs may relate to statutes, permits, ISO clauses, or management-system requirements. The full Compliance Tracking and Permit Management repositories are planned for a later phase. Requiring those repositories before NCR launch would delay the process, while a permanent free-text approach would limit reporting and applicability context.

## Decision Drivers

- Capture the governing requirement from the initial rollout.
- Preserve audit-question traceability.
- Support later structured regulatory and permit relationships.
- Avoid blocking NCR implementation on Phase Three content.

## Considered Options

### Use only free-text requirement references permanently

Allows immediate rollout but limits validation and structured reporting.

### Delay requirement capture until Compliance Tracking is live

Avoids migration but loses important context in early NCRs.

### Use a phased reference model and later replace it with structured relationships

Provides immediate context and a clear migration path.

## Decision Outcome

For audit-generated compliance NCRs, inherit or link the originating audit question and its cited clause or requirement. For other internal NCRs in early phases, capture a regulatory, permit, standard, or management-system reference through controlled text or a limited lookup.

When Compliance Tracking and Permit Management are implemented in Phase Three, add structured relationships from Internal NCR to applicable requirement and permit records. Preserve early text references for history and migrate them where practical; do not block the early NCR rollout on full regulatory-content availability.

## Consequences

### Positive

- Captures requirement context from day one.
- Supports future structured regulatory reporting.
- Avoids an unnecessary phase dependency.

### Negative

- Early references may be inconsistent and require cleanup.
- Migration to structured relationships may be partly manual.
- A full applicability model depends on later compliance content and governance.

### Follow-up and Constraints

- Define early reference fields and controlled vocabulary.
- Define audit-question inheritance.
- Design Phase Three requirement and permit relationships.
- Define migration and reporting across old and new references.

## More Information

- Third transcript: approximately 2:39:28–2:44:25 and 2:56:39–2:58:33.
