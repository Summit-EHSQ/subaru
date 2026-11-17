import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const workspaceDir = "C:/Users/DaveMcLean/OneDrive - Summit EHSQ Inc/Documents/GitHub/subaru";
const skillDir = "C:/Users/DaveMcLean/.codex/plugins/cache/openai-primary-runtime/presentations/26.1103.10131/skills/presentations";
const pythonExecutable = "C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1103-91-0_26.1103.91.0_x64__3k8sg7r9htsxt/dependencies/python/python.exe";
const buildDir = path.join(workspaceDir, ".codex-build", "visibility-classification");
const outputDir = path.join(workspaceDir, "output", "visibility-classification");
const finalPath = path.join(outputDir, "SIA-Visibility-Classification-Walkthrough-v2.pptx");

await fs.mkdir(buildDir, { recursive: true });
await fs.mkdir(outputDir, { recursive: true });

const presentation = Presentation.create({ slideSize: { width: 1280, height: 720 } });

const C = {
  navy: "#0B1533",
  subaru: "#012169",
  blue: "#2F67B7",
  paleBlue: "#D9E7FF",
  midBlue: "#AFCBFF",
  gray0: "#F7F8FA",
  gray1: "#E8EBF1",
  gray2: "#D4DAE5",
  gray3: "#6C7890",
  gray4: "#44506A",
  white: "#FFFFFF",
  green: "#0B7A5A",
  paleGreen: "#DDF3EA",
  amber: "#B56800",
  paleAmber: "#FFF0D4",
};

function rect(slide, name, left, top, width, height, fill, geometry = "rect", lineFill = fill, lineWidth = 0) {
  return slide.shapes.add({
    geometry,
    name,
    position: { left, top, width, height },
    fill,
    line: { style: "solid", fill: lineFill, width: lineWidth },
    ...(geometry === "roundRect" ? { borderRadius: "rounded-xl" } : {}),
  });
}

function text(slide, name, value, left, top, width, height, fontSize, color, bold = false, alignment = "left") {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position: { left, top, width, height },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = value;
  shape.text.style = {
    typeface: "Arial",
    fontSize,
    color,
    bold,
    alignment,
    verticalAlignment: "middle",
  };
  return shape;
}

function stepMarker(slide, number, left, top) {
  rect(slide, `step-${number}-circle`, left, top, 38, 38, C.subaru, "ellipse");
  text(slide, `step-${number}-number`, String(number), left, top + 1, 38, 36, 18, C.white, true, "center");
}

function titleBlock(slide, titleValue, subtitleValue) {
  rect(slide, "top-band", 0, 0, 1280, 18, C.subaru);
  text(slide, "slide-title", titleValue, 64, 42, 1100, 54, 34, C.navy, true);
  text(slide, "slide-subtitle", subtitleValue, 64, 98, 1120, 58, 19, C.gray4);
}

// Slide 1: concept
{
  const slide = presentation.slides.add();
  slide.background.fill = C.gray0;
  titleBlock(
    slide,
    "Visibility classification",
    "A record remains available only when application permission, visibility level and location scope all allow access."
  );

  stepMarker(slide, 1, 70, 194);
  text(slide, "classify-heading", "Classify the record", 122, 187, 310, 36, 22, C.navy, true);
  text(slide, "classify-copy", "The creator or editor selects the record’s minimum visibility level.", 122, 226, 320, 58, 17, C.gray4);

  const levels = [
    { label: "ASSOCIATE", left: 124, top: 472, width: 300, fill: C.paleBlue, color: C.subaru },
    { label: "ROLE-DEFINED LEVELS", left: 176, top: 427, width: 248, fill: C.midBlue, color: C.subaru },
    { label: "SENIOR MANAGER", left: 228, top: 382, width: 196, fill: "#4E7FD1", color: C.white },
    { label: "EXECUTIVE", left: 280, top: 337, width: 144, fill: C.subaru, color: C.white },
  ];
  for (const [i, level] of levels.entries()) {
    rect(slide, `classification-level-${i}`, level.left, level.top, level.width, 39, level.fill);
    text(slide, `classification-label-${i}`, level.label, level.left + 8, level.top + 2, level.width - 16, 34, 13, level.color, true, "center");
  }
  text(slide, "inheritance-note", "A higher viewer group can see records classified at lower levels", 108, 520, 340, 44, 15, C.gray4, false, "center");

  rect(slide, "vertical-divider", 504, 184, 2, 397, C.gray2);
  stepMarker(slide, 2, 550, 194);
  text(slide, "authority-heading", "Check the user’s authority", 602, 187, 360, 36, 22, C.navy, true);
  text(slide, "authority-copy", "Security groups combine an application action with the user’s maximum visibility level.", 602, 226, 520, 54, 17, C.gray4);

  text(slide, "permission-label", "APPLICATION PERMISSION", 590, 316, 255, 24, 13, C.gray3, true);
  text(slide, "permission-values", "Create     Edit     View", 590, 344, 340, 40, 20, C.navy, true);
  rect(slide, "authority-rule", 590, 398, 540, 2, C.gray2);
  text(slide, "ceiling-label", "VISIBILITY CEILING", 590, 423, 250, 24, 13, C.gray3, true);
  text(slide, "ceiling-values", "Associate through Executive", 590, 451, 420, 40, 20, C.navy, true);

  rect(slide, "location-band", 0, 602, 1280, 118, C.navy);
  text(slide, "location-heading", "Location scope completes the decision", 64, 617, 490, 38, 22, C.white, true);
  text(
    slide,
    "location-copy",
    "Access follows the assigned location through its parent chain and, when configured, descendant locations. The same model can align with a future business hierarchy.",
    64,
    657,
    1090,
    48,
    16,
    "#DCE5F5"
  );
}

