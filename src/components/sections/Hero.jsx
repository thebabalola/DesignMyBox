import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Hero = () => {
  const backgroundImages = [
    '/hero-bg.jpg',
    '/bedroom-fv.jpg',
    '/herobg-shelfings.jpg',
    '/herobg-bedset.jpg',
    '/herobg-office.jpg',
  ];

  return (
    <section 
      id="home" 
      className="relative bg-obsidian-black text-ivory-mist min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 z-0"
      >
        {backgroundImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Hero Background ${index + 1}`}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian-black/20 via-transparent to-obsidian-black/40"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 border border-antique-gold/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-olive-slate/30 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 border border-antique-gold/15 rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-32 w-12 h-12 border border-ivory-mist/20 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(199, 147, 64, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(199, 147, 64, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-24 text-center relative z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          <span>
            Crafting Your&nbsp;
            <span className="bg-gradient-to-r from-antique-gold via-ivory-mist to-antique-gold bg-clip-text text-transparent animate-pulse">
              Dream Spaces
            </span>
          </span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 animate-fade-in leading-tight">
          <span>with Passion and Innovation</span>
        </h2>

        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-slide-up opacity-90 leading-relaxed" style={{animationDelay: '0.3s'}}>
          Transform your space into meaningful, beautiful, and functional environments that reflect your unique story.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <a
            href="/contact-us"
            className="group relative px-6 py-3 rounded-lg font-medium text-base bg-antique-gold text-ivory-mist 
                    hover:bg-transparent hover:border-2 hover:border-antique-gold transition-all duration-500 
                    transform hover:scale-105 hover:shadow-lg hover:shadow-antique-gold/30
                    before:absolute before:inset-0 before:rounded-lg before:bg-antique-gold 
                    before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-300
                    w-full sm:w-auto min-w-52"
          >
            <span className="relative z-10">Start Your Design Journey</span>
          </a>

          <a
            href="/catalog"
            className="group relative px-6 py-3 rounded-lg font-medium text-base border-2 border-ivory-mist 
                    text-ivory-mist hover:bg-ivory-mist hover:text-obsidian-black transition-all duration-500
                    transform hover:scale-105 hover:shadow-lg hover:shadow-ivory-mist/20
                    before:absolute before:inset-0 before:rounded-lg before:bg-ivory-mist 
                    before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300
                    w-full sm:w-auto min-w-52"
          >
            <span className="relative z-10">View Our Work</span>
          </a>
        </div>

        <div className="mt-12 text-sm sm:text-base animate-fade-in" style={{animationDelay: '0.9s'}}>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <div className="group flex items-center space-x-2 hover:text-antique-gold transition-colors duration-300">
              <div className="w-2 h-2 bg-antique-gold rounded-full group-hover:animate-ping"></div>
              <span className="font-medium">100+ Projects Completed</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-ivory-mist/30"></div>
            <div className="group flex items-center space-x-2 hover:text-antique-gold transition-colors duration-300">
              <div className="w-2 h-2 bg-antique-gold rounded-full group-hover:animate-ping" style={{animationDelay: '0.2s'}}></div>
              <span className="font-medium">Since 2021</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-ivory-mist/30"></div>
            <div className="group flex items-center space-x-2 hover:text-antique-gold transition-colors duration-300">
              <div className="w-2 h-2 bg-antique-gold rounded-full group-hover:animate-ping" style={{animationDelay: '0.4s'}}></div>
              <span className="font-medium">Residential & Commercial</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-ivory-mist/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-antique-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-obsidian-black/80 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
