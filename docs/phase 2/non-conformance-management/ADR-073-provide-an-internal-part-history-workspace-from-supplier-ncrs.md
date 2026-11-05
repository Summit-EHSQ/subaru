---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
consulted:
- Dave McLean
- Keith Freeman
informed:
- Brianne Carroll
- Joel Frick
- Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
- Product Management
- Production Part Approval Process (PPAP)
- Shipping, Receiving and Inspection (Pilot Part Data)
- Advanced Product Quality Planning (APQP)
- Design Change Request (DCR)
---

# ADR-073: Provide an Internal Part-History Workspace from Supplier NCRs

## Context and Problem Statement

Supplier-quality investigators are expected to review drawing, PPAP, inspection, and development history, but the information currently lives in separate systems and is often skipped. The Intelex architecture will already relate many of these records through the selected part or drawing.

## Decision Drivers

- Improve investigation quality.
- Reduce navigation across separate applications.
- Reuse the part and drawing relationships already created for other workflows.
- Prevent supplier users from seeing internal history.

## Considered Options

### Rely on investigators to search every application

Requires no new interface but preserves weak and inconsistent investigation.

### Copy all historical data into each NCR

Creates duplication and stale snapshots.

### Provide a role-secured linked history workspace

Improves access while retaining authoritative source records.

## Decision Outcome

Add an internal-only part-history view or tab to supplier NCRs. From the selected part or drawing, display or link to relevant drawing and revision data, inspection specifications and results, PPAPs, APQP history, prior NCRs, DCR or ECS references, and other approved quality context.

Keep the source records in their authoritative applications. The workspace is a contextual navigation and summary layer, not a duplicate data store. Supplier users must not inherit access to internal history merely because they can access the NCR.

## Consequences

### Positive

- Makes expected investigation evidence easy to find.
- Improves cross-application traceability.
- Avoids duplicating source data.

### Negative

- Complex queries can affect form performance.
- Security must be validated for every linked application.
- Some external-system history may remain unavailable until integrations exist.

### Follow-up and Constraints

- Define the exact history panels and date filters.
- Define role-based visibility and performance limits.
- Identify external records that require reference integrations.

## More Information

- Fourth transcript: approximately 2:41:47–2:45:24.
