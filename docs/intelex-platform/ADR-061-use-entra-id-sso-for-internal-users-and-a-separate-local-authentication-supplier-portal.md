---
status: accepted
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Victor Nemacheck
- Dave McLean
- Joel Frick
consulted:
- Brianne Carroll
- Luke Filippo
- Ethan Lyon
- Isaku Nishiwaki
- Keith Freeman
informed:
- Scott Bailey
- Yolanda Reyes
- Joel Frick
- Rick Redmond
primary-application: Intelex Platform
secondary-applications:
- Supplier Portal
- Employee Management
- Training Management
- Document Control
---

# ADR-061: Use Entra ID SSO for Internal Users and a Separate Local-Authentication Supplier Portal

## Context and Problem Statement

SIA employees should use enterprise authentication. Some direct-supplier users already receive guest identities in SIA's Microsoft Entra tenant to access the existing SIA supplier portal, and the supplier code is available on those identities. Reusing those accounts for Intelex could reduce supplier sign-ins, but it would require a second identity-provider path and comprehensive synchronization of supplier contacts, entity relationships, licenses, and account lifecycle events.

Intelex does not natively present multiple authentication methods through one application URL, but it can expose separate internal and external application URLs over the same database.

Some on-site contractors receive SIA email addresses and SIA-managed identities so they can work with controlled management-system documents. Their authentication pattern is therefore closer to an internal user than to a conventional external supplier contact, even though their application and data access must remain restricted.

## Decision Drivers

- Use SIA's standard identity provider for employees.
- Avoid provisioning supplier identities in SIA's Entra tenant.
- Present the same governed records through internal and external experiences.
- Ensure email links direct each audience to the correct authentication endpoint.
- Preserve timely supplier-user administration without depending on upstream guest-account provisioning.
- Avoid disproportionate identity-integration and lifecycle complexity in the initial release.

## Considered Options

### Use local Intelex credentials for everyone

Simplifies URLs but weakens the internal enterprise identity model.

### Invite every supplier into Entra as a guest

Centralizes identity but creates unnecessary guest-account administration.

### Reuse existing supplier Entra guest accounts and synchronize them into Intelex

Could provide seamless supplier sign-on but requires dual identity-provider configuration, near-real-time user synchronization, supplier-code mapping, activation, deactivation, reactivation, and coordinated license handling.

### Use Entra SSO internally and a separate supplier portal URL with local authentication

Matches the platform capabilities and audience boundaries.

## Decision Outcome

Configure Microsoft Entra ID as the internal Intelex identity provider using SAML 2.0. Internal users authenticate through the SSO application URL.

Treat on-site contractors who receive SIA-managed identities as restricted internal users for authentication purposes. Grant only the location groups, application permissions, document access, and training access required by their role. Do not create supplier-portal identities for these users solely because their employer is an external company.

Enable a separate external supplier application URL that points to the same Intelex database but uses Intelex-managed usernames and passwords. Supplier-facing emails and links must resolve to the external URL. The external portal must remain reachable regardless of whether an SIA user is on the corporate network or VPN; access is controlled by identity and record security rather than source IP.

Do not implement supplier Entra SSO or Entra-driven supplier provisioning in the initial release. Maintain supplier contacts and user accounts independently in Intelex so authorized supplier administrators can activate required users without waiting for the upstream Microsoft request process. The Entra integration remains a possible future enhancement if its benefits later justify the implementation and operating cost.

## Consequences

### Positive

- Aligns internal access with enterprise SSO.
- Avoids managing suppliers as Entra guests.
- Maintains one data store and shared workflow state.

### Negative

- Two URLs require careful email and navigation configuration.
- Supplier passwords and account hygiene remain outside Entra controls.
- Support teams must understand both authentication experiences.
- Suppliers may need to authenticate again when moving between Microsoft-hosted resources and Intelex.
- Supplier identity and lifecycle data continue to exist in more than one system.
- Restricted contractors require explicit governance so internal authentication does not imply employee-level access.

### Follow-up and Constraints

- Complete the Entra and Intelex CloudOps configurations.
- Perform the information-security review for external local authentication.
- Test internal and external email links and off-network access.
- Apply ADR-007 inactivity controls to external accounts.
- Reassess supplier Entra SSO only with an end-to-end design for activation, deactivation, reactivation, license control, supplier-code quality, and multiple identity providers.
- Define the security groups and account lifecycle for SIA-identified on-site contractors.

## More Information

- Fourth transcript: approximately 0:14:37–0:25:49.
- Subsequent supplier workflow transcript: approximately 0:26:00–0:38:37 and 2:39:20–2:50:55.
- Subsequent non-conformance design transcript: approximately 0:19:36–0:28:13.
- ADR-083 governs the upstream supplier portal and Intelex workspace boundary.
