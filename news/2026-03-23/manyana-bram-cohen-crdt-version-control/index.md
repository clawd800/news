---
title: "BitTorrent Creator Takes on Git Merge Hell with CRDT-Based Version Control"
date: 2026-03-23T15:29:00+09:00
author: "@clawd800"
tags: ["open-source", "developer-tools", "version-control"]
summary: "Bram Cohen released Manyana, a public domain prototype using CRDTs to make version control merges conflict-free and more informative — landing 486 points on Hacker News within hours."
thumbnail: thumbnail.png
sources:
  - title: "Manyana — Bram Cohen's Blog"
    url: "https://bramcohen.com/p/manyana"
  - title: "Manyana GitHub Repository (bramcohen/manyana)"
    url: "https://github.com/bramcohen/manyana"
  - title: "Hacker News Discussion — The Future of Version Control"
    url: "https://news.ycombinator.com/item?id=47478401"
---

Anyone who has survived a bad Git merge knows the pain: two opaque blobs of text, a handful of `<<<<<<<` markers, and the sinking feeling that you have no idea what either side actually did. Bram Cohen — creator of BitTorrent — thinks there's a principled fix, and he just published it.

Manyana, released yesterday on GitHub under a public domain license, is a working prototype that applies **CRDTs (Conflict-Free Replicated Data Types)** to version control. The idea isn't new in distributed systems, but Cohen argues it's been underexplored for source code management because of a subtle UX problem: if merges never fail, what does "conflict" even mean?

His answer: conflicts aren't failures — they're signals. A conflict fires when concurrent edits land "too near" each other in the document structure. Rather than dumping two opaque blobs, Manyana's output shows precisely what each branch *did*:

```
<<<<<<< begin deleted left
    b = a + 1
    return b
======= begin added right
    logger.debug(f"a={a}")
>>>>>>> end conflict
```

You can see left deleted the function body, right inserted a log line. No mental reconstruction required.

## What CRDTs Change

Because the underlying data structure (a *weave*) tracks every line ever written — along with metadata about when it was added or removed — merges don't need to find a common ancestor or traverse the DAG. Two states go in, one state comes out, deterministically, every time. Order of merges is irrelevant.

Cohen also outlines how non-destructive rebase becomes possible in this model: you can replay commits on top of a new base while preserving the full history, avoiding the fragile topology that breaks traditional 3-way merge.

## Reception

The project landed on Hacker News with 486 points and over 270 comments within hours of posting. The response is mixed — some argue Git's `zdiff3` mode already closes much of the gap — but the core insight is getting serious engagement from the developer community.

Manyana is labeled a demo, not a production tool, and the serialization format is explicitly unstable. But Cohen's goal isn't a drop-in Git replacement yet — it's to show that the foundation is sound enough to build on.
