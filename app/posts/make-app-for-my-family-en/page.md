---
title: "I Built a Farm Management App for My Father. Here's What Went Wrong Along the Way."
description: "A developer's honest account of building a farming tool for his father — the design decisions that made sense, the ones that didn't, and what the app looks like now."
tags: ["indie hacking", "farming", "side project", "lessons learned"]
date: 2026-05-08
---

I Built a Farm Management App for My Father. Here's What Went Wrong Along the Way.

My father took over a small plot of farmland — about 40 acres — the year before he retired. "Something to keep me busy," he said. If it didn't work out, he could always go be a security guard.

One evening I found him skipping dinner, buried in handwritten notes, cross-referencing receipts trying to figure out where his money had gone. I was learning to code at the time. It seemed like a perfect match.

How hard could it be?

---

## The design that kept growing

I started simple: log a farming activity, attach an expense. Planting day — seeds and labor.

Then my father said: "Seeds were one cost, but labor was another."

Fine. Two line items.

"Oh, and I treated someone to dinner a few days ago to arrange the workers."

Now I had expenses scattered across time, attached to the same activity, with no clean way to separate them. The simple ledger wasn't going to work.

So I redesigned around a core idea: the farming _cycle_. Every crop has a lifecycle — from soil prep and planting through fertilizing, pest control, and harvest. Each stage is a defined activity. Each activity can have costs attached to it. When the cycle closes, ROI is calculated automatically.

It felt right. Grounded in how farming actually works, not how accounting software works.

---

## The decisions that made sense, until they didn't

What followed was a series of reasonable decisions that quietly pulled the project off course.

Local database → migrate to cloud (real need: I didn't trust my home server). Fine.

Cloud database → might as well support multiple users someday → introduce authentication. Also fine, in isolation.

But then my father stopped opening the app. He couldn't remember his password. He wasn't comfortable with email login. A tool I built to make his life easier now had a gate in front of it.

I had been solving imaginary future problems instead of the real present one.

This is the trap I see now: every decision had a logical justification. But I never stopped to ask whether the _direction_ still made sense. By the time I noticed the drift, I had built something more complicated than it needed to be for an audience of one.

---

## What the app looks like now

I rebuilt it with an offline-first architecture. No login required. Data lives in the browser. Open it, use it, done.

The app tracks plots, crop cycles, farming activities, and costs. When a harvest is recorded, it calculates what you actually made against what you spent. It works without an internet connection, which matters when you're standing in a field.

My father's verdict when I showed him the new version: _"Amazing. But could you just record everything for me when I tell you what happened?"_

So now I'm his human AI assistant.

---

## Why I'm sharing this

I've since added English support and made the app available publicly at [myfarmledger.com](https://myfarmledger.com). It's free to use.

I built it for one person with a real problem. I think there are others like him — small-scale farmers, hobby growers, anyone who wants to understand whether their land is actually making money without dealing with software built for agribusiness.

If that's you, try it. And if something doesn't work or doesn't fit how you farm, I'd genuinely like to know.
