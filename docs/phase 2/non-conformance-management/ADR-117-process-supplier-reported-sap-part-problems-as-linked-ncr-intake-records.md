---
status: accepted
date: 2026-10-21
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Joel Frick
consulted:
  - Dave McLean
  - Bill Roberts
  - Scott Schapker
informed:
  - Gillian Tsoi
  - Roy Lowery
primary-application: Non-Conformance Management
secondary-applications:
  - Supplier Relationship Management
  - Supplier Portal
---

# ADR-117: Process Supplier-Reported SAP-Part Problems as Linked NCR Intake Records

## Context and Problem Statement

A supplier may report a quality problem involving an SAP part that SIA procured and provided for incorporation into the supplier's finished product. The reporting supplier is not necessarily the manufacturer responsible for the affected part. SIA must first assess the report, decide whether to act, provide handling or return instructions, and then determine whether to initiate a PIR against the responsible manufacturing supplier.

This is a narrower quality-intake scenario than SPANF. SPANF addresses broader advance notification of shipment, capacity, packaging, equipment, and possible quality impacts, while this process replaces the current supplier-reported SAP-part quality problem.

## Decision Drivers

- Give suppliers a secured portal path for reporting SAP-part quality problems.
- Avoid treating the reporting supplier as the responsible manufacturer.
- Allow internal triage before creating downstream corrective-action work.
- Reuse the common supplier NCR form and workflow architecture.
- Carry common data into the downstream PIR where practicable.
- Preserve traceability between the original supplier report and the resulting PIR.
- Keep the initial implementation distinct from the broader SPANF process.

## Considered Options

### Treat the report as a PIR against the reporting supplier

Reuses the PIR path but assigns the problem to the wrong supplier and implies an investigation obligation that does not belong to the reporter.

### Build a separate supplier-reported-problem application

Provides process isolation but duplicates supplier NCR intake, triage, security, and reporting capabilities.

### Capture the report as an unlinked intake and manually create a PIR

Separates the responsibilities but loses reliable lineage and data carry-forward.

### Use a supplier NCR type for intake and create a linked PIR against the responsible manufacturer

Reuses the common architecture, preserves the distinct intake path, and maintains end-to-end traceability.

## Decision Outcome

Implement Supplier-Reported Problem as a supplier-visible type within the configurable supplier NCR framework governed by ADR-046. Limit supplier initiation to this applicable type rather than exposing internal PIR initiation.

After submission, route the record to the configured SIA role for triage. Triage determines whether the report is valid, whether SIA will act, and what handling or return instructions are provided to the reporting supplier. Do not route an investigation back to that supplier merely because it initiated the report.

When a downstream quality case is warranted, create a PIR against the supplier responsible for manufacturing the affected part. Carry forward applicable common data and retain a navigable relationship between the supplier-reported intake and the downstream PIR. The intake record may close after triage, supplier instructions, and downstream initiation because the substantive investigation continues on the linked PIR.

Do not treat this implementation as delivery of SPANF. ADR-071 continues to govern the broader supplier advance-notification process.

## Consequences

### Positive

- Gives the reporting supplier an appropriate and traceable intake channel.
- Avoids assigning cause or investigation responsibility to the wrong supplier.
- Reuses the shared supplier NCR configuration and reporting model.
- Preserves lineage from the reported symptom to the responsible-supplier PIR.
- Provides a limited foundation for future supplier-reported quality scenarios.

### Negative

- One business issue may be represented by two linked records.
- Data carry-forward and relationship creation require automation and validation.
- Supplier-facing closure information may be intentionally narrower than the downstream PIR outcome.
- The responsible manufacturer must be resolved correctly before the PIR is created.

### Follow-up and Constraints

- Map the existing Supplier-Reported Problem fields and supplier-facing instructions.
- Define which values copy into the downstream PIR and which must be entered during triage.
- Define the role that owns triage and the rules used to identify the responsible manufacturer.
- Confirm supplier-visible status and closure wording.
- Keep broader non-quality and shipment-impact reporting in the SPANF design.

## More Information

- "Summit EHSQ | SIA | Revisit PIR Requirements + WCAR" transcript, 21 Oct 2026, 10:30 AM–12:00 PM ET: approximately 0:12:18–0:31:56.
- ADR-046 governs the configurable supplier NCR parent and workflow.
- ADR-071 governs SPANF and its optional escalation into NCR.
- ADR-093 governs any related RMA child workflow.
