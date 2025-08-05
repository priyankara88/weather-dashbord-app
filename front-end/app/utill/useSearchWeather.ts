import { useEffect, useState } from "react";
import { Widgets_Save } from "./constants";
import { IWeatherData } from "../types/IWeatherFetch";

const useSearchWeather = ({
  countryName,
  weatherData,
  setWeatherData,
  setLoading,
}: IWeatherData) => {
  useEffect(() => {
    getWeatherData();
  }, [countryName]);

  const getWeatherData = async () => {
    setLoading(true);
    const response = await fetch(Widgets_Save, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ location: countryName.split("-")[0] }),
    });
    const wetherData = await response.json();
    setWeatherData((prev) => [...prev, wetherData]);
    setLoading(false);
  };
  return weatherData;
};

export default useSearchWeather;
