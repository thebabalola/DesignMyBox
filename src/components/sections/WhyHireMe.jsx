import { useEffect, useRef } from 'react';

const WhyHireMe = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-slide-up');
            }, index * 100);
          });
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-hire-me"
      ref={sectionRef}
      className="py-20 bg-dark-accent/30 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light-grey mb-4">Why Hire Me</h2>
          <p className="text-lg text-light-grey max-w-2xl mx-auto">What makes me the right fit for your project</p>
          <div className="w-20 h-1 bg-primary-blue mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-dark-accent/50 rounded-lg text-center glass-effect shadow-card hover:shadow-card-hover transition-all stagger-child">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-light-grey mb-2">Technical Excellence</h3>
            <p className="text-light-grey">4+ years of experience building responsive web applications and secure blockchain solutions.</p>
          </div>
          <div className="p-6 bg-dark-accent/50 rounded-lg text-center glass-effect shadow-card hover:shadow-card-hover transition-all stagger-child">
            <div className="text-4xl mb-4">🧩</div>
            <h3 className="text-xl font-semibold text-light-grey mb-2">Problem Solver</h3>
            <p className="text-light-grey">Proven track record of optimizing performance, resolving complex issues, and delivering clean code.</p>
          </div>
          <div className="p-6 bg-dark-accent/50 rounded-lg text-center glass-effect shadow-card hover:shadow-card-hover transition-all stagger-child">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold text-light-grey mb-2">Full-Stack Blockchain</h3>
            <p className="text-light-grey">Expertise in both frontend development and blockchain technologies for complete dApp solutions.</p>
          </div>
          <div className="p-6 bg-dark-accent/50 rounded-lg text-center glass-effect shadow-card hover:shadow-card-hover transition-all stagger-child">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-light-grey mb-2">User-Focused</h3>
            <p className="text-light-grey">Strong emphasis on user experience, accessibility, and cross-platform compatibility.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;