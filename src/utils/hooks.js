import { useEffect } from 'react';

export const useSmoothScroll = (headerRef = null) => {
  return (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = headerRef?.current?.offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };
};

export const useHeaderBehavior = (headerRef) => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const header = headerRef.current;

      if (currentScrollY > 100) {
        header.classList.add('backdrop-blur-xl', 'bg-darkest-bg/90', 'shadow-lg');
        header.style.transform = currentScrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
      } else {
        header.classList.remove('backdrop-blur-xl', 'bg-darkest-bg/90', 'shadow-lg');
        header.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerRef]);
};