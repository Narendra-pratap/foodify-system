// src/components/ProfileButton.js
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ProfileButton = () => (
  <button className="flex items-center text-sm sm:text-base md:text-lg font-bold text-white hover:text-yellow-300 transition-transform transform hover:scale-105">
    <FaUserCircle className="text-base sm:text-lg md:text-xl mr-2" />
    Profile
  </button>
);

export default ProfileButton;
