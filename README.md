# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




-- former catalog  --- import React, { useState } from 'react';
import { motion as MotionDiv } from 'framer-motion';
import { Link } from 'react-router-dom';

const CatalogGrid = () => {
  const catalogProjects = [
    {
      title: 'Modern Family Haven - Lekki',
      location: 'Lekki, Lagos',
      category: 'Residential',
      description: 'A complete home transformation with contemporary aesthetics.',
      image: '/hero-bg.jpg',
    },
    {
      title: 'Elegant Bedroom Retreat',
      location: 'Ajah, Lagos',
      category: 'Residential',
      description: 'A luxurious bedroom styled for serenity and elegance.',
      image: '/bedroom-fv.jpg',
    },
    {
      title: 'Contemporary Shelving Design',
      location: 'Ikeja, Lagos',
      category: 'Custom Furniture',
      description: 'Modern wall shelf installation for stylish storage.',
      image: '/herobg-shelfings.jpg',
    },
    {
      title: 'Comfort Bedset Display',
      location: 'Magodo, Lagos',
      category: 'Showroom',
      description: 'Featured bedset combining plush materials and minimalist style.',
      image: '/herobg-bedset.jpg',
    },
    {
      title: 'Executive Office Setup',
      location: 'Victoria Island, Lagos',
      category: 'Commercial',
      description: 'A professional workspace for high performance and brand presence.',
      image: '/herobg-office.jpg',
    },
    {
      title: 'Modern Living Excellence',
      location: 'Lekki Phase 1, Lagos',
      category: 'Residential',
      description: 'Sophisticated living room design blending comfort with contemporary aesthetics.',
      image: '/livingroom-setup.jpg',
    },
    {
      title: 'Kitchen Perfection',
      location: 'Ikoyi, Lagos',
      category: 'Residential',
      description: 'Culinary space with modern finishes, functionality, and charm.',
      image: 'kitchen-img.jpg',
    },
    {
      title: 'TV Unit Showcase',
      location: 'Surulere, Lagos',
      category: 'Custom Furniture',
      description: 'Stylish entertainment center built for form and function.',
      image: '/tv-unit.jpg',
    },
    {
      title: 'Chic Living Room with Flora',
      location: 'Yaba, Lagos',
      category: 'Renovations',
      description: 'Botanical-infused interiors with cozy and clean aesthetics.',
      image: '/chic-livingroom-flora.jpg',
    },
    {
      title: 'Victorian Home Modernization',
      location: 'Lagos Island, Lagos',
      category: 'Renovations',
      description: 'Revitalizing a historic home with modern touches.',
      image: '/delivery.png',
    },
    {
      title: '3D Project Execution Visual',
      location: 'Gbagada, Lagos',
      category: 'Workshop',
      description: 'A look into our factory processes and fine craftsmanship.',
      image: '/execution.png',
    },
    {
      title: 'Design Reveal Experience',
      location: 'Lekki, Lagos',
      category: 'Delivery',
      description: 'Clients experience the grand reveal of their fully styled space.',
      image: '/delivery.png',
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
      id = "catalog-grid"
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