import { useEffect, useRef } from 'react';
import { 
  Code2, Database, Wrench, HardHat, Play, Hammer, Package
} from 'lucide-react';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, 
  SiHtml5, SiCss3, SiVite, SiSolidity, SiRust, SiEthereum ,
  SiGithub, SiVercel, SiFigma, SiPostman, 
  SiGooglechrome, SiGraphql
} from 'react-icons/si';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          const skillCategories = sectionRef.current.querySelectorAll('.skill-category');
          const skillItems = sectionRef.current.querySelectorAll('.skill-item');
          
          skillCategories.forEach((category, index) => {
            setTimeout(() => {
              category.style.transform = 'translateY(0)';
              category.style.opacity = '1';
            }, index * 300);
          });
          
          skillItems.forEach((skill, index) => {
            setTimeout(() => {
              skill.style.transform = 'translateY(0)';
              skill.style.opacity = '1';
            }, index * 50 + 500);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: Code2,
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'Vite', icon: SiVite }
      ]
    },
    {
      title: 'Blockchain Technologies',
      icon: Database,
      skills: [
        { name: 'Solidity', icon: SiSolidity },
        { name: 'Foundry', icon: Hammer },
        { name: 'Hardhat', icon: HardHat },
        // { name: 'Rust', icon: SiRust },
        { name: 'Subgraph', icon: SiGraphql },
        { name: 'Wagmi', icon: SiEthereum  },
        { name: 'AppKit', icon: Package }
      ]
    },
    {
      title: 'Tools & Frameworks',
      icon: Wrench,
      skills: [
        { name: 'GitHub', icon: SiGithub },
        { name: 'Vercel', icon: SiVercel },
         { name: 'Chrome DevTools', icon: SiGooglechrome },
        { name: 'VS Code', icon: Play }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-darkest-bg relative overflow-hidden animate-on-scroll">
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
        
        {/* Diagonal Lines */}
        <div className="absolute top-0 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-primary-blue/20 to-transparent transform rotate-12 animate-pulse delay-200"></div>
        <div className="absolute bottom-0 right-1/4 w-px h-16 bg-gradient-to-t from-transparent via-deep-blue/25 to-transparent transform -rotate-12 animate-pulse delay-600"></div>
        
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
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light-grey mb-4">My Skills</h2>
          <p className="text-lg text-light-grey max-w-2xl mx-auto">Technologies and tools I excel in to build innovative solutions</p>
          <div className="w-20 h-1 bg-primary-blue mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="skill-category group"
                style={{ 
                  transform: 'translateY(50px)', 
                  opacity: 0, 
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)' 
                }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-blue/20 border border-primary-blue/30 rounded-xl group-hover:bg-primary-blue/30 group-hover:border-primary-blue/50 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary-blue transition-colors duration-300">
                        {category.title}
                      </h3>
                      <div className="w-16 h-0.5 bg-primary-blue/60 mt-1 group-hover:w-24 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Skills Flex Layout */}
                <div className="flex flex-wrap gap-10 px-10">
                  {category.skills.map((skill, index) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="skill-item group/item flex flex-col items-center space-y-2 hover:scale-105 transition-all duration-300"
                        style={{ 
                          transform: 'translateY(20px)', 
                          opacity: 0, 
                          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                          transitionDelay: `${index * 100}ms`
                        }}
                      >
                        <div className="p-3 border border-primary-blue/40 rounded-full group-hover/item:bg-primary-blue group-hover/item:border-primary-blue transition-all duration-300">
                          <SkillIcon className="w-10 h-10 text-primary-blue group-hover/item:text-white" />
                        </div>
                        <span className="text-light-grey group-hover/item:text-white font-medium text-xs text-center transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-primary-blue/40 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
          </div>
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

export default Skills;