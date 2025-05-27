import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="logo.png" 
        alt="MPD AND CO" 
        className="h-16"
      />
    </div>
  );
};

export default Logo;