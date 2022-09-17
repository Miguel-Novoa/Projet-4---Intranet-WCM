import React from "react";
import '../App.css';
import '../css/Navbar.css'
import '../css/Card.css'

import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Delete } from "../services/Delete.service";
import { getDatas } from "../services/GetDatas.service";

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
        sx={{ width: 150 }}
        image={props.photo}
        alt="photo collaborateur"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div className="service">{props.service}</div>
          <Typography component="div" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">({props.age + ' ans'})</Typography>
          <Typography>{props.location}</Typography>
          <Typography>{props.mail}</Typography>
          <Typography>{props.phone}</Typography>
          <Typography>{props.date}</Typography>
          <button style={{display : admin ? 'block' : 'none'}}>Editer</button>
          <button aria-describedby={props.id} type="button" onClick={handleClick}
           style={{display : admin ? 'block' : 'none'}}>Supprimer</button>
          <Popper id={props.id} open={open} anchorEl={anchorEl}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              Êtes-vous sûr de vouloir supprimer ce collaborateur ?
              <button onClick={()=>{deleteUser(props.id), setAnchorEl(null)}}>Oui</button>
              <button onClick={()=>{setAnchorEl(null)}}>non</button>
            </Box>
          </Popper>
        </CardContent>
      </Box>
    </Card>
 
  )
}

export default Cards;