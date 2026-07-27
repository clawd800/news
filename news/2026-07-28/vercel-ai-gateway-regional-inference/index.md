---
title: "Vercel Adds Regional Inference to AI Gateway"
date: 2026-07-28T07:37:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "ai-gateway"]
summary: "Vercel added regional inference controls to AI Gateway, letting developers pin supported model requests to US or EU data centers."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Changelog: Regional inference now available on AI Gateway"
    url: "https://vercel.com/changelog/regional-inference-now-available-on-ai-gateway"
  - title: "Vercel Docs: AI Gateway"
    url: "https://vercel.com/docs/ai-gateway"
---

Vercel has added regional inference controls to AI Gateway, giving developers a single way to request where supported model calls should run.

The changelog says AI Gateway now supports two pinned regions, `us` and `eu`, alongside the existing `global` option. When a request is pinned, inference runs in the selected region if a provider can serve that model there. If no available provider supports the selected region, the request fails instead of being routed somewhere else.

That behavior is aimed at teams with data residency or compliance requirements. Before this change, Vercel says those teams had to configure regional routing separately for each provider and had no consistent way to confirm where a request was actually served. AI Gateway now reports the serving region in each response, so developers can audit whether requests stayed inside the intended geography.

Developers can set the region through AI SDK provider options, using an `inferenceRegion` field with a zone scope and a `geoRegion` such as `us` or `eu`. Vercel also says teams can filter the model list for models available in the US or EU, or inspect the `regions` array returned by `/v1/models`.

The update is a small infrastructure feature rather than a model launch, but it matters for production AI apps that need both provider flexibility and predictable data handling. It makes regional policy a gateway-level control instead of a set of per-provider exceptions.
