import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
    id="home" 
    className="relative bg-obsidian-black text-ivory-mist"
    >
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="container mx-auto px-4 py-24 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Crafting Your Dream Spaces with Passion and Innovation
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Transform your space into meaningful, beautiful, and functional environments that reflect your unique story.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact-us"
            className="px-6 py-3 rounded-md font-medium text-lg bg-antique-gold text-ivory-mist hover:bg-transparent hover:border-2 hover:border-antique-gold transition-all duration-300 glow-effect"
          >
            Start Your Design Journey
          </Link>
          <Link
            to="/catalog"
            className="px-6 py-3 rounded-md font-medium text-lg border-2 border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-obsidian-black transition-all duration-300 glow-effect"
          >
            View Our Work
          </Link>
        </div>
        <div className="mt-12 text-sm flex justify-center space-x-6">
          <span>100+ Projects Completed</span>
          <span>Since 2021</span>
          <span>Residential & Commercial</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;