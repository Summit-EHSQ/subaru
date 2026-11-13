from pathlib import Path
import csv,json,zipfile,xml.etree.ElementTree as ET
from collections import Counter

base=Path(__file__).parent
out=base.parent.parent/'outputs'/'supplier-scorecard-import-2026-11-10'
data=json.loads((base/'prepared.json').read_text(encoding='utf-8'))
files=sorted((out/'csv').glob('*.csv'))
assert len(files)==10
expected_counts=[20,4,6,3,2,3,0,20,240,20]
for f,n in zip(files,expected_counts):
    with f.open(encoding='utf-8-sig',newline='') as stream:
        reader=csv.DictReader(stream)
        rows=list(reader)
        assert len(rows)==n,(f.name,len(rows))
        assert all(None not in r for r in rows),f.name
        if f.name.startswith('01_'):
            assert len({r['Code'] for r in rows})==20
            assert sum(float(r['Maximum Points']) for r in rows)==155
            for a,b in zip(rows,data['kpis']):
                assert a['Description']==b['Description']
                assert all(a[h]=='' for h in ['Contributor Group.ID','Feedback Contact.ID','Aggregation Method.Code','Effective From'])
        if f.name.startswith('09_'):
            assert len({r['Staging Key'] for r in rows})==240
            assert Counter(r['Source Value State'] for r in rows)=={'NUMERIC':187,'BLANK_WHITESPACE':53}
            assert sum(r['Value - Number']!='' for r in rows)==24
            assert sum(r['Entered Points (source)']=='0' for r in rows)==sum(r['Entered Points (source)']==0 for r in data['history'])
            for a,b in zip(rows,data['history']):
                assert (float(a['Entered Points (source)']) if a['Entered Points (source)'] else None)==b['Entered Points (source)']
                assert a['Is Not Applicable?']==''
                assert a['Exception Treatment.Code']==''
        print(f.name,len(rows))

ns={'s':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
xlsx=out/'Supplier_Scorecard_KPI_Import_Drafts.xlsx'
with zipfile.ZipFile(xlsx) as z:
    wb=ET.fromstring(z.read('xl/workbook.xml'))
    assert len(wb.findall('s:sheets/s:sheet',ns))==10
    assert not any('vbaProject' in n or n.startswith('xl/externalLinks/') for n in z.namelist())
    formulas=0;errors=[]
    for name in z.namelist():
        if name.startswith('xl/worksheets/sheet') and name.endswith('.xml'):
            root=ET.fromstring(z.read(name))
            formulas+=len(root.findall('.//s:f',ns))
            errors.extend((name,c.attrib['r']) for c in root.findall('.//s:c',ns) if c.attrib.get('t')=='e')
    assert formulas==144,formulas
    assert errors==[],errors
    assert len([n for n in z.namelist() if n.startswith('xl/tables/table') and n.endswith('.xml')])==8
    kpi=ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
    assert kpi.find(".//s:c[@r='K2']/s:v",ns).text=='5'
    assert len(kpi.findall('s:conditionalFormatting',ns))==4
    checks=ET.fromstring(z.read('xl/worksheets/sheet7.xml'))
    assert float(checks.find(".//s:c[@r='D2']/s:v",ns).text)==36.09
    assert float(checks.find(".//s:c[@r='G2']/s:v",ns).text)==155
print('XLSX: 10 sheets; 8 tables; 144 formulas; no formula-error cells; restored source values verified.')

package=out/'Supplier_Scorecard_KPI_Import_Package.zip'
with zipfile.ZipFile(package,'w',compression=zipfile.ZIP_DEFLATED) as z:
    z.write(xlsx,xlsx.name)
    z.write(out/'START_HERE.txt','START_HERE.txt')
    for f in files:z.write(f,'csv/'+f.name)
with zipfile.ZipFile(package) as z:assert len(z.namelist())==12
print('Package:',package.resolve(),'bytes',package.stat().st_size)
