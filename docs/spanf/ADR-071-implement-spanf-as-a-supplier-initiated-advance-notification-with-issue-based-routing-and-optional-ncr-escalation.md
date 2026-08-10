---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
consulted:
- Dave McLean
- Keith Freeman
- Rick Redmond
informed:
- Brianne Carroll
- Joel Frick
primary-application: SPANF
secondary-applications:
- Supplier Portal
- Supplier Relationship Management
- Non-Conformance Management
---

# ADR-071: Implement SPANF as a Supplier-Initiated Advance Notification with Issue-Based Routing and Optional NCR Escalation

## Context and Problem Statement

Suppliers use SPANF to notify SIA of an imminent or recently realized impact such as shipment delay, packaging substitution, equipment problem, or possible quality escape. The current process largely records the notification but does not consistently assign, track, or close the internal response.

## Decision Drivers

- Provide a supplier-initiated and supplier-secured notification channel.
- Route the issue to the function responsible for follow-up.
- Track containment and closure rather than relying on informal communication.
- Escalate quality concerns into the governed NCR process when needed.

## Considered Options

### Retain SPANF as notification only

Matches the current form but preserves weak follow-up visibility.

### Treat every SPANF as an NCR

Creates strong control but misclassifies logistics and equipment notifications.

### Route by issue type and create an NCR only when appropriate

Preserves the notification purpose while adding accountable follow-up.

## Decision Outcome

Implement SPANF as a supplier-initiated custom application linked to the supplier and relevant parts. Inherit portal security from the supplier relationship.

Classify the notification by impact type. Quality notifications route to SQA or New Model according to development phase and may create or link a supplier NCR. Equipment, capacity, packaging, logistics, or other issues route to the responsible supplier-management function. Track owner, status, response, containment, decisions, and closure rather than treating the record as an unowned message.

## Consequences

### Positive

- Improves supplier advance warning and accountability.
- Avoids misclassifying every notification as a non-conformance.
- Creates a direct path to containment and NCR when quality is at risk.

### Negative

- Routing rules and ownership vary by issue type.
- High daily volume requires efficient triage.
- A separate supplier-owned-part RMA use case still needs detailed design.

### Follow-up and Constraints

- Define categories, routing, due dates, and closure criteria.
- Define NCR creation and linkage rules.
- Assess whether supplier-owned-part RMA is a SPANF subtype or separate process.
- Confirm custom-app licensing.

## More Information

- Fourth transcript: approximately 2:20:07–2:31:21.
