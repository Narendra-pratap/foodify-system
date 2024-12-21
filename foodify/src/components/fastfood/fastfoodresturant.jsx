import React from "react";

const FastFoodRestaurantList = () => {
  const restaurants = [
    {
      id: 1,
      name: "Burger Palace",
      image: "/images/burgerpalace.jpg",
      location: "City Center",
      rating: "4.2",
    },
    {
      id: 2,
      name: "Pizza Express",
      image: "/images/pizzaexpress.jpg",
      location: "Main Square",
      rating: "4.7",
    },
    {
      id: 3,
      name: "Fry Hub",
      image: "/images/fryhub.jpg",
      location: "East End",
      rating: "4.0",
    },
  ];

  return (
    <section className="px-6 py-4">
      <h2 className="text-2xl font-bold mb-4">Fast Food Restaurants</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white shadow-lg rounded-lg">
            <img src={restaurant.image} alt={restaurant.name} className="rounded-t-lg w-full" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{restaurant.name}</h3>
              <p className="text-sm text-gray-600">{restaurant.location}</p>
              <p className="text-sm font-semibold">⭐ {restaurant.rating}</p>
              <button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => alert(`Viewing ${restaurant.name}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FastFoodRestaurantList;
