# SIA OOTB SRM baseline logical object model

## Findings

The export resolves to **49 record objects**, **5 controlled-lookup objects**, **325 directly exported fields**, **109 canonical logical relationships**, **10 explicit many-to-many junction objects**, and **11 direct inheritance edges**. This is a logical Intelex model; table names are retained in the inventory as supporting metadata, but the package does not establish a complete physical database model.

The most important architectural consequences are:

- `SupplierMgmt_SupAbstractObject` is the supplier base. Both Supplier Facility and Supplier Parent Company inherit from it. Parent Company and Facility are also connected by a separate record relationship, so that association must not be confused with inheritance.
- `FragApplication_ProductObject` is the product base. Item and Provisioned Good/Service inherit from it; Supplier Item Level N then inherits from Provisioned Good/Service.
- `ComplyFramework_CARAbstractObject` is the corrective-action base and SCAR is a direct subtype. Supplier-to-SCAR linkage is a record relationship, not inheritance.
- Public Profile is a major integration hub across suppliers, provisioned goods/services, product supplier items, supplier-item revisions, components, and supplier relationships.
- Certification Requirement and Documentation Requirement are operational child records that connect supplier, location, responsibility/contact, approver, and workflow context.
- Ten many-to-many relationships explicitly name map objects in `RelationData.Name`; those junctions are preserved in the complete diagram and junction register.

All statements above are **Extracted** except multiplicity interpretation for Type-2 relations, which is **Inferred** from `RelationData.Type`, `IsStartOfRelation`, requiredness, reverse fields, and the exported foreign-key relation names.

## Package inspection

| Property | Result |
|---|---|
| Source | `ootb_config_packages/SIA - OOTB SRM Export(v1.0.0.0).ipack` |
| Actual format | UTF-8 JSON with BOM; not an archive |
| Size | 3,085,830 bytes |
| Package | SIA - OOTB SRM Export, version 1.0.0.0 |
| Package ID | `3325fc66-fd29-47a8-9d93-70a10035aba2` |
| Version ID | `9d7880d0-54fd-4245-bce4-2f200a698f20` |
| Target platform | 6.6.25.1 |
| Declared application requirements | Setup 1.0.0; FragApplication 1.0.2; ProductMgmt 1.0.0; ComplyFramework 1.0.0; SupplierMgmt 1.0.0; CAR 1.0.0; MyTasksSummary 1.0.0 |
| Graph scope | 25 root items, 529 included items, 161 dependencies, 0 excluded items |
| Additional configuration | 6 workflows and 85 configurable-view representations across the full nested graph |

The parser walked the complete nested graph, indexed nodes by graph reference, then registered objects and fields by their stable metadata IDs. Objects embedded only in workflow or subgraph dependencies are therefore included rather than being lost by inspecting only the top-level `Items` array.

## Object inventory

| Domain/family | Record objects | Notes |
|---|---:|---|
| Supplier Management | 22 | Supplier structure, contacts, profiles, requirements, evaluations, documents, certifications, components |
| Product Management | 11 | Items, revisions, supplier items, attributes, approval comments, statuses |
| Fragment Application | 7 | Shared product, geography, directory, currency, color, and abstract lookup bases |
| System | 5 | Subject, Employee, Location, Workflow Instance, Workflow Stage |
| CAR | 2 | SCAR and Effectiveness Review Log |
| Comply Framework | 2 | CAR Abstract and Cost of Quality |
| Controlled lookups | 5 | Facility Type, Evaluation Rating, Audit Result, Supplier Status, Supplier Type |

The complete inventory, including internal/display names, stable IDs, package IDs, source JSON pointers, tables, parent objects, declared-field counts, identities, and incoming/outgoing references, is in [`object-inventory.csv`](object-inventory.csv). The five controlled lookup types are in [`controlled-lookup-inventory.csv`](controlled-lookup-inventory.csv). Eight exported `Id` fields are explicitly marked primary keys; no key is asserted for objects whose identity field is inherited or absent from the export.

## Baseline Mermaid overview

This view emphasizes the backbone. The complete 54-type/10-junction and 109-relationship source is in [`baseline-logical-model.mmd`](baseline-logical-model.mmd).

