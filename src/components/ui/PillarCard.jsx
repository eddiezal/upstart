import React from 'react';
import Icons from '../../assets/icons/icons'; // Adjust the relative path as necessary

const PillarCard = ({ iconName, title, description }) => {
  const icon = Icons[iconName];

  if (!icon) {
    console.warn(`Icon "${iconName}" not found in Icons object.`);
    return null; // Avoid rendering the card if the icon is missing
  }

  return (
    <div
      className="shadow-lg rounded-xl p-6 bg-cream"
      style={{
        backgroundImage: `url(/src/assets/icons/${iconName}.svg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '60px',
      }}
    >
      <img src={icon} alt={title} className="h-16 mx-auto mb-4" />
      <h3 className="text-h3 font-playfair text-forest-green">{title}</h3>
      <p className="text-bodyRegular text-warm-sand mt-2">{description}</p>
    </div>
  );
};

export default PillarCard;
