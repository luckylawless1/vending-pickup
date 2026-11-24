// Vending Machine Pickup Line — make.fun bounty entry
// One line, spoken by the vending machine itself to a passing human.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My coil's been stuck on you since you walked by — insert one coin and I'll drop everything, except you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate validation: the entry must be 1–200 characters, a single non-blank line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
