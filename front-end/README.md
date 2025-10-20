# Weather Dashboard – Frontend

A responsive weather dashboard built with **Next.js** and **TypeScript** that allows users to monitor live weather conditions in multiple cities using widgets. The project fetches weather data from external APIs and displays it in interactive cards. No user authentication is required.

---

## Features

- Search and add weather widgets by city name
- Live weather data (temperature, humidity, wind)
- Delete widgets to remove cities
- In-memory or file-based caching (via backend)
- Clean and modern UI with **Tailwind CSS**
- Supports multiple cities (e.g. Stuttgart,Göppingen)

---

## 🧩 Technologies Used

- [Next.js](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- External Weather APIs:
  - [Open-Meteo](https://open-meteo.com/)
  - [OpenWeather (optional)](https://openweathermap.org/api)

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard/front-end

npm install
npm run dev

---
front-end/
├── app/
│   ├── components/          # Reusable UI components (Card, Search)
│   ├── types/               # Separated TS interfaces
│   ├── utill/               # Utility functions and hooks
│   └── page.tsx             # Main page layout
├── public/                  # Static assets
├── styles/                  # Global styles
├── README.md
└── package.json


![Weather Dashboard UI](/front-end/public/weather-dashbord.png)
![Weather Dashboard UI](/front-end/public/weatherdashbord%20search.png)
![Weather Dashboard UI](/front-end/public/weatherdashbord%20loading.png)
```
