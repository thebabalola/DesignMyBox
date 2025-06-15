import React from 'react';
import { motion as MotionDiv } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <MotionDiv.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 bg-forest-night"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist text-center mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-center text-pale-stone-grey mb-8">
          Join over 100 satisfied clients who’ve trusted DMB to bring their spaces to life with creativity and innovation.
        </p>
        <p className="text-center text-ivory-mist mb-8">
          Whether you’re dreaming of a vibrant home, a professional office, or a custom furniture piece, we’re here to make it happen—affordably, swiftly, and beautifully.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-ivory-mist mb-4">Contact Information</h3>
            <p className="text-sm text-pale-stone-grey mb-2">
              <strong>Head Office:</strong> HUB 17, 17 Jibowu Street, Yaba, Lagos, Nigeria
            </p>
            <p className="text-sm text-pale-stone-grey mb-2">
              <strong>Production Factory:</strong> Westex Sawmill, Redemption Way, Gbagada, Lagos, Nigeria
            </p>
            <p className="text-sm text-pale-stone-grey mb-2">
              <strong>Phone:</strong> 08121223631 | 09096819846
            </p>
            <p className="text-sm text-pale-stone-grey mb-2">
              <strong>Business Hours:</strong><br />
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: By Appointment
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="[Instagram URL]" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-ivory-mist hover:text-antique-gold transition-colors glow-effect" />
              </a>
              <a href="[Facebook URL]" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl text-ivory-mist hover:text-antique-gold transition-colors glow-effect" />
              </a>
              <a href="https://wa.me/2349096819846" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl text-ivory-mist hover:text-antique-gold transition-colors glow-effect" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-ivory-mist mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-md bg-obsidian-black text-ivory-mist border border-pale-stone-grey focus:outline-none focus:border-antique-gold"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-md bg-obsidian-black text-ivory-mist border border-pale-stone-grey focus:outline-none focus:border-antique-gold"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md bg-obsidian-black text-ivory-mist border border-pale-stone-grey focus:outline-none focus:border-antique-gold"
              />
              <select
                className="w-full p-3 rounded-md bg-obsidian-black text-ivory-mist border border-pale-stone-grey focus:outline-none focus:border-antique-gold"
              >
                <option>Project Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Renovation</option>
                <option>Consultation</option>
              </select>
              <select
                className="w-full p-3 rounded-md bg-obsidian-black text-ivory-mist border border-pale-stone-grey focus:outline-none focus:border-antique-gold"
              >
                <option>Project Timeline</option>
                <option>Within 1 month</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
                <option>6+ months</option>
              </select>
              <select
                className="w-full p-3 rounded-md bg-obsidian-black text-ivory-mist border border-pale-stone-grey focus:outline-none focus:border-antique-gold"
              >
                <option>Budget Range</option>
                <option>Under ₦500k</option>
                <option>₦500k-₦1M</option>
                <option>₦1M-₦2M</option>
                <option>₦2M+</option>
                <option>Let's discuss</option>
              </select>
              <textarea
                placeholder="Tell us about your project"
                className="w-full p-3 rounded-md bg-obsidian-black text-ivory-mist border border-pale-stone-grey focus:outline-none focus:border-antique-gold"
                rows="4"
              ></textarea>
              <Link
                to="/contact-us"
                className="px-6 py-3 rounded-md font-medium text-lg bg-antique-gold text-ivory-mist hover:bg-transparent hover:border-2 hover:border-antique-gold transition-all duration-300 glow-effect"
              >
                Start My Design Journey
              </Link>
            </form>
          </div>
        </div>
      </div>
    </MotionDiv.section>
  );
};

export default Contact;