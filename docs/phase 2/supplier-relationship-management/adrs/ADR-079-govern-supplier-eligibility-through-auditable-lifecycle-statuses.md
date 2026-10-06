---
status: accepted
date: '2026-08-18'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
- Keith Freeman
- Roy Lowery
consulted: []
informed:
- Emma Lister
- Jillian
- Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
- Non-Conformance Management
- Supplier Scorecard
- Supplier Surveys
- Audit Management
- Advanced Product Quality Planning (APQP)
- Production Part Approval Process (PPAP)
- Reporting
---

# ADR-079: Govern Supplier Eligibility Through Auditable Lifecycle Statuses

## Context and Problem Statement

Supplier relationships continue in different forms after mass production ends. A service-parts-only supplier may remain eligible for selected quality activity while no longer receiving monthly scorecards or routine shutdown surveys. A fully inactive supplier should not participate in current workflows. Because status affects many downstream processes, an editable dropdown without history would create unacceptable ambiguity and error risk.

## Decision Drivers

- Apply consistent eligibility rules across supplier-facing applications.
- Preserve historical supplier records after current activity ends.
- Distinguish mass production, service-parts-only, and inactive relationships.
- Record who changed status, when, and why.
- Reactivate prior suppliers without splitting their history.

## Considered Options

### Treat supplier status as a reporting label only

Is simple but allows each downstream application to apply inconsistent eligibility rules.

### Implement separate lifecycle logic independently in each application

Supports local variation but duplicates rules and weakens governance.

### Use governed supplier statuses, a cross-application capability matrix, and auditable transitions

Centralizes eligibility while retaining application-specific permitted behavior.

## Decision Outcome

Maintain at least the following supplier lifecycle statuses:

- `Active` for current mass-production relationships;
- `Service Parts Only` for suppliers that remain active for service obligations but are excluded from selected mass-production processes; and
- `Inactive` for suppliers with no current operational or contractual workflow eligibility.

Define a governed capability matrix showing, for each status and connected application, whether the supplier may be selected for new records, receive scheduled scorecards or surveys, participate in audits or other workflows, and retain historical visibility.

Do not edit the current status directly. Create a status-transition record that stores the old and new statuses, effective date, acting user, and rationale. Apply the transition manually; do not add an approval workflow initially because the underlying business decision is expected to be vetted before system entry and complete inactivation is infrequent. The transition model must allow an approval step to be added later if ownership changes.

When an inactive or service-parts-only supplier receives new business, reactivate the existing supplier record rather than creating a duplicate. Apply the current ADR-005 template and require confirmation or correction of existing contacts and requirements before relying on them for new work.

## Consequences

### Positive

- Produces consistent downstream behavior from one governed lifecycle state.
- Preserves full supplier history across inactivity and reactivation.
- Makes consequential changes traceable and reportable.
- Allows stronger approval controls to be added without replacing the event model.

### Negative

- An incorrect transition can affect several applications at once.
- Every connected application must be added to and tested against the capability matrix.
- The initial design does not technically prevent one authorized user from making an erroneous transition.

### Follow-up and Constraints

- Define the complete status-capability matrix.
- Confirm the operational owner who enters each transition.
- Determine whether a distinct `Warranty Only` status is required and which NCR or warranty actions it permits.
- Define reactivation completeness and confirmation tasks.

## More Information

- Latest supplier-management design transcript: approximately 1:02:38–1:49:40.
- The possible `Warranty Only` state and its permitted behavior remain unresolved and are not part of the accepted initial status set.
