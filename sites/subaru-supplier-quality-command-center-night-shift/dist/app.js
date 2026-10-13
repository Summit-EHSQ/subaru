const entities = {
  all: { name: "All visible entities", subtitle: "1 company · 3 facilities" },
  parent: { name: "Northstar Components, Inc.", subtitle: "Parent company · includes 3 facilities" },
  lafayette: { name: "Lafayette Manufacturing", subtitle: "Facility · Lafayette, IN" },
  "terre-haute": { name: "Terre Haute Components", subtitle: "Facility · Terre Haute, IN" },
  louisville: { name: "Louisville Distribution", subtitle: "Facility · Louisville, KY" }
};

const tasks = [
  { id: "NCR-2026-0184", title: "Submit containment response", type: "Non-conformance", entity: "lafayette", entityName: "Lafayette Manufacturing", due: "Oct 8", overdue: true, days: 2, status: "Action required", tone: "danger", priority: 1, description: "Provide the immediate containment plan and evidence for the steering bracket dimensional issue.", owner: "Supplier Quality Engineer", context: "Part 94012AA160 · Drawing rev C" },
  { id: "PPAP-2026-0047", title: "Upload material certification", type: "PPAP element", entity: "lafayette", entityName: "Lafayette Manufacturing", due: "Today", overdue: false, status: "Due today", tone: "warning", priority: 2, description: "Upload the current material certification for the selected PPAP submission.", owner: "PPAP submission team", context: "Drawing 94012AA160 · Level 3" },
  { id: "SUR-2026-0091", title: "Confirm contacts and operational roles", type: "Supplier survey", entity: "parent", entityName: "Northstar Components, Inc.", due: "Oct 13", overdue: false, status: "In progress", tone: "info", priority: 3, description: "Review the current supplier profile, contacts, facilities and maintained relationship roles before affirming the record.", owner: "Supplier profile manager", context: "Semi-annual profile confirmation" },
  { id: "APQP-2026-0022", title: "Update tooling readiness", type: "APQP task", entity: "terre-haute", entityName: "Terre Haute Components", due: "Oct 15", overdue: false, status: "Not started", tone: "info", priority: 4, description: "Report the current supplier forecast date and actual progress for tooling readiness.", owner: "Supplier development lead", context: "Project BX8 · Front crossmember" },
  { id: "PCR-2026-0068", title: "Clarify proposed process change", type: "Process change", entity: "lafayette", entityName: "Lafayette Manufacturing", due: "Oct 16", overdue: false, status: "Returned", tone: "warning", priority: 5, description: "Respond to the requested clarification and resubmit a new revision for concept review.", owner: "PCR submitter", context: "Heat treatment supplier change" },
  { id: "TASK-2026-0142", title: "Provide annual ISO 9001 certificate", type: "Supplier task", entity: "parent", entityName: "Northstar Components, Inc.", due: "Oct 22", overdue: false, status: "Not started", tone: "info", priority: 6, description: "Upload the current governed certification record. The task will route for internal review after submission.", owner: "Quality contact", context: "Recurring company-level obligation" },
  { id: "NCR-2026-0171", title: "Revise root-cause analysis", type: "Non-conformance", entity: "terre-haute", entityName: "Terre Haute Components", due: "Oct 24", overdue: false, status: "Returned", tone: "warning", priority: 7, description: "Revise the root-cause response using the reviewer comments while preserving the submitted revision history.", owner: "Corrective action lead", context: "Part 57711FL020 · Surface defect" },
  { id: "SUR-2026-0104", title: "Complete Q3 safety performance survey", type: "Supplier survey", entity: "louisville", entityName: "Louisville Distribution", due: "Oct 30", overdue: false, status: "Not started", tone: "info", priority: 8, description: "Provide the quarter-specific safety performance values and declaration.", owner: "Safety contact", context: "Q3 2026 supplier performance" }
];

const state = { view: "home", scope: ["all"], workSearch: "", workType: "all", workStatus: "open" };
const root = document.querySelector("#view-root");

