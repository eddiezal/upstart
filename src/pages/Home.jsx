// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import PillarCard from '../components/ui/PillarCard';
import Icons from '../assets/icons/icons'; // Import centralized icons
import WordSwap from '../components/ui/WordSwap';

const { LeafIcon, HandshakeIcon, RocketIcon } = Icons;
  const Home = () => {
    return (
      <>
        <HeroSection />
        <section className="text-center py-16 bg-cream">
          <h2 className="text-h1 font-playfair text-forest-green mb-8">
          <WordSwap />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard
              Icon={LeafIcon}
              title="Sustainability"
              description="Building a greener future with eco-friendly farming and distribution practices."
            />
            <PillarCard
              Icon={HandshakeIcon}
              title="Community"
              description="Connecting local farmers, producers, and families for a thriving ecosystem."
            />
            <PillarCard
              Icon={RocketIcon}
              title="Innovation"
              description="Driving forward with cutting-edge solutions to reimagine food systems."
            />
          </div>
        </section>
      </>
    );
  };

  export default Home;
  
 
  