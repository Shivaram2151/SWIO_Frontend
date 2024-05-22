import React from "react";

const ScrollingBoxes = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-300 h-64">Box 1</div>
        <div className="bg-gray-300 h-64">Box 2</div>
        <div className="bg-gray-300 h-64">Box 3</div>
      </div>
    </div>
  );
};

export default ScrollingBoxes;
