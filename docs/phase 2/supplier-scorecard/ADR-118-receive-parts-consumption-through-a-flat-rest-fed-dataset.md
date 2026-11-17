---
status: proposed
date: 2026-11-13
decision-date: 2026-11-12
primary-application: Supplier Scorecard
secondary-applications:
  - Parts Consumption
  - Supplier Relationship Management
  - SIA integration layer
  - Intelex REST API
source_references:
  - "../product-management/raw_artifacts/meeting_transcripts/2026-11-12-supplier-integrations-and-go-live-testing.txt; 01:16–03:13, 05:19–06:42, 21:41–24:26"
  - "../product-management/raw_artifacts/meeting_transcripts/2026-11-12-supplier-integrations-and-go-live-testing-context.md; user-confirmed meeting date and time"
approval_references: []
---

# ADR-118: Receive Parts Consumption Through a Flat REST-Fed Dataset

## Context and Problem Statement

Supplier Scorecard needs integrated consumption data for KPI calculations. ADR-058 already establishes monthly parts consumption as the PPM denominator, alongside chargeable supplier NCR quantities, and retains manual entry until automated sources are validated. It leaves the integration method to SIA IT.

In the call, The implementation lead describes the scoped receiving pattern as a flat custom Intelex object populated through the Intelex REST API. SIA's integration lead confirms that his team owns the existing integration process and will identify the relevant legacy PPM call. The source payload and dictionary are not supplied within the transcript. [Call 01:16–03:13, 05:19–06:42.]

The term PPM is used for the integration dataset, but that does not establish that the payload contains calculated PPM results. The stated purpose is consumption data supporting scorecard metrics. Exact content must be verified before projection. [Call 01:33–02:26, 04:09–04:34.]

## Decision Drivers

- Provide consumption data that scorecard metrics can reference. [Call 01:33–01:47.]
- Follow the flat custom receiving-object boundary described in scope. [Call 02:06–02:26.]
- Reuse the integration team and current interface evidence. [Call 03:25–04:34, 05:19–05:55.]
- Establish the receiving dictionary and sample calls from the actual payload. [Call 06:06–06:42, 21:41–21:59.]

## Considered Options

1. **Receive consumption records into a dedicated flat custom Intelex dataset through REST, then reference them for scorecard queries.** The direction described in the call.
2. **Continue manual scorecard entry while source automation is unavailable.** Existing launch fallback under ADR-058; not a replacement for the proposed interface.
3. **Write the external feed directly into period KPI records.** Analyst-derived alternative; conflicts with ADR-058's governed-source and snapshot boundary.

The transcript does not document a formal comparison of alternative transports or final technical approval.

## Decision Outcome

Chosen option: "Receive consumption records into a dedicated flat custom Intelex dataset through REST, then reference them for scorecard queries," because the call identifies this as the scoped receiving pattern and the intended source of reusable consumption information. Record this as proposed until the actual PPM payload and integration contract are confirmed. [Call 01:16–03:13, 06:06–06:42.]

SIA's integration team will adapt the relevant existing source interface to send data to the Intelex REST API. Summit will define and configure the receiving object after the correct legacy call, populated example, or data dictionary is identified, then provide sample requests for technical review. The flat shape is a decision about the consumption intake dataset; it does not flatten the separate BOMEX engineering-change parent/child model. [Call 02:06–03:13, 05:19–08:35.]

Make the consumption dataset available as a governed scorecard source. Supplier-profile linkage and visibility are intended, but the exact supplier/facility key, relationship or query mechanism, and effective-access rules remain to be designed. This proposal does not grant supplier access to raw technical intake records merely because they support a profile view. [Call 06:16–06:26; existing ADR-078, ADR-084, and ADR-115.]

Retain ADR-058's monthly consumption semantics, manual-first sequencing, and published-scorecard snapshot controls. The call leaves delivery frequency to the integration team and does not establish a new cadence. Confirm delivery timing and correction rules against the monthly reporting period rather than claiming an agreed real-time, daily, or replacement monthly transport schedule.

Do not extend the isolated Product Management API Data component or add PPM objects to its eleven-object model by implication. The consumption dataset is a separate proposed interface whose hosting and operational connections require confirmation.

## Consequences

The following consequences are architectural analysis unless explicitly attributed.

### Positive

- Provides one receiving dataset for consumption queries instead of coupling the source interface directly to scorecard KPI records.
- Gives the existing integration team a concrete REST target and sample-request contract to adapt.
- Preserves period scorecard controls separately from source refresh and correction behavior.

### Negative

- The interface cannot be finalized from the transcript alone because its source call, field definitions, keys, and record grain remain unknown.
- Incorrect period or supplier/facility matching could produce incorrect KPI denominators.
- Flat intake does not remove the need for authentication, access control, duplicate/replay handling, correction behavior, and operational diagnostics; those mechanisms are unresolved, not already agreed capabilities.

### Follow-up and Constraints

- SIA's integration team must identify the PPM call and supply a populated payload or dictionary.
- Confirm row grain, stable identity, supplier/company/facility mapping, reporting period, quantity meaning and units, and whether any financial/cost properties are actually present.
- Define delivery frequency, initial loading, retry/idempotency, partial failure, late data, and correction/replay behavior before production use. The call does not specify these mechanics.
- Summit must define the receiving dictionary and sample requests; technical review determines required changes to the existing integration.
- Internal supplier-management, scorecard, and NCR business representatives should review field coverage during the agreed one-week non-blocking review. [Call 22:22–24:26.]
- Before enabling automated PPM capture, validate period and entity matching and the calculation under ADR-058. Do not infer readiness from preparation of sample calls.

## More Information

- [Supplied transcript](../product-management/raw_artifacts/meeting_transcripts/2026-11-12-supplier-integrations-and-go-live-testing.txt): 01:16–03:13 (purpose, flat object and REST); 03:25–05:55 (legacy-call identification and team); 06:06–06:42 (dictionary and intended supplier linkage); 08:37–09:22 and 21:41–22:13 (planned deliverables); 22:22–24:26 (business review).
- [ADR-058](ADR-058-build-supplier-scorecards-as-scheduled-kpi-snapshots-from-integrated-source-data.md): accepted scorecard calculation, monthly consumption, manual-first launch and snapshot policy. This proposed interface detail does not supersede it.
- ADR-076 and ADR-078 govern supplier entities and external scope; ADR-084 governs applicable source-record classification; ADR-115 governs aggregate scorecard access.
- [API technical specification](../product-management/solution_specification/object_model/product-management-api-technical-specification.md), §§1–2.3: current isolated Product Management API component is a separate build boundary.
- Draft date is the review date. The user confirmed the meeting was November 12, 2026, at 1:00 AM ET; see [meeting metadata clarification](../product-management/raw_artifacts/meeting_transcripts/2026-11-12-supplier-integrations-and-go-live-testing-context.md). The decision-date records the discussion date, not formal approval. No approval, deployed endpoint, actual field schema, or tested sample request is claimed.
