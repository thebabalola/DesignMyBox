import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          const skills = sectionRef.current.querySelectorAll('li');
          skills.forEach((skill, index) => {
            setTimeout(() => {
              skill.style.transform = 'translateX(0)';
              skill.style.opacity = '1';
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-darkest-bg animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light-grey mb-4">My Skills</h2>
          <p className="text-lg text-light-grey max-w-2xl mx-auto">Technologies and tools I excel in to build innovative solutions</p>
          <div className="w-20 h-1 bg-primary-blue mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-dark-accent/50 rounded-lg glass-effect">
            <h3 className="text-xl font-semibold text-light-grey mb-4">Frontend Technologies</h3>
            <ul className="space-y-2">
              {['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite', 'Wagmi', 'AppKit'].map((skill) => (
                <li key={skill} className="flex items-center space-x-2" style={{ transform: 'translateX(-50px)', opacity: 0, transition: 'all 0.6s ease-out' }}>
                  <span className="w-2 h-2 bg-primary-blue rounded-full"></span>
                  <span className="text-light-grey">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-dark-accent/50 rounded-lg glass-effect">
            <h3 className="text-xl font-semibold text-light-grey mb-4">Blockchain Technologies</h3>
            <ul className="space-y-2">
              {['Solidity', 'Foundry', 'Hardhat', 'Rust', 'Web3', 'Smart Contracts', 'dApp Development', 'Subgraph'].map((skill) => (
                <li key={skill} className="flex items-center space-x-2" style={{ transform: 'translateX(-50px)', opacity: 0, transition: 'all 0.6s ease-out' }}>
                  <span className="w-2 h-2 bg-primary-blue rounded-full"></span>
                  <span className="text-light-grey">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-dark-accent/50 rounded-lg glass-effect">
            <h3 className="text-xl font-semibold text-light-grey mb-4">Tools & Frameworks</h3>
            <ul className="space-y-2">
              {['Git', 'GitHub', 'Vercel', 'VS Code', 'Figma', 'Postman', 'Chrome DevTools'].map((skill) => (
                <li key={skill} className="flex items-center space-x-2" style={{ transform: 'translateX(-50px)', opacity: 0, transition: 'all 0.6s ease-out' }}>
                  <span className="w-2 h-2 bg-primary-blue rounded-full"></span>
                  <span className="text-light-grey">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;