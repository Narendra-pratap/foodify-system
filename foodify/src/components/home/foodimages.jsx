import React from 'react';

const FoodImages = () => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16">
      <img
        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300"
        alt="Food 1"
        className="rounded-lg w-full h-40 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <img
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=300"
        alt="Food 2"
        className="rounded-lg w-full h-40 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <img
        src="https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=300"
        alt="Food 3"
        className="rounded-lg w-full h-40 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default FoodImages;
