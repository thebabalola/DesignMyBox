import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    { label: 'About Us', path: '/about-us' },
    { label: 'Our Services', path: '/services' },
    { label: 'Portfolio', path: '/catalog' },
    { label: 'Process', path: '/contact-us#process' },
    { label: 'Contact', path: '/contact-us' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-of-service' },
  ];

  const services = [
    'Interior Design',
    'Custom Furniture',
    'Space Planning',
    'Renovations',
    'Consultations',
  ];

  return (
    <footer className="bg-forest-night text-pale-stone-grey py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Design My Box</h3>
            <p className="text-sm">
              Where Your Story Deserves a Space That Shines
            </p>
            <p className="text-sm mt-2">
              © 2025 Design My Box. All rights reserved.
            </p>
            <p className="text-sm">
              CAC Registration: RN 3501629
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-pale-stone-grey hover:text-antique-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-4">Contact</h3>
            <p className="text-sm">HUB 17, 17 Jibowu Street, Yaba, Lagos</p>
            <p className="text-sm">08121223631 | 09096819846</p>
            <p className="text-sm">hello@designmybox.com.ng</p>
            <div className="flex space-x-4 mt-4">
              <a href="[Instagram URL]" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-ivory-mist hover:text-antique-gold transition-colors glow-effect" />
              </a>
              <a href="[Facebook URL]" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-ivory-mist hover:text-antique-gold transition-colors glow-effect" />
              </a>
              <a href="https://wa.me/2349096819846" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl text-ivory-mist hover:text-antique-gold transition-colors glow-effect" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;