import React from 'react';
import { motion as MotionDiv } from 'framer-motion';
import { Link } from 'react-router-dom';

const SubCatalog = () => {
  const subCatalog = {
    categories: [
      {
        title: 'Residential',
        description: 'Full Home Transformations - Complete interior makeovers that reflect your family’s unique lifestyle and create harmonious living environments.',
      },
      {
        title: 'Commercial',
        description: 'Professional Spaces - Office designs that boost productivity, retail spaces that drive sales, and hospitality environments that create memorable experiences.',
      },
      {
        title: 'Renovations',
        description: 'Space Revitalization - Breathing new life into existing spaces through thoughtful renovations that maximize functionality and aesthetic appeal.',
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
      className="py-12 bg-obsidian-black"
      id="sub-catalog"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist text-center mb-4">
          Explore Our Design Expertise
        </h2>
        <p className="text-center text-pale-stone-grey mb-8">
          Discover the breadth of our creative capabilities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {subCatalog.categories.map((category, index) => (
            <MotionDiv.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-forest-night p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-ivory-mist mb-2">{category.title}</h3>
              <p className="text-sm text-pale-stone-grey">{category.description}</p>
            </MotionDiv.div>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-ivory-mist text-center mb-4">Featured Projects</h3>
        <ul className="list-disc list-inside text-pale-stone-grey text-center mb-8">
          {subCatalog.featuredProjects.map((project, index) => (
            <li key={index} className="text-sm">{project}</li>
          ))}
        </ul>
        <div className="text-center">
          <Link
            to="/catalog"
            className="px-6 py-3 rounded-md font-medium text-lg bg-antique-gold text-ivory-mist hover:bg-transparent hover:border-2 hover:border-antique-gold transition-all duration-300 glow-effect"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </MotionDiv.section>
  );
};

export default SubCatalog;