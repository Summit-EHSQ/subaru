---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Keith Freeman
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Jamie Dossey
  - Brianne Carroll
  - Joel Frick
  - Rick Redmond
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
  - Supplier Relationship Management
---

# ADR-027: Manage Concurrent PPAPs Through Explicit Scope and Human Sequencing

## Context and Problem Statement

Multiple PPAPs can be open for the same drawing and overlapping part numbers. A process change may be reviewed while an engineering change or model change remains open. Theoretical conflicts can exist between element submissions, but the workshop did not identify automated conflict reconciliation as a current operational pain point.

## Decision Drivers

- Support legitimate concurrent PPAPs.
- Make source, scope, revision, and due dates clear to suppliers and reviewers.
- Avoid building a complex document-merge or conflict-resolution engine without demonstrated value.
- Preserve human review by the personnel closest to the changes.

## Considered Options

### Prevent more than one open PPAP for the same drawing and parts

Avoids overlap but would block valid process and engineering changes.

### Build automated element-level conflict detection and reconciliation

Could highlight competing changes but would be complex and difficult to define reliably.

### Permit concurrent PPAPs and rely on explicit context, due dates, and human sequencing

Supports real operations while keeping the architecture proportionate to the risk.

## Decision Outcome

Allow more than one open PPAP for the same drawing and overlapping part numbers. Each PPAP must clearly display its source type, source record, drawing revision, included part numbers, responsible organization, required elements, and due dates.

Do not implement automated element conflict merging or blocking as part of the current design. Suppliers are expected to complete overlapping requests in the appropriate sequence, generally guided by due dates. The same supplier coordinators and SIA engineers typically review potentially conflicting work and provide the primary control against inconsistent submissions.

## Consequences

### Positive

- Supports concurrent process and engineering changes.
- Avoids overengineering an uncommon or human-controlled risk.
- Preserves clear transaction history.

### Negative

- Users can still act on overlapping requests in the wrong order.
- The control depends on clear context and human awareness.
- Future scale or process changes may expose a need for stronger conflict detection.

### Follow-up and Constraints

- Provide views that group open PPAPs by drawing, part, source, and due date.
- Consider a warning when the same element is open in multiple PPAPs, without blocking work.
- Reassess automated conflict controls if actual incidents demonstrate a need.

## More Information

- Second transcript: approximately 0:59:32–1:09:36 and 1:39:02–1:44:27.
