import json, zipfile, posixpath
from pathlib import Path
import xml.etree.ElementTree as ET

src = Path(r'C:\Users\DaveMcLean\Downloads\A315_Heartland_Automotive,_LLC.xlsm')
out = Path(__file__).parent
ns = {'s':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
with zipfile.ZipFile(src) as z:
    strings = []
    if 'xl/sharedStrings.xml' in z.namelist():
        for si in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('s:si',ns):
            strings.append(''.join(t.text or '' for t in si.findall('.//s:t',ns)))
    wb = ET.fromstring(z.read('xl/workbook.xml'))
    rels = {r.attrib['Id']:r.attrib['Target'] for r in ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))}
    data = {'source':src.name,'sheets':[],'defined_names':[], 'external_links':[n for n in z.namelist() if n.startswith('xl/externalLinks/') and n.endswith('.xml')]}
    for n in wb.findall('s:definedNames/s:definedName',ns):
        data['defined_names'].append({'name':n.attrib['name'],'value':n.text})
    for sh in wb.findall('s:sheets/s:sheet',ns):
        rid=sh.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']
        target=rels[rid]
        path=target.lstrip('/') if target.startswith('/') else posixpath.normpath(posixpath.join('xl',target))
        root=ET.fromstring(z.read(path))
        cells=[]
        for c in root.findall('.//s:sheetData/s:row/s:c',ns):
            v=c.find('s:v',ns); f=c.find('s:f',ns)
            val=v.text if v is not None else None
            if c.attrib.get('t')=='s' and val is not None: val=strings[int(val)]
            elif c.attrib.get('t')=='inlineStr': val=''.join(t.text or '' for t in c.findall('.//s:t',ns))
            elif val is not None and c.attrib.get('t') not in ('str','e'):
                try: val=float(val); val=int(val) if val.is_integer() else val
                except ValueError: pass
            if val is not None or f is not None:
                cells.append({'cell':c.attrib['r'],'value':val,'formula':f.text if f is not None else None,'formula_attrs':f.attrib if f is not None else None,'type':c.attrib.get('t')})
        data['sheets'].append({'name':sh.attrib['name'],'state':sh.attrib.get('state','visible'),'path':path,'dimension':root.find('s:dimension',ns).attrib if root.find('s:dimension',ns) is not None else {},'cells':cells,'merges':[m.attrib['ref'] for m in root.findall('s:mergeCells/s:mergeCell',ns)]})
    (out/'source.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
    lines=[]
    for sh in data['sheets']:
        print(sh['name'],sh['state'],sh['dimension'],len(sh['cells']))
        lines.append('\nSHEET: '+sh['name'])
        for c in sh['cells']:
            lines.append(c['cell']+' | '+str(c['value'])+(' | ='+str(c['formula']) if c['formula'] else ''))
    (out/'source_cells.txt').write_text('\n'.join(lines),encoding='utf-8')
    print('Defined names:',len(data['defined_names']),'External links:',len(data['external_links']))
