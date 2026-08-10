---
status: proposed
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Eric McGregor
consulted:
  - Dave McLean
  - Shao Ngoi
  - Luke Filippo
informed:
  - Monica Klaas
  - Anne Coffin
  - Joel Frick
  - Rick Redmond
primary-application: Audit Management
secondary-applications:
  - Non-Conformance Management
  - Corrective Action Management
---

# ADR-055: Create Audit-Driven Compliance NCRs Instead of Isolated Finding Records

## Context and Problem Statement

Audit Findings can launch corrective actions, but they remain outside the Non-Conformance application and make consolidated reporting across internal issues difficult. Compliance needs an immediate replacement for a failed Access tool, while the broader NCR implementation is planned later. Timing may therefore conflict with the preferred target architecture.

## Decision Drivers

- Roll audit issues into the same internal NCR reporting bucket.
- Retain direct traceability to the audit and checklist question.
- Provide cause analysis, action-plan approval, implementation, and verification.
- Avoid blocking the immediate audit rollout.

## Considered Options

### Use Audit Findings permanently

Provides an immediate native path but fragments enterprise non-conformance reporting.

### Delay audit issue management until Internal NCR is fully implemented

Achieves the target architecture once but leaves an immediate operational gap.

### Create compliance NCRs from audits, with Findings as a temporary fallback if required

Preserves the target model while allowing pragmatic rollout sequencing.

## Decision Outcome

Propose replacing or bypassing the standard Finding object for management-system audit issues by creating a compliance Internal NCR linked to the audit, auditee, checklist question, requirement, and auditor.

If the phase-one audit timeline cannot accommodate the compliance NCR object, use Findings as an interim mechanism and migrate or redirect the relationship when Internal NCR is implemented. The temporary approach must not become the long-term reporting architecture by default.

## Consequences

### Positive

- Enables consolidated internal NCR reporting.
- Preserves audit-source traceability.
- Supports the desired corrective-action workflow.
- Allows an immediate interim path if necessary.

### Negative

- Changing the standard audit-to-finding relationship may add phase-one scope.
- An interim approach creates migration and user-change work.
- Detailed audit requirements must be checked for conflicts.

### Follow-up and Constraints

- Review with the audit-design team and phase-one timeline.
- Define audit-question-to-NCR field mapping and closure dependencies.
- Decide whether interim Findings require migration or only read-only retention.
- Confirm commercial and sequencing impacts.

## More Information

- Third transcript: approximately 2:17:04–2:29:48 and 2:44:37–2:46:20. The preferred direction was clear, but timing and stakeholder review remained open.
