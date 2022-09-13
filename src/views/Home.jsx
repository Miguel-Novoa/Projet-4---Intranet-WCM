import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card"
import Button from '@mui/material/Button';
import '../App.css';
import '../css/Navbar.css'
import '../css/Home.css'

function Home() {


  return (
    <div className="Home">
        <Navbar/>
        <div className='welcome'>
            <h1>Bonjour !</h1>
            <h3>Avez-vous dit bonjour à :</h3>
            <Card />
            <Button className='displayRandomBtn' variant="contained">Dire bonjour à quelqu'un d'autre</Button>
        </div>
    </div>
  )
}

export default Home;