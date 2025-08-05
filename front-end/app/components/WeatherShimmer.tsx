import React from "react";

const WeatherShimmer = () => {
  return (
    <div className="relative p-6 mb-8 overflow-hidden rounded-xl shadow-md bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="w-60 h-60 rounded p-4 relative">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 items-center">
            <div className="w-6 h-6 rounded-full bg-indigo-200"></div>
            <div className="h-6 w-24 bg-indigo-200 rounded-lg"></div>
          </div>
          <div className="w-10 h-10 rounded-full bg-indigo-200"></div>
        </div>
        <div className="w-full flex items-center mt-5 mb-4">
          <div className="h-10 w-20 bg-indigo-200 rounded-lg"></div>
          <div className="ml-auto w-16 h-16 rounded-full bg-indigo-200"></div>
        </div>
        <div className="h-4 w-28 bg-indigo-200 rounded mb-2"></div>
        <div className="h-4 w-40 bg-indigo-200 rounded mb-6"></div>
        <div className="flex items-center justify-center gap-5">
          <div className="bg-white w-32 h-14 rounded shadow-2xl"></div>
          <div className="bg-white w-32 h-14 rounded shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherShimmer;