```mermaid
classDiagram
direction LR
class Supplier_Abstract
class Supplier_Facility
class Supplier_Parent_Company
class Supplier_Category
class Supplier_Contact
class Supplier_Contact_Map
class Public_Profile
class Product_Abstract
class Item
class Provisioned_Good_Service
class Supplier_Item_Level_N
class Product_Supplier_Item
class Supplier_Item_Revision
class CAR_Abstract
class SCAR
class Subject
class Employee
class Abstract_Lookup_Value
class Product_Status
class Revision_Type
class Supplier_Item_Status
class Cost_of_Quality

Supplier_Abstract <|-- Supplier_Facility : inherits
Supplier_Abstract <|-- Supplier_Parent_Company : inherits
Product_Abstract <|-- Item : inherits
Product_Abstract <|-- Provisioned_Good_Service : inherits
Provisioned_Good_Service <|-- Supplier_Item_Level_N : inherits
CAR_Abstract <|-- SCAR : inherits
Subject <|-- Employee : inherits
Abstract_Lookup_Value <|-- Product_Status : inherits
Abstract_Lookup_Value <|-- Revision_Type : inherits
Abstract_Lookup_Value <|-- Supplier_Item_Status : inherits
Abstract_Lookup_Value <|-- Cost_of_Quality : inherits

Supplier_Parent_Company "1" --> "0..*" Supplier_Facility : Facilities
Supplier_Abstract "0..*" --> "1" Supplier_Category : SupCategory
Supplier_Abstract --> Supplier_Contact_Map : SupContacts [m:n]
Supplier_Contact_Map --> Supplier_Contact : target [m:n]
Public_Profile "0..*" --> "0..1" Supplier_Abstract : SupplierAbs
Provisioned_Good_Service "0..*" --> "1" Public_Profile : PublicProfile
Product_Supplier_Item "0..*" --> "1" Public_Profile : CompPP
Supplier_Item_Revision "0..*" --> "0..1" Product_Supplier_Item : SupplierItem
Supplier_Abstract "1" --> "0..*" SCAR : SCARs
```

Overview aliases are presentation-only. Stable Mermaid identifiers in the complete diagram use the exported internal object names; their display-name mapping is in the object inventory.

## Detailed relationship views

Record-object identifiers below are the exported internal names. Long junction names are shortened only for readability; [`junction-object-register.csv`](junction-object-register.csv) maps each relationship to its exact exported map-object name.

### Supplier structure, contacts, and profiles

```mermaid
classDiagram
direction LR
class SupplierMgmt_SupAbstractObject
class SupplierMgmt_FacilityObject
class SupplierMgmt_ParentCompnyObject
class SupplierMgmt_SupCategoryObject
class FragApplication_GeographyObject
class SysLocationEntity
class SysEmployeeEntity
class SupplierMgmt_SupplierContactObject
class SupplierMgmt_SupConResponsibObject
class SupplierMgmt_PublicProfileObject
class SupplierMgmt_SupEvaluationObject
class SupplierMgmt_SupRelationshipObject
class SupplierContactSuppliersMap
class SupplierContactResponsibilitiesMap

SupplierMgmt_SupAbstractObject <|-- SupplierMgmt_FacilityObject : inherits
SupplierMgmt_SupAbstractObject <|-- SupplierMgmt_ParentCompnyObject : inherits
SupplierMgmt_ParentCompnyObject "1" --> "0..*" SupplierMgmt_FacilityObject : Facilities
SupplierMgmt_SupAbstractObject "0..*" --> "1" SupplierMgmt_SupCategoryObject : SupCategory
SupplierMgmt_SupAbstractObject "0..*" --> "1" FragApplication_GeographyObject : Geography
SupplierMgmt_SupAbstractObject "0..*" --> "1" SysLocationEntity : Location
SupplierMgmt_SupAbstractObject "0..*" --> "0..1" SysEmployeeEntity : PersResponsible
SupplierMgmt_SupAbstractObject --> SupplierContactSuppliersMap : SupContacts [m:n]
SupplierContactSuppliersMap --> SupplierMgmt_SupplierContactObject : target [m:n]
SupplierMgmt_SupConResponsibObject --> SupplierContactResponsibilitiesMap : SupContacts [m:n]
SupplierContactResponsibilitiesMap --> SupplierMgmt_SupplierContactObject : target [m:n]
SupplierMgmt_PublicProfileObject "0..*" --> "0..1" SupplierMgmt_SupAbstractObject : SupplierAbs
SupplierMgmt_SupEvaluationObject "0..*" --> "0..1" SupplierMgmt_SupAbstractObject : SupplierAbs
SupplierMgmt_PublicProfileObject --> SupplierMgmt_SupRelationshipObject : Customers / Suppliers
```

