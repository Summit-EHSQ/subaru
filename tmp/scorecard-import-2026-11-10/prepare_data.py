import json, calendar, collections, datetime
from pathlib import Path

base=Path(__file__).parent
src=json.loads((base/'source.json').read_text(encoding='utf-8'))
sheets={s['name']:{c['cell']:c for c in s['cells']} for s in src['sheets']}
def cell(s,a): return sheets[s].get(a,{}).get('value')
def txt(s,a):
    v=cell(s,a)
    return v.strip() if isinstance(v,str) else v

defs=[
 ('SC_SAFETY',7,6,4,'SAFETY','NUMBER'),
 ('SC_SUSTAINABILITY',8,7,5,'SAFETY','NUMBER'),
 ('SC_PPM',9,8,6,'QUALITY','NUMBER'),
 ('SC_PRC_ON_TIME',10,10,7,'QUALITY','PERCENTAGE'),
 ('SC_CHANGEPOINT',11,11,8,'QUALITY','NUMBER'),
 ('SC_SORTING_COST',12,12,9,'QUALITY','CURRENCY'),
 ('SC_RECALL_CAMPAIGN',13,13,10,'QUALITY','NUMBER'),
 ('SC_WARRANTY_REPORT',14,14,11,'QUALITY','NUMBER'),
 ('SC_WCAR_ON_TIME',15,15,12,'QUALITY','PERCENTAGE'),
 ('SC_HEIGHT_COST',16,16,13,'COST','PERCENTAGE'),
 ('SC_COST_PROGRAM',17,17,14,'COST','PERCENTAGE'),
 ('SC_PRODUCTION_DELIVERY',18,18,15,'DELIVERY','PERCENTAGE'),
 ('SC_ASN_ACCURACY',19,19,16,'DELIVERY','PERCENTAGE'),
 ('SC_LABEL_ACCURACY',20,20,17,'DELIVERY','NUMBER'),
 ('SC_CANF_ON_TIME',21,21,18,'DELIVERY','NUMBER'),
 ('SC_SERVICE_DELIVERY',22,22,19,'DELIVERY','PERCENTAGE'),
 ('SC_PROTOTYPE_DELIVERY',23,23,20,'DELIVERY','NUMBER'),
 ('SC_COO_COMPLIANCE',24,24,21,'DELIVERY','YES_NO'),
 ('SC_IMDS_COMPLIANCE',25,25,22,'DELIVERY','YES_NO'),
 ('SC_DOWNTIME',26,26,23,'DELIVERY','NUMBER'),
]
notes={
 'SC_SAFETY':'Composite score: OSHA incidence 2 + lost time 2 + Kaizen 1. Keep as one KPI to preserve source structure; separate LTIR/TRIR KPIs require an approved redesign. No NAICS or benchmark series is supplied.',
 'SC_PPM':'Score Key supplies no combined Vital/General points bands. Obtain the 45-point scoring table before automation; preserve monthly awarded points.',
 'SC_PRC_ON_TIME':'Score Key permits only 0 or 5; July 2026 historical points are 4. Resolve the historical methodology or correction.',
 'SC_CHANGEPOINT':'Score Key deducts 5 per unauthorized changepoint shipment; the minimum score/floor and repeated-penalty treatment are not defined.',
 'SC_SORTING_COST':'Score Key overlaps the 5-point >$8k to $10k band with the 4-point >$8k to $12k band. Confirm the intended 4-point lower bound. Currency code and overdue-payment inputs are absent.',
 'SC_RECALL_CAMPAIGN':'Maximum is 0; Score Key specifies -35 points for 24 consecutive months. Confirm negative-point validation, penalty start/end dates and overlapping recalls before use.',
 'SC_HEIGHT_COST':'Preserve the source name Height Cost Reduction. Confirm whether Height is the intended business term. Percentage bands need a rounding rule and treatment above 100%.',
 'SC_COST_PROGRAM':'Percentage bands need a rounding rule and treatment above 100%.',
 'SC_PRODUCTION_DELIVERY':'Score Key contains impossible inequalities (for example 100% < x <= 99%). October 2025 and February 2026 have 10 points against the stated maximum 5. Obtain period-specific maxima and corrected bands.',
 'SC_ASN_ACCURACY':'Score Key has gaps/boundary ambiguities at 97%, 95%, 90%, 85% and 80%, and decimal gaps between bands. Confirm thresholds and rounding.',
 'SC_WCAR_ON_TIME':'Score Key uses 75%-99% and 1%-74%; clarify decimal precision and boundary coverage.',
 'SC_SERVICE_DELIVERY':'Score Key last band says 91% < x = 0 points, which overlaps higher bands; lower bands also have gaps. Confirm inequalities and rounding.',
 'SC_DOWNTIME':'Maximum is 0; no downtime is a blank score, while penalties are -10/-20 for 3 months. Durations below 2 hours and exactly 4 hours are ambiguous. Confirm score floor, duration and penalty timing.',
 'SC_SUSTAINABILITY':'Annual source assessment appears in monthly history. September 2025-March 2026 has 4.59; April-August is blank. Do not infer carry-forward or Not Applicable from these blanks.',
 'SC_COO_COMPLIANCE':'Split from Compliance into a distinct 2.5-point KPI using the historical COO row; source frequency is biannual.',
 'SC_IMDS_COMPLIANCE':'Split from Compliance into a distinct 2.5-point KPI using the historical IMDS row; source frequency is annual.',
}
kpis=[]; scores=[]
for i,(code,cr,hr,kr,cat,vt) in enumerate(defs,1):
    name=txt('Supplier KPI Scorecard',f'B{cr}')
    if cr==24: name='Compliance: COO'
    if cr==25: name='Compliance: IMDS'
    target=txt('Supplier KPI Scorecard',f'C{cr}') or ''
    purpose=txt('Supplier KPI Scorecard',f'D{cr}') or ''
    freq=txt('Score Key',f'C{kr}') or ''
    reporting=txt('Score Key',f'D{kr}') or ''
    rule=txt('Score Key',f'E{kr}') or ''
    desc='Target: '+target
    if purpose: desc+='\nPurpose: '+purpose
    desc+='\nFrequency: '+freq+'\nReporting: '+reporting+'\nScoring: '+rule
    kpis.append({'Code':code,'Name':name,'Description':desc,'Active?':True,'Category.Code':cat,'Value Type.Code':vt,'Contribution Source.Code':'INTERNAL','Collection Method.Code':'DIRECT_ENTRY','Contributor Group.ID':None,'Feedback Contact.ID':None,'Maximum Points':cell('Supplier KPI Scorecard',f'F{cr}'),'Initialization Method.Code':'NO_DEFAULT','Static Default Points':None,'May Be Not Applicable?':False,'Supplier Nonresponse Sets Zero?':False,'Aggregation Method.Code':None,'Source Application':None,'Source Report Reference':None,'Source Calculation Description':None,'Safety Benchmark Metric.Code':None,'Effective From':None,'Effective To':None})
    scores.append({'KPI Code':code,'KPI Name':name,'Frequency (source)':freq,'Performance Target':target,'Reporting Method':reporting,'Scoring Rule (verbatim)':rule,'Review Note':notes.get(code,'Confirm scoring, ownership, value type and effective dates.'),'Definition Source':f"Supplier KPI Scorecard!B{cr}:F{cr}",'Rule Source':f"Score Key!B{kr}:E{kr}",'Historical Row':f'Historical tracking!D{hr}:P{hr}'})

