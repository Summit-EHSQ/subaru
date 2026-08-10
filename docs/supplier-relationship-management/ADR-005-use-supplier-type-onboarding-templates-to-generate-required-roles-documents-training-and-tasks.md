---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Brianne Carroll
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Joel Frick
  - Rick Redmond
  - Eric McGregor
  - Keith Freeman
primary-application: Supplier Relationship Management
secondary-applications:
  - Supplier Portal
  - Production Part Approval Process (PPAP)
  - Process Change Requests (PCR)
---

# ADR-005: Use Supplier-Type Onboarding Templates to Generate Required Roles, Documents, Training, and Tasks

## Context and Problem Statement

Creating a supplier record alone does not make the supplier ready to work with SIA. New suppliers require contacts, documentation, system access, training, and cross-functional setup activities. The required activities are sufficiently repeatable that relying on each coordinator's memory would create omissions and inconsistent onboarding.

The PPAP and PCR designs require supplier users to complete more than simple read-only interactions. The discussion recognized that one-time live webinars and a small number of job aids are not a sustainable training model, particularly as supplier personnel change and language needs vary.

## Decision Drivers

- Make onboarding prescriptive for new or less experienced coordinators.
- Reduce missed training, documentation, and access activities.
- Support different requirements for different supplier categories and depots.
- Provide time-bound ownership and visibility of outstanding onboarding work.
- Prepare supplier users for the workflows and responsibilities assigned through the portal.
- Support repeatable training when supplier personnel change.

## Considered Options

### Create a blank supplier record and rely on the coordinator to determine next steps

Requires little configuration but preserves inconsistency and knowledge dependency.

### Use one universal onboarding checklist and one-time webinar

Creates consistency at launch but does not scale well as roles, processes, and personnel change.

### Generate onboarding requirements from governed templates

Supports reusable, configurable, role-specific, and repeatable onboarding.

## Decision Outcome

Define reusable onboarding templates by supplier type, depot, or another governed classification. When a supplier enters onboarding, the selected template will generate or pre-populate:

- expected external and internal relationship-role placeholders;
- required company-level documents;
- required system access and setup activities;
- responsible parties and target dates;
- role-specific training or familiarization activities; and
- recurring or personnel-change-triggered activities where applicable.

The generated records form an auditable onboarding checklist. Training requirements must be capable of being reissued when a new contact joins a workflow role. The specific delivery model, content formats, and language strategy remain to be defined, but the architecture must not assume that informal live instruction is sufficient.

## Consequences

### Positive

- Improves onboarding consistency and completeness.
- Creates a visible inventory of supplier-readiness activities.
- Supports repeatable training as supplier personnel change.
- Allows requirements to evolve centrally.

### Negative

- Template and training governance become ongoing responsibilities.
- Incorrect supplier classification could generate inappropriate requirements.
- Multi-language content and workflow training may increase implementation effort.

### Follow-up and Constraints

- Define the supplier classification used to select templates.
- Define the onboarding child-record structure and completion rules.
- Establish a sustainable training-content and translation strategy.
- Define how template revisions affect suppliers already in progress.

## More Information

- First transcript: approximately 1:07:16–1:12:51.
- Second transcript: approximately 3:15:25–3:17:18.
