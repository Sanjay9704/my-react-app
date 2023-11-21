import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Register from './Register'
import Image from './event1.jpg'
const Homepage = () => {
  const containerStyle = {
    backgroundImage:`url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };
  return (
    
    <div style={containerStyle}>
       
        <Navbar/>
        
    </div>
  );
}

export default Homepage