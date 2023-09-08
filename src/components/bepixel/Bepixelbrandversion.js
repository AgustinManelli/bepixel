import React from 'react';
import '../../stylesheets/bepixel/Bepixelbrandversion.css';
import bpg1 from '../../image/bepixelguideline/brandversion1.svg';
import bpg2 from '../../image/bepixelguideline/brandversion2.png';

function Bepixelbrandversion() {
	return (
		<div className='bepixelbrandversionContainer'>
			<img src={bpg1} loading='lazy'/>
			<img src={bpg2} loading='lazy'/>
		</div>
	);
}

export default Bepixelbrandversion;
