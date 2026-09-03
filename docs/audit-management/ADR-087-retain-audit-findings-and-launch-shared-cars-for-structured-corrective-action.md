---
status: accepted
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Eric McGregor
consulted:
- Joel Frick
informed:
- Emma Lister
- Rick Redmond
primary-application: Audit Management
secondary-applications:
- Non-Conformance Management
- Corrective Action Management
---

# ADR-087: Retain Audit Findings and Launch Shared CARs for Structured Corrective Action

## Context and Problem Statement

Management-system audits can produce non-conformances, observations, opportunities for improvement, and strong points. These results all belong to the audit context, and several do not represent non-conformance records at all. The earlier proposal in ADR-055 would have bypassed the Audit Finding object and created compliance Internal NCRs, but the detailed design workshop established a different application boundary.

Compliance issues originate through audits. Safety and environmental issues may originate either through audits or as independently observed NCRs. Both an adverse Audit Finding and an independently raised NCR may require the same structured corrective-action process.

## Decision Drivers

- Preserve the complete audit-result taxonomy.
- Keep audit questions, evidence, requirements, and findings together.
- Avoid misclassifying positive and advisory findings as NCRs.
- Reuse one structured corrective-action process across source applications.
- Avoid duplicate entry when escalation to a CAR is required.

## Considered Options

### Replace adverse Audit Findings with compliance Internal NCRs

Supports one NCR reporting table but disrupts the native audit object model and does not fit observations, opportunities for improvement, or strong points.

### Duplicate structured corrective-action capabilities in Audit Management

Keeps audit work together but creates a second CAR implementation and inconsistent problem-solving behavior.

### Retain Audit Findings and allow adverse findings to launch the shared CAR process

Preserves the audit model while reusing structured corrective action.

## Decision Outcome

Retain Audit Finding as the record created from an audit question. Classify findings using the audit terminology required by the process, including non-conformance, observation, opportunity for improvement, and strong point.

When a finding requires structured cause analysis, action-plan review, implementation control, or effectiveness verification, allow the user to create a related CAR directly from the finding. Prepopulate relevant audit, question, requirement, auditee, and issue context. The CAR may also be launched from a standalone Internal NCR and therefore remains a shared corrective-action object rather than an audit-specific form.

Compliance issues will ordinarily follow the Audit Finding path. Safety and environmental teams may use both Audit Findings and independently raised NCRs according to the event source.

## Consequences

### Positive

- Preserves coherent audit terminology and history.
- Avoids forcing positive or advisory results into Non-Conformance Management.
- Reuses one CAR architecture across audit and non-audit sources.
- Allows users to escalate a finding without navigating away and re-entering context.

### Negative

- Combined issue reporting must normalize Audit Findings and Internal NCRs.
- Audit Management requires an in-context CAR relationship and launch action.
- Closure dependencies between a finding and its CAR must be defined.

### Follow-up and Constraints

- Confirm field mapping from Audit Finding to CAR.
- Define which finding classifications or decisions require a CAR.
- Define finding closure behavior while a related CAR remains open.
- Confirm changes required in the Phase One Audit Management configuration.

## More Information

- Supersedes ADR-055.
- Subsequent non-conformance design transcript: approximately 2:14:12–2:26:41.
- ADR-057 governs requirement references. ADR-089 and ADR-090 govern the shared CAR structure and lifecycle.
