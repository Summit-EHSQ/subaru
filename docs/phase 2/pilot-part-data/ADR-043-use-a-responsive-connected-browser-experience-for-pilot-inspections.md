---
status: accepted
date: 2026-09-29
decision-date: not-recorded-in-transcript
deciders:
  - Keith Freeman
  - Luke Filippo
  - Joel Frick
  - Dave McLean
consulted:
  - Shao Ngoi
informed:
  - Emma Lister
  - Rick Redmond
primary-application: Shipping, Receiving and Inspection (Pilot Part Data)
secondary-applications:
  - Intelex Platform
  - Product Management
  - Production Part Approval Process (PPAP)
---

# ADR-043: Use a Responsive Connected Browser Experience for Pilot Inspections

## Context and Problem Statement

Pilot inspections are normally completed on laptops, but inspectors may also work at external logistics warehouses using tablets or phones. The required experience includes versioned instructions, images, related parts, generated sample records, and a consolidated data-entry grid. Native offline forms cannot provide the same interaction without substantial constraints and require records to be generated and synchronized before connectivity is lost.

## Decision Drivers

- Preserve the rich inspection workflow used for the majority of inspections.
- Support laptops, tablets, and phones with one interaction model.
- Allow rapid grid entry by unit or by inspection attribute.
- Avoid designing the primary solution around an uncommon no-connectivity case.
- Keep inspection records current and immediately visible.

## Considered Options

### Require full offline operation through the native mobile application

Supports disconnected work but constrains the UI and requires advance synchronization of generated inspections.

### Use a connected browser with a controlled offline document fallback

Provides a contingency but introduces transcription, reconciliation, and document-control overhead.

### Use responsive connected browser forms and leave offline execution out of scope

Supports the required interaction across devices while relying on Wi-Fi, cellular data, or managed hotspots.

## Decision Outcome

Use responsive connected browser forms for Pilot Part Data. A laptop browser is the primary form factor. Connected tablets and phones are supported through responsive, touch-appropriate layouts.

Inspectors working away from an SIA facility will require Wi-Fi, cellular service, or a managed hotspot. Native offline inspection execution and an offline document fallback are not baseline requirements.

## Consequences

### Positive

- Preserves the consolidated inspection grid and other rich interactions.
- Provides one workflow across laptops, tablets, and phones.
- Avoids advance synchronization and later transcription of offline results.

### Negative

- Inspections cannot proceed in the application without connectivity.
- External locations may require hotspot or network arrangements.

### Follow-up and Constraints

- Validate responsive layouts on representative laptops, tablets, and phones.
- Confirm connectivity arrangements for known external inspection locations.
- Revisit offline support only if operational evidence establishes a material recurring need.

## More Information

- Earlier design transcript: approximately 0:40:04–0:48:01.
- Product Management and Pilot Part Data design transcript: approximately 5:37:20–5:46:36. This later discussion removes the earlier offline-document fallback from the baseline.
- ADR-110 applies the same connected-browser principle independently to PPAP forms, plans, tasks, and discussions.
