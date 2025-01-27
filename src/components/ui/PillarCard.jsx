import React from 'react';

const PillarCard = ({ icon, title, description }) => {
    return (
      <div className="bg-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <img src={icon} alt={title} className="w-12 h-12" />
        </div>
        <h3 className="text-forest-green font-playfair font-bold text-xl tracking-wide text-center">
          {title}
        </h3>
        <p className="text-warm-sand font-roboto text-bodyRegular mt-4 text-center">
          {description}
        </p>
      </div>
    );
  };
  
  
export default PillarCard;

