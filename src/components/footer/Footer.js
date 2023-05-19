import React from 'react';
import Footerfaq from './Footerfaq';
import Footerinfo from './Footerinfo';
import '../../stylesheets/Footer.css'
import logoh from '../../image/LOGOTIPO.svg'

function Footer(){

    return(
        <div className='footerContainer'>
            <img src={logoh} className='footerlogo'/>
            <div className='footerElements'>
                <Footerinfo />
                <Footerfaq />
            </div>
        </div>
    );
}

export default Footer;