The two Public Profile-to-Supplier Relationship cardinalities are unresolved because their inverse `Supplier` and `Customer` fields are not exported.

### Certification and documentation obligations

```mermaid
classDiagram
direction LR
class SupplierMgmt_SupAbstractObject
class SupplierMgmt_CertRequirementObject
class SupplierMgmt_CertLibraryObject
class SupplierMgmt_CertCategoryObject
class SupplierMgmt_DocRequirementObject
class SupplierMgmt_DocLibraryObject
class SupplierMgmt_DocCategoryObject
class SupplierMgmt_AuditHistoryObject
class SupplierMgmt_FacProfileObject
class SupplierMgmt_ItemCategoryObject
class SupplierMgmt_SupplierContactObject
class SupplierMgmt_SupConResponsibObject
class SysEmployeeEntity
class SysLocationEntity
class SysWorkflowInstanceEntity
class CertificationFacilityProfileMap
class CertificationItemCategoryMap
class DocumentationItemCategoryMap

SupplierMgmt_CertRequirementObject "0..*" --> "1" SupplierMgmt_SupAbstractObject : SupplierAbs
SupplierMgmt_CertRequirementObject "0..*" --> "1" SupplierMgmt_CertLibraryObject : Certificate
SupplierMgmt_CertRequirementObject "0..*" --> "1" SysLocationEntity : Location
SupplierMgmt_CertRequirementObject "0..*" --> "0..1" SupplierMgmt_SupplierContactObject : AssignedTo
SupplierMgmt_CertRequirementObject "0..*" --> "0..1" SysEmployeeEntity : Approver
SupplierMgmt_CertRequirementObject "0..*" --> "0..1" SysWorkflowInstanceEntity : Workflow
SupplierMgmt_CertRequirementObject "0..1" --> "0..*" SupplierMgmt_AuditHistoryObject : AuditHistories
SupplierMgmt_CertLibraryObject "0..*" --> "0..1" SupplierMgmt_CertCategoryObject : CertCategory
SupplierMgmt_CertLibraryObject --> CertificationFacilityProfileMap : FacProfiles [m:n]
CertificationFacilityProfileMap --> SupplierMgmt_FacProfileObject : target [m:n]
SupplierMgmt_CertLibraryObject --> CertificationItemCategoryMap : ItemCategories [m:n]
CertificationItemCategoryMap --> SupplierMgmt_ItemCategoryObject : target [m:n]

SupplierMgmt_DocRequirementObject "0..*" --> "1" SupplierMgmt_SupAbstractObject : SupplierAbs
SupplierMgmt_DocRequirementObject "0..*" --> "1" SupplierMgmt_DocLibraryObject : Document
SupplierMgmt_DocRequirementObject "0..*" --> "1" SysLocationEntity : Location
SupplierMgmt_DocRequirementObject "0..*" --> "0..1" SupplierMgmt_SupplierContactObject : PersResponsible
SupplierMgmt_DocRequirementObject "0..*" --> "0..1" SysEmployeeEntity : Approver
SupplierMgmt_DocRequirementObject "0..*" --> "0..1" SysWorkflowInstanceEntity : Workflow
SupplierMgmt_DocLibraryObject "0..*" --> "0..1" SupplierMgmt_DocCategoryObject : DocCategory
SupplierMgmt_DocLibraryObject --> DocumentationItemCategoryMap : ItemCategories [m:n]
DocumentationItemCategoryMap --> SupplierMgmt_ItemCategoryObject : target [m:n]
```

### Product and supplier-item structure

