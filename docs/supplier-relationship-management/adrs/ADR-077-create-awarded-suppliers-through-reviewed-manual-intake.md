---
status: accepted
date: '2026-08-18'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
- Emma Lister
consulted:
- Keith Freeman
informed:
- Roy Lowery
- Jillian
- Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
- Procurement / RFQ
- Data Migration
---

# ADR-077: Create Awarded Suppliers Through Reviewed Manual Intake

## Context and Problem Statement

The expected post-go-live volume of new suppliers and depots is low. The responsible team also needs to verify that an award letter exists before a supplier is established or given access. No supplier-master integration is included in the current scope, and the future upstream Procurement solution is not yet stable enough to define a durable interface.

## Decision Drivers

- Verify awarded business before supplier setup begins.
- Respect confidentiality and control around Procurement information.
- Avoid integration effort that is not justified by current volume.
- Preserve a future integration boundary when the upstream source stabilizes.
- Migrate the existing supplier population efficiently.

## Considered Options

### Build a real-time Procurement-to-Intelex integration now

Automates entry but is outside current scope and depends on an evolving source system.

### Use recurring batch files for all supplier additions

Reduces typing but adds operational integration overhead for a low-volume process.

### Bulk-load the initial population and use reviewed manual intake after go-live

Matches the volume, scope, and need for human award verification.

## Decision Outcome

Load the initial legacy supplier population through a governed bulk import. After go-live, retain the existing award-notification trigger and require an authorized internal user to verify the award and manually create the supplier parent or depot record in Intelex.

Capture the Procurement-assigned supplier code during parent creation. Capture the Procurement-assigned depot code when it becomes available; Intelex must not infer or automatically allocate it. Use the template-driven setup requirements in ADR-005 after creation.

Do not implement a new supplier-master integration in the current phase. Reconsider integration only after the upstream Procurement system, authoritative source, interface, and expected value are defined.

## Consequences

### Positive

- Avoids low-value integration scope and dependency risk.
- Preserves human verification before supplier access is enabled.
- Keeps the future integration boundary explicit.

### Negative

- Supplier setup depends on timely manual action and data-entry quality.
- Parent and depot identifiers may arrive at different points in the process.
- Reconciliation with the upstream source is not automatic.

### Follow-up and Constraints

- Define the minimum fields required for parent and depot creation.
- Define duplicate detection and supplier-code validation.
- Define initial migration mapping and reconciliation reports.
- Reassess integration after the Procurement platform stabilizes.

## More Information

- Latest supplier-management design transcript: approximately 0:35:23–0:43:23 and 1:22:29–1:27:12.
- ADR-002 defines the post-award lifecycle boundary; this ADR defines the current creation mechanism.

