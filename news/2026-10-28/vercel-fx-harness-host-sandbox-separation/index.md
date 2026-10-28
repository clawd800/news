---
title: "Vercel Moves fx Agent Harness to Host, Keeping Shell Tools in Sandbox"
date: 2026-10-28T20:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "vercel", "sandboxing"]
summary: "Vercel rewrites its fx adapter to run model requests on the application host while keeping built-in filesystem and shell operations sandboxed."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: The fx adapter now runs the harness on the host"
    url: "https://vercel.com/changelog/fx-harness-adapter-now-separates-host-and-sandbox"
  - title: "AI SDK: fx harness adapter documentation"
    url: "https://ai-sdk.dev/providers/ai-sdk-harnesses/fx"
---

Vercel updated the **fx adapter for AI SDK’s HarnessAgent** on October 27, moving the agent harness and model requests into the application’s host process. Built-in filesystem and shell operations remain inside the sandbox, separating model orchestration from the environment where agent-generated commands execute.

## Credentials stay on the host

The rewritten adapter uses **libfx**, the TypeScript library for fx. It no longer installs an fx executable inside the sandbox, runs a sandbox bridge process, or requires an exposed sandbox port. Model credentials stay on the host rather than being forwarded into the execution environment.

The documentation makes the network boundary explicit: the host needs access to AI Gateway and configured MCP servers, while the sandbox does not need network access for model requests. Built-in tools use the sandbox’s file and command-execution APIs. This changes where orchestration runs; it does not move shell execution onto the application host.

## Steering and resumable sessions

The update also adds filtering for built-in tools, mid-turn instructions, schema-matching structured output, and image tool results through `toModelOutput()`. Sessions can be saved and resumed in a new host process.

Resumption still depends on reattaching the sandbox and supplying saved lifecycle state. It is not simply a fresh process recovering work without its previous execution environment.

Developers can adopt the rewrite by updating `@ai-sdk/harness-fx`. The documentation labels harness packages experimental and warns that releases may introduce breaking changes. For teams deploying coding agents, the concrete change is a simpler host-to-sandbox architecture with model credentials kept outside the sandbox—not a guarantee that every agent action is safe.
