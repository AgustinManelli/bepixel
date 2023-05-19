import React from 'react';
import '../stylesheets/Home.css'
import Homeheader from '../components/home/Homeheader';
import Homedata from '../components/home/Homedata';
import 'aos/dist/aos.css';
import AOS from 'aos';
import HomeSecondary from '../components/home/HomeSecondary';

function Home(){

    AOS.init();

    return(
        <div className='homeContainer'>
            <Homeheader />
            <Homedata />
            <HomeSecondary />
        </div>
    )
}

export default Home;