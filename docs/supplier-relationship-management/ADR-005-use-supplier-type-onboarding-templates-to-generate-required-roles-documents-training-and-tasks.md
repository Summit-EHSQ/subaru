---
status: accepted
date: 2026-08-18
decision-date: not-recorded-in-transcript
deciders:
  - Jamie Dossey
  - Brianne Carroll
  - Luke Filippo
  - Dave McLean
  - Joel Frick
  - Keith Freeman
  - Roy Lowery
consulted:
  - Shao Ngoi
informed:
  - Rick Redmond
  - Eric McGregor
  - Emma Lister
  - Jillian
primary-application: Supplier Relationship Management
secondary-applications:
  - Supplier Portal
  - Production Part Approval Process (PPAP)
  - Process Change Requests (PCR)
---

# ADR-005: Use Supplier-Type Onboarding Templates to Generate Required Roles, Documents, Training, and Tasks

## Context and Problem Statement

Creating an active supplier record after award does not mean that its profile is complete. New suppliers require contacts, documentation, system access, training, and cross-functional setup activities. The required activities are sufficiently repeatable that relying on each coordinator's memory would create omissions and inconsistent setup.

The PPAP and PCR designs require supplier users to complete more than simple read-only interactions. The discussion recognized that one-time live webinars and a small number of job aids are not a sustainable training model, particularly as supplier personnel change and language needs vary.

## Decision Drivers

- Make onboarding prescriptive for new or less experienced coordinators.
- Reduce missed training, documentation, and access activities.
- Support different requirements for different supplier categories and depots.
- Provide time-bound ownership and visibility of outstanding onboarding work.
- Prepare supplier users for the workflows and responsibilities assigned through the portal.
- Support repeatable training when supplier personnel change.
- Allow the central requirements and role library to evolve after suppliers have been created.
- Keep profile completeness separate from supplier approval and lifecycle status.

## Considered Options

### Create a blank supplier record and rely on the coordinator to determine next steps

Requires little configuration but preserves inconsistency and knowledge dependency.

### Use one universal onboarding checklist and one-time webinar

Creates consistency at launch but does not scale well as roles, processes, and personnel change.

### Generate onboarding requirements from governed templates

Supports reusable, configurable, role-specific, and repeatable onboarding.

### Hold the supplier in an approval state until every generated item is complete

Creates a hard readiness gate but conflicts with the upstream award decision and exceptional operational needs.

## Decision Outcome

Define reusable setup templates by supplier type, facility or depot type, or another governed classification. When an awarded supplier record is created, the selected template will generate or pre-populate:

- expected external and internal relationship-role placeholders;
- required company-level documents;
- required system access and setup activities;
- responsible parties and target dates;
- role-specific training or familiarization activities; and
- recurring or personnel-change-triggered activities where applicable.

The generated records form an auditable profile-completeness checklist on the active supplier. They guide follow-up but do not constitute another supplier-approval gate. The standard role set is maintained as a central library. When a new role or requirement is introduced, administrators must be able to apply it to existing in-scope suppliers and request completion rather than updating each profile manually.

Training requirements must be capable of being reissued when a new contact joins a workflow role. The specific delivery model, content formats, and language strategy remain to be defined, but the architecture must not assume that informal live instruction is sufficient.

## Consequences

### Positive

- Improves onboarding consistency and completeness.
- Creates a visible inventory of supplier-readiness activities.
- Supports repeatable training as supplier personnel change.
- Allows requirements to evolve centrally.
- Supports propagation of new governed roles and requirements to existing suppliers.

### Negative

- Template and training governance become ongoing responsibilities.
- Incorrect supplier classification could generate inappropriate requirements.
- Multi-language content and workflow training may increase implementation effort.
- Active supplier profiles may remain incomplete while follow-up work is outstanding.

### Follow-up and Constraints

- Define the supplier classification used to select templates.
- Define the onboarding child-record structure and completion rules.
- Establish a sustainable training-content and translation strategy.
- Define how template revisions affect suppliers already in progress.
- Define the campaign or task mechanism used to apply new requirements to existing suppliers.

## More Information

- First transcript: approximately 1:07:16–1:12:51.
- Second transcript: approximately 3:15:25–3:17:18.
- Latest supplier-management design transcript: approximately 0:49:23–1:01:22.
- ADR-002 establishes that these requirements do not delay creation of the active supplier record.
