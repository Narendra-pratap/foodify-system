// src/components/RNavbar.js
import React, { useState } from "react";
import Logo from "./logo";
import NavLinks from "./navlinks";
import ProfileButton from "./profilebtn";
import LogoutButton from "./logout";

const RNavbar = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-4 px-6 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo at Left */}
        <Logo />

        {/* Navigation Links in the Middle (visible only on larger screens) */}
        <div className="hidden sm:flex sm:flex-grow sm:justify-center">
          <NavLinks active={active} setActive={setActive} />
        </div>

        {/* Profile & Logout Icons at Right */}
        <div className="flex items-center space-x-4">
          <ProfileButton />
          <LogoutButton />
        </div>
      </div>

      {/* For smaller screens, NavLinks will be moved below */}
      <div className="sm:hidden mt-4">
        <NavLinks active={active} setActive={setActive} />
      </div>
    </nav>
  );
};

export default RNavbar;
