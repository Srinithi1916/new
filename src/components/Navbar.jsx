import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoimg from './img/logo.jpg';

const Navbar = () => {

  const setstyle = {padding : '20px', marginRight : '40px', color: 'black', fontWeight: 'bold', fontFamily: 'Poppins'};

const setcolor = {textDecoration: 'none',backgroundColor: 'lightgreen',padding: '5px', marginLeft: '20px', fontFamily:'Poppins', fontSize: '2rem', borderRadius: '10px'}

  return (

    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position = 'fixed' sx =  {{backgroundColor: 'white' , height: 'auto'}} >
          <Toolbar>
          <Link to = '/'>
            <Box component = 'img'
            sx = {{height: '50px', marginRight: 'auto' , marginLeft: '50px'}}
            src={logoimg} />
          </Link>         
          <Box sx = {{flexGrow: 1, marginLeft:'60px'}}>

            <NavLink to = '/service' style = {setcolor}>service</NavLink>
            <NavLink to = '/pricing' style = {setcolor}>pricing</NavLink>
            <NavLink to = '/about' style = {setcolor}>about</NavLink>
            <NavLink to = '/contactus ' style = {setcolor}>contact us</NavLink>

          </Box>

          <NavLink to = '/login'><Button sx = {{color: 'black', fontWeight: 'bold'}}variant='contained' color =  'inherit'>Login</Button></NavLink>

          <NavLink to = '/signup'><Button sx = {{marginLeft : '20px', color: 'black' , fontWeight: 'bold'}} color="inherit" variant='contained'>Signup</Button></NavLink>  
          </Toolbar>
        </AppBar>
      </Box>
    </div>
    
    
  );
}
export default Navbar;