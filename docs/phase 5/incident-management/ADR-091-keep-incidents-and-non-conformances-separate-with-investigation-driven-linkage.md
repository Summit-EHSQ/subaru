---
status: proposed
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Eric McGregor
- Scott Bailey
consulted:
- Joel Frick
informed:
- Emma Lister
- Rick Redmond
primary-application: Incident Management
secondary-applications:
- Non-Conformance Management
- Corrective Action Management
---

# ADR-091: Keep Incidents and Non-Conformances Separate with Investigation-Driven Linkage

## Context and Problem Statement

Injuries, property damage, vehicle incidents, spills, releases, and near misses are managed through Incident Management. Investigation of one of those events may reveal a separate failure to follow a process, procedure, or regulatory obligation. Repeated incidents may also need to be analyzed together.

Combining incident and non-conformance lifecycles would blur their purposes, while leaving them disconnected would lose traceability. Creating an umbrella NCR only to group repeated incidents would add a record without necessarily identifying a distinct non-conformance.

## Decision Drivers

- Preserve the specialized incident lifecycle.
- Capture process or compliance failures discovered during investigation.
- Maintain navigable traceability across applications.
- Avoid duplicate entry and artificial grouping records.
- Allow incident and corrective-action design to evolve independently.

## Considered Options

### Treat incidents as non-conformance records

Creates one issue table but loses incident-specific investigation and regulatory behavior.

### Keep Incident Management and Non-Conformance Management disconnected

Preserves application boundaries but loses traceability and creates duplicate entry.

### Keep separate records and allow investigation to launch a related NCR

Preserves both lifecycles and captures the relationship when a distinct non-conformance exists.

### Create a meta-NCR to group every series of similar incidents

Supports grouping but creates a third record even when the later incident investigation can address the repeat pattern.

## Decision Outcome

Keep incidents and non-conformances as separate records in their respective applications. When an incident investigation identifies a distinct process, procedural, supplier, or compliance failure, allow the investigator to launch an appropriately typed NCR from the incident context, normally during investigation rather than initial incident reporting.

Relate repeated incidents directly and expose prior occurrences to the later investigator. Do not create a meta-NCR solely to connect repeated incidents. Create an NCR only when the analysis identifies an independently meaningful non-conformance requiring its own governance or supplier-facing response.

## Consequences

### Positive

- Each application retains its intended terminology and workflow.
- Investigators can escalate process failures without re-entering incident context.
- Repeat-event analysis does not require an artificial third record.
- Supplier-related failures can use the secure supplier-NCR branch.

### Negative

- Cross-application reporting must traverse record relationships.
- Launch rules and copied fields require detailed design.
- Users must distinguish an incident outcome from a separate non-conformance.

### Follow-up and Constraints

- Confirm the launch point and field mapping during the Incident Management workshop.
- Define incident-to-incident repeat relationships and investigator visibility.
- Define closure dependencies where an incident launches an NCR or CAR.
- Confirm whether any incident types require automatic NCR evaluation.

## More Information

- Subsequent non-conformance design transcript: approximately 0:52:55–0:56:55 and 1:57:17–2:04:43.
- ADR-064 governs OHM medical-data integration and is not changed by this application-boundary decision.
