
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

  return (
    <MotionDiv.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 bg-forest-night"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist text-center mb-8">
          Our Success in Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <MotionDiv.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-obsidian-black rounded-lg shadow-lg"
            >
              <h3 className="text-4xl font-bold text-antique-gold">{stat.value}</h3>
              <p className="text-lg font-medium text-ivory-mist mt-2">{stat.label}</p>
              <p className="text-sm text-pale-stone-grey mt-1">{stat.description}</p>
            </MotionDiv.div>
          ))}
        </div>
      </div>
    </MotionDiv.section>
  );
};

export default Stats;