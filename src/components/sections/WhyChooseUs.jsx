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
      description: 'High-quality design doesn’t have to be expensive. We offer competitive pricing to make your dream space accessible without compromising on quality.',
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
      className="py-12 bg-obsidian-black"
      id="why-choose-us" 
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist text-center mb-4">
          Why Design My Box is Your Perfect Design Partner
        </h2>
        <p className="text-center text-pale-stone-grey mb-8">
          We believe interiors are about the people who live, work, and thrive in them.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((feature, index) => {
            const Icon = icons[index];
            return (
              <MotionDiv.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-forest-night rounded-lg text-center"
              >
                <Icon className="text-4xl text-antique-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ivory-mist mb-2">{feature.title}</h3>
                <p className="text-sm text-pale-stone-grey">{feature.description}</p>
              </MotionDiv.div>
            );
          })}
        </div>
      </div>
    </MotionDiv.section>
  );
};

export default WhyChooseUs;