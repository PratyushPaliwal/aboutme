import React from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';

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
    return (
        <Box >
            <Typography variant="h4" color="white" marginLeft="20px" marginTop="20px" gutterBottom>Work Experience</Typography>
            <Typography variant="h5"  color="#89CFF0" marginLeft="20px" gutterBottom>@Dell Technologies</Typography>
            <br/>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={2.5}>
                    <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column', height: '250px' }}>
                        <Typography variant="h6">Software Engineer - 2</Typography>
                        <Typography variant="body1" style={{ marginTop: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={2.5}>
                    <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column', height: '250px' }}>
                        <Typography variant="h6">Software Engineer - 1</Typography>
                        <Typography variant="body1" style={{ marginTop: '10px' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={2.5}>
                    <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column',  height: '250px' }}>
                        <Typography variant="h6">Undergraduate Intern - II</Typography>
                        <Typography variant="body1" style={{ marginTop: '10px' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={2.5}>
                    <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px', display: 'flex', flexDirection: 'column',  height: '250px' }}>
                        <Typography variant="h6">Undergraduate Intern</Typography>
                        <Typography variant="body1" style={{ marginTop: '10px' }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Experience;
