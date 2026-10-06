---
status: accepted
date: '2026-10-01'
decision-date: not-recorded-in-transcript
deciders:
- Joel Frick
- Keith Freeman
consulted:
- Dave McLean
informed:
- Rick Redmond
primary-application: Supplier Scorecard
secondary-applications:
- Supplier Relationship Management
- Production Part Approval Process (PPAP)
- Non-Conformance Management
- Supplier Portal
---

# ADR-115: Separate Aggregate Scorecard Access from Source-Record Security and Restrict Administration

## Context and Problem Statement

Some contributing PPAP and non-conformance records are restricted by new-model or mass-production classifications. Scorecards expose aggregate results rather than drawing-level or transaction-level details. Separately, KPI rules, benchmarks, supplier participation, versioning, publishing, and overrides can materially change reported supplier performance.

## Decision Drivers

- Keep aggregate scorecard access understandable.
- Preserve source-application confidentiality.
- Prevent ordinary contributors from changing scoring rules or queried results.
- Give a small business-owned group controlled application administration.

## Considered Options

### Propagate every source-record classification to scorecard values

Protects derived data conservatively but fragments the aggregate score and may hide the complete supplier result.

### Give every contributor configuration and override access

Is operationally convenient but weakens score integrity and governance.

### Use broad authorized scorecard visibility with restricted administration

Allows complete aggregate assessment while source details and application setup remain controlled.

## Decision Outcome

Within a user's supplier-entity scope, grant authorized internal Supplier Scorecard users access to the complete aggregate scorecard without splitting results by PPAP new-model versus mass-production classification. Continue to enforce the source application's security when the user drills into PPAP, non-conformance, or other transactional detail.

Create a **Supplier Scorecard Application Administrator** group. Limit KPI setup, supplier participation, benchmark maintenance, publishing, versioning, and query-result override controls to that group and system administrators.

Allow ordinary contributors to refresh a query result but not override it. An administrator override must retain the queried, overridden, and effective values together with actor, time, and an internal rationale. Do not implement a separate low-volume exception-approval workflow at this time.

## Consequences

### Positive

- Authorized users receive one complete supplier-performance view.
- Restricted transaction details remain protected at source.
- Scoring configuration and overrides have clear ownership.
- A low-volume use case does not create a disproportionate workflow.

### Negative

- Aggregate totals may imply restricted activity that the user cannot inspect.
- Override requests and approvals may be communicated outside Intelex.
- Administrator membership and activity require governance.

### Follow-up and Constraints

- Define membership and separation-of-duty expectations for the administrator group.
- Test that scorecard drilldowns never bypass source-record security.
- Reconsider a formal exception workflow if override volume becomes material.
- Introduce additional visibility classification only when a concrete sensitive scorecard measure requires it.

## More Information

- Phase 2A design workshop day 3 afternoon: approximately 1:08:10–1:17:55 and 1:44:54–1:52:15.
- ADR-084 governs source-record visibility classifications; ADR-086 governs review and publication.

