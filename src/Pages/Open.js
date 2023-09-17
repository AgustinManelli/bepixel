import { useTranslation } from 'react-i18next';
import ProyectsHeader from '../components/ProyectsHeader';
import logoOpen from '../assets/image/open/openlogo.svg';
import asset1 from '../assets/image/open/asset1.svg';
import asset2 from '../assets/image/open/asset2.svg';
import asset3 from '../assets/image/open/asset3.svg';
import mug from '../assets/image/open/mug.webp';
import BrandSections from '../components/BrandSections'
import MeaningSection from '../components/MeaningSection';


function Open() {
	document.title = 'bepixel | open';
	const [t] = useTranslation('global');

	return (
		<div>
			<ProyectsHeader
				title='open'
				img={logoOpen}
				text1='"open" es una agencia de marketing y publicidad, en este proyecto se realizó toda la identificación marcaria desde cero.'
				text2=''
				element={mug}
				to=''
			/>
			<BrandSections
				section='significados'
				page={<MeaningSection logo={logoOpen} title1="Semicírculo:" text1="Respresenta el mundo y como 'open' comunica sus ideas." title2="Ojos guiñando:" text2="Respresenta compañerismo amistad y empatía." title3="Isotipo:" text3="En conjunto, al mostrarse una
				mitad de cara, representa la apertura a ideas y la escucha a nuestros clientes." asset1={asset1} asset2={asset2} asset3={asset3}/>}
				logo={logoOpen}
			/>
		</div>
	);
}

export default Open;
