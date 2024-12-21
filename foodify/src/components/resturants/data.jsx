import React from "react";

function Data({ imageUrl, name, rating, pricePerThali }) {
  return (
    <div
      className="max-w-xs rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 bg-white">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-500">Price: ₹{pricePerThali}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">{/* Add rating stars here */}</span>
          <p className="text-sm text-gray-600 ml-2">{rating} stars</p>
        </div>
      </div>
    </div>
  );
}

export default Data;
