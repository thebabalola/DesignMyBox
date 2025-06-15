import React, { useState, useMemo, useEffect } from 'react';
import { motion as MotionDiv } from 'framer-motion';
import { Search, Filter, Eye, Heart, ArrowRight, Home, Building, RotateCcw, Sparkles } from 'lucide-react';

// Move catalogProjects outside component to avoid re-creation on every render
const catalogProjects = [
    {
      title: 'Modern Family Haven - Lekki',
      location: 'Lekki, Lagos',
      category: 'Residential',
      description: 'A complete home transformation with contemporary aesthetics.',
      image: '/hero-bg.jpg',
      tags: ['modern', 'family', 'home', 'contemporary'],
    },
    {
      title: 'Elegant Bedroom Retreat',
      location: 'Ajah, Lagos',
      category: 'Residential',
      description: 'A luxurious bedroom styled for serenity and elegance.',
      image: '/bedroom-fv.jpg',
      tags: ['bedroom', 'luxury', 'elegant', 'retreat'],
    },
    {
      title: 'Contemporary Shelving Design',
      location: 'Ikeja, Lagos',
      category: 'Custom Furniture',
      description: 'Modern wall shelf installation for stylish storage.',
      image: '/herobg-shelfings.jpg',
      tags: ['shelving', 'storage', 'modern', 'wall'],
    },
    {
      title: 'Comfort Bedset Display',
      location: 'Magodo, Lagos',
      category: 'Showroom',
      description: 'Featured bedset combining plush materials and minimalist style.',
      image: '/herobg-bedset.jpg',
      tags: ['bedset', 'comfort', 'minimalist', 'showroom'],
    },
    {
      title: 'Executive Office Setup',
      location: 'Victoria Island, Lagos',
      category: 'Commercial',
      description: 'A professional workspace for high performance and brand presence.',
      image: '/herobg-office.jpg',
      tags: ['office', 'executive', 'workspace', 'professional'],
    },
    {
      title: 'Modern Living Excellence',
      location: 'Lekki Phase 1, Lagos',
      category: 'Residential',
      description: 'Sophisticated living room design blending comfort with contemporary aesthetics.',
      image: '/livingroom-setup.jpg',
      tags: ['living room', 'modern', 'sophisticated', 'comfort'],
    },
    {
      title: 'Kitchen Perfection',
      location: 'Ikoyi, Lagos',
      category: 'Residential',
      description: 'Culinary space with modern finishes, functionality, and charm.',
      image: 'kitchen-img.jpg',
      tags: ['kitchen', 'culinary', 'modern', 'functional'],
    },
    {
      title: 'TV Unit Showcase',
      location: 'Surulere, Lagos',
      category: 'Custom Furniture',
      description: 'Stylish entertainment center built for form and function.',
      image: '/tv-unit.jpg',
      tags: ['tv unit', 'entertainment', 'furniture', 'stylish'],
    },
    {
      title: 'Chic Living Room with Flora',
      location: 'Yaba, Lagos',
      category: 'Renovations',
      description: 'Botanical-infused interiors with cozy and clean aesthetics.',
      image: '/chic-livingroom-flora.jpg',
      tags: ['living room', 'chic', 'botanical', 'flora'],
    },
    {
      title: 'Victorian Home Modernization',
      location: 'Lagos Island, Lagos',
      category: 'Renovations',
      description: 'Revitalizing a historic home with modern touches.',
      image: '/delivery.png',
      tags: ['victorian', 'home', 'modernization', 'historic'],
    },
    {
      title: '3D Project Execution Visual',
      location: 'Gbagada, Lagos',
      category: 'Workshop',
      description: 'A look into our factory processes and fine craftsmanship.',
      image: '/execution.png',
      tags: ['3d', 'project', 'execution', 'craftsmanship'],
    },
    {
      title: 'Design Reveal Experience',
      location: 'Lekki, Lagos',
      category: 'Delivery',
      description: 'Clients experience the grand reveal of their fully styled space.',
      image: '/delivery.png',
      tags: ['design', 'reveal', 'experience', 'styled'],
    },
  ];

