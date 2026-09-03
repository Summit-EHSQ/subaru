---
status: accepted
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
consulted:
- Eric McGregor
- Keith Freeman
informed:
- Emma Lister
- Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
- Corrective Action Management
- Intelex Platform Workflow
- Notifications
---

# ADR-088: Model SQDIIR as a Distinct Initial Investigation with Sequential Review and Optional CAR

## Context and Problem Statement

A Serious Quality Defect Initial Investigation Report provides rapid visibility into a defect, suspect population, containment status, breakpoint, and temporary countermeasures. A CAR provides the later structured cause analysis and corrective-action response. A SQDIIR can be completed without a CAR, while an applicable internal quality CAR is associated with a SQDIIR.

The SQDIIR also requires sequential production and quality reviews, cross-shift or cross-section responsibility selection, controlled editing, and broad notifications at issuance and completion.

## Decision Drivers

- Preserve the rapid initial-investigation and containment process.
- Allow SQDIIRs that do not require a full CAR.
- Maintain field ownership and review traceability.
- Support cross-shift and cross-section assignments.
- Notify the broad stakeholder group only at meaningful milestones.

## Considered Options

### Combine SQDIIR and CAR in one record and workflow

Creates one history but forces full corrective-action structure onto events that only need initial investigation and containment.

### Make SQDIIR the mandatory first stage of every internal CAR

Preserves sequence but does not support SQDIIR closure without CAR creation cleanly.

### Use separate related SQDIIR and CAR records with a sequential SQDIIR workflow

Preserves the distinct purposes and allows optional escalation to CAR.

## Decision Outcome

Implement SQDIIR as a distinct Internal NCR subtype and record. When corrective action is required, relate the SQDIIR to a separate CAR rather than extending the SQDIIR record through the full CAR lifecycle.

Use the following sequential SQDIIR stages:

1. A qualified QC group leader creates and issues the record to a selected responsible section group leader.
2. The responsible group leader documents the investigation, containment, breakpoint, suspect window, and supporting rationale, then selects a section manager.
3. The section manager performs the first review.
4. The originating QC group leader performs the second review.
5. A selected QC manager performs the final review.

Reviews support approval or rejection, with a mandatory comment on rejection. The section manager may correct the responsible section's response but not the original QC submission. The originating QC reviewer may correct initial submission details but does not overwrite the responsible section's response.

Notify the configured broad distribution list when the SQDIIR is issued and when it is finally completed. Intermediate workflow notifications go only to the assigned participant. Maintain the broad list in administrator-managed type configuration rather than on each record.

## Consequences

### Positive

- Preserves rapid containment reporting without requiring a CAR in every case.
- Separates initial-investigation evidence from long-term corrective action.
- Provides a traceable sequence of operational and quality reviews.
- Supports cross-organizational routing through selected users.

### Negative

- End-to-end reporting must traverse the SQDIIR-to-CAR relationship.
- Stage-level edit permissions and rejection paths increase workflow complexity.
- Type configuration becomes operationally important.

### Follow-up and Constraints

- Confirm the complete criteria that require a CAR.
- Confirm the final-review rejection destination.
- Confirm placement and ownership of the IPC-only inspection section.
- Configure stage deadlines, including procedural working-day requirements.
- Confirm archival handling for the rare invalid or duplicate SQDIIR.
- Confirm whether SQDIIR and its optional quality-CAR integration are included in the initial release after schedule and budget review.

## More Information

- Subsequent non-conformance design transcript: approximately 0:34:10–0:45:08 and 0:59:24–1:33:15.
- Supplier NCR and warranty workflow transcript: approximately 0:10:08–0:16:56 and 3:10:49–3:13:57. This session treated initial-release inclusion as unresolved rather than changing the target architecture.
- ADR-056 governs shared type-driven workflow configuration. ADR-089 and ADR-090 govern the related CAR.
