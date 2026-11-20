# PPAP target validation and open inputs

**17 November 2026 · Draft design review, not runtime acceptance.**

[Technical specification](ppap-target-technical-specification.md) · [Canonical fields](ppap-target-field-contract.md) · [Traceability](ppap-requirements-and-adr-traceability.md) · [Acceptance scenarios](ppap-acceptance-scenarios.md)

## 1. Validation scope

The specification is reconciled against the preserved OOTB extraction, the current decision register, all 18 PPAP ADR dispositions and relevant adjacent-domain authorities. All 42 confirmed decisions have a current traceability row. The engineering-reopening decision is explicitly superseded; non-engineering correction remains supported.

The logical target has **50 modeled objects**, comprising **17 external authority objects** and **33 PPAP-owned new/modified objects**, including seven independent governed catalogues. There are **335 active field/inverse-grid rows**, **50 object subsections**, four Mermaid partitions, and **56 acceptance scenarios**. These counts describe the documented design scope, not the tenant's total schema or a count of new physical tables. Shared fields are defined once in their linked authority; legacy-only fields remain individually dispositioned in the impact appendix.

| Check | Result / evidence |
|---|---|
| Object inventory ↔ numbered field subsections | PASS: one section for every object, including external objects with no direct target changes |
| Model declarations ↔ canonical rows ↔ JSON field contract | PASS: one row for each active directly declared field or designed inverse grid; six populated canonical cells; requiredness limited to Y/N/Conditional |
| Designed relationship targets and inverse grids | PASS: all targets resolve; each inverse navigates its exact declaring reference and creates no duplicate storage |
| Catalogue normalization | PASS: seven concrete localizable catalogues; M:1 selectors use stable Code semantics and disable inverses; no invented shared catalogue inheritance family |
| Inheritance | PASS: retained direct PPAP→Project Framework edge and shared-authority edges; no missing modeled base or cycle; unrelated external inheritance remains unresolved rather than guessed |
| Mermaid | PASS for local structural grammar, declared nodes/endpoints and complete 50-object coverage; full rendering/visual layout has not been executed |
| Publication mapping | Reviewed: authoring fields name version disposition, version fields name source/generated value; complete question/row/file graphs and active-version atomicity specified. Actual transaction/file-copy behavior requires tenant proof |
| Current requirement coverage | PASS: all 42 confirmed decisions exactly once in current matrix; superseded decision separated |
| ADR disposition | Reviewed: all 18 PPAP ADRs, including deferred ADR-031/102, superseded ADR-104 behavior and rejected ADR-105 option versus current MOC outcome |
| Acceptance contract | 56 scenarios specified; none represented as executed |
| Preserved input integrity | Five package bytes/hashes checked against the baseline manifest; baseline model fingerprint preserved; no target builder writes to source packages/baseline |
| Documentation links | Checked against current local files/headings; machine report records final counts and any warnings |
| Executable expressions | No new unverified formula is presented as executable. Arithmetic, matching, applicability and filters are declarative contracts requiring native binding verification |
| Runtime implementation | NOT EXECUTED: no tenant deployment, actual permission/attachment test, load measurement or integrated payload transaction |

Machine results are [model validation](ppap-target-validation.json) and [document validation](ppap-target-document-validation.json). Reproduce with `node scripts/build_ppap_target_specification.cjs`, then `node scripts/validate_ppap_target_specification.cjs` from the repository root. The builder updates only its generated target files; hand-authored orchestration, traceability and source evidence remain separate.

## 2. Independent review and reconciliations

Independent reviews covered requirements/ADRs, source and shared-object boundaries, and baseline/APQP impacts. Corrections incorporated into the current design include:

- Every origin, including PCR/manual, obtains authoritative released drawing and per-part provenance before Issue. Unknown flags do not silently become FALSE.
- Optional typed questions remain visible; copied publication Codes repeat safely across versions with correctly scoped uniqueness.
- Drawing review links a released inspection-specification version; linked results preserve immutable result/version meaning or copied evidence.
- Physical Build Events retain separate Start Date and End Date. Model-specific phase moves preserve issued baselines and disconnected manual dates.
- Draft connected dates refresh before Issue. Published matrix lineage remains immutable while authorized operational schedule changes are audited.
- Configuration publication and intake can occur before a PPAP exists; target PPAP guards apply only where that relationship actually exists.
- Source classification corrections affecting the original scope are distinguished from a different new engineering revision.
- Cancellation durably queues the originating cancelled outcome before terminal commit and delivers afterward with retries. Multiple linked PPAPs cannot be collapsed into the legacy singular RelatedPPAP shortcut.
- Discussion requires text, supplier-created threads are supplier-visible, posted content is immutable and closure prevents all new replies/files.

These are reconciliations of the draft, not evidence that native handlers, security or integration have been configured.

## 3. Required input and binding register

The business clarification sequence is complete. One explicitly pending source input and the following technical/configuration bindings remain. They do not justify inventing business rules or silently reducing release scope.

