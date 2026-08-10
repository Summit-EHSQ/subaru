---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Jamie Dossey
  - Brianne Carroll
  - Keith Freeman
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
  - Supplier Portal
  - Production Part Approval Process (PPAP)
  - Process Change Requests (PCR)
---

# ADR-004: Centralize Internal SIA Supplier Ownership Roles with Flexible Reassignment

## Context and Problem Statement

Suppliers and internal users need to know which SIA representatives are responsible for a supplier across quality, procurement, supplier management, logistics, packaging, materials, and new-model functions. Current assignments are distributed across separate tools and spreadsheets. Assignments may change because of workload, commodity specialization, leave, or temporary assignment.

The PCR discussion also established that cross-functional approvals should resolve reviewers from these supplier-specific internal roles. Some roles are normally filled by one person but may have multiple members. In those cases, the role represents one approval responsibility rather than requiring every member to approve.

## Decision Drivers

- Give suppliers and internal teams a reliable ownership directory.
- Support workflow routing and escalation to the correct function.
- Account for commodity expertise, capacity, and temporary assignments.
- Reuse the same ownership model across supplier applications.
- Allow a role to contain more than one eligible person without multiplying required approvals.

## Considered Options

### Maintain internal ownership independently within each department

Retains local control but continues fragmented ownership data and manual reviewer selection.

### Auto-assign all internal roles solely from supplier attributes

Reduces manual work but cannot fully account for capacity, judgment, and temporary assignments.

### Maintain supplier-specific role assignments with defaults and authorized reassignment

Balances consistency, workflow automation, and operational flexibility.

## Decision Outcome

Maintain standardized internal SIA relationship roles on each supplier or supplier-depot record. The system may suggest likely assignees based on supplier type, commodity, function, or organizational rules, but authorized managers can confirm, change, and temporarily reassign those roles.

Applications such as PPAP and PCR will use the role assignments to populate responsible engineers, buyers, supplier-management representatives, and other reviewers. A role may contain multiple people where responsibility is legitimately shared. When the role represents one approval slot, the first authorized member to complete the response satisfies that role's approval while the system records the individual who acted.

An internal role assignment designates operational responsibility; it does not by itself prevent other authorized users from viewing supplier information.

## Consequences

### Positive

- Creates one ownership model used across supplier-related applications.
- Reduces manual reviewer selection.
- Supports temporary and shared assignments.
- Preserves individual traceability when a shared role completes an approval.

### Negative

- Shared roles can obscure accountability unless dashboards identify the acting person.
- Incorrect or stale assignments can delay multiple processes.
- Automatic defaults still require human confirmation in capacity-driven assignments.

### Follow-up and Constraints

- Define the internal role taxonomy and role-maintenance owners.
- Identify which roles are single-member, multi-member first-response, or all-member approval roles.
- Determine whether temporary assignments need effective dates and automatic reversion.
- Confirm how changes affect active workflow instances.

## More Information

- First transcript: approximately 1:26:53–1:34:24.
- Second transcript: approximately 2:37:07–2:40:32.
