import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/Sidebar.css'
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../css/img/mimi.png'

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

function Sidebar() {
    return (
        <>
        {/* all elements */}
        <div className='sidebar'>

            <div className='logo-container'>
                <Section><img src={logo} alt="logo" className='logo'/></Section>
            </div>

                {/* socials and line divider */}
                <div className='social-container'>
                    <Section><ul className='socials'>
                        <li className='li1'><a href="https://github.com/Sunnyshio"><i className="fa-brands fa-github fas1" style={{ color:'#251539'}}></i></a></li>
                        <li><i class="fa-brands fa-behance fas2"></i></li>
                        <li><a href="https://www.linkedin.com/in/mary-rose-jofel-villacampa-79bb3b23a/"><i class="fa-brands fa-linkedin-in fas3"></i></a></li>
                        <li><i class="fa-brands fa-instagram fas4"></i></li>
                        <li className='li5'><a href="https://www.facebook.com/maryjofel.villacampa/"><i class="fa-brands fa-facebook-f fas5"></i></a></li>
                    </ul></Section>

                    <ul>
                        <motion.div initial={{ height: 0 }} animate={{ height: '100%' }}
                        transition={{ duration: 0.9, delay: 0.8 }}
                        className='line'></motion.div>
                    </ul>
                    
                </div>

        </div>
        </>
    )
}

export default Sidebar