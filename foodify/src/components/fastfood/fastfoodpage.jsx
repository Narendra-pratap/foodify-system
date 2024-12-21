import React from "react";
import Header from "./header";
import FastFoodRestaurantList from "./fastfoodresturant.jsx";
import FastFoodCategories from "./FastFoodData.jsx";
import Footer from "./footer";
import FeaturedRestaurants from "./FeatureReasturant.jsx";

const FastFoodPage = () => {
  return (
    <>
      <Header />
      <main>
        <FeaturedRestaurants />
        <FastFoodRestaurantList />
      </main>
      <Footer />
    </>
  );
};

export default FastFoodPage;
