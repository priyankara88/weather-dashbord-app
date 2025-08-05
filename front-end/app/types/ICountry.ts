export interface ICountryName {
  setCountryName: React.Dispatch<React.SetStateAction<string>>;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
  countryName: string;
  weatherData: any;
  setWeatherData: React.Dispatch<React.SetStateAction<any[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
