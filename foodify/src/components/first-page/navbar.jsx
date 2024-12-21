import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4 px-6 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-12 h-12 object-contain" src="/logo.jpg" alt="Foodify Logo" />
          <h1 className="text-3xl font-bold text-white ml-3">Foodify</h1>
        </div>

        <div className="flex space-x-4">
          <button className="bg-transparent text-white font-medium py-2 px-6 border border-white rounded hover:bg-white hover:text-gray-900 transition">
            Login
          </button>
          <button className="bg-red-500 text-white font-medium py-2 px-6 rounded hover:bg-red-600 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
