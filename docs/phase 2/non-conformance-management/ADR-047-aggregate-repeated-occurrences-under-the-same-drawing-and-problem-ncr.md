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
  - Joel Frick
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Supplier Relationship Management
  - Product Management
---

# ADR-047: Aggregate Repeated Occurrences Under the Same Drawing and Problem NCR

## Context and Problem Statement

The same supplier problem may be found on different shifts or lines while an NCR is already open. Creating a new NCR for every occurrence fragments containment and corrective action, while silently updating one description loses the event history. The matching rule is based on the same drawing and substantially the same defect, not merely the same broad assembly.

## Decision Drivers

- Prevent duplicate open investigations.
- Preserve the timing, quantity, evidence, and source of each occurrence.
- Support changing risk based on accumulating occurrences.
- Give users visibility into potentially matching open NCRs before creation.

## Considered Options

### Create a new NCR for every reported occurrence

Preserves event records but duplicates supplier response and obscures the common problem.

### Overwrite the original NCR description and quantities

Keeps one case but loses occurrence history.

### Maintain one NCR with child activity or occurrence records

Combines one corrective-action case with a complete event history.

## Decision Outcome

Before creating a supplier NCR, show potentially matching open NCRs based on supplier, drawing, part context, and defect classification or description. When the same drawing and same problem are already represented, add a new occurrence or activity to the existing NCR.

Each occurrence preserves its report time, source area or shift, affected part, quantity, evidence, disposition, and comments. The parent NCR summarizes current totals and remains the single supplier-response case. Different defects on the same drawing remain separate NCRs.

## Consequences

### Positive

- Reduces duplicate supplier investigations.
- Preserves complete occurrence history.
- Supports risk reassessment as frequency increases.
- Improves cross-shift awareness.

### Negative

- Matching cannot be perfectly automated because defect similarity requires judgment.
- Parent totals and child occurrence data must remain synchronized.
- Users need a clear way to override an incorrect match suggestion.

### Follow-up and Constraints

- Define matching criteria and duplicate-suggestion UI.
- Define occurrence fields and parent rollups.
- Define permissions for adding occurrences after supplier submission.
- Define treatment of related but not identical defects.

## More Information

- Third transcript: approximately 1:24:57–1:34:20 and 1:48:54–1:50:37.
