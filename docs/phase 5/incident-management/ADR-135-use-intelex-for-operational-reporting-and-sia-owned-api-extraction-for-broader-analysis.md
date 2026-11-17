---
status: proposed
date: '2026-11-12'
revision-date: '2026-11-12'
discussion-date: '2026-11-04'
decision-date: not-formally-recorded
deciders: []
consulted: []
informed: []
primary-application: Incident Management
secondary-applications:
- Near-miss reporting
- Reporting
- Power BI
- SIA integration team
source_references:
- 'raw_artifacts/meeting_transcripts/workshop-session-4.txt (2:44–4:11 (P0017–P0021); 27:19–40:34 (P0104–P0160))'
- 'raw_artifacts/meeting_transcripts/workshop-session-3.txt (1:28:47–1:33:25 (P0357–P0360); 1:49:51–1:54:19 (P0428–P0446); 2:00:18–2:02:54 (P0471–P0485))'
supersedes: []
superseded_by: []
approval_references: []
---

# ADR-135: Use Intelex for Operational Reporting and SIA-Owned API Extraction for Broader Analysis

## Context and Problem Statement

The session 3 proposal establishes governed export for external analysis but leaves the method open. Session 4 separates Intelex operational follow-up from broader safety-system performance in Power BI, expresses a preference for API extraction, and assigns API-call implementation to SIA with implementation-team support for the data model. [S4 2:44–4:11; 27:19–35:10.]

## Decision Drivers

- Use Intelex for outstanding incidents, follow-up, and operational work visibility. [S4 28:34–28:55; 36:24–39:41.]
- Keep detailed section/rate analysis in Power BI rather than load large exposure datasets solely for that analysis. [S4 2:44–4:11.]
- Make API implementation responsibility explicit. [S4 33:43–33:47.]

## Considered Options

- Native operational reports plus SIA-owned API extraction for broader Power BI/other analysis.
- Build all detailed safety rates and analytics inside Intelex (disfavored).
- Use only report/OData exports as the integration path (described alternative; API preference stated).

## Decision Outcome

Chosen option: "Native operational reports plus SIA-owned API extraction for broader Power BI/other analysis", because session 4 favors Intelex for internal operational follow-up and Power BI for wider performance/rate analysis. Retain session 3’s need to analyze stored incidents and near misses, including incomplete records where applicable. Do not load millions of detailed hours records into Intelex merely to reproduce external section-rate calculations. [S4 2:44–4:11; 28:34–29:08; S3 1:28:47; 1:52:04–1:54:19.]

Use API extraction as the expressed preference, with SIA building the calls and the implementation team helping identify application fields/tables. This is API access to application records, not approval for direct database/SQL access. A report/OData path remains an alternative described as exposing the dataset first built in a report. No exact endpoints, consumer credentials, incremental logic, or production connection is selected or tested. [S4 32:28–34:45.]

Use existing task visibility and due dates as the starting operational experience; the My Tasks demonstration is accepted as useful. Exact date filters, custom landing pages, dashboard layouts, authoring roles, and KPI catalogue remain open pending demonstrations/review. Do not claim that a today-only filter or a custom homepage was selected. [S4 35:10–40:34.]

Keep external AI synthesis distinct from input-assistance AI and subject to the eventual audience/field permissions in ADR-122. The session does not approve sending medical narrative to an external consumer or settle near-miss hosting. [S3 2:00:43–2:02:54; S4 1:15:09–1:17:26.]

## Consequences

- Analysis: operational work can stay close to workflow records while analytical transformations remain in the intended BI environment.
- Analysis: API consumers must own filtering, schema handling, and retrieval behavior rather than assume a report has already scoped the dataset.
- Analysis: predictable trend analysis needs controlled source data; free-text stations limit comparability until governed mapping exists.

## More Information

- Evidence: [Session 4 extraction](raw_artifacts/meeting_transcripts/workshop-session-4.txt), 2:44–4:11 (P0017–P0021); 27:19–40:34 (P0104–P0160); [source DOCX](raw_artifacts/meeting_transcripts/workshop-session-4.docx). Recording header dated 4 November 2026; this review prepared 12 November 2026.
- Confidence: high for reporting boundary; medium for final datasets. Status is proposed; discussion is not formal approval, implementation, or verified product/regulatory evidence.
- Prior proposal and earlier source evidence: [ADR-135 (archived session 3)](raw_artifacts/adr-review-history.zip). Preserve its ID/date; earlier review files remain history.
- Unresolved: Define report/KPI inventory, authoring permissions and business owners, audiences, fields, status coverage, and refresh/volume requirements.
- Unresolved: Define API endpoints, authorization, source identifiers, increment/change handling, and any report/OData alternatives.
- Unresolved: Resolve task prioritization/filter and landing-page requirements after the requested reporting demonstration.
- Unresolved: Keep near-miss platform choice and medical export boundaries open; current-log versus issued-summary behavior is governed separately by ADR-138.
- Related records: ADR-118, ADR-122, ADR-133, ADR-134, ADR-136, ADR-137, ADR-138, ADR-140. Resolve the latest review text through the [current ADR index](README.md).
