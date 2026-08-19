---
status: accepted
date: 2026-08-18
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Brianne Carroll
  - Luke Filippo
  - Dave McLean
  - Joel Frick
consulted:
  - Shao Ngoi
  - Keith Freeman
  - Roy Lowery
informed:
  - Rick Redmond
  - Emma Lister
  - Jillian
primary-application: Supplier Relationship Management
secondary-applications:
  - Advanced Product Quality Planning (APQP)
  - Procurement / RFQ
---

# ADR-002: Begin the Intelex Supplier Lifecycle After Supplier Award

## Context and Problem Statement

Supplier sourcing, qualification, nomination, and award decisions are primarily made through Procurement and, in some cases, by Subaru Japan before SIA supplier management becomes involved. The award letter confirms that the commercial decision has been made and directs downstream teams to work with the supplier. The future Intelex solution must not duplicate those controls or introduce a supplier-approval authority that Supplier Management does not have.

## Decision Drivers

- Respect established procurement and Subaru Japan sourcing responsibilities.
- Avoid duplicating bid, award, and contract-management capabilities.
- Provide a clear trigger for supplier onboarding and downstream quality processes.
- Allow supplier master data to be received from an authoritative upstream source.
- Reflect that an awarded supplier may need to become operational before every profile item has been collected.

## Considered Options

### Manage sourcing, award, and onboarding entirely in Intelex

Creates end-to-end visibility but duplicates processes and responsibilities outside the workshop scope.

### Create an onboarding record after award and require another approval before activation

Provides a completeness gate but duplicates upstream vetting and implies an approval authority that does not exist.

### Create the supplier as active after award and track setup completeness separately

Aligns the lifecycle with actual authority while still making missing contacts, documents, training, and tasks visible.

## Decision Outcome

The Intelex supplier lifecycle begins after the supplier has been selected and awarded business. Create the supplier directly as an active supplier record after the award notification is verified. Do not introduce an intermediary supplier-approval state or an additional approval gate.

Track required contacts, documents, training, and setup tasks as profile-completeness work generated from governed templates. Those requirements do not prevent creation of the active supplier record, although incomplete items remain visible and subject to follow-up.

Intelex may retain relevant awarded-supplier documents, certifications, and references, but it will not be the primary system for competitive bidding, sourcing selection, or contract award.

## Consequences

### Positive

- Provides a clear integration boundary and lifecycle trigger.
- Reduces duplicate procurement functionality.
- Allows onboarding, APQP, supplier quality, and related processes to share one supplier record.
- Reflects the directive nature of the award letter and avoids a false internal approval step.

### Negative

- The solution depends on timely and accurate data from procurement or another upstream source.
- Pre-award context may be limited unless selected documents or metadata are passed into Intelex.
- An active supplier profile may temporarily contain incomplete setup information.

### Follow-up and Constraints

- Define the minimum supplier data required to create the onboarding record.
- Clarify which procurement documents should be retained or linked in Intelex.
- Apply ADR-005 to make incomplete setup requirements visible and actionable.
- Apply ADR-077 for the current manual post-award intake and initial migration pattern.

## More Information

- Transcript discussion: approximately 0:45:25–0:47:50 and 0:57:41–0:59:12.
- Latest supplier-management design transcript: approximately 0:34:02–0:50:48 and 1:01:44–1:03:31.
- The earlier proposed onboarding state is replaced by direct active-record creation with separately tracked completeness work.
