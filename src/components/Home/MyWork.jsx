import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import techStack1 from '../../assets//favicon.ico'; // Import your tech stack images
import dockerLogo from '../../assets/docker_logo.svg';
import k8sLogo from '../../assets/icons8-kubernetes.svg';
import pythonLogo from '../../assets/python_logo.svg';
import powerappsLogo from '../../assets/powerapps_logo.svg';
import djangoLogo from '../../assets/django-logo.png';
import reactLogo from '../../assets/icons8-react.svg';
import devopsLogo from '../../assets/icons8-devops-96.png';
import scriptLogo from '../../assets/icons8-scripting.png';

const MyWork = () => {
    // Sample tech stack data
    const techStacksData = [
        { name: 'DevOps', image: devopsLogo },
        { name: 'React', image: reactLogo },
        { name: 'Docker', image: dockerLogo },
        { name: 'Kubernetes', image: k8sLogo },
        { name: 'python', image: pythonLogo },
        { name: 'Django', image: djangoLogo },
        { name: 'Scripting/Automations', image: scriptLogo },
        { name: 'MS Powerapps', image: powerappsLogo }
        
        // Add more tech stack data as needed
    ];

    return (
        <Box>
            <Typography variant="h4" color="white" marginLeft="20px" marginTop="20px" gutterBottom>Interests & Expertise </Typography>
            <Container maxWidth="md" style={{ marginTop: '75px' }}>
                {/* <Typography variant="h4" gutterBottom>Technology Stacks</Typography> */}
                <Grid container spacing={10}>
                    {techStacksData.map((techStack, index) => (
                        <Grid item xs={8} sm={3} key={index}>
                            {/* <Paper elevation={3} style={{ padding: '10px', textAlign: 'center' }}> */}
                                <img src={techStack.image} alt={techStack.name} style={{ width: '100%', height: 'auto', marginBottom: '5px' }} />
                                <Typography variant="subtitle2" color="white" textAlign="center">{techStack.name}</Typography>
                            {/* </Paper> */}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
            );
};


export default MyWork;
