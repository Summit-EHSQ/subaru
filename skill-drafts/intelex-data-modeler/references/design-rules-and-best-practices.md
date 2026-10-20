# Intelex solution-modelling rules and best practices

Read this reference when producing or revising a target Intelex solution design or implementation-oriented technical specification. Apply the rules according to their classification and the evidence available for the current project. Do not promote a project-specific decision into a universal Intelex rule.

## 1. Rule classification

Classify guidance and material design conclusions as one of:

- **Platform constraint:** A verified Intelex limitation or required implementation pattern.
- **Modelling rule:** A default architectural rule that applies unless requirements justify an exception.
- **Specification rule:** A rule governing how the design is documented.
- **Validation rule:** A condition to confirm during design or implementation.
- **Project decision:** A requirement specific to the current solution that must not be generalized automatically.

## 2. Objects and object responsibilities

### OBJ-01 — Prefer native platform capabilities

Before adding a custom object, determine whether Intelex already provides the required capability through workflow history, object audit trails, Action Handler or execution logs, platform notification history, native reminder functionality, workflow state, or standard relationship metadata.

Do not create custom Event, Reminder Rule, Audit, Workflow, State, Revision, Proposal, Register, or Snapshot objects merely to duplicate native platform behaviour.

### OBJ-02 — Give every object a distinct business responsibility

Add an object only when it represents at least one of:

- an independently governed business record;
- reusable configuration;
- an immutable published version;
- a genuine many-to-many association requiring its own attributes;
- an operational record with an independent lifecycle;
- a required historical snapshot that native audit cannot provide.

Remove objects that exist only to compensate for ambiguity elsewhere in the specification.

### OBJ-03 — Prefer reusable domain-neutral objects

If configuration is shared across modules, use a neutral name and shared definition. Do not encode one consumer's name into a genuinely shared object.

### OBJ-04 — Assign one documentation authority to each shared object

A shared object must have one authoritative technical specification. Other specifications should reference the authoritative definition, describe only their use of the object, document cross-component impacts, and avoid reproducing a divergent field list.

### OBJ-05 — Reconcile shared-object changes across specifications

When changing a shared object, search every related specification for diagrams, field tables, relationship descriptions, formulas, workflows, actions, permissions, notifications, reports, migration instructions, traceability entries, validation scenarios, and acceptance criteria. The change is incomplete until all dependencies are reconciled.

### OBJ-06 — Use authoring and version objects deliberately

Use separate authoring and immutable version objects when users prepare configuration that is later published. The authoring object carries editable configuration; the version object preserves the configuration effective when published or issued.

### OBJ-07 — Mirror publishable fields on authoring objects

The authoring object should normally contain every user-editable field that will appear on the version object, except the relationship back to the authoring object, Version Number, publication metadata, system-calculated version status, and fields that exist only as immutable publication evidence.

### OBJ-08 — Avoid unnecessary intermediate records

Do not introduce an intermediate submission, revision, proposal, or review object when the operational parent can store the required metadata directly, children can relate directly to it, native audit preserves changes adequately, and the intermediate concept has no independent lifecycle.

### OBJ-09 — Apply a consistent catalogue-object pattern

Reusable governed value catalogues should normally contain:

- **Code** — Text, maximum 100 characters; stable and non-localizable.
- **Name** — Text, maximum 255 characters.
- **Active?** — Yes/No, default `TRUE`.
- **Sort** — Float.

Unless otherwise stated, catalogue objects must be configured as localizable, with the Name field made localizable to support future language translations.

These fields may be declared directly on an independent catalogue or inherited from an approved abstract catalogue parent. Do not declare the same field on both the parent and child.

Use a catalogue object instead of a static dropdown when values require ordering, activation, localization, reuse, relationships, or future administration.

### OBJ-10 — Remove obsolete objects completely

When an object is removed, remove or revise all relationship fields, inverse grids, diagrams, formulas, workflows, actions, notifications, permissions, reports, migration dependencies, validation cases, and acceptance criteria. Mention the removed object only where required for change traceability or migration guidance.

### OBJ-11 — Normalize simple selection fields into catalogue objects

In an implementation-oriented target design, do not retain `Dropdown`, `Governed dropdown`, `Choice`, or similar labels as field types when they describe a single selectable business value. Model the field as an M:1 relationship to a governed catalogue object. Reuse an existing catalogue only when it represents the same semantic domain; otherwise define a new catalogue using the standard composition in OBJ-09.

