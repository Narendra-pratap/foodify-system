import React from "react";
import Data from "./data"; // Adjust the path to match your project structure
import restaurantData from "../../api/ResturantData"; // Ensure the correct path

function Restaurant() {
  return (
    <>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {restaurantData.map((card) => (
        <Data key={card.id} {...card} />
      ))}
    </ul>
    </>
  );
}

export default Restaurant;
