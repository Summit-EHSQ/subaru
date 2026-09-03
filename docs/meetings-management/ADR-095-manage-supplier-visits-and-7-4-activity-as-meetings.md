---
status: proposed
date: 2026-09-02
decision-date: not-recorded-in-transcript
deciders:
  - Dave McLean
  - Joel Frick
consulted:
  - Keith Freeman
informed:
  - Rick Redmond
primary-application: Meetings Management
secondary-applications:
  - Supplier Relationship Management
  - Non-Conformance Management
---

# ADR-095: Manage Supplier Visits and 7-4 Activity as Meetings

## Context and Problem Statement

Supplier visits and 7-4 follow-up activity are currently represented through a problem-reporting form because it provides preparation tasks and post-visit actions. The activity is fundamentally a meeting or visit with invitees, attendance, minutes, findings, and resulting work. Adding a meeting-shaped branch to the PIR workflow would increase conditional complexity and continue to misclassify the record.

## Decision Drivers

- Represent supplier visits according to their actual purpose.
- Track preparation, attendance, minutes, findings, and resulting actions.
- Assign work to internal or supplier users.
- Support one-time and recurring visits.
- Relate visits to the supplier and, where applicable, the governing NCR or 7-4 artifact.

## Considered Options

### Continue using a PIR subtype for supplier visits

Retains current behavior but requires a heavily reduced and conditional PIR path.

### Create a custom supplier-visit application

Provides complete control but duplicates meeting capabilities.

### Configure Meetings Management for supplier visits

Uses a purpose-built meeting and action model with supplier-specific extensions.

## Decision Outcome

Propose using Meetings Management for supplier visits and 7-4 activity. Relate the meeting to the applicable supplier and optionally to the originating supplier NCR or generated 7-4 artifact. Use meeting tasks for preparation work and resulting internal or supplier actions.

Extend the application only as needed to apply supplier-entity security, supplier contact routing, and supplier-profile navigation. Do not extend the PIR workflow solely to capture meeting activity.

## Consequences

### Positive

- Uses a model aligned with meetings and visits.
- Supports preparation and resulting actions without misclassifying the record.
- Enables visit history and actions to appear in the supplier workspace.
- May support other internal and external meeting use cases.

### Negative

- Requires supplier relationships and security inheritance not native to the baseline application.
- Existing 7-4 terminology and reports require mapping.
- The direction depends on licensing and product-fit confirmation.

### Follow-up and Constraints

- Confirm that Meetings Management is licensed.
- Review the out-of-the-box application with stakeholders.
- Validate supplier portal assignment and supplier-entity security.
- Define the relationship among the NCR, generated 7-4 artifact, visit, and follow-up actions.
- Confirm whether recurring annual supplier visits use the same configuration.

## More Information

- Supplier NCR and warranty workflow transcript: approximately 2:18:44–2:32:22.
- ADR-052 governs generation of the 7-4 controlled output.
