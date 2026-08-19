---
status: proposed
date: '2026-08-18'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
- Keith Freeman
consulted:
- Roy Lowery
informed:
- Emma Lister
- Jillian
- Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
- Supplier Surveys
- Supplier Portal
- Notifications
- Reporting
---

# ADR-080: Use Reusable Campaigns for Supplier Information Requests

## Context and Problem Statement

SIA periodically requests information from many suppliers, including shutdown plans and confirmation of profile contacts. The current process combines Microsoft Forms, email lists, automation, and Power BI. It does not target recipients from governed supplier roles, update the supplier profile directly, or provide one traceable model for completion, reminders, and escalation.

## Decision Drivers

- Reuse one mechanism for recurring and one-time supplier requests.
- Select recipients from maintained supplier roles.
- Track completion, deadlines, reminders, and non-response.
- Confirm or correct supplier profile data rather than collecting an unsupported assertion.
- Reduce separate contact lists and manual follow-up.

## Considered Options

### Continue using separate forms, email lists, automation, and reports

Preserves the current process but keeps requests disconnected from supplier records and workflow responsibilities.

### Build a fixed-purpose shutdown survey

Addresses the immediate pain point but cannot support profile reviews or future information requests.

### Implement reusable information-request campaigns in Supplier Relationship Management

Provides configurable audience, questions, recipients, schedule, and traceability across use cases.

## Decision Outcome

Propose a reusable supplier information-request campaign model. Each campaign will define:

- a reusable checklist or question set;
- supplier selection criteria, including lifecycle status and other governed attributes;
- the external relationship role that receives the request;
- a one-time date or recurrence, response deadline, reminder rules, and escalation visibility; and
- whether supplier profile validation is included.

Launching a campaign creates traceable supplier-scoped requests or tasks. Dashboards must show completion and overdue populations, and notifications may remind non-responders without requiring a manually assembled email list.

When profile validation is enabled, display the maintained facility, contact, and role information for confirmation or correction. Return proposed changes for review where required and commit accepted changes to the governed supplier profile rather than retaining them only in the survey response.

## Consequences

### Positive

- Reuses one capability for shutdown surveys, data-quality checks, and future requests.
- Targets the maintained responsible role and provides response traceability.
- Can improve supplier contact quality through direct profile validation.
- Reduces fragmented forms, mailing lists, and follow-up reports.

### Negative

- Adds capability beyond direct replacement of the legacy supplier application.
- Reminder and escalation rules may create notification fatigue if poorly tuned.
- Campaign and checklist governance becomes an ongoing responsibility.

### Follow-up and Constraints

- Confirm scope and implementation sequencing.
- Define the first shutdown-survey checklist and audience rules.
- Define reminder cadence, escalation ownership, and non-response reporting.
- Define which profile changes require SIA review before commit.

## More Information

- Latest supplier-management design transcript: approximately 1:10:49–1:20:07.
- The twice-yearly shutdown survey is the first concrete use case; ADR-006 uses the same capability for periodic contact and role confirmation.

