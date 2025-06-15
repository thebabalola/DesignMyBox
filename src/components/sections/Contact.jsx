import React, { useState } from 'react';
import { motion as MotionDiv } from 'framer-motion';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiSend, 
  FiUser, 
  FiMessageSquare,
  FiClock,
  FiInstagram,
  FiLinkedin,
  FiFacebook
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Google Form submission
      const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse';
      
      const formDataToSend = new FormData();
      formDataToSend.append('entry.YOUR_NAME_FIELD_ID', formData.name);
      formDataToSend.append('entry.YOUR_EMAIL_FIELD_ID', formData.email);
      formDataToSend.append('entry.YOUR_PHONE_FIELD_ID', formData.phone);
      formDataToSend.append('entry.YOUR_MESSAGE_FIELD_ID', formData.message);
      
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // You can add error handling here
    }
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      value: '08121223631 | 09096819846',
      link: 'tel:+2348121223631',
      description: 'Call us anytime'
    },
    {
      icon: FiMail,
      title: 'Email',
      value: 'hello@dmbinteriors.ng',
      link: 'mailto:hello@dmbinteriors.ng',
      description: 'Send us a message'
    },
    {
      icon: FiMapPin,
      title: 'Head Office',
      value: 'HUB 17, 17 Jibowu Street, Yaba, Lagos',
      link: 'https://maps.google.com/search/HUB+17,+17+Jibowu+Street,+Yaba,+Lagos',
      description: 'Visit us'
    },
    {
      icon: FiMapPin,
      title: 'Production Factory',
      value: 'Westex Sawmill, Redemption Way, Gbagada',
      link: 'https://maps.google.com/search/Westex+Sawmill,+Redemption+Way,+Gbagada,+Lagos',
      description: 'Our manufacturing facility'
    },
    {
      icon: FiClock,
      title: 'Hours',
      value: 'Mon-Fri: 9AM-6PM',
      link: null,
      description: 'Weekend consultations available'
    }
  ];

  const socialLinks = [
    { icon: FiInstagram, link: 'https://instagram.com/dmbinteriors', label: 'Instagram' },
    { icon: FiFacebook, link: 'https://facebook.com/dmbinteriors', label: 'Facebook' },
    { icon: FiLinkedin, link: 'https://linkedin.com/company/dmbinteriors', label: 'LinkedIn' }
  ];

  return (
    <section 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-forest-night via-forest-night to-obsidian-black relative overflow-hidden"
      id="contact"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-antique-gold rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-antique-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-antique-gold transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <MotionDiv.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory-mist mb-4">
            Let's Create Something
            <span className="block text-antique-gold mt-2">Beautiful Together</span>
          </h2>
          <p className="text-lg text-olive-slate max-w-3xl mx-auto leading-relaxed">
            Join over 100 satisfied clients who've trusted DMB to bring their spaces to life with creativity and innovation.
          </p>
        </MotionDiv.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Contact Form - Left Side */}
          <MotionDiv.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-forest-night/50 to-obsidian-black/30 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-3xl border border-olive-slate/20 shadow-card-hover">
              <h3 className="text-2xl sm:text-3xl font-bold text-ivory-mist mb-6 flex items-center">
                <FiMessageSquare className="mr-3 text-antique-gold" />
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <MotionDiv.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-olive-slate group-focus-within:text-antique-gold transition-colors duration-300" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-obsidian-black/40 border border-olive-slate/30 rounded-xl text-ivory-mist placeholder-olive-slate focus:border-antique-gold focus:outline-none focus:ring-2 focus:ring-antique-gold/20 transition-all duration-300"
                  />
                </MotionDiv.div>

                {/* Email Field */}
                <MotionDiv.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-olive-slate group-focus-within:text-antique-gold transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-obsidian-black/40 border border-olive-slate/30 rounded-xl text-ivory-mist placeholder-olive-slate focus:border-antique-gold focus:outline-none focus:ring-2 focus:ring-antique-gold/20 transition-all duration-300"
                  />
                </MotionDiv.div>

                {/* Phone Field */}
                <MotionDiv.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-olive-slate group-focus-within:text-antique-gold transition-colors duration-300" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    className="w-full pl-12 pr-4 py-4 bg-obsidian-black/40 border border-olive-slate/30 rounded-xl text-ivory-mist placeholder-olive-slate focus:border-antique-gold focus:outline-none focus:ring-2 focus:ring-antique-gold/20 transition-all duration-300"
                  />
                </MotionDiv.div>

                {/* Message Field */}
                <MotionDiv.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <FiMessageSquare className="absolute left-4 top-6 text-olive-slate group-focus-within:text-antique-gold transition-colors duration-300" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    required
                    rows="5"
                    className="w-full pl-12 pr-4 py-4 bg-obsidian-black/40 border border-olive-slate/30 rounded-xl text-ivory-mist placeholder-olive-slate focus:border-antique-gold focus:outline-none focus:ring-2 focus:ring-antique-gold/20 transition-all duration-300 resize-none"
                  ></textarea>
                </MotionDiv.div>

                {/* Submit Button */}
                <MotionDiv.button
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                    submitSuccess 
                      ? 'bg-green-600 text-white' 
                      : 'bg-antique-gold text-obsidian-black hover:bg-transparent hover:text-antique-gold hover:border-2 hover:border-antique-gold'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-obsidian-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitSuccess ? (
                    <span>Message Sent Successfully!</span>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </MotionDiv.button>
              </form>
            </div>
          </MotionDiv.div>

          {/* Contact Information - Right Side */}
          <MotionDiv.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="lg:pl-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-ivory-mist mb-8">
                Get in Touch
              </h3>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const ContactCard = info.link ? 'a' : 'div';
                  
                  return (
                    <MotionDiv.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <ContactCard
                        {...(info.link && { 
                          href: info.link, 
                          target: info.link.startsWith('http') ? '_blank' : undefined,
                          rel: info.link.startsWith('http') ? 'noopener noreferrer' : undefined
                        })}
                        className={`group flex items-start space-x-4 p-3 rounded-2xl transition-all duration-300 ${
                          info.link 
                            ? 'hover:bg-antique-gold/10 hover:border-antique-gold/30 border border-transparent cursor-pointer' 
                            : 'border border-olive-slate/20'
                        }`}
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                          info.link
                            ? 'border-olive-slate group-hover:border-antique-gold group-hover:bg-antique-gold/20'
                            : 'border-antique-gold bg-antique-gold/10'
                        }`}>
                          <Icon className={`text-base transition-colors duration-300 ${
                            info.link
                              ? 'text-olive-slate group-hover:text-antique-gold'
                              : 'text-antique-gold'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-semibold text-ivory-mist mb-1">
                            {info.title}
                          </h4>
                          <p className={`text-sm font-medium transition-colors duration-300 ${
                            info.link 
                              ? 'text-olive-slate group-hover:text-antique-gold' 
                              : 'text-antique-gold'
                          }`}>
                            {info.value}
                          </p>
                          <p className="text-xs text-olive-slate/80 mt-1">
                            {info.description}
                          </p>
                        </div>
                      </ContactCard>
                    </MotionDiv.div>
                  );
                })}
              </div>

              {/* Social Media Links */}
              <MotionDiv.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="border-t border-olive-slate/20 pt-8"
              >
                <h4 className="text-lg font-semibold text-ivory-mist mb-4">
                  Follow Our Work
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <MotionDiv.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group w-12 h-12 rounded-xl border-2 border-olive-slate hover:border-antique-gold flex items-center justify-center transition-all duration-300 hover:bg-antique-gold/20"
                        aria-label={social.label}
                      >
                        <Icon className="text-lg text-olive-slate group-hover:text-antique-gold transition-colors duration-300" />
                      </MotionDiv.a>
                    );
                  })}
                </div>
              </MotionDiv.div>
            </div>
          </MotionDiv.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;