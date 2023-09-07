import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import LaespumitaGuidelines from '../components/laespumita/LaespumitaGuidelines';

function Laespumita() {
	document.title = 'bepixel | la espumita';

	return (
		<div className='laespumitaContainer'>
			<HeaderComponent
				title='la espumita'
				paraph='rediseño de marca para pyme de artículos de limpieza del hogar y automotor'
				logo='laespumita.svg'
			/>
			<LaespumitaGuidelines />
		</div>
	);
}

export default Laespumita;