function scopeName() {
  if (state.scope.includes("all") || state.scope.length === 0) return entities.all.name;
  if (state.scope.length === 1) return entities[state.scope[0]].name;
  return `${state.scope.length} selected entities`;
}

function scopedTasks() {
  if (state.scope.includes("all") || state.scope.includes("parent") || state.scope.length === 0) return tasks;
  return tasks.filter(t => state.scope.includes(t.entity));
}

function filteredTasks() {
  const search = state.workSearch.toLowerCase();
  return scopedTasks().filter(t => {
    const typeMatch = state.workType === "all" || t.type.toLowerCase().includes(state.workType);
    const searchMatch = !search || `${t.id} ${t.title} ${t.entityName} ${t.type}`.toLowerCase().includes(search);
    const statusMatch = state.workStatus === "all" || (state.workStatus === "overdue" ? t.overdue : true);
    return typeMatch && searchMatch && statusMatch;
  });
}

function entitySelector() {
  const current = state.scope.length === 1 ? entities[state.scope[0]] : { name: `${state.scope.length} selected entities`, subtitle: "Combined authorized scope" };
  const checked = value => state.scope.includes(value) ? " checked" : "";
  return `<div class="entity-control">
    <label>Working with</label>
    <button class="entity-trigger" id="entity-trigger" type="button" aria-haspopup="dialog" aria-expanded="false">
      <span class="entity-icon" aria-hidden="true">⌂</span>
      <span><strong id="entity-label">${current.name}</strong><small id="entity-subtitle">${current.subtitle}</small></span>
      <span aria-hidden="true">⌄</span>
    </button>
    <div class="entity-popover" id="entity-popover" hidden>
      <div class="popover-heading"><div><strong>Select entities</strong><small>Dashboard data and work will update.</small></div><button type="button" class="icon-button compact" id="close-entity" aria-label="Close entity selector">×</button></div>
      <label class="entity-option parent-option"><input type="checkbox" value="all"${checked("all")}> <span><strong>All visible entities</strong><small>Northstar Components + 3 facilities</small></span></label>
      <div class="entity-tree">
        <label class="entity-option"><input type="checkbox" value="parent"${checked("parent")}> <span><strong>Northstar Components, Inc.</strong><small>Parent company · NSC-0017</small></span></label>
        <label class="entity-option child"><input type="checkbox" value="lafayette"${checked("lafayette")}> <span><strong>Lafayette Manufacturing</strong><small>Facility · Lafayette, IN</small></span></label>
        <label class="entity-option child"><input type="checkbox" value="terre-haute"${checked("terre-haute")}> <span><strong>Terre Haute Components</strong><small>Facility · Terre Haute, IN</small></span></label>
        <label class="entity-option child"><input type="checkbox" value="louisville"${checked("louisville")}> <span><strong>Louisville Distribution</strong><small>Facility · Louisville, KY</small></span></label>
      </div>
      <div class="popover-actions"><button class="text-button" id="clear-entities" type="button">Clear</button><button class="button primary" id="apply-entities" type="button">Apply selection</button></div>
    </div>
  </div>`;
}

function pageHeader(eyebrow, title, subtitle, action = "") {
  const heroClass = eyebrow === "Supplier quality workspace" ? " page-header--hero" : "";
  return `<header class="page-header${heroClass}"><div class="page-title"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p class="page-subtitle">${subtitle}</p></div><div class="page-header-actions">${entitySelector()}${action}</div></header>`;
}

function taskRows(list, limit) {
  const rows = typeof limit === "number" ? list.slice(0, limit) : list;
  if (!rows.length) return `<div class="empty-state"><h3>No work matches these filters</h3><p>Try another entity, task type, or search term.</p></div>`;
  return `<div class="work-list">${rows.map(t => `<button class="work-row" type="button" data-task="${t.id}">
    <span class="work-main"><span class="type-label">${t.type}</span><strong>${t.title}</strong><small>${t.id}</small></span>
    <span class="work-meta">${t.entityName}</span>
    <span class="due ${t.overdue ? "overdue" : ""}">${t.overdue ? `${t.days} days overdue` : t.due}</span>
    <span class="badge ${t.tone}">${t.status}</span><span class="chevron" aria-hidden="true">›</span>
  </button>`).join("")}</div>`;
}

