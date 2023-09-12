import React from 'react';
import '../stylesheets/pages/Ourbrand.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import bepixelbrand from '../image/ISOTIPO.svg';
import Bepixelsections from '../components/bepixel/Bepixelsections';
import Bepixelmeaning from '../components/bepixel/Bepixelmeaning';
import Bepixelstruct from '../components/bepixel/Bepixelstruct';
import Bepixelbrandversion from '../components/bepixel/Bepixelbrandversion';
import Bepixelconstruction from '../components/bepixel/Bepixelconstruction';
import Bepixelcolors from '../components/bepixel/Bepixelcolors';
import AmbilightVideo from '../components/AmbilightVideo';
import { useTranslation } from 'react-i18next';
import HeaderComponent from '../components/bepixel/HeaderComponent';

function Ourbrand() {
	const [t] = useTranslation('global');
	document.title = 'bepixel | nuestra marca';

	AOS.init();

	return (
		<div className='ourbrandContainer'>
			{/*<header className='ourbrandHeaderContainer'>
				<div className='ourbrandSection1 ContainerGeneral'>
					<div className='ourbrandSection1_1'>
						<img src={bepixelbrand} />
						<p>
							{t('ourbrand.header-text-1')}
						</p>
						<p>
							{t('ourbrand.header-text-2')}
						</p>
					</div>
					<AmbilightVideo />
				</div>
			</header>*/}
			<HeaderComponent img={bepixelbrand} text1={t('ourbrand.header-text-1')} text2={t('ourbrand.header-text-2')} element={<AmbilightVideo />}/>
			<Bepixelsections section={t('ourbrand.titles.meaning')} page={<Bepixelmeaning />} />
			<Bepixelsections section={t('ourbrand.titles.construction')} page={<Bepixelconstruction footer={t('ourbrand.construction-footer')}/>} />
			<Bepixelsections section={t('ourbrand.titles.struct')} page={<Bepixelstruct />} />
			<Bepixelsections
				section={t('ourbrand.titles.brand-version')}
				page={<Bepixelbrandversion />}
			/>
			<Bepixelsections section={t('ourbrand.titles.colors')} page={<Bepixelcolors />} />
		</div>
	);
}

export default Ourbrand;
