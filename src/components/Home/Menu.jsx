import React from 'react';
import { Container, Typography, Button, Box, Toolbar, AppBar } from '@mui/material';
import logoImg from '../../assets/Logo.png';
import './Menu.css';

const Menu = () => {
    return (
        <Box>
            <Container>
                <AppBar sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        {/* Logo */}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src={logoImg} style={{ width: "100px", height: "100px", marginBottom: "10px", marginTop: "10px" }} alt="Logo" />
                        </Typography>
                        {/* Menu Items */}
                        <Button sx={{ color: 'white', marginRight: '10px', '&:hover': { color: '#967BB6', cursor: 'pointer', fontWeight: 'bold' } }} href="#section1">
                            About Me
                        </Button>
                        <Button sx={{ color: 'white', marginRight: '10px', '&:hover': { color: '#967BB6', cursor: 'pointer', fontWeight: 'bold' } }} href="#section2">
                            Experience
                        </Button>
                        <Button sx={{ color: 'white', marginRight: '10px', '&:hover': { color: '#967BB6', cursor: 'pointer', fontWeight: 'bold' } }} href="#section2">
                            Interests
                        </Button>
                        <Button sx={{ color: 'white', marginRight: '10px', '&:hover': { color: '#967BB6', cursor: 'pointer', fontWeight: 'bold' } }} href="#section2">
                            Trainings
                        </Button>
                        <Button sx={{ color: 'white', marginRight: '10px', '&:hover': { color: '#967BB6', cursor: 'pointer', fontWeight: 'bold' } }} href="#section2">
                            Recognitions
                        </Button>
                        <Button sx={{ color: 'white', marginRight: '10px', '&:hover': { color: '#967BB6', cursor: 'pointer', fontWeight: 'bold' } }} href="#section2">
                            Let's Connect
                        </Button>
                        {/* Add more menu items as needed */}
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>

    );
};

export default Menu;
