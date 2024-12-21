import React from "react";
import restaurantData from "../../api/ResturantData.js";


const FastFoodCategories = () => {
  // Filter restaurants for fast food
  const fastFoodCategories = restaurantData.filter(
    (restaurant) => restaurant.type === "fast food"
  );

  // Get unique categories
  const uniqueCategories = [
    ...new Set(fastFoodCategories.map((restaurant) => restaurant.category)),
  ];

  // Prepare category data with sample images (dynamic assignment can be done in backend)
  const categoryData = uniqueCategories.map((category, index) => ({
    id: index + 1,
    name: category,
    image: `/images/${category.toLowerCase().replace(/\s/g, "_")}.jpg`, // Dynamic image naming
  }));

  return (
    <section className="px-6 py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Fast Food Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <p className="text-lg font-semibold text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FastFoodCategories;