function homeView() {
  const work = scopedTasks();
  const overdue = work.filter(t => t.overdue).length;
  const dueSoon = work.filter(t => !t.overdue && ["Today", "Oct 13", "Oct 15"].includes(t.due)).length;
  return `<div class="page">
    ${pageHeader("Supplier quality workspace", "Good evening, Alex", "Your live supplier-quality picture—urgent work, operational signals, and entity performance in one decisive view.")}
    ${overdue ? `<div class="alert-banner"><span class="alert-icon">!</span><div><strong>${overdue} response${overdue === 1 ? " is" : "s are"} overdue</strong><p>The oldest open response was due October 8. Completing overdue work now helps avoid escalation.</p></div><button class="button secondary small" type="button" data-work-filter="overdue">Review overdue work</button></div>` : `<div class="alert-banner"><span class="alert-icon">✓</span><div><strong>No overdue supplier work</strong><p>Your selected entity scope is currently up to date.</p></div><button class="button secondary small" type="button" data-nav="work">View work queue</button></div>`}
    <section aria-labelledby="overview-title"><div class="section-heading"><div><h2 id="overview-title">Your work at a glance</h2><p>Counts reflect your current entity scope and eligible supplier roles.</p></div></div>
      <div class="kpi-grid">
        <button class="kpi-card danger" type="button" data-work-filter="overdue"><span class="kpi-label">Overdue</span><span class="kpi-value">${overdue}</span><span class="kpi-detail"><span>Requires immediate action</span><b>View work ›</b></span></button>
        <button class="kpi-card warning" type="button" data-work-filter="open"><span class="kpi-label">Due in 7 days</span><span class="kpi-value">${dueSoon}</span><span class="kpi-detail"><span>Across 3 processes</span><b>Plan work ›</b></span></button>
        <button class="kpi-card" type="button" data-work-filter="open"><span class="kpi-label">Open assignments</span><span class="kpi-value">${work.length}</span><span class="kpi-detail"><span>Role-based work queue</span><b>View all ›</b></span></button>
        <button class="kpi-card success" type="button" data-nav="submissions"><span class="kpi-label">Awaiting SIA review</span><span class="kpi-value">3</span><span class="kpi-detail"><span>Your submitted items</span><b>Track status ›</b></span></button>
      </div>
    </section>
    <div class="home-grid section">
      <div>
        <section class="card" aria-labelledby="priority-title"><div class="card-header"><div><h2 id="priority-title">Priority work</h2><p>Your next assignments, ordered by due date and urgency.</p></div><button class="link-button" type="button" data-nav="work">View all ${work.length}</button></div>${taskRows(work, 5)}</section>
        <section class="section" aria-labelledby="quick-title"><div class="section-heading"><div><h2 id="quick-title">Start something new</h2><p>Create supplier-initiated records for the entity you select.</p></div></div><div class="quick-grid">
          <button class="quick-action" type="button" data-action="pcr"><span class="quick-icon">PCR</span><strong>Propose a process change</strong><small>Start a governed change request and attach supporting evidence.</small></button>
          <button class="quick-action" type="button" data-action="lot"><span class="quick-icon">LOT</span><strong>Submit a lot for approval</strong><small>Provide details and evidence for an actual production lot.</small></button>
          <button class="quick-action" type="button" data-action="contact"><span class="quick-icon">USR</span><strong>Request supplier access</strong><small>Add a contact, role assignment, or portal access request.</small></button>
          <button class="quick-action" type="button" data-action="help"><span class="quick-icon">?</span><strong>Get help with a process</strong><small>Find job aids, training, and the right SIA contact.</small></button>
        </div></section>
      </div>
      <aside>
        <section class="card performance-card"><div class="section-heading"><div><h2>Current performance</h2><p>September 2026 published scorecard</p></div><button class="link-button" type="button" data-nav="scorecards">Details</button></div>
          <div class="score-row"><span class="score">91<small>/100</small></span><span class="trend">↑ 3 pts</span></div><div class="bar" aria-label="Score 91 out of 100"><span></span></div><div class="metric-grid"><div class="metric"><b>97%</b><small>Quality</small></div><div class="metric"><b>88%</b><small>Delivery</small></div><div class="metric"><b>100%</b><small>Safety</small></div></div>
          <div class="scrap-summary"><strong>$12.4k</strong><div><b>Current-period scrap</b><small>Operational estimate · updated Oct 9</small></div></div><div class="notice">Informational only. Final debit processing remains outside this workspace.</div>
        </section>
        <section class="card section"><div class="card-header"><div><h2>Recent activity</h2><p>Updates across your selected entities.</p></div></div><div class="card-body activity-list">
          <div class="activity-item"><span class="activity-dot"></span><div><p>PPAP-2026-0038 was approved</p><small>Today · Lafayette Manufacturing</small></div></div>
          <div class="activity-item"><span class="activity-dot"></span><div><p>SIA returned PCR-2026-0068 for clarification</p><small>Yesterday · Lafayette Manufacturing</small></div></div>
          <div class="activity-item"><span class="activity-dot"></span><div><p>September scorecard was published</p><small>Oct 7 · All facilities</small></div></div>
        </div></section>
      </aside>
    </div>
  </div>`;
}

