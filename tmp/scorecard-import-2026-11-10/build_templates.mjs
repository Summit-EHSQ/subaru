import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'../..');
const output=path.join(root,'outputs','supplier-scorecard-import-2026-11-10');
const csvDir=path.join(output,'csv');
const data=JSON.parse(await fs.readFile(path.join(here,'prepared.json'),'utf8'));
await fs.mkdir(csvDir,{recursive:true});
const wb=Workbook.create();
const dark='#233B53', ink='#253448', amber='#FFF0CC', pale='#F3F6F9', red='#9C3030';
const made=[];
function col(n){let s='';while(n){n--;s=String.fromCharCode(65+n%26)+s;n=Math.floor(n/26)}return s}
function csvValue(v){if(v==null)return '';if(typeof v==='boolean')return v?'TRUE':'FALSE';const s=String(v);return /[",\r\n]/.test(s)?'"'+s.replaceAll('"','""')+'"':s}
async function csv(name,headers,rows){await fs.writeFile(path.join(csvDir,name),'\uFEFF'+[headers,...rows.map(r=>headers.map(h=>r[h]))].map(r=>r.map(csvValue).join(',')).join('\r\n')+'\r\n','utf8')}
function table(name,headers,rows,widths={},options={}){
  const sh=wb.worksheets.add(name);const end=rows.length+1;const endcol=col(headers.length);
  sh.showGridLines=false;
  sh.getRange(`A1:${endcol}${Math.max(end,2)}`).format.font={name:'Arial',size:10,color:ink};
  sh.getRange(`A1:${endcol}${Math.max(end,2)}`).format.verticalAlignment='center';
  sh.getRange(`A1:${endcol}1`).values=[headers];
  if(rows.length)sh.getRange(`A2:${endcol}${end}`).values=rows.map(r=>headers.map(h=>r[h]??null));
  sh.getRange(`A1:${endcol}1`).format={fill:dark,font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'},wrapText:true,horizontalAlignment:'center',verticalAlignment:'center',rowHeight:42};
  sh.getRange(`A1:${endcol}1`).format.borders={insideVertical:{style:'thin',color:'#FFFFFF'}};
  sh.getRange(`A2:${endcol}${Math.max(end,2)}`).format.rowHeight=options.rowHeight??30;
  for(let i=1;i<=headers.length;i++){
    sh.getRange(`${col(i)}1:${col(i)}${Math.max(end,2)}`).format.columnWidth=widths[headers[i-1]]??22;
    sh.getRange(`${col(i)}2:${col(i)}${Math.max(end,2)}`).setNumberFormat('@');
  }
  if(rows.length){
    sh.tables.add(`A1:${endcol}${end}`,true,'Tbl'+name.replace(/[^A-Za-z0-9]/g,''));
    for(let r=2;r<=end;r++)if(r%2===0)sh.getRange(`A${r}:${endcol}${r}`).format.fill=pale;
  }
  sh.freezePanes.freezeRows(1);
  if(options.freezeColumns)sh.freezePanes.freezeColumns(options.freezeColumns);
  made.push({name,headers,rows,sh});return sh;
}
function setNumeric(sh,headers,fields,end,format='#,##0.00'){
  for(const h of fields){const i=headers.indexOf(h)+1;if(i>0)sh.getRange(`${col(i)}2:${col(i)}${end}`).setNumberFormat(format)}
}
function missing(sh,headers,fields,end){for(const f of fields){const c=col(headers.indexOf(f)+1);sh.getRange(`${c}2:${c}${end}`).conditionalFormats.addCustom(`LEN(${c}2)=0`,{fill:amber})}}
function dates(sh,headers,fields,rows){for(const f of fields){let i=headers.indexOf(f);for(let r=0;r<rows.length;r++){if(rows[r][f])sh.getCell(r+1,i).values=[[new Date(rows[r][f]+'T00:00:00Z')]]}sh.getRange(`${col(i+1)}2:${col(i+1)}${rows.length+1}`).setNumberFormat('yyyy-mm-dd')}}

const kh=Object.keys(data.kpis[0]);
const ki=table('KPI Import',kh,data.kpis,{'Code':30,'Name':47,'Description':91,'Maximum Points':15,'Contributor Group.ID':26,'Feedback Contact.ID':26,'Aggregation Method.Code':27},{freezeColumns:2});
ki.tabColor=dark;
ki.getRange('C2:C21').format.wrapText=true;
ki.getRange('B2:B21').format.wrapText=true;
ki.getRange('A2:V21').format.verticalAlignment='top';
data.kpis.forEach((k,i)=>{
  const lines=k.Description.split('\n').reduce((a,t)=>a+Math.max(1,Math.ceil(t.length/86)),0);
  ki.getRange(`A${i+2}:V${i+2}`).format.rowHeight=Math.max(95,Math.min(370,lines*13+15));
});
setNumeric(ki,kh,['Maximum Points','Static Default Points'],21);
ki.getRange('U2:V21').setNumberFormat('yyyy-mm-dd');
missing(ki,kh,['Contributor Group.ID','Feedback Contact.ID','Aggregation Method.Code','Effective From'],21);
for(const [field,vals] of [['Category.Code',data.categories.map(x=>x.Code)],['Value Type.Code',data.lookup_seeds.filter(x=>x.Object==='KPI Value Type').map(x=>x.Code)],['Contribution Source.Code',['INTERNAL','SUPPLIER','AUTOMATED']],['Collection Method.Code',['DIRECT_ENTRY','QUERY']],['Initialization Method.Code',['NO_DEFAULT','STATIC_DEFAULT','PRIOR_PERIOD']]]){
  const c=col(kh.indexOf(field)+1);ki.getRange(`${c}2:${c}21`).dataValidation={rule:{type:'list',values:vals}};
}
await csv('01_Supplier_Scorecard_KPI.csv',kh,data.kpis);

const ch=['Code','Name','Active?','Sort'];
const ca=table('Category Import',ch,data.categories,{'Code':24,'Name':24,'Active?':14,'Sort':14});
setNumeric(ca,ch,['Sort'],5,'0');
await csv('02_KPI_Category.csv',ch,data.categories);

const lh=['Object','Code','Name','Active?','Sort'];
const lo=table('Lookup Seeds',lh,data.lookup_seeds,{'Object':32,'Code':24,'Name':24,'Active?':14,'Sort':14});
setNumeric(lo,lh,['Sort'],15,'0');
for(const [index,obj] of ['KPI Value Type','KPI Contribution Source','KPI Collection Method','KPI Initialization Method'].entries())await csv(`${String(index+3).padStart(2,'0')}_${obj.replaceAll(' ','_')}.csv`,ch,data.lookup_seeds.filter(x=>x.Object===obj));

const ah=['Code','Name','Active?','Sort','Description'];
const ag=table('Aggregation Import',ah,[],{'Code':26,'Name':30,'Active?':14,'Sort':12,'Description':85});
ag.getRange('A2:E2').format.fill=amber;
ag.getRange('A4').values=[['No approved aggregation codes or algorithms are supplied.']];
ag.getRange('A5').values=[['Enter approved records in row 2 onward; use matching Codes in KPI Import.']];
ag.getRange('A4:A5').format.font={name:'Arial',size:10,color:ink};
await csv('07_KPI_Aggregation_Method.csv',ah,[]);

const ph=Object.keys(data.memberships[0]);
const pm=table('Program KPI Import',ph,data.memberships,{'Program.Code':30,'KPI.Code':34,'Display Order':18,'Required for Publication?':28});
setNumeric(pm,ph,['Display Order'],21,'0');
missing(pm,ph,['Program.Code','Required for Publication?'],21);
await csv('08_Scorecard_Program_KPI.csv',ph,data.memberships);

const hh=Object.keys(data.history[0]);
const hi=table('History Staging',hh,data.history,{'Staging Key':53,'Supplier Name (source)':32,'KPI.Code':33,'Source Cell':35,'Raw Value Source':42,'Review Issue':58},{freezeColumns:1,rowHeight:30});
dates(hi,hh,['Reporting Period Start','Reporting Period End'],data.history);
setNumeric(hi,hh,['Value - Number','Entered Points (source)','Stated Maximum Points'],241);
hi.getRange('Z2:Z241').format.wrapText=true;
hi.getRange('A2:AB241').format.rowHeight=42;
hi.getRange('Z2:Z241').conditionalFormats.addCustom('LEN(Z2)>0',{fill:amber});
await csv('09_Historical_KPI_Staging_NOT_DIRECT_IMPORT.csv',hh,data.history);

const mh=['Reporting Month','Numeric KPI Cells','Blank KPI Cells','Points from Staging','Source Points Sum','Points Difference','Current Stated Maximum','Points / Stated Maximum','Source Overall %','Implied Source Denominator','Difference from Source (pp)','Source Quality %','Quality Points from Staging','Quality Stated Maximum','Quality Recalculated %','Quality Difference (pp)','Quality Source','Overall Source'];
const mr=data.months.map(m=>Object.fromEntries(mh.map(h=>[h,m[h]??null])));
const mc=table('Monthly Checks',mh,mr,{'Reporting Month':19,'Difference from Source (pp)':24,'Quality Difference (pp)':23,'Quality Source':32,'Overall Source':32},{rowHeight:32,freezeColumns:1});
dates(mc,mh,['Reporting Month'],mr);
setNumeric(mc,mh,mh.filter(h=>!['Reporting Month','Quality Source','Overall Source'].includes(h)),13);
const index=Object.fromEntries(hh.map((h,i)=>[h,col(i+1)]));
for(let r=2;r<=13;r++){
  mc.getRange(`B${r}:D${r}`).formulas=[[
    `=COUNTIFS('History Staging'!$N$2:$N$241,A${r},'History Staging'!$V$2:$V$241,"NUMERIC")`,
    `=COUNTIFS('History Staging'!$N$2:$N$241,A${r})-B${r}`,
    `=SUMIFS('History Staging'!$U$2:$U$241,'History Staging'!$N$2:$N$241,A${r})`]];
  mc.getRange(`F${r}:H${r}`).formulas=[[`=D${r}-E${r}`,`=SUM('KPI Import'!$K$2:$K$21)`,`=IF(G${r}=0,"",D${r}/G${r})`]];
  mc.getRange(`J${r}:K${r}`).formulas=[[`=IF(I${r}=0,"",E${r}/I${r})`,`=(H${r}-I${r})*100`]];
  const qcodes=data.kpis.filter(k=>k['Category.Code']==='QUALITY').map(k=>k.Code);
  const qsum=qcodes.map(c=>`SUMIFS('History Staging'!$U$2:$U$241,'History Staging'!$N$2:$N$241,A${r},'History Staging'!$L$2:$L$241,"${c}")`).join('+');
  mc.getRange(`M${r}:P${r}`).formulas=[[`=${qsum}`,`=SUMIFS('KPI Import'!$K$2:$K$21,'KPI Import'!$E$2:$E$21,"QUALITY")`,`=IF(N${r}=0,"",M${r}/N${r})`,`=(O${r}-L${r})*100`]];
}
mc.getRange('H2:I13').setNumberFormat('0.00%');mc.getRange('L2:L13').setNumberFormat('0.00%');mc.getRange('O2:O13').setNumberFormat('0.00%');
for(const c of ['B','C','G','M','N'])mc.getRange(`${c}2:${c}13`).setNumberFormat('0');
mc.getRange('F2:F13').conditionalFormats.addCustom('ABS(F2)>0.0000001',{fill:'#FCE4E4',font:{color:red,bold:true}});
mc.getRange('K2:K13').conditionalFormats.addCustom('ABS(K2)>0.0000001',{fill:amber});
mc.getRange('P2:P13').conditionalFormats.addCustom('ABS(P2)>0.0000001',{fill:amber});
mc.getRange('A16').values=[['Source: Historical tracking!E27:P28 and KPI cells E6:P26.']];
mc.getRange('A17').values=[['Implied denominator = source points sum / source overall %. It is an inference, not a historical configuration field.']];
mc.getRange('A18').values=[['The source implies 155 through March 2026 and 120 from April. The current definition totals 155; historical maxima and blank-treatment decisions remain open.']];
mc.getRange('A19').values=[['No blanket blank-to-zero or blank-to-Not Applicable conversion has been applied. Quality checks use the stated 75-point category maximum.']];

const sh=Object.keys(data.scoring[0]);
const sr=table('Scoring Reference',sh,data.scoring,{'KPI Code':31,'KPI Name':44,'Frequency (source)':26,'Performance Target':59,'Reporting Method':71,'Scoring Rule (verbatim)':100,'Review Note':96,'Definition Source':41,'Rule Source':30,'Historical Row':41},{freezeColumns:2});
sr.getRange('B2:G21').format.wrapText=true;
sr.getRange('A2:J21').format.verticalAlignment='top';
data.scoring.forEach((x,i)=>{
  const lines=Math.max(...['KPI Name','Frequency (source)','Performance Target','Reporting Method','Scoring Rule (verbatim)','Review Note'].map((h,j)=>x[h].split('\n').reduce((a,t)=>a+Math.max(1,Math.ceil(t.length/[39,22,51,62,87,83][j])),0)));
  sr.getRange(`A${i+2}:J${i+2}`).format.rowHeight=Math.max(83,lines*13+18);
});
await csv('10_Scoring_Reference_NOT_IMPORT.csv',sh,data.scoring);

const mappings=[];
function map(sheet,h,target,type,req,rule){mappings.push({'Template':sheet,'Column':h,'Target Field':target,'Data Type / Match':' '+type,'Required':req,'Mapping / Review':rule})}
for(const h of kh){
  const relationship=h.endsWith('.Code')||h.endsWith('.ID');
  const target=h.replace(/\.(Code|ID)$/,'');
  const req=['Static Default Points','Source Application','Source Report Reference','Source Calculation Description'].includes(h)?'Conditional':['Safety Benchmark Metric.Code','Effective To'].includes(h)?'Optional':'Yes';
  let rule=relationship?'Resolve exactly one target record; the dotted heading is an import mapping alias, not a confirmed tenant field name.':'Map to the same authoring-object field; no immutable Version fields are imported.';
  if(h==='Code')rule='Proposed new SC_* integration key; check for an existing record and upsert by Code to avoid duplicates.';
  if(h==='Description')rule='Target, purpose, frequency, reporting method and scoring text from the source. Description does not implement executable scoring logic.';
  if(h==='Value Type.Code')rule='Proposed type of underlying measured value; points remain in Entered Points. Composite safety/sustainability/warranty/prototype values use NUMBER. Confirm all types; never put awarded points into a percentage or currency raw field.';
  if(h==='Contribution Source.Code')rule='INTERNAL is a draft launch assumption for internal compilation of this workbook. Confirm KPI ownership; survey evidence does not automatically make this SUPPLIER.';
  if(h==='Collection Method.Code')rule='DIRECT_ENTRY follows the initial-catalogue design. Source hints mentioning Intelex do not constitute an approved QUERY binding.';
  if(h==='Contributor Group.ID')rule='Required for INTERNAL + DIRECT_ENTRY. Blank: supply the exact platform Group record ID for each KPI.';
  if(h==='Feedback Contact.ID')rule='Blank: supply the exact Employee record ID for each KPI. Supplier contact names are not interchangeable with Employee records.';
  if(h==='Initialization Method.Code')rule='NO_DEFAULT is the draft baseline; confirm separately for annual/biannual assessments. No automatic carry-forward is inferred.';
  if(h==='Maximum Points')rule='Copied exactly from Supplier KPI Scorecard!F7:F26, including 0 for penalty KPIs. Historical production-delivery scores exceed 5 twice; do not clip them.';
  if(h==='Static Default Points')rule='Blank for NO_DEFAULT. Required only for STATIC_DEFAULT and validated against approved scoring range.';
  if(h==='May Be Not Applicable?')rule='FALSE is the draft schema default. Confirm policy before publication; historical blanks are not evidence of Not Applicable.';
  if(h==='Supplier Nonresponse Sets Zero?')rule='FALSE for INTERNAL. Only permitted for SUPPLIER under an approved nonresponse policy.';
  if(h==='Aggregation Method.Code')rule='Blank: no approved codes or algorithms exist in the provided evidence. Complete Aggregation Import and select the appropriate approved method per KPI.';
  if(['Source Application','Source Report Reference','Source Calculation Description'].includes(h))rule='Blank for DIRECT_ENTRY. Populate only when switching to QUERY with validated supplier/period/source/scoring mappings.';
  if(h==='Safety Benchmark Metric.Code')rule='Blank: the source safety KPI is a composite of incidence, lost time and Kaizen; one LTIR/TRIR relationship would misrepresent it.';
  if(h==='Effective From')rule='Blank: enter the approved configuration effective date. The earliest history month does not establish the KPI version start.';
  if(h==='Effective To')rule='Optional inclusive end date; blank means open-ended. Must not precede Effective From.';
  const type=h.endsWith('.Code')?'Relationship by stable Code':h.endsWith('.ID')?'Relationship by record ID':h.endsWith('?')?'Boolean TRUE/FALSE':h.includes('Points')?'Decimal':h.startsWith('Effective ')?'Date yyyy-mm-dd':h==='Description'?'Long text':'Text';
  map('KPI Import',h,target,type,req,rule);
}
for(const h of ch)map('Category Import / Lookup Seeds',h,h,h==='Active?'?'Boolean TRUE/FALSE':h==='Sort'?'Decimal':'Text',h==='Sort'?'Optional':'Yes',h==='Code'?'Categories SAFETY/QUALITY/COST/DELIVERY are proposed Codes; the other lookup Codes match specification section 7. Reuse existing records by Code. Confirm inherited Code uniqueness is scoped to each concrete catalogue.':'Create records in each concrete catalogue object. Exclude the Object column from import; separate CSVs are provided.');
map('Aggregation Import','Description','Description','Long text','Yes','Document the approved algorithm, supported value types, period and weighting behavior. No seed rows have been invented.');
for(const h of ph)map('Program KPI Import',h,h.replace('.Code',''),h.endsWith('.Code')?'Relationship by Code':h==='Display Order'?'Decimal':'Boolean TRUE/FALSE','Yes',h==='Program.Code'?'Blank: assign a configured Program. Source annual/biannual frequencies do not establish a new approved Program or monthly membership.':h==='Required for Publication?'?'Blank: confirm publication requirements per Program/KPI; do not require unexplained historical blanks.':'Unique pair (Program, KPI). Display orders preserve the source sequence, including separate COO and IMDS entries.');
for(const h of hh){
  let target='Staging / provenance only',type='Text',req='Staging';
  if(h==='Entered Points (source)'){target='Entered Points via approved migration/entry process';type='Decimal';req='Numeric source rows only'}
  if(['Value - Number','Value - Text','Value - Date','Value - Yes/No'].includes(h)){target=h;type=h==='Value - Number'?'Decimal':h==='Value - Date'?'Date yyyy-mm-dd':h==='Value - Yes/No'?'Nullable boolean':'Long text'}
  if(h.endsWith('.ID')){target=h.slice(0,-3);req='Resolve before historical migration'}
  if(h==='Reporting Period Start'||h==='Reporting Period End'){target=h;type='Date yyyy-mm-dd'}
  let rule='Do not upload this staging column directly into governed KPI Value records. Resolve and transform through an approved historical migration or use authorized entry.';
  if(h==='Staging Key')rule='Local composite key Supplier Code | yyyy-mm | KPI.Code. Not a proposed Intelex field. Keep exactly one row per key.';
  if(h==='Entered Points (source)')rule='187 numeric cached scores are retained, including zeros, decimals and two values over the stated maximum. 53 source whitespace blanks remain null.';
  if(h==='Value - Number')rule='Only PPM and sorting cost have supplied raw values (24 cells). PPM uses Historical tracking!D64:D75; cost uses hidden chart data D11:O11. Currency code is unspecified. All other raw values remain blank.';
  if(h==='Source Value State')rule='NUMERIC and BLANK_WHITESPACE distinguish zero from a missing or excluded value without assigning business applicability.';
  if(h==='Is Not Applicable?'||h==='Exception Treatment.Code')rule='Intentionally blank: source whitespace alone cannot decide business applicability or authorize an exception treatment.';
  if(h==='Stated Maximum Points')rule='Reference maximum from the supplied scorecard definition, not verified historical version configuration.';
  if(h==='Supplier Entity Type')rule='Blank: A315 and its name are evidenced, but Parent Company versus Facility and the exact tenant Supplier record are not.';
  if(h==='Value Type.Code')rule='Proposed value type copied from KPI Import; confirm before historical version mapping. Raw percentages have no supplied values, so no scaling has been assumed.';
  map('History Staging',h,target,type,req,rule);
}
const fh=Object.keys(mappings[0]);
const fm=table('Field Mapping',fh,mappings,{'Template':33,'Column':33,'Target Field':57,'Data Type / Match':33,'Required':37,'Mapping / Review':121},{rowHeight:58});
fm.getRange(`C2:F${mappings.length+1}`).format.wrapText=true;
fm.getRange(`A2:F${mappings.length+1}`).format.verticalAlignment='top';
for(let i=0;i<mappings.length;i++){
  const lines=Math.max(Math.ceil(mappings[i]['Mapping / Review'].length/105),Math.ceil(mappings[i]['Target Field'].length/48));
  fm.getRange(`A${i+2}:F${i+2}`).format.rowHeight=Math.max(45,lines*13+14);
}

const read=wb.worksheets.add('ReadMe');read.showGridLines=false;read.tabColor='#8492A0';
read.getRange('A1:B40').format.font={name:'Arial',size:10,color:ink};
read.getRange('A1:A40').format.columnWidth=31;read.getRange('B1:B40').format.columnWidth=115;
read.getRange('A2').values=[['Supplier Scorecard KPI import drafts']];read.getRange('A2').format.font={name:'Arial',size:15,bold:true,color:dark};
read.getRange('A3:B3').format.borders={bottom:{style:'thin',color:dark}};
const guidance=[
 ['Status','Draft configuration templates and historical staging. Tenant import bindings and missing business inputs must be completed before upload. No records have been imported or published.'],
 ['Contents','20 KPI definitions; 4 category records; 14 standard lookup records; an empty aggregation-method template; 20 Program/KPI membership drafts; 240 historical KPI/period rows.'],
 ['Source workbook',data.source_name+' — Supplier KPI Scorecard!B7:F26; Score Key!B4:E23; Historical tracking!D5:P28 and D64:D75; hidden PPM and Cost Charts data!D11:O11; SupplierMaintenance!A80:C80.'],
 ['Target schema','supplier-scorecard-technical-specification.md, sections 7, 8.1, 9.2, 12 and 20.2, revised 2026-11-04. ADR-058 supplies the direct-entry launch and governed bulk-load approach. Object labels are design labels; no deployed tenant schema was supplied.'],
 ['1. Resolve records','Confirm existing catalogue Codes, the tenant field bindings and child-scoped inherited Code uniqueness. Use upsert/deduplication by Code; do not create duplicate lookups. Code and .ID headings are mapping aliases, not certified native loader headers.'],
 ['2. Load lookups','Import/reuse CSVs 02-06 into their respective concrete catalogue objects. Complete 07 with approved aggregation methods and algorithms. Do not instantiate the abstract catalogue parent.'],
 ['3. Complete KPI inputs','In KPI Import, amber blank cells need Contributor Group.ID, Feedback Contact.ID, Aggregation Method.Code and Effective From. Confirm proposed SC_* Codes, raw Value Types, INTERNAL contribution, NO_DEFAULT initialization and applicability policy. Preserve collection as DIRECT_ENTRY for launch.'],
 ['4. Review scoring','Read Scoring Reference before configuration approval. The Description carries source scoring text; importing it does not create executable scoring. Resolve the missing PPM bands, overlapping sorting bands, delivery inequalities, penalty behavior and historic outliers.'],
 ['5. Import and publish','Map CSV 01 to Supplier Scorecard KPI authoring fields. Reconcile 20 unique records and maxima totalling 155. Publish through the configured KPI Publish action after required fields and effective-date validation; do not import KPI Version rows.'],
 ['6. Attach to Programs','Use CSV 08 only after assigning an existing/configured Program.Code and Required for Publication? for each row. This preserves source order without deciding which monthly, annual or biannual Program should contain each KPI. Program/version configuration and participation are separate prerequisites.'],
 ['7. Historical results','CSV 09 is a normalized review/staging extract, not an upload file for governed KPI Values. Resolve supplier subtype and record, parent, historical Program/KPI versions, maxima, blank treatment and Run/Scorecard relationships before an approved migration process. That process must create the full Run → Scorecard → KPI Value graph with provenance; it is not implemented by these templates.'],
 ['Historical coverage','A315 Heartland Automotive, LLC; 2025-09-01 to 2026-08-31; 187 numeric point cells and 53 whitespace blanks. Cached external-link results are copied without refreshing the seven linked workbooks. Source freshness and historical definitions remain unverified.'],
 ['Raw values vs points','Only 12 PPM measurements and 12 sorting-cost amounts are supplied as typed raw values. All other raw value fields remain empty. Awarded scores appear only in Entered Points (source); zero is preserved. Supplier code/name are source identifiers; no tenant entity subtype is inferred.'],
 ['Blank treatment','No whitespace blank is converted to zero, Not Applicable, carry-forward or an exception. Historical applicability/exception fields stay blank for an explicit business decision. Recall and downtime blanks may reflect penalty logic, which needs separate confirmation.'],
 ['Monthly reconciliation','All monthly staging point sums match independently summed source KPI cells. Source percentages imply a 155-point denominator through March 2026 and 120 from April 2026. Monthly Checks compares the current 155-point definition with those source percentages and exposes the difference; it does not choose a historical denominator.'],
 ['Specific outliers','Production delivery has 10 points in October 2025 and February 2026, versus stated maximum 5. PRC response has 4 points in July 2026 despite a documented 0/5 rule. Values are preserved and flagged; historical version rules or corrections must resolve them.'],
 ['Excluded from import','Quality/overall totals and ranks are controls or computed outputs, not KPI definition records. No supplier master records, guessed NAICS/commodity, invented feedback contacts, Safety Benchmark records or new scheduling Programs have been created.'],
 ['Using the files','Each CSV has a header in row 1 and data from row 2, UTF-8 with BOM, comma separators and quoted multiline descriptions. The workbook is the editable review master. After editing, export only the relevant import sheet as CSV; split Lookup Seeds by Object and exclude that column. Keep Scoring Reference, Monthly Checks, Field Mapping and ReadMe out of loader uploads.'],
 ['Native application check','XLSX contents, formulas, CSV counts, source reconciliation and rendered views were checked. No Intelex tenant import test or native Excel recalculation test has been performed.'],
];
read.getRange(`A5:B${guidance.length+4}`).values=guidance;
read.getRange(`A5:A${guidance.length+4}`).format.font={name:'Arial',size:10,bold:true,color:dark};
read.getRange(`A5:B${guidance.length+4}`).format.verticalAlignment='top';
read.getRange(`B5:B${guidance.length+4}`).format.wrapText=true;
guidance.forEach((r,i)=>{read.getRange(`A${i+5}:B${i+5}`).format.rowHeight=Math.max(34,Math.ceil(r[1].length/102)*13+15);if(i%2===0)read.getRange(`A${i+5}:B${i+5}`).format.fill=pale});
made.push({name:'ReadMe',sh:read,headers:['Topic','Guidance'],rows:guidance});

// Check that reconciliations respond to both source-point and definition changes.
hi.getRange('U2').values=[[6]];
if(Math.abs(mc.getRange('D2').values[0][0]-37.09)>1e-8)throw new Error('Points recalculation did not update');
hi.getRange('U2').values=[[5]];
ki.getRange('K2').values=[[6]];
if(mc.getRange('G2').values[0][0]!==156)throw new Error('Maximum recalculation did not update');
ki.getRange('K2').values=[[5]];
wb.recalculate();
const inspections=[];
for(const s of ['KPI Import','History Staging','Monthly Checks'])inspections.push({sheet:s,result:(await wb.inspect({kind:'table',range:`'${s}'!A1:${s==='Monthly Checks'?'P13':s==='History Staging'?'E4':'K4'}`,include:'values,formulas',tableMaxRows:s==='Monthly Checks'?13:4,tableMaxCols:16,maxChars:8500})).ndjson});
inspections.push({errors:(await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:100},summary:'final formula error scan',maxChars:2000})).ndjson});
await fs.writeFile(path.join(here,'verification.json'),JSON.stringify(inspections,null,2));
const file=await SpreadsheetFile.exportXlsx(wb);await file.save(path.join(output,'Supplier_Scorecard_KPI_Import_Drafts.xlsx'));
const previewRanges={
 'KPI Import':['A1:D4','E1:L4','M1:V4'],
 'Category Import':['A1:D5'],
 'Lookup Seeds':['A1:E15'],
 'Aggregation Import':['A1:E6'],
 'Program KPI Import':['A1:D8'],
 'History Staging':['A1:C8','L1:Q8','U1:AB8'],
 'Monthly Checks':['A1:G13','H1:P13'],
 'Scoring Reference':['A1:C5','D1:F5','G1:J5'],
 'Field Mapping':['A1:C8','D1:F8'],
 'ReadMe':['A1:B13','A14:B23'],
};
await fs.mkdir(path.join(here,'previews'),{recursive:true});
for(const [name,ranges] of Object.entries(previewRanges))for(let i=0;i<ranges.length;i++){
  const img=await wb.render({sheetName:name,range:ranges[i],scale:1,format:'png'});
  await fs.writeFile(path.join(here,'previews',`${name.replaceAll(' ','_')}_${i+1}.png`),new Uint8Array(await img.arrayBuffer()));
}
const monthly=mc.getRange('A2:P13').values;
for(let i=0;i<monthly.length;i++){
 if(Math.abs(monthly[i][5])>1e-8)throw new Error('Monthly source points mismatch '+i);
 if(Math.abs(monthly[i][15])>1e-8)throw new Error('Quality score mismatch '+i);
 if(monthly[i][1]+monthly[i][2]!==20)throw new Error('Incomplete historical month '+i);
}
await fs.writeFile(path.join(here,'monthly_values.json'),JSON.stringify(monthly,null,2));
const instructions=`Supplier Scorecard KPI import drafts\n\nUse Supplier_Scorecard_KPI_Import_Drafts.xlsx as the review master.\n\n01: KPI authoring records (20); complete amber required fields before import.\n02-06: Category and standard catalogue seed records; reuse existing Codes.\n07: Empty aggregation method template; approved algorithms/Codes are missing.\n08: Program/KPI membership drafts; assign Program and publication requirements.\n09: Historical source staging (240 rows), NOT a direct KPI Value import.\n10: Scoring evidence and conflicts, NOT an import object.\n\nThese headers are logical mapping aliases based on the project specification, not verified tenant import-schema names. Resolve relationship Codes and IDs through the tenant loader. Publish immutable versions using the application action. Read the workbook ReadMe and Field Mapping before import.\n\nSource: ${data.source_name}. Dates: September 2025-August 2026. Source macros were not run and external links were not refreshed.\n`;
await fs.writeFile(path.join(output,'START_HERE.txt'),instructions);
console.log(JSON.stringify({output,summary:data.summary,worksheets:made.map(x=>x.name),previews:Object.values(previewRanges).flat().length}));
