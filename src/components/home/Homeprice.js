import { React } from 'react';
import '../../stylesheets/home/Homeprice.css';

function Homeprice() {
	return (
		<div className='homepriceContainer'>
			<div className='plan-options'>
				<div className='plan-card'>
					<h3>Emprendimientos</h3>
					<div className='price'>
						<span className='price-dollar'>$</span>
						<h2 className='price-anually'>00.00</h2>
					</div>
					<ul className='plan-features'>
						<li>prueba</li>
						<li>prueba</li>
						<li>prueba</li>
					</ul>
					<button className='action-button'>consultanos</button>
				</div>

				<div className='plan-card card-highlight'>
					<h3>Pymes</h3>
					<div className='price'>
						<span className='price-dollar'>$</span>
						<h2 className='price-anually'>00.00</h2>
					</div>
					<ul className='plan-features'>
						<li>prueba</li>
						<li>prueba</li>
						<li>prueba</li>
					</ul>
					<button className='action-button'>consultanos</button>
				</div>

				<div className='plan-card'>
					<h3>Empresas</h3>
					<div className='price'>
						<span className='price-dollar'>$</span>
						<h2 className='price-anually'>00.00</h2>
					</div>
					<ul className='plan-features'>
						<li>prueba</li>
						<li>prueba</li>
						<li>prueba</li>
					</ul>
					<button className='action-button'>consultanos</button>
				</div>
			</div>
		</div>
	);
}

export default Homeprice;
