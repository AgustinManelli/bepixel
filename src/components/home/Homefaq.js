import '../../stylesheets/home/Homefaq.css';
import { ReactComponent as Logo } from '../../assets/image/LOGOVERTICALSTROKE.svg';
import Tittles from '../Tittles';
import { useTranslation } from 'react-i18next';

export default function Homefaq() {
	const [t] = useTranslation('global');
	return (
		<section className='homefaqContainer' id='homefaq'>
			<div className='homefaq_mw ContainerGeneral'>
				<div className='videoLogoContainer'>
					<Logo className='homefaqLogo' />
				</div>
				<div className='homefaqtext'>
					<Tittles nombre={t('home-faq.title')} color='var(--secondaryColor)' />
					<p>{t('home-faq.text')}</p>
				</div>
			</div>
		</section>
	);
}
