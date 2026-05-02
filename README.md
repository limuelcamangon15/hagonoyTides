# HagonoyTides

A real-time, location-based tide monitoring and community awareness web app for residents of Hagonoy, Bulacan, Philippines. The system helps users stay informed about high tides, weather conditions, and local updates through live data, AI insights, and anonymous community chat.

---

## Core Purpose

HagonoyTides is designed to address recurring flooding and high-tide issues and also by digitizing the high-tide monitoring instead of using the traditional calendar by providing:

- Real-time tide level updates
- Calendar Card-Style UI for daily tides
- Weather monitoring
- AI-generated daily tide insights
- Anonymous, location-based community chat
- Local awareness and coordination during flooding events

---

## Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS

### Backend

- NestJS
- WebSockets (real-time communication)

### Database

- MongoDB Atlas (Cloud Database)

---

## Architecture

### Frontend Architecture

- Component-based structure
- Reusable UI components
- Modular pages and services

### Backend Architecture

- Feature-based clean architecture
- Separation of concerns by modules
- Real-time event handling via WebSockets

---

## Key Features

- 🌊 Real-time tide level monitoring
- 🌦 Weather data integration
- 🤖 AI-generated daily tide insights
- 💬 Anonymous location-based chat system
- 📍 Community-focused local awareness tool
- ⚡ Live updates via WebSockets

---

## Target Users

Residents of:

- Hagonoy, Bulacan, Philippines
- Flood-prone coastal barangays
- Local disaster response communities

---

## Notes

- Real-time communication is handled using WebSockets (NO LOGIN REQUIRED)
- Data persistence is managed through MongoDB Atlas (cloud-hosted database)
- System is designed for low-latency updates during flooding events