function workView() {
  const list = filteredTasks();
  return `<div class="page">${pageHeader("Role-based work queue", "My work", "Tasks are assigned to maintained supplier roles; any currently eligible member can act.")}
    <div class="filter-bar"><div class="search-field"><label class="sr-only" for="work-search">Search work</label><input id="work-search" type="search" placeholder="Search by task, record number, or entity" value="${state.workSearch}"></div>
      <select class="select-field" id="work-type" aria-label="Filter by type"><option value="all">All work types</option><option value="non-conformance">Non-conformance</option><option value="ppap">PPAP</option><option value="apqp">APQP</option><option value="survey">Surveys</option><option value="supplier task">Supplier tasks</option><option value="process change">Process changes</option></select>
      <select class="select-field" id="work-status" aria-label="Filter by status"><option value="open">Open work</option><option value="overdue">Overdue only</option><option value="all">All statuses</option></select>
    </div><div class="table-card"><div class="card-header"><div><h2>${list.length} open assignments</h2><p>Opening a row takes you to the concrete workflow record.</p></div></div>${taskRows(list)}</div></div>`;
}

const moduleData = {
  quality: [
    ["NCR", "Non-conformances", "Respond through staged containment, root-cause, corrective-action, and effectiveness steps.", "2 open"],
    ["PPAP", "Production part approval", "Manage drawing-scoped submissions, elements, evidence, discussion, and approval status.", "1 due today"],
    ["APQP", "Advanced product quality", "Report supplier plan dates, current forecasts, actual progress, and ship readiness.", "1 open"],
    ["PCR", "Process change requests", "Initiate changes, answer clarification requests, and track concept review outcomes.", "1 returned"],
    ["LOT", "Supplier lot approval", "Create event-driven evidence submissions for applicable production lots.", "Start submission"],
    ["PILOT", "Pilot part data", "Complete assigned sample and receiving-inspection evidence for development events.", "No open work"]
  ],
  scorecards: [["SEP", "September 2026 scorecard", "Published facility performance with grouped KPI values, points, totals, and ranking.", "91 / 100"], ["HIS", "Scorecard history", "Review monthly facility results and periodic parent-company assessments.", "12 periods"], ["SUR", "Safety performance inputs", "Complete cadence-specific surveys that feed governed scorecard snapshots.", "1 open"]],
  scrap: [["MTD", "Current period scrap", "Operational visibility for October 2026; values may differ from the final settled amount.", "$12,430"], ["DET", "Scrap detail", "Trace visible records by facility, part, category, date, quantity, and preliminary value.", "34 records"], ["HIS", "Period history", "Compare finalized historical operational totals used in supplier reporting.", "12 periods"]],
  audits: [["AUD", "Supplier audits", "Review authorized audit schedules, status, findings, and linked corrective actions.", "1 scheduled"], ["VIS", "Supplier visits", "See upcoming supplier visits and 7-4 activities maintained as meetings.", "2 upcoming"], ["CAR", "Corrective actions", "Follow shared corrective-action records originating from audits and quality events.", "1 open"]],
  profile: [["ORG", "Supplier entities", "Review your parent company, facilities, depots, lifecycle status, and maintained profile attributes.", "4 entities"], ["ROLE", "Operational roles", "Maintain eligible supplier members for quality, development, logistics, safety, and administration.", "9 roles"], ["DOC", "Profile completeness", "Track governed documents, training, access, and onboarding requirements without a separate approval gate.", "92% complete"]],
  people: [["CON", "Contacts", "Review and maintain contacts owned by the currently selected supplier entity.", "14 active"], ["USR", "Portal users", "Request access only for contacts who need authentication and monitor supplier allocation.", "8 of 12 projected"], ["REQ", "Access requests", "Track draft, approval, correction, and completed contact or account requests.", "2 in progress"]],
  resources: [["DOC", "Required documents", "Upload and maintain only governed supplier-document requirements generated for your profile.", "2 expiring"], ["TRN", "Training & job aids", "Find contextual process guidance, role-based training, and approved external learning links.", "6 assigned"], ["SUP", "Support contacts", "Reach the SIA business owner for process questions or technical access support.", "View directory"]],
  submissions: [["PCR", "Process change request PCR-2026-0068", "Returned for clarification. Your next revision will restart applicable concept approvals.", "Action required"], ["PPAP", "PPAP submission PPAP-2026-0038", "Approved October 10, 2026. Approval certificate is available.", "Approved"], ["LOT", "Lot approval SLA-2026-0137", "Submitted evidence is with the configured internal review role.", "In review"]]
};

