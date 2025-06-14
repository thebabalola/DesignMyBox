import { useEffect, useRef } from 'react';

const Projects = () => {
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

  // Tilt effects
  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.glass-effect');
    const handleMouseMove = (e, element) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      const rotateX = deltaY * -10;
      const rotateY = deltaX * 10;
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    const handleMouseLeave = (element) => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const projects = [
    {
      title: 'TokenForge',
      description: 'A no-code platform for deploying ERC20, ERC721, and ERC1155 tokens with features like airdrops and campaign management.',
      image: '/src/assets/images/tokenforge.jpg',
      technologies: ['React', 'Solidity', 'Web3', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Propty-Bridge',
      description: 'A dynamic real estate platform with intuitive UI/UX, optimized for performance and accessibility.',
      image: '/src/assets/images/propty-bridge.jpg',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Manager WebApp',
      description: 'A comprehensive task management application with modern UI and seamless user experience.',
      image: '/src/assets/images/task-manager.jpg',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-darkest-bg/80 relative overflow-hidden animate-on-scroll"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Lines */}
        <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-px bg-gradient-to-r from-transparent via-deep-blue/40 to-transparent animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-px bg-gradient-to-r from-transparent via-primary-blue/25 to-transparent animate-pulse delay-700"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-16 right-10 w-3 h-3 border border-primary-blue/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-8 w-4 h-4 border border-deep-blue/40 rotate-45 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 border border-primary-blue/35 rotate-45 animate-bounce-slow"></div>
        
        {/* Abstract Circles */}
        <div className="absolute top-1/3 left-1/2 w-32 h-32 border border-primary-blue/10 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-deep-blue/15 rounded-full animate-pulse delay-1000"></div>
        
        {/* Diagonal Lines
        <div className="absolute top-0 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-primary-blue/20 to-transparent transform rotate-12 animate-pulse delay-200"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-16 bg-gradient-to-t from-transparent via-deep-blue/25 to-transparent transform -rotate-12 animate-pulse delay-600"></div> */}
        
        {/* Tech-inspired Grid Pattern */}
        <div className="absolute top-1/4 right-1/4 opacity-10">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-primary-blue rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light-grey mb-4">My Projects</h2>
          <p className="text-lg text-light-grey max-w-2xl mx-auto">Explore some of my best work in web and blockchain development</p>
          <div className="w-20 h-1 bg-primary-blue mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-dark-accent/50 rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 glass-effect project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-light-grey mb-2">{project.title}</h3>
                <p className="text-light-grey mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-primary-blue mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-deep-blue/30 text-light-grey px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-blue text-darkest-bg font-semibold px-4 py-2 rounded-lg glow-effect hover:bg-primary-blue/80"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-primary-blue text-primary-blue font-semibold px-4 py-2 rounded-lg hover:bg-primary-blue hover:text-darkest-bg"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;