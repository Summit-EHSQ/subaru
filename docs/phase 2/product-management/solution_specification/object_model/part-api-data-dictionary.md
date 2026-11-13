# Product Management API data dictionary

Status: Proposed source mapping  
Date: 2026-11-10  
Application: Product Management / API Data  
Authority: [Technical specification](product-management-api-technical-specification.md)  
Companion: [Object model](part-api-object-model.md)

This dictionary maps the three supplied payloads to the new, isolated Product Management API Data objects. The technical specification owns field types, requiredness, defaults, editability, relationships, and lifecycle rules. No target in this dictionary is an existing application business object.

## 1 Complete payload mappings

Paths use JSONPath notation. `null` means an explicit JSON null. A proposed type must be checked against the producer's contract before it is enforced for future non-null data. Part and standalone Product Family documents are retained in their receiving object's Raw Payload. Each engineering-change row is retained in Engineering Change Scope.Raw Payload; its complete response envelope is retained through native integration evidence.

### 1.1 Part payload

| API path | Observed value or shape | Target | Proposed interpretation |
|---|---|---|---|
| `$.partName` | String `TRIM PNL ASSY SETDR ` | BOMECS Part API Recod.Part Name | Nullable text; preserve trailing space |
| `$.partNumber` | String `94203SL38A` | BOMECS Part API Recod.Part Number | Required text business identifier; preserve leading zeros if present |
| `$.futurePartName` | null | BOMECS Part API Recod.Future Part Name | Nullable text, type unconfirmed |
| `$.lsPartNumber` | null | BOMECS Part API Recod.LS Part Number | Nullable text, abbreviation and type unconfirmed |
| `$.lePartNumber` | null | BOMECS Part API Recod.LE Part Number | Nullable text, abbreviation and type unconfirmed |
| `$.unitCost` | null | BOMECS Part API Recod.Unit Cost | Nullable decimal proposed; currency and cost basis absent |
| `$.drawingNumber` | String `94203SL00A` | BOMECS Part API Recod.Drawing Number | Nullable text; no Drawing record implied |
| `$.id` | String `4398708a-17de-4edf-9645-b4ca0085337d` | BOMECS Part API Recod.External ID | Required opaque source identifier |
| `$.partClassification` | null | Raw Payload at this path | Type and catalogue domain unresolved; no projected classification field |
| `$.program` | null | Raw Payload at this path | Singular property retained separately; no alias or precedence inferred |
| `$.programs` | Array with one `{id,name,status}` object | BOMECS Part API Recod.Programs | M:N to Program Reference |
| `$.status` | Boolean true | BOMECS Part API Recod.Active? | Source activity proposed; not native workflow state |
| `$.name` | String `94203SL38A (TRIM PNL ASSY SETDR )` | BOMECS Part API Recod.Name | Imported display name; not a lookup key |
| `$.Flag` | `{id:"2",name:"[ISOQuest].[PartNumber].Flag.Buy",status:true}` | BOMECS Part API Recod.Flag | Optional M:1 to Part Flag; preserve exact uppercase property name |
| `$.customers` | Empty array | Raw Payload at this path | Customer element shape and identity unresolved |
| `$.suppliers` | Array with one `{id,name,status}` object | Part Supplier Relationship.Supplier | One membership association per source supplier; Role null |
| `$.revLevels` | Array of strings, `P2460-0.0` | Revision corroboration and Raw Payload | Label set for comparison; not a second revision table |
| `$.partNumberRevLevels` | Array with one `{id,name,status}` object | BOMECS Part API Recod.Revisions | Identified, retained part-scoped revision records; latest-list membership is tracked separately |
| `$.tags` | Array of strings, `942C` | BOMECS Part API Recod.Tags | M:N to source-scoped Part Tag values |
| `$.measures` | Empty array | Raw Payload at this path | Element shape, units, and meaning unresolved |
| `$.notes` | null | BOMECS Part API Recod.Notes | Nullable long text proposed; non-null format unconfirmed |
| `$.productFamily` | `{id,name,status}` object | BOMECS Part API Recod.Product Family | Optional M:1; independent of Drawing Number |
| `$.includeAllFacilities` | Boolean false | BOMECS Part API Recod.Include All Facilities? | Preserve source applicability intent; no security effect |
| `$.facilities` | Empty array | Raw Payload at this path | Element shape and facility domain unresolved |