| ID | Input / verification | Suggested owner | Impact until resolved | Exit evidence |
|---|---|---|---|---|
| PPAP-INPUT-001 | Controlled current SIA PPAP procedure, IntelliQuest requirement/question library, templates and classification matrix | SIA PPAP process owner | Source-backed requirement names/content, protected mandates, categories, phases, manufacturing stages, exception reasons, attachments, joint acknowledgments, templates and offsets cannot be finalized | Controlled source/version references and reconciliation mapping every retained/modified/added/retired OOTB item; approved initial target versions |
| PPAP-GATE-002 | Operational BOMEX/ECS producer contract: namespaces, canonical identities, release ordering, full/delta/correction/removal semantics, timestamp authority and wire fields | SIA system-development / Product Management integration owner | Automated intake is required in release 1 but cannot be implemented from semantic descriptions alone | Versioned payload contract, example replay/correction/new revision cases, source-to-operational crosswalk and release criteria |
| PPAP-GATE-003 | Native operational Part, Drawing Revision and source classification mappings; effective drawing/part precedence and exact facility/depot relationships | Product Management / SRM owners | Cannot validate source scope or authoritatively issue work; isolated Product Integration is not a substitute | Verified object/field IDs and authoritative positive/negative/unknown classification examples covering all origins |
| PPAP-GATE-004 | Exact SRM library roles, entity-specific role groups, eligible current members, management pools and PPAP administrator group | SIA role/security owner | Required assignments/pools may be empty; no fallback may bypass this | Governed group/role IDs and demonstrated exact-entity role resolution/action-time membership |
| PPAP-GATE-005 | Controlled manual-intake permission group and canonical reconciliation path | SIA PPAP/integration administrators | Manual fallback cannot be exposed to ordinary suppliers or duplicate automated reviews | Approved permission binding, source-evidence requirement and manual→automated reconciliation acceptance result |
| PPAP-GATE-006 | PPAP-only workflow schema selection for new records; typed descendant guard in shared handlers; duplicate inherited/direct Id binding | Intelex technical lead | Retaining the concrete object/base requires verified platform binding without affecting historical/APQP instances | Tenant proof of new/old/APQP routing, identity and handler scope; regression evidence against preserved APQP behavior |
| PPAP-GATE-007 | Native controlled element reopen, write-once evidence/file protection, native audit reason history, atomic publication/cascade and durable retry facilities | Intelex technical lead | Do not bypass immutable evidence or duplicate workflow/audit state if capability is insufficient | Executed rollback/retry/concurrency/reopen and direct-access tests; approved native implementation mapping |
| PPAP-GATE-008 | MOC PCR Proceed to PPAP token/fields/outcome callback; APQP obligation semantics when several PPAPs link one task | PCR/APQP owners | Launch/outcome interfaces are specified but native action/object bindings are unverified | Exact source IDs, payload/adapter mapping and successful/cancelled/multiple-PPAP acceptance evidence |
| PPAP-GATE-009 | Released inspection-specification version, immutable result/version or artifact export, and new-model pilot launch adapter | Product Management / Inspection owner | Required inspection checkpoints cannot rely on mutable latest records or free text | Native bindings, scope/released validation and linked-result/artifact retention demonstration |
| PPAP-GATE-010 | Record visibility binding, external user→native actor identity, role/file/export permissions and controlled handover | Security / SRM / Intelex owner | No runtime assertion of supplier isolation can be made from views alone | Tested role-stage matrix across forms, direct URLs, APIs/imports, search, relationship navigation, PDF and attachments |
| PPAP-GATE-011 | SIA business timezone; native daily reminder cadence; reporting cutoff/cohort and scorecard KPI source mappings | SIA PPAP / scorecard owners | Workstation timezone must not become business policy; no scorecard weighting/cohort invented | Approved timezone/configuration, boundary examples, native delivery deduplication and scorecard capture contract |
| PPAP-GATE-012 | Final certificate layout/identity fields and authenticated verification route; native PDF/mail-merge capabilities | SIA PPAP owner / Intelex lead | Controlled content is specified but the legacy PSW_Intelex.docx is absent and is not assumed adequate | Approved sample PDF with full included-part scope and actual authority, permission-safe downloads/verification |
| PPAP-GATE-013 | Tenant supported file limits/types, query limits, expected E elements/PPAP and retention/storage factors | Intelex administrator / SIA PPAP owner | Capacity arithmetic is conditional; 1 MB is an average, not an upload limit | Representative 200-active worklist/file tests and storage estimate using reconciled SIA templates/rework/copy factors |
| PPAP-GATE-014 | Central supplier-status impact adapter and annotated restrictive-transition policy discrepancy | SRM status owner | PPAP consumes central capabilities but does not silently enable the deferred/open central transition blocker | Reconciled shared status contract and service-only/inactive/open-work adapter acceptance results |

## 4. Configuration-loading and release conditions

Load the proven shared authorities and approved role/capability bindings first. Then load approved concrete catalogue values and policy bindings, publish reconciled SIA Requirement versions and complete Template versions, bind operational source interfaces, and configure target-only PPAP/element/review workflows and outputs. Catalogues with no source-backed values remain explicitly pending; no fictional “standard” library is seeded to make the design appear complete.

Do not migrate active/historical PPAPs or reuse legacy evidence as an initial approved baseline. Retain source packages and OOTB documentation separately. Keep target reporting populations guarded and do not reinterpret existing APQP/PPAP history.

Before release, execute the [56 acceptance scenarios](ppap-acceptance-scenarios.md), resolve the register entries that affect enabled functionality, verify all file/direct-access permissions, and record actual tenant evidence. Full Mermaid rendering and final document layout review may be performed when publishing a presentation/PDF/Word version; this Markdown delivery claims structural validation only.
