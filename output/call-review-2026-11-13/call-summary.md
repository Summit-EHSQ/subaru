# Call Summary: Supplier Integrations and Go-Live Testing

Meeting: Thursday, November 12, 2026, at 1:00 AM ET (user-confirmed). Prepared: 2026-11-13. Source: [supplied transcript](sources/call-transcript.txt), 00:00–36:33, with [meeting metadata clarification](sources/meeting-context.md). Timestamps below are elapsed positions within the call, not clock times.

## Executive Summary

The integration team confirmed that BOMEX and PartsMaster data are already combined upstream. Intelex can receive an early part record and later enrichment rather than reconcile two independent part feeds. The immediate dependency is obtaining the correct parts-consumption/PPM payload and populated PartsMaster examples so Summit can finish receiving dictionaries, build tables, and provide Postman examples.

The second part of the call addressed Phase 1 test readiness and communication. Dave reported that document-control and inspection configuration is now in the test environment. Guided testing was arranged, with document control first because of its higher rework risk. Inspection confidentiality remains an open configuration question. SIA asked Summit to communicate delays and revised timelines promptly.

## Decisions and Confirmed Direction

| Topic | Decision or confirmed direction | Evidence |
|---|---|---|
| Consumption integration | Use the scoped flat custom Intelex receiving object and REST API to receive consumption data for scorecard metrics. The exact PPM source call, schema, and delivery frequency still need confirmation. | 01:16–03:13, 05:19–06:42 |
| Part integration boundary | Reuse SIA's existing upstream consolidation: create the Intelex part primarily from BOMEX, then enrich the same part when PartsMaster data becomes available. | 19:48–21:18 |
| Technical working session | Review BOMEX, PartsMaster and PPM sample API calls with the people implementing the integrations. Final discussion selects Monday the 23rd, 11:00–12:00 in place of the earlier 15:30 suggestion. | 09:00–10:38, 21:29–22:13 |
| Business review | Internal supplier-management, NCR, and scorecard users will review the expected field list; suppliers are not the intended reviewers. Allow one week and continue integration work during that review. | 22:22–24:26 |
| Guided testing order | Test document control first, then inspections. Address audit implications in the inspection session and decide afterward whether a separate audit session is needed. Invite Jillian if available without moving the sessions around her availability. | 28:03–31:50, 33:01–34:41 |
| Inspection changes | Joel is comfortable making configuration changes during testing, provided existing inspection checklists are preserved. No final decision was made to remove the confidential feature. | 27:28–27:48, 30:20–30:43 |
| Same-day meeting | Cancel the separately scheduled 13:30 meeting because the issues it was intended to cover were addressed in this call. | 34:43–34:59 |
| Change-order routing | Emma can route the change order first to Rick, then the VP, then Matt Roberts for Summit's signature. This is routing agreement, not evidence of signatures. | 35:05–35:23 |

With the meeting date confirmed, the integration session is Monday, November 23, 2026, 11:00 AM–12:00 PM. Its final 11:00 slot is not explicitly restated with a timezone; Eastern time was used for the earlier proposal, so verify the invite. Dave initially mentioned 45 minutes, then accepted the one-hour slot. Testing-session times below likewise reflect the transcript's stated clock times. Use the invitations as the calendar authority.

## Action Register

“Owner” distinguishes explicit commitments from suggested routing. No new invitations, messages, or configuration changes were executed as part of preparing this summary.

