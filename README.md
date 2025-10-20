#  Weather Dashboard Monorepo

A full-stack weather dashboard application built using **Next.js** (frontend) and **Express + TypeScript** (backend), with weather data from external APIs like OpenWeather.

---

## Monorepo Structure

/
├── front-end/ # Next.js + React app for weather dashboard
├── back-end/ # Express API with caching and MongoDB
├── README.md # Monorepo overview (this file)
└── ..

## Front-End

**Tech Stack:** Next.js, React, Tailwind CSS, TypeScript  
**Features:**

- Create weather widgets for multiple cities
- Real-time weather data display
- Caching via backend API
- Search with autocomplete

Path: [`/front-end`](./front-end)  
Full guide: [`front-end/README.md`](./front-end/README.md)

---

## Back-End

**Tech Stack:** Express.js, TypeScript, MongoDB, Axios, dotenv  
**Features:**

- REST API to create, fetch, and delete widgets
- Weather data fetching with caching (5-minute memory cache)
- MongoDB model for widget storage
- Environment variables via `.env`

Path: [`/back-end`](./back-end)  
Full guide: [`back-end/README.md`](./back-end/README.md)

---
## Getting Started

To run the project locally:

### Install Dependencies

```bash
# Frontend
cd front-end
npm install

# Backend
cd ../back-end
npm install


