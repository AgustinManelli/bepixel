import React from 'react';
import Footerfaq from './Footerfaq';
import Footerinfo from './Footerinfo';
import '../../stylesheets/Footer.css'
import logoh from '../../image/LOGOTIPO.svg'
import { BsFillHeartFill } from 'react-icons/bs';

function Footer(){

    return(
        <div className='footerContainer'>
            <div className='footer_mw'>
                <img src={logoh} className='footerlogo'/>
                <div className='footerElements'>
                    <Footerinfo />
                    <Footerfaq />
                </div>
                <span>
                    Made with <BsFillHeartFill className='footerheart'/> by bepixel
                </span>
            </div>
        </div>
    );
}

export default Footer;