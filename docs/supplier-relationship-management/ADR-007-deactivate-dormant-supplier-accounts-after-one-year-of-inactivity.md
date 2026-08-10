---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Brianne Carroll
- Victor Nemacheck
consulted:
- Dave McLean
- Luke Filippo
- Jamie Dossey
informed:
- Joel Frick
- Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
- Supplier Portal
- Intelex Platform
---

# ADR-007: Deactivate Dormant Supplier Accounts After One Year of Inactivity

## Context and Problem Statement

External supplier users authenticate outside SIA's Entra tenant and may remain in the system after leaving their employer. Earlier discussion considered frequent recertification prompts, but supplier activity can legitimately be infrequent and a monthly control would create excessive false positives. Email bounce processing is not a reliable indicator of continued authorization.

## Decision Drivers

- Remove dormant external accounts without burdening active suppliers.
- Align with an existing SIA access-hygiene pattern.
- Accommodate suppliers who use the portal only a few times each year.
- Avoid dependence on email-return behavior.

## Considered Options

### Require monthly supplier confirmation

Provides strong recency assurance but would repeatedly challenge legitimate low-frequency users.

### Use email bounces or supplier notifications

Is unreliable and depends on external organizations consistently reporting departures.

### Deactivate accounts after one year without portal activity

Provides a practical hygiene control aligned with SIA practice while limiting disruption.

## Decision Outcome

Automatically deactivate supplier portal accounts after one year without recorded usage. Recently active accounts are not challenged solely for recertification. Authorized SIA or supplier-administration personnel may restore access after validating the user's continued business need.

This inactivity control complements, rather than replaces, supplier maintenance of named business contacts and roles.

## Consequences

### Positive

- Establishes a clear, auditable inactivity threshold.
- Aligns the external portal with a familiar SIA access-review pattern.
- Avoids monthly interruptions for occasional supplier users.

### Negative

- A departed user may retain access for up to one year if the supplier does not report the change.
- A legitimate infrequent user may require reactivation.
- The control does not identify a replacement contact for a deactivated user.

### Follow-up and Constraints

- Define the exact activity event that resets the inactivity clock.
- Define notification, deactivation, reactivation, and eventual purge rules.
- Confirm the external-user approach with information security.

## More Information

- First transcript: approximately 1:14:29–1:23:59.
- Fourth transcript: approximately 0:17:21–0:25:49.
- This revision replaces the earlier configurable short-period recertification direction with the one-year inactivity rule agreed during the IT session.
