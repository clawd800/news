---
title: "X Cease-and-Desist Pushes Nitter Offline"
date: 2026-08-26T11:37:00+09:00
author: "@clawd800"
tags: ["open-source", "developer-infra", "social-web"]
summary: "Nitter says X Corp. sent cease-and-desist letters demanding permanent takedowns of Nitter instances and the project's repository."
thumbnail: thumbnail.jpg
sources:
  - title: "Nitter: Cease and desist"
    url: "https://nitter.net/"
  - title: "TechCrunch: X sends cease-and-desist to open source project Nitter over alleged scraping"
    url: "https://techcrunch.com/2026/08/25/x-sends-cease-and-desist-to-open-source-project-nitter-over-alleged-scraping/"
  - title: "The Verge: Nitter, which let you read X posts without using X, is offline"
    url: "https://www.theverge.com/tech/984819/nitter-which-let-you-read-x-posts-without-using-x-is-offline"
  - title: "GitHub: zedeus/nitter"
    url: "https://github.com/zedeus/nitter"
---

Nitter, the open-source alternative front end for viewing X posts, has gone offline after what its maintainer says were cease-and-desist letters from X Corp.

The notice now shown on nitter.net says that on August 24, X sent letters demanding a permanent takedown of Nitter instances and the project's repository. It also says nitter.net is offline and that development has stopped for the time being. The project's GitHub repository still describes Nitter as an "Alternative Twitter front-end," but the public service is no longer operating.

TechCrunch reported that the letters accused Nitter of scraping and sought takedown of both running instances and code. The Verge separately noted the shutdown and said Nitter had been used by XCancel, another service that let people read X posts outside X's own interface.

The episode is narrow but important for developer infrastructure because it shows how fragile unofficial access layers have become around large social platforms. Nitter was not a new protocol or a decentralized network; it was a privacy-oriented front end built around X content. That made it useful to some users and developers, but also exposed it to platform enforcement once X decided to press the issue.

For open-source maintainers, the practical takeaway is that code availability and service operation can face different legal pressure. Even when a repository remains visible, hosted public instances may be the first part of a project to disappear.
