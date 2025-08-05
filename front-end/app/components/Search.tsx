import { useEffect, useState } from "react";
import useSearchCity from "../utill/useSearchCity";
import useSearchWeather from "../utill/useSearchWeather";
import { ICountryName } from "../types/ICountryName";

const Search: React.FC<ICountryName> = ({
  setCountryName,
  setSearchInput,
  searchInput,
  countryName,
  weatherData,
  setWeatherData,
  setLoading,
}) => {
  const fetchCities = useSearchCity(searchInput);
  const handleSearchCities = (inputValue: string) => {
    setSearchInput(inputValue);
  };

  const handleWidgets = () => {
    setCountryName(searchInput);
  };

  useSearchWeather({ countryName, weatherData, setWeatherData, setLoading });

  return (
    <div className="text-black">
      <div className="w-full flex p-3 gap-2 bg-gradient-to-r from-indigo-100 to-indigo-300 shadow-2xl rounded">
        <input
          placeholder="Enter City Name (Eg:- , Stuttgart ,Göppingen .. )"
          type="text"
          value={searchInput}
          className="w-full text-black rounded p-2 bg-white"
          onChange={(e) => {
            handleSearchCities(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCountryName(searchInput);
            }
          }}
        />
        <button
          className="w-44 h-12 rounded font-bold text-white bg-gradient-to-r from-blue-300 to-indigo-600 cursor-pointer"
          onClick={(e) => handleWidgets()}
        >
          + Add Widget
        </button>
      </div>
      <div className="absolute z-10 rounded m-2 w-60 bg-indigo-300/30 backdrop-blur-md  ">
        {fetchCities && fetchCities.length > 0 ? (
          <ul className="">
            {fetchCities?.map((city, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-[#4e3bf740]  border-b  border-b-gray-300 py-2  px-2 rounded "
                onClick={() => setSearchInput(city?.name + "-" + city?.country)}
              >
                {city?.name}, {city?.country}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Search;
