import React from 'react';
import { motion as MotionDiv } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      value: '100+',
      label: 'Projects Completed',
      description: 'Transforming spaces across Lagos since 2021',
    },
    {
      value: '4 Years',
      label: 'Of Excellence',
      description: 'Building trust through quality and innovation',
    },
    {
      value: '2 Locations',
      label: 'Ready to Serve',
      description: 'Yaba office & Gbagada production facility',
    },
    {
      value: 'CAC Registered',
      label: 'Trusted Business',
      description: 'RN: 3501629 - Your reliable design partner',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <MotionDiv.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 sm:py-14 lg:py-16 bg-gradient-to-br from-forest-night via-forest-night to-obsidian-black relative overflow-hidden"
      id='stats'
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory-mist mb-3">
            Our Success in Numbers
          </h2>
          <div className="w-16 h-0.5 bg-antique-gold mx-auto rounded-full"></div>
        </MotionDiv.div>

        <MotionDiv.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <MotionDiv.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative text-center p-4 sm:p-6 bg-obsidian-black/80 backdrop-blur-sm rounded-xl shadow-lg border border-olive-slate/20 hover:border-antique-gold/40 transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-antique-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <MotionDiv.h3
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl font-bold text-antique-gold mb-2 group-hover:text-antique-gold/90 transition-colors duration-300"
                >
                  {stat.value}
                </MotionDiv.h3>
                
                <MotionDiv.p
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg font-semibold text-ivory-mist mb-2 group-hover:text-ivory-mist/90 transition-colors duration-300 leading-tight"
                >
                  {stat.label}
                </MotionDiv.p>
                
                <MotionDiv.p
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xs sm:text-sm text-olive-slate group-hover:text-olive-slate/80 transition-colors duration-300 leading-relaxed break-words"
                >
                  {stat.description}
                </MotionDiv.p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-antique-gold group-hover:w-3/4 transition-all duration-500 ease-out" />
            </MotionDiv.div>
          ))}
        </MotionDiv.div>
      </div>
    </MotionDiv.section>
  );
};

export default Stats;