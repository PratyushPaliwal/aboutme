import AboutMe from '../components/Home/AboutMe';
import Menu from '../components/Home/Menu';
import aboutMeBg from '../assets/About_me_bg.jpg'
import Experience from '../components/Home/Experience';
import Divider from '@mui/material/Divider';
import MyWork from '../components/Home/MyWork';

function Home() {
    return (
        <div>
            <Menu />
            <div style={{ backgroundImage: `url(${aboutMeBg})`, bgcolor: 'black', backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

                <div style={{ height: '100vh', display: 'flex', position: 'relative' }}>
                    <AboutMe />

                </div>
                <Divider color="white" />
                
                <div style={{ height: '50vh' }}>
                    <Experience />
                </div>
                <Divider color="white" />
                <div style={{ height: '75vh'}}>
                    <MyWork />  
                </div>
            </div>
        </div>
    );
}

export default Home;