```mermaid
classDiagram
direction LR
class FragApplication_ProductObject
class ProductMgmt_ItemObject
class ProductMgmt_ItemRevisionObject
class SupplierMgmt_SupplierItemObject
class SupplierMgmt_SupItemLevelNObject
class SupplierMgmt_ItemObject
class SupplierMgmt_PublicProfileObject
class ProductMgmt_SupplierItemObject
class ProductMgmt_SupItemRevisionObject
class ProductMgmt_AttributeObject
class ProductMgmt_AttributeValueObject
class ProductMgmt_SupItemAttrValObject
class ProductMgmt_RevisionTypeObject
class ProductMgmt_SupplItemStatusObject
class SupplierItemPublicProfileMap
class RevisionPublicProfileMap

FragApplication_ProductObject <|-- ProductMgmt_ItemObject : inherits
FragApplication_ProductObject <|-- SupplierMgmt_SupplierItemObject : inherits
SupplierMgmt_SupplierItemObject <|-- SupplierMgmt_SupItemLevelNObject : inherits
ProductMgmt_ItemObject "0..*" --> "0..1" ProductMgmt_ItemRevisionObject : CurrentRevision
ProductMgmt_ItemRevisionObject "0..*" --> "0..1" ProductMgmt_ItemObject : Item
ProductMgmt_AttributeValueObject "0..*" --> "0..1" ProductMgmt_AttributeObject : Attribute
SupplierMgmt_SupplierItemObject "0..*" --> "1" SupplierMgmt_ItemObject : Item
SupplierMgmt_SupplierItemObject "0..*" --> "1" SupplierMgmt_PublicProfileObject : PublicProfile
ProductMgmt_SupplierItemObject "0..*" --> "0..1" ProductMgmt_ItemObject : Item
ProductMgmt_SupplierItemObject "0..*" --> "1" SupplierMgmt_PublicProfileObject : CompPP
ProductMgmt_SupplierItemObject "0..*" --> "0..1" ProductMgmt_SupItemRevisionObject : SuppCurrentRev
ProductMgmt_SupplierItemObject --> SupplierItemPublicProfileMap : SupplieProfiles [m:n]
SupplierItemPublicProfileMap --> SupplierMgmt_PublicProfileObject : target [m:n]
ProductMgmt_SupItemRevisionObject "0..*" --> "0..1" ProductMgmt_SupplierItemObject : SupplierItem
ProductMgmt_SupItemRevisionObject "0..*" --> "0..1" ProductMgmt_ItemRevisionObject : CurItemRevision
ProductMgmt_SupItemRevisionObject --> RevisionPublicProfileMap : PublicProfiles [m:n]
RevisionPublicProfileMap --> SupplierMgmt_PublicProfileObject : target [m:n]
ProductMgmt_SupItemRevisionObject "0..*" --> "0..1" ProductMgmt_RevisionTypeObject : RevTypeObs / RevTypeReAct / RevTypeReport
ProductMgmt_SupItemRevisionObject "0..*" --> "0..1" ProductMgmt_SupplItemStatusObject : status helper fields
ProductMgmt_SupItemAttrValObject "0..*" --> "0..1" ProductMgmt_AttributeValueObject : ItemAttrVal
```

`SupplierMgmt_SupplierItemObject` is displayed as **Provisioned Good/Service**, while `ProductMgmt_SupplierItemObject` is displayed as **Supplier Item**. They are distinct objects and should not be collapsed based on their similar internal names.

### CAR and workflow integration

```mermaid
classDiagram
direction LR
class ComplyFramework_CARAbstractObject
class CAR_SCARObject
class CAR_EffectReviewLogObject
class SupplierMgmt_SupAbstractObject
class SysSubjectEntity
class SysEmployeeEntity
class SysWorkflowInstanceEntity
class SysWorkflowStageEntity
class CARTeamMembersMap

ComplyFramework_CARAbstractObject <|-- CAR_SCARObject : inherits
SysSubjectEntity <|-- SysEmployeeEntity : inherits
ComplyFramework_CARAbstractObject "0..*" --> "1" SysEmployeeEntity : Assignee
ComplyFramework_CARAbstractObject "0..*" --> "0..1" SysEmployeeEntity : CreateBy
ComplyFramework_CARAbstractObject --> CARTeamMembersMap : TeamMembers [m:n]
CARTeamMembersMap --> SysEmployeeEntity : target [m:n]
ComplyFramework_CARAbstractObject "0..*" --> "0..1" SysWorkflowInstanceEntity : Workflow
ComplyFramework_CARAbstractObject --> CAR_EffectReviewLogObject : EffectReviewLog [cardinality unresolved]
CAR_SCARObject "0..*" --> "1" SysEmployeeEntity : HelperAssignee
SupplierMgmt_SupAbstractObject "1" --> "0..*" CAR_SCARObject : SCARs
SysWorkflowInstanceEntity "0..*" --> "0..1" SysWorkflowStageEntity : CurrentStage
SysWorkflowInstanceEntity "0..*" --> "0..1" SysSubjectEntity : PersonResponsible
```

