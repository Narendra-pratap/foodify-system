// src/components/Logo.js
import React from "react";

const Logo = () => (
  <div className="flex items-center">
    <img
      className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 rounded-full border-2 border-white object-cover"
      src="/logo.jpg"
      alt="Foodify Logo"
    />
    <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white ml-2 tracking-wide drop-shadow-lg">
      Foodify
    </h1>
  </div>
);

export default Logo;
