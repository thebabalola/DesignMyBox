import { useEffect, useRef } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

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

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const inputs = form.querySelectorAll('input, textarea');

    const validateInput = (input) => {
      const isValid = input.checkValidity();
      const parent = input.parentElement;
      parent.classList.remove('input-valid', 'input-invalid');
      if (input.value.trim()) {
        parent.classList.add(isValid ? 'input-valid' : 'input-invalid');
      }
    };

    inputs.forEach((input) => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('input-focused');
      });
      input.addEventListener('blur', () => {
        input.parentElement.classList.remove('input-focused');
        validateInput(input);
      });
      input.addEventListener('input', () => validateInput(input));
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('focus', () => {});
        input.removeEventListener('blur', () => {});
        input.removeEventListener('input', () => {});
      });
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-darkest-bg animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light-grey mb-4">Get In Touch</h2>
          <p className="text-lg text-light-grey max-w-2xl mx-auto">Let's collaborate on your next project</p>
          <div className="w-20 h-1 bg-primary-blue mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-dark-accent/50 p-8 rounded-lg glass-effect">
            <form ref={formRef} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light-grey mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-dark-accent/50 text-light-grey rounded-lg border border-medium-grey focus:ring-2 focus:ring-primary-blue"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-light-grey mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-dark-accent/50 text-light-grey rounded-lg border border-medium-grey focus:ring-2 focus:ring-primary-blue"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-light-grey mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 bg-dark-accent/50 text-light-grey rounded-lg border border-medium-grey focus:ring-2 focus:ring-primary-blue"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <a
                href="#"
                className="inline-block bg-primary-blue text-darkest-bg font-semibold px-6 py-3 rounded-lg glow-effect hover:bg-primary-blue/80"
              >
                Send Message
              </a>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-light-grey">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-primary-blue">✉️</span>
                <a href="mailto:t.babalolajoseph@gmail.com" className="text-light-grey hover:text-primary-blue">
                  t.babalolajoseph@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-blue">📞</span>
                <a href="tel:+2348121223631" className="text-light-grey hover:text-primary-blue">
                  +2348121223631
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-blue">📍</span>
                <span className="text-light-grey">Lagos, Nigeria</span>
              </div>
            </div>
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/thebabalola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey hover:text-primary-blue text-2xl transition-all hover:scale-110"
                title="GitHub"
              >
                🔗
              </a>
              <a
                href="https://linkedin.com/in/babalola-taiwo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-grey hover:text-primary-blue text-2xl transition-all hover:scale-110"
                title="LinkedIn"
              >
                💼
              </a>
              <a
                href="mailto:t.babalolajoseph@gmail.com"
                className="text-light-grey hover:text-primary-blue text-2xl transition-all hover:scale-110"
                title="Email"
              >
                ✉️
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;