import { cpSync, mkdirSync } from "node:fs";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
cpSync(new URL("./entry.png", import.meta.url), out + "/entry.png");
console.log("entry.png copied");