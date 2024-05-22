import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="text-xl font-semibold text-gray-600 mb-4">
          Page Not Found
        </p>
        <p className="text-gray-600 mb-8">
          The page you're looking for could not be found.
        </p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
