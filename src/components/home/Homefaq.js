import React from 'react';
import '../../stylesheets/Homefaq.css';
import { ReactComponent as Logo } from '../../image/LOGOVERTICALSTROKE.svg';
import Tittles from '../Tittles';

export default function Homefaq() {
	return (
		<div className='homefaqContainer'>
			<div className='homefaq_mw'>
				<div>
					<Logo className='homefaqLogo' />
				</div>
				<div className='homefaqtext'>
					<Tittles nombre='sobre nosotros' color='var(--secondaryColor)' />
					<p>
						Somos bepixel, una agencia de diseño gráfico de Córdoba, Argentina
						dedicada a transformar conceptos en piezas visuales extraordinarias.
						Nuestra pasión es plasmar la creatividad en cada proyecto, creando
						identidades visuales impactantes.
					</p>
				</div>
			</div>
		</div>
	);
}
