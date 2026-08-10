---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Luke Filippo
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

# ADR-003: Centralize External Supplier Contacts by Standardized Relationship Roles

## Context and Problem Statement

Different SIA departments currently maintain separate supplier contact lists and repeatedly search for the correct person at a supplier. Contacts may differ by facility, development phase, mass-production responsibility, and process. A simple list of people is insufficient because downstream workflows need to resolve responsibility by business function and operational location.

The PPAP and PCR discussions further established that role assignments must be reusable by workflows. Creating a unique assignment role for every PPAP would generate an unsustainable number of roles. The reusable boundary is the supplier or supplier depot, with process-specific responsibilities such as PPAP coordination represented as standardized relationship roles.

## Decision Drivers

- Reduce redundant contact collection across departments.
- Support development-to-mass-production handover.
- Make supplier contacts discoverable and routable by responsibility.
- Allow the same person to fill multiple roles and multiple people to share a role.
- Avoid creating temporary security or workflow roles for every transaction.
- Allow personnel changes to be reflected across open and future supplier work.

## Considered Options

### Allow each department to maintain its own contact list

Preserves local control but continues duplication, inconsistent data, and manual routing.

### Create a new recipient role for each PPAP or PCR

Provides precise transaction-level membership but would create thousands of short-lived roles and introduce performance and administration concerns.

### Maintain standardized roles at the supplier or supplier-depot level

Creates a stable relationship model that can be reused across applications and transactions.

## Decision Outcome

Maintain centralized external supplier contacts linked to each supplier and, where responsibilities differ by facility, supplier depot. Classify those contacts through standardized relationship roles.

Expected roles include commercial, program, quality, logistics, development, mass-production, and PPAP coordinator responsibilities. The role set provides expected placeholders rather than making every role mandatory for every supplier. A contact may occupy more than one role, and a role may contain multiple contacts.

PPAP and related supplier work will resolve recipients from these stable supplier or depot roles rather than creating a role for each transaction. A process that requires a populated role must prevent submission when no active contact is assigned. Where the workflow engine supports role-based responsibility, changing role membership should transfer access and responsibility for open and future work without manually editing each transaction.

## Consequences

### Positive

- Creates one reusable supplier contact model for multiple applications.
- Reduces transaction-specific role creation and maintenance.
- Supports shared responsibility when suppliers add temporary capacity.
- Allows role changes to propagate to open work.

### Negative

- One-to-many assignment can weaken individual accountability.
- Role data must be actively governed or workflow routing will fail.
- Supplier and depot boundaries must be modeled consistently.

### Follow-up and Constraints

- Define the initial external role taxonomy and supplier/depot scope rules.
- Confirm how existing open workflow instances respond to membership changes.
- Define validation and escalation when a required role is empty.
- Align role membership with Supplier Portal accounts and organization-level security.

## More Information

- First transcript: approximately 0:48:31–0:51:49 and 1:05:46–1:08:27.
- Second transcript: approximately 1:26:13–1:35:58 and 2:37:07–2:39:18.
