import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '@fortawesome/fontawesome-free/css/all.css';
import '../css/Content.css';
import '../css/css/global.css';
import pic1 from '../css/img/pic1.png';
import pic2 from '../css/img/pic2.png';
import pic3 from '../css/img/pic3.png';
import ingen from '../css/img/Ingenuity.png';
import sphere from '../css/img/Sphere.png';
import sadya from '../css/img/sadya.png'
import sysdev from '../css/img/sysdev.jpeg'
import lightsource from '../css/img/lightsource.png'
import AI from '../css/img/AI.png'

function ConnectorDiv() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ width: 0 }}
      animate={{ width: inView ? '30%' : 0 }}
      transition={{ duration: 0.9, delay: 0.8 }}
      className='connector-lineh'
    ></motion.div>
  );
}

function Section({ children }) {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section ref={ref}>
      <motion.span
        style={{
          transform: inView ? 'none' : 'translateY(200px)',
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [showSections, setShowSections] = useState(false);
  const sectionsRef = useRef(null);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const name = 'Mary Villacampa';

  useEffect(() => {
    const interval = setInterval(() => {
      setText(name.substring(0, index));
      setIndex(index => index + 1);
    }, 100); // Typing speed in milliseconds

    return () => clearInterval(interval);
  }, [index]);


  const handleProceedClick = () => {
    setShowSections(true);
    setTimeout(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      const targetScroll = scrollHeight * 0.14; // Scroll to 50% of the page height
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      // setShowScrolldownText(true);
    }, 100);
  };

  
  
  
    
  return (
    <>
      <div className='content'>
        <div className='content-container'>

          <div className='note'>
            <p>Website  is  under  construction</p>
          </div>

          <Section>
            <div className='banner gap-3'>
              <Section>
                <motion.h4 animate={{ y: 50 }} transition={{delay: 0.5}} >
                  <p className='mb-11'>&#x1F4AB; Hey, Guys!</p></motion.h4>
              </Section>

              <div className='ban1'>
                <Section><motion.p animate={{ y: 50 }} transition={{delay: 0.3}} className='p1'>
                  I am
                </motion.p></Section>

                <Section><motion.p animate={{ y: 50 }} transition={{delay: 0.3}} className='p2'>
                  {text}
                </motion.p></Section>
              </div>

              <Section><motion.h2 animate={{ y: 50 }} transition={{delay: 0.3}}>
                <p className='mt-7 text-[25px]'>and I love bringing ideas come to life!</p>
              </motion.h2></Section>

              <Section><motion.p animate={{ y: 50 }} transition={{delay: 0.1}} className='banner-intro mt-5'>
                I am a 4th-year data science student. I specialize in data
                analysis, full-stack development, and UI/UX design. I love
                helping people and create wonder through technology with style. I
                am mostly fond of drawing meaningful stories from data.
              </motion.p></Section>

              <Section><motion.button
                animate={{ y: 50 }}
                className='border proceed-btn text-sm border-transparent hover:border-cream hover:bg-transparent ease-in-out duration-300'
                onClick={handleProceedClick}
              >
                Proceed
              </motion.button></Section>

              
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

              <motion.div
                animate={{ y: -80, rotate: [0, 90, 90, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                className='shape square2'
              ></motion.div>

              <motion.div
                animate={{ y: -80, rotate: [0, 90, 90, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                className='shape circ4'
              ></motion.div>

            </div>
          </Section>

          {showSections && (
            <Section><div className='sections'>
              
              <Section className='about-me'>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                  className='about-me'
                  ref={sectionsRef}>
                    
                  <motion.h4 animate={{ y: 60 }} transition={{ duration: 0.3, delay: 0.8 }}>
                    &#x1F44B; About me </motion.h4> 
                    <div className='sub-container1 mt-8 ml-8'>
                      <ul className='parag'>
                        <li className='mb-5'>
                          <motion.p animate={{ y: 60 }} transition={{ duration: 0.5, delay: 0.5 }}>
                            My full name is Mary Rose Jofel Villacampa. My passion for
                            data science has been there ever since I was in senior high
                            school. I took up data science in the hopes of making the world
                            a better place through the illumination of comprehensive
                            analytics. On the other hand, I developed my interest for web
                            and software development in my early 3rd year of college, and
                            in relation to this, my creativity in app design grew as well.
                          </motion.p>
                        </li>
                        <li className='mb-5'>
                          <motion.p animate={{ y: 60 }} transition={{ duration: 0.5 }}>
                            Up to this day, I am striving to improve my skillset and
                            explore more on what there is to know. I aspire to create wonder
                            and bridges that would help people inspire themselves as well.
                          </motion.p>
                        </li>
                        <li>
                          <motion.p animate={{ y: 60 }} transition={{ duration: 0.8 }}>
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

                    <motion.div animate={{ y: 60 }} transition={{ duration: 0.8 }}
                      className='techstack'>
                        <div className="techstack-text ml-10 mt-10 mb-3">
                          <p>My tech stack:</p>
                        </div>

                        <div className='techstack-img ml-10 gap-4'>
                          <ul className='stack-line1'>
                            <li>Sass</li>
                            <li>Nodejs</li>
                            <li>Reactjs</li>
                            <li>Python</li>
                            <li>Typescript</li>
                            <li>CSS/HTML5</li>
                          </ul>
                          <ul className='stack-line2'>
                            <li>Framer Motion </li>
                            <li>Expressjs </li>
                            <li>SQL </li>
                          </ul>
                          <ul className='stack-line3'>
                            <li>Scikit-Learn</li>
                            <li>Keras</li>
                            <li>Figma</li>
                            <li>SciPy</li>
                          </ul>
                        </div>
                    </motion.div>

                </motion.div>
              </Section>


              {/* EXPERIENCE */}

              
            <div className='experience'>

              <Section><h3 className='experience-text text-xl font-bold'>
              &#128188;  My Work Experience</h3></Section>

              <Section className='exp1'>
                <div className='experience-container'>
                  <div className='cards-container'>
                  <ul className='card1'>
                        <li className='card-info'>
                          <div className='info-title'>
                            <img src={sysdev} alt="ingenuity_logo" className='img1'/>
                            <div className='flex flex-col title ml-[-10px]'>
                              <p className=''>SAMAHAN</p>
                              <p className='text-[1.1rem] mt-[-5px]'>Systems and Development</p></div>
                          </div>
                          <p className='position flex justify-center mt-6 mr-[1rem]'>FULL-STACK DEVELOPMENT INTERN</p>
                          <p className='date flex justify-center pt-2 mr-[1rem]'>JULY 2023 – Present</p>
                        </li>

                        <li className='card-divider1 mt-[-3.5rem]'></li>
                        
                        <li className='card-description'>
                          <p className='w-[400px] py-2 text-center pr-[4px]'>I am a frontend developer at Ateneo de Davao's SAMAHAN Systems and Development department.
                            My resposibilities include, collaborative development, and version control / git workflow.
                            I translate design mockups and wireframes into interactive and intuitive user interfaces, and 
                            work with other developers to deliver projects that are needed by Ateneo de Davao's institution. 
                          </p>
                        </li>
                  </ul>
                  </div>
                </div>

                <ConnectorDiv>
                <motion.div initial={{ width: 0 }} animate={{ width: '30%' }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='connector-lineh'>
                </motion.div>
              </ConnectorDiv>
              </Section>

              

              <Section className='exp2'>
                <div className='experience-container2 mt-[3rem]'>
                  <div className='cards-container'>
                  <ul className='card2'>
                  <li className='card-description mr-[2rem]'>
                          <p>Led a team of intern-developers and headed</p>
                          <p>the development of an artificial intelligence </p>
                          <p>integrated application that acts as a student</p>
                          <p>helper. The application is integrated with AI </p>
                          <p>through ChatGPT’s API endpoint connection.</p>
                        </li>

                        <li className='card-divider2 mr-[1rem] mt-[7px]'></li>
                        
                        <li className='card-info ml-[-2rem]'>
                          <div className='info-title'>
                            <img src={ingen} alt="ingenuity_logo" className='img1'/>
                            <div className='title ml-[-10px]'>
                              <p>Ingenuity Software</p></div>
                          </div>
                          <p className='flex justify-center mt-4 mr-[6px] font-semibold text-center'>FULL-STACK DEVELOPMENT INTERN</p>
                          <p className='date flex justify-center pt-2 mr-[1rem]'>APRIL 2023 – JUNE 2023</p>
                        </li>
                  </ul>
                  </div>
                </div>

                <ConnectorDiv>
                <motion.div initial={{ width: 0 }} animate={{ width: '30%' }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ marginLeft: '10rem' }}
                  className='connector-lineh'>
                </motion.div>
              </ConnectorDiv>
              </Section>

              <Section className='exp3'>
                <div className='experience-container3 mt-[1.5rem]'>
                  <div className='cards-container'>
                  <ul className='card3'>
                        <li className='card-info'>
                          <div className='info-title'>
                            <img src={sphere} alt="ingenuity_logo" className='img1'/>
                            <div className='title ml-[-10px]'>
                              <p>Sphere Rocket</p></div>
                          </div>
                          <p className='flex position mt-4 justify-center mr-[1rem]'>FRONTEND DEVELOPER</p>
                          <p className='flex date pt-2 justify-center mr-[1rem]'>JULY 2022 – JANUARY 2023</p>
                        </li>

                        <li className='card-divider3 mt-[-3.5rem]'></li>
                        
                        <li className='card-description'>
                          <p className='w-[400px] py-2 text-center'>I played a pivotal role in crafting seamless and visually appealing user interfaces for our web applications. 
                          Over the course of one year, I collaborated closely with full-stack and backend developers to deliver high-quality products that met 
                          both user experience and business requirements.</p>
                          
                        </li>
                  </ul>
                  </div>
                </div>

                <ConnectorDiv>
                <motion.div initial={{ width: 0 }} animate={{ width: '30%' }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className='connector-lineh1'>
                </motion.div>
              </ConnectorDiv>
              </Section>
            </div>
              

              <Section>
                <motion.div className='projects'>
                <div className='projects-container mt-[80rem]'>

                  <h3 className='text-xl font-bold'><i>&#128736;</i> Some of My Works</h3>

                  <ul className='flex flex-col gap-32'>

                    <Section>
                    <li className='proj1 flex items-center'>
                      <div className='proj1 flex flex-col gap-3 w-[500px] h-[150px] mr-[-3.5rem] z-20'>
                        <div className='flex flex-col mt-[-1rem]'>
                        <p className='text-2xl text-white'>Ateneo U-Fest: Sadya 2023</p>
                        <p className='px-5 py-3 bg-lightBlue rounded-md text-white text-center'>
                          I collaborated with other frontend and backend developer in creating the Ateneo U-Fest website. This website was created for the students and all staff
                          of the Ateneo de Davao University. It aims to inform the students and teaching/non-teaching staff of all the activities that will happen during the 3-day long university fiesta.
                          
                        </p>
                        </div>
                        <ul className='flex gap-5 ml-3'>
                          <li className='text-white'>Typescript</li>
                          <li className='text-white'>Tailwindcss</li>
                          <li className='text-white'>Nodejs</li>
                          <li className='text-white'>UI Storybook</li>
                        </ul>
                      </div>
                      <div className='bg-white w-[600px] rounded-md draggable-false z-0'>
                        <img src={sadya} alt="AI project" className='rounded-md'/>
                      </div>
                    </li>
                    </Section>

                    <Section>
                    <li className='proj2 flex items-center'>
                    <div className='bg-white w-[600px] rounded-md draggable-false'>
                        <img src={AI} alt="AI project" className='rounded-md'/>
                      </div>
                    <div className='proj2 flex flex-col gap-3 w-[500px] h-[150px] ml-[-3.5rem]'>
                        <p className='text-2xl text-white text-right'>Scriptscribe: AI PDF Helper</p>
                        <p className='px-5 py-3 bg-cream rounded-md text-white text-center'>This webapplication is a project requirement from my summer internship at class Ingenuity Software.
                          I collaborated with 2 other intern-developers in making this application. It aims to help students understand their academic materials better by utilizing artificial intelligence.</p>
                        <ul className='flex gap-5 ml-3 justify-end'>
                          <li className='text-white'>React JS</li>
                          <li className='text-white'>SASS</li>
                          <li className='text-white'>Nodejs</li>
                        </ul>
                    </div>
                    </li>
                    </Section>

                    <Section>
                    <li className='proj3 flex items-center'>
                      <div className='proj3 flex flex-col gap-3 w-[500px] h-[150px] mr-[-3.5rem] z-20'>
                        <p className='text-2xl text-white'>Lightsource Trading</p>
                        <p className='px-5 py-3 bg-lightBlue rounded-md text-white text-center'>This mockup is a project requirement from my software engineering class during my 3rd year in college.
                          It is an inventory management system that helps our clients to automate their processes and bring value to their business.</p>
                        <ul className='flex gap-5 ml-3'>
                          <li className='text-white'>Figma</li>
                        </ul>
                      </div>
                      <div className='bg-white w-[600px] rounded-md draggable-false z-0'>
                        <img src={lightsource} alt="AI project" className='rounded-md'/>
                      </div>
                    </li>
                    </Section>
                  </ul>


                </div>
                </motion.div>
              </Section>

              <Section>
                <motion.div className='contact mt-[55rem] justify-center flex flex-col'>
                <div className='contact-container flex flex-col'>
                  <div><p className='font-semibold text-lg text-center tracking-wider'>Send me a message <i>&#128172;</i></p></div>
                  <div className='mt-[-2.5rem] text-lightBlue'><h3 className='text-3xl font-semibold text-center'>Would you like to work with me?</h3></div>
                </div>
                <div className='flex flex-col items-center gap-5'>
                  <div><p className='w-[430px] text-center text-white mt-7'>You can send me a message through Gmail by clicking the button below.
                    I am excited to work with you!
                  </p></div>
                  <div>
                    <button 
                    href='mailto:maryrosedvillacampa@gmail.com' 
                    className='border border-slate-300 hover:border-cream rounded-md ease-in-out duration-300'>
                    <a href='mailto:maryrosedvillacampa@gmail.com'>
                      <p
                    className='text-lightBlue py-2 px-4 hover:text-cream ease-in-out duration-300 tracking-wider'>Say Hello!
                    </p></a>
                  </button></div>
                </div></motion.div></Section>
                
              

            </div></Section>
          )}


        </div>
      </div>
    </>
  );
}

export default Test;