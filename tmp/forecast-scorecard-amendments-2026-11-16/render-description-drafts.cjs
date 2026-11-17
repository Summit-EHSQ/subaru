const fs = require('fs');
const path = require('path');
const dir = __dirname;
const source = path.resolve(dir, '../supplier-scorecard-menu-amendment-tasks-2026-11-16/amendment-task-records.json');
const snapshot = JSON.parse(fs.readFileSync(source, 'utf8'));
const idMap = Object.fromEntries(Object.entries(snapshot.originalToValidator).map(([real, alias]) => [alias, real]));
const encode = v => String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const human = value => {
  let text = String(value ?? '');
  for (const [alias, real] of Object.entries(idMap)) text = text.replace(new RegExp('\\b' + alias + '\\b', 'g'), real);
  return text;
};
const paragraph = (label, text) => `<div><strong>${encode(label)}:</strong><br/>${encode(human(text)).replace(/\r?\n/g, '<br/>')}</div>`;
const entries = [];
for (const task of snapshot.tasks) {
  const stable = `supplier-scorecard-navigation-security-amendment:${task.originalTaskId}`;
  const parts = [
    paragraph('Amendment ID', task.originalTaskId),
    paragraph('Source identifier', stable),
    paragraph('Linked original task', task.linkedOriginalTaskId),
    paragraph('Task category', task.category),
    paragraph('Objective', task.objective),
    paragraph('Detailed scope', task.scope),
    paragraph('Deliverable', task.deliverable),
    paragraph('Work needed first', task.prerequisites.map(id => idMap[id] || id).join(', ') || 'None'),
    paragraph('What the earlier tasks provide', task.predecessorOutputs.map(o => `${idMap[o.id] || o.id}: ${o.description}`).join('\n') || 'None'),
    paragraph('What is waiting', task.blockedStatus),
    paragraph('Recommended implementer role', task.implementer),
    paragraph('Recommended reviewer/approver role', task.reviewer),
    paragraph('Why this role is recommended', task.rationale)
  ];
  if (task.configurationRows.length) {
    parts.push('<div><strong>Fields and features to set up:</strong></div>');
    for (const [label, instruction] of task.configurationRows) parts.push(paragraph(label, instruction));
  }
  if (task.modifications.length) {
    parts.push('<div><strong>Changes to the existing setup:</strong></div>');
    for (const change of task.modifications) parts.push(paragraph(change.element, change.change));
  }
  if (task.steps.length) {
    parts.push('<div><strong>Build instructions:</strong></div>');
    task.steps.forEach((step, i) => parts.push(`<div>${i + 1}. ${encode(human(step))}</div>`));
  }
  parts.push('<div><strong>How to check the result:</strong></div>');
  task.accept.forEach(check => parts.push(`<div>&#8226; ${encode(human(check))}</div>`));
  parts.push(paragraph('Information needed for this task', task.suppliedInputDescriptions.map(input => `${input.id}: ${input.description}`).join('\n') || 'None'));
  parts.push(paragraph('Specification references', task.refs.join('\n')));
  parts.push(paragraph('Assumptions and open questions', task.assumptions));
  const description = parts.join('<div><br/></div>');
  if (/\bIMP-\d+\b/.test(description)) throw new Error('Validator alias leaked: ' + task.originalTaskId);
  entries.push({amendmentId:task.originalTaskId, linkedOriginalTaskId:task.linkedOriginalTaskId, title:`${task.originalTaskId} — ${task.title}`, stableIdentifier:stable, description});
  fs.writeFileSync(path.join(dir, task.originalTaskId + '.html'), description + '\n');
}
fs.writeFileSync(path.join(dir, 'description-drafts.json'), JSON.stringify({source, preparedContentOnly:true, noProjectOrParentIdentifiersAssigned:true, tasks:entries}, null, 2) + '\n');
console.log(JSON.stringify(entries.map(t => ({id:t.amendmentId, parent:t.linkedOriginalTaskId, title:t.title, descriptionCharacters:t.description.length})), null, 2));
