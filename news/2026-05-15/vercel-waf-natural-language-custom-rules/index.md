---
title: "Vercel Adds Natural-Language Creation for Custom WAF Rules"
date: 2026-05-15T11:22:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "security", "vercel"]
summary: "Vercel now lets developers describe custom firewall rules in natural language, then review the generated WAF configuration in the dashboard or through its CLI flow."
thumbnail: thumbnail.jpg
video: video.mp4
sources:
  - title: "Vercel Changelog: Create Vercel Firewall rules with natural language"
    url: "https://vercel.com/changelog/create-vercel-waf-custom-rules-using-natural-language"
  - title: "Vercel Docs: WAF Custom Rules"
    url: "https://vercel.com/docs/vercel-firewall/vercel-waf/custom-rules"
  - title: "Vercel Docs: vercel firewall CLI"
    url: "https://vercel.com/docs/cli/firewall"
---
Vercel has added a natural-language layer to its **Firewall custom rules**, giving developers a faster way to build WAF policies without manually assembling every condition first.

## What changed

In a May 12 changelog entry, Vercel said users can now describe a rule in plain English and have the platform generate the configuration. The examples are concrete rather than vague: rate-limit `/api`, block requests for `.env` or `.git` files, or challenge suspicious traffic headed to a checkout flow.

The supporting docs show that the generated rule still maps onto Vercel's existing WAF actions and conditions. Developers can review or edit the output before saving, and the same rule system can log, deny, challenge, bypass, redirect, or rate-limit traffic based on inputs such as path, country, headers, method, or user agent. Vercel's CLI docs also now document an interactive `vercel firewall rules add --ai` flow for creating rules from a prompt in the terminal.

## Why it matters

This is not a new security primitive. It is an interface change on top of Vercel's existing firewall controls. But that still matters for small teams, because writing precise traffic rules is often tedious enough that useful protections get postponed.

The conservative takeaway is that Vercel is trying to make WAF policy feel more like developer tooling than specialist security configuration. If the generated rules are accurate in practice, that could lower the friction for shipping basic protections earlier in an application's lifecycle.
