import React from 'react';
import '../stylesheets/Home.css'
import Homeheader from '../components/Homeheader';
import Homedata from '../components/Homedata';
import separator2 from '../image/separator2.svg'

function Home(){
    return(
        <div className='homeContainer'>
            <Homeheader />
            {/*<img src={separator2} className='homeimg'/>*/}
            <Homedata />
        </div>
    )
}

export default Home;