import React from 'react';
import PropTypes from 'prop-types';

const MetricCard = ({ icon, title, value, description }) => {
  return (
    <div className="shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12 text-mint-green hover:animate-bounce" />
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-3xl font-bold mb-2">{value}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

MetricCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MetricCard;
