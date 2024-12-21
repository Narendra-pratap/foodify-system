import React from "react";

const UserTestimonials = () => {
  const reviews = [
    { name: "Alice", text: "Amazing food and quick delivery!", rating: 5 },
    { name: "Bob", text: "The best pizza I’ve ever had!", rating: 4 },
    { name: "Charlie", text: "Fast service and great taste!", rating: 5 },
  ];

  return (
    <div className="my-12 text-center px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-semibold mb-6">What Our Customers Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full sm:max-w-sm md:max-w-md"
          >
            <h3 className="font-semibold text-xl">{review.name}</h3>
            <p className="text-yellow-500 text-lg">{"★".repeat(review.rating)}</p>
            <p className="text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTestimonials;
