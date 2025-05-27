import React from 'react';
import Layout from '../components/Layout';
import servicebanner from '../Assets/servicebanner.jpg';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ServiceDetailCard from '../components/ServiceDetailCard';
import CallToAction from '../components/CallToAction';
import { businessRegistrationServices, complianceServices, cfoServices } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
  title="Our Services"
  subtitle= <> "Trusted Chartered Accountants for Audits, <br /> Compliance, and Business Support"</>
  image={servicebanner} //
/>

      
      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700">
              At MPD and Co, we offer end-to-end financial and regulatory services to help businesses stay compliant, 
              efficient, and growth-ready. From business setup to ongoing audits and virtual CFO support, our services 
              are built for impact.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Sections */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16">
            {/* Business Registration */}
            <div>
              <ServiceDetailCard service={businessRegistrationServices} />
            </div>
            
            {/* Compliance Services */}
            <div>
              <ServiceDetailCard service={complianceServices} />
            </div>
            
            {/* CFO Services */}
            <div>
              <ServiceDetailCard service={cfoServices} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Need Help Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              title="Need Help Deciding What You Need?"
              centered={true}
            />
            
            <p className="text-xl text-gray-700 mb-8">
              Our team will guide you through the right service package based on your business goals and stage.
            </p>
            
            <a 
              href="/contact" 
              className="inline-block bg-[#278493] text-white font-medium px-8 py-3 rounded-md hover:bg-[#1c6674] transition-colors shadow-md"
            >
              Contact Us for a Free Consultation
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction
        title="Simplify Your Business Compliance"
        subtitle="Let our experts handle the complexity of financial regulations while you focus on growing your business."
        ctaText="Get Started"
        ctaLink="/contact"
      />
    </Layout>
  );
};

export default ServicesPage;