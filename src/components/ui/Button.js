import React from 'react';

const Button = ({ children, onClick, className, ariaLabel }) => {
  const handleClick = (e) => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - e.target.offsetLeft}px`;
    ripple.style.top = `${e.clientY - e.target.offsetTop}px`;
    e.target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <button
      className={`px-4 py-2 bg-[#F7B267] text-white rounded cta-button ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(e);
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
