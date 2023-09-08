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

function Ourbrand() {
	document.title = 'bepixel | nuestra marca';

	AOS.init();

	return (
		<div className='ourbrandContainer'>
			<header className='ourbrandSection_mw'>
				<div className='ourbrandSection1_1'>
					<img src={bepixelbrand} />
					<p>
						"bepixel" es una combinación de dos palabras: "be", que viene del
						inglés "ser", y "pixel", que es una referencia al diseño gráfico y
						la tecnología. Juntos, estos términos crean una marca moderna y
						relevante que refleja la especialidad de la empresa en diseño y
						marketing digital.<br></br>
						<br></br>
						Esta presentación tiene como objetivo mostrar parte de nuestro
						trabajo y la calidad de nuestros proyectos.
					</p>
				</div>
			</header>
			<Bepixelsections section='significados' page={<Bepixelmeaning />} />
			<Bepixelsections section='construcción' page={<Bepixelconstruction />} />
			<Bepixelsections section='estructura' page={<Bepixelstruct />} />
			<Bepixelsections
				section='versiones de marca'
				page={<Bepixelbrandversion />}
			/>
			<Bepixelsections section='colores' page={<Bepixelcolors />} />
		</div>
	);
}

export default Ourbrand;
