const fs = require('node:fs');
const path = require('node:path');
const gate = require('C:/Users/DaveMcLean/.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs');
const root = path.resolve(__dirname, '../..');
const plan = JSON.parse(fs.readFileSync(path.join(root, 'docs/phase 2/ppap/solution_specification/implementation-plan.json'), 'utf8'));
const markdown = fs.readFileSync(path.join(root, 'docs/phase 2/ppap/solution_specification/implementation-plan.md'), 'utf8');
const review = JSON.parse(fs.readFileSync(path.join(__dirname, 'baseline-review-notes.json'), 'utf8'));
// Review decisions and instruction notes were manually authored before this formatter.
// This file only binds those notes to the final snapshots and checks coverage.
for (const note of review.tasks) {
  const task = plan.tasks.find(t => t.id === note.id);
  if (!task) throw new Error('Missing reviewed task ' + note.id);
  const actualPaths = gate.units(task).map(u => u.path).sort();
  const reviewedPaths = note.instructions.map(u => u.path).sort();
  if (JSON.stringify(actualPaths) !== JSON.stringify(reviewedPaths)) throw new Error('Review paths changed for ' + note.id);
  note.taskHash = gate.hash(task);
  note.renderedTaskHash = gate.renderedHash(markdown, task.id);
}
fs.writeFileSync(path.join(__dirname, 'baseline-review.json'), JSON.stringify(review, null, 2) + '\n');
const taskIds = review.tasks.map(t => t.id);
const reviewedPlan = {...plan, tasks: plan.tasks.filter(t => taskIds.includes(t.id))};
const result = gate.validate(reviewedPlan, markdown, review);
fs.writeFileSync(path.join(__dirname, 'baseline-review-validation.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({tasks: review.tasks.length, units: review.tasks.reduce((n,t) => n+t.instructions.length,0), passed: result.passed, errors: result.errors}, null, 2));
if (!result.passed) process.exitCode = 1;
