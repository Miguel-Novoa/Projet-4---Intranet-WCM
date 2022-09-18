import React from "react";
import { useEffect, useState } from "react";
import '../App.css';
import '../css/Navbar.css';
import { removeTokenLocalStorage } from "../services/LocalStorage.service";
import {useNavigate, Link} from 'react-router-dom';
import { getDatas } from "../services/GetDatas.service";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';

import Logo from '../images/logo.png'

function Navbar() {
  const navigate = useNavigate();
  let [currentUserDatas, setCurrentUserDatas] = useState()
  let token = localStorage.getItem('token');
  let id = localStorage.getItem('id');
  let admin = localStorage.getItem('admin');

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
        <h2 className="titleNav">Intranet</h2>
      </Link>
      <div style={{display: token !== null ? 'flex' : 'none'}} className="links">
        <Link className="navLink" to={'/List'}>
          <ListIcon fontSize='large' className="navIcon"/>
        </Link>
        {admin &&
          <Link id="add" style={{display : admin === 'true' ? 'block' : 'none'}} className="navLink" to={'/Add'}>
            <GroupAddIcon fontSize='large' className="navIcon"/>
          </Link>
        }
        <Link className="navLink" to={`/Profile/${id}`}>
          <img className='userPic' src={currentUserDatas?.photo} alt="user profile picture" />
        </Link>
        <LogoutIcon fontSize='large' className="navIcon" onClick={deco} />
        
        <img className="userPhoto" src="" alt="" />
      </div>
    </nav>
 
  )
}

export default Navbar;
