---
status: accepted
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Joel Frick
consulted:
- Ethan Lyon
- Isaku Nishiwaki
- Keith Freeman
informed:
- Emma Lister
- Jamie Dossey
- Rick Redmond
primary-application: Supplier Relationship Management
secondary-applications:
- Supplier Portal
- Intelex Platform
- Advanced Product Quality Planning (APQP)
- Production Part Approval Process (PPAP)
- Non-Conformance Management
- Audit Management
- Supplier Scorecard
---

# ADR-083: Retain the Existing Supplier Portal as the Upstream Entry Point and Use Intelex as the Supplier Quality Workspace

## Context and Problem Statement

ADR-001 selected the Intelex Supplier Portal as the official landing page and broader integration hub for supplier interactions. Subsequent review of the existing SIA supplier portal and its authentication model established that replacing that upstream portal or reproducing its Microsoft-hosted document and application navigation would add cost and complexity without materially advancing the current supplier-quality implementation.

Suppliers already use the SIA portal to reach documents and external applications, including IntelliQuest. Intelex must replace IntelliQuest for supplier-quality work while providing a clearer experience inside Intelex.

## Decision Drivers

- Preserve the established supplier entry point and existing external-system navigation.
- Focus implementation effort on the supplier-quality workflows being replaced.
- Avoid unnecessary duplication of Microsoft-hosted content and access administration.
- Provide a clear starting point for tasks and records once a supplier enters Intelex.
- Support suppliers related to one facility, several facilities, or a parent company.
- Balance useful status summaries against portal page-load performance.

## Considered Options

### Replace the existing SIA supplier portal with Intelex

Would create one new landing page but requires Intelex to reproduce or link a broader set of systems, documents, and authentication behavior outside the immediate quality scope.

### Integrate supplier Entra identities and use Intelex as a seamless cross-system hub

Could reduce repeated authentication but requires multiple identity-provider configuration and comprehensive supplier-user synchronization.

### Retain the existing SIA portal and use Intelex as the supplier-quality workspace

Preserves the current upstream entry point while allowing Intelex to replace IntelliQuest and improve navigation across the quality processes delivered in Intelex.

## Decision Outcome

Retain the existing SIA supplier portal as the upstream supplier entry point. Replace the current IntelliQuest launch link with an Intelex link. Do not require Intelex to act as the general launching point for every SIA supplier system or Microsoft-hosted document in the initial release.

Within Intelex, provide an Intelex-centric supplier workspace that exposes assigned tasks, authorized supplier companies and facilities, navigation to supplier-quality applications, selected current scorecard measures, and status summaries such as overdue non-conformances or PPAPs. Selecting a summary count must open the filtered records that support it.

Use progressive disclosure rather than placing every list and KPI on the first page. Detailed module summaries may appear on their respective application pages when placing them on the landing page would create excessive query or page-load cost.

Supplier entity scope remains governed by ADR-078. Internal and supplier authentication remain governed by ADR-061.

## Consequences

### Positive

- Preserves a supplier navigation pattern that is already understood.
- Concentrates the Intelex scope on replacement quality capabilities.
- Provides a more usable front end than a long supplier form containing many embedded lists.
- Allows summary measures to remain traceable to their underlying records.

### Negative

- Suppliers continue to move across more than one portal and authentication experience.
- The existing SIA portal remains a dependency for upstream navigation.
- Portal summaries require carefully selected and optimized queries.
- Navigation ownership must be coordinated across the SIA portal and Intelex.

### Follow-up and Constraints

- Define ownership for the upstream Intelex link and the Intelex supplier workspace.
- Produce portal mockups and test page-load performance with representative supplier data.
- Define the initial task, status, and scorecard summaries shown on the landing page.
- Test parent-company and multi-facility navigation against ADR-078.
- Apply the record-level confidentiality model from ADR-084.

## More Information

- Subsequent supplier workflow transcript: approximately 0:21:24–0:59:17 and 2:39:20–2:50:55.
- This ADR supersedes ADR-001.
