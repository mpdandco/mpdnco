import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`text-lg ${
            light ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;