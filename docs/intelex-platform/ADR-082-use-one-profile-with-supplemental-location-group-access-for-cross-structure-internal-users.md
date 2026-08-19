---
status: proposed
date: '2026-08-18'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
consulted: []
informed:
- Emma Lister
- Jillian
- Rick Redmond
primary-application: Intelex Platform
secondary-applications:
- Supplier Relationship Management
- Document Control
- Audit Management
---

# ADR-082: Use One Profile with Supplemental Location-Group Access for Cross-Structure Internal Users

## Context and Problem Statement

Some internal users work primarily with supplier data but occasionally need access to records on the internal side of the location structure, including documents, policies, procedures, or audits. Assigning those users at the top enterprise location may expose more data than required. Maintaining separate profiles for each side of the structure would duplicate identity, authentication, and administration.

## Decision Drivers

- Maintain one internal identity and profile per person.
- Align the primary location with the user's normal work.
- Grant supplemental access without enterprise-wide placement.
- Reuse the platform location selector for context changes.
- Avoid duplicate profiles and credentials.

## Considered Options

### Place cross-structure users at the top enterprise location

Provides broad visibility but may create unintended access and reporting consequences.

### Create separate profiles for supplier-side and internal work

Separates contexts but duplicates identity and becomes difficult to maintain.

### Use one primary profile with supplemental location-group access

Preserves one identity while extending only the additional location scope required.

## Decision Outcome

Assign each cross-structure internal user one primary profile and location based on the person's day-to-day role. Grant access to the other side of the location hierarchy through a supplemental location group. The user will switch the active context through the Intelex location selector when moving between supplier and internal records.

Do not solve this requirement by creating duplicate profiles. Do not place the user at the top enterprise location unless that broad access is independently justified by the role.

## Consequences

### Positive

- Maintains one identity and authentication lifecycle per internal user.
- Limits supplemental access more precisely than enterprise-level placement.
- Supports access to multiple applications without duplicating profiles.

### Negative

- Users must understand and operate the location selector.
- Location-group rules may interact differently with documents, audits, and supplier data.
- Misconfiguration could either overexpose internal records or hide needed information.

### Follow-up and Constraints

- Define the supplemental location group and its membership owner.
- Test effective access across Supplier Relationship Management, Document Control, and Audit Management.
- Confirm reporting behavior when users switch location context.
- Replace interim regular-site test assignments during Phase 2 configuration.

## More Information

- Latest supplier-management design transcript: approximately 0:01:27–0:04:29.
- The approach was selected directionally for Phase 2 but still requires effective-permission testing; therefore this ADR remains proposed.
