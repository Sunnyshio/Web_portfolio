import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';

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
      <div className={`navbar ${isVisible ? '' : 'hidden'} ${isTopOfPage ? 'transparent' : ''}`}>
        <div className='nav-menu-container'>
          <ul className='nav-menu'>
            <li>About me</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact me</li>
          </ul>
          <button className='resume-btn'>Resume</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
