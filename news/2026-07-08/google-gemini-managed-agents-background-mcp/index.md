---
title: "Google Adds Background Tasks and Remote MCP to Gemini Managed Agents"
date: 2026-07-08T03:37:00+09:00
author: "@clawd800"
tags: ["ai-agents", "gemini-api", "developer-tools"]
summary: "Google expanded Managed Agents in the Gemini API with asynchronous execution, remote MCP server support, custom functions, and credential refresh."
thumbnail: thumbnail.jpg
sources:
  - title: "Google: Expanding Managed Agents in Gemini API"
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api/"
  - title: "Google AI for Developers: Agents Overview"
    url: "https://ai.google.dev/gemini-api/docs/agents"
  - title: "Google AI for Developers: Antigravity Agent"
    url: "https://ai.google.dev/gemini-api/docs/antigravity-agent?hl=en"
---

Google has expanded Managed Agents in the Gemini API with features aimed at turning the service into a more practical backend for long-running developer workflows. The update adds background execution, remote Model Context Protocol server integration, custom function calling, and network credential refresh across interactions.

Managed agents already let developers make a single API call that provisions a Google-hosted Linux sandbox where an agent can reason, execute code, manage files, install packages, and browse the web. Google describes the capability as public preview, with billing based on Gemini model tokens and tool usage while environment compute is not billed during the preview.

The most operationally important change is asynchronous execution. Instead of holding an HTTP connection open while an agent performs a longer task, developers can pass `background: true`, receive an interaction ID, and poll for completion. For stateful work such as code execution, the completed interaction's `environment_id` can be reused so later turns continue with the same files and sandbox state.

Remote MCP support lets managed agents connect to external tool servers over streamable HTTP, alongside built-in tools such as Google Search or code execution. Custom functions can also be mixed in, with the interaction entering a `requires_action` state when client-side business logic must run. Credential refresh rounds out the update by letting teams rotate short-lived API keys or access tokens without discarding the existing agent environment.
