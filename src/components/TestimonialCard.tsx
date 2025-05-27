import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Quote className="h-8 w-8 text-[#278493]/30 mb-4" />
      <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
      <div className="flex items-center">
        <div className="ml-3">
          <p className="font-medium text-gray-900">{testimonial.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;