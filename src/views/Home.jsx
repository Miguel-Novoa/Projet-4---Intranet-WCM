import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card"
import Button from '@mui/material/Button';
import '../App.css';
import '../css/Navbar.css'
import '../css/Home.css'
import { removeTokenLocalStorage } from "../services/LocalStorage.service";
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react';
import { getDatas } from "../services/GetDatas.service";
import { calculateAge } from "../js/calculateAge";
import { displayBirthdate } from "../js/displayBirthdate";

function Home() {
  const navigate = useNavigate();
  let randomUrl = 'http://localhost:7000/api/collaborateurs/random ';
  let [randomDatas, setRandomDatas] = useState();
  let token = localStorage.getItem('token');


  const deco = () =>{
    removeTokenLocalStorage();
    navigate('/')
  }

  useEffect(()=>{
    getDatas(randomUrl, token).then(res => {
      setRandomDatas(res.data)
      console.log(res.data)
    }
      )
  }, [])

  const displayNewRandom = () =>{
      getDatas(randomUrl, token).then(res => {
        setRandomDatas(res.data)
      })
  }

  return (
    <div className="Home">
        <Navbar/>
        {randomDatas &&
          <div className='welcome'>
              <Button onClick={deco}>Deco</Button>
              <h1>Bonjour !</h1>
              <h3>Avez-vous dit bonjour à :</h3>
              <Card  name={randomDatas.firstname + ' ' + randomDatas.lastname} 
                     photo={randomDatas.photo} mail={randomDatas.mail}
                     location={randomDatas.city + ', ' + randomDatas.country}
                     phone={randomDatas.phone}  date={displayBirthdate(randomDatas.birthdate)}
                     age={calculateAge(randomDatas.birthdate)}
              />
              <Button className='displayRandomBtn' onClick={displayNewRandom} variant="contained">Dire bonjour à quelqu'un d'autre</Button>
          </div>
        }
    </div>
  )
}

export default Home;