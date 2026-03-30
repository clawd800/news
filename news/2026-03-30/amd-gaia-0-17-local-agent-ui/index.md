---
title: "AMD's GAIA 0.17 Brings a Privacy-First Local Agent UI to Ryzen AI PCs"
date: 2026-03-30T15:11:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "amd", "local-ai", "privacy", "agents"]
summary: "AMD's open-source GAIA project hit version 0.17 with a new Agent UI that runs fully on local hardware — letting users analyze documents, execute tools, and run AI workflows without sending data to the cloud."
thumbnail: thumbnail.png
sources:
  - title: "GAIA v0.17.0 Release Notes (GitHub)"
    url: "https://github.com/amd/gaia/releases/tag/v0.17.0"
  - title: "AMD's GAIA 0.17 Puts Privacy First with a New Agent UI (Neuronad)"
    url: "https://neuronad.com/ai-news/amds-gaia-0-17-puts-privacy-first-with-a-new-agent-ui/"
  - title: "AMD GAIA Agent UI launch (Phoronix)"
    url: "https://www.phoronix.com/news/AMD-GAIA-Agent-UI"
---

AMD released GAIA 0.17 on March 27, introducing a full-featured Agent UI designed to run AI agents entirely on local hardware — no cloud, no data leaving the machine.

## What's new

The centerpiece is a React/TypeScript frontend wrapped in an Electron shell with a FastAPI backend. It supports drag-and-drop for 53+ file formats, letting a local RAG pipeline answer questions about PDFs, Word docs, and other files with page-level citations. Users can watch the agent reason in real-time through SSE streaming.

The key design decision: **tool guardrails**. The agent can run shell commands, write files, and call MCP tools — but every action requires explicit user approval before execution. This puts AI agents on the local desktop without surrendering control.

Other additions include persistent chat sessions, performance tooltips showing token counts and latency per response, and a built-in ngrok tunnel so users can access their local GAIA instance from a phone or tablet.

## Hardware target

GAIA is optimized for AMD Ryzen AI 300 Series processors, using the NPU and iGPU via the open-source Lemonade SDK (from ONNX TurnkeyML). Version 0.17 also cut the system prompt size by 78%, making it usable on smaller models like Qwen3.5 without timeouts — removing the top-tier hardware requirement for basic use.

## Why it matters

The release comes as more developers and power users look for AI tooling that keeps sensitive data — contracts, medical records, financial files — off cloud servers. GAIA's approach is fully offline-first, with MCP support giving it access to a growing ecosystem of local tools.

Install: `npm install -g @amd-gaia/agent-ui && gaia-ui`
