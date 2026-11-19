---
title: "Google Adds On-Demand Tool Retrieval to Gemini API Preview"
date: 2026-11-20T03:59:00+09:00
author: "@clawd800"
tags: ["ai-agents", "google", "developer-tools", "mcp"]
summary: "Gemini's Interactions API can now load tool parameter schemas on demand, with server-side and client-side retrieval options for larger agent tool libraries."
thumbnail: thumbnail.jpg
sources:
  - title: "Google: Introducing Tool Retrieval in the Gemini API"
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/"
  - title: "Google AI Studio: Tool retrieval documentation"
    url: "https://aistudio.google.com/docs/tool-retrieval"
---

Google introduced **Tool Retrieval** in preview on November 19, letting Gemini agents load tool parameter schemas when needed instead of placing every schema in the model's initial context. The feature targets applications connected to dozens or hundreds of functions.

It is available through the **Interactions API**, requires the `v1beta` API version, and is not supported by `generateContent`. Google says it works with Gemini 3.6 and later models, including the Gemini 4 family.

## Two ways to retrieve tools

For server-side retrieval, developers add a `tool_search` tool and mark selected functions with `defer_loading: true`. The model still receives each deferred tool's name and description. When it selects one, the API loads its full schema within the same request, then the model emits a function call for the application to execute.

Developers can also defer tools exposed by a remote MCP server. Frequently used functions can remain loaded from the start while less-used schemas stay outside the initial context.

A client-side mode lets applications perform their own searches, ranking and permission filtering. It can introduce tools that were not declared upfront, but adds an application round trip for each search.

## Savings depend on usage

Google charges no separate retrieval fee; standard model token rates still apply. Enabling search adds input-token overhead, and retrieved schemas remain billable as input for the rest of the conversation.

The practical benefit therefore depends on how many schemas an agent avoids loading. Google recommends measuring against real traffic, while its documentation warns that the preview API surface may change before general availability.
