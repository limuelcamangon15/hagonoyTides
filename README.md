<p align="center">
  <img src="./public/hagonoy-tides-logo.png" width="88" alt="HagonoyTides logo" />
</p>

<h1 align="center">HagonoyTides</h1>

<p align="center">
  Tide, weather, and community information for Hagonoy, Bulacan — in one calm,
  offline-ready web app.
</p>

<p align="center">
  <a href="https://hagonoytides.vercel.app">Open the live app</a>
  &nbsp;·&nbsp;
  <a href="https://limuelcamangon.vercel.app/">Developer website</a>
</p>

> **An independent, solo-built project.**
> HagonoyTides is designed, built, and maintained by **Limuel Camangon**. It is
> **not affiliated with, endorsed by, or operated by** the Hagonoy municipal
> government, any government agency, or any other organization.

---

## What is HagonoyTides?

HagonoyTides is a mobile-friendly web app that brings local tide information,
current weather, and a community chat into one place.

Hagonoy is a coastal town where the movement of water is part of everyday life.
Fishermen, boat operators, families, and residents often need to know when the
tide will rise or fall. That information is usually spread across printed tide
calendars, different websites, social media posts, and word of mouth.

HagonoyTides puts the useful parts together, presents them clearly, and keeps
previously loaded tide forecasts available even when the internet connection is
slow or unavailable.

---

## Why I built it

I built HagonoyTides because a simple local question kept leading to an
unnecessarily difficult process:

> **"What are the tides today?"**

The answer was often on a printed calendar, in a format that could not provide
weather updates, real-time local observations, or offline access from a phone.

I wanted to make something that felt effortless:

- One place for tides, weather, and local updates
- Easy to read on a phone
- Useful to people who may not be technical
- Still helpful when the signal drops
- Free to open and use

There is no company, agency, or team behind this project. It is a self-funded,
solo-built effort — created by someone from Hagonoy, for the community.

---

## Features at a glance

| Feature | What it does |
| --- | --- |
| **Tide forecasts** | Daily high and low tide times and heights, arranged in a monthly view |
| **Current weather** | Local temperature, condition, date, and time with animated weather backgrounds |
| **Tidy AI** | A short, plain-language explanation of today's tides |
| **Community chat** | Anonymous, real-time messages about local water and weather conditions |
| **Offline mode** | Previously loaded tide data stays available without internet |
| **Installable app** | Can be added to a phone's home screen as a Progressive Web App |

---

## Tide forecasts

The main screen is built around a simple monthly tide calendar.

- Switch between January and December.
- See high and low tide events for each day, including time and height.
- High tides are visually marked so they are easy to spot.
- Today's card is highlighted and automatically scrolled into view.
- Past days are dimmed to keep attention on what is ahead.

The goal is to make a month of tide information readable at a glance instead of
forcing people to decode a table of numbers.

---

## Weather at a glance

Current weather is shown alongside the tides so users do not have to open a
separate weather app.

- Current temperature and weather condition
- Location and local date/time
- Animated backgrounds for sunny, cloudy, rainy, and stormy weather
- A calmer, desaturated look during nighttime hours

---

## Tidy AI

**Tidy** is the app's small tide assistant.

Instead of explaining complex tide data, Tidy turns today's tide events into a
short, understandable summary. It can mention what tide is coming next, how far
away it is, and when water levels may rise or fall.

A few important details:

- AI **supports** the forecast; it does not replace the tide data.
- If the app is offline or the AI service is unavailable, a local explanation is
  generated without AI.
- Successful responses are cached for up to 30 minutes within a session to avoid
  unnecessary requests.
- AI inference is powered by **Groq**.

---

## Anonymous community chat

The community chat is meant to become a useful layer of local, on-the-ground
information.

- Messages update in real time through WebSockets.
- No account or personal profile is required.
- A location-based label is attached to a message so readers know the general
  area it came from. It is not intended to reveal a person's identity.