| # | Action | Owner | Timing / dependency | State supported by the call | Evidence |
|---|---|---|---|---|---|
| A1 | Identify the legacy PPM/parts-consumption call and send its dictionary and/or populated sample. | Giridhar Gani and integration team | Ideally end of day Friday, November 13, 2026 | Agreed; source detail not yet supplied in the transcript | 05:55–06:06, 08:37–08:57, 21:41–21:59, 24:34–24:41 |
| A2 | Confirm PartsMaster attributes and send populated samples for part classification, supplier-code changes, and destination/consignee-code changes. Resolve boolean versus classification terminology. | Giridhar's team, including SundaraPandiyan and Govindarajan | Requested with the November 13 inputs; before final sample requests | Confirmation outstanding | 16:35–19:39, 21:41–21:59 |
| A3 | Analyze PPM, draft its Intelex receiving dictionary, and define the intended supplier-profile/scorecard linkage. | Dave McLean | Monday, November 16, 2026, dependent on A1 | Planned | 06:06–06:42, 08:37–08:53 |
| A4 | Build receiving tables/endpoints and prepare Postman examples for BOMEX, PartsMaster and PPM, including dependent parent/child calls where needed. | Dave / Summit implementation team | Week of November 16; sample collections targeted for Friday, November 20, 2026; dependent on A1–A3 | Planned; builder not named | 06:42–08:53, 21:41–22:13 |
| A5 | Distribute the technical integration-session invitation to the actual implementers. | Amanda Raver, Joel Frick and Rick Redman | Before Monday, November 23, 2026, 11:00–12:00 | Dave reports the invite was sent to these three; onward forwarding not confirmed | 09:40–10:38, 21:29–21:41 |
| A6 | Review sample calls together and assess required adaptations to the existing integration. | Dave and Giridhar's implementation team | Technical working session on November 23, 2026 | Planned; “plug-and-play” is not established | 21:59–22:13 |
| A7 | Send the consolidated field list for business review, distribute it to internal subject-matter experts, and collect gaps or requested changes. | Dave prepares; Joel, Rick and Amanda coordinate internal distribution; reviewer names to be confirmed | After dictionaries are drafted; one-week review; non-blocking | Planned | 22:22–24:26 |
| A8 | Begin reviewing document control against the loaded hierarchy/parameters and correct document assignments as needed. | Eric; Dave supports questions | Test environment reported ready during the call; no completion date agreed | Dave says existing documents were temporarily set to associate level; review not shown complete | 25:45–26:15 |
| A9 | Conduct guided document-control testing with Eric, Scott and the relevant team. | Dave facilitates; Emma schedules | Friday, November 13, 2026, 13:30–14:30 | Emma reports invitation sent to Eric and Scott | 28:34–31:04, 31:50–32:02 |
| A10 | Conduct guided inspection testing, evaluate confidentiality/visibility overlap, and preserve checklists during changes. | Dave / Summit and SIA inspection users; Joel/Rick coordinate participants | Friday, November 13, 2026, from 14:30; approximately one hour discussed | Emma reports both testing invitations sent; SIA to forward inspection invite | 27:28–27:48, 31:30–31:50, 33:01 |
| A11 | Assess audit-management implications during the inspection session; arrange a separate follow-up only if needed. | Dave and inspection/audit users | At the end of inspection testing | Agreed conditional follow-up | 33:22–34:22 |
| A12 | Include Jillian in testing if she is available, without rescheduling around her. | Emma, by scheduling context | With the testing invitations | Requested; attendance unconfirmed | 34:22–34:41 |
| A13 | Cancel the existing same-day 13:30 meeting. | Emma, by scheduling context | November 12, 2026, following this call | Rick agrees cancellation; calendar execution not verified | 34:43–34:59 |
| A14 | Route the change order Rick → VP → Matt Roberts. | Emma Lister | No date stated | Routing agreed; execution/signatures not verified | 35:05–35:23 |
| A15 | Communicate delays, causes, and revised delivery timing promptly. | Summit delivery team; Dave and Emma are the discussion leads | Ongoing | Explicit SIA expectation | 25:09–25:42, 32:08–32:26 |
| A16 | Discuss a tighter communication cadence and return to SIA with a proposal. Consider 15-minute stand-ups two or three times weekly with relevant technical contributors. | Dave and Emma | Internal discussion requested for the afternoon of November 12, 2026; response requested that day | Proposal to discuss, not an approved recurring schedule | 35:30–36:27 |

## Open Questions and Risks

- **PPM definition:** Which legacy call contains the actual consumption data? What is its row grain, quantity/cost content, supplier/facility key, reporting period, and delivery cadence? The call provides no payload from which to infer these.
- **PartsMaster contract:** Participants move from “two booleans” to classification values and code changes. Destination and consignee terminology also varies. Confirm the actual field paths, types, and populated values before freezing the model. [16:35–19:39.]
- **Business coverage:** Reproducing IntelliQuest's existing interface may reproduce its gaps. The internal field-list review is intended to catch those. [22:22–24:26.]
- **API compatibility:** Sample requests must establish how the destination handles parent/child dependencies; the current IntelliQuest payload cannot be assumed directly reusable. [06:42–08:35.]
- **Inspection security:** “Confidential” may overlap with visibility classification. Removing it was an example of a potential outcome, not an agreed change. Guided testing must resolve effective access. [26:24–27:48, 30:20–30:43.]
- **Document-control risk:** Dave identifies it as the more complex configuration and higher rework risk, which is why it is tested first. Associate-level assignment of existing documents is temporary review setup, not a permanent default policy. [25:45–26:15, 29:28–30:43.]
- **Communication:** SIA's principal concern is lack of delivery-status detail, especially on the hierarchy upload. Clear notice of delay and revised dates is required; email versus Teams and the new meeting cadence remain undecided. [25:09–25:42, 32:08–32:26, 35:30–36:27.]

## ADR Recommendations

Read the [ADR reconciliation plan](adr-reconciliation-plan.md) before the full drafts. It accounts for all 115 existing ADR files and all five grounded candidates.

- **Revise ADR-062:** retain one canonical part and move source consolidation to the existing upstream integration layer. The revised proposal leaves source field details and the isolated API-component boundary explicit.
- **Add ADR-118:** receive parts-consumption data through a flat REST-fed dataset, preserving ADR-058's scorecard semantics and snapshot controls.
- **Clarify before drafting a security change:** determine how inspection confidentiality relates to visibility classification and which internal versus supplier record types are affected.
- **Retain ADR-030:** parent/child request adaptation is already accommodated by its batch-versus-individual-call decision boundary.

The repository's current API technical specification intentionally isolates intake objects from existing operational objects. The call's anticipated supplier/profile and part linkage does not silently authorize changing that specification. This is recorded as a scope clarification in the reconciliation plan.
