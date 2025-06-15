import React from 'react';
import { motion as MotionDiv } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaTools } from 'react-icons/fa';

const SubCatalog = () => {
  const subCatalog = {
    categories: [
      {
        title: 'Residential',
        description: 'Full Home Transformations - Complete interior makeovers that reflect your familys unique lifestyle and create harmonious living environments.',
        icon: FaHome,
        link: '/catalog?filter=Residential'
      },
      {
        title: 'Commercial',
        description: 'Professional Spaces - Office designs that boost productivity, retail spaces that drive sales, and hospitality environments that create memorable experiences.',
        icon: FaBuilding,
        link: '/catalog?filter=Commercial'
      },
      {
        title: 'Renovations',
        description: 'Space Revitalization - Breathing new life into existing spaces through thoughtful renovations that maximize functionality and aesthetic appeal.',
        icon: FaTools,
        link: '/catalog?filter=Renovations'
      },
    ],
    featuredProjects: [
      'Modern Lagos Home - Yaba Residence',
      'Executive Office Suite - Victoria Island',
      'Boutique Hotel Lobby - Ikeja',
      'Restaurant Interior - Lekki',
      'Family Kitchen Renovation - Surulere',
      'Luxury Bedroom Suite - Ikoyi',
    ],
  };

  return (
    <MotionDiv.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-obsidian-black"
      id="sub-catalog"
    >


      <div className="container mx-auto px-4">
        {/* Header Section */}
        <MotionDiv.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist mb-4">
            Explore Our Design Expertise
          </h2>
          <p className="text-lg text-olive-slate max-w-2xl mx-auto">
            Discover the breadth of our creative capabilities
          </p>
        </MotionDiv.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {subCatalog.categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={index}
                to={category.link}
                className="block"
              >
                <MotionDiv.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group bg-gradient-to-br from-forest-night to-forest-night/80 p-6 lg:p-8 rounded-2xl border border-olive-slate/20 hover:border-antique-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-antique-gold/10 cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full border-2 border-antique-gold flex items-center justify-center mr-4 group-hover:bg-antique-gold/10 transition-colors duration-300">
                      <Icon className="text-lg text-antique-gold" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-ivory-mist group-hover:text-antique-gold transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-sm lg:text-base text-olive-slate leading-relaxed group-hover:text-ivory-mist/90 transition-colors duration-300">
                    {category.description}
                  </p>
                </MotionDiv.div>
              </Link>
            );
          })}
        </div>

        {/* Featured Projects Section */}
        <MotionDiv.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-ivory-mist mb-8">
            Featured Projects
          </h3>
          
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-sm lg:text-base text-olive-slate leading-relaxed">
              {subCatalog.featuredProjects.map((project, index) => (
                <span key={index}>
                  <span className="font-bold">{project}</span>
                  {index < subCatalog.featuredProjects.length - 1 && (
                    <span className="text-antique-gold mx-2">|</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </MotionDiv.div>

        {/* CTA Button */}
        <MotionDiv.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/catalog"
            className="inline-block px-8 py-4 rounded-2xl font-semibold text-lg bg-antique-gold text-obsidian-black hover:bg-transparent hover:text-antique-gold hover:border-2 hover:border-antique-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-antique-gold/20"
          >
            View Full Catalog
          </Link>
        </MotionDiv.div>
      </div>
    </MotionDiv.section>
  );
};

export default SubCatalog;