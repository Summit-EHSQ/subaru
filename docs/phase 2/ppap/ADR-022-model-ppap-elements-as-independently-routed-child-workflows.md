---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Luke Filippo
  - Keith Freeman
  - Jamie Dossey
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Brianne Carroll
  - Joel Frick
  - Rick Redmond
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
  - Supplier Portal
  - Supplier Relationship Management
---

# ADR-022: Model PPAP Elements as Independently Routed Child Workflows

## Context and Problem Statement

A PPAP contains multiple evidence elements such as dimensional results, control plans, inspection standards, appearance approvals, and sample-review activities. One element may be acceptable while another requires correction. Rejecting the entire PPAP for a single deficient element would create unnecessary rework and obscure element-level accountability.

The process also contains different task patterns: supplier submission and SIA review, internal engineer completion, associate sample inspection followed by engineer review, and joint inspection.

## Decision Drivers

- Allow an individual PPAP element to be rejected and resubmitted independently.
- Route different element types to the appropriate supplier and internal roles.
- Keep supplier-facing and internal-only work distinct.
- Track element status, due dates, comments, and approver decisions.
- Require the responsible engineer to review every supplier and internal element before overall PPAP completion.
- Support data-only, part-review, and joint-inspection PPAP variations.
- Generate consistent requirements from governed AIAG and SIA-specific definitions.
- Allow configuration to evolve without rewriting in-flight or historical PPAPs.

## Considered Options

### Use one workflow for the entire PPAP package

Is simple but forces all-or-nothing rejection and provides weak element-level visibility.

### Create a completely custom workflow for every element

Provides maximum flexibility but increases configuration and maintenance effort.

### Use configurable element records with a small set of reusable workflow patterns

Supports element-level control without creating a unique workflow design for every element.

### Allow engineers to create arbitrary requirements within each PPAP

Provides local flexibility but weakens consistency, reuse, reporting, and governance.

## Decision Outcome

Model PPAP as a parent record with child element records generated from a governed requirement library and versioned PPAP templates. Each required element receives its own status and workflow instance. An element can be approved, rejected with comments, corrected, and resubmitted without rejecting elements that have already been accepted.

Every supplier-completed and internal-completed element routes to the responsible PPAP engineer for review. A rejection requires a comment visible to the element assignee and returns only that element for correction. Record every rejection as an immutable log entry with the element, reviewer, timestamp, and comment. The PPAP workspace must expose the rejection history grouped by element and show the total rejection count so the engineer and any final approver can review the full iteration history.

The requirement library defines active status, category, instructions, checklist questions, attachment rules, reusable routing pattern, and other element behavior. A PPAP template defines which governed elements apply by default, their sequence, responsible role, submission treatment, and any phase or due-date rule. Engineers may include or exclude governed elements for the specific change but do not create arbitrary element types inside an individual PPAP.

Publishing a changed template affects newly initialized PPAPs. In-flight and historical PPAPs retain the element and phase structure with which they were created unless an authorized bulk change is deliberately applied.

Configure a limited set of reusable routing patterns, including:

- supplier submission followed by SIA engineer review;
- internal engineer completion;
- internal associate or inspection-team completion followed by engineer review; and
- joint-inspection or part-review activities.

Every PPAP requires data review. Part review and joint inspection are activated according to PPAP type and initiation decisions. Internal-only activities must not be exposed to suppliers merely because they exist within the PPAP.

The parent PPAP cannot proceed to engineer completion or any conditional final-approval stage while an element is open, rejected, or awaiting engineer review.

## Consequences

### Positive

- Provides precise status and accountability for each PPAP requirement.
- Reduces unnecessary resubmission of accepted content.
- Supports different operational workflows within one PPAP architecture.
- Improves management reporting on open elements.
- Keeps requirement definitions reusable, reportable, and administratively governed.
- Preserves the historical meaning of PPAPs when templates later change.

### Negative

- Generates more child records and workflow instances.
- Requires careful activation and completion logic at the parent level.
- Users need a clear consolidated view to avoid navigating each element individually.
- New exceptional requirement types require governed configuration rather than ad hoc creation.

### Follow-up and Constraints

- Define the governed PPAP element catalogue and routing template for each element.
- Define how element rejection affects overall PPAP status.
- Define completion rules when an element is not required.
- Confirm supplier visibility rules for internal-only elements.
- Export and reconcile the existing IntelliQuest requirement library, levels, checklists, and defaults before migration.
- Define template publication and authorized bulk-update controls.

## More Information

- Second transcript: approximately 0:12:02–0:17:45 and 1:10:19–1:26:02.
- PPAP design workshop transcript: approximately 0:14:02–0:29:45 and 0:36:07–0:48:39.
- PPAP design workshop continuation: approximately 0:43:05–0:45:24 and 1:46:03–1:52:44.
