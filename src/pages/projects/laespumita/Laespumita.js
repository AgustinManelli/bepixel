import LaespumitaGuidelines from './LaespumitaGuidelines';
import laespumitalogo from '../../../assets/image/laespumita.svg';
import laespumitaheader from '../../../assets/image/laespumitaheader.webp';
import { useTranslation } from 'react-i18next';
import ProyectsHeader from '../../../components/ProyectsHeader';

function Laespumita() {
	document.title = 'bepixel | la espumita';
	const [t] = useTranslation('global');

	return (
		<div className='laespumitaContainer'>
			<ProyectsHeader
				title='la espumita'
				img={laespumitalogo}
				text1={t('projects.la-espumita.header.text1')}
				text2={t('projects.la-espumita.header.text2')}
				element={laespumitaheader}
				to='laespumitaGuidelinesWhyContainer'
			/>
			<LaespumitaGuidelines />
		</div>
	);
}

export default Laespumita;
