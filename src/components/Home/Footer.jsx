import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, MailOutline } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box bgcolor="black" py={3} textAlign="center">
            <Typography variant="body1" color="white" gutterBottom>
                Connect with me:
            </Typography>
            <IconButton aria-label="LinkedIn" href="www.linkedin.com/in/paliwalpratyush">
                <LinkedIn sx={{ color: 'white' }} />
            </IconButton>
            <IconButton aria-label="Email" href="mailto:paliwalpratyush1510@gmail.com">
                <MailOutline sx={{ color: 'white' }} />
            </IconButton>
            <Typography variant="body2" color="white" mt={2}>
                © {new Date().getFullYear()} Pratyush Paliwal
            </Typography>
        </Box>
    );
}

export default Footer;
