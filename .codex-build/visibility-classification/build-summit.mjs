import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const workspaceDir = "C:/Users/DaveMcLean/OneDrive - Summit EHSQ Inc/Documents/GitHub/subaru";
const skillDir = "C:/Users/DaveMcLean/.codex/plugins/cache/openai-primary-runtime/presentations/26.1103.10131/skills/presentations";
const pythonExecutable = "C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1103-91-0_26.1103.91.0_x64__3k8sg7r9htsxt/dependencies/python/python.exe";
const buildDir = path.join(workspaceDir, ".codex-build", "visibility-classification");
const outputDir = path.join(workspaceDir, "output", "visibility-classification");
const finalPath = path.join(outputDir, "SIA-Visibility-Classification-Summit-Branded-v2.pptx");
const rawLogoSvg = await fs.readFile(path.join(buildDir, "assets", "Summit_Logo_Vertical_WHT.svg"), "utf8");
const logoSvg = rawLogoSvg.replaceAll('class="st0"', 'fill="#FFFFFF"');

const P = Presentation.create({ slideSize: { width: 1280, height: 720 } });
const C = {
  green: "#1E774C",
  green2: "#2F9B68",
  green3: "#66B88C",
  forest: "#153D2E",
  mint: "#DDEFE6",
  mint2: "#EEF7F2",
  ink: "#1D2B27",
  gray: "#56645F",
  line: "#CCD7D1",
  paper: "#F7F7F3",
  white: "#FFFFFF",
  ochre: "#D9A34A",
  paleOchre: "#F6E8CE",
};

function box(slide, name, left, top, width, height, fill, geometry = "rect", lineFill = fill, lineWidth = 0) {
  return slide.shapes.add({
    geometry,
    name,
    position: { left, top, width, height },
    fill,
    line: { style: "solid", fill: lineFill, width: lineWidth },
    ...(geometry === "roundRect" ? { borderRadius: "rounded-xl" } : {}),
  });
}

