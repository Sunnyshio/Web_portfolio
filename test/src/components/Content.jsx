import React, { useState, useEffect } from 'react';
import '../css/Content.css';
import pic1 from '../css/img/pic1.png'
import pic2 from '../css/img/pic2.png'
import pic3 from '../css/img/pic3.png'

function Content() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(true);
  }, []);

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

                <p className='banner-intro'>I am a 4th-year data science student. 
                I specialize in data analysis, web and software development, and UI/UX design. 
                I love helping people and create wonder through technology with style. 
                I am mostly fond of drawing meaningful stories from data.</p>

                <button className='proceed-btn'>Proceed</button>

                <div className='shape circ1'></div>

                <div className='about-me'>
                    <h4>&#x1F44B; About me</h4>
                    
                    <div className='sub-container1'>
                        <ul className='parag'>
                            <li><p>My full name is Mary Rose Jofel Villacampa. 
                            My passion for data science has been there ever since I was in senior high school. 
                            I took up data science in the hopes of making the world a better place through the 
                            illumination of comprehensive analytics. On the other hand, I developed my interest 
                            for web and software development in my early 3rd-year of college and in relation to 
                            this, my creativity in app design grew as well. </p></li>

                            <li><p>Up to this day, I am striving in improving my skillset and exploring more on what 
                            there is to know. I aspire to create wonder and bridges that would help people inspire 
                            themselves as well.</p></li>

                            <li><p>I am currently building an application that is integrated with AI to help students 
                            understand academic materials better. Specially the ones who are studying in college and is 
                            going through their undergraduate thesis. </p></li>
                        </ul>

                        <div className='self-images'>
                            <img src={pic1} alt="pic1" className='pic1'/>
                            <img src={pic2} alt="pic2" className='pic2'/>
                            <img src={pic3} alt="pic3" className='pic3'/>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>

      </div>
    </>
  );
}

export default Content;