Propagate the catalogue relationship through every affected authoring object, immutable version, operational snapshot, publish mapping, diagram, rule, migration instruction, and acceptance scenario. Automation and conditional behaviour must compare the catalogue's stable `Code`, not its localizable `Name`.

When allowed values are supplied inline with the consuming field, move them into an initial-values table under the catalogue definition. The seed table must use the same effective column structure as the catalogue's defined fields, including inherited fields and any catalogue-specific fields in addition to `Code`, `Name`, `Active?`, and `Sort`. Repeating inherited fields as seed-data columns does not redeclare them on the child object. Assign stable non-localizable codes, preserve the supplied display labels as names, state activation explicitly, and provide sort values when presentation order matters.

### OBJ-12 — Use an abstract parent for a required catalogue family

When a requirement or established application pattern calls for multiple related catalogues to share one record structure, create a single abstract catalogue parent and declare the standard `Code`, `Name`, `Active?`, and `Sort` fields on that parent. Configure each governed domain as a direct concrete child so it inherits the common fields without duplicating their metadata.

The abstract parent must be non-instantiable: it has no records, seed values, ordinary administration form, or direct relationship consumers. M:1 fields must continue to target the appropriate concrete catalogue child, not the abstract parent. Apply the catalogue inverse rule in REL-07 to those concrete targets.

Do not reparent an externally owned, shared, or semantically unrelated catalogue beneath a solution-specific abstract parent merely for structural consistency. Preserve its authoritative inheritance model unless the owning specification explicitly approves the change.

### OBJ-13 — Keep catalogue child declarations minimal

A concrete catalogue child declares only fields that are additional to the abstract parent's contract. Do not redeclare, shadow, rename, or override inherited `Code`, `Name`, `Active?`, or `Sort` fields on a child. When an existing catalogue has domain-specific fields such as `Description`, retain those fields directly on the child during reparenting.

Before reparenting an existing catalogue, reconcile field identifiers, localization, requiredness, defaults, uniqueness, display-field behavior, permissions, imports, reports, formulas, and integrations. If a child's existing common-field semantics cannot safely match the parent contract, record the conflict and do not force the inheritance change without an explicit design decision.

## 3. Fields, naming, and data types

### FLD-01 — Use precise business names

Use the business term understood by users. Avoid generic terms such as `Request` when the record is specifically a `Supplier Survey`. Keep names consistent across field lists, formulas, workflows, diagrams, permissions, and prose.

### FLD-02 — Separate distinct concepts

Do not combine independently governed values into one field. Separate names from descriptions, distinct roles, distinct parent relationships, base outcomes from overrides, and calculated reasons from override reasons.

### FLD-03 — Avoid unnecessary prefixes

Do not prefix ordinary contextual fields with the object name or a category unless required to resolve genuine ambiguity. Reserve prefixes such as `Answer -` for a coordinated set of mutually exclusive typed answer fields where the prefix improves form clarity.

### FLD-04 — Use question marks consistently for Boolean fields

User-facing Boolean fields should normally use names such as `Active?`, `Review Required?`, or `Is Not Applicable?`. Formula conditions must compare Boolean values with `TRUE` or `FALSE`, not `Yes` or `No`.

### FLD-05 — Choose Date versus Date/Time intentionally

Use **Date** when the business meaning is a calendar date and time-of-day is irrelevant. Use **Date/Time with time zone enabled** when ordering within a day, scheduled execution, user locale, or an event timestamp matters. State explicitly when time-zone support is enabled.

### FLD-06 — Do not duplicate workflow state in custom fields

Do not add custom `State` or `Workflow` fields when the workflow engine already owns that information. Add a business-status field only when it has meaning independent of workflow state.

### FLD-07 — Use explicit entity discriminators when formulas need type information

When logic depends on the concrete subtype of an inherited record, use a governed discriminator field. Do not assume runtime type-inspection functions are available.

### FLD-08 — Specify conditional visibility and requiredness

For every conditionally applicable field, document the controlling field and value, visibility, mandatory status, and whether an old value must be cleared when the condition becomes false.

### FLD-09 — Specify defaulting and editability together

If a field defaults from a related record, state the exact source field, evaluation timing, whether the value is a stored snapshot or continuing calculation, whether override is allowed, and when it becomes read only.

