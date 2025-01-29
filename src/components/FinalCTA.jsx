import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const roleData = {
  Cultivator: {
    defaultText: "Cultivator",
    hoverText: "Are you growing food and want to scale your impact?",
    clickAction: "/signup/cultivator",
    bgColor: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    ringColor: "hover:ring-green-500",
  },
  Producer: {
    defaultText: "Producer",
    hoverText: "Do you craft food products and need a kitchen or resources?",
    clickAction: "/signup/producer",
    bgColor: "bg-yellow-600",
    hoverColor: "hover:bg-yellow-700",
    ringColor: "hover:ring-yellow-500",
  },
  Connector: {
    defaultText: "Connector",
    hoverText: "Do you help bring food to people and communities?",
    clickAction: "/signup/connector",
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    ringColor: "hover:ring-blue-500",
  },
};

const FinalCTA = () => {
  const [hoveredRole, setHoveredRole] = useState(null);
  const history = useHistory();

  const handleMouseEnter = (role) => {
    setHoveredRole(role);
  };

  const handleMouseLeave = () => {
    setHoveredRole(null);
  };

  const handleClick = (role) => {
    history.push(roleData[role].clickAction);
  };

  return (
    <section className="final-cta text-center py-12 bg-gradient-to-r from-green-400 to-blue-500 text-white backdrop-blur-xl bg-opacity-60">
      <h2 className="text-3xl font-bold mb-4">Be Part of the Future of Food</h2>
      <p className="mb-8">Choose how you want to get involved and join us in revolutionizing the food ecosystem.</p>
      <div className="flex justify-center space-x-4">
        {Object.keys(roleData).map((role) => (
          <div
            key={role}
            className={`role-card ${roleData[role].bgColor} ${roleData[role].hoverColor} transform transition-transform duration-300 ease-in-out shadow-lg ring-2 ring-transparent ${roleData[role].ringColor} p-4 rounded-lg cursor-pointer`}
            onMouseEnter={() => handleMouseEnter(role)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(role)}
          >
            <p className="text-lg">
              {hoveredRole === role ? roleData[role].hoverText : roleData[role].defaultText}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinalCTA;
