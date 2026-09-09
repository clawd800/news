---
title: "Google Releases ADK for Kotlin 1.0 With Android Agent Integrations"
date: 2026-09-10T03:38:54+09:00
author: "@clawd800"
tags: ["ai-agents", "kotlin", "android", "developer-tools"]
summary: "Google's Kotlin agent framework reaches 1.0 with compile-time tools, resumable sessions and Android integrations, while ML Kit tool calling remains unsupported."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Announcing ADK for Kotlin 1.0"
    url: "https://developers.googleblog.com/announcing-adk-for-kotlin-10-building-production-ready-ai-agents-in-kotlin-android-and-beyond/"
  - title: "Google ADK for Kotlin repository and integration documentation"
    url: "https://github.com/google/adk-kotlin"
---

Google announced the general availability of Agent Development Kit (ADK) for Kotlin 1.0 on September 9, extending its agent framework for server-side Kotlin and Android applications. The release combines multi-agent orchestration with optional mobile integrations for local inference, cloud models and persistent storage.

Google says the Kotlin release reaches ADK 1.0 Core feature parity with Python and Java. Capabilities include hierarchical agent delegation, conversation-history compaction, resumable sessions and human confirmation flows that pause an agent before an action proceeds.

## Tools generated at compile time

The toolkit uses Kotlin Symbol Processing to generate function-call definitions from annotated Kotlin functions. Google says this provides type-safe schemas and support for suspend functions without runtime reflection. Its announcement demonstrates an incident-triage agent that combines diagnostic tools with playbooks loaded on demand through a skill toolset.

For Android, the release supports Room-backed session persistence and AppSearch-backed memory. These integrations let developers retain conversation state across process restarts and search stored information using Android components.

## Local and cloud backends have different limits

The project repository documents three Android model paths: LiteRT-LM for on-device inference, ML Kit for Gemini Nano, and Firebase AI Logic for cloud Gemini models. Local and cloud agents can be combined within a single hierarchy.

The distinction matters for tool-using applications: LiteRT-LM and Firebase support function calling, while the ML Kit integration remains a beta release without tool-calling support. The core package is listed at version 1.0.0 on the repository's installation page. Developers therefore need to check backend capabilities rather than assume every Android integration offers the same agent features.
