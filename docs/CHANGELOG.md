# ADR Revision Change Log

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
