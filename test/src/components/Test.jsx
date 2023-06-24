import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion'
import '../css/Content.css';
import pic1 from '../css/img/pic1.png';
import pic2 from '../css/img/pic2.png';
import pic3 from '../css/img/pic3.png';

function Test() {
    const [showAboutMe, setShowAboutMe] = useState(false);
    const aboutMeRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(aboutMeRef, { once: true });

    const handleProceedClick = () => {
        setShowAboutMe(true);
        setTimeout(() => {
          window.scrollTo({
            top: aboutMeRef.current.offsetTop,
            behavior: 'smooth',
          })
        }, 100);
      };

  return (
    <>
      <div className='content'>
        <div className='content-container'>
          <div className='banner'>
            <motion.h4 animate={{y: 50}}>&#x1F4AB; Hey, Guys!</motion.h4>

            <div className='ban1'>
              <motion.p animate={{y: 50}} 
              className='p1'>I am</motion.p>

              <motion.p animate={{y: 50}} 
              className='p2'>Mary Villacampa</motion.p>
            </div>

            <motion.h2 animate={{y: 50}}>and I love bringing ideas come to life!</motion.h2>

            <motion.p animate={{y: 50}} className='banner-intro'>
              I am a 4th-year data science student. I specialize in data analysis,
              web and software development, and UI/UX design. I love helping people
              and create wonder through technology with style. I am mostly fond of drawing
              meaningful stories from data.
            </motion.p>
            <motion.button animate={{ y: 50}} 
            className='proceed-btn' onClick={handleProceedClick}>
              Proceed
            </motion.button>

           
                <motion.div animate={{y: [-80, 80], rotate: [0, 200, 200, 0]}} transition={{ bounce: 2, duration: 2.5, repeat: Infinity, repeatType: "loop" }}
                className='shape circ1'></motion.div>

                <motion.div animate={{y: -80, rotate: [0, 90, 90, 0]}} transition={{ bounce: 2, duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className='shape triangle1'></motion.div>

                <motion.div animate={{y: -80, rotate: [0, 90, 90, 0]}} transition={{ bounce: 2, duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className='shape triangle2'></motion.div>

                <motion.div animate={{y: -80, rotate: [0, 200, 200, 0]}} transition={{ bounce: 2, duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className='shape circ2'></motion.div>

                <motion.div animate={{y: -80, rotate: [0, 90, 90, 0]}} transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                className='shape square1'></motion.div>

                <motion.div animate={{y: -80, rotate: [0, 200, 200, 0]}} transition={{ bounce: 2, duration: 2.5, repeat: Infinity, repeatType: "loop" }}
                className='shape circ3'></motion.div>
          </div>

          
            {showAboutMe && (
            <motion.div animate={{ y: 50}} 
            className={`about-me ${showAboutMe ? 'show' : ''}`} ref={aboutMeRef}>
              <h4>&#x1F44B; About me</h4>
              <div className='sub-container1'>
                <ul className='parag'>
                  <li>
                    <p>
                      My full name is Mary Rose Jofel Villacampa. My passion for data science
                      has been there ever since I was in senior high school. I took up data science
                      in the hopes of making the world a better place through the illumination of
                      comprehensive analytics. On the other hand, I developed my interest for web
                      and software development in my early 3rd year of college, and in relation to
                      this, my creativity in app design grew as well.
                    </p>
                  </li>
                  <li>
                    <p>
                      Up to this day, I am striving to improve my skillset and explore more on
                      what there is to know. I aspire to create wonder and bridges that would help
                      people inspire themselves as well.
                    </p>
                  </li>
                  <li>
                    <p>
                      I am currently building an application that is integrated with AI to help
                      students understand academic materials better, especially those who are
                      studying in college and going through their undergraduate thesis.
                    </p>
                  </li>
                </ul>

                <div className='self-images'>
                  <motion.img src={pic1} alt='pic1' animate={{y: [-6, 6]}} transition={{duration:2, repeat:Infinity, repeatType:'reverse'}}
                  className='pic1' />
                  <motion.img src={pic2} alt='pic2' className='pic2' />
                  <motion.img src={pic3} alt='pic3' className='pic3' />
                </div>
              </div>
            </motion.div>
            )}
          
        </div>
      </div>
    </>
  );
}

export default Test;
