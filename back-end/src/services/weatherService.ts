import axios from "axios";

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

  const response = await axios.get(``);

  const data = response.data;

  cache[location] = { timestamp: now, data };
  return data;
};