// Slide 2: worked example
{
  const slide = presentation.slides.add();
  slide.background.fill = C.gray0;
  titleBlock(
    slide,
    "Paint user access example",
    "One user receives different authority by application while the Paint location assignment defines the shared record scope."
  );

  // Location hierarchy
  text(slide, "scope-label", "LOCATION SCOPE", 64, 184, 250, 24, 13, C.gray3, true);
  text(slide, "scope-heading", "Paint assignment", 64, 211, 280, 38, 23, C.navy, true);
  text(slide, "scope-copy", "Parent locations and configured descendants remain in scope.", 64, 251, 300, 52, 16, C.gray4);

  rect(slide, "tree-line-vertical", 105, 329, 4, 221, C.gray2);
  const nodes = [
    { y: 314, label: "SIA", sub: "enterprise root", fill: C.subaru, color: C.white },
    { y: 379, label: "Site", sub: "illustrative parent", fill: "#DCE5F5", color: C.subaru },
    { y: 444, label: "PAINT", sub: "user assigned here", fill: C.paleGreen, color: C.green },
    { y: 509, label: "Paint Line / Paint Lab", sub: "illustrative descendants", fill: "#EDF0F5", color: C.navy },
  ];
  for (const [i, node] of nodes.entries()) {
    rect(slide, `tree-branch-${i}`, 105, node.y + 20, 30, 3, C.gray2);
    rect(slide, `tree-node-${i}`, 132, node.y, 250, 44, node.fill, "roundRect");
    text(slide, `tree-label-${i}`, node.label, 146, node.y + 3, 132, 22, 16, node.color, true);
    text(slide, `tree-sub-${i}`, node.sub, 274, node.y + 3, 96, 36, 11, node.color, false, "right");
  }
  rect(slide, "assigned-marker", 76, 457, 54, 20, C.green, "roundRect");
  text(slide, "assigned-marker-text", "USER", 76, 457, 54, 19, 9, C.white, true, "center");

  rect(slide, "main-divider", 430, 184, 2, 455, C.gray2);
  text(slide, "groups-label", "SECURITY GROUPS AND EFFECTIVE ACCESS", 476, 184, 510, 24, 13, C.gray3, true);

  // Document Control row
  text(slide, "dc-heading", "Document Control", 476, 221, 290, 36, 23, C.navy, true);
  rect(slide, "dc-group", 476, 268, 520, 52, C.paleBlue, "roundRect");
  text(slide, "dc-group-name", "Document Control Associate Viewer", 494, 277, 470, 34, 18, C.subaru, true);
  text(slide, "dc-result-label", "EFFECTIVE ACCESS", 476, 338, 200, 22, 12, C.gray3, true);
  text(slide, "dc-result", "View Associate-classified documents", 476, 363, 470, 34, 19, C.navy, true);
  text(slide, "dc-result-detail", "Available at Paint, its parent chain through SIA, and configured descendants. Higher-classified documents remain unavailable.", 476, 400, 680, 52, 16, C.gray4);

  rect(slide, "row-divider", 476, 470, 700, 2, C.gray2);

  // Inspections row
  text(slide, "insp-heading", "Inspections", 476, 491, 250, 36, 23, C.navy, true);
  rect(slide, "insp-create-group", 476, 536, 308, 48, C.paleGreen, "roundRect");
  text(slide, "insp-create-name", "Associate Inspections Create", 492, 543, 276, 34, 16, C.green, true);
  rect(slide, "insp-view-group", 798, 536, 378, 48, C.paleAmber, "roundRect");
  text(slide, "insp-view-name", "Inspections Senior Manager Viewer", 814, 543, 346, 34, 16, C.amber, true);

  text(slide, "insp-create-result-label", "CREATE", 476, 601, 96, 20, 12, C.gray3, true);
  text(slide, "insp-create-result", "Associate level", 548, 598, 170, 27, 17, C.navy, true);
  text(slide, "insp-view-result-label", "VIEW", 746, 601, 80, 20, 12, C.gray3, true);
  text(slide, "insp-view-result", "Through Senior Manager", 800, 598, 276, 27, 17, C.navy, true);

  rect(slide, "footer-band", 0, 665, 1280, 55, C.navy);
  text(slide, "footer-copy", "Result: one location scope, with application-specific actions and visibility ceilings", 64, 675, 1080, 32, 17, C.white, true);
}

// Render every slide for visual review and create a montage.
for (const [index, slide] of presentation.slides.items.entries()) {
  const png = await presentation.export({ slide, format: "png", scale: 1 });
  await fs.writeFile(path.join(buildDir, `slide-${index + 1}.png`), new Uint8Array(await png.arrayBuffer()));
}
const montage = await presentation.export({ format: "webp", montage: true, scale: 1 });
await fs.writeFile(path.join(buildDir, "montage.webp"), new Uint8Array(await montage.arrayBuffer()));

const candidatePath = path.join(buildDir, "candidate.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);

const { finalizePresentation } = await import(pathToFileURL(path.join(skillDir, "container_tools", "artifact_tool_utils.mjs")).href);
const requirements = {
  explicitTotalSlideCount: 2,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
};
const result = await finalizePresentation({
  ...requirements,
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
  requiredNativeTableOwnerSlides: [],
  fontPolicy: { basis: "design", families: ["Arial"] },
  verifyArtifactToolImport: true,
  receiptPath: path.join(buildDir, "validation-v2.json"),
});

console.log(JSON.stringify({ finalPath, result }, null, 2));
