"use client";

import React from "react";
import { router } from "next/client";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center p-20">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-center">
          The page you are looking for does not exist.
        </p>
        <div className="flex justify-center mt-8">
        </div>
      </div>
    </div>
  );
};

export default NotFound;
