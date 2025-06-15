import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiPhone } from 'react-icons/hi';
import { FaHome, FaUser, FaCog, FaBook, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const headerRef = useRef(null);
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
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;
      const targetPosition = targetElement.offsetTop - headerHeight - 20; // Extra 20px padding
      window.scrollTo({ 
        top: targetPosition, 
        behavior: 'smooth' 
      });
      setMobileMenuOpen(false);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Active section detection (only run on home page)
  useEffect(() => {
    // Only detect sections when on home page
    if (location.pathname !== '/' && location.pathname !== '') {
      setActiveSection('');
      return;
    }

    const sections = ['home', 'whychooseus', 'sub-catalog', 'contact'];
    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/', icon: FaHome, isRoute: true },
    { label: 'About Us', href: '#why-choose-us', icon: FaUser },
    { label: 'Services', href: '#sub-catalog', icon: FaCog },
    { label: 'Catalog', href: '/catalog', icon: FaBook, isRoute: true },
    { label: 'Contact', href: '#contact', icon: FaEnvelope },
  ];

  const isActiveLink = (href, isRoute) => {
    if (isRoute) {
      // For routes, check exact path match
      if (href === '/') {
        return location.pathname === '/' || location.pathname === '';
      }
      return location.pathname === href;
    }
    // For sections, only check if we're on the home page and the section is active
    if (location.pathname !== '/' && location.pathname !== '') {
      return false; // Don't highlight sections when not on home page
    }
    return activeSection === href.substring(1);
  };

  return (
    <>
      {/* Background overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-obsidian-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-obsidian-black/95 backdrop-blur-md shadow-lg shadow-obsidian-black/20' 
          : 'bg-obsidian-black shadow-sm'
      }`} ref={headerRef}>
        {/* Decorative top border */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-antique-gold to-transparent opacity-60"></div>
        
        <div className="container mx-auto px-4 py-4 lg:py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="group relative transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src="/DMB-logo.png" 
                  alt="Design My Box Logo" 
                  className="h-10 lg:h-12 rounded transition-all duration-300 group-hover:brightness-110" 
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-antique-gold blur-sm"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = isActiveLink(link.href, link.isRoute);
                
                return link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-antique-gold bg-antique-gold/10' 
                        : 'text-ivory-mist hover:text-antique-gold hover:bg-olive-slate/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                        isActive 
                          ? 'text-antique-gold' 
                          : 'text-olive-slate group-hover:text-antique-gold'
                      }`} />
                      <span className="font-medium text-sm lg:text-base">{link.label}</span>
                    </div>
                    
                    {/* Active indicator */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-antique-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></div>
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={(e) => handleSmoothScroll(e, link.href, link.isRoute)}
                    className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-antique-gold bg-antique-gold/10' 
                        : 'text-ivory-mist hover:text-antique-gold hover:bg-olive-slate/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                        isActive 
                          ? 'text-antique-gold' 
                          : 'text-olive-slate group-hover:text-antique-gold'
                      }`} />
                      <span className="font-medium text-sm lg:text-base">{link.label}</span>
                    </div>
                    
                    {/* Active indicator */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-antique-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></div>
                  </button>
                );
              })}
            </nav>

            {/* Right side - Phone & Mobile Menu */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              {/* Phone number */}
              <a 
                href="tel:08121235631" 
                className="group hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg border border-antique-gold/30 text-antique-gold hover:bg-antique-gold hover:text-obsidian-black transition-all duration-300"
              >
                <HiPhone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-medium text-sm">0812 123 5631</span>
              </a>

              {/* Mobile phone icon only */}
              <a 
                href="tel:08121235631" 
                className="sm:hidden p-2 rounded-lg border border-antique-gold/30 text-antique-gold hover:bg-antique-gold hover:text-obsidian-black transition-all duration-300"
              >
                <HiPhone className="w-5 h-5" />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg border border-olive-slate/30 text-ivory-mist hover:border-antique-gold hover:text-antique-gold transition-all duration-300 group"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  <HiMenu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} />
                  <HiX className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 bg-forest-night/95 backdrop-blur-sm border-t border-olive-slate/20">
            <div className="space-y-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = isActiveLink(link.href, link.isRoute);
                
                return link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 transform ${
                      isMobileMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    } ${
                      isActive 
                        ? 'bg-antique-gold/20 text-antique-gold border border-antique-gold/30' 
                        : 'text-ivory-mist hover:bg-olive-slate/20 hover:text-antique-gold'
                    }`}
                    style={{ 
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
                    }}
                  >
                    <div className={`p-2 rounded-lg border transition-all duration-300 ${
                      isActive 
                        ? 'border-antique-gold bg-antique-gold text-obsidian-black' 
                        : 'border-olive-slate/30 group-hover:border-antique-gold group-hover:bg-antique-gold/10'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{link.label}</span>
                    
                    {/* Mobile active indicator */}
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-antique-gold animate-pulse"></div>
                    )}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={(e) => handleSmoothScroll(e, link.href, link.isRoute)}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 transform w-full text-left ${
                      isMobileMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    } ${
                      isActive 
                        ? 'bg-antique-gold/20 text-antique-gold border border-antique-gold/30' 
                        : 'text-ivory-mist hover:bg-olive-slate/20 hover:text-antique-gold'
                    }`}
                    style={{ 
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
                    }}
                  >
                    <div className={`p-2 rounded-lg border transition-all duration-300 ${
                      isActive 
                        ? 'border-antique-gold bg-antique-gold text-obsidian-black' 
                        : 'border-olive-slate/30 group-hover:border-antique-gold group-hover:bg-antique-gold/10'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{link.label}</span>
                    
                    {/* Mobile active indicator */}
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-antique-gold animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Mobile contact section */}
            <div className="mt-4 pt-4 border-t border-olive-slate/20">
              <a 
                href="tel:08121235631" 
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-lg bg-antique-gold text-obsidian-black font-medium hover:bg-antique-gold/90 transition-all duration-300"
              >
                <HiPhone className="w-5 h-5" />
                <span>Call: 0812 123 5631</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Subtle bottom border */}
        <div className="h-px bg-gradient-to-r from-transparent via-olive-slate/30 to-transparent"></div>
      </header>

      {/* Floating decorative elements */}
      <div className="fixed top-20 left-4 w-2 h-16 bg-gradient-to-b from-antique-gold/20 to-transparent rounded-full opacity-40 pointer-events-none hidden lg:block"></div>
      <div className="fixed top-32 right-8 w-1 h-12 bg-gradient-to-b from-olive-slate/30 to-transparent rounded-full opacity-60 pointer-events-none hidden lg:block"></div>
    </>
  );
};

export default Header;