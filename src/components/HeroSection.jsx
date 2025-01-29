import React from 'react';
import PropTypes from 'prop-types';
import WordSwap from './WordSwap';
import phrases from '../constants/phrases';
import Button from './ui/Button';

const HeroSection = ({ title, subtitle, phrases }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen hero-section text-center">
      <h1 className="text-4xl font-bold text-[#F7B267]">{title}</h1>
      <p className="text-2xl text-[#F7B267] mt-4">{subtitle}</p>
      <WordSwap phrases={phrases} aria-live="polite" />
      <Button className="mt-8">Join the Movement</Button>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  phrases: PropTypes.arrayOf(PropTypes.string),
};

HeroSection.defaultProps = {
  title: 'Welcome to Upstart Fridge',
  subtitle: 'Reducing waste, nurturing communities',
  phrases: [
    "Farms to Families.",
    "Community-Centered Growth.",
    "Empowering Local Heroes.",
    "Change Starts Here.",
    "Celebrate Local Farmers.",
    "Revive Local Economies.",
    "Think Local. Dream Big.",
    "Act Now. Grow Together.",
    "Live for Tomorrow."
  ],
};

export default HeroSection;