function moduleView(key) {
  const copy = {
    quality: ["Supplier quality processes", "Quality processes", "Open and track the supplier-facing quality applications authorized for your entities."],
    scorecards: ["Performance", "Scorecards", "Responsive current and historical views anchored to your supplier profile."],
    scrap: ["Performance", "Scrap visibility", "Current-period operational visibility with clear separation from financial settlement."],
    audits: ["Performance", "Audits & visits", "Authorized schedules, findings, visits, and follow-up records."],
    profile: ["Organization", "Company profile", "Keep governed supplier entities, roles, and profile-completeness requirements current."],
    people: ["Organization", "Contacts & users", "Maintain supplier contacts, operational roles, and portal access within your authorized scope."],
    resources: ["Organization", "Documents & training", "Governed requirements and contextual help for the work your roles perform."],
    submissions: ["Supplier-created records", "My submissions", "Track drafts, returned items, reviews, approvals, and immutable submitted history."]
  }[key];
  return `<div class="page">${pageHeader(copy[0], copy[1], copy[2], key === "people" ? `<button class="button primary" data-action="contact">Request supplier access</button>` : "")}
    ${key === "scrap" ? `<div class="alert-banner"><span class="alert-icon">i</span><div><strong>Operational data, not a debit memo</strong><p>Amounts shown here are preliminary and may change before procurement completes final financial processing.</p></div></div>` : ""}
    <div class="module-grid">${moduleData[key].map((m, i) => `<article class="module-card"><span class="module-icon">${m[0]}</span><h3>${m[1]}</h3><p>${m[2]}</p><button class="link-button" type="button" ${key === "submissions" && i === 0 ? `data-task="PCR-2026-0068"` : ""}>${m[3]} ›</button></article>`).join("")}</div>
    <section class="section info-panel"><h3>About this prototype view</h3><p>This page shows the intended navigation and summary hierarchy. Production pages would open secured Intelex records and only expose content classified for the supplier.</p></section>
  </div>`;
}

