// Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const handleHome=()=>{
    navigate('/');
  }
  const handleabout=()=>{
    navigate('/about');
  }
  const handleContact=()=>{
    navigate('/contact');
  }
  const handlesignup=()=>{
    navigate('/Register');
  }
  const handleLogin=()=>{
    navigate('/Login');
  }

  return (
    <Container>
      <AppBar position="static" style={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textDecoration: 'none', color: 'blue' }}>
            Event Management
          </Typography>
          
          <Button color="inherit" href="#home" onClick={handleHome}>Home</Button>
          <Button color="inherit" href="#about" onClick={handleabout}>About</Button>
          <Button color="inherit" href="#contact" onClick={handleContact}>Contact</Button>
          <Button color="inherit" href="#login" onClick={handleLogin}>Login</Button>
          <Button color="inherit" href="#login" onClick={handlesignup}>Signup</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Our Event Management Platform
        </Typography>
        <Typography variant="body1" paragraph>
          Plan and book your events with ease. From weddings to corporate gatherings, we've got you covered.
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our services and make your event unforgettable!
        </Typography>
      </Container>
      {/* <footer style={{ marginTop: '20px', padding: '10px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
        <p>&copy; 2023 Your Event Management. All rights reserved.</p>
      </footer> */}
    </Container>
  );
};

export default Navbar;