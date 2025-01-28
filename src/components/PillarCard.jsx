import React from 'react';
import PropTypes from 'prop-types';

const PillarCard = ({ title, description, icon, theme }) => {
  const themeStyles = {
    sustainability: {
      background: 'linear-gradient(135deg, #C9E4CA, #FAF3E0)',
      texture: 'url(/path/to/sustainability-texture.png)',
    },
    community: {
      background: 'linear-gradient(135deg, #F7B267, #EFE8D8)',
      texture: 'url(/path/to/community-texture.png)',
    },
    innovation: {
      background: 'linear-gradient(135deg, #F9D8A3, #C9E4CA)',
      texture: 'url(/path/to/innovation-texture.png)',
    },
  };

  return (
    <div
      className="pillar-card rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
      style={{
        background: themeStyles[theme].background,
        backgroundImage: themeStyles[theme].texture,
      }}
    >
      <div className="icon-container">
        <img
          src={icon}
          alt={`${title} icon`}
          className="icon transition-transform transform hover:scale-110 hover:rotate-3"
        />
      </div>
      <h2 className="title text-xl font-bold">{title}</h2>
      <p className="description">{description}</p>
      <a
        href="#"
        className="cta-link text-soft-peach hover:text-golden-apricot hover:underline"
      >
        Learn More →
      </a>
    </div>
  );
};

PillarCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['sustainability', 'community', 'innovation'])
    .isRequired,
};

export default PillarCard;
