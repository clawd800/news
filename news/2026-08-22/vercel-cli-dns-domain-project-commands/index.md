---
title: "Vercel CLI Adds DNS, Domain and Project Controls"
date: 2026-08-22T11:37:00+09:00
author: "@clawd800"
tags: ["developer-tools", "developer-infra", "vercel", "agents"]
summary: "Vercel added dedicated CLI commands for DNS records, domain renewals, project state, observability settings and project members."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Vercel CLI expands support for DNS, domains, and project commands"
    url: "https://vercel.com/changelog/vercel-cli-expands-support-for-dns-domains-and-project-commands"
  - title: "Vercel Docs: Vercel CLI Overview"
    url: "https://vercel.com/docs/cli"
---

Vercel has expanded its command-line interface with dedicated controls for DNS records, domains and project administration, moving more dashboard and API work into terminal workflows.

The update is aimed at developers, scripts and coding agents that already use the Vercel CLI as an operational surface. Vercel says DNS records can now be inspected and updated by record ID, including fields such as name, type, value, TTL, MX priority and comments. SRV records can also be changed with priority, weight, port and target fields.

Domain handling is getting a narrower but useful addition: domains bought through Vercel can be renewed from the CLI, and automatic renewal can be controlled there as well. Vercel says renewal commands show the current renewal price and ask for confirmation before completing a purchase.

The project commands are broader. Teams can pause or resume a project from the CLI, configure observability features, and disable Web Analytics or Speed Insights after enabling them. Project membership can also be changed from the terminal by adding a member with a role or removing an existing member.

For automation, the important detail is structured JSON output across the new commands. Vercel also says billable or destructive actions still require explicit confirmation. That keeps the release incremental, but relevant for agent-driven developer infrastructure: the CLI is becoming a more complete administrative interface rather than just a deployment command.
