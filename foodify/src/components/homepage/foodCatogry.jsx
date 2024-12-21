import React from "react";
import { FaHamburger, FaDrumstickBite, FaHome } from "react-icons/fa";

const FoodCategories = () => {
  return (
    <div className="my-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">Choose Your Favorite</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="category-card">
          <FaHome className="text-5xl mx-auto mb-4 text-red-500" />
          <h3 className="font-semibold text-xl">Restaurants</h3>
          <p>Explore top-rated restaurants near you</p>
        </div>
        <div className="category-card">
          <FaHamburger className="text-5xl mx-auto mb-4 text-yellow-500" />
          <h3 className="font-semibold text-xl">Fast Food</h3>
          <p>Quick and tasty meals on the go</p>
        </div>
        <div className="category-card">
          <FaDrumstickBite className="text-5xl mx-auto mb-4 text-green-500" />
          <h3 className="font-semibold text-xl">Non-Veg</h3>
          <p>Delicious non-veg dishes to satisfy your cravings</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;
