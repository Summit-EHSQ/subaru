import fs from 'node:fs/promises';
import path from 'node:path';
import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';

const root = process.cwd();
const workDir = path.join(root, 'tmp/bomecs-field-import-01a1f54f');
const outDir = path.join(root, 'outputs/01a1f54f-bomecs-field-import');
const source = path.join(root, 'docs/phase 2/product-management/solution_specification/object_model/product-management-api-technical-specification.md');
const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load('C:/Users/DaveMcLean/Downloads/ImportFieldsTemplate - ObjectName.xlsx'));
await fs.mkdir(workDir, { recursive: true });
if (process.argv.includes('--inspect')) {
  console.log((await workbook.inspect({ kind:'workbook,sheet,table', maxChars:4000, tableMaxRows:3, tableMaxCols:17 })).ndjson);
  for (const name of ['Simple Fields','Reference Fields']) {
    const image = await workbook.render({ sheetName:name, range:'A1:Q4', scale:1.3, format:'png' });
    await fs.writeFile(path.join(workDir, `template-${name.replaceAll(' ','-')}.png`), new Uint8Array(await image.arrayBuffer()));
  }
  process.exit(0);
}

const markdown = await fs.readFile(source, 'utf8');
const section = markdown.split('### 5.1 BOMECS Part API Recod')[1].split('### 5.2 Program Reference')[0];
const contract = section.split(/\r?\n/).filter(line => line.startsWith('| ') && !line.startsWith('| Field ')).map(line => line.split('|').slice(1,-1).map(v=>v.trim()));
if (contract.length !== 20) throw new Error(`Expected 20 contract entries, got ${contract.length}`);
const byName = new Map(contract.map(row=>[row[0],row]));
const shared = 'Human access: Administrators and Part Integration - Admin Security Group. Read only on receiving screens.';
const descriptions = {
  'Source System': 'Connector-supplied source namespace. Immutable after creation. Together with External ID, identifies a source record uniquely.',
  'External ID': 'Imported from $.id. Immutable opaque source identifier. Together with Source System, forms the upsert key. Preserve source spelling and spaces.',
  'Part Number': 'Imported from $.partNumber. Required and nonblank. Preserve identifier spelling. Not assumed globally unique. A changed number does not create a new source identity.',
  'Part Name': 'Imported from $.partName. Initially null. Preserve source spaces, including trailing spaces. Explicit null clears the value.',
  'Future Part Name': 'Imported from $.futurePartName. Initially null. Explicit null clears the value. Proposed text type and maximum length require confirmation against non-null producer data.',
  'LS Part Number': 'Imported from $.lsPartNumber. Initially null. Explicit null clears the value. Proposed text type requires confirmation. No inferred relationship to another part.',
  'LE Part Number': 'Imported from $.lePartNumber. Initially null. Explicit null clears the value. Proposed text type requires confirmation. No inferred relationship to another part.',
  'Unit Cost': 'Imported from $.unitCost. Initially null. Proposed decimal precision 19, scale 6. Convert exactly without silent rounding. Confirm currency, unit basis, precision, and negative-value policy before business use. No minimum, maximum, or UoM is assumed.',
  'Drawing Number': 'Imported from $.drawingNumber. Initially null. No automatic Drawing object lookup by name. A matching Product Family name does not merge identities.',
  'Active?': 'Imported from the Boolean $.status. No default. False prevents new manual component assignments while retaining the record and existing links. No external application effect.',
  'Name': 'Stored display label imported from $.name. On creation only, use Part Number when name is absent or null. Explicit null on update is rejected. Not a formula or match key. Configure as the object display field separately.',
  'Notes': 'Imported from $.notes as plain Unicode long text. Initially null. Explicit null clears the value. Proposed maximum is 65,536 characters. Confirm non-null format and native capacity. Treat as plain text and escape when displayed.',
  'Include All Facilities?': 'Imported from the Boolean $.includeAllFacilities. No default. Preserve the supplied true or false value. Does not grant permissions or create facility associations.',
  'Raw Payload': 'Complete validated request document, including unknown properties and exact string contents. Retain as Unicode long text, with a proposed limit of 1 MiB UTF-8 per document. The template has no byte-limit setting, so Max Length is unset. Verify native capacity and binding before import; use native document storage if text cannot retain the full allowed document. Reject overflow before mutation. Refresh on every accepted receive and retain prior messages through native retention.'
};
const systemNames = {
  'Source System':'SourceSystem','External ID':'ExternalId','Part Number':'PartNumber',
  'Part Name':'PartName','Future Part Name':'FuturePartName','LS Part Number':'LSPartNumber',
  'LE Part Number':'LEPartNumber','Unit Cost':'UnitCost','Drawing Number':'DrawingNumber',
  'Active?':'Active','Name':'Name','Notes':'Notes','Include All Facilities?':'IncludeAllFacilities',
  'Raw Payload':'RawPayload','Programs':'Programs','Flag':'Flag','Tags':'Tags','Product Family':'ProductFamily'
};
const simpleRows = contract.filter(row=>Object.hasOwn(descriptions,row[0])).map(row=> {
  const [caption,type,required] = row;
  const maxMatch=type.match(/max ([\d,]+)/);
  const isBool=type==='Yes/No', isDecimal=caption==='Unit Cost';
  return [caption,systemNames[caption],isBool?'Yes/No':isDecimal?'Decimal':'Text',
    `${descriptions[caption]} ${shared}`,required==='Y',true,
    caption==='Part Number'?1:null,
    maxMatch?Number(maxMatch[1].replaceAll(',','')):null,
    isDecimal?19:null,isDecimal?6:null,null,null,null,null,null,null,null];
});
const referenceSettings = {
  Programs: {target:'Program Reference',many:true, description:'Source-owned M:N links imported from $.programs. Empty collection on creation. A present array replaces the links; an empty array clears them without deleting programs. Omission preserves existing links. Resolve references within Source System. Inactive source references are allowed. Reverse field disabled.'},
  Flag: {target:'Part Flag',many:false,description:'Optional M:1 imported from exact case-sensitive $.Flag. Initially null. Resolve Source System + Code. Explicit null clears the link. No manual selector. Inactive source values are allowed. Never parse a resource key into identity. Reverse field disabled.'},
  Tags: {target:'Part Tag',many:true,description:'Source-owned M:N links imported from $.tags. Empty collection on creation. Resolve Source System + exact Value. A present array replaces the links; an empty array clears them. Omission preserves existing links. Reverse field disabled.'},
  'Product Family': {target:'Product Family',many:false,reverse:true,description:'Optional M:1 imported from $.productFamily or maintained by selectedPartNumbersIds family assignments. Initially null. Explicit null clears the link. Enforce the same Source System. Inactive source references are allowed. Part Numbers is the inverse 1:M navigation field; do not create separate M:N storage. A matching Drawing Number does not merge identities.'}
};
const referenceRows=contract.filter(row=>Object.hasOwn(referenceSettings,row[0])).map(row=>{
  const caption=row[0], cfg=referenceSettings[caption];
  return [caption,systemNames[caption],cfg.target,`${cfg.description} ${shared}`,false,true,cfg.many,!!cfg.reverse,
    cfg.reverse?'Part Numbers':null,cfg.reverse?'PartNumbers':null,cfg.reverse?false:null,cfg.reverse?true:null,cfg.reverse?true:null,
    null,null,null,null];
});
if(simpleRows.length!==14 || referenceRows.length!==4) throw new Error('Field split mismatch');
const omitted=['Supplier Relationships','Revisions'];
for(const field of omitted) if(!byName.get(field)?.[1].startsWith('Inverse 1:M')) throw new Error(`Not an inverse grid: ${field}`);

