---
status: accepted
date: 2026-09-02
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Joel Frick
  - Bill Roberts
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Keith Freeman
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Warranty Claims
  - Supplier Portal
  - Supplier Scorecard
---

# ADR-053: Use a Shared Supplier Issue Workflow with WCAR-Specific Configuration

## Context and Problem Statement

Supplier problems share common capabilities such as tasks, attachments, supplier responses, corrective actions, review timestamps, and closure controls. Warranty Corrective Action Reports originate from warranty, involve different internal and supplier roles, and require different response fields. The detailed workflow discussion established that these differences can be expressed through configured components of one supplier-issue framework rather than a separately maintained WCAR workflow.

## Decision Drivers

- Reuse common supplier-quality components.
- Preserve distinct warranty ownership and scoring.
- Avoid duplicate PIR and WCAR workflow configuration.
- Provide consolidated reporting across supplier problem variants.

## Considered Options

### Use one identical supplier NCR form and workflow for every source

Maximizes consolidation but does not fit WCAR ownership, data, and routing.

### Build WCAR as a completely unrelated application

Provides autonomy but duplicates shared features and complicates supplier reporting.

### Use one supplier-issue framework with type-specific forms and stages

Balances reuse, type-specific behavior, and consolidated reporting.

## Decision Outcome

Model standard SQA supplier NCRs and WCARs as types within one shared supplier-issue object and workflow framework. Common components include supplier and part context, activities, attachments, portal access, response evidence, submission timestamps, rejection behavior, and reporting dimensions. Type configuration determines which child response forms, fields, stages, notifications, and validations are active.

WCAR uses its warranty initiation source, warranty-specific fields, one corrective-response form, the supplier warranty role, and an internal warranty-coordinator approval. One authorized coordinator approval is sufficient; rejection returns the response to the supplier with required comments. When that response and the remaining mandatory WCAR data are complete, the WCAR closes without the additional PIR final-approval stage. Structured root-cause analysis is available but not required by default.

## Consequences

### Positive

- Reuses core capabilities.
- Preserves warranty-specific process needs through configuration.
- Supports consolidated and subtype-specific reporting.
- Avoids maintaining a second end-to-end workflow.

### Negative

- Shared workflow rules require disciplined type configuration and regression testing.
- Type changes can affect common reporting and closure automation.
- The threshold for introducing a separate workflow still requires governance.

### Follow-up and Constraints

- Document the type-configuration matrix for PIR and WCAR.
- Define warranty-specific ownership and supplier-contact roles.
- Define scorecard treatment by subtype.
- Assess whether pilot-part and other inspection-originated NCRs need only source variations or a distinct subtype.

## More Information

- Third transcript: approximately 2:44:37–2:49:31.
- Supplier NCR and warranty workflow transcript: approximately 2:32:30–2:54:16.
