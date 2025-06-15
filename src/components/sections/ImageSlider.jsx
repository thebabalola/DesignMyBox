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
      image: '/assets/projects/modern-living.jpg',
      title: 'Modern Living Excellence',
      description: 'Sophisticated residential design blending comfort with contemporary aesthetics',
    },
    {
      image: '/assets/projects/commercial-office.jpg',
      title: 'Commercial Brilliance',
      description: 'Professional office spaces that inspire productivity and creativity',
    },
    {
      image: '/assets/projects/kitchen.jpg',
      title: 'Kitchen Perfection',
      description: 'Functional culinary spaces where families gather and memories are made',
    },
    {
      image: '/assets/projects/bedroom.jpg',
      title: 'Bedroom Serenity',
      description: 'Peaceful retreats designed for rest, relaxation, and rejuvenation',
    },
    {
      image: '/assets/projects/outdoor.jpg',
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
      className="py-12 bg-obsidian-black"
      id='image-slider'
    >
      <div className="container mx-auto px-4">
        <MotionDiv.h2 
          className="text-3xl md:text-4xl font-bold text-ivory-mist text-center mb-8"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Featured Projects That Inspire
        </MotionDiv.h2>
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
              <div className="relative h-96">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-xl font-bold text-ivory-mist">{slide.title}</h3>
                  <p className="text-sm text-pale-stone-grey">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MotionDiv.section>
  );
};

export default ImageSlider;