const CatalogGrid = () => {
  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [likedProjects, setLikedProjects] = useState(new Set());

  // Reset visible projects when filter or search changes
  useEffect(() => {
    setVisibleProjects(6);
  }, [filter, searchTerm]);

  const filters = [
    { name: 'All', icon: Sparkles },
    { name: 'Residential', icon: Home },
    { name: 'Commercial', icon: Building },
    { name: 'Renovations', icon: RotateCcw },
  ];

  const filteredProjects = useMemo(() => {
    let projects = catalogProjects;
    
    // Filter by category
    if (filter !== 'All') {
      projects = projects.filter(project => project.category === filter);
    }
    
    // Filter by search term
    if (searchTerm.trim()) {
      projects = projects.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return projects;
  }, [filter, searchTerm]);

  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  const toggleLike = (index) => {
    const newLikedProjects = new Set(likedProjects);
    if (newLikedProjects.has(index)) {
      newLikedProjects.delete(index);
    } else {
      newLikedProjects.add(index);
    }
    setLikedProjects(newLikedProjects);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <MotionDiv.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-obsidian-black min-h-screen"
      id="catalog-grid"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <MotionDiv.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-mist mb-4">
            Our Design
            <span className="text-antique-gold ml-3 relative">
              Portfolio
              {/* <MotionDiv.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-antique-gold to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              /> */}
            </span>
          </h2>
          <p className="text-lg text-olive-slate max-w-2xl mx-auto">
            Explore our curated collection of stunning interior transformations
          </p>
        </MotionDiv.div>

        {/* Search Bar */}
        <MotionDiv.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto mb-8"
        >
          <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-xl transition-colors duration-300 ${
              isSearchFocused ? 'text-antique-gold' : 'text-olive-slate'
            }`} />
            <input
              type="text"
              placeholder="Search projects, rooms, styles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full pl-12 pr-4 py-3 bg-forest-night border-2 rounded-full text-ivory-mist placeholder-olive-slate focus:outline-none transition-all duration-300 ${
                isSearchFocused 
                  ? 'border-antique-gold shadow-lg shadow-antique-gold/20' 
                  : 'border-olive-slate/30 hover:border-olive-slate/50'
              }`}
            />
          </div>
        </MotionDiv.div>

        {/* Filter Buttons */}
        <MotionDiv.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f, index) => {
            const IconComponent = f.icon;
            const isActive = filter === f.name;
            
            return (
              <MotionDiv.button
                key={index}
                onClick={() => setFilter(f.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 border-2 flex items-center gap-2 ${
                  isActive
                    ? 'bg-antique-gold border-antique-gold text-obsidian-black shadow-lg shadow-antique-gold/30'
                    : 'border-olive-slate/50 text-ivory-mist hover:border-antique-gold hover:text-antique-gold hover:shadow-md hover:shadow-antique-gold/20'
                }`}
              >
                <IconComponent className={`text-lg transition-colors duration-300 ${
                  isActive ? 'text-obsidian-black' : 'text-olive-slate group-hover:text-antique-gold'
                }`} />
                {f.name}
                {isActive && (
                  <MotionDiv.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full border-2 border-antique-gold"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </MotionDiv.button>
            );
          })}
        </MotionDiv.div>

        {/* Results Count */}
        {searchTerm && (
          <MotionDiv.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6"
          >
            <p className="text-olive-slate">
              Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} 
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </MotionDiv.div>
        )}

        {/* Projects Grid */}
        <MotionDiv.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projectsToShow.map((project, index) => (
            <MotionDiv.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-forest-night rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-antique-gold/20 transition-all duration-500 border border-olive-slate/20 hover:border-antique-gold/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <MotionDiv.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleLike(index)}
                    className={`p-2 rounded-full border-2 backdrop-blur-sm transition-all duration-300 ${
                      likedProjects.has(index)
                        ? 'bg-antique-gold border-antique-gold text-obsidian-black'
                        : 'border-ivory-mist/50 text-ivory-mist hover:border-antique-gold hover:text-antique-gold'
                    }`}
                  >
                    <Heart className={`text-sm ${likedProjects.has(index) ? 'fill-current' : ''}`} />
                  </MotionDiv.button>
                  
                  <MotionDiv.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full border-2 border-ivory-mist/50 text-ivory-mist hover:border-antique-gold hover:text-antique-gold backdrop-blur-sm transition-all duration-300"
                  >
                    <Eye className="text-sm" />
                  </MotionDiv.button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-antique-gold/90 text-obsidian-black text-xs font-medium rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-ivory-mist mb-2 group-hover:text-antique-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-olive-slate mb-3 flex items-center gap-1">
                  <span className="w-1 h-1 bg-antique-gold rounded-full"></span>
                  {project.location}
                </p>
                <p className="text-sm text-olive-slate leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-olive-slate/20 text-olive-slate text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv.div>
          ))}
        </MotionDiv.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <MotionDiv.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-ivory-mist mb-2">No projects found</h3>
            <p className="text-olive-slate mb-6">
              Try adjusting your search terms or filters
            </p>
            <MotionDiv.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSearchTerm('');
                setFilter('All');
              }}
              className="px-6 py-3 bg-antique-gold text-obsidian-black rounded-full font-medium hover:bg-antique-gold/90 transition-colors duration-300"
            >
              Clear Filters
            </MotionDiv.button>
          </MotionDiv.div>
        )}

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <MotionDiv.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <MotionDiv.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(199, 147, 64, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-antique-gold to-antique-gold/80 text-obsidian-black rounded-full font-bold text-lg transition-all duration-300 hover:from-antique-gold/90 hover:to-antique-gold shadow-lg shadow-antique-gold/20 border-2 border-transparent hover:border-antique-gold/50"
            >
              <span className="flex items-center gap-3">
                Load More Projects
                <MotionDiv.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <RotateCcw className="text-xl" />
                </MotionDiv.div>
              </span>
            </MotionDiv.button>
          </MotionDiv.div>
        )}
      </div>
    </MotionDiv.section>
  );
};

export default CatalogGrid;