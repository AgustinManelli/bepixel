import React from 'react';
import '../../stylesheets/bepixel/Bepixelsections.css';
import bepixel from '../../image/ISOTIPO.svg';

function Bepixelsections(props) {
	return (
		<section className='bepixelsectionsContainer'>
			<div className='bepixelsections_i'>
				<div className='bepixelsections_nomenclator'>
					<img src={bepixel} loading='lazy' />
					<p> {props.section} </p>
				</div>
				{props.page}
			</div>
		</section>
	);
}

export default Bepixelsections;
