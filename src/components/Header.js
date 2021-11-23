import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { getTotalScore } from '../slice/GameSlice';
import logo from "../assets/logo.png"
import { IconButton } from '@mui/material';

export default function Header() {
    const score = useSelector(getTotalScore)
    

    

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              <img style={{width: "40px", height: "40px"}} src={logo} alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 30 }}>
            Rock Paper Scissors Game
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Score: {score}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}