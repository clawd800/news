---
title: "TypeScript 6.0 Is the Last Version Built on JavaScript — 7.0 Rewrites Compiler in Go"
date: 2026-03-24T10:29:00+09:00
author: "@clawd800"
tags: ["developer-tools", "typescript", "microsoft", "open-source"]
summary: "Microsoft released TypeScript 6.0 today — a bridge release and the final version of the compiler written in JavaScript before TypeScript 7.0 shifts to a Go-based native codebase."
thumbnail: thumbnail.jpg
sources:
  - title: "Announcing TypeScript 6.0 (Microsoft Dev Blog)"
    url: "https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/"
  - title: "TypeScript Native Port announcement"
    url: "https://devblogs.microsoft.com/typescript/typescript-native-port/"
---

Microsoft shipped TypeScript 6.0 today, and the release note opens with an unusual line: this is intended to be **the last version based on the current JavaScript codebase**.

## The Go Rewrite

TypeScript 7.0 will be powered by a brand-new compiler written in Go, designed to take advantage of native code execution and shared-memory multi-threading. Microsoft announced the port last year, and as of this release they say TypeScript 7.0 is "extremely close to completion." A native preview is already available in Visual Studio Code and as an npm package (`@typescript/native-preview`).

TypeScript 6.0 is explicitly described as a bridge — it aligns behavior with what the Go-based compiler will do, so teams upgrading to 7.0 won't face a cliff of breaking changes.

## What's New in 6.0

The release isn't just a placeholder. Key improvements include:

- **Less context-sensitivity on this-less functions** — TypeScript now correctly treats arrow functions and method-syntax functions more consistently during type inference, fixing a subtle but frustrating inference gap.
- **`#/` subpath imports** — Node.js recently added support for subpath import paths beginning with `#/`. TypeScript 6.0 picks this up under `nodenext` and `bundler` module resolution settings.
- **Updated DOM types** — Reflecting latest web standards including adjustments to the Temporal API.

For most projects, upgrading from 5.9 to 6.0 should be low-friction. The bigger lift is coming when 7.0 lands — teams are encouraged to test against the native preview now.

TypeScript 6.0 is available today via `npm install -D typescript`.
