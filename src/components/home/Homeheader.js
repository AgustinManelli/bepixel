import { React } from 'react';
import '../../stylesheets/home/Homeheader.css';
import { useTranslation } from 'react-i18next';
import ScrolldownArrow from '../ScrolldownArrow';

function Homeheader() {
	const [t] = useTranslation('global');

	return (
		<header className='homeheaderElements'>
			<ScrolldownArrow to='homefaq'/>
			<div className='homeheaderElement'>
				<div className='homeheaderElement_1 textelement'>
					<div>
						<h2>branding</h2>
						<h2>{t('home-header.textelement1')}</h2>
						<h2>{t('home-header.textelement2')}</h2>
					</div>
					<p>{t('home-header.textelement3')}</p>
				</div>
			</div>
			<div className='homeheaderimg'></div>
		</header>
	);
}

export default Homeheader;
