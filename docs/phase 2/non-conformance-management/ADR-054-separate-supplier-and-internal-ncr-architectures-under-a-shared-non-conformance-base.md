---
status: accepted
date: 2026-09-02
decision-date: not-recorded-in-transcript
deciders:
  - Eric McGregor
  - Monica Klaas
  - Luke Filippo
  - Joel Frick
consulted:
  - Dave McLean
  - Shao Ngoi
informed:
  - Anne Coffin
  - Joel Frick
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Supplier Portal
  - Audit Management
  - Environmental Management
  - Safety Management
  - Corrective Action Management
---

# ADR-054: Separate Supplier and Internal NCR Architectures Under a Shared Non-Conformance Base

## Context and Problem Statement

Supplier NCRs expose records to external organizations and use a highly developed supplier-response workflow. Internal non-conformances serve compliance, environmental, safety, and other internal groups, use different security and ownership, and may originate from audits. Combining both in one unrestricted form and workflow would create portal-security and maintainability risks.

## Decision Drivers

- Enforce fundamentally different external and internal security.
- Support distinct workflow depth and ownership.
- Enable consolidated enterprise non-conformance reporting.
- Allow internal compliance, environmental, and safety requirements to evolve independently.

## Considered Options

### Use one universal NCR form and workflow

Maximizes theoretical reuse but creates excessive branching and external-security risk.

### Build unrelated applications for every department and supplier process

Provides isolation but fragments reporting and duplicates common capabilities.

### Use a shared base with separate supplier and internal branches

Preserves common reporting while allowing secure, maintainable specialization.

## Decision Outcome

Establish Supplier NCR and Internal NCR as the two primary branches of the Non-Conformance Management architecture. They share enterprise reporting dimensions and common concepts where practical, but use distinct forms, security, workflows, and portal exposure.

Internal NCRs will include internal quality initial-investigation records and independently raised environmental or safety non-conformances. Compliance issues originating in audits remain Audit Finding records under ADR-087 rather than becoming compliance NCR records. Audit Findings and Internal NCRs may both launch the common internal CAR process.

Supplier access is never inherited by an Internal NCR. If an internal investigation determines that supplier action is required, create a separate supplier-facing NCR, such as a PIR, and relate it to the internal record. The related supplier record defines the externally visible information and supplier-security context.

## Consequences

### Positive

- Protects supplier confidentiality and internal-only information.
- Supports enterprise rollup without forcing one process.
- Allows departmental requirements to evolve within a governed framework.
- Preserves a secure bridge between internal and supplier-facing investigations.

### Negative

- Some common components may be duplicated between branches.
- Cross-branch reporting requires consistent shared fields and classifications.
- Related internal and supplier records require controlled data copying and cross-record reporting.

### Follow-up and Constraints

- Define the shared base fields and reporting taxonomy.
- Define supplier versus internal security boundaries.
- Complete detailed Internal NCR, SQDIIR, and CAR configuration.
- Confirm future scope for IPC and other internal quality groups.

## More Information

- Third transcript: approximately 0:57:52–1:00:49 and 2:16:18–2:45:33.
- Subsequent non-conformance design transcript: approximately 0:43:04–0:52:22 and 2:18:12–2:26:41.
- ADR-087 governs the Audit Finding boundary. ADR-088 governs SQDIIR. ADR-089 and ADR-090 govern the common internal CAR model and lifecycle.
