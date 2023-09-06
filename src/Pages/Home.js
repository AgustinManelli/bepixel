import React from 'react';
import '../stylesheets/Home.css'
import Homeheader from '../components/home/Homeheader';
import Homedata from '../components/home/Homedata';
import Homefaq from '../components/home/Homefaq';
import Homecontact from '../components/home/Homecontact';
import AccordionHome from '../components/AccordionHome.js';
import Homeprice from '../components/home/Homeprice';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Home(){
    document.title = "bepixel | home";

    AOS.init();

    return(
        
        <div className='homeContainer'>
            <Homeheader />
            <Homefaq />
            <Homedata />
            <Homeprice />
            <Homecontact />
            <AccordionHome />
        </div>
    )
}

export default Home;