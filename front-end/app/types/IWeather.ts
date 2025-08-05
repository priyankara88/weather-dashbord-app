export interface IWeatherData {
  weatherData: IWeatherItem;
  setWeatherData: React.Dispatch<React.SetStateAction<any[]>>;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

interface IWeatherItem {
  weather: {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
  };
  widget: {
    _id: string;
  };
}
