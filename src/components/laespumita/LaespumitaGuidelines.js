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
			<div id='laespumitaGuidelinesWhyContainer' className='laespumitaGuidelinesWhyContainer'>
				<div className='laespumitaGuideWhytext'>
					<h2>¿Por qué el cambio?</h2>
					<p>
						El problema con la marca "la espumita" y su logo radica en su dificultad de aplicación en bordados, carteles y papelería, lo que afectaba su legibilidad y calidad en distintos formatos. El cliente percibía la marca como antigua, ya que el logo tenía aproximadamente 15 años sin modificaciones. Además, era importante conservar la identidad corporativa y adecuarlo al sector.</p>
					<p>
						El cliente no contaba con su logo vectorizado ni colores corporativos definidos, lo que llevaba a variaciones en las aplicaciones e inconsistencias. Se mantuvo el aro dorado y el azul en la marca, pero se modificaron las burbujas, que resultaban redundantes y causaban problemas en reducciones y a larga distancia.
					</p>
				</div>
				<div className='laespumitaGuideWhyimg'>
					<img src={Laespumitabefore} loading='lazy' alt='La espumita antes'/>
					<img src={Laespumitaafter} loading='lazy' alt='La espumita después'/>
				</div>
			</div>

			<div className='laespumitaGuidelinesVariationContainer'>
				<div className='laespumitaGuidelinesVariation_mw'>
					<img src={Laespumitavariations} loading='lazy' alt='La espumita variaciones de logo'/>
				</div>
			</div>

			<img className='laespumitaShirt' src={Laespumitashirt} alt='La espumita remera'/>

			<div className='laespumitaGuidelinesAplicationsContainer'>
				<div className='laespumitaGuidelinesAplications_mw'>
					<div className='laespumitaGuidelinesAplications'>
						<p>
							Se realizaron stickers nomencladores para colocar sobre productos
							líquidos sueltos, donde el envase no permita diferenciar cual es su contenido.
						</p>
						<img src={Laespumitasticker} loading='lazy' alt='La espumita sticker nomenclador'/>
					</div>
					<img
						src={Laespumitabag}
						className='laespumitaBagIMG'
						loading='lazy'
						alt='La espumita bolsa de compras'
					/>
				</div>
			</div>
		</div>
	);
}

export default LaespumitaGuidelines;
