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

                <div style={{ height: '100vh', display: 'flex', position: 'relative' }}>
                    <AboutMe />

                </div>
                <Divider color="white" />
                
                <div style={{ height: '70vh' }}>
                    <Experience />
                </div>
                <Divider color="white" />
                <div style={{ height: '65vh'}}>
                    <MyWork />  
                </div>
                <Divider color="white" />
                <div style={{ height: '100vh'}}>
                   <TrainRecog />
                </div>
                <Divider color="white" />
                <div>
                   <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;