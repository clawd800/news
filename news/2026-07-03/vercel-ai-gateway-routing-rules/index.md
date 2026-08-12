---
title: "Vercel Adds Team-Level Routing Rules to AI Gateway"
date: 2026-07-03T15:37:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "vercel", "ai-gateway"]
summary: "Vercel AI Gateway now supports beta routing rules that let teams rewrite or deny model requests without changing application code."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Routing rules now available on AI Gateway"
    url: "https://vercel.com/changelog/ai-gateway-routing-rules"
  - title: "Vercel Docs: Routing Rules"
    url: "https://vercel.com/docs/ai-gateway/models-and-providers/routing-rules"
---

Vercel has added **routing rules** to AI Gateway, giving teams a gateway-level way to control which AI models serve application requests.

The beta feature supports two rule types. A **rewrite** rule lets a team request one model while AI Gateway transparently serves the request with another. A **deny** rule blocks requests for a specified model and returns a `403` response. Vercel says the rules apply to every request made with a team's AI Gateway credentials, which means routing behavior can be changed without editing or redeploying application code.

The immediate use cases are operational rather than flashy. Teams can migrate traffic away from a retired model, keep an application running when a model is unavailable, standardize internal usage around approved models, or steer requests from an expensive model to a cheaper alternative. They can also block models that have not cleared internal review.

Rules are managed through the `vercel ai-gateway rules` CLI command and are scoped to a single team. Vercel's docs say owners and members can create, edit, and remove rules, while developers can view them but not change them.

There are still production caveats. Vercel labels routing rules as beta and warns that the feature may change before general availability. The docs also note that provider-specific options are not translated across providers, so a rewrite from one provider to another may require separate destination-provider settings.
