---
status: accepted
date: '2026-10-01'
decision-date: not-recorded-in-transcript
deciders:
- Joel Frick
consulted:
- Dave McLean
informed:
- Keith Freeman
- Brian Hensell
primary-application: Supplier Scorecard
secondary-applications: []
---

# ADR-111: Configure KPI Initialization, Carry-Forward, and Explicit Applicability

## Context and Problem Statement

Scorecard KPIs do not all begin a period in the same way. Some require deliberate entry, some normally receive a standard value, and some retain a reviewed result until the next periodic assessment. A blank value also cannot safely mean both incomplete work and no applicable activity because non-response may legitimately score zero.

## Decision Drivers

- Reduce repetitive entry without hiding missing work.
- Support periodic values that remain effective between assessments.
- Exclude genuinely non-applicable measures from the denominator.
- Configure behavior by KPI rather than through one global rule.

## Considered Options

### Require fresh entry for every KPI and period

Is unambiguous but preserves avoidable monthly work.

### Treat blanks as either zero or not applicable

Is simple but cannot distinguish incomplete work from a confirmed absence of applicable activity.

### Configure defaulting and applicability by KPI

Supports each scoring pattern while preserving explicit user confirmation.

## Decision Outcome

Configure each KPI with one initialization method:

- no default, requiring deliberate entry or query capture;
- a static configured value; or
- the prior period's effective value for the same supplier, entity, and KPI.

Separately configure whether a KPI may be marked **Not Applicable**. When selected for a supplier and period, disable point entry, set the effective maximum points to zero, and exclude the KPI from the scoring denominator. Do not require a comment merely for selecting not applicable.

Do not interpret an empty entry as not applicable. Apply the configured missing or non-response rule instead.

## Consequences

### Positive

- Supports efficient full-score defaults and period-to-period carry-forward.
- Preserves the distinction between missing and non-applicable data.
- Avoids custom logic for every periodic KPI.

### Negative

- Incorrect defaults can propagate unnoticed if reviewers do not confirm them.
- KPI instances require configured maximum, effective maximum, applicability, and effective-value behavior.
- Carry-forward users must know when a new assessment is due.

### Follow-up and Constraints

- Define the initial default method and applicability permission for every KPI.
- Show defaulted, queried, entered, and not-applicable states clearly in the entry interface.
- Validate denominator behavior in category, composite, and annual rollups.

## More Information

- Phase 2A design workshop day 3 afternoon: approximately 0:03:56–0:04:38, 0:24:03–0:35:14.
- ADR-058 governs the versioned KPI and scorecard snapshot model.

