import Footerfaq from './Footerfaq';
import Footerinfo from './Footerinfo';
import '../../stylesheets/footer/Footer.css';
import logoh from '../../image/LOGOTIPO.svg';
import { BsFillHeartFill } from 'react-icons/bs';
import Languagebtn from '../Languagebtn';

function Footer() {
	return (
		<footer className='footerContainer'>
			<section className='footer_mw'>
				<img src={logoh} className='footerlogo' loading='lazy' />
				<div className='footerElements'>
					<Footerinfo />
					<Footerfaq />
				</div>
			</section>
			<Languagebtn id='buttonlanguage2' />
			<span className='footerspan'>
				made by <BsFillHeartFill className='footerheart' /> bepixel
			</span>
		</footer>
	);
}

export default Footer;
