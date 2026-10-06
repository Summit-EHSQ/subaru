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
secondary-applications: Supplier Relationship Management, Supplier Portal, Document Control
---

# ADR-107: Model PPAP Discussions as Secured Threaded Related Records

## Context and Problem Statement

PPAP collaboration currently occurs partly through email, which fragments the record and excludes users added later. A single comment field cannot preserve separate topics, replies, visibility, authorship, recipients, or attachments. The solution needs a durable discussion history on the PPAP without turning conversation entries into workflow tasks.

## Decision Drivers

* Keep PPAP discussion with the PPAP record.
* Support internal-only and supplier-visible communication.
* Preserve topic, author, reply order, notification recipients, and attachments.
* Let newly authorized users understand prior discussion.
* Keep informational discussion separate from accountable workflow tasks.

## Considered Options

* Continue email-based collaboration.
* Store stage-specific comments in fields on the PPAP.
* Create task-level comment feeds and merge them into a PPAP feed.
* Create PPAP-level threaded comment records with controlled visibility.

## Decision Outcome

Chosen option: "Create PPAP-level threaded comment records with controlled visibility," because it provides a traceable conversation while keeping workflow tasks independently governed.

Each PPAP may have many discussion threads. A thread has a subject and an initial comment; replies are child records of the thread rather than recursively nested replies. Both SIA and supplier users with access to the PPAP may initiate a supplier-visible thread and reply to threads they can see. Internal users may also create internal-only threads or internal replies where supported.

Visibility derives first from access to the parent PPAP and then from the comment classification. Internal comments are visible to authorized SIA users with PPAP access. External comments are visible to those internal users and authorized supplier users. Notification targeting does not further restrict visibility.

The implementation should support a visible internal/external indicator and prevent an internal thread from becoming external. If reply-level classification can be implemented safely, an external thread may branch into internal replies, and protected descendants must not revert to external visibility. If that model proves disproportionately complex, classification will be immutable at the thread level and parallel internal and external threads will be used.

Comments require text for context and may have Intelex-managed file attachments. Files will not be embedded through public third-party upload services. Creating a comment will not create a task; accountable work remains in the PPAP task model.

## Consequences

* Good, because the complete conversation remains available to later participants.
* Good, because internal and supplier-facing communication can coexist without separate email chains.
* Good, because attachments inherit governed record access.
* Bad, because reply-level visibility inheritance requires careful security testing.
* Bad, because users must create a separate task when discussion produces accountable work.
* Bad, because thread-level classification may be used as a fallback if secure mixed-visibility replies are too complex.

## More Information

This decision was established at approximately 0:11:28–0:35:18. The preferred mixed-visibility reply model remains subject to implementation validation; the accepted fallback is immutable thread-level visibility. ADR-084 provides broader supplier-record visibility principles.
