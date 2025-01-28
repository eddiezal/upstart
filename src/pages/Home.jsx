import React from 'react';
import HeroSection from '../components/HeroSection';
import phrases from '../constants/phrases';
import ImpactMetrics from '../components/ImpactMetrics';

export default function Home() {
  return (
    <div className="p-8">
      <HeroSection
        title="Welcome to Upstart Fridge"
        subtitle="Reducing waste, nurturing communities"
        phrases={phrases}
      />
      <ImpactMetrics />
    </div>
  );
}
