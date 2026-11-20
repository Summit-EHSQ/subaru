from pathlib import Path
import re
from urllib.parse import unquote
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.opc.constants import RELATIONSHIP_TYPE as RT

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'outputs/ppap-solution-brief-2026-11-17'
SOURCE = OUT / 'ppap-solution-brief.md'
DOCX = OUT / 'PPAP_Solution_Brief_Draft.docx'
doc = Document()
section = doc.sections[0]
section.page_width, section.page_height = Inches(8.5), Inches(11)
section.top_margin = section.bottom_margin = Inches(.65)
section.left_margin = section.right_margin = Inches(.7)
section.footer_distance = Inches(.3)
for name in ['Normal', 'Title', 'Subtitle', 'Heading 1', 'Heading 2']:
    style = doc.styles[name]
    style.font.name = 'Arial'
    style.font.color.rgb = RGBColor.from_string('000000')
    style.paragraph_format.widow_control = True
doc.styles['Normal'].font.size = Pt(10)
doc.styles['Normal'].paragraph_format.line_spacing = 1.06
doc.styles['Normal'].paragraph_format.space_after = Pt(7)
doc.styles['Title'].font.size = Pt(25)
doc.styles['Title'].paragraph_format.space_after = Pt(9)
doc.styles['Subtitle'].font.size = Pt(9)
doc.styles['Subtitle'].font.italic = False
doc.styles['Subtitle'].font.color.rgb = RGBColor.from_string('555555')
doc.styles['Subtitle'].paragraph_format.space_after = Pt(15)
doc.styles['Heading 1'].font.size = Pt(16)
doc.styles['Heading 1'].paragraph_format.space_before = Pt(0)
doc.styles['Heading 1'].paragraph_format.space_after = Pt(11)
for border in list(doc.styles.element.iter(qn('w:pBdr'))):
    border.getparent().remove(border)

def inline(p, text):
    for part in re.split(r'(\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))', text):
        if part.startswith('**') and part.endswith('**'):
            p.add_run(part[2:-2]).bold = True
        elif re.fullmatch(r'\[[^\]]+\]\([^)]+\)', part):
            label, target = re.fullmatch(r'\[([^\]]+)\]\(([^)]+)\)', part).groups()
            resolved = (SOURCE.parent / unquote(target)).resolve()
            if not resolved.exists():
                raise ValueError(f'Missing source: {target}')
            rel = p.part.relate_to(resolved.as_uri(), RT.HYPERLINK, is_external=True)
            link = OxmlElement('w:hyperlink'); link.set(qn('r:id'), rel)
            run = OxmlElement('w:r'); props = OxmlElement('w:rPr')
            color = OxmlElement('w:color'); color.set(qn('w:val'), '214B68'); props.append(color)
            run.append(props); t = OxmlElement('w:t'); t.text = label; run.append(t); link.append(run)
            p._p.append(link)
        elif part:
            part = re.sub(r'\[([1-6](?:, [1-6])*)\]', lambda m: '[' + m.group(1).replace(' ', '\u00a0') + ']', part)
            p.add_run(part)

def add_table(lines):
    rows = [[x.strip() for x in line.strip().strip('|').split('|')] for line in lines]
    headers, data = rows[0], rows[2:]
    t = doc.add_table(rows=1, cols=len(headers)); t.alignment = WD_TABLE_ALIGNMENT.CENTER; t.autofit = False
    if len(headers) == 2:
        widths = [3.55, 3.55] if headers[0].startswith('Included') else ([1.4,5.7] if headers[0]=='Connection' else [2.05,5.05])
    else:
        widths = [1.3,2.3,3.5] if headers[0]=='Area' else [1.35,1.75,4.0]
    for column, width in zip(t.columns, widths): column.width = Inches(width)
    repeat = OxmlElement('w:tblHeader'); t.rows[0]._tr.get_or_add_trPr().append(repeat)
    borders = OxmlElement('w:tblBorders')
    for name in ['top','bottom','left','right','insideH','insideV']:
        e = OxmlElement('w:'+name)
        for k,v in [('val','single'),('sz','4'),('color','D6DDE2')]: e.set(qn('w:'+k),v)
        borders.append(e)
    t._tbl.tblPr.append(borders)
    for index, values in enumerate([headers]+data):
        row = t.rows[0] if index == 0 else t.add_row()
        nosplit=OxmlElement('w:cantSplit'); row._tr.get_or_add_trPr().append(nosplit)
        for cell, value, width in zip(row.cells, values, widths):
            cell.width=Inches(width); cell.vertical_alignment=WD_CELL_VERTICAL_ALIGNMENT.CENTER
            margins=OxmlElement('w:tcMar')
            for side in ['top','bottom','left','right']:
                e=OxmlElement('w:'+side); e.set(qn('w:w'),'75'); e.set(qn('w:type'),'dxa'); margins.append(e)
            cell._tc.get_or_add_tcPr().append(margins)
            p=cell.paragraphs[0]; p.paragraph_format.space_after=Pt(0); p.paragraph_format.line_spacing=1.02
            inline(p,value)
            for run in p.runs:
                run.font.size=Pt(9)
                if index == 0: run.bold=True
            for rpr in p._p.iter(qn('w:rPr')):
                size=OxmlElement('w:sz'); size.set(qn('w:val'),'18'); rpr.append(size)
            if index == 0:
                shade=OxmlElement('w:shd'); shade.set(qn('w:fill'),'E8EDF1'); cell._tc.get_or_add_tcPr().append(shade)
    doc.add_paragraph().paragraph_format.space_after=Pt(1)

lines=SOURCE.read_text(encoding='utf-8').splitlines()
i=0; section_number=0
while i < len(lines):
    line=lines[i]
    if not line.strip(): i+=1; continue
    if line.startswith('# '): doc.add_paragraph(line[2:],'Title')
    elif line.startswith('## '):
        section_number+=1
        p=doc.add_paragraph(line[3:],'Heading 1')
        if section_number>1: p.paragraph_format.page_break_before=True
    elif line.startswith('|'):
        table_lines=[]
        while i<len(lines) and lines[i].startswith('|'):
            table_lines.append(lines[i]); i+=1
        add_table(table_lines); continue
    elif line.startswith('**Subaru'):
        doc.add_paragraph(line.strip('*'),'Subtitle')
    else:
        p=doc.add_paragraph(); inline(p,line)
        if section_number==7:
            for run in p.runs: run.font.size=Pt(9)
    i+=1

footer=section.footer.paragraphs[0]; footer.alignment=WD_ALIGN_PARAGRAPH.RIGHT
footer.paragraph_format.space_after=Pt(0)
run=footer.add_run('PPAP Solution Brief  |  '); run.font.size=Pt(8); run.font.color.rgb=RGBColor.from_string('666666')
field=OxmlElement('w:fldSimple'); field.set(qn('w:instr'),'PAGE'); footer._p.append(field)
doc.core_properties.title='PPAP Solution Brief'
doc.core_properties.subject='Subaru of Indiana Automotive Intelex Phase 2 PPAP application'
doc.core_properties.author=''
doc.core_properties.keywords='PPAP, Intelex, solution brief'
doc.core_properties.comments=''
doc.save(DOCX)
print(f'Saved {DOCX}')
print(f'Words: {len(re.findall(r"\S+", SOURCE.read_text(encoding="utf-8")))}; sections: {section_number}; tables: {len(doc.tables)}')
