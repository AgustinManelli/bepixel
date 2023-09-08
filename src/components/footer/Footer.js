import React from 'react';
import Footerfaq from './Footerfaq';
import Footerinfo from './Footerinfo';
import '../../stylesheets/footer/Footer.css';
import logoh from '../../image/LOGOTIPO.svg';
import { BsFillHeartFill } from 'react-icons/bs';
import Languagebtn from '../Languagebtn';

function Footer() {
	return (
		<div className='footerContainer'>
			<div className='footer_mw'>
				<img src={logoh} className='footerlogo' loading='lazy'/>
				<div className='footerElements'>
					<Footerinfo />
					<Footerfaq />
				</div>
			</div>
			<Languagebtn id='buttonlanguage2' />
			<span className='footerspan'>
				made with <BsFillHeartFill className='footerheart' /> by bepixel
			</span>
		</div>
	);
}

export default Footer;
