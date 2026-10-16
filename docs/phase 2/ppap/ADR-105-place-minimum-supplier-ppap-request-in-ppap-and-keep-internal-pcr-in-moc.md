---
status: rejected
date: 2026-10-16
decision-date: not-recorded-in-transcript
deciders:
  - Joel Frick
  - Dave McLean
  - Luke Phillippo
  - Keith Freeman
consulted:
  - Jamie Dossey
  - Brian Hensell
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

Waiting for the complete target workflow would preserve a dependency on IntelliQuest. An earlier workshop proposed that the minimum supplier request and the internal cross-functional process-change workflow represented different application boundaries: a lightweight supplier request in PPAP and a broader SIA-managed PCR in Management of Change.

Subsequent design review clarified that both increments belong to one supplier-initiated PCR lifecycle. The Phase 2 request is the deliberately limited starting portion of the Management of Change PCR, while Phase 3 extends that same record and workflow with internal cross-functional review and implementation activity.

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

Keeps the supplier request close to the PPAP it may initiate but separates two stages that the later design review established as one lifecycle.

### Implement the Phase 2 supplier PCR as a limited MOC child and extend it in Phase 3

Provides the minimum earlier capability while preserving one record, workflow, and supplier entry point for the expanded process.

## Decision Outcome

Rejected option: **Implement a Supplier PPAP Request in PPAP and retain internal PCR in MOC.**

Do not create a separate PPAP-adjacent Supplier PPAP Request. Implement the Phase 2 supplier request as the initial, stripped-down portion of the PCR child record and workflow under Management of Change. Phase 3 will extend that same PCR with Supplier Management intake, cross-functional review, and implementation activities.

An authorized supplier will continue to submit one PCR against the applicable supplier and drawing or part context. In Phase 2, SQA may request clarification, reject the request, or record a **Proceed to PPAP** decision. Proceeding launches a process-change PPAP that uses the common PPAP architecture while retaining its relationship to the originating PCR.

ADR-068 governs the MOC application boundary. ADR-032 through ADR-036 govern the supplier initiation, classification, review, and revision behavior.

## Consequences

### Positive

- Preserves one supplier-facing request and one end-to-end PCR lifecycle.
- Enables retirement of the current quality-focused IntelliQuest PCR capability in Phase 2.
- Reuses the established PPAP back end when the PCR requires validation.
- Avoids later migration or reconciliation between a temporary PPAP request and the expanded PCR.

### Negative

- The first increment does not provide the complete target concept review.
- Some cross-functional coordination remains outside Intelex until the later phase.
- The MOC-based PCR structure must be established before all Phase 3 rules are complete.

### Follow-up and Constraints

- Define the minimum Phase 2 request fields, attachments, clarification loop, and SQA ownership.
- Preserve extension points for the Phase 3 classification, reviewer, and child-workflow model.
- Define the PCR-to-PPAP data transfer and relationship.

## More Information

- PPAP design workshop transcript: approximately 3:02:25–3:17:56.
- Phase 2A design workshop day 3 afternoon: approximately 1:55:55–2:00:41. This earlier discussion proposed the PPAP application boundary and a separately required internal MOC PCR.
- Latest PCR architecture transcript: approximately 00:00–16:40 and 19:31–20:20. This discussion rejects the separate application boundary and establishes the Phase 2 PCR as the initial MOC child and workflow that will be expanded in Phase 3.
- ADR-032 governs supplier initiation and concept outcomes.
- ADR-034 governs the target cross-functional review.
- ADR-068 governs the broader Management of Change subtype architecture.
