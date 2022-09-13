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

import test from '../images/black manta.jpg'

function Navbar() {



  return (
    <Card className='Card' sx={{ display: 'flex' }}>
        <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={test}
        alt="photo collaborateur"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            David Hyde
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">(41 ans)</Typography>
          <Typography>Amnesty Bay, USA</Typography>
          <Typography>David.Hyde@mail.com</Typography>
          <Typography>001.05.03.06.89</Typography>
          <Typography>16/08/1967</Typography>
        </CardContent>
      </Box>
    </Card>
 
  )
}

export default Navbar;