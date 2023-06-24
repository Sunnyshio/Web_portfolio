import React from 'react';
import '../css/Home.css'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Test from '../components/Test.jsx'

function Home() {
    return(
        <>
        <div>
            <Sidebar />
            <Navbar />
            <Test />
        </div>
        </>
    )
}

export default Home;