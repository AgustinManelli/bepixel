import React from 'react';
import '../../stylesheets/home/Homefaq.css';
import { ReactComponent as Logo } from '../../image/LOGOVERTICALSTROKE.svg';
import Tittles from '../Tittles';
import { useTranslation } from 'react-i18next';

export default function Homefaq() {
	const [t, i18n] = useTranslation('global');
	return (
		<div className='homefaqContainer'>
			<div className='homefaq_mw'>
				<div>
					<Logo className='homefaqLogo' />
				</div>
				<div className='homefaqtext'>
					<Tittles nombre={t('home-faq.title')} color='var(--secondaryColor)' />
					<p>{t('home-faq.text')}</p>
				</div>
			</div>
		</div>
	);
}
