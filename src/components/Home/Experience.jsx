import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';
import './Experience.css';

// const Experience = () => {
//     // Sample work experience data
//     const workExperienceData = [
//         {
//             employer: 'Dell Technologies',
//             roles: [
//                 {
//                     title: 'Software Engineer',
//                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//                 },
//                 {
//                     title: 'DevOps Engineer',
//                     description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//                 },
//                 {
//                     title: 'DevOps Engineer',
//                     description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//                 }
//             ],
//         },
//         // Add more work experience data as needed
//     ];

//     return (
//         <Box>
//             <Typography variant="h4" color="white" marginRight="20px" gutterBottom>Work Experience</Typography>
//             {workExperienceData.map((experience, index) => (
//                 <Box key={index}>
//                     <Typography variant="h5" gutterBottom color="violet">{experience.employer}</Typography>
//                     <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
//                         {experience.roles.map((role, roleIndex) => (
//                             <Grid item key={roleIndex}>
//                                 <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '150px' }}>
//                                     <Typography variant="h6">{role.title}</Typography>
//                                     <Typography variant="body1" style={{ marginTop: '10px' }}>{role.description}</Typography>
//                                 </Paper>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Box>
//             ))}
//         </Box>


//     );
// };



const Experience = () => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHovered1(false);
    };

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };
    const handleMouseEnter4 = () => {
        setIsHovered4(true);
    };

    const handleMouseLeave4 = () => {
        setIsHovered4(false);
    };

    const highlightClass1 = isHovered1 ? 'highlight' : '';
    const highlightClass2 = isHovered2 ? 'highlight' : '';
    const highlightClass3 = isHovered3 ? 'highlight' : '';
    const highlightClass4 = isHovered4 ? 'highlight' : '';

    return (
        <Box >
            <Typography variant="h4" color="white" marginLeft="20px" marginTop="20px" gutterBottom>Work Experience</Typography>
            <Typography variant="h5" color="#89CFF0" marginLeft="20px" gutterBottom>@Dell Technologies</Typography>
            <br />
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={2.5}>
                    <Paper elevation={3} className={`grid-item ${highlightClass1}`} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} style={{ padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column', height: '500px' }}>
                        <Typography variant="h6">Software Engineer - 2</Typography>
                        <Typography variant="h8" style={{ marginBottom: '10px' }}>Feb, 2023 - Present</Typography>
                        {/* <Typography variant="body1" style={{ marginTop: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography> */}
                        <li>
                            <Typography variant="body" color="black">Leading critical Images release cycles for vulnerability remediation and major tech stacks changes</Typography>
                        </li>
                        <li>
                            <Typography variant="body" color="black" >Worked on a python wrapper, developed as a solution to integrate SNYK testing into relevant SDLC stages for CI/CD architecture of application teams across dell digital</Typography>
                        </li>
                        <li>
                            <Typography variant="body" color="black" >Working on developing a one stop solution in form of a python wrapper for integrating automated browser testing via test tools i.e. moon, seleniumBox for different languages and supported frameworks into CICD pipelines.</Typography>
                        </li>
                        <li>
                            <Typography variant="body" color="black" >Leading and managing Front-end development using React-Redux for a web application which allows users to build Docker Images via a low-code/no-code process through a user-friendly interface.</Typography>
                        </li>
                    </Paper>
                </Grid>


                <Grid item xs={2.5}>
                    <Paper elevation={3} className={`grid-item ${highlightClass2}`} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} style={{ padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column', height: '500px' }}>
                        <Typography variant="h6">Software Engineer - 1</Typography>
                        <Typography variant="h8" style={{ marginBottom: '10px' }} >Aug, 2021 - Jan, 2023</Typography>
                        {/* <Typography variant="body1" style={{ marginTop: '10px' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography> */}
                        <li>
                            <Typography variant="body" color="black">Building and maintaining safe and secure Docker Images which are critical components in CI/CD
pipelines, utilized by teams globally across Dell</Typography>
                        </li>
                        <li>
                            <Typography variant="body" color="black" >Worked on major cross collaboration projects to develop solutions, including scripting automations
and python wrappers, to enable teams across Dell digital for a smooth transition to new tools
integrated in SDLC.</Typography>
                        </li>
                        <li>
                            <Typography variant="body" color="black" >As project member of DevSecOps team, worked with external security solutions vendors to evaluate
options by detailed testing to finalize a suitable application security tool for Dell Digital</Typography>
                        </li>
                        <li>
                            <Typography variant="body" color="black" >Worked with multiple application teams to onboard them to DevOps practices and to navigate through errors and failures in deployment pipelines</Typography>
                        </li>
                        <li>
                            <Typography variant="body" color="black" >Developed automation solutions – (i) using shell script for our team’s architecture of building, scanning, and releasing DevOps Images, (ii) using groovy and JS for customizing JIRA to onboard application teams</Typography>
                        </li>
                    </Paper>
                </Grid>
                <Grid item xs={2.5}>
                    <Paper elevation={3} className={`grid-item ${highlightClass3}`} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} style={{ padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column', height: '500px' }}>
                        <Typography variant="h6">Undergraduate Intern - II</Typography>
                        <Typography variant="h8" style={{ marginBottom: '10px' }}>Feb, 2021 - May, 2021</Typography>
                        {/* <Typography variant="body1" style={{ marginTop: '10px' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography> */}
                        <li>
                            <Typography variant="body" color="black" >RPM packaging the software for automation tools</Typography>
                        </li>
                    </Paper>
                </Grid>
                <Grid item xs={2.5}>
                    <Paper elevation={3} className={`grid-item ${highlightClass4}`} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} style={{ padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column', height: '500px' }}>
                        <Typography variant="h6">Undergraduate Intern</Typography>
                        <Typography variant="h8" style={{ marginBottom: '10px' }}>May, 2020 - July, 2020</Typography>
                        {/* <Typography variant="body1" style={{ marginTop: '10px' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography> */}
                        <li>
                            <Typography variant="body" color="black" style={{ marginTop: '10px' }}>OS-level virtualization & Automation using Docker, Ansible & Shell Scripting, creating different Docker Images for Containerized Dev Workspaces</Typography>
                        </li>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Experience;
