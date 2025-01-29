import React from 'react';
import Button from './ui/Button';

const FinalCTA = () => {
  return (
    <section className="final-cta text-center py-12 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <h2 className="text-3xl font-bold mb-4">Be Part of the Future of Food</h2>
      <p className="mb-8">Choose how you want to get involved and join us in revolutionizing the food ecosystem.</p>
      <div className="flex justify-center space-x-4">
        <Button className="bg-green-600 hover:bg-green-700">Cultivator</Button>
        <Button className="bg-yellow-600 hover:bg-yellow-700">Producer</Button>
        <Button className="bg-blue-600 hover:bg-blue-700">Connector</Button>
      </div>
    </section>
  );
};

export default FinalCTA;
