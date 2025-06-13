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
      className="py-20 bg-darkest-bg/80 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </section>
  );
};

export default Projects;