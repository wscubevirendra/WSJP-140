
import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center">

      {/* Spinner */}
      <FaSpinner className="text-5xl text-blue-600 animate-spin" />

      {/* Loading Text */}
      <h2 className="text-xl font-semibold text-gray-800 mt-5">
        Loading...
      </h2>

      <p className="text-gray-500 mt-2">
        Please wait while we fetch your data.
      </p>

    </div>
  );
};

export default Loading;