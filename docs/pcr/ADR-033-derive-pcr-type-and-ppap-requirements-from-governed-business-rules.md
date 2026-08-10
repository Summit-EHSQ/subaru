---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
consulted:
- Dave McLean
- Shao Ngoi
informed:
- Keith Freeman
- Jamie Dossey
- Brianne Carroll
- Joel Frick
- Rick Redmond
primary-application: Process Change Requests (PCR)
secondary-applications:
- Production Part Approval Process (PPAP)
- Supplier Portal
- Management of Change
---

# ADR-033: Derive PCR Type and PPAP Requirements from Governed Business Rules

## Context and Problem Statement

Different process-change categories require different reviewers, evidence, and PPAP elements. Suppliers may not reliably recognize the correct category from a list of approximately ten technical change types. Native Management of Change screening questions are easy to administer as content but do not provide the conditional follow-up logic required for this stable PCR classification model.

## Decision Drivers

- Apply quality-manual requirements consistently.
- Reduce incorrect supplier type selection.
- Use stable business logic for branching and required data.
- Preserve engineering discretion for unusual changes.

## Considered Options

### Require suppliers to select one technical category directly

Is simple but depends on supplier knowledge and can generate the wrong requirements.

### Use native MOC screening questions only

Is easy to maintain but provides limited conditional behavior.

### Use configured guided questions and governed rules

Supports classification, routing, and PPAP defaults from the same rule set.

## Decision Outcome

Maintain a governed PCR rule catalogue. The supplier answers stable, plain-language questions about the proposed change. Configured business logic derives or proposes the PCR category, required cross-functional reviews, whether PPAP is required, and the default PPAP element set.

The responsible SIA reviewer confirms or corrects the classification. Where PPAP is required, the responsible engineer may add further evidence requirements. The request must include affected supplier/depot, drawing or part context, change description, project timing, and supporting documentation.

## Consequences

### Positive

- Improves classification consistency.
- Aligns reviewer routing and PPAP defaults to one rule source.
- Reduces dependence on suppliers understanding internal category terminology.

### Negative

- Configured logic requires developer governance rather than simple content administration.
- Rule changes must be versioned for requests already in progress.
- Human confirmation remains necessary for unusual cases.

### Follow-up and Constraints

- Confirm the current change-type catalogue and decision questions.
- Define who may administer and approve rule changes.
- Define template versioning and override auditing.

## More Information

- Second transcript: approximately 2:03:24–2:08:13 and 2:14:17–2:15:50.
- Fourth transcript: approximately 1:36:50–1:41:31.
