# Independent PPAP baseline schema review

Reviewed the five JSON packages in the supplied bundle. This review reconstructs the logical Intelex model and does not apply the target PPAP ADRs.

## Findings

1. The bundle contains **92 unique object or lookup metadata identifiers**, including dependency-only stubs, and **508 unique field identifiers**. Of the fields, **403 have a resolved owner and type**. The other 105 declarations are detached external dependency metadata with no owner/type graph edges; their ownership must remain unresolved.
2. All package-local JSON references resolve. `$id` values are local to each package and cannot be used to merge packages; use stable metadata `RecordId` values.
3. The main APQP and PPAP package contains 64 object metadata declarations and 370 fields. Checklist Framework contributes 142 field declarations, four of which overlap the main package, yielding 508 unique fields.
4. Main Data contains 27 object dependency declarations and no field declarations. Data records, ACLs, views, and dependencies must not be treated as new object or field definitions.
5. Most Checklist Framework objects use `BusinessObjectPackageItemData` with `ObjectName=MetObjectEntity`, rather than `MetObjectPackageItemData`. A parser restricted to the latter misses the checklist schema.
6. `RelationData` and other metadata can be represented as `$ref` objects. Dereference before classifying relationships or comparing overlays.
7. `APQP_PPAPAbstractObject` is captioned **PPAP** and has `IsAbstract=false`. The internal name does not make it abstract. Its 48 directly declared fields are separate from the 27 declarations on its inheritance parent, Project Abstract.
8. PPAP and APQP are sibling concrete descendants of Project Abstract. PPAP's engineering product context is inherited `Product`, an optional M:1 relationship to Item Revision. The identified PPAP schema does not establish the target drawing-and-included-part-table architecture.
9. PPAP supplier context is inherited `Supplier`, an optional M:1 relationship to Supplier Management Public Profile. Do not substitute Supplier Abstract as the field target because the display name is Supplier.
10. Project Template and Project Task Definition are connected through a real `Project/Task` object carrying template, definition, phase, order, and generation helpers. It is not a native M:N map with no business attributes.
11. Project/Role/Team Member is a genuine association record with required Project and Project Role relationships and an optional single Employee member. Project Task.Person Responsible targets this association, separately from inherited action-plan Person Responsible targeting Employee.
12. Two concrete project types declare no new fields: Project Checklist Type inherits CLF Checklist Type, and Checklist Record inherits CLF Checklist Answer. Each still needs its own object subsection.
13. Main PPAP metadata explicitly has workflow, attachments, and mail merge enabled, with the object audit flag false. A workflow history is distinct from object audit. Preserve these extracted flags without adopting target rules to enable or disable them.
14. The main package overlays four shared checklist/action-plan fields. Main Due Date supplies presentation/timezone values absent from Checklist; Location changes reporting availability from false to true; Completed By and Is Completed set protected=false where Checklist exports null. The source package order makes the main package later than Checklist, but the original variants should remain traceable.
15. Three Views-only dependency stubs have no `SuperType` property and no inheritance edge: `DocDocumentEntity`, `ProgramFmk_ReqAbsObject`, and `RiskFmk_HazardsObject`. Their inheritance must be **Unresolved**, rather than None. Calendar Day explicitly exports `SuperType=null`.

## Core object map

All source pointers below are in `APQP & PPAP Manager(v1.0.0.0).ipack`.

