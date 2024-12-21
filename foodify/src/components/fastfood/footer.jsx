import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="text-center">
        <p className="mb-2">© 2024 Foodify. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-yellow-300">About Us</a>
          <a href="#" className="hover:text-yellow-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
