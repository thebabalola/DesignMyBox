import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart, FaCertificate } from 'react-icons/fa';
import { MdDesignServices, MdChair, MdArchitecture, MdBuild, MdQuestionAnswer } from 'react-icons/md';
import { HiOutlineSparkles } from 'react-icons/hi';

const Footer = () => {
  const location = useLocation();

  // Smooth scrolling function
  const handleSmoothScroll = (e, href, isRoute) => {
    if (isRoute) {
      // Handle route navigation normally
      return;
    }
    
    // Check if we're not on the home page, then navigate to home first
    if (location.pathname !== '/' && location.pathname !== '') {
      // Navigate to home page with hash
      window.location.href = `/${href}`;
      return;
    }
    
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 80; // Approximate header height
      const targetPosition = targetElement.offsetTop - headerHeight - 20; // Extra 20px padding
      window.scrollTo({ 
        top: targetPosition, 
        behavior: 'smooth' 
      });
    }
  };

  const footerLinks = [
    { label: 'About Us', path: '#why-choose-us' },
    { label: 'Our Services', path: '#sub-catalog' },
    { label: 'Portfolio', path: '/catalog', isRoute: true },
    { label: 'Process', path: '#design-process' },
    { label: 'Contact', path: '#contact' },
    { label: 'Privacy Policy', path: '/privacy-policy', isRoute: true },
    { label: 'Terms of Service', path: '/terms-of-service', isRoute: true },
  ];

  const services = [
    { name: 'Interior Design', icon: MdDesignServices },
    { name: 'Custom Furniture', icon: MdChair },
    { name: 'Space Planning', icon: MdArchitecture },
    { name: 'Renovations', icon: MdBuild },
    { name: 'Consultations', icon: MdQuestionAnswer },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'HUB 17, 17 Jibowu Street, Yaba, Lagos' },
    { icon: FaPhone, text: '08121223631 | 09096819846' },
    { icon: FaEnvelope, text: 'hello@designmybox.com.ng', isEmail: true },
  ];

  return (
  <>
    <footer className="bg-forest-night text-ivory-mist relative overflow-hidden">
      {/* Top separator line */}
      <div className="w-full flex justify-center py-6">
        <div className="w-[70%] h-px bg-gradient-to-r from-transparent via-antique-gold to-transparent opacity-60"></div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-32 h-32 border border-antique-gold rounded-full transform rotate-45"></div>
        <div className="absolute top-20 right-16 w-24 h-24 border border-olive-slate rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-16 left-1/4 w-20 h-20 border border-antique-gold transform rotate-12"></div>
        <div className="absolute bottom-8 right-8 w-28 h-28 border border-olive-slate rounded-full"></div>
        <HiOutlineSparkles className="absolute top-12 right-1/3 text-4xl text-antique-gold opacity-20" />
        <HiOutlineSparkles className="absolute bottom-20 left-16 text-3xl text-olive-slate opacity-20" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="group">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-antique-gold flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
                {/* Design My Box Logo */}
                <img 
                  src="/DMB-logo.png" 
                  alt="Design My Box Logo" 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded object-contain"
                />
                Design My Box
              </h3>
              <p className="text-sm lg:text-base text-ivory-mist/80 mb-4 leading-relaxed">
                Where Your Story Deserves a Space That Shines
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-ivory-mist/70 hover:text-antique-gold transition-colors duration-300">
                  <FaHeart className="text-antique-gold animate-pulse" />
                  <span>© 2025 Design My Box. All rights reserved.</span>
                </div>
                <div className="flex items-center gap-2 text-ivory-mist/70 hover:text-antique-gold transition-colors duration-300">
                  <FaCertificate className="text-olive-slate" />
                  <span>CAC Registration: RN 3501629</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up">
            <h3 className="text-xl font-bold mb-6 text-antique-gold relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-antique-gold transform origin-left transition-transform duration-300 hover:scale-x-150"></div>
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label} className="transform transition-all duration-300 hover:translate-x-2">
                  {link.isRoute ? (
                    <Link
                      to={link.path}
                      className="text-sm lg:text-base text-ivory-mist/80 hover:text-antique-gold transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-olive-slate rounded-full group-hover:bg-antique-gold group-hover:scale-150 transition-all duration-300"></span>
                      <span className="group-hover:font-medium">{link.label}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={(e) => handleSmoothScroll(e, link.path, link.isRoute)}
                      className="text-sm lg:text-base text-ivory-mist/80 hover:text-antique-gold transition-all duration-300 flex items-center gap-2 group w-full text-left"
                    >
                      <span className="w-1 h-1 bg-olive-slate rounded-full group-hover:bg-antique-gold group-hover:scale-150 transition-all duration-300"></span>
                      <span className="group-hover:font-medium">{link.label}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 text-antique-gold relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-antique-gold transform origin-left transition-transform duration-300 hover:scale-x-150"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <li key={service.name} className="group">
                    <div className="flex items-center gap-3 text-sm lg:text-base text-ivory-mist/80 hover:text-antique-gold transition-all duration-300 transform hover:translate-x-1">
                      <div className="w-8 h-8 border border-olive-slate rounded-lg flex items-center justify-center group-hover:border-antique-gold group-hover:bg-antique-gold/10 transition-all duration-300">
                        <IconComponent className="text-olive-slate group-hover:text-antique-gold transition-colors duration-300" />
                      </div>
                      <span className="group-hover:font-medium">{service.name}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-6 text-antique-gold relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-antique-gold transform origin-left transition-transform duration-300 hover:scale-x-150"></div>
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const ContactContent = contact.isEmail ? (
                  <a 
                    href={`mailto:${contact.text}`}
                    className="flex items-start gap-3 text-sm lg:text-base text-ivory-mist/80 hover:text-antique-gold transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-8 h-8 border border-olive-slate rounded-lg flex items-center justify-center mt-0.5 group-hover:border-antique-gold group-hover:bg-antique-gold/10 transition-all duration-300 flex-shrink-0">
                      <IconComponent className="text-olive-slate group-hover:text-antique-gold transition-colors duration-300" />
                    </div>
                    <span className="leading-relaxed group-hover:font-medium underline decoration-transparent group-hover:decoration-antique-gold transition-all duration-300">{contact.text}</span>
                  </a>
                ) : (
                  <div className="flex items-start gap-3 text-sm lg:text-base text-ivory-mist/80 hover:text-antique-gold transition-all duration-300 group">
                    <div className="w-8 h-8 border border-olive-slate rounded-lg flex items-center justify-center mt-0.5 group-hover:border-antique-gold group-hover:bg-antique-gold/10 transition-all duration-300 flex-shrink-0">
                      <IconComponent className="text-olive-slate group-hover:text-antique-gold transition-colors duration-300" />
                    </div>
                    <span className="leading-relaxed group-hover:font-medium">{contact.text}</span>
                  </div>
                );
                
                return (
                  <div key={index}>
                    {ContactContent}
                  </div>
                );
              })}
            </div>

            {/* Social Media Icons */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-antique-gold">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="[Instagram URL]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 border-2 border-olive-slate rounded-xl flex items-center justify-center hover:border-antique-gold hover:bg-antique-gold/10 hover:shadow-lg hover:shadow-antique-gold/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                    <FaInstagram className="text-xl text-olive-slate group-hover:text-antique-gold transition-colors duration-300" />
                  </div>
                </a>
                <a 
                  href="[Facebook URL]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 border-2 border-olive-slate rounded-xl flex items-center justify-center hover:border-antique-gold hover:bg-antique-gold/10 hover:shadow-lg hover:shadow-antique-gold/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                    <FaFacebook className="text-xl text-olive-slate group-hover:text-antique-gold transition-colors duration-300" />
                  </div>
                </a>
                <a 
                  href="https://wa.me/2349096819846" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 border-2 border-olive-slate rounded-xl flex items-center justify-center hover:border-antique-gold hover:bg-antique-gold hover:shadow-lg hover:shadow-antique-gold/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                    <FaWhatsapp className="text-xl text-olive-slate group-hover:text-forest-night transition-colors duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-olive-slate/30">
          <div className="text-center">
            <p className="text-sm text-ivory-mist/60 flex items-center justify-center gap-2">
              Made with <FaHeart className="text-antique-gold animate-pulse" /> by Design My Box Team
            </p>
          </div>
        </div>
      </div>
    </footer>

    {/* Return to Top Button */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-antique-gold text-forest-night hover:bg-olive-slate hover:text-antique-gold transition-all duration-300 shadow-lg rounded-full w-12 h-12 flex items-center justify-center animate-fade-in"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </>  
  );
};

export default Footer;