import React from 'react';

interface CallToActionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink 
}) => {
  return (
    <section className="bg-[#278493] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-100 mb-8">{subtitle}</p>
          <a 
            href={ctaLink} 
            className="inline-block bg-white text-[#278493] font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-colors shadow-md"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;