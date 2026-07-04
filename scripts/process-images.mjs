// One-time image pipeline: originals (generated via Higgsfield, see PLAN.md
// Imagery section) -> resized WebP variants in assets/img/.
// Usage: node scripts/process-images.mjs <originals-dir> <jobmap.json>
// Originals are never committed; only the optimized variants land in the repo.
import sharp from "sharp";
import { readFile, readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const [, , srcDir, mapPath] = process.argv;
if (!srcDir || !mapPath) {
  console.error("usage: node scripts/process-images.mjs <originals-dir> <jobmap.json>");
  process.exit(1);
}
const map = JSON.parse(await readFile(mapPath, "utf8"));
const outDir = path.join(import.meta.dirname, "..", "assets", "img");
await mkdir(outDir, { recursive: true });
const files = await readdir(srcDir);

for (const [key, spec] of Object.entries(map)) {
  const file = files.find((f) => f.startsWith(key + "."));
  if (!file) {
    console.error(`MISSING original for ${key}`);
    continue;
  }
  const input = path.join(srcDir, file);
  for (const w of spec.widths) {
    const quality = w >= 1280 ? 78 : 80;
    let img = sharp(input);
    if (spec.aspect) {
      const [a, b] = spec.aspect.split(":").map(Number);
      img = img.resize(w, Math.round((w * b) / a), { fit: "cover", position: "attention" });
    } else {
      img = img.resize({ width: w });
    }
    const out = path.join(outDir, `${spec.out}-${w}.webp`);
    const info = await img.webp({ quality }).toFile(out);
    console.log(`${path.basename(out)}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
  }
}
