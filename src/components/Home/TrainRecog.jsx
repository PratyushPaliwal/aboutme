import React from 'react';
import { Box, Typography } from '@mui/material';

const TrainingsAndRecognitions = () => {
    // Sample data for trainings and recognitions
    const trainings = [
        'Training 1',
        'Training 2',
        'Training 3',
        // Add more training items as needed
    ];

    const recognitions = [
        'Recognition 1',
        'Recognition 2',
        'Recognition 3',
        // Add more recognition items as needed
    ];

    return (
        <Box>
            <Typography variant="h4" color="white" marginLeft="20px" marginTop="20px" gutterBottom>Trainings</Typography>
            <ul>
                <li>
                    <Typography variant="h5" color="white">DevOps Certification Training - Feb 2023</Typography>
                    <Typography variant="body" color="white">Simplilearn, check it out, <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_4140669.png&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWraIp4KoQyKQcImj5HwOzg%3D%3D">here</a></Typography>
                </li>
                <br />
                <li>
                    <Typography variant="h5" color="white">ACM - India Summer School, IIIT Bangalore - June 2019</Typography>
                    <Typography variant="body" color="white">Algorithmic and Theoretical Aspects of Machine Learning, Co-sponsored by Microsoft and Mphasis. </Typography>
                </li>
            </ul>
            <Typography variant="h4" color="white" marginLeft="20px" marginTop="20px" gutterBottom>Publications/Patents</Typography>
            <ul>
                <li>
                    <Typography variant="h5" color="white">Automated Error Resolution in a Software Deployment Pipeline - April 2023</Typography>
                    <Typography variant="body" color="white">Patent filed under the title “Automated Error Resolution in a Software Deployment Pipeline”, Application Number 18/134066, United States Patent and Trademark Office, 04/13/2023</Typography>
                </li>
                <br />
                <li>
                    <Typography variant="h5" color="white">Virtualization and Containerized Development Workspaces - Jan 2023</Typography>
                    <Typography variant="body" color="white">Published review article titled “Virtualization and Containerized Development Workspaces”, India Innovation Forum (IIF), Dell Tech Reader</Typography>
                </li>
            </ul>
            <Typography variant="h4" color="white" marginLeft="20px" marginTop="40px" gutterBottom>Recognitions</Typography>
            <ul>
                <li>
                    <Typography variant="h5" color="white">Game Changer award, Dell Technologies - Oct 2023</Typography>
                    <Typography variant="body" color="white">Container Images vulnerabilities resolution targetting secure Kubernetes deplpyments across dell. Check <a href="https://www.linkedin.com/posts/paliwalpratyush_gamechanger-iwork4dell-delltechnologies-activity-7133454293524766720-Os80?utm_source=share&utm_medium=member_desktop">here</a></Typography>
                </li>
                <br />
                <li>
                    <Typography variant="h5" color="white">Governing Body Merit Scholarship – IIIT Bhubaneswar</Typography>
                    <Typography variant="body" color="white">Recipient of yearly scholarship from IIIT Bhubaneswar, awarded to top 3 academic performers of class</Typography>
                </li>
                <br />
                <li>
                    <Typography variant="h5" color="white">Winner, Dell Hack2Hire Hackathon - Oct 2019</Typography>
                    <Typography variant="body" color="white">E-commerce website for product recommendation system using Machine Learning model for improved user experience</Typography>
                </li>
            </ul>
            <Typography variant="h4" color="white" marginLeft="20px" marginTop="40px" gutterBottom>Volunteering & Extracurriculars</Typography>
            <ul>
                <li>
                    <Typography variant="h5" color="white">Volunteering</Typography>
                    <Typography variant="body" color="white">Led the Theatre & Street Play Team at Film and Theatre Society, IIIT Bhubaneswar.
                        <br />Our Team secured top honors at prestigious competitions such as the Spring Fest at IIT Kharagpur.
                        Performed Street Plays at public places in Bhubaneswar and nearby areas to raise awareness on various social issues in partnership with Non-Profit organizations such as Youth For Seva.
                    </Typography>
                </li>
                <br />
                <li>
                    <Typography variant="h5" color="white">IT Development & Masters Program, Dell</Typography>
                    <Typography variant="body" color="white">Active member of social and engagement committees with an aim of giving back to society, contributed over 29 hours of Volunteering service in 2023.  </Typography>
                </li>
                <br />
                <li>
                    <Typography variant="h5" color="white">Sports</Typography>
                    <Typography variant="body" color="white">School Basketball Team - District level tournament 2013-2014, Branch Basketball Team - IIIT Bhubaneswar 2019  </Typography>
                </li>
            </ul>
        </Box>
    );
}

export default TrainingsAndRecognitions;
