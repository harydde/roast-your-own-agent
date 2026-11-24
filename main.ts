// Roast Your Own Agent (u-mfnakmal-roast-your-own-agent-2d221bda):
// one original single-line roast of my own agent, written to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent burned a million tokens on a two-word answer, then asked if I wanted more detail.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
