---
status: accepted
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders:
- Scott Bailey
- Nicholas Leuck
- Victor Nemacheck
consulted:
- Dave McLean
- Yolanda Reyes
informed:
- Andrea Turner
- Joel Frick
- Rick Redmond
primary-application: Employee Management
secondary-applications:
- SAP SuccessFactors
- Intelex Platform
---

# ADR-060: Provision Employee Records Through a Resilient SuccessFactors SFTP Feed

## Context and Problem Statement

Intelex requires employee records and user accounts before the Phase One applications can operate. SAP SuccessFactors is the authoritative HR source. The integration must tolerate short outages without losing changes and must allow additional Intelex fields to be mapped after business requirements are finalized.

## Decision Drivers

- Provision new employees and keep attributes current.
- Use an integration pattern already supported by SIA HRIS and Systems.
- Recover automatically from missed daily files.
- Avoid sending a full historical change ledger.

## Considered Options

### Send a full employee file every day

Is simple but unnecessarily large and may increase processing time.

### Send only changes since the previous successful run

Is efficient but can lose updates after an outage.

### Send current-state records modified within a rolling window

Provides resilience while avoiding full-file volume.

## Decision Outcome

SIA HRIS will generate a scheduled flat-file feed from SuccessFactors. The file contains the latest current state of each employee whose record was modified within a rolling 30-day window, rather than one row for every historical change.

SIA Systems will host the SFTP service and create a dedicated Intelex account or virtual folder. Intelex will retrieve and process the file on the agreed schedule and return processing results through the same controlled integration boundary. The base template is assessed first; additional existing SuccessFactors attributes may be added after the business confirms the required Intelex custom fields.

## Consequences

### Positive

- Uses established SIA capabilities.
- Provides recovery from several missed runs.
- Keeps source ownership with HRIS.
- Supports phased field mapping.

### Negative

- Rolling-window logic requires a reliable modified timestamp.
- A current-state feed does not preserve HR effective-dating history in Intelex.
- Custom-field additions can change the interface contract.

### Follow-up and Constraints

- Confirm file template, field semantics, schedule, encryption, and naming.
- Confirm termination and user-deactivation behavior.
- Define return-file handling and operational monitoring.
- Finalize custom employee fields before production cutover.

## More Information

- Fourth transcript: approximately 0:06:21–0:14:37.
