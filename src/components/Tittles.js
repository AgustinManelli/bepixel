import React from 'react';
import '../stylesheets/Tittles.css';

function Tittles(props) {
	return (
		<div className='titleContainer'>
			<div className='titlElement'>
				<h2>{props.nombre}</h2>
				<svg className='titleUnderline' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 777.6 43.2"><rect x="756" width="21.6" height="21.6"/><path d="M928.8,432v21.6H907.2v21.6H237.6a21.6,21.6,0,1,1,0-43.2H842.4v21.6H864V432Z" transform="translate(-216 -432)"/><rect x="712.8" y="21.6" width="21.6" height="21.6"/></svg>
			</div>
		</div>
	);
}

export default Tittles;
