---
status: accepted
date: '2026-10-16'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Luke Phillippo
- Keith Freeman
consulted:
- Jessica Smith
- Joel Frick
informed:
- Brianne Carroll
- Rick Redmond
primary-application: Management of Change
secondary-applications:
- Process Change Requests (PCR)
- Localization
- Design Change Request (DCR)
- Action Authorization Sheet (AAS)
---

# ADR-068: Implement Distinct Change Processes as MOC Subtypes While Preserving the Core MOC Framework

## Context and Problem Statement

The program includes several processes that fit the broad Management of Change architecture but differ substantially in initiation, questions, approvals, and downstream actions. Additional internal equipment or operational change use cases may be introduced later and could benefit from the native MOC framework.

## Decision Drivers

- Reuse shared MOC infrastructure without forcing unrelated processes into one workflow.
- Allow each change type to have its own logic and form experience.
- Preserve future support for classic internal MOC use cases.
- Align implementation to project phases.

## Considered Options

### Use one universal MOC form and workflow

Maximizes reuse but creates excessive branching and poor maintainability.

### Build every change process as an unrelated custom application

Provides freedom but duplicates common infrastructure.

### Use distinct subtypes under a preserved MOC base

Balances shared architecture with process-specific behavior.

## Decision Outcome

Use the Intelex Management of Change application as the common target architectural base. Implement PCR and Localization as distinct subtypes or child processes. Treat direct-supplier DCR and AAS as Phase Four processes subject to their own ADRs and scope confirmation.

Implement the supplier-initiated PCR as a child object and workflow under the MOC framework from Phase 2 onward. Phase 2 will deliver only the supplier submission, SQA clarification or rejection, and conditional proceed-to-PPAP behavior needed to replace the current IntelliQuest capability. Phase 3 will expand that same PCR record and workflow with Supplier Management intake, cross-functional review, and implementation activities. Do not create a separate PPAP-adjacent supplier request as proposed and rejected in ADR-105.

The PCR is one holistic workflow that may activate child review or implementation workflows when other internal participants are required. The supplier continues to initiate one request; the internal workflow determines which downstream reviews and validation processes apply.

Each subtype may replace or hide native screening-question behavior when configured fields and conditional logic are required. Preserve the core out-of-the-box MOC capability so future internal equipment acquisition, process, document, training, calibration, safety, or environmental change use cases can be added without dismantling the supplier-oriented subtypes.

## Consequences

### Positive

- Reuses common MOC infrastructure.
- Keeps complex subtype workflows maintainable.
- Preserves an expansion path for future internal MOC.
- Avoids replacing or migrating the Phase 2 supplier PCR when Phase 3 is deployed.
- Preserves one traceable lifecycle from supplier request through internal review and any resulting PPAP.

### Negative

- Subtype boundaries and shared fields require governance.
- Some processes may still need custom objects or licensing.
- Cross-subtype reporting must account for different workflows.

### Follow-up and Constraints

- Define the shared MOC base fields and subtype boundaries.
- Define the Phase 2 PCR child fields and workflow without constraining the Phase 3 extension.
- Define the parent PCR status behavior across its child review and implementation workflows.
- Confirm Localization process owners and workflow.
- Evaluate future equipment-acquisition MOC separately.
- Define cross-subtype reporting and numbering.

## More Information

- Fourth transcript: approximately 1:34:34–1:52:23.
- PPAP design workshop continuation: approximately 3:02:25–3:17:56.
- Phase 2A design workshop day 3 afternoon: approximately 1:55:55–2:00:41. This earlier discussion proposed separating the Supplier PPAP Request from the internal MOC PCR; that proposal was subsequently rejected.
- Latest PCR architecture transcript: approximately 00:00–16:40 and 19:31–20:20. This discussion resolved the application boundary in favor of one supplier-initiated MOC PCR delivered incrementally across Phases 2 and 3; ADR-105 is therefore rejected.
