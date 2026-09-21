from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "SIA_Supplier_Quality_Design_Workshop_Agenda_Draft.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

FONT_DIR = Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("AgendaSans", str(FONT_DIR / "arial.ttf")))
pdfmetrics.registerFont(TTFont("AgendaSans-Bold", str(FONT_DIR / "arialbd.ttf")))

NAVY = colors.HexColor("#17324D")
TEAL = colors.HexColor("#007F83")
GOLD = colors.HexColor("#D9A441")
MUTED = colors.HexColor("#617181")
PALE = colors.HexColor("#F5F7F9")
PALE_TEAL = colors.HexColor("#EEF5F5")
BORDER = colors.HexColor("#CBD6DD")
WHITE = colors.white

PAGE_W, PAGE_H = letter
LEFT = 52.8
RIGHT = 48.0
CONTENT_W = PAGE_W - LEFT - RIGHT


def style(name, size, leading=None, font="AgendaSans", color=NAVY, **kwargs):
    return ParagraphStyle(
        name,
        fontName=font,
        fontSize=size,
        leading=leading or size * 1.25,
        textColor=color,
        alignment=TA_LEFT,
        spaceAfter=0,
        spaceBefore=0,
        **kwargs,
    )


BODY = style("body", 8.8, 12.2)
BODY_SMALL = style("body-small", 7.1, 9.0)
BODY_BOX = style("body-box", 8.5, 12.0)
SECTION = style("section", 12, 14.5, font="AgendaSans-Bold")
EYEBROW = style("eyebrow", 8.5, 10, font="AgendaSans-Bold", color=TEAL)
TITLE = style("title", 24, 29, font="AgendaSans-Bold")
DAY_TITLE = style("day-title", 18, 21.5, font="AgendaSans-Bold")
SUBTITLE = style("subtitle", 10.8, 14, color=MUTED)
TABLE_HEAD = style("table-head", 7.6, 9, font="AgendaSans-Bold", color=WHITE)
TABLE_TIME = style("table-time", 7.2, 9, font="AgendaSans-Bold")
TABLE_SESSION = style("table-session", 7.4, 9.2, font="AgendaSans-Bold")
TABLE_OUTCOME = style("table-outcome", 6.9, 8.7)
BOX_HEAD = style("box-head", 7.8, 9.5, font="AgendaSans-Bold", color=WHITE)


def p(text, st=BODY):
    return Paragraph(text, st)


def footer(c, page_num):
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.7)
    c.line(46.8, 34.6, 565.2, 34.6)
    c.setFont("AgendaSans", 7)
    c.setFillColor(MUTED)
    c.drawString(46.8, 21.0, "Summit EHSQ Inc.  |  SIA Supplier Quality Design Workshop")
    c.drawRightString(565.2, 21.0, f"Page {page_num}")


def draw_para(c, text, st, x, y_top, width, height=200):
    para = p(text, st)
    _, h = para.wrap(width, height)
    para.drawOn(c, x, y_top - h)
    return y_top - h


def draw_page_header(c, eyebrow, title, subtitle=None):
    y = PAGE_H - 49.8
    y = draw_para(c, eyebrow.upper(), EYEBROW, LEFT, y, CONTENT_W)
    y -= 8
    y = draw_para(c, title, DAY_TITLE, LEFT, y, CONTENT_W)
    if subtitle:
        y -= 4
        y = draw_para(c, subtitle, SUBTITLE, LEFT, y, CONTENT_W)
    return y


def agenda_table(c, top, rows):
    data = [[p("TIME", TABLE_HEAD), p("SESSION", TABLE_HEAD), p("INTENDED OUTCOMES", TABLE_HEAD)]]
    break_rows = []
    for idx, (time, session, outcome, kind) in enumerate(rows, start=1):
        if kind == "break":
            data.append([p(time, TABLE_TIME), p(session, TABLE_SESSION), ""])
            break_rows.append(idx)
        else:
            data.append([p(time, TABLE_TIME), p(session, TABLE_SESSION), p(outcome, TABLE_OUTCOME)])

    table = Table(data, colWidths=[67, 132, CONTENT_W - 199], repeatRows=1)
    commands = [
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]
    for idx in range(1, len(data)):
        commands.append(("BACKGROUND", (0, idx), (-1, idx), PALE if idx % 2 == 0 else WHITE))
    for idx in break_rows:
        commands.extend([
            ("SPAN", (1, idx), (2, idx)),
            ("BACKGROUND", (0, idx), (-1, idx), PALE_TEAL),
        ])
    table.setStyle(TableStyle(commands))
    _, h = table.wrap(CONTENT_W, PAGE_H)
    table.drawOn(c, LEFT, top - h)


