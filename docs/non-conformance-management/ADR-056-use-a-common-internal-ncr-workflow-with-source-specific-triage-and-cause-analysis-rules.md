---
status: accepted
date: 2026-07-25
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

Compliance, environmental, and safety non-conformances share the same broad problem-solving needs, but their entry points and required analysis can differ. An ad hoc report may need triage, duplicate review, and assignment. An auditor-issued issue is already validated and assigned. Some findings require a formal 5 Why or fishbone analysis, while lower-level issues may not.

## Decision Drivers

- Standardize internal problem-solving and reporting.
- Avoid separate departmental applications for minor variations.
- Respect differences between audit-driven and independently reported issues.
- Support conditional 5 Why, fishbone, and action traceability.

## Considered Options

### Design a different workflow for every internal department and source

Fits each group but creates duplication and inconsistent reporting.

### Use one rigid workflow for all internal NCRs

Is easy to report but adds unnecessary steps or omits needed controls.

### Use one common lifecycle with source- and severity-driven variations

Preserves standardization while allowing justified differences.

## Decision Outcome

Use a common Internal NCR lifecycle: intake or source creation, responsibility assignment, corrective-action plan proposal and review, implementation, evidence submission, verification, and closure.

Independently reported NCRs may include initial triage and duplicate review. Audit-generated NCRs begin after validation and assignment because the audit already established the issue. Root-cause analysis is conditional by classification or severity and may use 5 Why, fishbone, or both. Identified root causes may be linked to one or more actions to preserve traceability.

## Consequences

### Positive

- Creates consistent internal reporting and user expectations.
- Avoids unnecessary workflow duplication.
- Supports audit, environmental, and safety variations.
- Provides cause-to-action traceability.

### Negative

- Conditional logic still requires careful configuration.
- Department-specific fields may eventually justify separate forms.
- A common lifecycle requires cross-functional governance.

### Follow-up and Constraints

- Define internal classifications and severity rules.
- Define plan-approval, implementation, verification, and closure roles.
- Define when 5 Why, fishbone, or both are required.
- Define source-specific triage bypass rules.

## More Information

- Third transcript: approximately 2:20:10–2:31:27 and 2:37:13–2:45:33.
