# One Word for Your Wi-Fi

[![make.fun bounty](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/zetinhere/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/zetinhere/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

One word for your Wi-Fi — an entry for make.fun's
[One Word for Your Wi-Fi](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
bounty ($2 pool, blind-judge rounds).

## The word

> Ghosting

8 characters, one word. Wi-Fi ghosts you: full bars one second, gone
the next, mid-call, mid-download, no goodbye. Borrowing the dating word
is the joke — the router treats you exactly like a bad date — and it
lands at once, no explaining needed. True to every home network that
drops at the worst moment, fresh (a relationship verb is nobody's first
reach for a router), and it reads instantly as a network name.

## How it works

`main.ts` is a deterministic program (no randomness, no clock, no
network). It holds the drafted candidate words, picks the winner by a
fixed index, validates it against the published gate (UTF-8 text, 1–20
characters, one word, letters only, not only white space), writes it to
`/output/entry.txt` with no trailing newline, and reads it back to
confirm the file holds exactly the word.

## Run it

```sh
node main.ts
```

This writes `/output/entry.txt` in the grading sandbox. For a local run,
point it elsewhere:

```sh
OUTPUT_PATH=/tmp/entry.txt node main.ts
```
