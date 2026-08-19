---
status: accepted
date: '2026-08-18'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
consulted:
- Keith Freeman
informed:
- Roy Lowery
- Emma Lister
- Jillian
- Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
- Supplier Portal
- Intelex Platform
---

# ADR-078: Scope Supplier Portal Access Through Supplier-Entity Relationships

## Context and Problem Statement

External contacts may be responsible for one facility, several facilities, or an entire supplier company. Supplier Portal access must expose the records needed for those responsibilities without granting all users visibility across every facility or creating separate accounts for each depot.

## Decision Drivers

- Apply least-privilege access to supplier information.
- Support both facility-specific and corporate supplier roles.
- Reuse the parent-company and child-facility model from ADR-076.
- Maintain one external account per person.
- Make access scope understandable from maintained supplier relationships.

## Considered Options

### Give every supplier user access to every facility under the parent

Simplifies configuration but overexposes data for facility-specific users.

### Create a separate user profile for every facility assignment

Scopes access but duplicates identities, credentials, and account maintenance.

### Derive access from explicit supplier-entity relationships with parent inheritance

Uses one identity while supporting facility and corporate responsibility boundaries.

## Decision Outcome

Derive an external portal user's supplier-data scope from the supplier entities related to that user's contact record:

- a relationship to one child facility grants access to that facility;
- relationships to multiple child facilities grant access to those facilities; and
- a relationship to the parent supplier company grants access to all child facilities under that parent.

Portal roles and application permissions may further restrict what the user can do, but they must not expand visibility beyond the related supplier-company and facility scope. Relationship changes therefore become security-relevant changes and must be tested and auditable.

## Consequences

### Positive

- Supports least-privilege facility access and legitimate corporate oversight.
- Avoids duplicate accounts for multi-facility users.
- Makes access scope consistent with the supplier object model.

### Negative

- Incorrect relationships can expose excess data or hide required records.
- Parent-company assignments provide broad access and require deliberate governance.
- Relationship changes may affect several downstream applications immediately.

### Follow-up and Constraints

- Define who may assign parent-company access.
- Confirm how relationship changes affect open workflow access.
- Test permissions across Supplier Portal applications and reporting.
- Define security-review and audit reporting for broad parent access.

## More Information

- Latest supplier-management design transcript: approximately 0:28:46–0:33:45.
- ADR-003 separates contact identity from portal-user provisioning; this ADR governs the resulting data scope.

