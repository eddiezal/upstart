import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import WordSwap from './WordSwap';
import phrases from '../constants/phrases';
import Button from './ui/Button';

const HeroSection = ({ title, subtitle, phrases }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <motion.h1
        className="text-4xl font-bold text-[#F7B267]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-2xl text-[#F7B267] mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
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
