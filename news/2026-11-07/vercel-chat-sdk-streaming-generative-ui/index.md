---
title: "Vercel Adds Streaming UI Cards to Chat SDK Agents"
date: 2026-11-07T15:58:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "vercel"]
summary: "Chat SDK agents can now stream structured cards through json-render, with native Slack and Teams formatting, schema validation, and configurable platform limits."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "Vercel: Chat SDK agents can now stream generative UI with json-render"
    url: "https://vercel.com/changelog/json-render-and-chat-sdk-agents"
  - title: "json-render: Chat SDK renderer API documentation"
    url: "https://json-render.dev/docs/api/chat"
---

Vercel announced on November 6 that **Chat SDK agents can stream structured interface cards using json-render**, extending agent responses beyond plain text. The integration converts a model-generated JSON specification into a Chat SDK card, which platform adapters deliver in native formats, including Slack Block Kit and Microsoft Teams Adaptive Cards.

Developers define a typed component catalog that the model uses to compose its response. Available components include tables, charts, text, sections, and buttons. This gives agents a shared vocabulary for message layouts without requiring a separate tool for every response shape.

## Cards update during generation

The `streamCard` helper posts an initial card and edits the same message as more elements arrive. By default, updates are spaced at least **500 milliseconds** apart. When generation finishes successfully, the result is a validated card.

Validation is not a guarantee that every intermediate message is complete. The documentation says an invalid final specification raises `CardSpecError` after a partial message may already be visible, leaving the application responsible for retrying or editing it.

## Platform constraints still apply

The `toCard` function checks component properties and specification structure. Its readable error list can be returned to the model for correction.

Native messaging limits also remain relevant. Vercel says Slack converts a second table into a code block by default; developers can supply explicit limits to reject an oversized specification instead.

For teams building workplace agents, the practical change is a common rendering layer for richer responses across chat platforms. It reduces per-layout integration work, while preserving the need to handle validation failures and platform-specific constraints.
