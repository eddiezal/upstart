import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

const WordSwap = React.memo(({ phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const memoizedPhrases = useMemo(() => phrases, [phrases]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % memoizedPhrases.length);
        setFade(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [memoizedPhrases]);

  return (
    <div className={`word-swap ${fade ? 'opacity-100' : 'opacity-0'} mt-4`}>
      <span className="text-[#C9E4CA]">{memoizedPhrases[currentPhraseIndex]}</span>
    </div>
  );
});

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
