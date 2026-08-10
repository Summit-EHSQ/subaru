---
status: proposed
date: '2026-07-25'
decision-date: not-recorded-in-transcript
deciders: []
consulted:
- Nicholas Leuck
- Scott Bailey
- Dave McLean
informed:
- Joel Frick
- Rick Redmond
primary-application: Incident Management
secondary-applications:
- OHM
- Employee Management
---

# ADR-064: Integrate OHM Medical Data into Incident Management While Preserving Initiation Flexibility

## Context and Problem Statement

The clinic records employee medical and injury information in OHM and currently produces multiple daily data feeds. Intelex must create or enrich the first report of injury and investigation. SIA is separately considering whether the employee-facing digital AIR should begin in Intelex, but OHM will still contain medical information that Intelex requires.

## Decision Drivers

- Avoid duplicate manual entry of clinic data.
- Preserve OHM as the authoritative medical source.
- Allow the digital AIR initiation decision to evolve without discarding the integration.
- Start the Intelex investigation workflow promptly.

## Considered Options

### Keep all injury reporting in OHM and manually create Intelex records

Avoids integration but duplicates work and delays investigation.

### Move the entire clinic process to Intelex

Creates one system but may not meet medical-system requirements.

### Integrate OHM data and decide separately where the digital AIR begins

Preserves the medical source while retaining front-end flexibility.

## Decision Outcome

Propose an inbound OHM-to-Intelex interface using REST API or secure flat file, with the final method selected by SIA IT. Process the existing multiple-daily feed so that Intelex creates or updates the first report of injury and initiates the applicable investigation workflow.

The project must decide promptly whether the initial digital AIR is completed in OHM or Intelex. Even if initiation moves to Intelex, the integration remains necessary for supplementary medical data recorded in OHM. The interface must match records rather than create duplicate incidents.

## Consequences

### Positive

- Reduces duplicate entry.
- Preserves the specialized medical system.
- Supports either initiation model.

### Negative

- Matching updates to the correct incident can be complex.
- Medical-data privacy and field minimization require review.
- The initiation decision may affect active Phase One configuration.

### Follow-up and Constraints

- Decide where the digital AIR begins.
- Identify the SIA integration team and preferred transport.
- Define field ownership, matching keys, update rules, and privacy controls.
- Assess project-change implications if the initiation model changes after build.

## More Information

- Fourth transcript: approximately 0:44:49–0:51:38.
