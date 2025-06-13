import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-dark-accent/30 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light-grey mb-4">About Me</h2>
          <p className="text-lg text-light-grey max-w-2xl mx-auto">Get to know me better</p>
          <div className="w-20 h-1 bg-primary-blue mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-light-grey leading-relaxed">
              I'm a dedicated Frontend and Blockchain Developer based in Lagos, Nigeria, with over four years of experience building responsive, user-centric web and decentralized applications.
            </p>
            <p className="text-lg text-light-grey leading-relaxed">
              My approach combines technical excellence with strong problem-solving and communication skills, delivering clean, maintainable code that exceeds expectations.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                <span className="text-light-grey">4+ years of Frontend & Blockchain development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                <span className="text-light-grey">Expert in React, Next.js, and modern web technologies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                <span className="text-light-grey">Specialized in secure smart contract development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                <span className="text-light-grey">Based in Lagos, Nigeria - available for remote work</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-dark-accent/50 rounded-lg">
                <div className="text-2xl font-bold text-primary-blue">4+</div>
                <div className="text-light-grey">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-dark-accent/50 rounded-lg">
                <div className="text-2xl font-bold text-primary-blue">10+</div>
                <div className="text-light-grey">Projects Completed</div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-dark-accent to-deep-blue rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <p className="text-light-grey">Professional Photo</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-deep-blue/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;