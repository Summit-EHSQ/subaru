---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Keith Freeman
  - Luke Filippo
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Joel Frick
  - Rick Redmond
primary-application: Shipping, Receiving and Inspection (Pilot Part Data)
secondary-applications:
  - Intelex Mobile
  - Product Management
---

# ADR-043: Prioritize a Connected Rich Inspection Experience with an Offline Document Fallback

## Context and Problem Statement

Some pilot-part inspections occur at off-site import/export facilities, and a minority may have weak connectivity. The desired inspection experience is data-rich: it references versioned specifications, tables, images, related parts, and sample records. Native offline mobile forms are best suited to simpler one-way submissions and cannot reliably reproduce the full experience.

## Decision Drivers

- Preserve the rich inspection workflow for the large majority of inspections.
- Avoid designing the primary solution around a less-than-ten-percent no-connectivity case.
- Provide a workable contingency when hotspots or networks are unavailable.
- Support laptops and mobile devices already used by inspectors.

## Considered Options

### Require the full rich inspection to operate offline in the native mobile app

Targets all scenarios but would significantly reduce functionality or require disproportionate customization.

### Require connectivity with no fallback

Keeps the solution simple but leaves inspectors unable to work in known edge cases.

### Use the connected rich experience and provide a controlled offline document fallback

Optimizes normal work while retaining a pragmatic contingency.

## Decision Outcome

The primary Pilot Part Data experience will be a connected Intelex form suitable for laptops or larger connected devices. Off-site users should use available Wi-Fi or managed hotspots where practical.

For expected no-connectivity inspections, users may pre-generate or print a controlled inspection document containing the applicable instructions and attributes, complete it offline, and enter or attach the results after connectivity is restored. Full native offline parity is a nice-to-have rather than a baseline requirement.

## Consequences

### Positive

- Preserves the required rich user experience.
- Avoids excessive effort for an uncommon edge case.
- Provides a familiar contingency based on prior operating practice.

### Negative

- Offline results are not immediately visible.
- Paper or document transcription can introduce delay or error.
- Hotspot availability still requires operational management.

### Follow-up and Constraints

- Confirm the expected connected device and form layout.
- Design the controlled offline merge template and reconciliation process.
- Define whether any simplified offline capture is feasible without compromising core requirements.
- Track the actual frequency of offline use after deployment.

## More Information

- Third transcript: approximately 0:40:04–0:48:01.
