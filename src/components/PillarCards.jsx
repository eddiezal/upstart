import React from 'react';
import PropTypes from 'prop-types';

const PillarCards = ({ title, description, icon }) => {
  return (
    <div className="pillar-card rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-90">
      <div className="icon-container">
        <img src={icon} alt={`${title} icon`} className="icon hover:animate-spin" />
      </div>
      <div className="content">
        <h3 className="title text-xl font-bold">{title}</h3>
        <p className="description">{description}</p>
        <a href="#" className="cta-link text-soft-peach hover:text-golden-apricot hover:underline">Learn More →</a>
      </div>
    </div>
  );
};

PillarCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PillarCards;
