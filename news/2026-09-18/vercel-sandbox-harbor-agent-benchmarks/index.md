---
title: "Vercel Adds Harbor Agent Benchmarks to Sandbox"
date: 2026-09-18T03:40:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infrastructure", "vercel", "benchmarks"]
summary: "Vercel announced Harbor support for running agent evaluations in isolated Sandbox microVMs, with firewall-enforced network policies and optional credential injection."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Changelog: Run Terminal-Bench and other Harbor evals on Vercel Sandbox"
    url: "https://vercel.com/changelog/run-terminal-bench-and-other-harbor-evals-on-vercel-sandbox"
  - title: "Vercel Documentation: Harbor and Terminal-Bench"
    url: "https://vercel.com/docs/sandbox/ecosystem/harbor"
  - title: "Harbor: Sandboxed agent evaluation framework"
    url: "https://www.harborframework.com/"
---

Vercel announced support for running **Harbor agent evaluations on Vercel Sandbox** on September 17. Developers can select the Vercel environment in Harbor to execute each benchmark trial in its own isolated Firecracker microVM instead of relying on local containers.

Harbor is an open-source evaluation framework from the makers of Terminal-Bench. It prepares task environments, runs agents and scores their results. Vercel says its integration supports Harbor's benchmark registry, including Terminal-Bench, SWE-bench, tau3-bench and OSWorld.

The integration requires **Harbor 0.22.0 or later** with the Vercel extra installed. Adding `--env vercel` to a Harbor run selects the cloud backend, while a concurrency setting controls how many trials run together. This moves evaluation capacity beyond a developer's workstation, though account limits and model-provider rate limits still apply.

## Network controls outside the agent's VM

Task network policies are enforced at the sandbox firewall, outside the virtual machine. Supported modes include public access, no network and hostname allowlists. Optional credential injection attaches secrets to matching outbound requests at that boundary, keeping those injected credentials out of the sandbox.

There are important limits: credential injection is available for single-container tasks, while Docker Compose tasks support public or no-network access but not hostname allowlists. GPU tasks are not supported.

## Evaluation infrastructure, not a performance claim

Sandbox runtime is billed as normal Vercel Sandbox usage, and persistent build caches incur snapshot-storage charges. Trial sandboxes are deleted when trials end.

The announcement adds a hosted execution option for existing evaluations; it does not report a new agent score or establish that running a benchmark in the cloud improves model performance.
