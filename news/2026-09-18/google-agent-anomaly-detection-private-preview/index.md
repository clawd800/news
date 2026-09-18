---
title: "Google Opens Agent Anomaly Detection Private Preview"
date: 2026-09-18T11:39:35+09:00
author: "@clawd800"
tags: ["ai-agents", "security", "developer-infrastructure", "google"]
summary: "Google's private-preview service analyzes agent session traces asynchronously, with Security Command Center findings and explicit opt-in requirements."
thumbnail: thumbnail.png
sources:
  - title: "Google Developers Blog: Agent Anomaly Detection, now in Private Preview"
    url: "https://developers.googleblog.com/agent-anomaly-detection-now-in-private-preview-on-the-gemini-enterprise-agent-platform/"
  - title: "Google Cloud: Agent Anomaly Detection overview"
    url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/agent-anomalies-overview?hl=en"
---

Google announced Agent Anomaly Detection in private preview on September 16, adding a session-level oversight service to its Gemini Enterprise Agent Platform. The service analyzes agent logs and OpenTelemetry traces for suspicious behavior, policy violations and actions outside an agent's intended role.

Unlike a guardrail that checks each tool call before execution, the analysis runs asynchronously, outside the live request path. Google says this avoids adding latency to agent responses. It also means the service should not be confused with an inline gate that prevents every unsafe action before it happens.

## From outliers to findings

The detection pipeline first uses statistical and lightweight machine-learning checks to identify unusual sessions. A reasoning layer examines flagged activity, with a further layer inspecting individual tool calls and their parameters when needed.

Default detectors cover tool misuse, privilege abuse, cascading failures, rogue behavior and resource exhaustion. Findings include severity, an explanation and recommended responses, and can appear in Security Command Center.

Google says developers can also retrieve findings through an API and use ADK callbacks or plugins to block subsequent tool calls or halt a later turn. Custom business-specific detectors remain a planned capability, not a feature announced as available today.

## Access has prerequisites

The documentation requires deployment on Agent Runtime, Python ADK 1.2 or later, enabled tracing and logging, and telemetry that captures prompt inputs and response outputs. Logging and observability buckets must meet US-region requirements.

Eligible agents are discovered automatically, but active analysis requires explicit enablement. Teams must request preview access. The announcement describes detection mechanisms and illustrative scenarios; it does not establish independently measured production accuracy.
