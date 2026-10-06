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
  - Shipping, Receiving and Inspection (Pilot Part Data)
  - Product Management
  - Supplier Portal
---

# ADR-024: Keep Detailed Measurement Execution Outside PPAP

## Context and Problem Statement

PPAP reviews rely on detailed dimensional, laboratory, appearance, and process-inspection data. Capturing every measurement directly in the PPAP application would require a large, product-specific data model and would duplicate specialized spreadsheets, laboratory tools, or future inspection applications.

## Decision Drivers

- Keep PPAP focused on approval orchestration and traceability.
- Avoid rebuilding specialized measurement systems inside PPAP.
- Support the current use of controlled evidence documents.
- Leave room for future inspection or Pilot Part Data integration.
- Prevent detailed inspection requirements from delaying PPAP implementation.

## Considered Options

### Capture all measurement results directly in PPAP

Provides structured analytics but substantially expands scope and data-model complexity.

### Store only a pass/fail decision with no supporting evidence

Is simple but does not provide adequate audit support.

### Store the review decision and supporting evidence while leaving measurement execution outside PPAP

Maintains traceability without duplicating specialized tools.

## Decision Outcome

The PPAP application will capture the submission, reviewer decision, comments, dates, and supporting attachments for each element. Detailed measurement execution and line-item test results remain outside the PPAP data model for the current implementation.

Pilot-part and PPAP sample inspections will be executed as structured records in Shipping, Receiving and Inspection, using versioned specifications maintained in Product Management. The resulting inspection records, decisions, and evidence will be linked back to the relevant PPAP element. Other specialized laboratory or measurement tools may continue to provide controlled evidence without changing the PPAP approval boundary.

## Consequences

### Positive

- Keeps the PPAP solution implementable and maintainable.
- Avoids duplicating specialist data-entry tools.
- Preserves the evidence required for approval and audit.
- Supports incremental future integration.

### Negative

- Detailed measurement analytics are not available directly from PPAP records.
- Attachment quality and naming remain important.
- Users may need to open linked files or applications to understand the underlying results.

### Follow-up and Constraints

- Define accepted evidence formats and attachment metadata.
- Define the linkage from PPAP elements to Pilot Part Data inspection requests and completed sample records.
- Define how Product Management specification revisions are selected and frozen for each inspection.
- Ensure detailed data remains accessible for the required retention period.

## More Information

- Second transcript: approximately 0:17:54–0:22:07 and 1:59:54–2:00:25.
- Third transcript: approximately 0:14:16–0:18:54 and 0:24:55–0:30:41.
