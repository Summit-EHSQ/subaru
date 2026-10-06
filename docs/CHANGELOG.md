# ADR Revision Change Log

## Supplier Scorecard Detailed Design Revision

### Superseded or Removed ADRs

- No ADR was removed or superseded. The proposed Supplier PPAP Request boundary may require ADR-032 through ADR-036 and ADR-068 to be superseded or rescoped, but the transcript requires a confirming discovery and scope decision before that change is final.

### Updated Existing ADRs

- **ADR-058:** Added configurable KPI defaults and explicit applicability, administrator-only query overrides, commodity and ranking references, detailed safety sourcing, and the proposed cadence-specific hierarchy refinement.
- **ADR-068:** Recorded the proposed separation between a PPAP-hosted supplier request and the internal SIA Process Change Request retained in Management of Change.
- **ADR-076:** Clarified that scorecard programs select one entity level and avoid duplicate parent-and-facility entry.
- **ADR-084:** Added the explicit aggregate-scorecard exception to transactional new-model and mass-production visibility inheritance.
- **ADR-086:** Confirmed a broad notification-based internal review without individual approval tasks and replaced general correction access with administrator-only overrides.
- **ADR-105:** Resolved the preferred hosting direction to a PPAP-adjacent Supplier PPAP Request while retaining the internal PCR in MOC; status remains proposed pending discovery and scope approval.

### New ADRs

- **ADR-111:** KPI initialization supports no default, a static value, or prior-period carry-forward, with explicit not-applicable treatment.
- **ADR-112:** Monthly safety rates and semiannual Safety Kaizen use separate supplier surveys and effective-dated NAICS benchmark data.
- **ADR-113:** Proposes monthly facility scorecards and a periodic parent-company assessment instead of historical monthly back-population.
- **ADR-114:** Snapshots commodity on each scorecard and calculates period rankings on demand.
- **ADR-115:** Separates aggregate scorecard access from source-record security and restricts administration and overrides.
- **ADR-116:** Uses responsive browser forms, supplier-profile history drilldown, and optional governed reporting endpoints.

### Open Items Not Promoted to Accepted Decisions

- Management and procurement must confirm the monthly facility and annual parent-company split under ADR-113.
- The business must confirm whether facilities may override the parent-company commodity under ADR-114.
- No specific Power BI deliverable was approved; ADR-116 records only the supported integration pattern.
- Focused discovery and change-order approval are required before ADR-105 can supersede or rescope the older supplier-oriented PCR target ADRs.

### Status

- **Total ADRs:** 114
- **Accepted:** 88
- **Proposed:** 23
- **Superseded:** 3

## PPAP Design Continuation Revision

### Superseded or Removed ADRs

- No ADR was removed or superseded. The continuation refined evidence reuse, approval, Pilot Part Data, recurring supplier work, PCR sequencing, and storage implications.

### Updated Existing ADRs