| Object | Internal name | Direct fields | Inheritance parent | Source |
|---|---|---:|---|---|
| Project Abstract | ProjectFwk_ProjectAbstractObject | 27 | None, exported SuperType null | /GraphData/Items/6 |
| PPAP | APQP_PPAPAbstractObject | 48 | Project Abstract | /GraphData/Items/45 |
| APQP | APQP_APQPObject | 20 | Project Abstract | /GraphData/Items/9 |
| Project Task Definition | ProjectFwk_ProjectTaskDefObject | 9 | None, exported SuperType null | /GraphData/Items/2 |
| Task Definition | ProjectFwk_TaskDefObject | 3 | Project Task Definition | /GraphData/Items/397 |
| Checklist Definition | ProjectFwk_ChecklistDefObject | 2 | Project Task Definition | /GraphData/Items/198 |
| Project Template | ProjectFwk_PFWKTemplateObject | 6 | None, exported SuperType null | /GraphData/Items/32 |
| Project/Task | ProjectFwk_PFWKProjectTaskObject | 10 | None, exported SuperType null | /GraphData/Items/146 |
| Project Task | ProjectFwk_ProjectTaskObject | 14 | Action Plan Abstract | /GraphData/Items/54 |
| Task | ProjectFwk_AdHocTaskObject | 1 | Project Task | /GraphData/Items/73 |
| Integrated Task | ProjectFwk_TaskObject | 9 | Project Task | /GraphData/Items/236 |
| Checklist | ProjectFwk_ChecklistObject | 5 | Project Task | /GraphData/Items/119 |
| Project/Role/Team Member | ProjectFwk_ProjRoleTeMemObject | 6 | None, exported SuperType null | /GraphData/Items/91 |
| Checklist Type | ProjectFwk_ChecklistTypeObject | 0 | CLF Checklist Type | /GraphData/Items/129 |
| Checklist Record | ProjectFwk_ChecklistRecordObject | 0 | CLF Checklist Answer | /GraphData/Items/404 |

## Relationship orientation checks

| Declaring field | Target | Cardinality | Inverse | Stable field ID |
|---|---|---|---|---|
| Project Abstract.Product | Item Revision | M:1, optional | Not exported | 90c44904-6bd4-4670-bff6-e220d61d8f4a |
| Project Abstract.Supplier | Public Profile | M:1, optional | Not exported | 146f9fc3-c225-482f-9671-6d12ccb8eefb |
| Project Task.Project | Project Abstract | M:1, optional | ProjectTasks | de032907-db30-43af-8d21-6243fc2c9be2 |
| PPAP.Task | Integrated Task | M:1, optional | PPAPs | e34df78d-5613-42e8-88e9-e32f3dd12f0b |
| APQP.PPAPAbstract | PPAP | M:1, optional | APQPAbstract | dfb50215-0b52-4c99-8278-6dde82e68c9f |
| PPAP.ResultsFor | The results for lookup | M:N | ResultsFors | e551909e-a79b-47fb-8ab5-8fd1bf6b5c3a |
| Project Abstract.CARs | CAR Abstract | M:N | ProjecAbstracts | a52d21da-99ae-49b0-af7d-2854002f28e1 |
| Project/Task.ProjTaskDefObj | Project Task Definition | M:1, required | ProjectTask | 50a40716-6b0f-440d-ba9a-f029a8ba09ef |
| Project/Task.ProjectTemplate | Project Template | M:1, optional | ProjectTasks | 599ba86a-a049-4e33-8c44-f39798983d33 |
| Project/Role/Team Member.Project | Project Abstract | M:1, required | ProjRoleTeamMem | f171fbe0-26e9-4ae6-a3fe-2dc2bd933aba |
| Project/Role/Team Member.ProjectRole | Project Role | M:1, required | Not exported | ef33446f-a6c6-433f-b5e4-9971ceee1be9 |
| Project/Role/Team Member.Member | Employee | M:1, optional | Not exported | 4ed9437a-433d-46fc-b3a5-1113d9b91471 |

M:1 and 1:M interpretation is inferred from foreign-key relation type, declaring start/end, and inverse metadata; requiredness is extracted. M:N is explicitly supported by type 3 and the package map names.

## Independent reconciliation

Compared the independently indexed object/field identifiers, owners, types, and relationship orientations with the root extractor's merged `baseline-model.json`.

- 92 object identifiers match.
- 508 field identifiers match.
- All 403 resolved field owners and types match.
- All directly resolvable relationship orientations match.
- No unowned `APQP_` or `ProjectFwk_` core field was found.
- No ownership, type, or cardinality comparison mismatch was found.

Machine result: `independent-validation.json`.
