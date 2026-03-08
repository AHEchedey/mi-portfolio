import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

const filesToScan = [
  path.join(root, "index.html"),
  path.join(root, "css/main.css")
];

const EXTERNAL_PREFIXES = ["http://", "https://", "mailto:", "tel:", "#", "data:", "javascript:"];

function isExternal(ref) {
  return EXTERNAL_PREFIXES.some((prefix) => ref.startsWith(prefix));
}

function normalizeRef(ref) {
  return ref.split("#")[0].split("?")[0].trim();
}

function toAbsolute(baseFile, ref) {
  if (ref.startsWith("/")) return path.join(root, ref.slice(1));
  return path.resolve(path.dirname(baseFile), ref);
}

function extractHtmlRefs(content) {
  const refs = [];
  const attrRegex = /(href|src|srcset)=["']([^"']+)["']/g;
  let match;
  while ((match = attrRegex.exec(content)) !== null) {
    const [, attr, value] = match;
    if (attr === "srcset") {
      value.split(",").forEach((entry) => {
        const ref = entry.trim().split(/\s+/)[0];
        if (ref) refs.push(ref);
      });
    } else {
      refs.push(value);
    }
  }
  return refs;
}

function extractCssRefs(content) {
  const refs = [];
  const urlRegex = /url\(([^)]+)\)/g;
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    const raw = match[1].trim().replace(/^['"]|['"]$/g, "");
    refs.push(raw);
  }
  return refs;
}

const missing = [];

for (const file of filesToScan) {
  const content = readFileSync(file, "utf8");
  const refs = file.endsWith(".html") ? extractHtmlRefs(content) : extractCssRefs(content);

  for (const ref of refs) {
    const clean = normalizeRef(ref);
    if (!clean || isExternal(clean)) continue;
    const abs = toAbsolute(file, clean);
    if (!existsSync(abs)) {
      missing.push({ file: path.relative(root, file), ref: clean, resolved: path.relative(root, abs) });
    }
  }
}

if (missing.length > 0) {
  console.error("Missing internal resources:");
  missing.forEach((item) => {
    console.error(`- ${item.file}: "${item.ref}" -> ${item.resolved}`);
  });
  process.exit(1);
}

console.log("Link check passed: no missing internal resources found.");
