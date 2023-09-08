import React from 'react';
import '../../stylesheets/home/Homedata.css';
import Tittles from '../Tittles';
import ServiceItem from '../ServiceItem';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

function Homedata() {
	AOS.init();
	const [t, i18n] = useTranslation('global');

	return (
		<div className='homedataContainer'>
			<div className='homedata'>
				<div className='homedataElement'>
					<Tittles nombre={t('home-services.title')} color='var(--secondaryColor)' />
					<p className='homedataElement_text'>
						{t('home-services.text')}
					</p>
				</div>
				<div className='homedataElement services'>
					<div data-aos='zoom-in' data-aos-once='true'>
						<ServiceItem
							title={t('home-services.titleservice1')}
							paraph={t('home-services.textservice1')}
							img='serv1.svg'
						/>
					</div>
					<div data-aos='zoom-in' data-aos-once='true'>
						<ServiceItem
							title={t('home-services.titleservice2')}
							paraph={t('home-services.textservice2')}
							img='serv2.webp'
						/>
					</div>
					<div data-aos='zoom-in' data-aos-once='true'>
						<ServiceItem
							title={t('home-services.titleservice3')}
							paraph={t('home-services.textservice3')}
							img='serv3.webp'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Homedata;
