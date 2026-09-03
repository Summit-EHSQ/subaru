---
status: accepted
date: '2026-09-02'
decision-date: not-recorded-in-transcript
deciders:
- Dave McLean
- Eric McGregor
- Joel Frick
consulted: []
informed:
- Emma Lister
- Rick Redmond
primary-application: Corrective Action Management
secondary-applications:
- Non-Conformance Management
- Audit Management
- Reporting
---

# ADR-089: Model Internal CARs as Source-Linked Parents with Structured Cause and Action Children

## Context and Problem Statement

A structured CAR may be required by an Internal NCR or an adverse Audit Finding. The response needs the original problem context, one or more structured analysis methods, reportable root causes, multiple action plans, management accountability, operational implementation, and team visibility. Re-entering source data or storing the response as one unstructured document would weaken traceability and reporting.

## Decision Drivers

- Preserve traceability to originating issues.
- Reduce duplicate entry.
- Support 5 Why, fishbone, and similar analysis methods.
- Normalize root causes for trending and reporting.
- Support multiple actions and participants.
- Separate accountable ownership from operational implementation and view access.

## Considered Options

### Store the complete response in the originating NCR or Audit Finding

Avoids another record but duplicates complex corrective-action functionality across source applications.

### Store external analysis and action documents as attachments

Matches document-based practices but limits workflow, assignment, and reporting.

### Use a source-linked parent CAR with structured analysis, root-cause, action, and team relationships

Creates a reusable corrective-action object with normalized child data.

## Decision Outcome

Implement the internal CAR as a parent record related to one or more originating Internal NCRs or Audit Findings. Prepopulate core issue details from the source while retaining the source relationship and audit context.

Provide structured 5 Why and fishbone analysis where required. Summarize selected analysis results into normalized root-cause child records for reporting. Maintain proposed containment, corrective, and preventive work as related action-plan records.

Represent CAR participation through distinct responsibilities:

- an accountable management owner remains responsible for the organizational response;
- a designated implementation person may perform workflow and data-entry work on the manager's behalf; and
- team members identify participants and receive view access when they already have application-level permission.

Team membership alone does not grant edit authority.

## Consequences

### Positive

- Reuses one corrective-action model across source applications.
- Supports root-cause and action reporting without parsing documents.
- Preserves management accountability while enabling practical delegation.
- Records team participation and controlled record visibility.

### Negative

- The relational model is more complex than a single form.
- Source-field snapshots and synchronization rules must be defined.
- Role permissions require careful workflow and security testing.

### Follow-up and Constraints

- Confirm whether one CAR may formally govern multiple source records.
- Define source-field snapshot and synchronization behavior.
- Finalize the implementation-role name and edit authority.
- Define root-cause taxonomy and cause-to-action relationships.
- Complete a separate quality-CAR design session before applying this model to paused QC scope.

## More Information

- Subsequent non-conformance design transcript: approximately 1:37:33–1:45:31 and 2:24:18–2:31:15, with role clarification at 2:39:31–2:43:36.
- ADR-087 and ADR-088 govern source records. ADR-090 governs plan release and verification.
