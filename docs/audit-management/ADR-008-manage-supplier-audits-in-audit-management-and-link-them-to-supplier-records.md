---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders: []
consulted:
  - Dave McLean
  - Eric McGregor
  - Brianne Carroll
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Audit Management
secondary-applications:
  - Supplier Relationship Management
---

# ADR-008: Manage Supplier Audits in Audit Management and Link Them to Supplier Records

## Context and Problem Statement

Supplier audits are related to supplier management but share core structures and capabilities with the broader audit program. Placing supplier audits directly inside Supplier Relationship Management would duplicate audit functionality and could create an isolated audit model.

## Decision Drivers

- Reuse the existing audit application and its workflow, evidence, and reporting capabilities.
- Maintain a direct relationship between each supplier audit and the supplier being audited.
- Avoid unintended impact on compliance and ISO audit processes.
- Allow supplier-specific requirements without creating a second audit engine.

## Considered Options

### Build supplier audits directly in Supplier Relationship Management

Keeps supplier data together but duplicates audit capabilities.

### Manage supplier audits in a separate custom application

Provides isolation but increases maintenance and reporting fragmentation.

### Manage supplier audits in Audit Management and link them to Supplier Relationship Management

Reuses the audit architecture while preserving supplier context.

## Decision Outcome

Configure supplier audits within Audit Management as an adjacent audit type or extension of the audit model. Each supplier audit will link to the relevant supplier record so that it is visible from Supplier Relationship Management and available to supplier reporting and risk processes.

Supplier-specific changes must be reviewed for their impact on compliance and other audit programs before shared audit structures are modified.

## Consequences

### Positive

- Reuses established audit capabilities and governance.
- Allows supplier records to show related audits without duplicating data.
- Supports future use of audit results in supplier risk and scorecards.

### Negative

- Shared audit configuration may create coupling between supplier and compliance audit requirements.
- Supplier Portal access to audit content will require additional permission design.

### Follow-up and Constraints

- Confirm the supplier audit object type, workflow, and security model.
- Identify shared versus supplier-specific fields and templates.
- Define which audit results are exposed to suppliers and which remain internal.

## More Information

- Transcript discussion: approximately 0:27:16–0:28:46.
- The detailed supplier audit design was deferred to a later discussion.
