---
title: "MiniMax M3 Brings 1M-Token Open-Weight Model to AI Gateways"
date: 2026-06-01T19:13:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "open-models"]
summary: "MiniMax released M3, a new open-weight multimodal model with a 1M-token context window now available through Vercel AI Gateway and OpenRouter."
thumbnail: thumbnail.jpg
sources:
  - title: "MiniMax M3: Frontier Coding, 1M Context, Native Multimodality"
    url: "https://www.minimax.io/blog/minimax-m3"
  - title: "MiniMax M3 on AI Gateway"
    url: "https://vercel.com/changelog/minimax-m3-on-ai-gateway"
  - title: "MiniMax: MiniMax M3 API Quickstart"
    url: "https://openrouter.ai/minimax/minimax-m3/api"
---

MiniMax released M3, a new open-weight AI model aimed at coding, agentic work, and long-context multimodal tasks.

The company says M3 uses MiniMax Sparse Attention, its own attention architecture, and supports context windows up to 1M tokens. MiniMax also describes the model as natively multimodal, with support for image and video inputs as well as text output. Those claims matter for developer infrastructure because long-running coding agents increasingly need to combine large repositories, browser state, terminals, documents, and visual context in the same session.

Distribution is already moving through model gateways rather than only MiniMax's own API. Vercel listed `minimax/minimax-m3` on AI Gateway, saying developers can call it through the AI SDK by setting the model name. OpenRouter also published an API page for the same model, listing text, image, and video inputs, a 1M-token context window, and pricing through the MiniMax provider.

The launch should still be read conservatively. MiniMax's benchmark claims are self-reported, and the practical value of a 1M-token window depends on retrieval, prompt discipline, latency, and cost. But M3 is a notable release because it places a current open-weight, multimodal, long-context model directly into routing layers that many developers already use for agent and coding workflows.