- **ADR-022:** Required engineer review of every supplier and internal PPAP element, added immutable rejection history and counts, and gated parent completion on all element approvals.
- **ADR-023:** Replaced shared or automatically retained evidence references with engineer-confirmed, immutable task-level snapshots that retain copied-from lineage and exclude unapproved concurrent submissions.
- **ADR-025:** Added a governed eligible-approver pool, engineer selection of an available management approver, internal-only management comments, and controlled reopening of affected elements.
- **ADR-027:** Limited concurrent-PPAP evidence reuse to the latest approved lineage and kept unapproved parallel submissions out of the reusable baseline.
- **ADR-030:** Connected later ECS drawing reviews to open PPAP reassessment and required a new PPAP after approval unless a governed exception applies.
- **ADR-032:** Limited the early PCR transition increment to clarification, rejection, and proceed-to-PPAP outcomes while preserving the broader target outcome model.
- **ADR-033:** Clarified that the full governed classification catalogue belongs to the expanded PCR design and need not be completed in the transition increment.
- **ADR-034:** Preserved configurable cross-functional review as the target workflow while documenting the temporary SQA-only sequencing exception.
- **ADR-040:** Confirmed that build-event pilot work normally inspects every received in-scope unit, subject to controlled exclusions.
- **ADR-041:** Clarified that PPAP sample measurement execution may remain in the shared inspection framework while PPAP holds the requirement and approval relationship.
- **ADR-045:** Reconfirmed that one failure record may group multiple failed responses from one inspection condition.
- **ADR-068:** Preserved MOC as the target PCR base without forcing the earlier minimum intake into an unfinished Phase Three subtype design.
- **ADR-074:** Added immutable PPAP evidence snapshots to storage-capacity forecasting rather than weakening the approval boundary to reduce duplication.
- **ADR-080:** Distinguished planned one-to-many campaigns from targeted tasks and aligned campaign outputs with the shared supplier-task pattern.
- **ADR-098:** Limited Pilot Part Data to new-model PPAPs, made pilot execution concurrent with PPAP work, and added cumulative published checklist versions across build events.
- **ADR-099:** Moved PPAP and build-event scope from the physical shipment header to part-level data logs so one consignment may support several quality contexts.
- **ADR-101:** Added model-level build-event records, distinct from PPAP phases and manufacturing stages, as the authoritative event choices for Pilot Part Data.
- **ADR-102:** Added configurable non-annual frequencies, post-handover operational ownership, the distinction from Safe Launch, and reuse of shared supplier-task behavior.

### New ADRs

- **ADR-103:** A proposed shared supplier-task model supports targeted one-off and recurring work, role assignment, notes, files, governed checklists, review rules, and versioned templates.
- **ADR-104:** Supplemental engineering changes join an open PPAP and reopen affected elements; changes after closure create a new PPAP with approved evidence carry-forward.
- **ADR-105:** A proposed minimum supplier PCR intake and SQA proceed-to-PPAP workflow is delivered before the later cross-functional concept-review expansion.

### Open Items Not Promoted to Separate Decisions

- The physical base-object design for targeted and campaign-generated supplier tasks remains open under ADR-103.
- Recurring validation ownership, stopping rules, reviewer behavior, and escalation remain open under ADR-102.
- The initial PCR hosting application, change order, schedule, and budget approval remain open under ADR-105.
- Security and mobile behavior were deferred to a later discussion and were not converted into ADRs.

### Status

- **Total ADRs:** 105
- **Accepted:** 80
- **Proposed:** 22
- **Superseded:** 3

## PPAP Design Revision

### Superseded or Removed ADRs

- No ADR was removed or superseded. The new workshop refined existing PPAP boundaries and added decisions for model-level scheduling and recurring validation.

### Updated Existing ADRs

- **ADR-022:** Added the governed requirement library, versioned PPAP templates, prospective publication behavior, and prohibition on ad hoc element types.
- **ADR-023:** Added automatic evidence-lineage resolution, unchanged-evidence carry-forward, and retained internal rejection history with supplier replacement behavior.
- **ADR-025:** Narrowed overall group-leader approval from important-quality or important-safety PPAPs to important-safety PPAPs; important-quality classification continues to drive evidence defaults.
- **ADR-026:** Added separate model-change, running-change, and PCR internal responsibility roles with supplier-context routing and reassignment.
- **ADR-030:** Replaced source-linked draft PPAP creation with an initial ECS-and-drawing review gate that records PPAP required, not required, or addressed by another PPAP.
- **ADR-039:** Aligned inspection-specification gating with the initial drawing review and conditional PPAP creation rather than draft-PPAP creation.
- **ADR-098:** Aligned pilot-program initiation with PPAPs created after the initial drawing review rather than directly staged by the source integration.

### New ADRs

- **ADR-101:** Model-change summaries group related PPAPs under a shared phase-and-stage schedule with cascading dates, controlled bulk resequencing, PPAP-level overrides, and retained baseline dates.
- **ADR-102:** Recurring quality-validation, dimensional, and material results are proposed as records outside the point-in-time PPAP evidence lifecycle, potentially collected through Supplier Surveys.

### Retained Without Material Change

