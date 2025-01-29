import React from 'react';
import farmIcon from '../../assets/icons/farm.svg';
import marketStandIcon from '../../assets/icons/market-stand.svg';
import communityIcon from '../../assets/icons/community.svg';
import sustainabilityIcon from '../../assets/icons/sustainability.svg';
import foodDistributionIcon from '../../assets/icons/food-distribution.svg';
import innovationIcon from '../../assets/icons/innovation.svg';

const iconMap = {
  farm: farmIcon,
  marketStand: marketStandIcon,
  community: communityIcon,
  sustainability: sustainabilityIcon,
  foodDistribution: foodDistributionIcon,
  innovation: innovationIcon,
};

const PillarCard = ({ iconName, title, description }) => {
  const icon = iconMap[iconName];

  if (!icon) {
    console.warn(`Icon "${iconName}" not found in Icons object.`);
    return null; // Avoid rendering the card if the icon is missing
  }

  return (
    <div
      className="shadow-lg rounded-xl p-6 bg-cream transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-90"
      style={{
        backgroundImage: `url(/src/assets/icons/${iconName}.svg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '64px',
      }}
    >
      <img src={icon} alt={title} className="h-16 mx-auto mb-4 hover:animate-spin" />
      <h3 className="text-h3 font-playfair text-forest-green">{title}</h3>
      <p className="text-bodyRegular text-warm-sand mt-2">{description}</p>
    </div>
  );
};

export default PillarCard;
