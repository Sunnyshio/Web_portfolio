import React from 'react';
import Nav from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Content from './components/Content.jsx'

function App() {
  return (
    <div className="first">
      <Sidebar />
      <Nav />
      <Content />
      {/* <Cube /> */}
    </div>
  );
}

export default App;