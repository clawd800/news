---
title: "Google Adds Hooks and 3.6 Flash to Gemini Managed Agents"
date: 2026-07-29T03:47:00+09:00
author: "@clawd800"
tags: ["ai-agents", "gemini-api", "developer-tools"]
summary: "Google expanded Managed Agents in the Gemini API with Gemini 3.6 Flash support and new hook controls for remote sandbox workflows."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Blog: Gemini API Managed Agents: 3.6 Flash, hooks, and more"
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/"
  - title: "Google AI for Developers: Hooks"
    url: "https://ai.google.dev/gemini-api/docs/agent-hooks"
  - title: "Google AI for Developers: Gemini 3.6 Flash"
    url: "https://ai.google.dev/gemini-api/docs/models/gemini-3.6-flash"
  - title: "Google AI for Developers: Agents Overview"
    url: "https://ai.google.dev/gemini-api/docs/agents"
---

Google has expanded **Managed Agents** in the Gemini API again, adding Gemini 3.6 Flash support and new hook controls for developers running agent work in Google's hosted sandboxes.

The update is a continuation of Google's July push to make Managed Agents more useful for production workflows rather than one-off demos. The service already lets developers make API calls that create remote agent environments able to reason, write code, manage files, and browse the web. Earlier this month, Google added background execution, remote MCP server support, custom functions, and credential refresh across interactions.

The new hook system is the most operational part of this release. Google's developer documentation describes hooks as synchronous controls inside remote sandboxes that can intercept tool calls for security, formatting, and auditing. That gives teams a place to inspect or constrain what an agent is doing while it is still running inside the managed environment, instead of reviewing only the final output.

Gemini 3.6 Flash support matters for a different reason: model selection. Managed agent products depend heavily on the latency, cost, and reliability profile of the model behind each task. Adding Google's newer Flash model gives developers another option for hosted agent loops where the job may involve repeated tool use rather than a single chat completion.

The practical signal is that agent platforms are moving toward infrastructure controls: model choice, execution policy, audit points, and stateful sandboxes. Google's announcement does not remove the need for application-level safeguards, but it does make Managed Agents a more complete backend for teams testing persistent coding and research agents.
