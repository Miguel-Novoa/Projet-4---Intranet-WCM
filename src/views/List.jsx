import React, {useRef} from "react";

import '../App.css';
import '../css/Navbar.css'
import '../css/List.css'
import Navbar from "../components/Navbar";
import Cards from '../components/Card'
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
      console.log(res.data[1].service)
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

  const serviceFilter = (str) =>{
    switch (str){
      case 'client' : 
        let filtredClient = filtred.filter(people =>{
          return people.service.toLowerCase().includes(str)
        })
        setPeopleDatas(filtredClient);
        break;
      case 'marketing' :
        let filtredMarketing = filtred.filter(people =>{
          return people.service.toLowerCase().includes(str)
        })
        setPeopleDatas(filtredMarketing);
        break;
      case 'technique' :
        let filtredTechnique = filtred.filter(people =>{
          return people.service.toLowerCase().includes(str)
        })
        setPeopleDatas(filtredTechnique);
        break;
      case '' :
        setPeopleDatas(filtred)
        break;
    }
  }
  

  return (
    <div className="List">
        <Navbar />
        <div className="filter">
        <h2>Liste des collaborateurs :</h2>
          <input placeholder="Rerchercher..." onChange={searchFilter} ref={searchValue} type="search" name="search" id="search" />
          <div className="selectDiv">
            <div className="select">
              <p>Rechercher par : </p>
              <select name="nameAndCity" id="nameAndCity">
                    <option onClick={()=>{setNameCitySelect('name')}} value="name">Nom</option>
                    <option onClick={()=>{setNameCitySelect('city')}} value="city">Ville</option>
              </select>
            </div>
            <div className="select">
              <p>Catégorie :</p>
              <select name="service" id="service">
                    <option onClick={()=>{serviceFilter('')}} value="" selected>Choisissez une option</option>
                    <option onClick={()=>{serviceFilter('client')}} value="Client">Client</option>
                    <option onClick={()=>{serviceFilter('technique')}} value="Technique">Technique</option>
                    <option onClick={()=>{serviceFilter('marketing')}} value="Marketing">Marketing</option>
              </select>
            </div>
          </div>
        </div>
        <div className="peopleList">
            {
                peopleDatas?.map((person) =>{
                    return(<Cards key={person.id} name={person.firstname + ' ' + person.lastname} 
                     photo={person.photo} mail={person.email}
                     location={person.city + ', ' + person.country}
                     phone={person.phone}  date={displayBirthdate(person.birthdate)}
                     age={calculateAge(person.birthdate)}
                     service={person.service}
                     id={person.id}
                     setUsersState = {setPeopleDatas}
                    />)
                })
            }
        </div>
       
    </div>
  )
}

export default List;