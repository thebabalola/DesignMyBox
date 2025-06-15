import React from 'react';
import { motion as MotionDiv } from 'framer-motion';

const Process = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      subtitle: 'Listen & Understand',
      description: 'We start by listening to your needs, whether it’s a full home makeover, office redesign, or a single-room revamp. Your vision becomes our blueprint.',
    },
    {
      number: '02',
      title: 'Design & Planning',
      subtitle: 'Create & Innovate',
      description: 'Our team creates innovative plans, optimizing space and style with custom furniture and decor solutions tailored specifically to your lifestyle.',
    },
    {
      number: '03',
      title: 'Execution',
      subtitle: 'Craft & Build',
      description: 'From our state-of-the-art production factory in Gbagada to your space, we deliver with speed, precision, and uncompromising attention to detail.',
    },
    {
      number: '04',
      title: 'Delivery',
      subtitle: 'Transform & Inspire',
      description: 'We ensure your space is ready to inspire daily living, backed by our comprehensive quality guarantees and ongoing support.',
    },
  ];

  return (
    <MotionDiv.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 bg-forest-night"
      id='design-process'
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist text-center mb-4">
          Our Seamless Design Process
        </h2>
        <p className="text-center text-pale-stone-grey mb-8">
          From vision to reality in four expertly crafted steps
        </p>
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <MotionDiv.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6`}
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-antique-gold">
                  {step.number}. {step.title}
                </h3>
                <p className="text-lg font-medium text-ivory-mist mt-2">{step.subtitle}</p>
                <p className="text-sm text-pale-stone-grey mt-2">{step.description}</p>
              </div>
              <div className="flex-1">
                <div className="h-48 bg-obsidian-black rounded-lg flex items-center justify-center">
                  <span className="text-4xl font-bold text-ivory-mist">{step.number}</span>
                </div>
              </div>
            </MotionDiv.div>
          ))}
        </div>
      </div>
    </MotionDiv.section>
  );
};

export default Process;