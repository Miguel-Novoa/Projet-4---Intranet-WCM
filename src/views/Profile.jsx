import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDatas } from "../services/GetDatas.service";

import '../App.css';
import '../css/Navbar.css'
import '../css/Form.css'
import Navbar from "../components/Navbar";
import Form from "../components/Form";



function Profile() {
  let id = localStorage.getItem('id');
  let navigate = useNavigate();
  let token = localStorage.getItem('token');
  let [currentUserDatas, setCurrentUserDatas] = useState();
  let params = useParams();
  let userId = params.id
  console.log(userId)

  useEffect(()=>{
    let currentUserUrl = `http://localhost:7000/api/collaborateurs/${userId}` ;


    getDatas(currentUserUrl, token).then(res =>{
      setCurrentUserDatas(res.data);
    })
  }, [])

  useEffect(()=>{
    if(token === null){
      navigate('/')
    }
      
  }, [])

  return (
    <div className="Profile">
        <Navbar />
        {currentUserDatas &&
          <Form lastname={currentUserDatas.lastname} 
          firstname={currentUserDatas.firstname}
          mail={currentUserDatas.email} 
          phone={currentUserDatas.phone} 
          city={currentUserDatas.city}  
          country={currentUserDatas.country} 
          date={currentUserDatas.birthdate}
          gender={currentUserDatas.gender}
          service={currentUserDatas.service}
          photo={currentUserDatas.photo}
          userId={currentUserDatas.id}/>
        }
    </div>
  )
}


export default Profile;