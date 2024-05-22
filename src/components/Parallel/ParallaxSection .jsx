import React from "react";

const ParallaxSection = () => {
  return (
    <div className="flex justify-center p-8 bg-white w-1/2 ">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex items-center justify-center w-24 h-24 bg-blue-500 rounded-md">
          <span className="text-white text-4xl font-bold">A</span>
        </div>
        <div className="flex items-center justify-center w-24 h-24 bg-blue-500 rounded-md">
          <span className="text-white text-4xl font-bold">B</span>
        </div>
        <div className="flex items-center justify-center w-24 h-24 bg-blue-500 rounded-md">
          <span className="text-white text-4xl font-bold">C</span>
        </div>
        <div className="flex items-center justify-center w-24 h-24 bg-blue-500 rounded-md">
          <span className="text-white text-4xl font-bold">D</span>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
