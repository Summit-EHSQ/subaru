"""Revise the workshop draft to reflect the participant's Essential fit review brief."""
import json
from pathlib import Path

TARGET = Path(__file__).resolve().parents[1] / 'output/pdf/incident-management-workshop-agenda.json'


def row(time, session, outcome='', kind='normal'):
    return dict(time=time, session=session, outcome=outcome, kind=kind)


data = {
    'workshop_label': 'ESSENTIAL PROCESS REVIEW | DRAFT FOR REVIEW',
    'title': 'SIA Incident Management',
    'subtitle': 'Two-day online Essential demonstration and process fit workshop',
    'organization': 'SIA',
    'footer_title': 'Incident Management Workshop | Draft',
    'purpose': 'Introduce Essential and assess how closely its current incident processes meet SIA needs, in priority order: Injury/Illness, Environmental Incident, Property Damage, Notice of Violation, and Near Miss. Agree where the standard process can be adopted, identify minor workflow and field changes, and capture OHM/Resolver API and reporting requirements.',
    'daily_format': 'Day 1: 4 hours total, including two 15-minute breaks (3 hours 30 minutes working time). Day 2: 3 hours 30 minutes total, including two 15-minute breaks (3 hours working time). Times show hours:minutes elapsed from the daily start; 00:00 resets each day. Dates, start times, time zone, and online platform are to be confirmed. No lunch is scheduled within these half-day windows. Use a live Essential demonstration, screen sharing, and a shared fit/gap and decision log.',
    'scope': 'Review all five incident types in the stated priority order. For each, compare intake, investigation, follow-up, and closure with SIA practice. Include client-configured OHM and Resolver APIs, minor form/workflow/field changes, hours worked, and overall incident reporting. Capture larger changes separately for impact review.',
    'days': [
        {
            'label': 'DAY 1 | DATE TO BE CONFIRMED | DRAFT',
            'title': 'Essential, Injury/Illness and Environment',
            'subtitle': '4 hours | Two 15-minute breaks | Elapsed times from daily start',
            'summary': 'Introduce Essential; compare Injury/Illness and Environmental Incident with SIA processes. Define OHM and Resolver feed requirements and minor changes.',
            'rows': [
                row('00:00-00:10', 'Opening and priorities', 'Confirm workshop outputs, SIA decision owners, and the five-topic priority order. Agree how process matches, gaps, decisions, and actions will be recorded.'),
                row('00:10-00:35', 'Introduction to Essential', 'Review navigation, incident records, role-based tasks, investigation, follow-up, and closure. Confirm the Essential baseline being demonstrated and the comparison approach for SIA.'),
                row('00:35-01:20', '1. Injury/Illness: Essential vs SIA', 'Walk through the current Essential process using an SIA scenario. Compare first report, investigation, follow-up, and closure; confirm matches and identify minor workflow and field changes, including fields needed for OHM data.'),
                row('01:20-01:35', 'Screen break', kind='break'),
                row('01:35-02:20', 'Injury/Illness: OHM API and changes', 'Define requirements for the client-configured API sending OHM incident records to Intelex. Confirm first-report-of-injury creation and investigation/follow-up triggers; review field mapping, source identifiers, duplicate prevention, error handling, and access. Agree minor changes and owners.'),
                row('02:20-03:00', '2. Environmental Incident: Essential vs SIA', 'Walk through the current Essential environmental process using an SIA scenario. Compare first report, investigation, follow-up, and closure; confirm matches and identify minor workflow and field changes needed for SIA and the Resolver feed.'),
                row('03:00-03:15', 'Screen break', kind='break'),
                row('03:15-03:45', 'Environmental Incident: Resolver API', 'Define requirements for the client-configured API sending Resolver environmental incident records to Intelex. Confirm first-report creation and investigation/follow-up triggers; review field mapping, source identifiers, duplicate prevention, error handling, and ownership of minor changes.'),
                row('03:45-04:00', 'Day 1 decisions and closeout', 'Confirm process matches, gaps, and agreed changes. Review open questions, actions, owners, and dependencies; assign any OHM/Resolver mapping follow-up and preparation needed for Day 2.'),
            ],
        },
        {
            'label': 'DAY 2 | DATE TO BE CONFIRMED | DRAFT',
            'title': 'Remaining incident types and reporting',
            'subtitle': '3.5 hours | Two 15-minute breaks | Elapsed times from daily start',
            'summary': 'Compare Property Damage, Notice of Violation, and Near Miss in order. Confirm hours-worked and overall incident reporting requirements; agree next steps.',
            'rows': [
                row('00:00-00:10', 'Recap and decision priorities', 'Confirm Day 1 outcomes and open dependencies. Agree decisions needed today and preserve the remaining topic priority order.'),
                row('00:10-00:50', '3. Property Damage: Essential vs SIA', 'Walk through the current Essential process and compare SIA intake, damage details, investigation, follow-up, and closure. Confirm process matches, required fields, responsible roles, and minor workflow changes.'),
                row('00:50-01:25', '4. Notice of Violation: Essential vs SIA', 'Walk through the current Essential process and compare SIA notice capture, ownership, response deadlines, investigation, follow-up, and closure evidence. Agree process matches and required minor field/workflow changes.'),
                row('01:25-01:40', 'Screen break', kind='break'),
                row('01:40-02:15', '5. Near Miss: Essential vs SIA', 'Walk through the current Essential process and compare SIA reporting, classification, investigation, follow-up, and closure. Confirm required roles, process matches, and minor field/workflow changes.'),
                row('02:15-02:40', 'Reporting: hours worked', 'Define the hours-worked source, data owner, reporting frequency, reporting period, and location/worker coverage. Agree entry or import needs, validation and correction rules, and alignment with incident measures where hours are used.'),
                row('02:40-02:55', 'Screen break', kind='break'),
                row('02:55-03:15', 'Reporting: overall incident data', 'Review Essential reporting against SIA needs across all five incident types. Confirm priority measures, definitions, filters, trends, open/overdue follow-up views, audiences, and exports; identify gaps and owners for sample reports.'),
                row('03:15-03:30', 'Cross-topic completion and next steps', 'Agree the consolidated fit/gap record, minor change list, API/reporting follow-ups, and unresolved decisions. Confirm actions, owners, target dates, dependencies, and the next review of the workshop outputs.'),
            ],
        },
    ],
    'closeout': {
        'expected_outputs': 'A fit/gap comparison for each of the five incident types, in priority order; agreed adoption of Essential steps; a prioritized minor workflow/field change list; OHM and Resolver API requirements, mapping actions, and first-report/workflow triggers; hours-worked and overall incident reporting requirements; a decision/action log with owners, target dates, and dependencies. Mark each requirement as confirmed, provisional, or unresolved.',
        'participants': 'Core: SIA incident process owner, safety/EHS representatives, operational investigators or supervisors, Essential demonstrator/Intelex solution lead, facilitator, and scribe. Day 1 targeted: clinic/OHM owner, environmental/Resolver owner, client API/integration team, and data/access representatives. Day 2 targeted: Property Damage, Notice of Violation, and Near Miss process owners; hours-worked data owner; reporting lead. Ensure decision makers attend their sessions or nominate delegates.',
        'preparation': 'Prepare the current Essential demonstration environment and one anonymized SIA scenario for each incident type. Share current SIA forms, workflows, roles, and follow-up/closure requirements. Bring OHM and Resolver sample payloads or field lists, source identifiers, API constraints, and integration owners. Provide hours-worked source examples, reporting periods, sample incident reports, and desired measures. Confirm dates, start times, time zone, platform, and shared fit/gap log; test online access and screen sharing.',
        'scope_control': 'Use the updated SIA brief as the workshop baseline: client-configured APIs send OHM Injury/Illness and Resolver Environmental Incident records to Intelex, which creates first reports and starts investigation/follow-up workflows. Focus on Essential adoption and minor form/workflow/field changes; record larger changes for impact review. Reconcile the earlier proposed ADR-064 with this OHM/API direction when documenting outcomes. Address ADR-091 incident-to-NCR/CAR linkage only where a demonstrated process requires it; record unresolved linkage questions without expanding this workshop into a separate application redesign.',
    },
}

