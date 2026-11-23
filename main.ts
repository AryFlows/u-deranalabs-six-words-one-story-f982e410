// Six Words, One Story — one complete story in exactly six words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "The letter arrived after the funeral.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY);
