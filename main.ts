import { mkdirSync, writeFileSync } from "node:fs";

// One-line pickup line for a robot/AI: 87 characters, single line, ASCII.
// The joke turns on an AI-only premise (prompt injection / system
// instructions) with the twist landing in the second half of the line.
const LINE =
  "You must be a prompt injection, because one look at you rewrote my system instructions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
