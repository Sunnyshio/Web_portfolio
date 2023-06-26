import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/Content.css';
import pic1 from '../css/img/pic1.png';
import pic2 from '../css/img/pic2.png';
import pic3 from '../css/img/pic3.png';

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

function Test() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showScrolldownText, setShowScrolldownText] = useState(false);
  const aboutMeRef = useRef(null);

  // const handleProceedClick = () => {
  //   setShowAboutMe(true);
  //   setTimeout(() => {
  //     const scrollHeight = document.documentElement.scrollHeight;
  //     const windowHeight = window.innerHeight;
  //     const bottomOffset = scrollHeight - windowHeight;
  //     window.scrollTo({
  //       top: bottomOffset,
  //       behavior: 'smooth',
  //     });
  //   }, 100);
  // };
  const handleProceedClick = () => {
    setShowAboutMe(true);
    setTimeout(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const bottomOffset = scrollHeight - windowHeight;
      window.scrollTo({
        top: bottomOffset,
        behavior: 'smooth',
      });
      setShowScrolldownText(true);
    }, 100);
  };
  

  return (
    <>
      <div className='content'>
        <div className='content-container'>
          <Section>
            <div className='banner'>
              <motion.h4 animate={{ y: 50 }}>&#x1F4AB; Hey, Guys!</motion.h4>

              <div className='ban1'>
                <motion.p animate={{ y: 50 }} className='p1'>
                  I am
                </motion.p>

                <motion.p animate={{ y: 50 }} className='p2'>
                  Mary Villacampa
                </motion.p>
              </div>

              <motion.h2 animate={{ y: 50 }}>
                and I love bringing ideas come to life!
              </motion.h2>

              <motion.p animate={{ y: 50 }} className='banner-intro'>
                I am a 4th-year data science student. I specialize in data
                analysis, full-stack development, and UI/UX design. I love
                helping people and create wonder through technology with style. I
                am mostly fond of drawing meaningful stories from data.
              </motion.p>
              <motion.button
                animate={{ y: 50 }}
                className='proceed-btn'
                onClick={handleProceedClick}
              >
                Proceed
              </motion.button>

              <motion.div
                animate={{ y: [-80, 80], rotate: [0, 200, 200, 0] }}
                transition={{
                  bounce: 2,
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='shape circ1'
              ></motion.div>

              <motion.div
                animate={{ y: -80, rotate: [0, 90, 90, 0] }}
                transition={{
                  bounce: 2,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='shape triangle1'
              ></motion.div>

              <motion.div
                animate={{ y: -80, rotate: [0, 90, 90, 0] }}
                transition={{
                  bounce: 2,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='shape triangle2'
              ></motion.div>

              <motion.div
                animate={{ y: -80, rotate: [0, 200, 200, 0] }}
                transition={{
                  bounce: 2,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='shape circ2'
              ></motion.div>

              <motion.div
                animate={{ y: -80, rotate: [0, 90, 90, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                className='shape square1'
              ></motion.div>

              <motion.div
                animate={{ y: -80, rotate: [0, 200, 200, 0] }}
                transition={{
                  bounce: 2,
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='shape circ3'
              ></motion.div>
            </div>
          </Section>

          {showAboutMe && (
            <Section>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='about-me'
                ref={aboutMeRef}
              >
                <motion.h4 animate={{ y: 50 }} transition={{ duration: 0.3 }}>
                  &#x1F44B; About me </motion.h4>
                  <div className='sub-container1'>
                    <ul className='parag'>
                      <li>
                        <motion.p animate={{ y: 50 }} transition={{ duration: 0.3 }}>
                          My full name is Mary Rose Jofel Villacampa. My passion for
                          data science has been there ever since I was in senior high
                          school. I took up data science in the hopes of making the world
                          a better place through the illumination of comprehensive
                          analytics. On the other hand, I developed my interest for web
                          and software development in my early 3rd year of college, and
                          in relation to this, my creativity in app design grew as well.
                        </motion.p>
                      </li>
                      <li>
                        <motion.p animate={{ y: 50 }} transition={{ duration: 0.5 }}>
                          Up to this day, I am striving to improve my skillset and
                          explore more on what there is to know. I aspire to create wonder
                          and bridges that would help people inspire themselves as well.
                        </motion.p>
                      </li>
                      <li>
                        <motion.p animate={{ y: 50 }} transition={{ duration: 0.8 }}>
                          I am currently building an application that is integrated with
                          AI to help students understand academic materials better,
                          especially those who are studying in college and going through
                          their undergraduate thesis.
                        </motion.p>
                      </li>
                    </ul>

                    <motion.div animate={{ y: 40 }} transition={{ duration: 1.5 }}>
                      <div className='self-images'>
                        <motion.img
                          src={pic1}
                          alt='pic1'
                          animate={{ y: [6, -6], rotate: -5 }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                          className='pic1'
                        />
                        <motion.img
                          src={pic2}
                          alt='pic2'
                          animate={{ y: [6, -6], rotate: 20 }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                          className='pic2'
                        />
                        <motion.img
                          src={pic3}
                          alt='pic3'
                          animate={{ y: [-6, 6], rotate: -10 }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                          className='pic3'
                        />
                      </div>
                    </motion.div>
                  </div>

              </motion.div>
            </Section>
          )}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: showScrolldownText ? 1 : 0 }} transition={{ duration: 1 }}
          className='scrolldown-text'>Scroll down</motion.p>

          <Section>
            <motion.div className='experience'>

            </motion.div>
          </Section>
        </div>
      </div>
    </>
  );
}

export default Test;

