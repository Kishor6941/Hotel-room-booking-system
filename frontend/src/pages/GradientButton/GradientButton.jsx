import React, { useState } from 'react';
import './GradientButton.scss'; // Import your CSS file

function GradientButton({ children, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="gradient-button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? 'linear-gradient(135deg, #6a11cb, #2575fc)'
          : 'linear-gradient(135deg, #2575fc, #6a11cb)',
      }}
    >
      {children}
    </button>
  );
}

export default GradientButton;