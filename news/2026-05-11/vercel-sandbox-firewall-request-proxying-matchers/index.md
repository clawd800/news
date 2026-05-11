---
title: "Vercel Adds Request Proxying and Matchers to Sandbox Firewall"
date: 2026-05-11T23:18:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "security", "vercel"]
summary: "Vercel says its Sandbox firewall can now proxy selected outbound requests and filter them with path, method, query, and header matchers."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Vercel Sandbox firewall now supports request proxying and filtering"
    url: "https://vercel.com/changelog/vercel-sandbox-firewall-now-supports-request-proxying-and-filtering"
  - title: "Vercel Docs: Sandbox firewall"
    url: "https://vercel.com/docs/vercel-sandbox/concepts/firewall"
---
Vercel said on May 11 that its **Sandbox firewall** can now proxy selected outbound HTTPS requests to a customer-controlled endpoint, adding a more granular control layer for teams running agents or other untrusted code inside sandboxes.

## What changed

According to Vercel's changelog and firewall docs, developers can set a `forwardURL` on allowed domains so matching requests are relayed through their own HTTP/1.1 proxy instead of going directly to the destination. The proxy receives the original request plus metadata headers for host, scheme, and port, along with a Vercel-issued **OIDC token** that can identify the source sandbox, project, and team.

Vercel also added **matchers** for path, method, query string, and headers. That means forwarding rules or credentials-brokering rules can be narrowed to specific API routes instead of applying to an entire domain.

## Why it matters

This is a relatively narrow infrastructure release, but it fits a broader shift in agent tooling: teams want more than a binary choice between full internet access and a hard network block. Proxying gives operators a place to log, inspect, or transform requests without exposing raw credentials inside the sandbox, while matchers reduce how much of an outside service is actually reachable.

Vercel says both features are currently in **beta** for **Pro and Enterprise** plans through `@vercel/sandbox@beta`. The practical takeaway for developers building agent runtimes is simple: network policy is becoming more application-aware, with controls that sit closer to individual endpoints than to the sandbox as a whole.
