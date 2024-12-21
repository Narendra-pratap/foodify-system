import React, { useState, useEffect } from "react";

// Array of image URLs for delicious dishes
const images = [
  "https://images.unsplash.com/photo-1483918793747-5adbf82956c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1677706394278-b7cba07ba72a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1464306208223-e0b4495a5553?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const DishCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Carousel Image */}
      <img
        src={images[currentImageIndex]}
        alt="Delicious dish"
        className="w-full h-96 object-cover rounded-xl"
      />
      
      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-white text-3xl font-bold">Delicious Dishes</h2>
          <p className="text-white text-xl mt-2 italic">Taste the Best, Forget the Rest!</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black opacity-50 p-2 rounded-full hover:bg-gray-700"
      >
        &#8592; {/* Left Arrow */}
      </button>
      <button
        onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black opacity-50 p-2 rounded-full hover:bg-gray-700"
      >
        &#8594; {/* Right Arrow */}
      </button>

      {/* Search Bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center bg-white rounded-full shadow-lg p-2 w-3/4 max-w-lg">
        <input
          type="text"
          placeholder="Search delicious dishes..."
          className="w-full p-2 text-lg rounded-l-full focus:outline-none"
        />
        <button className="bg-orange-500 text-white p-2 rounded-r-full hover:bg-orange-600">
          Search
        </button>
      </div>
    </div>
  );
};

export default DishCarousel;
