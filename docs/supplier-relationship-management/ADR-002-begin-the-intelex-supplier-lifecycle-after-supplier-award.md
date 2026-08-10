---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Brianne Carroll
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
  - Advanced Product Quality Planning (APQP)
---

# ADR-002: Begin the Intelex Supplier Lifecycle After Supplier Award

## Context and Problem Statement

Supplier sourcing and award decisions are primarily made through procurement and, in some cases, by Subaru Japan before SIA supplier management becomes involved. The future Intelex solution must have a clear boundary so that it does not duplicate commercial sourcing processes or imply control over decisions that occur outside SIA.

## Decision Drivers

- Respect established procurement and Subaru Japan sourcing responsibilities.
- Avoid duplicating bid, award, and contract-management capabilities.
- Provide a clear trigger for supplier onboarding and downstream quality processes.
- Allow supplier master data to be received from an authoritative upstream source.

## Considered Options

### Manage sourcing, award, and onboarding entirely in Intelex

Creates end-to-end visibility but duplicates processes and responsibilities outside the workshop scope.

### Create suppliers manually in Intelex at an undefined point

Is simple initially but produces inconsistent lifecycle boundaries and duplicate data entry.

### Create or import the supplier in Intelex after award and use Intelex for onboarding onward

Aligns the solution with SIA's actual responsibility and downstream needs.

## Decision Outcome

The Intelex supplier lifecycle begins after the supplier has been selected and awarded business. A supplier record will be created or received from an upstream system at that point and will enter an onboarding state.

Intelex may retain relevant awarded-supplier documents, certifications, and references, but it will not be the primary system for competitive bidding, sourcing selection, or contract award.

## Consequences

### Positive

- Provides a clear integration boundary and lifecycle trigger.
- Reduces duplicate procurement functionality.
- Allows onboarding, APQP, supplier quality, and related processes to share one supplier record.

### Negative

- The solution depends on timely and accurate data from procurement or another upstream source.
- Pre-award context may be limited unless selected documents or metadata are passed into Intelex.

### Follow-up and Constraints

- Identify the authoritative source and integration mechanism for awarded supplier data.
- Define the minimum supplier data required to create the onboarding record.
- Clarify which procurement documents should be retained or linked in Intelex.

## More Information

- Transcript discussion: approximately 0:45:25–0:47:50 and 0:57:41–0:59:12.
- The exact upstream system and integration pattern were not defined.