## Inheritance hierarchy

| Parent | Direct child |
|---|---|
| Abstract Lookup Value | Cost of Quality |
| Abstract Lookup Value | Product Management - Status |
| Abstract Lookup Value | Revision Type |
| Abstract Lookup Value | Supplier Item Status |
| CAR Abstract | SCAR |
| Product Abstract | Item |
| Product Abstract | Provisioned Good/Service |
| Provisioned Good/Service | Supplier Item Level N |
| Subject | Employee |
| Supplier Abstract | Supplier Facility |
| Supplier Abstract | Supplier Parent Company |

These are direct edges only. No missing parents, conflicting declarations, or inheritance cycles were found. Stable IDs and internal names are in [`inheritance-register.csv`](inheritance-register.csv).

## Relationship register and evidence rules

The authoritative field-level register is [`relationship-register.csv`](relationship-register.csv), containing all 133 exported reference/navigation fields. [`canonical-relationship-register.csv`](canonical-relationship-register.csv) removes 24 reverse-field duplicates and retains 109 logical relationships. [`junction-object-register.csv`](junction-object-register.csv) lists the 10 explicitly named m:n map objects.

Cardinality interpretation is deliberately conservative:

- Type 3 plus an `(m:n)` relation name is **Extracted** as many-to-many.
- Type 2 is **Inferred** as a foreign-key relationship. `IsStartOfRelation` selects the single-reference versus reverse-collection orientation; `IsRequired` supplies the lower bound when that field is available.
- Six reverse-collection fields have no exported inverse field, so cardinality remains **Unresolved**: Item Revision–Attribute Values, Supplier Item Revision–Approval Comments, Public Profile–Customers, CAR Abstract–Effectiveness Review Log, Supplier Item Revision–Supplier Item Attribute Values, and Public Profile–Suppliers.
- Twenty-seven canonical reference fields are explicitly required. These can prevent record creation when their targets are unavailable; the complete list is filterable through the `required` column.

## Ambiguities and validation

| Finding | Classification | Result |
|---|---|---|
| Graph references | Extracted | All start/end graph references resolved across the full nested package. |
| Stable identifiers | Extracted | No duplicate record-object or field stable IDs were found. |
| Field ownership and types | Extracted | All 325 fields resolved to an owning record/lookup object and a type. |
| Inheritance | Extracted | 11 direct edges; no missing parents, conflicts, or cycles. |
| Reverse navigation fields | Extracted/Inferred | 24 blank-`RelationData` fields resolved to explicit inverse fields and are excluded from the canonical relationship count. |
| Type-2 upper/lower bounds | Inferred | Based on FK metadata, relation orientation, and requiredness; not claimed as physical constraints. |
| Six relationship cardinalities | Unresolved | Inverse fields were omitted from the export, preventing a safe lower-bound determination. |
| Controlled values | Unresolved | Five lookup object types are exported, but their permissible value records are not present. Conditions mention labels such as Active, InActive, and Fail; those expressions do not establish complete lookup domains. |
| Physical schema | Unresolved | Table names exist, but indexes, constraints, storage details, and a complete physical schema are not supplied. |

## Generated artifacts

- [`baseline-logical-model.mmd`](baseline-logical-model.mmd) — complete Mermaid class diagram source
- [`object-inventory.csv`](object-inventory.csv) — 49 record objects
- [`controlled-lookup-inventory.csv`](controlled-lookup-inventory.csv) — 5 lookup objects
- [`field-inventory.csv`](field-inventory.csv) — 325 fields
- [`canonical-relationship-register.csv`](canonical-relationship-register.csv) — 109 logical relationships
- [`relationship-register.csv`](relationship-register.csv) — all 133 reference/navigation fields, including inverse ends
- [`junction-object-register.csv`](junction-object-register.csv) — 10 explicitly named m:n map objects
- [`inheritance-register.csv`](inheritance-register.csv) — 11 direct inheritance edges
- [`extraction-summary.json`](extraction-summary.json) — counts and validation results
- [`../../../scripts/analyze_intelex_ipack.py`](../../../scripts/analyze_intelex_ipack.py) — repeatable extractor