function render() {
  root.innerHTML = state.view === "home" ? homeView() : state.view === "work" ? workView() : moduleView(state.view);
  document.querySelectorAll(".nav-item[data-view]").forEach(b => b.classList.toggle("active", b.dataset.view === state.view));
  document.querySelector("#more-nav").classList.toggle("active", ["submissions", "scrap", "audits", "people", "resources"].includes(state.view));
  document.querySelector("#nav-work-count").textContent = scopedTasks().length;
  bindDynamic();
}

function bindDynamic() {
  bindEntitySelector();
  root.querySelectorAll("[data-nav]").forEach(el => el.addEventListener("click", () => navigate(el.dataset.nav)));
  root.querySelectorAll("[data-task]").forEach(el => el.addEventListener("click", () => openTask(el.dataset.task)));
  root.querySelectorAll("[data-action]").forEach(el => el.addEventListener("click", () => openAction(el.dataset.action)));
  root.querySelectorAll("[data-work-filter]").forEach(el => el.addEventListener("click", () => { state.workStatus = el.dataset.workFilter; navigate("work"); }));
  const search = root.querySelector("#work-search");
  if (search) search.addEventListener("input", e => { state.workSearch = e.target.value; const pos = e.target.selectionStart; render(); const next = document.querySelector("#work-search"); next.focus(); next.setSelectionRange(pos, pos); });
  const type = root.querySelector("#work-type");
  if (type) { type.value = state.workType; type.addEventListener("change", e => { state.workType = e.target.value; render(); }); }
  const status = root.querySelector("#work-status");
  if (status) { status.value = state.workStatus; status.addEventListener("change", e => { state.workStatus = e.target.value; render(); }); }
}

function navigate(view) {
  state.view = view;
  render();
  document.querySelector("#main").focus();
  document.querySelector("#bottom-more").hidden = true;
  document.querySelector("#more-nav").setAttribute("aria-expanded", "false");
}

document.querySelectorAll(".nav-item[data-view]").forEach(b => b.addEventListener("click", () => navigate(b.dataset.view)));
document.querySelectorAll("#bottom-more [data-view]").forEach(b => b.addEventListener("click", () => navigate(b.dataset.view)));
document.querySelectorAll("[data-open-help]").forEach(b => b.addEventListener("click", () => openAction("help")));

function toggleEntities(open) {
  const entityTrigger = document.querySelector("#entity-trigger");
  const entityPopover = document.querySelector("#entity-popover");
  if (!entityTrigger || !entityPopover) return;
  entityPopover.hidden = !open;
  entityTrigger.setAttribute("aria-expanded", String(open));
}

function bindEntitySelector() {
  const entityTrigger = document.querySelector("#entity-trigger");
  const entityPopover = document.querySelector("#entity-popover");
  if (!entityTrigger || !entityPopover) return;
  entityTrigger.addEventListener("click", () => toggleEntities(entityPopover.hidden));
  document.querySelector("#close-entity").addEventListener("click", () => toggleEntities(false));
  document.querySelector("#clear-entities").addEventListener("click", () => entityPopover.querySelectorAll("input").forEach(i => i.checked = false));
  entityPopover.querySelectorAll("input").forEach(input => input.addEventListener("change", e => {
    const all = entityPopover.querySelector('input[value="all"]');
    const others = [...entityPopover.querySelectorAll('input:not([value="all"])')];
    if (e.target.value === "all" && e.target.checked) others.forEach(i => i.checked = false);
    if (e.target.value !== "all" && e.target.checked) all.checked = false;
  }));
  document.querySelector("#apply-entities").addEventListener("click", () => {
    const selected = [...entityPopover.querySelectorAll("input:checked")].map(i => i.value);
    state.scope = selected.length ? selected : ["all"];
    toggleEntities(false);
    render();
    showToast(`Scope updated to ${scopeName()}.`);
  });
}

document.querySelector("#more-nav").addEventListener("click", e => {
  const menu = document.querySelector("#bottom-more");
  menu.hidden = !menu.hidden;
  e.currentTarget.setAttribute("aria-expanded", String(!menu.hidden));
});