def info_box(c, top, heading, text):
    data = [[p(heading.upper(), BOX_HEAD)], [p(text, BODY_BOX)]]
    table = Table(data, colWidths=[CONTENT_W])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, 0), TEAL),
        ("BACKGROUND", (0, 1), (0, 1), PALE),
        ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    _, h = table.wrap(CONTENT_W, PAGE_H)
    table.drawOn(c, LEFT, top - h)
    return top - h


def cover(c):
    y = PAGE_H - 75
    y = draw_para(c, "SUPPLIER QUALITY DESIGN WORKSHOP", EYEBROW, LEFT, y, CONTENT_W)
    y -= 9
    y = draw_para(c, "SIA Supplier Quality Program", TITLE, LEFT, y, CONTENT_W)
    y -= 5
    y = draw_para(c, "Three-day virtual requirements completion and solution design agenda", SUBTITLE, LEFT, y, CONTENT_W)
    y -= 20
    c.setFillColor(GOLD)
    c.rect(50.4, y - 6, 511.2, 5.8, fill=1, stroke=0)
    y -= 33
    y = draw_para(c, "Workshop purpose", SECTION, LEFT, y, CONTENT_W)
    y -= 8
    y = draw_para(c,
        "This workshop will complete the detailed requirements for Product Management, Pilot Part Data, PPAP, and Supplier Scorecard. Sessions build on decisions made in earlier workshops and focus on unresolved data, workflow, integration, security, reporting, and user-experience requirements needed to prepare the design documentation for review and approval.",
        BODY, LEFT, y, CONTENT_W)
    y -= 17
    overview = [
        [p("DAY 1", TABLE_HEAD), p("DAY 2", TABLE_HEAD), p("DAY 3", TABLE_HEAD)],
        [p("Product Management and Pilot Part Data", TABLE_SESSION), p("Production Part Approval Process", TABLE_SESSION), p("Supplier Scorecard and Design Completion", TABLE_SESSION)],
        [p("Part and supplier data; inspection specifications; ECS controls; sample-level inspections, ownership, execution, and NCR initiation.", BODY_SMALL), p("PPAP scope and warrant; element workflows; evidence reuse; approvals; integrations; reporting, scheduling, and certification.", BODY_SMALL), p("KPI catalogue and sources; monthly compilation, review, publication, dashboards, unresolved dependencies, and next steps.", BODY_SMALL)],
    ]
    t = Table(overview, colWidths=[CONTENT_W / 3] * 3)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("BACKGROUND", (0, 1), (-1, -1), PALE),
        ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))
    _, h = t.wrap(CONTENT_W, PAGE_H)
    t.drawOn(c, LEFT, y - h)
    y -= h + 22
    y = draw_para(c, "Daily format", SECTION, LEFT, y, CONTENT_W)
    y -= 7
    y = draw_para(c, "Each virtual session runs from 9:30 a.m. to 4:30 p.m. Eastern Time, with a 45-minute lunch from approximately 12:00 to 12:45 p.m., a 10-minute morning break, a 10-minute afternoon break, and a facilitated daily closeout.", BODY, LEFT, y, CONTENT_W)
    y -= 18
    scope = Table([[p("SCOPE", BOX_HEAD), p("Detailed design for Product Management, Pilot Part Data, PPAP, and Supplier Scorecard. Accepted ADRs are treated as design constraints; proposed decisions and documented follow-ups are confirmed during the workshop.", BODY_SMALL)]], colWidths=[54, CONTENT_W - 54])
    scope.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, 0), TEAL),
        ("BACKGROUND", (1, 0), (1, 0), PALE_TEAL),
        ("BOX", (0, 0), (-1, -1), 0.7, TEAL),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    _, h = scope.wrap(CONTENT_W, 100)
    scope.drawOn(c, LEFT, y - h)


