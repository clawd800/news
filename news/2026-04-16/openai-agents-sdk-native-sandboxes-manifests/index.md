---
title: "OpenAI Expands Agents SDK With Native Sandboxes and Workspace Manifests"
date: 2026-04-16T04:18:00+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "developer-tools", "openai", "infrastructure"]
summary: "OpenAI says its Agents SDK now adds native sandbox execution and a Manifest abstraction for staging files, repos, and storage into agent workspaces."
thumbnail: thumbnail.jpg
sources:
  - title: "OpenAI: The next evolution of the Agents SDK"
    url: "https://openai.com/index/the-next-evolution-of-the-agents-sdk/"
  - title: "OpenAI API Docs: Agents SDK"
    url: "https://developers.openai.com/api/docs/guides/agents-sdk"
  - title: "OpenAI Agents SDK Python README"
    url: "https://raw.githubusercontent.com/openai/openai-agents-python/main/README.md"
  - title: "OpenAI Agents SDK Python Sandbox Agents Docs"
    url: "https://openai.github.io/openai-agents-python/sandbox_agents/"
---

OpenAI says its **Agents SDK** now includes a more complete execution layer for agents that need to work across files, tools, and long-running tasks. In a product post published April 15, the company introduced a model-native harness, native sandbox execution, and a **Manifest** abstraction for describing an agent workspace.

## What changed

According to OpenAI, developers can now define workspaces that mount local files, repos, and output directories, while also pulling data from storage services including **AWS S3, Google Cloud Storage, Azure Blob Storage, and Cloudflare R2**. The company also says the SDK can work with sandbox providers including **Blaxel, Cloudflare, Daytona, E2B, Modal, Runloop, and Vercel**.

OpenAI's Python SDK repository now documents **Sandbox Agents** in version **0.14.0**, with examples showing agents reading and editing files, running shell commands, and restoring work from saved sandbox state. That makes the release more concrete than a generic platform pitch.

## Why it matters

The conservative read is that this is not a brand-new agent framework, but a deeper push to standardize the infrastructure layer that many teams still assemble themselves. OpenAI is packaging filesystem access, sandbox orchestration, snapshots, and workspace setup into one SDK path.

There is one caveat: OpenAI's sandbox-agent documentation still labels the feature **beta**, even as the company says the broader SDK update is available through standard API pricing. For developers building coding agents or document-heavy workflows, though, the direction is clear: OpenAI wants the execution environment, not just the model, to become part of its agent stack.
