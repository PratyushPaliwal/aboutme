import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logoImg from '../../assets/Logo.png';
import './Menu.css';

const Menu = () => {
    return (
        <AppBar sx={{ bgcolor: 'black' }}>
            <Toolbar>
                {/* Logo */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <img src={logoImg} style={{ width: "100px", height: "100px", marginBottom: "10px", marginTop: "10px" }} alt="Logo" />
                </Typography>
                {/* Menu Items */}
                <Button sx={{ color: 'white', marginRight: '10px',  '&:hover': {color: '#967BB6', cursor: 'pointer', fontWeight: 'bold'}}} href="#section1">
                    About Me
                </Button>
                <Button sx={{ color: 'white', marginRight: '10px',  '&:hover': {color: '#967BB6', cursor: 'pointer', fontWeight: 'bold'}}} href="#section2">
                    Experience
                </Button>
                <Button sx={{ color: 'white', marginRight: '10px',  '&:hover': {color: '#967BB6', cursor: 'pointer', fontWeight: 'bold'}}} href="#section2">
                    My Work
                </Button>
                <Button sx={{ color: 'white', marginRight: '10px',  '&:hover': {color: '#967BB6', cursor: 'pointer', fontWeight: 'bold'}}} href="#section2">
                    Trainings
                </Button>
                <Button sx={{ color: 'white', marginRight: '10px',  '&:hover': {color: '#967BB6', cursor: 'pointer', fontWeight: 'bold'}}} href="#section2">
                    Recognitions
                </Button>
                <Button sx={{ color: 'white', marginRight: '10px',  '&:hover': {color: '#967BB6', cursor: 'pointer', fontWeight: 'bold'}}} href="#section2">
                    Let's Connect
                </Button>
                {/* Add more menu items as needed */}
            </Toolbar>
        </AppBar>
    );
};

export default Menu;
