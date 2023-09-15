import '../../stylesheets/laespumita/LaespumitaGuidelines.css';
import Laespumitabefore from '../../image/laespumitabefore.webp';
import Laespumitaafter from '../../image/laespumitaafter.svg';
import Laespumitavariations from '../../image/laespumitavariations.svg';
import Laespumitashirt from '../../image/laespumitashirt.webp';
import Laespumitabag from '../../image/laespumitabag.webp';
import Laespumitasticker from '../../image/laespumitasticker.webp';
import { useTranslation } from 'react-i18next';

function LaespumitaGuidelines() {
	const [t] = useTranslation('global');
	return (
		<div className='laespumitaGuidelinesContainer'>
			<div
				id='laespumitaGuidelinesWhyContainer'
				className='laespumitaGuidelinesWhyContainer'
			>
				<div className='laespumitaGuideWhytext'>
					<h2>{t('projects.la-espumita.body.why.title')}</h2>
					<p>
						{t('projects.la-espumita.body.why.text1')}
					</p>
					<p>
						{t('projects.la-espumita.body.why.text2')}
					</p>
				</div>
				<div className='laespumitaGuideWhyimg'>
					<img src={Laespumitabefore} loading='lazy' alt='La espumita antes' />
					<img src={Laespumitaafter} loading='lazy' alt='La espumita después' />
				</div>
			</div>

			<div className='laespumitaGuidelinesVariationContainer'>
				<div className='laespumitaGuidelinesVariation_mw'>
					<img
						src={Laespumitavariations}
						loading='lazy'
						alt='La espumita variaciones de logo'
					/>
				</div>
			</div>

			<img
				className='laespumitaShirt'
				src={Laespumitashirt}
				alt='La espumita remera'
			/>

			<div className='laespumitaGuidelinesAplicationsContainer'>
				<div className='laespumitaGuidelinesAplications_mw'>
					<div className='laespumitaGuidelinesAplications'>
						<p>
							{t('projects.la-espumita.body.label')}
						</p>
						<img
							src={Laespumitasticker}
							loading='lazy'
							alt='La espumita sticker nomenclador'
						/>
					</div>
					<img
						src={Laespumitabag}
						className='laespumitaBagIMG'
						loading='lazy'
						alt='La espumita bolsa de compras'
					/>
				</div>
			</div>
		</div>
	);
}

export default LaespumitaGuidelines;
