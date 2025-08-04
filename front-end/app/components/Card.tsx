import { MapPin, Cloud, Trash2, Wind, Droplets } from "lucide-react";
import React from "react";
import { getTemperatureColor } from "../utill/GetTemperatureColor";
import { getWeatherIcon } from "../utill/GetWeatherIcon";
import { DELETE_URL } from "../utill/constants";
interface IWeatherData {
  weatherData: string[];
  setWeatherData: React.Dispatch<React.SetStateAction<any[]>>;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}
const Card: React.FC<IWeatherData> = ({
  weatherData,
  setWeatherData,
  setSearchInput,
}) => {
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(DELETE_URL(id), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete widget");
      }

      setWeatherData((prev) => prev.filter((data) => data.widget?._id !== id));
      setSearchInput("");

      const text = await response.text();
      const data = text ? JSON.parse(text) : null;
      console.log("Deleted:", data);
    } catch (error) {
      console.error("Error deleting widget:", error);
    }
  };

  return (
    <div>
      <div className="w-72 h-72 bg-gradient-to-r from-white via-blue-50 to-indigo-100 shadow-2xl rounded p-4">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center ">
            <MapPin className="text-indigo-400 " />
            <div className="font-bold">{weatherData?.weather?.name}</div>
          </div>
          <div
            className="w-10 h-10 rounded-full bg-indigo-300 items-center justify-center flex cursor-pointer"
            onClick={() => handleDelete(weatherData?.widget?._id)}
          >
            <Trash2 className="text-red-400 shadow-2xl hover:text-red-700" />
          </div>
        </div>
        <div className="w-full flex items-center mt-5  ">
          <div
            className={`${getTemperatureColor(
              Math.round(weatherData?.weather?.main?.temp)
            )} text-4xl font-bold w-full`}
          >
            {weatherData?.weather?.main?.temp}
            <span className={`text-4xl text-gray-400`}>°c</span>
          </div>
          <div className="mr-10">
            {getWeatherIcon(weatherData?.weather?.weather[0]?.main)}
          </div>
        </div>
        <span className="bg-indigo-200 p-1 rounded text-[12px] font-bold text-blue-400">
          {weatherData?.weather?.weather[0]?.main}
        </span>
        <p className="text-[12px] font-bold mt-2">
          {weatherData?.weather?.weather[0]?.description}
        </p>
        <div className="flex items-center justify-center gap-5 mt-6">
          <div className="bg-white w-32 h-14 rounded shadow-2xl flex gap-1 items-center justify-center">
            <div className="flex items-center justify-center">
              <Droplets size={15} className="text-indigo-400 font-bold" />
            </div>

            <div className="">
              <div className="text-[15px] text-gray-500">Humidity</div>
              <div className="text-[14px] font-bold">
                {weatherData?.weather?.main?.humidity}%
              </div>
            </div>
          </div>
          <div className="bg-white w-32 h-14 rounded shadow-2xl flex gap-1 items-center justify-center">
            <div className="flex items-center">
              <Wind size={15} className="text-indigo-400 font-bold" />
            </div>

            <div>
              <div className="text-[15px] text-gray-500">Wind</div>
              <div className="text-[14px] font-bold">
                {weatherData?.weather?.wind?.speed}Km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
