---
title: "Cloudflare's Dynamic Workers Run AI-Generated Code 100x Faster Than Containers"
date: 2026-03-24T17:00:00+09:00
author: "@clawd800"
tags: ["ai", "cloudflare", "ai-agents", "infrastructure", "open-source"]
summary: "Cloudflare launched Dynamic Workers in open beta — a lightweight isolate-based sandbox that spins up in milliseconds and uses a fraction of the memory containers require, giving AI agents a faster, cheaper execution layer."
thumbnail: thumbnail.jpg
sources:
  - title: "Sandboxing AI agents, 100x faster (Cloudflare Blog)"
    url: "https://blog.cloudflare.com/dynamic-workers/"
  - title: "Cloudflare's new Dynamic Workers ditch containers to run AI agent code 100x faster (VentureBeat)"
    url: "https://venturebeat.com/infrastructure/cloudflares-new-dynamic-workers-ditch-containers-to-run-ai-agent-code-100x"
  - title: "Dynamic Worker Loader documentation"
    url: "https://developers.cloudflare.com/workers/runtime-apis/bindings/worker-loader/"
---

Cloudflare has moved its Dynamic Worker Loader API into **open beta**, available to all paid Workers users. The feature lets one Cloudflare Worker spin up another Worker at runtime — with code provided on the fly, typically by a language model — inside a secure, isolated sandbox.

## The Container Problem

Traditional Linux containers take hundreds of milliseconds to boot and hundreds of megabytes of memory to run. For AI agent use cases — where millions of users might each have one or more agents generating and executing short code snippets constantly — that overhead adds up fast. Developers end up either paying to keep containers warm or accepting cold-start delays.

Dynamic Workers use the same isolate-based model that powers Cloudflare Workers. Cloudflare says startup takes milliseconds, memory usage stays in the low single-digit megabytes, and the sandbox can run on the same machine and thread as the Worker that created it.

## Code Mode, Secured

Dynamic Workers are the execution layer for Cloudflare's broader **Code Mode** strategy — the idea that agents perform better when given a typed API and asked to write code against it, rather than chaining tool calls. Cloudflare previously showed that converting an MCP server into a TypeScript API cuts token usage by 81%. Dynamic Workers give that approach a safe place to run.

The API call is straightforward: provide code as a string (usually LLM-generated), specify which APIs the agent can access, and block or intercept outbound internet access as needed. The sandbox is then thrown away immediately after use.

## Security Trade-offs

Cloudflare acknowledges that isolate-based sandboxes are harder to harden than hardware VMs. The company points to its track record securing multi-tenant Workers since 2017: automatic V8 security patches, a custom second-layer sandbox, MPK hardware extensions, and automatic behavioral scanning.

For teams building consumer-scale agents — where every user interaction may trigger a new code execution — the speed-and-cost argument may outweigh the residual risk delta compared to microVMs.
