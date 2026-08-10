---
status: proposed
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders: []
consulted:
- Dave McLean
- Luke Filippo
- Keith Freeman
- Brianne Carroll
- Rick Redmond
informed:
- Jamie Dossey
- Joel Frick
primary-application: Design Change Request (DCR)
secondary-applications:
- Workflow EX
- Production Part Approval Process (PPAP)
- BOMEX
- Supplier Relationship Management
---

# ADR-037: Use Workflow EX as the Provisional System of Record for Direct-Supplier DCRs and Evaluate Intelex Reference Integration

## Context and Problem Statement

Workflow EX was recently deployed for supplier Design Change Requests and is increasingly reflected in supplier-quality documentation. The statement of work appears to include DCR workflow for direct suppliers, but the workshop participants did not include the process owners needed to decide whether Intelex should replace the new workflow. Internal DCR processes are outside the identified scope.

## Decision Drivers

- Avoid replacing a newly deployed tool without adoption evidence.
- Limit the scope to direct-supplier DCRs.
- Provide quality users with DCR background when reviewing drawings, ECS records, and parts.
- Preserve DCR-to-ECS-to-PPAP lineage.

## Considered Options

### Rebuild direct-supplier DCR fully in Intelex

Creates one platform but may duplicate a newly adopted enterprise workflow.

### Leave Workflow EX isolated

Avoids change but preserves fragmented part history.

### Retain Workflow EX provisionally and integrate reference data into Intelex

Preserves the current process while improving traceability and supplier-quality visibility.

## Decision Outcome

Treat Workflow EX as the provisional system of record for direct-supplier DCRs until the supplier-management process owners confirm the target state. Do not design an internal DCR workflow under this scope.

If Workflow EX remains the execution system, pursue an integration or reference-record pattern that brings the DCR identifier, status, supplier, drawing or part relationships, and relevant background into Intelex. Link that reference to the resulting BOMEX ECS and downstream PPAP where available.

A full Intelex DCR implementation remains an option only after the business confirms that replacing Workflow EX is desirable and within scope.

## Consequences

### Positive

- Avoids premature duplication of a new process.
- Supports part-history visibility even when execution remains external.
- Preserves future migration flexibility.

### Negative

- The final system of record remains unresolved.
- Integration feasibility and identifiers require investigation.
- Supplier experience may remain split across systems.

### Follow-up and Constraints

- Meet with supplier-management DCR owners.
- Confirm direct-supplier scope and Workflow EX adoption.
- Assess APIs, export methods, and stable identifiers.
- Decide between reference integration and replacement before Phase Four design.

## More Information

- Second transcript: approximately 2:41:36–2:50:58.
- Fourth transcript: approximately 1:52:23–1:56:37.
- Status changed from accepted to proposed because the final system-of-record decision requires process-owner confirmation.
