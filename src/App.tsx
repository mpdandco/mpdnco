import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  // Simple client-side routing
  const path = window.location.pathname;

  // Add animation styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Update page title
  React.useEffect(() => {
    let title = 'MPD and Co - Chartered Accountants';
    
    if (path === '/about') {
      title = 'About Us | MPD and Co';
    } else if (path === '/services') {
      title = 'Our Services | MPD and Co';
    } else if (path === '/contact') {
      title = 'Contact Us | MPD and Co';
    }
    
    document.title = title;
  }, [path]);

  // Render the appropriate page based on the URL path
  switch (path) {
    case '/about':
      return <AboutPage />;
    case '/services':
      return <ServicesPage />;
    case '/contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

export default App;