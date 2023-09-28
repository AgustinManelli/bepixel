import Footerfaq from './Footerfaq';
import Footerinfo from './Footerinfo';
import '../../stylesheets/footer/Footer.css';
import logoh from '../../assets/image/LOGOTIPO.svg';
import { BsFillHeartFill } from 'react-icons/bs';
import StarsNumber from '../api/StarsNumber';
import blurredbg from '../../assets/backgrounds/blurredbg3.jpg';

function Footer() {
	return (
		<footer className='footerContainer'>
			<img className='blurredbg' alt='blurred bg' src={blurredbg} />
			<section className='footer_mw'>
				<img
					src={logoh}
					className='footerlogo'
					loading='lazy'
					alt='bepixel logotype'
				/>
				<div className='footerElements'>
					<Footerinfo />
					<Footerfaq />
				</div>
			</section>
			<section>
				<StarsNumber />
			</section>
			<span className='footerspan'>
				made by <BsFillHeartFill className='footerheart' /> bepixel
			</span>
		</footer>
	);
}

export default Footer;
