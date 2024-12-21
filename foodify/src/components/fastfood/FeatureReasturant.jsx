import React from "react";

const FeaturedRestaurants = () => {
  const featured = [
    {
      id: 1,
      name: "Fast Bites",
      image: "/images/fastbites.jpg",
      rating: "4.5",
      location: "Downtown, City Center",
    },
    {
      id: 2,
      name: "Speedy Snacks",
      image: "/images/speedysnacks.jpg",
      rating: "4.8",
      location: "Market Street, Uptown",
    },
  ];

  return (
    <section className="mt-20 px-6 py-4">
      <h2 className="text-2xl font-bold mb-4">Featured Fast Food Restaurants</h2>
      <div className="flex space-x-4 overflow-x-scroll">
        {featured.map((restaurant) => (
          <div key={restaurant.id} className="w-60 bg-white shadow-lg rounded-lg">
            <img src={restaurant.image} alt={restaurant.name} className="rounded-t-lg w-full" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{restaurant.name}</h3>
              <p className="text-sm text-gray-600">{restaurant.location}</p>
              <p className="text-sm font-semibold">⭐ {restaurant.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
