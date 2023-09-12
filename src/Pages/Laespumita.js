import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import LaespumitaGuidelines from '../components/laespumita/LaespumitaGuidelines';
import laespumitalogo from '../image/laespumita.svg'
import laespumitaheader from '../image/laespumitaheader.webp'
import { useTranslation } from 'react-i18next';
import ProyectsHeader from '../components/ProyectsHeader';

function Laespumita() {
	document.title = 'bepixel | la espumita';
	const [t] = useTranslation('global');

	return (
		<div className='laespumitaContainer'>
			<ProyectsHeader img={laespumitalogo} text1="Rediseño de marca e identificación corporativa para pyme de artículos de limpieza y del hogar. En este trabajo se realizó el rediseño de marca completo manteniendo aspectos distintivos" text2="a continuación se presenta la marca y la justificación de todos los cambios que se realizaron." element={laespumitaheader}/>

			<LaespumitaGuidelines />
		</div>
	);
}

export default Laespumita;
