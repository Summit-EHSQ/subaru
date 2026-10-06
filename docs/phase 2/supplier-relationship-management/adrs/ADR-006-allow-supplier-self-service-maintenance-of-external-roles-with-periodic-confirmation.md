---
status: proposed
date: 2026-08-18
decision-date: not-recorded-in-transcript
deciders:
  - Brianne Carroll
  - Jamie Dossey
  - Luke Filippo
  - Keith Freeman
  - Dave McLean
  - Joel Frick
consulted:
  - Shao Ngoi
  - Roy Lowery
informed:
  - Rick Redmond
  - Emma Lister
  - Jillian
primary-application: Supplier Relationship Management
secondary-applications:
  - Supplier Portal
  - Production Part Approval Process (PPAP)
  - Process Change Requests (PCR)
---

# ADR-006: Allow Supplier Self-Service Maintenance of External Roles with Periodic Confirmation

## Context and Problem Statement

Supplier personnel change frequently, and SIA often discovers that a contact is obsolete only when outreach fails. The current collaboration model allows suppliers to update organizational roles, but periodic survey prompts have not reliably produced accurate updates because they ask only for a general assertion rather than presenting the maintained data for review. PPAP, PCR, and other routing will depend directly on role accuracy, making stale assignments an operational as well as an administrative problem.

## Decision Drivers

- Keep contact maintenance close to the supplier that knows the personnel changes.
- Reduce manual follow-up by SIA administrators.
- Provide an auditable confirmation rather than an informal survey response.
- Support configurable review frequency for different supplier relationships.
- Allow role changes to update workflow routing without editing every open record.
- Preserve SIA authority to correct supplier-maintained information.
- Reuse a traceable campaign mechanism for scheduled and one-time confirmation requests.

## Considered Options

### Require SIA administrators to maintain all supplier contacts

Provides control but scales poorly and depends on SIA learning about external changes.

### Allow supplier updates with no periodic confirmation

Minimizes friction but permits stale records to persist indefinitely.

### Allow supplier self-service and create periodic confirmation tasks

Combines supplier ownership with traceable review and workflow continuity.

## Decision Outcome

Permit authorized supplier users to maintain their organization's contacts and relationship-role assignments, including operational roles used by PPAP and PCR. SIA retains authority to correct the same information. Direct confirmation requests to a designated supplier profile-data manager or other configured role.

Use the reusable information-request campaign from ADR-080 to display the current facility, contact, and role information for affirmative review and correction. Approved changes update the governed supplier profile; a generic yes/no survey response alone is insufficient evidence that the maintained data was reviewed.

The current six-month cadence may be used as an initial reference, but the final frequency should be configurable rather than hard-coded and may be aligned with another supplier campaign. Completion requires an affirmative review action. Where supported, changing role membership should update responsibility for open and future role-assigned tasks.

## Consequences

### Positive

- Reduces administrative maintenance and improves data timeliness.
- Creates evidence that contact information was reviewed.
- Supports continuity when supplier personnel change.
- Uses the maintained supplier profile as the review source instead of a disconnected survey question.

### Negative

- Suppliers may still confirm inaccurate information without reviewing it.
- Self-service requires strict organization-level permissions.
- Reassigning active work can create confusion if changes are not communicated.

### Follow-up and Constraints

- Decide who at the supplier may update roles and who at SIA may override them.
- Define confirmation frequency and escalation for non-response.
- Confirm workflow-engine behavior when role membership changes.
- Decide whether a changed role triggers training or access recertification.
- Apply ADR-081 when a contact change also requests, removes, or reallocates portal access.

## More Information

- First transcript: approximately 1:13:01–1:14:29 and 1:32:45–1:34:24.
- Second transcript: approximately 1:31:45–1:33:56.
- Latest supplier-management design transcript: approximately 0:57:01–1:01:22 and 1:10:49–1:16:33.
- Maintenance ownership, exact frequency, and reassignment behavior remain partly open; therefore this ADR remains proposed.
