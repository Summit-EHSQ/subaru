---
status: proposed
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders: []
consulted:
- Andrea Turner
- Luke Filippo
- Yolanda Reyes
- Dave McLean
informed:
- Keith Freeman
- Brianne Carroll
- Joel Frick
- Rick Redmond
primary-application: Product Management
secondary-applications:
- PartsMaster
- Supplier Relationship Management
- Production Part Approval Process (PPAP)
- Non-Conformance Management
- Warranty Corrective Action Report (WCAR)
---

# ADR-062: Integrate PartsMaster and Service-Part Data with Governed Depot Assignment and Update Precedence

## Context and Problem Statement

Intelex needs production and service-part masters for PPAP, NCR, warranty, and supplier workflows. Current upstream data can initially assign all parts to a supplier's default depot even when the actual shipping depot is already known elsewhere. Later source updates can also overwrite manually corrected relationships if precedence is not explicit.

## Decision Drivers

- Load both active production and historical service parts.
- Assign workflows to the correct supplier depot as early as possible.
- Avoid reproducing known source-data defects.
- Prevent blind integration overwrites of governed corrections.

## Considered Options

### Import the current source fields exactly as received

Is simple but perpetuates incorrect default depot assignments and omits service parts.

### Maintain the entire part master manually in Intelex

Allows correction but is not sustainable at the required scale.

### Integrate authoritative base data and apply governed enrichment and precedence rules

Balances automation with controlled exception handling.

## Decision Outcome

Propose a custom REST integration for PartsMaster and the applicable service-part source. Load the base part identifiers and relationships needed by Intelex. Enrich the supplier-depot relationship from the best available authoritative source; use the default `01` depot only as a fallback when a more specific depot is not known.

Define field-level update precedence. An upstream authoritative change may update Intelex, but a repeated incomplete source value must not erase a validated Intelex exception. Manual exceptions require an owner, reason, and review path rather than becoming untracked local edits.

## Consequences

### Positive

- Improves assignment accuracy for PPAP and supplier workflows.
- Includes service parts needed for WCAR and warranty use cases.
- Creates an explicit integration-versus-local governance model.

### Negative

- The authoritative depot source and service-part source require further analysis.
- Field-level precedence and exception handling add complexity.
- Source-system remediation may still be required.

### Follow-up and Constraints

- Hold the cross-functional data-architecture workshop.
- Identify authoritative sources for depot and service-part values.
- Define keys, refresh frequency, and field precedence.
- Define exception review and reconciliation reporting.

## More Information

- Fourth transcript: approximately 0:57:18–1:08:37.
