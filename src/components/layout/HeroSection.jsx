import React from 'react';
import WordSwap from '../ui/WordSwap';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-[#F7B267]">
        Welcome to Upstart Fridge
      </h1>
      <WordSwap
        phrases={['Reducing waste', 'Nurturing communities', 'Sustainable living']}
        className="text-2xl text-center text-[#C9E4CA] mt-4"
      />
    </section>
  );
};

export default HeroSection;