- **ADR-021:** The new transcript reinforces the drawing-scoped PPAP and selected part context.
- **ADR-024:** The separate but linked Pilot Part Data boundary remains consistent with the new workshop.
- **ADR-027 through ADR-029 and ADR-031:** No new discussion invalidated or materially changed these decisions.

### Open Items Not Promoted to Separate Decisions

- Final names and values for model phases and manufacturing stages remain configuration work under ADR-101.
- Supplier-scorecard treatment of PPAP timeliness requires KPI governance before implementation.
- The hosting application, review rules, recurrence lifecycle, and stopping conditions for recurring validation remain open under ADR-102.

### Status

- **Total ADRs:** 102
- **Accepted:** 79
- **Proposed:** 20
- **Superseded:** 3

## Product Management and Pilot Part Data Design Revision

### Superseded ADRs

- **ADR-042:** Superseded by ADR-098. The later design routes pilot responsibility through the PPAP or pilot program and explicit receiving-team assignments. New-model versus mass-production is a security classification rather than a separate part-owner routing field.

### Updated Existing ADRs

- **ADR-030:** Added the BOMEX publication trigger, initial batch and later delta pattern, Intelex GUID mapping, API-limit considerations, and administrator-only integration staging.
- **ADR-038:** Added program-context checklist versioning, copy-forward behavior, expanded response types, numeric guardrails, and instructed units without automatic conversion.
- **ADR-039:** Clarified that source integration may stage a PPAP but does not automatically create pilot programs or events.
- **ADR-040:** Added received-quantity-driven unit generation and unit-oriented and consolidated-grid inspection views.
- **ADR-041:** Added independently versioned copy-forward from pilot inspection into Safe Launch.
- **ADR-043:** Removed the earlier offline-document fallback and selected responsive connected browser forms for laptops, tablets, and phones.
- **ADR-044:** Limited frequency plans to recurring programs such as Safe Launch; development pilot inspections use discrete PPAP build events and actual shipments.
- **ADR-045:** Replaced automatic full supplier NCR creation with an engineer-reviewed pilot failure subtype supporting grouping, disposition, conditional supplier release, replacement, and reinspection.
- **ADR-062:** Expanded PartsMaster integration into a composite canonical part architecture using separately retained BOMEX and PartsMaster records, field precedence, and governed depot exceptions.
- **ADR-084:** Added PPAP-context inheritance, management-controlled model handover, and explicit supplier visibility boundaries for pilot records.
- **ADR-092:** Expanded supplier relationships to unrestricted typed manufacturer, assembly, sequencing, and service relationships and allowed manufacturer defaulting during NCR intake.

### New ADRs

- **ADR-097:** Effective-dated parent-child part hierarchies with bidirectional navigation.
- **ADR-098:** Engineer-initiated pilot programs from staged PPAP and build-event context.
- **ADR-099:** Event-scoped supplier shipments, part-level data logs, receipt acknowledgement, and inspector assignment.
- **ADR-100:** No historical Pilot Part Data migration, with separate rules for part bootstrap, closed PPAP import, and active-work cutover.

### Open Items Not Promoted to Separate Decisions

- Final field-to-source mappings, authoritative depot sources, and exception-reconciliation rules remain open under ADR-062.
- The precise BOMEX batch-versus-delta payload strategy and integration retry ownership remain implementation decisions under ADR-030.
- First-time PPAP assignment fallback and the authoritative build-event source require detailed design under ADR-098.
- The management role and cascade mechanics for model handover require security-matrix confirmation under ADR-084.

### Status

- **Total ADRs:** 100
- **Accepted:** 78
- **Proposed:** 19
- **Superseded:** 3

## Supplier NCR and Warranty Workflow Revision

### Superseded or Removed ADRs

- No ADR was removed or superseded. New discussion refined existing architectural boundaries rather than invalidating the decisions they represent.

### Updated Existing ADRs

