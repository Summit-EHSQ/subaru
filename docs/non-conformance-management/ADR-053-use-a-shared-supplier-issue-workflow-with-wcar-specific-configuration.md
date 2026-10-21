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

Supplier problems share common capabilities such as tasks, attachments, supplier responses, corrective actions, review timestamps, and closure controls. Warranty Corrective Action Reports originate from warranty, involve different internal and supplier roles, require different response fields, and depend on shipment information before the supplier can begin work. Suppliers also need concise, contextual instructions and should not be required to complete problem-analysis fields that do not apply to outcomes such as no trouble found. These differences can be expressed through configured components of one supplier-issue framework rather than a separately maintained WCAR workflow.

## Decision Drivers

- Reuse common supplier-quality components.
- Preserve distinct warranty ownership and scoring.
- Avoid duplicate PIR and WCAR workflow configuration.
- Provide consolidated reporting across supplier problem variants.
- Reduce supplier questions through type- and stage-specific guidance.
- Avoid irrelevant data entry through conditional WCAR subtypes and responses.
- Release the WCAR to the supplier only when shipment tracking is available.

## Considered Options

### Use one identical supplier NCR form and workflow for every source

Maximizes consolidation but does not fit WCAR ownership, data, and routing.

### Build WCAR as a completely unrelated application

Provides autonomy but duplicates shared features and complicates supplier reporting.

### Use one supplier-issue framework with type-specific forms and stages

Balances reuse, type-specific behavior, and consolidated reporting.

## Decision Outcome

Model standard SQA supplier NCRs and WCARs as types within one shared supplier-issue object and workflow framework. Common components include supplier and part context, activities, attachments, portal access, response evidence, submission timestamps, rejection behavior, and reporting dimensions. Type and subtype configuration determines which child response forms, fields, stages, instructions, notifications, validations, and security rules are active.

WCAR uses its warranty initiation source, warranty-specific fields, one corrective-response form, the supplier warranty role, and an internal warranty-coordinator approval. The form uses stage-specific instructional panels and conditional questions or fields. WCAR subtypes or response choices may reduce the required fields for cases such as no trouble found. Structured root-cause analysis remains available but is not required by default.

During initiation, the Parts Collection Center receives the selected supplier warranty contact and shipping address. The WCAR remains internal until the returned part has been shipped and an internal user enters the tracking number. Entry of that tracking number releases the WCAR to the supplier so the supplier receives the case and shipment details together.

One authorized coordinator approval is sufficient; rejection requires comments and returns the response to the supplier for revision. When that response and the remaining mandatory WCAR data are complete, the WCAR closes without the additional PIR final-approval stage.

## Consequences

### Positive

- Reuses core capabilities.
- Preserves warranty-specific process needs through configuration.
- Supports consolidated and subtype-specific reporting.
- Avoids maintaining a second end-to-end workflow.
- Gives suppliers instructions in the context of the applicable stage and response path.
- Prevents supplier release before shipment tracking is available.

### Negative

- Shared workflow rules require disciplined type configuration and regression testing.
- Type changes can affect common reporting and closure automation.
- The threshold for introducing a separate workflow still requires governance.
- Shipping release still depends on an internal user receiving and entering the tracking number.
- Business-owned instructional content requires maintenance when the process changes.

### Follow-up and Constraints

- Document the type-configuration matrix for PIR and WCAR.
- Define warranty-specific ownership and supplier-contact roles.
- Map WCAR subtypes and response choices to their conditional fields and instructions.
- Define the Parts Collection Center notification template and the tracking-number release rule.
- Define scorecard treatment by subtype.
- Assess whether pilot-part and other inspection-originated NCRs need only source variations or a distinct subtype.

## More Information

- Third transcript: approximately 2:44:37–2:49:31.
- Supplier NCR and warranty workflow transcript: approximately 2:32:30–2:54:16.
- "Summit EHSQ | SIA | Revisit PIR Requirements + WCAR" transcript, 21 Oct 2026, 10:30 AM–12:00 PM ET: approximately 0:32:09–0:50:12.
