import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Social */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="MPD AND CO" 
                className="h-16 brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Empowering businesses with expert financial advice, regulatory compliance, and audit excellence across India and beyond.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/mpd-and-co/"
                className="text-gray-300 hover:text-[#278493] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Business Registration</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Compliance Services</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Audit & Assurance</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">CFO Advisory</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#278493] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  MPD and Co – Chartered Accountants, No 16/1-2, 19th B Cross, Elephant Rock Road, Jayanagar 3rd Block, Bengaluru-560011
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#278493] flex-shrink-0" />
                <span className="text-gray-300 whitespace-nowrap space-x-2">
                  <span className="inline-block">+91 81231 74701 |</span>
                  <span className="inline-block">+91 87225 45401 |</span>
                  <span className="inline-block">+91 81231 91635</span>
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#278493] flex-shrink-0" />
                <a href="mailto:audit@mpdandco.com" className="text-gray-300 hover:text-white transition-colors">
                  audit@mpdandco.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MPD and Co. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
