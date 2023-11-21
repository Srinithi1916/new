import React from 'react';
import { Paper, Stack, TextField, Typography, Button} from '@mui/material';
import bimag from './img/background-imag.jpg';
import TextFieldbox from './TextFieldbox';
import { Link } from 'react-router-dom'
import CheckboxElement from './CheckboxElement';
import Navbar from './Navbar.jsx';
import { useLocation } from 'react-router-dom';
const LoginPage = () => {

    const size = {width : '500px' , height: '600px'};
    const setCenter = {backgroundImage: `url(${bimag})`, height: '100vh' , width: '100vw', display : 'flex', justifyContent : 'center', alignItems : 'center'};
   
  return (
    <div> 
        <div style = {setCenter }>
        <Paper elevation={20} square={false} style = {size}> 
          
          <Stack spacing = {1} direction = {'column'} align = {'center'} style = {{setCenter, padding : '50px'}}>
    
            <Typography variant = 'h3' fontFamily={'"SemiBold",Poppins'}>Login</Typography><br></br>
            <TextFieldbox ElementName={'Username'} placeHolderText={'Enter Username or Email'} id = 'username'></TextFieldbox>
            <br></br>
            <TextFieldbox ElementName={'Password'}  placeHolderText={'Enter Password'} id = 'password' typeName = {'password'}></TextFieldbox>
            <br></br>
            <CheckboxElement CheckboxLabel={'Remember me'}></CheckboxElement>
            <br></br>
            <Button style = {{borderRadius: '40px', backgroundColor: 'green'}} variant='contained' size = 'large' >SIGN IN</Button>
            <br></br>
            <Stack direction = {'row'} spacing = {1}>
              <Typography> Don't have an Account ?  
              </Typography>
              <Link to = "/signup">SignUp</Link>
    
            </Stack>
            
    
          </Stack>
            
    
        </Paper>
              
                    
            
        </div>
    </div>
    
  )
}
export default LoginPage;