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
  - Joel Frick
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Warranty Claims
  - Supplier Portal
  - Supplier Scorecard
---

# ADR-053: Use Shared Supplier NCR Components with a Distinct WCAR Workflow Subtype

## Context and Problem Statement

Supplier problems share common capabilities such as tasks, occurrence history, attachments, supplier responses, and corrective actions. Warranty Corrective Action Reports use those same capabilities but originate from warranty, involve different owners, use a different form and workflow, and affect scorecards differently. Forcing all supplier quality scenarios through one highly conditional form would be difficult to maintain.

## Decision Drivers

- Reuse common supplier-quality components.
- Preserve distinct warranty ownership and scoring.
- Avoid a single form with excessive type-driven branching.
- Provide consolidated reporting across supplier problem variants.

## Considered Options

### Use one identical supplier NCR form and workflow for every source

Maximizes consolidation but does not fit WCAR ownership, data, and routing.

### Build WCAR as a completely unrelated application

Provides autonomy but duplicates shared features and complicates supplier reporting.

### Use a shared supplier NCR base with a distinct WCAR subtype

Balances reuse, subtype-specific workflow, and consolidated reporting.

## Decision Outcome

Model standard SQA supplier NCRs and WCARs as subtypes of a shared supplier non-conformance base. Common components include supplier and part context, activities, attachments, tasks, portal access, response evidence, and shared reporting dimensions.

WCAR uses its own initiation source, form fields, corrective-action requirements, responsible warranty or quality-engineering roles, workflow, numbering presentation where needed, and scorecard rules. Additional supplier NCR subtypes may be introduced when field or workflow differences are material rather than handled through pervasive conditional logic.

## Consequences

### Positive

- Reuses core capabilities.
- Preserves warranty-specific process needs.
- Supports consolidated and subtype-specific reporting.
- Reduces conditional complexity in the standard supplier NCR.

### Negative

- Shared-base design requires disciplined inheritance and security configuration.
- Subtype changes can affect common reporting.
- The threshold for creating additional subtypes requires governance.

### Follow-up and Constraints

- Document standard NCR and WCAR common versus unique requirements.
- Define subtype-specific numbering and ownership.
- Define scorecard treatment by subtype.
- Assess whether pilot-part and other inspection-originated NCRs need only source variations or a distinct subtype.

## More Information

- Third transcript: approximately 2:44:37–2:49:31.
