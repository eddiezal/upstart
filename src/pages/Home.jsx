import React from 'react';
import HeroSection from '../components/HeroSection';
import phrases from '../constants/phrases';
import PillarCards from '../components/PillarCards';
import sustainability from '../components/assets/icons/sustainability.svg';
import community from '../components/assets/icons/community.svg';
import innovation from '../components/assets/icons/innovation.svg';
import RegionalImpact from '../components/RegionalImpact';

export default function Home() {
  return (
    <div className="p-8">
      <HeroSection
        title="Welcome to Upstart Fridge"
        subtitle="Reducing waste, nurturing communities"
        phrases={phrases}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <PillarCards
          title="Sustainability"
          description="Promoting eco-friendly farming and sustainable practices."
          icon={sustainability}  // Fixed reference
        />
        <PillarCards
          title="Community"
          description="Building strong, collaborative communities through shared resources."
          icon={community}  // Fixed reference
        />
        <PillarCards
          title="Innovation"
          description="Driving innovation with cutting-edge technology and ideas."
          icon={innovation}  // Fixed reference
        />
      </div>
      <RegionalImpact />
    </div>
  );
}
