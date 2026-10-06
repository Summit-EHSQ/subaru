---
status: accepted
date: '2026-10-01'
decision-date: '2026-10-01'
deciders:
  - Dave McLean
  - Joel Frick
  - Keith Freeman
consulted:
  - Brian Hensell
informed:
  - Emma Lister
primary-application: Production Part Approval Process (PPAP)
secondary-applications: Supplier Portal, Intelex Platform
---

# ADR-110: Use a Responsive Connected Browser Experience for PPAP

## Context and Problem Statement

PPAP users may open notifications, review plans, or post comments from a phone or tablet. The process is not expected to require offline execution, and constraining the design to the native mobile application's capabilities would weaken the richer PPAP experience.

## Decision Drivers

* Support occasional phone and tablet use.
* Preserve the full PPAP form, plan, task, and discussion experience.
* Avoid unnecessary offline synchronization complexity.
* Focus implementation effort on the most common connected use cases.

## Considered Options

* Build PPAP around the native mobile application and offline operation.
* Provide separate desktop and mobile PPAP implementations.
* Build one responsive browser experience for connected devices.

## Decision Outcome

Chosen option: "Build one responsive browser experience for connected devices," because expected PPAP mobile use occurs with network access and primarily involves review and light interaction.

PPAP forms, plans, tasks, and discussion views will be responsive in the browser and usable on desktop, tablet, and phone. Email links may open the browser experience directly. Offline PPAP completion through the native mobile application is not an initial requirement.

## Consequences

* Good, because users receive one consistent experience across connected devices.
* Good, because the design is not limited by the native mobile application's form constraints.
* Good, because implementation and validation focus on one user interface.
* Bad, because PPAP work will not be available when the user has no network connection.
* Bad, because responsive behavior must be tested for dense task grids and attachments on small screens.

## More Information

This decision was established at approximately 1:29:16–1:30:54. It is consistent with ADR-043 for the connected pilot-inspection experience but applies independently to PPAP.
