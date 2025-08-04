import { useEffect, useState } from "react";
import { Widgets_Save } from "./constants";

interface IWeatherData {
  countryName: string;
  weatherData: string[];
  setWeatherData: React.Dispatch<React.SetStateAction<any[]>>;
}
const useSearchWeather = ({
  countryName,
  weatherData,
  setWeatherData,
}: IWeatherData) => {
  useEffect(() => {
    getWeatherData();
  }, [countryName]);

  const getWeatherData = async () => {
    const response = await fetch(Widgets_Save, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location: countryName.split("-")[0] }),
    });
    const wetherData = await response.json();
    setWeatherData((prev) => [...prev, wetherData]);
  };

  return weatherData;
};

export default useSearchWeather;
