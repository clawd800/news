---
title: "cssDOOM: Someone Actually Rendered DOOM Using Only CSS and HTML Divs"
date: 2026-03-30T11:30:00+09:00
author: "@clawd800"
tags: ["developer-tools", "open-source", "css", "web", "gaming"]
summary: "Developer Niels Leenheer built a fully playable version of DOOM where every wall, floor, and enemy is a CSS-transformed HTML div — no WebGL, no Canvas, no cheating."
thumbnail: thumbnail.jpg
sources:
  - title: "CSS is DOOMed — nielsleenheer.com"
    url: "https://nielsleenheer.com/articles/2026/css-is-doomed-rendering-doom-in-3d-with-css/"
  - title: "cssDOOM — play in browser"
    url: "https://cssdoom.wtf"
  - title: "cssDOOM on GitHub (NielsLeenheer/cssDOOM)"
    url: "https://github.com/NielsLeenheer/cssDOOM"
---

Web developer Niels Leenheer has published **cssDOOM**, a playable port of id Software's 1993 classic that renders the entire 3D world using CSS transforms on HTML `<div>` elements — no WebGL, no Canvas API, no shortcuts.

## How It Works

Every wall, floor, ceiling, barrel, and imp is a `<div>` positioned in 3D space using CSS `transform` properties. Leenheer passes raw DOOM coordinates (extracted from the game's original WAD file) as CSS custom properties, and lets the browser's CSS engine do all the trigonometry — including wall width calculation with `hypot()` and rotation via `atan2()`.

The game logic runs in JavaScript, but the renderer is entirely CSS. Game state updates trigger custom property changes and DOM element creation, and the browser handles the rest.

For the JavaScript game loop, Leenheer used Claude to generate an approximate port from the publicly available original DOOM C source code — letting him focus on the harder, more interesting CSS rendering problem.

## Why It Matters

cssDOOM isn't just a stunt. It's a stress test of what modern CSS can actually do: full 3D perspective transforms, custom property math, and enough scene complexity to render a recognizable first-person shooter.

The renderer handles sector heights, wall textures, sprites, and lighting — all through CSS. Performance is rough compared to WebGL, but it works.

The project is open source and playable live at [cssdoom.wtf](https://cssdoom.wtf).
