---
status: accepted
date: 2026-09-02
decision-date: not-recorded-in-transcript
deciders:
  - Dave McLean
  - Joel Frick
  - Eric McGregor
consulted: []
informed:
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Environmental Management
  - Corrective Action Management
---

# ADR-096: Use Type-Specific CAR Determination with Scored Environmental Escalation

## Context and Problem Statement

An internal NCR can remain valid even when it does not require a full CAR. Environmental NCRs use structured criteria and a threshold to make that escalation decision, while other NCR types may use professional judgment or different future rules. Treating CAR determination as one universal formula would not fit these source processes.

## Decision Drivers

- Preserve minor findings as assigned and traceable NCRs.
- Apply the established environmental evaluation consistently.
- Distinguish NCR validity from CAR escalation.
- Support other determination mechanisms without redesigning the workflow.
- Retain the inputs and result that justified escalation.

## Considered Options

### Require a CAR for every internal NCR

Is simple but imposes disproportionate investigation on minor findings.

### Leave every CAR decision to user discretion

Supports variation but does not enforce the environmental assessment.

### Use one universal scoring formula for every NCR type

Standardizes implementation but does not match all source procedures.

### Configure the determination mechanism by NCR type

Supports scored, discretionary, and future rule-based decisions within one architecture.

## Decision Outcome

Configure the CAR determination mechanism by Internal NCR type. For environmental NCRs, show the environmental assessment fields only on the applicable form, calculate the governed score, and compare it with the configured threshold.

A below-threshold environmental result remains an NCR assigned for proportionate corrective activity. A qualifying result requires creation or initiation of the related CAR pathway. Store the assessment inputs, calculated result, threshold outcome, and resulting escalation decision with the NCR.

Other NCR types may use a discretionary decision or a separately governed rule. Do not expose environmental criteria or apply the environmental formula to those types.

## Consequences

### Positive

- Makes environmental escalation repeatable and auditable.
- Preserves lower-severity issues without forcing CAR overhead.
- Allows one internal NCR architecture to support different determination mechanisms.

### Negative

- Type-specific logic requires controlled configuration and regression testing.
- Threshold changes can affect comparability over time.
- Discretionary types still depend on user training and governance.

### Follow-up and Constraints

- Verify the environmental criteria, weights or arithmetic, and threshold against the controlled evaluation form.
- Define authority for changing the threshold or formula.
- Define behavior when assessment inputs change after a CAR has been initiated.
- Confirm the determination rules for safety and any future quality-CAR scope.

## More Information

- Supplier NCR and warranty workflow transcript: approximately 0:07:55–0:17:05.
- The discussion referenced one-to-three input values and a qualifying total of six or more; the controlled source form remains authoritative for the exact calculation.
- ADR-056 governs the shared type-driven Internal NCR architecture.
