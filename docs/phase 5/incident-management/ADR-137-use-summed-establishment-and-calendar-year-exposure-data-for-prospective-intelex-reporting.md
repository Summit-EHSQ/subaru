---
status: proposed
date: '2026-11-12'
discussion-date: '2026-11-04'
decision-date: not-formally-recorded
deciders: []
consulted: []
informed: []
primary-application: Incident Management
secondary-applications:
- Hours-worked reporting
- ADP
- SIA integration team
- OSHA reporting
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (1:31–12:37 (P0008–P0061); 27:19 (P0104); 34:07–34:45 (P0133–P0135))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-137: Use Summed Establishment and Calendar-Year Exposure Data for Prospective Intelex Reporting

## Context and Problem Statement

Hours are available from ADP, but SIA distinguishes limited totals needed for establishment reporting from millions of detail records used by other analysis. Participants favor annual cumulative totals at the top SIA establishment and external section-rate analysis. Whether final 300 reporting moves from the clinic into Intelex remains open. [S4 1:56–4:32; 7:06–12:37.]

## Decision Drivers

- Provide cumulative establishment/year hours rather than import detailed hours solely for section-rate calculations. [S4 2:44–4:32; 7:06–7:37.]
- Avoid routine manual hours entry. [S4 5:07–5:47.]
- Allow prior-year totals to mature or be corrected after the calendar changes. [S4 11:21–12:37.]
- Support a reasonably current report without unnecessary five-minute refreshes. [S4 8:31–9:29.]

## Considered Options

- Automated cumulative hours by establishment and calendar year, conditional on Intelex reporting ownership.
- Load all detailed employee/section hours into Intelex for rates (disfavored).
- Manually enter department/month totals as the normal operating model (not desired).

## Decision Outcome

Chosen option: "Automated cumulative hours by establishment and calendar year, conditional on Intelex reporting ownership", because the workshop settles that granularity while leaving the final clinic-versus-Intelex reporting role open. Use the SIA/top-establishment and calendar year as the business dimensions for cumulative exposure totals. ADP is identified as the hours source; average headcount is also needed for the intended summary, but its precise source and computation are not defined. Keep detailed section/rate calculations in Power BI. [S4 1:31–4:32; 7:06–7:37; 12:22–12:37; 27:19.]

Automate the supply of totals and permit updates for prior as well as current years when source data matures. Do not add successive cumulative deliveries as if they were period increments. The latter update rule is analysis following the year-to-date definition. Daily freshness is accepted as reasonable for hours in the discussion, but a final schedule, cutoff, retry, and operational service agreement are not specified. [S4 7:13–9:29; 11:21–12:37.]

For API-based updates, the workshop describes resolving the existing Intelex record identifier before updating it. Define matching by establishment/year and the create/update behavior with the actual endpoint model before implementation; do not treat the discussion as a verified API contract or permit duplicate annual rows by default. No transport is fully specified by this draft. [S4 34:07–34:45; matching/integrity rules are analysis.]

This is a reporting/data direction, not adoption of the transcript’s regulatory deadlines or proof that final reporting has moved out of the clinic. Current log completeness and an issued annual-summary artifact are separate concerns under ADR-138. [S4 2:19–2:35; 5:52–12:37.]

## Consequences

- Analysis: establishment/year totals reduce integration volume and avoid duplicating external rate-calculation logic.
- Analysis: totals need explicit as-of/source and revision semantics so later corrections are understood.
- Analysis: summary/report ownership remains a dependency; feeding totals alone does not create a complete clinical log or finalized reporting process.

## More Information

- Evidence: [Session 4 extraction](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 1:31–12:37 (P0008–P0061); 27:19 (P0104); 34:07–34:45 (P0133–P0135); [source DOCX](raw_artifacts/meeting_transcripts/workshop-session-4.docx). Recording header dated 4 November 2026; this review prepared 12 November 2026.
- Confidence: high for data granularity; medium for final reporting ownership. Status is proposed; discussion is not formal approval, implementation, or verified product/regulatory evidence.
- Unresolved: Confirm final reporting system and clinic responsibilities, establishment catalogue, covered populations, year definition, and average-headcount method/source.
- Unresolved: Confirm schedule, update identifier mapping, create/update behavior, correction windows, feed monitoring, and missing-data handling.
- Unresolved: Validate temporary-associate inclusion consistently across case records, hours, and headcount; the workshop wants a complete establishment view but does not supply every eligibility rule.
- Unresolved: Confirm regulatory requirements through the responsible process owners; no posting date, deadline, or retention obligation is established here as legal guidance.
- Related records: ADR-060, ADR-064, ADR-123, ADR-135, ADR-138. Resolve the latest review text through the [current ADR index](README.md).
