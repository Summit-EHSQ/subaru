---
status: accepted
date: 2026-09-02
decision-date: not-recorded-in-transcript
deciders:
  - Eric McGregor
  - Monica Klaas
consulted:
  - Dave McLean
  - Shao Ngoi
  - Luke Filippo
informed:
  - Anne Coffin
  - Joel Frick
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Audit Management
  - Environmental Management
  - Safety Management
---

# ADR-056: Use a Common Internal NCR Workflow with Source-Specific Triage and Cause-Analysis Rules

## Context and Problem Statement

Internal quality, environmental, and safety non-conformances share broad problem-solving needs, but their entry points, initial-investigation steps, routing, deadlines, and required analyses differ. Audit issues remain Audit Findings rather than NCR records, but both sources may require the same structured CAR lifecycle. Some events require formal 5 Why or fishbone analysis while others do not.

## Decision Drivers

- Standardize internal problem-solving and reporting.
- Avoid separate departmental applications for minor variations.
- Respect the boundary between Audit Findings and independently reported NCRs.
- Support conditional 5 Why, fishbone, and action traceability.
- Allow administrators to govern type-specific stages, routing, deadlines, and notifications.

## Considered Options

### Design a different workflow for every internal department and source

Fits each group but creates duplication and inconsistent reporting.

### Use one rigid workflow for all internal NCRs

Is easy to report but adds unnecessary steps or omits needed controls.

### Use a small family of common lifecycles with type-driven variations

Preserves standardization while allowing justified differences.

## Decision Outcome

Use a small family of shared Internal NCR workflows with type-driven variations. The selected NCR type is an operational rule, not only a reporting classification. It may determine enabled stages, responsible-party selection or calculation, stage deadlines, rejection destinations, required fields and analyses, and notification recipients.

Qualified internal originators may issue established NCR types directly without a generic public-submission triage stage. SQDIIR uses its specific initial-investigation workflow under ADR-088. Environmental and safety NCRs may use the simpler draft, issued, and final-review pattern established in the workshop. Type configuration also determines how an NCR decides whether a related CAR is required; ADR-096 governs the scored environmental determination.

Audit Findings do not enter the Internal NCR workflow. When either an Audit Finding or Internal NCR requires structured corrective action, it launches the common CAR lifecycle governed by ADR-089 and ADR-090. Root-cause analysis is conditional by type or severity and may use 5 Why, fishbone, or both.

## Consequences

### Positive

- Creates consistent internal reporting and user expectations.
- Avoids unnecessary workflow duplication.
- Supports audit, environmental, and safety variations.
- Provides cause-to-action traceability.
- Moves recurring workflow differences into governed configuration.

### Negative

- Conditional logic still requires careful configuration.
- Department-specific fields may eventually justify separate forms.
- A common lifecycle requires cross-functional governance.
- Incorrect type configuration could affect every record of that type.

### Follow-up and Constraints

- Define internal classifications, severity rules, and type-level configuration ownership.
- Define plan-approval, implementation, verification, and closure roles.
- Define when 5 Why, fishbone, or both are required.
- Define stage deadlines, rejection routes, and distribution lists by type.

## More Information

- Third transcript: approximately 2:20:10–2:31:27 and 2:37:13–2:45:33.
- Subsequent non-conformance design transcript: approximately 0:31:00–0:45:08, 0:57:15–0:58:38, and 1:29:42–1:32:05.
- Supplier NCR and warranty workflow transcript: approximately 0:04:05–0:17:19.
- ADR-087 replaces the earlier audit-generated NCR assumption. ADR-088 documents the SQDIIR specialization.
- ADR-096 governs environmental NCR-to-CAR determination.
