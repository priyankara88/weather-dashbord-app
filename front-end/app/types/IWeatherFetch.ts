export interface IWeatherData {
  countryName: string;
  weatherData: string[];
  setWeatherData: React.Dispatch<React.SetStateAction<any[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
