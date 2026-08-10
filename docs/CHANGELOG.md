# ADR Revision Change Log

## Fourth and Final Transcript Revision

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
