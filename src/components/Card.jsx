import React from "react";
import '../App.css';
import '../css/Navbar.css'
import '../css/Card.css'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

function Navbar(props) {



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
          <Typography component="div" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">({props.age + ' ans'})</Typography>
          <Typography>{props.location}</Typography>
          <Typography>{props.mail}</Typography>
          <Typography>{props.phone}</Typography>
          <Typography>{props.date}</Typography>
        </CardContent>
      </Box>
    </Card>
 
  )
}

export default Navbar;