All **24 top-level properties** are mapped once, including both singular `program` and plural `programs`.

Nested object mappings are explicit below. Their populated `id`, `name`, and `status` values are strings, strings, and Booleans respectively; this does not establish the shape of any currently empty collection.

| API path | Target field |
|---|---|
| `$.programs[*].id` | Program Reference.External ID |
| `$.programs[*].name` | Program Reference.Name |
| `$.programs[*].status` | Program Reference.Active? |
| `$.suppliers[*].id` | Supplier Reference.External ID |
| `$.suppliers[*].name` | Supplier Reference.Name |
| `$.suppliers[*].status` | Supplier Reference.Active? |
| `$.partNumberRevLevels[*].id` | Part Revision Reference.External ID |
| `$.partNumberRevLevels[*].name` | Part Revision Reference.Name |
| `$.partNumberRevLevels[*].status` | Part Revision Reference.Active? |
| `$.productFamily.id` | Product Family.External ID |
| `$.productFamily.name` | Product Family.Name |
| `$.productFamily.status` | Product Family.Active? |
| `$.Flag.id` | Part Flag.Code |
| `$.Flag.name` | Part Flag.Name |
| `$.Flag.status` | Part Flag.Active? |
| `$.tags[*]` | Part Tag.Value |

### 1.2 Standalone Product Family payload

The [family example](product-family-api-payload.example.json) has three top-level properties. It is a separate request body, not an extension of the nested `{id,name,status}` descriptor in the Part payload.

| API path | Observed value or shape | Target | Proposed interpretation |
|---|---|---|---|
| `$.name` | String `85132SL550` | Product Family.Name | Required text on create; family label, not an assumed unique key |
| `$.notes` | null | Product Family.Notes | Nullable long text proposed; explicit null clears |
| `$.selectedPartNumbersIds` | Empty array | Product Family.Part Numbers through BOMECS Part API Recod.Product Family | Incoming membership replacement; same-source Part External ID strings provisionally assumed for populated arrays |

No separate Selected Part Numbers IDs field is stored. The original array remains in Product Family.Raw Payload, and normalized membership uses the one stored Part.Product Family relationship. An update target or create idempotency key must come from verified request context because this body supplies no family ID. A nested family descriptor must not clear Notes, replace Part Numbers, or overwrite the standalone Raw Payload by omitting those properties.

### 1.3 Engineering Change Numbers response

The [engineering-change example](engineering-change-numbers-api-payload.example.json) has three envelope properties and eight properties per data row. Response metadata is processed by the connector and retained in native integration evidence; it is not stored as change-number fields.

| API path | Observed value or shape | Target | Proposed interpretation |
|---|---|---|---|
| `$.data` | Array with one context row | Per-row Engineering Change Number and Engineering Change Scope processing | Required array; do not create a response business object |
| `$.recordsTotal` | Integer 1 | Native integration response metadata | Required nonnegative 32-bit integer proposed; source query count, not assumed unique change count |
| `$.totalPages` | Integer 1 | Native integration response metadata | Required nonnegative 32-bit integer proposed; page request parameters not supplied |
| `$.data[*].engineeringChangeNumber` | `{id,name,status}` object | Engineering Change Scope.Engineering Change Number | Required M:1 to a source-identified Engineering Change Number |
| `$.data[*].supplier` | `{id,name,status}` object | Engineering Change Scope.Supplier | Optional M:1 to Supplier Reference; no manufacturing role inferred |
| `$.data[*].partNumber` | null | Engineering Change Scope.Part | Optional reference; non-null wire shape and key unconfirmed |
| `$.data[*].partNumberRevLevel` | null | Engineering Change Scope.Revision | Optional part-scoped reference; non-null wire shape and key unconfirmed |
| `$.data[*].productFamily` | `{id,name,status}` object | Engineering Change Scope.Product Family | Optional M:1 to Product Family; does not modify part memberships |
| `$.data[*].description` | String describing the harness wire-size change | Engineering Change Scope.Description | Nullable long text; retain exact source wording and punctuation |
| `$.data[*].comment` | null | Engineering Change Scope.Comment | Nullable long text proposed; non-null format unconfirmed |
| `$.data[*].program` | `{Id,Name,Status}` object | Engineering Change Scope.Program | Optional M:1 to Program Reference; preserve exact capitalized keys |

