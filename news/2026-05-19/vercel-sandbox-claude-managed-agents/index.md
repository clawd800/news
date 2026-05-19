---
title: "Vercel Runs Claude Managed Agents Inside Sandbox MicroVMs"
date: 2026-05-19T23:20:00+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "developer-infra", "vercel"]
summary: "Vercel says Claude Managed Agents can now run tool calls inside Vercel Sandbox sessions with Firecracker isolation and firewall-brokered credentials."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Changelog: Run Claude Managed Agents with Vercel Sandbox"
    url: "https://vercel.com/changelog/run-claude-managed-agents-with-vercel-sandbox"
  - title: "Vercel Docs: Vercel Sandbox"
    url: "https://vercel.com/docs/vercel-sandbox"
  - title: "Claude Docs: Managed Agents overview"
    url: "https://platform.claude.com/docs/en/managed-agents/overview"
---
Vercel has added support for running **Claude Managed Agents** with **Vercel Sandbox**, giving developers a hosted agent loop from Anthropic while keeping execution inside Vercel's isolated runtime.

## What changed

According to Vercel's May 18 changelog, Claude Managed Agents handles the model, harness, tools, and session state. The self-hosted execution path lets an agent's tool calls run on a user's Vercel infrastructure instead, including access to private APIs, internal services, and customer data where configured.

Each agent session runs in its own Firecracker microVM, with a Vercel function acting as the control plane that spawns one sandbox per session. Vercel says the setup includes credential brokering at the firewall, so secrets do not enter the sandbox, plus deny-by-default egress with domain allowlists.

## Why it matters

The release is less about a new model and more about where agent work actually executes. Anthropic's Managed Agents docs describe the product as a configurable agent harness for long-running and asynchronous tasks. Vercel Sandbox, separately, is built for isolated, ephemeral Linux VMs that can run untrusted or user-generated code.

Putting those pieces together gives teams a clearer split: Anthropic manages the agent loop, while Vercel provides the sandboxed execution boundary and network controls. For developers building coding agents or back-office automation, that separation could make it easier to connect agents to real systems without giving every tool call broad access to the host environment.
