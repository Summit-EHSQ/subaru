---
status: accepted
date: 2026-09-29
decision-date: not-recorded-in-transcript
deciders:
  - Joel Frick
  - Dave McLean
consulted: []
informed:
  - Emma Lister
  - Rick Redmond
primary-application: Shipping, Receiving and Inspection (Pilot Part Data)
secondary-applications:
  - Production Part Approval Process (PPAP)
  - Product Management
---

# ADR-100: Begin Pilot Part Data Without Historical Inspection Migration

## Context and Problem Statement

Historical pilot inspection information exists outside the proposed normalized structure. Reconstructing events, shipments, checklist versions, samples, responses, and failure relationships would be complex and could create misleading records. The discussed migration scope covers closed PPAP history but not historical Pilot Part Data.

## Decision Drivers

- Preserve the integrity of the new normalized object model.
- Avoid fabricating incomplete historical relationships.
- Reduce migration and validation risk.
- Keep active workflow migration distinct from closed-record loading.
- Allow relevant part records to be seeded through production integrations.

## Considered Options

### Migrate all historical pilot data

Maximizes availability but requires extensive reconstruction and validation.

### Import aggregate results or attachments only

Provides partial history but may be mistaken for complete structured evidence.

### Do not migrate historical pilot inspection data

Starts the new workflow with complete and governed records while retaining legacy history in its existing repository.

## Decision Outcome

Do not migrate historical Pilot Part Data into the new inspection object model. The first pilot records will be created through PPAP activity after the new workflow becomes operational.

Seed required active and in-development part records by replaying a governed filter through the BOMEX and PartsMaster integrations rather than through a separate part-migration mapping.

Migrate closed PPAP history under the PPAP migration scope. Do not import active PPAPs into arbitrary in-progress workflow states as a default approach. Complete them in the legacy system, recreate them deliberately, or load them after closure using the governed templates and mappings.

## Consequences

### Positive

- Every new pilot record conforms to the final workflow and relationships.
- Avoids incomplete or misleading historical inspection records.
- Reuses production integrations for part bootstrap.

### Negative

- Historical pilot results remain outside the new application.
- Users may need legacy access during the retention period.
- Cutover planning must distinguish closed PPAPs from active work.

### Follow-up and Constraints

- Define the source filter for active and in-development part bootstrap.
- Confirm legacy retention and access arrangements.
- Define the transition date and treatment of each active PPAP population.
- Provide closed-record import templates and mappings to the system administrator.

## More Information

- Product Management and Pilot Part Data design transcript: approximately 6:29:25–6:39:39.
