---
status: proposed
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Keith Freeman
consulted:
  - Dave McLean
  - Shao Ngoi
  - Brianne Carroll
  - Luke Filippo
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Advanced Product Quality Planning (APQP)
secondary-applications:
  - Supplier Relationship Management
---

# ADR-012: Calculate APQP Risk from Structured Supplier Input with Human Confirmation

## Context and Problem Statement

The current high-risk selection method combines a supplier questionnaire, weighted scoring, automatic triggers, and cross-functional concerns. Risk is not purely a supplier attribute: new suppliers, new commodities, new plants, and major changes can force enhanced oversight for a specific APQP. The workshop did not finalize whether the complete risk assessment will be implemented in Intelex, but APQP requires a maintained risk result to determine oversight.

## Decision Drivers

- Provide a repeatable and explainable risk classification.
- Remove spreadsheet or document-based survey handling.
- Retain expert judgment for risks that are not captured by scoring.
- Support automatic forcing conditions such as a new supplier or new commodity.
- Make the resulting risk available to APQP automation and reporting.

## Considered Options

### Keep the risk assessment external and manually enter only the result

Reduces build effort but limits traceability and automation.

### Use only a questionnaire and calculated thresholds

Is consistent but may omit contextual concerns.

### Use structured supplier input, calculated scoring, forcing rules, and human confirmation or override

Balances repeatability with expert judgment.

## Decision Outcome

Implement, subject to detailed design confirmation, a structured risk assessment that can be issued to the supplier or completed using supplier-provided data. Calculate a proposed classification from configured question weights and thresholds. Apply configured forcing rules where a condition automatically requires enhanced oversight.

Route the calculated result for SIA confirmation and permit an authorized override with rationale. Store the confirmed risk classification on the APQP and retain the underlying assessment for traceability.

## Consequences

### Positive

- Provides an auditable link between risk inputs and APQP oversight.
- Allows thresholds and forcing rules to be configured rather than embedded in code.
- Preserves expert input and accountability.

### Negative

- Questionnaire, scoring, and override governance require detailed design.
- Risk thresholds may change over time and require versioning.
- Supplier self-reported data may require validation.

### Follow-up and Constraints

- Confirm whether the risk assessment is in scope for the Intelex build.
- Define the scoring matrix, A/B/C thresholds, forcing rules, and override authority.
- Define reassessment triggers and whether risk can change during an active APQP.
- Determine how broader supplier performance data may later supplement the assessment.

## More Information

- Transcript discussion: approximately 2:00:36–2:09:44.
- The implementation location and final methodology were left open; therefore this ADR remains proposed.
