import React from "react";

import '../App.css';
import '../css/Navbar.css'
import '../css/List.css'
import Navbar from "../components/Navbar";
import Card from '../components/Card'
import { getDatas } from "../services/GetDatas.service";
import { useState, useEffect } from "react";
import { displayBirthdate } from "../js/displayBirthdate";
import { calculateAge } from "../js/calculateAge";

function List() {
    let allPeopleUrl = 'http://localhost:7000/api/collaborateurs ';
    let token = localStorage.getItem('token');
    let [peopleDatas, setPeopleDatas] = useState()

  useEffect(()=>{
    getDatas(allPeopleUrl, token).then(res => {
      setPeopleDatas(res.data)
      console.log(res.data)
    }
      )
  }, [])
  

  return (
    <div className="List">
        <Navbar />
        <div className="peopleList">
            {
                peopleDatas?.map((person) =>{
                    return(<Card key={person.id} name={person.firstname + ' ' + person.lastname} 
                     photo={person.photo} mail={person.email}
                     location={person.city + ', ' + person.country}
                     phone={person.phone}  date={displayBirthdate(person.birthdate)}
                     age={calculateAge(person.birthdate)}
                    />)
                })
            }
        </div>
       
    </div>
  )
}

export default List;