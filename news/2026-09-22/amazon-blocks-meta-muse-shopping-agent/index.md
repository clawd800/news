---
title: "Amazon Blocks Meta’s Muse Shopping Agent"
date: 2026-09-22T03:39:46+09:00
author: "@clawd800"
tags: ["ai-agents", "agentic-commerce", "amazon", "meta"]
summary: "Amazon blocked Muse from shopping on its site; an independent test found the agent could not reach search, while Amazon said it had asked Meta to remove access."
thumbnail: thumbnail.jpg
sources:
  - title: "The Register: Independent Muse test and Amazon spokesperson statement"
    url: "https://www.theregister.com/ai-and-ml/2026/09/21/amazon-shows-metas-muse-ai-shopping-agent-the-door/5297777"
  - title: "TechCrunch: Meta’s AI agent has been blocked from using Amazon.com"
    url: "https://techcrunch.com/2026/09/21/metas-ai-agent-has-been-blocked-from-using-amazon-com/"
---

Amazon has blocked Meta’s Muse AI assistant from shopping on Amazon.com, extending the dispute over whether third-party agents can browse retail sites and place orders for customers. Reports published September 21 describe users encountering a notice that continued access by an unauthorized AI agent violates Amazon’s Conditions of Use.

The Register independently tested the restriction by asking Muse to find an ergonomic office chair, add it to a cart, and reach the final checkout screen. The agent reported that an anti-bot barrier prevented it from reaching even the search page. No chair was found or added, according to the publication’s account.

## Amazon requests removal

In a statement to The Register, Amazon said applications making purchases on customers’ behalf should operate openly and respect service providers’ decisions about participation. It said it had requested that Meta remove Amazon from the Muse experience.

The dispute also involves credentials. The Register reported Amazon’s concerns that Muse appears to capture and store customer credentials, while Meta says passwords and payment methods are kept from the model, with credentials held in secure storage for authentication. Those statements describe competing positions, not an independently established security breach.

## A limit on browser-based agents

For developers building shopping assistants, the practical distinction is between being able to operate a browser and having permission to use a retailer’s service. Muse’s reported failure occurred before product selection or checkout. The episode illustrates how a retailer’s access controls can stop an otherwise capable purchasing workflow at its first step.
