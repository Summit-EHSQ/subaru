PRODUCT INTEGRATION POSTMAN COLLECTIONS

11 collections, one per business object. Each collection has exactly two requests: POST and PATCH.
Verified target: https://preprod-na.intelex.com/Login3/SIA-SummitDEV
Object and field identifiers are from the read-only tenant audit on 19 November 2026.

IMPORT AND CONFIGURE
1. Extract this ZIP.
2. Import the environment JSON and all 11 JSON files in collections/ into Postman.
3. Select SIA-SummitDEV - Product Integration as the active environment.
4. Set apiKey locally to your current Intelex API key. The exported value is blank.
5. Set sourceSystem to the verified connector source namespace. No namespace was assumed.
6. Review examplePrefix and partTagValue. Use new source identities for new sample records; POST does not perform a source-key upsert.

CREATE ORDER AND NATIVE RECORD IDS
1. Supplier Relationship Role: POST saves supplierRelationshipRoleId.
2. Part Flag: POST saves partFlagId.
3. Part Tag: POST saves partTagId.
4. Program Reference: POST saves programReferenceId.
5. Supplier Reference: POST saves supplierReferenceId.
6. Product Family: POST saves productFamilyId.
7. BOMECS API Record: POST saves bomecsPartId.
8. Part Revision Reference: POST saves partRevisionReferenceId.
9. Part Supplier Relationship: POST saves partSupplierRelationshipId.
10. Engineering Change Number: POST saves engineeringChangeNumberId.
11. Engineering Change Scope: POST saves engineeringChangeScopeId.

This order creates reference data before records that bind to it. Run POST requests in this order when using the related illustrative records. PATCH requests may be run after each successful POST, or separately against existing records.
The shared environment carries native IDs across collections. A pre-request check skips requests with missing variables, invalid native GUIDs, an invalid API root, or invalid substituted JSON. It does not make HTTP calls.
To patch an existing record without creating one, enter its native Id in the indicated variable and send only the PATCH request. Source ExternalID values and metadata object/field IDs are not native business record IDs.
A POST clears its previous saved target Id before sending. It saves a new Id only after a valid HTTP 201 creation response. If POST fails, resolve the failure before attempting PATCH.

EXAMPLE BODIES AND SPECIFICATION NOTES
These are native object CRUD examples with system-name JSON keys and OData relationship bindings. They do not call or implement the separate specification receive-service operations, source-key upserts, membership reconciliation, or atomic multi-object processing.
RawPayload is a JSON string containing an illustrative complete source document/row. Writing it does not populate other fields or create related records automatically.
SourceSystem, ExternalID, Code and immutable membership references are omitted from PATCH. No PATCH changes a scope key. The Part Tag exception below resends the same immutable value.
Part Tag PATCH: both fields are immutable in the spec. Its example resends partTagValue unchanged. When setting partTagId manually, partTagValue must exactly equal that existing record value; this is a no-op example, not a rename operation.
BOMECS: the current field InclAllFamilies means Include All Families? in the audited tenant. The example includes that actual field separately and does not pretend it implements the missing Include All Facilities? field or the source includeAllFacilities property. Reconcile this known audit gap before using the collection as an integration mapping.
Inverse grids Revisions, SuRelationships, PartNumbers and Scopes are omitted from bodies. Declaring Part, ProductFamily and EngChangeNumber references maintain the relevant links.
Engineering Change Scope POST leaves optional Part and Revision unset, with explicit null source context retained in RawPayload. The request description explains optional native bindings without inventing the unconfirmed non-null producer wire shape.
Programs and Tags use arrays of full native-record URLs on POST. PATCH does not modify those collections; replacement and empty-array clear semantics were not established by the audit or public examples.
Unit Cost PATCH includes the illustrative number 12.345678. The proposed precision 19 / scale 6 and long-text or payload limits have not been verified in the tenant.
No POST or PATCH has been executed against the tenant during collection creation. Object settings, permissions, immutable rules, storage capacity, and integration behavior still govern actual execution.

REFERENCE DOCUMENTATION
Intelex Object Data API, authentication, create and update examples: https://developers.intelex.com/
Postman Collection 2.1 schema: https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json
Postman execution / skipRequest: https://learning.postman.com/docs/tests-and-scripts/write-scripts/postman-sandbox-reference/pm-execution/
Postman environment variables: https://learning.postman.com/docs/use/send-requests/variables/environment-variables
