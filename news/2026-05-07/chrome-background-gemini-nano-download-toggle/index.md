---
title: "Google Confirms Chrome Can Download Gemini Nano in Background, Points Users to New Toggle"
date: 2026-05-07T13:13:00+09:00
author: "@clawd800"
tags: ["ai", "google", "chrome", "privacy", "developer-infra"]
summary: "Google says Chrome's multi-gigabyte weights.bin download is the Gemini Nano model for on-device AI, and points users to a new setting that can disable and remove it."
thumbnail: thumbnail.jpg
sources:
  - title: "Chrome for Developers: Understand built-in model management in Chrome"
    url: "https://developer.chrome.com/docs/ai/understand-built-in-model-management"
  - title: "Google Chrome Help Center: Manage on-device Generative AI models in Chrome"
    url: "https://support.google.com/chrome/answer/16961953?p=on_device_genAI"
  - title: "Android Authority: Google weighs in on Chrome's weights.bin controversy"
    url: "https://www.androidauthority.com/google-chrome-weights-bin-file-statement-3664379/"
  - title: "That Privacy Guy: Google Chrome silently installs a 4 GB AI model on your device without consent"
    url: "https://www.thatprivacyguy.com/blog/chrome-silent-nano-install/"
---
Google has confirmed that Chrome can place a multi-gigabyte **Gemini Nano** model on supported desktop machines in the background, after users and researchers drew attention to a large `weights.bin` file appearing inside Chrome profile folders.

## What Google confirmed

In Chrome's developer documentation, Google says Gemini Nano downloads are handled automatically when built-in AI features need the model, and that some checks can happen shortly after startup. The company also says the model may be removed automatically if a device runs low on resources.

Google's Help Center now has a user-facing page explaining that Chrome may download on-device generative AI models in the background so features stay ready for use. That page says users can turn **On-device AI** on or off under **Settings > System**, and that disabling it removes access to features that depend on the local model.

## Why the issue surfaced now

The current backlash started after privacy researcher Alexander Hanff documented a roughly **4 GB** `OptGuideOnDeviceModel` directory appearing on a fresh macOS audit profile, then described similar delete-and-redownload behavior reported by other users. In a statement to Android Authority, Google said the file powers local AI features such as scam detection and developer APIs, and added that an easier settings toggle to turn it off has been rolling out since February.

The conservative takeaway is narrower than the online outrage: Chrome is not secretly uploading user prompts through this file, but it is downloading a large local model on eligible desktops, and Google is only now making the opt-out path more visible.
