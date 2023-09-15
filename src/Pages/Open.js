import { useTranslation } from 'react-i18next';
import ProyectsHeader from '../components/ProyectsHeader';
import logoOpen from '../image/open/openlogo.svg';
import mug from '../image/open/mug.webp';

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
		</div>
	);
}

export default Open;
