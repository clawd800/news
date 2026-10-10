---
title: "Deno Joins Cloudflare, Sets Six-Month Deploy Shutdown Timeline"
date: 2026-10-11T03:58:00+09:00
author: "@clawd800"
tags: ["developer-infrastructure", "cloudflare", "deno", "open-source"]
summary: "Deno will shut down Deploy after six months and end its own runtime development after a year as its team joins Cloudflare to improve self-hosted Workers."
thumbnail: thumbnail.jpg
sources:
  - title: "Deno: Deno is joining Cloudflare"
    url: "https://deno.com/blog/cloudflare"
  - title: "Cloudflare: Deno is joining Cloudflare"
    url: "https://blog.cloudflare.com/deno-joins-cloudflare/"
  - title: "TechCrunch: Cloudflare acquires Deno to improve its Workers programming model"
    url: "https://techcrunch.com/2026/10/10/cloudflare-acquires-deno-to-improve-its-workers-programming-model/"
---

Deno's entire team is joining Cloudflare, with a concrete transition plan for developers using its runtime and hosting service. The companies announced the move on October 9; TechCrunch reported that financial terms were not disclosed.

**Deno Deploy will operate for another six months before shutting down.** Deno says paying customers will receive migration support to Cloudflare Workers. The runtime has a longer maintenance window: monthly releases with bug fixes and security updates for one year, after which the team will end its development. Deno will remain open source, leaving others free to continue it.

JSR, the JavaScript and TypeScript package registry, will keep operating while its infrastructure moves to Cloudflare. The team also plans to maintain rusty_v8 and work toward integrating it into workerd.

## Self-hosting becomes the focus

Ryan Dahl and Bert Belder will lead an effort to make self-hosting workerd a first-class supported option. The plan combines code and ideas from celld, Deno's distributed application platform, with Cloudflare's open-source Workers runtime.

A specific gap is distributed Durable Objects. Cloudflare says workerd currently supports them only within a single instance, suitable for local testing but unable to scale across machines. Celld was designed to provide a self-hostable, scalable implementation of the Workers and Durable Objects model.

Cloudflare expects more announcements in the coming months, so the combined platform should not be treated as a finished release. For existing Deno users, the immediate practical issue is migration planning: Deploy has a six-month runway, while runtime maintenance continues for a year.
