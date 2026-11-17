"""Export the approved agenda content as an editable four-page Word document."""
import json
from pathlib import Path
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'output/pdf/incident-management-workshop-agenda.json').read_text())
doc = Document()
sec = doc.sections[0]
sec.page_width, sec.page_height = Inches(8.5), Inches(11)
sec.top_margin = sec.bottom_margin = Inches(.65)
sec.left_margin = sec.right_margin = Inches(.7)
sec.footer_distance = Inches(.25)
for name in ['Normal', 'Title', 'Subtitle', 'Heading 1', 'Heading 2']:
    st = doc.styles[name]
    st.font.name = 'Arial'
    st.font.color.rgb = RGBColor.from_string('000000')
doc.styles['Normal'].font.size = Pt(9)
doc.styles['Normal'].paragraph_format.space_after = Pt(7)
doc.styles['Normal'].paragraph_format.line_spacing = 1.1
doc.styles['Title'].font.size = Pt(24)
doc.styles['Heading 1'].font.size = Pt(18)
doc.styles['Heading 2'].font.size = Pt(11)
doc.styles['Subtitle'].font.size = Pt(10)
doc.styles['Subtitle'].font.italic = False
for border in list(doc.styles.element.iter(qn('w:pBdr'))):
    border.getparent().remove(border)

def para(text, style=None):
    return doc.add_paragraph(text, style)

def shade(cell, color):
    e = OxmlElement('w:shd'); e.set(qn('w:fill'), color)
    cell._tc.get_or_add_tcPr().append(e)

def table(headers, widths):
    t = doc.add_table(rows=1, cols=len(headers))
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    for c, w in zip(t.columns, widths): c.width = Inches(w)
    borders = OxmlElement('w:tblBorders')
    for tag in ['top','left','bottom','right','insideH','insideV']:
        e = OxmlElement('w:'+tag)
        for k,v in [('val','single'),('sz','4'),('color','D9D9D9')]: e.set(qn('w:'+k),v)
        borders.append(e)
    t._tbl.tblPr.append(borders)
    repeat = OxmlElement('w:tblHeader'); t.rows[0]._tr.get_or_add_trPr().append(repeat)
    for c, text, w in zip(t.rows[0].cells, headers, widths):
        c.width = Inches(w); c.text = text; shade(c, '17324D')
        for run in c.paragraphs[0].runs:
            run.bold = True; run.font.color.rgb = RGBColor(255,255,255)
    return t

def format_rows(t, widths):
    for i,r in enumerate(t.rows):
        no_split = OxmlElement('w:cantSplit'); r._tr.get_or_add_trPr().append(no_split)
        for j,c in enumerate(r.cells):
            span = c._tc.get_or_add_tcPr().find(qn('w:gridSpan'))
            if span is None:
                c.width = Inches(widths[j])
            else:
                c.width = Inches(sum(widths[j:]))
            c.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
            margins = OxmlElement('w:tcMar')
            for side, v in [('top','85'),('bottom','85'),('left','85'),('right','85')]:
                e=OxmlElement('w:'+side); e.set(qn('w:w'),v); e.set(qn('w:type'),'dxa'); margins.append(e)
            c._tc.get_or_add_tcPr().append(margins)
            for p in c.paragraphs:
                p.paragraph_format.space_after = Pt(0)
                p.paragraph_format.line_spacing = 1.05
                for run in p.runs:
                    run.font.size = Pt(8.5)
                    if i > 0 and j < 2: run.bold = True

foot = sec.footer.paragraphs[0]
foot.paragraph_format.space_after = Pt(0)
foot.add_run('SIA | Incident Management Workshop | Draft').font.size = Pt(7)
foot.add_run(' '*9 + 'Page ').font.size = Pt(7)
field = OxmlElement('w:fldSimple'); field.set(qn('w:instr'),'PAGE'); foot._p.append(field)

para(data['workshop_label']).runs[0].bold = True
para(data['title'], 'Title')
para(data['subtitle'], 'Subtitle')
para('Workshop purpose', 'Heading 2'); para(data['purpose'])
t=table(['SESSION 1','SESSION 2'],[3.55,3.55])
for key in ['title','summary']:
    cells=t.add_row().cells
    for c,day in zip(cells,data['days']): c.text=day[key]; shade(c,'F5F7F9')
format_rows(t,[3.55,3.55])
para('Daily format','Heading 2'); para(data['daily_format'])
para('Scope','Heading 2'); para(data['scope'])

for day in data['days']:
    doc.add_page_break()
    para(day['label']).runs[0].bold=True
    para(day['title'],'Heading 1'); para(day['subtitle'],'Subtitle')
    widths=[.9,1.85,4.35]
    t=table(['TIME','SESSION','INTENDED OUTCOMES'], widths)
    for i,item in enumerate(day['rows']):
        cells=t.add_row().cells
        for c,text in zip(cells,[item['time'],item['session'],item['outcome']]): c.text=text
        if item['kind']=='break':
            cells[1].merge(cells[2])
            for c in cells: shade(c,'EEF5F5')
        elif i%2: 
            for c in cells: shade(c,'F5F7F9')
    format_rows(t,widths)

doc.add_page_break()
para('WORKSHOP CLOSEOUT').runs[0].bold=True
para('Outputs and preparation','Heading 1')
for title,key in [('Expected outputs','expected_outputs'),('Recommended participants','participants'),('Recommended preparation','preparation'),('Scope control','scope_control')]:
    para(title,'Heading 2'); para(data['closeout'][key])
out=ROOT/'output/docx/Incident_Management_Workshop_Agenda_Draft.docx'
out.parent.mkdir(parents=True,exist_ok=True)
doc.save(out)
print(out)
