import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Card"
import Button from '@mui/material/Button';
import '../App.css';
import '../css/Navbar.css'
import '../css/Home.css'
import {useEffect} from 'react';
import { getDatas } from "../services/GetDatas.service";
import { calculateAge } from "../js/calculateAge";
import { displayBirthdate } from "../js/displayBirthdate";
import { useNavigate } from "react-router-dom";

function Home() {
  let randomUrl = 'http://localhost:7000/api/collaborateurs/random ';
  let id = localStorage.getItem('id');
  let [randomDatas, setRandomDatas] = useState();
  let [currentUserDatas, setCurrentUserDatas] = useState()
  let token = localStorage.getItem('token');
  let navigate = useNavigate();

  useEffect(()=>{
    let currentUserUrl = `http://localhost:7000/api/collaborateurs/${id}` ;
    getDatas(randomUrl, token).then(res => {
      setRandomDatas(res.data)
    },

    getDatas(currentUserUrl, token).then(res =>{
      setCurrentUserDatas(res.data);
    })
    )
  }, [])

  useEffect(()=>{
    if(token === null){
      navigate('/')
    }
      
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
        currentUserDatas &&
          <div className='welcome'>
              <h1>Bonjour {currentUserDatas.firstname} !</h1>
              <h3>Avez-vous dit bonjour à :</h3>
              <Cards  name={randomDatas.firstname + ' ' + randomDatas.lastname} 
                     photo={randomDatas.photo} mail={randomDatas.email}
                     location={randomDatas.city + ', ' + randomDatas.country}
                     phone={randomDatas.phone}  date={displayBirthdate(randomDatas.birthdate)}
                     age={calculateAge(randomDatas.birthdate)}
                     service={randomDatas.service}
                     id={randomDatas.id}
                     setUsersState={setRandomDatas}
              />
              <Button className='displayRandomBtn' onClick={displayNewRandom} variant="contained">Dire bonjour à quelqu'un d'autre</Button>
          </div>
        }
    </div>
  )
}

export default Home;