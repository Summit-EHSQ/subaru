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
- Support data-only, part-review, and joint-inspection PPAP variations.

## Considered Options

### Use one workflow for the entire PPAP package

Is simple but forces all-or-nothing rejection and provides weak element-level visibility.

### Create a completely custom workflow for every element

Provides maximum flexibility but increases configuration and maintenance effort.

### Use configurable element records with a small set of reusable workflow patterns

Supports element-level control without creating a unique workflow design for every element.

## Decision Outcome

Model PPAP as a parent record with child element records. Each required element receives its own status and workflow instance. An element can be approved, rejected with comments, corrected, and resubmitted without rejecting elements that have already been accepted.

Configure a limited set of reusable routing patterns, including:

- supplier submission followed by SIA engineer review;
- internal engineer completion;
- internal associate or inspection-team completion followed by engineer review; and
- joint-inspection or part-review activities.

Every PPAP requires data review. Part review and joint inspection are activated according to PPAP type and initiation decisions. Internal-only activities must not be exposed to suppliers merely because they exist within the PPAP.

## Consequences

### Positive

- Provides precise status and accountability for each PPAP requirement.
- Reduces unnecessary resubmission of accepted content.
- Supports different operational workflows within one PPAP architecture.
- Improves management reporting on open elements.

### Negative

- Generates more child records and workflow instances.
- Requires careful activation and completion logic at the parent level.
- Users need a clear consolidated view to avoid navigating each element individually.

### Follow-up and Constraints

- Define the governed PPAP element catalogue and routing template for each element.
- Define how element rejection affects overall PPAP status.
- Define completion rules when an element is not required.
- Confirm supplier visibility rules for internal-only elements.

## More Information

- Second transcript: approximately 0:12:02–0:17:45 and 1:10:19–1:26:02.
