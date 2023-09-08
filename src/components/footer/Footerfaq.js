import React from 'react';
import '../../stylesheets/footer/Footerfaq.css';
import { useTranslation } from 'react-i18next';

function Footerfaq() {
	const [t, i18n] = useTranslation('global');
	return (
		<div className='footerfaqContainer'>
			{/* <img src={logoh} /> */}

			<div className='footerinfoSeparatorContainer'>
				<div className='footerinfoSeparator'></div>
				<p>faq</p>
				<div className='footerinfoSeparator'></div>
			</div>
			<div className='footerinfoText'>
				<h4>{t('footer.footer-faq-title1')}</h4>
				<p>
					{t('footer.footer-faq-text1')}
				</p>
				<h4>{t('footer.footer-faq-title2')}</h4>
				<p>
					{t('footer.footer-faq-text2')}
				</p>
				<a href='/faq'>{t('footer.anchor')}</a>
			</div>
		</div>
	);
}

export default Footerfaq;
