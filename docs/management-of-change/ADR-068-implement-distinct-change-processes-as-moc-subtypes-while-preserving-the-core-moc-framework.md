---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
consulted:
- Dave McLean
- Jessica Smith
- Keith Freeman
informed:
- Brianne Carroll
- Joel Frick
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

Use the Intelex Management of Change application as the common target architectural base. Implement the expanded cross-functional PCR and Localization capabilities as distinct Phase Three subtypes or child workflows. Treat direct-supplier DCR and AAS as Phase Four processes subject to their own ADRs and scope confirmation.

ADR-105 now proposes placing the minimum supplier-facing request in PPAP as a distinct Supplier PPAP Request. The later workshop retained an internal SIA Process Change Request in Management of Change for broader cross-functional change control. This proposed boundary requires confirmation before the earlier supplier-oriented PCR subtype assumptions in this ADR and ADR-032 through ADR-036 are superseded or rescoped.

Each subtype may replace or hide native screening-question behavior when configured fields and conditional logic are required. Preserve the core out-of-the-box MOC capability so future internal equipment acquisition, process, document, training, calibration, safety, or environmental change use cases can be added without dismantling the supplier-oriented subtypes.

## Consequences

### Positive

- Reuses common MOC infrastructure.
- Keeps complex subtype workflows maintainable.
- Preserves an expansion path for future internal MOC.

### Negative

- Subtype boundaries and shared fields require governance.
- Some processes may still need custom objects or licensing.
- Cross-subtype reporting must account for different workflows.

### Follow-up and Constraints

- Define the shared MOC base fields and subtype boundaries.
- Confirm whether the Phase Three PCR subtype is limited to internal SIA-managed changes and, if so, remove the earlier dependency on incorporating the supplier request into that subtype.
- Confirm Localization process owners and workflow.
- Evaluate future equipment-acquisition MOC separately.
- Define cross-subtype reporting and numbering.

## More Information

- Fourth transcript: approximately 1:34:34–1:52:23.
- PPAP design workshop continuation: approximately 3:02:25–3:17:56.
- Phase 2A design workshop day 3 afternoon: approximately 1:55:55–2:00:41. The discussion proposes separating the Supplier PPAP Request from the internal MOC PCR; ADR-105 remains proposed pending discovery and scope approval.
