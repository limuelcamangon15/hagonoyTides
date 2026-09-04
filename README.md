# HagonoyTides

HagonoyTides is an offline-capable Progressive Web App (PWA) for tide monitoring, weather updates, and real-time community communication, built for residents and visitors of Hagonoy, Bulacan, Philippines.

The project modernizes the traditional paper-based tide calendar by bringing essential coastal information into a single, mobile-friendly application that can continue providing previously loaded tide information even when an internet connection is unavailable.

The project was independently designed and developed with zero dedicated funding, making use of available open-source technologies, external APIs, and self-built backend infrastructure.

**Live Project:** https://hagonoytides.vercel.app

---

## What is HagonoyTides?

Hagonoy is a community deeply connected to its waterways. Tide conditions can be important to fishermen, boat operators, residents, visitors, and anyone whose activities are affected by the surrounding coastal environment.

Traditionally, tide information may be obtained through printed tide calendars, scattered online sources, or other inconvenient formats.

HagonoyTides was created to make this information:

- Easier to access
- Easier to understand
- Available in one place
- Mobile-friendly
- Available offline after data has been loaded

The goal is simple: make useful local coastal information more accessible to the Hagonoy community.

---

## Built for Unreliable Connectivity

One of the main ideas behind HagonoyTides is that internet connectivity should not always be a requirement for accessing information you've already loaded.

As a Progressive Web App, HagonoyTides can be installed directly to a supported device's home screen.

Previously loaded tide information is cached locally, allowing users to continue viewing available data even when their connection is temporarily unavailable.

This makes HagonoyTides particularly useful in situations where connectivity may be slow, unstable, or completely unavailable.

### PWA Features

- Installable directly from a browser
- Offline access to previously loaded information
- Fast loading through local caching
- Home-screen experience
- Works across supported modern browsers

---

## Tide Monitoring

HagonoyTides provides daily and monthly tide information through a simplified interface designed around the needs of local users.

Instead of navigating complicated tide-data sources, users can quickly view:

- High tide
- Low tide
- Tide times
- Tide heights
- Daily tide information
- Monthly tide calendars

The application aggregates tide information from external API sources and processes it through the project's own backend infrastructure.

---

## Weather Updates

Weather information is provided alongside tide conditions to give users additional environmental context.

HagonoyTides integrates weather data so users don't have to switch between multiple applications when checking local coastal conditions.

---

## Real-Time Community Chat

The general chat is designed to become more than just a conventional messaging feature.

Its purpose is to provide a space where people can share real-time, location-relevant observations from around Hagonoy.

For example, community members may share observations about:

- Local water conditions
- Weather changes
- Areas experiencing unusual conditions
- Situations observed in their area
- Other useful local information

### Anonymous Participation

The system is designed around anonymous participation.

Users are not required to publicly expose their personal identity. Instead, a location-based identifier is used to associate information with an area and help reduce misleading or misplaced local details.

The goal is to eventually build a useful layer of crowdsourced local information alongside structured tide and weather data.

---

## AI-Assisted Information

AI is used as a supporting feature rather than the central purpose of HagonoyTides.

The application can process available tide information and generate simpler summaries that help users understand numerical forecast data more easily.

The goal is not to replace the underlying data, but to make it more approachable for everyday users.

AI inference is powered by Groq.

---

## Centralized Data Infrastructure

HagonoyTides does not maintain its own professional tidal observation network.

Instead, the project integrates information from multiple external API sources and centralizes the data through its own backend infrastructure.

The system processes and organizes data from sources such as:

- WorldTides
- OpenWeatherMap
- Groq
- Other available API and data sources

The processed information is then handled through the project's own:

- Backend services
- Database
- API layer
- Caching system

This architecture allows the frontend application to access information through a centralized interface rather than communicating with multiple external services directly.

The backend and data infrastructure were built specifically for the project, despite having no dedicated project funding or institutional budget.

---

## Technology Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Progressive Web App technologies

### Backend

- NestJS
- REST API architecture
- Centralized data processing

### Database

- MongoDB

### External Services

- **WorldTides** — Tide information
- **OpenWeatherMap** — Weather information
- **Groq** — LLM inference for AI-assisted summaries

---

## Why It Was Built

HagonoyTides started with a simple observation:

> Local tide information should not be difficult to access.

The traditional tide calendar provides useful information, but a printed calendar cannot easily provide weather updates, community observations, offline digital access, or an interface designed specifically for modern mobile devices.

Instead of simply reproducing a paper calendar digitally, HagonoyTides attempts to build a more connected local information platform around it.

The project was built from the ground up with zero dedicated funding. It was independently developed using available technologies, open-source software, external APIs, and self-built infrastructure.

What started as a small attempt to solve a local problem gradually became a complete web application involving:

- Frontend development
- Backend engineering
- API integration
- Database management
- Offline architecture
- Community-oriented features

---

## Data & Accuracy Disclaimer

> **HagonoyTides should not be treated as an authoritative source for navigation, maritime operations, emergency decisions, or other safety-critical activities.**

Tide information is obtained by integrating data from multiple external API sources and processing it through the project's backend infrastructure. HagonoyTides does not operate its own professional tidal observation network.

Because of this, information displayed by the application may contain:

- Differences between data sources
- Forecast inaccuracies
- Delays
- Missing information
- API limitations
- Errors in external data

Weather information and community-submitted observations may also change rapidly.

Always verify important conditions through appropriate official or professional sources before making decisions involving personal safety, navigation, fishing operations, boating, or other high-risk activities.

HagonoyTides is intended as an informational and community-oriented tool, not a replacement for official marine or emergency information.

---

## Developer

HagonoyTides was designed and developed by **Limuel Camangon**, a web developer and IT student at Bulacan State University and a resident of Hagonoy, Bulacan.

The project was built independently with zero dedicated funding and no institutional project budget.

From the frontend interface to the backend API, database infrastructure, API integrations, offline functionality, and community features, the project was developed as an independent effort to create something practical and useful for the community.

**Developer Website:**  
https://limuelcamangon.vercel.app/

---

## Links

- **Live Application:** https://hagonoytides.vercel.app
- **Developer:** https://limuelcamangon.vercel.app/

---

## Built for Hagonoy

HagonoyTides is an independently developed project built around a simple idea:

> Local information should be accessible, understandable, and available when people need it — even when the internet isn't.

Built with zero dedicated funding, developed locally, and created with the Hagonoy community in mind.
