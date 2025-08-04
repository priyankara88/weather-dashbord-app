import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

interface CachedWeather {
  timestamp: number;
  data: any;
}

const cache: Record<string, CachedWeather> = {};
const CACHE_DURATION = 5 * 60 * 1000;

export const getWeather = async (location: string) => {
  const now = Date.now();
  if (cache[location] && now - cache[location].timestamp < CACHE_DURATION) {
    return cache[location].data;
  }

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`
  );

  const data = response.data;

  cache[location] = { timestamp: now, data };
  return data;
};
