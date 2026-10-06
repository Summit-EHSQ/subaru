---
status: proposed
date: 2026-09-30
decision-date: not-recorded-in-transcript
deciders:
  - Joel Frick
  - Dave McLean
consulted:
  - Jamie Dossey
informed:
  - Emma Lister
  - Rick Redmond
primary-application: Production Part Approval Process (PPAP)
secondary-applications:
- Process Change Requests (PCR)
- Management of Change
- Supplier Portal
- Supplier Relationship Management
---

# ADR-105: Place the Minimum Supplier PPAP Request in PPAP and Keep Internal PCR in MOC

## Context and Problem Statement

Retiring IntelliQuest requires a supplier to be able to request a manufacturing-process change and for SQA to decide whether the request may proceed to PPAP. The broader target PCR process also requires cross-functional review of production, logistics, procurement, supplier-management, and design impacts, but that expanded workflow is planned for a later phase.

Waiting for the complete target workflow would preserve a dependency on IntelliQuest. The later workshop also clarified that the minimum supplier request and the internal cross-functional process-change workflow represent different boundaries: the supplier request is a lightweight precursor to PPAP, while the broader PCR concerns SIA-managed internal change.

## Decision Drivers

- Remove the minimum PCR dependency on IntelliQuest.
- Preserve supplier initiation and drawing or part traceability.
- Reuse the common PPAP architecture after a proceed decision.
- Defer cross-functional complexity without designing it out.
- Keep the supplier request within the established supplier, engineer, and PPAP interaction boundary.
- Preserve a separate Management of Change path for internal SIA process changes.

## Considered Options

### Keep all PCR capability in the later Management of Change phase

Protects the target architecture but prevents complete IntelliQuest retirement in the earlier release.

### Implement the complete cross-functional PCR workflow in the earlier phase

Meets the target design sooner but introduces unplanned scope, schedule, and stakeholder dependencies.

### Deliver a minimum supplier-intake workflow first and extend it later into the same PCR

Replaces the current quality-focused capability while retaining an extension point for the governed cross-functional review.

### Implement a Supplier PPAP Request in PPAP and retain internal PCR in MOC

Keeps the supplier request close to the PPAP it may initiate while preserving the broader internal change process as a separate MOC workflow.

## Decision Outcome

Propose separating the two capabilities by application boundary.

The earlier release will provide a PPAP-adjacent **Supplier PPAP Request** form and lightweight review workflow. An authorized supplier submits a request against an existing supplier, part, and applicable drawing context; the responsible engineer or SQA reviewer requests clarification, rejects the request, or records a **Proceed to PPAP** decision. Proceeding launches a process-change PPAP that uses the same parent, template, task, evidence, and approval architecture as other PPAP source types. The request is not initiated by BOMEX because it concerns a supplier-controlled production factor that does not itself revise the drawing.

Keep the broader internal Process Change Request in Management of Change for SIA-managed process changes requiring multi-department participation. Do not require the Supplier PPAP Request to become the front end of that internal workflow.

This revised boundary is still proposed pending the focused discovery session, change-order decision, and confirmation of fields and approvals. If accepted, it will require the target supplier-oriented PCR assumptions in ADR-032 through ADR-036 and the PCR subtype statement in ADR-068 to be reviewed for supersession or rescoping.

## Consequences

### Positive

- Enables retirement of the current quality-focused IntelliQuest PCR capability sooner.
- Reuses the established PPAP back end.
- Separates urgent replacement scope from broader process redesign.
- Gives the supplier request a clear home beside the PPAP it may initiate.
- Preserves the internal MOC process without forcing supplier requests into it.

### Negative

- The first increment does not provide the complete target concept review.
- Some cross-functional coordination remains outside Intelex until the later phase.
- The earlier supplier-oriented PCR target ADRs may need to be superseded or narrowed after confirmation.
- Schedule and budget effects require approval before commitment.

### Follow-up and Constraints

- Confirm the scope, change order, delivery phase, and UAT timing.
- Define minimum request fields, attachments, clarification loop, and SQA ownership.
- Confirm through focused discovery that the Supplier PPAP Request is limited to supplier submission, review, and optional PPAP launch.
- Approve the change order, delivery phase, and budget.
- Review ADR-032 through ADR-036 and ADR-068 after the boundary is confirmed.

## More Information

- PPAP design workshop transcript: approximately 3:02:25–3:17:56.
- Phase 2A design workshop day 3 afternoon: approximately 1:55:55–2:00:41. This discussion proposes the PPAP application boundary and confirms that the internal MOC PCR remains separately required.
- ADR-032 governs supplier initiation and concept outcomes.
- ADR-034 governs the target cross-functional review.
- ADR-068 governs the broader Management of Change subtype architecture.
