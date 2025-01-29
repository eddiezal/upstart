import React from 'react';
import { Parallax } from 'react-parallax';
import farmIcon from './assets/icons/farm.svg';
import marketStandIcon from './assets/icons/market-stand.svg';
import communityIcon from './assets/icons/community.svg';
import sustainabilityIcon from './assets/icons/sustainability.svg';
import foodDistributionIcon from './assets/icons/food-distribution.svg';
import innovationIcon from './assets/icons/innovation.svg';
import Button from './ui/Button';

const RegionalImpact = () => {
  return (
    <section className="relative py-16 bg-white">
      <Parallax
        bgImage="/path/to/contour-line-background.svg"
        strength={200}
        className="absolute inset-0 opacity-20"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            The Future of Food is Local, and It Starts Here
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our mission is to build a resilient food network where farmers, markets, and families thrive together.
          </p>
          <Button className="mt-8">Be Part of the Movement</Button>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src={farmIcon} alt="Farm Icon" className="h-16 w-16 max-w-80 max-h-80 hover:transform hover:translateY(-4px) hover:shadow-md hover:shadow-gray-500" aria-label="Farm Icon" />
            <p className="mt-2 text-center text-gray-700">Represents local farmers & sustainable sourcing.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={marketStandIcon} alt="Market Stand Icon" className="h-16 w-16 max-w-80 max-h-80 hover:transform hover:translateY(-4px) hover:shadow-md hover:shadow-gray-500" aria-label="Market Stand Icon" />
            <p className="mt-2 text-center text-gray-700">Symbolizes farmers' markets & small businesses.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={communityIcon} alt="Community Icon" className="h-16 w-16 max-w-80 max-h-80 hover:transform hover:translateY(-4px) hover:shadow-md hover:shadow-gray-500" aria-label="Community Icon" />
            <p className="mt-2 text-center text-gray-700">Represents partnerships & community-building.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={sustainabilityIcon} alt="Sustainability Icon" className="h-16 w-16 max-w-80 max-h-80 hover:transform hover:translateY(-4px) hover:shadow-md hover:shadow-gray-500" aria-label="Sustainability Icon" />
            <p className="mt-2 text-center text-gray-700">Highlights eco-friendly food systems.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={foodDistributionIcon} alt="Food Distribution Icon" className="h-16 w-16 max-w-80 max-h-80 hover:transform hover:translateY(-4px) hover:shadow-md hover:shadow-gray-500" aria-label="Food Distribution Icon" />
            <p className="mt-2 text-center text-gray-700">Represents logistics & accessibility.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={innovationIcon} alt="Innovation Icon" className="h-16 w-16 max-w-80 max-h-80 hover:transform hover:translateY(-4px) hover:shadow-md hover:shadow-gray-500" aria-label="Innovation Icon" />
            <p className="mt-2 text-center text-gray-700">Symbolizes Upstart’s impact-driven approach.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalImpact;
