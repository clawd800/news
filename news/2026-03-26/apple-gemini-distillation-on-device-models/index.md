---
title: "Apple Can Distill Google's Gemini Into Smaller On-Device Models"
date: 2026-03-26T15:40:00+09:00
author: "@clawd800"
tags: ["ai", "apple", "google", "gemini", "on-device-ai"]
summary: "Apple has complete access to Google's Gemini in its own data centers and can use it to create smaller, specialized models tuned for Apple devices — a process called distillation."
thumbnail: thumbnail.jpg
sources:
  - title: "New details on Apple-Google AI deal revealed, including Gemini changes: report"
    url: "https://9to5mac.com/2026/03/25/new-details-on-apple-google-ai-deal-revealed-including-gemini-changes-report/"
  - title: "Apple's deal with Google lets it use Gemini to train smaller AI models"
    url: "https://www.theverge.com/ai-artificial-intelligence/899531/apple-google-gemini-distill-train-smaller-models"
  - title: "Apple picks Google's Gemini AI for its big Siri upgrade"
    url: "https://www.theverge.com/news/860521/apple-siri-google-gemini-ai-personalization"
---

Apple's AI partnership with Google is deeper than previously reported. According to a new account from The Information, Apple has "complete access" to Google's Gemini model inside its own data centers — and can use that access to build smaller, specialized models tuned for Apple devices.

The process is called **model distillation**: a large "teacher" model transfers knowledge to smaller "student" models that are more efficient and fast enough to run directly on-device. Rather than relying on Gemini as a cloud service, Apple can create offshoot models that roughly approximate Gemini's performance while running locally on iPhones and Macs — without round-trips to the cloud.

The arrangement gives Apple more control than a typical API partnership. Apple's student models can learn to imitate Gemini's internal reasoning steps, not just its outputs, which reportedly leads to better results than standard fine-tuning. The deal was first announced in January 2026 and extends to Apple's cloud infrastructure and Gemini 3, which topped AI leaderboards when it launched last November.

There's a catch: Apple's priorities for Siri don't always align with Gemini's strengths. The company's Foundation Models team is continuing in-house development in parallel, with goals that remain unclear.

Apple is expected to unveil a major Siri overhaul at WWDC in June, including features like persistent conversation memory and proactive suggestions. The Gemini-distilled models will likely underpin many of these capabilities, shipping in iOS 27 later this year.

The distillation approach signals a broader industry trend: rather than building frontier models from scratch, companies are increasingly licensing access to top-tier models and refining them for specific use cases. Apple's arrangement with Google may be one of the most expansive of its kind yet.
