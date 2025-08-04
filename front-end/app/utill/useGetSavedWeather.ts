import { useEffect, useState } from "react";
import { Widgets_Save } from "./constants";

const useGetSavedWeather = () => {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = async () => {
    const response = await fetch(Widgets_Save, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const wetherData = await response.json();

    setWeatherData(wetherData);
  };

  return weatherData;
};

export default useGetSavedWeather;
