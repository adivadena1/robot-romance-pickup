import { mkdirSync, writeFileSync } from "node:fs";

// Robot Romance (rework, R3 final): one pickup line, human courting a robot.
// The robot answers a smuggled compliment by crossing out the milk and
// writing the speaker's name instead — the romance is in the tail, not the
// quote. "grocery list app" (R3) names the machine in the setup: a human
// partner could do this on paper, an app cannot be a human partner.
const LINE =
  "I hid 'tell me I'm handsome' in my grocery list app, and you crossed out the milk and wrote my name.";

// Sealed gate: UTF-8 text, 1-200 chars, one line, not only whitespace.
// Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} outside sealed gate 1-200`);
}
if (/[\r\n]/.test(LINE) || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