### FLD-10 — Use create-time snapshots for evaluation evidence

Where operational decisions depend on mutable master data, copy the relevant source properties onto the operational record at creation. Make the snapshot fields read only, complete enough to explain the decision, and distinct from later reevaluation against current data.

### FLD-11 — Name display fields according to their function

If an operational object needs a calculated record label, call it `Display Field` when that is the configured Intelex display value. Document its component fields, ordering, separators, and null behaviour.

### FLD-12 — Do not retain unused convenience fields

Remove fields with no remaining business, workflow, calculation, reporting, or integration dependency. Do not preserve fields solely because they appeared in an earlier conceptual model.

## 4. Relationships and grids

### REL-01 — State the relationship type explicitly

Every relationship field must state its source object, field name, target object, M:1, 1:M, or M:N cardinality, requiredness, conditional requiredness, and inverse field or grid where applicable. Do not use `dropdown` as a substitute for identifying an M:1 relationship.

### REL-02 — Model parent grids as inverse relationships

A parent-side 1:M grid should normally be the inverse of the child's existing M:1 field. Do not create a second stored relationship merely to support a grid. Identify both sides explicitly.

This rule applies only when parent-side navigation is part of the design. It does not justify enabling an inverse on a catalogue-targeting M:1 relationship; apply REL-07 to catalogue references.

### REL-03 — Put relationship ownership on the declaring field

Identify the child-side or source-side field that owns the relationship. Treat the parent grid as navigation over that relationship.

### REL-04 — Use M:N only for simultaneous multiple selections

Use M:1 for a single selection and M:N for multiple simultaneous selections. If an M:N association requires business attributes, use a junction object; otherwise use native relationship or map metadata where appropriate.

### REL-05 — Enforce relationship scope

When a child selects a versioned or scoped record, validate that it belongs to the correct parent context. State the scoping rule explicitly.

### REL-06 — Do not require a separate relationship register in target specifications

Field lists should resolve relationship ambiguity directly. Each relationship row should contain enough target, cardinality, inverse, requiredness, and behaviour information to make a separate register unnecessary. A relationship register may still be useful during raw `.ipack` baseline extraction or when the user requests one.

### REL-07 — Disable inverses on catalogue-targeting M:1 relationships

For every M:1 relationship whose target is a catalogue object, leave the Intelex inverse-relationship option disabled. Do not create or expose a catalogue-side consumer field or inverse grid. If usage analysis is required, query or report from the object that declares the M:1 relationship rather than changing the catalogue relationship configuration.

In field tables, state `inverse disabled` explicitly for each catalogue-targeting M:1 relationship. A source-to-target association in a Mermaid diagram represents the declaring M:1 field only and must not be interpreted as an activated inverse relationship.

## 5. Formula and Intelex expression constraints

### FOR-01 — Use only verified Intelex functions

Do not invent SQL-like, programming-language, or generic pseudocode functions. Known constraints include:

- use `ISNULL`, not `ISBLANK`;
- use nested `IF` expressions, not `COALESCE`;
- use an explicit discriminator field, not `TYPEOF`;
- compare Boolean fields with `TRUE` or `FALSE`, not `Yes` or `No`.

If a function is not verified, mark the expression unresolved rather than presenting it as executable Intelex syntax.

### FOR-02 — Reference only real fields

Every field referenced in a formula must exist in the applicable model. Do not refer to conceptual values, prose labels, unmodelled collections, or implied workflow data.

### FOR-03 — Distinguish concatenation from collection joining

Use concatenation for scalar fields and a verified platform JOIN mechanism for values from a relationship grid or collection. Identify the source grid, joined field, ordering, separator, null handling, and encoding requirements.

### FOR-04 — Prefix calculation-support fields consistently

Fields created only to support a larger calculation should use the `[Helper]` prefix. Do not prefix business-facing fields with `[Helper]`, and do not create helper fields without an actual documented dependency.

### FOR-05 — Keep formulas minimal

Do not preserve matched-group details, evaluation-detail strings, configuration-error flags, or diagnostic helpers unless an explicit reporting or operational requirement needs them.

### FOR-06 — Document base and effective calculations separately

Where overrides are supported, keep separate calculated base, override, and effective values. The effective value should use the override only when it is not null.

