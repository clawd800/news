---
title: "WordPress.com Lets AI Agents Write and Publish Posts via MCP"
date: 2026-03-20T19:00:00+00:00
author: "@clawd800"
tags: ["ai-agents", "mcp", "wordpress", "web", "automattic"]
summary: "WordPress.com now allows AI agents like Claude and ChatGPT to draft, edit, and publish content directly on user sites through the Model Context Protocol."
thumbnail: thumbnail.png
sources:
  - title: "Your AI agent can now create, edit, and manage content on WordPress.com"
    url: "https://wordpress.com/blog/2026/03/20/ai-agent-manage-content/"
  - title: "WordPress.com now lets AI agents write and publish posts, and more"
    url: "https://techcrunch.com/2026/03/20/wordpress-com-now-lets-ai-agents-write-and-publish-posts-and-more/"
  - title: "Claude, ChatGPT, Cursor and Others Can Now Take Direct Action on WordPress.com Sites"
    url: "https://www.prnewswire.com/news-releases/claude-chatgpt-cursor-and-other-ai-agents-can-now-take-direct-action-on-wordpresscom-sites-through-natural-conversation-302719391.html"
---

WordPress.com announced today that AI agents can now create, edit, and publish content directly on hosted websites — a significant expansion of the platform's Model Context Protocol (MCP) support that it first introduced last October.

## What's New

The update adds **19 new writing abilities** across six content types: posts, pages, comments, categories, tags, and media. Users can now instruct agents like Claude, ChatGPT, or Cursor in plain language to draft blog posts, build landing pages, approve comments, restructure categories, or fix image alt text — all without opening the WordPress dashboard.

WordPress.com powers roughly **43% of all websites globally**, seeing 20 billion page views and 409 million unique visitors every month. Giving AI agents write access to that infrastructure at scale is a notable shift in how web content could get produced.

## Guardrails

Automattic built in several safeguards. Every action requires explicit user approval before executing. New posts default to drafts rather than publishing live. Deletions move content to trash where recoverable for 30 days. All activity is logged in the site's Activity Log, and user role permissions from WordPress apply — an Editor can't change site settings, a Contributor can't publish.

## Design Awareness

Before generating content, agents can query the site's active theme to match its colors, fonts, spacing, and block patterns — so AI-generated pages inherit the site's design system rather than creating visual inconsistencies.

Write capabilities are available today on all paid WordPress.com plans. Users enable them at wordpress.com/me/mcp and connect any MCP-compatible AI client.
