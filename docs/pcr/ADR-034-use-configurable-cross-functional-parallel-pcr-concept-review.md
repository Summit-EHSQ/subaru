---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Jamie Dossey
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Keith Freeman
  - Brianne Carroll
  - Joel Frick
  - Rick Redmond
primary-application: Process Change Requests (PCR)
secondary-applications:
  - Supplier Relationship Management
  - Production Part Approval Process (PPAP)
---

# ADR-034: Use Configurable Cross-Functional Parallel PCR Concept Review

## Context and Problem Statement

The current PCR process is quality-focused, but supplier process changes may also affect cost, capacity, logistics, packaging, procurement, and supplier-management responsibilities. Keeping concept review solely within SQA misses cross-functional impacts and can force separate reviews in other tools.

## Decision Drivers

- Identify cost, capacity, logistics, and quality impacts before validation begins.
- Avoid sending obviously invalid requests to a large reviewer group.
- Resolve approvers from supplier-specific internal roles.
- Allow mandatory and optional participation by change context.
- Keep the detailed PPAP validation within the quality process after concept approval.

## Considered Options

### Keep concept review entirely within SQA

Preserves the existing process but misses non-quality impacts.

### Send every PCR immediately to every supplier-related department

Maximizes visibility but creates unnecessary workload and noise.

### Use initial triage followed by configurable parallel cross-functional review

Filters invalid requests and applies only the relevant approval matrix.

## Decision Outcome

Use a two-layer PCR concept-review pattern. The designated PCR owner first reviews the supplier submission, manages clarification, and confirms that it is ready for cross-functional review. The system then activates parallel review slots generated from configurable rules.

The configuration identifies mandatory and optional reviewing roles, target timelines, and the supplier-specific role members who may respond. Mandatory review slots cannot be removed from the transaction. Optional slots may be removed by the PCR owner when demonstrably irrelevant. Where a role has multiple eligible members, the first authorized response satisfies that role's slot unless the role is configured to require all members.

All required concept reviews must be completed before the PCR can proceed to PPAP. The detailed PPAP remains quality-managed.

## Consequences

### Positive

- Brings cross-functional impacts into one governed process.
- Avoids duplicate manual reviewer selection.
- Supports parallel turnaround rather than serial routing.
- Reuses the internal supplier-role model.

### Negative

- More reviewers can lengthen the concept stage.
- A single missing mandatory response can hold the request.
- The owner role and approval matrix require governance.

### Follow-up and Constraints

- Confirm the default PCR owner and escalation path.
- Define mandatory and optional review roles by PCR type.
- Define review deadlines, reminders, and non-response handling.
- Define the response options, including not applicable.

## More Information

- Second transcript: approximately 2:15:50–2:30:51 and 2:37:07–2:41:27.
- The architectural pattern was agreed; the exact role matrix and final owner remain configuration decisions.