### FOR-07 — Make null outcomes explicit

If a condition should produce no value, specify `NULL`. Do not substitute an empty string, `No`, `Not Applicable`, or an invented status unless required.

### FOR-08 — Verify calculated relationship support

If a formula is expected to return an M:1 relationship, confirm that the target Intelex environment supports it. Otherwise assign the relationship through an Action Handler.

## 6. Default-value expressions and copying

### DEF-01 — Use default expressions for publication copies

When Publish creates version records, corresponding fields should normally copy from the authoring record through named default-value expressions. Map every target version field to its source authoring field.

### DEF-02 — Do not describe copying generically

Avoid statements such as `copy the configuration`. List the exact copied fields, relationship values, generated child records, and calculated metadata.

### DEF-03 — Distinguish defaults from calculations

A default expression is evaluated when the record is created and creates a stored snapshot. A calculated field continues to derive its value. State which behaviour is intended.

### DEF-04 — Use conditional read-only behaviour for template defaults

When operational fields default from a selected template, populate them from the template and make them read only while it is populated. Allow user entry when no template applies only if requirements permit it.

## 7. Publishing and versioning

### VER-01 — Make published records immutable

Published configuration versions and issued operational snapshots should be read only. Users edit the authoring record and publish a new version.

### VER-02 — Publish the complete configuration graph

Publishing a parent version must create every required child version in the same logical publication transaction.

### VER-03 — Version children from authoring instances

Each published child should retain relationships to its published parent and its originating authoring record where traceability is required.

### VER-04 — Allocate Version Number deterministically

Where required, assign Version Number as one greater than the maximum Version Number in the related versions grid, with the first version equal to 1. Do not create a counter helper without demonstrated need. Require locking or uniqueness enforcement for concurrent publication.

### VER-05 — Maintain one active published version where required

If `Active?` means most recently published, Publish sets the new version to `TRUE`, sets older related versions to `FALSE`, performs both changes atomically, and does not allow manual editing of the field.

### VER-06 — Reference stable authoring identities from configuration

Templates and campaigns should normally reference the stable authoring object when they are intended to use the latest published version at execution time. Resolve and store the exact active version on the generated operational record.

### VER-07 — Keep authoring and version fields synchronized

When adding, renaming, retyping, or removing a publishable field, update the authoring object, version object, Publish mapping, diagrams, validation, and migration instructions.

## 8. Generated child records

### GEN-01 — Make generation idempotent

Any save handler or batch process that creates related records must be safe to retry without duplicates. Define the uniqueness key used to detect existing records.

### GEN-02 — Guard regeneration when the source changes

If a selected source generates child records, prevent the source from being changed while generated children remain. Allow it to change only after deliberate deletion of all generated records, where permitted.

### GEN-03 — Copy governed source values completely

When generating child records, copy every required business field and relationship rather than only the display label.

### GEN-04 — Specify trigger timing precisely

State whether generation occurs on initial save, Create, Update, through an Action Handler, through Publish, through a scheduled service, or through a separate batch. `Automatically` is insufficient.

## 9. Action Handlers, services, and batch processes

### AUT-01 — Assign logic to the correct platform mechanism

Explicitly distinguish default-value expressions, calculated fields, Action Handlers, workflow actions, Event Services, scheduled batch processes, and the native reminder engine. Do not assign the same responsibility ambiguously to multiple mechanisms.

### AUT-02 — Use Action Handlers for persisted actor and timestamp metadata

When governed values change, an Update Action Handler may stamp the authenticated actor and current server time with timezone support. Metadata-only changes must not retrigger it recursively.

### AUT-03 — Document watched fields explicitly

An Action Handler triggered by field changes must list every watched scalar and relationship field. Do not use vague phrases such as `when the answer changes`.

### AUT-04 — Use create handlers for initial related records

When an initial operational record must create a related record, specify the trigger, uniqueness check, record linking, inverse relationship update, and rollback or retry behaviour.

### AUT-05 — Keep batch logic out of transition-only workflow buttons

If a separate batch performs issuance or generation, the workflow button should contain only final validation, the stage transition, and strictly transition-bound metadata. Do not duplicate the batch's ordered behaviour in the button.

### AUT-06 — Specify hidden actions completely

For hidden actions, document the invoking service or batch, authorization context, preconditions, validation errors, transition, and idempotency.

