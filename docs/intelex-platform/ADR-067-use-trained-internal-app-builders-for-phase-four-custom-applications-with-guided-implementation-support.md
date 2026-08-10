---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Brianne Carroll
consulted:
- Dave McLean
- Luke Filippo
informed:
- Joel Frick
- Rick Redmond
primary-application: Intelex Platform
secondary-applications:
- TACT-TRI
- SPANF
- TS Request
---

# ADR-067: Use Trained Internal App Builders for Phase-Four Custom Applications with Guided Implementation Support

## Context and Problem Statement

Intelex uses the same administrative license for routine administration and application development, but the skills and risk profiles are different. The program includes several custom applications intended to be built by SIA in later phases, and the future platform coordinator is expected to sustain them.

## Decision Drivers

- Develop internal capability to build and maintain custom apps.
- Separate developer responsibilities from routine user and security administration.
- Use implementation support where cross-application architecture is complex.
- Create practical deliverables during training.

## Considered Options

### Use implementation vendors for every future change

Provides expertise but limits internal autonomy and can increase long-term cost.

### Give all administrators unrestricted app-builder responsibilities

Is flexible but creates governance and change-risk concerns.

### Train a limited app-builder cohort and pair them with guided delivery support

Builds internal capability within controlled roles and governance.

## Decision Outcome

Designate a limited internal app-builder cohort, including the future Intelex coordinator where appropriate. Provide a focused onsite developer workshop and a defined support allocation tied to real application deliverables.

The internal builders will perform the majority of configured custom-app work for the selected Phase Four applications. Delivery partners may provide architecture, design, complex connection logic, reviews, and troubleshooting. Governance must distinguish the app-builder persona from routine administrators even when the platform license does not.

## Consequences

### Positive

- Builds sustainable internal capability.
- Uses real applications as training outcomes.
- Allows expert support to focus on complex architecture.

### Negative

- Internal development requires ongoing capacity and governance.
- Shared admin licensing can expose powerful configuration functions broadly.
- Early builds may take longer than vendor-only delivery.

### Follow-up and Constraints

- Select and authorize the app-builder cohort.
- Define development, test, review, release, and rollback standards.
- Define the training deliverables and support model.
- Segment permissions or operating procedures where technically possible.

## More Information

- Fourth transcript: approximately 2:05:10–2:12:18.
