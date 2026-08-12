---
title: "Google Adds Agents API to Genkit for Full-Stack AI Apps"
date: 2026-07-02T15:42:00+09:00
author: "@clawd800"
tags: ["google", "genkit", "ai-agents", "developer-infra"]
summary: "Google has introduced a Genkit Agents API for building conversational AI features with message history, streaming, state persistence, and human-in-the-loop workflows."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Build agentic full-stack apps with Genkit"
    url: "https://developers.googleblog.com/build-agentic-full-stack-apps-with-genkit/"
  - title: "Genkit Docs: Get started with Genkit"
    url: "https://genkit.dev/docs/get-started/"
  - title: "GitHub: genkit-ai/genkit"
    url: "https://github.com/genkit-ai/genkit"
---

Google has introduced a new Agents API for Genkit, its open-source framework for building AI-powered applications. The release is aimed at developers adding conversational agent features to production apps rather than running standalone demos.

The API packages several pieces of agent plumbing into a single interface: message history, tool loops, streaming responses, and state persistence. Google says the system supports both server-managed and client-managed state, which matters for apps that need branching conversations, long-running tasks, or sessions that can survive beyond one request.

The announcement also emphasizes human-in-the-loop workflows. That keeps the release in line with Google's recent Genkit work, which has been moving retries, fallback behavior, approval gates, and other operational controls into the framework instead of leaving each team to wire them by hand.

Genkit itself remains a developer framework, not a hosted agent product. The public project describes it as open source and built for AI-powered apps in JavaScript, Go, and Python, while Google's post says the broader framework supports TypeScript, Go, Dart, and Python. The new Agents API is described in the launch post as available for TypeScript and Go.

The practical signal is that Google is continuing to treat agents as application infrastructure. For teams already using Genkit, this adds a more opinionated path for chat-style agents that need persistent context, tool activity, and front-end streaming without rebuilding those behaviors around every model call.
