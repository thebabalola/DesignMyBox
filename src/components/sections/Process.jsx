import React from 'react';
import { motion as MotionDiv } from 'framer-motion';

const Process = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      subtitle: 'Listen & Understand',
      description: 'We start by listening to your needs, whether its a full home makeover, office redesign, or a single-room revamp. Your vision becomes our blueprint.',
      // Replace with your 3D image path
      imageSrc: '/consultation.png',
      imageAlt: 'Consultation process 3D visualization',
    },
    {
      number: '02',
      title: 'Design & Planning',
      subtitle: 'Create & Innovate',
      description: 'Our team creates innovative plans, optimizing space and style with custom furniture and decor solutions tailored specifically to your lifestyle.',
      // Replace with your 3D image path
      imageSrc: '/designNplanning.png',
      imageAlt: 'Design and planning 3D visualization',
    },
    {
      number: '03',
      title: 'Execution',
      subtitle: 'Craft & Build',
      description: 'From our state-of-the-art production factory in Gbagada to your space, we deliver with speed, precision, and uncompromising attention to detail.',
      // Replace with your 3D image path
      imageSrc: '/execution.png',
      imageAlt: 'Execution process 3D visualization',
    },
    {
      number: '04',
      title: 'Delivery',
      subtitle: 'Transform & Inspire',
      description: 'We ensure your space is ready to inspire daily living, backed by our comprehensive quality guarantees and ongoing support.',
      // Replace with your 3D image path
      imageSrc: '/delivery.png',
      imageAlt: 'Delivery process 3D visualization',
    },
  ];

  return (
    <MotionDiv.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-forest-night"
      id='design-process'
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <MotionDiv.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist mb-4">
            Our Seamless Design Process
          </h2>
          <p className="text-lg text-olive-slate max-w-2xl mx-auto">
            From vision to reality in four expertly crafted steps
          </p>
        </MotionDiv.div>

        {/* Process Steps */}
        <div className="space-y-12 lg:space-y-16">
          {processSteps.map((step, index) => (
            <MotionDiv.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12`}
            >
              {/* Content Section */}
              <div className="flex-1 w-full">
                <div className={`text-center lg:text-${index % 2 === 0 ? 'left' : 'right'} space-y-4`}>
                  {/* Step Number & Title */}
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-antique-gold">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-lg lg:text-xl font-semibold text-ivory-mist">
                      {step.subtitle}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm lg:text-base text-olive-slate leading-relaxed max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-1 w-full max-w-md lg:max-w-none">
                <div className="relative">
                  <img
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                  {/* Fallback for when image is not loaded - shows the number */}
                  <div className="absolute inset-0 bg-obsidian-black rounded-2xl flex items-center justify-center opacity-0 peer-[img]:opacity-100">
                    <span className="text-4xl lg:text-5xl font-bold text-ivory-mist">
                      {step.number}
                    </span>
                  </div>
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