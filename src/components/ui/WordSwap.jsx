import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';

const phrases = [
  "Farms to Families.",
  "Community-Centered Growth.",
  "Empowering Local Heroes.",
  "Change Starts Here.",
  "Celebrate Local Farmers.",
  "Revive Local Economies.",
  "Think Local. Dream Big.",
  "Act Now. Grow Together.",
  "Live for Tomorrow."
];

const WordSwap = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <span className="text-xl font-bold">{phrases[index]}</span>
    </div>
  );
};

export { WordSwap };

