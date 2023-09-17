import '../stylesheets/pages/Ourbrand.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import bepixelbrand from '../assets/image/ISOTIPO.svg';
import BrandSections from '../components/BrandSections';
import Bepixelstruct from '../components/bepixel/Bepixelstruct';
import Bepixelbrandversion from '../components/bepixel/Bepixelbrandversion';
import Bepixelconstruction from '../components/bepixel/Bepixelconstruction';
import Bepixelcolors from '../components/bepixel/Bepixelcolors';
import AmbilightVideo from '../components/bepixel/AmbilightVideo';
import { useTranslation } from 'react-i18next';
import HeaderComponent from '../components/bepixel/HeaderComponent';
import MeaningSection from '../components/MeaningSection'
import bpg3 from '../assets/image/bepixelguideline/bpg3.svg';
import bpg4 from '../assets/image/bepixelguideline/bpg4.svg';
import bpg5 from '../assets/image/bepixelguideline/bpg5.svg';
import businesscard from '../assets/image/bepixelguideline/bussinescard.webp'

function Ourbrand() {
	const [t] = useTranslation('global');
	document.title = 'bepixel | nuestra marca';

	AOS.init();

	return (
		<div className='ourbrandContainer'>
			<HeaderComponent
				img={bepixelbrand}
				text1={t('ourbrand.header-text-1')}
				text2={t('ourbrand.header-text-2')}
				element={<AmbilightVideo />}
			/>
			<BrandSections
				section={t('ourbrand.titles.meaning')}
				page={<MeaningSection logo={bepixelbrand} title1={t('ourbrand.meaning.element-1-spand')} text1={t('ourbrand.meaning.element-1')} title2={t('ourbrand.meaning.element-2-spand')} text2={t('ourbrand.meaning.element-2')} title3={t('ourbrand.meaning.element-3-spand')} text3={t('ourbrand.meaning.element-3')} asset1={bpg5} asset2={bpg3} asset3={bpg4}/>}
				logo={bepixelbrand}
			/>
			<BrandSections
				section={t('ourbrand.titles.construction')}
				page={
					<Bepixelconstruction footer={t('ourbrand.construction-footer')} />
				}
				logo={bepixelbrand}
			/>
			<BrandSections
				section={t('ourbrand.titles.struct')}
				page={<Bepixelstruct />}
				logo={bepixelbrand}
			/>
			<BrandSections
				section={t('ourbrand.titles.brand-version')}
				page={<Bepixelbrandversion />}
				logo={bepixelbrand}
			/>
			<BrandSections
				section={t('ourbrand.titles.colors')}
				page={<Bepixelcolors />}
				logo={bepixelbrand}
			/>
			<BrandSections
				section={t('ourbrand.titles.businesscard')}
				page={
					<img src={businesscard} style={{width:'100%', marginTop: '50px'}}/>
				}
				logo={bepixelbrand}
			/>
		</div>
	);
}

export default Ourbrand;
