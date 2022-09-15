import React, {useRef} from "react";

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
    let [peopleDatas, setPeopleDatas] = useState([]);
    let [filtred, setFiltred] = useState([]);
    let [nameCitySelect, setNameCitySelect] = useState('name');
    const searchValue = useRef(null);


  useEffect(()=>{
    getDatas(allPeopleUrl, token).then(res => {
      setPeopleDatas(res.data)
      setFiltred(res.data)
      console.log(res.data)
    }
      )
  }, []);

  const searchFilter = () => {
    if (searchValue.current !== null) {
      switch (nameCitySelect){
        case 'name' :
          let filtredPeopleName = filtred.filter(people => {
            let fullName = people.firstname + people.lastname
            return fullName.toLowerCase().includes(searchValue.current.value )
          });
          setPeopleDatas(filtredPeopleName);
          break;
        case 'city' :
          let filtredPeopleCity = filtred.filter(people => {
            return people.city.toLowerCase().includes(searchValue.current.value )
          });
          setPeopleDatas(filtredPeopleCity)
      }
      
    }
    if (searchValue.current.value === "") {
      setPeopleDatas(filtred);
    }
  }
  

  return (
    <div className="List">
        <Navbar />
        <div className="filter">
          <input onChange={searchFilter} ref={searchValue} type="search" name="search" id="search" />
          <select name="nameAndCity" id="nameAndCity" className="select">
                <option onClick={()=>{setNameCitySelect('name')}} value="name">Nom</option>
                <option onClick={()=>{setNameCitySelect('city')}} value="city">Ville</option>
          </select>
          <select name="service" id="service" className="select">
                <option value="Client">Client</option>
                <option value="Technique">Technique</option>
                <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div className="peopleList">
            {
                peopleDatas?.map((person) =>{
                    return(<Card key={person.id} name={person.firstname + ' ' + person.lastname} 
                     photo={person.photo} mail={person.email}
                     location={person.city + ', ' + person.country}
                     phone={person.phone}  date={displayBirthdate(person.birthdate)}
                     age={calculateAge(person.birthdate)}
                     service={person.service}
                    />)
                })
            }
        </div>
       
    </div>
  )
}

export default List;