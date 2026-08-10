---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Luke Filippo
- Keith Freeman
consulted:
- Dave McLean
- Eric McGregor
- Rick Redmond
informed:
- Brianne Carroll
- Joel Frick
primary-application: TS Request
secondary-applications:
- Document Control
- Supplier Portal
- Supplier Relationship Management
---

# ADR-072: Fulfill TS Requests Through Supplier-Scoped Time-Limited Access to Controlled Documents

## Context and Problem Statement

Suppliers request technical standards through email and Excel. The documents are proprietary, and SIA must track the request, approval, delivery, and later withdrawal. Suppliers generally should not receive broad access to the Document Control application.

## Decision Drivers

- Replace email and spreadsheet tracking.
- Limit each supplier to approved standards.
- Provide an expiry or withdrawal control.
- Avoid granting suppliers administrative document-library permissions.

## Considered Options

### Continue emailing attachments

Is familiar but offers weak tracking and no practical withdrawal control.

### Grant suppliers direct Document Control access

Simplifies viewing but exposes a broader security model than intended.

### Copy or reference the approved file into a supplier-secured request with time-limited visibility

Provides controlled, auditable access without opening the library.

## Decision Outcome

Create a TS Request record initiated by an authorized supplier and linked to the supplier, drawing or part context, and requested standard. An internal reviewer approves or rejects the request and selects the applicable controlled document.

On approval, copy or securely reference the approved file into the supplier-secured request record. Prefer in-browser preview and restrict download where practical. Hide or invalidate access after a configurable expiry period while preserving the request and approval history. Do not grant the supplier general Document Control access.

Implementation depends on SIA obtaining permission to place or reference the source technical standards in the Intelex-controlled repository.

## Consequences

### Positive

- Creates a complete request and approval trail.
- Limits access to the approved supplier and period.
- Reduces uncontrolled email distribution.

### Negative

- No technical control can prevent screenshots or external copies.
- Source-document permission remains an organizational dependency.
- The secure-copy mechanism requires custom configuration.

### Follow-up and Constraints

- Confirm source-document ownership and permission.
- Define expiry, preview, download, watermark, and withdrawal rules.
- Define the document-selection and copy automation.
- Confirm supplier security testing.

## More Information

- Fourth transcript: approximately 2:31:35–2:41:12.