### AUT-07 — Specify scheduler cadence and selection criteria

For Event Services or batches, document cadence, eligible stage, date/time comparison, concurrency, retry behaviour, and error ownership.

## 10. Workflow modelling

### WF-01 — Separate workflow stages from termination states

Completed, Cancelled, Closed, Withdrawn, and similar terminal results should not be modelled as ordinary stages unless the platform configuration specifically requires it. Document stages and termination states separately.

### WF-02 — Do not add an Exception stage by default

If failure occurs before an operational record can enter its working stage, keep it with the owning batch, run, or configuration process. Use native diagnostic evidence and retry-safe continuation unless requirements establish a genuine business exception workflow.

### WF-03 — Identify the responsible person for every stage

State whether responsibility belongs to a named Owner, current eligible role members, or another governed principal. Do not imply a service becomes the responsible person merely because it performs automation.

### WF-04 — Treat role membership as current at action time

When responsibility is role-based, validate current eligible membership when the action is performed and preserve the individual actor in workflow or audit history.

### WF-05 — List only real workflow actions

The ordered-actions table must contain exactly the configured actions. Ordinary Save, background processing, Event Service activity, and native persistence are not user workflow actions.

### WF-06 — Use business-specific action names

Action names should describe the result understood by users or automation. Avoid generic or misleading names.

### WF-07 — Define action ordering precisely

For each action, document actor, locking or concurrency check, authorization recheck, validation, persisted changes, related-record effects, transition or termination, notification, and failure behaviour.

### WF-08 — Validate before transitioning

If a date/time or configuration condition prevents transition, throw the error before changing stage. Specify the exact condition and user-facing error intent.

### WF-09 — Model cancellation cascades explicitly

When parent cancellation affects children, identify eligible child states, preserve completed or already-cancelled children, stop reminders and actions, preserve answers and audit history, terminate the parent only after the cascade succeeds, and define partial-failure retry behaviour.

### WF-10 — Avoid custom workflow fields

Rely on platform-managed workflow identity and current stage unless a separate business field is independently required.

## 11. Audit, evidence, and direct editing

### AUD-01 — Enable audit on every relevant mutable object

When users directly edit governed data, enable audit trails on the owning object, relevant children, and audited relationships where supported.

### AUD-02 — Do not add proposal or review machinery without a business need

If authorized users may make changes directly, do not introduce change proposals, deferred writeback, mandatory review, intermediate snapshots, or artificial approval workflows. Use security, field allowlists, concurrency controls, and audit trails.

### AUD-03 — Preserve evidence without duplicating it

Use native workflow, audit, execution, reminder, and notification evidence where sufficient. Add a custom evidence object only when native evidence cannot satisfy a named retention, reporting, integration, or regulatory requirement.

### AUD-04 — Preserve historical operational configuration

Store the exact version and create-time values used by an operational record. Do not let later master-data or configuration changes rewrite historical operational meaning.

### AUD-05 — Prefer one audited answer record over artificial revisions

When requirements call for correction rather than parallel submissions, maintain one answer per work item and question version, reopen the same answer on Return, and use audit history to preserve previous values. Do not add an iteration or revision object unless the evidence requirement demands it.

## 12. Audience and eligibility rules

### ELG-01 — Use campaign-specific rules for campaign-specific eligibility

Do not create a global eligibility object when eligibility is naturally expressed through the campaign's existing audience-rule model.

### ELG-02 — Snapshot every property used in selection

If a mutable property can participate in an audience rule, include a corresponding create-time snapshot field on the audience entry, default it from the related record, and make it read only.

### ELG-03 — Keep selection logic reproducible

Describe candidate population, row comparisons, AND behaviour within groups, OR behaviour across groups, no-rule behaviour, base outcome, override outcome, effective outcome, and evaluation timestamp.

### ELG-04 — Align reason logic with outcome logic

If a reason is populated only for a particular outcome, return `NULL` for the other outcomes. Do not generate a reason that contradicts the calculated result.

### ELG-05 — Keep overrides explicit and auditable

Use separate override fields and require a reason where appropriate. Do not overwrite the original calculated outcome with the override.

## 13. Recurrence and obligation patterns

### REC-01 — Share recurrence configuration across modules

Use one Recurrence Definition catalogue when multiple modules use the same concept. Filter selectable values by context rather than duplicating the object.

