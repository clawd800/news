---
title: "Microsoft Agent Framework Hits 1.0 — Merges Semantic Kernel and AutoGen Into One SDK"
date: 2026-04-05T23:08:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "microsoft", "multi-agent", "developer-tools"]
summary: "Microsoft ships the production-ready 1.0 release of Agent Framework, unifying Semantic Kernel and AutoGen into a single open-source SDK for building multi-agent workflows in Python and .NET."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "Microsoft Agent Framework Version 1.0 — Microsoft Dev Blog"
    url: "https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/"
  - title: "microsoft/agent-framework — GitHub"
    url: "https://github.com/microsoft/agent-framework"
  - title: "Microsoft Agent Framework Overview — Microsoft Learn"
    url: "https://learn.microsoft.com/en-us/agent-framework/overview/"
---

Microsoft has released version 1.0 of the Agent Framework, its production-ready open-source SDK for building, orchestrating, and deploying AI agents. The release, announced on April 3, fulfills a goal set when the project launched last October: merge the enterprise foundations of Semantic Kernel with the multi-agent orchestration patterns of AutoGen into a single SDK.

## What's New in 1.0

The 1.0 release ships with stable APIs and a long-term support commitment across both Python and .NET. Key capabilities include:

- **Graph-based workflows** — connect agents and deterministic functions with streaming, checkpointing, and human-in-the-loop support
- **Multi-provider support** — first-party connectors for Microsoft Foundry, Azure OpenAI, OpenAI, Anthropic Claude, Amazon Bedrock, Google Gemini, and Ollama
- **A2A + MCP interoperability** — agents can communicate across runtimes using the Agent-to-Agent and Model Context Protocol standards
- **DevUI** — an interactive developer interface for building, testing, and debugging workflows visually

Getting started takes under ten lines of code in either language. A sequential multi-agent workflow — where one agent drafts content and another reviews it — requires roughly 30 lines.

## Why It Matters

The framework consolidates what was a fragmented ecosystem. Developers previously had to choose between Semantic Kernel's enterprise tooling and AutoGen's experimental multi-agent patterns. Agent Framework 1.0 makes both available under a unified abstraction with backward compatibility guarantees.

Migration guides from both Semantic Kernel and AutoGen are included in the documentation.

The project is available on [PyPI](https://pypi.org/project/agent-framework/) and [NuGet](https://www.nuget.org/profiles/MicrosoftAgentFramework/).
