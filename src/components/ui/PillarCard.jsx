import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import sustainabilityIcon from '../../assets/icons/sustainability.svg';
import communityIcon from '../../assets/icons/community.svg';
import innovationIcon from '../../assets/icons/innovation.svg';

const PillarCard = React.memo(({ iconName, title, description }) => {
  const [activeRole, setActiveRole] = useState('Cultivator');

  const roles = useMemo(() => ({
    Cultivator: {
      title: 'Cultivator',
      description: 'Are you growing food and want to scale your impact?',
      icon: sustainabilityIcon,
    },
    Crafter: {
      title: 'Crafter',
      description: 'Do you craft food products and need a kitchen or resources?',
      icon: communityIcon,
    },
    Connector: {
      title: 'Connector',
      description: 'Do you help bring food to people and communities?',
      icon: innovationIcon,
    },
  }), []);

  const handleRoleClick = useCallback((role) => {
    setActiveRole(role);
  }, []);

  return (
    <motion.div
      className="shadow-lg rounded-xl p-6 bg-cream"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-4">
        {Object.keys(roles).map((role) => (
          <button
            key={role}
            className={`px-4 py-2 mx-2 rounded ${
              activeRole === role ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleRoleClick(role)}
          >
            {roles[role].title}
          </button>
        ))}
      </div>
      <motion.div
        key={activeRole}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <img src={roles[activeRole].icon} alt={roles[activeRole].title} className="h-16 mx-auto mb-4" />
        <h3 className="text-h3 font-playfair text-forest-green">{roles[activeRole].title}</h3>
        <p className="text-bodyRegular text-warm-sand mt-2">{roles[activeRole].description}</p>
      </motion.div>
    </motion.div>
  );
});

export default PillarCard;
