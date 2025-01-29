import React from 'react';
import PropTypes from 'prop-types';
import farmIcon from './assets/icons/farm.svg';
import marketStandIcon from './assets/icons/market-stand.svg';
import communityIcon from './assets/icons/community.svg';
import sustainabilityIcon from './assets/icons/sustainability.svg';
import foodDistributionIcon from './assets/icons/food-distribution.svg';
import innovationIcon from './assets/icons/innovation.svg';

const iconMap = {
  farm: farmIcon,
  marketStand: marketStandIcon,
  community: communityIcon,
  sustainability: sustainabilityIcon,
  foodDistribution: foodDistributionIcon,
  innovation: innovationIcon,
};

const PillarCards = ({ title, description, iconName }) => {
  const icon = iconMap[iconName];

  return (
    <div className="pillar-card rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-90">
      <div className="icon-container py-4 px-6">
        <img src={icon} alt={`${title} icon`} className="icon h-16 w-16 hover:animate-spin" />
      </div>
      <div className="content text-center flex-col">
        <h3 className="title text-xl font-bold mt-3">{title}</h3>
        <p className="description">{description}</p>
        <a href="#" className="cta-link text-soft-peach hover:text-golden-apricot hover:underline">Learn More →</a>
      </div>
    </div>
  );
};

PillarCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
};

export default PillarCards;
