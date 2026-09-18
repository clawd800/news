---
title: "Google and Speakeasy Open-Source SDK Generation Suite"
date: 2026-09-18T19:39:27+09:00
author: "@clawd800"
tags: ["developer-infra", "open-source", "ai-agents", "sdk"]
summary: "Speakeasy opens its seven-language SDK generator and agent tooling with Google, while repository terms distinguish AGPL and commercial output licensing."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Why client SDK generation belongs in the open"
    url: "https://developers.googleblog.com/why-client-sdk-generation-belongs-in-the-open/"
  - title: "Speakeasy: Partnering with Google to open source the foundations of DX & AX"
    url: "https://www.speakeasy.com/blog/partnering-with-google"
  - title: "Speakeasy OpenAPI generation repository"
    url: "https://github.com/speakeasy-api/openapi-generation"
  - title: "Speakeasy generated-artifact licensing"
    url: "https://github.com/speakeasy-api/openapi-generation/blob/main/LICENSING.md"
---

Google and Speakeasy announced on September 17 that Speakeasy’s OpenAPI code-generation suite is now open source under AGPLv3. The release covers SDK generation for seven languages, alongside CLI and Model Context Protocol tooling for AI agents.

The supported SDK languages are Python, TypeScript, Go, Java, C#, PHP, and Ruby. Google says the generated libraries include static typing, server-sent event streaming, retries, and pagination. The CLI generator lets developers and agents access APIs from terminal sessions, while documentation MCP tooling gives coding agents access to maintained reference material.

## A response to supplier disruption

Google says its previous SDK-generation provider was acquired and announced a shutdown in May, while the company was preparing the Interactions API for general availability. Speakeasy helped migrate the Interactions, Agents, and Webhooks client libraries, preserving type definitions, error hierarchies, and streaming behavior while integrating with Google’s internal build system.

The release makes the generator itself inspectable and maintainable outside a single vendor. Google describes deterministic generation as the core of its pipeline, with AI agents assisting custom SDK work.

## Generated-code licensing needs attention

The announcements describe developers retaining ownership of generated code. However, the repository’s current licensing documentation distinguishes commercial authorization from an AGPL election. Artifacts generated under an active plan, trial, or other commercial authorization retain perpetual rights without AGPL obligations from Speakeasy-authored code. New artifacts generated under an AGPL election carry AGPL terms for that code.

Teams evaluating the release should distinguish the generator’s open-source license from the terms governing their generated SDKs before adding it to a build pipeline.
