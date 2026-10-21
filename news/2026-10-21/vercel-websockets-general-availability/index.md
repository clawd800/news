---
title: "Vercel Makes Native WebSocket Support Generally Available"
date: 2026-10-21T16:00:00+09:00
author: "@clawd800"
tags: ["developer-infrastructure", "vercel", "websockets", "ai"]
summary: "Vercel moves WebSockets out of beta on all plans, with standard Function billing and duration limits that still require reconnects and external state."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: WebSocket support is now generally available"
    url: "https://vercel.com/changelog/websocket-support-is-now-generally-available"
  - title: "Vercel documentation: WebSockets"
    url: "https://vercel.com/docs/functions/websockets"
---

Vercel made WebSocket support in Vercel Functions generally available on October 20, moving its native bidirectional connections beyond the public beta launched in late June. The feature is available on all plans and requires Fluid compute to be enabled.

The company says its CDN has served 300 million WebSocket connections since the beta began and now handles 15 million per day. It lists AI chat, streaming and realtime multiplayer applications among customer uses; WebSockets also underpin AI Gateway’s realtime models. These usage figures are Vercel’s own reporting.

## Native connections, finite lifetimes

Each connection stays pinned to one function instance, while Fluid compute lets an instance handle multiple connections. Before an HTTP request upgrades to WebSocket, it passes through normal routing and security controls, including middleware, firewall rules and rate limits.

General availability does not mean indefinitely open sessions. Connections close when a function reaches its maximum duration. Vercel recommends reconnecting, resubscribing and reloading application state; a new connection may land on a different instance. Durable state and coordination therefore belong in an external datastore rather than instance memory.

## Integration and billing

Developers can use standard libraries such as Node.js’s `ws`. Next.js needs the `upgradeWebSocket()` helper from `@vercel/functions` version 3.10.0 or later because it does not expose an upgrade API itself.

Connections follow ordinary Function limits and pricing. Active CPU billing covers time spent processing messages, but function usage and data-transfer charges still apply. For teams building interactive AI or collaborative applications, the release adds a native deployment option without removing distributed-state and reconnection requirements.