| API path | Target field |
|---|---|
| `$.data[*].engineeringChangeNumber.id` | Engineering Change Number.External ID |
| `$.data[*].engineeringChangeNumber.name` | Engineering Change Number.Name |
| `$.data[*].engineeringChangeNumber.status` | Engineering Change Number.Active? |
| `$.data[*].supplier.id` | Supplier Reference.External ID |
| `$.data[*].supplier.name` | Supplier Reference.Name |
| `$.data[*].supplier.status` | Supplier Reference.Active? |
| `$.data[*].productFamily.id` | Product Family.External ID |
| `$.data[*].productFamily.name` | Product Family.Name |
| `$.data[*].productFamily.status` | Product Family.Active? |
| `$.data[*].program.Id` | Program Reference.External ID |
| `$.data[*].program.Name` | Program Reference.Name |
| `$.data[*].program.Status` | Program Reference.Active? |

The nested engineering-change `program` shape does not resolve the null-only singular `program` property in the separate Part payload. Map each endpoint's schema explicitly rather than assuming its DTOs are identical.

## 2 Field contract index

The complete field implementation tables now reside in the technical specification. Each directly declared field and designed inverse grid has one canonical row there; this dictionary retains external property mappings without duplicating the configuration authority.

| Object | Canonical field contract | Field / grid rows |
|---|---|---:|
| BOMECS Part API Recod | [Section 5.1](product-management-api-technical-specification.md#51-bomecs-part-api-recod) | 20 |
| Program Reference | [Section 5.2](product-management-api-technical-specification.md#52-program-reference) | 4 |
| Supplier Reference | [Section 5.3](product-management-api-technical-specification.md#53-supplier-reference) | 4 |
| Part Revision Reference | [Section 5.4](product-management-api-technical-specification.md#54-part-revision-reference) | 5 |
| Product Family | [Section 5.5](product-management-api-technical-specification.md#55-product-family) | 7 |
| Part Flag | [Section 5.6](product-management-api-technical-specification.md#56-part-flag) | 5 |
| Part Tag | [Section 5.7](product-management-api-technical-specification.md#57-part-tag) | 2 |
| Part Supplier Relationship | [Section 5.8](product-management-api-technical-specification.md#58-part-supplier-relationship) | 3 |
| Supplier Relationship Role | [Section 5.9](product-management-api-technical-specification.md#59-supplier-relationship-role) | 4 |
| Engineering Change Number | [Section 5.10](product-management-api-technical-specification.md#510-engineering-change-number) | 5 |
| Engineering Change Scope | [Section 5.11](product-management-api-technical-specification.md#511-engineering-change-scope) | 9 |

Included in Latest Part Feed? is derived from membership in a present `partNumberRevLevels` array, rather than an additional source property. Listed IDs become TRUE; omitted retained IDs become FALSE; array omission preserves current flags. Source Active? remains independent, and Engineering Change Scope.Revision references stay valid.

## 3 Validation and receive behavior

[Technical specification section 6](product-management-api-technical-specification.md#6-receive-operations-and-synchronization) defines merge behavior, exact descriptor casing, source keys, family command identity, null handling, reference resolution, current revision membership, ECN scope keys, pagination, and retry/concurrency behavior. [Section 9](product-management-api-technical-specification.md#9-requirements-traceability-and-acceptance) contains the acceptance scenarios.

The mapping accounts for all 24 Part properties, all 3 standalone Product Family properties, all 3 ECN envelope properties, all 8 data-row properties, and all populated descriptor fields. Source examples remain unchanged. Part null-only/empty types, family member ID namespace, ECN row identity/text ownership, and non-null change Part/Revision wire shapes retain the explicit assumptions in [section 10](product-management-api-technical-specification.md#10-validation-findings-and-remaining-configuration-decisions).
