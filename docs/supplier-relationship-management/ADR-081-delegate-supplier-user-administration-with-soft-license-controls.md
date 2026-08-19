---
status: proposed
date: '2026-08-18'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
- Keith Freeman
consulted:
- Roy Lowery
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

# ADR-081: Delegate Supplier User Administration with Soft License Controls

## Context and Problem Statement

Suppliers vary substantially in the number of users needed for quality, development, packaging, logistics, warranty, and other work. One person may fill several roles at a small supplier, while a high-volume supplier may require many specialized users. Requiring a global system administrator to approve every account creates a bottleneck without giving that administrator enough supplier context, but unrestricted provisioning could exceed the licensed external-user allocation.

## Decision Drivers

- Keep supplier personnel maintenance close to the organization that knows its staff.
- Support materially different user counts across suppliers.
- Avoid a global approval bottleneck for normal account replacement and setup.
- Make license pressure visible before aggregate capacity is exhausted.
- Preserve SIA authority over supplier-managed data and access.
- Avoid insecure shared or default initial passwords.

## Considered Options

### Require internal approval for every supplier portal user

Provides central control but creates administrative delay and lacks supplier-specific business context.

### Enforce one hard user cap for every supplier

Is easy to understand but does not reflect supplier size or process complexity.

### Permit unrestricted supplier provisioning with no utilization indicators

Minimizes friction but can exceed the licensed allocation without warning.

### Delegate administration and use supplier-specific projected allocations as soft controls

Supports supplier variability while prompting review before projected usage is materially exceeded.

## Decision Outcome

Allow an authorized supplier account manager or equivalent administrator to create and update contacts, assign relationship roles, and request portal access for people in that supplier organization. SIA retains equivalent authority to correct contacts, roles, and account state.

Store a projected user allocation or allocation band for each supplier. Do not automatically block normal activation at that number. When active utilization reaches a configurable warning point, initially discussed as 80 percent of the projection, notify the responsible supplier-program owner or initiate review of subsequent access requests. The global Intelex administrator must not be the default business approver solely because that role can administer licenses.

Provision a portal account only when the contact requires authentication. On activation or reactivation, send the external user an email containing a coded link to establish a password under the Intelex password policy. Do not assign a shared, known, or default initial password. Apply ADR-007 after activation to control inactivity.

## Consequences

### Positive

- Scales administration across suppliers and keeps maintenance near the source.
- Supports both small and complex supplier organizations.
- Makes projected license pressure visible without blocking urgent work arbitrarily.
- Avoids insecure initial password practices.

### Negative

- Soft controls do not prevent aggregate license overuse.
- Supplier projections and warning recipients require governance.
- Supplier administrators may create inaccurate contacts or unnecessary accounts that SIA must correct.

### Follow-up and Constraints

- Confirm the purchased supplier-user license quantity.
- Define allocation bands, warning thresholds, recipients, and review ownership.
- Define which supplier role may administer users and whether delegation is permitted.
- Test activation, reactivation, password setup, and notification links against ADR-061.

## More Information

- Latest supplier-management design transcript: approximately 2:07:16–2:22:51 and 2:33:41–2:38:42.
- The exact license quantity and warning owner were not available in the session; therefore this ADR remains proposed.

