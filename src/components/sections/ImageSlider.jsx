import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion as MotionDiv } from 'framer-motion';

const ImageSlider = () => {
  const slides = [
    {
      image: '/livingroom-setup.jpg',
      title: 'Modern Living Excellence',
      description: 'Sophisticated residential design blending comfort with contemporary aesthetics',
    },
    {
      image: '/herobg-office.jpg',
      title: 'Commercial Brilliance',
      description: 'Professional office spaces that inspire productivity and creativity',
    },
    {
      image: 'kitchen-img.jpg',
      title: 'Kitchen Perfection',
      description: 'Functional culinary spaces where families gather and memories are made',
    },
    {
      image: '/tv-unit.jpg',
      title: 'Bedroom Serenity',
      description: 'Peaceful retreats designed for rest, relaxation, and rejuvenation',
    },
    {
      image: '/chic-livingroom-flora.jpg',
      title: 'Outdoor Oasis',
      description: "Exterior designs that extend your living space into nature's embrace",
    },
  ];

  return (
    <MotionDiv.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 sm:py-20 bg-obsidian-black relative overflow-hidden"
      id='image-slider'
    >
      {/* Faint Background Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Abstract geometric shapes */}
        <div className="absolute top-20 right-10 w-24 h-24 border border-antique-gold/8 rounded-full"></div>
        <div className="absolute bottom-10 right-5 w-28 h-28 border border-antique-gold/10 rounded-full"></div>

        {/* Abstract lines */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800">
          <path
            d="M0,200 Q300,150 600,180 T1200,160"
            stroke="rgb(112, 124, 91, 0.08)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,600 Q400,550 800,580 T1200,560"
            stroke="rgb(199, 147, 64, 0.06)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M200,0 Q250,300 300,600 T350,800"
            stroke="rgb(112, 124, 91, 0.06)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M800,0 Q850,250 900,500 T950,800"
            stroke="rgb(199, 147, 64, 0.08)"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Interior design icons */}
        <div className="absolute top-16 left-1/4 opacity-5">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-antique-gold">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="9" cy="9" r="2"/>
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
          </svg>
        </div>
        <div className="absolute bottom-32 right-1/4 opacity-5">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-olive-slate">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
        </div>
        <div className="absolute top-1/2 left-8 opacity-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-antique-gold">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-16 left-1/3 opacity-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-olive-slate">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10,8 16,12 10,16"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <MotionDiv.h2 
            className="text-3xl md:text-4xl font-bold text-ivory-mist"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Featured Projects That Inspire
          </MotionDiv.h2>
        </MotionDiv.div>

        <MotionDiv.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <MotionDiv.div 
                  className="group relative h-96 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-full overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-black/90 via-obsidian-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-antique-gold group-hover:text-forest-night transition-colors duration-300 mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-sm text-ivory-mist group-hover:text-antique-gold transition-colors duration-300 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    {/* Subtle border on hover */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-antique-gold/20 transition-colors duration-300"></div>
                  </div>
                </MotionDiv.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </MotionDiv.div>
      </div>

      <style jsx>{`
        .mySwiper .swiper-button-next,
        .mySwiper .swiper-button-prev {
          color: #C79340;
          width: 110px;
          height: 110px;
          margin-top: -55px;
          transition: all 0.3s ease;
        }

        .mySwiper .swiper-button-prev {
          left: -30px; 
        }

        .mySwiper .swiper-button-next {
          right: -30px; 
        }
        
        .mySwiper .swiper-button-next:hover,
        .mySwiper .swiper-button-prev:hover {
          transform: scale(1.1);
        }
        
        .mySwiper .swiper-button-next:after,
        .mySwiper .swiper-button-prev:after {
          font-size: 40px;
          font-weight: bold;
        }
        
        .mySwiper .swiper-pagination-bullet {
          background: rgba(199, 147, 64, 0.4);
          width: 8px;
          height: 8px;
          border: 1px solid rgba(199, 147, 64, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .mySwiper .swiper-pagination-bullet-active {
          background: #C79340;
          border-color: #C79340;
          transform: scale(1.2);
        }
      `}</style>
    </MotionDiv.section>
  );
};

export default ImageSlider;