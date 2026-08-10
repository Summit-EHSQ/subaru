---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Brianne Carroll
consulted:
- Dave McLean
informed:
- Andrea Turner
- Vijay Akella
- Joel Frick
- Rick Redmond
primary-application: Intelex Platform
secondary-applications: []
---

# ADR-066: Establish Central Intelex Product Ownership and Cross-Functional Governance

## Context and Problem Statement

Intelex will support many business units and shared data structures over a multi-phase program. A change requested by one function can affect other applications, security, integrations, and reporting. The platform therefore needs ownership beyond individual project workstreams.

## Decision Drivers

- Coordinate cross-functional impacts.
- Prioritize changes and future applications consistently.
- Maintain accountability after implementation partners roll off.
- Create a single point of ownership for releases, improvements, and projects.

## Considered Options

### Let each business unit manage its own application changes

Maximizes local autonomy but creates platform fragmentation.

### Transfer all ownership to IT

Centralizes control but may separate product decisions from business needs.

### Assign a business-facing platform owner supported by cross-functional governance and IT

Balances product ownership, technical support, and stakeholder coordination.

## Decision Outcome

SIA will establish a governance plan and assign a central Intelex coordinator, preferably transferred from the business, to own the platform as a whole. The coordinator manages improvement requests, additional capabilities, updates, and future Intelex projects.

During the implementation program, use a steering-committee structure with sponsors, project leadership, business representatives, IT, and delivery partners. After the program, retain a recurring cross-functional forum that reviews platform health, release impacts, priorities, shared-component changes, and the roadmap. IT supports identity, integrations, security, and enterprise controls rather than acting as the sole product owner.

## Consequences

### Positive

- Creates durable ownership.
- Reduces uncoordinated cross-application changes.
- Provides a home for roadmap and release decisions.

### Negative

- The coordinator role requires authority, capacity, and succession planning.
- Governance can slow small local changes if decision rights are unclear.
- Business and IT responsibilities must be explicitly divided.

### Follow-up and Constraints

- Name the coordinator and governance members.
- Define intake, impact assessment, decision rights, release cadence, and escalation.
- Define support responsibilities after project completion.

## More Information

- Fourth transcript: approximately 1:12:23–1:18:13.
