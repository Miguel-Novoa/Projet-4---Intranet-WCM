import React from "react";
import { useEffect, useState } from "react";
import '../App.css';
import '../css/Navbar.css';
import { removeTokenLocalStorage } from "../services/LocalStorage.service";
import {useNavigate, Link} from 'react-router-dom';
import { getDatas } from "../services/GetDatas.service";

import Logo from '../images/logo.png'

function Navbar() {
  const navigate = useNavigate();
  let [currentUserDatas, setCurrentUserDatas] = useState()
  let token = localStorage.getItem('token');
  let id = localStorage.getItem('id');

  const deco = () =>{
    removeTokenLocalStorage();
    navigate('/')
  }

  useEffect(()=>{
    let currentUserUrl = `http://localhost:7000/api/collaborateurs/${id}` ;

    getDatas(currentUserUrl, token).then(res =>{
      setCurrentUserDatas(res.data);
    })
    
  }, [])

  return (
    <nav>
      <Link className="navLink navLogo" to='/Home'>
        <img className="intranetLogo" src={Logo} alt="intranet logo" />
        <h2>Intranet</h2>
      </Link>
      <div className="links">
        <Link className="navLink" to={'/List'}>
          <h3>Liste</h3>
        </Link>
        <Link className="navLink" to={'/Profile'}>
          <img className='userPic' src={currentUserDatas?.photo} alt="user profile picture" />
        </Link>
        <h3 className="decoBtn" onClick={deco}>Se déconnecter</h3>
        <img className="userPhoto" src="" alt="" />
      </div>
    </nav>
 
  )
}

export default Navbar;