- Message history, online status, and loading skeletons are built in.

It is designed for observations such as rising water, flooding, unusual weather,
or conditions in a particular part of Hagonoy. Chat requires an internet
connection and is not available offline.

**Please do not post personal or sensitive information in the public chat.**

---

## Built for weak or missing signal

HagonoyTides is a Progressive Web App (PWA), which means it can behave more like
a lightweight installed app than a traditional website.

- The app shell and static assets are cached by a service worker.
- Tide data is stored on the device with **localforage**, so previously loaded
  forecasts remain readable offline.
- An offline notice appears when the app is opened without a connection.
- Weather and chat are intentionally **network-only**, so old data is not shown
  as if it were current.
- The app can be installed directly from a supported browser — no app store
  required.

In short: **already loaded tides stay with you; live weather and chat need a
connection.**

---

## Other pages

- **About** — the story, purpose, and principles behind the project.
- **Contact** — the developer's contact details, plus convenience links to public
  emergency and municipal contacts. HagonoyTides is **not** an emergency service.
- **Support** — an optional page for anyone who wants to help with hosting and
  maintenance through GCash.

The interface also includes small thoughtful touches such as glass-like panels,
subtle motion, skeleton loading states, and a December snowfall effect.

On launch, the app opens with a custom 2.5-second ocean splash screen. It is
drawn entirely with inline CSS and SVG — no images, fonts, or network requests —
so it works offline and stays smooth on low-powered devices.

---

## Behind the scenes

HagonoyTides uses a small, centralized backend so the frontend does not have to
talk to multiple external services directly.

```text
React PWA (this repository)
          │
          ▼
HagonoyTides backend
NestJS · REST API · MongoDB
          │
          ├── External tide data provider
          ├── OpenWeatherMap  → weather
          └── Groq            → Tidy AI
```

The frontend handles the experience, motion, caching, and offline behavior. The
backend is a separate service that fetches, processes, stores, and serves data.

### Technology

| Area | Tools |
| --- | --- |
| **Frontend** | React 19, Vite, Tailwind CSS 4 |
| **Motion & UI** | Framer Motion, Lucide, custom WebGL aurora effects |
| **Offline / PWA** | vite-plugin-pwa, Workbox, localforage |
| **Real-time** | Socket.IO client |
| **Backend** | NestJS, REST API, MongoDB |
| **Data** | Tide data provider, OpenWeatherMap |
| **AI** | Groq (`openai/gpt-oss-20b`) |
| **Hosting** | Vercel (frontend) |

---

## Accuracy and safety

> **HagonoyTides is an informational and community project — not an official
> source for navigation, maritime operations, emergency decisions, or
> safety-critical activities.**

Tide values come from external data providers and are processed by the project's
backend. HagonoyTides does not operate its own tide observation station, so the
information shown may contain forecast differences, delays, missing values, or
other errors.

Weather and community messages can also change quickly or be inaccurate.

Always verify important conditions with appropriate official or professional
sources before making decisions involving:

- Personal safety
- Fishing or boating
- Navigation
- Evacuation or emergency response

For emergencies, call **911** or contact the proper local authorities directly.

---

## About the developer

**Limuel Camangon**  
Solo developer and independent builder · Hagonoy, Bulacan

I designed and built HagonoyTides from the ground up — the interface, backend
integration, offline caching, data presentation, and community features. The
project is independently maintained and self-funded.

- **Developer website:** https://limuelcamangon.vercel.app/
- **Live application:** https://hagonoytides.vercel.app

---

## A note about this repository

HagonoyTides is a personal project, not open-source software. The source code is
shared for portfolio and transparency purposes. No installation, deployment, or
redistribution guide is provided, and the code should not be republished or
reused without permission.

Feedback, suggestions, and bug reports are always welcome through the Contact
page in the app.

---

<p align="center">
  <strong>Built for Hagonoy, with care — and designed to keep working when the
  signal doesn't.</strong>
</p>
