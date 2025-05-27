import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Layout from '../components/Layout';
import contactbanner from '../Assets/contactbanner.jpg'
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle= <> "Have a question, need expert advice, or want to get started? <br /> Let's connect." </>
        image={contactbanner}
      />
      
      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <p className="text-xl text-gray-700">
              Whether you're looking to register your business, file your taxes, or need end-to-end financial compliance—we're just one message away. Reach out to our expert team and we'll get back to you promptly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
  <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Office</h3>
  
  <ul className="space-y-6 mb-6">
    <li className="flex items-start">
      <MapPin className="h-6 w-6 text-[#278493] flex-shrink-0 mt-1" />
      <div className="ml-4">
        <p className="font-semibold text-gray-900">MPD and Co – Chartered Accountants</p>
        <p className="text-gray-700 mt-1">
          No 16/1-2, 19th B Cross, Elephant Rock Road, Jayanagar 3rd Block, Bengaluru - 560011
        </p>
      </div>
    </li>
    <li className="flex items-start">
      <Phone className="h-6 w-6 text-[#278493] flex-shrink-0 mt-0.5" />
      <div className="ml-4">
        <p className="font-semibold text-gray-900">Phone</p>
        <p className="text-gray-700 mt-1">+91 81231 74701 | +91 87225 45401 | +91 81231 91635</p>
      </div>
    </li>
    <li className="flex items-start">
      <Mail className="h-6 w-6 text-[#278493] flex-shrink-0 mt-0.5" />
      <div className="ml-4">
        <p className="font-semibold text-gray-900">Email</p>
        <a href="mailto:audit@mpdandco.in" className="text-[#278493] hover:underline mt-1">audit@mpdandco.in</a>
      </div>
    </li>
    <li className="flex items-start">
      <Clock className="h-6 w-6 text-[#278493] flex-shrink-0 mt-0.5" />
      <div className="ml-4">
        <p className="font-semibold text-gray-900">Office Hours</p>
        <p className="text-gray-700 mt-1">Mon - Sat, 9:30 AM to 8:00 PM</p>
      </div>
    </li>
  </ul>

  {/* Google Map below office details */}
  <div className="rounded-md overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357.1988021827613!2d77.58165842166315!3d12.934658481247533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e8e5aa51405357%3A0x9adb2495511e50c1!2sMPD%20and%20Co!5e0!3m2!1sen!2sin!4v1748341710225!5m2!1sen!2sin"
      width="100%"
      height="286"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="MPD and Co Location"
    />
  </div>
</div>


            </div>
          </div>
          
          <div className="max-w-xl mx-auto mt-16 text-center">
            <p className="text-gray-700">
              <strong>Note on Privacy:</strong> Your information is safe with us. We respect your privacy and never share your data with third parties.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;