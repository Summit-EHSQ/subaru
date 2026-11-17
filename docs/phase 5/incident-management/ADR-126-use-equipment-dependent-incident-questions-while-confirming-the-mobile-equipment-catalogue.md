---
status: proposed
date: '2026-11-10'
revision-date: '2026-11-12'
discussion-date: '2026-11-04'
decision-date: not-formally-recorded
deciders: []
consulted: []
informed: []
primary-application: Incident Management
secondary-applications:
- PIT safety
- Mobile equipment
- Vehicle incidents
- Property damage
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (1:06:04–1:15:09 (P0289–P0324))'
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (0:10–7:37 (P0007–P0022))'
- 'raw_artifacts/meeting_transcripts/workshop-session-2.txt (0:04:18–0:19:45; 0:24:32–0:27:06; 1:14:13–1:14:26)'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-126: Use Equipment-Dependent Incident Questions While Confirming the Mobile Equipment Catalogue

## Context and Problem Statement

Session 4 revisits whether native vehicle incidents correspond to SIA PIT, a broader vehicle category, or mobile equipment with PIT below it. The group proposes type-dependent questions and indoor/outdoor context, but disagrees about golf carts/company cars and requests a field list before final recommendations. Produced vehicles are distinguished from the intended facility equipment context. [S4 1:06:04–1:15:09.]

## Decision Drivers

- Ask questions appropriate to the equipment involved rather than exposing every road-vehicle question to every PIT report. [S4 1:08:10–1:09:43; 1:12:40–1:13:07.]
- Distinguish facility equipment from produced vehicles and separately governed fleet cases. [S4 1:11:00–1:14:01.]
- Confirm actual field needs and scope before selecting the final taxonomy. [S4 1:14:31–1:15:09.]

## Considered Options

- Equipment-dependent questions within a scoped catalogue that remains to be confirmed.
- Treat every vehicle, produced unit, fleet car, and PIT as one already-approved scope (not supported).
- Separate every equipment kind into unrelated applications (analyst-derived alternative).

## Decision Outcome

Chosen option: "Equipment-dependent questions within a scoped catalogue that remains to be confirmed", because the discussion supports conditional questions while explicitly requesting a concrete field inventory before a final architecture recommendation. Retain the supervisor/Safety/manager workflow direction for the scoped PIT/equipment process, and make question applicability depend on equipment context where justified. Indoor/outdoor questions are a possible additional selector, not a complete selected rule set. [S4 1:08:10–1:09:43; 1:12:40–1:15:09; S3 0:10–7:37.]

Mobile equipment with PIT as a subcategory is the later working terminology. Do not convert the workshop’s comments about OSHA definitions into a verified legal taxonomy, or treat the proposed catalogue as approved. Company/fleet cars require confirmation; golf-cart/current-process coverage is disputed; produced-vehicle damage is explicitly distinguished from the intended facility-equipment discussion. [S4 1:11:00–1:14:31.]

Keep the SOW question open. Discussion of native vehicle fields does not approve switching all property/PIT configuration to a broader road-vehicle process, or prove that every conditional field can be implemented without configuration effort. The field list and scope confirmation are prerequisites to that detailed recommendation. [S4 1:06:04–1:06:54; 1:09:43; 1:14:31–1:15:09.]

## Consequences

- Analysis: a controlled equipment catalogue can support reusable conditional forms without broadening every report’s scope.
- Analysis: inconsistent equipment labels would undermine routing and trend analysis.
- Analysis: importing all road-vehicle fields by default would add unnecessary collection and privacy burden.

## More Information

- Evidence: [Session 4 extraction](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 1:06:04–1:15:09 (P0289–P0324); [source DOCX](raw_artifacts/meeting_transcripts/workshop-session-4.docx). Recording header dated 4 November 2026; this review prepared 12 November 2026.
- Confidence: medium. Status is proposed; discussion is not formal approval, implementation, or verified product/regulatory evidence.
- Prior proposal and earlier source evidence: [ADR-126 (archived session 3)](raw_artifacts/adr-review-history.zip). Preserve its ID/date; earlier review files remain history.
- Unresolved: Obtain the promised field/question list, equipment taxonomy, and scope determination.
- Unresolved: Confirm company/fleet vehicle, golf-cart, crane/lift/cart, produced-unit damage, and general facility/property boundaries.
- Unresolved: Define which equipment/location answers activate which questions and validations.
- Unresolved: Retain open damage-cost, assignment-exception, and reporting-category rules.
- Related records: ADR-119, ADR-120, ADR-124, ADR-125, ADR-129, ADR-135, ADR-140. Resolve the latest review text through the [current ADR index](README.md).
