import React from 'react';
import Layout from '../components/Layout';
import aboutbanner from '../Assets/aboutbanner.jpg'
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import TeamMemberCard from '../components/TeamMemberCard';
import CallToAction from '../components/CallToAction';
import { teamMembers } from '../data/teamData';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
  title="About Us"
  subtitle="Get to know our vision, values, and the team driving MPD and Co."
  image={aboutbanner}
/>

      
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="About Us - MPD and Co"
              centered={true}
            />
            
            <div className="prose prose-lg mx-auto">
              <p>
                At MPD and Co, we're more than just Chartered Accountants - we're your financial partners in growth. 
                Founded by a team of three experienced professionals, our firm is built on trust, integrity, and a 
                shared commitment to excellence.
              </p>
              
              <p>
                With years of combined expertise in auditing, taxation, compliance, and financial advisory, 
                we bring personalized attention to every client, ensuring solutions that are not only accurate 
                but also aligned with your business goals.
              </p>
              
              <p>
                Whether you're a startup, a growing business, or an established enterprise, our strength 
                lies in understanding your needs and delivering end-to-end services that simplify complexity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Meet the Team Behind MPD and Co"
            centered={true}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-xl text-gray-700">
              Together, we deliver the capabilities of a large firm with the dedication of a close-knit team.
            </p>
          </div>
        </div>
      </section>
      
      {/* What Sets Us Apart */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="What Sets Us Apart"
              centered={true}
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#278493] text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">Direct access to senior professionals—no juniors, no handoffs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#278493] text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">Transparent pricing and proactive communication</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#278493] text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">Personalized strategies tailored for your business stage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction
        title="Ready to Work with Our Team?"
        subtitle="Experience the MPD and Co difference with our hands-on approach to financial services."
        ctaText="Get in Touch"
        ctaLink="/contact"
      />
    </Layout>
  );
};

export default AboutPage;