import { React } from 'react';
import '../../stylesheets/home/Homeheader.css';
import ButtonCTA from '../ButtonCTA';
import { useTranslation } from 'react-i18next';

function Homeheader() {
	const [t, i18n] = useTranslation('global');

	/*const removelocalstorage = event => {
		window.localStorage.setItem('npopup', true);
	};*/

	return (
		<div className='homeheaderContainer'>
			<div className='homeheaderElements'>
				<div className='homeheaderElement textelement'>
					<div>
						<h2>branding</h2>
						<h2>{t('home-header.textelement1')}</h2>
						<h2>{t('home-header.textelement2')}</h2>
					</div>
					<ButtonCTA
						name={t('home-header.buttoncta')}
						link='https://youtube.com'
					/>
					{/* <button onClick={window.localStorage.setItem('npopup', true)}>hola</button> */}
				</div>
				<div className='homeheaderElement homeheaderimg'></div>
			</div>
			{/* <button onClick={removelocalstorage} >holas</button > */}
		</div>
	);
}

export default Homeheader;
