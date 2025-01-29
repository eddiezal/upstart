import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FloatingCTAButton = ({ currentSection }) => {
  const [ctaText, setCtaText] = useState('Grow With Us');

  useEffect(() => {
    switch (currentSection) {
      case 'Cultivators':
        setCtaText('Grow With Us');
        break;
      case 'Producers':
        setCtaText('Create With Us');
        break;
      case 'Connectors':
        setCtaText('Move With Us');
        break;
      default:
        setCtaText('Grow With Us');
    }
  }, [currentSection]);

  return (
    <button
      className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600"
      aria-label={ctaText}
    >
      {ctaText}
    </button>
  );
};

FloatingCTAButton.propTypes = {
  currentSection: PropTypes.string.isRequired,
};

export default FloatingCTAButton;
