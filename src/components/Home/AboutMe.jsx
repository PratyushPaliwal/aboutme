import React from 'react';
import { Typography, Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import aboutMeBg from '../../assets/About_me_bg.jpg';
import profilePhoto from '../../assets/Workday_Profile_photo.jpg';
import './AboutMe.css';
import './Menu.css';

const AboutMe = () => {
    return (
        <div style={{ backgroundImage: `url(${aboutMeBg})`, bgcolor: 'black', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', position: 'relative' }}>
            <div style={{ flex: 1, maxWidth: '63%', marginRight: '20px', color: 'white' }}>
                <Typography variant="h4" gutterBottom>Pratyush Paliwal</Typography>
                <Typography variant="h6" gutterBottom>Software DevOps Engineer</Typography>
                <br /><br />
                <Typography className="classic-text">
                    Hello there! I am a software engineer with a passion for industry standard software development and shipping products using DevOps practices. <br /> I have experience in building web applications using JavaScript, React-Redux, Django.
                    <br />My expertise is with Containerization and orchestration; building safe and secure container images for deployment using Docker and scaling them using Kubernetes. I have vast experience in assisting numerous application teams to onboard to end-to-end CI/CD architecture using GitLab CI.
                    <br />I also have a keen interest in building automations for in-house practices and have built numerous tools using Python and Shell scripting to automate the manual tasks involved in our team's day-to-day activities.
                    <br /> My aim is to build a career in the field of software development and DevOps. I am a quick learner and a team player who is always looking for opportunities to grow and improve my skills.

                </Typography>

            </div>
            <div style={{ flex: 1, maxWidth: '30%' }}>
                <img src={profilePhoto} alt="Profile" style={{ width: '70%', borderRadius: '50%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                <Button
                    className="menuButton"
                    variant="contained"
                    style={{ backgroundColor: 'transparent'}}
                >
                    Know More About Me <br /> {/* Add a line break */}
                    <ArrowDownwardIcon />
                </Button>

            </div>
        </div>
    );
};

export default AboutMe;
