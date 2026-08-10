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
  - Joel Frick
  - Rick Redmond
primary-application: Non-Conformance Management
secondary-applications:
  - Supplier Portal
  - Supplier Relationship Management
---

# ADR-049: Delay Supplier NCR Access Until Internal Intake and Risk Classification Are Complete

## Context and Problem Statement

Initial reports may identify the wrong part or supplier, especially for assemblies containing directed-buy components. Supplier access is security-sensitive: exposing a record to one supplier and later changing the supplier can disclose another supplier’s information. The current process performs intake and risk analysis before an explicit submit-to-supplier action.

## Decision Drivers

- Prevent premature or incorrect supplier disclosure.
- Confirm the response tier before asking the supplier to act.
- Allow internal intake, duplicate review, and responsibility correction.
- Make the supplier-release milestone reportable.

## Considered Options

### Grant supplier access as soon as a supplier is selected

Provides immediate visibility but creates significant disclosure and correction risk.

### Never permit supplier correction after initial creation

Is secure but does not handle recurring directed-buy misidentification.

### Keep the record internal until explicit release and use a controlled correction path

Balances security, operational correction, and supplier collaboration.

## Decision Outcome

Supplier NCRs remain internal during intake, duplicate review, supplier and part confirmation, occurrence setup, and initial risk analysis. An explicit submit-to-supplier action records the release milestone, resolves authorized portal contacts, and activates the applicable supplier response.

Before release, authorized users may correct the part and supplier. After release, the supplier relationship is not silently edited. A required supplier correction must use a controlled action that revokes prior access, preserves the audit trail, re-evaluates record content, and explicitly releases the case to the new supplier.

## Consequences

### Positive

- Reduces accidental supplier disclosure.
- Ensures suppliers receive a classified and actionable case.
- Creates a clear reportable handoff milestone.

### Negative

- Internal delay can slow supplier containment if intake is not timely.
- Post-release supplier correction requires specialized logic.
- Portal membership must be accurate at release.

### Follow-up and Constraints

- Define the secure supplier-correction workflow.
- Define release validation and required data.
- Define portal membership and notification behavior.
- Define reporting on internal intake time versus supplier response time.

## More Information

- Third transcript: approximately 1:20:49–1:24:51 and 1:35:44–1:38:27.
