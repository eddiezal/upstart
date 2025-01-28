import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WordSwap = ({ phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases]);

  return (
    <div className={`word-swap ${fade ? 'opacity-100' : 'opacity-0'} mt-4`}>
      <span className="text-[#C9E4CA]">{phrases[currentPhraseIndex]}</span>
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
