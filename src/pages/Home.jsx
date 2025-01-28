import React from 'react';
import HeroSection from '../components/HeroSection';
import phrases from '../constants/phrases';
import PillarCard from '../components/PillarCard';
import sustainabilityIcon from '../components/assets/sustainability-icon.svg';
import communityIcon from '../components/assets/community-icon.svg';
import innovationIcon from '../components/assets/innovation-icon.svg';

export default function Home() {
  return (
    <div className="p-8">
      <HeroSection
        title="Welcome to Upstart Fridge"
        subtitle="Reducing waste, nurturing communities"
        phrases={phrases}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <PillarCard
          title="Sustainability"
          description="Promoting eco-friendly farming practices and reducing waste."
          icon={sustainabilityIcon}
          theme="sustainability"
        />
        <PillarCard
          title="Community"
          description="Building strong, supportive communities through collaboration."
          icon={communityIcon}
          theme="community"
        />
        <PillarCard
          title="Innovation"
          description="Driving innovation with cutting-edge technology and ideas."
          icon={innovationIcon}
          theme="innovation"
        />
      </div>
    </div>
  );
}
