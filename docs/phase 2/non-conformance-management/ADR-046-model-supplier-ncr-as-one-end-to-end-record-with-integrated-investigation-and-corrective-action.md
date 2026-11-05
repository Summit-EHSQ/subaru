---
status: accepted
date: 2026-09-02
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Keith Freeman
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Eric McGregor
  - Joel Frick
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Supplier Portal
  - Corrective Action Management
---

# ADR-046: Model Supplier NCR as One End-to-End Record with Integrated Investigation and Corrective Action

## Context and Problem Statement

The Intelex baseline separates a simple NCR problem record from an optional Corrective Action Request investigation. The current supplier-quality process treats the problem and its progressive response as one continuous case, with response depth varying by risk. The case can contain multiple containments, dispositions, RMAs, response sections, cause analyses, and follow-ups. Splitting the investigation into a separate CAR would create an unnatural handoff, while placing every repeating component directly on one form would limit traceability and reporting.

PIR, WCAR, supplier-reported problems, and later supplier-issue variants also share a common high-level lifecycle even though they require different stages, responsibilities, instructions, and fields. Maintaining a separate parent form and workflow for each variant would duplicate most of the same behavior.

## Decision Drivers

- Match the established supplier-quality operating model.
- Preserve one coherent supplier-facing record.
- Allow response depth to vary without creating disconnected cases.
- Keep problem history, evidence, approvals, and follow-up together.
- Add supplier-issue variants without duplicating the parent workflow.
- Show users only the stages, fields, and instructions applicable to the selected issue type.

## Considered Options

### Use the baseline NCR and launch a separate CAR when investigation is needed

Uses standard objects but fragments the supplier experience and case history.

### Use only a CAR record and omit the NCR layer

Centers the investigation but weakens initial problem and occurrence tracking.

### Extend supplier NCR to include investigation and corrective-action stages

Matches the current process and preserves one end-to-end case.

### Use one configurable supplier NCR parent and workflow with type-specific activation

Preserves the end-to-end case while allowing type and subtype configuration to activate the required stages, roles, fields, instructions, and validations.

## Decision Outcome

Configure supplier NCR as the governing parent record from initial problem intake through final closure. Use typed child records for repeating or independently routed components, including occurrences, containments, dispositions, RMAs, supplier response sections, cause-analysis content, and follow-up checks. The parent maintains the governing supplier, part, risk tier, overall state, security context, and end-to-end history.

Corrective-action capabilities remain part of the supplier NCR lifecycle rather than requiring a separate user-facing CAR case. Child records may have their own completeness or review state, but their visibility, validation, and closure behavior are coordinated by the parent supplier NCR.

Use one configurable supplier NCR parent form and workflow for PIR, WCAR, supplier-reported problems, and other variants that fit the common lifecycle. NCR type and subtype act as governed configuration selectors that determine which stages are active, which role owns each stage, applicable timing, visible and required fields, stage-specific instructions, notifications, validations, and supplier visibility.

Initial creation captures only the common fields needed to establish context and resolve the configuration, such as supplier, part, type, subtype, event date, and description. After the record is first submitted, the selected configuration progressively exposes the applicable process content. Introduce a separate parent workflow only when a future process cannot be represented coherently through this configuration model.

## Consequences

### Positive

- Provides one complete audit trail.
- Reduces navigation and duplicate data entry.
- Supports risk-based response within a consistent supplier experience.
- Supports new supplier-issue types through governed configuration rather than cloned workflows.
- Reduces irrelevant fields and stages for suppliers and internal users.

### Negative

- Creates a more complex NCR configuration than the product baseline.
- Large records require careful form, performance, and permission design.
- Shared components must still support distinct supplier NCR subtypes.
- Type and subtype configuration becomes a shared control point requiring regression testing and change governance.

### Follow-up and Constraints

- Map current IntelliQuest features to the target NCR object model.
- Define which components are fields, child records, or workflow instances.
- Maintain a type-and-subtype configuration matrix covering stages, roles, timing, fields, guidance, notifications, and security.
- Confirm retention and attachment-volume requirements.
- Validate portal permissions at every stage.

## More Information

- Third transcript: approximately 1:17:33–1:19:11 and 2:03:31–2:10:32.
- Supplier NCR and warranty workflow transcript: approximately 0:38:13–1:01:53, 1:17:40–1:23:01, and 2:40:25–2:45:39.
- "Summit EHSQ | SIA | Revisit PIR Requirements + WCAR" transcript, 21 Oct 2026, 10:30 AM–12:00 PM ET: approximately 0:21:11–0:31:37 and 0:39:11–0:40:44.