- **ADR-003 and ADR-004:** Added distinct supplier warranty contacts and role-seat assignment for long-lived internal responsibilities.
- **ADR-046:** Made the supplier NCR parent-and-typed-child object structure explicit.
- **ADR-048:** Added problem-profile, impact-level, certified-shipment, and third-party-sort requirement activation.
- **ADR-049:** Replaced post-release supplier transfer with cancellation or closure and creation of a correctly secured replacement NCR.
- **ADR-050:** Defined supplier responses as typed child forms rather than internal action plans and grouped root-cause methods in one approval container.
- **ADR-051:** Added conditional final approval, scheduled child follow-ups, delayed activation, a non-operational holding assignment, and automatic closure after the last check.
- **ADR-052:** Separated generated 7-4 artifacts from later supplier-visit and meeting execution.
- **ADR-053:** Replaced the distinct WCAR workflow with WCAR-specific configuration inside the shared supplier-issue workflow framework.
- **ADR-056:** Added type-specific CAR determination and linked the environmental scoring decision.
- **ADR-059:** Added claim-driven monthly eligibility, dedicated chart uploads, overdue and month-end incomplete handling, role routing, and concurrent API development.
- **ADR-088:** Recorded that SQDIIR and quality-CAR initial-release scope remains subject to schedule and budget review without changing the target architecture.

### New ADRs

- **ADR-092:** Parts may relate to both a manufacturer and a sequencing or service supplier through role-qualified relationships.
- **ADR-093:** RMA is a disposition-linked child workflow; third-party-sort instructions are modeled separately.
- **ADR-094:** Supplier-issue records use simple identifiers and normalized searchable business attributes.
- **ADR-095:** Supplier visits and 7-4 activity are proposed for Meetings Management rather than a PIR workflow branch.
- **ADR-096:** Internal NCR types use different CAR-determination mechanisms, including scored environmental escalation.

### Open Items Not Promoted to Separate Decisions

- Exact environmental assessment arithmetic and threshold governance require confirmation against the controlled evaluation form.
- The no-defect third-party-sort RMA treatment and quantity-reconciliation rules require detailed configuration design.
- Meetings Management licensing, supplier security inheritance, and product fit require confirmation before ADR-095 can be accepted.
- Warranty Analysis licensing, final scope allocation, source-feed contract, and exact schedule remain open under ADR-059.
- SQDIIR and internal quality-CAR inclusion in the initial release remains subject to prioritization after detailed estimation.

### Status

- **Total ADRs:** 96
- **Accepted:** 74
- **Proposed:** 20
- **Superseded:** 2

## Non-Conformance Design Revision

### Superseded ADRs

- **ADR-055:** Superseded by ADR-087. Detailed design retained Audit Findings as the audit-native records and uses a related CAR when structured corrective action is required.

### Updated Existing ADRs

- **ADR-054:** Removed compliance NCRs from the standalone Internal NCR classifications and added explicit linked-record handling when an internal event requires supplier response.
- **ADR-056:** Reframed the common internal architecture around type-driven NCR workflows and a shared CAR lifecycle without converting Audit Findings into NCR records.
- **ADR-057:** Applied phased requirement references to Audit Findings, Internal NCRs, and related CARs.
- **ADR-059:** Reconfirmed Warranty Analysis as a separate recurring supplier obligation and an IntelliQuest decommissioning dependency.
- **ADR-061:** Classified on-site contractors with SIA-managed identities as restricted internal-authentication users rather than supplier-portal users.
- **ADR-078:** Made supplier-data security explicitly independent of the SIA location hierarchy.
- **ADR-082:** Limited supplemental location-group behavior to internally location-governed data and deferred supplier visibility to ADR-078 and ADR-084.

### New ADRs

- **ADR-087:** Audit Findings remain distinct from NCRs and may launch the shared CAR process.
- **ADR-088:** SQDIIR uses a separate initial-investigation and containment record with sequential review and optional CAR linkage.
- **ADR-089:** Internal CAR uses a source-linked parent with structured analysis, root-cause, action-plan, accountability, implementation, and team relationships.
- **ADR-090:** Internal CAR actions remain inactive until plan approval, and implementation verification is separated from effectiveness verification.
- **ADR-091:** Incidents and NCRs remain separate but may be linked when investigation identifies a distinct non-conformance.

