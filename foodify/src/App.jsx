// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RNavbar from "./components/resturants/Navvar/resnav.jsx";

import Home from './components/homepage/homepage.jsx'; 
import Restaurant from './components/resturants/resturant.jsx'; // Adjust this import path as needed
import FastFoodPage from "./components/fastfood/fastfoodpage.jsx";

// import FastFood from "./pages/FastFood";
// import NonVeg from "./pages/NonVeg";
// import GroupChat from "./pages/GroupChat";

const App = () => {
  return (
    <Router>
      <RNavbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/fast-food" element={<FastFoodPage />} />
        {/* <Route path="/non-veg" element={<NonVeg />} />
        <Route path="/group-chat" element={<GroupChat />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
