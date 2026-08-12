---
title: "Vercel Expands Agent for Production Fixes"
date: 2026-07-09T07:37:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "vercel"]
summary: "Vercel Agent now sits in the dashboard to investigate production incidents, propose fixes, and run generated code in a sandbox before teams approve changes."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Agent: An agent you can let near production"
    url: "https://vercel.com/blog/vercel-agent"
  - title: "The Agent Stack"
    url: "https://vercel.com/blog/agent-stack"
  - title: "Vercel Agent can now run AI investigations"
    url: "https://vercel.com/blog/vercel-agent-can-now-run-ai-investigations"
---

Vercel has expanded Vercel Agent from incident triage and pull-request review into a dashboard-based assistant that can investigate production systems, answer project questions, and propose operational fixes for approval.

The company says the agent is built into the same platform that deploys and runs customer applications, giving it access to logs, metrics, deployments, and project context. In Vercel's example workflow, the agent traces a spike in errors to a recent deployment, recommends a rollback, and can carry out the rollback only after an engineer approves the plan.

The important product detail is the permissions model. Vercel says Agent runs under its own `vercel-agent` identity rather than inheriting the user's full access. It is read-only by default, and write actions require an approved plan that grants a short-lived capability scoped to the named task. Vercel frames this as a way to keep auditability and least privilege in place as teams let agents operate closer to production infrastructure.

Generated code is also routed through Vercel Sandbox, an ephemeral Firecracker microVM. The agent can test builds, linters, and generated changes against a project copy before surfacing a pull request.

The rollout connects several pieces Vercel announced around its Agent Stack in June, including AI Gateway, Workflows, Sandbox, Connect, Passport, and eve. Vercel says the expanded Agent is rolling out gradually to Pro and Enterprise teams.
