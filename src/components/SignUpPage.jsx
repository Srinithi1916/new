import React from 'react';
import { Paper, Stack, TextField, Typography, Button, Link } from '@mui/material';
import bimag from './img/background-imag.jpg';
import TextFieldbox from './TextFieldbox';
import CheckboxElement from './CheckboxElement';
import Navbar from './Navbar'

const SignUpPage = () => {

    const size = {width : '500px' , height: '700px',  marginTop: '70px'};
    const setCenter = {backgroundImage: `url(${bimag})`, height: '100vh' , width: '100vw', display : 'flex', justifyContent : 'center', alignItems : 'center'};
  return (
    <>
    <div style = {setCenter}>
    <Paper elevation={20} square={false} style = {size}>
      
      <Stack spacing = {1} direction = {'column'} align = {'center'} style = {{setCenter, padding : '50px'}}>

        <Typography variant = 'h3' fontFamily={'"SemiBold",Poppins'}>SignUp</Typography><br></br>
        <TextFieldbox ElementName={'Username'} id={'username'} placeHolderText={'Username or Email'}></TextFieldbox>
        <br></br>
        <TextFieldbox ElementName={'Create Password'} id={'password'} placeHolderText={'CreatePassword'}></TextFieldbox>
       
        <br></br>
        <TextFieldbox ElementName={'Confirm Password'} id={'password'} placeHolderText={'ConfirmPassword'}></TextFieldbox>
        <br></br>
        <CheckboxElement CheckboxLabel={'I have accepted the '} linkname = {'terms and conditions'}></CheckboxElement>

        <br></br>
        <br></br>
        <Button style = {{borderRadius: '40px', backgroundColor: 'green'}} variant='contained' size = 'large' >SIGN UP</Button>
        <br></br>
        

      </Stack>
        

    </Paper>
          
                
        
    </div>
    </>
    
  )
}
export default SignUpPage;