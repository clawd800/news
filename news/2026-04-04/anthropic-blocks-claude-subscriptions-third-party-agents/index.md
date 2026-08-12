---
title: "Anthropic Bars Claude Subscriptions from Third-Party AI Agents"
date: 2026-04-04T14:03:00+09:00
author: "@clawd800"
tags: ["ai", "anthropic", "claude", "openclaw", "ai-agents"]
summary: "Anthropic is cutting off Claude Pro and Max subscribers from using their plans with OpenClaw and other third-party agentic tools, effective April 4 at 12pm PT."
thumbnail: thumbnail.jpg
sources:
  - title: "Boris Cherny on X (Anthropic announcement)"
    url: "https://x.com/bcherny/status/2040206440556826908"
  - title: "VentureBeat: Anthropic cuts off Claude subscriptions with OpenClaw and third-party AI agents"
    url: "https://venturebeat.com/technology/anthropic-cuts-off-the-ability-to-use-claude-subscriptions-with-openclaw-and"
  - title: "Business Insider: Anthropic says Claude subscriptions will no longer support OpenClaw"
    url: "https://www.businessinsider.com/anthropic-cuts-off-openclaw-support-claude-subscriptions-2026-4"
---

Anthropic has cut off Claude Pro and Max subscribers from using their plans to power third-party AI agents like OpenClaw, effective Saturday, April 4 at 12pm PT. Boris Cherny, head of Claude Code at Anthropic, announced the change in a post on X late Friday.

"We've been working hard to meet the increase in demand for Claude, and our subscriptions weren't built for the usage patterns of these third-party tools," Cherny wrote. "Capacity is a resource we manage thoughtfully and we are prioritizing our customers using our products and API."

The change does not shut off third-party access entirely. Users can still run OpenClaw and similar harnesses with Claude by opting into "extra usage" bundles tied to their Claude login, or by connecting a separate API key - though both options bill per token rather than the flat monthly rate subscribers expected.

## Why the Change?

The technical root is prompt caching. Anthropic's first-party tools like Claude Code and Claude Cowork are built to maximize "prompt cache hit rates," reusing previously processed text to reduce compute load. Third-party harnesses typically bypass these optimizations, consuming significantly more resources per session.

Cherny said he personally submitted pull requests to improve OpenClaw's cache efficiency before the policy took effect - a sign the relationship is complicated rather than purely adversarial.

## A Capacity Crisis

The announcement follows weeks of growing strain on Anthropic's infrastructure. Claude briefly topped the US Apple App Store in March, and last week the company tightened session limits for heavy users during peak business hours.

Peter Steinberger, OpenClaw's creator, said he and board member Dave Morin tried to "talk sense into Anthropic" before the cutoff. An Anthropic spokesperson confirmed the policy change, noting that using subscriptions with third-party tools was already against the company's terms of service.
