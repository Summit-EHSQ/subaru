---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Victor Nemacheck
consulted:
- Dave McLean
- Brianne Carroll
- Luke Filippo
informed:
- Scott Bailey
- Yolanda Reyes
- Joel Frick
- Rick Redmond
primary-application: Intelex Platform
secondary-applications:
- Supplier Portal
- Employee Management
---

# ADR-061: Use Entra ID SSO for Internal Users and a Separate Local-Authentication Supplier Portal

## Context and Problem Statement

SIA employees should use enterprise authentication, while external suppliers are not members of SIA's identity tenant. Intelex does not natively present multiple authentication methods through one application URL, but it can expose separate internal and external application URLs over the same database.

## Decision Drivers

- Use SIA's standard identity provider for employees.
- Avoid provisioning supplier identities in SIA's Entra tenant.
- Present the same governed records through internal and external experiences.
- Ensure email links direct each audience to the correct authentication endpoint.

## Considered Options

### Use local Intelex credentials for everyone

Simplifies URLs but weakens the internal enterprise identity model.

### Invite every supplier into Entra as a guest

Centralizes identity but creates unnecessary guest-account administration.

### Use Entra SSO internally and a separate supplier portal URL with local authentication

Matches the platform capabilities and audience boundaries.

## Decision Outcome

Configure Microsoft Entra ID as the internal Intelex identity provider using SAML 2.0. Internal users authenticate through the SSO application URL.

Enable a separate external supplier application URL that points to the same Intelex database but uses Intelex-managed usernames and passwords. Supplier-facing emails and links must resolve to the external URL. The external portal must remain reachable regardless of whether an SIA user is on the corporate network or VPN; access is controlled by identity and record security rather than source IP.

## Consequences

### Positive

- Aligns internal access with enterprise SSO.
- Avoids managing suppliers as Entra guests.
- Maintains one data store and shared workflow state.

### Negative

- Two URLs require careful email and navigation configuration.
- Supplier passwords and account hygiene remain outside Entra controls.
- Support teams must understand both authentication experiences.

### Follow-up and Constraints

- Complete the Entra and Intelex CloudOps configurations.
- Perform the information-security review for external local authentication.
- Test internal and external email links and off-network access.
- Apply ADR-007 inactivity controls to external accounts.

## More Information

- Fourth transcript: approximately 0:14:37–0:25:49.
