import React, { useState, useEffect } from 'react';
import './WordSwap.css';

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
    <div className="word-swap">
      <span className="word-swap-text">{phrases[index]}</span>
    </div>
  );
};

export default WordSwap;