hist=[]; months=[]
for mi,col in enumerate('EFGHIJKLMNOP'):
    serial=cell('Historical tracking',col+'5')
    dt=datetime.datetime(1899,12,30)+datetime.timedelta(days=serial)
    start=dt.date().isoformat(); end=dt.replace(day=calendar.monthrange(dt.year,dt.month)[1]).date().isoformat()
    amount=0; present=0; blank=0
    for code,cr,hr,kr,cat,vt in defs:
        val=cell('Historical tracking',f'{col}{hr}')
        numeric=isinstance(val,(int,float))
        rawnum=None; rawyes=None; rawtext=None; evidence=None
        if code=='SC_PPM':
            rawnum=cell('Historical tracking',f'D{64+mi}'); evidence=f'Historical tracking!D{64+mi}'
        if code=='SC_SORTING_COST':
            ch=chr(ord('D')+mi); rawnum=cell('PPM and Cost Charts data',ch+'11'); evidence=f"'PPM and Cost Charts data'!{ch}11"
        flags=[]
        if not numeric: flags.append('Blank source; treatment unresolved')
        if numeric and val>cell('Supplier KPI Scorecard',f'F{cr}'): flags.append('Exceeds stated maximum')
        if code=='SC_PRC_ON_TIME' and numeric and val not in (0,5): flags.append('Outside documented 0/5 scoring rule')
        if numeric: amount+=val; present+=1
        else: blank+=1
        hist.append({'Staging Key':f'A315|{start[:7]}|{code}','Supplier Code (source)':'A315','Supplier Name (source)':'Heartland Automotive, LLC','Supplier Record.ID':None,'Supplier Entity Type':None,'Parent Company.ID':None,'Program.Code':None,'Program Version.ID':None,'Run.ID':None,'Scorecard.ID':None,'Program KPI Version.ID':None,'KPI.Code':code,'KPI Version.ID':None,'Reporting Period Start':start,'Reporting Period End':end,'Value Type.Code':vt,'Value - Number':rawnum,'Value - Text':rawtext,'Value - Date':None,'Value - Yes/No':rawyes,'Entered Points (source)':val if numeric else None,'Source Value State':'NUMERIC' if numeric else 'BLANK_WHITESPACE' if isinstance(val,str) and not val.strip() else 'BLANK','Is Not Applicable?':None,'Exception Treatment.Code':None,'Stated Maximum Points':cell('Supplier KPI Scorecard',f'F{cr}'),'Review Issue':'; '.join(flags) or None,'Source Cell':f'Historical tracking!{col}{hr}','Raw Value Source':evidence})
    months.append({'Reporting Month':start,'Numeric KPI Cells':present,'Blank KPI Cells':blank,'Source Points Sum':round(amount,10),'Source Quality %':cell('Historical tracking',f'{col}27'),'Source Overall %':cell('Historical tracking',f'{col}28'),'Quality Source':f'Historical tracking!{col}27','Overall Source':f'Historical tracking!{col}28'})

