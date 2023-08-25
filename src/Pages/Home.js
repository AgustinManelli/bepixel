import React from 'react';
import '../stylesheets/Home.css'
import Homeheader from '../components/home/Homeheader';
import Homedata from '../components/home/Homedata';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Homefaq from '../components/home/Homefaq';
import Homecontact from '../components/home/Homecontact';

function Home(){

    AOS.init();

    return(
        
        <div className='homeContainer'>
            <Homeheader />
            <Homefaq />
            <Homedata />
            <Homecontact />
        </div>
    )
}

export default Home;