for(const [name,rows] of [['Simple Fields',simpleRows],['Reference Fields',referenceRows]]) {
  const sheet=workbook.worksheets.getItem(name);
  const lastRow=rows.length+1;
  sheet.getRange(`A2:Q${lastRow}`).values=rows;
  sheet.getRange(`A2:Q${lastRow}`).format.font={name:'Calibri',size:11};
  sheet.getRange(`A1:Q${lastRow}`).format.wrapText=true;
  sheet.getRange(`A1:Q${lastRow}`).format.verticalAlignment='top';
  const widths = name==='Simple Fields'
    ? [27,25,16,93,13,13,14,14,14,12,14,14,16,16,9,16,24]
    : [24,24,27,93,13,13,14,17,22,24,13,13,14,16,16,9,16];
  widths.forEach((width,index)=>sheet.getRangeByIndexes(0,index,lastRow,1).format.columnWidth=width);
  sheet.getRange(`E2:${name==='Simple Fields'?'L':'M'}${lastRow}`).format.horizontalAlignment='center';
  if(name==='Reference Fields')sheet.getRange(`I2:J${lastRow}`).format.horizontalAlignment='left';
  sheet.getRange(`A1:Q${lastRow}`).format.autofitRows();
  sheet.freezePanes.freezeRows(1);
  sheet.freezePanes.freezeColumns(2);
}

workbook.recalculate();
console.log((await workbook.inspect({kind:'table',range:"'Simple Fields'!A1:J15",include:'values,formulas',tableMaxRows:15,tableMaxCols:10,tableMaxCellChars:100,maxChars:6500})).ndjson);
console.log((await workbook.inspect({kind:'table',range:"'Reference Fields'!A1:M5",include:'values,formulas',tableMaxRows:5,tableMaxCols:13,tableMaxCellChars:100,maxChars:3500})).ndjson);
const errorScan=await workbook.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:30},summary:'Final formula error scan'});
console.log(errorScan.ndjson);
for(const [name,range,suffix] of [
  ['Simple Fields','A1:J15','simple-core'],
  ['Simple Fields','K1:Q15','simple-options'],
  ['Reference Fields','A1:H5','reference-core'],
  ['Reference Fields','I1:Q5','reference-reverse'],
]) {
  const preview=await workbook.render({sheetName:name,range,scale:1.2,format:'png'});
  await fs.writeFile(path.join(workDir,`${suffix}.png`),new Uint8Array(await preview.arrayBuffer()));
}
await fs.mkdir(outDir,{recursive:true});
const filePath=path.join(outDir,'ImportFieldsTemplate - BOMECS Part API Recod.xlsx');
await (await SpreadsheetFile.exportXlsx(workbook)).save(filePath);
await fs.writeFile(path.join(workDir,'population-manifest.json'),JSON.stringify({
  source,section:'5.1',objectName:'BOMECS Part API Recod',simpleRows,referenceRows,
  inverseGrids:omitted,proposedSystemNames:true,
  reviewItems:[
    'Verify reference Type names and Reverse Field TRUE/FALSE against the tenant importer before loading.',
    'Confirm proposed field system names and text limits against the tenant.',
    'Verify Notes long-text capacity (65,536 characters) and Raw Payload capacity (1 MiB UTF-8).',
    'Create Supplier Relationships and Revisions only as inverse fields of the child Part references.',
    'Configure composite uniqueness, display field, defaults, receive rules, security, retention, and inverse-grid filter outside this template.',
  ]
},null,2));
console.log(JSON.stringify({filePath,simpleFields:simpleRows.length,referenceFields:referenceRows.length,inverseGridsCreatedWithChildren:omitted}));
