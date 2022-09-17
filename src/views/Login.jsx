import React from "react";
import {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import '../css/Login.css'
import '../css/Navbar.css'
import {useNavigate} from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { login } from "../services/Login.service";

function Connexion() {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    useEffect(()=>{
      if(localStorage.getItem('token') !== null){
        navigate('/Home')
      }
    }, [])

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleMailValueChange = event => {
        setMail(event.target.value)
      };

      const handlePasswordValueChange = event => {
        setPassword(event.target.value)
      };

      const loginHandler = () =>{
        login(mail, password).then(response =>{
          navigate('/Home')
        })
        console.log(mail, password)
      }
      

  return (
    <div>
        <Navbar className='nav'/>
        <div className="Connexion">
            <div className="loginForm">
                <TextField onChange={handleMailValueChange} type='email' id="outlined-basic mailIpt" className="mailIpt" label="Email" variant="outlined" />
                <FormControl className="pwIpt"  onChange={handlePasswordValueChange} sx={{ m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password passwordIpt"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Button className='loginBtn' variant="contained" onClick={ loginHandler }>Se connecter</Button>
            </div>
        </div>
    </div>
  )
  
}

export default Connexion;