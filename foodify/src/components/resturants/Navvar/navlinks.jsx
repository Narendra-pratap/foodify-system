// src/components/NavLinks.js
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHamburger, FaDrumstickBite, FaComments } from "react-icons/fa";

const NavLinks = ({ active, setActive }) => {
  const links = [
    { name: "home", label: "Home", icon: <FaHome />, path: "/" },
    { name: "restaurant", label: "Restaurant", icon: <FaHamburger />, path: "/restaurant" },
    { name: "fast-food", label: "Fast Food", icon: <FaHamburger />, path: "/fast-food" },
    { name: "non-veg", label: "Non-Veg", icon: <FaDrumstickBite />, path: "/non-veg" },
    { name: "group-chat", label: "GroupChat", icon: <FaComments />, path: "/group-chat" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:flex-row sm:justify-center sm:space-x-4 md:flex-row md:justify-center md:space-x-6">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`flex items-center text-sm sm:text-base md:text-lg font-bold ${
            active === link.name ? "text-yellow-300" : "text-white"
          } hover:text-yellow-300 transition-transform transform hover:scale-105`}
          onClick={() => setActive(link.name)}
        >
          {link.icon}
          <span className="ml-1 sm:ml-2">{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
