import { MapPin, Cloud } from "lucide-react";
const Card = () => {
  return (
    <div>
      <div className="w-72 h-72 bg-gradient-to-r from-white via-blue-50 to-indigo-100 shadow-2xl rounded p-4">
        <div className="flex gap-2">
          <MapPin className="text-indigo-400" />
          <div className="font-bold">Stuttgart</div>
        </div>
        <div className="flex items-center mt-5 gap-8">
          <div className="text-6xl font-bold text-red-500">
            22 <span className="text-5xl text-gray-500">°c</span>
          </div>
          <div className="">
            <Cloud size={44} className="text-indigo-400 font-bold" />
          </div>
        </div>
        <span className="bg-indigo-200 p-1 rounded text-[12px] font-bold">
          Partly Cloudy
        </span>
        <p className="text-[12px] font-bold mt-2">
          A plesent Day with some clouds
        </p>
        <div className="flex items-center justify-center gap-5 mt-4">
          <div className="bg-white w-32 h-14 rounded shadow-2xl flex gap-1">
            <Cloud size={32} className="text-indigo-400 font-bold" />
            <div>
              <div>Humidity</div>
              <div className="text-2xl font-bold">65%</div>
            </div>
          </div>
          <div className="bg-white w-32 h-14 rounded shadow-2xl flex gap-1">
            <Cloud size={32} className="text-indigo-400 font-bold" />
            <div>
              <div>Humidity</div>
              <div className="text-2xl font-bold">65%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
