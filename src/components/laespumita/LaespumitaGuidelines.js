import React from 'react';
import '../../stylesheets/laespumita/LaespumitaGuidelines.css';
import Laespumitabefore from '../../image/laespumitabefore.webp';
import Laespumitaafter from '../../image/laespumitaafter.svg';
import Laespumitavariations from '../../image/laespumitavariations.svg';
import Laespumitashirt from '../../image/laespumitashirt.webp';
import Laespumitabag from '../../image/laespumitabag.webp';
import Laespumitasticker from '../../image/laespumitasticker.webp';

function LaespumitaGuidelines() {
	return (
		<div className='laespumitaGuidelinesContainer'>
			<div className='laespumitaGuidelinesWhyContainer'>
				<div className='laespumitaGuideWhytext'>
					<h2>¿Por qué el cambio?</h2>
					<p>
						El problema de la marca “la espumita” y su logo radica en que era
						imposible aplicarlo en algunas implementaciones como bordados,
						cartelería y papelería y que quedara bien.<br></br>
						El cliente comentaba que era “ilegible” y que perdía mucha calidad
						al aplicarlo en distintos formatos. También expresó que le
						transmitía la sensación de una marca vieja, teniendo en cuenta que
						su logo se creó hace aproximadamente 15 años y no se le realizó
						ningún tipo de cambio. Agregado a esto, necesitaba no perder tanta
						identificación corporativa en este rediseño y mantenerlo acorde al
						rubro.<br></br>
						El cliente no contaba con su logo vectorizado, tampoco contaba con
						colores corporativos identificados, por lo que en cada aplicación
						los colores no eran siempre los mismos.<br></br>
						Se mantuvo la idea del aro dorado y el azul en la marca, pero se
						cambiaron las burbujas, que aparte de ser muy redundante con la
						marca, generaba problemas al logotipo en reducciones y a larga
						distancia.
					</p>
				</div>
				<div className='laespumitaGuideWhyimg'>
					<img src={Laespumitabefore} loading='lazy'/>
					<img src={Laespumitaafter} loading='lazy'/>
				</div>
			</div>

			<div className='laespumitaGuidelinesVariationContainer'>
				<div className='laespumitaGuidelinesVariation_mw'>
					<img src={Laespumitavariations} loading='lazy'/>
				</div>
			</div>

			<img className='laespumitaShirt' src={Laespumitashirt} />

			<div className='laespumitaGuidelinesAplicationsContainer'>
				<div className='laespumitaGuidelinesAplications_mw'>
					<div className='laespumitaGuidelinesAplications'>
						<p>
							Se realizaron stickers nomencladores para colocar sobre productos
							sueltos donde el envase no permita diferenciar que contenido
							lleva.
						</p>
						<img src={Laespumitasticker} loading='lazy'/>
					</div>
					<img src={Laespumitabag} className='laespumitaBagIMG' loading='lazy'/>
				</div>
			</div>
		</div>
	);
}

export default LaespumitaGuidelines;
