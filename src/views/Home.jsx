import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card"
import Button from '@mui/material/Button';
import '../App.css';
import '../css/Navbar.css'
import '../css/Home.css'
import { removeTokenLocalStorage } from "../services/LocalStorage.service";
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react';

function Home() {
  const navigate = useNavigate();

  const deco = () =>{
    removeTokenLocalStorage();
    navigate('/')
  }

  return (
    <div className="Home">
        <Navbar/>
        <div className='welcome'>
            <Button onClick={deco}>Deco</Button>
            <h1>Bonjour !</h1>
            <h3>Avez-vous dit bonjour à :</h3>
            <Card />
            <Button className='displayRandomBtn' variant="contained">Dire bonjour à quelqu'un d'autre</Button>
        </div>
    </div>
  )
}

export default Home;