---
status: accepted
date: '2026-10-16'
decision-date: not-recorded-in-transcript
deciders:
- Luke Phillippo
consulted:
- Dave McLean
- Shao Ngoi
informed:
- Keith Freeman
- Jamie Dossey
- Brianne Carroll
- Joel Frick
- Rick Redmond
primary-application: Process Change Requests (PCR)
secondary-applications:
- Production Part Approval Process (PPAP)
- Supplier Portal
- Management of Change
---

# ADR-033: Derive PCR Type and PPAP Requirements from Governed Business Rules

## Context and Problem Statement

Different process-change categories require different reviewers, evidence, and PPAP elements. Suppliers may not reliably recognize the correct category from a list of approximately ten technical change types. Native Management of Change screening questions are easy to administer as content but do not provide the conditional follow-up logic required for this stable PCR classification model.

The existing supplier PCR form also establishes a deliberately small initial-entry pattern. It asks the supplier to identify whether the request concerns a part number or a product family, select the applicable record, choose a request type, provide a due date and description, and optionally upload supporting files. The replacement must preserve this low-friction intake while correcting terminology, enforcing supplier scope, and retaining enough information for later classification and review.

## Decision Drivers

- Apply quality-manual requirements consistently.
- Reduce incorrect supplier type selection.
- Use stable business logic for branching and required data.
- Preserve engineering discretion for unusual changes.
- Keep supplier initiation concise and understandable.
- Avoid asking suppliers to re-enter identity and supplier context already known from the portal session.

## Considered Options

### Require suppliers to select one technical category directly

Is simple but depends on supplier knowledge and can generate the wrong requirements.

### Use native MOC screening questions only

Is easy to maintain but provides limited conditional behavior.

### Use configured guided questions and governed rules

Supports classification, routing, and PPAP defaults from the same rule set.

## Decision Outcome

Maintain a governed PCR rule catalogue. The supplier answers stable, plain-language questions about the proposed change. Configured business logic derives or proposes the PCR category, required cross-functional reviews, whether PPAP is required, and the default PPAP element set.

The responsible SIA reviewer confirms or corrects the classification. Where PPAP is required, the responsible engineer may add further evidence requirements.

### Minimum Supplier-Entry Data

The initial supplier form must capture at least:

- **Scope basis:** whether the request is against a part number or a drawing. The legacy **product family** choice represents a drawing and will be relabelled accordingly.
- **Affected part number or drawing:** a required selection filtered to records associated with the submitting supplier.
- **Request type:** a required selection from the governed PCR request-type catalogue.
- **Requested due date:** a required date supplied with the request. The precise business meaning and validation of this date must be confirmed before configuration.
- **Description:** a required narrative explaining the proposed change.
- **Attachments:** optional supporting files at initial submission, subject to becoming conditionally required for particular request types through governed rules.

Derive the submitting user and supplier context from the authenticated Supplier Portal identity and its governed supplier relationships wherever that context is unambiguous. Store the resolved supplier and, where applicable, facility or depot on the PCR for routing, security, and reporting. Do not ask the supplier to select its own organization from an unrestricted list. If one user can act for multiple authorized supplier entities, require selection only from that user's permitted scope.

Where the business context is a drawing that groups multiple part numbers, label and store that selection as a drawing rather than the ambiguous legacy term **product family**. Limit drawing and part selections to active records associated with the submitting supplier. Source those relationships from the governed Product Management and Supplier Relationship Management models rather than exposing unrestricted reference lists.

Govern the available request types from the approved PCR procedure. Do not expose **Closed PPAP** as a request-initiation type. The detailed catalogue was described as containing approximately ten request types and remains to be validated against the procedure and current IntelliQuest examples.

The full rule catalogue is part of the expanded PCR design. The minimum Phase 2 increment may use a smaller SQA-controlled intake and decision set, but it must preserve the captured change context and an extension path to these governed rules.

## Consequences

### Positive

- Improves classification consistency.
- Aligns reviewer routing and PPAP defaults to one rule source.
- Reduces dependence on suppliers understanding internal category terminology.
- Preserves a concise initial submission experience.
- Makes the minimum intake payload explicit for Phase 2 implementation and later Phase 3 extension.

### Negative

- Configured logic requires developer governance rather than simple content administration.
- Rule changes must be versioned for requests already in progress.
- Human confirmation remains necessary for unusual cases.
- Supplier-to-drawing and supplier-to-part relationships must be sufficiently complete to support filtered selection.
- Changes to the governed request taxonomy require coordinated configuration maintenance.
- Portal identity and supplier relationships must resolve the correct supplier context, including users authorized for more than one entity.

### Follow-up and Constraints

- Confirm the current change-type catalogue and decision questions.
- Confirm the supplier-scoped drawing and part lookup source and empty-result behavior.
- Replace the legacy product-family label with drawing terminology where that is the represented object.
- Exclude Closed PPAP from the request-initiation catalogue.
- Define whether **Due date** means requested review completion, change implementation, PPAP need date, or another governed milestone, and define allowable values.
- Define which request types make attachments mandatory and what file controls apply.
- Define the supplier-entity selection behavior for users authorized for multiple facilities or parent-company scope.
- Define who may administer and approve rule changes.
- Define template versioning and override auditing.

## More Information

- Second transcript: approximately 2:03:24–2:08:13 and 2:14:17–2:15:50.
- Fourth transcript: approximately 1:36:50–1:41:31.
- PPAP design workshop continuation: approximately 3:02:25–3:17:56.
- Latest PCR architecture transcript: approximately 14:26–18:55. This discussion confirmed supplier-scoped drawing and part choices, clarified that product family represents drawing, and removed Closed PPAP as an initiation option.
- Existing supplier **New Process Change Request** form screenshot reviewed 2026-10-16. The visible required fields are the affected part or product-family selection, request type, due date, and description; attachments are available without a required indicator, and no separate supplier selector is shown.