### Open Items Not Promoted to Separate Decisions

- Final SQDIIR-to-CAR criteria, final-review rejection routing, and IPC-only field ownership require procedural confirmation.
- Quality-specific CAR scope and fixed or repeated effectiveness-review intervals remain deferred for a dedicated QC session.
- Exact CAR source cardinality, snapshot behavior, implementation-role authority, and effectiveness reactivation lead times require configuration design.
- Detailed incident-to-NCR launch rules remain for the Incident Management workshop.
- Training evidence for SIA-identified contractors remains unresolved beyond the authentication and security boundary.

### Status

- **Total ADRs:** 91
- **Accepted:** 70
- **Proposed:** 19
- **Superseded:** 2

## Subsequent Supplier Workflow Revision

### Superseded ADRs

- **ADR-001:** Superseded by ADR-083 after the existing SIA supplier portal was retained as the upstream entry point and Intelex was scoped as the supplier-quality workspace rather than the general external integration hub.

### Updated Existing ADRs

- **ADR-003:** Clarified that external responsibilities are configurable multi-member supplier/depot relationship records and normally are not maintained at part level.
- **ADR-004:** Made internal supplier ownership roles explicitly data-driven, reusable by workflows, and distinct from part-level assignments.
- **ADR-005:** Added contextual training extension points, external video-hosting guidance, and the governed boundary for supplier-document requirements.
- **ADR-008:** Added distinct internal and supplier audit entry points with supplier-entity-scoped security.
- **ADR-031:** Added a lightweight manually recorded shipment-without-approval exception while retaining future shipment-event integration.
- **ADR-042:** Expanded part-level internal ownership to support workload balancing and potential APQP, PPAP, and NCR routing.
- **ADR-058:** Reframed scorecards around a versioned KPI library supporting manual and automated values, facility results, company rollups, and structured trend reporting.
- **ADR-061:** Documented existing supplier Entra guest identities and the decision not to implement supplier Entra SSO or synchronized provisioning in the initial release.
- **ADR-076:** Added facility/depot scorecard generation and parent-company aggregation as an explicit hierarchy consumer.
- **ADR-081:** Added independent Intelex supplier-user activation as a benefit of the local-authentication model.
- **ADR-082:** Added Training Management to the cross-location access scope and strengthened supplier-entity isolation testing.

### New ADRs

- **ADR-083:** Existing SIA supplier portal retained upstream, with an Intelex-centric supplier-quality workspace using progressive disclosure and drill-down navigation.
- **ADR-084:** Supplier-entity access supplemented by mutable lifecycle-based visibility classifications for confidential new-model and mass-production information.
- **ADR-085:** Supplier lot approval modeled as an event-driven supplier submission and internal review rather than a calendar recurrence.
- **ADR-086:** Monthly scorecards orchestrated through consolidated KPI entry, completion monitoring, time-boxed internal review, and supplier publication without acknowledgement.

### Open Items Not Promoted to Separate Decisions

- Final visibility classifications, transition authority, and the cross-application security matrix remain to be configured under ADR-084.
- Supplier Lot Approval applicability, fields, and reuse of the shared inspection framework remain implementation follow-up under ADR-085.
- Exact scorecard dates, reminders, escalation, missing-value rules, and delayed-publication behavior remain configuration follow-up under ADR-086.
- Supplier Entra integration remains a possible future enhancement but is not part of the initial release.

### Status

- **Total ADRs:** 86
- **Accepted:** 66
- **Proposed:** 19
- **Superseded:** 1

## Supplier-Management Design Revision

### Updated Existing ADRs

