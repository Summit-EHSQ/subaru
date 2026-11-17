# PPAP OOTB baseline

[Technical Specification](ppap-ootb-technical-specification.md) — the entry point for the supplied APQP & PPAP Manager product baseline, kept separate from the [intended solution brief](../solution-brief.md).

## Detailed contracts and evidence

- [Field catalogue](field-catalogue.md): 92 object subsections, 403 resolved field rows, and configuration records under their concrete objects.
- [Workflow and automation appendix](workflow-automation.md): actual stages, terminal outcomes, ordered actions, stage permissions, handlers, and notifications.
- [Security, seed data, and views appendix](security-seeds-views.md).
- [Object inventory](object-inventory.csv), [complete field inventory](field-inventory.csv), and [detached dependency fields](unresolved-field-inventory.csv).
- [Reference fields](relationship-register.csv), [canonical relationships](canonical-relationship-register.csv), [direct inheritance](inheritance-register.csv), and [native association maps](junction-object-register.csv).
- [Complete logical diagram](baseline-logical-model.mmd), [project domain diagram](baseline-project-model.mmd), [checklist domain diagram](baseline-checklist-model.mmd), and [inheritance diagram](baseline-inheritance.mmd).
- [Exact field expressions](field-expressions.md), [configuration records](seed-records.json), [template assignments](template-task-assignments.csv), [views](view-inventory.csv), and [ACL grants](security-grants.csv).
- [Source manifest](source-manifest.json), [machine model](baseline-model.json), [metadata variations](metadata-variation-register.csv), [validation](validation.json), [document/source checks](document-validation.json), and [independent schema validation](independent-schema-validation.json).

This is a static reconstruction of the supplied historical package bundle. It does not claim that the configuration has been imported, tested, or verified on the current tenant. Incomplete dependency metadata and runtime limitations are explicit in the specification.