const backdrop = document.querySelector("#modal-backdrop");
const drawer = document.querySelector("#drawer");
const modal = document.querySelector("#action-modal");
function showBackdrop(show) { backdrop.hidden = !show; }
function closeOverlays() { drawer.hidden = true; modal.hidden = true; showBackdrop(false); }
document.querySelector("#close-drawer").addEventListener("click", closeOverlays);
document.querySelector("#close-modal").addEventListener("click", closeOverlays);
document.querySelector("#cancel-modal").addEventListener("click", closeOverlays);
backdrop.addEventListener("click", closeOverlays);
document.addEventListener("keydown", e => { if (e.key === "Escape") { toggleEntities(false); closeOverlays(); } });

function openTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  document.querySelector("#drawer-eyebrow").textContent = task.type;
  document.querySelector("#drawer-title").textContent = task.title;
  document.querySelector("#drawer-content").innerHTML = `<div class="drawer-summary"><span class="badge ${task.tone}">${task.status}</span><h3>${task.id}</h3><p>${task.description}</p></div>
    <div class="drawer-fields"><div class="drawer-field"><span>Supplier entity</span><strong>${task.entityName}</strong></div><div class="drawer-field"><span>Due date</span><strong class="${task.overdue ? "due overdue" : ""}">${task.overdue ? `${task.days} days overdue` : task.due}</strong></div><div class="drawer-field"><span>Assigned role</span><strong>${task.owner}</strong></div><div class="drawer-field"><span>Context</span><strong>${task.context}</strong></div></div>
    <div class="info-panel"><h3>Role-based access</h3><p>This work remains available to current eligible members of the assigned role for this exact supplier entity. Submitted evidence and prior revisions remain auditable.</p></div>
    <div class="drawer-actions"><button class="button primary" type="button" id="continue-task">Continue work</button><button class="button secondary" type="button" id="task-help">View job aid</button></div>`;
  drawer.hidden = false; showBackdrop(true); drawer.focus();
  document.querySelector("#continue-task").addEventListener("click", () => { closeOverlays(); showToast(`${task.id} opened in edit mode (prototype).`); });
  document.querySelector("#task-help").addEventListener("click", () => { closeOverlays(); navigate("resources"); });
}

const actionCopy = {
  pcr: { title: "Propose a process change", type: "Process change request", help: "A draft lets you describe the proposed change before formal submission and concept review." },
  lot: { title: "Submit a lot for approval", type: "Supplier lot approval", help: "Create one submission for each actual applicable production lot; no recurring record is pre-created." },
  contact: { title: "Request contact or portal access", type: "Supplier contact request", help: "Portal access is only provisioned when the contact needs authenticated work. Parent-company scope requires deliberate governance." },
  help: { title: "Get help with a process", type: "Support request", help: "Describe the process or record you need help with. Your entity scope will be included automatically." }
};
function openAction(kind) {
  const c = actionCopy[kind] || actionCopy.help;
  document.querySelector("#modal-title").textContent = c.title;
  document.querySelector("#modal-body").innerHTML = `<div class="form-grid"><div class="field full"><label for="record-entity">Supplier entity</label><select id="record-entity" required><option>${scopeName()}</option><option>Lafayette Manufacturing</option><option>Terre Haute Components</option><option>Louisville Distribution</option></select><small>Select the exact entity that owns the record.</small></div><div class="field"><label for="record-type">Request type</label><input id="record-type" value="${c.type}" readonly></div><div class="field"><label for="record-reference">Reference</label><input id="record-reference" placeholder="Part, drawing, lot, or contact"></div><div class="field full"><label for="record-summary">Summary</label><textarea id="record-summary" required placeholder="Briefly describe what you need to submit"></textarea><small>${c.help}</small></div></div>`;
  modal.hidden = false; showBackdrop(true); modal.querySelector("select").focus();
}
document.querySelector("#action-form").addEventListener("submit", e => {
  e.preventDefault(); const title = document.querySelector("#modal-title").textContent; closeOverlays(); showToast(`${title} draft created (prototype).`);
});

let toastTimer;
function showToast(message) { const toast = document.querySelector("#toast"); toast.textContent = message; toast.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.hidden = true, 3500); }
render();
