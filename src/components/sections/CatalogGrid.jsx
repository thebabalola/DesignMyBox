import React, { useState } from 'react';
import { motion as MotionDiv } from 'framer-motion';
import { Link } from 'react-router-dom';

const CatalogGrid = () => {
  const catalogProjects = [
    {
      title: 'Modern Family Haven - Lekki',
      location: 'Lekki, Lagos',
      category: 'Residential',
      description: 'A complete home transformation with contemporary aesthetics.',
      image: '/assets/projects/lekki-home.jpg',
    },
    {
      title: 'Executive Suite - Victoria Island',
      location: 'Victoria Island, Lagos',
      category: 'Commercial',
      description: 'A professional office space designed for productivity.',
      image: '/assets/projects/vi-office.jpg',
    },
    {
      title: 'Victorian Home Modernization',
      location: 'Lagos Island, Lagos',
      category: 'Renovations',
      description: 'Revitalizing a historic home with modern touches.',
      image: '/assets/projects/victorian-renovation.jpg',
    },
  ];

  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filters = ['All', 'Residential', 'Commercial', 'Renovations'];

  const filteredProjects = filter === 'All'
    ? catalogProjects
    : catalogProjects.filter(project => project.category === filter);

  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <MotionDiv.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 bg-obsidian-black"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((f, index) => (
            <button
              key={index}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-md font-medium text-ivory-mist ${filter === f ? 'bg-antique-gold' : 'bg-forest-night'} hover:bg-antique-gold transition-colors`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsToShow.map((project, index) => (
            <MotionDiv.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-forest-night rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-ivory-mist">{project.title}</h3>
                <p className="text-sm text-pale-stone-grey">{project.location}</p>
                <p className="text-sm text-pale-stone-grey mt-2">{project.description}</p>
              </div>
            </MotionDiv.div>
          ))}
        </div>
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-md font-medium text-lg bg-antique-gold text-ivory-mist hover:bg-transparent hover:border-2 hover:border-antique-gold transition-all duration-300 glow-effect"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </MotionDiv.section>
  );
};

export default CatalogGrid;