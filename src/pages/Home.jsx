import React from 'react';
import PillarCard from '../components/ui/PillarCard'; // Ensure the path is correct


function Home() {
  const pillars = [
    {
      icon: '🌿', // Example icons, replace as needed
      title: 'Sustainability',
      description: 'Building a greener future with eco-friendly farming and distribution practices.',
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Connecting local farmers, producers, and families for a thriving ecosystem.',
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Driving forward with cutting-edge solutions to reimagine food systems.',
    },
  ];

  return (
    <div className="p-8 bg-light-mint min-h-screen">
      <h1 className="text-h1 font-playfair text-forest-green mb-8 text-center">
        Our Aspirational Goals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <PillarCard
            key={index}
            icon={pillar.icon}
            title={pillar.title}
            description={pillar.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

