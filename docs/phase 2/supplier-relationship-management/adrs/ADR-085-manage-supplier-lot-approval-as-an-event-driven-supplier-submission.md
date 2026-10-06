---
status: accepted
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
consulted:
- Keith Freeman
informed:
- Emma Lister
- Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
- Supplier Portal
- Shipping, Receiving and Inspection (Pilot Part Data)
---

# ADR-085: Manage Supplier Lot Approval as an Event-Driven Supplier Submission

## Context and Problem Statement

Selected suppliers must provide measurements, images, and related evidence for applicable production lots so SIA can review the lot before use. The production schedule is controlled by the supplier and is not available to Intelex. Recurring calendar tasks could therefore request records for lots that were not produced or fail to match multiple lots produced during one period.

The current process requires internal reviewers to check repeatedly for submissions that may not exist and does not notify them when a supplier has submitted new evidence.

## Decision Drivers

- Align each submission with an actual supplier production lot.
- Avoid tasks that do not correspond to real production activity.
- Stop internal reviewers from polling for absent submissions.
- Route submitted evidence promptly to the responsible internal reviewers.
- Preserve supplier, part, evidence, review, and approval traceability.
- Limit the requirement to suppliers and parts for which lot approval is applicable.

## Considered Options

### Continue supplier submissions with periodic internal polling

Matches the current initiation model but wastes reviewer time and can delay approval.

### Pre-create recurring supplier tasks

Provides reminders but cannot align reliably with an unknown production schedule.

### Let suppliers create a submission for each actual lot and notify the internal role

Aligns system activity with the real event and initiates review only when evidence exists.

## Decision Outcome

Use an event-driven Supplier Lot Approval process. For each applicable production lot, the supplier creates a record related to the supplier entity and part, enters the required lot and measurement details, attaches the required evidence, and submits it for review.

Submission routes a notification or task to the configured internal responsibility role or review group. The internal reviewer records the review and approval outcome in the same traceable process.

Do not generate scheduled recurring tasks for this use case unless a future authoritative production schedule becomes available. Govern applicability through an explicit supplier, part, or supplier-part rule rather than presenting the process as a general requirement for every supplier.

## Consequences

### Positive

- System records correspond to actual production lots.
- Reviewers receive work only when a supplier submits evidence.
- Lot evidence and approval decisions become traceable.
- The design accommodates suppliers producing more or fewer lots than an assumed schedule.

### Negative

- The process still depends on the supplier initiating every required submission.
- Missing submissions cannot be detected from scheduling alone.
- Applicability and routing data must be governed accurately.

### Follow-up and Constraints

- Define applicability at supplier, part, or supplier-part level.
- Define required fields, attachments, outcomes, notifications, and escalation behavior.
- Determine whether structured measurements can reuse the inspection framework from ADR-040 and ADR-041.
- Define reporting that identifies expected production activity when another source can establish that a submission may be missing.

## More Information

- Subsequent supplier workflow transcript: approximately 0:59:36–1:09:17.
- “Supplier Lot Approval” is the accepted working name; final application terminology may be refined during implementation.
