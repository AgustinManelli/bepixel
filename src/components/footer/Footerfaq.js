import React from 'react';
import '../../stylesheets/footer/Footerfaq.css';

function Footerfaq() {
	return (
		<div className='footerfaqContainer'>
			{/* <img src={logoh} /> */}

			<div className='footerinfoSeparatorContainer'>
				<div className='footerinfoSeparator'></div>
				<p>about</p>
				<div className='footerinfoSeparator'></div>
			</div>
			<div className='footerinfoText'>
				<h4>¿Qué es bepixel?</h4>
				<p>
					En bepixel nos dedicamos a crear las piezas gráficas que tu marca
					necesita, tanto para tus redes, hasta papelería corporativa
				</p>
				<h4>¿De dónde somos?</h4>
				<p>
					Somos de Córdoba, Argentina, Pero trabajamos para toda Argentina y...
					el mundo 👀
				</p>
				<a href='/faq'>Conocé más aquí</a>
			</div>
		</div>
	);
}

export default Footerfaq;
