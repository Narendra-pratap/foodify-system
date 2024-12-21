import React, { useState } from "react";

const FeaturedRestaurants = () => {
  const restaurants = [
    {
      name: "The Royal Diner",
      image: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.5,
      distance: "2.5 km",
    },
    {
      name: "Spicy Kitchen",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.7,
      distance: "5.0 km",
    },
    {
      name: "Taste of India",
      image: "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.3,
      distance: "3.8 km",
    },
    {
      name: "Pizza Paradise",
      image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.6,
      distance: "4.5 km",
    },
    {
      name: "Burger King",
      image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.2,
      distance: "3.2 km",
    },
    {
      name: "Sushi World",
      image: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8,
      distance: "6.1 km",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="my-12 text-center px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-semibold mb-6">Featured Restaurants</h2>
      <div
        className={`flex gap-6 ${
          showAll ? "flex-wrap whitespace-normal" : "overflow-x-auto whitespace-nowrap"
        }`}
      >
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="min-w-[250px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <div className="p-4 bg-white relative">
              <h3 className="font-semibold text-xl sm:text-2xl">
                {restaurant.name}
              </h3>
              <p className="text-yellow-500 text-sm sm:text-base">
                {restaurant.rating} Stars
              </p>
              <p className="text-sm sm:text-base">{restaurant.distance} away</p>
              <button className="bg-red-500 text-white py-2 px-6 rounded mt-4 hover:bg-red-600 transition duration-300 ease-in-out">
                View Menu
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={toggleShowAll}
        className="mt-6 bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300"
      >
        {showAll ? "See Less" : "See All Restaurants"}
      </button>
    </div>
  );
};

export default FeaturedRestaurants;
