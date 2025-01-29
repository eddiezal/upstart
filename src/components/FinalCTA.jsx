import React, { useState } from 'react';
import Button from './ui/Button';

const FinalCTA = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <section className="final-cta text-center py-12 bg-gradient-to-r from-green-400 to-blue-500 text-white backdrop-blur-xl bg-opacity-60">
      <h2 className="text-3xl font-bold mb-4">Be Part of the Future of Food</h2>
      <p className="mb-8">Choose how you want to get involved and join us in revolutionizing the food ecosystem.</p>
      <div className="flex justify-center space-x-4">
        <Button
          className="bg-green-600 hover:bg-green-700 transform transition-transform duration-300 ease-in-out shadow-lg ring-2 ring-transparent hover:ring-green-500"
          onMouseEnter={() => handleMouseEnter('Cultivator')}
          onMouseLeave={handleMouseLeave}
        >
          Cultivator
        </Button>
        <Button
          className="bg-yellow-600 hover:bg-yellow-700 transform transition-transform duration-300 ease-in-out shadow-lg ring-2 ring-transparent hover:ring-yellow-500"
          onMouseEnter={() => handleMouseEnter('Producer')}
          onMouseLeave={handleMouseLeave}
        >
          Producer
        </Button>
        <Button
          className="bg-blue-600 hover:bg-blue-700 transform transition-transform duration-300 ease-in-out shadow-lg ring-2 ring-transparent hover:ring-blue-500"
          onMouseEnter={() => handleMouseEnter('Connector')}
          onMouseLeave={handleMouseLeave}
        >
          Connector
        </Button>
      </div>
      {hoveredButton && (
        <p className="mt-4 text-lg">
          {hoveredButton === 'Cultivator' && 'Help us grow the future of food.'}
          {hoveredButton === 'Producer' && 'Create amazing products with us.'}
          {hoveredButton === 'Connector' && 'Join us in connecting communities.'}
        </p>
      )}
    </section>
  );
};

export default FinalCTA;
