import React from "react";
import HeroSection from "./herosection";
import FoodCategories from "./foodCatogry";
import FeaturedRestaurants from "./featureResturant";
import SpecialOffers from "./specialOffer";
import UserTestimonials from "./usersTestinomal";
import HowItWorks from "./Howitwork";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FoodCategories />
      <FeaturedRestaurants />
      <SpecialOffers />
      <UserTestimonials />
      <HowItWorks />
    </div>
  );
};

export default Home;