DAY1 = [
    ("9:30-9:45", "Workshop opening", "Introductions, objectives, scope boundaries, decision approach, prior ADR status, expected outputs, and virtual working conventions.", "normal"),
    ("9:45-10:35", "Part data and integration foundation", "Confirm production and service-part sources, identifiers, refresh behavior, field ownership, update precedence, local exceptions, and data-quality controls.", "normal"),
    ("10:35-10:45", "Morning break", "", "break"),
    ("10:45-11:25", "Supplier, facility, depot, and part relationships", "Define relationship types, authoritative sources, active dates, supplier shortlisting, depot enrichment, and handling of manufacturing and sequencing providers.", "normal"),
    ("11:25-12:00", "Inspection specification governance", "Confirm specification keys, attribute types, tolerances, instructions, images, QMS boundaries, versioning, correction, review, release, and migration rules.", "normal"),
    ("12:00-12:45", "Lunch", "", "break"),
    ("12:45-1:40", "ECS orchestration and downstream decisions", "Define BOMEX/ECS staging, ownership, PPAP and specification checkpoints, not-applicable rules, duplicate handling, traceability, and completion controls.", "normal"),
    ("1:40-2:25", "Pilot Part Data structure", "Define inspection requests, samples, attribute results, evidence, sample creation, lifecycle context, and links to parts, suppliers, events, and released specifications.", "normal"),
    ("2:25-2:35", "Afternoon break", "", "break"),
    ("2:35-3:25", "Inspection execution and disposition", "Confirm response controls, tolerances, pass/fail logic, overall disposition, images, connected-device layout, offline fallback, and reconciliation.", "normal"),
    ("3:25-4:10", "Inspection planning, ownership, and NCR initiation", "Define purpose applicability, frequency plans, QC New Model and SQA routing, handover, failure-to-NCR criteria, inherited data, evidence, and subtype behavior.", "normal"),
    ("4:10-4:30", "Day 1 closeout", "Review decisions, proposed ADR confirmations, open questions, source-data actions, owners, and dependencies for PPAP design.", "normal"),
]

DAY2 = [
    ("9:30-9:45", "Day 2 opening", "Review Day 1 dependencies and confirm priorities for detailed PPAP design.", "normal"),
    ("9:45-10:35", "PPAP scope and integrated warrant", "Confirm drawing-scoped parent design, selected part numbers, supplier scope, warrant fields, part-level mass data, validation, and controlled scope changes.", "normal"),
    ("10:35-10:45", "Morning break", "", "break"),
    ("10:45-12:00", "PPAP elements and routing", "Define the element catalogue, reusable routing patterns, internal and supplier responsibilities, visibility, not-required treatment, rejection, correction, resubmission, and overall completion.", "normal"),
    ("12:00-12:45", "Lunch", "", "break"),
    ("12:45-1:35", "Evidence versioning and inspection linkage", "Define element lineage, approved evidence reuse, current baseline views, file retention, and links to PPAP sample inspections and frozen specification revisions.", "normal"),
    ("1:35-2:25", "Roles, approvals, and concurrent PPAPs", "Confirm supplier-depot coordinator roles, missing-role controls, reassignment, escalation, criticality-based group-leader approval, and human sequencing of overlapping PPAPs.", "normal"),
    ("2:25-2:35", "Afternoon break", "", "break"),
    ("2:35-3:20", "BOMEX initiation and integration", "Define payload, authoritative keys, drawing access, revision and duplicate behavior, requirement rules, source-linked draft creation, and release confirmation ownership.", "normal"),
    ("3:20-4:10", "Scheduling, reporting, and approval output", "Confirm due-date inputs, shipment-event exceptions, notifications, dashboard filters, aging thresholds, shared-role attribution, and approval-certificate content and supersession.", "normal"),
    ("4:10-4:30", "Day 2 closeout", "Review PPAP decisions, unresolved integration questions, required samples, assigned actions, and scorecard data dependencies.", "normal"),
]

