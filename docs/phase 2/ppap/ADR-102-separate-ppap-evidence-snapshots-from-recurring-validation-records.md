---
status: proposed
date: 2026-09-30
decision-date: not-recorded-in-transcript
deciders:
  - Joel Frick
  - Dave McLean
consulted:
  - Keith Freeman
informed:
  - Emma Lister
  - Amanda Raver
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
  - Supplier Relationship Management
  - Supplier Surveys
  - Product Management
---

# ADR-102: Separate PPAP Evidence Snapshots from Recurring Validation Records

## Context and Problem Statement

Most PPAP documents demonstrate that a part met requirements at a specific approval point. Their update process is a later PPAP. Some submitted items instead represent repeatable operational results, such as quality validation testing, dimensional results, or material certifications that may need to be collected monthly or annually after the PPAP closes.

Creating a new PPAP solely to collect each periodic result would misrepresent the approval process. Treating every result as a revision-controlled document would also obscure that each submission is a new validation record rather than a correction to the previous result.

## Decision Drivers

- Keep PPAP focused on point-in-time production approval.
- Support ongoing validation for parts that do not change regularly.
- Allow recurrence to vary by evidence type and selected part.
- Preserve traceability to the applicable part, drawing, and approval context.
- Avoid mandatory monthly review where the business only needs evidence of supplier execution.
- Reuse an in-scope supplier information-request mechanism where practical.
- Transfer operational ownership from development to the appropriate mass-production role after PPAP handover.

## Considered Options

### Trigger a new PPAP for every recurring submission

Reuses the current workflow but creates artificial PPAP volume and unnecessary package approval.

### Treat each recurring result as another revision of a PPAP document

Preserves a file lineage but does not accurately represent independent testing or certification events.

### Manage recurring results as separate records linked to PPAP context

Preserves the PPAP boundary and supports type-specific frequency, review, and retention rules.

### Use Supplier Survey campaigns to request recurring results

May reuse an in-scope scheduling and supplier-response mechanism, but suitability for record-level lineage and review remains to be confirmed.

## Decision Outcome

Treat ordinary PPAP evidence as a point-in-time approval snapshot governed by ADR-023. Model recurring operational validation submissions separately from PPAP document versions.

At or near PPAP handover, the responsible engineer may identify which recurring record types apply to the selected part or drawing. Each obligation may define an evidence type, frequency, activation date, responsible supplier role, and internal review behavior. Frequency is configurable because obligations described informally as annual may actually be quarterly, semiannual, or otherwise governed. Subsequent results remain related to the canonical part, applicable drawing, and originating PPAP context without reopening or creating a PPAP.

Candidate recurring types identified in the workshop are quality validation or testing results, dimensional or measurement results, and material certification results. Applicability must be selectable by part and evidence type rather than enabled globally for every PPAP.

Evaluate the shared supplier-task capability in ADR-103 and the campaign capability in ADR-080 as the collection mechanism before introducing a dedicated application. Targeted part-level obligations are not ordinary multi-supplier surveys, even if they reuse the same task behavior. The final hosting application, recurrence lifecycle, stopping conditions, review assignment, and exception escalation remain open; therefore this ADR remains proposed.

Do not treat recurring validation as Safe Launch. Safe Launch is more closely aligned with repeated inspection during development or production launch, while these obligations collect selected ongoing testing or certification evidence after handover.

## Consequences

### Positive

- Avoids artificial monthly or annual PPAP records.
- Supports selective ongoing assurance for stable production parts.
- Allows high-frequency records to use exception-based rather than mandatory individual approval.
- Preserves traceability to the approval that established the obligation.

### Negative

- Requires cross-application relationships and consolidated navigation.
- A reusable campaign tool may not provide all required lineage or review behavior.
- Frequency, ownership, and stopping rules require additional design.

### Follow-up and Constraints

- Confirm the exact recurring evidence types and controlled frequencies.
- Determine whether Supplier Surveys can preserve part, drawing, PPAP, and prior-result relationships.
- Define which records require internal approval, sampling, or exception-only review.
- Define how obligations end when a part is superseded, becomes inactive, or receives a new PPAP.
- Align recurring material and test records with retention and file-storage governance.

## More Information

- PPAP design workshop transcript: approximately 2:04:58–2:27:00.
- PPAP design workshop continuation: approximately 0:02:15–0:15:54 and 0:40:41–0:42:46.
- The workshop established the architectural distinction but did not finalize the implementation application or detailed workflow.
