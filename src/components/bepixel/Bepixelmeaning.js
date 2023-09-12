import '../../stylesheets/bepixel/Bepixelmeaning.css';
import bepixel from '../../image/ISOTIPO.svg';
import bpg3 from '../../image/bepixelguideline/bpg3.svg';
import bpg4 from '../../image/bepixelguideline/bpg4.svg';
import bpg5 from '../../image/bepixelguideline/bpg5.svg';
import { useTranslation } from 'react-i18next';


function Bepixelmeaning() {
	const [t] = useTranslation('global');
	return (
		<div className='bepixelmeaningContainer'>
			<img className='bepixelmeaningContainer_logo' src={bepixel} />
			<div className='bepixelmeaning_elementsContainer'>
				<div className='bepixelmeaning_elements'>
					<img src={bpg5} loading='lazy' />
					<p>
						<spand>{t('ourbrand.meaning.element-1-spand')}</spand> {t('ourbrand.meaning.element-1')}
					</p>
				</div>
				<div className='bepixelmeaning_elements'>
					<img src={bpg3} loading='lazy' />
					<p>
						<spand>{t('ourbrand.meaning.element-2-spand')}</spand> {t('ourbrand.meaning.element-2')}
					</p>
				</div>
				<div className='bepixelmeaning_elements'>
					<img src={bpg4} loading='lazy' />
					<p>
						<spand>{t('ourbrand.meaning.element-3-spand')}</spand> {t('ourbrand.meaning.element-3')}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Bepixelmeaning;
