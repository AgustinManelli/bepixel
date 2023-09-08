import React from 'react';
import {
	FaInstagram,
	FaFacebook,
	FaRegEnvelope,
	FaPhoneSquareAlt,
	FaMapMarkerAlt,
} from 'react-icons/fa';
import '../../stylesheets/footer/Footerinfo.css';

function Footerinfo() {
	return (
		<div className='footerinfoContainer'>
			<div className='footerinfoSeparatorContainer'>
				<div className='footerinfoSeparator'></div>
				<p>contacto</p>
				<div className='footerinfoSeparator'></div>
			</div>

			<ul className='footerinfoUl'>
				<li className='footerinfoLi'>
					<FaMapMarkerAlt className='footerinfoIcon' />
					<p>río tercero</p>
				</li>
				<li className='footerinfoLi'>
					<FaPhoneSquareAlt className='footerinfoIcon' />
					<p>+54(3571)534631</p>
				</li>
				<li className='footerinfoLi'>
					<FaRegEnvelope className='footerinfoIcon' />
					<p>bepixelarg@gmail.com</p>
				</li>
				<li className='footerinfoLi'>
					<FaInstagram className='footerinfoIcon' />
					<p>/bepixelarg</p>
				</li>
				<li className='footerinfoLi'>
					<FaFacebook className='footerinfoIcon' />
					<p>/bepixelarg</p>
				</li>
			</ul>
		</div>
	);
}

export default Footerinfo;