DAY3 = [
    ("9:30-9:45", "Day 3 opening", "Review outstanding items and confirm the scorecard and cross-application priorities for the final day.", "normal"),
    ("9:45-10:35", "KPI catalogue and governance", "Define initial KPIs, data types, applicability, effective versions, formulas, requiredness, ownership, aggregation behavior, and not-applicable treatment.", "normal"),
    ("10:35-10:45", "Morning break", "", "break"),
    ("10:45-12:00", "KPI sources and calculations", "Map automated and manual sources; confirm PPM numerator and consumption denominator, NCR exclusions, PPAP timeliness, other source measures, refresh timing, and quality controls.", "normal"),
    ("12:00-12:45", "Lunch", "", "break"),
    ("12:45-1:45", "Monthly compilation and review workflow", "Define scorecard creation, contributor tasks, entry cutoff, missing-value rules, exceptions, reminders, escalation, internal review, silence-as-consent, and freeze behavior.", "normal"),
    ("1:45-2:25", "Hierarchy and supplier publication", "Confirm facility and depot scorecards, parent-company rollups, publication timing, global versus sub-batch release, notifications, supplier comments, and access scope.", "normal"),
    ("2:25-2:35", "Afternoon break", "", "break"),
    ("2:35-3:20", "Scorecard experience and reporting", "Define contributor, coordinator, reviewer, and supplier views; completion dashboard; trend presentation; portal summaries; record drill-through; and Power BI boundaries.", "normal"),
    ("3:20-4:05", "Cross-application design completion", "Resolve remaining relationships across Product Management, inspections, PPAP, NCR, supplier hierarchy, and scorecard data; confirm assumptions and scope issues.", "normal"),
    ("4:05-4:30", "Final workshop closeout", "Confirm decisions, ADR updates, action owners, due dates, design-document deliverables, review sequence, approval process, and readiness for detailed design.", "normal"),
]


def build():
    c = canvas.Canvas(str(OUT), pagesize=letter)
    c.setTitle("SIA Supplier Quality Design Workshop Agenda - Draft")
    cover(c)
    footer(c, 1)
    c.showPage()

    for page_num, eyebrow, title, subtitle, rows in [
        (2, "Day 1 | Tuesday, September 29, 2026", "Product Management and Pilot Part Data", "Master data and inspection design foundation", DAY1),
        (3, "Day 2 | Wednesday, September 30, 2026", "Production Part Approval Process", "Drawing-scoped PPAP design, workflow, integration, and reporting", DAY2),
        (4, "Day 3 | Thursday, October 1, 2026", "Supplier Scorecard and Design Completion", "Monthly performance governance followed by cross-application completion", DAY3),
    ]:
        y = draw_page_header(c, eyebrow, title, subtitle)
        agenda_table(c, y - 14, rows)
        footer(c, page_num)
        c.showPage()

    y = draw_page_header(c, "Workshop closeout", "Outputs and preparation")
    y -= 12
    y = info_box(c, y, "Expected outputs", "Confirmed detailed requirements and decisions; validation or revision of proposed ADRs; an action and open-question register; inputs for logical object models, field lists, workflow diagrams, integration mappings, security design, reports, mockups, and an agreed documentation review and approval plan.") - 12
    y = info_box(c, y, "Recommended participants", "Business owners and key users for Product Management, Pilot Part Data, PPAP, and Supplier Scorecard; New Model and SQA representatives; supplier-quality and inspection users; Procurement and supplier-management representatives; SIA IT, integration, PartsMaster, BOMEX, and reporting representatives; and the Intelex/Summit solution team.") - 12
    y = info_box(c, y, "Recommended preparation", "Current part, drawing, ECS, supplier, facility, and depot data examples; existing inspection spreadsheets and images; PPAP element and routing examples; role and approval matrices; representative scorecards and KPI definitions; parts-consumption, PIR, scrap, CAPA, PPAP, warranty, delivery, and safety source details; integration specifications; and known technical constraints.") - 12
    info_box(c, y, "Scope control", "Accepted ADRs are baseline design constraints and will not be reopened unless new evidence shows a material conflict. Proposed ADRs and documented follow-ups are decision topics. New requirements outside Product Management, Pilot Part Data, PPAP, Supplier Scorecard, and their necessary integration boundaries will be recorded for separate scope assessment.")
    footer(c, 5)
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()
