import { useEffect, useState } from "react";
import useSearchCity from "../utill/useSearchCity";
import useSearchWeather from "../utill/useSearchWeather";

interface ICountryName {
  setCountryName: React.Dispatch<React.SetStateAction<string>>;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
  countryName: string;
  weatherData: any;
  setWeatherData: React.Dispatch<React.SetStateAction<any[]>>;
}

const Search: React.FC<ICountryName> = ({
  setCountryName,
  setSearchInput,
  searchInput,
  countryName,
  weatherData,
  setWeatherData,
}) => {
  const fetchCities = useSearchCity(searchInput);
  const handleSearchCities = (inputValue: string) => {
    setSearchInput(inputValue);
  };

  const handleWidgets = () => {
    setCountryName(searchInput);
  };

  useSearchWeather({ countryName, weatherData, setWeatherData });

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
        />
        <button
          className="w-44 h-12 rounded font-bold text-white bg-gradient-to-r from-blue-300 to-indigo-600 cursor-pointer"
          onClick={(e) => handleWidgets()}
        >
          + Add Widget
        </button>
      </div>
      <div className="absolute z-10 rounded-2xl m-2 w-60 ">
        {fetchCities && fetchCities.length > 0 ? (
          <ul className="">
            {fetchCities?.map((city, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-amber-200"
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
