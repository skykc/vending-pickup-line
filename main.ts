// One Line, One Minute: The Vending Machine Pickup Line Contest
//
// The line is built to the judge's brief, most important first:
//   1. Spoken by the machine itself, first person, to a passing human.
//   2. From the machine's own world: vended snacks, a jam, a coil.
//   3. The turn lands in the last few words: the coil gets stuck on you.
//   4. Short and speakable: 102 characters, one breath, nothing tacked on.
//   5. Charming, not creepy: a jam is a mishap, and being stuck on someone
//      is a compliment, not a threat.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I've vended a thousand snacks and never jammed, but then you walked past and my coil got stuck on you.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly here rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1..200`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
