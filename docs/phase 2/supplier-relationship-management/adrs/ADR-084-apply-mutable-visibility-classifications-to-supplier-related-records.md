---
status: accepted
date: '2026-09-29'
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
- Pilot Part Data
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

Do not automatically propagate the PPAP new-model versus mass-production distinction into aggregate Supplier Scorecard results. ADR-115 governs the scorecard exception: authorized internal scorecard users may see the complete aggregate result within their supplier scope even when some contributing transactions remain restricted in their source application.

Permit authorized users or lifecycle automation to change a record's classification when the real-world development phase changes. Preserve the change in the audit trail and recalculate visibility without copying the record.

For PPAP and Pilot Part Data, classify records at the PPAP or program context rather than assuming that the supplier or canonical part has only one lifecycle. A new-model PPAP and a mass-production PPAP may exist for the same supplier and part. Related build events, shipments, inspections, and failure records inherit the PPAP classification.

Users authorized for new-model information also receive applicable mass-production history. Mass-production-only users do not receive new-model records. A management-controlled model or program handover may reclassify the model summary and all applicable PPAPs, PPAP tasks, pilot-part records, and other governed descendants in bulk. The transition occurs when the real-world handover is declared and is not necessarily tied to closure of every individual PPAP.

Treat this handover as an access change, not a workflow or accountability transfer. Reclassification must not change workflow stage, task owner, or responsibility for open work. Incomplete new-model work remains with its existing responsible team after mass-production visibility is added.

Supplier portal users may see their submitted pilot shipment records and a failure only after it enters the supplier-response stage. They do not receive access to internal pilot programs, checklist definitions, unit inspections, or integration staging objects.

## Consequences

### Positive

- Protects confidential development information within otherwise valid supplier relationships.
- Allows access to expand during development-to-production handover.
- Preserves one continuous record and history.
- Supports consistent internal and supplier-facing security concepts.
- Keeps visibility changes independent from operational ownership and workflow completion.

### Negative

- Every participating application must apply the classification consistently.
- Incorrect classifications or transitions can expose or conceal sensitive information.
- Security testing must cover combinations of entity, role, classification, and lifecycle state.

### Follow-up and Constraints

- Define the complete visibility-classification and role matrix.
- Define who may initially classify and later reclassify each record type.
- Define the lifecycle events that may propose or perform reclassification.
- Define the model-level handover record, authorized management roles, and cascade behavior.
- Ensure cascade processing reports partial failures and does not leave the related record set in mixed visibility domains without an actionable exception.
- Confirm whether historical attachments inherit the current record classification or retain separate restrictions.
- Test internal and supplier access across all affected applications.

## More Information

- Subsequent supplier workflow transcript: approximately 0:47:24–0:56:58.
- ADR-078 governs supplier-entity scope. This ADR adds the record-level security dimension within that scope.
- Product Management and Pilot Part Data design transcript: approximately 5:46:36–6:28:35.
- Phase 2A design workshop day 3: approximately 1:23:10–1:29:16. This discussion confirms that handover expands visibility without transferring responsibility for open work.
- Phase 2A design workshop day 3 afternoon: approximately 1:08:10–1:17:55. This discussion establishes that aggregate scorecard visibility does not reveal the restricted transactional detail and is governed separately under ADR-115.
