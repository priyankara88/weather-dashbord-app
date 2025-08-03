"use client";
import { CloudSun } from "lucide-react";
import Search from "./components/Search";
import Card from "./components/Card";
import { useEffect, useState } from "react";

export interface City {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}
const page = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [fetchCities, setFetchCities] = useState<City[]>([]);

  useEffect(() => {
    fetchData();
  }, [searchInput]);

  const fetchData = async () => {
    const result = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${searchInput}&count=5`
    );
    const data = await result.json();
    const cities = data.results || [];

    setFetchCities(cities);
    console.log(18, cities);
  };

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
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          fetchCities={fetchCities}
        />
        <div className="mt-5 flex flex-wrap gap-10 items-center ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default page;
