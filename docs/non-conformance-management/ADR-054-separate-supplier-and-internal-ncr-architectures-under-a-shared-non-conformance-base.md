---
status: accepted
date: 2026-07-25
decision-date: not-recorded-in-transcript
deciders:
  - Eric McGregor
  - Monica Klaas
  - Luke Filippo
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

Internal NCRs will be classified at minimum as compliance, environmental, or safety. Detailed design will determine whether those classifications use separate forms and workflows or one internal form with limited variations. Supplier access is never inherited by internal NCRs.

## Consequences

### Positive

- Protects supplier confidentiality and internal-only information.
- Supports enterprise rollup without forcing one process.
- Allows departmental requirements to evolve within a governed framework.

### Negative

- Some common components may be duplicated between branches.
- Cross-branch reporting requires consistent shared fields and classifications.
- The internal form strategy remains to be decided.

### Follow-up and Constraints

- Define the shared base fields and reporting taxonomy.
- Define supplier versus internal security boundaries.
- Complete detailed internal form and workflow analysis.
- Confirm future scope for IPC and other internal quality groups.

## More Information

- Third transcript: approximately 0:57:52–1:00:49 and 2:16:18–2:45:33.
