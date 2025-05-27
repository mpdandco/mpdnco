import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailCardProps {
  service: Service;
}

const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-700 mb-6">{service.description}</p>
      
      <ul className="space-y-4">
        {service.items.map((item, index) => (
          <li key={index} className="flex">
            <ChevronRight className="h-5 w-5 text-[#278493] flex-shrink-0 mt-0.5" />
            <span className="ml-2 text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetailCard;