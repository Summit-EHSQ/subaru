---
status: accepted
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
- Keith Freeman
consulted:
- Jamie Dossey
informed:
- Emma Lister
- Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
- Supplier Portal
- Advanced Product Quality Planning (APQP)
- Production Part Approval Process (PPAP)
- Non-Conformance Management
- Audit Management
---

# ADR-084: Apply Mutable Visibility Classifications to Supplier-Related Records

## Context and Problem Statement

Supplier-company and facility relationships define which supplier organization a portal user may access, but they do not fully determine which records the person may see. New-model information may remain confidential from mass-production personnel within the same supplier or within SIA. The same information must later become available when development work transitions into mass production.

## Decision Drivers

- Prevent one supplier from accessing another supplier's information.
- Restrict confidential new-model information to users with a business need.
- Apply appropriate restrictions to supplier and internal users.
- Expand access when information moves into its mass-production lifecycle.
- Avoid duplicating records solely to change their audience.
- Keep security behavior consistent across connected applications.

## Considered Options

### Secure records only through supplier-company and facility relationships

Provides organizational isolation but cannot distinguish confidential and general records within the same supplier context.

### Create separate applications or duplicate records for each audience

Separates information but fragments history and creates synchronization and reporting problems.

### Combine supplier-entity scope with mutable record classifications and role permissions

Supports organizational isolation and lifecycle-dependent confidentiality without duplicating records.

## Decision Outcome

Apply two complementary security dimensions to supplier-related records:

- supplier-entity relationships determine which supplier company or facilities the user may access; and
- a mutable record classification, combined with authorized roles, determines which records within that entity scope the user may see.

Classify affected records according to governed visibility domains. Initial concepts include new-model-restricted, mass-production, and generally visible information, but the final catalogue will be established through the security matrix. Apply the model to affected APQP, PPAP, audit, non-conformance, and related supplier records rather than assuming every application has the same visibility rule.

Permit authorized users or lifecycle automation to change a record's classification when the real-world development phase changes. Preserve the change in the audit trail and recalculate visibility without copying the record.

## Consequences

### Positive

- Protects confidential development information within otherwise valid supplier relationships.
- Allows access to expand during development-to-production handover.
- Preserves one continuous record and history.
- Supports consistent internal and supplier-facing security concepts.

### Negative

- Every participating application must apply the classification consistently.
- Incorrect classifications or transitions can expose or conceal sensitive information.
- Security testing must cover combinations of entity, role, classification, and lifecycle state.

### Follow-up and Constraints

- Define the complete visibility-classification and role matrix.
- Define who may initially classify and later reclassify each record type.
- Define the lifecycle events that may propose or perform reclassification.
- Confirm whether historical attachments inherit the current record classification or retain separate restrictions.
- Test internal and supplier access across all affected applications.

## More Information

- Subsequent supplier workflow transcript: approximately 0:47:24–0:56:58.
- ADR-078 governs supplier-entity scope. This ADR adds the record-level security dimension within that scope.
