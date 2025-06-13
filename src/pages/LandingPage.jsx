import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import WhyHireMe from '../components/sections/WhyHireMe'; 
import Contact from '../components/sections/Contact';



const LandingPage = () => {
  // Gradient mouse effect (from main.js setupGradientMouse)
  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let gradientX = 0, gradientY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateGradient = () => {
      gradientX += (mouseX - gradientX) * 0.1;
      gradientY += (mouseY - gradientY) * 0.1;
      document.documentElement.style.setProperty('--mouse-x', gradientX + 'px');
      document.documentElement.style.setProperty('--mouse-y', gradientY + 'px');
      requestAnimationFrame(updateGradient);
    };

    document.addEventListener('mousemove', handleMouseMove);
    updateGradient();

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhyHireMe />
      <Contact />
    </>
  );
};

export default LandingPage;