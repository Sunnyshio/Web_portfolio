import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <motion.div
      className='navbar'>

        <Section>
        <div className='nav-menu-container'>

          <ul className='nav-menu'>
            <li>About me</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact me</li>
          </ul>
          <button className='resume-btn'>Resume</button>
        </div>
        </Section>
      </motion.div>
    </>
  );
}

export default Navbar;
