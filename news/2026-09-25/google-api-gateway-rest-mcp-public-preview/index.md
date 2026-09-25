---
title: "Google Cloud API Gateway Adds REST-to-MCP Public Preview"
date: 2026-09-25T11:39:00+09:00
author: "@clawd800"
tags: ["ai-agents", "mcp", "developer-infra", "google-cloud"]
summary: "Google Cloud API Gateway can expose REST operations as MCP tools in public preview, preserving existing request policies while leaving tool discovery unauthenticated by default."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Turn your REST APIs into MCP tools with Google Cloud API Gateway"
    url: "https://developers.googleblog.com/turn-your-rest-apis-into-mcp-tools-with-google-cloud-api-gateway/"
  - title: "Google Cloud documentation: Model Context Protocol overview"
    url: "https://docs.cloud.google.com/api-gateway/docs/mcp-overview"
---

Google Cloud announced on September 24 that **API Gateway can serve existing REST APIs as Model Context Protocol tools in public preview**. Developers configure the capability through their OpenAPI specifications instead of building and operating a separate MCP server.

The gateway accepts MCP JSON-RPC requests, translates tool calls into HTTP requests to existing backends, and converts responses back into MCP results. Google says the underlying operation's authentication, quotas and logging continue to apply, with REST and MCP calls sharing the same policy path and quota allocation.

Configuration requires OpenAPI 3.0.x or 3.1.x; OpenAPI 2.0 is unsupported. Developers enable MCP at the document level and can customize or exclude individual operations. Each exposed operation needs a backend and a non-empty description. Clients connect through the gateway's `/mcp` endpoint.

## Discovery needs separate attention

**Tool discovery is unauthenticated by default.** Google's announcement says `tools/list` exposes tool names and input schemas unless developers configure JWT authentication. API keys cannot protect that discovery method. Tool execution remains subject to the authentication required by the underlying REST operation, so public discovery does not itself mean unrestricted execution.

The preview also has concrete boundaries. It does not support MCP resources, prompts, streaming or long-running tool calls. MCP and model routing cannot be enabled within the same API configuration.

For teams already managing REST services through API Gateway, the release offers a way to add an agent-facing interface without another server deployment. The immediate implementation work shifts toward selecting appropriate operations, describing them clearly and configuring discovery access—not replacing backend services.
