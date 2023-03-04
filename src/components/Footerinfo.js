import React from 'react';
import logo from '../image/OPENLOGO.svg'
import logoh from '../image/OPENLOGOH.svg'
import { FaInstagram, FaFacebook, FaRegEnvelope, FaPhoneSquareAlt, FaMapMarkerAlt  } from "react-icons/fa";
import '../stylesheets/Footerinfo.css'

function Footerinfo(){

    return(
        <div className='footerinfoContainer'>
            {/*<img src={logoh} />*/}

            <div className='footerinfoSeparatorContainer'>
                <div className='footerinfoSeparator'></div>
                <p>CONTACTO</p>
                <div className='footerinfoSeparator'></div>
            </div>
            
            <ul className='footerinfoUl'>
                <li className='footerinfoLi'>
                    <FaMapMarkerAlt className='footerinfoIcon'/>
                    <p>Río Tercero</p>
                </li>
                <li className='footerinfoLi'>
                    <FaPhoneSquareAlt className='footerinfoIcon'/>
                    <p>+54 (3571) 123456</p>
                </li >
                <li className='footerinfoLi'>
                    <FaRegEnvelope className='footerinfoIcon'/>
                    <p>open.design@gmail.com</p>
                </li>
                <li className='footerinfoLi'>
                    <FaInstagram className='footerinfoIcon'/>
                    <p>/open.design</p>
                </li>
                <li className='footerinfoLi'>
                    <FaFacebook className='footerinfoIcon'/>
                    <p>/open.design</p>
                </li>
            </ul>
        </div>
    );
}

export default Footerinfo;