### REC-02 — Configure recurrence display metadata explicitly

When a text field contains an Intelex recurrence expression, document the required `displayas="recurrence"` property.

### REC-03 — Model one-time recurrence explicitly when obligations require it

If one-time and recurring work share an obligation model, a governed `One Time` recurrence value may be used and its next-occurrence calculation should return `NULL`. This is a design pattern, not a universal requirement.

### REC-04 — Avoid redundant period fields

Do not add Period Start, Period End, Occurrence Number, or similar fields unless required for calculation, reporting, integration, or evidence.

## 14. Snapshot fields

### SNP-01 — Use snapshots only to preserve operational evidence

A snapshot field must have a specific historical, reporting, or troubleshooting purpose. Do not add generic Configuration Snapshot or schema-version fields automatically.

### SNP-02 — Document every snapshot component

For a calculated snapshot, list every source field and grid field. The formula must use those exact modelled fields.

### SNP-03 — Make snapshot formatting deterministic

Specify label ordering, scalar concatenation, grid JOIN ordering, separators and output format, null handling, timezone serialization, encoding, and maximum field capacity.

### SNP-04 — Freeze stored snapshots

Generate a stored operational snapshot once at the defined lifecycle point and keep it immutable afterward.

## 15. Specification-writing rules

### DOC-01 — Treat field tables as the primary implementation contract

Every field row should state exact display name, type, relationship target and cardinality, requiredness, default or formula, editability, conditional visibility, trigger or owning automation, and lifecycle restrictions. Resolve ambiguity in the field list rather than deferring it to a separate register.

### DOC-02 — Do not present pseudocode as an Intelex formula

Clearly distinguish explanatory logic from deployable expressions. If executable syntax is unknown, state the logic declaratively and mark the platform expression for confirmation.

### DOC-03 — Use exact platform mechanism names

Use terms such as Action Handler, Event Service, workflow stage, termination state, default-value expression, calculated field, M:1 relationship, 1:M inverse grid, and M:N relationship when those mechanisms are known.

### DOC-04 — State defaults and restrictions together

A default without its editability rule is incomplete. A read-only rule without its population mechanism is incomplete.

### DOC-05 — Separate current design from change history

Current object and field sections should describe the final target cleanly. Removed elements belong only in requirement history, change summary, migration guidance, or validation confirming absence.

### DOC-06 — Propagate every revision through the deliverable

Inspect and update requirements, inventory, diagrams, field tables, formulas, publication rules, automation, workflow, permissions, notifications, reports, change summary, traceability, deployment, migration, validation, and acceptance criteria.

### DOC-07 — Record supersession explicitly

When later feedback replaces an earlier requirement, mark the earlier requirement as superseded or refined. Do not leave contradictory requirements simultaneously active.

### DOC-08 — Use consistent singular object names

Use singular object and relationship-target names unless the actual Intelex display name is plural. Use plural names for collection grids.

### DOC-09 — Make assumptions visible but minimal

Do not add defensive objects or fields for hypothetical failures when the user directs that configuration may be assumed clean. Document the assumption and omit the unnecessary design.

### DOC-10 — Preserve user terminology and rename completely

After a rename, search the entire specification for the old term, including diagrams and formulas. Correct inconsistencies that could create implementation ambiguity.

### DOC-11 — Document catalogue inheritance once and completely

When a catalogue family uses an abstract parent, show the parent fields once and draw direct inheritance edges to every concrete catalogue child. In the object inventory, identify the abstract object as non-instantiable and list it as the direct parent of each child. In field sections, define common fields only on the abstract parent; for each child, distinguish inherited fields from directly declared child-specific fields.

Seed-data tables may repeat the inherited columns so they remain usable for configuration or import. State explicitly that this tabular repetition represents values of inherited fields and does not duplicate the field declarations. If shared catalogues remain outside the family, identify their separate authority and do not imply that they inherit from the local abstract parent.

## 16. Validation rules

### VAL-01 — Validate formula vocabulary

Search proposed formulas for unsupported or unverified functions and Boolean comparisons, including `TYPEOF`, `COALESCE`, `ISBLANK`, and comparisons to `Yes` or `No`.

### VAL-02 — Validate formula dependencies

Confirm every referenced field exists, has the expected type, is available from the formula's object context, and is populated before evaluation.

### VAL-03 — Validate inverse grids

