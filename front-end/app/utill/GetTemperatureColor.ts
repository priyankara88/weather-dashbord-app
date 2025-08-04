export const getTemperatureColor = (temp: number) => {
  if (temp >= 25) return "text-red-500";
  if (temp >= 15) return "text-orange-500";
  if (temp >= 5) return "text-yellow-500";
  if (temp >= -5) return "text-blue-500";
  return "text-blue-700";
};
