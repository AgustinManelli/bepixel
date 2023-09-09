import React from 'react';
import '../../stylesheets/bepixel/Bepixelmeaning.css';
import bepixel from '../../image/ISOTIPO.svg';
import bpg3 from '../../image/bepixelguideline/bpg3.svg';
import bpg4 from '../../image/bepixelguideline/bpg4.svg';
import bpg5 from '../../image/bepixelguideline/bpg5.svg';

function Bepixelmeaning() {
	return (
		<div className='bepixelmeaningContainer'>
			<img className='bepixelmeaningContainer_logo' src={bepixel} />
			<div className='bepixelmeaning_elementsContainer'>
				<div className='bepixelmeaning_elements'>
					<img src={bpg5} loading='lazy' />
					<p>
						<b>letra b:</b> representa la inicial de bepixel, una construcción
						redondeada permite una armonía visual, conbinado con cortes rectos,
						simbolizando la parte digital.
					</p>
				</div>
				<div className='bepixelmeaning_elements'>
					<img src={bpg3} loading='lazy' />
					<p>
						<b>píxel: </b>pixel desconectando parte de la letra b, simboliza la
						estructura de la cuadrícula de los píxeles, que son la base de todas
						las imágenes digitales y de la mayoría de los diseños gráficos.
					</p>
				</div>
				<div className='bepixelmeaning_elements'>
					<img src={bpg4} loading='lazy' />
					<p>
						<b>Sonrisa:</b> transmite emociones positivas, comunica valores,
						conecta nuestro servicios con el lado felíz de los proyectos.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Bepixelmeaning;
