import React from "react";
import '../App.css';
import '../css/Navbar.css'
import '../css/Card.css'
import { Link } from "react-router-dom";

import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { Delete } from "../services/Delete.service";
import { getDatas } from "../services/GetDatas.service";
import { displayServiceColor } from "../js/displayServiceColor";

function Cards(props) {
  let admin = JSON.parse(localStorage.getItem('admin'));
  let token = localStorage.getItem('token');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const deleteUser = (id) =>{
    let url = `http://localhost:7000/api/collaborateurs/${id}`
    Delete(url, token).then(res =>{
      getDatas('http://localhost:7000/api/collaborateurs ', token).then(response =>{
        props.setUsersState(response.data)
      })
    })
  }

  return (
    <Card className='Card' sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: '100%'}}
        image={props.photo}
        alt="photo collaborateur"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{backgroundColor: displayServiceColor(props.service)}}  className="service">
          {props.service}
        </div>
        <CardContent className="cardContent">
          <Typography className='name' component="div" variant="h5">
            {props.name}
          </Typography>
          <Typography className='age' variant="subtitle1" color="text.secondary">({props.age + ' ans'})</Typography>
          <Typography className='typography' >
            <LocationOnIcon fontSize='small'/>
            {props.location}</Typography>
          <Typography className='typography'>
            <EmailIcon fontSize='small' />
            {props.mail}
          </Typography>
          <Typography className='typography'>
            <PhoneAndroidIcon fontSize='small'/>
            {props.phone}
          </Typography>
          <Typography className='typography'>
            <CalendarMonthIcon fontSize='small'/>
            {props.date}
          </Typography>
          <div className='adminBtns'>
            <Link to={`/Profile/${props.id}`}>
              <button className="adminBtn" style={{display : admin ? 'block' : 'none'}}>Editer</button>
            </Link>
            <button className="adminBtn" aria-describedby={props.id} type="button" onClick={handleClick}
            style={{display : admin ? 'block' : 'none'}}>Supprimer</button>
            <Popper id={props.id} open={open} anchorEl={anchorEl}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                Êtes-vous sûr de vouloir supprimer ce collaborateur ?
                <button onClick={()=>{deleteUser(props.id), setAnchorEl(null)}}>Oui</button>
                <button onClick={()=>{setAnchorEl(null)}}>non</button>
              </Box>
            </Popper>
          </div>
        </CardContent>
      </Box>
    </Card>
 
  )
}

export default Cards;