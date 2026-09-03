---
status: accepted
date: '2026-08-18'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
- Keith Freeman
consulted:
- Roy Lowery
- Brianne Carroll
- Victor Nemacheck
- Luke Filippo
- Jamie Dossey
informed:
- Emma Lister
- Jillian
- Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
- Supplier Portal
- Intelex Platform
- Notifications
---

# ADR-007: Deactivate Dormant Supplier Accounts Using Role-Based Thresholds

## Context and Problem Statement

External supplier users authenticate outside SIA's Entra tenant and may retain access after leaving their employer. Supplier roles also have materially different usage patterns: some users are expected to enter the portal regularly, while others may have legitimate gaps of several months. A fixed short threshold creates disruption and notification fatigue, while the previously documented one-year threshold leaves avoidable license and information-security exposure.

## Decision Drivers

- Remove dormant external accounts and recover unused supplier-user licenses.
- Reduce the period in which departed supplier personnel may retain access.
- Accommodate legitimate differences in portal activity by business role.
- Allow administrators to tune controls without reconfiguring workflows.
- Warn users before access is removed.

## Considered Options

### Rely only on manual supplier account maintenance

Avoids false positives but depends on SIA learning promptly about personnel changes at external organizations.

### Apply one fixed inactivity threshold to all supplier users

Is simple but cannot reflect different activity patterns and business needs.

### Deactivate every supplier user after one year without activity

Minimizes disruption but retains dormant access and licenses longer than the latest design considers acceptable.

### Use centrally managed role-based notification and deactivation thresholds

Balances security and licensing controls with legitimate role-specific activity patterns.

## Decision Outcome

Automatically warn and deactivate dormant supplier portal users using centrally managed thresholds. Each standardized external role will store:

- the number of inactive days after which the user is notified; and
- the number of inactive days after which the account is deactivated.

For a user assigned to multiple standardized roles, apply the shortest notification and deactivation thresholds associated with those roles. A contact with no standardized role, or only a supplier-specific custom role, uses a global fallback threshold. The fallback was discussed with an initial direction of approximately 80 days to notify and 90 days to deactivate, but all values remain governed configuration.

Manual deactivation remains available. An advance email must identify the deactivation date and the reactivation path. Authorized SIA or supplier-administration personnel may reactivate the account after validating continued business need.

## Consequences

### Positive

- Reduces dormant-account and license exposure sooner for frequently used roles.
- Accommodates infrequent legitimate users through longer role-specific thresholds.
- Makes thresholds adjustable without redesigning the account lifecycle.
- Gives users an opportunity to preserve access by logging in before deactivation.

### Negative

- The role library becomes part of the security-control configuration.
- Incorrect or overly short thresholds can cause notification fatigue and unnecessary reactivation work.
- A user who misses the warning may lose access while still having a valid business need.
- The control does not identify a replacement contact for a departed user.

### Follow-up and Constraints

- Define the exact activity event that resets the inactivity clock.
- Confirm initial thresholds for every standardized role and the global fallback.
- Define reactivation ownership, notification content, and task reassignment behavior.
- Confirm the external-user approach with information security.

## More Information

- Earlier transcripts considered short-period recertification and later established a fixed one-year inactivity rule.
- Latest supplier-management design transcript: approximately 2:22:51–2:38:42.
- This revision replaces the fixed one-year rule with centrally configurable role-based thresholds and a global fallback.
