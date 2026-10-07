# Supplier Relationship Management target solution specifications

These documents describe proposed configuration layered over the separately preserved OOTB SRM baseline. They are logical designs and do not assert that the configuration has been implemented.

## Supplier status updates

- [Supplier Status Updates solution specification and logical model](object_model/supplier-status-updates-logical-model.md) — controlled manual transitions, replacement status catalogue, application capability matrix, parent/facility restrictions, field definitions, relationships, migration, and acceptance scenarios. This is the governing target for lifecycle editing. Returns to Active use the standard transition; dedicated reactivation automation is outside scope.

## User access request design

- [User Access Request logical object model](object_model/user-access-request-logical-model.md) — inheritance, field properties, Location Bound behavior, hidden user fields, License Type configuration, Supplier Contact ownership, settings, relationships, change traceability, and validation findings for the four concrete request types and their two abstract ancestors.
- [Supplier Contact Request workflow](workflow_diagram/supplier-contact-request-workflow.md) — settings-driven optional approval, correction/resubmission decision handling, automated Supplier Contact creation, authoritative 1:M ownership, derived OOTB M:N synchronization, permissions, notifications, and Draft-based error recovery.

API initiation, payload, provisioning, retry, and account-result behavior are deliberately outside the current revision.

## Supplier management role design

- [Supplier Management Role logical object model](object_model/supplier-management-role-logical-model.md) — governed role-classification catalogue, Group-derived role library and supplier-specific operational groups, hidden library membership, structured standard naming, supplier-created standalone roles, direct completeness, exact company/facility scope, member eligibility, workflow resolution, migration, traceability, and platform validation requirements.
- [Supplier Profile Template logical object model](object_model/supplier-profile-template-logical-model.md) — optional creation-time template selection, role-assignment children, exact-supplier standard-role generation, copied mandatory status and origin, direct completeness, standalone-role exclusion, replacement Supplier Status configuration, and administrator-triggered template-matched synchronization.

## Supplier Surveys design

- [Supplier Surveys technical specification](supplier-surveys-technical-specification.md) — reusable campaigns and questionnaire versions, recurring runs and audience snapshots, supplier requests and typed responses, profile confirmation and governed corrections, field and relationship definitions, workflow, permissions, notifications, traceability, and implementation acceptance criteria.
