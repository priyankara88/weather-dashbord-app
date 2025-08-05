# Weather Dashboard — Back-End

This is the **Back-End API** for the Weather Dashboard application. It fetches real-time weather data from OpenWeatherMap, caches results in memory for performance, and provides API endpoints to interact with stored weather widgets using MongoDB.

---

## Project Structure

---

back-end/
├── src/
│ ├── controllers/
│ │ └── widgetController.ts # Handles request logic for widgets
│ ├── models/
│ │ └── Widget.ts # Mongoose model for widget schema
│ ├── routes/
│ │ └── widgets.ts # Express routes for CRUD operations
│ ├── services/
│ │ └── weatherService.ts # Handles weather API calls and caching
│ ├── app.ts # Sets up Express app and middleware
│ └── server.ts # Starts the server on the defined port
├── .env # Contains environment variables
├── package.json
└── tsconfig.json

### Prerequisites

- Node.js ≥ v18
- MongoDB instance running
- OpenWeatherMap API key

### Installation

```bash
cd back-end
npm install


PORT=5000
WEATHER_API_KEY=your_openweathermap_api_key
MONGO_URI=your_mongo_connection_string

#Architecture Overview

Express.js backend with TypeScript
Mongoose for MongoDB data persistence
Axios for external weather API calls
In-memory cache (via object) to reduce redundant API requests

#Tech Stack
Node.js + Express
TypeScript
MongoDB + Mongoose
OpenWeatherMap API
Axios
Dotenv
ts-node-dev
```
