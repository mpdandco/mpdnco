import React from 'react';
import { ExternalLink, ClipboardCheck, PieChart } from 'lucide-react';
import Layout from '../components/Layout';
import homebanner from '../Assets/homebanner.jpg'
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CallToAction from '../components/CallToAction';
import { coreServices } from '../data/servicesData';
import { testimonials } from '../data/testimonialData';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
  title="Chartered Accountants You Can Trust"
  subtitle="Empowering businesses with expert financial advice, regulatory compliance, and audit excellence across India and beyond."
  ctaText="Explore Our Services"
  ctaLink="/services"
  image={homebanner} //
/>

      
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="order-2 md:order-1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About MPD and Co</h2>
              <p className="text-gray-700 mb-6">
                At MPD and Co, we are a team of experienced Chartered Accountants dedicated to helping businesses navigate the complex world of finance, taxation, and compliance. From startups to established enterprises, we deliver customized solutions that ensure growth, accuracy, and peace of mind.
              </p>
              <p className="text-gray-700 mb-8">
                With years of combined experience, our approach blends technical expertise with practical insight whether it's managing your audits, handling GST filings, or setting up your new venture.
              </p>
              <a 
                href="/about" 
                className="inline-flex items-center text-[#278493] font-medium hover:underline"
              >
                Learn more
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div 
              className="order-1 md:order-2"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img 
                src="src/Assets/abouthome.png" 
                alt="MPD and Co Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="What We Do Best"
            centered={true}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={getServiceIcon(index)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/services" 
              className="inline-flex items-center text-[#278493] font-medium hover:underline"
            >
              View All Services
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Client Testimonials"
            centered={true}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction
        title="Let's Streamline Your Finances"
        subtitle="Looking for a reliable partner to manage your accounting, audits, and compliance? Get in touch today and experience financial clarity."
        ctaText="Contact Us"
        ctaLink="/contact"
      />
    </Layout>
  );
};

// Helper function to get icons for services
function getServiceIcon(index: number) {
  switch (index) {
    case 0:
      return <ClipboardCheck className="h-10 w-10" />;
    case 1:
      return <PieChart className="h-10 w-10" />;
    case 2:
      return <ExternalLink className="h-10 w-10" />;
    default:
      return <ClipboardCheck className="h-10 w-10" />;
  }
}

export default HomePage;