import React from 'react';
import '../css/Home.css'
import Cube from '../components/Cube.jsx'
import Navbar from '../components/Navbar.jsx'

function Home() {
    return(
        <>
        <div>
            <Navbar />
            <Cube />
        </div>
        </>
    )
}

export default Home;