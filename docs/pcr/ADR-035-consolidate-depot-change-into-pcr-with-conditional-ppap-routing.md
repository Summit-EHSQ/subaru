---
status: proposed
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
- Supplier Relationship Management
- Production Part Approval Process (PPAP)
- Packaging
- Materials Management
---

# ADR-035: Consolidate Depot Change into PCR with Conditional PPAP Routing

## Context and Problem Statement

A supplier depot change affects procurement, logistics, packaging, and pickup arrangements, but it does not always affect the manufacturing process. The current process uses a separate depot-change form plus PCR, creating duplicate submissions. Earlier discussion assumed every consolidated depot change would proceed to PPAP; the final workshop clarified that a pickup-location-only change may require no quality validation.

## Decision Drivers

- Eliminate duplicate supplier submissions.
- Preserve cross-functional depot approval requirements.
- Route only quality-impacting changes to PPAP.
- Avoid duplicate approval slots where processes overlap.

## Considered Options

### Keep depot change and PCR separate

Preserves current ownership but duplicates data and approvals.

### Send every depot change through PPAP

Provides consistent control but over-processes logistics-only changes.

### Treat depot change as a PCR type with conditional validation

Combines the process and uses change-impact rules to decide the downstream path.

## Decision Outcome

Propose representing depot change as a PCR type. Selecting this type adds depot-specific approvals to the PCR review matrix and consolidates overlapping approvers.

The request is classified during review:

- a change to manufacturing location, process, equipment, or other quality-relevant conditions proceeds to PPAP or another required validation process;
- a pickup, warehouse, or logistics-location change with no manufacturing or quality impact may close after the required commercial, materials, packaging, and logistics approvals.

A different initial owner may be used if the business determines that SQA should not coordinate depot changes.

## Consequences

### Positive

- Reduces supplier duplication.
- Preserves one traceable record for the change.
- Avoids unnecessary PPAP for logistics-only moves.

### Negative

- The impact-classification rules require cross-functional agreement.
- Incorrect classification could omit required validation.
- Ownership remains unresolved.

### Follow-up and Constraints

- Validate the design with all depot-change process owners.
- Define impact questions, owner, and approval matrix.
- Map existing fields and evidence.
- Define migration or coexistence during rollout.

## More Information

- Second transcript: approximately 2:19:57–2:27:55 and 2:35:44–2:36:55.
- Fourth transcript: approximately 1:35:17–1:44:47.
- The conditional PPAP path is now clear, but final process-owner approval remains outstanding.
