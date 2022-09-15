import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import '../App.css';
import '../css/Navbar.css'
import '../css/Form.css'
import Navbar from "../components/Navbar";
import Form from "../components/Form";



function AddUser() {
  let navigate = useNavigate();
  let token = localStorage.getItem('token');

  useEffect(()=>{
    if(token === null){
      navigate('/')
    }
      
  }, [])

  return (
    <div className="Add">
        <Navbar />
        <Form/>
    </div>
  )
}


export default AddUser;