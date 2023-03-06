import {React, useEffect} from 'react';
import '../stylesheets/Homeheader.css'
import logo from '../image/OPENLOGO.svg'
import modal from '../image/modal.svg'
import metric from '../image/head.webp'
import wave from '../image/wave.svg'
import WaveComp from './WaveComp';
import HeaderPic from './HeaderPic';


function Homeheader(){

    return(
        <div className='homeheaderContainer'>
            {/*<img src={wave} className='waveHeader'></img>*/}
            <WaveComp className='waveHeader'/>

            <div className='homeheaderElements'>
                <div className='homeheaderElement textelement'>
                    <h1>IMPULSÁ TU MARCA<span className='headerRocket'>🚀</span></h1>
                    <p>Creamos los elementos gráficos necesarios para tu marca. <br/> Empezá tu emprendimiento como se debe</p>
                    <a href='https://youtube.com' target='_blank'><button className="custom-btn btn-5">EMPEZÁ YA</button></a>
                </div>
                <div className='homeheaderElement'>
                    <HeaderPic className='headerimg' data-aos="zoom-in" data-aos-once="true"/>
                    {/*<img src={metric} draggable="false" className='headerimg' data-aos="zoom-in" data-aos-once="true"/>*/}
                </div>
            </div>
        </div>
    );
}

export default Homeheader;