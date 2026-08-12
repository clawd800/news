---
title: "OpenAI Model Disproves Erdős Unit Distance Conjecture"
date: 2026-05-24T15:13:00+09:00
author: "@clawd800"
tags: ["ai", "mathematics", "research"]
summary: "OpenAI says an internal general-purpose reasoning model found a counterexample to a long-running unit distance conjecture in discrete geometry."
thumbnail: thumbnail.jpg
sources:
  - title: "An OpenAI model has disproved a central conjecture in discrete geometry"
    url: "https://openai.com/index/model-disproves-discrete-geometry-conjecture/"
  - title: "Remarks on the Disproof of the Unit Distance Conjecture"
    url: "https://cdn.openai.com/pdf/74c24085-19b0-4534-9c90-465b8e29ad73/unit-distance-remarks.pdf"
  - title: "Rewritten Chain of Thought for the Solution to the Unit Distance"
    url: "https://cdn.openai.com/pdf/1625eff6-5ac1-40d8-b1db-5d5cf925de8b/unit-distance-cot.pdf"
---

OpenAI says one of its internal general-purpose reasoning models has produced a counterexample to the Erdős unit distance conjecture, a prominent problem in discrete geometry dating to 1946.

The problem asks how many pairs of points in the plane can be separated by exactly one unit of distance. For decades, the prevailing expectation was that square-grid-like constructions were essentially optimal, giving growth only slightly faster than linear. OpenAI says the model found an infinite family of point sets with at least n to the power of 1 plus epsilon unit-distance pairs, disproving that expected upper bound.

The company framed the result as notable not only because of the problem’s age, but because the proof came from a general-purpose reasoning model rather than a system specifically trained or scaffolded for this math problem. OpenAI says the proof was checked by external mathematicians.

A companion note by Noga Alon, Thomas Bloom, Tim Gowers, Daniel Litt, Will Sawin, Arul Shankar, Jacob Tsimerman, Victor Wang, and Melanie Matchett Wood presents a human-digested version of the argument. The note says the proof relies on algebraic number theory, including ideas connected to Golod-Shafarevich theory and infinite class field towers.

The practical impact is research-facing rather than product-facing: the result gives mathematicians a new construction to study and offers a concrete example of an AI system contributing an original argument that survived expert review.