- **ADR-001:** Expanded Supplier Relationship Management from a portal-navigation anchor to the shared supplier-data hub for connected applications.
- **ADR-002:** Replaced the earlier post-award onboarding state with direct active-record creation and separately tracked profile completeness.
- **ADR-003:** Separated supplier contacts from authenticated portal users while retaining standardized relationship-role routing.
- **ADR-005:** Reframed onboarding templates as active-profile completeness templates and added central role-library propagation to existing suppliers.
- **ADR-006:** Connected supplier self-service and periodic confirmation to actual profile-data review through reusable campaigns.
- **ADR-007:** Replaced the fixed one-year inactivity rule with centrally configurable role-based notification and deactivation thresholds plus a global fallback.

### New ADRs

- **ADR-076:** Parent-company and child-facility or shipping-depot supplier hierarchy.
- **ADR-077:** Bulk initial migration and reviewed manual post-award supplier intake.
- **ADR-078:** Supplier-entity-scoped external portal access with parent-to-child inheritance.
- **ADR-079:** Status-driven downstream eligibility, auditable transitions, and history-preserving reactivation.
- **ADR-080:** Reusable, role-targeted supplier information-request campaigns.
- **ADR-081:** Delegated supplier user administration with projected-allocation warnings and secure activation.
- **ADR-082:** One-profile internal access across location structures through supplemental location groups.

### Open Items Not Promoted to Accepted Decisions

- The direct relationship between manufacturing facilities and shipping depots beyond their shared parent remains to be designed.
- A possible `Warranty Only` supplier status and its permitted workflow behavior remain unresolved.
- Campaign implementation scope, license-allocation bands, warning ownership, and cross-location effective permissions require confirmation.

### Status

- **Total ADRs:** 82
- **Accepted:** 63
- **Proposed:** 19
- **Superseded:** 0

## Previous: Fourth Transcript Revision

### Updated Existing ADRs

- **ADR-007:** Replaced short-period recertification with automatic supplier-account deactivation after one year of inactivity; status changed to accepted.
- **ADR-010:** Added an extensible fulfillment relationship so later specialist applications can satisfy APQP tasks without redesigning the parent plan.
- **ADR-030:** Expanded BOMEX staging to include drawing revision, related ECS records, part relationships, files, and the custom REST integration pattern.
- **ADR-032:** Added a governed no-PPAP outcome for approved logistics-only changes.
- **ADR-033:** Replaced direct supplier category selection with guided business-rule classification and PPAP requirement derivation.
- **ADR-035:** Changed depot-change routing from universal PPAP to conditional PPAP based on manufacturing and quality impact.
- **ADR-037:** Limited the DCR scope to direct suppliers and reopened the system-of-record decision; status changed to proposed.
- **ADR-058:** Added monthly parts-consumption integration and the PPM source-data model.
- **ADR-059:** Added the daily supplier-secured warranty-claim feed that supports the monthly Warranty Analysis obligation.

### New ADRs

- **ADR-060–ADR-062:** SuccessFactors employee provisioning, Entra/internal versus supplier/external authentication, and PartsMaster/service-part integration governance.
- **ADR-063–ADR-065:** Supplier scrap visibility, OHM injury integration, and a future SAP tooling-payment event boundary.
- **ADR-066–ADR-068:** Central platform governance, internal app-builder enablement, and the MOC subtype architecture.
- **ADR-069–ADR-072:** Electronic AAS, TACT-TRI, SPANF, and TS Request architecture.
- **ADR-073–ADR-075:** Supplier-NCR part-history workspace, file-storage governance, and the proposed LMS-to-Training Management completion integration.

### Open Items Not Promoted to Accepted Decisions

- Resolver-to-Intelex environmental incident integration remains subject to feasibility and process confirmation.
- Localization workflow details require a dedicated process-owner session.
- Supplier-owned-part RMA may become a SPANF subtype or a separate custom application.
- The final direct-supplier DCR system of record remains unresolved.

### Status

- **Total ADRs:** 75
- **Accepted:** 59
- **Proposed:** 16
- **Superseded:** 0

## Prior Revision History

- The third transcript refined ADR-020, ADR-024, and ADR-030 and added ADR-038 through ADR-059.
- The second transcript refined ADR-003 through ADR-006 and added ADR-021 through ADR-037.
- No prior ADR was superseded.
