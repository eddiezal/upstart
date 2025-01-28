import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WordSwap = ({ phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases]);

  return (
    <div className="text-[#C9E4CA] mt-4">
      {phrases[currentPhraseIndex]}
    </div>
  );
};

WordSwap.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string),
};

WordSwap.defaultProps = {
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

export default WordSwap;
