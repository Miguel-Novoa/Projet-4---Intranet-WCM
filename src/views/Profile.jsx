import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  let [currentUserDatas, setCurrentUserDatas] = useState()

  useEffect(()=>{
    let currentUserUrl = `http://localhost:7000/api/collaborateurs/${id}` ;


    getDatas(currentUserUrl, token).then(res =>{
      setCurrentUserDatas(res.data);
      console.log(res.data)
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
          country={currentUserDatas.country} />
        }
    </div>
  )
}


export default Profile;