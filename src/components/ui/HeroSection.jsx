import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cream text-center py-16">
      <h1 className="text-h1 font-playfair text-forest-green">
        Welcome to Upstart Fridge
      </h1>
      <p className="text-bodyLarge text-warm-sand mt-4">
        Reducing waste, nurturing communities.
      </p>
      <button className="mt-6 px-6 py-3 bg-mint-green text-forest-green text-bodyRegular font-bold rounded-xl shadow-lg hover:bg-golden-apricot transition">
        Learn More
      </button>
    </section>
  );
};

export default HeroSection;
