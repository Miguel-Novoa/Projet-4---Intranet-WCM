import React, { useEffect } from "react";
import '../App.css';
import '../css/Navbar.css'
import '../css/Card.css'

import { useNavigate } from "react-router-dom";

function CheckToken() {
  let token = localStorage.getItem('token');
  const navigate = useNavigate()

  useEffect(() => {
    if (token === null) {
        navigate('/');
    }
}, []);

  return (
    <></>
  )
}

export default CheckToken;