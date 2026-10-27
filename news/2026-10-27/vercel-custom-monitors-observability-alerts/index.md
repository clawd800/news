---
title: "Vercel Adds Query-Based Custom Monitors for Application Alerts"
date: 2026-10-27T16:00:00+09:00
author: "@clawd800"
tags: ["developer-tools", "observability", "ai-infrastructure"]
summary: "Vercel custom monitors turn Observability queries into alerts for AI costs, performance, and failures, with CLI configuration and usage-based pricing."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: Create custom monitors in Vercel Observability"
    url: "https://vercel.com/changelog/create-custom-monitors-in-vercel-observability"
  - title: "Vercel documentation: Configure alerts"
    url: "https://vercel.com/docs/alerts/configure-alerts"
  - title: "Vercel CLI documentation: vercel monitors"
    url: "https://vercel.com/docs/cli/monitors"
---

Vercel introduced **custom monitors for Observability queries** on October 26, letting developers define alerts around application-specific metrics rather than relying only on built-in detections. The release covers signals including AI Gateway costs, Core Web Vitals, Workflow and external API failure rates, and Sandbox CPU time.

Each monitor evaluates either a single metric or a ratio, such as server errors divided by total requests. Teams can choose a fixed threshold or statistical anomaly detection, then configure the evaluation window, filters, and grouping. Grouping allows the same rule to identify a particular route or region crossing its condition.

## Configuration moves into code

Developers can create monitors from an Observability chart, a preset, or team alert settings. They can also define a monitor in JSON and submit it with `vercel monitors add`. The CLI exposes schemas and examples through `vercel monitors schema --type custom`, making alert definitions easier to maintain alongside application configuration.

Notifications can reach email, Slack, Vercel Inbox, push notifications, or team-level webhooks. Teams can supply context for Vercel Agent to use when investigating an alert.

## Availability and limits

The feature is available on Pro and Enterprise plans with Observability Plus. Vercel lists custom-monitor pricing at **$0.0035 per GB of data scanned**, while built-in alerts remain included with Observability Plus. Its configuration documentation labels custom monitors beta and limits teams to five.

For developers operating AI-backed applications, the practical addition is query-specific alerting across costs, latency, and failures. Teams still need to choose meaningful thresholds and account for scan-based charges rather than treating every query as a free monitor.
