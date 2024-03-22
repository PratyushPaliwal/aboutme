import AboutMe from '../components/Home/AboutMe';
import Menu from '../components/Home/Menu';
import aboutMeBg from '../assets/About_me_bg.jpg'
import Experience from '../components/Home/Experience';
import Divider from '@mui/material/Divider';
import MyWork from '../components/Home/MyWork';
import TrainRecog from '../components/Home/TrainRecog';
import Footer from '../components/Home/Footer'; 

function Home() {
    return (
        <div>
            <Menu />
            <div style={{ backgroundImage: `url(${aboutMeBg})`, bgcolor: 'black', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

                <div style={{ height: '100vh', display: 'flex', position: 'relative' }} id="about-me">
                    <AboutMe  />

                </div>
                <Divider color="white" />
                
                <div style={{ height: '70vh' }} id="exp">
                    <Experience />
                </div>
                <Divider color="white" />
                <div style={{ height: '65vh'}} id="mywork">
                    <MyWork  />  
                </div>
                <Divider color="white" />
                <div style={{ height: '100vh'}} id="train-recog">
                   <TrainRecog  />
                </div>
                <Divider color="white" id="footer" />
                <div>
                   <Footer  />
                </div>
            </div>
        </div>
    );
}

export default Home;