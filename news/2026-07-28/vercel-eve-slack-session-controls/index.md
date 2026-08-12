---
title: "Vercel Adds Slack Hooks and Session Controls to eve"
date: 2026-07-28T15:37:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "vercel"]
summary: "Vercel updated eve's Slack channel support with thread subscriptions, cancellation, resets, and raw Events API callbacks for backend agents."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: eve adds new Slack event hooks and session controls"
    url: "https://vercel.com/changelog/eve-adds-new-slack-event-hooks-and-session-controls"
  - title: "Vercel Docs: eve"
    url: "https://vercel.com/docs/eve"
---

Vercel has added new Slack handling primitives to **eve**, its filesystem-first framework for building durable backend AI agents on Vercel.

The update is aimed at a common weakness in chat-based agents: keeping a useful session alive without forcing users to repeatedly mention the bot. Vercel says eve Slack agents can now use an `onMessage` hook to receive incoming Slack messages, then decide whether to respond based on direct messages, explicit bot mentions, or whether the thread already has an active eve session.

That gives agent builders a more natural thread model. Once a session is active, follow-up messages in the same thread can continue the conversation, while `ctx.thread.listParticipants()` can expose the human Slack users who have joined the thread.

Vercel also added thread-bound session controls. `ctx.cancel()` can stop the current turn while keeping the session open, allowing a newer message to replace stale work. `ctx.reset()` retires the session entirely, so the next delivered message starts with fresh history, state, and sandbox context.

The third piece is broader Slack Events API support. A new `onEvent` hook can receive raw events such as reactions, user joins, or channel creation, and `ctx.receive()` can turn one event into one or more agent runs.

This is a narrow developer-infrastructure release, not a new model launch. But it points to where production agents are heading: less one-off chatbot behavior, and more explicit control over sessions, events, identity, and long-running work.
