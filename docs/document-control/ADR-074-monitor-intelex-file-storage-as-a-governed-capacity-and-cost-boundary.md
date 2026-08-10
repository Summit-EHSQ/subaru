---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Andrea Turner
- Rick Redmond
consulted:
- Dave McLean
- Eric McGregor
- Keith Freeman
informed:
- Joel Frick
primary-application: Document Control
secondary-applications:
- Intelex Platform
- Production Part Approval Process (PPAP)
- Training Management
- Shipping, Receiving and Inspection (Pilot Part Data)
---

# ADR-074: Monitor Intelex File Storage as a Governed Capacity and Cost Boundary

## Context and Problem Statement

The program will store controlled documents, PPAP evidence, drawings, inspection images, training packages, and other attachments. Standard contract language may provide a finite storage allocation. Files imported through integrations or browsers are not automatically compressed in the same way as photos captured through the mobile app.

## Decision Drivers

- Prevent storage limits from disrupting workflows.
- Understand the effect of the initial document migration and high-volume supplier evidence.
- Keep files in the governed Intelex repository unless a supported enterprise content integration is deliberately adopted.
- Budget for growth transparently.

## Considered Options

### Assume standard capacity will be sufficient

Requires no planning but creates operational and commercial risk.

### Store general attachments in ad hoc external locations

Reduces Intelex usage but weakens security, versioning, and portability.

### Measure, monitor, and resize contracted storage

Keeps the governed repository while treating capacity as an operational control.

## Decision Outcome

Verify the contracted Intelex storage allocation. Measure the initial Document Control migration and estimate expected growth from PPAP, drawings, inspections, training, and other high-volume use cases.

Store governed application files in Intelex unless a separately approved and supported content-management integration is implemented. Monitor consumption periodically and purchase additional capacity before the operational threshold is reached. Do not assume imported files will be compressed by Intelex.

## Consequences

### Positive

- Reduces the risk of unexpected capacity constraints.
- Keeps records and evidence within governed application security.
- Supports transparent budgeting.

### Negative

- Additional storage may create recurring cost.
- Large files can consume capacity quickly.
- Usage forecasting depends on future process volume and retention.

### Follow-up and Constraints

- Confirm the contractual allocation and alert thresholds.
- Measure the initial migration and representative PPAP packages.
- Define monitoring ownership, reporting cadence, retention, and archival rules.
- Review unusually large file types and authoring practices.

## More Information

- Fourth transcript: approximately 2:45:32–2:55:39 and 3:01:27–3:02:46.
