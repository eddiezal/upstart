import React from 'react';
import HeroSection from '../components/HeroSection';
import phrases from '../constants/phrases';
import PillarCards from '../components/PillarCards';
import sustainabilityIcon from '../../public/icons/sustainability.svg';
import communityIcon from '../../public/icons/community.svg';
import innovationIcon from '../../public/icons/innovation.svg';

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
          icon={sustainabilityIcon}
        />
        <PillarCards
          title="Community"
          description="Building strong, collaborative communities through shared resources."
          icon={communityIcon}
        />
        <PillarCards
          title="Innovation"
          description="Driving innovation with cutting-edge technology and ideas."
          icon={innovationIcon}
        />
      </div>
    </div>
  );
}
