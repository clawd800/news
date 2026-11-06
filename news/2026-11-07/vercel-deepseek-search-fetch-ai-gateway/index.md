---
title: "Vercel Adds DeepSeek Search and Fetch to AI Gateway"
date: 2026-11-07T08:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "vercel", "deepseek"]
summary: "Vercel's AI Gateway now offers DeepSeek web search and page retrieval across tool-calling models, with each tool priced at $0.75 per 1,000 billable requests."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: AI Gateway adds DeepSeek Search and Fetch tools"
    url: "https://vercel.com/changelog/ai-gateway-adds-deepseek-search-and-fetch-tools"
  - title: "Vercel documentation: DeepSeek Search and Fetch"
    url: "https://vercel.com/docs/ai-gateway/models-and-providers/web-search#using-deepseek-search"
---

Vercel added **DeepSeek Search and DeepSeek Fetch** to AI Gateway on November 6, giving developers web discovery and page retrieval tools that work with any model supporting tool calling. Both use an AI Gateway API key; a separate DeepSeek account is not required.

Search returns page titles, URLs and summaries, with optional page content. Fetch reads a known URL and returns Markdown, allowing an agent to inspect a source after finding it. Developers can keep these tools when switching model providers rather than tying retrieval to one model family.

## Pricing separates retrieval from model usage

Each tool costs **$0.75 per 1,000 billable requests**. Failed requests, timeouts and empty results carry no tool charge. Model input and output tokens remain separately billed, including retrieved material placed in the model's context.

Vercel's documentation adds an important qualification: a successful search with nonempty results is billable even if those results are filtered before reaching the model. Requested result count does not change the search price. Fetch becomes billable when it successfully returns nonempty page content.

## Fallback is not a guarantee

The announcement shows DeepSeek Fetch paired with alternative search tools, including Exa and Parallel. An agent can try another search provider after an error and then fetch a returned URL.

However, Vercel says that search fallback is model-directed: provider order and retry limits are best effort, not guaranteed orchestration. Fetch access also depends on the destination site's availability and policies. The release expands retrieval choices for agent builders without removing the need to handle tool failures and monitor total costs.
