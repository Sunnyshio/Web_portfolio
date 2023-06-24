import React, { useState, useEffect, useRef } from 'react';
import '../css/Content.css';
import pic1 from '../css/img/pic1.png';
import pic2 from '../css/img/pic2.png';
import pic3 from '../css/img/pic3.png';

function Content() {
  const [showBanner, setShowBanner] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const aboutMeRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    setShowBanner(true);
  }, []);


  const handleProceedClick = () => {
    setShowAboutMe(true);
    setTimeout(() => {
      window.scrollTo({
        top: aboutMeRef.current.offsetTop,
        behavior: 'smooth',
      });
    }, 100);
  };

  useEffect(() => {
    if (showAboutMe) {
      animateAboutMe();
    }
  }, [showAboutMe]);

  const animateAboutMe = () => {
    const imageElements = imagesRef.current.children;
    const paragraphElements = aboutMeRef.current.querySelector('.parag').children;

    // Set initial CSS values for the images and paragraphs
    Array.from(imageElements).forEach((img, index) => {
      img.style.transition = `transform 0.5s ease ${index * 0.2}s`;
      img.style.transform = 'translateY(-50px)';
    });

    Array.from(paragraphElements).forEach((paragraph, index) => {
      paragraph.style.transition = `transform 0.5s ease ${index * 0.1 + 0.5}s`;
      paragraph.style.transform = 'translateY(-30px)';
    });

    // Trigger the animations by adding CSS classes
    setTimeout(() => {
      Array.from(imageElements).forEach(img => {
        img.style.transform = 'translateY(0)';
      });

      Array.from(paragraphElements).forEach(paragraph => {
        paragraph.style.transform = 'translateY(0)';
      });
    }, 100);
  };

  return (
    <>
      <div className='content'>
        <div className='content-container'>
          <div className={`banner ${showBanner ? 'show' : ''}`}>
            <h4>&#x1F4AB; Hey, Guys!</h4>
            <div className='ban1'>
              <p className='p1'>I am</p>
              <p className='p2'>Mary Villacampa</p>
            </div>
            <h2>and I love bringing ideas come to life!</h2>
            <p className='banner-intro'>
              I am a 4th-year data science student. I specialize in data analysis,
              web and software development, and UI/UX design. I love helping people
              and create wonder through technology with style. I am mostly fond of drawing
              meaningful stories from data.
            </p>
            <button className='proceed-btn' onClick={handleProceedClick}>
              Proceed
            </button>
            <div className='shape circ1'></div>
            <div className='shape triangle1'></div>
            <div className='shape triangle2'></div>
            <div className='shape circ2'></div>
            <div className='shape square1'></div>
            <div className='shape circ3'></div>
          </div>

          {showAboutMe && (
            <div className={`about-me ${showAboutMe ? 'show' : ''}`} ref={aboutMeRef}>
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

                <div className={`self-images ${showAboutMe ? 'show' : ''}`} ref={imagesRef}>
                  <img src={pic1} alt='pic1' className='pic1' />
                  <img src={pic2} alt='pic2' className='pic2' />
                  <img src={pic3} alt='pic3' className='pic3' />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Content;
