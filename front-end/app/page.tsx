"use client";
import { CloudSun } from "lucide-react";
import Search from "./components/Search";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import useSearchWeather from "./utill/useSearchWeather";
import useGetSavedWeather from "./utill/useGetSavedWeather";
import { Widgets_URL } from "./utill/constants";

const page = () => {
  const [countryName, setCountryName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const StoreweatherData = useGetSavedWeather();

  useEffect(() => {
    for (const item of StoreweatherData) {
      const getWeatherData = async () => {
        const response = await fetch(Widgets_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ location: item.location }),
        });
        const wetherData = await response.json();

        setWeatherData((prev) => [...prev, wetherData]);
      };
      getWeatherData();
    }
  }, [StoreweatherData]);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="flex flex-col items-center justify-center p-10">
        <div className="flex gap-2 items-center justify-center">
          <div className="w-15 h-15 rounded-full bg-blue-300 items-center justify-center flex bg-gradient-to-r from-blue-600 to-indigo-600 ">
            <CloudSun size={44} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Weather Dashbord
          </h1>
        </div>
        <p className="mt-7 text-[18px] font-bold text-gray-500">
          Stay updated with weather information from cities around the world.
          Add your favorite locations and monitor weather conditions at a
          glance.
        </p>
      </div>
      <div className="pl-20 pr-20 ">
        <Search
          setCountryName={setCountryName}
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          countryName={countryName}
          weatherData={weatherData}
          setWeatherData={setWeatherData}
        />
        <div className="mt-5 flex flex-wrap gap-10 items-center ">
          <div className="mt-5 flex flex-wrap gap-10 items-center">
            {weatherData.slice(1).length > 0 ? (
              weatherData
                .slice(1)
                .map((weatherData, index) => (
                  <Card
                    key={index}
                    weatherData={weatherData}
                    setWeatherData={setWeatherData}
                    setSearchInput={setSearchInput}
                  />
                ))
            ) : (
              <p className="text-lg text-gray-400 font-semibold items-center ">
                No cities added yet. Try adding a city!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
