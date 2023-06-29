import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/Navbar.css';

function Section({ children }) {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section ref={ref}>
      <motion.span
        style={{
          transform: inView ? 'none' : 'translateY(-200px)',
          opacity: inView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </motion.span>
    </section>
  );
}

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const atTopOfPage = currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setIsTopOfPage(atTopOfPage);
      setIsVisible(isScrollingUp || atTopOfPage);
    };

    const checkScrollPosition = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < 10);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', checkScrollPosition);
    };
  }, [prevScrollPos]);

  const menuItems = ['About me', 'Experience', 'Projects', 'Contact me'];

  const handleAboutMeClick = () => {
    const targetOffset = window.innerHeight * 1;
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className={`navbar ${isVisible ? '' : 'hidden'} ${isTopOfPage ? 'transparent' : ''}`}>
        
        <Section><div className='nav-menu-container'>
          <ul className='nav-menu'>
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              >
            {index === 0 ? (
                    <a href="#about" onClick={handleAboutMeClick}>
                      {item}
                    </a>
                  ) : (
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
                  )}
                {/* {item} */}
              </motion.li>
            ))}
          </ul>
          <motion.button initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='resume-btn'>Resume</motion.button>
        </div></Section>
      </div>
    </>
  );
}

export default Navbar;
