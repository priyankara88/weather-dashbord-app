import { Sun, Cloud, Cloudy, CloudHail } from "lucide-react";

export const getWeatherIcon = (mainCondition: string) => {
  switch (mainCondition) {
    case "Clear":
      return <Sun size={44} className="text-orange-400" />;
    case "Clouds":
      return <Cloudy size={44} className="text-indigo-400" />;
    case "Rain":
    case "Drizzle":
    case "Thunderstorm":
      return <CloudHail size={44} className="text-indigo-400" />;
    default:
      return <Cloud size={44} className="text-blue-500" />;
  }
};
