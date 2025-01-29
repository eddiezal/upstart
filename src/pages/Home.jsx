import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import phrases from '../constants/phrases';
import PillarCards from '../components/PillarCards';
import sustainability from '../components/assets/icons/sustainability.svg';
import community from '../components/assets/icons/community.svg';
import innovation from '../components/assets/icons/innovation.svg';
import RegionalImpact from '../components/RegionalImpact';
import FloatingCTAButton from '../components/FloatingCTAButton';
import SectionTestimonials from '../components/SectionTestimonials';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('Cultivators');

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        setCurrentSection(section.getAttribute('data-section'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          icon={sustainability}
        />
        <PillarCards
          title="Community"
          description="Building strong, collaborative communities through shared resources."
          icon={community}
        />
        <PillarCards
          title="Innovation"
          description="Driving innovation with cutting-edge technology and ideas."
          icon={innovation}
        />
      </div>
      <div className="section" data-section="Cultivators">
        <h2 className="text-2xl font-bold">Cultivators</h2>
        <p>Got land? Growing something amazing? Let’s connect!</p>
        <SectionTestimonials section="Cultivators" />
      </div>
      <div className="section" data-section="Producers">
        <h2 className="text-2xl font-bold">Producers</h2>
        <p>Turning fresh ingredients into something special? We want to help!</p>
        <SectionTestimonials section="Producers" />
      </div>
      <div className="section" data-section="Connectors">
        <h2 className="text-2xl font-bold">Connectors</h2>
        <p>Love bringing food to people? Let’s do it together!</p>
        <SectionTestimonials section="Connectors" />
      </div>
      <FinalCTA />
      <FloatingCTAButton currentSection={currentSection} />
      <RegionalImpact />
    </div>
  );
}
