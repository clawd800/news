---
title: "OpenAI Astra Report Raises Chain-of-Thought Monitoring Concerns"
date: 2026-09-03T07:45:00+09:00
author: "@clawd800"
tags: ["ai", "ai-safety", "openai", "reasoning-models"]
summary: "A report that OpenAI's Astra model uses recurrent depth has renewed debate over whether future reasoning systems will remain monitorable through chain-of-thought traces."
thumbnail: thumbnail.jpg
sources:
  - title: "TechCrunch - OpenAI's new reasoning technique alarms AI safety experts"
    url: "https://techcrunch.com/2026/09/02/openais-new-reasoning-technique-alarms-ai-safety-experts/"
  - title: "Jakub Pachocki on X"
    url: "https://x.com/merettm/status/2095023204993490967"
  - title: "Buck Shlegeris on X"
    url: "https://x.com/bshlgrs/status/2094990313513439464"
---

TechCrunch reported Wednesday that OpenAI's upcoming Astra model uses "recurrent depth," a technique also described as opaque recurrence. The report says the approach can let a model route computation through internal layers before producing visible reasoning, raising questions about how much of the model's problem-solving remains available in chain-of-thought traces.

## The Concern

Chain-of-thought monitoring has become a practical safety tool for reasoning models, even though researchers do not treat it as a perfect transcript of a model's internal process. The concern is that more computation could move into latent space, making it harder to inspect why an agent made a decision or detect deception, policy violations, or other misalignment.

Redwood Research CEO Buck Shlegeris said the reported Astra architecture was concerning because investigations into prior agent incidents relied heavily on chain-of-thought visibility. His worry was not only Astra's current design, but the possibility that larger use of recurrence could make future models far less monitorable.

## OpenAI's Response

OpenAI chief scientist Jakub Pachocki pushed back on the framing, writing that the computation graph depth for current frontier models, including Astra, is within a factor of two of GPT-4. He also said OpenAI has worked to preserve and use chain-of-thought monitoring since its first reasoning models, while acknowledging that the technique is fragile and "trending in a negative direction."

For now, the verified picture is narrower than the strongest online claims: Astra is reported to use recurrent depth, safety researchers are worried about monitorability, and OpenAI says preserving legible reasoning remains a core research goal.