function txt(slide, name, value, left, top, width, height, size, color, bold = false, alignment = "left") {
  const s = slide.shapes.add({
    geometry: "textbox",
    name,
    position: { left, top, width, height },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  s.text = value;
  s.text.style = {
    typeface: "Arial",
    fontSize: size,
    color,
    bold,
    alignment,
    verticalAlignment: "middle",
  };
  return s;
}

function logo(slide, left, top, width, height) {
  slide.images.add({
    svg: logoSvg,
    alt: "Summit EHSQ logo",
    fit: "contain",
    position: { left, top, width, height },
  });
}

function greenHeader(slide, title, subtitle) {
  box(slide, "summit-header", 0, 0, 1280, 174, C.green);
  logo(slide, 56, 28, 92, 76);
  txt(slide, "title", title, 188, 33, 600, 57, 36, C.white, false);
  txt(slide, "subtitle", subtitle, 188, 94, 970, 48, 17, "#E4F2EA");
  box(slide, "header-accent", 1185, 0, 95, 174, C.green2);
}

// Slide 1
{
  const s = P.slides.add();
  s.background.fill = C.paper;
  greenHeader(
    s,
    "Visibility classification",
    "A record remains available only when application permission, visibility level and location scope all allow access."
  );

  txt(s, "classify-label", "RECORD CLASSIFICATION", 64, 205, 360, 25, 13, C.green, true);
  txt(s, "classify-title", "The record sets the floor", 64, 233, 420, 38, 24, C.ink, true);
  txt(s, "classify-copy", "The creator or editor selects the minimum level required to access the record.", 64, 274, 440, 48, 16, C.gray);

  const steps = [
    { label: "ASSOCIATE", x: 84, y: 493, w: 390, fill: C.mint, color: C.green },
    { label: "ROLE-DEFINED LEVELS", x: 134, y: 447, w: 340, fill: "#BFE0CE", color: C.forest },
    { label: "SENIOR MANAGER", x: 184, y: 401, w: 290, fill: C.green3, color: C.white },
    { label: "EXECUTIVE", x: 234, y: 355, w: 240, fill: C.green, color: C.white },
  ];
  for (const [i, step] of steps.entries()) {
    box(s, `level-${i}`, step.x, step.y, step.w, 38, step.fill);
    txt(s, `level-text-${i}`, step.label, step.x + 12, step.y + 2, step.w - 24, 33, 13, step.color, true, "center");
  }
  txt(s, "inheritance", "Higher viewer groups can access lower-classified records", 84, 538, 390, 30, 14, C.gray, false, "center");

  box(s, "divider", 533, 205, 2, 380, C.line);
  txt(s, "authority-label", "USER ENTITLEMENT", 577, 205, 360, 25, 13, C.green, true);
  txt(s, "authority-title", "The security groups set the ceiling", 577, 233, 560, 38, 24, C.ink, true);
  txt(s, "authority-copy", "Each group combines an application action with a maximum visibility level.", 577, 274, 560, 48, 16, C.gray);

  const rows = [
    { n: "01", title: "Application permission", value: "Create, edit or view" },
    { n: "02", title: "Visibility ceiling", value: "Associate through Executive" },
    { n: "03", title: "Location scope", value: "Assigned location, parent chain and descendants" },
  ];
  rows.forEach((row, i) => {
    const y = 350 + i * 72;
    txt(s, `row-num-${i}`, row.n, 577, y, 42, 42, 15, C.green, true, "center");
    box(s, `row-rule-${i}`, 628, y + 45, 510, 2, C.line);
    txt(s, `row-title-${i}`, row.title.toUpperCase(), 642, y - 2, 220, 22, 12, C.gray, true);
    txt(s, `row-value-${i}`, row.value, 642, y + 20, 485, 28, 18, C.ink, true);
  });

  box(s, "footer", 0, 615, 1280, 105, C.forest);
  txt(s, "footer-title", "Location scope completes the decision", 64, 631, 480, 34, 21, C.white, true);
  txt(s, "footer-copy", "Access follows the assigned location through its parent chain and configured descendants. The same model can align with a future business hierarchy.", 64, 667, 1090, 38, 15, "#DCEBE4");
  s.speakerNotes.text = "Brand reference and official Summit EHSQ logo: https://www.summitehsq.com/";
}

// Slide 2
{
  const s = P.slides.add();
  s.background.fill = C.white;
  box(s, "location-panel", 0, 0, 362, 720, C.green);
  logo(s, 54, 30, 94, 78);
  txt(s, "scope-label", "LOCATION SCOPE", 54, 139, 250, 24, 13, "#CBE7D7", true);
  txt(s, "scope-title", "Paint assignment", 54, 168, 270, 42, 28, C.white, false);
  txt(s, "scope-copy", "Parent locations and configured descendants remain in scope.", 54, 216, 260, 54, 16, "#E2F1E8");

  box(s, "tree-line", 83, 309, 3, 234, "#80C29E");
  const nodes = [
    { y: 292, label: "SIA", sub: "enterprise root", fill: C.forest, color: C.white },
    { y: 355, label: "Site", sub: "illustrative parent", fill: "#4B9D72", color: C.white },
    { y: 418, label: "PAINT", sub: "user assigned here", fill: C.white, color: C.green },
    { y: 481, label: "Paint Line / Paint Lab", sub: "illustrative descendants", fill: "#DCEEE4", color: C.forest },
  ];
  nodes.forEach((node, i) => {
    box(s, `branch-${i}`, 83, node.y + 20, 28, 3, "#80C29E");
    box(s, `node-${i}`, 108, node.y, 216, 44, node.fill, "roundRect");
    txt(s, `node-label-${i}`, node.label, 124, node.y + 2, 112, 38, 15, node.color, true);
    txt(s, `node-sub-${i}`, node.sub, 230, node.y + 2, 78, 38, 10, node.color, false, "right");
  });
  box(s, "user-marker", 49, 430, 58, 20, C.ochre, "roundRect");
  txt(s, "user-marker-text", "USER", 49, 430, 58, 19, 9, C.white, true, "center");
  txt(s, "scope-note", "Paint through SIA, plus configured locations below Paint", 54, 568, 260, 45, 14, "#E2F1E8");

  txt(s, "title", "Paint user access example", 414, 43, 790, 50, 34, C.ink, false);
  txt(s, "subtitle", "One location scope. Different authority by application.", 414, 96, 680, 35, 18, C.gray);
  box(s, "title-accent", 414, 143, 116, 5, C.green2);

  txt(s, "dc-title", "Document Control", 414, 181, 320, 36, 23, C.ink, true);
  txt(s, "dc-group-label", "SECURITY GROUP", 414, 228, 170, 20, 12, C.green, true);
  txt(s, "dc-group", "Document Control Associate Viewer", 414, 253, 630, 35, 19, C.ink, true);
  box(s, "dc-rule", 414, 301, 750, 2, C.line);
  txt(s, "dc-access-label", "EFFECTIVE ACCESS", 414, 320, 170, 20, 12, C.green, true);
  txt(s, "dc-access", "View Associate-classified documents", 414, 344, 650, 34, 20, C.ink, true);
  txt(s, "dc-detail", "Available at Paint, its parent chain through SIA, and configured descendants. Higher-classified documents remain unavailable.", 414, 381, 735, 48, 16, C.gray);

  box(s, "section-divider", 414, 451, 750, 3, C.green);
  txt(s, "insp-title", "Inspections", 414, 474, 260, 36, 23, C.ink, true);
  txt(s, "create-label", "CREATE", 414, 527, 100, 20, 12, C.green, true);
  txt(s, "create-group", "Associate Inspections Create", 414, 551, 335, 30, 18, C.ink, true);
  txt(s, "create-result", "Associate level", 414, 586, 250, 25, 16, C.green, true);
  box(s, "insp-divider", 777, 527, 2, 86, C.line);
  txt(s, "view-label", "VIEW", 813, 527, 100, 20, 12, C.ochre, true);
  txt(s, "view-group", "Inspections Senior Manager Viewer", 813, 551, 350, 30, 18, C.ink, true);
  txt(s, "view-result", "Through Senior Manager", 813, 586, 300, 25, 16, C.ochre, true);

  box(s, "footer", 362, 653, 918, 67, C.forest);
  txt(s, "footer-copy", "One shared location scope, with application-specific actions and visibility ceilings", 414, 669, 780, 34, 16, C.white, true);
  s.speakerNotes.text = "Brand reference and official Summit EHSQ logo: https://www.summitehsq.com/";
}

for (const [index, slide] of P.slides.items.entries()) {
  const png = await P.export({ slide, format: "png", scale: 1 });
  await fs.writeFile(path.join(buildDir, `summit-slide-${index + 1}.png`), new Uint8Array(await png.arrayBuffer()));
}
const montage = await P.export({ format: "webp", montage: true, scale: 1 });
await fs.writeFile(path.join(buildDir, "summit-montage.webp"), new Uint8Array(await montage.arrayBuffer()));

const candidatePath = path.join(buildDir, "summit-candidate.pptx");
await (await PresentationFile.exportPptx(P)).save(candidatePath);
const { finalizePresentation } = await import(pathToFileURL(path.join(skillDir, "container_tools", "artifact_tool_utils.mjs")).href);
const result = await finalizePresentation({
  explicitTotalSlideCount: 2,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
  workspaceDir,
  candidatePath,
  finalPath,
  pythonExecutable,
  integrityValidatorPath: path.join(skillDir, "container_tools", "inspect_presentation_package_integrity.py"),
  layoutValidatorPath: path.join(skillDir, "container_tools", "inspect_presentation_layout_geometry.py"),
  layoutArgs: [
    "--expected-slide-size-emu", "12192000,6858000",
    "--validate-bullet-geometry",
    "--validate-heading-fit",
  ],
  fontPolicy: { basis: "design", families: ["Arial"] },
  verifyArtifactToolImport: true,
  receiptPath: path.join(buildDir, "summit-validation-v2.json"),
});

console.log(JSON.stringify({ finalPath, result }, null, 2));