cats=[{'Code':c,'Name':n,'Active?':True,'Sort':s} for c,n,s in [('SAFETY','Safety',10),('QUALITY','Quality',20),('COST','Cost',30),('DELIVERY','Delivery',40)]]
seed_groups={
 'KPI Value Type':[('NUMBER','Number'),('PERCENTAGE','Percentage'),('CURRENCY','Currency'),('DATE','Date'),('YES_NO','Yes/No'),('TEXT','Text')],
 'KPI Contribution Source':[('INTERNAL','Internal'),('SUPPLIER','Supplier'),('AUTOMATED','Automated')],
 'KPI Collection Method':[('DIRECT_ENTRY','Direct Entry'),('QUERY','Query')],
 'KPI Initialization Method':[('NO_DEFAULT','No Default'),('STATIC_DEFAULT','Static Default'),('PRIOR_PERIOD','Prior Period')],
}
seeds=[{'Object':obj,'Code':c,'Name':n,'Active?':True,'Sort':i*10} for obj,vals in seed_groups.items() for i,(c,n) in enumerate(vals,1)]
members=[{'Program.Code':None,'KPI.Code':k['Code'],'Display Order':i*10,'Required for Publication?':None} for i,k in enumerate(kpis,1)]
result={'source_name':src['source'],'kpis':kpis,'categories':cats,'lookup_seeds':seeds,'memberships':members,'scoring':scores,'history':hist,'months':months,'summary':{'kpis':len(kpis),'months':len(months),'historical_rows':len(hist),'numeric_points':sum(isinstance(r['Entered Points (source)'],(int,float)) for r in hist),'blank_points':sum(r['Entered Points (source)'] is None for r in hist),'stated_maximum':sum(k['Maximum Points'] for k in kpis),'external_links':len(src['external_links'])}}
(base/'prepared.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(result['summary']))
for m in months:
    print(m['Reporting Month'],m['Source Points Sum'],m['Source Overall %'], 'implied denominator',round(m['Source Points Sum']/m['Source Overall %'],8))
