export const Widgets_URL = "http://localhost:5001/widgets/weather";
export const Widgets_Save = "http://localhost:5001/widgets";
export const GEOLOCATION_API_URL = (searchInput: string) =>
  `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    searchInput
  )}&count=5`;

export const DELETE_URL = (id: string): string => {
  return `http://localhost:5001/widgets/${id}`;
};
