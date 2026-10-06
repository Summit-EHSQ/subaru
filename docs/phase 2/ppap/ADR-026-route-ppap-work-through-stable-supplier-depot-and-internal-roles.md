---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Keith Freeman
  - Jamie Dossey
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Brianne Carroll
  - Joel Frick
  - Rick Redmond
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
  - Supplier Relationship Management
  - Supplier Portal
---

# ADR-026: Route PPAP Work Through Stable Supplier-Depot and Internal Roles

## Context and Problem Statement

A PPAP can involve several supplier users, and suppliers may add temporary resources during heavy model-launch periods. Creating a unique role for every PPAP would produce an excessive number of roles. Assigning every task to a single named person would make turnover and reassignment difficult. Internal sample inspections also need team-based intake with the ability to establish individual ownership.

Initial drawing review and PPAP ownership also differ by change context. Model-change work is commonly organized by part or commodity, while running-change work is organized primarily by supplier. Maintaining a perfect engineer assignment for every individual part would create a large and fragile routing table.

## Decision Drivers

- Reuse stable supplier responsibility assignments.
- Avoid creating thousands of transaction-specific roles.
- Support supplier staffing changes without editing each open PPAP.
- Prevent tasks from being issued with no responsible supplier contact.
- Allow internal teams to balance work while retaining individual accountability.
- Reflect different ownership for model changes, running changes, and process changes.
- Avoid making part-level assignment data a prerequisite for reliable routing.

## Considered Options

### Assign each PPAP to one named supplier user

Creates clear ownership but is fragile when supplier staffing changes.

### Create a unique role for every PPAP

Supports multiple recipients but introduces scale and maintenance concerns.

### Route through supplier/depot roles and use reassignment for internal execution

Balances stability, shared access, and operational accountability.

### Maintain an exact responsible engineer for every part number

Could reduce reassignment but would require high-volume data to be continuously complete and correct.

## Decision Outcome

Route supplier-facing PPAP tasks to the PPAP coordinator role associated with the relevant supplier depot. The role may contain multiple supplier users, all of whom can receive notifications and access the assigned work. The system must block PPAP release when the required role has no active member.

For internal inspection tasks, route initially to the designated team leader or inspection-team role. Authorized users may reassign the task to one individual for execution. This supports vacation and workload coverage while making the acting owner visible.

Maintain distinct internal PPAP responsibility roles in Supplier Relationship Management for model-change, mass-production or running-change, and process-change work. Use the source or change type plus supplier context to resolve the initial drawing-review and PPAP owner. The resolved owner may reassign the work within the appropriate team when commodity, part familiarity, capacity, or model staffing requires another engineer.

Do not require part-number-level ownership for the initial implementation. It may be added later through governable commodity or part-group rules, but routing must continue to have a supplier-role fallback.

This decision applies the relationship-role architecture in ADR-003 and ADR-004 to PPAP workflows.

## Consequences

### Positive

- Scales with supplier volume without role proliferation.
- Allows staffing changes to propagate to open work.
- Supports team intake and individual execution internally.
- Reduces the current overexposure of PPAP data to unrelated supplier users.
- Provides practical change-type routing without depending on a perfect part-owner table.

### Negative

- Shared supplier assignment does not guarantee one person takes ownership.
- All role members may receive notifications that are not relevant to them.
- Reassignment behavior must be tested for active workflows.
- Model-change work will still require reassignment when supplier-level defaults do not match the actual commodity allocation.

### Follow-up and Constraints

- Define role naming and depot inheritance.
- Confirm how role changes affect open workflow instances.
- Define overdue escalation where multiple users share responsibility.
- Define who can reassign internal inspection tasks.
- Add and govern the three internal PPAP responsibility roles in the SRM role catalogue.
- Define the fallback when the applicable role is empty and whether initial review may be released without an active assignee.

## More Information

- Second transcript: approximately 1:26:13–1:39:02.
- PPAP design workshop transcript: approximately 1:44:03–1:55:49.
