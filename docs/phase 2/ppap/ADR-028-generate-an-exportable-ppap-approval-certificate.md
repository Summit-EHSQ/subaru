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
  - Supplier Portal
---

# ADR-028: Generate an Exportable PPAP Approval Certificate

## Context and Problem Statement

Suppliers must retain evidence of customer PPAP approval in their own systems. The current workaround is to capture screenshots, while an earlier system provided a more useful approval artifact.

## Decision Drivers

- Give suppliers portable evidence of approval.
- Identify the approved drawing, parts, date, and decision unambiguously.
- Reduce screenshot-based recordkeeping.
- Allow verification against the authoritative Intelex record.

## Considered Options

### Require suppliers to retain screenshots

Requires no development but is inconsistent and difficult to verify.

### Provide portal access only

Keeps one source of truth but may not satisfy supplier recordkeeping needs.

### Generate a controlled approval certificate

Provides a portable artifact while retaining Intelex as the authoritative source.

## Decision Outcome

Provide an exportable PPAP approval certificate, preferably as a generated PDF. The certificate will identify the PPAP, supplier, drawing, included part numbers, approval status, approval date, and applicable approval authority.

Where feasible, include a stable reference or QR code that returns an authorized user to the source PPAP record for verification and additional detail.

## Consequences

### Positive

- Provides a professional, consistent approval artifact.
- Supports supplier internal quality records.
- Reduces ambiguity compared with screenshots.

### Negative

- Generated documents must remain synchronized with the authoritative record.
- Links or QR codes require appropriate authentication and durable URLs.
- Certificate generation and localization add implementation effort.

### Follow-up and Constraints

- Define certificate layout and required fields.
- Define behavior after withdrawal, correction, or supersession.
- Confirm whether electronic signatures are required.
- Define access behavior for verification links.

## More Information

- Second transcript: approximately 0:22:17–0:24:31.
