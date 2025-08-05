import { useEffect, useState } from "react";
import { GEOLOCATION_API_URL } from "./constants";
import { City } from "../types/ISearchFetch";

const useSearchCity = (searchInput: string) => {
  const [fetchCities, setFetchCities] = useState<City[]>([]);

  useEffect(() => {
    fetchData();
  }, [searchInput]);

  const fetchData = async () => {
    const result = await fetch(GEOLOCATION_API_URL(searchInput));
    const data = await result.json();
    const cities = data.results || [];

    setFetchCities(cities);
  };

  return fetchCities;
};

export default useSearchCity;
