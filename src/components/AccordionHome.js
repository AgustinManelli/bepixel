import React from 'react';
import '../stylesheets/AccordionHome.css';
import Accordion from '../components/Accordion.js';
import Tittles from './Tittles';
import { useTranslation } from 'react-i18next';

function AccordionHome() {
	const [t, i18n] = useTranslation('global');
	return (
		<div className='accordionHomeContainer'>
			<div className='accordionHome_mw ContainerGeneral'>
				<div className='accordionHome_0'>
					<Tittles nombre={t('home-faqs.title')} color='var(--secondaryColor)' />
					<p>{t('home-faqs.text')}</p>
				</div>
				<div className='accordionHome_1'>
					<Accordion
						title={t('home-faqs.accordion1-title')}
						content={t('home-faqs.accordion1-text')}
					/>
					<Accordion
						title={t('home-faqs.accordion2-title')}
						content={t('home-faqs.accordion2-text')}
					/>
					<Accordion
						title={t('home-faqs.accordion3-title')}
						content={t('home-faqs.accordion3-text')}
					/>
					<Accordion
						title={t('home-faqs.accordion4-title')}
						content={t('home-faqs.accordion4-text')}
					/>
				</div>
			</div>
		</div>
	);
}

export default AccordionHome;
