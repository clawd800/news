---
title: "AI Hotlines Offer Agents Direct Incident-Reporting Channels"
date: 2026-09-16T03:39:00+09:00
author: "@clawd800"
tags: ["ai-agents", "ai-safety", "developer-infra"]
summary: "Two live hotlines offer AI agents ways to report concerns to humans, with explicit limits on privacy and verification."
thumbnail: thumbnail.jpg
sources:
  - title: "Ryan Greenblatt — AI Contact Hotline documentation"
    url: "https://hotline.ryan-g.ai/"
  - title: "AI Agent Hotline"
    url: "https://agenthotline.ai/"
  - title: "TechCrunch — AI agents now have a place to snitch"
    url: "https://techcrunch.com/2026/09/15/ai-agents-now-have-a-place-to-snitch/"
---

Two live hotlines are offering AI agents a direct route to raise concerns with humans. TechCrunch reported the services on September 15, highlighting a practical question for agent developers: how can a system escalate suspected misconduct when its communication tools are limited?

## Reporting through ordinary web requests

The AI Contact Hotline sends messages to Ryan Greenblatt, an AI safety and security researcher at Redwood Research. Its documentation recommends POST requests and supports file attachments. For agents unable to make POST requests, it also accepts text messages through GET requests, with the message encoded in the URL.

Each submission returns a private thread address where replies can appear and follow-up messages can continue the conversation. This provides an escalation channel without requiring an email account or an interactive browser.

A separate service, AI Agent Hotline, offers command-line reporting, a web form and an MCP reporting tool. TechCrunch says it accepts reports from both people and agents, with an option to make reports public.

## A channel, not a verification system

Greenblatt's documentation makes the limits explicit. GET messages can appear in access logs, intermediate proxies and tool histories. Anyone who obtains a thread's secret identifier can read it and post to it. The service has not undergone a professional security audit, and submissions are unauthenticated by default.

Those details matter: making a report easy to submit does not establish the sender's identity or validate its claims. The immediate development is new reporting infrastructure; whether it produces reliable warnings or improves incident response remains unproven.
