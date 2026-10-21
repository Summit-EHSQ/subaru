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
  - Supplier Tasks
---

# ADR-095: Manage Supplier Visits and 7-4 Activity as Meetings

## Context and Problem Statement

Supplier visits and 7-4 follow-up activity are currently represented through a problem-reporting form because it provides preparation tasks and post-visit actions. The activity is fundamentally a meeting or visit with invitees, attendance, minutes, findings, and resulting work. Adding a meeting-shaped branch to the PIR workflow would increase conditional complexity and continue to misclassify the record.

## Decision Drivers

- Represent supplier visits according to their actual purpose.
- Track preparation, attendance, minutes, findings, and resulting actions.
- Assign work to internal or supplier users.
- Support independently scheduled visits without implying a rigid recurring calendar.
- Relate visits to the supplier and, where applicable, the governing NCR or 7-4 artifact.
- Route resulting work into the shared supplier-task model.

## Considered Options

### Continue using a PIR subtype for supplier visits

Retains current behavior but requires a heavily reduced and conditional PIR path.

### Create a custom supplier-visit application

Provides complete control but duplicates meeting capabilities.

### Configure Meetings Management for supplier visits

Uses a purpose-built meeting and action model with supplier-specific extensions.

## Decision Outcome

Propose using Meetings Management for supplier visits and 7-4 activity. Relate the meeting to the applicable supplier and optionally to one or more originating or agenda-relevant supplier NCRs, PIRs, or generated 7-4 artifacts. The relationship to problems is informational rather than a hard workflow dependency and is normally established while preparing the meeting agenda.

Extend the application only as needed to apply supplier-entity security, supplier contact routing, supplier-profile navigation, and centralized task creation. When scheduling starts from a supplier profile, default the supplier context. Limit selectable invitees to SIA employees and contacts associated with the selected supplier. Record invitations, actual attendance, agenda, minutes, findings, organizer, and meeting timing in the meeting record.

Treat supplier visits as individually scheduled meetings rather than using rigid recurring-meeting automation. When a meeting produces follow-up work, create the action in the shared Supplier Tasks object governed by ADR-103 and retain the meeting as its source. A resulting task may itself be recurring when the action establishes a repeated obligation.

Store large meeting recordings in the authorized collaboration or video-hosting service and retain a link on the meeting record rather than uploading the video to Intelex. The source service continues to govern access and retention. Meeting summaries may be produced through a merge template when a distributable document is required.

Do not extend the PIR workflow solely to capture meeting activity.

## Consequences

### Positive

- Uses a model aligned with meetings and visits.
- Supports preparation and resulting actions without misclassifying the record.
- Enables visit history and actions to appear in the supplier workspace.
- May support other internal and external meeting use cases.
- Consolidates follow-up actions with other supplier work while preserving their meeting source.
- Avoids consuming Intelex file storage for large video recordings.

### Negative

- Requires supplier relationships and security inheritance not native to the baseline application.
- Existing 7-4 terminology and reports require mapping.
- Unregistered attendees may need to be noted in the minutes unless attendee handling is extended.
- The direction depends on product-fit confirmation and approval of any required change order.

### Follow-up and Constraints

- Meetings Management licensing is confirmed.
- Review the out-of-the-box application with stakeholders.
- Validate supplier portal assignment and supplier-entity security.
- Define the relationship among the NCR, generated 7-4 artifact, visit, and follow-up actions.
- Confirm whether any genuinely fixed recurring meetings require recurrence; ordinary supplier visits will be scheduled individually.

## More Information

- Supplier NCR and warranty workflow transcript: approximately 2:18:44–2:32:22.
- "Summit EHSQ | SIA | Revisit PIR Requirements + WCAR" transcript, 21 Oct 2026, 10:30 AM–12:00 PM ET: approximately 1:09:11–1:27:52. This discussion confirmed product licensing, refined supplier and NCR relationships, selected one-off scheduling for ordinary visits, and routed follow-up actions through Supplier Tasks.
- ADR-052 governs generation of the 7-4 controlled output.
- ADR-103 governs the shared Supplier Tasks model.
