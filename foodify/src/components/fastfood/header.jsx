import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-4 px-6 shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Foodify</div>
        <nav className="space-x-4">
          <a href="/" className="text-white hover:text-yellow-300">Home</a>
          <a href="/restaurants" className="text-white hover:text-yellow-300">Restaurants</a>
          <a href="/profile" className="text-white hover:text-yellow-300">Profile</a>
          <a href="/logout" className="text-white hover:text-yellow-300">Logout</a>
        </nav>
        <input
          type="text"
          placeholder="Search Fast Food..."
          className="ml-4 px-2 py-1 rounded-md"
        />
      </div>
    </header>
  );
};

export default Header;
