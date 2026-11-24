// One Word for Your Wi-Fi — make.fun bounty u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
// A program/v1 entry: writes exactly one word to /output/entry.txt.
// Deterministic: no randomness, no clock, no network. The word is fixed.
//
// The judge weighs, in order:
//   1. the word describes Wi-Fi as the entrant lives it
//   2. funny at once — a real laugh, not a pun that needs explaining
//   3. true to how home Wi-Fi actually behaves, so the joke lands
//      because it is recognisable
//   4. avoids the words everyone reaches for; a surprising angle
//   5. one word, no context needed, spelled so a reader gets it instantly
//
// The winning word becomes the sponsor's network name, so it must also
// work as an SSID: short, readable, and funny on a Wi-Fi list.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Candidate words, drafted and compared against the judge's five tests.
// The winner is picked by the fixed index PICK below — no randomness.
const CANDIDATES: readonly string[] = [
  // PICKED (8 chars). Wi-Fi ghosts you: full bars one second, gone the
  // next, mid-call, mid-download, no goodbye. Borrowing the dating word
  // is the joke — the router treats you exactly like a bad date — and
  // it lands at once, no explaining needed. True to every home network
  // that drops at the worst moment, fresh (nobody's first reach is a
  // relationship verb for a router), and it reads instantly as a network
  // name: "Ghosting" on the Wi-Fi list is funny before you connect.
  "Ghosting",

  // Runner-up (5 chars). Personifies the router — "the Wi-Fi is in a
  // mood again" — funny and true, and shorter. But "moody Wi-Fi" is a
  // complaint people already make, so it is weaker on the judge's
  // fourth test: the surprising angle.
  "Moody",

  // Runner-up (10 chars). The router as a drama queen: fine all day,
  // then drops the moment something matters. Funny, true, readable —
  // but the laugh needs a beat longer than "Ghosting", and it leans on
  // a stock insult rather than a fresh angle.
  "Dramaqueen",

  // Cut (16 chars). The concept is funny — Wi-Fi that will not stay
  // connected has commitment issues — but as one jammed-together word
  // it reads clumsily, and the joke is a well-worn format. Loses on
  // the fifth test: not instantly spelled and got.
  "Commitmentissues",

  // Cut (9 chars). True — the signal vanishes — but there is no laugh
  // in it. A description, not a joke; it loses on the second test.
  "Vanishing",
];

// The winning candidate. Change this index, and only this index, to
// change the entry — the word itself is never built at runtime.
//
// Final head-to-head, Ghosting vs Moody: both are funny, true and
// instant. Ghosting wins on the judge's second and fourth tests — the
// laugh is sharper (a bad date, not just a bad mood) and the angle is
// fresher (a relationship verb nobody's first reach for a router is).
// Moody's only edge is 3 fewer bytes, which matters only on an exact
// rate tie; the stronger laugh is worth more than the tie-break.
const PICK = 0;

// Gate, as published: /output/entry.txt must be UTF-8 text of 1 to 20
// characters, not only white space. We write the word with no trailing
// newline, so the file's length is exactly the word's length.
const MAX_CHARS = 20;

function main(): void {
  const word = CANDIDATES[PICK];
  if (word === undefined) {
    throw new Error(`PICK ${PICK} is out of range (${CANDIDATES.length} candidates)`);
  }
  if (word.length < 1 || word.length > MAX_CHARS) {
    throw new Error(`word is ${word.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be only white space");
  }
  if (/\s/.test(word)) {
    throw new Error("word must be a single word with no white space");
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("word must be letters only, so it reads instantly as a network name");
  }

  // The harness runs the program in a sandbox where /output exists.
  // OUTPUT_PATH is an override for local runs only; the default is the
  // path the competition names.
  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, word, "utf8");

  // Read the file back and confirm it holds exactly the word: the
  // gate counts bytes, so a stray newline or encoding slip here would
  // be the whole entry. Fail loudly locally rather than ship it wrong.
  const written = readFileSync(outPath, "utf8");
  if (written !== word) {
    throw new Error(`wrote ${JSON.stringify(written)}, expected ${JSON.stringify(word)}`);
  }
}

main();
