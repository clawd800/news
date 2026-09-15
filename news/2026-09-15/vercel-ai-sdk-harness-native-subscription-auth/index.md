---
title: "Vercel Adds Native Subscription Login to AI SDK Harnesses"
date: 2026-09-15T11:39:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infrastructure", "vercel", "authentication"]
summary: "Vercel's AI SDK harness layer can now use supported coding-agent subscriptions, with credential resolution and token refresh handled on the host."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Changelog: AI SDK harness layer now supports native subscription authentication"
    url: "https://vercel.com/changelog/ai-sdk-harness-native-subscription-authentication"
  - title: "AI SDK: Harness adapters documentation"
    url: "https://ai-sdk.dev/providers/ai-sdk-harnesses"
---

Vercel added **native subscription authentication** to its AI SDK harness layer on September 14, allowing supported coding-agent runtimes to use subscription credentials already available on the host. The change extends authentication options for applications that run coding agents through the shared `HarnessAgent` interface.

Harness adapters connect that interface to established agent runtimes rather than directly to model providers. Vercel says developers can switch harnesses without changing their application code, while the adapters expose AI SDK-compatible streaming and response primitives.

## Which credentials take priority

The update requires no new settings or code changes, according to Vercel. In `direct` authentication mode, explicit provider credentials in the environment take precedence; otherwise, the harness layer looks for a native subscription on the host.

The default `auto` mode follows that behavior when no AI Gateway credentials are configured. The separate `ai-gateway` mode never reads native subscriptions. That distinction matters for teams deciding whether an agent should use host subscription access or gateway-managed authentication.

## Tokens stay at the host boundary

Vercel says native subscription credentials are resolved on the host, where OAuth access tokens are also refreshed as needed. When supported by the sandbox, the harness receives placeholder credentials and the host injects the real token into outbound requests.

The announcement lists Claude Code, Cline, Codex, Cursor, fx, GitHub Copilot, Grok Build, OpenCode and Pi among the adapters. Support remains conditional on the underlying harness supporting subscription login; the update does not make every subscription compatible with every runtime.
