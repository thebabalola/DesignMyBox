import { useEffect, useRef } from 'react';

const Footer = () => {
  const backToTopRef = useRef(null);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('#header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const updateBackToTop = () => {
      const currentScrollY = window.scrollY;
      backToTopRef.current.style.opacity = currentScrollY > 300 ? '1' : '0';
      backToTopRef.current.style.transform = currentScrollY > 300 ? 'translateY(0)' : 'translateY(20px)';
    };

    window.addEventListener('scroll', updateBackToTop);
    return () => window.removeEventListener('scroll', updateBackToTop);
  }, []);

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-accent/95 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold gradient-text">Babalola Taiwo</h3>
            <p className="text-light-grey mt-2">Frontend & Blockchain Developer</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-light-grey mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-light-grey hover:text-primary-blue"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-light-grey mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-6">
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
        <div className="mt-12 pt-8 border-t border-medium-grey/30 text-center">
          <p className="text-light-grey">© 2025 Babalola Taiwo. All rights reserved.</p>
          <button
            id="back-to-top"
            ref={backToTopRef}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 text-primary-blue hover:text-primary-blue/80"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.3s' }}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;