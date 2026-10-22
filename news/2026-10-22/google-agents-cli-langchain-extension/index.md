---
title: "Google Extends Agents CLI to LangChain Without Requiring ADK"
date: 2026-10-22T12:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "google-cloud", "langchain"]
summary: "Google's experimental Agents CLI extension system lets LangChain projects reuse cloud deployment and evaluation workflows, with explicit limits on ADK-dependent features."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Powering the Agent Development Lifecycle with any framework"
    url: "https://developers.googleblog.com/powering-the-agent-development-lifecycle-with-any-framework-from-adk-to-langchain-and-beyond/"
  - title: "Agents CLI documentation: First-party frameworks"
    url: "https://google.github.io/agents-cli/guide/extensions/first-party/"
---

Google has detailed an **experimental extension system for Agents CLI** that lets developers use LangChain while retaining the tool's cloud deployment and evaluation workflows. The October 21 announcement describes a first-party LangChain template and a mechanism for adding or replacing commands without maintaining a separate CLI fork.

## What changes

The LangChain template scaffolds a project with its own command overrides and no dependency on Google's Agent Development Kit, or ADK. Local execution invokes the compiled agent graph, while the playground uses the LangGraph development server. Deployment, infrastructure provisioning, and evaluation grading continue through native Agents CLI commands.

The generated service exposes the Agent2Agent protocol through FastAPI. Google's documentation recommends Cloud Run or Google Kubernetes Engine for this experimental template, allowing teams to retain a familiar deployment path while changing the agent framework underneath it.

Extensions can also replace commands for organization-specific workflows. Google's walkthrough demonstrates wrapping deployment with a software bill of materials scan. Git-distributed extensions are pinned to exact commits in a lockfile, giving teams a way to reproduce reviewed extension code across development and CI.

## Important limits

This is not complete feature parity with ADK. The documentation says dataset synthesis and evaluation optimization are refused because those operations depend on ADK. On Agent Runtime, integrations expecting ADK-specific routes also remain limited, including the console playground and session views.

For platform teams, the concrete change is a narrower coupling between agent frameworks and delivery tooling. The extension system remains experimental, and Google's announcement advises pinning the CLI version because its schema and command surface may change.
