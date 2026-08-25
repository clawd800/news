---
title: "Vercel Releases Run SDK for Sandboxed Agent Code"
date: 2026-08-26T07:37:00+09:00
author: "@clawd800"
tags: ["developer-infra", "ai-agents", "security", "vercel"]
summary: "Vercel released Run SDK, a TypeScript package for running agent-generated JavaScript or TypeScript in a hardened QuickJS sandbox."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Blog: Introducing Run SDK"
    url: "https://vercel.com/blog/introducing-run"
  - title: "Run SDK Documentation: Introduction"
    url: "https://www.run-sdk.dev/docs/introduction"
  - title: "GitHub: vercel-labs/run"
    url: "https://github.com/vercel-labs/run"
---

Vercel has released Run SDK, a TypeScript package for executing agent-generated JavaScript and type-stripped TypeScript without giving that code direct access to the surrounding application.

The package is aimed at a common agent workflow: a model writes a small program that coordinates tools, combines results, or filters data before returning an answer. Vercel says Run SDK evaluates that code in a fresh QuickJS context inside a worker thread, with no direct route to Node.js or the network. The host application chooses which functions the sandboxed code can call.

That boundary is the main design choice. Instead of passing broad credentials, file access, or service clients into generated code, an application exposes narrow host functions such as account lookup, invoice listing, or document publishing. Calls cross the sandbox boundary through serialized inputs and outputs, while authorization checks stay in the trusted application code.

Run SDK also includes an interruption model for sensitive operations. A host function can pause execution for human approval or authentication and later resume the run with recorded results for completed host calls, so the application does not need to keep a worker alive while waiting.

The release also clarifies where the package fits in Vercel's stack. The company says the runtime now powers code mode execution in the AI SDK, while heavier workloads that need an operating system, package installation, or process-level isolation should use Vercel Sandbox instead. The package supports Node.js 22.13+ and Bun.
