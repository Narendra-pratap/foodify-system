import React from "react";

const HowItWorks = () => {
  return (
    <div className="my-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
      <div className="flex justify-center space-x-8">
        <div className="step">
          <h3 className="text-xl font-semibold">1. Search</h3>
          <p>Find restaurants or dishes near you.</p>
        </div>
        <div className="step">
          <h3 className="text-xl font-semibold">2. Order</h3>
          <p>Choose your favorites and place an order.</p>
        </div>
        <div className="step">
          <h3 className="text-xl font-semibold">3. Enjoy</h3>
          <p>Get your food delivered and enjoy!</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
