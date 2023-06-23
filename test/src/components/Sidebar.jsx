import React from 'react';
import '../css/Sidebar.css'
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../css/img/mimi.png'

function Sidebar() {
    return (
        <>
        {/* all elements */}
        <div className='sidebar'>

            <div className='logo-container'>
                <img src={logo} alt="logo" className='logo'/>
            </div>

                {/* socials and line divider */}
                <div className='social-container'>
                    <ul className='socials'>
                        <li className='li1'><a href="https://github.com/Sunnyshio"><i className="fa-brands fa-github fas1" style={{ color:'#251539'}}></i></a></li>
                        <li><i class="fa-brands fa-behance fas2"></i></li>
                        <li><a href="https://www.linkedin.com/in/mary-rose-jofel-villacampa-79bb3b23a/"><i class="fa-brands fa-linkedin-in fas3"></i></a></li>
                        <li><i class="fa-brands fa-instagram fas4"></i></li>
                        <li className='li5'><a href="https://www.facebook.com/maryjofel.villacampa/"><i class="fa-brands fa-facebook-f fas5"></i></a></li>
                    </ul>

                    <ul>
                        <div className='line'></div>
                    </ul>
                    
                </div>

        </div>
        </>
    )
}

export default Sidebar