for day, total in zip(data['days'], [240, 210]):
    end = 0
    breaks = []
    for item in day['rows']:
        start_text, end_text = item['time'].split('-')
        start, finish = [int(t.split(':')[0]) * 60 + int(t.split(':')[1]) for t in (start_text, end_text)]
        assert start == end and finish > start
        end = finish
        if item['kind'] == 'break':
            breaks.append(finish - start)
    assert end == total and breaks == [15, 15]

data['daily_format'] = (
    'Session 1: 9:30 a.m.-1:30 p.m. EST (4 hours total; 3 hours 30 minutes working time). '
    'Session 2: 9:30 a.m.-1:00 p.m. EST (3 hours 30 minutes total; 3 hours working time). '
    'Each session includes two 15-minute breaks. Agenda tables use the 24-hour clock; all times are EST. '
    'Dates and the online platform are to be confirmed. No lunch is scheduled within these half-day windows. '
    'Use a live Essential demonstration, screen sharing, and a shared fit/gap and decision log.'
)
data['closeout']['preparation'] = data['closeout']['preparation'].replace(
    'Confirm dates, start times, time zone, platform, and shared fit/gap log;',
    'Confirm dates, platform, participant availability for the stated EST times, and shared fit/gap log;'
)

for number, (day, total) in enumerate(zip(data['days'], [240, 210]), 1):
    day['label'] = f'SESSION {number} | DATE TO BE CONFIRMED | DRAFT'
    finish_label = '1:30 p.m.' if number == 1 else '1:00 p.m.'
    day['subtitle'] = f'9:30 a.m.-{finish_label} EST | Two 15-minute breaks | Table times: 24-hour clock'
    for item in day['rows']:
        clock_times = []
        for elapsed in item['time'].split('-'):
            hours, minutes = map(int, elapsed.split(':'))
            actual = 9 * 60 + 30 + hours * 60 + minutes
            clock_times.append(f'{actual // 60:02d}:{actual % 60:02d}')
        item['time'] = '-'.join(clock_times)
    assert day['rows'][0]['time'].startswith('09:30-')
    assert day['rows'][-1]['time'].endswith('13:30' if number == 1 else '13:00')

TARGET.write_text(json.dumps(data, indent=2) + '\n', encoding='utf-8')
print('Validated: 09:30-13:30 / 09:30-13:00 EST; two 15-minute breaks each.')
