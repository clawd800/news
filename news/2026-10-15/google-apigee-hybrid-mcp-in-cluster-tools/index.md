---
title: "Google details in-cluster MCP tools for Apigee hybrid"
date: 2026-10-15T20:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "mcp", "developer-infrastructure", "google-cloud"]
summary: "Apigee hybrid 1.17.0 brings MCP tool execution into customer Kubernetes clusters, with existing API policies and opt-in deployment."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: MCP support in Apigee hybrid"
    url: "https://developers.googleblog.com/announcing-mcp-support-in-apigee-hybrid-agentic-tools-that-run-in-your-own-cluster/"
  - title: "Google Cloud documentation: Enable MCP in Apigee hybrid"
    url: "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/enable-mcp?hl=en"
---

Google has detailed how Model Context Protocol support works in Apigee hybrid, allowing enterprises to expose existing APIs as agent tools while running the MCP data plane inside their own Kubernetes clusters. The October 14 announcement describes capabilities available in version 1.17.0, released September 14, rather than a newly released runtime.

Developers supply an OpenAPI 3.0.x specification and create an MCP Discovery Proxy. Its operations become tools that agents can discover through `tools/list` and invoke through `tools/call`, without maintaining a separate MCP server implementation.

## Local execution, cloud configuration

Google says MCP requests are authorized and proxied to backend services within the customer's infrastructure, without crossing into Google Cloud at request time. A sidecar periodically pulls tool configuration from the cloud control plane; that control plane does not initiate connections into the cluster.

This separates runtime traffic from configuration management, a relevant distinction for organizations keeping APIs on premises or in another cloud. It does not mean the deployment is disconnected from Google Cloud.

Existing Apigee controls also apply to agent endpoints. API products define permitted tool operations, support per-tool quotas and filter discovery results to the tools a client is entitled to use.

## An opt-in rollout

MCP is disabled by default. Google's setup documentation requires hybrid 1.17.0 or later, a top-level `enableMcpServer: true` setting and upgrading the operator chart before the organization chart.

Enabling the feature triggers a staged canary release of runtime pods. Google recommends an approved maintenance window, making this an infrastructure change to plan and validate—not simply an endpoint to switch on.
