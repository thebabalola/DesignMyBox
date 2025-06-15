import React from 'react';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import ImageSlider from '../components/sections/ImageSlider';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import SubCatalog from '../components/sections/SubCatalog';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ImageSlider />
      <WhyChooseUs />
      <Process />
      <SubCatalog />
      <Contact />
    </>
  );
};

export default Home;