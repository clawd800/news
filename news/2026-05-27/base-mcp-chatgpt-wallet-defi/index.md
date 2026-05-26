---
title: "Base MCP Connects AI Chats to Wallet Actions"
date: 2026-05-27T03:24:00+09:00
author: "@clawd800"
tags: ["base", "ai-agents", "defi", "mcp"]
summary: "Coinbase's Base network launched Base MCP, a remote Model Context Protocol server that lets supported AI clients request wallet and DeFi actions through Base Accounts."
thumbnail: thumbnail.png
sources:
  - title: "Base AI agents quickstart"
    url: "https://docs.base.org/ai-agents/quickstart"
  - title: "Base MCP legacy README"
    url: "https://github.com/base/base-mcp"
  - title: "CoinDesk: Coinbase's Base launches AI tool for ChatGPT to manage crypto wallets and DeFi apps"
    url: "https://www.coindesk.com/tech/2026/05/26/coinbase-s-base-launches-ai-tool-for-chatgpt-to-manage-crypto-wallets-and-defi-apps"
  - title: "Fortune: Coinbase pushes further into AI payments with new MCP for Base network"
    url: "https://fortune.com/2026/05/26/coinbase-pushes-further-into-ai-payments-with-new-mcp-for-base-network/"
---

Coinbase's Base network has moved its AI-agent wallet work into a more user-facing channel with Base MCP, a remote Model Context Protocol server designed to connect AI assistants to Base Account actions.

The practical change is that supported clients can now ask for onchain actions in natural language, while the wallet remains the control point. Base's quickstart lists the remote MCP server URL as `https://mcp.base.org` and routes authorization through Base Account, where the user approves the connection. CoinDesk reported that the system is aimed at actions such as wallet management and DeFi app interactions, including swaps and lending.

The launch matters because it shifts crypto-agent tooling from developer-side SDKs toward chat surfaces that users already keep open. MCP gives the assistant a standardized way to discover and call tools, but it does not remove the need for wallet approval. Base's own x402 guide describes a similar pattern for paid API calls: the assistant prepares the request and the user signs the payment authorization before completion.

There is still a security tradeoff. Giving an AI client a path to request swaps, transfers, or paid requests increases convenience, but it also puts more pressure on permission screens, spending limits, and clear transaction review. The notable part is not autonomy by itself; it is Base trying to make agent-driven wallet actions portable across mainstream AI interfaces.
