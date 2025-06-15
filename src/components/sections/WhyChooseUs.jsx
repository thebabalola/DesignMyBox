import React from 'react';
import { motion as MotionDiv } from 'framer-motion';
import { FaStar, FaClock, FaShieldAlt, FaCheckCircle, FaLightbulb, FaEye, FaMoneyBillWave, FaUsers } from 'react-icons/fa';

const icons = [FaStar, FaClock, FaShieldAlt, FaCheckCircle, FaLightbulb, FaEye, FaMoneyBillWave, FaUsers];

const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      title: 'Creative Designs & Best Concepts',
      description: 'Our team delivers innovative, trend-setting ideas tailored to your unique style, ensuring every space is a masterpiece of creativity and originality.',
    },
    {
      title: 'Fast Executions',
      description: 'We combine efficiency with excellence, bringing your vision to life swiftly without compromising on quality.',
    },
    {
      title: 'Great Guarantees',
      description: 'Your satisfaction is assured with our reliable warranties, giving you peace of mind in every project.',
    },
    {
      title: 'Trusted Partner',
      description: 'As a registered business with the Corporate Affairs Commission (RN: 3501629), we operate with honesty and transparency, building lasting trust with every client.',
    },
    {
      title: 'Great Innovations',
      description: 'We push boundaries with cutting-edge design solutions, incorporating the latest techniques and materials to elevate your space.',
    },
    {
      title: 'Attention to Detail',
      description: 'Every project is crafted with precision, from concept to completion, ensuring flawless results that exceed expectations.',
    },
    {
      title: 'Affordable Excellence',
      description: 'High-quality design doesnt have to be expensive. We offer competitive pricing to make your dream space accessible without compromising on quality.',
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your vision is our priority. We foster strong relationships through open communication, ensuring every detail aligns with your needs and dreams.',
    },
  ];

  return (
    <MotionDiv.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-obsidian-black relative overflow-hidden"
      id="why-choose-us" 
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-antique-gold/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-olive-slate/15 rotate-45"></div>
        
        {/* Abstract lines */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800">
          <path
            d="M0,200 Q300,150 600,180 T1200,160"
            stroke="rgb(112, 124, 91, 0.08)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,600 Q400,550 800,580 T1200,560"
            stroke="rgb(199, 147, 64, 0.06)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M200,0 Q250,300 300,600 T350,800"
            stroke="rgb(112, 124, 91, 0.06)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        
        {/* Small decorative dots */}
        <div className="absolute top-32 left-1/3 w-2 h-2 bg-antique-gold/20 rounded-full"></div>
        <div className="absolute top-48 right-1/3 w-1.5 h-1.5 bg-olive-slate/25 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-2.5 h-2.5 bg-antique-gold/15 rounded-full"></div>
        <div className="absolute bottom-56 right-1/4 w-1 h-1 bg-olive-slate/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist mb-4 leading-tight">
            Why Design My Box is Your Perfect Design Partner
          </h2>
          <p className="text-lg text-olive-slate max-w-2xl mx-auto">
            We believe interiors are about the people who live, work, and thrive in them.
          </p>
        </MotionDiv.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((feature, index) => {
            const Icon = icons[index];
            return (
              <MotionDiv.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-forest-night via-forest-night to-olive-slate/20 p-6 text-center border border-olive-slate/20 transition-all duration-300"
              >
                <div className="relative z-10">
                  <MotionDiv.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <div className="w-12 h-12 mx-auto rounded-full border-2 border-antique-gold flex items-center justify-center group-hover:border-antique-gold/80 transition-colors duration-300">
                      <Icon className="text-xl text-antique-gold" />
                    </div>
                  </MotionDiv.div>
                  
                  <h3 className="text-lg font-semibold text-antique-gold mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-xs leading-relaxed text-ivory-mist">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle border glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-antique-gold/20 via-transparent to-antique-gold/20 opacity-0 transition-opacity duration-300 pointer-events-none" />
              </MotionDiv.div>
            );
          })}
        </div>
      </div>
    </MotionDiv.section>
  );
};

export default WhyChooseUs;