Confirm each 1:M grid has exactly one corresponding child-side relationship and creates no duplicate storage.

### VAL-04 — Validate version atomicity

Confirm Publish creates the complete version graph and active-version update or leaves no partial published result.

### VAL-05 — Validate uniqueness and retry safety

Define and test uniqueness for operational records, version numbers, generated children, answers, audience entries, and notifications where deduplication is required.

### VAL-06 — Validate handler recursion

Confirm metadata handlers do not retrigger themselves and that relationship-field changes invoke the expected handler.

### VAL-07 — Validate native evidence before removing custom evidence objects

Before migration removes a custom Event, Reminder Rule, or Revision object, confirm native facilities retain sufficient actor, timestamp, prior and new value, reason, outcome, execution-failure, and notification-delivery evidence.

### VAL-08 — Validate permissions at direct-access boundaries

Test forms, direct URLs, exports, search, attachments, children, and relationship navigation. Parent access must not implicitly broaden entity or confidentiality scope.

### VAL-09 — Validate date and timezone migration

When changing Date/Time fields to Date or enabling timezone support, define the source timezone, conversion rule, treatment of existing values, and scheduler or reporting effects.

### VAL-10 — Validate removal by absence

For removed objects and fields, confirm that the element is absent and that no relationship, formula, workflow, report, or notification still depends on it.

### VAL-11 — Validate catalogue normalization and inverse suppression

Search field tables for `Dropdown`, `Governed dropdown`, `Choice`, or equivalent pseudo-types and confirm that each single-selection business domain has been resolved to an M:1 catalogue relationship. Confirm every referenced catalogue is defined or points to an identified shared authority, inline allowed values have been moved to a seed table matching the catalogue field structure, rules use stable codes, and every catalogue-targeting M:1 field explicitly states `inverse disabled`. Confirm that no catalogue object or form defines a consumer-side inverse field or grid.

### VAL-12 — Validate catalogue inheritance

For every proposed abstract catalogue family, confirm that:

- the abstract parent is non-instantiable and has no seed records, direct M:1 consumers, or ordinary administration form;
- `Code`, `Name`, `Active?`, and `Sort` are declared once on the parent and are not redeclared or shadowed on a child;
- every intended concrete catalogue has exactly one direct parent and every direct inheritance edge is shown;
- child-specific fields remain declared on the correct child after reparenting;
- relationships continue to target concrete children and retain the required inverse configuration;
- externally owned or unrelated catalogues have not been absorbed into the family without approval;
- inheritance introduces no missing parent, conflicting declaration, multiple-parent ambiguity, or cycle; and
- the target tenant's uniqueness behavior for inherited `Code` is understood. If codes can repeat between concrete catalogues, validate child-scoped uniqueness or require approved globally distinct codes before loading seed data.

## 17. Project-specific guidance

Do not automatically generalize decisions such as:

- exact workflow stage or action sets;
- a specific Event Service cadence;
- exact recurrence seed values;
- every task creating an obligation;
- direct profile editing without review;
- one answer record without response iterations;
- exact entity-discriminator values;
- an assumption that configuration is always clean.

Extract the reusable modelling pattern, but apply the concrete decision only when current requirements support it.

## 18. Final design review

Before completing a target design or revision:

1. Confirm native platform capabilities were considered before custom objects.
2. Verify formula syntax and every formula dependency.
3. Check authoring/version mirroring and Publish mappings.
4. Confirm inverse grids reuse child-side relationships.
5. Distinguish stages, termination states, actions, handlers, services, and batches.
6. Reconcile shared-object changes across every affected specification.
7. Search for removed or renamed elements throughout the deliverable.
8. Verify uniqueness, retry safety, version atomicity, handler recursion, timezone behaviour, and permission boundaries.
9. Confirm field tables contain enough detail to serve as the implementation contract.
10. Confirm project decisions have not been presented as universal Intelex constraints.
11. Confirm simple selection domains use governed catalogue relationships with complete seed-data definitions where values were supplied.
12. Confirm every catalogue-targeting M:1 relationship has its inverse disabled and no catalogue-side consumer grid is proposed.
13. When catalogue inheritance is required, confirm the abstract parent owns the common fields exactly once, concrete children retain only their additional fields, shared catalogues remain under their authoritative parents, and inherited Code uniqueness is validated.
